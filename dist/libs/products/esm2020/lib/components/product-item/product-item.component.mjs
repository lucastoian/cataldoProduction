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
    i0.ɵɵlistener("click", function ProductItemComponent_div_11_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const c_r3 = restoredCtx.$implicit; const i_r4 = restoredCtx.index; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.changeCardVariant(c_r3, i_r4)); });
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
    } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.ProductJsonLdComponent], styles: [".productCard[_ngcontent-%COMP%]{width:200px}.cardd[_ngcontent-%COMP%]{width:320px;padding:0!important}.imageclass[_ngcontent-%COMP%], .cardFooter[_ngcontent-%COMP%]{min-width:300px}.selected[_ngcontent-%COMP%]{background-color:#add8e6;outline-offset:1px;outline-style:solid;outline-color:#000}.cardd[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(70%)}.cardd[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%]{opacity:1;animation-duration:1s;animation-iteration-count:1;bottom:10%;animation-name:_ngcontent-%COMP%_fadeOut}.cardd[_ngcontent-%COMP%]:hover   .cardFooter[_ngcontent-%COMP%]{background-color:#0002}.text[_ngcontent-%COMP%]{color:#fff;font-size:16px;position:absolute;bottom:20%;height:-moz-fit-content;height:fit-content;font-weight:700}.middle[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#000000ea;height:40px;width:100%;opacity:0;position:absolute;padding:0;left:0%;transform:translateY(110%);text-align:center}@keyframes _ngcontent-%COMP%_fadeOut{0%{opacity:0;bottom:0;transform:translate(0)}30%{opacity:.8;transform:translateY(-10%)}to{opacity:1}}@media screen and (min-width: 430px) and (max-width: 660px){.cardd[_ngcontent-%COMP%]{width:300px}}@media screen and (min-width: 376px) and (max-width: 429px){.cardd[_ngcontent-%COMP%]{padding:0!important}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 340px) and (max-width: 375px){.cardd[_ngcontent-%COMP%]{padding:0!important}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 300px) and (max-width: 339px){.cardd[_ngcontent-%COMP%]{padding:0!important}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 100px) and (max-width: 299px){.cardd[_ngcontent-%COMP%]{padding:0!important}.price[_ngcontent-%COMP%]{font-size:small}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductItemComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-item', template: "                <div class=\"col m-1  cardd\">\n\n                    <div class=\"imageclass\"  style=\"position: relative;\">\n                        <a href=\"{{'/products/' + product.id}}\">\n                        <img [src]=\"imgBlob\" [alt]=\"product.name\" class=\"cardd\">\n                        <eshop-frontend-product-json-ld *ngIf=\"product\" [prodotto]=\"product\"></eshop-frontend-product-json-ld>\n                        <div class=\"middle\">\n                            <div class=\"text\">ACQUISTA ORA</div>\n                        </div>\n                    </a>\n                  \n                    </div>\n    \n          \n                        <div class=\"row w-100 m-0 cardFooter\" style=\"justify-content: center;\">\n                            <div class=\"col-12\">\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div style=\"width: 15px; height:15px;  mix-blend-mode: multiply;\"  [ngClass]=\"{selected: clickedIndex === i}\"  *ngFor=\"let c of varianti, let i = index\"  class=\"col-auto p-1 m-1\" style.background-color=\"rgb({{c.color}})\" id=\"{{c._id}}\"  (click)=\"changeCardVariant(c, i)\"></div>\n                                </div>\n\n                                <div class=\"row w-100 m-0 p-1\" style=\"justify-content: center;\">\n                                    <div class=\"col-auto p-0\" style=\" overflow-y: auto; font-size: small;   max-height: 40px;\">{{product.name}}</div>\n                                </div>\n\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div class=\"col-auto p-0\" style=\" overflow-y: auto; font-size: small;     max-height: 40px;\">\n                                        <span *ngIf=\"product.discount !=0\" class=\"col-6 price p-0\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);\">{{product.price }}\u20AC &nbsp;</span>\n                                        <span class=\"col-6 pb-0 mb-0 price p-0\"><span class=\"mb-0\" style=\"font-weight:900;\">{{product.price - product.discount }}\u20AC</span></span>\n                                       \n                                    </div>\n                                </div>\n                            </div>\n                        </div>             \n                </div>\n\n           \n       \n      \n\n", styles: [".productCard{width:200px}.cardd{width:320px;padding:0!important}.imageclass,.cardFooter{min-width:300px}.selected{background-color:#add8e6;outline-offset:1px;outline-style:solid;outline-color:#000}.cardd:hover img{filter:brightness(70%)}.cardd:hover .middle{opacity:1;animation-duration:1s;animation-iteration-count:1;bottom:10%;animation-name:fadeOut}.cardd:hover .cardFooter{background-color:#0002}.text{color:#fff;font-size:16px;position:absolute;bottom:20%;height:-moz-fit-content;height:fit-content;font-weight:700}.middle{display:flex;justify-content:center;background-color:#000000ea;height:40px;width:100%;opacity:0;position:absolute;padding:0;left:0%;transform:translateY(110%);text-align:center}@keyframes fadeOut{0%{opacity:0;bottom:0;transform:translate(0)}30%{opacity:.8;transform:translateY(-10%)}to{opacity:1}}@media screen and (min-width: 430px) and (max-width: 660px){.cardd{width:300px}}@media screen and (min-width: 376px) and (max-width: 429px){.cardd{padding:0!important}.price{font-size:small}}@media screen and (min-width: 340px) and (max-width: 375px){.cardd{padding:0!important}.price{font-size:small}}@media screen and (min-width: 300px) and (max-width: 339px){.cardd{padding:0!important}.price{font-size:small}}@media screen and (min-width: 100px) and (max-width: 299px){.cardd{padding:0!important}.price{font-size:small}}\n"] }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i1.Router }]; }, { product: [{
            type: Input
        }], appBackImg: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCwrQ0FBK0M7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7OztJQ0ExQyxxREFBc0c7OztJQUF0RCx5Q0FBb0I7Ozs7O0lBWXhELCtCQUErUTtJQUFsQyx1UEFBUyxlQUFBLG9DQUF1QixDQUFBLElBQUM7SUFBQyxpQkFBTTs7Ozs7SUFBbEcsdUVBQXlDO0lBQUMsd0NBQWM7SUFBeEssa0ZBQTBDOzs7SUFTekcsZ0NBQTRJO0lBQUEsWUFBMEI7SUFBQSxpQkFBTzs7O0lBQWpDLGVBQTBCO0lBQTFCLGdFQUEwQjs7QURiOU0sTUFBTSxPQUFPLG9CQUFvQjtJQWUvQixZQUFvQixLQUFxQixFQUFVLFdBQTRCLEVBQVUsTUFBYTtRQUFsRixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQU87UUFkdEcsTUFBQyxHQUFHLEtBQUssQ0FBQztRQUdWLGFBQVEsR0FBRyxDQUFDLENBQUM7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SSxVQUFVLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQTtJQUNMLENBQUM7O3dGQXZGWSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQ2JqQiw4QkFBNEIsYUFBQSxXQUFBO1FBSXBCLHlCQUF3RDtRQUN4RCwySEFBc0c7UUFDdEcsOEJBQW9CLGFBQUE7UUFDRSw0QkFBWTtRQUFBLGlCQUFNLEVBQUEsRUFBQSxFQUFBO1FBT3hDLDhCQUF1RSxhQUFBLGNBQUE7UUFHM0Qsd0VBQXFSO1FBQ3pSLGlCQUFNO1FBRU4sZ0NBQWdFLGVBQUE7UUFDK0IsYUFBZ0I7UUFBQSxpQkFBTSxFQUFBO1FBR3JILCtCQUE0RCxlQUFBO1FBRXBELDBFQUE2SztRQUM3SyxpQ0FBd0MsZ0JBQUE7UUFBNEMsYUFBc0M7UUFBQSxpQkFBTyxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUF4QjlJLGVBQW9DO1FBQXBDLGlGQUFvQztRQUNsQyxlQUFlO1FBQWYsbURBQWUseUJBQUE7UUFDYSxlQUFhO1FBQWIsa0NBQWE7UUFZMkYsZUFBYTtRQUFiLHNDQUFhO1FBSS9DLGVBQWdCO1FBQWhCLHNDQUFnQjtRQUtoRyxlQUEwQjtRQUExQixnREFBMEI7UUFDbUQsZUFBc0M7UUFBdEMsNkVBQXNDOzt1RkRkckosb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UsNkJBQTZCO29IQWU5QixPQUFPO2tCQUFmLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllcyAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vcXVpIGMnw6ggaWwgY29sbGVnYW1lbnRvIHRyYSBwcm9kdWN0cyBlIG9yZGVyc1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWl0ZW0tY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHcgPSBmYWxzZTtcbiAgdXJsO1xuICBpbWdCbG9iO1xuICBkaXNjb3VudCA9IDA7XG4gIGZpbmFsUHJpY2UgPSAwO1xuXG4gIGNsaWNrZWRJbmRleCA9IDA7XG5cbiAgdmFyaWFudGkgPSBbXTtcblxuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuXG4gIEBJbnB1dCgpIGFwcEJhY2tJbWc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcHJvZFNlcnZpY2U6IFByb2R1Y3RzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7IH1cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgIC8vIFxuXG4gICAgLy9jb25zb2xlLmxvZyhcIklNTUFHSU5FPSBcIiArIHRoaXMucHJvZHVjdC5pbWFnZSlcblxuICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMucHJvZHVjdC5pbWFnZSk7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgdGhpcy5pbWdCbG9iID0gYmFzZTY0ZGF0YTtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVQYXJhbSgpO1xuICAgICAgfVxuXG4gICAgdGhpcy5maW5hbFByaWNlID0gdGhpcy5wcm9kdWN0LnByaWNlIC0gdGhpcy5wcm9kdWN0LmRpc2NvdW50O1xuICAgIHRoaXMuZGlzY291bnQgPSBNYXRoLnJvdW5kKCAodGhpcy5wcm9kdWN0LmRpc2NvdW50L3RoaXMucHJvZHVjdC5wcmljZSkgICogMTAwKVxuXG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlJZCh0aGlzLnByb2R1Y3QucHJvZHVjdElkKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XG4gICAgICB0aGlzLnZhcmlhbnRpID0gcHJvZHVjdHM7XG4gICAvLyAgIHRoaXMudmFyaWFudGkucmV2ZXJzZSgpO1xuXG4gICAgIFxuXG4gICAgfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwicHJvZG90dG8gPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdCkpXG5cbiAgfVxuXG4gIHByaXZhdGUgX3JldHJpZXZlUGFyYW0oKXtcbiBcbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xuXG4gICAgaWYgKHRoaXMudXJsLnZhbHVlWzBdLnBhdGggPT09ICd3b21lbi1wcm9kdWN0cycpIHtcbiAgICAgIHRoaXMudyA9IHRydWU7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudyk7XG4gICAgXG5cbiAgfVxuXG5cbiAgYXN5bmMgYWpheEdldEltYWdlRGF0YSh1cmwpIHtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7Y2FjaGU6IFwibm8tc3RvcmVcIn0pO1xuICAgIGNvbnN0IGltYWdlQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcblxuICAgIHRoaXMuYXBwQmFja0ltZyA9IGltYWdlQmxvYjtcbiAgICByZXR1cm4gaW1hZ2VCbG9iO1xuXG5cbiAgLy9Db2RlIHRvIGdldCBiYXNlNjQgaW1hZ2Ugc3RyaW5nXG59XG5cbiAgYXN5bmMgY2hhbmdlQ2FyZFZhcmlhbnQodmFyaWFudCwgaW5kZXgpe1xuICAgIHRoaXMuY2xpY2tlZEluZGV4ID0gaW5kZXg7XG5jb25zb2xlLmxvZyhcImNhbWJpbyB2YXJpYW50ZSFcIik7XG5cbiAgICB0aGlzLnByb2R1Y3QgPSB2YXJpYW50O1xuICAgIHRoaXMuZmluYWxQcmljZSA9IHRoaXMucHJvZHVjdC5wcmljZSAtIHRoaXMucHJvZHVjdC5kaXNjb3VudDtcbiAgICB0aGlzLmRpc2NvdW50ID0gTWF0aC5yb3VuZCggKHRoaXMucHJvZHVjdC5kaXNjb3VudC90aGlzLnByb2R1Y3QucHJpY2UpICAqIDEwMClcblxuICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMucHJvZHVjdC5pbWFnZSk7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICB0aGlzLmltZ0Jsb2IgPSBiYXNlNjRkYXRhO1xuICAgICAgdGhpcy5fcmV0cmlldmVQYXJhbSgpO1xuICAgIH1cbn1cblxuXG5cbn1cbiIsIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG0tMSAgY2FyZGRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VjbGFzc1wiICBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7eycvcHJvZHVjdHMvJyArIHByb2R1Y3QuaWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cImltZ0Jsb2JcIiBbYWx0XT1cInByb2R1Y3QubmFtZVwiIGNsYXNzPVwiY2FyZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWpzb24tbGQgKm5nSWY9XCJwcm9kdWN0XCIgW3Byb2RvdHRvXT1cInByb2R1Y3RcIj48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtanNvbi1sZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPkFDUVVJU1RBIE9SQTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDAgbS0wIGNhcmRGb290ZXJcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtLTBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxNXB4OyBoZWlnaHQ6MTVweDsgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcIiAgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiBjbGlja2VkSW5kZXggPT09IGl9XCIgICpuZ0Zvcj1cImxldCBjIG9mIHZhcmlhbnRpLCBsZXQgaSA9IGluZGV4XCIgIGNsYXNzPVwiY29sLWF1dG8gcC0xIG0tMVwiIHN0eWxlLmJhY2tncm91bmQtY29sb3I9XCJyZ2Ioe3tjLmNvbG9yfX0pXCIgaWQ9XCJ7e2MuX2lkfX1cIiAgKGNsaWNrKT1cImNoYW5nZUNhcmRWYXJpYW50KGMsIGkpXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDAgbS0wIHAtMVwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcC0wXCIgc3R5bGU9XCIgb3ZlcmZsb3cteTogYXV0bzsgZm9udC1zaXplOiBzbWFsbDsgICBtYXgtaGVpZ2h0OiA0MHB4O1wiPnt7cHJvZHVjdC5uYW1lfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtLTBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHAtMFwiIHN0eWxlPVwiIG92ZXJmbG93LXk6IGF1dG87IGZvbnQtc2l6ZTogc21hbGw7ICAgICBtYXgtaGVpZ2h0OiA0MHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicHJvZHVjdC5kaXNjb3VudCAhPTBcIiBjbGFzcz1cImNvbC02IHByaWNlIHAtMFwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiAgbGluZS10aHJvdWdoOyBmb250LXdlaWdodDogMTAwOyBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XCI+e3twcm9kdWN0LnByaWNlIH194oKsICZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbC02IHBiLTAgbWItMCBwcmljZSBwLTBcIj48c3BhbiBjbGFzcz1cIm1iLTBcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OjkwMDtcIj57e3Byb2R1Y3QucHJpY2UgLSBwcm9kdWN0LmRpc2NvdW50IH194oKsPC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgIFxuICAgICAgIFxuICAgICAgXG5cbiJdfQ==