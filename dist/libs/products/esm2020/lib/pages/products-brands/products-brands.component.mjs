import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product123 } from '../../models/product123';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import { W_ProductsService } from '../../services/w-products.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/products.service";
import * as i3 from "../../services/categories.service";
import * as i4 from "../../services/w-products.service";
import * as i5 from "@angular/common";
import * as i6 from "primeng/checkbox";
import * as i7 from "@angular/forms";
import * as i8 from "../../components/product-item/product-item.component";
function ProductsBrandsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "p-checkbox", 7);
    i0.ɵɵlistener("ngModelChange", function ProductsBrandsComponent_div_5_Template_p_checkbox_ngModelChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const category_r2 = restoredCtx.$implicit; return category_r2.checked = $event; })("onChange", function ProductsBrandsComponent_div_5_Template_p_checkbox_onChange_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.categoryFilter(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", category_r2.checked)("binary", ctx_r0.binaryProp)("inputId", category_r2.id);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", category_r2.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(category_r2.name);
} }
const _c0 = function (a0) { return [a0]; };
function ProductsBrandsComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "eshop-frontend-product-item", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r6.w ? i0.ɵɵpureFunction1(2, _c0, "/women-products/" + product_r7.id) : i0.ɵɵpureFunction1(4, _c0, "/products/" + product_r7.id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("product", product_r7);
} }
function ProductsBrandsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, ProductsBrandsComponent_div_7_div_1_Template, 2, 6, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.filteredProducts);
} }
export class ProductsBrandsComponent {
    constructor(route, productsService, catService, wProdService) {
        this.route = route;
        this.productsService = productsService;
        this.catService = catService;
        this.wProdService = wProdService;
        this.isChecked = false;
        this.binaryProp = true;
        this.products = [];
        this.wProds = [];
        this.filteredProducts = [];
        this.categories = [];
    }
    ngOnInit() {
        this.url = this.route.url;
        this._urlSegment = this.url.value[0].path;
        console.log(this._urlSegment);
        if (this._urlSegment === "products") {
            this._retrieveId();
            this._getProdByBrand();
            this.route.params.subscribe((params) => {
                params.categoryid ? this._getProducts([params.categoryid]) : this._getProdByBrand();
            });
            this._getCategories();
            this.fromCarousel = false;
        }
        else {
            this._retrieveId();
            this._getWProdByBrand();
            this.route.params.subscribe((params) => {
                params.categoryid ? this._getWProducts([params.categoryid]) : this._getWProdByBrand();
            });
            this._getCategories();
            this.fromCarousel = false;
        }
    }
    _retrieveId() {
        this.route.params.subscribe((params) => {
            this.currentId = params.brandId;
            console.log(this.currentId);
            console.log(this.brandName);
        });
    }
    _getProdByBrand(categoriesFilter) {
        this.productsService.getMProducts(categoriesFilter).subscribe((products) => {
            this.products = products;
            const filteredByBrand = this.products.filter(prod => prod.brand === this.currentId);
            console.log(filteredByBrand);
            this.filteredProducts = filteredByBrand;
            const uniqueProds = [...this.filteredProducts.reduce((map, obj) => map.set(obj.name, obj), new Map()).values()];
            this.filteredProducts = uniqueProds;
        });
    }
    _getWProdByBrand(categoriesFilter) {
        this.productsService.getWProducts(categoriesFilter).subscribe((products) => {
            this.products = products;
            const filtered = this.products.filter(prod => prod.brand === this.currentId);
            console.log(filtered);
            this.filteredProducts = filtered;
            const uniqueProds = [...this.filteredProducts.reduce((map, obj) => map.set(obj.name, obj), new Map()).values()];
            this.filteredProducts = uniqueProds;
        });
    }
    _getProducts(categoriesFilter) {
        this.productsService.getProducts(categoriesFilter).subscribe((resProducts) => {
            this.products = resProducts;
        });
    }
    _getWProducts(categoriesFilter) {
        this.productsService.getWProducts(categoriesFilter).subscribe((resProducts) => {
            this.products = resProducts;
        });
    }
    _getCategories() {
        this.catService.getCategories().subscribe(resCats => {
            this.categories = resCats;
        });
    }
    categoryFilter() {
        const selectedCategories = this.categories.filter((category) => category.checked).map((category) => category.id);
        console.log(selectedCategories);
        if (this._urlSegment === "products") {
            this._getProdByBrand(selectedCategories);
        }
        else {
            this._getWProdByBrand(selectedCategories);
        }
    }
}
ProductsBrandsComponent.ɵfac = function ProductsBrandsComponent_Factory(t) { return new (t || ProductsBrandsComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ProductsService), i0.ɵɵdirectiveInject(i3.CategoriesService), i0.ɵɵdirectiveInject(i4.W_ProductsService)); };
ProductsBrandsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductsBrandsComponent, selectors: [["eshop-frontend-products-brands"]], inputs: { product: "product" }, decls: 8, vars: 2, consts: [[1, "products-page"], [1, "grid"], [1, "categories-side", "md:col-3", "lg:col-2", "xl:col-3", "categories", 2, "padding-left", "20px"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "sm:col-12", "md:col-9", "lg:col-10", "xl:col-9", 2, "padding", "30px"], ["class", "grid", 4, "ngIf"], [1, "p-field-checkbox"], [2, "padding-right", "5px", 3, "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [3, "for"], ["class", "item-container sm:col-6 md:col-6 lg:col-3 xl:col-3", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "item-container", "sm:col-6", "md:col-6", "lg:col-3", "xl:col-3", 3, "routerLink"], [3, "product"]], template: function ProductsBrandsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        i0.ɵɵtext(4, "Categorie");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, ProductsBrandsComponent_div_5_Template, 4, 5, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵtemplate(7, ProductsBrandsComponent_div_7_Template, 2, 1, "div", 5);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.categories);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.products);
    } }, directives: [i5.NgForOf, i6.Checkbox, i7.NgControlStatus, i7.NgModel, i5.NgIf, i1.RouterLink, i8.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsBrandsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-products-brands', styles: [], template: "<div class=\"products-page\">\n  <div class=\"grid\">\n    <div class=\"categories-side md:col-3 lg:col-2 xl:col-3 categories\" style=\"padding-left: 20px;\">\n\n      <h4>Categorie</h4>\n      <div class=\"p-field-checkbox\" *ngFor=\"let category of categories\">\n        <p-checkbox [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\n          (onChange)=\"categoryFilter()\" style=\"padding-right: 5px;\"></p-checkbox>\n        <label for=\"{{category.id}}\">{{category.name}}</label>\n\n      </div>\n    </div>\n    <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" style=\"padding: 30px;\">\n      <div class=\"grid\" *ngIf=\"products\" >\n        <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let product of filteredProducts\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n\n          <eshop-frontend-product-item [product]=\"product\"></eshop-frontend-product-item>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i3.CategoriesService }, { type: i4.W_ProductsService }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7Ozs7SUNGaEUsOEJBQWtFLG9CQUFBO0lBQ3BELDBQQUE4QixpS0FDNUIsdUJBQWdCLElBRFk7SUFDa0IsaUJBQWE7SUFDekUsZ0NBQTZCO0lBQUEsWUFBaUI7SUFBQSxpQkFBUSxFQUFBOzs7O0lBRjFDLGVBQThCO0lBQTlCLDZDQUE4Qiw2QkFBQSwyQkFBQTtJQUVuQyxlQUFxQjtJQUFyQiwrQ0FBcUI7SUFBQyxlQUFpQjtJQUFqQixzQ0FBaUI7Ozs7SUFNOUMsK0JBQTZMO0lBRTNMLGtEQUErRTtJQUNqRixpQkFBTTs7OztJQUhtRyxpS0FBbUY7SUFFN0osZUFBbUI7SUFBbkIsb0NBQW1COzs7SUFIcEQsOEJBQW9DO0lBQ2xDLDhFQUdNO0lBRVIsaUJBQU07OztJQUxnRixlQUFt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QUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDM0M7SUFFSCxDQUFDOzs4RkE1SFUsdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUNoQnBDLDhCQUEyQixhQUFBLGFBQUEsU0FBQTtRQUlqQix5QkFBUztRQUFBLGlCQUFLO1FBQ2xCLHdFQUtNO1FBQ1IsaUJBQU07UUFDTiw4QkFBMEU7UUFDeEUsd0VBTU07UUFDUixpQkFBTSxFQUFBLEVBQUE7O1FBZitDLGVBQWE7UUFBYix3Q0FBYTtRQVE3QyxlQUFjO1FBQWQsbUNBQWM7O3VGREcxQix1QkFBdUI7Y0FObkMsU0FBUzsyQkFDRSxnQ0FBZ0MsVUFFbEMsRUFDUDsrSkFPUSxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5JztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBXX1Byb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvdy1wcm9kdWN0JztcbmltcG9ydCB7IENhdGVnb3JpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgV19Qcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93LXByb2R1Y3RzLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3RzLWJyYW5kcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0cy1icmFuZHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xuICBiaW5hcnlQcm9wID0gdHJ1ZTtcbiAgY3VycmVudElkOiBzdHJpbmc7XG4gIGJyYW5kTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuICBwcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIHdQcm9kczogV19Qcm9kdWN0W10gPSBbXTtcbiAgZmlsdGVyZWRQcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXTtcbiAgdXJsO1xuICBfdXJsU2VnbWVudDtcbiAgZnJvbUNhcm91c2VsOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNhdFNlcnZpY2UgOiBDYXRlZ29yaWVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3UHJvZFNlcnZpY2U6IFdfUHJvZHVjdHNTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XG4gICAgdGhpcy5fdXJsU2VnbWVudCA9IHRoaXMudXJsLnZhbHVlWzBdLnBhdGhcbiAgICBjb25zb2xlLmxvZyh0aGlzLl91cmxTZWdtZW50KTtcbiBcblxuICAgICAgICBpZih0aGlzLl91cmxTZWdtZW50ID09PSBcInByb2R1Y3RzXCIpe1xuICAgICAgICAgIHRoaXMuX3JldHJpZXZlSWQoKTtcbiAgICAgICAgICB0aGlzLl9nZXRQcm9kQnlCcmFuZCgpO1xuICAgICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+e1xuICAgICAgICAgICAgcGFyYW1zLmNhdGVnb3J5aWQ/IHRoaXMuX2dldFByb2R1Y3RzKFtwYXJhbXMuY2F0ZWdvcnlpZF0pIDogdGhpcy5fZ2V0UHJvZEJ5QnJhbmQoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuX2dldENhdGVnb3JpZXMoKTtcbiAgICAgICAgICB0aGlzLmZyb21DYXJvdXNlbCA9IGZhbHNlO1xuICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5fcmV0cmlldmVJZCgpO1xuICAgICAgICAgIHRoaXMuX2dldFdQcm9kQnlCcmFuZCgpO1xuICAgICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+e1xuICAgICAgICAgICAgcGFyYW1zLmNhdGVnb3J5aWQ/IHRoaXMuX2dldFdQcm9kdWN0cyhbcGFyYW1zLmNhdGVnb3J5aWRdKSA6IHRoaXMuX2dldFdQcm9kQnlCcmFuZCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5fZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICAgIHRoaXMuZnJvbUNhcm91c2VsID0gIGZhbHNlO1xuICAgICAgICB9XG4gICAgICBcblxuICAgIFxuXG5cbiAgfVxuXG4gIHByaXZhdGUgX3JldHJpZXZlSWQoKXtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcbiAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5icmFuZElkO1xuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTsgICAgXG4gICAgICAgY29uc29sZS5sb2codGhpcy5icmFuZE5hbWUpOyAgIFxuICAgICAgIH0pXG4gIH1cblxuICBwcml2YXRlIF9nZXRQcm9kQnlCcmFuZChjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pe1xuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldE1Qcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyKS5zdWJzY3JpYmUoKHByb2R1Y3RzKT0+e1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICBcbiAgICAgIFxuICAgICBjb25zdCBmaWx0ZXJlZEJ5QnJhbmQgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihwcm9kID0+IHByb2QuYnJhbmQgPT09IHRoaXMuY3VycmVudElkKTtcbiAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQnlCcmFuZCk7XG4gICAgXG4gICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBmaWx0ZXJlZEJ5QnJhbmQ7XG4gICAgIFxuICAgICAgY29uc3QgdW5pcXVlUHJvZHMgPSBbLi4udGhpcy5maWx0ZXJlZFByb2R1Y3RzLnJlZHVjZSgobWFwLCBvYmopID0+IG1hcC5zZXQob2JqLm5hbWUsIG9iaiksIG5ldyBNYXAoKSkudmFsdWVzKCldO1xuICAgICAgXG4gICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSB1bmlxdWVQcm9kcztcbiAgICAgIFxuICAgICAgXG4gICAgfSk7ICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0V1Byb2RCeUJyYW5kKGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSl7XG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0V1Byb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXIpLnN1YnNjcmliZSgocHJvZHVjdHMpPT57XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gIFxuICAgICAgXG4gICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihwcm9kID0+IHByb2QuYnJhbmQgPT09IHRoaXMuY3VycmVudElkKVxuICAgICAgY29uc29sZS5sb2coZmlsdGVyZWQpO1xuICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gZmlsdGVyZWQ7XG5cbiAgICAgIGNvbnN0IHVuaXF1ZVByb2RzID0gWy4uLnRoaXMuZmlsdGVyZWRQcm9kdWN0cy5yZWR1Y2UoKG1hcCwgb2JqKSA9PiBtYXAuc2V0KG9iai5uYW1lLCBvYmopLCBuZXcgTWFwKCkpLnZhbHVlcygpXTtcbiAgICAgIFxuICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XG4gICAgICBcbiAgICAgIFxuICAgIH0pOyAgICBcbiAgfVxuXG4gIHByaXZhdGUgX2dldFByb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSkge1xuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXIpLnN1YnNjcmliZSgocmVzUHJvZHVjdHMpID0+IHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSByZXNQcm9kdWN0cztcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFdQcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pIHtcbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRXUHJvZHVjdHMoY2F0ZWdvcmllc0ZpbHRlcikuc3Vic2NyaWJlKChyZXNQcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc1Byb2R1Y3RzO1xuICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIF9nZXRDYXRlZ29yaWVzKCl7XG4gICAgdGhpcy5jYXRTZXJ2aWNlLmdldENhdGVnb3JpZXMoKS5zdWJzY3JpYmUocmVzQ2F0cyA9PntcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc0NhdHM7XG4gICAgfSlcbiAgfVxuXG4gIGNhdGVnb3J5RmlsdGVyKCl7XG4gICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpPT4gY2F0ZWdvcnkuY2hlY2tlZCkubWFwKChjYXRlZ29yeSk9PiBjYXRlZ29yeS5pZClcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENhdGVnb3JpZXMpO1xuICAgIGlmICh0aGlzLl91cmxTZWdtZW50ID09PSBcInByb2R1Y3RzXCIpIHtcbiAgICAgIHRoaXMuX2dldFByb2RCeUJyYW5kKHNlbGVjdGVkQ2F0ZWdvcmllcyk7XG4gICAgICBcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuX2dldFdQcm9kQnlCcmFuZChzZWxlY3RlZENhdGVnb3JpZXMpO1xuICAgIH1cbiAgICBcbiAgfVxuXG5cblxufVxuIiwiPGRpdiBjbGFzcz1cInByb2R1Y3RzLXBhZ2VcIj5cbiAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcmllcy1zaWRlIG1kOmNvbC0zIGxnOmNvbC0yIHhsOmNvbC0zIGNhdGVnb3JpZXNcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogMjBweDtcIj5cblxuICAgICAgPGg0PkNhdGVnb3JpZTwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzPVwicC1maWVsZC1jaGVja2JveFwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzXCI+XG4gICAgICAgIDxwLWNoZWNrYm94IFsobmdNb2RlbCldPVwiY2F0ZWdvcnkuY2hlY2tlZFwiIFtiaW5hcnldPWJpbmFyeVByb3AgW2lucHV0SWRdPVwiY2F0ZWdvcnkuaWQhXCJcbiAgICAgICAgICAob25DaGFuZ2UpPVwiY2F0ZWdvcnlGaWx0ZXIoKVwiIHN0eWxlPVwicGFkZGluZy1yaWdodDogNXB4O1wiPjwvcC1jaGVja2JveD5cbiAgICAgICAgPGxhYmVsIGZvcj1cInt7Y2F0ZWdvcnkuaWR9fVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9sYWJlbD5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNtOmNvbC0xMiBtZDpjb2wtOSBsZzpjb2wtMTAgeGw6Y29sLTlcIiBzdHlsZT1cInBhZGRpbmc6IDMwcHg7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiICpuZ0lmPVwicHJvZHVjdHNcIiA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRhaW5lciBzbTpjb2wtNiBtZDpjb2wtNiBsZzpjb2wtMyB4bDpjb2wtM1wiICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIGZpbHRlcmVkUHJvZHVjdHNcIiBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiPlxuXG4gICAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSBbcHJvZHVjdF09XCJwcm9kdWN0XCI+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==