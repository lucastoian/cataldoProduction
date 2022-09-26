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
import { Cart } from '@eshop-frontend/users';
import { User } from '../../models/user';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@eshop-frontend/users";
import * as i3 from "@angular/forms";
import * as i4 from "../../services/cart.service";
import * as i5 from "../../services/orders.service";
import * as i6 from "primeng/api";
import * as i7 from "../../services/checkout.service";
export class okKlarnaPayment {
    constructor(router, usersService, formBuilder, cartService, ordersService, messageService, checkout, kc, cart) {
        this.router = router;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.messageService = messageService;
        this.checkout = checkout;
        this.kc = kc;
        this.cart = cart;
        this.isSubmitted = false;
        this.orderItems = [];
        this.countries = [];
        this.unsubscribe$ = new Subject();
        this.paymentHandler = null;
        this.success = false;
        this.failure = false;
        this.user = new User;
    }
    async ngOnInit() {
        if (localStorage.getItem("sourceId") != null) {
            await okKlarnaPayment.klarnaPayment();
        }
    }
    static async klarnaPayment() {
        const url = 'https://cataldoproduction.herokuapp.com/api/v1/' + "charge-source";
        console.log("sto cercando di chiamare il server su questo url : " + url);
        try {
            // 👇️ const response: Response
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    sourceId: localStorage.getItem("sourceId"),
                    amount: localStorage.getItem("amount"),
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
        }
        catch (error) {
            console.log('error message: ', error.message);
            localStorage.removeItem("sourceId");
        }
        localStorage.removeItem("sourceId");
    }
}
okKlarnaPayment.ɵfac = function okKlarnaPayment_Factory(t) { return new (t || okKlarnaPayment)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UsersService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.CartService), i0.ɵɵdirectiveInject(i5.OrdersService), i0.ɵɵdirectiveInject(i6.MessageService), i0.ɵɵdirectiveInject(i7.CheckoutService), i0.ɵɵdirectiveInject(i2.KlarnaComponent), i0.ɵɵdirectiveInject(i2.Cart)); };
okKlarnaPayment.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: okKlarnaPayment, selectors: [["ok-klarna"]], features: [i0.ɵɵProvidersFeature([KlarnaComponent])], decls: 2, vars: 0, template: function okKlarnaPayment_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "validating klarna transaction...");
        i0.ɵɵelementEnd();
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
  }`], providers: [KlarnaComponent], template: "<p>validating klarna transaction...</p>\n\n\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.UsersService }, { type: i3.FormBuilder }, { type: i4.CartService }, { type: i5.OrdersService }, { type: i6.MessageService }, { type: i7.CheckoutService }, { type: i2.KlarnaComponent }, { type: i2.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tLbGFybmFQYXltZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9wYWdlcy9va0tsYXJuYVBheW1lbnQvb2tLbGFybmFQYXltZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYSxXQUFXLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUcsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7QUFpQnpDLE1BQU0sT0FBTyxlQUFlO0lBSzFCLFlBQW9CLE1BQWMsRUFDeEIsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsUUFBeUIsRUFDekIsRUFBb0IsRUFDcEIsSUFBVTtRQVJBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQWtCO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQU07UUFNUixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUU3QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2QsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMzQyxtQkFBYyxHQUFRLElBQUksQ0FBQztRQUMzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFYdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztJQUN2QixDQUFDO0lBZ0JiLEtBQUssQ0FBQyxRQUFRO1FBRVosSUFBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBQztZQUMxQyxNQUFNLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN2QztJQUdILENBQUM7SUFHRCxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWE7UUFHeEIsTUFBTSxHQUFHLEdBQUcsaURBQWlELEdBQUcsZUFBZSxDQUFBO1FBRS9FLE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELEdBQUcsR0FBRyxDQUFDLENBQUM7UUFHekUsSUFBSTtZQUNGLCtCQUErQjtZQUMvQixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNuQixRQUFRLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7b0JBQzFDLE1BQU0sRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztpQkFDdkMsQ0FBQztnQkFDRixPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtvQkFDbEMsTUFBTSxFQUFFLGtCQUFrQjtpQkFDM0I7YUFDRixDQUFDLENBQUM7U0FHSjtRQUFDLE9BQU0sS0FBSyxFQUFDO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyQztRQUNELFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OEVBdEVVLGVBQWU7a0VBQWYsZUFBZSwrREFIZixDQUFDLGVBQWUsQ0FBQztRQy9COUIseUJBQUc7UUFBQSxnREFBZ0M7UUFBQSxpQkFBSTs7dUZEa0MxQixlQUFlO2NBZDNCLFNBQVM7MkJBQ0UsV0FBVyxVQUViLENBQUM7Ozs7Ozs7SUFPUCxDQUFDLGFBQ1EsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcjIzJztcbi8qKiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgIFVzZXJzU2VydmljZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBLbGFybmFDb21wb25lbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnXG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVySXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlci1pdGVtJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVyJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29rLWtsYXJuYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9va0tsYXJuYVBheW1lbnQuaHRtbCcsXG4gIHN0eWxlczogW2AjcGFnZS1tYXNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgfWBdLFxuICBwcm92aWRlcnM6IFtLbGFybmFDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3Mgb2tLbGFybmFQYXltZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBlcnJvck1lc3NhZ2U6IGJvb2xlYW47XG4gIGVycm9ybWVzc2FnZTogU3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNoZWNrb3V0OiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBrYyA6IEtsYXJuYUNvbXBvbmVudCxcbiAgICBwcml2YXRlIGNhcnQ6IENhcnQsXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY2hlY2tvdXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgb3JkZXJJdGVtczogT3JkZXJJdGVtW10gPSBbXTtcbiAgICAgICAgICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgIGNvdW50cmllcyA9IFtdO1xuICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICAgICAgICAgcGF5bWVudEhhbmRsZXI6IGFueSA9IG51bGw7XG4gICAgICAgICAgICAgICBzdWNjZXNzOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICBmYWlsdXJlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgIHVzZXI6IFVzZXI7XG4gICAgICAgICAgICAgICBkYXRhO1xuXG5cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgIFxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic291cmNlSWRcIikgIT0gbnVsbCl7XG4gICAgICBhd2FpdCBva0tsYXJuYVBheW1lbnQua2xhcm5hUGF5bWVudCgpO1xuICAgIH1cbiAgICAgIFxuXG4gIH1cblxuXG4gIHN0YXRpYyBhc3luYyBrbGFybmFQYXltZW50KCl7XG5cblxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vYXBpL3YxLycgKyBcImNoYXJnZS1zb3VyY2VcIlxuXG4gICAgY29uc29sZS5sb2coXCJzdG8gY2VyY2FuZG8gZGkgY2hpYW1hcmUgaWwgc2VydmVyIHN1IHF1ZXN0byB1cmwgOiBcIiArIHVybCk7XG5cblxuICAgIHRyeSB7XG4gICAgICAvLyDwn5GH77iPIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBzb3VyY2VJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3VyY2VJZFwiKSwgXG4gICAgICAgICAgYW1vdW50OiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFtb3VudFwiKSxcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgXG4gICAgfSBjYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInNvdXJjZUlkXCIpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInNvdXJjZUlkXCIpO1xuICB9XG59XG4iLCI8cD52YWxpZGF0aW5nIGtsYXJuYSB0cmFuc2FjdGlvbi4uLjwvcD5cblxuXG4iXX0=