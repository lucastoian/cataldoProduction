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
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "div", 23);
    i0.ɵɵelement(3, "img", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 25)(5, "div", 26);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 27);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 28);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 29)(13, "p-button", 30);
    i0.ɵɵlistener("onClick", function CartPageComponent_div_9_Template_p_button_onClick_13_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.productVariants.splice(ctx_r3.getProductVariantByIdAndDeleteVariant(cartItem_r1), 1); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 31)(15, "div", 32)(16, "p-inputNumber", 33);
    i0.ɵɵlistener("ngModelChange", function CartPageComponent_div_9_Template_p_inputNumber_ngModelChange_16_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; return cartItem_r1.selected = $event; })("onInput", function CartPageComponent_div_9_Template_p_inputNumber_onInput_16_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.updateCartItemQuantity(cartItem_r1); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 34);
    i0.ɵɵtext(18, " Subtotal: ");
    i0.ɵɵelementStart(19, "span", 35);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "currency");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const cartItem_r1 = ctx.$implicit;
    const index_r2 = ctx.i;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", cartItem_r1.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r0.cart.getProductByVariantId(cartItem_r1.id).mainImage, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("alt", ctx_r0.cart.getProductByVariantId(cartItem_r1.id).name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.cart.getProductByVariantId(cartItem_r1.id).name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Size: ", cartItem_r1.size, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 12, ctx_r0.cart.getProductByVariantId(cartItem_r1.id).price));
    i0.ɵɵadvance(6);
    i0.ɵɵpropertyInterpolate("id", "object-" + index_r2);
    i0.ɵɵproperty("showButtons", true)("min", 0)("max", cartItem_r1.getMaxInventory())("ngModel", cartItem_r1.selected);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(21, 14, ctx_r0.cart.getProductByVariantId(cartItem_r1.id).price * cartItem_r1.selected));
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
CartPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartPageComponent, selectors: [["orders-cart-page"]], decls: 39, vars: 3, consts: [[1, "cart-page", "p-1"], [1, "grid"], [1, "item", "col-8"], [1, "pb-2"], ["label", "Continue shopping", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "cart-shipping"], ["class", "cart-item mb-5", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "oos", "sm:col-4", "md:col-4", "lg:col-4"], [1, "grid", "mt-2", "p-1", 2, "border", "1px solid var(--surface-200)"], [1, "row", "mt-4", "mb-0"], [1, "col-12"], [1, "row"], [1, "col-1", 2, "min-width", "50px"], [2, "display", "inline"], ["src", "assets/mastercard.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/visa.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/americanExpress.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/maestro.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/postepay.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/paypal.png", "alt", "Responsive image", 1, "img-fluid"], ["src", "assets/klarna.png", "alt", "Responsive image", 1, "img-fluid"], [1, "cart-item", "mb-5"], [1, "grid", "ui-fluid", 3, "id"], [1, "sm:col-3", "md:col-3", "lg:col-3", "cart-item-image"], [3, "src"], [1, "sm:col-6", "md:col-6", "lg:col-6", "cart-item-info"], [1, "cart-item-name"], [1, "cart-item-variant"], [1, "cart-item-price"], [1, "cart-item-remove"], ["icon", "pi pi-trash", 3, "onClick"], [1, "sm:col-3", "md:col-3", "lg:col-3", "cart-item-qty"], [1, "p-field"], ["inputId", "cartItem.id", "mode", "decimal", 1, "p-inputtext-sm", 3, "id", "showButtons", "min", "max", "ngModel", "ngModelChange", "onInput"], [1, "cart-item-subtotal", "pt-5"], [1, "cart-item-subtotal-value"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p-button", 4);
        i0.ɵɵlistener("onClick", function CartPageComponent_Template_p_button_onClick_4_listener() { return ctx.backToShop(); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "h4");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵtext(8, " Shipping times: 1 to 4 working days ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, CartPageComponent_div_9_Template, 22, 16, "div", 6);
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
        args: [{ selector: 'orders-cart-page', styles: [], template: "<div class=\"cart-page p-1\">\n  <div class=\"grid\">\n    <div class=\"item col-8\">\n      <div class=\"pb-2\">\n\n        <p-button label=\"Continue shopping\" icon=\"pi pi-arrow-left\" (onClick)=\"backToShop()\"></p-button>\n\n      </div>\n      <h4>My cart: {{items}} Item(s)</h4>\n      <div class=\"cart-shipping\">\n        Shipping times: 1 to 4 working days\n      </div>\n      <div class=\"cart-item mb-5\" *ngFor=\"let cartItem of productVariants; i as index; trackBy: trackByMethod\" >\n        <div class=\"grid ui-fluid\" [id]=\"cartItem.id\">\n          <div class=\"sm:col-3 md:col-3 lg:col-3 cart-item-image\">\n        <img [src]=\"this.cart.getProductByVariantId(cartItem.id).mainImage\" [attr.alt]=\"this.cart.getProductByVariantId(cartItem.id).name\">\n\n\n\n      <!--  { \"product\" : ObjectId(\"6231bd26143bd9b3832e44e4\")}  -> pluriball blue items\n\n      -->\n          </div>\n          <div class=\"sm:col-6 md:col-6 lg:col-6 cart-item-info\">\n            <div class=\"cart-item-name\">{{this.cart.getProductByVariantId(cartItem.id).name}}</div>\n            <div class=\"cart-item-variant\"> Size: {{cartItem.size}}</div>\n            <div class=\"cart-item-price\">{{this.cart.getProductByVariantId(cartItem.id).price | currency}}</div>\n            <div class=\"cart-item-remove\">\n              <p-button icon=\"pi pi-trash\" (onClick)=\"productVariants.splice(getProductVariantByIdAndDeleteVariant(cartItem), 1)\"></p-button>\n            </div>\n          </div>\n          <div class=\"sm:col-3 md:col-3 lg:col-3 cart-item-qty\">\n            <div  class=\"p-field\">\n              <p-inputNumber id=\"{{ 'object-' + index }}\" inputId=\"cartItem.id\" mode=\"decimal\" class=\"p-inputtext-sm\" [showButtons]=\"true\"\n                [min]=\"0\" [max] = \"cartItem.getMaxInventory()\"  [(ngModel)]=\"cartItem.selected\"\n                (onInput)=\"updateCartItemQuantity(cartItem)\">\n              </p-inputNumber>\n            </div>\n            <div class=\"cart-item-subtotal pt-5\">\n              Subtotal:\n              <span class=\"cart-item-subtotal-value\">{{this.cart.getProductByVariantId(cartItem.id).price * cartItem.selected | currency}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"oos sm:col-4 md:col-4 lg:col-4\">\n    <orders-order-summary></orders-order-summary>\n    <div class=\"grid mt-2 p-1\" style=\"border: 1px solid var(--surface-200);\">\n      <div class=\"row mt-4 mb-0\" > <div class=\"col-12\"><p>MODALITA DI PAGAMENTO DISPONIBILI</p></div></div>\n      \n      <div class=\"row\">\n        <div class=\"col-1\"  style=\"min-width: 50px;\">\n        <li style=\"display: inline;\"><img src=\"assets/mastercard.png\"  class=\"img-fluid\" alt=\"Responsive image\"></li>\n        </div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/visa.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/americanExpress.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/maestro.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/postepay.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/paypal.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        <div class=\"col-1\"  style=\"min-width: 50px;\"><li style=\"display: inline;\"><img src='assets/klarna.png'  class=\"img-fluid\" alt=\"Responsive image\"></li></div>\n        \n      \n    \n    </div>\n    </div>\n    </div>\n\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7SUNRdkMsK0JBQTBHLGNBQUEsY0FBQTtJQUd4RywwQkFBbUk7SUFPakksaUJBQU07SUFDTiwrQkFBdUQsY0FBQTtJQUN6QixZQUFxRDtJQUFBLGlCQUFNO0lBQ3ZGLCtCQUErQjtJQUFDLFlBQXVCO0lBQUEsaUJBQU07SUFDN0QsK0JBQTZCO0lBQUEsYUFBaUU7O0lBQUEsaUJBQU07SUFDcEcsZ0NBQThCLG9CQUFBO0lBQ0Msb09BQVcsOEJBQXVCLHlEQUErQyxFQUFFLENBQUMsQ0FBQyxJQUFDO0lBQUMsaUJBQVcsRUFBQSxFQUFBO0lBR25JLGdDQUFzRCxlQUFBLHlCQUFBO0lBR0EseVBBQStCLDROQUNwRSwwQ0FBZ0MsSUFEb0M7SUFFakYsaUJBQWdCLEVBQUE7SUFFbEIsZ0NBQXFDO0lBQ25DLDRCQUNBO0lBQUEsaUNBQXVDO0lBQUEsYUFBcUY7O0lBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQTs7Ozs7SUEzQjlHLGVBQWtCO0lBQWxCLG1DQUFrQjtJQUV4QyxlQUE4RDtJQUE5RCxtR0FBOEQ7SUFBQyw2RUFBOEQ7SUFTbEcsZUFBcUQ7SUFBckQsNEVBQXFEO0lBQ2pELGVBQXVC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QUFvQixtQ0FBQTs7dUZESTlELGlCQUFpQjtjQU43QixTQUFTOzJCQUNFLGtCQUFrQixVQUVwQixFQUNQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3JkZXJzLWNhcnQtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXG4gIHByb2R1Y3RWYXJpYW50czogUHJvZHVjdFZhcmlhbnRbXVxuICBpdGVtczpudW1iZXI7XG4gIHByb2R1Y3ROYW1lczogc3RyaW5nW10gPSBbXTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2FydCA6IENhcnQpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgXG4gXG4gICAgdGhpcy5wcm9kdWN0VmFyaWFudHMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcbiAgICB0aGlzLnByb2R1Y3RWYXJpYW50cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgY29uc29sZS5sb2cocC5nZXRKc29uKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jYXJ0LmdldHByb2R1Y3RzKCkuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0TmFtZXMucHVzaChwcm9kdWN0LmdldE5hbWUoKSk7XG4gICAgfSk7XG4gICAgdGhpcy5pdGVtcz0gdGhpcy5jYXJ0LmdldFRvdGFsTnVtYmVyT2ZJdGVtcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gIH1cblxuICBiYWNrVG9TaG9wKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZHVjdHMnXSk7XG4gIH1cblxuICB0cmFja0J5TWV0aG9kKGluZGV4Om51bWJlciwgcDpQcm9kdWN0VmFyaWFudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHAuZ2V0SWQoKTtcbn1cblxuICBnZXRQcm9kdWN0VmFyaWFudEJ5SWRBbmREZWxldGVWYXJpYW50KHAgOiBQcm9kdWN0VmFyaWFudCl7XG4gICAgbGV0IGluZGV4ID0gbnVsbDtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMucHJvZHVjdFZhcmlhbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgIFxuICAgICAgaWYodGhpcy5wcm9kdWN0VmFyaWFudHNbaV0uZ2V0SWQoKSA9PT0gcC5nZXRJZCgpKXtcbiAgICAgICAgaW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNhcnQuZGVsZXRlUHJvZHVjdFZhcmlhbnQocCk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuY2FydC5nZXRUb3RhbE51bWJlck9mSXRlbXMoKTtcbiAgICByZXR1cm4gaW5kZXg7XG5cbiAgfVxuXG5cblxuXG4gIHVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoY2FydEl0ZW0gOiBQcm9kdWN0VmFyaWFudCl7XG5cbiAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgbGV0IHZhcmlhbnQgOiBQcm9kdWN0VmFyaWFudCA9IHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKTtcbiAgICBsZXQgbWF4SXRlbXMgPSB2YXJpYW50LmdldE1heEludmVudG9yeSgpO1xuICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5zZXRBdHRyaWJ1dGUoXCJNQVhcIix0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuZ2V0SW52ZW50b3J5KCkgKyAgdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLmdldFNlbGVjdGVkKCkpO1xuICAgICBjb25zb2xlLmxvZyhcIm1heEl0ZW1zID0gXCIgKyBtYXhJdGVtcyArIFwiIHNlbGVjdGVkID0gXCIgKyBjYXJ0SXRlbS5nZXRTZWxlY3RlZCgpKTtcbiAgICBpZihtYXhJdGVtcyA8PSBjYXJ0SXRlbS5nZXRTZWxlY3RlZCgpKXtcbiAgICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5jbGFzc0xpc3QudG9nZ2xlKCdpbmNyZW1lbnRCdXR0b25DbGFzcycpO1xuICAgICAgKHRoaXMuZ2V0RWxlbWVudEJ5WHBhdGgoXCIoLy8qW0BpZD0nXCIgKyBjYXJ0SXRlbS5nZXRJZCgpICsgXCInXS8vYnV0dG9uWzFdKVsyXVwiKSBhcyBhbnkpLmRpc2FibGVkID0gdHJ1ZTtcbiAgIFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGVub3VnaCBpdGVtcyBpbiB0aGUgaW52ZW50b3J5XCIpO1xuICAgIH1lbHNle1xuICAgICAgKHRoaXMuZ2V0RWxlbWVudEJ5WHBhdGgoXCIoLy8qW0BpZD0nXCIgKyBjYXJ0SXRlbS5nZXRJZCgpICsgXCInXS8vYnV0dG9uWzFdKVsyXVwiKSBhcyBhbnkpLmNsYXNzTGlzdC50b2dnbGUoJ2luY3JlbWVudEJ1dHRvbkNsYXNzJyk7XG4gICAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIDogXCIgKyBjYXJ0SXRlbS5nZXRTZWxlY3RlZCgpKTtcbiAgICAvL3RoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKS5zZXRTZWxlY3RlZEFuZFVwZGF0ZUludmVudG9yeShjYXJ0SXRlbS5nZXRTZWxlY3RlZCgpKTtcbiAgICBjYXJ0SXRlbS5zZXRJbnZlbnRvcnkoIHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKS5nZXRJbnZlbnRvcnkoKSk7XG4gICAgY29uc29sZS5sb2coXCJuZXcgaW52ZW50b3J5IGJ5IGNhcnRJdGVtID0gXCIgKyBjYXJ0SXRlbS5nZXRJbnZlbnRvcnkoKSk7XG4gICAgY29uc29sZS5sb2coXCJuZXcgaW52ZW50b3J5IGJ5IGNhcnQgPSBcIiArIHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKS5nZXRJbnZlbnRvcnkoKSk7XG5cbiAgICBcbiAgICBjb25zb2xlLmxvZyggICk7XG4gIH1cblxuXG4gICAgZ2V0RWxlbWVudEJ5WHBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmV2YWx1YXRlKHBhdGgsIGRvY3VtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSwgbnVsbCkuc2luZ2xlTm9kZVZhbHVlO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FydC1wYWdlIHAtMVwiPlxuICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbC04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGItMlwiPlxuXG4gICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIkNvbnRpbnVlIHNob3BwaW5nXCIgaWNvbj1cInBpIHBpLWFycm93LWxlZnRcIiAob25DbGljayk9XCJiYWNrVG9TaG9wKClcIj48L3AtYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxoND5NeSBjYXJ0OiB7e2l0ZW1zfX0gSXRlbShzKTwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FydC1zaGlwcGluZ1wiPlxuICAgICAgICBTaGlwcGluZyB0aW1lczogMSB0byA0IHdvcmtpbmcgZGF5c1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtIG1iLTVcIiAqbmdGb3I9XCJsZXQgY2FydEl0ZW0gb2YgcHJvZHVjdFZhcmlhbnRzOyBpIGFzIGluZGV4OyB0cmFja0J5OiB0cmFja0J5TWV0aG9kXCIgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCB1aS1mbHVpZFwiIFtpZF09XCJjYXJ0SXRlbS5pZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbTpjb2wtMyBtZDpjb2wtMyBsZzpjb2wtMyBjYXJ0LWl0ZW0taW1hZ2VcIj5cbiAgICAgICAgPGltZyBbc3JjXT1cInRoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLm1haW5JbWFnZVwiIFthdHRyLmFsdF09XCJ0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5uYW1lXCI+XG5cblxuXG4gICAgICA8IS0tICB7IFwicHJvZHVjdFwiIDogT2JqZWN0SWQoXCI2MjMxYmQyNjE0M2JkOWIzODMyZTQ0ZTRcIil9ICAtPiBwbHVyaWJhbGwgYmx1ZSBpdGVtc1xuXG4gICAgICAtLT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic206Y29sLTYgbWQ6Y29sLTYgbGc6Y29sLTYgY2FydC1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tbmFtZVwiPnt7dGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkubmFtZX19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXZhcmlhbnRcIj4gU2l6ZToge3tjYXJ0SXRlbS5zaXplfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tcHJpY2VcIj57e3RoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLnByaWNlIHwgY3VycmVuY3l9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgPHAtYnV0dG9uIGljb249XCJwaSBwaS10cmFzaFwiIChvbkNsaWNrKT1cInByb2R1Y3RWYXJpYW50cy5zcGxpY2UoZ2V0UHJvZHVjdFZhcmlhbnRCeUlkQW5kRGVsZXRlVmFyaWFudChjYXJ0SXRlbSksIDEpXCI+PC9wLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbTpjb2wtMyBtZDpjb2wtMyBsZzpjb2wtMyBjYXJ0LWl0ZW0tcXR5XCI+XG4gICAgICAgICAgICA8ZGl2ICBjbGFzcz1cInAtZmllbGRcIj5cbiAgICAgICAgICAgICAgPHAtaW5wdXROdW1iZXIgaWQ9XCJ7eyAnb2JqZWN0LScgKyBpbmRleCB9fVwiIGlucHV0SWQ9XCJjYXJ0SXRlbS5pZFwiIG1vZGU9XCJkZWNpbWFsXCIgY2xhc3M9XCJwLWlucHV0dGV4dC1zbVwiIFtzaG93QnV0dG9uc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBbbWluXT1cIjBcIiBbbWF4XSA9IFwiY2FydEl0ZW0uZ2V0TWF4SW52ZW50b3J5KClcIiAgWyhuZ01vZGVsKV09XCJjYXJ0SXRlbS5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgKG9uSW5wdXQpPVwidXBkYXRlQ2FydEl0ZW1RdWFudGl0eShjYXJ0SXRlbSlcIj5cbiAgICAgICAgICAgICAgPC9wLWlucHV0TnVtYmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXN1YnRvdGFsIHB0LTVcIj5cbiAgICAgICAgICAgICAgU3VidG90YWw6XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FydC1pdGVtLXN1YnRvdGFsLXZhbHVlXCI+e3t0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5wcmljZSAqIGNhcnRJdGVtLnNlbGVjdGVkIHwgY3VycmVuY3l9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJvb3Mgc206Y29sLTQgbWQ6Y29sLTQgbGc6Y29sLTRcIj5cbiAgICA8b3JkZXJzLW9yZGVyLXN1bW1hcnk+PC9vcmRlcnMtb3JkZXItc3VtbWFyeT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBtdC0yIHAtMVwiIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS0yMDApO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC00IG1iLTBcIiA+IDxkaXYgY2xhc3M9XCJjb2wtMTJcIj48cD5NT0RBTElUQSBESSBQQUdBTUVOVE8gRElTUE9OSUJJTEk8L3A+PC9kaXY+PC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPlxuICAgICAgICA8bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9XCJhc3NldHMvbWFzdGVyY2FyZC5wbmdcIiAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy92aXNhLnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9hbWVyaWNhbkV4cHJlc3MucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL21hZXN0cm8ucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL3Bvc3RlcGF5LnBuZycgIGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvbGk+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiICBzdHlsZT1cIm1pbi13aWR0aDogNTBweDtcIj48bGkgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI+PGltZyBzcmM9J2Fzc2V0cy9wYXlwYWwucG5nJyAgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+PC9saT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgIHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiPjxsaSBzdHlsZT1cImRpc3BsYXk6IGlubGluZTtcIj48aW1nIHNyYz0nYXNzZXRzL2tsYXJuYS5wbmcnICBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIj48L2xpPjwvZGl2PlxuICAgICAgICBcbiAgICAgIFxuICAgIFxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=