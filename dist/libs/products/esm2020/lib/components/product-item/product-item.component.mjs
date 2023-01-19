/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//qui c'è il collegamento tra products e orders
import { Product123 } from '../../models/product123';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/products.service";
import * as i3 from "@angular/common";
import * as i4 from "../../product-json-ld/product-json-ld.component";
function ProductItemComponent_eshop_frontend_product_json_ld_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eshop-frontend-product-json-ld", 16);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("prodotto", ctx_r0.product);
} }
const _c0 = function (a0) { return { selected: a0 }; };
function ProductItemComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵlistener("click", function ProductItemComponent_div_11_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const c_r3 = restoredCtx.$implicit; const i_r4 = restoredCtx.index; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.changeCardVariant(c_r3, i_r4); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstylePropInterpolate1("background-color", "rgb(", c_r3.color, ")");
    i0.ɵɵpropertyInterpolate("id", c_r3._id);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, ctx_r1.clickedIndex === i_r4));
} }
function ProductItemComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r2.product.price, "\u20AC \u00A0");
} }
export class ProductItemComponent {
    constructor(route, prodService, router) {
        this.route = route;
        this.prodService = prodService;
        this.router = router;
        this.w = false;
        this.discount = 0;
        this.finalPrice = 0;
        this.clickedIndex = 0;
        this.varianti = [];
    }
    async ngOnInit() {
        // 
        //console.log("IMMAGINE= " + this.product.image)
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
        this.prodService.getProductById(this.product.productId).subscribe((products) => {
            this.varianti = products;
            //   this.varianti.reverse();
        });
        //console.log("prodotto = " + JSON.stringify(this.product))
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
    async changeCardVariant(variant, index) {
        this.clickedIndex = index;
        console.log("cambio variante!");
        this.product = variant;
        this.finalPrice = this.product.price - this.product.discount;
        this.discount = Math.round((this.product.discount / this.product.price) * 100);
        let blob = await this.ajaxGetImageData(this.product.image);
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const base64data = reader.result;
            this.imgBlob = base64data;
            this._retrieveParam();
        };
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ProductsService), i0.ɵɵdirectiveInject(i1.Router)); };
ProductItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductItemComponent, selectors: [["eshop-frontend-product-item"]], inputs: { product: "product", appBackImg: "appBackImg" }, decls: 21, vars: 8, consts: [[1, "col", "m-1", "cardd"], [1, "imageclass", 2, "position", "relative"], [3, "href"], [1, "cardd", 3, "src", "alt"], [3, "prodotto", 4, "ngIf"], [1, "middle"], [1, "text"], [1, "row", "w-100", "m-0", "cardFooter", 2, "justify-content", "center"], [1, "col-12"], [1, "row", "w-100", "m-0", 2, "justify-content", "center"], ["style", "width: 15px; height:15px;  mix-blend-mode: multiply;", "class", "col-auto p-1 m-1", 3, "ngClass", "background-color", "id", "click", 4, "ngFor", "ngForOf"], [1, "row", "w-100", "m-0", "p-1", 2, "justify-content", "center"], [1, "col-auto", "p-0", 2, "overflow-y", "auto", "font-size", "small", "max-height", "40px"], ["class", "col-6 price p-0", "style", "text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);", 4, "ngIf"], [1, "col-6", "pb-0", "mb-0", "price", "p-0"], [1, "mb-0", 2, "font-weight", "900"], [3, "prodotto"], [1, "col-auto", "p-1", "m-1", 2, "width", "15px", "height", "15px", "mix-blend-mode", "multiply", 3, "ngClass", "id", "click"], [1, "col-6", "price", "p-0", 2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(255, 0, 0)"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        i0.ɵɵelement(3, "img", 3);
        i0.ɵɵtemplate(4, ProductItemComponent_eshop_frontend_product_json_ld_4_Template, 1, 1, "eshop-frontend-product-json-ld", 4);
        i0.ɵɵelementStart(5, "div", 5)(6, "div", 6);
        i0.ɵɵtext(7, "ACQUISTA ORA");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(8, "div", 7)(9, "div", 8)(10, "div", 9);
        i0.ɵɵtemplate(11, ProductItemComponent_div_11_Template, 1, 7, "div", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 11)(13, "div", 12);
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "div", 9)(16, "div", 12);
        i0.ɵɵtemplate(17, ProductItemComponent_span_17_Template, 2, 1, "span", 13);
        i0.ɵɵelementStart(18, "span", 14)(19, "span", 15);
        i0.ɵɵtext(20);
        i0.ɵɵelementEnd()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("href", "/products/" + ctx.product.id, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("src", ctx.imgBlob, i0.ɵɵsanitizeUrl)("alt", ctx.product.name);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.varianti);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.product.name);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.product.discount != 0);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", ctx.product.price - ctx.product.discount, "\u20AC");
    } }, directives: [i3.NgIf, i4.ProductJsonLdComponent, i3.NgForOf, i3.NgClass], styles: [".productCard[_ngcontent-%COMP%]{width:200px}.cardd[_ngcontent-%COMP%]{width:300px;padding:0!important}.imageclass[_ngcontent-%COMP%], .cardFooter[_ngcontent-%COMP%]{min-width:300px}.selected[_ngcontent-%COMP%]{background-color:#add8e6;outline-offset:1px;outline-style:solid;outline-color:#000}.cardd[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(70%)}.cardd[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%]{opacity:1;animation-duration:1s;animation-iteration-count:1;bottom:10%;animation-name:fadeOut}.cardd[_ngcontent-%COMP%]:hover   .cardFooter[_ngcontent-%COMP%]{background-color:#0002}.text[_ngcontent-%COMP%]{color:#fff;font-size:16px;position:absolute;bottom:20%;height:-moz-fit-content;height:fit-content;font-weight:700}.middle[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#000000ea;height:40px;width:100%;opacity:0;position:absolute;padding:0;left:0%;transform:translateY(110%);text-align:center}@keyframes fadeOut{0%{opacity:0;bottom:0;transform:translate(0)}30%{opacity:.8;transform:translateY(-10%)}to{opacity:1}}@media screen and (min-width: 430px) and (max-width: 660px){.cardd[_ngcontent-%COMP%]{width:300px}}@media screen and (min-width: 376px) and (max-width: 429px){.cardd[_ngcontent-%COMP%]{padding:0!important}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 340px) and (max-width: 375px){.cardd[_ngcontent-%COMP%]{padding:0!important}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 300px) and (max-width: 339px){.cardd[_ngcontent-%COMP%]{padding:0!important}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 100px) and (max-width: 299px){.cardd[_ngcontent-%COMP%]{padding:0!important}.price[_ngcontent-%COMP%]{font-size:small}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductItemComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-item', template: "                <div class=\"col m-1  cardd\">\n\n                    <div class=\"imageclass\"  style=\"position: relative;\">\n                        <a href=\"{{'/products/' + product.id}}\">\n                        <img [src]=\"imgBlob\" [alt]=\"product.name\" class=\"cardd\">\n                        <eshop-frontend-product-json-ld *ngIf=\"product\" [prodotto]=\"product\"></eshop-frontend-product-json-ld>\n                        <div class=\"middle\">\n                            <div class=\"text\">ACQUISTA ORA</div>\n                        </div>\n                    </a>\n                  \n                    </div>\n    \n          \n                        <div class=\"row w-100 m-0 cardFooter\" style=\"justify-content: center;\">\n                            <div class=\"col-12\">\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div style=\"width: 15px; height:15px;  mix-blend-mode: multiply;\"  [ngClass]=\"{selected: clickedIndex === i}\"  *ngFor=\"let c of varianti, let i = index\"  class=\"col-auto p-1 m-1\" style.background-color=\"rgb({{c.color}})\" id=\"{{c._id}}\"  (click)=\"changeCardVariant(c, i)\"></div>\n                                </div>\n\n                                <div class=\"row w-100 m-0 p-1\" style=\"justify-content: center;\">\n                                    <div class=\"col-auto p-0\" style=\" overflow-y: auto; font-size: small;   max-height: 40px;\">{{product.name}}</div>\n                                </div>\n\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div class=\"col-auto p-0\" style=\" overflow-y: auto; font-size: small;     max-height: 40px;\">\n                                        <span *ngIf=\"product.discount !=0\" class=\"col-6 price p-0\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);\">{{product.price }}\u20AC &nbsp;</span>\n                                        <span class=\"col-6 pb-0 mb-0 price p-0\"><span class=\"mb-0\" style=\"font-weight:900;\">{{product.price - product.discount }}\u20AC</span></span>\n                                       \n                                    </div>\n                                </div>\n                            </div>\n                        </div>             \n                </div>\n\n           \n       \n      \n\n", styles: [".productCard{width:200px}.cardd{width:300px;padding:0!important}.imageclass,.cardFooter{min-width:300px}.selected{background-color:#add8e6;outline-offset:1px;outline-style:solid;outline-color:#000}.cardd:hover img{filter:brightness(70%)}.cardd:hover .middle{opacity:1;animation-duration:1s;animation-iteration-count:1;bottom:10%;animation-name:fadeOut}.cardd:hover .cardFooter{background-color:#0002}.text{color:#fff;font-size:16px;position:absolute;bottom:20%;height:-moz-fit-content;height:fit-content;font-weight:700}.middle{display:flex;justify-content:center;background-color:#000000ea;height:40px;width:100%;opacity:0;position:absolute;padding:0;left:0%;transform:translateY(110%);text-align:center}@keyframes fadeOut{0%{opacity:0;bottom:0;transform:translate(0)}30%{opacity:.8;transform:translateY(-10%)}to{opacity:1}}@media screen and (min-width: 430px) and (max-width: 660px){.cardd{width:300px}}@media screen and (min-width: 376px) and (max-width: 429px){.cardd{padding:0!important}.price{font-size:small}}@media screen and (min-width: 340px) and (max-width: 375px){.cardd{padding:0!important}.price{font-size:small}}@media screen and (min-width: 300px) and (max-width: 339px){.cardd{padding:0!important}.price{font-size:small}}@media screen and (min-width: 100px) and (max-width: 299px){.cardd{padding:0!important}.price{font-size:small}}\n"] }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i1.Router }]; }, { product: [{
            type: Input
        }], appBackImg: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCwrQ0FBK0M7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7OztJQ0ExQyxxREFBc0c7OztJQUF0RCx5Q0FBb0I7Ozs7O0lBWXhELCtCQUErUTtJQUFsQyx1UEFBUyxvQ0FBdUIsSUFBQztJQUFDLGlCQUFNOzs7OztJQUFsRyx1RUFBeUM7SUFBQyx3Q0FBYztJQUF4SyxrRkFBMEM7OztJQVN6RyxnQ0FBNEk7SUFBQSxZQUEwQjtJQUFBLGlCQUFPOzs7SUFBakMsZUFBMEI7SUFBMUIsZ0VBQTBCOztBRGI5TSxNQUFNLE9BQU8sb0JBQW9CO0lBZS9CLFlBQW9CLEtBQXFCLEVBQVUsV0FBNEIsRUFBVSxNQUFhO1FBQWxGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQWR0RyxNQUFDLEdBQUcsS0FBSyxDQUFDO1FBR1YsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGVBQVUs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RSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFBO0lBQ0wsQ0FBQzs7d0ZBdkZZLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDYmpCLDhCQUE0QixhQUFBLFdBQUE7UUFJcEIseUJBQXdEO1FBQ3hELDJIQUFzRztRQUN0Ryw4QkFBb0IsYUFBQTtRQUNFLDRCQUFZO1FBQUEsaUJBQU0sRUFBQSxFQUFBLEVBQUE7UUFPeEMsOEJBQXVFLGFBQUEsY0FBQTtRQUczRCx3RUFBcVI7UUFDelIsaUJBQU07UUFFTixnQ0FBZ0UsZUFBQTtRQUMrQixhQUFnQjtRQUFBLGlCQUFNLEVBQUE7UUFHckgsK0JBQTRELGVBQUE7UUFFcEQsMEVBQTZLO1FBQzdLLGlDQUF3QyxnQkFBQTtRQUE0QyxhQUFzQztRQUFBLGlCQUFPLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOztRQXhCOUksZUFBb0M7UUFBcEMsaUZBQW9DO1FBQ2xDLGVBQWU7UUFBZixtREFBZSx5QkFBQTtRQUNhLGVBQWE7UUFBYixrQ0FBYTtRQVkyRixlQUFhO1FBQWIsc0NBQWE7UUFJL0MsZUFBZ0I7UUFBaEIsc0NBQWdCO1FBS2hHLGVBQTBCO1FBQTFCLGdEQUEwQjtRQUNtRCxlQUFzQztRQUF0Qyw2RUFBc0M7O3VGRGRySixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSw2QkFBNkI7b0hBZTlCLE9BQU87a0JBQWYsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy9xdWkgYyfDqCBpbCBjb2xsZWdhbWVudG8gdHJhIHByb2R1Y3RzIGUgb3JkZXJzXG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtaXRlbS1jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdyA9IGZhbHNlO1xuICB1cmw7XG4gIGltZ0Jsb2I7XG4gIGRpc2NvdW50ID0gMDtcbiAgZmluYWxQcmljZSA9IDA7XG5cbiAgY2xpY2tlZEluZGV4ID0gMDtcblxuICB2YXJpYW50aSA9IFtdO1xuXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XG5cbiAgQElucHV0KCkgYXBwQmFja0ltZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBwcm9kU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHsgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgLy8gXG5cbiAgICAvL2NvbnNvbGUubG9nKFwiSU1NQUdJTkU9IFwiICsgdGhpcy5wcm9kdWN0LmltYWdlKVxuXG4gICAgbGV0IGJsb2IgPSBhd2FpdCB0aGlzLmFqYXhHZXRJbWFnZURhdGEodGhpcy5wcm9kdWN0LmltYWdlKTtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2U2NGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICB0aGlzLmltZ0Jsb2IgPSBiYXNlNjRkYXRhO1xuICAgICAgICB0aGlzLl9yZXRyaWV2ZVBhcmFtKCk7XG4gICAgICB9XG5cbiAgICB0aGlzLmZpbmFsUHJpY2UgPSB0aGlzLnByb2R1Y3QucHJpY2UgLSB0aGlzLnByb2R1Y3QuZGlzY291bnQ7XG4gICAgdGhpcy5kaXNjb3VudCA9IE1hdGgucm91bmQoICh0aGlzLnByb2R1Y3QuZGlzY291bnQvdGhpcy5wcm9kdWN0LnByaWNlKSAgKiAxMDApXG5cbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeUlkKHRoaXMucHJvZHVjdC5wcm9kdWN0SWQpLnN1YnNjcmliZSgocHJvZHVjdHMpID0+IHtcbiAgICAgIHRoaXMudmFyaWFudGkgPSBwcm9kdWN0cztcbiAgIC8vICAgdGhpcy52YXJpYW50aS5yZXZlcnNlKCk7XG5cbiAgICAgXG5cbiAgICB9KTtcblxuICAgIC8vY29uc29sZS5sb2coXCJwcm9kb3R0byA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0KSlcblxuICB9XG5cbiAgcHJpdmF0ZSBfcmV0cmlldmVQYXJhbSgpe1xuIFxuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XG5cbiAgICBpZiAodGhpcy51cmwudmFsdWVbMF0ucGF0aCA9PT0gJ3dvbWVuLXByb2R1Y3RzJykge1xuICAgICAgdGhpcy53ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy53KTtcbiAgICBcblxuICB9XG5cblxuICBhc3luYyBhamF4R2V0SW1hZ2VEYXRhKHVybCkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtjYWNoZTogXCJuby1zdG9yZVwifSk7XG4gICAgY29uc3QgaW1hZ2VCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuXG4gICAgdGhpcy5hcHBCYWNrSW1nID0gaW1hZ2VCbG9iO1xuICAgIHJldHVybiBpbWFnZUJsb2I7XG5cblxuICAvL0NvZGUgdG8gZ2V0IGJhc2U2NCBpbWFnZSBzdHJpbmdcbn1cblxuICBhc3luYyBjaGFuZ2VDYXJkVmFyaWFudCh2YXJpYW50LCBpbmRleCl7XG4gICAgdGhpcy5jbGlja2VkSW5kZXggPSBpbmRleDtcbmNvbnNvbGUubG9nKFwiY2FtYmlvIHZhcmlhbnRlIVwiKTtcblxuICAgIHRoaXMucHJvZHVjdCA9IHZhcmlhbnQ7XG4gICAgdGhpcy5maW5hbFByaWNlID0gdGhpcy5wcm9kdWN0LnByaWNlIC0gdGhpcy5wcm9kdWN0LmRpc2NvdW50O1xuICAgIHRoaXMuZGlzY291bnQgPSBNYXRoLnJvdW5kKCAodGhpcy5wcm9kdWN0LmRpc2NvdW50L3RoaXMucHJvZHVjdC5wcmljZSkgICogMTAwKVxuXG4gICAgbGV0IGJsb2IgPSBhd2FpdCB0aGlzLmFqYXhHZXRJbWFnZURhdGEodGhpcy5wcm9kdWN0LmltYWdlKTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgIHRoaXMuaW1nQmxvYiA9IGJhc2U2NGRhdGE7XG4gICAgICB0aGlzLl9yZXRyaWV2ZVBhcmFtKCk7XG4gICAgfVxufVxuXG5cblxufVxuIiwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbS0xICBjYXJkZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZWNsYXNzXCIgIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInt7Jy9wcm9kdWN0cy8nICsgcHJvZHVjdC5pZH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiaW1nQmxvYlwiIFthbHRdPVwicHJvZHVjdC5uYW1lXCIgY2xhc3M9XCJjYXJkZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtanNvbi1sZCAqbmdJZj1cInByb2R1Y3RcIiBbcHJvZG90dG9dPVwicHJvZHVjdFwiPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1qc29uLWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+QUNRVUlTVEEgT1JBPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtLTAgY2FyZEZvb3RlclwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIG0tMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDE1cHg7IGhlaWdodDoxNXB4OyAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1wiICBbbmdDbGFzc109XCJ7c2VsZWN0ZWQ6IGNsaWNrZWRJbmRleCA9PT0gaX1cIiAgKm5nRm9yPVwibGV0IGMgb2YgdmFyaWFudGksIGxldCBpID0gaW5kZXhcIiAgY2xhc3M9XCJjb2wtYXV0byBwLTEgbS0xXCIgc3R5bGUuYmFja2dyb3VuZC1jb2xvcj1cInJnYih7e2MuY29sb3J9fSlcIiBpZD1cInt7Yy5faWR9fVwiICAoY2xpY2spPVwiY2hhbmdlQ2FyZFZhcmlhbnQoYywgaSlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtLTAgcC0xXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBwLTBcIiBzdHlsZT1cIiBvdmVyZmxvdy15OiBhdXRvOyBmb250LXNpemU6IHNtYWxsOyAgIG1heC1oZWlnaHQ6IDQwcHg7XCI+e3twcm9kdWN0Lm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIG0tMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcC0wXCIgc3R5bGU9XCIgb3ZlcmZsb3cteTogYXV0bzsgZm9udC1zaXplOiBzbWFsbDsgICAgIG1heC1oZWlnaHQ6IDQwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJwcm9kdWN0LmRpc2NvdW50ICE9MFwiIGNsYXNzPVwiY29sLTYgcHJpY2UgcC0wXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246ICBsaW5lLXRocm91Z2g7IGZvbnQtd2VpZ2h0OiAxMDA7IGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcIj57e3Byb2R1Y3QucHJpY2UgfX3igqwgJm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sLTYgcGItMCBtYi0wIHByaWNlIHAtMFwiPjxzcGFuIGNsYXNzPVwibWItMFwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6OTAwO1wiPnt7cHJvZHVjdC5wcmljZSAtIHByb2R1Y3QuZGlzY291bnQgfX3igqw8L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgXG4gICAgICAgXG4gICAgICBcblxuIl19