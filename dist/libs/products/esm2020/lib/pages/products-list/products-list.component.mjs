import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/products.service";
import * as i2 from "../../services/categories.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "primeng/checkbox";
import * as i6 from "@angular/forms";
import * as i7 from "../../components/product-item/product-item.component";
function ProductsListComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "p-checkbox", 8);
    i0.ɵɵlistener("ngModelChange", function ProductsListComponent_div_2_div_3_Template_p_checkbox_ngModelChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r5); const category_r3 = restoredCtx.$implicit; return category_r3.checked = $event; })("onChange", function ProductsListComponent_div_2_div_3_Template_p_checkbox_onChange_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.categoryFilter(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", category_r3.checked)("binary", ctx_r2.binaryProp)("inputId", category_r3.id);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", category_r3.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(category_r3.name);
} }
function ProductsListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "h4");
    i0.ɵɵtext(2, "Categories");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProductsListComponent_div_2_div_3_Template, 4, 5, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.categories);
} }
const _c0 = function (a0) { return [a0]; };
function ProductsListComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "eshop-frontend-product-item", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r7.w ? i0.ɵɵpureFunction1(2, _c0, "/women-products/" + product_r8.id) : i0.ɵɵpureFunction1(4, _c0, "/products/" + product_r8.id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("product", product_r8);
} }
function ProductsListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, ProductsListComponent_div_4_div_1_Template, 2, 6, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.products);
} }
const _c1 = function (a0, a1) { return { "xl:col-9": a0, "md:col-12 lg:col-12 xl:col-12": a1 }; };
export class ProductsListComponent {
    constructor(prodService, catService, route) {
        this.prodService = prodService;
        this.catService = catService;
        this.route = route;
        this.isChecked = false;
        this.products = [];
        this.categories = [];
        this.binaryProp = true;
    }
    ngOnInit() {
        this.url = this.route.url;
        this._urlSegment = this.url.value[0].path;
        console.log(this._urlSegment);
        if (this._urlSegment === "products") {
            this.route.params.subscribe((params) => {
                params.categoryid ? this._getProducts([params.categoryid]) : this._getProducts();
                params.categoryid ? this.isCategoryPage = true : this.isCategoryPage = false;
            });
            this._getCategories();
        }
        else {
            this.route.params.subscribe((params) => {
                params.categoryid ? this._getWProducts([params.categoryid]) : this._getWProducts();
                params.categoryid ? this.isCategoryPage = true : this.isCategoryPage = false;
            });
        }
        this._getCategories();
    }
    _getProducts(categoriesFilter) {
        this.prodService.getMProducts(categoriesFilter).subscribe((resProducts) => {
            this.products = resProducts;
            const uniqueProds = [...this.products.reduce((map, obj) => map.set(obj.name, obj), new Map()).values()];
            console.log(uniqueProds);
            this.products = uniqueProds;
        });
    }
    _getWProducts(categoriesFilter) {
        this.prodService.getWProducts(categoriesFilter).subscribe((respProds) => {
            this.products = respProds;
            const uniqueProds = [...this.products.reduce((map, obj) => map.set(obj.name, obj), new Map()).values()];
            this.products = uniqueProds;
        });
    }
    _getCategories() {
        this.catService.getCategories().subscribe(resCats => {
            this.categories = resCats;
        });
    }
    /* eslint-disable */
    categoryFilter() {
        const selectedCategories = this.categories
            .filter((category) => category.checked)
            .map((category) => category.id);
        console.log(selectedCategories);
        if (this._urlSegment === "products") {
            this._getProducts(selectedCategories);
        }
        else {
            this._getWProducts(selectedCategories);
        }
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(i0.ɵɵdirectiveInject(i1.ProductsService), i0.ɵɵdirectiveInject(i2.CategoriesService), i0.ɵɵdirectiveInject(i3.ActivatedRoute)); };
ProductsListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductsListComponent, selectors: [["eshop-frontend-products-list"]], decls: 5, vars: 6, consts: [[1, "products-page"], [1, "grid"], ["class", " categories-side md:col-3 lg:col-2 xl:col-3 categories", "style", "padding-left: 20px;", 4, "ngIf"], [1, "sm:col-12", "md:col-9", "lg:col-10", "p-list", 2, "padding", "30px", 3, "ngClass"], ["class", "grid g-custom", 4, "ngIf"], [1, "categories-side", "md:col-3", "lg:col-2", "xl:col-3", "categories", 2, "padding-left", "20px"], ["class", "p-field-checkbox boxes", 4, "ngFor", "ngForOf"], [1, "p-field-checkbox", "boxes"], [1, "checkbox", 2, "padding-right", "5px", 3, "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [3, "for"], [1, "grid", "g-custom"], ["class", "item-container col-6 col-md-4 col-lg-3", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "item-container", "col-6", "col-md-4", "col-lg-3", 3, "routerLink"], [3, "product"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, ProductsListComponent_div_2_Template, 4, 1, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, ProductsListComponent_div_4_Template, 2, 1, "div", 4);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isCategoryPage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c1, !ctx.isCategoryPage, ctx.isCategoryPage));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.products);
    } }, directives: [i4.NgIf, i4.NgForOf, i5.Checkbox, i6.NgControlStatus, i6.NgModel, i4.NgClass, i3.RouterLink, i7.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsListComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-products-list', styles: [], template: "<div class=\"products-page\">\r\n  <div class=\"grid\">\r\n    <div class=\" categories-side md:col-3 lg:col-2 xl:col-3 categories\"  style=\"padding-left: 20px;\" *ngIf=\"!isCategoryPage\">\r\n      <h4>Categories</h4>\r\n      <div class=\"p-field-checkbox boxes\" *ngFor=\"let category of categories\">\r\n        <p-checkbox style=\"padding-right: 5px;\" [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\r\n          (onChange)=\"categoryFilter()\" class=\"checkbox\"></p-checkbox>\r\n        <label for=\"{{category.id}}\">{{category.name}}</label>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"sm:col-12 md:col-9 lg:col-10 p-list\" style=\"padding: 30px;\"  [ngClass]=\"{'xl:col-9' : !isCategoryPage, 'md:col-12 lg:col-12 xl:col-12' : isCategoryPage }\">\r\n      <div class=\"grid g-custom\" *ngIf=\"products\">\r\n\r\n        <div *ngFor=\"let product of products\" class=\"item-container col-6 col-md-4 col-lg-3\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\r\n\r\n          <eshop-frontend-product-item [product]=\"product\"></eshop-frontend-product-item>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.CategoriesService }, { type: i3.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3Byb2R1Y3RzL3NyYy9saWIvcGFnZXMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7OztJQ0Y1RCw4QkFBd0Usb0JBQUE7SUFDOUIsOFBBQThCLHNLQUN4RCx1QkFBZ0IsSUFEd0M7SUFDckIsaUJBQWE7SUFDOUQsZ0NBQTZCO0lBQUEsWUFBaUI7SUFBQSxpQkFBUSxFQUFBOzs7O0lBRmQsZUFBOEI7SUFBOUIsNkNBQThCLDZCQUFBLDJCQUFBO0lBRS9ELGVBQXFCO0lBQXJCLCtDQUFxQjtJQUFDLGVBQWlCO0lBQWpCLHNDQUFpQjs7O0lBTGxELDhCQUF5SCxTQUFBO0lBQ25ILDBCQUFVO0lBQUEsaUJBQUs7SUFDbkIsNEVBS007SUFDUixpQkFBTTs7O0lBTnFELGVBQWE7SUFBYiwyQ0FBYTs7OztJQWFwRSwrQkFBeUs7SUFFdkssa0RBQStFO0lBRWpGLGlCQUFNOzs7O0lBSitFLGlLQUFtRjtJQUV6SSxlQUFtQjtJQUFuQixvQ0FBbUI7OztJQUpwRCwrQkFBNEM7SUFFMUMsNkVBSU07SUFDUixpQkFBTTs7O0lBTHFCLGVBQVc7SUFBWCx5Q0FBVzs7O0FERjVD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QUFBOztRQXJCNEYsZUFBcUI7UUFBckIsMENBQXFCO1FBWTlDLGVBQTZGO1FBQTdGLDZGQUE2RjtRQUN4SSxlQUFjO1FBQWQsbUNBQWM7O3VGREFuQyxxQkFBcUI7Y0FOakMsU0FBUzsyQkFDRSw4QkFBOEIsVUFFaEMsRUFDUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcclxuaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXRlZ29yaWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3RzLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzQ2hlY2tlZCA9IGZhbHNlXHJcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xyXG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXTtcclxuICBiaW5hcnlQcm9wID0gdHJ1ZTtcclxuICBpc0NhdGVnb3J5UGFnZTogYm9vbGVhbjtcclxuICB1cmw7XHJcbiAgX3VybFNlZ21lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZFNlcnZpY2U6IFByb2R1Y3RzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNhdFNlcnZpY2U6IENhdGVnb3JpZXNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgdGhpcy5fdXJsU2VnbWVudCA9IHRoaXMudXJsLnZhbHVlWzBdLnBhdGhcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuX3VybFNlZ21lbnQpO1xyXG5cclxuICAgIGlmKHRoaXMuX3VybFNlZ21lbnQgPT09IFwicHJvZHVjdHNcIil7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcclxuICAgICAgICBwYXJhbXMuY2F0ZWdvcnlpZCA/IHRoaXMuX2dldFByb2R1Y3RzKFtwYXJhbXMuY2F0ZWdvcnlpZF0pIDogdGhpcy5fZ2V0UHJvZHVjdHMoKTtcclxuICAgICAgICBwYXJhbXMuY2F0ZWdvcnlpZCA/IHRoaXMuaXNDYXRlZ29yeVBhZ2UgPSB0cnVlIDogdGhpcy5pc0NhdGVnb3J5UGFnZSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLl9nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcclxuICAgICAgICBwYXJhbXMuY2F0ZWdvcnlpZCA/IHRoaXMuX2dldFdQcm9kdWN0cyhbcGFyYW1zLmNhdGVnb3J5aWRdKSA6IHRoaXMuX2dldFdQcm9kdWN0cygpO1xyXG4gICAgICAgIHBhcmFtcy5jYXRlZ29yeWlkID8gdGhpcy5pc0NhdGVnb3J5UGFnZSA9IHRydWUgOiB0aGlzLmlzQ2F0ZWdvcnlQYWdlID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLl9nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICBcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pIHtcclxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0TVByb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXIpLnN1YnNjcmliZSgocmVzUHJvZHVjdHMpID0+IHtcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc1Byb2R1Y3RzO1xyXG5cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHVuaXF1ZVByb2RzID0gWy4uLnRoaXMucHJvZHVjdHMucmVkdWNlKChtYXAsIG9iaikgPT4gbWFwLnNldChvYmoubmFtZSwgb2JqKSwgbmV3IE1hcCgpKS52YWx1ZXMoKV07XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyh1bmlxdWVQcm9kcyk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XHJcbiBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0V1Byb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSl7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFdQcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyKS5zdWJzY3JpYmUoKHJlc3BQcm9kcyk9PntcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc3BQcm9kcztcclxuXHJcbiAgICAgIGNvbnN0IHVuaXF1ZVByb2RzID0gWy4uLnRoaXMucHJvZHVjdHMucmVkdWNlKChtYXAsIG9iaikgPT4gbWFwLnNldChvYmoubmFtZSwgb2JqKSwgbmV3IE1hcCgpKS52YWx1ZXMoKV07XHJcbiAgICBcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHVuaXF1ZVByb2RzO1xyXG5cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRDYXRlZ29yaWVzKCl7XHJcbiAgICB0aGlzLmNhdFNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpLnN1YnNjcmliZShyZXNDYXRzID0+e1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXNDYXRzO1xyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbiAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcblxyXG5cclxuIGNhdGVnb3J5RmlsdGVyKCkge1xyXG4gIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmllc1xyXG4gIC5maWx0ZXIoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5jaGVja2VkIClcclxuICAubWFwKChjYXRlZ29yeSk9PiBjYXRlZ29yeS5pZClcclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZENhdGVnb3JpZXMpO1xyXG5cclxuICBpZiAodGhpcy5fdXJsU2VnbWVudCA9PT0gXCJwcm9kdWN0c1wiKSB7XHJcbiAgICB0aGlzLl9nZXRQcm9kdWN0cyhzZWxlY3RlZENhdGVnb3JpZXMpO1xyXG4gICAgXHJcbiAgfWVsc2V7XHJcbiAgICB0aGlzLl9nZXRXUHJvZHVjdHMoc2VsZWN0ZWRDYXRlZ29yaWVzKTtcclxuICB9XHJcblxyXG4gIH0gXHJcblxyXG5cclxufSIsIjxkaXYgY2xhc3M9XCJwcm9kdWN0cy1wYWdlXCI+XHJcbiAgPGRpdiBjbGFzcz1cImdyaWRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCIgY2F0ZWdvcmllcy1zaWRlIG1kOmNvbC0zIGxnOmNvbC0yIHhsOmNvbC0zIGNhdGVnb3JpZXNcIiAgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDIwcHg7XCIgKm5nSWY9XCIhaXNDYXRlZ29yeVBhZ2VcIj5cclxuICAgICAgPGg0PkNhdGVnb3JpZXM8L2g0PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicC1maWVsZC1jaGVja2JveCBib3hlc1wiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgPHAtY2hlY2tib3ggc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCIgWyhuZ01vZGVsKV09XCJjYXRlZ29yeS5jaGVja2VkXCIgW2JpbmFyeV09YmluYXJ5UHJvcCBbaW5wdXRJZF09XCJjYXRlZ29yeS5pZCFcIlxyXG4gICAgICAgICAgKG9uQ2hhbmdlKT1cImNhdGVnb3J5RmlsdGVyKClcIiBjbGFzcz1cImNoZWNrYm94XCI+PC9wLWNoZWNrYm94PlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ7e2NhdGVnb3J5LmlkfX1cIj57e2NhdGVnb3J5Lm5hbWV9fTwvbGFiZWw+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInNtOmNvbC0xMiBtZDpjb2wtOSBsZzpjb2wtMTAgcC1saXN0XCIgc3R5bGU9XCJwYWRkaW5nOiAzMHB4O1wiICBbbmdDbGFzc109XCJ7J3hsOmNvbC05JyA6ICFpc0NhdGVnb3J5UGFnZSwgJ21kOmNvbC0xMiBsZzpjb2wtMTIgeGw6Y29sLTEyJyA6IGlzQ2F0ZWdvcnlQYWdlIH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZy1jdXN0b21cIiAqbmdJZj1cInByb2R1Y3RzXCI+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHByb2R1Y3Qgb2YgcHJvZHVjdHNcIiBjbGFzcz1cIml0ZW0tY29udGFpbmVyIGNvbC02IGNvbC1tZC00IGNvbC1sZy0zXCIgW3JvdXRlckxpbmtdPVwiIHcgPyBbJy93b21lbi1wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF0gOiBbJy9wcm9kdWN0cy8nICsgcHJvZHVjdC5pZF1cIj5cclxuXHJcbiAgICAgICAgICA8ZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtIFtwcm9kdWN0XT1cInByb2R1Y3RcIj48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=