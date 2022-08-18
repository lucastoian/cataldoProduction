import { Cart } from '@eshop-frontend/users';
import { Component } from '@angular/core';
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
        this.isCheckOut = false;
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
OrderSummaryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OrderSummaryComponent, selectors: [["orders-order-summary"]], decls: 22, vars: 7, consts: [[1, "order-summary"], [1, "summary-price"], [1, "free"], [1, "to-checkout"], ["class", "checkout-button", 4, "ngIf"], [1, "checkout-button"], ["label", "Checkout", 3, "onClick"]], template: function OrderSummaryComponent_Template(rf, ctx) { if (rf & 1) {
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
    }], function () { return [{ type: i1.Cart }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFPLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQTs7Ozs7Ozs7SUNnQjNCLDhCQUFpRCxrQkFBQTtJQUNsQix5S0FBVywyQkFBb0IsSUFBQztJQUFFLGlCQUFXLEVBQUE7O0FEVHZGLE1BQU0sT0FBTyxxQkFBcUI7SUFNaEMsWUFBWSxtQ0FBbUM7SUFDbkMsdUNBQXVDO0lBQ2hDLElBQVcsRUFDVixNQUFjO1FBRGYsU0FBSSxHQUFKLElBQUksQ0FBTztRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMbEMsZUFBVSxHQUFHLEtBQUssQ0FBQTtRQU1MLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ3pGLENBQUM7SUFFYixRQUFRO1FBQ1IsNEJBQTRCO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1gsNkJBQTZCO0lBQzdCLENBQUM7SUFHRCxnQkFBZ0I7SUFFaEIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7MEZBN0JVLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDUC9CLDhCQUEyQixTQUFBO1FBQ25CLDZCQUFhO1FBQUEsaUJBQUs7UUFDdEIsOEJBQTJCLFdBQUE7UUFDakIsOEJBQWM7UUFBQSxpQkFBTztRQUMzQiw0QkFBTTtRQUFBLFlBQXdDOztRQUFBLGlCQUFPLEVBQUE7UUFFekQsOEJBQTJCLFlBQUE7UUFDakIscUNBQW9CO1FBQUEsaUJBQU87UUFDakMsZ0NBQW1CO1FBQUEscUJBQUk7UUFBQSxpQkFBTyxFQUFBO1FBRWxDLCtCQUF5QixjQUFBLFlBQUE7UUFFWCw0QkFBVztRQUFBLGlCQUFPO1FBQ3hCLDZCQUFNO1FBQUEsYUFBd0M7O1FBQUEsaUJBQU8sRUFBQTtRQUV6RCx3RUFFTTtRQUNWLGlCQUFNLEVBQUE7O1FBZEksZUFBd0M7UUFBeEMsb0VBQXdDO1FBU3BDLGdCQUF3QztRQUF4QyxxRUFBd0M7UUFFcEIsZUFBaUI7UUFBakIsc0NBQWlCOzt1RkRSN0MscUJBQXFCO2NBTmpDLFNBQVM7MkJBQ0Usc0JBQXNCLFVBRXhCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0IH0gZnJvbSAgJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb3JkZXJzLW9yZGVyLXN1bW1hcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT3JkZXJTdW1tYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuIC8vIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHRvdGFsUHJpY2U6IG51bWJlcjtcclxuICBpc0NoZWNrT3V0ID0gZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3IoLy9wcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcclxuICAgICAgICAgICAgICAvL3ByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcclxuICAgICAgICAgICAgICBwdWJsaWMgY2FydCA6IENhcnQsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgICAgICAgICB0aGlzLnJvdXRlci51cmwuaW5jbHVkZXMoJ2NoZWNrb3V0JykgPyB0aGlzLmlzQ2hlY2tPdXQgPSB0cnVlIDogdGhpcy5pc0NoZWNrT3V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAvLyAgdGhpcy5fZ2V0T3JkZXJTdW1tYXJ5KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAvLyAgdGhpcy5lbmRTdWJzJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgX2dldE9yZGVyU3VtbWFyeSgpIHtcclxuIFxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUb0NoZWNrb3V0KCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jaGVja291dCddKTtcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJcclxuICAgXHJcblxyXG4gICA8ZGl2IGNsYXNzPVwib3JkZXItc3VtbWFyeVwiPlxyXG4gICAgICAgPGgzPk9yZGVyIFN1bW1hcnk8L2gzPlxyXG4gICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcHJpY2VcIj5cclxuICAgICAgICAgICA8c3Bhbj5Qcm9kdWN0cyBwcmljZTwvc3Bhbj5cclxuICAgICAgICAgICA8c3Bhbj57e3RoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkgfCBjdXJyZW5jeX19PC9zcGFuPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1wcmljZVwiPlxyXG4gICAgICAgICAgIDxzcGFuPlBhY2tpbmcgYW5kIFNoaXBwaW5nPC9zcGFuPlxyXG4gICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnJlZVwiPkZyZWU8L3NwYW4+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJ0by1jaGVja291dFwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsIHByaWNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj57e3RoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkgfCBjdXJyZW5jeX19PC9zcGFuPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja291dC1idXR0b25cIiAqbmdJZj1cIiFpc0NoZWNrT3V0XCI+XHJcbiAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIkNoZWNrb3V0XCIgKG9uQ2xpY2spPVwibmF2aWdhdGVUb0NoZWNrb3V0KClcIiA+PC9wLWJ1dHRvbj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj4iXX0=