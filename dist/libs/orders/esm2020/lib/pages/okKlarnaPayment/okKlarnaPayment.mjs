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
        okKlarnaPayment.stripe = await loadStripe('pk_live_51LYUCGDEyiX3e3PlZ6YXzMTMSvGkcCPrbxY7HU3N4PHkJgo00eXmUxV65d81LeSks3ZCkr4jY7liJdzIPMoH6RNZ00qmPvQJMW', null);
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
        const url = 'https://www.cataldostore.it/api/v1/' + "charge-source";
        const newOrderurl = 'https://www.cataldostore.it/api/v1/orders/' + "createNewOrder";
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
                let order = JSON.parse(localStorage.getItem("order"));
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
                        window.location.replace('https://www.cataldostore.it/orders/' + orderId['_id']);
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
  }`], providers: [KlarnaComponent], template: "<p>validating klarna transaction...</p>\n<div class=\"col-12 col-md-5 col-lg-5\">\n\n    <div id=\"page-mask\" style=\"display: none;\"></div>\n\n      <!-- Modal -->\n      <div class=\"modal fade border border-info\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog border border-info border-4 rounded\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <div class=\"row\">\n                <div class=\"col-auto \" >\n                  <div class=\"d-flex justify-content-center\">\n                    <div id=\"loadingSpinner\" class=\"spinner-border text-primary\" role=\"status\">\n                      <span class=\"visually-hidden\">Loading...</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col\"><h5 class=\"modal-title\" id=\"exampleModalLabel\">We are validating your transaction, please wait</h5></div>\n              </div>\n\n\n              <button id=\"closeModal\" type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div id=\"modalBody\" class=\"modal-body\">\n              <div id=\"success\" class=\"text-success\" style=\"font-weight: 800; display: none;\"> Transaction succesfull!</div>\n              <div id=\"failed\" class=\"text-danger\" style=\"font-weight: 800; display: none;\"> Transaction failed!</div>\n\n            </div>\n            <div class=\"modal-footer\">\n              <div id=\"closeModalFooter\" class=\"text-secondary\" style=\"font-size:smaller; display: none;\"> Now you can close this modal</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }, { type: i7.CheckoutService }, { type: i2.KlarnaComponent }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tLbGFybmFQYXltZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUcsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7QUFpQi9DLE1BQU0sT0FBTyxlQUFlO0lBVzFCLFlBQW9CLE1BQWMsRUFDeEIsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsUUFBeUIs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QUMscUNBQW1CO1FBQUEsaUJBQU0sRUFBQTtRQUcxRyxnQ0FBMEIsZUFBQTtRQUNxRSw4Q0FBNEI7UUFBQSxpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7O3VGREtoSSxlQUFlO2NBZDNCLFNBQVM7MkJBQ0UsV0FBVyxVQUViLENBQUM7Ozs7Ozs7SUFPUCxDQUFDLGFBQ1EsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcjIzJztcbi8qKiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgIFVzZXJzU2VydmljZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBLbGFybmFDb21wb25lbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnXG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVySXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlci1pdGVtJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVyJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcbmltcG9ydCB7IEpzb25QaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb2sta2xhcm5hJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29rS2xhcm5hUGF5bWVudC5odG1sJyxcbiAgc3R5bGVzOiBbYCNwYWdlLW1hc2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICB9YF0sXG4gIHByb3ZpZGVyczogW0tsYXJuYUNvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBva0tsYXJuYVBheW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGVycm9yTWVzc2FnZTogYm9vbGVhbjtcbiAgZXJyb3JtZXNzYWdlOiBTdHJpbmdbXTtcbiAgc3RhdGljIHN0cmlwZTtcbiAgc3RhdGljIHJvdXRlcjI6IFJvdXRlcjtcbiAgcHJpdmF0ZSBTT1VSQ0VfSUQgOiBzdHJpbmc7XG4gIHByaXZhdGUgQ0xJRU5UX1NFQ1JFVCA6IHN0cmluZztcbiAgcHJpdmF0ZSBhbW91bnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBNQVhfUE9MTF9DT1VOVCA6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvcmRlcnNTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hlY2tvdXQ6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIGtjIDogS2xhcm5hQ29tcG9uZW50LFxuXG5cbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb2tLbGFybmFQYXltZW50LnVzZXIgPSBuZXcgVXNlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNoZWNrb3V0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gICAgICAgICAgICAgIGlzU3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIG9yZGVySXRlbXM6IE9yZGVySXRlbVtdID0gW107XG4gICAgICAgICAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICBjb3VudHJpZXMgPSBbXTtcbiAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICAgICAgICAgICAgIHBheW1lbnRIYW5kbGVyOiBhbnkgPSBudWxsO1xuICAgICAgICAgICAgICAgc3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgZmFpbHVyZTpib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICBzdGF0aWMgdXNlcjogVXNlcjtcbiAgICAgICAgICAgICAgIHN0YXRpYyBjYXJ0IDogQ2FydDtcbiAgICAgICAgICAgICAgIHN0YXRpYyBkYXRhO1xuICAgICAgICAgICAgICAgcm91dGVyMiA9IHRoaXMucm91dGVyO1xuXG5cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgIGF3YWl0IHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCkudGhlbigoKSA9PiB7dGhpcy5sb2FkTG9jYWxWYXJpYWJsZXMoKX0pO1xuXG5cblxuICAgIC8vbGV0IFNPVVJDRV9JRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU09VUkNFX0lEXCIpO1xuICAgIC8vbGV0IENMSUVOVF9TRUNSRVQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkNMSUVOVF9TRUNSRVRcIik7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwiU09VUkNFIElEID0gXCIgKyBTT1VSQ0VfSUQpO1xuICAgIC8vY29uc29sZS5sb2coXCJDTElFTlRfU0VDUkVUID0gIFwiICsgQ0xJRU5UX1NFQ1JFVCk7XG5cbiAgICBsZXQgcG9sbENvdW50ID0gMDtcbiAgICAvL2xldCBhbW91bnQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIikpO1xuICAgIFxuXG5cblxuICAgIGNvbnNvbGUubG9nKFwiaW5pemlhbGl6em8gb2sga2xhcm5hIHBheW1lbnRcIik7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLW1hc2snKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG4gICBcblxuICAgICAvLyBhd2FpdCBva0tsYXJuYVBheW1lbnQua2xhcm5hUGF5bWVudCgpO1xuICAgICBva0tsYXJuYVBheW1lbnQucG9sbEZvclNvdXJjZVN0YXR1cyh0aGlzLlNPVVJDRV9JRCx0aGlzLkNMSUVOVF9TRUNSRVQsdGhpcy5NQVhfUE9MTF9DT1VOVCwgcG9sbENvdW50LCB0aGlzLmFtb3VudCk7XG4gICAgLypcbiAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjbGllbnRJZFwiKTtcbiAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhbW91bnRcIik7ICAgIFxuICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlNPVVJDRV9JRFwiKTtcbiAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJDTElFTlRfU0VDUkVUXCIpOyAgIFxuICAgICAqLyAgICAgXG5cbiAgfVxuICBhc3luYyBpbml0U3RyaXBlRWxlbWVudHMoKXtcbiAgICBva0tsYXJuYVBheW1lbnQuc3RyaXBlID0gYXdhaXQgbG9hZFN0cmlwZSgncGtfbGl2ZV81MUxZVUNHREV5aVgzZTNQbFo2WVh6TVRNU3ZHa2NDUHJieFk3SFUzTjRQSGtKZ28wMGVYbVV4VjY1ZDgxTGVTa3MzWkNrcjRqWTdsaUpkeklQTW9INlJOWjAwcW1QdlFKTVcnLCBudWxsKTtcbiAgICB9XG5cbiAgICBsb2FkTG9jYWxWYXJpYWJsZXMoKXtcbiAgICAgIHRoaXMuU09VUkNFX0lEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJTT1VSQ0VfSURcIik7XG4gICAgdGhpcy5DTElFTlRfU0VDUkVUID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDTElFTlRfU0VDUkVUXCIpO1xuICAgIHRoaXMuYW1vdW50ID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW1vdW50XCIpKTtcbiAgICB0aGlzLk1BWF9QT0xMX0NPVU5UID0gNTAwMDtcblxuICAgICAgY29uc29sZS5sb2coXCJobyBpbml6aWFsaXp6YXRvIGxlIHZhcmlhYmlsaSA6ICBzb3VyY2UgaWQgPSBcIiArIHRoaXMuU09VUkNFX0lEICsgXCIgY2xpZW50IHNlY3JldCA9IFwiICsgdGhpcy5DTElFTlRfU0VDUkVUKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBwb2xsRm9yU291cmNlU3RhdHVzKFNPVVJDRV9JRCxDTElFTlRfU0VDUkVULE1BWF9QT0xMX0NPVU5ULCBwb2xsQ291bnQsIGFtb3VudCl7XG4gICAgICBva0tsYXJuYVBheW1lbnQuc3RyaXBlLnJldHJpZXZlU291cmNlKHtpZDogU09VUkNFX0lELCBjbGllbnRfc2VjcmV0OiBDTElFTlRfU0VDUkVUfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHJlc3VsdC5zb3VyY2U7XG4gICAgICAgIGlmIChzb3VyY2Uuc3RhdHVzID09PSAnY2hhcmdlYWJsZScpIHtcbiAgICAgICAgICAvLyBNYWtlIGEgcmVxdWVzdCB0byB5b3VyIHNlcnZlciB0byBjaGFyZ2UgdGhlIFNvdXJjZS5cbiAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIENoYXJnZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZVxuICAgICAgICAgIC8vcXVpIHZhIGNyZWF0byBpbCBudW92byBvcmRpbmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcbiAgICAgICAgICBva0tsYXJuYVBheW1lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjaGFyZ2FibGVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlLnN0YXR1cyA9PT0gJ3BlbmRpbmcnICYmIHBvbGxDb3VudCA8IE1BWF9QT0xMX0NPVU5UKSB7XG4gICAgICAgICAgLy8gVHJ5IGFnYWluIGluIGEgc2Vjb25kLCBpZiB0aGUgU291cmNlIGlzIHN0aWxsIGBwZW5kaW5nYDpcbiAgICAgICAgIC8vIEtsYXJuYUNvbXBvbmVudC5rbGFybmFQYXltZW50KFNPVVJDRV9JRCwgYW1vdW50KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBlbmRpbmdcIik7XG4gICAgICAgICAgcG9sbENvdW50ICs9IDE7XG4gICAgICAgICBzZXRUaW1lb3V0KCgpPT5va0tsYXJuYVBheW1lbnQucG9sbEZvclNvdXJjZVN0YXR1cyhTT1VSQ0VfSUQsQ0xJRU5UX1NFQ1JFVCxNQVhfUE9MTF9DT1VOVCwgcG9sbENvdW50LCBhbW91bnQpLCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIFNvdXJjZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZS5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIHN0YXRpYyBhc3luYyBrbGFybmFQYXltZW50KGNsaWVudElkLCBhbW91bnQpe1xuXG5cbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly93d3cuY2F0YWxkb3N0b3JlLml0L2FwaS92MS8nICsgXCJjaGFyZ2Utc291cmNlXCJcbiAgICBjb25zdCBuZXdPcmRlcnVybCA9ICdodHRwczovL3d3dy5jYXRhbGRvc3RvcmUuaXQvYXBpL3YxL29yZGVycy8nICsgXCJjcmVhdGVOZXdPcmRlclwiXG5cbiAgICBjb25zb2xlLmxvZyhcInN0byBjZXJjYW5kbyBkaSBjaGlhbWFyZSBpbCBzZXJ2ZXIgc3UgcXVlc3RvIHVybCA6IFwiICsgdXJsKTtcblxuICAgIGNvbnNvbGUubG9nKFwiY29tZSBjbGllbnRJZCBobyBxdWVzdG86IFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbGllbnRJZFwiKSk7XG4gICAgY29uc29sZS5sb2coXCJjb21lIGFtb3VudCBobyBxdWVzdG86IFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbW91bnRcIikpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIPCfkYfvuI8gY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHNvdXJjZUlkOiBjbGllbnRJZCxcbiAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICBcblxuICAgICAgaWYocmVzcG9uc2Uub2spe1xuXG4gICAgICAgIC8vYWdnaXVuZ28gbCdvcmRpbmVcblxuICAgICAgICBsZXQgb3JkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJcIikpO1xuXG5cblxuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG5ld09yZGVydXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgb3JkZXI6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSksXG4gICAgICAgICAgICBlbWFpbDogb3JkZXIuZW1haWwsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlTW9kYWxGb290ZXJcIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1NwaW5uZXJcIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICAgICAgaWYocmVzcG9uc2Uub2spe1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG8gZ2VuZXJhdG8gbCdvcmRpbmVcIilcbiAgICAgICAgICBjb25zdCBvcmRlcklkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkZXJJZCA9IFwiICsgSlNPTi5zdHJpbmdpZnkob3JkZXJJZCkpO1xuXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlTW9kYWxMYWJlbFwiKS5pbm5lclRleHQ9XCJZb3VyIG9yZGVyIG51bWJlciBpczogXCIgKyBvcmRlcklkWydfaWQnXTtcbiAgICAgICAgLy8gIG9rS2xhcm5hUGF5bWVudC5yb3V0ZXIyLm5hdmlnYXRlKFsnaHR0cDovL2xvY2FsaG9zdDo0MjAwLyMvb3JkZXJzLycgKyBvcmRlcklkWydfaWQnXV0pO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdodHRwczovL3d3dy5jYXRhbGRvc3RvcmUuaXQvb3JkZXJzLycgKyBvcmRlcklkWydfaWQnXSk7XG4gICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJobyByaWNldnV0byBpbCBwYWdhbWVudG8gbWEgbm9uIHNvbm9vIHJpdXNjaXRvIGEgZ2VuZXJhcmUgbCdvcmRpbmVcIik7XG4gICAgICB9XG5cbiAgICAgICAvLyBsZXQgb3JkZXIgPSAoT3JkZXIpIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJub24gaG8gZ2VuZXJhdG8gbmllbnRlXCIgKTtcbiAgICAgIH1cblxuXG5cblxuICAgICBcbiAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic291cmNlSWRcIik7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic291cmNlSWRcIik7XG4gIH1cblxuXG4gIHN0YXRpYyBwYXJzZUp3dCAodG9rZW4pIHtcbiAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5hdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9KS5qb2luKCcnKSk7XG5cbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XG59O1xuXG59XG4iLCI8cD52YWxpZGF0aW5nIGtsYXJuYSB0cmFuc2FjdGlvbi4uLjwvcD5cbjxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTUgY29sLWxnLTVcIj5cblxuICAgIDxkaXYgaWQ9XCJwYWdlLW1hc2tcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9kaXY+XG5cbiAgICAgIDwhLS0gTW9kYWwgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSBib3JkZXIgYm9yZGVyLWluZm9cIiBpZD1cImV4YW1wbGVNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIGJvcmRlciBib3JkZXItaW5mbyBib3JkZXItNCByb3VuZGVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBcIiA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRpbmdTcGlubmVyXCIgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LXByaW1hcnlcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj48aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5XZSBhcmUgdmFsaWRhdGluZyB5b3VyIHRyYW5zYWN0aW9uLCBwbGVhc2Ugd2FpdDwvaDU+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlTW9kYWxcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWxCb2R5XCIgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdWNjZXNzXCIgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7IGRpc3BsYXk6IG5vbmU7XCI+IFRyYW5zYWN0aW9uIHN1Y2Nlc2Z1bGwhPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJmYWlsZWRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgc3R5bGU9XCJmb250LXdlaWdodDogODAwOyBkaXNwbGF5OiBub25lO1wiPiBUcmFuc2FjdGlvbiBmYWlsZWQhPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2xvc2VNb2RhbEZvb3RlclwiIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIiBzdHlsZT1cImZvbnQtc2l6ZTpzbWFsbGVyOyBkaXNwbGF5OiBub25lO1wiPiBOb3cgeW91IGNhbiBjbG9zZSB0aGlzIG1vZGFsPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuIl19