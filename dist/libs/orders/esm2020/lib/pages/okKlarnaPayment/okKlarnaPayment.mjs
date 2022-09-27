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
        localStorage.removeItem("clientId");
        localStorage.removeItem("amount");
        localStorage.removeItem("SOURCE_ID");
        localStorage.removeItem("CLIENT_SECRET");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tLbGFybmFQYXltZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUcsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7O0FBaUIvQyxNQUFNLE9BQU8sZUFBZTtJQU8xQixZQUFvQixNQUFjLEVBQ3hCLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hC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QUFBLGlCQUFNLEVBQUE7UUFHMUcsZ0NBQTBCLGVBQUE7UUFDcUUsOENBQTRCO1FBQUEsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOzt1RkRLaEksZUFBZTtjQWQzQixTQUFTOzJCQUNFLFdBQVcsVUFFYixDQUFDOzs7Ozs7O0lBT1AsQ0FBQyxhQUNRLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlcjIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXIyMyc7XG4vKiogKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7ICBVc2Vyc1NlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgS2xhcm5hQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJ1xuXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXItaXRlbSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlcic7XG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XG5pbXBvcnQgeyBKc29uUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29rLWtsYXJuYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9va0tsYXJuYVBheW1lbnQuaHRtbCcsXG4gIHN0eWxlczogW2AjcGFnZS1tYXNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgfWBdLFxuICBwcm92aWRlcnM6IFtLbGFybmFDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3Mgb2tLbGFybmFQYXltZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBlcnJvck1lc3NhZ2U6IGJvb2xlYW47XG4gIGVycm9ybWVzc2FnZTogU3RyaW5nW107XG4gIHN0YXRpYyBzdHJpcGU7XG4gIHN0YXRpYyByb3V0ZXIyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0OiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBrYyA6IEtsYXJuYUNvbXBvbmVudCxcblxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBva0tsYXJuYVBheW1lbnQudXNlciA9IG5ldyBVc2VyO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY2hlY2tvdXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSBbXTtcbiAgICAgICAgICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgIGNvdW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICAgICAgICAgcGF5bWVudEhhbmRsZXI6IGFueSA9IG51bGw7XG4gICAgICAgICAgICAgICBzdWNjZXNzOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICBmYWlsdXJlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgIHN0YXRpYyB1c2VyOiBVc2VyO1xuICAgICAgICAgICAgICAgc3RhdGljIGNhcnQgOiBDYXJ0O1xuICAgICAgICAgICAgICAgc3RhdGljIGRhdGE7XG4gICAgICAgICAgICAgICByb3V0ZXIyID0gdGhpcy5yb3V0ZXI7XG5cblxuXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgYXdhaXQgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcblxuXG5cbiAgICBsZXQgU09VUkNFX0lEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJTT1VSQ0VfSURcIik7XG4gICAgbGV0IENMSUVOVF9TRUNSRVQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkNMSUVOVF9TRUNSRVRcIik7XG5cbiAgICBjb25zb2xlLmxvZyhcIlNPVVJDRSBJRCA9IFwiICsgU09VUkNFX0lEKTtcbiAgICBjb25zb2xlLmxvZyhcIkNMSUVOVF9TRUNSRVQgPSAgXCIgKyBDTElFTlRfU0VDUkVUKTtcbiAgICBsZXQgTUFYX1BPTExfQ09VTlQgPSAxMDAwO1xuICAgIGxldCBwb2xsQ291bnQgPSAwO1xuICAgIGxldCBhbW91bnQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIikpO1xuICAgIFxuXG5cblxuICAgIGNvbnNvbGUubG9nKFwiaW5pemlhbGl6em8gb2sga2xhcm5hIHBheW1lbnRcIik7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW1hc2snKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG4gICBcblxuICAgICAvLyBhd2FpdCBva0tsYXJuYVBheW1lbnQua2xhcm5hUGF5bWVudCgpO1xuICAgICBva0tsYXJuYVBheW1lbnQucG9sbEZvclNvdXJjZVN0YXR1cyhTT1VSQ0VfSUQsQ0xJRU5UX1NFQ1JFVCxNQVhfUE9MTF9DT1VOVCwgcG9sbENvdW50LCBhbW91bnQpO1xuICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNsaWVudElkXCIpO1xuICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFtb3VudFwiKTsgICAgXG4gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiU09VUkNFX0lEXCIpO1xuICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIkNMSUVOVF9TRUNSRVRcIik7ICAgICAgICBcblxuICB9XG4gIGFzeW5jIGluaXRTdHJpcGVFbGVtZW50cygpe1xuICAgIG9rS2xhcm5hUGF5bWVudC5zdHJpcGUgPSBhd2FpdCBsb2FkU3RyaXBlKCdwa190ZXN0XzUxTFlVQ0dERXlpWDNlM1BsODlqcW1WZzFnVE4yUWhpZnl3dElsZzZBejFuaUdVVjNBTlJwQU5YSjhoZEVJandETmE4R1RCdm5yeHEzemdkUjhnRXp4Z1JUMDB1SGxmdFFuRicsIG51bGwpO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHBvbGxGb3JTb3VyY2VTdGF0dXMoU09VUkNFX0lELENMSUVOVF9TRUNSRVQsTUFYX1BPTExfQ09VTlQsIHBvbGxDb3VudCwgYW1vdW50KXtcbiAgICAgIG9rS2xhcm5hUGF5bWVudC5zdHJpcGUucmV0cmlldmVTb3VyY2Uoe2lkOiBTT1VSQ0VfSUQsIGNsaWVudF9zZWNyZXQ6IENMSUVOVF9TRUNSRVR9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICB2YXIgc291cmNlID0gcmVzdWx0LnNvdXJjZTtcbiAgICAgICAgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdjaGFyZ2VhYmxlJykge1xuICAgICAgICAgIC8vIE1ha2UgYSByZXF1ZXN0IHRvIHlvdXIgc2VydmVyIHRvIGNoYXJnZSB0aGUgU291cmNlLlxuICAgICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgQ2hhcmdlIHN0YXR1cywgc2hvdyB5b3VyIGN1c3RvbWVyIHRoZSByZWxldmFudCBtZXNzYWdlXG4gICAgICAgICAgLy9xdWkgdmEgY3JlYXRvIGlsIG51b3ZvIG9yZGluZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIFxuICAgICAgICAgIG9rS2xhcm5hUGF5bWVudC5rbGFybmFQYXltZW50KFNPVVJDRV9JRCwgYW1vdW50KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJnYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2Uuc3RhdHVzID09PSAncGVuZGluZycgJiYgcG9sbENvdW50IDwgTUFYX1BPTExfQ09VTlQpIHtcbiAgICAgICAgICAvLyBUcnkgYWdhaW4gaW4gYSBzZWNvbmQsIGlmIHRoZSBTb3VyY2UgaXMgc3RpbGwgYHBlbmRpbmdgOlxuICAgICAgICAgLy8gS2xhcm5hQ29tcG9uZW50LmtsYXJuYVBheW1lbnQoU09VUkNFX0lELCBhbW91bnQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicGVuZGluZ1wiKTtcbiAgICAgICAgICBwb2xsQ291bnQgKz0gMTtcbiAgICAgICAgIHNldFRpbWVvdXQoKCk9Pm9rS2xhcm5hUGF5bWVudC5wb2xsRm9yU291cmNlU3RhdHVzKFNPVVJDRV9JRCxDTElFTlRfU0VDUkVULE1BWF9QT0xMX0NPVU5ULCBwb2xsQ291bnQsIGFtb3VudCksIDEwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgU291cmNlIHN0YXR1cywgc2hvdyB5b3VyIGN1c3RvbWVyIHRoZSByZWxldmFudCBtZXNzYWdlLlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgc3RhdGljIGFzeW5jIGtsYXJuYVBheW1lbnQoY2xpZW50SWQsIGFtb3VudCl7XG5cblxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vYXBpL3YxLycgKyBcImNoYXJnZS1zb3VyY2VcIlxuICAgIGNvbnN0IG5ld09yZGVydXJsID0gJ2h0dHBzOi8vY2F0YWxkb3Byb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3JkZXJzLycgKyBcImNyZWF0ZU5ld09yZGVyXCJcblxuICAgIGNvbnNvbGUubG9nKFwic3RvIGNlcmNhbmRvIGRpIGNoaWFtYXJlIGlsIHNlcnZlciBzdSBxdWVzdG8gdXJsIDogXCIgKyB1cmwpO1xuXG4gICAgY29uc29sZS5sb2coXCJjb21lIGNsaWVudElkIGhvIHF1ZXN0bzogXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNsaWVudElkXCIpKTtcbiAgICBjb25zb2xlLmxvZyhcImNvbWUgYW1vdW50IGhvIHF1ZXN0bzogXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFtb3VudFwiKSk7XG5cbiAgICB0cnkge1xuICAgICAgLy8g8J+Rh++4jyBjb25zdCByZXNwb25zZTogUmVzcG9uc2VcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgc291cmNlSWQ6IGNsaWVudElkLFxuICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgIFxuXG4gICAgICBpZihyZXNwb25zZS5vayl7XG5cbiAgXG5cbiAgICAgICAgLy9hZ2dpdW5nbyBsJ29yZGluZVxuICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9yZGVyXCIpKTtcbiAgICAgICAgbGV0IG9yZGVyID0gbmV3IE9yZGVyO1xuICAgICAgICBvcmRlci5jaXR5ID0gb2JqLmNpdHk7XG4gICAgICAgIG9yZGVyLmNvdW50cnkgPSBvYmouY291bnRyeTtcbiAgICAgIG9yZGVyLmRhdGVPcmRlcmVkID0gb2JqLmRhdGVPcmRlcmVkO1xuICAgICAgb3JkZXIucGhvbmUgPSBvYmoucGhvbmU7XG4gICAgICBvcmRlci5zaGlwcGluZ0FkZHJlc3MxID0gb2JqLmFkZHJlc3MxO1xuICAgICAgb3JkZXIudG90YWxQcmljZSA9IG9iai50b3RhbFByaWNlO1xuICAgICAgb3JkZXIuemlwID0gb2JqLnBvc3RhbENvZGU7XG4gICAgICBvcmRlci51c2VyID0gb2JqLnVzZXJJZDtcbiAgICAgIG9yZGVyLmlkID0gbnVsbDtcbiAgICAgIG9yZGVyLm9yZGVySXRlbXMgPSBvYmoub3JkZXJJdGVtcztcblxuICAgICAgY29uc29sZS5sb2coXCJobyBnZW5lcmF0byBxdWVzdG8gb3JkaW5lOiBcIiArIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XG5cblxuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG5ld09yZGVydXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgb3JkZXI6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSksXG4gICAgICAgICAgICBlbWFpbDogXCJlbWFpbGFjYXNvQGdtYWlsLmNvbVwiLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZU1vZGFsRm9vdGVyXCIpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdTcGlubmVyXCIpLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImhvIGdlbmVyYXRvIGwnb3JkaW5lXCIpXG4gICAgICAgICAgY29uc3Qgb3JkZXJJZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9yZGVySWQgPSBcIiArIEpTT04uc3RyaW5naWZ5KG9yZGVySWQpKTtcblxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZU1vZGFsTGFiZWxcIikuaW5uZXJUZXh0PVwiWW91ciBvcmRlciBudW1iZXIgaXM6IFwiICsgb3JkZXJJZFsnX2lkJ107XG4gICAgICAgIC8vICBva0tsYXJuYVBheW1lbnQucm91dGVyMi5uYXZpZ2F0ZShbJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMC8jL29yZGVycy8nICsgb3JkZXJJZFsnX2lkJ11dKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tLyMvb3JkZXJzLycgKyBvcmRlcklkWydfaWQnXSk7XG4gICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJobyByaWNldnV0byBpbCBwYWdhbWVudG8gbWEgbm9uIHNvbm9vIHJpdXNjaXRvIGEgZ2VuZXJhcmUgbCdvcmRpbmVcIik7XG4gICAgICB9XG5cbiAgICAgICAvLyBsZXQgb3JkZXIgPSAoT3JkZXIpIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJub24gaG8gZ2VuZXJhdG8gbmllbnRlXCIgKTtcbiAgICAgIH1cblxuXG5cblxuICAgICBcbiAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic291cmNlSWRcIik7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic291cmNlSWRcIik7XG4gIH1cblxuXG4gXG59XG4iLCI8cD52YWxpZGF0aW5nIGtsYXJuYSB0cmFuc2FjdGlvbi4uLjwvcD5cbjxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTUgY29sLWxnLTVcIj5cblxuICAgIDxkaXYgaWQ9XCJwYWdlLW1hc2tcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9kaXY+XG5cbiAgICAgIDwhLS0gTW9kYWwgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSBib3JkZXIgYm9yZGVyLWluZm9cIiBpZD1cImV4YW1wbGVNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIGJvcmRlciBib3JkZXItaW5mbyBib3JkZXItNCByb3VuZGVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRpbmdTcGlubmVyXCIgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LXByaW1hcnlcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj48aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5XZSBhcmUgdmFsaWRhdGluZyB5b3VyIHRyYW5zYWN0aW9uLCBwbGVhc2Ugd2FpdDwvaDU+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlTW9kYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxCb2R5XCIgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdWNjZXNzXCIgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7IGRpc3BsYXk6IG5vbmU7XCI+IFRyYW5zYWN0aW9uIHN1Y2Nlc2Z1bGwhPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJmYWlsZWRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgc3R5bGU9XCJmb250LXdlaWdodDogODAwOyBkaXNwbGF5OiBub25lO1wiPiBUcmFuc2FjdGlvbiBmYWlsZWQhPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2xvc2VNb2RhbEZvb3RlclwiIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIiBzdHlsZT1cImZvbnQtc2l6ZTpzbWFsbGVyOyBkaXNwbGF5OiBub25lO1wiPiBOb3cgeW91IGNhbiBjbG9zZSB0aGlzIG1vZGFsPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuIl19