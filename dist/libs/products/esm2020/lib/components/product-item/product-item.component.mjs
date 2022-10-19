/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//qui c'è il collegamento tra products e orders
import { Product123 } from '../../models/product123';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { "background-image": a0 }; };
function ProductItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    i0.ɵɵelement(5, "div", 6);
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
    i0.ɵɵproperty("routerLink", ctx_r0.w ? i0.ɵɵpureFunction1(11, _c0, "/women-products/" + ctx_r0.product.id) : i0.ɵɵpureFunction1(13, _c0, "/products/" + ctx_r0.product.id))("ngStyle", i0.ɵɵpureFunction1(15, _c1, "url(" + ctx_r0.imgBlob + ")"));
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
        this.appBackImg = imageBlob;
        return imageBlob;
        //Code to get base64 image string
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
ProductItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductItemComponent, selectors: [["eshop-frontend-product-item"]], inputs: { product: "product", appBackImg: "appBackImg" }, decls: 1, vars: 1, consts: [["class", "product-item", "style", "    MAX-WIDTH: 300PX; margin:auto", 3, "routerLink", 4, "ngIf"], [1, "product-item", 2, "max-width", "300PX", "margin", "auto", 3, "routerLink"], [1, "product-item-wrapper"], [1, "grid", 2, "justify-content", "center"], [1, "row", "w-100", 2, "min-height", "200px"], [1, "col", "d-flex", "justify-content-center"], [2, "min-width", "140px", "background-size", "cover", "background-repeat", "no-repeat", "transform", "translateY(-25%)", 3, "routerLink", "ngStyle"], [1, "row", 2, "width", "-webkit-fill-available", "min-height", "100px", "max-height", "100px"], [1, "col-12", "d-flex", "justify-content-center", 2, "text-align", "center"], [1, "name", 2, "text-align", "center"], [1, "row", 2, "width", "-webkit-fill-available", "width", "-webkit-fill-available", "width", "fill-available"], [1, "col-12", "d-flex", "justify-content-center"], [1, "price", 2, "width", "100%", "text-align", "center"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ProductItemComponent_div_0_Template, 15, 17, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i2.NgIf, i1.RouterLink, i2.NgStyle], pipes: [i2.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductItemComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-item', styles: [], template: "<div class=\"product-item\" *ngIf=\"product\" style=\"    MAX-WIDTH: 300PX; margin:auto\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n    <div class=\"product-item-wrapper\">\n        <!-- <img [routerLink]=\"'/products/' + product.id \" [src]=\"product.image\" alt=\"\" class=\"image\"> -->\n        <div class=\"grid\" style=\"justify-content: center;\">\n            <div class=\"row w-100\" style=\"min-height: 200px;\">\n                <div class=\"col d-flex justify-content-center\">\n                <div [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\" [ngStyle]=\"{ 'background-image': 'url(' + imgBlob + ')'}\" style=\" min-width: 140px;\n                background-size: cover;\n                background-repeat: no-repeat;\n                transform: translateY(-25%);\"></div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"width: -webkit-fill-available; min-height: 100px; max-height: 100px;\">\n                <div class=\"col-12 d-flex justify-content-center\" style=\"text-align: center;\">\n                    <p class=\"name\" style=\"text-align: center;\">{{product.name}}</p>\n                </div>\n            </div>\n            <div class=\"row\" style=\"width: -webkit-fill-available;    width: -webkit-fill-available; width: fill-available;\">\n                <div class=\"col-12 d-flex justify-content-center\">\n                        <h5 class=\"price\" style=\"width: 100%; text-align: center;\">{{product.price | currency}}</h5>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }]; }, { product: [{
            type: Input
        }], appBackImg: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELCtDQUErQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7SUNKckQsOEJBQXdLLGFBQUEsYUFBQSxhQUFBLGFBQUE7SUFNeEoseUJBR29DO0lBQ3BDLGlCQUFNLEVBQUE7SUFFViw4QkFBOEYsYUFBQSxXQUFBO0lBRTFDLFlBQWdCO0lBQUEsaUJBQUksRUFBQSxFQUFBO0lBR3hFLGdDQUFpSCxlQUFBLGNBQUE7SUFFMUMsYUFBNEI7O0lBQUEsaUJBQUssRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOzs7SUFuQmhDLHlLQUFtRjtJQU1sSixlQUFtRjtJQUFuRiwyS0FBbUYsdUVBQUE7SUFReEMsZUFBZ0I7SUFBaEIseUNBQWdCO0lBS0csZUFBNEI7SUFBNUIsaUVBQTRCOztBRE4vRyxNQUFNLE9BQU8sb0JBQW9CO0lBUy9CLFlBQW9CLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBUnpDLE1BQUMsR0FBRyxLQUFLLENBQUM7SUFRbUMsQ0FBQztJQUU5QyxLQUFLLENBQUMsUUFBUTtRQUNiLEdBQUc7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRTlDLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQTtJQUdMLENBQUM7SUFFTyxjQUFjO1FBRXBCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7WUFDL0MsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDZjtRQUNELHVCQUF1QjtJQUd6QixDQUFDO0lBR0QsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUc7UUFFeEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxTQUFTLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsT0FBTyxTQUFTLENBQUM7UUFHbkIsaUNBQWlDO0lBQ25DLENBQUM7O3dGQW5EWSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQ2JqQyx1RUF5Qk07O1FBekJxQixrQ0FBYTs7dUZEYTNCLG9CQUFvQjtjQU5oQyxTQUFTOzJCQUNFLDZCQUE2QixVQUUvQixFQUNQO2lFQU9RLE9BQU87a0JBQWYsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vcXVpIGMnw6ggaWwgY29sbGVnYW1lbnRvIHRyYSBwcm9kdWN0cyBlIG9yZGVyc1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB3ID0gZmFsc2U7XG4gIHVybDtcbiAgaW1nQmxvYjtcblxuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuXG4gIEBJbnB1dCgpIGFwcEJhY2tJbWc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgLy8gXG5cbiAgICBjb25zb2xlLmxvZyhcIklNTUFHSU5FPSBcIiArIHRoaXMucHJvZHVjdC5pbWFnZSlcblxuICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMucHJvZHVjdC5pbWFnZSk7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgdGhpcy5pbWdCbG9iID0gYmFzZTY0ZGF0YTtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVQYXJhbSgpO1xuICAgICAgfVxuXG4gICAgXG4gIH1cblxuICBwcml2YXRlIF9yZXRyaWV2ZVBhcmFtKCl7XG4gXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcblxuICAgIGlmICh0aGlzLnVybC52YWx1ZVswXS5wYXRoID09PSAnd29tZW4tcHJvZHVjdHMnKSB7XG4gICAgICB0aGlzLncgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLncpO1xuICAgIFxuXG4gIH1cblxuXG4gIGFzeW5jIGFqYXhHZXRJbWFnZURhdGEodXJsKSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcbiAgICBjb25zdCBpbWFnZUJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG5cbiAgICB0aGlzLmFwcEJhY2tJbWcgPSBpbWFnZUJsb2I7XG4gICAgcmV0dXJuIGltYWdlQmxvYjtcblxuXG4gIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xufVxuXG5cbiAgLy8gYWRkUHJvZHVjdFRvQ2FydCgpe1xuICAvLyAgIGNvbnN0IGNhcnRJdGVtOiBDYXJ0SXRlbSA9IHtcbiAgLy8gICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0LmlkLFxuICAvLyAgICAgcXVhbnRpdHk6IDFcbiAgLy8gICB9XG5cbiAgLy8gICB0aGlzLmNhcnRTZXJ2aWNlLnNldENhcnRJdGVtKGNhcnRJdGVtKTtcbiAgLy8gfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicHJvZHVjdC1pdGVtXCIgKm5nSWY9XCJwcm9kdWN0XCIgc3R5bGU9XCIgICAgTUFYLVdJRFRIOiAzMDBQWDsgbWFyZ2luOmF1dG9cIiBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWl0ZW0td3JhcHBlclwiPlxuICAgICAgICA8IS0tIDxpbWcgW3JvdXRlckxpbmtdPVwiJy9wcm9kdWN0cy8nICsgcHJvZHVjdC5pZCBcIiBbc3JjXT1cInByb2R1Y3QuaW1hZ2VcIiBhbHQ9XCJcIiBjbGFzcz1cImltYWdlXCI+IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiAyMDBweDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBpbWdCbG9iICsgJyknfVwiIHN0eWxlPVwiIG1pbi13aWR0aDogMTQwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUlKTtcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwid2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IG1pbi1oZWlnaHQ6IDEwMHB4OyBtYXgtaGVpZ2h0OiAxMDBweDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPnt7cHJvZHVjdC5uYW1lfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cIndpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgd2lkdGg6IGZpbGwtYXZhaWxhYmxlO1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInByaWNlXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyO1wiPnt7cHJvZHVjdC5wcmljZSB8IGN1cnJlbmN5fX08L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==