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
} }
export class OrderSummaryComponent {
    constructor(//private cartService: CartService,
    //private ordersService: OrdersService,
    cartService, router) {
        this.cartService = cartService;
        this.router = router;
        this.cart = this.cartService.getCart();
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
OrderSummaryComponent.ɵfac = function OrderSummaryComponent_Factory(t) { return new (t || OrderSummaryComponent)(i0.ɵɵdirectiveInject(i1.CartService), i0.ɵɵdirectiveInject(i2.Router)); };
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
    }], function () { return [{ type: i1.CartService }, { type: i2.Router }]; }, { isCheckOut: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7O0lDZS9DLDhCQUFpRCxrQkFBQTtJQUNsQix5S0FBVywyQkFBb0IsSUFBQztJQUFFLGlCQUFXLEVBQUE7O0FEUnZGLE1BQU0sT0FBTyxxQkFBcUI7SUFTaEMsWUFBWSxtQ0FBbUM7SUFDbkMsdUNBQXVDO0lBQy9CLFdBQXdCLEVBQ3hCLE1BQWM7UUFEZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUN6RixDQUFDO0lBRWIsUUFBUTtRQUNSLDRCQUE0QjtJQUM1QixDQUFDO0lBRUQsV0FBVztRQUNYLDZCQUE2QjtJQUM3QixDQUFDO0lBR0QsZ0JBQWdCO0lBRWhCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRXRDLENBQUM7OzBGQWpDVSxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ1IvQiw4QkFBMkIsU0FBQTtRQUNuQixxQ0FBcUI7UUFBQSxpQkFBSztRQUM5Qiw4QkFBMkIsV0FBQTtRQUNqQixtQ0FBbUI7UUFBQSxpQkFBTztRQUNoQyw0QkFBTTtRQUFBLFlBQThCO1FBQUEsaUJBQU8sRUFBQTtRQUUvQyw4QkFBMkIsV0FBQTtRQUNqQix5Q0FBd0I7UUFBQSxpQkFBTztRQUNyQyxnQ0FBbUI7UUFBQSx1QkFBTTtRQUFBLGlCQUFPLEVBQUE7UUFFcEMsK0JBQXlCLGNBQUEsWUFBQTtRQUVYLDhCQUFhO1FBQUEsaUJBQU87UUFDMUIsNkJBQU07UUFBQSxhQUE4QjtRQUFBLGlCQUFPLEVBQUE7UUFFL0Msd0VBRU07UUFDVixpQkFBTSxFQUFBOztRQWRJLGVBQThCO1FBQTlCLDZEQUE4QjtRQVMxQixnQkFBOEI7UUFBOUIsNkRBQThCO1FBRVYsZUFBaUI7UUFBakIsc0NBQWlCOzt1RkRQN0MscUJBQXFCO2NBTmpDLFNBQVM7MkJBQ0Usc0JBQXNCLFVBRXhCLEVBQUU7bUZBVVYsVUFBVTtrQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCB9IGZyb20gICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29yZGVycy1vcmRlci1zdW1tYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgT3JkZXJTdW1tYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gLy8gZW5kU3VicyQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHRvdGFsUHJpY2U6IG51bWJlcjtcbiAgcHVibGljIGNhcnQgOiBDYXJ0O1xuXG4gIEBJbnB1dCgpXG4gIGlzQ2hlY2tPdXQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoLy9wcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICAgICAgICAgICAgLy9wcml2YXRlIG9yZGVyc1NlcnZpY2U6IE9yZGVyc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJ0ID0gdGhpcy5jYXJ0U2VydmljZS5nZXRDYXJ0KCk7XG4gICAgICAgICAgICAgICB0aGlzLnJvdXRlci51cmwuaW5jbHVkZXMoJ2NoZWNrb3V0JykgPyB0aGlzLmlzQ2hlY2tPdXQgPSB0cnVlIDogdGhpcy5pc0NoZWNrT3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgLy8gIHRoaXMuX2dldE9yZGVyU3VtbWFyeSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gIC8vICB0aGlzLmVuZFN1YnMkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBcbiAgX2dldE9yZGVyU3VtbWFyeSgpIHtcbiBcbiAgfVxuXG4gIG5hdmlnYXRlVG9DaGVja291dCgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NoZWNrb3V0J10pO1xuICAgIFxuICB9XG59XG5cblxuXG4iLCJcbiAgIFxuXG4gICA8ZGl2IGNsYXNzPVwib3JkZXItc3VtbWFyeVwiPlxuICAgICAgIDxoMz5SaWVwaWxvZ28gZGVsbCdvcmRpbmU8L2gzPlxuICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5LXByaWNlXCI+XG4gICAgICAgICAgIDxzcGFuPlByZXp6byBkZWkgcHJvZG90dGk8L3NwYW4+XG4gICAgICAgICAgIDxzcGFuPnt7dGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKX194oKsPC9zcGFuPlxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5LXByaWNlXCI+XG4gICAgICAgICAgIDxzcGFuPkltYmFsbGFnZ2lvIGUgU3BlZGl6aW9uZTwvc3Bhbj5cbiAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmcmVlXCI+R3JhdGlzPC9zcGFuPlxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3M9XCJ0by1jaGVja291dFwiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeS1wcmljZVwiPlxuICAgICAgICAgICAgICAgPHNwYW4+VG90YWxlIFByZXp6bzwvc3Bhbj5cbiAgICAgICAgICAgICAgIDxzcGFuPnt7dGhpcy5jYXJ0LmdldFRvdGFsUHJpY2UoKX194oKsPC9zcGFuPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrb3V0LWJ1dHRvblwiICpuZ0lmPVwiIWlzQ2hlY2tPdXRcIj5cbiAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIkNoZWNrb3V0XCIgKG9uQ2xpY2spPVwibmF2aWdhdGVUb0NoZWNrb3V0KClcIiA+PC9wLWJ1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICA8L2Rpdj4iXX0=