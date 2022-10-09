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
    i0.ɵɵproperty("routerLink", ctx_r0.w ? i0.ɵɵpureFunction1(11, _c0, "/women-products/" + ctx_r0.product.id) : i0.ɵɵpureFunction1(13, _c0, "/products/" + ctx_r0.product.id))("src", ctx_r0.imgBlob, i0.ɵɵsanitizeUrl);
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
        return imageBlob;
        //Code to get base64 image string
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
        args: [{ selector: 'eshop-frontend-product-item', styles: [], template: "<div class=\"product-item\" *ngIf=\"product\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n    <div class=\"product-item-wrapper\">\n        <!-- <img [routerLink]=\"'/products/' + product.id \" [src]=\"product.image\" alt=\"\" class=\"image\"> -->\n        <div class=\"grid\">\n            <div class=\"row\">\n                <div class=\"col d-flex justify-content-center\">\n                <img [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\" [src]=\"imgBlob\" class=\"image\">\n                </div>\n            </div>\n            <div class=\"row\" style=\"width: -webkit-fill-available; min-height: 100px; max-height: 100px;\">\n                <div class=\"col-12 d-flex justify-content-center\" style=\"text-align: center;\">\n                    <p class=\"name\" style=\"text-align: center;\">{{product.name}}</p>\n                </div>\n            </div>\n            <div class=\"row\" style=\"width: -webkit-fill-available;    width: -webkit-fill-available; width: fill-available;\">\n                <div class=\"col-12 d-flex justify-content-center\">\n                        <h5 class=\"price\" style=\"width: 100%; text-align: center;\">{{product.price | currency}}</h5>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELCtDQUErQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQ0pyRCw4QkFBOEgsYUFBQSxhQUFBLGFBQUEsYUFBQTtJQU05Ryx5QkFBdUg7SUFDdkgsaUJBQU0sRUFBQTtJQUVWLDhCQUE4RixhQUFBLFdBQUE7SUFFMUMsWUFBZ0I7SUFBQSxpQkFBSSxFQUFBLEVBQUE7SUFHeEUsZ0NBQWlILGVBQUEsY0FBQTtJQUUxQyxhQUE0Qjs7SUFBQSxpQkFBSyxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7OztJQWhCMUUseUtBQW1GO0lBTXhHLGVBQW1GO0lBQW5GLDJLQUFtRix5Q0FBQTtJQUt4QyxlQUFnQjtJQUFoQix5Q0FBZ0I7SUFLRyxlQUE0QjtJQUE1QixpRUFBNEI7O0FESC9HLE1BQU0sT0FBTyxvQkFBb0I7SUFPL0IsWUFBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFOekMsTUFBQyxHQUFHLEtBQUssQ0FBQztJQU1tQyxDQUFDO0lBRTlDLEtBQUssQ0FBQyxRQUFRO1FBQ2IsR0FBRztRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFOUMsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFBO0lBR0wsQ0FBQztJQUVPLGNBQWM7UUFFcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtZQUMvQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNmO1FBQ0QsdUJBQXVCO0lBR3pCLENBQUM7SUFHRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRztRQUV4QixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLFNBQVMsR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxPQUFPLFNBQVMsQ0FBQztRQUduQixpQ0FBaUM7SUFFbkMsQ0FBQzs7d0ZBaERZLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDYmpDLHVFQXNCTTs7UUF0QnFCLGtDQUFhOzt1RkRhM0Isb0JBQW9CO2NBTmhDLFNBQVM7MkJBQ0UsNkJBQTZCLFVBRS9CLEVBQ1A7aUVBT1EsT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllcyAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vL3F1aSBjJ8OoIGlsIGNvbGxlZ2FtZW50byB0cmEgcHJvZHVjdHMgZSBvcmRlcnNcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdyA9IGZhbHNlO1xuICB1cmw7XG4gIGltZ0Jsb2I7XG5cbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAvLyBcblxuICAgIGNvbnNvbGUubG9nKFwiSU1NQUdJTkU9IFwiICsgdGhpcy5wcm9kdWN0LmltYWdlKVxuXG4gICAgbGV0IGJsb2IgPSBhd2FpdCB0aGlzLmFqYXhHZXRJbWFnZURhdGEodGhpcy5wcm9kdWN0LmltYWdlKTtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2U2NGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICB0aGlzLmltZ0Jsb2IgPSBiYXNlNjRkYXRhO1xuICAgICAgICB0aGlzLl9yZXRyaWV2ZVBhcmFtKCk7XG4gICAgICB9XG5cbiAgICBcbiAgfVxuXG4gIHByaXZhdGUgX3JldHJpZXZlUGFyYW0oKXtcbiBcbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xuXG4gICAgaWYgKHRoaXMudXJsLnZhbHVlWzBdLnBhdGggPT09ICd3b21lbi1wcm9kdWN0cycpIHtcbiAgICAgIHRoaXMudyA9IHRydWU7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudyk7XG4gICAgXG5cbiAgfVxuXG5cbiAgYXN5bmMgYWpheEdldEltYWdlRGF0YSh1cmwpIHtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7Y2FjaGU6IFwibm8tc3RvcmVcIn0pO1xuICAgIGNvbnN0IGltYWdlQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICByZXR1cm4gaW1hZ2VCbG9iO1xuXG5cbiAgLy9Db2RlIHRvIGdldCBiYXNlNjQgaW1hZ2Ugc3RyaW5nXG5cbn1cbiAgLy8gYWRkUHJvZHVjdFRvQ2FydCgpe1xuICAvLyAgIGNvbnN0IGNhcnRJdGVtOiBDYXJ0SXRlbSA9IHtcbiAgLy8gICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0LmlkLFxuICAvLyAgICAgcXVhbnRpdHk6IDFcbiAgLy8gICB9XG5cbiAgLy8gICB0aGlzLmNhcnRTZXJ2aWNlLnNldENhcnRJdGVtKGNhcnRJdGVtKTtcbiAgLy8gfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtXCIgKm5nSWY9XCJwcm9kdWN0XCIgW3JvdXRlckxpbmtdPVwiIHcgPyBbJy93b21lbi1wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF0gOiBbJy9wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF1cIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtLXdyYXBwZXJcIj5cbiAgICAgICAgPCEtLSA8aW1nIFtyb3V0ZXJMaW5rXT1cIicvcHJvZHVjdHMvJyArIHByb2R1Y3QuaWQgXCIgW3NyY109XCJwcm9kdWN0LmltYWdlXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWFnZVwiPiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiIFtzcmNdPVwiaW1nQmxvYlwiIGNsYXNzPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwid2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IG1pbi1oZWlnaHQ6IDEwMHB4OyBtYXgtaGVpZ2h0OiAxMDBweDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPnt7cHJvZHVjdC5uYW1lfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIndpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgd2lkdGg6IGZpbGwtYXZhaWxhYmxlO1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInByaWNlXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyO1wiPnt7cHJvZHVjdC5wcmljZSB8IGN1cnJlbmN5fX08L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==