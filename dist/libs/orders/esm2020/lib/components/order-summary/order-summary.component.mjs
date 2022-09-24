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
        args: [{ selector: 'orders-order-summary', styles: [], template: "\n   \n\n   <div class=\"order-summary\">\n       <h3>Order Summary</h3>\n       <div class=\"summary-price\">\n           <span>Products price</span>\n           <span>{{this.cart.getTotalPrice() | currency}}</span>\n       </div>\n       <div class=\"summary-price\">\n           <span>Packing and Shipping</span>\n           <span class=\"free\">Free</span>\n       </div>\n       <div class=\"to-checkout\">\n           <div class=\"summary-price\">\n               <span>Total price</span>\n               <span>{{this.cart.getTotalPrice() | currency}}</span>\n           </div>\n           <div class=\"checkout-button\" *ngIf=\"!isCheckOut\">\n               <p-button label=\"Checkout\" (onClick)=\"navigateToCheckout()\" ></p-button>\n           </div>\n       </div>\n   </div>" }]
    }], function () { return [{ type: i1.Cart }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFPLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQTs7Ozs7Ozs7SUNnQjNCLDhCQUFpRCxrQkFBQTtJQUNsQix5S0FBVywyQkFBb0IsSUFBQztJQUFFLGlCQUFXLEVBQUE7O0FEVHZGLE1BQU0sT0FBTyxxQkFBcUI7SUFNaEMsWUFBWSxtQ0FBbUM7SUFDbkMsdUNBQXVDO0lBQ2hDLElBQVcsRUFDVixNQUFjO1FBRGYsU0FBSSxHQUFKLElBQUksQ0FBTztRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMbEMsZUFBVSxHQUFHLEtBQUssQ0FBQTtRQU1MLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ3pGLENBQUM7SUFFYixRQUFRO1FBQ1IsNEJBQTRCO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1gsNkJBQTZCO0lBQzdCLENBQUM7SUFHRCxnQkFBZ0I7SUFFaEIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7MEZBN0JVLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDUC9CLDhCQUEyQixTQUFBO1FBQ25CLDZCQUFhO1FBQUEsaUJBQUs7UUFDdEIsOEJBQTJCLFdBQUE7UUFDakIsOEJBQWM7UUFBQSxpQkFBTztRQUMzQiw0QkFBTTtRQUFBLFlBQXdDOztRQUFBLGlCQUFPLEVBQUE7UUFFekQsOEJBQTJCLFlBQUE7UUFDakIscUNBQW9CO1FBQUEsaUJBQU87UUFDakMsZ0NBQW1CO1FBQUEscUJBQUk7UUFBQSxpQkFBTyxFQUFBO1FBRWxDLCtCQUF5QixjQUFBLFlBQUE7UUFFWCw0QkFBVztRQUFBLGlCQUFPO1FBQ3hCLDZCQUFNO1FBQUEsYUFBd0M7O1FBQUEsaUJBQU8sRUFBQTtRQUV6RCx3RUFFTTtRQUNWLGlCQUFNLEVBQUE7O1FBZEksZUFBd0M7UUFBeEMsb0VBQXdDO1FBU3BDLGdCQUF3QztRQUF4QyxxRUFBd0M7UUFFcEIsZUFBaUI7UUFBakIsc0NBQWlCOzt1RkRSN0MscUJBQXFCO2NBTmpDLFNBQVM7MkJBQ0Usc0JBQXNCLFVBRXhCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0IH0gZnJvbSAgJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcmRlcnMtb3JkZXItc3VtbWFyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIE9yZGVyU3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuIC8vIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICB0b3RhbFByaWNlOiBudW1iZXI7XG4gIGlzQ2hlY2tPdXQgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKC8vcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgICAgICAgICAgIC8vcHJpdmF0ZSBvcmRlcnNTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgY2FydCA6IENhcnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnVybC5pbmNsdWRlcygnY2hlY2tvdXQnKSA/IHRoaXMuaXNDaGVja091dCA9IHRydWUgOiB0aGlzLmlzQ2hlY2tPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAvLyAgdGhpcy5fZ2V0T3JkZXJTdW1tYXJ5KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgLy8gIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcbiAgfVxuXG4gIFxuICBfZ2V0T3JkZXJTdW1tYXJ5KCkge1xuIFxuICB9XG5cbiAgbmF2aWdhdGVUb0NoZWNrb3V0KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2hlY2tvdXQnXSk7XG4gICAgXG4gIH1cbn1cblxuXG5cbiIsIlxuICAgXG5cbiAgIDxkaXYgY2xhc3M9XCJvcmRlci1zdW1tYXJ5XCI+XG4gICAgICAgPGgzPk9yZGVyIFN1bW1hcnk8L2gzPlxuICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5LXByaWNlXCI+XG4gICAgICAgICAgIDxzcGFuPlByb2R1Y3RzIHByaWNlPC9zcGFuPlxuICAgICAgICAgICA8c3Bhbj57e3RoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkgfCBjdXJyZW5jeX19PC9zcGFuPlxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5LXByaWNlXCI+XG4gICAgICAgICAgIDxzcGFuPlBhY2tpbmcgYW5kIFNoaXBwaW5nPC9zcGFuPlxuICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZyZWVcIj5GcmVlPC9zcGFuPlxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3M9XCJ0by1jaGVja291dFwiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1wcmljZVwiPlxuICAgICAgICAgICAgICAgPHNwYW4+VG90YWwgcHJpY2U8L3NwYW4+XG4gICAgICAgICAgICAgICA8c3Bhbj57e3RoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkgfCBjdXJyZW5jeX19PC9zcGFuPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrb3V0LWJ1dHRvblwiICpuZ0lmPVwiIWlzQ2hlY2tPdXRcIj5cbiAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIkNoZWNrb3V0XCIgKG9uQ2xpY2spPVwibmF2aWdhdGVUb0NoZWNrb3V0KClcIiA+PC9wLWJ1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICA8L2Rpdj4iXX0=