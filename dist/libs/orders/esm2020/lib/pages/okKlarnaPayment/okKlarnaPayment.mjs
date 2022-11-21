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
                let data = this.parseJwt(sessionStorage.getItem("authToken"));
                let obj = JSON.parse(localStorage.getItem("order"));
                let order = new Order;
                order.city = obj.city;
                order.country = obj.country;
                order.dateOrdered = obj.dateOrdered;
                order.phone = obj.phone;
                order.shippingAddress1 = obj.shippingAddress1;
                order.totalPrice = obj.totalPrice;
                order.zip = data.postalCode;
                order.user = obj.userId;
                order.id = null;
                order.orderItems = obj.orderItems;
                order.email = obj.email;
                order.confirmed = true;
                order.paymentOption = "klarna";
                console.log("ho generato questo ordine: " + JSON.stringify(order));
                localStorage.setItem("order", JSON.stringify(order));
                try {
                    const response = await fetch(newOrderurl, {
                        method: 'POST',
                        body: JSON.stringify({
                            order: JSON.parse(localStorage.getItem("order")),
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
    static parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    ;
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
  }`], providers: [KlarnaComponent], template: "<p>validating klarna transaction...</p>\r\n<div class=\"col-12 col-md-5 col-lg-5\">\r\n\r\n    <div id=\"page-mask\" style=\"display: none;\"></div>\r\n\r\n      <!-- Modal -->\r\n      <div class=\"modal fade border border-info\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog border border-info border-4 rounded\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <div class=\"row\">\r\n                <div class=\"col-auto \" >\r\n                  <div class=\"d-flex justify-content-center\">\r\n                    <div id=\"loadingSpinner\" class=\"spinner-border text-primary\" role=\"status\">\r\n                      <span class=\"visually-hidden\">Loading...</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\"><h5 class=\"modal-title\" id=\"exampleModalLabel\">We are validating your transaction, please wait</h5></div>\r\n              </div>\r\n\r\n\r\n              <button id=\"closeModal\" type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n            </div>\r\n            <div id=\"modalBody\" class=\"modal-body\">\r\n              <div id=\"success\" class=\"text-success\" style=\"font-weight: 800; display: none;\"> Transaction succesfull!</div>\r\n              <div id=\"failed\" class=\"text-danger\" style=\"font-weight: 800; display: none;\"> Transaction failed!</div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <div id=\"closeModalFooter\" class=\"text-secondary\" style=\"font-size:smaller; display: none;\"> Now you can close this modal</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }, { type: i7.CheckoutService }, { type: i2.KlarnaComponent }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tLbGFybmFQYXltZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUcsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7O0FBaUIvQyxNQUFNLE9BQU8sZUFBZTtJQVcxQixZQUFvQixNQUFjLEVBQ3hCLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hC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O1FBQUMscUNBQW1CO1FBQUEsaUJBQU0sRUFBQTtRQUcxRyxnQ0FBMEIsZUFBQTtRQUNxRSw4Q0FBNEI7UUFBQSxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7O3VGREtoSSxlQUFlO2NBZDNCLFNBQVM7MkJBQ0UsV0FBVyxVQUViLENBQUM7Ozs7Ozs7SUFPUCxDQUFDLGFBQ1EsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcjIzJztcclxuLyoqICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7ICBVc2Vyc1NlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5pbXBvcnQgeyBLbGFybmFDb21wb25lbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnXHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcmRlcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT3JkZXJJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVyLWl0ZW0nO1xyXG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlcic7XHJcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgSnNvblBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvay1rbGFybmEnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9va0tsYXJuYVBheW1lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbYCNwYWdlLW1hc2sge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1gXSxcclxuICBwcm92aWRlcnM6IFtLbGFybmFDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3Mgb2tLbGFybmFQYXltZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZXJyb3JNZXNzYWdlOiBib29sZWFuO1xyXG4gIGVycm9ybWVzc2FnZTogU3RyaW5nW107XHJcbiAgc3RhdGljIHN0cmlwZTtcclxuICBzdGF0aWMgcm91dGVyMjogUm91dGVyO1xyXG4gIHByaXZhdGUgU09VUkNFX0lEIDogc3RyaW5nO1xyXG4gIHByaXZhdGUgQ0xJRU5UX1NFQ1JFVCA6IHN0cmluZztcclxuICBwcml2YXRlIGFtb3VudDogbnVtYmVyO1xyXG4gIHByaXZhdGUgTUFYX1BPTExfQ09VTlQgOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcclxuICAgIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcclxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjaGVja291dDogQ2hlY2tvdXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBrYyA6IEtsYXJuYUNvbXBvbmVudCxcclxuXHJcblxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgb2tLbGFybmFQYXltZW50LnVzZXIgPSBuZXcgVXNlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGNoZWNrb3V0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBvcmRlckl0ZW1zOiBPcmRlckl0ZW1bXSA9IFtdO1xyXG4gICAgICAgICAgICAgIHVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgIGNvdW50cmllcyA9IFtdO1xyXG4gICAgICAgICAgICAgICB1bnN1YnNjcmliZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAgICAgICAgICAgIHBheW1lbnRIYW5kbGVyOiBhbnkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICBzdWNjZXNzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgIGZhaWx1cmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICBzdGF0aWMgdXNlcjogVXNlcjtcclxuICAgICAgICAgICAgICAgc3RhdGljIGNhcnQgOiBDYXJ0O1xyXG4gICAgICAgICAgICAgICBzdGF0aWMgZGF0YTtcclxuICAgICAgICAgICAgICAgcm91dGVyMiA9IHRoaXMucm91dGVyO1xyXG5cclxuXHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgIGF3YWl0IHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCkudGhlbigoKSA9PiB7dGhpcy5sb2FkTG9jYWxWYXJpYWJsZXMoKX0pO1xyXG5cclxuXHJcblxyXG4gICAgLy9sZXQgU09VUkNFX0lEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJTT1VSQ0VfSURcIik7XHJcbiAgICAvL2xldCBDTElFTlRfU0VDUkVUID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDTElFTlRfU0VDUkVUXCIpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJTT1VSQ0UgSUQgPSBcIiArIFNPVVJDRV9JRCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiQ0xJRU5UX1NFQ1JFVCA9ICBcIiArIENMSUVOVF9TRUNSRVQpO1xyXG5cclxuICAgIGxldCBwb2xsQ291bnQgPSAwO1xyXG4gICAgLy9sZXQgYW1vdW50ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpKTtcclxuICAgIFxyXG5cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJpbml6aWFsaXp6byBvayBrbGFybmEgcGF5bWVudFwiKTtcclxuXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW1hc2snKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuICAgXHJcblxyXG4gICAgIC8vIGF3YWl0IG9rS2xhcm5hUGF5bWVudC5rbGFybmFQYXltZW50KCk7XHJcbiAgICAgb2tLbGFybmFQYXltZW50LnBvbGxGb3JTb3VyY2VTdGF0dXModGhpcy5TT1VSQ0VfSUQsdGhpcy5DTElFTlRfU0VDUkVULHRoaXMuTUFYX1BPTExfQ09VTlQsIHBvbGxDb3VudCwgdGhpcy5hbW91bnQpO1xyXG4gICAgLypcclxuICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNsaWVudElkXCIpO1xyXG4gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYW1vdW50XCIpOyAgICBcclxuICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlNPVVJDRV9JRFwiKTtcclxuICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIkNMSUVOVF9TRUNSRVRcIik7ICAgXHJcbiAgICAgKi8gICAgIFxyXG5cclxuICB9XHJcbiAgYXN5bmMgaW5pdFN0cmlwZUVsZW1lbnRzKCl7XHJcbiAgICBva0tsYXJuYVBheW1lbnQuc3RyaXBlID0gYXdhaXQgbG9hZFN0cmlwZSgncGtfdGVzdF81MUxZVUNHREV5aVgzZTNQbDg5anFtVmcxZ1ROMlFoaWZ5d3RJbGc2QXoxbmlHVVYzQU5ScEFOWEo4aGRFSWp3RE5hOEdUQnZucnhxM3pnZFI4Z0V6eGdSVDAwdUhsZnRRbkYnLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTG9jYWxWYXJpYWJsZXMoKXtcclxuICAgICAgdGhpcy5TT1VSQ0VfSUQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlNPVVJDRV9JRFwiKTtcclxuICAgIHRoaXMuQ0xJRU5UX1NFQ1JFVCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQ0xJRU5UX1NFQ1JFVFwiKTtcclxuICAgIHRoaXMuYW1vdW50ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpKTtcclxuICAgIHRoaXMuTUFYX1BPTExfQ09VTlQgPSA1MDAwO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJobyBpbml6aWFsaXp6YXRvIGxlIHZhcmlhYmlsaSA6ICBzb3VyY2UgaWQgPSBcIiArIHRoaXMuU09VUkNFX0lEICsgXCIgY2xpZW50IHNlY3JldCA9IFwiICsgdGhpcy5DTElFTlRfU0VDUkVUKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIHBvbGxGb3JTb3VyY2VTdGF0dXMoU09VUkNFX0lELENMSUVOVF9TRUNSRVQsTUFYX1BPTExfQ09VTlQsIHBvbGxDb3VudCwgYW1vdW50KXtcclxuICAgICAgb2tLbGFybmFQYXltZW50LnN0cmlwZS5yZXRyaWV2ZVNvdXJjZSh7aWQ6IFNPVVJDRV9JRCwgY2xpZW50X3NlY3JldDogQ0xJRU5UX1NFQ1JFVH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgdmFyIHNvdXJjZSA9IHJlc3VsdC5zb3VyY2U7XHJcbiAgICAgICAgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdjaGFyZ2VhYmxlJykge1xyXG4gICAgICAgICAgLy8gTWFrZSBhIHJlcXVlc3QgdG8geW91ciBzZXJ2ZXIgdG8gY2hhcmdlIHRoZSBTb3VyY2UuXHJcbiAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIENoYXJnZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZVxyXG4gICAgICAgICAgLy9xdWkgdmEgY3JlYXRvIGlsIG51b3ZvIG9yZGluZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICBva0tsYXJuYVBheW1lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJnYWJsZVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdwZW5kaW5nJyAmJiBwb2xsQ291bnQgPCBNQVhfUE9MTF9DT1VOVCkge1xyXG4gICAgICAgICAgLy8gVHJ5IGFnYWluIGluIGEgc2Vjb25kLCBpZiB0aGUgU291cmNlIGlzIHN0aWxsIGBwZW5kaW5nYDpcclxuICAgICAgICAgLy8gS2xhcm5hQ29tcG9uZW50LmtsYXJuYVBheW1lbnQoU09VUkNFX0lELCBhbW91bnQpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwZW5kaW5nXCIpO1xyXG4gICAgICAgICAgcG9sbENvdW50ICs9IDE7XHJcbiAgICAgICAgIHNldFRpbWVvdXQoKCk9Pm9rS2xhcm5hUGF5bWVudC5wb2xsRm9yU291cmNlU3RhdHVzKFNPVVJDRV9JRCxDTElFTlRfU0VDUkVULE1BWF9QT0xMX0NPVU5ULCBwb2xsQ291bnQsIGFtb3VudCksIDEwMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIFNvdXJjZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZS5cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMga2xhcm5hUGF5bWVudChjbGllbnRJZCwgYW1vdW50KXtcclxuXHJcblxyXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vY2F0YWxkb3Byb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvJyArIFwiY2hhcmdlLXNvdXJjZVwiXHJcbiAgICBjb25zdCBuZXdPcmRlcnVybCA9ICdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vYXBpL3YxL29yZGVycy8nICsgXCJjcmVhdGVOZXdPcmRlclwiXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJzdG8gY2VyY2FuZG8gZGkgY2hpYW1hcmUgaWwgc2VydmVyIHN1IHF1ZXN0byB1cmwgOiBcIiArIHVybCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjb21lIGNsaWVudElkIGhvIHF1ZXN0bzogXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNsaWVudElkXCIpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiY29tZSBhbW91bnQgaG8gcXVlc3RvOiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyDwn5GH77iPIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHNvdXJjZUlkOiBjbGllbnRJZCxcclxuICAgICAgICAgIGFtb3VudDogYW1vdW50LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuXHJcbiAgICAgICAgLy9hZ2dpdW5nbyBsJ29yZGluZVxyXG4gICAgICAgIGxldCBkYXRhID0gIHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XHJcbiAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSk7XHJcbiAgICAgICAgbGV0IG9yZGVyID0gbmV3IE9yZGVyO1xyXG4gICAgICAgIG9yZGVyLmNpdHkgPSBvYmouY2l0eTtcclxuICAgICAgICBvcmRlci5jb3VudHJ5ID0gb2JqLmNvdW50cnk7XHJcbiAgICAgIG9yZGVyLmRhdGVPcmRlcmVkID0gb2JqLmRhdGVPcmRlcmVkO1xyXG4gICAgICBvcmRlci5waG9uZSA9IG9iai5waG9uZTtcclxuICAgICAgb3JkZXIuc2hpcHBpbmdBZGRyZXNzMSA9IG9iai5zaGlwcGluZ0FkZHJlc3MxO1xyXG4gICAgICBvcmRlci50b3RhbFByaWNlID0gb2JqLnRvdGFsUHJpY2U7XHJcbiAgICAgIG9yZGVyLnppcCA9IGRhdGEucG9zdGFsQ29kZTtcclxuICAgICAgb3JkZXIudXNlciA9IG9iai51c2VySWQ7XHJcbiAgICAgIG9yZGVyLmlkID0gbnVsbDtcclxuICAgICAgb3JkZXIub3JkZXJJdGVtcyA9IG9iai5vcmRlckl0ZW1zO1xyXG4gICAgICBvcmRlci5lbWFpbCA9IG9iai5lbWFpbDtcclxuICAgICAgb3JkZXIuY29uZmlybWVkID0gdHJ1ZTtcclxuICAgICAgb3JkZXIucGF5bWVudE9wdGlvbiA9IFwia2xhcm5hXCI7XHJcblxyXG4gICBcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaG8gZ2VuZXJhdG8gcXVlc3RvIG9yZGluZTogXCIgKyBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9yZGVyXCIsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XHJcblxyXG5cclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobmV3T3JkZXJ1cmwsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBvcmRlcjogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9yZGVyXCIpKSxcclxuICAgICAgICAgICAgZW1haWw6IG9yZGVyLmVtYWlsLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxGb290ZXJcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nU3Bpbm5lclwiKS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG8gZ2VuZXJhdG8gbCdvcmRpbmVcIilcclxuICAgICAgICAgIGNvbnN0IG9yZGVySWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9yZGVySWQgPSBcIiArIEpTT04uc3RyaW5naWZ5KG9yZGVySWQpKTtcclxuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVNb2RhbExhYmVsXCIpLmlubmVyVGV4dD1cIllvdXIgb3JkZXIgbnVtYmVyIGlzOiBcIiArIG9yZGVySWRbJ19pZCddO1xyXG4gICAgICAgIC8vICBva0tsYXJuYVBheW1lbnQucm91dGVyMi5uYXZpZ2F0ZShbJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMC8jL29yZGVycy8nICsgb3JkZXJJZFsnX2lkJ11dKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vIy9vcmRlcnMvJyArIG9yZGVySWRbJ19pZCddKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJobyByaWNldnV0byBpbCBwYWdhbWVudG8gbWEgbm9uIHNvbm9vIHJpdXNjaXRvIGEgZ2VuZXJhcmUgbCdvcmRpbmVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAvLyBsZXQgb3JkZXIgPSAoT3JkZXIpIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm9uIGhvIGdlbmVyYXRvIG5pZW50ZVwiICk7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgXHJcbiAgICB9IGNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInNvdXJjZUlkXCIpO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzb3VyY2VJZFwiKTtcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgcGFyc2VKd3QgKHRva2VuKSB7XHJcbiAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICAgIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcclxuICAgIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oYykge1xyXG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICAgIH0pLmpvaW4oJycpKTtcclxuXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XHJcbn07XHJcblxyXG59XHJcbiIsIjxwPnZhbGlkYXRpbmcga2xhcm5hIHRyYW5zYWN0aW9uLi4uPC9wPlxyXG48ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC01IGNvbC1sZy01XCI+XHJcblxyXG4gICAgPGRpdiBpZD1cInBhZ2UtbWFza1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gTW9kYWwgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlIGJvcmRlciBib3JkZXItaW5mb1wiIGlkPVwiZXhhbXBsZU1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBib3JkZXIgYm9yZGVyLWluZm8gYm9yZGVyLTQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nU3Bpbm5lclwiIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5XCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPjxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPldlIGFyZSB2YWxpZGF0aW5nIHlvdXIgdHJhbnNhY3Rpb24sIHBsZWFzZSB3YWl0PC9oNT48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZU1vZGFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbEJvZHlcIiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwic3VjY2Vzc1wiIGNsYXNzPVwidGV4dC1zdWNjZXNzXCIgc3R5bGU9XCJmb250LXdlaWdodDogODAwOyBkaXNwbGF5OiBub25lO1wiPiBUcmFuc2FjdGlvbiBzdWNjZXNmdWxsITwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJmYWlsZWRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgc3R5bGU9XCJmb250LXdlaWdodDogODAwOyBkaXNwbGF5OiBub25lO1wiPiBUcmFuc2FjdGlvbiBmYWlsZWQhPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjbG9zZU1vZGFsRm9vdGVyXCIgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiIHN0eWxlPVwiZm9udC1zaXplOnNtYWxsZXI7IGRpc3BsYXk6IG5vbmU7XCI+IE5vdyB5b3UgY2FuIGNsb3NlIHRoaXMgbW9kYWw8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4iXX0=