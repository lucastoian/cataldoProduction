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
ProductsListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductsListComponent, selectors: [["eshop-frontend-products-list"]], decls: 5, vars: 6, consts: [[1, "products-page"], [1, "grid"], ["class", " categories-side md:col-3 lg:col-2 xl:col-2 categories", "style", "padding-left: 20px;", 4, "ngIf"], [1, "sm:col-12", "md:col-9", "lg:col-10", 2, "padding", "30px", 3, "ngClass"], ["class", "grid", "style", "align-items: baseline;", 4, "ngIf"], [1, "categories-side", "md:col-3", "lg:col-2", "xl:col-2", "categories", 2, "padding-left", "20px"], ["class", "p-field-checkbox boxes", 4, "ngFor", "ngForOf"], [1, "p-field-checkbox", "boxes"], [1, "checkbox", 2, "padding-right", "5px", 3, "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [3, "for"], [1, "grid", 2, "align-items", "baseline"], ["class", " col-6 col-md-4 col-lg-3", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-4", "col-lg-3", 3, "routerLink"], [3, "product"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'eshop-frontend-products-list', styles: [], template: "<div class=\"products-page\">\n  <div class=\"grid\">\n    <div class=\" categories-side md:col-3 lg:col-2 xl:col-2 categories\"  style=\"padding-left: 20px;\" *ngIf=\"!isCategoryPage\">\n      <h4>Categories</h4>\n      <div class=\"p-field-checkbox boxes\" *ngFor=\"let category of categories\">\n        <p-checkbox style=\"padding-right: 5px;\" [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\n          (onChange)=\"categoryFilter()\" class=\"checkbox\"></p-checkbox>\n        <label for=\"{{category.id}}\">{{category.name}}</label>\n\n      </div>\n    </div>\n\n\n\n    <div class=\"sm:col-12 md:col-9 lg:col-10\" style=\"padding: 30px;\"  [ngClass]=\"{'xl:col-9' : !isCategoryPage, 'md:col-12 lg:col-12 xl:col-12' : isCategoryPage }\">\n      <div class=\"grid\" *ngIf=\"products\" style=\"align-items: baseline;\">\n\n        <div *ngFor=\"let product of products\" class=\" col-6 col-md-4 col-lg-3\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n\n          <eshop-frontend-product-item [product]=\"product\"></eshop-frontend-product-item>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.CategoriesService }, { type: i3.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3Byb2R1Y3RzL3NyYy9saWIvcGFnZXMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7OztJQ0Y1RCw4QkFBd0Usb0JBQUE7SUFDOUIsOFBBQThCLHNLQUN4RCx1QkFBZ0IsSUFEd0M7SUFDckIsaUJBQWE7SUFDOUQsZ0NBQTZCO0lBQUEsWUFBaUI7SUFBQSxpQkFBUSxFQUFBOzs7O0lBRmQsZUFBOEI7SUFBOUIsNkNBQThCLDZCQUFBLDJCQUFBO0lBRS9ELGVBQXFCO0lBQXJCLCtDQUFxQjtJQUFDLGVBQWlCO0lBQWpCLHNDQUFpQjs7O0lBTGxELDhCQUF5SCxTQUFBO0lBQ25ILDBCQUFVO0lBQUEsaUJBQUs7SUFDbkIsNEVBS007SUFDUixpQkFBTTs7O0lBTnFELGVBQWE7SUFBYiwyQ0FBYTs7OztJQWFwRSwrQkFBMko7SUFFekosa0RBQStFO0lBRWpGLGlCQUFNOzs7O0lBSmlFLGlLQUFtRjtJQUUzSCxlQUFtQjtJQUFuQixvQ0FBbUI7OztJQUpwRCwrQkFBa0U7SUFFaEUsNkVBSU07SUFDUixpQkFBTTs7O0lBTHFCLGVBQVc7SUFBWCx5Q0FBVzs7O0FERjVD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QUFBOztRQXJCNEYsZUFBcUI7UUFBckIsMENBQXFCO1FBWXJELGVBQTZGO1FBQTdGLDZGQUE2RjtRQUMxSSxlQUFjO1FBQWQsbUNBQWM7O3VGREExQixxQkFBcUI7Y0FOakMsU0FBUzsyQkFDRSw4QkFBOEIsVUFFaEMsRUFDUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5JztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBDYXRlZ29yaWVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhdGVnb3JpZXMuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0cy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0NoZWNrZWQgPSBmYWxzZVxuICBwcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXTtcbiAgYmluYXJ5UHJvcCA9IHRydWU7XG4gIGlzQ2F0ZWdvcnlQYWdlOiBib29sZWFuO1xuICB1cmw7XG4gIF91cmxTZWdtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZFNlcnZpY2U6IFByb2R1Y3RzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjYXRTZXJ2aWNlOiBDYXRlZ29yaWVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XG4gICAgdGhpcy5fdXJsU2VnbWVudCA9IHRoaXMudXJsLnZhbHVlWzBdLnBhdGhcbiAgICBjb25zb2xlLmxvZyh0aGlzLl91cmxTZWdtZW50KTtcblxuICAgIGlmKHRoaXMuX3VybFNlZ21lbnQgPT09IFwicHJvZHVjdHNcIil7XG4gICAgICBcbiAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+e1xuICAgICAgICBwYXJhbXMuY2F0ZWdvcnlpZCA/IHRoaXMuX2dldFByb2R1Y3RzKFtwYXJhbXMuY2F0ZWdvcnlpZF0pIDogdGhpcy5fZ2V0UHJvZHVjdHMoKTtcbiAgICAgICAgcGFyYW1zLmNhdGVnb3J5aWQgPyB0aGlzLmlzQ2F0ZWdvcnlQYWdlID0gdHJ1ZSA6IHRoaXMuaXNDYXRlZ29yeVBhZ2UgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICB0aGlzLl9nZXRDYXRlZ29yaWVzKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcbiAgICAgICAgcGFyYW1zLmNhdGVnb3J5aWQgPyB0aGlzLl9nZXRXUHJvZHVjdHMoW3BhcmFtcy5jYXRlZ29yeWlkXSkgOiB0aGlzLl9nZXRXUHJvZHVjdHMoKTtcbiAgICAgICAgcGFyYW1zLmNhdGVnb3J5aWQgPyB0aGlzLmlzQ2F0ZWdvcnlQYWdlID0gdHJ1ZSA6IHRoaXMuaXNDYXRlZ29yeVBhZ2UgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMuX2dldENhdGVnb3JpZXMoKTtcbiAgICBcblxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJvZHVjdHMoY2F0ZWdvcmllc0ZpbHRlcj86IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRNUHJvZHVjdHMoY2F0ZWdvcmllc0ZpbHRlcikuc3Vic2NyaWJlKChyZXNQcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc1Byb2R1Y3RzO1xuXG4gICAgICBcbiAgICAgIGNvbnN0IHVuaXF1ZVByb2RzID0gWy4uLnRoaXMucHJvZHVjdHMucmVkdWNlKChtYXAsIG9iaikgPT4gbWFwLnNldChvYmoubmFtZSwgb2JqKSwgbmV3IE1hcCgpKS52YWx1ZXMoKV07XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKHVuaXF1ZVByb2RzKTtcbiAgICAgIFxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHVuaXF1ZVByb2RzO1xuIFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0V1Byb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSl7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRXUHJvZHVjdHMoY2F0ZWdvcmllc0ZpbHRlcikuc3Vic2NyaWJlKChyZXNwUHJvZHMpPT57XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcFByb2RzO1xuXG4gICAgICBjb25zdCB1bmlxdWVQcm9kcyA9IFsuLi50aGlzLnByb2R1Y3RzLnJlZHVjZSgobWFwLCBvYmopID0+IG1hcC5zZXQob2JqLm5hbWUsIG9iaiksIG5ldyBNYXAoKSkudmFsdWVzKCldO1xuICAgIFxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHVuaXF1ZVByb2RzO1xuXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgX2dldENhdGVnb3JpZXMoKXtcbiAgICB0aGlzLmNhdFNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpLnN1YnNjcmliZShyZXNDYXRzID0+e1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzQ2F0cztcbiAgICB9KVxuICB9XG4gIFxuICAgLyogZXNsaW50LWRpc2FibGUgKi9cblxuXG4gY2F0ZWdvcnlGaWx0ZXIoKSB7XG4gIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmllc1xuICAuZmlsdGVyKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkuY2hlY2tlZCApXG4gIC5tYXAoKGNhdGVnb3J5KT0+IGNhdGVnb3J5LmlkKVxuICBjb25zb2xlLmxvZyhzZWxlY3RlZENhdGVnb3JpZXMpO1xuXG4gIGlmICh0aGlzLl91cmxTZWdtZW50ID09PSBcInByb2R1Y3RzXCIpIHtcbiAgICB0aGlzLl9nZXRQcm9kdWN0cyhzZWxlY3RlZENhdGVnb3JpZXMpO1xuICAgIFxuICB9ZWxzZXtcbiAgICB0aGlzLl9nZXRXUHJvZHVjdHMoc2VsZWN0ZWRDYXRlZ29yaWVzKTtcbiAgfVxuXG4gIH0gXG5cblxufSIsIjxkaXYgY2xhc3M9XCJwcm9kdWN0cy1wYWdlXCI+XG4gIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgPGRpdiBjbGFzcz1cIiBjYXRlZ29yaWVzLXNpZGUgbWQ6Y29sLTMgbGc6Y29sLTIgeGw6Y29sLTIgY2F0ZWdvcmllc1wiICBzdHlsZT1cInBhZGRpbmctbGVmdDogMjBweDtcIiAqbmdJZj1cIiFpc0NhdGVnb3J5UGFnZVwiPlxuICAgICAgPGg0PkNhdGVnb3JpZXM8L2g0PlxuICAgICAgPGRpdiBjbGFzcz1cInAtZmllbGQtY2hlY2tib3ggYm94ZXNcIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiPlxuICAgICAgICA8cC1jaGVja2JveCBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIiBbKG5nTW9kZWwpXT1cImNhdGVnb3J5LmNoZWNrZWRcIiBbYmluYXJ5XT1iaW5hcnlQcm9wIFtpbnB1dElkXT1cImNhdGVnb3J5LmlkIVwiXG4gICAgICAgICAgKG9uQ2hhbmdlKT1cImNhdGVnb3J5RmlsdGVyKClcIiBjbGFzcz1cImNoZWNrYm94XCI+PC9wLWNoZWNrYm94PlxuICAgICAgICA8bGFiZWwgZm9yPVwie3tjYXRlZ29yeS5pZH19XCI+e3tjYXRlZ29yeS5uYW1lfX08L2xhYmVsPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG5cbiAgICA8ZGl2IGNsYXNzPVwic206Y29sLTEyIG1kOmNvbC05IGxnOmNvbC0xMFwiIHN0eWxlPVwicGFkZGluZzogMzBweDtcIiAgW25nQ2xhc3NdPVwieyd4bDpjb2wtOScgOiAhaXNDYXRlZ29yeVBhZ2UsICdtZDpjb2wtMTIgbGc6Y29sLTEyIHhsOmNvbC0xMicgOiBpc0NhdGVnb3J5UGFnZSB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiICpuZ0lmPVwicHJvZHVjdHNcIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBiYXNlbGluZTtcIj5cblxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIHByb2R1Y3RzXCIgY2xhc3M9XCIgY29sLTYgY29sLW1kLTQgY29sLWxnLTNcIiBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiPlxuXG4gICAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSBbcHJvZHVjdF09XCJwcm9kdWN0XCI+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==