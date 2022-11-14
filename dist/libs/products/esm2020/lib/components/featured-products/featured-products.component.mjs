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
export class FeaturedProductsComponent {
    constructor(prodService) {
        this.prodService = prodService;
        this.featuredProducts = [];
        this.endSubs$ = new Subject();
        this.responsiveOptions = [
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
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeaturedProductsComponent, selectors: [["eshop-frontend-featured-products"]], inputs: { brandName: "brandName" }, decls: 2, vars: 6, consts: [[2, "height", "700px", 3, "value", "numVisible", "numScroll", "circular", "responsiveOptions", "autoplayInterval"], ["pTemplate", "item", "style", "height: 300px;"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p-carousel", 0);
        i0.ɵɵtemplate(1, FeaturedProductsComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("value", ctx.featuredProducts)("numVisible", 7)("numScroll", 1)("circular", true)("responsiveOptions", ctx.responsiveOptions)("autoplayInterval", 5000);
    } }, directives: [i2.Carousel, i3.PrimeTemplate, i4.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeaturedProductsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-featured-products', styles: [], template: "\n<p-carousel [value]=\"featuredProducts\" [numVisible]=\"7\" [numScroll]=\"1\" [circular]=\"true\"\n[responsiveOptions]=\"responsiveOptions\" style=\"height:700px\" [autoplayInterval]=\"5000\">\n  <ng-template let-product pTemplate=\"item\" style=\"height: 300px;\">\n    <eshop-frontend-product-item  [product]= 'product'></eshop-frontend-product-item>\n  </ng-template>\n</p-carousel>" }]
    }], function () { return [{ type: i1.ProductsService }]; }, { brandName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7OztJQ0M5RCxpREFBaUY7OztJQUFuRCxvQ0FBb0I7O0FET3RELE1BQU0sT0FBTyx5QkFBeUI7SUFVcEMsWUFBb0IsV0FBNEI7UUFBNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBSmhELHFCQUFnQixHQUFpQixFQUFFLENBQUM7UUFDcEMsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBSXJDLElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUN2QjtnQkFDRSxVQUFVLEVBQUUsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7WUFFRDtnQkFDRSxVQUFVLEVBQUUsT0FBTztnQkFDbkIsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFFOUIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7a0dBdERVLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDVnRDLHFDQUN1RjtRQUNyRiwwRkFFYztRQUNoQixpQkFBYTs7UUFMRCw0Q0FBMEIsaUJBQUEsZ0JBQUEsa0JBQUEsNENBQUEsMEJBQUE7O3VGRFV6Qix5QkFBeUI7Y0FOckMsU0FBUzsyQkFDRSxrQ0FBa0MsVUFFcEMsRUFDUDtrRUFNRCxTQUFTO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLWZlYXR1cmVkLXByb2R1Y3RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXG4gIEBJbnB1dCgpXG4gIGJyYW5kTmFtZTogc3RyaW5nO1xuXG4gIGZlYXR1cmVkUHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBlbmRTdWJzJCA6IFN1YmplY3Q8YW55Pj0gbmV3IFN1YmplY3QoKTtcbiAgcmVzcG9uc2l2ZU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlICkgeyBcbiAgICB0aGlzLnJlc3BvbnNpdmVPcHRpb25zID0gW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnMTM3NHB4JyxcbiAgICAgICAgbnVtVmlzaWJsZTogNSxcbiAgICAgICAgbnVtU2Nyb2xsOiA1LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogJzkxNnB4JyxcbiAgICAgICAgbnVtVmlzaWJsZTogNCxcbiAgICAgICAgbnVtU2Nyb2xsOiA0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogJzc2OHB4JyxcbiAgICAgICAgbnVtVmlzaWJsZTogMyxcbiAgICAgICAgbnVtU2Nyb2xsOiAzLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnNTY4cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiAyLFxuICAgICAgICBudW1TY3JvbGw6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnNDYwcHgnLFxuICAgICAgICBudW1WaXNpYmxlOiAxLFxuICAgICAgICBudW1TY3JvbGw6IDEsXG4gICAgICB9LFxuICAgIF07IFxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZ2V0RmVhdHVyZWRQcm9kdWN0cygpO1xuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEZlYXR1cmVkUHJvZHVjdHMoKXtcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldEZlYXR1cmVkUHJvZHVjdHNCeUJyYW5kKHRoaXMuYnJhbmROYW1lLnRvTG93ZXJDYXNlKCkpLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKS5zdWJzY3JpYmUocHJvZHVjdHMgPT57XG4gICAgICB0aGlzLmZlYXR1cmVkUHJvZHVjdHMgPSBwcm9kdWN0cy5zbGljZSgwLDEwKTtcbiAgICB9KVxuICB9XG5cbn1cbiIsIlxuPHAtY2Fyb3VzZWwgW3ZhbHVlXT1cImZlYXR1cmVkUHJvZHVjdHNcIiBbbnVtVmlzaWJsZV09XCI3XCIgW251bVNjcm9sbF09XCIxXCIgW2NpcmN1bGFyXT1cInRydWVcIlxuW3Jlc3BvbnNpdmVPcHRpb25zXT1cInJlc3BvbnNpdmVPcHRpb25zXCIgc3R5bGU9XCJoZWlnaHQ6NzAwcHhcIiBbYXV0b3BsYXlJbnRlcnZhbF09XCI1MDAwXCI+XG4gIDxuZy10ZW1wbGF0ZSBsZXQtcHJvZHVjdCBwVGVtcGxhdGU9XCJpdGVtXCIgc3R5bGU9XCJoZWlnaHQ6IDMwMHB4O1wiPlxuICAgIDxlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0gIFtwcm9kdWN0XT0gJ3Byb2R1Y3QnPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxuICA8L25nLXRlbXBsYXRlPlxuPC9wLWNhcm91c2VsPiJdfQ==