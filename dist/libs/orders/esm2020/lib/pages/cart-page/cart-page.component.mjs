import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '@eshop-frontend/users';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@eshop-frontend/users";
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
    i0.ɵɵlistener("onClick", function CartPageComponent_div_9_Template_p_button_onClick_17_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.productVariants.splice(ctx_r3.getProductVariantByIdAndDeleteVariant(cartItem_r1), 1); });
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
    constructor(router, cart) {
        this.router = router;
        this.cart = cart;
        this.productNames = [];
    }
    ngOnInit() {
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
        this.items = this.cart.getTotalNumberOfItems();
        return index;
    }
    updateCartItemQuantity(cartItem) {
        this.cart.updateLocalStorage();
        let variant = this.cart.getVariantById(cartItem.getId());
        let maxItems = variant.getMaxInventory();
        this.getElementByXpath("(//*[@id='" + cartItem.getId() + "']//button[1])[2]").setAttribute("MAX", this.cart.getVariantById(cartItem.getId()).getInventory() + this.cart.getVariantById(cartItem.getId()).getSelected());
        console.log("maxItems = " + maxItems + " selected = " + cartItem.getSelected());
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
    getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.Cart)); };
CartPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartPageComponent, selectors: [["orders-cart-page"]], decls: 39, vars: 3, consts: [[1, "cart-page", "p-1"], [1, "grid"], [1, "item", "col-8"], [1, "pb-2"], ["label", "Continue shopping", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "cart-shipping"], ["class", "p-3 mb-1", "style", "    border: 1px solid var(--surface-200);", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "oos", "sm:col-4", "md:col-4", "lg:col-4"], [1, "grid", "mt-2", "p-1", 2, "border", "1px solid var(--surface-200)"], [1, "row", "mt-4", "mb-0"], [1, "col-12"], [1, "row"], [1, "col-1", 2, "min-width", "50px"], [2, "display", "inline"], ["src", "assets/mastercard.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/visa.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/americanExpress.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/maestro.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/postepay.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/paypal.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/klarna.png", "alt", "Responsive image", 1, "img-fluid"], [1, "p-3", "mb-1", 2, "border", "1px solid var(--surface-200)"], [1, "grid", 3, "id"], [1, "col-3", "col-md-3", "col-lg-3"], [1, "img-fluid", 3, "src"], [1, "col-9", "col-md-6", "col-lg-6", "cart-item-info"], [1, "cart-item-name"], [1, "cart-item-variant"], [1, "cart-item-price"], [2, "font-size", "small", "text-decoration-line", "line-through", "color", "red"], [1, "cart-item-remove"], ["icon", "pi pi-trash", 3, "onClick"], [1, "col-6", "col-md-3", "col-lg-3"], [1, "p-field"], ["inputId", "cartItem.id", "mode", "decimal", 1, "p-inputtext-sm", 2, "width", "18px", 3, "id", "showButtons", "min", "max", "ngModel", "ngModelChange", "onInput"], [1, "cart-item-subtotal", "pt-5"], [1, "cart-item-subtotal-value"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p-button", 4);
        i0.ɵɵlistener("onClick", function CartPageComponent_Template_p_button_onClick_4_listener() { return ctx.backToShop(); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "h4");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵtext(8, " Shipping times: 1 to 4 working days ");
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
        i0.ɵɵtextInterpolate1("My cart: ", ctx.items, " Item(s)");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.productVariants)("ngForTrackBy", ctx.trackByMethod);
    } }, directives: [i3.Button, i4.NgForOf, i5.InputNumber, i6.NgControlStatus, i6.NgModel, i7.OrderSummaryComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartPageComponent, [{
        type: Component,
        args: [{ selector: 'orders-cart-page', styles: [], template: "\n<div class=\"cart-page p-1\">\n  <div class=\"grid\">\n    <div class=\"item col-8\">\n      <div class=\"pb-2\">\n\n        <p-button label=\"Continue shopping\" icon=\"pi pi-arrow-left\" (onClick)=\"backToShop()\"></p-button>\n\n      </div>\n      <h4>My cart: {{items}} Item(s)</h4>\n      <div class=\"cart-shipping\">\n        Shipping times: 1 to 4 working days\n      </div>\n      <div class=\"p-3 mb-1\" *ngFor=\"let cartItem of productVariants; i as index; trackBy: trackByMethod\" style=\"    border: 1px solid var(--surface-200);\" >\n        <div class=\"grid\" [id]=\"cartItem.id\">\n          <div class=\"row\">\n\n            <div class=\"col-3 col-md-3 col-lg-3 \">\n            <img class=\"img-fluid\" [src]=\"this.cart.getProductByVariantId(cartItem.id).mainImage\" [attr.alt]=\"this.cart.getProductByVariantId(cartItem.id).name\">\n            </div>\n\n            <div class=\"col-9 col-md-6 col-lg-6 cart-item-info\">\n              <div class=\"cart-item-name\">{{this.cart.getProductByVariantId(cartItem.id).name}}</div>\n              <div class=\"cart-item-variant\"> Size: {{cartItem.size}}</div>\n              <div class=\"cart-item-price\"><span style=\"font-size: small;text-decoration-line: line-through; color: red;\">{{this.cart.getProductByVariantId(cartItem.id).price}}\u20AC</span>&nbsp;&nbsp;&nbsp;<span>{{this.cart.getProductByVariantId(cartItem.id).price - this.cart.getProductByVariantId(cartItem.id).discount}}\u20AC</span> </div>\n              <div class=\"cart-item-remove\">\n                <p-button icon=\"pi pi-trash\" (onClick)=\"productVariants.splice(getProductVariantByIdAndDeleteVariant(cartItem), 1)\"></p-button>\n              </div>\n            </div>\n\n            <div class=\"col-6 col-md-3 col-lg-3\">\n              <div  class=\"p-field\">\n                <p-inputNumber  style=\"width: 18px;\" id=\"{{ 'object-' + index }}\" inputId=\"cartItem.id\" mode=\"decimal\" class=\"p-inputtext-sm\" [showButtons]=\"true\"\n                  [min]=\"0\" [max] = \"cartItem.getMaxInventory()\"  [(ngModel)]=\"cartItem.selected\"\n                  (onInput)=\"updateCartItemQuantity(cartItem)\">\n                </p-inputNumber>\n              </div>\n              <div class=\"cart-item-subtotal pt-5\">\n                Subtotal:\n                <span class=\"cart-item-subtotal-value\">{{(this.cart.getProductByVariantId(cartItem.id).price - this.cart.getProductByVariantId(cartItem.id).discount)* cartItem.selected}}\u20AC</span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"oos sm:col-4 md:col-4 lg:col-4\">\n    <orders-order-summary></orders-order-summary>\n    <div class=\"grid mt-2 p-1\" style=\"border: 1px solid var(--surface-200);\">\n      <div class=\"row mt-4 mb-0\" > <div class=\"col-12\"><p>MODALITA DI PAGAMENTO DISPONIBILI</p></div></div>\n      \n      <div class=\"row\">\n        <div class=\"col-1\"  style=\"min-width: 50px;\">\n        <li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li>\n        </div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/paypal.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/klarna.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        \n      \n    \n    </div>\n    </div>\n    </div>\n\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7SUNTdkMsK0JBQXNKLGNBQUEsY0FBQSxjQUFBO0lBS2hKLDBCQUFxSjtJQUNySixpQkFBTTtJQUVOLCtCQUFvRCxjQUFBO0lBQ3RCLFlBQXFEO0lBQUEsaUJBQU07SUFDdkYsK0JBQStCO0lBQUMsWUFBdUI7SUFBQSxpQkFBTTtJQUM3RCxnQ0FBNkIsZ0JBQUE7SUFBK0UsYUFBdUQ7SUFBQSxpQkFBTztJQUFBLG1DQUFrQjtJQUFBLDZCQUFNO0lBQUEsYUFBK0c7SUFBQSxpQkFBTyxFQUFBO0lBQ3hULGdDQUE4QixvQkFBQTtJQUNDLG9PQUFXLDhCQUF1Qix5REFBK0MsRUFBRSxDQUFDLENBQUMsSUFBQztJQUFDLGlCQUFXLEVBQUEsRUFBQTtJQUluSSxnQ0FBcUMsZUFBQSx5QkFBQTtJQUdpQix5UEFBK0IsNE5BQ3BFLDBDQUFnQyxJQURvQztJQUVqRixpQkFBZ0IsRUFBQTtJQUVsQixnQ0FBcUM7SUFDbkMsNEJBQ0E7SUFBQSxpQ0FBdUM7SUFBQSxhQUFvSTtJQUFBLGlCQUFPLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTs7Ozs7SUF6QnhLLGVBQWtCO0lBQWxCLG1DQUFrQjtJQUlULGVB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O1FBQUEsaUJBQUssRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7O1FBcERwSixlQUEwQjtRQUExQix5REFBMEI7UUFJYSxlQUFvQjtRQUFwQiw2Q0FBb0IsbUNBQUE7O3VGREd4RCxpQkFBaUI7Y0FON0IsU0FBUzsyQkFDRSxrQkFBa0IsVUFFcEIsRUFDUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RWYXJpYW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuXG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29yZGVycy1jYXJ0LXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FydFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblxuICBwcm9kdWN0VmFyaWFudHM6IFByb2R1Y3RWYXJpYW50W11cbiAgaXRlbXM6bnVtYmVyO1xuICBwcm9kdWN0TmFtZXM6IHN0cmluZ1tdID0gW107XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGNhcnQgOiBDYXJ0KSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIFxuIFxuICAgIHRoaXMucHJvZHVjdFZhcmlhbnRzID0gdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG4gICAgdGhpcy5wcm9kdWN0VmFyaWFudHMuZm9yRWFjaChwID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHAuZ2V0SnNvbigpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2FydC5nZXRwcm9kdWN0cygpLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdE5hbWVzLnB1c2gocHJvZHVjdC5nZXROYW1lKCkpO1xuICAgIH0pO1xuICAgIHRoaXMuaXRlbXM9IHRoaXMuY2FydC5nZXRUb3RhbE51bWJlck9mSXRlbXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICB9XG5cbiAgYmFja1RvU2hvcCgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2R1Y3RzJ10pO1xuICB9XG5cbiAgdHJhY2tCeU1ldGhvZChpbmRleDpudW1iZXIsIHA6UHJvZHVjdFZhcmlhbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBwLmdldElkKCk7XG59XG5cbiAgZ2V0UHJvZHVjdFZhcmlhbnRCeUlkQW5kRGVsZXRlVmFyaWFudChwIDogUHJvZHVjdFZhcmlhbnQpe1xuICAgIGxldCBpbmRleCA9IG51bGw7XG4gICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLnByb2R1Y3RWYXJpYW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICBcbiAgICAgIGlmKHRoaXMucHJvZHVjdFZhcmlhbnRzW2ldLmdldElkKCkgPT09IHAuZ2V0SWQoKSl7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jYXJ0LmRlbGV0ZVByb2R1Y3RWYXJpYW50KHApO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmNhcnQuZ2V0VG90YWxOdW1iZXJPZkl0ZW1zKCk7XG4gICAgcmV0dXJuIGluZGV4O1xuXG4gIH1cblxuXG5cblxuICB1cGRhdGVDYXJ0SXRlbVF1YW50aXR5KGNhcnRJdGVtIDogUHJvZHVjdFZhcmlhbnQpe1xuXG4gICAgdGhpcy5jYXJ0LnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIGxldCB2YXJpYW50IDogUHJvZHVjdFZhcmlhbnQgPSB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSk7XG4gICAgbGV0IG1heEl0ZW1zID0gdmFyaWFudC5nZXRNYXhJbnZlbnRvcnkoKTtcbiAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuc2V0QXR0cmlidXRlKFwiTUFYXCIsdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLmdldEludmVudG9yeSgpICsgIHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKS5nZXRTZWxlY3RlZCgpKTtcbiAgICAgY29uc29sZS5sb2coXCJtYXhJdGVtcyA9IFwiICsgbWF4SXRlbXMgKyBcIiBzZWxlY3RlZCA9IFwiICsgY2FydEl0ZW0uZ2V0U2VsZWN0ZWQoKSk7XG4gICAgaWYobWF4SXRlbXMgPD0gY2FydEl0ZW0uZ2V0U2VsZWN0ZWQoKSl7XG4gICAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuY2xhc3NMaXN0LnRvZ2dsZSgnaW5jcmVtZW50QnV0dG9uQ2xhc3MnKTtcbiAgICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5kaXNhYmxlZCA9IHRydWU7XG4gICBcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBlbm91Z2ggaXRlbXMgaW4gdGhlIGludmVudG9yeVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5jbGFzc0xpc3QudG9nZ2xlKCdpbmNyZW1lbnRCdXR0b25DbGFzcycpO1xuICAgICAgKHRoaXMuZ2V0RWxlbWVudEJ5WHBhdGgoXCIoLy8qW0BpZD0nXCIgKyBjYXJ0SXRlbS5nZXRJZCgpICsgXCInXS8vYnV0dG9uWzFdKVsyXVwiKSBhcyBhbnkpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCA6IFwiICsgY2FydEl0ZW0uZ2V0U2VsZWN0ZWQoKSk7XG4gICAgLy90aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuc2V0U2VsZWN0ZWRBbmRVcGRhdGVJbnZlbnRvcnkoY2FydEl0ZW0uZ2V0U2VsZWN0ZWQoKSk7XG4gICAgY2FydEl0ZW0uc2V0SW52ZW50b3J5KCB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuZ2V0SW52ZW50b3J5KCkpO1xuICAgIGNvbnNvbGUubG9nKFwibmV3IGludmVudG9yeSBieSBjYXJ0SXRlbSA9IFwiICsgY2FydEl0ZW0uZ2V0SW52ZW50b3J5KCkpO1xuICAgIGNvbnNvbGUubG9nKFwibmV3IGludmVudG9yeSBieSBjYXJ0ID0gXCIgKyB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuZ2V0SW52ZW50b3J5KCkpO1xuXG4gICAgXG4gICAgY29uc29sZS5sb2coICApO1xuICB9XG5cblxuICAgIGdldEVsZW1lbnRCeVhwYXRoKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiBkb2N1bWVudC5ldmFsdWF0ZShwYXRoLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcbiAgfVxufVxuIiwiXG48ZGl2IGNsYXNzPVwiY2FydC1wYWdlIHAtMVwiPlxuICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbC04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGItMlwiPlxuXG4gICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIkNvbnRpbnVlIHNob3BwaW5nXCIgaWNvbj1cInBpIHBpLWFycm93LWxlZnRcIiAob25DbGljayk9XCJiYWNrVG9TaG9wKClcIj48L3AtYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxoND5NeSBjYXJ0OiB7e2l0ZW1zfX0gSXRlbShzKTwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FydC1zaGlwcGluZ1wiPlxuICAgICAgICBTaGlwcGluZyB0aW1lczogMSB0byA0IHdvcmtpbmcgZGF5c1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicC0zIG1iLTFcIiAqbmdGb3I9XCJsZXQgY2FydEl0ZW0gb2YgcHJvZHVjdFZhcmlhbnRzOyBpIGFzIGluZGV4OyB0cmFja0J5OiB0cmFja0J5TWV0aG9kXCIgc3R5bGU9XCIgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS0yMDApO1wiID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIiBbaWRdPVwiY2FydEl0ZW0uaWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBjb2wtbWQtMyBjb2wtbGctMyBcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiBbc3JjXT1cInRoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLm1haW5JbWFnZVwiIFthdHRyLmFsdF09XCJ0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5uYW1lXCI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05IGNvbC1tZC02IGNvbC1sZy02IGNhcnQtaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tbmFtZVwiPnt7dGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkubmFtZX19PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tdmFyaWFudFwiPiBTaXplOiB7e2NhcnRJdGVtLnNpemV9fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXByaWNlXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IHNtYWxsO3RleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7IGNvbG9yOiByZWQ7XCI+e3t0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5wcmljZX194oKsPC9zcGFuPiZuYnNwOyZuYnNwOyZuYnNwOzxzcGFuPnt7dGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkucHJpY2UgLSB0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5kaXNjb3VudH194oKsPC9zcGFuPiA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICA8cC1idXR0b24gaWNvbj1cInBpIHBpLXRyYXNoXCIgKG9uQ2xpY2spPVwicHJvZHVjdFZhcmlhbnRzLnNwbGljZShnZXRQcm9kdWN0VmFyaWFudEJ5SWRBbmREZWxldGVWYXJpYW50KGNhcnRJdGVtKSwgMSlcIj48L3AtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgY29sLW1kLTMgY29sLWxnLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJwLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXROdW1iZXIgIHN0eWxlPVwid2lkdGg6IDE4cHg7XCIgaWQ9XCJ7eyAnb2JqZWN0LScgKyBpbmRleCB9fVwiIGlucHV0SWQ9XCJjYXJ0SXRlbS5pZFwiIG1vZGU9XCJkZWNpbWFsXCIgY2xhc3M9XCJwLWlucHV0dGV4dC1zbVwiIFtzaG93QnV0dG9uc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIFttaW5dPVwiMFwiIFttYXhdID0gXCJjYXJ0SXRlbS5nZXRNYXhJbnZlbnRvcnkoKVwiICBbKG5nTW9kZWwpXT1cImNhcnRJdGVtLnNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgIChvbklucHV0KT1cInVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoY2FydEl0ZW0pXCI+XG4gICAgICAgICAgICAgICAgPC9wLWlucHV0TnVtYmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS1zdWJ0b3RhbCBwdC01XCI+XG4gICAgICAgICAgICAgICAgU3VidG90YWw6XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJ0LWl0ZW0tc3VidG90YWwtdmFsdWVcIj57eyh0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5wcmljZSAtIHRoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLmRpc2NvdW50KSogY2FydEl0ZW0uc2VsZWN0ZWR9feKCrDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJvb3Mgc206Y29sLTQgbWQ6Y29sLTQgbGc6Y29sLTRcIj5cbiAgICA8b3JkZXJzLW9yZGVyLXN1bW1hcnk+PC9vcmRlcnMtb3JkZXItc3VtbWFyeT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBtdC0yIHAtMVwiIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS0yMDApO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC00IG1iLTBcIiA+IDxkaXYgY2xhc3M9XCJjb2wtMTJcIj48cD5NT0RBTElUQSBESSBQQUdBTUVOVE8gRElTUE9OSUJJTEk8L3A+PC9kaXY+PC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPlxuICAgICAgICA8bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9XCJhc3NldHMvbWFzdGVyY2FyZC5wbmdcIiAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy92aXNhLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9hbWVyaWNhbkV4cHJlc3MucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL21hZXN0cm8ucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Bvc3RlcGF5LnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9wYXlwYWwucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL2tsYXJuYS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICBcbiAgICAgIFxuICAgIFxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=