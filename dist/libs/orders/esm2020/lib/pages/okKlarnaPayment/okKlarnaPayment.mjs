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
                order.shippingAddress1 = obj.address1;
                order.totalPrice = obj.totalPrice;
                order.zip = obj.postalCode;
                order.user = obj.userId;
                order.id = null;
                order.orderItems = obj.orderItems;
                order.email = obj.email;
                console.log("ho generato questo ordine: " + JSON.stringify(order));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tLbGFybmFQYXltZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUcsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7O0FBaUIvQyxNQUFNLE9BQU8sZUFBZTtJQVcxQixZQUFvQixNQUFjLEVBQ3hCLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hC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K0M7UUFBQSxpQkFBSyxFQUFBLEVBQUE7UUFJdEgsOEJBQTRHO1FBQzlHLGlCQUFNO1FBQ04sZ0NBQXVDLGVBQUE7UUFDNEMseUNBQXVCO1FBQUEsaUJBQU07UUFDOUcsZ0NBQThFO1FBQUMscUNBQW1CO1FBQUEsaUJBQU0sRUFBQTtRQUcxRyxnQ0FBMEIsZUFBQTtRQUNxRSw4Q0FBNEI7UUFBQSxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7O3VGREtoSSxlQUFlO2NBZDNCLFNBQVM7MkJBQ0UsV0FBVyxVQUViLENBQUM7Ozs7Ozs7SUFPUCxDQUFDLGFBQ1EsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcjIzJztcbi8qKiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgIFVzZXJzU2VydmljZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBLbGFybmFDb21wb25lbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnXG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVySXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlci1pdGVtJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVyJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcbmltcG9ydCB7IEpzb25QaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb2sta2xhcm5hJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29rS2xhcm5hUGF5bWVudC5odG1sJyxcbiAgc3R5bGVzOiBbYCNwYWdlLW1hc2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICB9YF0sXG4gIHByb3ZpZGVyczogW0tsYXJuYUNvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBva0tsYXJuYVBheW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGVycm9yTWVzc2FnZTogYm9vbGVhbjtcbiAgZXJyb3JtZXNzYWdlOiBTdHJpbmdbXTtcbiAgc3RhdGljIHN0cmlwZTtcbiAgc3RhdGljIHJvdXRlcjI6IFJvdXRlcjtcbiAgcHJpdmF0ZSBTT1VSQ0VfSUQgOiBzdHJpbmc7XG4gIHByaXZhdGUgQ0xJRU5UX1NFQ1JFVCA6IHN0cmluZztcbiAgcHJpdmF0ZSBhbW91bnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBNQVhfUE9MTF9DT1VOVCA6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcmRlcnNTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXQ6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIGtjIDogS2xhcm5hQ29tcG9uZW50LFxuXG5cbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb2tLbGFybmFQYXltZW50LnVzZXIgPSBuZXcgVXNlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNoZWNrb3V0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gICAgICAgICAgICAgIGlzU3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIG9yZGVySXRlbXM6IE9yZGVySXRlbVtdID0gW107XG4gICAgICAgICAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICBjb3VudHJpZXMgPSBbXTtcbiAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICAgICAgICAgICAgIHBheW1lbnRIYW5kbGVyOiBhbnkgPSBudWxsO1xuICAgICAgICAgICAgICAgc3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgZmFpbHVyZTpib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICBzdGF0aWMgdXNlcjogVXNlcjtcbiAgICAgICAgICAgICAgIHN0YXRpYyBjYXJ0IDogQ2FydDtcbiAgICAgICAgICAgICAgIHN0YXRpYyBkYXRhO1xuICAgICAgICAgICAgICAgcm91dGVyMiA9IHRoaXMucm91dGVyO1xuXG5cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgIGF3YWl0IHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCkudGhlbigoKSA9PiB7dGhpcy5sb2FkTG9jYWxWYXJpYWJsZXMoKX0pO1xuXG5cblxuICAgIC8vbGV0IFNPVVJDRV9JRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU09VUkNFX0lEXCIpO1xuICAgIC8vbGV0IENMSUVOVF9TRUNSRVQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkNMSUVOVF9TRUNSRVRcIik7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwiU09VUkNFIElEID0gXCIgKyBTT1VSQ0VfSUQpO1xuICAgIC8vY29uc29sZS5sb2coXCJDTElFTlRfU0VDUkVUID0gIFwiICsgQ0xJRU5UX1NFQ1JFVCk7XG5cbiAgICBsZXQgcG9sbENvdW50ID0gMDtcbiAgICAvL2xldCBhbW91bnQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIikpO1xuICAgIFxuXG5cblxuICAgIGNvbnNvbGUubG9nKFwiaW5pemlhbGl6em8gb2sga2xhcm5hIHBheW1lbnRcIik7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW1hc2snKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG4gICBcblxuICAgICAvLyBhd2FpdCBva0tsYXJuYVBheW1lbnQua2xhcm5hUGF5bWVudCgpO1xuICAgICBva0tsYXJuYVBheW1lbnQucG9sbEZvclNvdXJjZVN0YXR1cyh0aGlzLlNPVVJDRV9JRCx0aGlzLkNMSUVOVF9TRUNSRVQsdGhpcy5NQVhfUE9MTF9DT1VOVCwgcG9sbENvdW50LCB0aGlzLmFtb3VudCk7XG4gICAgLypcbiAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjbGllbnRJZFwiKTtcbiAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhbW91bnRcIik7ICAgIFxuICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlNPVVJDRV9JRFwiKTtcbiAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJDTElFTlRfU0VDUkVUXCIpOyAgIFxuICAgICAqLyAgICAgXG5cbiAgfVxuICBhc3luYyBpbml0U3RyaXBlRWxlbWVudHMoKXtcbiAgICBva0tsYXJuYVBheW1lbnQuc3RyaXBlID0gYXdhaXQgbG9hZFN0cmlwZSgncGtfdGVzdF81MUxZVUNHREV5aVgzZTNQbDg5anFtVmcxZ1ROMlFoaWZ5d3RJbGc2QXoxbmlHVVYzQU5ScEFOWEo4aGRFSWp3RE5hOEdUQnZucnhxM3pnZFI4Z0V6eGdSVDAwdUhsZnRRbkYnLCBudWxsKTtcbiAgICB9XG5cbiAgICBsb2FkTG9jYWxWYXJpYWJsZXMoKXtcbiAgICAgIHRoaXMuU09VUkNFX0lEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJTT1VSQ0VfSURcIik7XG4gICAgdGhpcy5DTElFTlRfU0VDUkVUID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDTElFTlRfU0VDUkVUXCIpO1xuICAgIHRoaXMuYW1vdW50ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpKTtcbiAgICB0aGlzLk1BWF9QT0xMX0NPVU5UID0gNTAwMDtcblxuICAgICAgY29uc29sZS5sb2coXCJobyBpbml6aWFsaXp6YXRvIGxlIHZhcmlhYmlsaSA6ICBzb3VyY2UgaWQgPSBcIiArIHRoaXMuU09VUkNFX0lEICsgXCIgY2xpZW50IHNlY3JldCA9IFwiICsgdGhpcy5DTElFTlRfU0VDUkVUKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBwb2xsRm9yU291cmNlU3RhdHVzKFNPVVJDRV9JRCxDTElFTlRfU0VDUkVULE1BWF9QT0xMX0NPVU5ULCBwb2xsQ291bnQsIGFtb3VudCl7XG4gICAgICBva0tsYXJuYVBheW1lbnQuc3RyaXBlLnJldHJpZXZlU291cmNlKHtpZDogU09VUkNFX0lELCBjbGllbnRfc2VjcmV0OiBDTElFTlRfU0VDUkVUfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHJlc3VsdC5zb3VyY2U7XG4gICAgICAgIGlmIChzb3VyY2Uuc3RhdHVzID09PSAnY2hhcmdlYWJsZScpIHtcbiAgICAgICAgICAvLyBNYWtlIGEgcmVxdWVzdCB0byB5b3VyIHNlcnZlciB0byBjaGFyZ2UgdGhlIFNvdXJjZS5cbiAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIENoYXJnZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZVxuICAgICAgICAgIC8vcXVpIHZhIGNyZWF0byBpbCBudW92byBvcmRpbmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcbiAgICAgICAgICBva0tsYXJuYVBheW1lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjaGFyZ2FibGVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlLnN0YXR1cyA9PT0gJ3BlbmRpbmcnICYmIHBvbGxDb3VudCA8IE1BWF9QT0xMX0NPVU5UKSB7XG4gICAgICAgICAgLy8gVHJ5IGFnYWluIGluIGEgc2Vjb25kLCBpZiB0aGUgU291cmNlIGlzIHN0aWxsIGBwZW5kaW5nYDpcbiAgICAgICAgIC8vIEtsYXJuYUNvbXBvbmVudC5rbGFybmFQYXltZW50KFNPVVJDRV9JRCwgYW1vdW50KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBlbmRpbmdcIik7XG4gICAgICAgICAgcG9sbENvdW50ICs9IDE7XG4gICAgICAgICBzZXRUaW1lb3V0KCgpPT5va0tsYXJuYVBheW1lbnQucG9sbEZvclNvdXJjZVN0YXR1cyhTT1VSQ0VfSUQsQ0xJRU5UX1NFQ1JFVCxNQVhfUE9MTF9DT1VOVCwgcG9sbENvdW50LCBhbW91bnQpLCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIFNvdXJjZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZS5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIHN0YXRpYyBhc3luYyBrbGFybmFQYXltZW50KGNsaWVudElkLCBhbW91bnQpe1xuXG5cbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tL2FwaS92MS8nICsgXCJjaGFyZ2Utc291cmNlXCJcbiAgICBjb25zdCBuZXdPcmRlcnVybCA9ICdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vYXBpL3YxL29yZGVycy8nICsgXCJjcmVhdGVOZXdPcmRlclwiXG5cbiAgICBjb25zb2xlLmxvZyhcInN0byBjZXJjYW5kbyBkaSBjaGlhbWFyZSBpbCBzZXJ2ZXIgc3UgcXVlc3RvIHVybCA6IFwiICsgdXJsKTtcblxuICAgIGNvbnNvbGUubG9nKFwiY29tZSBjbGllbnRJZCBobyBxdWVzdG86IFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbGllbnRJZFwiKSk7XG4gICAgY29uc29sZS5sb2coXCJjb21lIGFtb3VudCBobyBxdWVzdG86IFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIikpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIPCfkYfvuI8gY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHNvdXJjZUlkOiBjbGllbnRJZCxcbiAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICBcblxuICAgICAgaWYocmVzcG9uc2Uub2spe1xuXG4gICAgICAgIC8vYWdnaXVuZ28gbCdvcmRpbmVcbiAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSk7XG4gICAgICAgIGxldCBvcmRlciA9IG5ldyBPcmRlcjtcbiAgICAgICAgb3JkZXIuY2l0eSA9IG9iai5jaXR5O1xuICAgICAgICBvcmRlci5jb3VudHJ5ID0gb2JqLmNvdW50cnk7XG4gICAgICBvcmRlci5kYXRlT3JkZXJlZCA9IG9iai5kYXRlT3JkZXJlZDtcbiAgICAgIG9yZGVyLnBob25lID0gb2JqLnBob25lO1xuICAgICAgb3JkZXIuc2hpcHBpbmdBZGRyZXNzMSA9IG9iai5hZGRyZXNzMTtcbiAgICAgIG9yZGVyLnRvdGFsUHJpY2UgPSBvYmoudG90YWxQcmljZTtcbiAgICAgIG9yZGVyLnppcCA9IG9iai5wb3N0YWxDb2RlO1xuICAgICAgb3JkZXIudXNlciA9IG9iai51c2VySWQ7XG4gICAgICBvcmRlci5pZCA9IG51bGw7XG4gICAgICBvcmRlci5vcmRlckl0ZW1zID0gb2JqLm9yZGVySXRlbXM7XG4gICAgICBvcmRlci5lbWFpbCA9IG9iai5lbWFpbDtcblxuICAgICAgY29uc29sZS5sb2coXCJobyBnZW5lcmF0byBxdWVzdG8gb3JkaW5lOiBcIiArIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XG5cblxuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG5ld09yZGVydXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgb3JkZXI6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSksXG4gICAgICAgICAgICBlbWFpbDogb3JkZXIuZW1haWwsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxGb290ZXJcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1NwaW5uZXJcIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgaWYocmVzcG9uc2Uub2spe1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG8gZ2VuZXJhdG8gbCdvcmRpbmVcIilcbiAgICAgICAgICBjb25zdCBvcmRlcklkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkZXJJZCA9IFwiICsgSlNPTi5zdHJpbmdpZnkob3JkZXJJZCkpO1xuXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlTW9kYWxMYWJlbFwiKS5pbm5lclRleHQ9XCJZb3VyIG9yZGVyIG51bWJlciBpczogXCIgKyBvcmRlcklkWydfaWQnXTtcbiAgICAgICAgLy8gIG9rS2xhcm5hUGF5bWVudC5yb3V0ZXIyLm5hdmlnYXRlKFsnaHR0cDovL2xvY2FsaG9zdDo0MjAwLyMvb3JkZXJzLycgKyBvcmRlcklkWydfaWQnXV0pO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vIy9vcmRlcnMvJyArIG9yZGVySWRbJ19pZCddKTtcbiAgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgfWNhdGNoKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImhvIHJpY2V2dXRvIGlsIHBhZ2FtZW50byBtYSBub24gc29ub28gcml1c2NpdG8gYSBnZW5lcmFyZSBsJ29yZGluZVwiKTtcbiAgICAgIH1cblxuICAgICAgIC8vIGxldCBvcmRlciA9IChPcmRlcikgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9yZGVyXCIpKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vbiBobyBnZW5lcmF0byBuaWVudGVcIiApO1xuICAgICAgfVxuXG5cblxuXG4gICAgIFxuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzb3VyY2VJZFwiKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzb3VyY2VJZFwiKTtcbiAgfVxuXG5cbiBcbn1cbiIsIjxwPnZhbGlkYXRpbmcga2xhcm5hIHRyYW5zYWN0aW9uLi4uPC9wPlxuPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNSBjb2wtbGctNVwiPlxuXG4gICAgPGRpdiBpZD1cInBhZ2UtbWFza1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj5cblxuICAgICAgPCEtLSBNb2RhbCAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlIGJvcmRlciBib3JkZXItaW5mb1wiIGlkPVwiZXhhbXBsZU1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgYm9yZGVyIGJvcmRlci1pbmZvIGJvcmRlci00IHJvdW5kZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIFwiID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZ1NwaW5uZXJcIiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPjxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPldlIGFyZSB2YWxpZGF0aW5nIHlvdXIgdHJhbnNhY3Rpb24sIHBsZWFzZSB3YWl0PC9oNT48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2VNb2RhbFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RhbEJvZHlcIiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NcIiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDgwMDsgZGlzcGxheTogbm9uZTtcIj4gVHJhbnNhY3Rpb24gc3VjY2VzZnVsbCE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZhaWxlZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7IGRpc3BsYXk6IG5vbmU7XCI+IFRyYW5zYWN0aW9uIGZhaWxlZCE8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjbG9zZU1vZGFsRm9vdGVyXCIgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiIHN0eWxlPVwiZm9udC1zaXplOnNtYWxsZXI7IGRpc3BsYXk6IG5vbmU7XCI+IE5vdyB5b3UgY2FuIGNsb3NlIHRoaXMgbW9kYWw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4iXX0=