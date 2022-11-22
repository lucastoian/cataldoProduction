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
    i0.ɵɵelementStart(10, "div", 28);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 29)(14, "p-button", 30);
    i0.ɵɵlistener("onClick", function CartPageComponent_div_9_Template_p_button_onClick_14_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.productVariants.splice(ctx_r3.getProductVariantByIdAndDeleteVariant(cartItem_r1), 1); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 31)(16, "div", 32)(17, "p-inputNumber", 33);
    i0.ɵɵlistener("ngModelChange", function CartPageComponent_div_9_Template_p_inputNumber_ngModelChange_17_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; return cartItem_r1.selected = $event; })("onInput", function CartPageComponent_div_9_Template_p_inputNumber_onInput_17_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.updateCartItemQuantity(cartItem_r1); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 34);
    i0.ɵɵtext(19, " Subtotal: ");
    i0.ɵɵelementStart(20, "span", 35);
    i0.ɵɵtext(21);
    i0.ɵɵpipe(22, "currency");
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
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(12, 12, ctx_r0.cart.getProductByVariantId(cartItem_r1.id).price));
    i0.ɵɵadvance(6);
    i0.ɵɵpropertyInterpolate("id", "object-" + index_r2);
    i0.ɵɵproperty("showButtons", true)("min", 0)("max", cartItem_r1.getMaxInventory())("ngModel", cartItem_r1.selected);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(22, 14, ctx_r0.cart.getProductByVariantId(cartItem_r1.id).price * cartItem_r1.selected));
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
CartPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartPageComponent, selectors: [["orders-cart-page"]], decls: 39, vars: 3, consts: [[1, "cart-page", "p-1"], [1, "grid"], [1, "item", "col-8"], [1, "pb-2"], ["label", "Continue shopping", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "cart-shipping"], ["class", "p-3 mb-1", "style", "    border: 1px solid var(--surface-200);", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "oos", "sm:col-4", "md:col-4", "lg:col-4"], [1, "grid", "mt-2", "p-1", 2, "border", "1px solid var(--surface-200)"], [1, "row", "mt-4", "mb-0"], [1, "col-12"], [1, "row"], [1, "col-1", 2, "min-width", "50px"], [2, "display", "inline"], ["src", "assets/mastercard.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/visa.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/americanExpress.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/maestro.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/postepay.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/paypal.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/klarna.png", "alt", "Responsive image", 1, "img-fluid"], [1, "p-3", "mb-1", 2, "border", "1px solid var(--surface-200)"], [1, "grid", 3, "id"], [1, "col-3", "col-md-3", "col-lg-3"], [1, "img-fluid", 3, "src"], [1, "col-9", "col-md-6", "col-lg-6", "cart-item-info"], [1, "cart-item-name"], [1, "cart-item-variant"], [1, "cart-item-price"], [1, "cart-item-remove"], ["icon", "pi pi-trash", 3, "onClick"], [1, "col-6", "col-md-3", "col-lg-3"], [1, "p-field"], ["inputId", "cartItem.id", "mode", "decimal", 1, "p-inputtext-sm", 2, "width", "18px", 3, "id", "showButtons", "min", "max", "ngModel", "ngModelChange", "onInput"], [1, "cart-item-subtotal", "pt-5"], [1, "cart-item-subtotal-value"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p-button", 4);
        i0.ɵɵlistener("onClick", function CartPageComponent_Template_p_button_onClick_4_listener() { return ctx.backToShop(); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "h4");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵtext(8, " Shipping times: 1 to 4 working days ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, CartPageComponent_div_9_Template, 23, 16, "div", 6);
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
    } }, directives: [i3.Button, i4.NgForOf, i5.InputNumber, i6.NgControlStatus, i6.NgModel, i7.OrderSummaryComponent], pipes: [i4.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartPageComponent, [{
        type: Component,
        args: [{ selector: 'orders-cart-page', styles: [], template: "<div class=\"cart-page p-1\">\n  <div class=\"grid\">\n    <div class=\"item col-8\">\n      <div class=\"pb-2\">\n\n        <p-button label=\"Continue shopping\" icon=\"pi pi-arrow-left\" (onClick)=\"backToShop()\"></p-button>\n\n      </div>\n      <h4>My cart: {{items}} Item(s)</h4>\n      <div class=\"cart-shipping\">\n        Shipping times: 1 to 4 working days\n      </div>\n      <div class=\"p-3 mb-1\" *ngFor=\"let cartItem of productVariants; i as index; trackBy: trackByMethod\" style=\"    border: 1px solid var(--surface-200);\" >\n        <div class=\"grid\" [id]=\"cartItem.id\">\n          <div class=\"row\">\n\n            <div class=\"col-3 col-md-3 col-lg-3 \">\n            <img class=\"img-fluid\" [src]=\"this.cart.getProductByVariantId(cartItem.id).mainImage\" [attr.alt]=\"this.cart.getProductByVariantId(cartItem.id).name\">\n            </div>\n\n            <div class=\"col-9 col-md-6 col-lg-6 cart-item-info\">\n              <div class=\"cart-item-name\">{{this.cart.getProductByVariantId(cartItem.id).name}}</div>\n              <div class=\"cart-item-variant\"> Size: {{cartItem.size}}</div>\n              <div class=\"cart-item-price\">{{this.cart.getProductByVariantId(cartItem.id).price | currency}}</div>\n              <div class=\"cart-item-remove\">\n                <p-button icon=\"pi pi-trash\" (onClick)=\"productVariants.splice(getProductVariantByIdAndDeleteVariant(cartItem), 1)\"></p-button>\n              </div>\n            </div>\n\n            <div class=\"col-6 col-md-3 col-lg-3\">\n              <div  class=\"p-field\">\n                <p-inputNumber  style=\"width: 18px;\" id=\"{{ 'object-' + index }}\" inputId=\"cartItem.id\" mode=\"decimal\" class=\"p-inputtext-sm\" [showButtons]=\"true\"\n                  [min]=\"0\" [max] = \"cartItem.getMaxInventory()\"  [(ngModel)]=\"cartItem.selected\"\n                  (onInput)=\"updateCartItemQuantity(cartItem)\">\n                </p-inputNumber>\n              </div>\n              <div class=\"cart-item-subtotal pt-5\">\n                Subtotal:\n                <span class=\"cart-item-subtotal-value\">{{this.cart.getProductByVariantId(cartItem.id).price * cartItem.selected | currency}}</span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"oos sm:col-4 md:col-4 lg:col-4\">\n    <orders-order-summary></orders-order-summary>\n    <div class=\"grid mt-2 p-1\" style=\"border: 1px solid var(--surface-200);\">\n      <div class=\"row mt-4 mb-0\" > <div class=\"col-12\"><p>MODALITA DI PAGAMENTO DISPONIBILI</p></div></div>\n      \n      <div class=\"row\">\n        <div class=\"col-1\"  style=\"min-width: 50px;\">\n        <li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li>\n        </div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/paypal.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/klarna.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        \n      \n    \n    </div>\n    </div>\n    </div>\n\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7SUNRdkMsK0JBQXNKLGNBQUEsY0FBQSxjQUFBO0lBS2hKLDBCQUFxSjtJQUNySixpQkFBTTtJQUVOLCtCQUFvRCxjQUFBO0lBQ3RCLFlBQXFEO0lBQUEsaUJBQU07SUFDdkYsK0JBQStCO0lBQUMsWUFBdUI7SUFBQSxpQkFBTTtJQUM3RCxnQ0FBNkI7SUFBQSxhQUFpRTs7SUFBQSxpQkFBTTtJQUNwRyxnQ0FBOEIsb0JBQUE7SUFDQyxvT0FBVyw4QkFBdUIseURBQStDLEVBQUUsQ0FBQyxDQUFDLElBQUM7SUFBQyxpQkFBVyxFQUFBLEVBQUE7SUFJbkksZ0NBQXFDLGVBQUEseUJBQUE7SUFHaUIseVBBQStCLDROQUNwRSwwQ0FBZ0MsSUFEb0M7SUFFakYsaUJBQWdCLEVBQUE7SUFFbEIsZ0NBQXFDO0lBQ25DLDRCQUNBO0lBQUEsaUNBQXVDO0lBQUEsYUFBcUY7O0lBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOzs7OztJQXpCekgsZUFBa0I7SUFBbEIsbUNBQWtCO0lBSVQsZUFBOEQ7SUFBOUQsbUdBQThEO0lBQUMsNkVBQThEO0lBSXRILGVBQXFEO0lBQXJELDRFQUFxRDtJ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O1FBQXBCLDZDQUFvQixtQ0FBQTs7dUZESXhELGlCQUFpQjtjQU43QixTQUFTOzJCQUNFLGtCQUFrQixVQUVwQixFQUNQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3JkZXJzLWNhcnQtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXG4gIHByb2R1Y3RWYXJpYW50czogUHJvZHVjdFZhcmlhbnRbXVxuICBpdGVtczpudW1iZXI7XG4gIHByb2R1Y3ROYW1lczogc3RyaW5nW10gPSBbXTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2FydCA6IENhcnQpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgXG4gXG4gICAgdGhpcy5wcm9kdWN0VmFyaWFudHMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcbiAgICB0aGlzLnByb2R1Y3RWYXJpYW50cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgY29uc29sZS5sb2cocC5nZXRKc29uKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jYXJ0LmdldHByb2R1Y3RzKCkuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0TmFtZXMucHVzaChwcm9kdWN0LmdldE5hbWUoKSk7XG4gICAgfSk7XG4gICAgdGhpcy5pdGVtcz0gdGhpcy5jYXJ0LmdldFRvdGFsTnVtYmVyT2ZJdGVtcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gIH1cblxuICBiYWNrVG9TaG9wKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZHVjdHMnXSk7XG4gIH1cblxuICB0cmFja0J5TWV0aG9kKGluZGV4Om51bWJlciwgcDpQcm9kdWN0VmFyaWFudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHAuZ2V0SWQoKTtcbn1cblxuICBnZXRQcm9kdWN0VmFyaWFudEJ5SWRBbmREZWxldGVWYXJpYW50KHAgOiBQcm9kdWN0VmFyaWFudCl7XG4gICAgbGV0IGluZGV4ID0gbnVsbDtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMucHJvZHVjdFZhcmlhbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgIFxuICAgICAgaWYodGhpcy5wcm9kdWN0VmFyaWFudHNbaV0uZ2V0SWQoKSA9PT0gcC5nZXRJZCgpKXtcbiAgICAgICAgaW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNhcnQuZGVsZXRlUHJvZHVjdFZhcmlhbnQocCk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuY2FydC5nZXRUb3RhbE51bWJlck9mSXRlbXMoKTtcbiAgICByZXR1cm4gaW5kZXg7XG5cbiAgfVxuXG5cblxuXG4gIHVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoY2FydEl0ZW0gOiBQcm9kdWN0VmFyaWFudCl7XG5cbiAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgbGV0IHZhcmlhbnQgOiBQcm9kdWN0VmFyaWFudCA9IHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKTtcbiAgICBsZXQgbWF4SXRlbXMgPSB2YXJpYW50LmdldE1heEludmVudG9yeSgpO1xuICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5zZXRBdHRyaWJ1dGUoXCJNQVhcIix0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuZ2V0SW52ZW50b3J5KCkgKyAgdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLmdldFNlbGVjdGVkKCkpO1xuICAgICBjb25zb2xlLmxvZyhcIm1heEl0ZW1zID0gXCIgKyBtYXhJdGVtcyArIFwiIHNlbGVjdGVkID0gXCIgKyBjYXJ0SXRlbS5nZXRTZWxlY3RlZCgpKTtcbiAgICBpZihtYXhJdGVtcyA8PSBjYXJ0SXRlbS5nZXRTZWxlY3RlZCgpKXtcbiAgICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5jbGFzc0xpc3QudG9nZ2xlKCdpbmNyZW1lbnRCdXR0b25DbGFzcycpO1xuICAgICAgKHRoaXMuZ2V0RWxlbWVudEJ5WHBhdGgoXCIoLy8qW0BpZD0nXCIgKyBjYXJ0SXRlbS5nZXRJZCgpICsgXCInXS8vYnV0dG9uWzFdKVsyXVwiKSBhcyBhbnkpLmRpc2FibGVkID0gdHJ1ZTtcbiAgIFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGVub3VnaCBpdGVtcyBpbiB0aGUgaW52ZW50b3J5XCIpO1xuICAgIH1lbHNle1xuICAgICAgKHRoaXMuZ2V0RWxlbWVudEJ5WHBhdGgoXCIoLy8qW0BpZD0nXCIgKyBjYXJ0SXRlbS5nZXRJZCgpICsgXCInXS8vYnV0dG9uWzFdKVsyXVwiKSBhcyBhbnkpLmNsYXNzTGlzdC50b2dnbGUoJ2luY3JlbWVudEJ1dHRvbkNsYXNzJyk7XG4gICAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIDogXCIgKyBjYXJ0SXRlbS5nZXRTZWxlY3RlZCgpKTtcbiAgICAvL3RoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKS5zZXRTZWxlY3RlZEFuZFVwZGF0ZUludmVudG9yeShjYXJ0SXRlbS5nZXRTZWxlY3RlZCgpKTtcbiAgICBjYXJ0SXRlbS5zZXRJbnZlbnRvcnkoIHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKS5nZXRJbnZlbnRvcnkoKSk7XG4gICAgY29uc29sZS5sb2coXCJuZXcgaW52ZW50b3J5IGJ5IGNhcnRJdGVtID0gXCIgKyBjYXJ0SXRlbS5nZXRJbnZlbnRvcnkoKSk7XG4gICAgY29uc29sZS5sb2coXCJuZXcgaW52ZW50b3J5IGJ5IGNhcnQgPSBcIiArIHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKS5nZXRJbnZlbnRvcnkoKSk7XG5cbiAgICBcbiAgICBjb25zb2xlLmxvZyggICk7XG4gIH1cblxuXG4gICAgZ2V0RWxlbWVudEJ5WHBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmV2YWx1YXRlKHBhdGgsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FydC1wYWdlIHAtMVwiPlxuICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbC04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGItMlwiPlxuXG4gICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIkNvbnRpbnVlIHNob3BwaW5nXCIgaWNvbj1cInBpIHBpLWFycm93LWxlZnRcIiAob25DbGljayk9XCJiYWNrVG9TaG9wKClcIj48L3AtYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxoND5NeSBjYXJ0OiB7e2l0ZW1zfX0gSXRlbShzKTwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FydC1zaGlwcGluZ1wiPlxuICAgICAgICBTaGlwcGluZyB0aW1lczogMSB0byA0IHdvcmtpbmcgZGF5c1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicC0zIG1iLTFcIiAqbmdGb3I9XCJsZXQgY2FydEl0ZW0gb2YgcHJvZHVjdFZhcmlhbnRzOyBpIGFzIGluZGV4OyB0cmFja0J5OiB0cmFja0J5TWV0aG9kXCIgc3R5bGU9XCIgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS0yMDApO1wiID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIiBbaWRdPVwiY2FydEl0ZW0uaWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBjb2wtbWQtMyBjb2wtbGctMyBcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiBbc3JjXT1cInRoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLm1haW5JbWFnZVwiIFthdHRyLmFsdF09XCJ0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5uYW1lXCI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05IGNvbC1tZC02IGNvbC1sZy02IGNhcnQtaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tbmFtZVwiPnt7dGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkubmFtZX19PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tdmFyaWFudFwiPiBTaXplOiB7e2NhcnRJdGVtLnNpemV9fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXByaWNlXCI+e3t0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5wcmljZSB8IGN1cnJlbmN5fX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICA8cC1idXR0b24gaWNvbj1cInBpIHBpLXRyYXNoXCIgKG9uQ2xpY2spPVwicHJvZHVjdFZhcmlhbnRzLnNwbGljZShnZXRQcm9kdWN0VmFyaWFudEJ5SWRBbmREZWxldGVWYXJpYW50KGNhcnRJdGVtKSwgMSlcIj48L3AtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgY29sLW1kLTMgY29sLWxnLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJwLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXROdW1iZXIgIHN0eWxlPVwid2lkdGg6IDE4cHg7XCIgaWQ9XCJ7eyAnb2JqZWN0LScgKyBpbmRleCB9fVwiIGlucHV0SWQ9XCJjYXJ0SXRlbS5pZFwiIG1vZGU9XCJkZWNpbWFsXCIgY2xhc3M9XCJwLWlucHV0dGV4dC1zbVwiIFtzaG93QnV0dG9uc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIFttaW5dPVwiMFwiIFttYXhdID0gXCJjYXJ0SXRlbS5nZXRNYXhJbnZlbnRvcnkoKVwiICBbKG5nTW9kZWwpXT1cImNhcnRJdGVtLnNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgIChvbklucHV0KT1cInVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoY2FydEl0ZW0pXCI+XG4gICAgICAgICAgICAgICAgPC9wLWlucHV0TnVtYmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS1zdWJ0b3RhbCBwdC01XCI+XG4gICAgICAgICAgICAgICAgU3VidG90YWw6XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJ0LWl0ZW0tc3VidG90YWwtdmFsdWVcIj57e3RoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLnByaWNlICogY2FydEl0ZW0uc2VsZWN0ZWQgfCBjdXJyZW5jeX19PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm9vcyBzbTpjb2wtNCBtZDpjb2wtNCBsZzpjb2wtNFwiPlxuICAgIDxvcmRlcnMtb3JkZXItc3VtbWFyeT48L29yZGVycy1vcmRlci1zdW1tYXJ5PlxuICAgIDxkaXYgY2xhc3M9XCJncmlkIG10LTIgcC0xXCIgc3R5bGU9XCJib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLTIwMCk7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTQgbWItMFwiID4gPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxwPk1PREFMSVRBIERJIFBBR0FNRU5UTyBESVNQT05JQklMSTwvcD48L2Rpdj48L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+XG4gICAgICAgIDxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz1cImFzc2V0cy9tYXN0ZXJjYXJkLnBuZ1wiICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Zpc2EucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL2FtZXJpY2FuRXhwcmVzcy5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvbWFlc3Ryby5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMvcG9zdGVwYXkucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3BheXBhbC5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIiAgc3R5bGU9XCJtaW4td2lkdGg6IDUwcHg7XCI+PGxpIHN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiPjxpbWcgc3JjPSdhc3NldHMva2xhcm5hLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgIFxuICAgICAgXG4gICAgXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==