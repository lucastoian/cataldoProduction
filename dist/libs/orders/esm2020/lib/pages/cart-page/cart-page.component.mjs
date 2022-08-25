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
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    i0.ɵɵelement(3, "img", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 12)(5, "div", 13);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 15);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 16)(13, "p-button", 17);
    i0.ɵɵlistener("onClick", function CartPageComponent_div_9_Template_p_button_onClick_13_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.productVariants.splice(ctx_r3.getProductVariantByIdAndDeleteVariant(cartItem_r1), 1); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 18)(15, "div", 19)(16, "p-inputNumber", 20);
    i0.ɵɵlistener("ngModelChange", function CartPageComponent_div_9_Template_p_inputNumber_ngModelChange_16_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; return cartItem_r1.selected = $event; })("onInput", function CartPageComponent_div_9_Template_p_inputNumber_onInput_16_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const cartItem_r1 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.updateCartItemQuantity(cartItem_r1); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 21);
    i0.ɵɵtext(18, " Subtotal: ");
    i0.ɵɵelementStart(19, "span", 22);
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
CartPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartPageComponent, selectors: [["orders-cart-page"]], decls: 12, vars: 3, consts: [[1, "cart-page", "p-1"], [1, "grid"], [1, "item", "col-8"], [1, "pb-2"], ["label", "Continue shopping", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "cart-shipping"], ["class", "cart-item mb-5", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "oos", "sm:col-4", "md:col-4", "lg:col-4"], [1, "cart-item", "mb-5"], [1, "grid", "ui-fluid", 3, "id"], [1, "sm:col-3", "md:col-3", "lg:col-3", "cart-item-image"], [3, "src"], [1, "sm:col-6", "md:col-6", "lg:col-6", "cart-item-info"], [1, "cart-item-name"], [1, "cart-item-variant"], [1, "cart-item-price"], [1, "cart-item-remove"], ["icon", "pi pi-trash", 3, "onClick"], [1, "sm:col-3", "md:col-3", "lg:col-3", "cart-item-qty"], [1, "p-field"], ["inputId", "cartItem.id", "mode", "decimal", 1, "p-inputtext-sm", 3, "id", "showButtons", "min", "max", "ngModel", "ngModelChange", "onInput"], [1, "cart-item-subtotal", "pt-5"], [1, "cart-item-subtotal-value"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1("My cart: ", ctx.items, " Item(s)");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.productVariants)("ngForTrackBy", ctx.trackByMethod);
    } }, directives: [i3.Button, i4.NgForOf, i5.InputNumber, i6.NgControlStatus, i6.NgModel, i7.OrderSummaryComponent], pipes: [i4.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartPageComponent, [{
        type: Component,
        args: [{ selector: 'orders-cart-page', styles: [], template: "<div class=\"cart-page p-1\">\r\n  <div class=\"grid\">\r\n    <div class=\"item col-8\">\r\n      <div class=\"pb-2\">\r\n\r\n        <p-button label=\"Continue shopping\" icon=\"pi pi-arrow-left\" (onClick)=\"backToShop()\"></p-button>\r\n\r\n      </div>\r\n      <h4>My cart: {{items}} Item(s)</h4>\r\n      <div class=\"cart-shipping\">\r\n        Shipping times: 1 to 4 working days\r\n      </div>\r\n      <div class=\"cart-item mb-5\" *ngFor=\"let cartItem of productVariants; i as index; trackBy: trackByMethod\" >\r\n        <div class=\"grid ui-fluid\" [id]=\"cartItem.id\">\r\n          <div class=\"sm:col-3 md:col-3 lg:col-3 cart-item-image\">\r\n        <img [src]=\"this.cart.getProductByVariantId(cartItem.id).mainImage\" [attr.alt]=\"this.cart.getProductByVariantId(cartItem.id).name\">\r\n\r\n\r\n\r\n      <!--  { \"product\" : ObjectId(\"6231bd26143bd9b3832e44e4\")}  -> pluriball blue items\r\n\r\n      -->\r\n          </div>\r\n          <div class=\"sm:col-6 md:col-6 lg:col-6 cart-item-info\">\r\n            <div class=\"cart-item-name\">{{this.cart.getProductByVariantId(cartItem.id).name}}</div>\r\n            <div class=\"cart-item-variant\"> Size: {{cartItem.size}}</div>\r\n            <div class=\"cart-item-price\">{{this.cart.getProductByVariantId(cartItem.id).price | currency}}</div>\r\n            <div class=\"cart-item-remove\">\r\n              <p-button icon=\"pi pi-trash\" (onClick)=\"productVariants.splice(getProductVariantByIdAndDeleteVariant(cartItem), 1)\"></p-button>\r\n            </div>\r\n          </div>\r\n          <div class=\"sm:col-3 md:col-3 lg:col-3 cart-item-qty\">\r\n            <div  class=\"p-field\">\r\n              <p-inputNumber id=\"{{ 'object-' + index }}\" inputId=\"cartItem.id\" mode=\"decimal\" class=\"p-inputtext-sm\" [showButtons]=\"true\"\r\n                [min]=\"0\" [max] = \"cartItem.getMaxInventory()\"  [(ngModel)]=\"cartItem.selected\"\r\n                (onInput)=\"updateCartItemQuantity(cartItem)\">\r\n              </p-inputNumber>\r\n            </div>\r\n            <div class=\"cart-item-subtotal pt-5\">\r\n              Subtotal:\r\n              <span class=\"cart-item-subtotal-value\">{{this.cart.getProductByVariantId(cartItem.id).price * cartItem.selected | currency}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"oos sm:col-4 md:col-4 lg:col-4\">\r\n    <orders-order-summary></orders-order-summary>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BhZ2VzL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7SUNRdkMsOEJBQTBHLGFBQUEsY0FBQTtJQUd4RywwQkFBbUk7SUFPakksaUJBQU07SUFDTiwrQkFBdUQsY0FBQTtJQUN6QixZQUFxRDtJQUFBLGlCQUFNO0lBQ3ZGLCtCQUErQjtJQUFDLFlBQXVCO0lBQUEsaUJBQU07SUFDN0QsK0JBQTZCO0lBQUEsYUFBaUU7O0lBQUEsaUJBQU07SUFDcEcsZ0NBQThCLG9CQUFBO0lBQ0Msb09BQVcsOEJBQXVCLHlEQUErQyxFQUFFLENBQUMsQ0FBQyxJQUFDO0lBQUMsaUJBQVcsRUFBQSxFQUFBO0lBR25JLGdDQUFzRCxlQUFBLHlCQUFBO0lBR0EseVBBQStCLDROQUNwRSwwQ0FBZ0MsSUFEb0M7SUFFakYsaUJBQWdCLEVBQUE7SUFFbEIsZ0NBQXFDO0lBQ25DLDRCQUNBO0lBQUEsaUNBQXVDO0lBQUEsYUFBcUY7O0lBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQTs7Ozs7SUEzQjlHLGVBQWtCO0lBQWxCLG1DQUFrQjtJQUV4QyxlQUE4RDtJQUE5RCxtR0FBOEQ7SUFBQyw2RUFBOEQ7SUFTbEcsZUFBcUQ7SUFBckQsNEVBQXFEO0lBQ2pELGVBQXVC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QUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUdwRyxPQUFPLENBQUMsR0FBRyxFQUFJLENBQUM7SUFDbEIsQ0FBQztJQUdDLGlCQUFpQixDQUFDLElBQVk7UUFDOUIsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFDNUcsQ0FBQzs7a0ZBckZVLGlCQUFpQjtvRUFBakIsaUJBQWlCO1FDaEI5Qiw4QkFBMkIsYUFBQSxhQUFBLGFBQUEsa0JBQUE7UUFLeUMsb0dBQVcsZ0JBQVksSUFBQztRQUFDLGlCQUFXLEVBQUE7UUFHbEcsMEJBQUk7UUFBQSxZQUEwQjtRQUFBLGlCQUFLO1FBQ25DLDhCQUEyQjtRQUN6QixxREFDRjtRQUFBLGlCQUFNO1FBQ04sb0VBZ0NNO1FBQ1IsaUJBQU07UUFDTiwrQkFBNEM7UUFDNUMsd0NBQTZDO1FBQzdDLGlCQUFNLEVBQUEsRUFBQTs7UUF4Q0EsZUFBMEI7UUFBMUIseURBQTBCO1FBSW1CLGVBQW9CO1FBQXBCLDZDQUFvQixtQ0FBQTs7dUZESTlELGlCQUFpQjtjQU43QixTQUFTOzJCQUNFLGtCQUFrQixVQUVwQixFQUNQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29yZGVycy1jYXJ0LXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcnRQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHJcbiAgcHJvZHVjdFZhcmlhbnRzOiBQcm9kdWN0VmFyaWFudFtdXHJcbiAgaXRlbXM6bnVtYmVyO1xyXG4gIHByb2R1Y3ROYW1lczogc3RyaW5nW10gPSBbXTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjYXJ0IDogQ2FydCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIFxyXG4gXHJcbiAgICB0aGlzLnByb2R1Y3RWYXJpYW50cyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xyXG4gICAgdGhpcy5wcm9kdWN0VmFyaWFudHMuZm9yRWFjaChwID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocC5nZXRKc29uKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jYXJ0LmdldHByb2R1Y3RzKCkuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lcy5wdXNoKHByb2R1Y3QuZ2V0TmFtZSgpKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pdGVtcz0gdGhpcy5jYXJ0LmdldFRvdGFsTnVtYmVyT2ZJdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgfVxyXG5cclxuICBiYWNrVG9TaG9wKCl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9kdWN0cyddKTtcclxuICB9XHJcblxyXG4gIHRyYWNrQnlNZXRob2QoaW5kZXg6bnVtYmVyLCBwOlByb2R1Y3RWYXJpYW50KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBwLmdldElkKCk7XHJcbn1cclxuXHJcbiAgZ2V0UHJvZHVjdFZhcmlhbnRCeUlkQW5kRGVsZXRlVmFyaWFudChwIDogUHJvZHVjdFZhcmlhbnQpe1xyXG4gICAgbGV0IGluZGV4ID0gbnVsbDtcclxuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5wcm9kdWN0VmFyaWFudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5wcm9kdWN0VmFyaWFudHNbaV0uZ2V0SWQoKSA9PT0gcC5nZXRJZCgpKXtcclxuICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2FydC5kZWxldGVQcm9kdWN0VmFyaWFudChwKTtcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmNhcnQuZ2V0VG90YWxOdW1iZXJPZkl0ZW1zKCk7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgdXBkYXRlQ2FydEl0ZW1RdWFudGl0eShjYXJ0SXRlbSA6IFByb2R1Y3RWYXJpYW50KXtcclxuXHJcbiAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBsZXQgdmFyaWFudCA6IFByb2R1Y3RWYXJpYW50ID0gdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpO1xyXG4gICAgbGV0IG1heEl0ZW1zID0gdmFyaWFudC5nZXRNYXhJbnZlbnRvcnkoKTtcclxuICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5zZXRBdHRyaWJ1dGUoXCJNQVhcIix0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuZ2V0SW52ZW50b3J5KCkgKyAgdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKGNhcnRJdGVtLmdldElkKCkpLmdldFNlbGVjdGVkKCkpO1xyXG4gICAgIGNvbnNvbGUubG9nKFwibWF4SXRlbXMgPSBcIiArIG1heEl0ZW1zICsgXCIgc2VsZWN0ZWQgPSBcIiArIGNhcnRJdGVtLmdldFNlbGVjdGVkKCkpO1xyXG4gICAgaWYobWF4SXRlbXMgPD0gY2FydEl0ZW0uZ2V0U2VsZWN0ZWQoKSl7XHJcbiAgICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5jbGFzc0xpc3QudG9nZ2xlKCdpbmNyZW1lbnRCdXR0b25DbGFzcycpO1xyXG4gICAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICBcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGVub3VnaCBpdGVtcyBpbiB0aGUgaW52ZW50b3J5XCIpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICh0aGlzLmdldEVsZW1lbnRCeVhwYXRoKFwiKC8vKltAaWQ9J1wiICsgY2FydEl0ZW0uZ2V0SWQoKSArIFwiJ10vL2J1dHRvblsxXSlbMl1cIikgYXMgYW55KS5jbGFzc0xpc3QudG9nZ2xlKCdpbmNyZW1lbnRCdXR0b25DbGFzcycpO1xyXG4gICAgICAodGhpcy5nZXRFbGVtZW50QnlYcGF0aChcIigvLypbQGlkPSdcIiArIGNhcnRJdGVtLmdldElkKCkgKyBcIiddLy9idXR0b25bMV0pWzJdXCIpIGFzIGFueSkuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgOiBcIiArIGNhcnRJdGVtLmdldFNlbGVjdGVkKCkpO1xyXG4gICAgLy90aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuc2V0U2VsZWN0ZWRBbmRVcGRhdGVJbnZlbnRvcnkoY2FydEl0ZW0uZ2V0U2VsZWN0ZWQoKSk7XHJcbiAgICBjYXJ0SXRlbS5zZXRJbnZlbnRvcnkoIHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChjYXJ0SXRlbS5nZXRJZCgpKS5nZXRJbnZlbnRvcnkoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5ldyBpbnZlbnRvcnkgYnkgY2FydEl0ZW0gPSBcIiArIGNhcnRJdGVtLmdldEludmVudG9yeSgpKTtcclxuICAgIGNvbnNvbGUubG9nKFwibmV3IGludmVudG9yeSBieSBjYXJ0ID0gXCIgKyB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoY2FydEl0ZW0uZ2V0SWQoKSkuZ2V0SW52ZW50b3J5KCkpO1xyXG5cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coICApO1xyXG4gIH1cclxuXHJcblxyXG4gICAgZ2V0RWxlbWVudEJ5WHBhdGgocGF0aDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZXZhbHVhdGUocGF0aCwgZG9jdW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LkZJUlNUX09SREVSRURfTk9ERV9UWVBFLCBudWxsKS5zaW5nbGVOb2RlVmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjYXJ0LXBhZ2UgcC0xXCI+XHJcbiAgPGRpdiBjbGFzcz1cImdyaWRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbC04XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwYi0yXCI+XHJcblxyXG4gICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIkNvbnRpbnVlIHNob3BwaW5nXCIgaWNvbj1cInBpIHBpLWFycm93LWxlZnRcIiAob25DbGljayk9XCJiYWNrVG9TaG9wKClcIj48L3AtYnV0dG9uPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoND5NeSBjYXJ0OiB7e2l0ZW1zfX0gSXRlbShzKTwvaDQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LXNoaXBwaW5nXCI+XHJcbiAgICAgICAgU2hpcHBpbmcgdGltZXM6IDEgdG8gNCB3b3JraW5nIGRheXNcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0gbWItNVwiICpuZ0Zvcj1cImxldCBjYXJ0SXRlbSBvZiBwcm9kdWN0VmFyaWFudHM7IGkgYXMgaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlNZXRob2RcIiA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgdWktZmx1aWRcIiBbaWRdPVwiY2FydEl0ZW0uaWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbTpjb2wtMyBtZDpjb2wtMyBsZzpjb2wtMyBjYXJ0LWl0ZW0taW1hZ2VcIj5cclxuICAgICAgICA8aW1nIFtzcmNdPVwidGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkubWFpbkltYWdlXCIgW2F0dHIuYWx0XT1cInRoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLm5hbWVcIj5cclxuXHJcblxyXG5cclxuICAgICAgPCEtLSAgeyBcInByb2R1Y3RcIiA6IE9iamVjdElkKFwiNjIzMWJkMjYxNDNiZDliMzgzMmU0NGU0XCIpfSAgLT4gcGx1cmliYWxsIGJsdWUgaXRlbXNcclxuXHJcbiAgICAgIC0tPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic206Y29sLTYgbWQ6Y29sLTYgbGc6Y29sLTYgY2FydC1pdGVtLWluZm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS1uYW1lXCI+e3t0aGlzLmNhcnQuZ2V0UHJvZHVjdEJ5VmFyaWFudElkKGNhcnRJdGVtLmlkKS5uYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS12YXJpYW50XCI+IFNpemU6IHt7Y2FydEl0ZW0uc2l6ZX19PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tcHJpY2VcIj57e3RoaXMuY2FydC5nZXRQcm9kdWN0QnlWYXJpYW50SWQoY2FydEl0ZW0uaWQpLnByaWNlIHwgY3VycmVuY3l9fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXJlbW92ZVwiPlxyXG4gICAgICAgICAgICAgIDxwLWJ1dHRvbiBpY29uPVwicGkgcGktdHJhc2hcIiAob25DbGljayk9XCJwcm9kdWN0VmFyaWFudHMuc3BsaWNlKGdldFByb2R1Y3RWYXJpYW50QnlJZEFuZERlbGV0ZVZhcmlhbnQoY2FydEl0ZW0pLCAxKVwiPjwvcC1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic206Y29sLTMgbWQ6Y29sLTMgbGc6Y29sLTMgY2FydC1pdGVtLXF0eVwiPlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzcz1cInAtZmllbGRcIj5cclxuICAgICAgICAgICAgICA8cC1pbnB1dE51bWJlciBpZD1cInt7ICdvYmplY3QtJyArIGluZGV4IH19XCIgaW5wdXRJZD1cImNhcnRJdGVtLmlkXCIgbW9kZT1cImRlY2ltYWxcIiBjbGFzcz1cInAtaW5wdXR0ZXh0LXNtXCIgW3Nob3dCdXR0b25zXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgW21pbl09XCIwXCIgW21heF0gPSBcImNhcnRJdGVtLmdldE1heEludmVudG9yeSgpXCIgIFsobmdNb2RlbCldPVwiY2FydEl0ZW0uc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgKG9uSW5wdXQpPVwidXBkYXRlQ2FydEl0ZW1RdWFudGl0eShjYXJ0SXRlbSlcIj5cclxuICAgICAgICAgICAgICA8L3AtaW5wdXROdW1iZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXN1YnRvdGFsIHB0LTVcIj5cclxuICAgICAgICAgICAgICBTdWJ0b3RhbDpcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcnQtaXRlbS1zdWJ0b3RhbC12YWx1ZVwiPnt7dGhpcy5jYXJ0LmdldFByb2R1Y3RCeVZhcmlhbnRJZChjYXJ0SXRlbS5pZCkucHJpY2UgKiBjYXJ0SXRlbS5zZWxlY3RlZCB8IGN1cnJlbmN5fX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwib29zIHNtOmNvbC00IG1kOmNvbC00IGxnOmNvbC00XCI+XHJcbiAgICA8b3JkZXJzLW9yZGVyLXN1bW1hcnk+PC9vcmRlcnMtb3JkZXItc3VtbWFyeT5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==