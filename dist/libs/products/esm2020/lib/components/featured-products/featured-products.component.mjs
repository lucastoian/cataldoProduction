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
        args: [{ selector: 'eshop-frontend-featured-products', styles: [], template: "<div class=\"featured-products\">\n    <h3>Featured Products</h3>\n    <div class=\"grid\">\n        <div class=\"col-3\" *ngFor=\"let product of featuredProducts\">\n          <eshop-frontend-product-item [product]= 'product'></eshop-frontend-product-item>\n        </div>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ProductsService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7SUNBMUQsOEJBQTREO0lBQzFELGlEQUFnRjtJQUNsRixpQkFBTTs7O0lBRHlCLGVBQW9CO0lBQXBCLG9DQUFvQjs7QURPM0QsTUFBTSxPQUFPLHlCQUF5QjtJQUtwQyxZQUFvQixXQUE0QjtRQUE1QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFIaEQscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUNwQyxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUFFYyxDQUFDO0lBRXRELFFBQVE7UUFDTixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7O2tHQW5CVSx5QkFBeUI7NEVBQXpCLHlCQUF5QjtRQ1h0Qyw4QkFBK0IsU0FBQTtRQUN2QixpQ0FBaUI7UUFBQSxpQkFBSztRQUMxQiw4QkFBa0I7UUFDZCwwRUFFTTtRQUNWLGlCQUFNLEVBQUE7O1FBSHFDLGVBQW1CO1FBQW5CLDhDQUFtQjs7dUZEUXJELHlCQUF5QjtjQU5yQyxTQUFTOzJCQUNFLGtDQUFrQyxVQUVwQyxFQUNQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLWZlYXR1cmVkLXByb2R1Y3RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBmZWF0dXJlZFByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgZW5kU3VicyQgOiBTdWJqZWN0PGFueT49IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZ2V0RmVhdHVyZWRQcm9kdWN0cygpXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEZlYXR1cmVkUHJvZHVjdHMoKXtcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldEZlYXR1cmVkUHJvZHVjdHMoKS5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSkuc3Vic2NyaWJlKHByb2R1Y3RzID0+e1xuICAgICAgdGhpcy5mZWF0dXJlZFByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgfSlcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZmVhdHVyZWQtcHJvZHVjdHNcIj5cbiAgICA8aDM+RmVhdHVyZWQgUHJvZHVjdHM8L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIGZlYXR1cmVkUHJvZHVjdHNcIj5cbiAgICAgICAgICA8ZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtIFtwcm9kdWN0XT0gJ3Byb2R1Y3QnPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19