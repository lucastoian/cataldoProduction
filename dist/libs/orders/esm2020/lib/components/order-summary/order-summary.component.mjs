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
        i0.ɵɵtext(2, "Order Summary");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1)(4, "span");
        i0.ɵɵtext(5, "Products price");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "div", 1)(9, "span");
        i0.ɵɵtext(10, "Packing and Shipping");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "span", 2);
        i0.ɵɵtext(12, "Free");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(13, "div", 3)(14, "div", 1)(15, "span");
        i0.ɵɵtext(16, "Total price");
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
        args: [{ selector: 'orders-order-summary', styles: [], template: "\n   \n\n   <div class=\"order-summary\">\n       <h3>Order Summary</h3>\n       <div class=\"summary-price\">\n           <span>Products price</span>\n           <span>{{this.cart.getTotalPrice()}}\u20AC</span>\n       </div>\n       <div class=\"summary-price\">\n           <span>Packing and Shipping</span>\n           <span class=\"free\">Free</span>\n       </div>\n       <div class=\"to-checkout\">\n           <div class=\"summary-price\">\n               <span>Total price</span>\n               <span>{{this.cart.getTotalPrice()}}\u20AC</span>\n           </div>\n           <div class=\"checkout-button\" *ngIf=\"!isCheckOut\">\n               <p-button label=\"Checkout\" (onClick)=\"navigateToCheckout()\" ></p-button>\n           </div>\n       </div>\n   </div>" }]
    }], function () { return [{ type: i1.Cart }, { type: i2.Router }]; }, { isCheckOut: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFPLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUE7Ozs7Ozs7O0lDZ0IzQiw4QkFBaUQsa0JBQUE7SUFDbEIseUtBQVcsMkJBQW9CLElBQUM7SUFBRSxpQkFBVyxFQUFBOztBRFR2RixNQUFNLE9BQU8scUJBQXFCO0lBUWhDLFlBQVksbUNBQW1DO0lBQ25DLHVDQUF1QztJQUNoQyxJQUFXLEVBQ1YsTUFBYztRQURmLFNBQUksR0FBSixJQUFJLENBQU87UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ3pGLENBQUM7SUFFYixRQUFRO1FBQ1IsNEJBQTRCO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1gsNkJBQTZCO0lBQzdCLENBQUM7SUFHRCxnQkFBZ0I7SUFFaEIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7MEZBL0JVLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDUC9CLDhCQUEyQixTQUFBO1FBQ25CLDZCQUFhO1FBQUEsaUJBQUs7UUFDdEIsOEJBQTJCLFdBQUE7UUFDakIsOEJBQWM7UUFBQSxpQkFBTztRQUMzQiw0QkFBTTtRQUFBLFlBQThCO1FBQUEsaUJBQU8sRUFBQTtRQUUvQyw4QkFBMkIsV0FBQTtRQUNqQixxQ0FBb0I7UUFBQSxpQkFBTztRQUNqQyxnQ0FBbUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFPLEVBQUE7UUFFbEMsK0JBQXlCLGNBQUEsWUFBQTtRQUVYLDRCQUFXO1FBQUEsaUJBQU87UUFDeEIsNkJBQU07UUFBQSxhQUE4QjtRQUFBLGlCQUFPLEVBQUE7UUFFL0Msd0VBRU07UUFDVixpQkFBTSxFQUFBOztRQWRJLGVBQThCO1FBQTlCLDZEQUE4QjtRQVMxQixnQkFBOEI7UUFBOUIsNkRBQThCO1FBRVYsZUFBaUI7UUFBakIsc0NBQWlCOzt1RkRSN0MscUJBQXFCO2NBTmpDLFNBQVM7MkJBQ0Usc0JBQXNCLFVBRXhCLEVBQUU7NEVBU1YsVUFBVTtrQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCB9IGZyb20gICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29yZGVycy1vcmRlci1zdW1tYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgT3JkZXJTdW1tYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gLy8gZW5kU3VicyQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHRvdGFsUHJpY2U6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBpc0NoZWNrT3V0OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKC8vcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgICAgICAgICAgIC8vcHJpdmF0ZSBvcmRlcnNTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgY2FydCA6IENhcnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnVybC5pbmNsdWRlcygnY2hlY2tvdXQnKSA/IHRoaXMuaXNDaGVja091dCA9IHRydWUgOiB0aGlzLmlzQ2hlY2tPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAvLyAgdGhpcy5fZ2V0T3JkZXJTdW1tYXJ5KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgLy8gIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcbiAgfVxuXG4gIFxuICBfZ2V0T3JkZXJTdW1tYXJ5KCkge1xuIFxuICB9XG5cbiAgbmF2aWdhdGVUb0NoZWNrb3V0KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2hlY2tvdXQnXSk7XG4gICAgXG4gIH1cbn1cblxuXG5cbiIsIlxuICAgXG5cbiAgIDxkaXYgY2xhc3M9XCJvcmRlci1zdW1tYXJ5XCI+XG4gICAgICAgPGgzPk9yZGVyIFN1bW1hcnk8L2gzPlxuICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5LXByaWNlXCI+XG4gICAgICAgICAgIDxzcGFuPlByb2R1Y3RzIHByaWNlPC9zcGFuPlxuICAgICAgICAgICA8c3Bhbj57e3RoaXMuY2FydC5nZXRUb3RhbFByaWNlKCl9feKCrDwvc3Bhbj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1wcmljZVwiPlxuICAgICAgICAgICA8c3Bhbj5QYWNraW5nIGFuZCBTaGlwcGluZzwvc3Bhbj5cbiAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmcmVlXCI+RnJlZTwvc3Bhbj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwidG8tY2hlY2tvdXRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcHJpY2VcIj5cbiAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsIHByaWNlPC9zcGFuPlxuICAgICAgICAgICAgICAgPHNwYW4+e3t0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpfX3igqw8L3NwYW4+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tvdXQtYnV0dG9uXCIgKm5nSWY9XCIhaXNDaGVja091dFwiPlxuICAgICAgICAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiQ2hlY2tvdXRcIiAob25DbGljayk9XCJuYXZpZ2F0ZVRvQ2hlY2tvdXQoKVwiID48L3AtYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgIDwvZGl2PiJdfQ==