import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from "@angular/platform-browser";
import { CartService } from '../../services/cart.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/cart.service";
import * as i3 from "@angular/platform-browser";
import * as i4 from "@angular/common";
import * as i5 from "primeng/button";
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
    i0.ɵɵlistener("onClick", function CartPageComponent_div_9_Template_p_button_onClick_17_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.removeProductFromCart(cartItem_r1)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 32)(19, "div", 33)(20, "p-inputNumber", 34);
    i0.ɵɵlistener("ngModelChange", function CartPageComponent_div_9_Template_p_inputNumber_ngModelChange_20_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; return i0.ɵɵresetView(cartItem_r1.selected = $event); })("onInput", function CartPageComponent_div_9_Template_p_inputNumber_onInput_20_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.updateCartItemQuantity(cartItem_r1)); });
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
    constructor(router, cartService, titleService, meta) {
        this.router = router;
        this.cartService = cartService;
        this.titleService = titleService;
        this.meta = meta;
        this.productNames = [];
        this.titleService.setTitle("Carrello | completa i tuoi acquisti | Cataldostore");
        this.meta.updateTag({ name: 'description', content: 'Completa i tuoi acquisti online | Accessori, brand alla moda, prezzi bassi | Carrello. spedizione veloce' });
    }
    ngOnInit() {
        this.cart = this.cartService.getCart();
        this.productVariants = this.cart.getAllVariants();
        this.cart.getItems();
        console.log("variants = " + JSON.stringify(this.productVariants));
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
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.CartService), i0.ɵɵdirectiveInject(i3.Title), i0.ɵɵdirectiveInject(i3.Meta)); };
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
    } }, dependencies: [i4.NgForOf, i5.Button, i6.InputNumber, i7.NgControlStatus, i7.NgModel, i8.OrderSummaryComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartPageComponent, [{
        type: Component,
        args: [{ selector: 'orders-cart-page', template: "\n<div class=\"cart-page p-1\">\n  <div class=\"grid\">\n    <div class=\"item col-8\">\n      <div class=\"pb-2\">\n\n        <p-button label=\"Continue shopping\" icon=\"pi pi-arrow-left\" (onClick)=\"backToShop()\"></p-button>\n\n      </div>\n      <h4>Il mio carrello: {{items}} prodotto/i</h4>\n      <div class=\"cart-shipping\">\n        Tempi di spedizione: da 1 a 4 giorni lavorativi\n      </div>\n      <div class=\"p-3 mb-1\" *ngFor=\"let cartItem of productVariants; i as index; trackBy: trackByMethod\" style=\"    border: 1px solid var(--surface-200);\" >\n        <div class=\"grid\" [id]=\"cartItem.id\">\n          <div class=\"row\">\n\n            <div class=\"col-3 col-md-3 col-lg-3 \">\n            <img class=\"img-fluid\" [src]=\"this.cart.getProductByVariantId(cartItem.id).mainImage\" [attr.alt]=\"this.cart.getProductByVariantId(cartItem.id).name\">\n            </div>\n\n            <div class=\"col-9 col-md-6 col-lg-6 cart-item-info\">\n              <div class=\"cart-item-name\">{{this.cart.getProductByVariantId(cartItem.id).name}}</div>\n              <div class=\"cart-item-variant\"> Size: {{cartItem.size}}</div>\n              <div class=\"cart-item-price\"><span style=\"font-size: small;text-decoration-line: line-through; color: red;\">{{this.cart.getProductByVariantId(cartItem.id).price}}\u20AC</span>&nbsp;&nbsp;&nbsp;<span>{{this.cart.getProductByVariantId(cartItem.id).price - this.cart.getProductByVariantId(cartItem.id).discount}}\u20AC</span> </div>\n              <div class=\"cart-item-remove\">\n                <p-button icon=\"pi pi-trash\" (onClick)=\"removeProductFromCart(cartItem)\"></p-button>\n              </div>\n            </div>\n\n            <div class=\"col-6 col-md-3 col-lg-3\">\n              <div  class=\"p-field\">\n                <p-inputNumber  style=\"width: 18px;\" id=\"{{ 'object-' + index }}\" inputId=\"cartItem.id\" mode=\"decimal\" class=\"p-inputtext-sm\" [showButtons]=\"true\"\n                  [min]=\"0\" [max] = \"cartItem.getMaxInventory()\"  [(ngModel)]=\"cartItem.selected\"\n                  (onInput)=\"updateCartItemQuantity(cartItem)\">\n                </p-inputNumber>\n              </div>\n              <div class=\"cart-item-subtotal pt-5\">\n                Subtotal:\n                <span class=\"cart-item-subtotal-value\">{{(this.cart.getProductByVariantId(cartItem.id).price - this.cart.getProductByVariantId(cartItem.id).discount)* cartItem.selected}}\u20AC</span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"oos sm:col-4 md:col-4 lg:col-4\">\n    <orders-order-summary></orders-order-summary>\n    <div class=\"grid mt-2 p-1\" style=\"border: 1px solid var(--surface-200);\">\n      <div class=\"row mt-4 mb-0\" > <div class=\"col-12\"><p>MODALITA DI PAGAMENTO DISPONIBILI</p></div></div>\n      \n      <div class=\"row\">\n        <div class=\"col-1\"  style=\"min-width: 50px;\">\n        <li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li>\n        </div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/paypal.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/klarna.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        \n      \n    \n    </div>\n    </div>\n    </div>\n\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.CartService }, { type: i3.Title }, { type: i3.Meta }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7SUNRcEQsK0JBQXNKLGNBQUEsY0FBQSxjQUFBO0lBS2hKLDBCQUFxSjtJQUNySixpQkFBTTtJQUVOLCtCQUFvRCxjQUFBO0lBQ3RCLFlBQXFEO0lBQUEsaUJBQU07SUFDdkYsK0JBQStCO0lBQUMsWUFBdUI7SUFBQSxpQkFBTTtJQUM3RCxnQ0FBNkIsZ0JBQUE7SUFBK0UsYUFBdUQ7SUFBQSxpQkFBTztJQUFBLG1DQUFrQjtJQUFBLDZCQUFNO0lBQUEsYUFBK0c7SUFBQSxpQkFBTyxFQUFBO0lBQ3hULGdDQUE4QixvQkFBQTtJQUNDLG9PQUFXLGVBQUEseUNBQStCLENBQUEsSUFBQztJQUFDLGlCQUFXLEVBQUEsRUFBQTtJQUl4RixnQ0FBcUMsZUFBQSx5QkFBQTtJQUdpQix3TkFBYSw2Q0FDekUsSUFEMkYsNE5BQ3BFLGVBQUEsMENBQWdDLENBQUEsSUFEb0M7SUFFakYsaUJBQWdCLEVBQUE7SUFFbEIsZ0NBQXFDO0lBQ25DLDRCQUNBO0lBQUEsaUNBQXVDO0lBQUEsYUFBb0k7SUFBQSxpQkFB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RSxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFDNUcsQ0FBQzs7a0ZBMUdVLGlCQUFpQjtvRUFBakIsaUJBQWlCO1FDaEI5Qiw4QkFBMkIsYUFBQSxhQUFBLGFBQUEsa0JBQUE7UUFLeUMsb0dBQVcsZ0JBQVksSUFBQztRQUFDLGlCQUFXLEVBQUE7UUFHbEcsMEJBQUk7UUFBQSxZQUFxQztRQUFBLGlCQUFLO1FBQzlDLDhCQUEyQjtRQUN6QixpRUFDRjtRQUFBLGlCQUFNO1FBQ04sb0VBZ0NNO1FBQ1IsaUJBQU07UUFDTiwrQkFBNEM7UUFDNUMsd0NBQTZDO1FBQzdDLCtCQUF5RSxjQUFBLGVBQUEsU0FBQTtRQUNuQixrREFBaUM7UUFBQSxpQkFBSSxFQUFBLEVBQUE7UUFFekYsZ0NBQWlCLGVBQUEsY0FBQTtRQUVjLDJCQUEyRTtRQUFBLGlCQUFLLEVBQUE7UUFFN0csZ0NBQTZDLGNBQUE7UUFBNkIsMkJBQXFFO1FBQUEsaUJBQUssRUFBQTtRQUNwSixnQ0FBNkMsY0FBQTtRQUE2QiwyQkFBZ0Y7UUFBQSxpQkFBSyxFQUFBO1FBQy9KLGdDQUE2QyxjQUFBO1FBQTZCLDJCQUF3RTtRQUFBLGlCQUFLLEVBQUE7UUFDdkosZ0NBQTZDLGNBQUE7UUFBNkIsMkJBQXlFO1FBQUEsaUJBQUssRUFBQTtRQUN4SixnQ0FBNkMsY0FBQTtRQUE2QiwyQkFBdUU7UUFBQSxpQkFBSyxFQUFBO1FBQ3RKLGdDQUE2QyxjQUFBO1FBQTZCLDJCQUF1RTtRQUFBLGlCQUFLLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOztRQXBEcEosZUFBcUM7UUFBckMsb0VBQXFDO1FBSUUsZUFBb0I7UUFBcEIsNkNBQW9CLG1DQUFBOzt1RkRJeEQsaUJBQWlCO2NBTjdCLFNBQVM7MkJBQ0Usa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7VGl0bGUsIE1ldGF9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FydC5zZXJ2aWNlJztcblxuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcmRlcnMtY2FydC1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cbiAgcHJvZHVjdFZhcmlhbnRzOiBQcm9kdWN0VmFyaWFudFtdXG4gIGl0ZW1zOm51bWJlcjtcbiAgcHJvZHVjdE5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGNhcnQgOiBDYXJ0O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsICBwcml2YXRlIHRpdGxlU2VydmljZTpUaXRsZSxcbiAgICBwcml2YXRlIG1ldGE6IE1ldGEpIHtcblxuXG4gICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoXCJDYXJyZWxsbyB8IGNvbXBsZXRhIGkgdHVvaSBhY3F1aXN0aSB8IENhdGFsZG9zdG9yZVwiKTtcbiAgICB0aGlzLm1ldGEudXBkYXRlVGFnKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogJ0NvbXBsZXRhIGkgdHVvaSBhY3F1aXN0aSBvbmxpbmUgfCBBY2Nlc3NvcmksIGJyYW5kIGFsbGEgbW9kYSwgcHJlenppIGJhc3NpIHwgQ2FycmVsbG8uIHNwZWRpemlvbmUgdmVsb2NlJyB9KVxuIFxuXG4gICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cblxuICAgIHRoaXMuY2FydCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0Q2FydCgpXG4gXG4gICAgdGhpcy5wcm9kdWN0VmFyaWFudHMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcbiAgICB0aGlzLmNhcnQuZ2V0SXRlbXMoKTtcblxuICAgIGNvbnNvbGUubG9nKFwidmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdFZhcmlhbnRzKSk7XG4gICAgXG5cbiAgICB0aGlzLmNhcnQuZ2V0cHJvZHVjdHMoKS5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lcy5wdXNoKHByb2R1Y3QuZ2V0TmFtZSgpKTtcbiAgICB9KTtcbiAgICB0aGlzLml0ZW1zPSB0aGlzLmNhcnQuZ2V0VG90YWxOdW1iZXJPZkl0ZW1zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgfVxuXG4gIGJhY2tUb1Nob3AoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9kdWN0cyddKTtcbiAgfVxuXG4gIHRyYWNrQnlNZXRob2QoaW5kZXg6bnVtYmVyLCBwOlByb2R1Y3RWYXJpYW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcC5nZXRJZCgpO1xufVxuXG4gIGdldFByb2R1Y3RWYXJpYW50QnlJZEFuZERlbGV0ZVZhcmlhbnQocCA6IFByb2R1Y3RWYXJpYW50KXtcbiAgICBsZXQgaW5kZXggPSBudWxsO1xuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5wcm9kdWN0VmFyaWFudHMubGVuZ3RoOyBpKyspe1xuICAgICAgXG4gICAgICBpZih0aGlzLnByb2R1Y3RWYXJpYW50c1tpXS5nZXRJZCgpID09PSBwLmdldElkKCkpe1xuICAgICAgICBpbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FydC5kZWxldGVQcm9kdWN0VmFyaWFudChwKTtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnNldE5ld0NhcnQodGhpcy5jYXJ0KTtcbiAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuY2FydC5nZXRUb3RhbE51bWJlck9mSXRlbXMoKTtcbiAgICByZXR1cm4gaW5kZXg7XG5cbiAgfVxuXG5cblxuXG4gIHVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoY2FydEl0ZW0gOiBQcm9kdWN0VmFyaWFudCl7XG5cbiAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgbGV0IHZhcmlhbnQgOiBQcm9kdWN0VmFyaWFudCA9IHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKTtcbiAgICBsZXQgbWF4SXRlbXMgPSB2YXJpYW50LmdldE1heEludmVudG9yeSgpO1xuICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5zZXRBdHRyaWJ1dGUoXCJNQVhcIix0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuZ2V0SW52ZW50b3J5KCkgKyAgdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLmdldFNlbGVjdGVkKCkpO1xuICAgICBjb25zb2xlLmxvZyhcIm1heEl0ZW1zID0gXCIgKyBtYXhJdGVtcyArIFwiIHNlbGVjdGVkID0gXCIgKyBjYXJ0SXRlbS5nZXRTZWxlY3RlZCgpKTtcbiAgICAgdGhpcy5pdGVtcz0gdGhpcy5jYXJ0LmdldFRvdGFsTnVtYmVyT2ZJdGVtcygpO1xuICAgIGlmKG1heEl0ZW1zIDw9IGNhcnRJdGVtLmdldFNlbGVjdGVkKCkpe1xuICAgICAgKHRoaXMuZ2V0RWxlbWVudEJ5WHBhdGgoXCIoLy8qW0BpZD0nXCIgKyBjYXJ0SXRlbS5nZXRJZCgpICsgXCInXS8vYnV0dG9uWzFdKVsyXVwiKSBhcyBhbnkpLmNsYXNzTGlzdC50b2dnbGUoJ2luY3JlbWVudEJ1dHRvbkNsYXNzJyk7XG4gICAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuZGlzYWJsZWQgPSB0cnVlO1xuICAgIFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGVub3VnaCBpdGVtcyBpbiB0aGUgaW52ZW50b3J5XCIpO1xuICAgIH1lbHNle1xuICAgICAgKHRoaXMuZ2V0RWxlbWVudEJ5WHBhdGgoXCIoLy8qW0BpZD0nXCIgKyBjYXJ0SXRlbS5nZXRJZCgpICsgXCInXS8vYnV0dG9uWzFdKVsyXVwiKSBhcyBhbnkpLmNsYXNzTGlzdC50b2dnbGUoJ2luY3JlbWVudEJ1dHRvbkNsYXNzJyk7XG4gICAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgOiBcIiArIGNhcnRJdGVtLmdldFNlbGVjdGVkKCkpO1xuICAgIC8vdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLnNldFNlbGVjdGVkQW5kVXBkYXRlSW52ZW50b3J5KGNhcnRJdGVtLmdldFNlbGVjdGVkKCkpO1xuICAgIGNhcnRJdGVtLnNldEludmVudG9yeSggdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLmdldEludmVudG9yeSgpKTtcbiAgICBjb25zb2xlLmxvZyhcIm5ldyBpbnZlbnRvcnkgYnkgY2FydEl0ZW0gPSBcIiArIGNhcnRJdGVtLmdldEludmVudG9yeSgpKTtcbiAgICBjb25zb2xlLmxvZyhcIm5ldyBpbnZlbnRvcnkgYnkgY2FydCA9IFwiICsgdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLmdldEludmVudG9yeSgpKTtcblxuICAgIFxuICAgIGNvbnNvbGUubG9nKCAgKTtcbiAgfVxuXG5cbiAgcmVtb3ZlUHJvZHVjdEZyb21DYXJ0KHA6UHJvZHVjdFZhcmlhbnQpe1xuICAgIHRoaXMucHJvZHVjdFZhcmlhbnRzLnNwbGljZSh0aGlzLmdldFByb2R1Y3RWYXJpYW50QnlJZEFuZERlbGV0ZVZhcmlhbnQocCksIDEpO1xuXG5cbiAgfVxuXG5cbiAgICBnZXRFbGVtZW50QnlYcGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZXZhbHVhdGUocGF0aCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XG4gIH1cbn1cbiIsIlxuPGRpdiBjbGFzcz1cImNhcnQtcGFnZSBwLTFcIj5cbiAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaXRlbSBjb2wtOFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBiLTJcIj5cblxuICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJDb250aW51ZSBzaG9wcGluZ1wiIGljb249XCJwaSBwaS1hcnJvdy1sZWZ0XCIgKG9uQ2xpY2spPVwiYmFja1RvU2hvcCgpXCI+PC9wLWJ1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgICA8aDQ+SWwgbWlvIGNhcnJlbGxvOiB7e2l0ZW1zfX0gcHJvZG90dG8vaTwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FydC1zaGlwcGluZ1wiPlxuICAgICAgICBUZW1waSBkaSBzcGVkaXppb25lOiBkYSAxIGEgNCBnaW9ybmkgbGF2b3JhdGl2aVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicC0zIG1iLTFcIiAqbmdGb3I9XCJsZXQgY2FydEl0ZW0gb2YgcHJvZHVjdFZhcmlhbnRzOyBpIGFzIGluZGV4OyB0cmFja0J5OiB0cmFja0J5TWV0aG9kXCIgc3R5bGU9XCIgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS0yMDApO1wiID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIiBbaWRdPVwiY2FydEl0ZW0uaWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBjb2wtbWQtMyBjb2wtbGctMyBcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiBbc3JjXT1cInRoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLm1haW5JbWFnZVwiIFthdHRyLmFsdF09XCJ0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5uYW1lXCI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05IGNvbC1tZC02IGNvbC1sZy02IGNhcnQtaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tbmFtZVwiPnt7dGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkubmFtZX19PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tdmFyaWFudFwiPiBTaXplOiB7e2NhcnRJdGVtLnNpemV9fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXByaWNlXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IHNtYWxsO3RleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7IGNvbG9yOiByZWQ7XCI+e3t0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5wcmljZX194oKsPC9zcGFuPiZuYnNwOyZuYnNwOyZuYnNwOzxzcGFuPnt7dGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkucHJpY2UgLSB0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5kaXNjb3VudH194oKsPC9zcGFuPiA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICA8cC1idXR0b24gaWNvbj1cInBpIHBpLXRyYXNoXCIgKG9uQ2xpY2spPVwicmVtb3ZlUHJvZHVjdEZyb21DYXJ0KGNhcnRJdGVtKVwiPjwvcC1idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBjb2wtbWQtMyBjb2wtbGctM1wiPlxuICAgICAgICAgICAgICA8ZGl2ICBjbGFzcz1cInAtZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8cC1pbnB1dE51bWJlciAgc3R5bGU9XCJ3aWR0aDogMThweDtcIiBpZD1cInt7ICdvYmplY3QtJyArIGluZGV4IH19XCIgaW5wdXRJZD1cImNhcnRJdGVtLmlkXCIgbW9kZT1cImRlY2ltYWxcIiBjbGFzcz1cInAtaW5wdXR0ZXh0LXNtXCIgW3Nob3dCdXR0b25zXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgW21pbl09XCIwXCIgW21heF0gPSBcImNhcnRJdGVtLmdldE1heEludmVudG9yeSgpXCIgIFsobmdNb2RlbCldPVwiY2FydEl0ZW0uc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgKG9uSW5wdXQpPVwidXBkYXRlQ2FydEl0ZW1RdWFudGl0eShjYXJ0SXRlbSlcIj5cbiAgICAgICAgICAgICAgICA8L3AtaW5wdXROdW1iZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXN1YnRvdGFsIHB0LTVcIj5cbiAgICAgICAgICAgICAgICBTdWJ0b3RhbDpcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcnQtaXRlbS1zdWJ0b3RhbC12YWx1ZVwiPnt7KHRoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLnByaWNlIC0gdGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkuZGlzY291bnQpKiBjYXJ0SXRlbS5zZWxlY3RlZH194oKsPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm9vcyBzbTpjb2wtNCBtZDpjb2wtNCBsZzpjb2wtNFwiPlxuICAgIDxvcmRlcnMtb3JkZXItc3VtbWFyeT48L29yZGVycy1vcmRlci1zdW1tYXJ5PlxuICAgIDxkaXYgY2xhc3M9XCJncmlkIG10LTIgcC0xXCIgc3R5bGU9XCJib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLTIwMCk7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTQgbWItMFwiID4gPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxwPk1PREFMSVRBIERJIFBBR0FNRU5UTyBESVNQT05JQklMSTwvcD48L2Rpdj48L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+XG4gICAgICAgIDxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz1cImFzc2V0cy9tYXN0ZXJjYXJkLnBuZ1wiICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Zpc2EucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL2FtZXJpY2FuRXhwcmVzcy5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvbWFlc3Ryby5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvcG9zdGVwYXkucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3BheXBhbC5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMva2xhcm5hLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgIFxuICAgICAgXG4gICAgXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==