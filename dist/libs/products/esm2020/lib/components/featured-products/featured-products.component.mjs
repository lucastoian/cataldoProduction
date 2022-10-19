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
                numVisible: 3,
                numScroll: 3,
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '568px',
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
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeaturedProductsComponent, selectors: [["eshop-frontend-featured-products"]], inputs: { brandName: "brandName" }, decls: 2, vars: 6, consts: [[2, "max-height", "300px", 3, "value", "numVisible", "numScroll", "circular", "responsiveOptions", "autoplayInterval"], ["pTemplate", "item"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p-carousel", 0);
        i0.ɵɵtemplate(1, FeaturedProductsComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("value", ctx.featuredProducts)("numVisible", 6)("numScroll", 1)("circular", true)("responsiveOptions", ctx.responsiveOptions)("autoplayInterval", 5000);
    } }, directives: [i2.Carousel, i3.PrimeTemplate, i4.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeaturedProductsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-featured-products', styles: [], template: "\n<p-carousel [value]=\"featuredProducts\" [numVisible]=\"6\" [numScroll]=\"1\" [circular]=\"true\"\n[responsiveOptions]=\"responsiveOptions\" style=\"max-height:300px\" [autoplayInterval]=\"5000\">\n  <ng-template let-product pTemplate=\"item\">\n    <eshop-frontend-product-item  [product]= 'product'></eshop-frontend-product-item>\n  </ng-template>\n</p-carousel>" }]
    }], function () { return [{ type: i1.ProductsService }]; }, { brandName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7OztJQ0M5RCxpREFBaUY7OztJQUFuRCxvQ0FBb0I7O0FET3RELE1BQU0sT0FBTyx5QkFBeUI7SUFVcEMsWUFBb0IsV0FBNEI7UUFBNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBSmhELHFCQUFnQixHQUFpQixFQUFFLENBQUM7UUFDcEMsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBSXJDLElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUN2QjtnQkFDRSxVQUFVLEVBQUUsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiO1lBRUQ7Z0JBQ0UsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUU5QixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1SCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOztrR0E1Q1UseUJBQXlCOzRFQUF6Qix5QkFBeUI7UUNWdEMscUNBQzJGO1FBQ3pGLDBGQUVjO1FBQ2hCLGlCQUFhOztRQUxELDRDQUEwQixpQkFBQSxnQkFBQSxrQkFBQSw0Q0FBQSwwQkFBQTs7dUZEVXpCLHlCQUF5QjtjQU5yQyxTQUFTOzJCQUNFLGtDQUFrQyxVQUVwQyxFQUNQO2tFQU1ELFNBQVM7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtZmVhdHVyZWQtcHJvZHVjdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlZFByb2R1Y3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cbiAgQElucHV0KClcbiAgYnJhbmROYW1lOiBzdHJpbmc7XG5cbiAgZmVhdHVyZWRQcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIGVuZFN1YnMkIDogU3ViamVjdDxhbnk+PSBuZXcgU3ViamVjdCgpO1xuICByZXNwb25zaXZlT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UgKSB7IFxuICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICcxMzc0cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiAzLFxuICAgICAgICBudW1TY3JvbGw6IDMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnNzY4cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiAyLFxuICAgICAgICBudW1TY3JvbGw6IDEsXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICc1NjhweCcsXG4gICAgICAgIG51bVZpc2libGU6IDEsXG4gICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgIH0sXG4gICAgXTsgXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9nZXRGZWF0dXJlZFByb2R1Y3RzKCk7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5lbmRTdWJzJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RmVhdHVyZWRQcm9kdWN0cygpe1xuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0RmVhdHVyZWRQcm9kdWN0c0J5QnJhbmQodGhpcy5icmFuZE5hbWUudG9Mb3dlckNhc2UoKSkucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpLnN1YnNjcmliZShwcm9kdWN0cyA9PntcbiAgICAgIHRoaXMuZmVhdHVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLnNsaWNlKDAsMTApO1xuICAgIH0pXG4gIH1cblxufVxuIiwiXG48cC1jYXJvdXNlbCBbdmFsdWVdPVwiZmVhdHVyZWRQcm9kdWN0c1wiIFtudW1WaXNpYmxlXT1cIjZcIiBbbnVtU2Nyb2xsXT1cIjFcIiBbY2lyY3VsYXJdPVwidHJ1ZVwiXG5bcmVzcG9uc2l2ZU9wdGlvbnNdPVwicmVzcG9uc2l2ZU9wdGlvbnNcIiBzdHlsZT1cIm1heC1oZWlnaHQ6MzAwcHhcIiBbYXV0b3BsYXlJbnRlcnZhbF09XCI1MDAwXCI+XG4gIDxuZy10ZW1wbGF0ZSBsZXQtcHJvZHVjdCBwVGVtcGxhdGU9XCJpdGVtXCI+XG4gICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSAgW3Byb2R1Y3RdPSAncHJvZHVjdCc+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XG4gIDwvbmctdGVtcGxhdGU+XG48L3AtY2Fyb3VzZWw+Il19