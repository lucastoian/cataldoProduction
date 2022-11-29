/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//qui c'è il collegamento tra products e orders
import { Product123 } from '../../models/product123';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/products.service";
import * as i3 from "@angular/common";
function ProductItemComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵlistener("click", function ProductItemComponent_div_9_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const c_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.changeCardVariant(c_r2); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    i0.ɵɵstylePropInterpolate1("background-color", "rgb(", c_r2.color, ")");
    i0.ɵɵpropertyInterpolate("id", c_r2._id);
} }
function ProductItemComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r1.product.price, "\u20AC \u00A0");
} }
const _c0 = function (a0) { return [a0]; };
export class ProductItemComponent {
    constructor(route, prodService) {
        this.route = route;
        this.prodService = prodService;
        this.w = false;
        this.discount = 0;
        this.finalPrice = 0;
        this.varianti = [];
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
        this.prodService.getProductById(this.product.productId).subscribe((products) => {
            this.varianti = products;
        });
        console.log("prodotto = " + JSON.stringify(this.product));
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
    async changeCardVariant(variant) {
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
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ProductsService)); };
ProductItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductItemComponent, selectors: [["eshop-frontend-product-item"]], inputs: { product: "product", appBackImg: "appBackImg" }, decls: 19, vars: 10, consts: [[1, "col", "p-1", "cardd"], [1, "imageclass", 2, "position", "relative"], [2, "width", "100%", 3, "src", "routerLink"], [1, "middle"], [1, "text"], [1, "row", "w-100", "m-0", "cardFooter", 2, "justify-content", "center"], [1, "col-12"], [1, "row", "w-100", "m-0", 2, "justify-content", "center"], ["style", "width: 15px; height:15px;  mix-blend-mode: multiply;", "class", "col-auto p-1 m-1", 3, "background-color", "id", "click", 4, "ngFor", "ngForOf"], [1, "col-auto", "p-0", 2, "overflow-y", "auto", "font-size", "small", "max-height", "40px"], ["class", "col-6 price p-0", "style", "text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);", 4, "ngIf"], [1, "col-6", "pb-0", "mb-0", "price", "p-0"], [1, "mb-0", 2, "font-weight", "900"], [1, "col-auto", "p-1", "m-1", 2, "width", "15px", "height", "15px", "mix-blend-mode", "multiply", 3, "id", "click"], [1, "col-6", "price", "p-0", 2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(255, 0, 0)"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
        i0.ɵɵtext(5, "ACQUISTA ORA");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        i0.ɵɵtemplate(9, ProductItemComponent_div_9_Template, 1, 4, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 7)(11, "div", 9);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(13, "div", 7)(14, "div", 9);
        i0.ɵɵtemplate(15, ProductItemComponent_span_15_Template, 2, 1, "span", 10);
        i0.ɵɵelementStart(16, "span", 11)(17, "span", 12);
        i0.ɵɵtext(18);
        i0.ɵɵelementEnd()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.imgBlob, i0.ɵɵsanitizeUrl)("routerLink", ctx.w ? i0.ɵɵpureFunction1(6, _c0, "/women-products/" + ctx.product.id) : i0.ɵɵpureFunction1(8, _c0, "/products/" + ctx.product.id));
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.varianti);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.product.name);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.product.discount != 0);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", ctx.product.price - ctx.product.discount, "\u20AC");
    } }, directives: [i1.RouterLink, i3.NgForOf, i3.NgIf], styles: [".productCard[_ngcontent-%COMP%]{width:200px}.cardd[_ngcontent-%COMP%]{width:320px}.cardd[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(50%)}.cardd[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%]{opacity:1;animation-duration:1s;animation-iteration-count:1;bottom:10%;animation-name:fadeOut}.cardd[_ngcontent-%COMP%]:hover   .cardFooter[_ngcontent-%COMP%]{background-color:#0002}.text[_ngcontent-%COMP%]{color:#fff;font-size:16px;position:absolute;bottom:20%;height:-moz-fit-content;height:fit-content;font-weight:700}.middle[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#000000ea;height:40px;width:100%;opacity:0;position:absolute;padding:0;left:0%;text-align:center}@keyframes fadeOut{0%{opacity:0;bottom:0;transform:translate(0)}70%{opacity:.8;transform:translateY(-50%)}to{opacity:1}}@media screen and (min-width: 375px) and (max-width: 660px){.cardd[_ngcontent-%COMP%]{width:180px}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 300px) and (max-width: 374px){.cardd[_ngcontent-%COMP%]{width:160px}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 100px) and (max-width: 299px){.cardd[_ngcontent-%COMP%]{width:140px}.price[_ngcontent-%COMP%]{font-size:small}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductItemComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-item', template: "                <div class=\"col p-1  cardd\">\n\n                    <div class=\"imageclass\"  style=\"position: relative;\">\n                        <img [src]=\"imgBlob\" style=\"width: 100%;\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n\n                        <div class=\"middle\">\n                            <div class=\"text\">ACQUISTA ORA</div>\n                        </div>\n    \n                  \n                    </div>\n    \n          \n                        <div class=\"row w-100 m-0 cardFooter\" style=\"justify-content: center;\">\n                            <div class=\"col-12\">\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div style=\"width: 15px; height:15px;  mix-blend-mode: multiply;\"   *ngFor=\"let c of varianti, let i = index\"  class=\"col-auto p-1 m-1\" style.background-color=\"rgb({{c.color}})\" id=\"{{c._id}}\"  (click)=\"changeCardVariant(c)\"></div>\n                                </div>\n\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div class=\"col-auto p-0\" style=\" overflow-y: auto; font-size: small;     max-height: 40px;\">{{product.name}}</div>\n                                </div>\n\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div class=\"col-auto p-0\" style=\" overflow-y: auto; font-size: small;     max-height: 40px;\">\n                                        <span *ngIf=\"product.discount !=0\" class=\"col-6 price p-0\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);\">{{product.price }}\u20AC &nbsp;</span>\n                                        <span class=\"col-6 pb-0 mb-0 price p-0\"><span class=\"mb-0\" style=\"font-weight:900;\">{{product.price - product.discount }}\u20AC</span></span>\n                                       \n                                    </div>\n                                </div>\n                            </div>\n                        </div>             \n                </div>\n\n           \n       \n      \n\n", styles: [".productCard{width:200px}.cardd{width:320px}.cardd:hover img{filter:brightness(50%)}.cardd:hover .middle{opacity:1;animation-duration:1s;animation-iteration-count:1;bottom:10%;animation-name:fadeOut}.cardd:hover .cardFooter{background-color:#0002}.text{color:#fff;font-size:16px;position:absolute;bottom:20%;height:-moz-fit-content;height:fit-content;font-weight:700}.middle{display:flex;justify-content:center;background-color:#000000ea;height:40px;width:100%;opacity:0;position:absolute;padding:0;left:0%;text-align:center}@keyframes fadeOut{0%{opacity:0;bottom:0;transform:translate(0)}70%{opacity:.8;transform:translateY(-50%)}to{opacity:1}}@media screen and (min-width: 375px) and (max-width: 660px){.cardd{width:180px}.price{font-size:small}}@media screen and (min-width: 300px) and (max-width: 374px){.cardd{width:160px}.price{font-size:small}}@media screen and (min-width: 100px) and (max-width: 299px){.cardd{width:140px}.price{font-size:small}}\n"] }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }]; }, { product: [{
            type: Input
        }], appBackImg: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELCtDQUErQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7O0lDVzlCLCtCQUFpTztJQUEvQixzTkFBUyw4QkFBb0IsSUFBQztJQUFDLGlCQUFNOzs7SUFBL0YsdUVBQXlDO0lBQUMsd0NBQWM7OztJQVM1TCxnQ0FBNEk7SUFBQSxZQUEwQjtJQUFBLGlCQUFPOzs7SUFBakMsZUFBMEI7SUFBMUIsZ0VBQTBCOzs7QURaOU0sTUFBTSxPQUFPLG9CQUFvQjtJQWEvQixZQUFvQixLQUFxQixFQUFVLFdBQTRCO1FBQTNELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBWi9FLE1BQUMsR0FBRyxLQUFLLENBQUM7UUFHVixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUVmLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFNcUUsQ0FBQztJQUVwRixLQUFLLENBQUMsUUFBUTtRQUNiLEdBQUc7UUFFRixPQUFP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QztRQUMzQixNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtZQUN0QixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1lBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUE7SUFDTCxDQUFDOzt3RkFuRlksb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNiakIsOEJBQTRCLGFBQUE7UUFHcEIseUJBQThIO1FBRTlILDhCQUFvQixhQUFBO1FBQ0UsNEJBQVk7UUFBQSxpQkFBTSxFQUFBLEVBQUE7UUFPeEMsOEJBQXVFLGFBQUEsYUFBQTtRQUczRCxxRUFBdU87UUFDM08saUJBQU07UUFFTiwrQkFBNEQsY0FBQTtRQUNxQyxhQUFnQjtRQUFBLGlCQUFNLEVBQUE7UUFHdkgsK0JBQTRELGNBQUE7UUFFcEQsMEVBQTZLO1FBQzdLLGlDQUF3QyxnQkFBQTtRQUE0QyxhQUFzQztRQUFBLGlCQUFPLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOztRQXZCNUksZUFBZTtRQUFmLG1EQUFlLG1KQUFBO1FBYTBFLGVBQWE7UUFBYixzQ0FBYTtRQUlGLGVBQWdCO1FBQWhCLHNDQUFnQjtRQUtsRyxlQUEwQjtRQUExQixnREFBMEI7UUFDbUQsZUFBc0M7UUFBdEMsNkVBQXNDOzt1RkRickosb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UsNkJBQTZCOytGQWE5QixPQUFPO2tCQUFmLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllcyAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vL3F1aSBjJ8OoIGlsIGNvbGxlZ2FtZW50byB0cmEgcHJvZHVjdHMgZSBvcmRlcnNcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC1pdGVtLWNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB3ID0gZmFsc2U7XG4gIHVybDtcbiAgaW1nQmxvYjtcbiAgZGlzY291bnQgPSAwO1xuICBmaW5hbFByaWNlID0gMDtcblxuICB2YXJpYW50aSA9IFtdO1xuXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XG5cbiAgQElucHV0KCkgYXBwQmFja0ltZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBwcm9kU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlKSB7IH1cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgIC8vIFxuXG4gICAgY29uc29sZS5sb2coXCJJTU1BR0lORT0gXCIgKyB0aGlzLnByb2R1Y3QuaW1hZ2UpXG5cbiAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLnByb2R1Y3QuaW1hZ2UpO1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgIHRoaXMuaW1nQmxvYiA9IGJhc2U2NGRhdGE7XG4gICAgICAgIHRoaXMuX3JldHJpZXZlUGFyYW0oKTtcbiAgICAgIH1cblxuICAgIHRoaXMuZmluYWxQcmljZSA9IHRoaXMucHJvZHVjdC5wcmljZSAtIHRoaXMucHJvZHVjdC5kaXNjb3VudDtcbiAgICB0aGlzLmRpc2NvdW50ID0gTWF0aC5yb3VuZCggKHRoaXMucHJvZHVjdC5kaXNjb3VudC90aGlzLnByb2R1Y3QucHJpY2UpICAqIDEwMClcblxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQodGhpcy5wcm9kdWN0LnByb2R1Y3RJZCkuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy52YXJpYW50aSA9IHByb2R1Y3RzO1xuXG4gICAgIFxuXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcInByb2RvdHRvID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3QpKVxuXG4gIH1cblxuICBwcml2YXRlIF9yZXRyaWV2ZVBhcmFtKCl7XG4gXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcblxuICAgIGlmICh0aGlzLnVybC52YWx1ZVswXS5wYXRoID09PSAnd29tZW4tcHJvZHVjdHMnKSB7XG4gICAgICB0aGlzLncgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLncpO1xuICAgIFxuXG4gIH1cblxuXG4gIGFzeW5jIGFqYXhHZXRJbWFnZURhdGEodXJsKSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcbiAgICBjb25zdCBpbWFnZUJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG5cbiAgICB0aGlzLmFwcEJhY2tJbWcgPSBpbWFnZUJsb2I7XG4gICAgcmV0dXJuIGltYWdlQmxvYjtcblxuXG4gIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xufVxuXG4gIGFzeW5jIGNoYW5nZUNhcmRWYXJpYW50KHZhcmlhbnQpe1xuY29uc29sZS5sb2coXCJjYW1iaW8gdmFyaWFudGUhXCIpO1xuXG4gICAgdGhpcy5wcm9kdWN0ID0gdmFyaWFudDtcbiAgICB0aGlzLmZpbmFsUHJpY2UgPSB0aGlzLnByb2R1Y3QucHJpY2UgLSB0aGlzLnByb2R1Y3QuZGlzY291bnQ7XG4gICAgdGhpcy5kaXNjb3VudCA9IE1hdGgucm91bmQoICh0aGlzLnByb2R1Y3QuZGlzY291bnQvdGhpcy5wcm9kdWN0LnByaWNlKSAgKiAxMDApXG5cbiAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLnByb2R1Y3QuaW1hZ2UpO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGJhc2U2NGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgdGhpcy5pbWdCbG9iID0gYmFzZTY0ZGF0YTtcbiAgICAgIHRoaXMuX3JldHJpZXZlUGFyYW0oKTtcbiAgICB9XG59XG5cblxuICAvLyBhZGRQcm9kdWN0VG9DYXJ0KCl7XG4gIC8vICAgY29uc3QgY2FydEl0ZW06IENhcnRJdGVtID0ge1xuICAvLyAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3QuaWQsXG4gIC8vICAgICBxdWFudGl0eTogMVxuICAvLyAgIH1cblxuICAvLyAgIHRoaXMuY2FydFNlcnZpY2Uuc2V0Q2FydEl0ZW0oY2FydEl0ZW0pO1xuICAvLyB9XG5cbn1cbiIsIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHAtMSAgY2FyZGRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VjbGFzc1wiICBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJpbWdCbG9iXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5BQ1FVSVNUQSBPUkE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtLTAgY2FyZEZvb3RlclwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIG0tMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDE1cHg7IGhlaWdodDoxNXB4OyAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1wiICAgKm5nRm9yPVwibGV0IGMgb2YgdmFyaWFudGksIGxldCBpID0gaW5kZXhcIiAgY2xhc3M9XCJjb2wtYXV0byBwLTEgbS0xXCIgc3R5bGUuYmFja2dyb3VuZC1jb2xvcj1cInJnYih7e2MuY29sb3J9fSlcIiBpZD1cInt7Yy5faWR9fVwiICAoY2xpY2spPVwiY2hhbmdlQ2FyZFZhcmlhbnQoYylcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtLTBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHAtMFwiIHN0eWxlPVwiIG92ZXJmbG93LXk6IGF1dG87IGZvbnQtc2l6ZTogc21hbGw7ICAgICBtYXgtaGVpZ2h0OiA0MHB4O1wiPnt7cHJvZHVjdC5uYW1lfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtLTBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIHAtMFwiIHN0eWxlPVwiIG92ZXJmbG93LXk6IGF1dG87IGZvbnQtc2l6ZTogc21hbGw7ICAgICBtYXgtaGVpZ2h0OiA0MHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicHJvZHVjdC5kaXNjb3VudCAhPTBcIiBjbGFzcz1cImNvbC02IHByaWNlIHAtMFwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiAgbGluZS10aHJvdWdoOyBmb250LXdlaWdodDogMTAwOyBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XCI+e3twcm9kdWN0LnByaWNlIH194oKsICZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbC02IHBiLTAgbWItMCBwcmljZSBwLTBcIj48c3BhbiBjbGFzcz1cIm1iLTBcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OjkwMDtcIj57e3Byb2R1Y3QucHJpY2UgLSBwcm9kdWN0LmRpc2NvdW50IH194oKsPC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgIFxuICAgICAgIFxuICAgICAgXG5cbiJdfQ==