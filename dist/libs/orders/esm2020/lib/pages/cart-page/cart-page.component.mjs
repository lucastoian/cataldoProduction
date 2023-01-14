import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Title } from "@angular/platform-browser";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/cart.service";
import * as i3 from "@angular/platform-browser";
import * as i4 from "primeng/button";
import * as i5 from "@angular/common";
import * as i6 from "primeng/inputnumber";
import * as i7 from "@angular/forms";
import * as i8 from "../../components/order-summary/order-summary.component";
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
    constructor(router, cartService, titleService) {
        this.router = router;
        this.cartService = cartService;
        this.titleService = titleService;
        this.productNames = [];
        this.titleService.setTitle("Carrello | Cataldo Store");
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
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.CartService), i0.ɵɵdirectiveInject(i3.Title)); };
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
        i0.ɵɵtextInterpolate1("Il mio carrello: ", ctx.items, " prodotto/i");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.productVariants)("ngForTrackBy", ctx.trackByMethod);
    } }, directives: [i4.Button, i5.NgForOf, i6.InputNumber, i7.NgControlStatus, i7.NgModel, i8.OrderSummaryComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartPageComponent, [{
        type: Component,
        args: [{ selector: 'orders-cart-page', styles: [], template: "\n<div class=\"cart-page p-1\">\n  <div class=\"grid\">\n    <div class=\"item col-8\">\n      <div class=\"pb-2\">\n\n        <p-button label=\"Continue shopping\" icon=\"pi pi-arrow-left\" (onClick)=\"backToShop()\"></p-button>\n\n      </div>\n      <h4>Il mio carrello: {{items}} prodotto/i</h4>\n      <div class=\"cart-shipping\">\n        Tempi di spedizione: da 1 a 4 giorni lavorativi\n      </div>\n      <div class=\"p-3 mb-1\" *ngFor=\"let cartItem of productVariants; i as index; trackBy: trackByMethod\" style=\"    border: 1px solid var(--surface-200);\" >\n        <div class=\"grid\" [id]=\"cartItem.id\">\n          <div class=\"row\">\n\n            <div class=\"col-3 col-md-3 col-lg-3 \">\n            <img class=\"img-fluid\" [src]=\"this.cart.getProductByVariantId(cartItem.id).mainImage\" [attr.alt]=\"this.cart.getProductByVariantId(cartItem.id).name\">\n            </div>\n\n            <div class=\"col-9 col-md-6 col-lg-6 cart-item-info\">\n              <div class=\"cart-item-name\">{{this.cart.getProductByVariantId(cartItem.id).name}}</div>\n              <div class=\"cart-item-variant\"> Size: {{cartItem.size}}</div>\n              <div class=\"cart-item-price\"><span style=\"font-size: small;text-decoration-line: line-through; color: red;\">{{this.cart.getProductByVariantId(cartItem.id).price}}\u20AC</span>&nbsp;&nbsp;&nbsp;<span>{{this.cart.getProductByVariantId(cartItem.id).price - this.cart.getProductByVariantId(cartItem.id).discount}}\u20AC</span> </div>\n              <div class=\"cart-item-remove\">\n                <p-button icon=\"pi pi-trash\" (onClick)=\"removeProductFromCart(cartItem)\"></p-button>\n              </div>\n            </div>\n\n            <div class=\"col-6 col-md-3 col-lg-3\">\n              <div  class=\"p-field\">\n                <p-inputNumber  style=\"width: 18px;\" id=\"{{ 'object-' + index }}\" inputId=\"cartItem.id\" mode=\"decimal\" class=\"p-inputtext-sm\" [showButtons]=\"true\"\n                  [min]=\"0\" [max] = \"cartItem.getMaxInventory()\"  [(ngModel)]=\"cartItem.selected\"\n                  (onInput)=\"updateCartItemQuantity(cartItem)\">\n                </p-inputNumber>\n              </div>\n              <div class=\"cart-item-subtotal pt-5\">\n                Subtotal:\n                <span class=\"cart-item-subtotal-value\">{{(this.cart.getProductByVariantId(cartItem.id).price - this.cart.getProductByVariantId(cartItem.id).discount)* cartItem.selected}}\u20AC</span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"oos sm:col-4 md:col-4 lg:col-4\">\n    <orders-order-summary></orders-order-summary>\n    <div class=\"grid mt-2 p-1\" style=\"border: 1px solid var(--surface-200);\">\n      <div class=\"row mt-4 mb-0\" > <div class=\"col-12\"><p>MODALITA DI PAGAMENTO DISPONIBILI</p></div></div>\n      \n      <div class=\"row\">\n        <div class=\"col-1\"  style=\"min-width: 50px;\">\n        <li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li>\n        </div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/paypal.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/klarna.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        \n      \n    \n    </div>\n    </div>\n    </div>\n\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.CartService }, { type: i3.Title }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7OztJQ08xQywrQkFBc0osY0FBQSxjQUFBLGNBQUE7SUFLaEosMEJBQXFKO0lBQ3JKLGlCQUFNO0lBRU4sK0JBQW9ELGNBQUE7SUFDdEIsWUFBcUQ7SUFBQSxpQkFBTTtJQUN2RiwrQkFBK0I7SUFBQyxZQUF1QjtJQUFBLGlCQUFNO0lBQzdELGdDQUE2QixnQkFBQTtJQUErRSxhQUF1RDtJQUFBLGlCQUFPO0lBQUEsbUNBQWtCO0lBQUEsNkJBQU07SUFBQSxhQUErRztJQUFBLGlCQUFPLEVBQUE7SUFDeFQsZ0NBQThCLG9CQUFBO0lBQ0Msb09BQVcseUNBQStCLElBQUM7SUFBQyxpQkFBVyxFQUFBLEVBQUE7SUFJeEYsZ0NBQXFDLGVBQUEseUJBQUE7SUFHaUIseVBBQStCLDROQUNwRSwwQ0FBZ0MsSUFEb0M7SUFFakYsaUJBQWdCLEVBQUE7SUFFbEIsZ0NBQXFDO0lBQ25DLDRCQUNBO0lBQUEsaUNBQXVDO0lBQUEsYUFBb0k7SUFBQSxpQkFBTyxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7Ozs7O0lBekJ4SyxlQUFr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QUFLO1FBQzlDLDhCQUEyQjtRQUN6QixpRUFDRjtRQUFBLGlCQUFNO1FBQ04sb0VBZ0NNO1FBQ1IsaUJBQU07UUFDTiwrQkFBNEM7UUFDNUMsd0NBQTZDO1FBQzdDLCtCQUF5RSxjQUFBLGVBQUEsU0FBQTtRQUNuQixrREFBaUM7UUFBQSxpQkFBSSxFQUFBLEVBQUE7UUFFekYsZ0NBQWlCLGVBQUEsY0FBQTtRQUVjLDJCQUEyRTtRQUFBLGlCQUFLLEVBQUE7UUFFN0csZ0NBQTZDLGNBQUE7UUFBNkIsMkJBQXFFO1FBQUEsaUJBQUssRUFBQTtRQUNwSixnQ0FBNkMsY0FBQTtRQUE2QiwyQkFBZ0Y7UUFBQSxpQkFBSyxFQUFBO1FBQy9KLGdDQUE2QyxjQUFBO1FBQTZCLDJCQUF3RTtRQUFBLGlCQUFLLEVBQUE7UUFDdkosZ0NBQTZDLGNBQUE7UUFBNkIsMkJBQXlFO1FBQUEsaUJBQUssRUFBQTtRQUN4SixnQ0FBNkMsY0FBQTtRQUE2QiwyQkFBdUU7UUFBQSxpQkFBSyxFQUFBO1FBQ3RKLGdDQUE2QyxjQUFBO1FBQTZCLDJCQUF1RTtRQUFBLGlCQUFLLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOztRQXBEcEosZUFBcUM7UUFBckMsb0VBQXFDO1FBSUUsZUFBb0I7UUFBcEIsNkNBQW9CLG1DQUFBOzt1RkRJeEQsaUJBQWlCO2NBTjdCLFNBQVM7MkJBQ0Usa0JBQWtCLFVBRXBCLEVBQ1AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0VmFyaWFudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7VGl0bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29yZGVycy1jYXJ0LXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FydFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblxuICBwcm9kdWN0VmFyaWFudHM6IFByb2R1Y3RWYXJpYW50W11cbiAgaXRlbXM6bnVtYmVyO1xuICBwcm9kdWN0TmFtZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgY2FydCA6IENhcnQ7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSwgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6VGl0bGUpIHtcblxuICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwiQ2FycmVsbG8gfCBDYXRhbGRvIFN0b3JlXCIpXG5cbiBcblxuICAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG5cbiAgICB0aGlzLmNhcnQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKVxuIFxuICAgIHRoaXMucHJvZHVjdFZhcmlhbnRzID0gdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG4gICAgdGhpcy5wcm9kdWN0VmFyaWFudHMuZm9yRWFjaChwID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHAuZ2V0SnNvbigpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2FydC5nZXRwcm9kdWN0cygpLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdE5hbWVzLnB1c2gocHJvZHVjdC5nZXROYW1lKCkpO1xuICAgIH0pO1xuICAgIHRoaXMuaXRlbXM9IHRoaXMuY2FydC5nZXRUb3RhbE51bWJlck9mSXRlbXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICB9XG5cbiAgYmFja1RvU2hvcCgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2R1Y3RzJ10pO1xuICB9XG5cbiAgdHJhY2tCeU1ldGhvZChpbmRleDpudW1iZXIsIHA6UHJvZHVjdFZhcmlhbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBwLmdldElkKCk7XG59XG5cbiAgZ2V0UHJvZHVjdFZhcmlhbnRCeUlkQW5kRGVsZXRlVmFyaWFudChwIDogUHJvZHVjdFZhcmlhbnQpe1xuICAgIGxldCBpbmRleCA9IG51bGw7XG4gICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLnByb2R1Y3RWYXJpYW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICBcbiAgICAgIGlmKHRoaXMucHJvZHVjdFZhcmlhbnRzW2ldLmdldElkKCkgPT09IHAuZ2V0SWQoKSl7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jYXJ0LmRlbGV0ZVByb2R1Y3RWYXJpYW50KHApO1xuICAgIHRoaXMuY2FydFNlcnZpY2Uuc2V0TmV3Q2FydCh0aGlzLmNhcnQpO1xuICAgIHRoaXMuY2FydC51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5jYXJ0LmdldFRvdGFsTnVtYmVyT2ZJdGVtcygpO1xuICAgIHJldHVybiBpbmRleDtcblxuICB9XG5cblxuXG5cbiAgdXBkYXRlQ2FydEl0ZW1RdWFudGl0eShjYXJ0SXRlbSA6IFByb2R1Y3RWYXJpYW50KXtcblxuICAgIHRoaXMuY2FydC51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICBsZXQgdmFyaWFudCA6IFByb2R1Y3RWYXJpYW50ID0gdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpO1xuICAgIGxldCBtYXhJdGVtcyA9IHZhcmlhbnQuZ2V0TWF4SW52ZW50b3J5KCk7XG4gICAgKHRoaXMuZ2V0RWxlbWVudEJ5WHBhdGgoXCIoLy8qW0BpZD0nXCIgKyBjYXJ0SXRlbS5nZXRJZCgpICsgXCInXS8vYnV0dG9uWzFdKVsyXVwiKSBhcyBhbnkpLnNldEF0dHJpYnV0ZShcIk1BWFwiLHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKS5nZXRJbnZlbnRvcnkoKSArICB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuZ2V0U2VsZWN0ZWQoKSk7XG4gICAgIGNvbnNvbGUubG9nKFwibWF4SXRlbXMgPSBcIiArIG1heEl0ZW1zICsgXCIgc2VsZWN0ZWQgPSBcIiArIGNhcnRJdGVtLmdldFNlbGVjdGVkKCkpO1xuICAgICB0aGlzLml0ZW1zPSB0aGlzLmNhcnQuZ2V0VG90YWxOdW1iZXJPZkl0ZW1zKCk7XG4gICAgaWYobWF4SXRlbXMgPD0gY2FydEl0ZW0uZ2V0U2VsZWN0ZWQoKSl7XG4gICAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuY2xhc3NMaXN0LnRvZ2dsZSgnaW5jcmVtZW50QnV0dG9uQ2xhc3MnKTtcbiAgICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5kaXNhYmxlZCA9IHRydWU7XG4gICAgXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgZW5vdWdoIGl0ZW1zIGluIHRoZSBpbnZlbnRvcnlcIik7XG4gICAgfWVsc2V7XG4gICAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuY2xhc3NMaXN0LnRvZ2dsZSgnaW5jcmVtZW50QnV0dG9uQ2xhc3MnKTtcbiAgICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCA6IFwiICsgY2FydEl0ZW0uZ2V0U2VsZWN0ZWQoKSk7XG4gICAgLy90aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuc2V0U2VsZWN0ZWRBbmRVcGRhdGVJbnZlbnRvcnkoY2FydEl0ZW0uZ2V0U2VsZWN0ZWQoKSk7XG4gICAgY2FydEl0ZW0uc2V0SW52ZW50b3J5KCB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuZ2V0SW52ZW50b3J5KCkpO1xuICAgIGNvbnNvbGUubG9nKFwibmV3IGludmVudG9yeSBieSBjYXJ0SXRlbSA9IFwiICsgY2FydEl0ZW0uZ2V0SW52ZW50b3J5KCkpO1xuICAgIGNvbnNvbGUubG9nKFwibmV3IGludmVudG9yeSBieSBjYXJ0ID0gXCIgKyB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuZ2V0SW52ZW50b3J5KCkpO1xuXG4gICAgXG4gICAgY29uc29sZS5sb2coICApO1xuICB9XG5cblxuICByZW1vdmVQcm9kdWN0RnJvbUNhcnQocDpQcm9kdWN0VmFyaWFudCl7XG4gICAgdGhpcy5wcm9kdWN0VmFyaWFudHMuc3BsaWNlKHRoaXMuZ2V0UHJvZHVjdFZhcmlhbnRCeUlkQW5kRGVsZXRlVmFyaWFudChwKSwgMSk7XG5cblxuICB9XG5cblxuICAgIGdldEVsZW1lbnRCeVhwYXRoKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiBkb2N1bWVudC5ldmFsdWF0ZShwYXRoLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcbiAgfVxufVxuIiwiXG48ZGl2IGNsYXNzPVwiY2FydC1wYWdlIHAtMVwiPlxuICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbC04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGItMlwiPlxuXG4gICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIkNvbnRpbnVlIHNob3BwaW5nXCIgaWNvbj1cInBpIHBpLWFycm93LWxlZnRcIiAob25DbGljayk9XCJiYWNrVG9TaG9wKClcIj48L3AtYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxoND5JbCBtaW8gY2FycmVsbG86IHt7aXRlbXN9fSBwcm9kb3R0by9pPC9oND5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXNoaXBwaW5nXCI+XG4gICAgICAgIFRlbXBpIGRpIHNwZWRpemlvbmU6IGRhIDEgYSA0IGdpb3JuaSBsYXZvcmF0aXZpXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwLTMgbWItMVwiICpuZ0Zvcj1cImxldCBjYXJ0SXRlbSBvZiBwcm9kdWN0VmFyaWFudHM7IGkgYXMgaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlNZXRob2RcIiBzdHlsZT1cIiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLTIwMCk7XCIgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiIFtpZF09XCJjYXJ0SXRlbS5pZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIGNvbC1tZC0zIGNvbC1sZy0zIFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1mbHVpZFwiIFtzcmNdPVwidGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkubWFpbkltYWdlXCIgW2F0dHIuYWx0XT1cInRoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLm5hbWVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTkgY29sLW1kLTYgY29sLWxnLTYgY2FydC1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS1uYW1lXCI+e3t0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5uYW1lfX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS12YXJpYW50XCI+IFNpemU6IHt7Y2FydEl0ZW0uc2l6ZX19PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tcHJpY2VcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogc21hbGw7dGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDsgY29sb3I6IHJlZDtcIj57e3RoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLnByaWNlfX3igqw8L3NwYW4+Jm5ic3A7Jm5ic3A7Jm5ic3A7PHNwYW4+e3t0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5wcmljZSAtIHRoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLmRpc2NvdW50fX3igqw8L3NwYW4+IDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXJlbW92ZVwiPlxuICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBpY29uPVwicGkgcGktdHJhc2hcIiAob25DbGljayk9XCJyZW1vdmVQcm9kdWN0RnJvbUNhcnQoY2FydEl0ZW0pXCI+PC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IGNvbC1tZC0zIGNvbC1sZy0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwicC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxwLWlucHV0TnVtYmVyICBzdHlsZT1cIndpZHRoOiAxOHB4O1wiIGlkPVwie3sgJ29iamVjdC0nICsgaW5kZXggfX1cIiBpbnB1dElkPVwiY2FydEl0ZW0uaWRcIiBtb2RlPVwiZGVjaW1hbFwiIGNsYXNzPVwicC1pbnB1dHRleHQtc21cIiBbc2hvd0J1dHRvbnNdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBbbWluXT1cIjBcIiBbbWF4XSA9IFwiY2FydEl0ZW0uZ2V0TWF4SW52ZW50b3J5KClcIiAgWyhuZ01vZGVsKV09XCJjYXJ0SXRlbS5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAob25JbnB1dCk9XCJ1cGRhdGVDYXJ0SXRlbVF1YW50aXR5KGNhcnRJdGVtKVwiPlxuICAgICAgICAgICAgICAgIDwvcC1pbnB1dE51bWJlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tc3VidG90YWwgcHQtNVwiPlxuICAgICAgICAgICAgICAgIFN1YnRvdGFsOlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FydC1pdGVtLXN1YnRvdGFsLXZhbHVlXCI+e3sodGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkucHJpY2UgLSB0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5kaXNjb3VudCkqIGNhcnRJdGVtLnNlbGVjdGVkfX3igqw8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwib29zIHNtOmNvbC00IG1kOmNvbC00IGxnOmNvbC00XCI+XG4gICAgPG9yZGVycy1vcmRlci1zdW1tYXJ5Pjwvb3JkZXJzLW9yZGVyLXN1bW1hcnk+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQgbXQtMiBwLTFcIiBzdHlsZT1cImJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtMjAwKTtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtNCBtYi0wXCIgPiA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PHA+TU9EQUxJVEEgREkgUEFHQU1FTlRPIERJU1BPTklCSUxJPC9wPjwvZGl2PjwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj5cbiAgICAgICAgPGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPVwiYXNzZXRzL21hc3RlcmNhcmQucG5nXCIgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvdmlzYS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvYW1lcmljYW5FeHByZXNzLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9tYWVzdHJvLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9wb3N0ZXBheS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvcGF5cGFsLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9rbGFybmEucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgXG4gICAgICBcbiAgICBcbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvZGl2PlxuIl19