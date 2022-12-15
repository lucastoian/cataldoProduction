import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/cart.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "primeng/button";
function OrderSummaryComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "p-button", 6);
    i0.ɵɵlistener("onClick", function OrderSummaryComponent_div_19_Template_p_button_onClick_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.navigateToCheckout(); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("loading", ctx_r0.isLoading)("disabled", ctx_r0.canPay);
} }
export class OrderSummaryComponent {
    constructor(//private cartService: CartService,
    //private ordersService: OrdersService,
    cartService, router) {
        this.cartService = cartService;
        this.router = router;
        this.isLoading = false;
        this.canPay = true;
        this.cart = this.cartService.getCart();
        this.isLoading = false;
        if (this.cart.getTotalPrice() != 0) {
            console.log(this.cart.getTotalPrice());
            this.canPay = false;
        }
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
        this.isLoading = true;
        this.router.navigate(['/checkout']);
    }
}
OrderSummaryComponent.ɵfac = function OrderSummaryComponent_Factory(t) { return new (t || OrderSummaryComponent)(i0.ɵɵdirectiveInject(i1.CartService), i0.ɵɵdirectiveInject(i2.Router)); };
OrderSummaryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OrderSummaryComponent, selectors: [["orders-order-summary"]], inputs: { isCheckOut: "isCheckOut" }, decls: 20, vars: 3, consts: [[1, "order-summary"], [1, "summary-price"], [1, "free"], [1, "to-checkout"], ["class", "checkout-button", 4, "ngIf"], [1, "checkout-button"], ["label", "Procedi al Pagamento", 3, "loading", "disabled", "onClick"]], template: function OrderSummaryComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(19, OrderSummaryComponent_div_19_Template, 2, 2, "div", 4);
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
        args: [{ selector: 'orders-order-summary', styles: [], template: "\n   \n\n   <div class=\"order-summary\">\n       <h3>Riepilogo dell'ordine</h3>\n       <div class=\"summary-price\">\n           <span>Prezzo dei prodotti</span>\n           <span>{{this.cart.getTotalPrice()}}\u20AC</span>\n       </div>\n       <div class=\"summary-price\">\n           <span>Imballaggio e Spedizione</span>\n           <span class=\"free\">Gratis</span>\n       </div>\n       <div class=\"to-checkout\">\n           <div class=\"summary-price\">\n               <span>Totale Prezzo</span>\n               <span>{{this.cart.getTotalPrice()}}\u20AC</span>\n           </div>\n           <div class=\"checkout-button\" *ngIf=\"!isCheckOut\">\n               <p-button label=\"Procedi al Pagamento\" (onClick)=\"navigateToCheckout()\" [loading]=\"isLoading\" [disabled]=\"canPay\" ></p-button>\n           </div>\n       </div>\n   </div>" }]
    }], function () { return [{ type: i1.CartService }, { type: i2.Router }]; }, { isCheckOut: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7O0lDZS9DLDhCQUFpRCxrQkFBQTtJQUNOLHlLQUFXLDJCQUFvQixJQUFDO0lBQTRDLGlCQUFXLEVBQUE7OztJQUF0RCxlQUFxQjtJQUFyQiwwQ0FBcUIsMkJBQUE7O0FEUjVHLE1BQU0sT0FBTyxxQkFBcUI7SUFXaEMsWUFBWSxtQ0FBbUM7SUFDbkMsdUNBQXVDO0lBQy9CLFdBQXdCLEVBRXhCLE1BQWM7UUFGZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUV4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBWGxDLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFXLElBQUksQ0FBQztRQVdSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxFQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDekYsQ0FBQztJQUViLFFBQVE7UUFDUiw0QkFBNEI7SUFDNUIsQ0FBQztJQUVELFdBQVc7UUFDWCw2QkFBNkI7SUFDN0IsQ0FBQztJQUdELGdCQUFnQjtJQUVoQixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUV0QyxDQUFDOzswRkExQ1UscUJBQXFCO3dFQUFyQixxQkFBcUI7UUNSL0IsOEJBQTJCLFNBQUE7UUFDbkIscUNBQXFCO1FBQUEsaUJBQUs7UUFDOUIsOEJBQTJCLFdBQUE7UUFDakIsbUNBQW1CO1FBQUEsaUJBQU87UUFDaEMsNEJBQU07UUFBQSxZQUE4QjtRQUFBLGlCQUFPLEVBQUE7UUFFL0MsOEJBQTJCLFdBQUE7UUFDakIseUNBQXdCO1FBQUEsaUJBQU87UUFDckMsZ0NBQW1CO1FBQUEsdUJBQU07UUFBQSxpQkFBTyxFQUFBO1FBRXBDLCtCQUF5QixjQUFBLFlBQUE7UUFFWCw4QkFBYTtRQUFBLGlCQUFPO1FBQzFCLDZCQUFNO1FBQUEsYUFBOEI7UUFBQSxpQkFBTyxFQUFBO1FBRS9DLHdFQUVNO1FBQ1YsaUJBQU0sRUFBQTs7UUFkSSxlQUE4QjtRQUE5Qiw2REFBOEI7UUFTMUIsZ0JBQThCO1FBQTlCLDZEQUE4QjtRQUVWLGVBQWlCO1FBQWpCLHNDQUFpQjs7dUZEUDdDLHFCQUFxQjtjQU5qQyxTQUFTOzJCQUNFLHNCQUFzQixVQUV4QixFQUFFO21GQVlWLFVBQVU7a0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcnQgfSBmcm9tICAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcmRlcnMtb3JkZXItc3VtbWFyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIE9yZGVyU3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuIC8vIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICB0b3RhbFByaWNlOiBudW1iZXI7XG4gIGlzTG9hZGluZzpib29sZWFuID0gZmFsc2U7XG4gIGNhblBheTpib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGNhcnQgOiBDYXJ0O1xuXG4gIEBJbnB1dCgpXG4gIGlzQ2hlY2tPdXQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoLy9wcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICAgICAgICAgICAgLy9wcml2YXRlIG9yZGVyc1NlcnZpY2U6IE9yZGVyc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2FydC5nZXRUb3RhbFByaWNlKCkgIT0gMCl7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpKVxuICAgICAgICAgICAgICAgICAgdGhpcy5jYW5QYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB0aGlzLnJvdXRlci51cmwuaW5jbHVkZXMoJ2NoZWNrb3V0JykgPyB0aGlzLmlzQ2hlY2tPdXQgPSB0cnVlIDogdGhpcy5pc0NoZWNrT3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgLy8gIHRoaXMuX2dldE9yZGVyU3VtbWFyeSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gIC8vICB0aGlzLmVuZFN1YnMkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBcbiAgX2dldE9yZGVyU3VtbWFyeSgpIHtcbiBcbiAgfVxuXG4gIG5hdmlnYXRlVG9DaGVja291dCgpe1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jaGVja291dCddKTtcbiAgICBcbiAgfVxufVxuXG5cblxuIiwiXG4gICBcblxuICAgPGRpdiBjbGFzcz1cIm9yZGVyLXN1bW1hcnlcIj5cbiAgICAgICA8aDM+UmllcGlsb2dvIGRlbGwnb3JkaW5lPC9oMz5cbiAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1wcmljZVwiPlxuICAgICAgICAgICA8c3Bhbj5QcmV6em8gZGVpIHByb2RvdHRpPC9zcGFuPlxuICAgICAgICAgICA8c3Bhbj57e3RoaXMuY2FydC5nZXRUb3RhbFByaWNlKCl9feKCrDwvc3Bhbj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1wcmljZVwiPlxuICAgICAgICAgICA8c3Bhbj5JbWJhbGxhZ2dpbyBlIFNwZWRpemlvbmU8L3NwYW4+XG4gICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnJlZVwiPkdyYXRpczwvc3Bhbj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwidG8tY2hlY2tvdXRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcHJpY2VcIj5cbiAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsZSBQcmV6em88L3NwYW4+XG4gICAgICAgICAgICAgICA8c3Bhbj57e3RoaXMuY2FydC5nZXRUb3RhbFByaWNlKCl9feKCrDwvc3Bhbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja291dC1idXR0b25cIiAqbmdJZj1cIiFpc0NoZWNrT3V0XCI+XG4gICAgICAgICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJQcm9jZWRpIGFsIFBhZ2FtZW50b1wiIChvbkNsaWNrKT1cIm5hdmlnYXRlVG9DaGVja291dCgpXCIgW2xvYWRpbmddPVwiaXNMb2FkaW5nXCIgW2Rpc2FibGVkXT1cImNhblBheVwiID48L3AtYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgIDwvZGl2PiJdfQ==