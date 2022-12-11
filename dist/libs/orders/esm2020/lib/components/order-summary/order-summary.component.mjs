import { Cart } from '@eshop-frontend/users';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@eshop-frontend/users";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "primeng/button";
function OrderSummaryComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "p-button", 6);
    i0.ɵɵlistener("onClick", function OrderSummaryComponent_div_19_Template_p_button_onClick_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.navigateToCheckout(); });
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
OrderSummaryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OrderSummaryComponent, selectors: [["orders-order-summary"]], inputs: { isCheckOut: "isCheckOut" }, decls: 20, vars: 3, consts: [[1, "order-summary"], [1, "summary-price"], [1, "free"], [1, "to-checkout"], ["class", "checkout-button", 4, "ngIf"], [1, "checkout-button"], ["label", "Checkout", 3, "onClick"]], template: function OrderSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h3");
        i0.ɵɵtext(2, "Riepilogo dell'ordine");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1)(4, "span");
        i0.ɵɵtext(5, "Prezzo dei prodotti");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "div", 1)(9, "span");
        i0.ɵɵtext(10, "Imballaggio e Spedizione");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "span", 2);
        i0.ɵɵtext(12, "Gratis");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(13, "div", 3)(14, "div", 1)(15, "span");
        i0.ɵɵtext(16, "Totale Prezzo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "span");
        i0.ɵɵtext(18);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(19, OrderSummaryComponent_div_19_Template, 2, 0, "div", 4);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1("", ctx.cart.getTotalPrice(), "\u20AC");
        i0.ɵɵadvance(11);
        i0.ɵɵtextInterpolate1("", ctx.cart.getTotalPrice(), "\u20AC");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isCheckOut);
    } }, directives: [i3.NgIf, i4.Button], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderSummaryComponent, [{
        type: Component,
        args: [{ selector: 'orders-order-summary', styles: [], template: "\n   \n\n   <div class=\"order-summary\">\n       <h3>Riepilogo dell'ordine</h3>\n       <div class=\"summary-price\">\n           <span>Prezzo dei prodotti</span>\n           <span>{{this.cart.getTotalPrice()}}\u20AC</span>\n       </div>\n       <div class=\"summary-price\">\n           <span>Imballaggio e Spedizione</span>\n           <span class=\"free\">Gratis</span>\n       </div>\n       <div class=\"to-checkout\">\n           <div class=\"summary-price\">\n               <span>Totale Prezzo</span>\n               <span>{{this.cart.getTotalPrice()}}\u20AC</span>\n           </div>\n           <div class=\"checkout-button\" *ngIf=\"!isCheckOut\">\n               <p-button label=\"Checkout\" (onClick)=\"navigateToCheckout()\" ></p-button>\n           </div>\n       </div>\n   </div>" }]
    }], function () { return [{ type: i1.Cart }, { type: i2.Router }]; }, { isCheckOut: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFPLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUE7Ozs7Ozs7O0lDZ0IzQiw4QkFBaUQsa0JBQUE7SUFDbEIseUtBQVcsMkJBQW9CLElBQUM7SUFBRSxpQkFBVyxFQUFBOztBRFR2RixNQUFNLE9BQU8scUJBQXFCO0lBUWhDLFlBQVksbUNBQW1DO0lBQ25DLHVDQUF1QztJQUNoQyxJQUFXLEVBQ1YsTUFBYztRQURmLFNBQUksR0FBSixJQUFJLENBQU87UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ3pGLENBQUM7SUFFYixRQUFRO1FBQ1IsNEJBQTRCO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1gsNkJBQTZCO0lBQzdCLENBQUM7SUFHRCxnQkFBZ0I7SUFFaEIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7MEZBL0JVLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDUC9CLDhCQUEyQixTQUFBO1FBQ25CLHFDQUFxQjtRQUFBLGlCQUFLO1FBQzlCLDhCQUEyQixXQUFBO1FBQ2pCLG1DQUFtQjtRQUFBLGlCQUFPO1FBQ2hDLDRCQUFNO1FBQUEsWUFBOEI7UUFBQSxpQkFBTyxFQUFBO1FBRS9DLDhCQUEyQixXQUFBO1FBQ2pCLHlDQUF3QjtRQUFBLGlCQUFPO1FBQ3JDLGdDQUFtQjtRQUFBLHVCQUFNO1FBQUEsaUJBQU8sRUFBQTtRQUVwQywrQkFBeUIsY0FBQSxZQUFBO1FBRVgsOEJBQWE7UUFBQSxpQkFBTztRQUMxQiw2QkFBTTtRQUFBLGFBQThCO1FBQUEsaUJBQU8sRUFBQTtRQUUvQyx3RUFFTTtRQUNWLGlCQUFNLEVBQUE7O1FBZEksZUFBOEI7UUFBOUIsNkRBQThCO1FBUzFCLGdCQUE4QjtRQUE5Qiw2REFBOEI7UUFFVixlQUFpQjtRQUFqQixzQ0FBaUI7O3VGRFI3QyxxQkFBcUI7Y0FOakMsU0FBUzsyQkFDRSxzQkFBc0IsVUFFeEIsRUFBRTs0RUFTVixVQUFVO2tCQURULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0IH0gZnJvbSAgJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3JkZXJzLW9yZGVyLXN1bW1hcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBPcmRlclN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAvLyBlbmRTdWJzJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgdG90YWxQcmljZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGlzQ2hlY2tPdXQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoLy9wcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICAgICAgICAgICAgLy9wcml2YXRlIG9yZGVyc1NlcnZpY2U6IE9yZGVyc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBjYXJ0IDogQ2FydCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIudXJsLmluY2x1ZGVzKCdjaGVja291dCcpID8gdGhpcy5pc0NoZWNrT3V0ID0gdHJ1ZSA6IHRoaXMuaXNDaGVja091dCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIC8vICB0aGlzLl9nZXRPcmRlclN1bW1hcnkoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAvLyAgdGhpcy5lbmRTdWJzJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgXG4gIF9nZXRPcmRlclN1bW1hcnkoKSB7XG4gXG4gIH1cblxuICBuYXZpZ2F0ZVRvQ2hlY2tvdXQoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jaGVja291dCddKTtcbiAgICBcbiAgfVxufVxuXG5cblxuIiwiXG4gICBcblxuICAgPGRpdiBjbGFzcz1cIm9yZGVyLXN1bW1hcnlcIj5cbiAgICAgICA8aDM+UmllcGlsb2dvIGRlbGwnb3JkaW5lPC9oMz5cbiAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1wcmljZVwiPlxuICAgICAgICAgICA8c3Bhbj5QcmV6em8gZGVpIHByb2RvdHRpPC9zcGFuPlxuICAgICAgICAgICA8c3Bhbj57e3RoaXMuY2FydC5nZXRUb3RhbFByaWNlKCl9feKCrDwvc3Bhbj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1wcmljZVwiPlxuICAgICAgICAgICA8c3Bhbj5JbWJhbGxhZ2dpbyBlIFNwZWRpemlvbmU8L3NwYW4+XG4gICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnJlZVwiPkdyYXRpczwvc3Bhbj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwidG8tY2hlY2tvdXRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcHJpY2VcIj5cbiAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsZSBQcmV6em88L3NwYW4+XG4gICAgICAgICAgICAgICA8c3Bhbj57e3RoaXMuY2FydC5nZXRUb3RhbFByaWNlKCl9feKCrDwvc3Bhbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja291dC1idXR0b25cIiAqbmdJZj1cIiFpc0NoZWNrT3V0XCI+XG4gICAgICAgICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJDaGVja291dFwiIChvbkNsaWNrKT1cIm5hdmlnYXRlVG9DaGVja291dCgpXCIgPjwvcC1idXR0b24+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgPC9kaXY+Il19