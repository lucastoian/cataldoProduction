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
        args: [{ selector: 'eshop-frontend-product-item', styles: [], template: "<div class=\"product-item\" *ngIf=\"product\">\n    <div class=\"product-item-wrapper\">\n        <!-- <img [routerLink]=\"'/products/' + product.id \" [src]=\"product.image\" alt=\"\" class=\"image\"> -->\n        <img [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\" [src]=\"product.image\" class=\"image\">\n        <h4 class=\"name\">{{product.name}}</h4>\n        <h5 class=\"price\">{{product.price | currency}}</h5>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELCtDQUErQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQ0pyRCw4QkFBMEMsYUFBQTtJQUdsQyx5QkFBNkg7SUFDN0gsNkJBQWlCO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSztJQUN0Qyw2QkFBa0I7SUFBQSxZQUE0Qjs7SUFBQSxpQkFBSyxFQUFBLEVBQUE7OztJQUY5QyxlQUFtRjtJQUFuRix5S0FBbUYsK0NBQUE7SUFDdkUsZUFBZ0I7SUFBaEIseUNBQWdCO0lBQ2YsZUFBNEI7SUFBNUIsZ0VBQTRCOztBRFF0RCxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CLFlBQW9CLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTHpDLE1BQUMsR0FBRyxLQUFLLENBQUM7SUFLbUMsQ0FBQztJQUU5QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRXhCLENBQUM7SUFFTyxjQUFjO1FBRXBCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7WUFDL0MsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDZjtRQUNELHVCQUF1QjtJQUd6QixDQUFDOzt3RkF2QlUsb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNiakMsc0VBT007O1FBUHFCLGtDQUFhOzt1RkRhM0Isb0JBQW9CO2NBTmhDLFNBQVM7MkJBQ0UsNkJBQTZCLFVBRS9CLEVBQ1A7aUVBTVEsT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllcyAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vL3F1aSBjJ8OoIGlsIGNvbGxlZ2FtZW50byB0cmEgcHJvZHVjdHMgZSBvcmRlcnNcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdyA9IGZhbHNlO1xuICB1cmw7XG5cbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcmV0cmlldmVQYXJhbSgpO1xuICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBfcmV0cmlldmVQYXJhbSgpe1xuIFxuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XG5cbiAgICBpZiAodGhpcy51cmwudmFsdWVbMF0ucGF0aCA9PT0gJ3dvbWVuLXByb2R1Y3RzJykge1xuICAgICAgdGhpcy53ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy53KTtcbiAgICBcblxuICB9XG5cbiAgLy8gYWRkUHJvZHVjdFRvQ2FydCgpe1xuICAvLyAgIGNvbnN0IGNhcnRJdGVtOiBDYXJ0SXRlbSA9IHtcbiAgLy8gICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0LmlkLFxuICAvLyAgICAgcXVhbnRpdHk6IDFcbiAgLy8gICB9XG5cbiAgLy8gICB0aGlzLmNhcnRTZXJ2aWNlLnNldENhcnRJdGVtKGNhcnRJdGVtKTtcbiAgLy8gfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtXCIgKm5nSWY9XCJwcm9kdWN0XCI+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaXRlbS13cmFwcGVyXCI+XG4gICAgICAgIDwhLS0gPGltZyBbcm91dGVyTGlua109XCInL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkIFwiIFtzcmNdPVwicHJvZHVjdC5pbWFnZVwiIGFsdD1cIlwiIGNsYXNzPVwiaW1hZ2VcIj4gLS0+XG4gICAgICAgIDxpbWcgW3JvdXRlckxpbmtdPVwiIHcgPyBbJy93b21lbi1wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF0gOiBbJy9wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF1cIiBbc3JjXT1cInByb2R1Y3QuaW1hZ2VcIiBjbGFzcz1cImltYWdlXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cIm5hbWVcIj57e3Byb2R1Y3QubmFtZX19PC9oND5cbiAgICAgICAgPGg1IGNsYXNzPVwicHJpY2VcIj57e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeX19PC9oNT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19