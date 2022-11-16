/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//qui c'è il collegamento tra products e orders
import { Product123 } from '../../models/product123';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
function ProductItemComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r0.product.price));
} }
function ProductItemComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} }
function ProductItemComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 16);
    i0.ɵɵtext(3, "unread messages");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" -", ctx_r2.discount, "% ");
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { "background-image": a0 }; };
export class ProductItemComponent {
    constructor(route) {
        this.route = route;
        this.w = false;
        this.discount = 0;
        this.finalPrice = 0;
    }
    async ngOnInit() {
        // 
        console.log("IMMAGINE= " + this.product.image);
        let blob = await this.ajaxGetImageData(this.product.image);
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const base64data = reader.result;
            this.imgBlob = base64data;
            this._retrieveParam();
        };
        this.finalPrice = this.product.price - this.product.discount;
        this.discount = Math.round((this.product.discount / this.product.price) * 100);
    }
    _retrieveParam() {
        this.url = this.route.url;
        if (this.url.value[0].path === 'women-products') {
            this.w = true;
        }
        // console.log(this.w);
    }
    async ajaxGetImageData(url) {
        const response = await fetch(url, { cache: "no-store" });
        const imageBlob = await response.blob();
        this.appBackImg = imageBlob;
        return imageBlob;
        //Code to get base64 image string
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
ProductItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductItemComponent, selectors: [["eshop-frontend-product-item"]], inputs: { product: "product", appBackImg: "appBackImg" }, decls: 17, vars: 15, consts: [[1, "container-fluid", "p-0", "mb-2", 2, "width", "200px", "height", "380px"], [1, "grid", "m-0", "w-100", 2, "justify-content", "center", "height", "360px"], [1, "row", "w-100", 2, "height", "280px"], [1, "col-12", 2, "background-size", "cover", "background-repeat", "no-repeat", "background-color", "#8282823a", "background-blend-mode", "multiply", "background-position-y", "center", 3, "routerLink", "ngStyle"], [1, "row", "w-100", 2, "height", "60px"], [1, "col-auto", 2, "height", "40px", "overflow-y", "auto", "font-size", "small"], [1, "col-auto", "pb-0", "mb-0"], [1, "mb-0", 2, "font-weight", "900"], ["class", "col-auto", "style", "text-decoration:  line-through; font-weight: 100; color: rgb(98, 98, 98);", 4, "ngIf"], ["class", "col-auto", "style", "height: 20px;", 4, "ngIf"], [1, "row", "w-100", 2, "height", "20px"], ["type", "button", 1, "btn", "btn-outline-dark", "w-100", "position-relative"], ["class", "position-absolute start-100 translate-middle badge rounded-pill bg-danger", "style", "transform: translateX(-46px)!important; border-radius: 5px!important;", 4, "ngIf"], [1, "col-auto", 2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(98, 98, 98)"], [1, "col-auto", 2, "height", "20px"], [1, "position-absolute", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger", 2, "transform", "translateX(-46px)!important", "border-radius", "5px!important"], [1, "visually-hidden"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4)(5, "div", 5);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 6)(8, "p", 7);
        i0.ɵɵtext(9);
        i0.ɵɵpipe(10, "currency");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(11, ProductItemComponent_div_11_Template, 3, 3, "div", 8);
        i0.ɵɵtemplate(12, ProductItemComponent_div_12_Template, 1, 0, "div", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 10)(14, "button", 11);
        i0.ɵɵtext(15, "Acquista ");
        i0.ɵɵtemplate(16, ProductItemComponent_span_16_Template, 4, 1, "span", 12);
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("routerLink", ctx.w ? i0.ɵɵpureFunction1(9, _c0, "/women-products/" + ctx.product.id) : i0.ɵɵpureFunction1(11, _c0, "/products/" + ctx.product.id))("ngStyle", i0.ɵɵpureFunction1(13, _c1, "url(" + ctx.imgBlob + ")"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.product.name);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 7, ctx.product.price - ctx.product.discount));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.product.discount != 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product.discount == 0);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.product.discount / ctx.product.price * 100 != 0);
    } }, directives: [i1.RouterLink, i2.NgStyle, i2.NgIf], pipes: [i2.CurrencyPipe], styles: [".productCard[_ngcontent-%COMP%]{width:240px}@media screen and (max-width: 516px){.productCard[_ngcontent-%COMP%]{width:140px}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductItemComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-item', template: "<!--div class=\"product-item\" *ngIf=\"product\" style=\"    MAX-WIDTH: 300PX; margin:auto\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n    <div class=\"product-item-wrapper\">\n\n        <div class=\"grid\" style=\"justify-content: center;\">\n            <div class=\"row w-100\" style=\"min-height: 200px;\">\n                <div class=\"col d-flex justify-content-center\">\n                <div [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\" [ngStyle]=\"{ 'background-image': 'url(' + imgBlob + ')'}\" style=\" min-width: 140px;\n                background-size: cover;\n                background-repeat: no-repeat;\n                transform: translateY(-25%);\"></div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"width: -webkit-fill-available; min-height: 100px; max-height: 100px;\">\n                <div class=\"col-12 d-flex justify-content-center\" style=\"text-align: center;\">\n                    <p class=\"name\" style=\"text-align: center;\">{{product.name}}</p>\n                </div>\n            </div>\n            <div class=\"row\" style=\"width: -webkit-fill-available;    width: -webkit-fill-available; width: fill-available;\">\n                <div class=\"col-12 d-flex justify-content-center\">\n                        <h5 class=\"price\" style=\"width: 100%; text-align: center;\">{{product.price | currency}}</h5>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container-fluid p-0 mb-2 \" style=\"max-width: fit-content; height: 360px; background-color: #7e7e7e1a;\">\n\n    <div class=\"grid m-0 \" style=\"justify-content: center; width: 240px; height: 329.94px;\">\n        <div class=\"row \" style=\"width: 140px; min-height:190px;\">\n            <div class=\"col-12\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\" [ngStyle]=\"{ 'background-image': 'url(' + imgBlob + ')'}\" style=\"\n            background-size: cover;\n            background-repeat: no-repeat;\n            background-color: #8282823a;\n            background-blend-mode: multiply;\n            background-position-y: center;\">\n            </div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col-auto\" style=\"height: 60px; overflow-y: auto\">{{product.name}}</div>\n            <div class=\"col-12 pb-0 mb-0\"><p class=\"mb-0\" style=\"font-weight:900;\">{{product.price - product.discount | currency}}</p></div>\n            <div *ngIf=\"product.discount !=0\" class=\"col-12\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(98, 98, 98);\">{{product.price | currency}}</div>\n            <div *ngIf=\"product.discount == 0\" class=\"col-12\"  style=\"min-height: 39.99px;\"></div>\n        </div>\n        <div class=\"row w-100 p-0\" style=\"background-color: white;\"><div class=\"col-12 w-100 p-0\" style=\"    display: flex;\n            align-items: self-end;\">\n            <button type=\"button\" class=\"btn btn-outline-dark w-100 position-relative\">Acquista \n                <span *ngIf=\"(product.discount / product.price) * 100 != 0\"  class=\"position-absolute start-96 translate-middle badge rounded-pill bg-danger\">\n                    -{{discount}}%\n                    <span class=\"visually-hidden\">unread messages</span>\n                  </span>\n            </button>\n        </div>\n    </div>\n\n</div>\n-->\n\n<div class=\"container-fluid p-0 mb-2\" style=\"width: 200px; height:380px\">\n    <div class=\"grid m-0 w-100\" style=\"justify-content: center; height: 360px;\" >\n        <div class=\"row w-100\" style=\"height: 280px;\">\n            <div class=\"col-12\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\" [ngStyle]=\"{ 'background-image': 'url(' + imgBlob + ')'}\" style=\"\n            background-size: cover;\n            background-repeat: no-repeat;\n            background-color: #8282823a;\n            background-blend-mode: multiply;\n            background-position-y: center;\">\n            </div>\n        </div>\n        <div class=\"row w-100\" style=\"height: 60px;\">\n            <div class=\"col-auto\" style=\"height: 40px; overflow-y: auto; font-size: small;\">{{product.name}}</div>\n            <div class=\"col-auto pb-0 mb-0\"><p class=\"mb-0\" style=\"font-weight:900;\">{{product.price - product.discount | currency}}</p></div>\n            <div *ngIf=\"product.discount !=0\" class=\"col-auto\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(98, 98, 98);\">{{product.price | currency}}</div>\n            <div *ngIf=\"product.discount == 0\" class=\"col-auto\"  style=\"height: 20px;\"></div>\n        </div>\n        <div class=\"row w-100\" style=\"height: 20px;\">\n            <button type=\"button\" class=\"btn btn-outline-dark w-100 position-relative\">Acquista \n                <span *ngIf=\"(product.discount / product.price) * 100 != 0\"  class=\"position-absolute start-100 translate-middle badge rounded-pill bg-danger\" style=\"transform: translateX(-46px)!important; border-radius: 5px!important;\">\n                    -{{discount}}%\n                    <span class=\"visually-hidden\">unread messages</span>\n                  </span>\n            </button>\n        </div>\n    </div>\n</div>", styles: [".productCard{width:240px}@media screen and (max-width: 516px){.productCard{width:140px}}\n"] }]
    }], function () { return [{ type: i1.ActivatedRoute }]; }, { product: [{
            type: Input
        }], appBackImg: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELCtDQUErQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0lDc0V6QywrQkFBcUk7SUFBQSxZQUE0Qjs7SUFBQSxpQkFBTTs7O0lBQWxDLGVBQTRCO0lBQTVCLGdFQUE0Qjs7O0lBQ2pLLDBCQUFpRjs7O0lBSTdFLGdDQUE2TjtJQUN6TixZQUNBO0lBQUEsZ0NBQThCO0lBQUEsK0JBQWU7SUFBQSxpQkFBTyxFQUFBOzs7SUFEcEQsZUFDQTtJQURBLGtEQUNBOzs7O0FEckVwQixNQUFNLE9BQU8sb0JBQW9CO0lBVy9CLFlBQW9CLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBVnpDLE1BQUMsR0FBRyxLQUFLLENBQUM7UUFHVixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZUFBVSxHQUFHLENBQUMsQ0FBQztJQU04QixDQUFDO0lBRTlDLEtBQUssQ0FBQyxRQUFRO1FBQ2IsR0FBRztRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFOUMsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFBO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUM3RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFJLEdBQUcsQ0FBQyxDQUFBO0lBRWhGLENBQUM7SUFFTyxjQUFjO1FBRXBCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7WUFDL0MsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDZjtRQUNELHVCQUF1QjtJQUd6QixDQUFDO0lBR0QsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUc7UUFFeEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxTQUFTLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsT0FBTyxTQUFTLENBQUM7UUFHbkIsaUNBQWlDO0lBQ25DLENBQUM7O3dGQXZEWSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQ2dEakMsOEJBQXlFLGFBQUEsYUFBQTtRQUc3RCx5QkFNTTtRQUNWLGlCQUFNO1FBQ04sOEJBQTZDLGFBQUE7UUFDdUMsWUFBZ0I7UUFBQSxpQkFBTTtRQUN0Ryw4QkFBZ0MsV0FBQTtRQUF5QyxZQUErQzs7UUFBQSxpQkFBSSxFQUFBO1FBQzVILHVFQUF1SztRQUN2Syx1RUFBaUY7UUFDckYsaUJBQU07UUFDTixnQ0FBNkMsa0JBQUE7UUFDa0MsMEJBQ3ZFO1FBQUEsMEVBR1M7UUFDYixpQkFBUyxFQUFBLEVBQUEsRUFBQTs7UUFwQlcsZUFBbUY7UUFBbkYsaUtBQW1GLG9FQUFBO1FBU3ZCLGVBQWdCO1FBQWhCLHNDQUFnQjtRQUN2QixlQUErQztRQUEvQyxxRkFBK0M7UUFDbEgsZUFBMEI7UUFBMUIsZ0RBQTBCO1FBQzFCLGVBQTJCO1FBQTNCLGdEQUEyQjtRQUl0QixlQUFtRDtRQUFuRCwwRUFBbUQ7O3VGRG5FN0Qsb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UsNkJBQTZCO2lFQVc5QixPQUFPO2tCQUFmLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllcyAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vL3F1aSBjJ8OoIGlsIGNvbGxlZ2FtZW50byB0cmEgcHJvZHVjdHMgZSBvcmRlcnNcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtaXRlbS1jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdyA9IGZhbHNlO1xuICB1cmw7XG4gIGltZ0Jsb2I7XG4gIGRpc2NvdW50ID0gMDtcbiAgZmluYWxQcmljZSA9IDA7XG5cbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcblxuICBASW5wdXQoKSBhcHBCYWNrSW1nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgIC8vIFxuXG4gICAgY29uc29sZS5sb2coXCJJTU1BR0lORT0gXCIgKyB0aGlzLnByb2R1Y3QuaW1hZ2UpXG5cbiAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLnByb2R1Y3QuaW1hZ2UpO1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgIHRoaXMuaW1nQmxvYiA9IGJhc2U2NGRhdGE7XG4gICAgICAgIHRoaXMuX3JldHJpZXZlUGFyYW0oKTtcbiAgICAgIH1cblxuICAgIHRoaXMuZmluYWxQcmljZSA9IHRoaXMucHJvZHVjdC5wcmljZSAtIHRoaXMucHJvZHVjdC5kaXNjb3VudDtcbiAgICB0aGlzLmRpc2NvdW50ID0gTWF0aC5yb3VuZCggKHRoaXMucHJvZHVjdC5kaXNjb3VudC90aGlzLnByb2R1Y3QucHJpY2UpICAqIDEwMClcblxuICB9XG5cbiAgcHJpdmF0ZSBfcmV0cmlldmVQYXJhbSgpe1xuIFxuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XG5cbiAgICBpZiAodGhpcy51cmwudmFsdWVbMF0ucGF0aCA9PT0gJ3dvbWVuLXByb2R1Y3RzJykge1xuICAgICAgdGhpcy53ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy53KTtcbiAgICBcblxuICB9XG5cblxuICBhc3luYyBhamF4R2V0SW1hZ2VEYXRhKHVybCkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtjYWNoZTogXCJuby1zdG9yZVwifSk7XG4gICAgY29uc3QgaW1hZ2VCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuXG4gICAgdGhpcy5hcHBCYWNrSW1nID0gaW1hZ2VCbG9iO1xuICAgIHJldHVybiBpbWFnZUJsb2I7XG5cblxuICAvL0NvZGUgdG8gZ2V0IGJhc2U2NCBpbWFnZSBzdHJpbmdcbn1cblxuXG4gIC8vIGFkZFByb2R1Y3RUb0NhcnQoKXtcbiAgLy8gICBjb25zdCBjYXJ0SXRlbTogQ2FydEl0ZW0gPSB7XG4gIC8vICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvZHVjdC5pZCxcbiAgLy8gICAgIHF1YW50aXR5OiAxXG4gIC8vICAgfVxuXG4gIC8vICAgdGhpcy5jYXJ0U2VydmljZS5zZXRDYXJ0SXRlbShjYXJ0SXRlbSk7XG4gIC8vIH1cblxufVxuIiwiPCEtLWRpdiBjbGFzcz1cInByb2R1Y3QtaXRlbVwiICpuZ0lmPVwicHJvZHVjdFwiIHN0eWxlPVwiICAgIE1BWC1XSURUSDogMzAwUFg7IG1hcmdpbjphdXRvXCIgW3JvdXRlckxpbmtdPVwiIHcgPyBbJy93b21lbi1wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF0gOiBbJy9wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF1cIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtLXdyYXBwZXJcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiAyMDBweDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBpbWdCbG9iICsgJyknfVwiIHN0eWxlPVwiIG1pbi13aWR0aDogMTQwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUlKTtcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwid2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IG1pbi1oZWlnaHQ6IDEwMHB4OyBtYXgtaGVpZ2h0OiAxMDBweDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPnt7cHJvZHVjdC5uYW1lfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIndpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgd2lkdGg6IGZpbGwtYXZhaWxhYmxlO1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInByaWNlXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyO1wiPnt7cHJvZHVjdC5wcmljZSB8IGN1cnJlbmN5fX08L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHAtMCBtYi0yIFwiIHN0eWxlPVwibWF4LXdpZHRoOiBmaXQtY29udGVudDsgaGVpZ2h0OiAzNjBweDsgYmFja2dyb3VuZC1jb2xvcjogIzdlN2U3ZTFhO1wiPlxuXG4gICAgPGRpdiBjbGFzcz1cImdyaWQgbS0wIFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHdpZHRoOiAyNDBweDsgaGVpZ2h0OiAzMjkuOTRweDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBcIiBzdHlsZT1cIndpZHRoOiAxNDBweDsgbWluLWhlaWdodDoxOTBweDtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBpbWdCbG9iICsgJyknfVwiIHN0eWxlPVwiXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MjgyODIzYTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiIHN0eWxlPVwiaGVpZ2h0OiA2MHB4OyBvdmVyZmxvdy15OiBhdXRvXCI+e3twcm9kdWN0Lm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBwYi0wIG1iLTBcIj48cCBjbGFzcz1cIm1iLTBcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OjkwMDtcIj57e3Byb2R1Y3QucHJpY2UgLSBwcm9kdWN0LmRpc2NvdW50IHwgY3VycmVuY3l9fTwvcD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwcm9kdWN0LmRpc2NvdW50ICE9MFwiIGNsYXNzPVwiY29sLTEyXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246ICBsaW5lLXRocm91Z2g7IGZvbnQtd2VpZ2h0OiAxMDA7IGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XCI+e3twcm9kdWN0LnByaWNlIHwgY3VycmVuY3l9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInByb2R1Y3QuZGlzY291bnQgPT0gMFwiIGNsYXNzPVwiY29sLTEyXCIgIHN0eWxlPVwibWluLWhlaWdodDogMzkuOTlweDtcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDAgcC0wXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIj48ZGl2IGNsYXNzPVwiY29sLTEyIHctMTAwIHAtMFwiIHN0eWxlPVwiICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc2VsZi1lbmQ7XCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1kYXJrIHctMTAwIHBvc2l0aW9uLXJlbGF0aXZlXCI+QWNxdWlzdGEgXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIocHJvZHVjdC5kaXNjb3VudCAvIHByb2R1Y3QucHJpY2UpICogMTAwICE9IDBcIiAgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSBzdGFydC05NiB0cmFuc2xhdGUtbWlkZGxlIGJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgLXt7ZGlzY291bnR9fSVcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj51bnJlYWQgbWVzc2FnZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuLS0+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcC0wIG1iLTJcIiBzdHlsZT1cIndpZHRoOiAyMDBweDsgaGVpZ2h0OjM4MHB4XCI+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQgbS0wIHctMTAwXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgaGVpZ2h0OiAzNjBweDtcIiA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIiBzdHlsZT1cImhlaWdodDogMjgwcHg7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgW3JvdXRlckxpbmtdPVwiIHcgPyBbJy93b21lbi1wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF0gOiBbJy9wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF1cIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgaW1nQmxvYiArICcpJ31cIiBzdHlsZT1cIlxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI4MjgyM2E7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIiBzdHlsZT1cImhlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiIHN0eWxlPVwiaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdy15OiBhdXRvOyBmb250LXNpemU6IHNtYWxsO1wiPnt7cHJvZHVjdC5uYW1lfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBwYi0wIG1iLTBcIj48cCBjbGFzcz1cIm1iLTBcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OjkwMDtcIj57e3Byb2R1Y3QucHJpY2UgLSBwcm9kdWN0LmRpc2NvdW50IHwgY3VycmVuY3l9fTwvcD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwcm9kdWN0LmRpc2NvdW50ICE9MFwiIGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogIGxpbmUtdGhyb3VnaDsgZm9udC13ZWlnaHQ6IDEwMDsgY29sb3I6IHJnYig5OCwgOTgsIDk4KTtcIj57e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeX19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicHJvZHVjdC5kaXNjb3VudCA9PSAwXCIgY2xhc3M9XCJjb2wtYXV0b1wiICBzdHlsZT1cImhlaWdodDogMjBweDtcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIiBzdHlsZT1cImhlaWdodDogMjBweDtcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmsgdy0xMDAgcG9zaXRpb24tcmVsYXRpdmVcIj5BY3F1aXN0YSBcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIihwcm9kdWN0LmRpc2NvdW50IC8gcHJvZHVjdC5wcmljZSkgKiAxMDAgIT0gMFwiICBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHN0YXJ0LTEwMCB0cmFuc2xhdGUtbWlkZGxlIGJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYW5nZXJcIiBzdHlsZT1cInRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDZweCkhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgICAgICAgICAte3tkaXNjb3VudH19JVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnVucmVhZCBtZXNzYWdlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==