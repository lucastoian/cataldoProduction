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
    i0.ɵɵelementStart(0, "div", 13);
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
    i0.ɵɵelementStart(0, "span", 14);
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
            this.varianti.reverse();
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
ProductItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductItemComponent, selectors: [["eshop-frontend-product-item"]], inputs: { product: "product", appBackImg: "appBackImg" }, decls: 19, vars: 5, consts: [[1, "col", "p-1", "cardd"], [1, "imageclass", 2, "position", "relative"], [2, "width", "100%", 3, "src", "click"], [1, "middle"], [1, "text"], [1, "row", "w-100", "m-0", "cardFooter", 2, "justify-content", "center"], [1, "col-12"], [1, "row", "w-100", "m-0", 2, "justify-content", "center"], ["style", "width: 15px; height:15px;  mix-blend-mode: multiply;", "class", "col-auto p-1 m-1", 3, "ngClass", "background-color", "id", "click", 4, "ngFor", "ngForOf"], [1, "col-auto", "p-0", 2, "overflow-y", "auto", "font-size", "small", "max-height", "40px"], ["class", "col-6 price p-0", "style", "text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);", 4, "ngIf"], [1, "col-6", "pb-0", "mb-0", "price", "p-0"], [1, "mb-0", 2, "font-weight", "900"], [1, "col-auto", "p-1", "m-1", 2, "width", "15px", "height", "15px", "mix-blend-mode", "multiply", 3, "ngClass", "id", "click"], [1, "col-6", "price", "p-0", 2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(255, 0, 0)"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "img", 2);
        i0.ɵɵlistener("click", function ProductItemComponent_Template_img_click_2_listener() { return ctx.navigateTo(ctx.product.id); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
        i0.ɵɵtext(5, "ACQUISTA ORA");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        i0.ɵɵtemplate(9, ProductItemComponent_div_9_Template, 1, 7, "div", 8);
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
        i0.ɵɵproperty("src", ctx.imgBlob, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.varianti);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.product.name);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.product.discount != 0);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", ctx.product.price - ctx.product.discount, "\u20AC");
    } }, directives: [i3.NgForOf, i3.NgClass, i3.NgIf], styles: [".productCard[_ngcontent-%COMP%]{width:200px}.cardd[_ngcontent-%COMP%]{width:320px}.selected[_ngcontent-%COMP%]{background-color:#add8e6;outline:dashed;outline-offset:1px}.cardd[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(50%)}.cardd[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%]{opacity:1;animation-duration:1s;animation-iteration-count:1;bottom:10%;animation-name:fadeOut}.cardd[_ngcontent-%COMP%]:hover   .cardFooter[_ngcontent-%COMP%]{background-color:#0002}.text[_ngcontent-%COMP%]{color:#fff;font-size:16px;position:absolute;bottom:20%;height:-moz-fit-content;height:fit-content;font-weight:700}.middle[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#000000ea;height:40px;width:100%;opacity:0;position:absolute;padding:0;left:0%;text-align:center}@keyframes fadeOut{0%{opacity:0;bottom:0;transform:translate(0)}70%{opacity:.8;transform:translateY(-50%)}to{opacity:1}}@media screen and (min-width: 375px) and (max-width: 660px){.cardd[_ngcontent-%COMP%]{max-width:320px;min-width:300px;width:100%}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 300px) and (max-width: 374px){.cardd[_ngcontent-%COMP%]{max-width:290px;min-width:270px;width:100%}.price[_ngcontent-%COMP%]{font-size:small}}@media screen and (min-width: 100px) and (max-width: 299px){.cardd[_ngcontent-%COMP%]{width:140px}.price[_ngcontent-%COMP%]{font-size:small}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductItemComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-item', template: "                <div class=\"col p-1  cardd\">\n\n                    <div class=\"imageclass\"  style=\"position: relative;\">\n                        <img [src]=\"imgBlob\" style=\"width: 100%;\" (click)=\"navigateTo(product.id)\">\n\n                        <div class=\"middle\">\n                            <div class=\"text\">ACQUISTA ORA</div>\n                        </div>\n    \n                  \n                    </div>\n    \n          \n                        <div class=\"row w-100 m-0 cardFooter\" style=\"justify-content: center;\">\n                            <div class=\"col-12\">\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div style=\"width: 15px; height:15px;  mix-blend-mode: multiply;\"  [ngClass]=\"{selected: clickedIndex === i}\"  *ngFor=\"let c of varianti, let i = index\"  class=\"col-auto p-1 m-1\" style.background-color=\"rgb({{c.color}})\" id=\"{{c._id}}\"  (click)=\"changeCardVariant(c, i)\"></div>\n                                </div>\n\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div class=\"col-auto p-0\" style=\" overflow-y: auto; font-size: small;     max-height: 40px;\">{{product.name}}</div>\n                                </div>\n\n                                <div class=\"row w-100 m-0\" style=\"justify-content: center;\">\n                                    <div class=\"col-auto p-0\" style=\" overflow-y: auto; font-size: small;     max-height: 40px;\">\n                                        <span *ngIf=\"product.discount !=0\" class=\"col-6 price p-0\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);\">{{product.price }}\u20AC &nbsp;</span>\n                                        <span class=\"col-6 pb-0 mb-0 price p-0\"><span class=\"mb-0\" style=\"font-weight:900;\">{{product.price - product.discount }}\u20AC</span></span>\n                                       \n                                    </div>\n                                </div>\n                            </div>\n                        </div>             \n                </div>\n\n           \n       \n      \n\n", styles: [".productCard{width:200px}.cardd{width:320px}.selected{background-color:#add8e6;outline:dashed;outline-offset:1px}.cardd:hover img{filter:brightness(50%)}.cardd:hover .middle{opacity:1;animation-duration:1s;animation-iteration-count:1;bottom:10%;animation-name:fadeOut}.cardd:hover .cardFooter{background-color:#0002}.text{color:#fff;font-size:16px;position:absolute;bottom:20%;height:-moz-fit-content;height:fit-content;font-weight:700}.middle{display:flex;justify-content:center;background-color:#000000ea;height:40px;width:100%;opacity:0;position:absolute;padding:0;left:0%;text-align:center}@keyframes fadeOut{0%{opacity:0;bottom:0;transform:translate(0)}70%{opacity:.8;transform:translateY(-50%)}to{opacity:1}}@media screen and (min-width: 375px) and (max-width: 660px){.cardd{max-width:320px;min-width:300px;width:100%}.price{font-size:small}}@media screen and (min-width: 300px) and (max-width: 374px){.cardd{max-width:290px;min-width:270px;width:100%}.price{font-size:small}}@media screen and (min-width: 100px) and (max-width: 299px){.cardd{width:140px}.price{font-size:small}}\n"] }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i1.Router }]; }, { product: [{
            type: Input
        }], appBackImg: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSwrQ0FBK0M7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7SUNXOUIsK0JBQStRO0lBQWxDLHNQQUFTLG9DQUF1QixJQUFDO0lBQUMsaUJBQU07Ozs7O0lBQWxHLHVFQUF5QztJQUFDLHdDQUFjO0lBQXhLLGtGQUEwQzs7O0lBU3pHLGdDQUE0STtJQUFBLFlBQTBCO0lBQUEsaUJBQU87OztJQUFqQyxlQUEwQjtJQUExQixnRUFBMEI7O0FEWjlNLE1BQU0sT0FBTyxvQkFBb0I7SUFlL0IsWUFBb0IsS0FBcUIsRUFBVSxXQUE0QixFQUFVLE1BQWE7UUFBbEYsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBZHRHLE1BQUMsR0FBRyxLQUFLLENBQUM7UUFHVixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUVmLGlCQUFZLEdBQUcs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ckosb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UsNkJBQTZCO29IQWU5QixPQUFPO2tCQUFmLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllcyAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBSb3V0ZXJMaW5rIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vcXVpIGMnw6ggaWwgY29sbGVnYW1lbnRvIHRyYSBwcm9kdWN0cyBlIG9yZGVyc1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWl0ZW0tY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHcgPSBmYWxzZTtcbiAgdXJsO1xuICBpbWdCbG9iO1xuICBkaXNjb3VudCA9IDA7XG4gIGZpbmFsUHJpY2UgPSAwO1xuXG4gIGNsaWNrZWRJbmRleCA9IDA7XG5cbiAgdmFyaWFudGkgPSBbXTtcblxuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuXG4gIEBJbnB1dCgpIGFwcEJhY2tJbWc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcHJvZFNlcnZpY2U6IFByb2R1Y3RzU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7IH1cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgIC8vIFxuXG4gICAgLy9jb25zb2xlLmxvZyhcIklNTUFHSU5FPSBcIiArIHRoaXMucHJvZHVjdC5pbWFnZSlcblxuICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMucHJvZHVjdC5pbWFnZSk7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgdGhpcy5pbWdCbG9iID0gYmFzZTY0ZGF0YTtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVQYXJhbSgpO1xuICAgICAgfVxuXG4gICAgdGhpcy5maW5hbFByaWNlID0gdGhpcy5wcm9kdWN0LnByaWNlIC0gdGhpcy5wcm9kdWN0LmRpc2NvdW50O1xuICAgIHRoaXMuZGlzY291bnQgPSBNYXRoLnJvdW5kKCAodGhpcy5wcm9kdWN0LmRpc2NvdW50L3RoaXMucHJvZHVjdC5wcmljZSkgICogMTAwKVxuXG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlJZCh0aGlzLnByb2R1Y3QucHJvZHVjdElkKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XG4gICAgICB0aGlzLnZhcmlhbnRpID0gcHJvZHVjdHM7XG4gICAgICB0aGlzLnZhcmlhbnRpLnJldmVyc2UoKTtcblxuICAgICBcblxuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcInByb2RvdHRvID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3QpKVxuXG4gIH1cblxuICBwcml2YXRlIF9yZXRyaWV2ZVBhcmFtKCl7XG4gXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcblxuICAgIGlmICh0aGlzLnVybC52YWx1ZVswXS5wYXRoID09PSAnd29tZW4tcHJvZHVjdHMnKSB7XG4gICAgICB0aGlzLncgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLncpO1xuICAgIFxuXG4gIH1cblxuXG4gIGFzeW5jIGFqYXhHZXRJbWFnZURhdGEodXJsKSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcbiAgICBjb25zdCBpbWFnZUJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG5cbiAgICB0aGlzLmFwcEJhY2tJbWcgPSBpbWFnZUJsb2I7XG4gICAgcmV0dXJuIGltYWdlQmxvYjtcblxuXG4gIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xufVxuXG4gIGFzeW5jIGNoYW5nZUNhcmRWYXJpYW50KHZhcmlhbnQsIGluZGV4KXtcbiAgICB0aGlzLmNsaWNrZWRJbmRleCA9IGluZGV4O1xuY29uc29sZS5sb2coXCJjYW1iaW8gdmFyaWFudGUhXCIpO1xuXG4gICAgdGhpcy5wcm9kdWN0ID0gdmFyaWFudDtcbiAgICB0aGlzLmZpbmFsUHJpY2UgPSB0aGlzLnByb2R1Y3QucHJpY2UgLSB0aGlzLnByb2R1Y3QuZGlzY291bnQ7XG4gICAgdGhpcy5kaXNjb3VudCA9IE1hdGgucm91bmQoICh0aGlzLnByb2R1Y3QuZGlzY291bnQvdGhpcy5wcm9kdWN0LnByaWNlKSAgKiAxMDApXG5cbiAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLnByb2R1Y3QuaW1hZ2UpO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGJhc2U2NGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgdGhpcy5pbWdCbG9iID0gYmFzZTY0ZGF0YTtcbiAgICAgIHRoaXMuX3JldHJpZXZlUGFyYW0oKTtcbiAgICB9XG59XG5cblxubmF2aWdhdGVUbyhpZCl7XG4gIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3Byb2R1Y3RzLycgKyBpZF0pO1xuICB9KTtcbn1cblxuXG4gIC8vIGFkZFByb2R1Y3RUb0NhcnQoKXtcbiAgLy8gICBjb25zdCBjYXJ0SXRlbTogQ2FydEl0ZW0gPSB7XG4gIC8vICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvZHVjdC5pZCxcbiAgLy8gICAgIHF1YW50aXR5OiAxXG4gIC8vICAgfVxuXG4gIC8vICAgdGhpcy5jYXJ0U2VydmljZS5zZXRDYXJ0SXRlbShjYXJ0SXRlbSk7XG4gIC8vIH1cblxufVxuIiwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcC0xICBjYXJkZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZWNsYXNzXCIgIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cImltZ0Jsb2JcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiIChjbGljayk9XCJuYXZpZ2F0ZVRvKHByb2R1Y3QuaWQpXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPkFDUVVJU1RBIE9SQTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIG0tMCBjYXJkRm9vdGVyXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDAgbS0wXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTVweDsgaGVpZ2h0OjE1cHg7ICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XCIgIFtuZ0NsYXNzXT1cIntzZWxlY3RlZDogY2xpY2tlZEluZGV4ID09PSBpfVwiICAqbmdGb3I9XCJsZXQgYyBvZiB2YXJpYW50aSwgbGV0IGkgPSBpbmRleFwiICBjbGFzcz1cImNvbC1hdXRvIHAtMSBtLTFcIiBzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yPVwicmdiKHt7Yy5jb2xvcn19KVwiIGlkPVwie3tjLl9pZH19XCIgIChjbGljayk9XCJjaGFuZ2VDYXJkVmFyaWFudChjLCBpKVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIG0tMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcC0wXCIgc3R5bGU9XCIgb3ZlcmZsb3cteTogYXV0bzsgZm9udC1zaXplOiBzbWFsbDsgICAgIG1heC1oZWlnaHQ6IDQwcHg7XCI+e3twcm9kdWN0Lm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIG0tMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcC0wXCIgc3R5bGU9XCIgb3ZlcmZsb3cteTogYXV0bzsgZm9udC1zaXplOiBzbWFsbDsgICAgIG1heC1oZWlnaHQ6IDQwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJwcm9kdWN0LmRpc2NvdW50ICE9MFwiIGNsYXNzPVwiY29sLTYgcHJpY2UgcC0wXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246ICBsaW5lLXRocm91Z2g7IGZvbnQtd2VpZ2h0OiAxMDA7IGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcIj57e3Byb2R1Y3QucHJpY2UgfX3igqwgJm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sLTYgcGItMCBtYi0wIHByaWNlIHAtMFwiPjxzcGFuIGNsYXNzPVwibWItMFwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6OTAwO1wiPnt7cHJvZHVjdC5wcmljZSAtIHByb2R1Y3QuZGlzY291bnQgfX3igqw8L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgXG4gICAgICAgXG4gICAgICBcblxuIl19