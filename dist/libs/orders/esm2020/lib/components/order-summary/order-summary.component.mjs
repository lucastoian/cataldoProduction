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
OrderSummaryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OrderSummaryComponent, selectors: [["orders-order-summary"]], inputs: { isCheckOut: "isCheckOut" }, decls: 20, vars: 3, consts: [[1, "order-summary"], [1, "summary-price"], [1, "free"], [1, "to-checkout"], ["class", "checkout-button", 4, "ngIf"], [1, "checkout-button"], ["label", "Procedi al Pagamento", 3, "onClick"]], template: function OrderSummaryComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'orders-order-summary', styles: [], template: "\n   \n\n   <div class=\"order-summary\">\n       <h3>Riepilogo dell'ordine</h3>\n       <div class=\"summary-price\">\n           <span>Prezzo dei prodotti</span>\n           <span>{{this.cart.getTotalPrice()}}\u20AC</span>\n       </div>\n       <div class=\"summary-price\">\n           <span>Imballaggio e Spedizione</span>\n           <span class=\"free\">Gratis</span>\n       </div>\n       <div class=\"to-checkout\">\n           <div class=\"summary-price\">\n               <span>Totale Prezzo</span>\n               <span>{{this.cart.getTotalPrice()}}\u20AC</span>\n           </div>\n           <div class=\"checkout-button\" *ngIf=\"!isCheckOut\">\n               <p-button label=\"Procedi al Pagamento\" (onClick)=\"navigateToCheckout()\" ></p-button>\n           </div>\n       </div>\n   </div>" }]
    }], function () { return [{ type: i1.CartService }, { type: i2.Router }]; }, { isCheckOut: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc3VtbWFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7O0lDZS9DLDhCQUFpRCxrQkFBQTtJQUNOLHlLQUFXLDJCQUFvQixJQUFDO0lBQUUsaUJBQVcsRUFBQTs7QURSbkcsTUFBTSxPQUFPLHFCQUFxQjtJQVNoQyxZQUFZLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDL0IsV0FBd0IsRUFDeEIsTUFBYztRQURkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ3pGLENBQUM7SUFFYixRQUFRO1FBQ1IsNEJBQTRCO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1gsNkJBQTZCO0lBQzdCLENBQUM7SUFHRCxnQkFBZ0I7SUFFaEIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7MEZBakNVLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDUi9CLDhCQUEyQixTQUFBO1FBQ25CLHFDQUFxQjtRQUFBLGlCQUFLO1FBQzlCLDhCQUEyQixXQUFBO1FBQ2pCLG1DQUFtQjtRQUFBLGlCQUFPO1FBQ2hDLDRCQUFNO1FBQUEsWUFBOEI7UUFBQSxpQkFBTyxFQUFBO1FBRS9DLDhCQUEyQixXQUFBO1FBQ2pCLHlDQUF3QjtRQUFBLGlCQUFPO1FBQ3JDLGdDQUFtQjtRQUFBLHVCQUFNO1FBQUEsaUJBQU8sRUFBQTtRQUVwQywrQkFBeUIsY0FBQSxZQUFBO1FBRVgsOEJBQWE7UUFBQSxpQkFBTztRQUMxQiw2QkFBTTtRQUFBLGFBQThCO1FBQUEsaUJBQU8sRUFBQTtRQUUvQyx3RUFFTTtRQUNWLGlCQUFNLEVBQUE7O1FBZEksZUFBOEI7UUFBOUIsNkRBQThCO1FBUzFCLGdCQUE4QjtRQUE5Qiw2REFBOEI7UUFFVixlQUFpQjtRQUFqQixzQ0FBaUI7O3VGRFA3QyxxQkFBcUI7Y0FOakMsU0FBUzsyQkFDRSxzQkFBc0IsVUFFeEIsRUFBRTttRkFVVixVQUFVO2tCQURULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0IH0gZnJvbSAgJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3JkZXJzLW9yZGVyLXN1bW1hcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBPcmRlclN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAvLyBlbmRTdWJzJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgdG90YWxQcmljZTogbnVtYmVyO1xuICBwdWJsaWMgY2FydCA6IENhcnQ7XG5cbiAgQElucHV0KClcbiAgaXNDaGVja091dDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigvL3ByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAvL3ByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnVybC5pbmNsdWRlcygnY2hlY2tvdXQnKSA/IHRoaXMuaXNDaGVja091dCA9IHRydWUgOiB0aGlzLmlzQ2hlY2tPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAvLyAgdGhpcy5fZ2V0T3JkZXJTdW1tYXJ5KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgLy8gIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcbiAgfVxuXG4gIFxuICBfZ2V0T3JkZXJTdW1tYXJ5KCkge1xuIFxuICB9XG5cbiAgbmF2aWdhdGVUb0NoZWNrb3V0KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2hlY2tvdXQnXSk7XG4gICAgXG4gIH1cbn1cblxuXG5cbiIsIlxuICAgXG5cbiAgIDxkaXYgY2xhc3M9XCJvcmRlci1zdW1tYXJ5XCI+XG4gICAgICAgPGgzPlJpZXBpbG9nbyBkZWxsJ29yZGluZTwvaDM+XG4gICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcHJpY2VcIj5cbiAgICAgICAgICAgPHNwYW4+UHJlenpvIGRlaSBwcm9kb3R0aTwvc3Bhbj5cbiAgICAgICAgICAgPHNwYW4+e3t0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpfX3igqw8L3NwYW4+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnktcHJpY2VcIj5cbiAgICAgICAgICAgPHNwYW4+SW1iYWxsYWdnaW8gZSBTcGVkaXppb25lPC9zcGFuPlxuICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZyZWVcIj5HcmF0aXM8L3NwYW4+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cInRvLWNoZWNrb3V0XCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5LXByaWNlXCI+XG4gICAgICAgICAgICAgICA8c3Bhbj5Ub3RhbGUgUHJlenpvPC9zcGFuPlxuICAgICAgICAgICAgICAgPHNwYW4+e3t0aGlzLmNhcnQuZ2V0VG90YWxQcmljZSgpfX3igqw8L3NwYW4+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tvdXQtYnV0dG9uXCIgKm5nSWY9XCIhaXNDaGVja091dFwiPlxuICAgICAgICAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiUHJvY2VkaSBhbCBQYWdhbWVudG9cIiAob25DbGljayk9XCJuYXZpZ2F0ZVRvQ2hlY2tvdXQoKVwiID48L3AtYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgIDwvZGl2PiJdfQ==