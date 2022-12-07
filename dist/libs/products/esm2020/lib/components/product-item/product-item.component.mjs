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
const _c0 = function (a0) { return { selected: a0 }; };
function ProductItemComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("click", function ProductItemComponent_div_9_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const c_r2 = restoredCtx.$implicit; const i_r3 = restoredCtx.index; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.changeCardVariant(c_r2, i_r3); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstylePropInterpolate1("background-color", "rgb(", c_r2.color, ")");
    i0.ɵɵpropertyInterpolate("id", c_r2._id);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, ctx_r0.clickedIndex === i_r3));
} }
function ProductItemComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r1.product.price, "\u20AC \u00A0");
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
    navigateTo(id) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['products/' + id]);
        });
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ProductsService), i0.ɵɵdirectiveInject(i1.Router)); };
ProductItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductItemComponent, selectors: [["eshop-frontend-product-item"]], inputs: { product: "product", appBackImg: "appBackImg" }, decls: 19, vars: 5, consts: [[1, "col", "m-1", "cardd"], [1, "imageclass", 2, "position", "relative"], [1, "cardd", 3, "src", "click"], [1, "middle"], [1, "text"], [1, "row", "w-100", "m-0", "cardFooter", 2, "justify-content", "center"], [1, "col-12"], [1, "row", "w-100", "m-0", 2, "justify-content", "center"], ["style", "width: 15px; height:15px;  mix-blend-mode: multiply;", "class", "col-auto p-1 m-1", 3, "ngClass", "background-color", "id", "click", 4, "ngFor", "ngForOf"], [1, "row", "w-100", "m-0", "p-1", 2, "justify-content", "center"], [1, "col-auto", "p-0", 2, "overflow-y", "auto", "font-size", "small", "max-height", "40px"], ["class", "col-6 price p-0", "style", "text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);", 4, "ngIf"], [1, "col-6", "pb-0", "mb-0", "price", "p-0"], [1, "mb-0", 2, "font-weight", "900"], [1, "col-auto", "p-1", "m-1", 2, "width", "15px", "height", "15px", "mix-blend-mode", "multiply", 3, "ngClass", "id", "click"], [1, "col-6", "price", "p-0", 2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(255, 0, 0)"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "img", 2);
        i0.ɵɵlistener("click", function ProductItemComponent_Template_img_click_2_listener() { return ctx.navigateTo(ctx.product.id); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
        i0.ɵɵtext(5, "ACQUISTA ORA");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        i0.ɵɵtemplate(9, ProductItemComponent_div_9_Template, 1, 7, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 9)(11, "div", 10);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(13, "div", 7)(14, "div", 10);
        i0.ɵɵtemplate(15, ProductItemComponent_span_15_Template, 2, 1, "span", 11);
        i0.ɵɵelementStart(16, "span", 12)(17, "span", 13);
        i0.ɵɵtext(18);
        i0.ɵɵelementEnd()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.imgBlob, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.varianti);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.product.name);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.product.discount != 0);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", ctx.product.price - ctx.product.discount, "\u20AC");
    } }, directives: [i3.NgForOf, i3.NgClass, i3.NgIf], styles: [".productCard[_ngcontent-%COMP%]{width:200px}.cardd[_ngcontent-%COMP%]{width:300px}.imageclass[_ngcontent-%COMP%], .cardFooter[_ngcontent-%COMP%]{min-width:300px}.selected[_ngcontent-%COMP%]{background-color:#add8e6;outline-offset:1px;outline-style:solid;outline-color:#000}.cardd[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(70%)}.cardd[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%]{opacity:1;animation-duration:1s;animation-iteration-count:1;bottom:10%;animation-name:fadeOut}.cardd[_ngcontent-%COMP%]:hover   .cardFooter[_ngcontent-%COMP%]{background-color:#0002}.text[_ngcontent-%COMP%]{color:#fff;font-size:16px;position:absolute;bottom:20%;height:-moz-fit-content;height:fit-content;font-weight:700}.middle[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#000000ea;height:40px;width:100%;opacity:0;position:absolute;padding:0;left:0%;transform:translateY(110%);text-align:center}@keyframes fadeOut{0%{opacity:0;bottom:0;transform:translate(0)}30%{opacity:.8;transform:translateY(-10%)}to{opacity:1}}@media screen and (min-width: 430px) and (max-width: 660px){.cardd[_ngcontent-%COMP%]{width:300px}}@media screen and (min-width: 376px) and (max-width: 429px){.cardd[_ngcontent-%COMP%]{width:230px;padding:0!important}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 340px) and (max-width: 375px){.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 300px) and (max-width: 339px){.cardd[_ngcontent-%COMP%]{width:230px}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 100px) and (max-width: 299px){.cardd[_ngcontent-%COMP%]{width:140px}.price[_ngcontent-%COMP%]{font-size:small}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductItemComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-item', template: "                <div class=\"col m-1  cardd\">\n\n                    <div class=\"imageclass\"  style=\"position: relative;\">\n                        <img [src]=\"imgBlob\" class=\"cardd\" (click) = \"navigateTo(product.id)\">\n\n                        <div class=\"middle\">\n                            <div class=\"text\">ACQUISTA ORA</div>\n                        </div>\n    \n                  \n                    </div>\n    \n          \n                        <div class=\"row w-100 m-0 cardFooter\" style=\"justify-content: center;\">\n                            <div class=\"col-12\">\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div style=\"width: 15px; height:15px;  mix-blend-mode: multiply;\"  [ngClass]=\"{selected: clickedIndex === i}\"  *ngFor=\"let c of varianti, let i = index\"  class=\"col-auto p-1 m-1\" style.background-color=\"rgb({{c.color}})\" id=\"{{c._id}}\"  (click)=\"changeCardVariant(c, i)\"></div>\n                                </div>\n\n                                <div class=\"row w-100 m-0 p-1\" style=\"justify-content: center;\">\n                                    <div class=\"col-auto p-0\" style=\" overflow-y: auto; font-size: small;     max-height: 40px;\">{{product.name}}</div>\n                                </div>\n\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div class=\"col-auto p-0\" style=\" overflow-y: auto; font-size: small;     max-height: 40px;\">\n                                        <span *ngIf=\"product.discount !=0\" class=\"col-6 price p-0\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);\">{{product.price }}\u20AC &nbsp;</span>\n                                        <span class=\"col-6 pb-0 mb-0 price p-0\"><span class=\"mb-0\" style=\"font-weight:900;\">{{product.price - product.discount }}\u20AC</span></span>\n                                       \n                                    </div>\n                                </div>\n                            </div>\n                        </div>             \n                </div>\n\n           \n       \n      \n\n", styles: [".productCard{width:200px}.cardd{width:300px}.imageclass,.cardFooter{min-width:300px}.selected{background-color:#add8e6;outline-offset:1px;outline-style:solid;outline-color:#000}.cardd:hover img{filter:brightness(70%)}.cardd:hover .middle{opacity:1;animation-duration:1s;animation-iteration-count:1;bottom:10%;animation-name:fadeOut}.cardd:hover .cardFooter{background-color:#0002}.text{color:#fff;font-size:16px;position:absolute;bottom:20%;height:-moz-fit-content;height:fit-content;font-weight:700}.middle{display:flex;justify-content:center;background-color:#000000ea;height:40px;width:100%;opacity:0;position:absolute;padding:0;left:0%;transform:translateY(110%);text-align:center}@keyframes fadeOut{0%{opacity:0;bottom:0;transform:translate(0)}30%{opacity:.8;transform:translateY(-10%)}to{opacity:1}}@media screen and (min-width: 430px) and (max-width: 660px){.cardd{width:300px}}@media screen and (min-width: 376px) and (max-width: 429px){.cardd{width:230px;padding:0!important}.price{font-size:small}}@media screen and (min-width: 340px) and (max-width: 375px){.price{font-size:small}}@media screen and (min-width: 300px) and (max-width: 339px){.cardd{width:230px}.price{font-size:small}}@media screen and (min-width: 100px) and (max-width: 299px){.cardd{width:140px}.price{font-size:small}}\n"] }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i1.Router }]; }, { product: [{
            type: Input
        }], appBackImg: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCwrQ0FBK0M7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7SUNXOUIsK0JBQStRO0lBQWxDLHNQQUFTLG9DQUF1QixJQUFDO0lBQUMsaUJBQU07Ozs7O0lBQWxHLHVFQUF5QztJQUFDLHdDQUFjO0lBQXhLLGtGQUEwQzs7O0lBU3pHLGdDQUE0STtJQUFBLFlBQTBCO0lBQUEsaUJBQU87OztJQUFqQyxlQUEwQjtJQUExQixnRUFBMEI7O0FEWjlNLE1BQU0sT0FBTyxvQkFBb0I7SUFlL0IsWUFBb0IsS0FBcUIsRUFBVSxXQUE0QixFQUFVLE1BQWE7UUFBbEYsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBZHRHLE1BQUMsR0FBRyxLQUFLLENBQUM7UUFHVixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUVmLGlCQUFZLEdBQUcs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QUE2QjtvSEFlOUIsT0FBTztrQkFBZixLQUFLO1lBRUcsVUFBVTtrQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXMgKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vL3F1aSBjJ8OoIGlsIGNvbGxlZ2FtZW50byB0cmEgcHJvZHVjdHMgZSBvcmRlcnNcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC1pdGVtLWNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB3ID0gZmFsc2U7XG4gIHVybDtcbiAgaW1nQmxvYjtcbiAgZGlzY291bnQgPSAwO1xuICBmaW5hbFByaWNlID0gMDtcblxuICBjbGlja2VkSW5kZXggPSAwO1xuXG4gIHZhcmlhbnRpID0gW107XG5cbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcblxuICBASW5wdXQoKSBhcHBCYWNrSW1nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOlJvdXRlcikgeyB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAvLyBcblxuICAgIC8vY29uc29sZS5sb2coXCJJTU1BR0lORT0gXCIgKyB0aGlzLnByb2R1Y3QuaW1hZ2UpXG5cbiAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLnByb2R1Y3QuaW1hZ2UpO1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgIHRoaXMuaW1nQmxvYiA9IGJhc2U2NGRhdGE7XG4gICAgICAgIHRoaXMuX3JldHJpZXZlUGFyYW0oKTtcbiAgICAgIH1cblxuICAgIHRoaXMuZmluYWxQcmljZSA9IHRoaXMucHJvZHVjdC5wcmljZSAtIHRoaXMucHJvZHVjdC5kaXNjb3VudDtcbiAgICB0aGlzLmRpc2NvdW50ID0gTWF0aC5yb3VuZCggKHRoaXMucHJvZHVjdC5kaXNjb3VudC90aGlzLnByb2R1Y3QucHJpY2UpICAqIDEwMClcblxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQodGhpcy5wcm9kdWN0LnByb2R1Y3RJZCkuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy52YXJpYW50aSA9IHByb2R1Y3RzO1xuICAgLy8gICB0aGlzLnZhcmlhbnRpLnJldmVyc2UoKTtcblxuICAgICBcblxuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcInByb2RvdHRvID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3QpKVxuXG4gIH1cblxuICBwcml2YXRlIF9yZXRyaWV2ZVBhcmFtKCl7XG4gXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcblxuICAgIGlmICh0aGlzLnVybC52YWx1ZVswXS5wYXRoID09PSAnd29tZW4tcHJvZHVjdHMnKSB7XG4gICAgICB0aGlzLncgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLncpO1xuICAgIFxuXG4gIH1cblxuXG4gIGFzeW5jIGFqYXhHZXRJbWFnZURhdGEodXJsKSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcbiAgICBjb25zdCBpbWFnZUJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG5cbiAgICB0aGlzLmFwcEJhY2tJbWcgPSBpbWFnZUJsb2I7XG4gICAgcmV0dXJuIGltYWdlQmxvYjtcblxuXG4gIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xufVxuXG4gIGFzeW5jIGNoYW5nZUNhcmRWYXJpYW50KHZhcmlhbnQsIGluZGV4KXtcbiAgICB0aGlzLmNsaWNrZWRJbmRleCA9IGluZGV4O1xuY29uc29sZS5sb2coXCJjYW1iaW8gdmFyaWFudGUhXCIpO1xuXG4gICAgdGhpcy5wcm9kdWN0ID0gdmFyaWFudDtcbiAgICB0aGlzLmZpbmFsUHJpY2UgPSB0aGlzLnByb2R1Y3QucHJpY2UgLSB0aGlzLnByb2R1Y3QuZGlzY291bnQ7XG4gICAgdGhpcy5kaXNjb3VudCA9IE1hdGgucm91bmQoICh0aGlzLnByb2R1Y3QuZGlzY291bnQvdGhpcy5wcm9kdWN0LnByaWNlKSAgKiAxMDApXG5cbiAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLnByb2R1Y3QuaW1hZ2UpO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGJhc2U2NGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgdGhpcy5pbWdCbG9iID0gYmFzZTY0ZGF0YTtcbiAgICAgIHRoaXMuX3JldHJpZXZlUGFyYW0oKTtcbiAgICB9XG59XG5cblxubmF2aWdhdGVUbyhpZCl7XG4gIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3Byb2R1Y3RzLycgKyBpZF0pO1xuICB9KTtcbn1cblxuICAvLyBhZGRQcm9kdWN0VG9DYXJ0KCl7XG4gIC8vICAgY29uc3QgY2FydEl0ZW06IENhcnRJdGVtID0ge1xuICAvLyAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3QuaWQsXG4gIC8vICAgICBxdWFudGl0eTogMVxuICAvLyAgIH1cblxuICAvLyAgIHRoaXMuY2FydFNlcnZpY2Uuc2V0Q2FydEl0ZW0oY2FydEl0ZW0pO1xuICAvLyB9XG5cbn1cbiIsIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG0tMSAgY2FyZGRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VjbGFzc1wiICBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJpbWdCbG9iXCIgY2xhc3M9XCJjYXJkZFwiIChjbGljaykgPSBcIm5hdmlnYXRlVG8ocHJvZHVjdC5pZClcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+QUNRVUlTVEEgT1JBPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDAgbS0wIGNhcmRGb290ZXJcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtLTBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxNXB4OyBoZWlnaHQ6MTVweDsgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcIiAgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiBjbGlja2VkSW5kZXggPT09IGl9XCIgICpuZ0Zvcj1cImxldCBjIG9mIHZhcmlhbnRpLCBsZXQgaSA9IGluZGV4XCIgIGNsYXNzPVwiY29sLWF1dG8gcC0xIG0tMVwiIHN0eWxlLmJhY2tncm91bmQtY29sb3I9XCJyZ2Ioe3tjLmNvbG9yfX0pXCIgaWQ9XCJ7e2MuX2lkfX1cIiAgKGNsaWNrKT1cImNoYW5nZUNhcmRWYXJpYW50KGMsIGkpXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDAgbS0wIHAtMVwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcC0wXCIgc3R5bGU9XCIgb3ZlcmZsb3cteTogYXV0bzsgZm9udC1zaXplOiBzbWFsbDsgICAgIG1heC1oZWlnaHQ6IDQwcHg7XCI+e3twcm9kdWN0Lm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIG0tMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcC0wXCIgc3R5bGU9XCIgb3ZlcmZsb3cteTogYXV0bzsgZm9udC1zaXplOiBzbWFsbDsgICAgIG1heC1oZWlnaHQ6IDQwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJwcm9kdWN0LmRpc2NvdW50ICE9MFwiIGNsYXNzPVwiY29sLTYgcHJpY2UgcC0wXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246ICBsaW5lLXRocm91Z2g7IGZvbnQtd2VpZ2h0OiAxMDA7IGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcIj57e3Byb2R1Y3QucHJpY2UgfX3igqwgJm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sLTYgcGItMCBtYi0wIHByaWNlIHAtMFwiPjxzcGFuIGNsYXNzPVwibWItMFwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6OTAwO1wiPnt7cHJvZHVjdC5wcmljZSAtIHByb2R1Y3QuZGlzY291bnQgfX3igqw8L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgXG4gICAgICAgXG4gICAgICBcblxuIl19