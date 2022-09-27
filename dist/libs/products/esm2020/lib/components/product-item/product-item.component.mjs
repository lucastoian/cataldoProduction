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
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("routerLink", ctx_r0.w ? i0.ɵɵpureFunction1(6, _c0, "/women-products/" + ctx_r0.product.id) : i0.ɵɵpureFunction1(8, _c0, "/products/" + ctx_r0.product.id))("src", ctx_r0.product.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 4, ctx_r0.product.price));
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
ProductItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductItemComponent, selectors: [["eshop-frontend-product-item"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [["class", "product-item", 4, "ngIf"], [1, "product-item"], [1, "product-item-wrapper"], [1, "grid"], [1, "row"], [1, "col", "d-flex", "justify-content-center"], [1, "image", 3, "routerLink", "src"], [1, "row", 2, "width", "-webkit-fill-available", "min-height", "100px", "max-height", "100px"], [1, "col-12", "d-flex", "justify-content-center", 2, "text-align", "center"], [1, "name", 2, "text-align", "center"], [1, "row", 2, "width", "-webkit-fill-available", "width", "-webkit-fill-available", "width", "fill-available"], [1, "col-12", "d-flex", "justify-content-center"], [1, "price", 2, "width", "100%", "text-align", "center"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ProductItemComponent_div_0_Template, 15, 10, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i2.NgIf, i1.RouterLink], pipes: [i2.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductItemComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-item', styles: [], template: "<div class=\"product-item\" *ngIf=\"product\">\n    <div class=\"product-item-wrapper\">\n        <!-- <img [routerLink]=\"'/products/' + product.id \" [src]=\"product.image\" alt=\"\" class=\"image\"> -->\n        <div class=\"grid\">\n            <div class=\"row\">\n                <div class=\"col d-flex justify-content-center\">\n                <img [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\" [src]=\"product.image\" class=\"image\">\n                </div>\n            </div>\n            <div class=\"row\" style=\"width: -webkit-fill-available; min-height: 100px; max-height: 100px;\">\n                <div class=\"col-12 d-flex justify-content-center\" style=\"text-align: center;\">\n                    <p class=\"name\" style=\"text-align: center;\">{{product.name}}</p>\n                </div>\n            </div>\n            <div class=\"row\" style=\"width: -webkit-fill-available;    width: -webkit-fill-available; width: fill-available;\">\n                <div class=\"col-12 d-flex justify-content-center\">\n                        <h5 class=\"price\" style=\"width: 100%; text-align: center;\">{{product.price | currency}}</h5>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELCtDQUErQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQ0pyRCw4QkFBMEMsYUFBQSxhQUFBLGFBQUEsYUFBQTtJQU0xQix5QkFBNkg7SUFDN0gsaUJBQU0sRUFBQTtJQUVWLDhCQUE4RixhQUFBLFdBQUE7SUFFMUMsWUFBZ0I7SUFBQSxpQkFBSSxFQUFBLEVBQUE7SUFHeEUsZ0NBQWlILGVBQUEsY0FBQTtJQUUxQyxhQUE0Qjs7SUFBQSxpQkFBSyxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7OztJQVYvRixlQUFtRjtJQUFuRix5S0FBbUYsK0NBQUE7SUFLeEMsZUFBZ0I7SUFBaEIseUNBQWdCO0lBS0csZUFBNEI7SUFBNUIsaUVBQTRCOztBREgvRyxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CLFlBQW9CLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTHpDLE1BQUMsR0FBRyxLQUFLLENBQUM7SUFLbUMsQ0FBQztJQUU5QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRXhCLENBQUM7SUFFTyxjQUFjO1FBRXBCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7WUFDL0MsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDZjtRQUNELHVCQUF1QjtJQUd6QixDQUFDOzt3RkF2QlUsb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNiakMsdUVBc0JNOztRQXRCcUIsa0NBQWE7O3VGRGEzQixvQkFBb0I7Y0FOaEMsU0FBUzsyQkFDRSw2QkFBNkIsVUFFL0IsRUFDUDtpRUFNUSxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vcXVpIGMnw6ggaWwgY29sbGVnYW1lbnRvIHRyYSBwcm9kdWN0cyBlIG9yZGVyc1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB3ID0gZmFsc2U7XG4gIHVybDtcblxuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXRyaWV2ZVBhcmFtKCk7XG4gICAgXG4gIH1cblxuICBwcml2YXRlIF9yZXRyaWV2ZVBhcmFtKCl7XG4gXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcblxuICAgIGlmICh0aGlzLnVybC52YWx1ZVswXS5wYXRoID09PSAnd29tZW4tcHJvZHVjdHMnKSB7XG4gICAgICB0aGlzLncgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLncpO1xuICAgIFxuXG4gIH1cblxuICAvLyBhZGRQcm9kdWN0VG9DYXJ0KCl7XG4gIC8vICAgY29uc3QgY2FydEl0ZW06IENhcnRJdGVtID0ge1xuICAvLyAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3QuaWQsXG4gIC8vICAgICBxdWFudGl0eTogMVxuICAvLyAgIH1cblxuICAvLyAgIHRoaXMuY2FydFNlcnZpY2Uuc2V0Q2FydEl0ZW0oY2FydEl0ZW0pO1xuICAvLyB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJwcm9kdWN0LWl0ZW1cIiAqbmdJZj1cInByb2R1Y3RcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtLXdyYXBwZXJcIj5cbiAgICAgICAgPCEtLSA8aW1nIFtyb3V0ZXJMaW5rXT1cIicvcHJvZHVjdHMvJyArIHByb2R1Y3QuaWQgXCIgW3NyY109XCJwcm9kdWN0LmltYWdlXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWFnZVwiPiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiIFtzcmNdPVwicHJvZHVjdC5pbWFnZVwiIGNsYXNzPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwid2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IG1pbi1oZWlnaHQ6IDEwMHB4OyBtYXgtaGVpZ2h0OiAxMDBweDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPnt7cHJvZHVjdC5uYW1lfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIndpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgd2lkdGg6IGZpbGwtYXZhaWxhYmxlO1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInByaWNlXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyO1wiPnt7cHJvZHVjdC5wcmljZSB8IGN1cnJlbmN5fX08L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==