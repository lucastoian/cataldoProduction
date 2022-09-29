/** */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '@eshop-frontend/users';
import { KlarnaComponent } from '@eshop-frontend/users';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { CartService } from '../../services/cart.service';
import { Order } from '../../models/order';
import { CheckoutService } from '../../services/checkout.service';
import { User } from '../../models/user';
import { loadStripe } from '@stripe/stripe-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@eshop-frontend/users";
import * as i3 from "@angular/forms";
import * as i4 from "../../services/cart.service";
import * as i5 from "../../services/orders.service";
import * as i6 from "primeng/api";
import * as i7 from "../../services/checkout.service";
export class okKlarnaPayment {
    constructor(router, usersService, formBuilder, cartService, ordersService, messageService, checkout, kc) {
        this.router = router;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.messageService = messageService;
        this.checkout = checkout;
        this.kc = kc;
        this.isSubmitted = false;
        this.orderItems = [];
        this.countries = [];
        this.unsubscribe$ = new Subject();
        this.paymentHandler = null;
        this.success = false;
        this.failure = false;
        this.router2 = this.router;
        okKlarnaPayment.user = new User;
    }
    async ngOnInit() {
        await this.initStripeElements();
        let SOURCE_ID = localStorage.getItem("SOURCE_ID");
        let CLIENT_SECRET = localStorage.getItem("CLIENT_SECRET");
        console.log("SOURCE ID = " + SOURCE_ID);
        console.log("CLIENT_SECRET =  " + CLIENT_SECRET);
        let MAX_POLL_COUNT = 1000;
        let pollCount = 0;
        let amount = Number(localStorage.getItem("amount"));
        console.log("inizializzo ok klarna payment");
        const modal = document.querySelector(".modal");
        modal.classList.add("show");
        modal.style.display = "block";
        document.getElementById("closeModal").addEventListener('click', () => {
            modal.classList.remove("show");
            modal.style.display = "none";
            document.getElementById('page-mask').style.display = "none";
        });
        // await okKlarnaPayment.klarnaPayment();
        okKlarnaPayment.pollForSourceStatus(SOURCE_ID, CLIENT_SECRET, MAX_POLL_COUNT, pollCount, amount);
        /*
         localStorage.removeItem("clientId");
         localStorage.removeItem("amount");
         localStorage.removeItem("SOURCE_ID");
         localStorage.removeItem("CLIENT_SECRET");
         */
    }
    async initStripeElements() {
        okKlarnaPayment.stripe = await loadStripe('pk_test_51LYUCGDEyiX3e3Pl89jqmVg1gTN2QhifywtIlg6Az1niGUV3ANRpANXJ8hdEIjwDNa8GTBvnrxq3zgdR8gEzxgRT00uHlftQnF', null);
    }
    static pollForSourceStatus(SOURCE_ID, CLIENT_SECRET, MAX_POLL_COUNT, pollCount, amount) {
        okKlarnaPayment.stripe.retrieveSource({ id: SOURCE_ID, client_secret: CLIENT_SECRET }).then(function (result) {
            var source = result.source;
            if (source.status === 'chargeable') {
                // Make a request to your server to charge the Source.
                // Depending on the Charge status, show your customer the relevant message
                //qui va creato il nuovo ordine                                                     
                okKlarnaPayment.klarnaPayment(SOURCE_ID, amount);
                console.log("chargable");
            }
            else if (source.status === 'pending' && pollCount < MAX_POLL_COUNT) {
                // Try again in a second, if the Source is still `pending`:
                // KlarnaComponent.klarnaPayment(SOURCE_ID, amount);
                console.log("pending");
                pollCount += 1;
                setTimeout(() => okKlarnaPayment.pollForSourceStatus(SOURCE_ID, CLIENT_SECRET, MAX_POLL_COUNT, pollCount, amount), 1000);
            }
            else {
                // Depending on the Source status, show your customer the relevant message.
            }
        });
    }
    static async klarnaPayment(clientId, amount) {
        const url = 'https://cataldoproduction.herokuapp.com/api/v1/' + "charge-source";
        const newOrderurl = 'https://cataldoproduction.herokuapp.com/api/v1/orders/' + "createNewOrder";
        console.log("sto cercando di chiamare il server su questo url : " + url);
        console.log("come clientId ho questo: " + localStorage.getItem("clientId"));
        console.log("come amount ho questo: " + localStorage.getItem("amount"));
        try {
            // 👇️ const response: Response
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    sourceId: clientId,
                    amount: amount,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            if (response.ok) {
                //aggiungo l'ordine
                let obj = JSON.parse(localStorage.getItem("order"));
                let order = new Order;
                order.city = obj.city;
                order.country = obj.country;
                order.dateOrdered = obj.dateOrdered;
                order.phone = obj.phone;
                order.shippingAddress1 = obj.address1;
                order.totalPrice = obj.totalPrice;
                order.zip = obj.postalCode;
                order.user = obj.userId;
                order.id = null;
                order.orderItems = obj.orderItems;
                console.log("ho generato questo ordine: " + JSON.stringify(order));
                try {
                    const response = await fetch(newOrderurl, {
                        method: 'POST',
                        body: JSON.stringify({
                            order: JSON.parse(localStorage.getItem("order")),
                            email: "emailacaso@gmail.com",
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                        },
                    });
                    document.getElementById("closeModalFooter").style.display = "block";
                    document.getElementById("loadingSpinner").style.display = "none";
                    if (response.ok) {
                        console.log("ho generato l'ordine");
                        const orderId = await response.json();
                        console.log("orderId = " + JSON.stringify(orderId));
                        document.getElementById("exampleModalLabel").innerText = "Your order number is: " + orderId['_id'];
                        //  okKlarnaPayment.router2.navigate(['http://localhost:4200/#/orders/' + orderId['_id']]);
                        window.location.replace('https://cataldoproduction.herokuapp.com/#/orders/' + orderId['_id']);
                    }
                    ;
                }
                catch (e) {
                    console.log("ho ricevuto il pagamento ma non sonoo riuscito a generare l'ordine");
                }
                // let order = (Order) JSON.parse(localStorage.getItem("order"));
            }
            else {
                console.log("non ho generato niente");
            }
        }
        catch (error) {
            console.log('error message: ', error.message);
            localStorage.removeItem("sourceId");
        }
        localStorage.removeItem("sourceId");
    }
}
okKlarnaPayment.ɵfac = function okKlarnaPayment_Factory(t) { return new (t || okKlarnaPayment)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UsersService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.CartService), i0.ɵɵdirectiveInject(i5.OrdersService), i0.ɵɵdirectiveInject(i6.MessageService), i0.ɵɵdirectiveInject(i7.CheckoutService), i0.ɵɵdirectiveInject(i2.KlarnaComponent)); };
okKlarnaPayment.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: okKlarnaPayment, selectors: [["ok-klarna"]], features: [i0.ɵɵProvidersFeature([KlarnaComponent])], decls: 26, vars: 0, consts: [[1, "col-12", "col-md-5", "col-lg-5"], ["id", "page-mask", 2, "display", "none"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "border", "border-info"], [1, "modal-dialog", "border", "border-info", "border-4", "rounded"], [1, "modal-content"], [1, "modal-header"], [1, "row"], [1, "col-auto"], [1, "d-flex", "justify-content-center"], ["id", "loadingSpinner", "role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col"], ["id", "exampleModalLabel", 1, "modal-title"], ["id", "closeModal", "type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["id", "modalBody", 1, "modal-body"], ["id", "success", 1, "text-success", 2, "font-weight", "800", "display", "none"], ["id", "failed", 1, "text-danger", 2, "font-weight", "800", "display", "none"], [1, "modal-footer"], ["id", "closeModalFooter", 1, "text-secondary", 2, "font-size", "smaller", "display", "none"]], template: function okKlarnaPayment_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "validating klarna transaction...");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 0);
        i0.ɵɵelement(3, "div", 1);
        i0.ɵɵelementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "span", 10);
        i0.ɵɵtext(13, "Loading...");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(14, "div", 11)(15, "h5", 12);
        i0.ɵɵtext(16, "We are validating your transaction, please wait");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelement(17, "button", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "div", 14)(19, "div", 15);
        i0.ɵɵtext(20, " Transaction succesfull!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 16);
        i0.ɵɵtext(22, " Transaction failed!");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(23, "div", 17)(24, "div", 18);
        i0.ɵɵtext(25, " Now you can close this modal");
        i0.ɵɵelementEnd()()()()()();
    } }, styles: ["#page-mask[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);position:fixed;top:0;right:0;bottom:0;left:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(okKlarnaPayment, [{
        type: Component,
        args: [{ selector: 'ok-klarna', styles: [`#page-mask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }`], providers: [KlarnaComponent], template: "<p>validating klarna transaction...</p>\n<div class=\"col-12 col-md-5 col-lg-5\">\n\n    <div id=\"page-mask\" style=\"display: none;\"></div>\n\n      <!-- Modal -->\n      <div class=\"modal fade border border-info\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog border border-info border-4 rounded\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <div class=\"row\">\n                <div class=\"col-auto \" >\n                  <div class=\"d-flex justify-content-center\">\n                    <div id=\"loadingSpinner\" class=\"spinner-border text-primary\" role=\"status\">\n                      <span class=\"visually-hidden\">Loading...</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\"><h5 class=\"modal-title\" id=\"exampleModalLabel\">We are validating your transaction, please wait</h5></div>\n              </div>\n\n\n              <button id=\"closeModal\" type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div id=\"modalBody\" class=\"modal-body\">\n              <div id=\"success\" class=\"text-success\" style=\"font-weight: 800; display: none;\"> Transaction succesfull!</div>\n              <div id=\"failed\" class=\"text-danger\" style=\"font-weight: 800; display: none;\"> Transaction failed!</div>\n\n            </div>\n            <div class=\"modal-footer\">\n              <div id=\"closeModalFooter\" class=\"text-secondary\" style=\"font-size:smaller; display: none;\"> Now you can close this modal</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }, { type: i7.CheckoutService }, { type: i2.KlarnaComponent }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tLbGFybmFQYXltZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUcsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7O0FBaUIvQyxNQUFNLE9BQU8sZUFBZTtJQU8xQixZQUFvQixNQUFjLEVBQ3hCLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hC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QUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlcjIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXIyMyc7XG4vKiogKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7ICBVc2Vyc1NlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgS2xhcm5hQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJ1xuXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXItaXRlbSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlcic7XG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XG5pbXBvcnQgeyBKc29uUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29rLWtsYXJuYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9va0tsYXJuYVBheW1lbnQuaHRtbCcsXG4gIHN0eWxlczogW2AjcGFnZS1tYXNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgfWBdLFxuICBwcm92aWRlcnM6IFtLbGFybmFDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3Mgb2tLbGFybmFQYXltZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBlcnJvck1lc3NhZ2U6IGJvb2xlYW47XG4gIGVycm9ybWVzc2FnZTogU3RyaW5nW107XG4gIHN0YXRpYyBzdHJpcGU7XG4gIHN0YXRpYyByb3V0ZXIyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0OiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBrYyA6IEtsYXJuYUNvbXBvbmVudCxcblxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBva0tsYXJuYVBheW1lbnQudXNlciA9IG5ldyBVc2VyO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY2hlY2tvdXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSBbXTtcbiAgICAgICAgICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgIGNvdW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICAgICAgICAgcGF5bWVudEhhbmRsZXI6IGFueSA9IG51bGw7XG4gICAgICAgICAgICAgICBzdWNjZXNzOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICBmYWlsdXJlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgIHN0YXRpYyB1c2VyOiBVc2VyO1xuICAgICAgICAgICAgICAgc3RhdGljIGNhcnQgOiBDYXJ0O1xuICAgICAgICAgICAgICAgc3RhdGljIGRhdGE7XG4gICAgICAgICAgICAgICByb3V0ZXIyID0gdGhpcy5yb3V0ZXI7XG5cblxuXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgYXdhaXQgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcblxuXG5cbiAgICBsZXQgU09VUkNFX0lEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJTT1VSQ0VfSURcIik7XG4gICAgbGV0IENMSUVOVF9TRUNSRVQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkNMSUVOVF9TRUNSRVRcIik7XG5cbiAgICBjb25zb2xlLmxvZyhcIlNPVVJDRSBJRCA9IFwiICsgU09VUkNFX0lEKTtcbiAgICBjb25zb2xlLmxvZyhcIkNMSUVOVF9TRUNSRVQgPSAgXCIgKyBDTElFTlRfU0VDUkVUKTtcbiAgICBsZXQgTUFYX1BPTExfQ09VTlQgPSAxMDAwO1xuICAgIGxldCBwb2xsQ291bnQgPSAwO1xuICAgIGxldCBhbW91bnQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIikpO1xuICAgIFxuXG5cblxuICAgIGNvbnNvbGUubG9nKFwiaW5pemlhbGl6em8gb2sga2xhcm5hIHBheW1lbnRcIik7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW1hc2snKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG4gICBcblxuICAgICAvLyBhd2FpdCBva0tsYXJuYVBheW1lbnQua2xhcm5hUGF5bWVudCgpO1xuICAgICBva0tsYXJuYVBheW1lbnQucG9sbEZvclNvdXJjZVN0YXR1cyhTT1VSQ0VfSUQsQ0xJRU5UX1NFQ1JFVCxNQVhfUE9MTF9DT1VOVCwgcG9sbENvdW50LCBhbW91bnQpO1xuICAgIC8qXG4gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2xpZW50SWRcIik7XG4gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYW1vdW50XCIpOyAgICBcbiAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJTT1VSQ0VfSURcIik7XG4gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiQ0xJRU5UX1NFQ1JFVFwiKTsgICBcbiAgICAgKi8gICAgIFxuXG4gIH1cbiAgYXN5bmMgaW5pdFN0cmlwZUVsZW1lbnRzKCl7XG4gICAgb2tLbGFybmFQYXltZW50LnN0cmlwZSA9IGF3YWl0IGxvYWRTdHJpcGUoJ3BrX3Rlc3RfNTFMWVVDR0RFeWlYM2UzUGw4OWpxbVZnMWdUTjJRaGlmeXd0SWxnNkF6MW5pR1VWM0FOUnBBTlhKOGhkRUlqd0ROYThHVEJ2bnJ4cTN6Z2RSOGdFenhnUlQwMHVIbGZ0UW5GJywgbnVsbCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcG9sbEZvclNvdXJjZVN0YXR1cyhTT1VSQ0VfSUQsQ0xJRU5UX1NFQ1JFVCxNQVhfUE9MTF9DT1VOVCwgcG9sbENvdW50LCBhbW91bnQpe1xuICAgICAgb2tLbGFybmFQYXltZW50LnN0cmlwZS5yZXRyaWV2ZVNvdXJjZSh7aWQ6IFNPVVJDRV9JRCwgY2xpZW50X3NlY3JldDogQ0xJRU5UX1NFQ1JFVH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSByZXN1bHQuc291cmNlO1xuICAgICAgICBpZiAoc291cmNlLnN0YXR1cyA9PT0gJ2NoYXJnZWFibGUnKSB7XG4gICAgICAgICAgLy8gTWFrZSBhIHJlcXVlc3QgdG8geW91ciBzZXJ2ZXIgdG8gY2hhcmdlIHRoZSBTb3VyY2UuXG4gICAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBDaGFyZ2Ugc3RhdHVzLCBzaG93IHlvdXIgY3VzdG9tZXIgdGhlIHJlbGV2YW50IG1lc3NhZ2VcbiAgICAgICAgICAvL3F1aSB2YSBjcmVhdG8gaWwgbnVvdm8gb3JkaW5lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG4gICAgICAgICAgb2tLbGFybmFQYXltZW50LmtsYXJuYVBheW1lbnQoU09VUkNFX0lELCBhbW91bnQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmdhYmxlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdwZW5kaW5nJyAmJiBwb2xsQ291bnQgPCBNQVhfUE9MTF9DT1VOVCkge1xuICAgICAgICAgIC8vIFRyeSBhZ2FpbiBpbiBhIHNlY29uZCwgaWYgdGhlIFNvdXJjZSBpcyBzdGlsbCBgcGVuZGluZ2A6XG4gICAgICAgICAvLyBLbGFybmFDb21wb25lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJwZW5kaW5nXCIpO1xuICAgICAgICAgIHBvbGxDb3VudCArPSAxO1xuICAgICAgICAgc2V0VGltZW91dCgoKT0+b2tLbGFybmFQYXltZW50LnBvbGxGb3JTb3VyY2VTdGF0dXMoU09VUkNFX0lELENMSUVOVF9TRUNSRVQsTUFYX1BPTExfQ09VTlQsIHBvbGxDb3VudCwgYW1vdW50KSwgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBTb3VyY2Ugc3RhdHVzLCBzaG93IHlvdXIgY3VzdG9tZXIgdGhlIHJlbGV2YW50IG1lc3NhZ2UuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICBzdGF0aWMgYXN5bmMga2xhcm5hUGF5bWVudChjbGllbnRJZCwgYW1vdW50KXtcblxuXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vY2F0YWxkb3Byb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvJyArIFwiY2hhcmdlLXNvdXJjZVwiXG4gICAgY29uc3QgbmV3T3JkZXJ1cmwgPSAnaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tL2FwaS92MS9vcmRlcnMvJyArIFwiY3JlYXRlTmV3T3JkZXJcIlxuXG4gICAgY29uc29sZS5sb2coXCJzdG8gY2VyY2FuZG8gZGkgY2hpYW1hcmUgaWwgc2VydmVyIHN1IHF1ZXN0byB1cmwgOiBcIiArIHVybCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImNvbWUgY2xpZW50SWQgaG8gcXVlc3RvOiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2xpZW50SWRcIikpO1xuICAgIGNvbnNvbGUubG9nKFwiY29tZSBhbW91bnQgaG8gcXVlc3RvOiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyDwn5GH77iPIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBzb3VyY2VJZDogY2xpZW50SWQsXG4gICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgXG5cbiAgICAgIGlmKHJlc3BvbnNlLm9rKXtcblxuICBcblxuICAgICAgICAvL2FnZ2l1bmdvIGwnb3JkaW5lXG4gICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJcIikpO1xuICAgICAgICBsZXQgb3JkZXIgPSBuZXcgT3JkZXI7XG4gICAgICAgIG9yZGVyLmNpdHkgPSBvYmouY2l0eTtcbiAgICAgICAgb3JkZXIuY291bnRyeSA9IG9iai5jb3VudHJ5O1xuICAgICAgb3JkZXIuZGF0ZU9yZGVyZWQgPSBvYmouZGF0ZU9yZGVyZWQ7XG4gICAgICBvcmRlci5waG9uZSA9IG9iai5waG9uZTtcbiAgICAgIG9yZGVyLnNoaXBwaW5nQWRkcmVzczEgPSBvYmouYWRkcmVzczE7XG4gICAgICBvcmRlci50b3RhbFByaWNlID0gb2JqLnRvdGFsUHJpY2U7XG4gICAgICBvcmRlci56aXAgPSBvYmoucG9zdGFsQ29kZTtcbiAgICAgIG9yZGVyLnVzZXIgPSBvYmoudXNlcklkO1xuICAgICAgb3JkZXIuaWQgPSBudWxsO1xuICAgICAgb3JkZXIub3JkZXJJdGVtcyA9IG9iai5vcmRlckl0ZW1zO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImhvIGdlbmVyYXRvIHF1ZXN0byBvcmRpbmU6IFwiICsgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcblxuXG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobmV3T3JkZXJ1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBvcmRlcjogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9yZGVyXCIpKSxcbiAgICAgICAgICAgIGVtYWlsOiBcImVtYWlsYWNhc29AZ21haWwuY29tXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxGb290ZXJcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1NwaW5uZXJcIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgaWYocmVzcG9uc2Uub2spe1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG8gZ2VuZXJhdG8gbCdvcmRpbmVcIilcbiAgICAgICAgICBjb25zdCBvcmRlcklkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkZXJJZCA9IFwiICsgSlNPTi5zdHJpbmdpZnkob3JkZXJJZCkpO1xuXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlTW9kYWxMYWJlbFwiKS5pbm5lclRleHQ9XCJZb3VyIG9yZGVyIG51bWJlciBpczogXCIgKyBvcmRlcklkWydfaWQnXTtcbiAgICAgICAgLy8gIG9rS2xhcm5hUGF5bWVudC5yb3V0ZXIyLm5hdmlnYXRlKFsnaHR0cDovL2xvY2FsaG9zdDo0MjAwLyMvb3JkZXJzLycgKyBvcmRlcklkWydfaWQnXV0pO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vIy9vcmRlcnMvJyArIG9yZGVySWRbJ19pZCddKTtcbiAgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgfWNhdGNoKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImhvIHJpY2V2dXRvIGlsIHBhZ2FtZW50byBtYSBub24gc29ub28gcml1c2NpdG8gYSBnZW5lcmFyZSBsJ29yZGluZVwiKTtcbiAgICAgIH1cblxuICAgICAgIC8vIGxldCBvcmRlciA9IChPcmRlcikgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9yZGVyXCIpKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vbiBobyBnZW5lcmF0byBuaWVudGVcIiApO1xuICAgICAgfVxuXG5cblxuXG4gICAgIFxuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzb3VyY2VJZFwiKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzb3VyY2VJZFwiKTtcbiAgfVxuXG5cbiBcbn1cbiIsIjxwPnZhbGlkYXRpbmcga2xhcm5hIHRyYW5zYWN0aW9uLi4uPC9wPlxuPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNSBjb2wtbGctNVwiPlxuXG4gICAgPGRpdiBpZD1cInBhZ2UtbWFza1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj5cblxuICAgICAgPCEtLSBNb2RhbCAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlIGJvcmRlciBib3JkZXItaW5mb1wiIGlkPVwiZXhhbXBsZU1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgYm9yZGVyIGJvcmRlci1pbmZvIGJvcmRlci00IHJvdW5kZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIFwiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZ1NwaW5uZXJcIiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPjxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPldlIGFyZSB2YWxpZGF0aW5nIHlvdXIgdHJhbnNhY3Rpb24sIHBsZWFzZSB3YWl0PC9oNT48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2VNb2RhbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbEJvZHlcIiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDgwMDsgZGlzcGxheTogbm9uZTtcIj4gVHJhbnNhY3Rpb24gc3VjY2VzZnVsbCE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZhaWxlZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7IGRpc3BsYXk6IG5vbmU7XCI+IFRyYW5zYWN0aW9uIGZhaWxlZCE8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjbG9zZU1vZGFsRm9vdGVyXCIgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiIHN0eWxlPVwiZm9udC1zaXplOnNtYWxsZXI7IGRpc3BsYXk6IG5vbmU7XCI+IE5vdyB5b3UgY2FuIGNsb3NlIHRoaXMgbW9kYWw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4iXX0=