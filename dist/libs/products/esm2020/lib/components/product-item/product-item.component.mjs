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
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    i0.ɵɵelement(5, "img", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 7)(7, "div", 8)(8, "p", 9);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 10)(11, "div", 11)(12, "h5", 12);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "currency");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", ctx_r0.w ? i0.ɵɵpureFunction1(7, _c0, "/women-products/" + ctx_r0.product.id) : i0.ɵɵpureFunction1(9, _c0, "/products/" + ctx_r0.product.id));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("routerLink", ctx_r0.w ? i0.ɵɵpureFunction1(11, _c0, "/women-products/" + ctx_r0.product.id) : i0.ɵɵpureFunction1(13, _c0, "/products/" + ctx_r0.product.id))("src", ctx_r0.product.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 5, ctx_r0.product.price));
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
ProductItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductItemComponent, selectors: [["eshop-frontend-product-item"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [["class", "product-item", 3, "routerLink", 4, "ngIf"], [1, "product-item", 3, "routerLink"], [1, "product-item-wrapper"], [1, "grid"], [1, "row"], [1, "col", "d-flex", "justify-content-center"], [1, "image", 3, "routerLink", "src"], [1, "row", 2, "width", "-webkit-fill-available", "min-height", "100px", "max-height", "100px"], [1, "col-12", "d-flex", "justify-content-center", 2, "text-align", "center"], [1, "name", 2, "text-align", "center"], [1, "row", 2, "width", "-webkit-fill-available", "width", "-webkit-fill-available", "width", "fill-available"], [1, "col-12", "d-flex", "justify-content-center"], [1, "price", 2, "width", "100%", "text-align", "center"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ProductItemComponent_div_0_Template, 15, 15, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i2.NgIf, i1.RouterLink], pipes: [i2.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductItemComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-item', styles: [], template: "<div class=\"product-item\" *ngIf=\"product\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n    <div class=\"product-item-wrapper\">\n        <!-- <img [routerLink]=\"'/products/' + product.id \" [src]=\"product.image\" alt=\"\" class=\"image\"> -->\n        <div class=\"grid\">\n            <div class=\"row\">\n                <div class=\"col d-flex justify-content-center\">\n                <img [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\" [src]=\"product.image\" class=\"image\">\n                </div>\n            </div>\n            <div class=\"row\" style=\"width: -webkit-fill-available; min-height: 100px; max-height: 100px;\">\n                <div class=\"col-12 d-flex justify-content-center\" style=\"text-align: center;\">\n                    <p class=\"name\" style=\"text-align: center;\">{{product.name}}</p>\n                </div>\n            </div>\n            <div class=\"row\" style=\"width: -webkit-fill-available;    width: -webkit-fill-available; width: fill-available;\">\n                <div class=\"col-12 d-flex justify-content-center\">\n                        <h5 class=\"price\" style=\"width: 100%; text-align: center;\">{{product.price | currency}}</h5>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELCtDQUErQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQ0pyRCw4QkFBOEgsYUFBQSxhQUFBLGFBQUEsYUFBQTtJQU05Ryx5QkFBNkg7SUFDN0gsaUJBQU0sRUFBQTtJQUVWLDhCQUE4RixhQUFBLFdBQUE7SUFFMUMsWUFBZ0I7SUFBQSxpQkFBSSxFQUFBLEVBQUE7SUFHeEUsZ0NBQWlILGVBQUEsY0FBQTtJQUUxQyxhQUE0Qjs7SUFBQSxpQkFBSyxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7OztJQWhCMUUseUtBQW1GO0lBTXhHLGVBQW1GO0lBQW5GLDJLQUFtRiwrQ0FBQTtJQUt4QyxlQUFnQjtJQUFoQix5Q0FBZ0I7SUFLRyxlQUE0QjtJQUE1QixpRUFBNEI7O0FESC9HLE1BQU0sT0FBTyxvQkFBb0I7SUFNL0IsWUFBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMekMsTUFBQyxHQUFHLEtBQUssQ0FBQztJQUttQyxDQUFDO0lBRTlDLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFeEIsQ0FBQztJQUVPLGNBQWM7UUFFcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtZQUMvQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNmO1FBQ0QsdUJBQXVCO0lBR3pCLENBQUM7O3dGQXZCVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQ2JqQyx1RUFzQk07O1FBdEJxQixrQ0FBYTs7dUZEYTNCLG9CQUFvQjtjQU5oQyxTQUFTOzJCQUNFLDZCQUE2QixVQUUvQixFQUNQO2lFQU1RLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXMgKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy9xdWkgYyfDqCBpbCBjb2xsZWdhbWVudG8gdHJhIHByb2R1Y3RzIGUgb3JkZXJzXG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHcgPSBmYWxzZTtcbiAgdXJsO1xuXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JldHJpZXZlUGFyYW0oKTtcbiAgICBcbiAgfVxuXG4gIHByaXZhdGUgX3JldHJpZXZlUGFyYW0oKXtcbiBcbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xuXG4gICAgaWYgKHRoaXMudXJsLnZhbHVlWzBdLnBhdGggPT09ICd3b21lbi1wcm9kdWN0cycpIHtcbiAgICAgIHRoaXMudyA9IHRydWU7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudyk7XG4gICAgXG5cbiAgfVxuXG4gIC8vIGFkZFByb2R1Y3RUb0NhcnQoKXtcbiAgLy8gICBjb25zdCBjYXJ0SXRlbTogQ2FydEl0ZW0gPSB7XG4gIC8vICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvZHVjdC5pZCxcbiAgLy8gICAgIHF1YW50aXR5OiAxXG4gIC8vICAgfVxuXG4gIC8vICAgdGhpcy5jYXJ0U2VydmljZS5zZXRDYXJ0SXRlbShjYXJ0SXRlbSk7XG4gIC8vIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInByb2R1Y3QtaXRlbVwiICpuZ0lmPVwicHJvZHVjdFwiIFtyb3V0ZXJMaW5rXT1cIiB3ID8gWycvd29tZW4tcHJvZHVjdHMvJyArIHByb2R1Y3QuaWRdIDogWycvcHJvZHVjdHMvJyArIHByb2R1Y3QuaWRdXCI+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaXRlbS13cmFwcGVyXCI+XG4gICAgICAgIDwhLS0gPGltZyBbcm91dGVyTGlua109XCInL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkIFwiIFtzcmNdPVwicHJvZHVjdC5pbWFnZVwiIGFsdD1cIlwiIGNsYXNzPVwiaW1hZ2VcIj4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgW3JvdXRlckxpbmtdPVwiIHcgPyBbJy93b21lbi1wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF0gOiBbJy9wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF1cIiBbc3JjXT1cInByb2R1Y3QuaW1hZ2VcIiBjbGFzcz1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIndpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyBtaW4taGVpZ2h0OiAxMDBweDsgbWF4LWhlaWdodDogMTAwcHg7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj57e3Byb2R1Y3QubmFtZX19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJ3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IHdpZHRoOiBmaWxsLWF2YWlsYWJsZTtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJwcmljZVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjtcIj57e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeX19PC9oNT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=