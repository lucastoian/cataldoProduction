import { Component, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/products.service";
import * as i2 from "primeng/carousel";
import * as i3 from "primeng/api";
import * as i4 from "../product-item/product-item.component";
function FeaturedProductsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eshop-frontend-product-item", 2);
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    i0.ɵɵproperty("product", product_r1);
} }
const _c0 = function () { return { "height": "600px" }; };
export class FeaturedProductsComponent {
    constructor(prodService) {
        this.prodService = prodService;
        this.featuredProducts = [];
        this.endSubs$ = new Subject();
        this.responsiveOptions = [
            {
                breakpoint: '1874px',
                numVisible: 5,
                numScroll: 5,
            },
            {
                breakpoint: '1374px',
                numVisible: 5,
                numScroll: 5,
            },
            {
                breakpoint: '916px',
                numVisible: 4,
                numScroll: 4,
            },
            {
                breakpoint: '768px',
                numVisible: 3,
                numScroll: 3,
            },
            {
                breakpoint: '568px',
                numVisible: 2,
                numScroll: 2,
            },
            {
                breakpoint: '460px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }
    ngOnInit() {
        this._getFeaturedProducts();
    }
    ngOnDestroy() {
        this.endSubs$.complete();
    }
    _getFeaturedProducts() {
        this.prodService.getFeaturedProductsByBrand(this.brandName.toLowerCase()).pipe(takeUntil(this.endSubs$)).subscribe(products => {
            this.featuredProducts = products.slice(0, 10);
        });
    }
}
FeaturedProductsComponent.ɵfac = function FeaturedProductsComponent_Factory(t) { return new (t || FeaturedProductsComponent)(i0.ɵɵdirectiveInject(i1.ProductsService)); };
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeaturedProductsComponent, selectors: [["eshop-frontend-featured-products"]], inputs: { brandName: "brandName" }, decls: 2, vars: 8, consts: [[3, "value", "numVisible", "numScroll", "circular", "responsiveOptions", "autoplayInterval"], ["pTemplate", "item", 3, "style"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p-carousel", 0);
        i0.ɵɵtemplate(1, FeaturedProductsComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("value", ctx.featuredProducts)("numVisible", 7)("numScroll", 1)("circular", true)("responsiveOptions", ctx.responsiveOptions)("autoplayInterval", 5000);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("style", i0.ɵɵpureFunction0(7, _c0));
    } }, directives: [i2.Carousel, i3.PrimeTemplate, i4.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeaturedProductsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-featured-products', styles: [], template: "\r\n<p-carousel [value]=\"featuredProducts\" [numVisible]=\"7\" [numScroll]=\"1\" [circular]=\"true\"\r\n[responsiveOptions]=\"responsiveOptions\" [autoplayInterval]=\"5000\">\r\n  <ng-template let-product pTemplate=\"item\"  [style]=\"{'height':'600px'}\">\r\n    <eshop-frontend-product-item  [product]= 'product'></eshop-frontend-product-item>\r\n  </ng-template>\r\n</p-carousel> " }]
    }], function () { return [{ type: i1.ProductsService }]; }, { brandName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7OztJQ0M5RCxpREFBaUY7OztJQUFuRCxvQ0FBb0I7OztBRE90RCxNQUFNLE9BQU8seUJBQXlCO0lBVXBDLFlBQW9CLFdBQTRCO1FBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUpoRCxxQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBQ3BDLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUlyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkI7Z0JBQ0UsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7WUFDRDtnQkFDRSxVQUFVLEVBQUUsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7WUFFRDtnQkFDRSxVQUFVLEVBQUUsT0FBTztnQkFDbkIsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFFOUIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7a0dBM0RVLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDVnRDLHFDQUNrRTtRQUNoRSwwRkFFYztRQUNoQixpQkFBYTs7UUFMRCw0Q0FBMEIsaUJBQUEsZ0JBQUEsa0JBQUEsNENBQUEsMEJBQUE7UUFFTyxlQUE0QjtRQUE1QixrREFBNEI7O3VGRFE1RCx5QkFBeUI7Y0FOckMsU0FBUzsyQkFDRSxrQ0FBa0MsVUFFcEMsRUFDUDtrRUFNRCxTQUFTO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcclxuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLWZlYXR1cmVkLXByb2R1Y3RzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVkUHJvZHVjdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cclxuICBASW5wdXQoKVxyXG4gIGJyYW5kTmFtZTogc3RyaW5nO1xyXG5cclxuICBmZWF0dXJlZFByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcclxuICBlbmRTdWJzJCA6IFN1YmplY3Q8YW55Pj0gbmV3IFN1YmplY3QoKTtcclxuICByZXNwb25zaXZlT3B0aW9ucztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlICkgeyBcclxuICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAnMTg3NHB4JyxcclxuICAgICAgICBudW1WaXNpYmxlOiA1LFxyXG4gICAgICAgIG51bVNjcm9sbDogNSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6ICcxMzc0cHgnLFxyXG4gICAgICAgIG51bVZpc2libGU6IDUsXHJcbiAgICAgICAgbnVtU2Nyb2xsOiA1LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogJzkxNnB4JyxcclxuICAgICAgICBudW1WaXNpYmxlOiA0LFxyXG4gICAgICAgIG51bVNjcm9sbDogNCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6ICc3NjhweCcsXHJcbiAgICAgICAgbnVtVmlzaWJsZTogMyxcclxuICAgICAgICBudW1TY3JvbGw6IDMsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogJzU2OHB4JyxcclxuICAgICAgICBudW1WaXNpYmxlOiAyLFxyXG4gICAgICAgIG51bVNjcm9sbDogMixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6ICc0NjBweCcsXHJcbiAgICAgICAgbnVtVmlzaWJsZTogMSxcclxuICAgICAgICBudW1TY3JvbGw6IDEsXHJcbiAgICAgIH0sXHJcbiAgICBdOyBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZ2V0RmVhdHVyZWRQcm9kdWN0cygpO1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmVuZFN1YnMkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRGZWF0dXJlZFByb2R1Y3RzKCl7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldEZlYXR1cmVkUHJvZHVjdHNCeUJyYW5kKHRoaXMuYnJhbmROYW1lLnRvTG93ZXJDYXNlKCkpLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKS5zdWJzY3JpYmUocHJvZHVjdHMgPT57XHJcbiAgICAgIHRoaXMuZmVhdHVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLnNsaWNlKDAsMTApO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcbiIsIlxyXG48cC1jYXJvdXNlbCBbdmFsdWVdPVwiZmVhdHVyZWRQcm9kdWN0c1wiIFtudW1WaXNpYmxlXT1cIjdcIiBbbnVtU2Nyb2xsXT1cIjFcIiBbY2lyY3VsYXJdPVwidHJ1ZVwiXHJcbltyZXNwb25zaXZlT3B0aW9uc109XCJyZXNwb25zaXZlT3B0aW9uc1wiIFthdXRvcGxheUludGVydmFsXT1cIjUwMDBcIj5cclxuICA8bmctdGVtcGxhdGUgbGV0LXByb2R1Y3QgcFRlbXBsYXRlPVwiaXRlbVwiICBbc3R5bGVdPVwieydoZWlnaHQnOic2MDBweCd9XCI+XHJcbiAgICA8ZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtICBbcHJvZHVjdF09ICdwcm9kdWN0Jz48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbT5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L3AtY2Fyb3VzZWw+ICJdfQ==