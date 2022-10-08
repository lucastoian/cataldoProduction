import { Component } from '@angular/core';
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
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3,
            },
            {
                breakpoint: '768px',
                numVisible: 2,
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
        this.prodService.getFeaturedProducts().pipe(takeUntil(this.endSubs$)).subscribe(products => {
            this.featuredProducts = products;
        });
    }
}
FeaturedProductsComponent.ɵfac = function FeaturedProductsComponent_Factory(t) { return new (t || FeaturedProductsComponent)(i0.ɵɵdirectiveInject(i1.ProductsService)); };
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeaturedProductsComponent, selectors: [["eshop-frontend-featured-products"]], decls: 2, vars: 6, consts: [[3, "value", "numVisible", "numScroll", "circular", "responsiveOptions", "autoplayInterval"], ["pTemplate", "item"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p-carousel", 0);
        i0.ɵɵtemplate(1, FeaturedProductsComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("value", ctx.featuredProducts)("numVisible", 6)("numScroll", 1)("circular", true)("responsiveOptions", ctx.responsiveOptions)("autoplayInterval", 3500);
    } }, directives: [i2.Carousel, i3.PrimeTemplate, i4.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeaturedProductsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-featured-products', styles: [], template: "\n<p-carousel [value]=\"featuredProducts\" [numVisible]=\"6\" [numScroll]=\"1\" [circular]=\"true\"\n[responsiveOptions]=\"responsiveOptions\" [autoplayInterval]=\"3500\">\n  <ng-template let-product pTemplate=\"item\">\n    <eshop-frontend-product-item  [product]= 'product'></eshop-frontend-product-item>\n  </ng-template>\n</p-carousel>" }]
    }], function () { return [{ type: i1.ProductsService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7O0lDQzlELGlEQUFpRjs7O0lBQW5ELG9DQUFvQjs7QURPdEQsTUFBTSxPQUFPLHlCQUF5QjtJQU1wQyxZQUFvQixXQUE0QjtRQUE1QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFKaEQscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUNwQyxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFJckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBQ3ZCO2dCQUNFLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7U0FFRixDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7O2tHQWxDVSx5QkFBeUI7NEVBQXpCLHlCQUF5QjtRQ1Z0QyxxQ0FDa0U7UUFDaEUsMEZBRWM7UUFDaEIsaUJBQWE7O1FBTEQsNENBQTBCLGlCQUFBLGdCQUFBLGtCQUFBLDRDQUFBLDBCQUFBOzt1RkRVekIseUJBQXlCO2NBTnJDLFNBQVM7MkJBQ0Usa0NBQWtDLFVBRXBDLEVBQ1AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtZmVhdHVyZWQtcHJvZHVjdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlZFByb2R1Y3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGZlYXR1cmVkUHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBlbmRTdWJzJCA6IFN1YmplY3Q8YW55Pj0gbmV3IFN1YmplY3QoKTtcbiAgcmVzcG9uc2l2ZU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlICkgeyBcbiAgICB0aGlzLnJlc3BvbnNpdmVPcHRpb25zID0gW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnMTAyNHB4JyxcbiAgICAgICAgbnVtVmlzaWJsZTogMyxcbiAgICAgICAgbnVtU2Nyb2xsOiAzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogJzc2OHB4JyxcbiAgICAgICAgbnVtVmlzaWJsZTogMixcbiAgICAgICAgbnVtU2Nyb2xsOiAxLFxuICAgICAgfSxcblxuICAgIF07IFxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZ2V0RmVhdHVyZWRQcm9kdWN0cygpXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEZlYXR1cmVkUHJvZHVjdHMoKXtcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldEZlYXR1cmVkUHJvZHVjdHMoKS5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSkuc3Vic2NyaWJlKHByb2R1Y3RzID0+e1xuICAgICAgdGhpcy5mZWF0dXJlZFByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgfSlcbiAgfVxuXG59XG4iLCJcbjxwLWNhcm91c2VsIFt2YWx1ZV09XCJmZWF0dXJlZFByb2R1Y3RzXCIgW251bVZpc2libGVdPVwiNlwiIFtudW1TY3JvbGxdPVwiMVwiIFtjaXJjdWxhcl09XCJ0cnVlXCJcbltyZXNwb25zaXZlT3B0aW9uc109XCJyZXNwb25zaXZlT3B0aW9uc1wiIFthdXRvcGxheUludGVydmFsXT1cIjM1MDBcIj5cbiAgPG5nLXRlbXBsYXRlIGxldC1wcm9kdWN0IHBUZW1wbGF0ZT1cIml0ZW1cIj5cbiAgICA8ZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtICBbcHJvZHVjdF09ICdwcm9kdWN0Jz48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbT5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvcC1jYXJvdXNlbD4iXX0=