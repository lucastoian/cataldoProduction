import { Cart } from '@eshop-frontend/users';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@eshop-frontend/users";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "primeng/button";
function OrderSummaryComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "p-button", 6);
    i0.ɵɵlistener("onClick", function OrderSummaryComponent_div_21_Template_p_button_onClick_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.navigateToCheckout(); });
    i0.ɵɵelementEnd()();
} }
export class OrderSummaryComponent {
    constructor(//private cartService: CartService,
    //private ordersService: OrdersService,
    cart, router) {
        this.cart = cart;
        this.router = router;
        this.router.url.includes('checkout') ? this.isCheckOut = true : this.isCheckOut = false;
    }
    ngOnInit() {
        //  this._getOrderSummary();
    }
    ngOnDestroy() {
        //  this.endSubs$.complete();
    }
    _getOrderSummary() {
    }
    navigateToCheckout() {
        this.router.navigate(['/checkout']);
    }
}
OrderSummaryComponent.ɵfac = function OrderSummaryComponent_Factory(t) { return new (t || OrderSummaryComponent)(i0.ɵɵdirectiveInject(i1.Cart), i0.ɵɵdirectiveInject(i2.Router)); };
OrderSummaryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OrderSummaryComponent, selectors: [["orders-order-summary"]], inputs: { isCheckOut: "isCheckOut" }, decls: 22, vars: 7, consts: [[1, "order-summary"], [1, "summary-price"], [1, "free"], [1, "to-checkout"], ["class", "checkout-button", 4, "ngIf"], [1, "checkout-button"], ["label", "Checkout", 3, "onClick"]], template: function OrderSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h3");
        i0.ɵɵtext(2, "Order Summary");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1)(4, "span");
        i0.ɵɵtext(5, "Products price");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7);
        i0.ɵɵpipe(8, "currency");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "div", 1)(10, "span");
        i0.ɵɵtext(11, "Packing and Shipping");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "span", 2);
        i0.ɵɵtext(13, "Free");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(14, "div", 3)(15, "div", 1)(16, "span");
        i0.ɵɵtext(17, "Total price");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "span");
        i0.ɵɵtext(19);
        i0.ɵɵpipe(20, "currency");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(21, OrderSummaryComponent_div_21_Template, 2, 0, "div", 4);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 3, ctx.cart.getTotalPrice()));
        i0.ɵɵadvance(12);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 5, ctx.cart.getTotalPrice()));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isCheckOut);
    } }, directives: [i3.NgIf, i4.Button], pipes: [i3.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderSummaryComponent, [{
        type: Component,
        args: [{ selector: 'orders-order-summary', styles: [], template: "\r\n   \r\n\r\n   <div class=\"order-summary\">\r\n       <h3>Order Summary</h3>\r\n       <div class=\"summary-price\">\r\n           <span>Products price</span>\r\n           <span>{{this.cart.getTotalPrice() | currency}}</span>\r\n       </div>\r\n       <div class=\"summary-price\">\r\n           <span>Packing and Shipping</span>\r\n           <span class=\"free\">Free</span>\r\n       </div>\r\n       <div class=\"to-checkout\">\r\n           <div class=\"summary-price\">\r\n               <span>Total price</span>\r\n               <span>{{this.cart.getTotalPrice() | currency}}</span>\r\n           </div>\r\n           <div class=\"checkout-button\" *ngIf=\"!isCheckOut\">\r\n               <p-button label=\"Checkout\" (onClick)=\"navigateToCheckout()\" ></p-button>\r\n           </div>\r\n       </div>\r\n   </div>" }]
    }], function () { return [{ type: i1.Cart }, { type: i2.Router }]; }, { isCheckOut: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFPLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUE7Ozs7Ozs7O0lDZ0IzQiw4QkFBaUQsa0JBQUE7SUFDbEIseUtBQVcsMkJBQW9CLElBQUM7SUFBRSxpQkFBVyxFQUFBOztBRFR2RixNQUFNLE9BQU8scUJBQXFCO0lBUWhDLFlBQVksbUNBQW1DO0lBQ25DLHVDQUF1QztJQUNoQyxJQUFXLEVBQ1YsTUFBYztRQURmLFNBQUksR0FBSixJQUFJLENBQU87UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ3pGLENBQUM7SUFFYixRQUFRO1FBQ1IsNEJBQTRCO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1gsNkJBQTZCO0lBQzdCLENBQUM7SUFHRCxnQkFBZ0I7SUFFaEIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7MEZBL0JVLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDUC9CLDhCQUEyQixTQUFBO1FBQ25CLDZCQUFhO1FBQUEsaUJBQUs7UUFDdEIsOEJBQTJCLFdBQUE7UUFDakIsOEJBQWM7UUFBQSxpQkFBTztRQUMzQiw0QkFBTTtRQUFBLFlBQXdDOztRQUFBLGlCQUFPLEVBQUE7UUFFekQsOEJBQTJCLFlBQUE7UUFDakIscUNBQW9CO1FBQUEsaUJBQU87UUFDakMsZ0NBQW1CO1FBQUEscUJBQUk7UUFBQSxpQkFBTyxFQUFBO1FBRWxDLCtCQUF5QixjQUFBLFlBQUE7UUFFWCw0QkFBVztRQUFBLGlCQUFPO1FBQ3hCLDZCQUFNO1FBQUEsYUFBd0M7O1FBQUEsaUJBQU8sRUFBQTtRQUV6RCx3RUFFTTtRQUNWLGlCQUFNLEVBQUE7O1FBZEksZUFBd0M7UUFBeEMsb0VBQXdDO1FBU3BDLGdCQUF3QztRQUF4QyxxRUFBd0M7UUFFcEIsZUFBaUI7UUFBakIsc0NBQWlCOzt1RkRSN0MscUJBQXFCO2NBTmpDLFNBQVM7MkJBQ0Usc0JBQXNCLFVBRXhCLEVBQUU7NEVBU1YsVUFBVTtrQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCB9IGZyb20gICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvcmRlcnMtb3JkZXItc3VtbWFyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlclN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gLy8gZW5kU3VicyQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgdG90YWxQcmljZTogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGlzQ2hlY2tPdXQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKC8vcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgLy9wcml2YXRlIG9yZGVyc1NlcnZpY2U6IE9yZGVyc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHVibGljIGNhcnQgOiBDYXJ0LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIudXJsLmluY2x1ZGVzKCdjaGVja291dCcpID8gdGhpcy5pc0NoZWNrT3V0ID0gdHJ1ZSA6IHRoaXMuaXNDaGVja091dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgLy8gIHRoaXMuX2dldE9yZGVyU3VtbWFyeSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgLy8gIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIF9nZXRPcmRlclN1bW1hcnkoKSB7XHJcbiBcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlVG9DaGVja291dCgpe1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2hlY2tvdXQnXSk7XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiXHJcbiAgIFxyXG5cclxuICAgPGRpdiBjbGFzcz1cIm9yZGVyLXN1bW1hcnlcIj5cclxuICAgICAgIDxoMz5PcmRlciBTdW1tYXJ5PC9oMz5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5LXByaWNlXCI+XHJcbiAgICAgICAgICAgPHNwYW4+UHJvZHVjdHMgcHJpY2U8L3NwYW4+XHJcbiAgICAgICAgICAgPHNwYW4+e3t0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpIHwgY3VycmVuY3l9fTwvc3Bhbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcHJpY2VcIj5cclxuICAgICAgICAgICA8c3Bhbj5QYWNraW5nIGFuZCBTaGlwcGluZzwvc3Bhbj5cclxuICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZyZWVcIj5GcmVlPC9zcGFuPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwidG8tY2hlY2tvdXRcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5Ub3RhbCBwcmljZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPHNwYW4+e3t0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpIHwgY3VycmVuY3l9fTwvc3Bhbj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tvdXQtYnV0dG9uXCIgKm5nSWY9XCIhaXNDaGVja091dFwiPlxyXG4gICAgICAgICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJDaGVja291dFwiIChvbkNsaWNrKT1cIm5hdmlnYXRlVG9DaGVja291dCgpXCIgPjwvcC1idXR0b24+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgPC9kaXY+Il19