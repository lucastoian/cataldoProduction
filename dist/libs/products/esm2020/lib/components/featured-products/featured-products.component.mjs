import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/products.service";
import * as i2 from "@angular/common";
import * as i3 from "../product-item/product-item.component";
function FeaturedProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "eshop-frontend-product-item", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("product", product_r1);
} }
export class FeaturedProductsComponent {
    constructor(prodService) {
        this.prodService = prodService;
        this.featuredProducts = [];
        this.endSubs$ = new Subject();
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
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeaturedProductsComponent, selectors: [["eshop-frontend-featured-products"]], decls: 5, vars: 1, consts: [[1, "featured-products"], [1, "grid"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h3");
        i0.ɵɵtext(2, "Featured Products");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵtemplate(4, FeaturedProductsComponent_div_4_Template, 2, 1, "div", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.featuredProducts);
    } }, directives: [i2.NgForOf, i3.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeaturedProductsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-featured-products', styles: [], template: "<div class=\"featured-products\">\r\n    <h3>Featured Products</h3>\r\n    <div class=\"grid\">\r\n        <div class=\"col-3\" *ngFor=\"let product of featuredProducts\">\r\n          <eshop-frontend-product-item [product]= 'product'></eshop-frontend-product-item>\r\n        </div>\r\n    </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7SUNBMUQsOEJBQTREO0lBQzFELGlEQUFnRjtJQUNsRixpQkFBTTs7O0lBRHlCLGVBQW9CO0lBQXBCLG9DQUFvQjs7QURPM0QsTUFBTSxPQUFPLHlCQUF5QjtJQUtwQyxZQUFvQixXQUE0QjtRQUE1QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFIaEQscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUNwQyxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUFFYyxDQUFDO0lBRXRELFFBQVE7UUFDTixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7O2tHQW5CVSx5QkFBeUI7NEVBQXpCLHlCQUF5QjtRQ1h0Qyw4QkFBK0IsU0FBQTtRQUN2QixpQ0FBaUI7UUFBQSxpQkFBSztRQUMxQiw4QkFBa0I7UUFDZCwwRUFFTTtRQUNWLGlCQUFNLEVBQUE7O1FBSHFDLGVBQW1CO1FBQW5CLDhDQUFtQjs7dUZEUXJELHlCQUF5QjtjQU5yQyxTQUFTOzJCQUNFLGtDQUFrQyxVQUVwQyxFQUNQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcclxuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLWZlYXR1cmVkLXByb2R1Y3RzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVkUHJvZHVjdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIGZlYXR1cmVkUHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xyXG4gIGVuZFN1YnMkIDogU3ViamVjdDxhbnk+PSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9nZXRGZWF0dXJlZFByb2R1Y3RzKClcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmVuZFN1YnMkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRGZWF0dXJlZFByb2R1Y3RzKCl7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldEZlYXR1cmVkUHJvZHVjdHMoKS5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSkuc3Vic2NyaWJlKHByb2R1Y3RzID0+e1xyXG4gICAgICB0aGlzLmZlYXR1cmVkUHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmVhdHVyZWQtcHJvZHVjdHNcIj5cclxuICAgIDxoMz5GZWF0dXJlZCBQcm9kdWN0czwvaDM+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIGZlYXR1cmVkUHJvZHVjdHNcIj5cclxuICAgICAgICAgIDxlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0gW3Byb2R1Y3RdPSAncHJvZHVjdCc+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==