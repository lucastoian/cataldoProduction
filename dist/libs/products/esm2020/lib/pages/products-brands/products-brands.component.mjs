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
ProductsBrandsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductsBrandsComponent, selectors: [["eshop-frontend-products-brands"]], inputs: { product: "product" }, decls: 8, vars: 2, consts: [[1, "products-page"], [1, "grid"], [1, "categories-side", "md:col-3", "lg:col-2", "xl:col-3", "categories"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "sm:col-12", "md:col-9", "lg:col-10", "xl:col-9", 2, "padding", "30px"], ["class", "grid", 4, "ngIf"], [1, "p-field-checkbox"], [3, "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [3, "for"], ["class", "item-container sm:col-6 md:col-6 lg:col-3 xl:col-3", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "item-container", "sm:col-6", "md:col-6", "lg:col-3", "xl:col-3", 3, "routerLink"], [3, "product"]], template: function ProductsBrandsComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'eshop-frontend-products-brands', styles: [], template: "<div class=\"products-page\">\r\n  <div class=\"grid\">\r\n    <div class=\"categories-side md:col-3 lg:col-2 xl:col-3 categories\">\r\n\r\n      <h4>Categorie</h4>\r\n      <div class=\"p-field-checkbox\" *ngFor=\"let category of categories\">\r\n        <p-checkbox [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\r\n          (onChange)=\"categoryFilter()\"></p-checkbox>\r\n        <label for=\"{{category.id}}\">{{category.name}}</label>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" style=\"padding: 30px;\">\r\n      <div class=\"grid\" *ngIf=\"products\" >\r\n        <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let product of filteredProducts\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\r\n\r\n          <eshop-frontend-product-item [product]=\"product\"></eshop-frontend-product-item>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i3.CategoriesService }, { type: i4.W_ProductsService }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7Ozs7SUNGaEUsOEJBQWtFLG9CQUFBO0lBQ3BELDBQQUE4QixpS0FDNUIsdUJBQWdCLElBRFk7SUFDVixpQkFBYTtJQUM3QyxnQ0FBNkI7SUFBQSxZQUFpQjtJQUFBLGlCQUFRLEVBQUE7Ozs7SUFGMUMsZUFBOEI7SUFBOUIsNkNBQThCLDZCQUFBLDJCQUFBO0lBRW5DLGVBQXFCO0lBQXJCLCtDQUFxQjtJQUFDLGVBQWlCO0lBQWpCLHNDQUFpQjs7OztJQU05QywrQkFBNkw7SUFFM0wsa0RBQStFO0lBQ2pGLGlCQUFNOzs7O0lBSG1HLGlLQUFtRjtJQUU3SixlQUFtQjtJQUFuQixvQ0FBbUI7OztJQUhwRCw4QkFBb0M7SUFDbEMsOEVBR007SUFFUixpQkFBTTs7O0lBTGdGLGVBQW1C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QUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUMzQztJQUVILENBQUM7OzhGQTVIVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ2hCcEMsOEJBQTJCLGFBQUEsYUFBQSxTQUFBO1FBSWpCLHlCQUFTO1FBQUEsaUJBQUs7UUFDbEIsd0VBS007UUFDUixpQkFBTTtRQUNOLDhCQUEwRTtRQUN4RSx3RUFNTTtRQUNSLGlCQUFNLEVBQUEsRUFBQTs7UUFmK0MsZUFBYTtRQUFiLHdDQUFhO1FBUTdDLGVBQWM7UUFBZCxtQ0FBYzs7dUZERzFCLHVCQUF1QjtjQU5uQyxTQUFTOzJCQUNFLGdDQUFnQyxVQUVsQyxFQUNQOytKQU9RLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcclxuaW1wb3J0IHsgV19Qcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ctcHJvZHVjdCc7XHJcbmltcG9ydCB7IENhdGVnb3JpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFdfUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdy1wcm9kdWN0cy5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3RzLWJyYW5kcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3RzLWJyYW5kcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNCcmFuZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGJpbmFyeVByb3AgPSB0cnVlO1xyXG4gIGN1cnJlbnRJZDogc3RyaW5nO1xyXG4gIGJyYW5kTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XHJcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xyXG4gIHdQcm9kczogV19Qcm9kdWN0W10gPSBbXTtcclxuICBmaWx0ZXJlZFByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcclxuICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW107XHJcbiAgdXJsO1xyXG4gIF91cmxTZWdtZW50O1xyXG4gIGZyb21DYXJvdXNlbDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwcm9kdWN0c1NlcnZpY2U6IFByb2R1Y3RzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNhdFNlcnZpY2UgOiBDYXRlZ29yaWVzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHdQcm9kU2VydmljZTogV19Qcm9kdWN0c1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgdGhpcy5fdXJsU2VnbWVudCA9IHRoaXMudXJsLnZhbHVlWzBdLnBhdGhcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuX3VybFNlZ21lbnQpO1xyXG4gXHJcblxyXG4gICAgICAgIGlmKHRoaXMuX3VybFNlZ21lbnQgPT09IFwicHJvZHVjdHNcIil7XHJcbiAgICAgICAgICB0aGlzLl9yZXRyaWV2ZUlkKCk7XHJcbiAgICAgICAgICB0aGlzLl9nZXRQcm9kQnlCcmFuZCgpO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT57XHJcbiAgICAgICAgICAgIHBhcmFtcy5jYXRlZ29yeWlkPyB0aGlzLl9nZXRQcm9kdWN0cyhbcGFyYW1zLmNhdGVnb3J5aWRdKSA6IHRoaXMuX2dldFByb2RCeUJyYW5kKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5fZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgICAgdGhpcy5mcm9tQ2Fyb3VzZWwgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgdGhpcy5fcmV0cmlldmVJZCgpO1xyXG4gICAgICAgICAgdGhpcy5fZ2V0V1Byb2RCeUJyYW5kKCk7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcclxuICAgICAgICAgICAgcGFyYW1zLmNhdGVnb3J5aWQ/IHRoaXMuX2dldFdQcm9kdWN0cyhbcGFyYW1zLmNhdGVnb3J5aWRdKSA6IHRoaXMuX2dldFdQcm9kQnlCcmFuZCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMuX2dldENhdGVnb3JpZXMoKTtcclxuICAgICAgICAgIHRoaXMuZnJvbUNhcm91c2VsID0gIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcblxyXG4gICAgXHJcblxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JldHJpZXZlSWQoKXtcclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+e1xyXG4gICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMuYnJhbmRJZDtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTsgICAgXHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJyYW5kTmFtZSk7ICAgXHJcbiAgICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UHJvZEJ5QnJhbmQoY2F0ZWdvcmllc0ZpbHRlcj86IHN0cmluZ1tdKXtcclxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldE1Qcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyKS5zdWJzY3JpYmUoKHByb2R1Y3RzKT0+e1xyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcbiAgXHJcbiAgICAgIFxyXG4gICAgIGNvbnN0IGZpbHRlcmVkQnlCcmFuZCA9IHRoaXMucHJvZHVjdHMuZmlsdGVyKHByb2QgPT4gcHJvZC5icmFuZCA9PT0gdGhpcy5jdXJyZW50SWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZEJ5QnJhbmQpO1xyXG4gICAgXHJcbiAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IGZpbHRlcmVkQnlCcmFuZDtcclxuICAgICBcclxuICAgICAgY29uc3QgdW5pcXVlUHJvZHMgPSBbLi4udGhpcy5maWx0ZXJlZFByb2R1Y3RzLnJlZHVjZSgobWFwLCBvYmopID0+IG1hcC5zZXQob2JqLm5hbWUsIG9iaiksIG5ldyBNYXAoKSkudmFsdWVzKCldO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH0pOyAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFdQcm9kQnlCcmFuZChjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pe1xyXG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0V1Byb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXIpLnN1YnNjcmliZSgocHJvZHVjdHMpPT57XHJcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICBcclxuICAgICAgXHJcbiAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMucHJvZHVjdHMuZmlsdGVyKHByb2QgPT4gcHJvZC5icmFuZCA9PT0gdGhpcy5jdXJyZW50SWQpXHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkKTtcclxuICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gZmlsdGVyZWQ7XHJcblxyXG4gICAgICBjb25zdCB1bmlxdWVQcm9kcyA9IFsuLi50aGlzLmZpbHRlcmVkUHJvZHVjdHMucmVkdWNlKChtYXAsIG9iaikgPT4gbWFwLnNldChvYmoubmFtZSwgb2JqKSwgbmV3IE1hcCgpKS52YWx1ZXMoKV07XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSB1bmlxdWVQcm9kcztcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfSk7ICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UHJvZHVjdHMoY2F0ZWdvcmllc0ZpbHRlcj86IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRQcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyKS5zdWJzY3JpYmUoKHJlc1Byb2R1Y3RzKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZHVjdHMgPSByZXNQcm9kdWN0cztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0V1Byb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0V1Byb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXIpLnN1YnNjcmliZSgocmVzUHJvZHVjdHMpID0+IHtcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc1Byb2R1Y3RzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0Q2F0ZWdvcmllcygpe1xyXG4gICAgdGhpcy5jYXRTZXJ2aWNlLmdldENhdGVnb3JpZXMoKS5zdWJzY3JpYmUocmVzQ2F0cyA9PntcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzQ2F0cztcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjYXRlZ29yeUZpbHRlcigpe1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpPT4gY2F0ZWdvcnkuY2hlY2tlZCkubWFwKChjYXRlZ29yeSk9PiBjYXRlZ29yeS5pZClcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ2F0ZWdvcmllcyk7XHJcbiAgICBpZiAodGhpcy5fdXJsU2VnbWVudCA9PT0gXCJwcm9kdWN0c1wiKSB7XHJcbiAgICAgIHRoaXMuX2dldFByb2RCeUJyYW5kKHNlbGVjdGVkQ2F0ZWdvcmllcyk7XHJcbiAgICAgIFxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuX2dldFdQcm9kQnlCcmFuZChzZWxlY3RlZENhdGVnb3JpZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwcm9kdWN0cy1wYWdlXCI+XHJcbiAgPGRpdiBjbGFzcz1cImdyaWRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yaWVzLXNpZGUgbWQ6Y29sLTMgbGc6Y29sLTIgeGw6Y29sLTMgY2F0ZWdvcmllc1wiPlxyXG5cclxuICAgICAgPGg0PkNhdGVnb3JpZTwvaDQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwLWZpZWxkLWNoZWNrYm94XCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXNcIj5cclxuICAgICAgICA8cC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNhdGVnb3J5LmNoZWNrZWRcIiBbYmluYXJ5XT1iaW5hcnlQcm9wIFtpbnB1dElkXT1cImNhdGVnb3J5LmlkIVwiXHJcbiAgICAgICAgICAob25DaGFuZ2UpPVwiY2F0ZWdvcnlGaWx0ZXIoKVwiPjwvcC1jaGVja2JveD5cclxuICAgICAgICA8bGFiZWwgZm9yPVwie3tjYXRlZ29yeS5pZH19XCI+e3tjYXRlZ29yeS5uYW1lfX08L2xhYmVsPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzbTpjb2wtMTIgbWQ6Y29sLTkgbGc6Y29sLTEwIHhsOmNvbC05XCIgc3R5bGU9XCJwYWRkaW5nOiAzMHB4O1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiICpuZ0lmPVwicHJvZHVjdHNcIiA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGFpbmVyIHNtOmNvbC02IG1kOmNvbC02IGxnOmNvbC0zIHhsOmNvbC0zXCIgKm5nRm9yPVwibGV0IHByb2R1Y3Qgb2YgZmlsdGVyZWRQcm9kdWN0c1wiIFtyb3V0ZXJMaW5rXT1cIiB3ID8gWycvd29tZW4tcHJvZHVjdHMvJyArIHByb2R1Y3QuaWRdIDogWycvcHJvZHVjdHMvJyArIHByb2R1Y3QuaWRdXCI+XHJcblxyXG4gICAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSBbcHJvZHVjdF09XCJwcm9kdWN0XCI+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19