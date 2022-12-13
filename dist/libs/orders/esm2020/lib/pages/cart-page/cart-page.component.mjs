import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/cart.service";
import * as i3 from "primeng/button";
import * as i4 from "@angular/common";
import * as i5 from "primeng/inputnumber";
import * as i6 from "@angular/forms";
import * as i7 from "../../components/order-summary/order-summary.component";
function CartPageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "div", 11)(3, "div", 23);
    i0.ɵɵelement(4, "img", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 25)(6, "div", 26);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 27);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 28)(11, "span", 29);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 30)(17, "p-button", 31);
    i0.ɵɵlistener("onClick", function CartPageComponent_div_9_Template_p_button_onClick_17_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.removeProductFromCart(cartItem_r1); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 32)(19, "div", 33)(20, "p-inputNumber", 34);
    i0.ɵɵlistener("ngModelChange", function CartPageComponent_div_9_Template_p_inputNumber_ngModelChange_20_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; return cartItem_r1.selected = $event; })("onInput", function CartPageComponent_div_9_Template_p_inputNumber_onInput_20_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.updateCartItemQuantity(cartItem_r1); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 35);
    i0.ɵɵtext(22, " Subtotal: ");
    i0.ɵɵelementStart(23, "span", 36);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const cartItem_r1 = ctx.$implicit;
    const index_r2 = ctx.i;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", cartItem_r1.id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r0.cart.getProductByVariantId(cartItem_r1.id).mainImage, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("alt", ctx_r0.cart.getProductByVariantId(cartItem_r1.id).name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.cart.getProductByVariantId(cartItem_r1.id).name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Size: ", cartItem_r1.size, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.cart.getProductByVariantId(cartItem_r1.id).price, "\u20AC");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.cart.getProductByVariantId(cartItem_r1.id).price - ctx_r0.cart.getProductByVariantId(cartItem_r1.id).discount, "\u20AC");
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate("id", "object-" + index_r2);
    i0.ɵɵproperty("showButtons", true)("min", 0)("max", cartItem_r1.getMaxInventory())("ngModel", cartItem_r1.selected);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", (ctx_r0.cart.getProductByVariantId(cartItem_r1.id).price - ctx_r0.cart.getProductByVariantId(cartItem_r1.id).discount) * cartItem_r1.selected, "\u20AC");
} }
export class CartPageComponent {
    constructor(router, cartService) {
        this.router = router;
        this.cartService = cartService;
        this.productNames = [];
    }
    ngOnInit() {
        this.cart = this.cartService.getCart();
        this.productVariants = this.cart.getAllVariants();
        this.productVariants.forEach(p => {
            console.log(p.getJson());
        });
        this.cart.getproducts().forEach(product => {
            this.productNames.push(product.getName());
        });
        this.items = this.cart.getTotalNumberOfItems();
    }
    ngOnDestroy() {
    }
    backToShop() {
        this.router.navigate(['/products']);
    }
    trackByMethod(index, p) {
        return p.getId();
    }
    getProductVariantByIdAndDeleteVariant(p) {
        let index = null;
        for (let i = 0; i < this.productVariants.length; i++) {
            if (this.productVariants[i].getId() === p.getId()) {
                index = i;
            }
        }
        this.cart.deleteProductVariant(p);
        this.cartService.setNewCart(this.cart);
        this.cart.updateLocalStorage();
        this.items = this.cart.getTotalNumberOfItems();
        return index;
    }
    updateCartItemQuantity(cartItem) {
        this.cart.updateLocalStorage();
        let variant = this.cart.getVariantById(cartItem.getId());
        let maxItems = variant.getMaxInventory();
        this.getElementByXpath("(//*[@id='" + cartItem.getId() + "']//button[1])[2]").setAttribute("MAX", this.cart.getVariantById(cartItem.getId()).getInventory() + this.cart.getVariantById(cartItem.getId()).getSelected());
        console.log("maxItems = " + maxItems + " selected = " + cartItem.getSelected());
        this.items = this.cart.getTotalNumberOfItems();
        if (maxItems <= cartItem.getSelected()) {
            this.getElementByXpath("(//*[@id='" + cartItem.getId() + "']//button[1])[2]").classList.toggle('incrementButtonClass');
            this.getElementByXpath("(//*[@id='" + cartItem.getId() + "']//button[1])[2]").disabled = true;
            throw new Error("Not enough items in the inventory");
        }
        else {
            this.getElementByXpath("(//*[@id='" + cartItem.getId() + "']//button[1])[2]").classList.toggle('incrementButtonClass');
            this.getElementByXpath("(//*[@id='" + cartItem.getId() + "']//button[1])[2]").disabled = false;
            return;
        }
        console.log("selected : " + cartItem.getSelected());
        //this.cart.getVariantById(cartItem.getId()).setSelectedAndUpdateInventory(cartItem.getSelected());
        cartItem.setInventory(this.cart.getVariantById(cartItem.getId()).getInventory());
        console.log("new inventory by cartItem = " + cartItem.getInventory());
        console.log("new inventory by cart = " + this.cart.getVariantById(cartItem.getId()).getInventory());
        console.log();
    }
    removeProductFromCart(p) {
        this.productVariants.splice(this.getProductVariantByIdAndDeleteVariant(p), 1);
    }
    getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.CartService)); };
CartPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartPageComponent, selectors: [["orders-cart-page"]], decls: 39, vars: 3, consts: [[1, "cart-page", "p-1"], [1, "grid"], [1, "item", "col-8"], [1, "pb-2"], ["label", "Continue shopping", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "cart-shipping"], ["class", "p-3 mb-1", "style", "    border: 1px solid var(--surface-200);", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "oos", "sm:col-4", "md:col-4", "lg:col-4"], [1, "grid", "mt-2", "p-1", 2, "border", "1px solid var(--surface-200)"], [1, "row", "mt-4", "mb-0"], [1, "col-12"], [1, "row"], [1, "col-1", 2, "min-width", "50px"], [2, "display", "inline"], ["src", "assets/mastercard.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/visa.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/americanExpress.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/maestro.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/postepay.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/paypal.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/klarna.png", "alt", "Responsive image", 1, "img-fluid"], [1, "p-3", "mb-1", 2, "border", "1px solid var(--surface-200)"], [1, "grid", 3, "id"], [1, "col-3", "col-md-3", "col-lg-3"], [1, "img-fluid", 3, "src"], [1, "col-9", "col-md-6", "col-lg-6", "cart-item-info"], [1, "cart-item-name"], [1, "cart-item-variant"], [1, "cart-item-price"], [2, "font-size", "small", "text-decoration-line", "line-through", "color", "red"], [1, "cart-item-remove"], ["icon", "pi pi-trash", 3, "onClick"], [1, "col-6", "col-md-3", "col-lg-3"], [1, "p-field"], ["inputId", "cartItem.id", "mode", "decimal", 1, "p-inputtext-sm", 2, "width", "18px", 3, "id", "showButtons", "min", "max", "ngModel", "ngModelChange", "onInput"], [1, "cart-item-subtotal", "pt-5"], [1, "cart-item-subtotal-value"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p-button", 4);
        i0.ɵɵlistener("onClick", function CartPageComponent_Template_p_button_onClick_4_listener() { return ctx.backToShop(); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "h4");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵtext(8, " Tempi di spedizione: da 1 a 4 giorni lavorativi ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, CartPageComponent_div_9_Template, 25, 13, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵelement(11, "orders-order-summary");
        i0.ɵɵelementStart(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "p");
        i0.ɵɵtext(16, "MODALITA DI PAGAMENTO DISPONIBILI");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(17, "div", 11)(18, "div", 12)(19, "li", 13);
        i0.ɵɵelement(20, "img", 14);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(21, "div", 12)(22, "li", 13);
        i0.ɵɵelement(23, "img", 15);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(24, "div", 12)(25, "li", 13);
        i0.ɵɵelement(26, "img", 16);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(27, "div", 12)(28, "li", 13);
        i0.ɵɵelement(29, "img", 17);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(30, "div", 12)(31, "li", 13);
        i0.ɵɵelement(32, "img", 18);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(33, "div", 12)(34, "li", 13);
        i0.ɵɵelement(35, "img", 19);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(36, "div", 12)(37, "li", 13);
        i0.ɵɵelement(38, "img", 20);
        i0.ɵɵelementEnd()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1("Il mio carrello: ", ctx.items, " prodotti");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.productVariants)("ngForTrackBy", ctx.trackByMethod);
    } }, directives: [i3.Button, i4.NgForOf, i5.InputNumber, i6.NgControlStatus, i6.NgModel, i7.OrderSummaryComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartPageComponent, [{
        type: Component,
        args: [{ selector: 'orders-cart-page', styles: [], template: "\n<div class=\"cart-page p-1\">\n  <div class=\"grid\">\n    <div class=\"item col-8\">\n      <div class=\"pb-2\">\n\n        <p-button label=\"Continue shopping\" icon=\"pi pi-arrow-left\" (onClick)=\"backToShop()\"></p-button>\n\n      </div>\n      <h4>Il mio carrello: {{items}} prodotti</h4>\n      <div class=\"cart-shipping\">\n        Tempi di spedizione: da 1 a 4 giorni lavorativi\n      </div>\n      <div class=\"p-3 mb-1\" *ngFor=\"let cartItem of productVariants; i as index; trackBy: trackByMethod\" style=\"    border: 1px solid var(--surface-200);\" >\n        <div class=\"grid\" [id]=\"cartItem.id\">\n          <div class=\"row\">\n\n            <div class=\"col-3 col-md-3 col-lg-3 \">\n            <img class=\"img-fluid\" [src]=\"this.cart.getProductByVariantId(cartItem.id).mainImage\" [attr.alt]=\"this.cart.getProductByVariantId(cartItem.id).name\">\n            </div>\n\n            <div class=\"col-9 col-md-6 col-lg-6 cart-item-info\">\n              <div class=\"cart-item-name\">{{this.cart.getProductByVariantId(cartItem.id).name}}</div>\n              <div class=\"cart-item-variant\"> Size: {{cartItem.size}}</div>\n              <div class=\"cart-item-price\"><span style=\"font-size: small;text-decoration-line: line-through; color: red;\">{{this.cart.getProductByVariantId(cartItem.id).price}}\u20AC</span>&nbsp;&nbsp;&nbsp;<span>{{this.cart.getProductByVariantId(cartItem.id).price - this.cart.getProductByVariantId(cartItem.id).discount}}\u20AC</span> </div>\n              <div class=\"cart-item-remove\">\n                <p-button icon=\"pi pi-trash\" (onClick)=\"removeProductFromCart(cartItem)\"></p-button>\n              </div>\n            </div>\n\n            <div class=\"col-6 col-md-3 col-lg-3\">\n              <div  class=\"p-field\">\n                <p-inputNumber  style=\"width: 18px;\" id=\"{{ 'object-' + index }}\" inputId=\"cartItem.id\" mode=\"decimal\" class=\"p-inputtext-sm\" [showButtons]=\"true\"\n                  [min]=\"0\" [max] = \"cartItem.getMaxInventory()\"  [(ngModel)]=\"cartItem.selected\"\n                  (onInput)=\"updateCartItemQuantity(cartItem)\">\n                </p-inputNumber>\n              </div>\n              <div class=\"cart-item-subtotal pt-5\">\n                Subtotal:\n                <span class=\"cart-item-subtotal-value\">{{(this.cart.getProductByVariantId(cartItem.id).price - this.cart.getProductByVariantId(cartItem.id).discount)* cartItem.selected}}\u20AC</span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"oos sm:col-4 md:col-4 lg:col-4\">\n    <orders-order-summary></orders-order-summary>\n    <div class=\"grid mt-2 p-1\" style=\"border: 1px solid var(--surface-200);\">\n      <div class=\"row mt-4 mb-0\" > <div class=\"col-12\"><p>MODALITA DI PAGAMENTO DISPONIBILI</p></div></div>\n      \n      <div class=\"row\">\n        <div class=\"col-1\"  style=\"min-width: 50px;\">\n        <li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li>\n        </div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/paypal.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/klarna.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        \n      \n    \n    </div>\n    </div>\n    </div>\n\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.CartService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7SUNRcEQsK0JBQXNKLGNBQUEsY0FBQSxjQUFBO0lBS2hKLDBCQUFxSjtJQUNySixpQkFBTTtJQUVOLCtCQUFvRCxjQUFBO0lBQ3RCLFlBQXFEO0lBQUEsaUJBQU07SUFDdkYsK0JBQStCO0lBQUMsWUFBdUI7SUFBQSxpQkFBTTtJQUM3RCxnQ0FBNkIsZ0JBQUE7SUFBK0UsYUFBdUQ7SUFBQSxpQkFBTztJQUFBLG1DQUFrQjtJQUFBLDZCQUFNO0lBQUEsYUFBK0c7SUFBQSxpQkFBTyxFQUFBO0lBQ3hULGdDQUE4QixvQkFBQTtJQUNDLG9PQUFXLHlDQUErQixJQUFDO0lBQUMsaUJBQVcsRUFBQSxFQUFBO0lBSXhGLGdDQUFxQyxlQUFBLHlCQUFBO0lBR2lCLHlQQUErQiw0TkFDcEUsMENBQWdDLElBRG9DO0lBRWpGLGlCQUFnQixFQUFBO0lBRWxCLGdDQUFxQztJQUNuQyw0QkFDQTtJQUFBLGlDQUF1QztJQUFBLGFBQW9JO0lBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOzs7OztJQXpCeEssZUFBa0I7SUFBbEIsbUNBQWtCO0lBSVQsZUFBOEQ7SUFBOUQsbUdBQThEO0lBQUMs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aUJBQUksRUFBQSxFQUFBO1FBRXpGLGdDQUFpQixlQUFBLGNBQUE7UUFFYywyQkFBMkU7UUFBQSxpQkFBSyxFQUFBO1FBRTdHLGdDQUE2QyxjQUFBO1FBQTZCLDJCQUFxRTtRQUFBLGlCQUFLLEVBQUE7UUFDcEosZ0NBQTZDLGNBQUE7UUFBNkIsMkJBQWdGO1FBQUEsaUJBQUssRUFBQTtRQUMvSixnQ0FBNkMsY0FBQTtRQUE2QiwyQkFBd0U7UUFBQSxpQkFBSyxFQUFBO1FBQ3ZKLGdDQUE2QyxjQUFBO1FBQTZCLDJCQUF5RTtRQUFBLGlCQUFLLEVBQUE7UUFDeEosZ0NBQTZDLGNBQUE7UUFBNkIsMkJBQXVFO1FBQUEsaUJBQUssRUFBQTtRQUN0SixnQ0FBNkMsY0FBQTtRQUE2QiwyQkFBdUU7UUFBQSxpQkFBSyxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUFwRHBKLGVBQW1DO1FBQW5DLGtFQUFtQztRQUlJLGVBQW9CO1FBQXBCLDZDQUFvQixtQ0FBQTs7dUZESXhELGlCQUFpQjtjQU43QixTQUFTOzJCQUNFLGtCQUFrQixVQUVwQixFQUNQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhcnQuc2VydmljZSc7XG5cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3JkZXJzLWNhcnQtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXG4gIHByb2R1Y3RWYXJpYW50czogUHJvZHVjdFZhcmlhbnRbXVxuICBpdGVtczpudW1iZXI7XG4gIHByb2R1Y3ROYW1lczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBjYXJ0IDogQ2FydDtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSB7XG5cblxuXG4gXG5cbiAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuXG4gICAgdGhpcy5jYXJ0ID0gdGhpcy5jYXJ0U2VydmljZS5nZXRDYXJ0KClcbiBcbiAgICB0aGlzLnByb2R1Y3RWYXJpYW50cyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICAgIHRoaXMucHJvZHVjdFZhcmlhbnRzLmZvckVhY2gocCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwLmdldEpzb24oKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNhcnQuZ2V0cHJvZHVjdHMoKS5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lcy5wdXNoKHByb2R1Y3QuZ2V0TmFtZSgpKTtcbiAgICB9KTtcbiAgICB0aGlzLml0ZW1zPSB0aGlzLmNhcnQuZ2V0VG90YWxOdW1iZXJPZkl0ZW1zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgfVxuXG4gIGJhY2tUb1Nob3AoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9kdWN0cyddKTtcbiAgfVxuXG4gIHRyYWNrQnlNZXRob2QoaW5kZXg6bnVtYmVyLCBwOlByb2R1Y3RWYXJpYW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcC5nZXRJZCgpO1xufVxuXG4gIGdldFByb2R1Y3RWYXJpYW50QnlJZEFuZERlbGV0ZVZhcmlhbnQocCA6IFByb2R1Y3RWYXJpYW50KXtcbiAgICBsZXQgaW5kZXggPSBudWxsO1xuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5wcm9kdWN0VmFyaWFudHMubGVuZ3RoOyBpKyspe1xuICAgICAgXG4gICAgICBpZih0aGlzLnByb2R1Y3RWYXJpYW50c1tpXS5nZXRJZCgpID09PSBwLmdldElkKCkpe1xuICAgICAgICBpbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FydC5kZWxldGVQcm9kdWN0VmFyaWFudChwKTtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnNldE5ld0NhcnQodGhpcy5jYXJ0KTtcbiAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuY2FydC5nZXRUb3RhbE51bWJlck9mSXRlbXMoKTtcbiAgICByZXR1cm4gaW5kZXg7XG5cbiAgfVxuXG5cblxuXG4gIHVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoY2FydEl0ZW0gOiBQcm9kdWN0VmFyaWFudCl7XG5cbiAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgbGV0IHZhcmlhbnQgOiBQcm9kdWN0VmFyaWFudCA9IHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKTtcbiAgICBsZXQgbWF4SXRlbXMgPSB2YXJpYW50LmdldE1heEludmVudG9yeSgpO1xuICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5zZXRBdHRyaWJ1dGUoXCJNQVhcIix0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuZ2V0SW52ZW50b3J5KCkgKyAgdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLmdldFNlbGVjdGVkKCkpO1xuICAgICBjb25zb2xlLmxvZyhcIm1heEl0ZW1zID0gXCIgKyBtYXhJdGVtcyArIFwiIHNlbGVjdGVkID0gXCIgKyBjYXJ0SXRlbS5nZXRTZWxlY3RlZCgpKTtcbiAgICAgdGhpcy5pdGVtcz0gdGhpcy5jYXJ0LmdldFRvdGFsTnVtYmVyT2ZJdGVtcygpO1xuICAgIGlmKG1heEl0ZW1zIDw9IGNhcnRJdGVtLmdldFNlbGVjdGVkKCkpe1xuICAgICAgKHRoaXMuZ2V0RWxlbWVudEJ5WHBhdGgoXCIoLy8qW0BpZD0nXCIgKyBjYXJ0SXRlbS5nZXRJZCgpICsgXCInXS8vYnV0dG9uWzFdKVsyXVwiKSBhcyBhbnkpLmNsYXNzTGlzdC50b2dnbGUoJ2luY3JlbWVudEJ1dHRvbkNsYXNzJyk7XG4gICAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuZGlzYWJsZWQgPSB0cnVlO1xuICAgIFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGVub3VnaCBpdGVtcyBpbiB0aGUgaW52ZW50b3J5XCIpO1xuICAgIH1lbHNle1xuICAgICAgKHRoaXMuZ2V0RWxlbWVudEJ5WHBhdGgoXCIoLy8qW0BpZD0nXCIgKyBjYXJ0SXRlbS5nZXRJZCgpICsgXCInXS8vYnV0dG9uWzFdKVsyXVwiKSBhcyBhbnkpLmNsYXNzTGlzdC50b2dnbGUoJ2luY3JlbWVudEJ1dHRvbkNsYXNzJyk7XG4gICAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgOiBcIiArIGNhcnRJdGVtLmdldFNlbGVjdGVkKCkpO1xuICAgIC8vdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLnNldFNlbGVjdGVkQW5kVXBkYXRlSW52ZW50b3J5KGNhcnRJdGVtLmdldFNlbGVjdGVkKCkpO1xuICAgIGNhcnRJdGVtLnNldEludmVudG9yeSggdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLmdldEludmVudG9yeSgpKTtcbiAgICBjb25zb2xlLmxvZyhcIm5ldyBpbnZlbnRvcnkgYnkgY2FydEl0ZW0gPSBcIiArIGNhcnRJdGVtLmdldEludmVudG9yeSgpKTtcbiAgICBjb25zb2xlLmxvZyhcIm5ldyBpbnZlbnRvcnkgYnkgY2FydCA9IFwiICsgdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLmdldEludmVudG9yeSgpKTtcblxuICAgIFxuICAgIGNvbnNvbGUubG9nKCAgKTtcbiAgfVxuXG5cbiAgcmVtb3ZlUHJvZHVjdEZyb21DYXJ0KHA6UHJvZHVjdFZhcmlhbnQpe1xuICAgIHRoaXMucHJvZHVjdFZhcmlhbnRzLnNwbGljZSh0aGlzLmdldFByb2R1Y3RWYXJpYW50QnlJZEFuZERlbGV0ZVZhcmlhbnQocCksIDEpO1xuXG5cbiAgfVxuXG5cbiAgICBnZXRFbGVtZW50QnlYcGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZXZhbHVhdGUocGF0aCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XG4gIH1cbn1cbiIsIlxuPGRpdiBjbGFzcz1cImNhcnQtcGFnZSBwLTFcIj5cbiAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaXRlbSBjb2wtOFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBiLTJcIj5cblxuICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJDb250aW51ZSBzaG9wcGluZ1wiIGljb249XCJwaSBwaS1hcnJvdy1sZWZ0XCIgKG9uQ2xpY2spPVwiYmFja1RvU2hvcCgpXCI+PC9wLWJ1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgICA8aDQ+SWwgbWlvIGNhcnJlbGxvOiB7e2l0ZW1zfX0gcHJvZG90dGk8L2g0PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcnQtc2hpcHBpbmdcIj5cbiAgICAgICAgVGVtcGkgZGkgc3BlZGl6aW9uZTogZGEgMSBhIDQgZ2lvcm5pIGxhdm9yYXRpdmlcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInAtMyBtYi0xXCIgKm5nRm9yPVwibGV0IGNhcnRJdGVtIG9mIHByb2R1Y3RWYXJpYW50czsgaSBhcyBpbmRleDsgdHJhY2tCeTogdHJhY2tCeU1ldGhvZFwiIHN0eWxlPVwiICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtMjAwKTtcIiA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCIgW2lkXT1cImNhcnRJdGVtLmlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgY29sLW1kLTMgY29sLWxnLTMgXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWZsdWlkXCIgW3NyY109XCJ0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5tYWluSW1hZ2VcIiBbYXR0ci5hbHRdPVwidGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkubmFtZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOSBjb2wtbWQtNiBjb2wtbGctNiBjYXJ0LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLW5hbWVcIj57e3RoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXZhcmlhbnRcIj4gU2l6ZToge3tjYXJ0SXRlbS5zaXplfX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS1wcmljZVwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiBzbWFsbDt0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoOyBjb2xvcjogcmVkO1wiPnt7dGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkucHJpY2V9feKCrDwvc3Bhbj4mbmJzcDsmbmJzcDsmbmJzcDs8c3Bhbj57e3RoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLnByaWNlIC0gdGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkuZGlzY291bnR9feKCrDwvc3Bhbj4gPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tcmVtb3ZlXCI+XG4gICAgICAgICAgICAgICAgPHAtYnV0dG9uIGljb249XCJwaSBwaS10cmFzaFwiIChvbkNsaWNrKT1cInJlbW92ZVByb2R1Y3RGcm9tQ2FydChjYXJ0SXRlbSlcIj48L3AtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgY29sLW1kLTMgY29sLWxnLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJwLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXROdW1iZXIgIHN0eWxlPVwid2lkdGg6IDE4cHg7XCIgaWQ9XCJ7eyAnb2JqZWN0LScgKyBpbmRleCB9fVwiIGlucHV0SWQ9XCJjYXJ0SXRlbS5pZFwiIG1vZGU9XCJkZWNpbWFsXCIgY2xhc3M9XCJwLWlucHV0dGV4dC1zbVwiIFtzaG93QnV0dG9uc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIFttaW5dPVwiMFwiIFttYXhdID0gXCJjYXJ0SXRlbS5nZXRNYXhJbnZlbnRvcnkoKVwiICBbKG5nTW9kZWwpXT1cImNhcnRJdGVtLnNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgIChvbklucHV0KT1cInVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoY2FydEl0ZW0pXCI+XG4gICAgICAgICAgICAgICAgPC9wLWlucHV0TnVtYmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS1zdWJ0b3RhbCBwdC01XCI+XG4gICAgICAgICAgICAgICAgU3VidG90YWw6XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJ0LWl0ZW0tc3VidG90YWwtdmFsdWVcIj57eyh0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5wcmljZSAtIHRoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLmRpc2NvdW50KSogY2FydEl0ZW0uc2VsZWN0ZWR9feKCrDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJvb3Mgc206Y29sLTQgbWQ6Y29sLTQgbGc6Y29sLTRcIj5cbiAgICA8b3JkZXJzLW9yZGVyLXN1bW1hcnk+PC9vcmRlcnMtb3JkZXItc3VtbWFyeT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBtdC0yIHAtMVwiIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS0yMDApO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC00IG1iLTBcIiA+IDxkaXYgY2xhc3M9XCJjb2wtMTJcIj48cD5NT0RBTElUQSBESSBQQUdBTUVOVE8gRElTUE9OSUJJTEk8L3A+PC9kaXY+PC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPlxuICAgICAgICA8bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9XCJhc3NldHMvbWFzdGVyY2FyZC5wbmdcIiAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy92aXNhLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9hbWVyaWNhbkV4cHJlc3MucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL21hZXN0cm8ucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Bvc3RlcGF5LnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9wYXlwYWwucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL2tsYXJuYS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICBcbiAgICAgIFxuICAgIFxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=