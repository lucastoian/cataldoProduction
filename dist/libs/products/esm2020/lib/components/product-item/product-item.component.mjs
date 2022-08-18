/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//qui c'è il collegamento tra products e orders
import { Product123 } from '../../models/product123';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
const _c0 = function (a0) { return [a0]; };
function ProductItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵelement(2, "img", 3);
    i0.ɵɵelementStart(3, "h4", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h5", 5);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "currency");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", ctx_r0.w ? i0.ɵɵpureFunction1(6, _c0, "/women-products/" + ctx_r0.product.id) : i0.ɵɵpureFunction1(8, _c0, "/products/" + ctx_r0.product.id))("src", ctx_r0.product.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 4, ctx_r0.product.price));
} }
export class ProductItemComponent {
    constructor(route) {
        this.route = route;
        this.w = false;
    }
    ngOnInit() {
        this._retrieveParam();
    }
    _retrieveParam() {
        this.url = this.route.url;
        if (this.url.value[0].path === 'women-products') {
            this.w = true;
        }
        // console.log(this.w);
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
ProductItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductItemComponent, selectors: [["eshop-frontend-product-item"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [["class", "product-item", 4, "ngIf"], [1, "product-item"], [1, "product-item-wrapper"], [1, "image", 3, "routerLink", "src"], [1, "name"], [1, "price"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ProductItemComponent_div_0_Template, 8, 10, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i2.NgIf, i1.RouterLink], pipes: [i2.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductItemComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-item', styles: [], template: "<div class=\"product-item\" *ngIf=\"product\">\r\n    <div class=\"product-item-wrapper\">\r\n        <!-- <img [routerLink]=\"'/products/' + product.id \" [src]=\"product.image\" alt=\"\" class=\"image\"> -->\r\n        <img [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\" [src]=\"product.image\" class=\"image\">\r\n        <h4 class=\"name\">{{product.name}}</h4>\r\n        <h5 class=\"price\">{{product.price | currency}}</h5>\r\n    </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELCtDQUErQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQ0pyRCw4QkFBMEMsYUFBQTtJQUdsQyx5QkFBNkg7SUFDN0gsNkJBQWlCO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSztJQUN0Qyw2QkFBa0I7SUFBQSxZQUE0Qjs7SUFBQSxpQkFBSyxFQUFBLEVBQUE7OztJQUY5QyxlQUFtRjtJQUFuRix5S0FBbUYsK0NBQUE7SUFDdkUsZUFBZ0I7SUFBaEIseUNBQWdCO0lBQ2YsZUFBNEI7SUFBNUIsZ0VBQTRCOztBRFF0RCxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CLFlBQW9CLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTHpDLE1BQUMsR0FBRyxLQUFLLENBQUM7SUFLbUMsQ0FBQztJQUU5QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRXhCLENBQUM7SUFFTyxjQUFjO1FBRXBCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7WUFDL0MsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDZjtRQUNELHVCQUF1QjtJQUd6QixDQUFDOzt3RkF2QlUsb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNiakMsc0VBT007O1FBUHFCLGtDQUFhOzt1RkRhM0Isb0JBQW9CO2NBTmhDLFNBQVM7MkJBQ0UsNkJBQTZCLFVBRS9CLEVBQ1A7aUVBTVEsT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllcyAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vL3F1aSBjJ8OoIGlsIGNvbGxlZ2FtZW50byB0cmEgcHJvZHVjdHMgZSBvcmRlcnNcclxuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHcgPSBmYWxzZTtcclxuICB1cmw7XHJcblxyXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZXRyaWV2ZVBhcmFtKCk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JldHJpZXZlUGFyYW0oKXtcclxuIFxyXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuXHJcbiAgICBpZiAodGhpcy51cmwudmFsdWVbMF0ucGF0aCA9PT0gJ3dvbWVuLXByb2R1Y3RzJykge1xyXG4gICAgICB0aGlzLncgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy53KTtcclxuICAgIFxyXG5cclxuICB9XHJcblxyXG4gIC8vIGFkZFByb2R1Y3RUb0NhcnQoKXtcclxuICAvLyAgIGNvbnN0IGNhcnRJdGVtOiBDYXJ0SXRlbSA9IHtcclxuICAvLyAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3QuaWQsXHJcbiAgLy8gICAgIHF1YW50aXR5OiAxXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgdGhpcy5jYXJ0U2VydmljZS5zZXRDYXJ0SXRlbShjYXJ0SXRlbSk7XHJcbiAgLy8gfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtXCIgKm5nSWY9XCJwcm9kdWN0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtLXdyYXBwZXJcIj5cclxuICAgICAgICA8IS0tIDxpbWcgW3JvdXRlckxpbmtdPVwiJy9wcm9kdWN0cy8nICsgcHJvZHVjdC5pZCBcIiBbc3JjXT1cInByb2R1Y3QuaW1hZ2VcIiBhbHQ9XCJcIiBjbGFzcz1cImltYWdlXCI+IC0tPlxyXG4gICAgICAgIDxpbWcgW3JvdXRlckxpbmtdPVwiIHcgPyBbJy93b21lbi1wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF0gOiBbJy9wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF1cIiBbc3JjXT1cInByb2R1Y3QuaW1hZ2VcIiBjbGFzcz1cImltYWdlXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwibmFtZVwiPnt7cHJvZHVjdC5uYW1lfX08L2g0PlxyXG4gICAgICAgIDxoNSBjbGFzcz1cInByaWNlXCI+e3twcm9kdWN0LnByaWNlIHwgY3VycmVuY3l9fTwvaDU+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==