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
        await this.initStripeElements().then(() => { this.loadLocalVariables(); });
        //let SOURCE_ID = localStorage.getItem("SOURCE_ID");
        //let CLIENT_SECRET = localStorage.getItem("CLIENT_SECRET");
        //console.log("SOURCE ID = " + SOURCE_ID);
        //console.log("CLIENT_SECRET =  " + CLIENT_SECRET);
        let pollCount = 0;
        //let amount = Number(localStorage.getItem("amount"));
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
        okKlarnaPayment.pollForSourceStatus(this.SOURCE_ID, this.CLIENT_SECRET, this.MAX_POLL_COUNT, pollCount, this.amount);
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
    loadLocalVariables() {
        this.SOURCE_ID = localStorage.getItem("SOURCE_ID");
        this.CLIENT_SECRET = localStorage.getItem("CLIENT_SECRET");
        this.amount = Number(localStorage.getItem("amount"));
        this.MAX_POLL_COUNT = 5000;
        console.log("ho inizializzato le variabili :  source id = " + this.SOURCE_ID + " client secret = " + this.CLIENT_SECRET);
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
                order.shippingAddress1 = obj.shippingAddress1;
                order.totalPrice = obj.totalPrice;
                order.zip = obj.postalCode;
                order.user = obj.userId;
                order.id = null;
                order.orderItems = obj.orderItems;
                order.email = obj.email;
                order.confirmed = true;
                order.paymentOption = "klarna";
                console.log("ho generato questo ordine: " + JSON.stringify(order));
                try {
                    const response = await fetch(newOrderurl, {
                        method: 'POST',
                        body: JSON.stringify({
                            order: order,
                            email: order.email,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tLbGFybmFQYXltZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUcsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7O0FBaUIvQyxNQUFNLE9BQU8sZUFBZTtJQVcxQixZQUFvQixNQUFjLEVBQ3hCLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hC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ckQsZ0NBQWlCLGNBQUE7UUFBK0MsZ0VBQStDO1FBQUEsaUJBQUssRUFBQSxFQUFBO1FBSXRILDhCQUE0RztRQUM5RyxpQkFBTTtRQUNOLGdDQUF1QyxlQUFBO1FBQzRDLHlDQUF1QjtRQUFBLGlCQUFNO1FBQzlHLGdDQUE4RTtRQUFDLHFDQUFtQjtRQUFBLGlCQUFNLEVBQUE7UUFHMUcsZ0NBQTBCLGVBQUE7UUFDcUUsOENBQTRCO1FBQUEsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOzt1RkRLaEksZUFBZTtjQWQzQixTQUFTOzJCQUNFLFdBQVcsVUFFYixDQUFDOzs7Ozs7O0lBT1AsQ0FBQyxhQUNRLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlcjIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXIyMyc7XG4vKiogKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7ICBVc2Vyc1NlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgS2xhcm5hQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJ1xuXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXItaXRlbSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlcic7XG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XG5pbXBvcnQgeyBKc29uUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29rLWtsYXJuYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9va0tsYXJuYVBheW1lbnQuaHRtbCcsXG4gIHN0eWxlczogW2AjcGFnZS1tYXNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgfWBdLFxuICBwcm92aWRlcnM6IFtLbGFybmFDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3Mgb2tLbGFybmFQYXltZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBlcnJvck1lc3NhZ2U6IGJvb2xlYW47XG4gIGVycm9ybWVzc2FnZTogU3RyaW5nW107XG4gIHN0YXRpYyBzdHJpcGU7XG4gIHN0YXRpYyByb3V0ZXIyOiBSb3V0ZXI7XG4gIHByaXZhdGUgU09VUkNFX0lEIDogc3RyaW5nO1xuICBwcml2YXRlIENMSUVOVF9TRUNSRVQgOiBzdHJpbmc7XG4gIHByaXZhdGUgYW1vdW50OiBudW1iZXI7XG4gIHByaXZhdGUgTUFYX1BPTExfQ09VTlQgOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0OiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBrYyA6IEtsYXJuYUNvbXBvbmVudCxcblxuXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG9rS2xhcm5hUGF5bWVudC51c2VyID0gbmV3IFVzZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjaGVja291dEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICAgICAgICAgICAgICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBvcmRlckl0ZW1zOiBPcmRlckl0ZW1bXSA9IFtdO1xuICAgICAgICAgICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgY291bnRyaWVzID0gW107XG4gICAgICAgICAgICAgICB1bnN1YnNjcmliZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgICAgICAgICBwYXltZW50SGFuZGxlcjogYW55ID0gbnVsbDtcbiAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgIGZhaWx1cmU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgc3RhdGljIHVzZXI6IFVzZXI7XG4gICAgICAgICAgICAgICBzdGF0aWMgY2FydCA6IENhcnQ7XG4gICAgICAgICAgICAgICBzdGF0aWMgZGF0YTtcbiAgICAgICAgICAgICAgIHJvdXRlcjIgPSB0aGlzLnJvdXRlcjtcblxuXG5cbiAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICBhd2FpdCB0aGlzLmluaXRTdHJpcGVFbGVtZW50cygpLnRoZW4oKCkgPT4ge3RoaXMubG9hZExvY2FsVmFyaWFibGVzKCl9KTtcblxuXG5cbiAgICAvL2xldCBTT1VSQ0VfSUQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlNPVVJDRV9JRFwiKTtcbiAgICAvL2xldCBDTElFTlRfU0VDUkVUID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDTElFTlRfU0VDUkVUXCIpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcIlNPVVJDRSBJRCA9IFwiICsgU09VUkNFX0lEKTtcbiAgICAvL2NvbnNvbGUubG9nKFwiQ0xJRU5UX1NFQ1JFVCA9ICBcIiArIENMSUVOVF9TRUNSRVQpO1xuXG4gICAgbGV0IHBvbGxDb3VudCA9IDA7XG4gICAgLy9sZXQgYW1vdW50ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpKTtcbiAgICBcblxuXG5cbiAgICBjb25zb2xlLmxvZyhcImluaXppYWxpenpvIG9rIGtsYXJuYSBwYXltZW50XCIpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZU1vZGFsXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1tYXNrJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuICAgXG5cbiAgICAgLy8gYXdhaXQgb2tLbGFybmFQYXltZW50LmtsYXJuYVBheW1lbnQoKTtcbiAgICAgb2tLbGFybmFQYXltZW50LnBvbGxGb3JTb3VyY2VTdGF0dXModGhpcy5TT1VSQ0VfSUQsdGhpcy5DTElFTlRfU0VDUkVULHRoaXMuTUFYX1BPTExfQ09VTlQsIHBvbGxDb3VudCwgdGhpcy5hbW91bnQpO1xuICAgIC8qXG4gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2xpZW50SWRcIik7XG4gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYW1vdW50XCIpOyAgICBcbiAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJTT1VSQ0VfSURcIik7XG4gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiQ0xJRU5UX1NFQ1JFVFwiKTsgICBcbiAgICAgKi8gICAgIFxuXG4gIH1cbiAgYXN5bmMgaW5pdFN0cmlwZUVsZW1lbnRzKCl7XG4gICAgb2tLbGFybmFQYXltZW50LnN0cmlwZSA9IGF3YWl0IGxvYWRTdHJpcGUoJ3BrX3Rlc3RfNTFMWVVDR0RFeWlYM2UzUGw4OWpxbVZnMWdUTjJRaGlmeXd0SWxnNkF6MW5pR1VWM0FOUnBBTlhKOGhkRUlqd0ROYThHVEJ2bnJ4cTN6Z2RSOGdFenhnUlQwMHVIbGZ0UW5GJywgbnVsbCk7XG4gICAgfVxuXG4gICAgbG9hZExvY2FsVmFyaWFibGVzKCl7XG4gICAgICB0aGlzLlNPVVJDRV9JRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU09VUkNFX0lEXCIpO1xuICAgIHRoaXMuQ0xJRU5UX1NFQ1JFVCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQ0xJRU5UX1NFQ1JFVFwiKTtcbiAgICB0aGlzLmFtb3VudCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFtb3VudFwiKSk7XG4gICAgdGhpcy5NQVhfUE9MTF9DT1VOVCA9IDUwMDA7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiaG8gaW5pemlhbGl6emF0byBsZSB2YXJpYWJpbGkgOiAgc291cmNlIGlkID0gXCIgKyB0aGlzLlNPVVJDRV9JRCArIFwiIGNsaWVudCBzZWNyZXQgPSBcIiArIHRoaXMuQ0xJRU5UX1NFQ1JFVCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcG9sbEZvclNvdXJjZVN0YXR1cyhTT1VSQ0VfSUQsQ0xJRU5UX1NFQ1JFVCxNQVhfUE9MTF9DT1VOVCwgcG9sbENvdW50LCBhbW91bnQpe1xuICAgICAgb2tLbGFybmFQYXltZW50LnN0cmlwZS5yZXRyaWV2ZVNvdXJjZSh7aWQ6IFNPVVJDRV9JRCwgY2xpZW50X3NlY3JldDogQ0xJRU5UX1NFQ1JFVH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSByZXN1bHQuc291cmNlO1xuICAgICAgICBpZiAoc291cmNlLnN0YXR1cyA9PT0gJ2NoYXJnZWFibGUnKSB7XG4gICAgICAgICAgLy8gTWFrZSBhIHJlcXVlc3QgdG8geW91ciBzZXJ2ZXIgdG8gY2hhcmdlIHRoZSBTb3VyY2UuXG4gICAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBDaGFyZ2Ugc3RhdHVzLCBzaG93IHlvdXIgY3VzdG9tZXIgdGhlIHJlbGV2YW50IG1lc3NhZ2VcbiAgICAgICAgICAvL3F1aSB2YSBjcmVhdG8gaWwgbnVvdm8gb3JkaW5lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG4gICAgICAgICAgb2tLbGFybmFQYXltZW50LmtsYXJuYVBheW1lbnQoU09VUkNFX0lELCBhbW91bnQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmdhYmxlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdwZW5kaW5nJyAmJiBwb2xsQ291bnQgPCBNQVhfUE9MTF9DT1VOVCkge1xuICAgICAgICAgIC8vIFRyeSBhZ2FpbiBpbiBhIHNlY29uZCwgaWYgdGhlIFNvdXJjZSBpcyBzdGlsbCBgcGVuZGluZ2A6XG4gICAgICAgICAvLyBLbGFybmFDb21wb25lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJwZW5kaW5nXCIpO1xuICAgICAgICAgIHBvbGxDb3VudCArPSAxO1xuICAgICAgICAgc2V0VGltZW91dCgoKT0+b2tLbGFybmFQYXltZW50LnBvbGxGb3JTb3VyY2VTdGF0dXMoU09VUkNFX0lELENMSUVOVF9TRUNSRVQsTUFYX1BPTExfQ09VTlQsIHBvbGxDb3VudCwgYW1vdW50KSwgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBTb3VyY2Ugc3RhdHVzLCBzaG93IHlvdXIgY3VzdG9tZXIgdGhlIHJlbGV2YW50IG1lc3NhZ2UuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICBzdGF0aWMgYXN5bmMga2xhcm5hUGF5bWVudChjbGllbnRJZCwgYW1vdW50KXtcblxuXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vY2F0YWxkb3Byb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvJyArIFwiY2hhcmdlLXNvdXJjZVwiXG4gICAgY29uc3QgbmV3T3JkZXJ1cmwgPSAnaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tL2FwaS92MS9vcmRlcnMvJyArIFwiY3JlYXRlTmV3T3JkZXJcIlxuXG4gICAgY29uc29sZS5sb2coXCJzdG8gY2VyY2FuZG8gZGkgY2hpYW1hcmUgaWwgc2VydmVyIHN1IHF1ZXN0byB1cmwgOiBcIiArIHVybCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImNvbWUgY2xpZW50SWQgaG8gcXVlc3RvOiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2xpZW50SWRcIikpO1xuICAgIGNvbnNvbGUubG9nKFwiY29tZSBhbW91bnQgaG8gcXVlc3RvOiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyDwn5GH77iPIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBzb3VyY2VJZDogY2xpZW50SWQsXG4gICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgXG5cbiAgICAgIGlmKHJlc3BvbnNlLm9rKXtcblxuICAgICAgICAvL2FnZ2l1bmdvIGwnb3JkaW5lXG4gICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJcIikpO1xuICAgICAgICBsZXQgb3JkZXIgPSBuZXcgT3JkZXI7XG4gICAgICAgIG9yZGVyLmNpdHkgPSBvYmouY2l0eTtcbiAgICAgICAgb3JkZXIuY291bnRyeSA9IG9iai5jb3VudHJ5O1xuICAgICAgb3JkZXIuZGF0ZU9yZGVyZWQgPSBvYmouZGF0ZU9yZGVyZWQ7XG4gICAgICBvcmRlci5waG9uZSA9IG9iai5waG9uZTtcbiAgICAgIG9yZGVyLnNoaXBwaW5nQWRkcmVzczEgPSBvYmouc2hpcHBpbmdBZGRyZXNzMTtcbiAgICAgIG9yZGVyLnRvdGFsUHJpY2UgPSBvYmoudG90YWxQcmljZTtcbiAgICAgIG9yZGVyLnppcCA9IG9iai5wb3N0YWxDb2RlO1xuICAgICAgb3JkZXIudXNlciA9IG9iai51c2VySWQ7XG4gICAgICBvcmRlci5pZCA9IG51bGw7XG4gICAgICBvcmRlci5vcmRlckl0ZW1zID0gb2JqLm9yZGVySXRlbXM7XG4gICAgICBvcmRlci5lbWFpbCA9IG9iai5lbWFpbDtcbiAgICAgIG9yZGVyLmNvbmZpcm1lZCA9IHRydWU7XG4gICAgICBvcmRlci5wYXltZW50T3B0aW9uID0gXCJrbGFybmFcIjtcblxuICAgXG5cbiAgICAgIGNvbnNvbGUubG9nKFwiaG8gZ2VuZXJhdG8gcXVlc3RvIG9yZGluZTogXCIgKyBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xuXG5cbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZXdPcmRlcnVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG9yZGVyOiBvcmRlcixcbiAgICAgICAgICAgIGVtYWlsOiBvcmRlci5lbWFpbCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VNb2RhbEZvb3RlclwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nU3Bpbm5lclwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICBpZihyZXNwb25zZS5vayl7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJobyBnZW5lcmF0byBsJ29yZGluZVwiKVxuICAgICAgICAgIGNvbnN0IG9yZGVySWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJvcmRlcklkID0gXCIgKyBKU09OLnN0cmluZ2lmeShvcmRlcklkKSk7XG5cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVNb2RhbExhYmVsXCIpLmlubmVyVGV4dD1cIllvdXIgb3JkZXIgbnVtYmVyIGlzOiBcIiArIG9yZGVySWRbJ19pZCddO1xuICAgICAgICAvLyAgb2tLbGFybmFQYXltZW50LnJvdXRlcjIubmF2aWdhdGUoWydodHRwOi8vbG9jYWxob3N0OjQyMDAvIy9vcmRlcnMvJyArIG9yZGVySWRbJ19pZCddXSk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2h0dHBzOi8vY2F0YWxkb3Byb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS8jL29yZGVycy8nICsgb3JkZXJJZFsnX2lkJ10pO1xuICAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICB9Y2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaG8gcmljZXZ1dG8gaWwgcGFnYW1lbnRvIG1hIG5vbiBzb25vbyByaXVzY2l0byBhIGdlbmVyYXJlIGwnb3JkaW5lXCIpO1xuICAgICAgfVxuXG4gICAgICAgLy8gbGV0IG9yZGVyID0gKE9yZGVyKSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJcIikpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibm9uIGhvIGdlbmVyYXRvIG5pZW50ZVwiICk7XG4gICAgICB9XG5cblxuXG5cbiAgICAgXG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInNvdXJjZUlkXCIpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInNvdXJjZUlkXCIpO1xuICB9XG5cblxuIFxufVxuIiwiPHA+dmFsaWRhdGluZyBrbGFybmEgdHJhbnNhY3Rpb24uLi48L3A+XG48ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC01IGNvbC1sZy01XCI+XG5cbiAgICA8ZGl2IGlkPVwicGFnZS1tYXNrXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvZGl2PlxuXG4gICAgICA8IS0tIE1vZGFsIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgYm9yZGVyIGJvcmRlci1pbmZvXCIgaWQ9XCJleGFtcGxlTW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBib3JkZXIgYm9yZGVyLWluZm8gYm9yZGVyLTQgcm91bmRlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gXCIgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nU3Bpbm5lclwiIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5XCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+PGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+V2UgYXJlIHZhbGlkYXRpbmcgeW91ciB0cmFuc2FjdGlvbiwgcGxlYXNlIHdhaXQ8L2g1PjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZU1vZGFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1vZGFsQm9keVwiIGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwic3VjY2Vzc1wiIGNsYXNzPVwidGV4dC1zdWNjZXNzXCIgc3R5bGU9XCJmb250LXdlaWdodDogODAwOyBkaXNwbGF5OiBub25lO1wiPiBUcmFuc2FjdGlvbiBzdWNjZXNmdWxsITwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmFpbGVkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDgwMDsgZGlzcGxheTogbm9uZTtcIj4gVHJhbnNhY3Rpb24gZmFpbGVkITwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNsb3NlTW9kYWxGb290ZXJcIiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5XCIgc3R5bGU9XCJmb250LXNpemU6c21hbGxlcjsgZGlzcGxheTogbm9uZTtcIj4gTm93IHlvdSBjYW4gY2xvc2UgdGhpcyBtb2RhbDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiJdfQ==