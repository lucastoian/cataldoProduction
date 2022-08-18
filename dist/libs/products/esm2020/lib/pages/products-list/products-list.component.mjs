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
function ProductsListComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "eshop-frontend-product-item", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("product", product_r8);
} }
function ProductsListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, ProductsListComponent_div_4_div_1_Template, 2, 1, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.products);
} }
const _c0 = function (a0, a1) { return { "xl:col-9": a0, "md:col-12 lg:col-12 xl:col-12": a1 }; };
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
ProductsListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductsListComponent, selectors: [["eshop-frontend-products-list"]], decls: 5, vars: 6, consts: [[1, "products-page"], [1, "grid"], ["class", " categories-side md:col-3 lg:col-2 xl:col-3 categories", 4, "ngIf"], [1, "sm:col-12", "md:col-9", "lg:col-10", "p-list", 3, "ngClass"], ["class", "grid g-custom", 4, "ngIf"], [1, "categories-side", "md:col-3", "lg:col-2", "xl:col-3", "categories"], ["class", "p-field-checkbox boxes", 4, "ngFor", "ngForOf"], [1, "p-field-checkbox", "boxes"], [1, "checkbox", 3, "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [3, "for"], [1, "grid", "g-custom"], ["class", "item-container col-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "item-container", "col-6", "col-md-4", "col-lg-3"], [3, "product"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, ProductsListComponent_div_2_Template, 4, 1, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, ProductsListComponent_div_4_Template, 2, 1, "div", 4);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isCategoryPage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, !ctx.isCategoryPage, ctx.isCategoryPage));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.products);
    } }, directives: [i4.NgIf, i4.NgForOf, i5.Checkbox, i6.NgControlStatus, i6.NgModel, i4.NgClass, i7.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsListComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-products-list', styles: [], template: "<div class=\"products-page\">\r\n  <div class=\"grid\">\r\n    <div class=\" categories-side md:col-3 lg:col-2 xl:col-3 categories\" *ngIf=\"!isCategoryPage\">\r\n      <h4>Categories</h4>\r\n      <div class=\"p-field-checkbox boxes\" *ngFor=\"let category of categories\">\r\n        <p-checkbox [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\r\n          (onChange)=\"categoryFilter()\" class=\"checkbox\"></p-checkbox>\r\n        <label for=\"{{category.id}}\">{{category.name}}</label>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    \r\n\r\n    <div class=\"sm:col-12 md:col-9 lg:col-10 p-list\" [ngClass]=\"{'xl:col-9' : !isCategoryPage, 'md:col-12 lg:col-12 xl:col-12' : isCategoryPage }\">\r\n      <div class=\"grid g-custom\" *ngIf=\"products\">\r\n\r\n        <div *ngFor=\"let product of products\" class=\"item-container col-6 col-md-4 col-lg-3\">\r\n\r\n          <eshop-frontend-product-item [product]=\"product\"></eshop-frontend-product-item>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.CategoriesService }, { type: i3.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3Byb2R1Y3RzL3NyYy9saWIvcGFnZXMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7OztJQ0Y1RCw4QkFBd0Usb0JBQUE7SUFDMUQsOFBBQThCLHNLQUM1Qix1QkFBZ0IsSUFEWTtJQUNPLGlCQUFhO0lBQzlELGdDQUE2QjtJQUFBLFlBQWlCO0lBQUEsaUJBQVEsRUFBQTs7OztJQUYxQyxlQUE4QjtJQUE5Qiw2Q0FBOEIsNkJBQUEsMkJBQUE7SUFFbkMsZUFBcUI7SUFBckIsK0NBQXFCO0lBQUMsZUFBaUI7SUFBakIsc0NBQWlCOzs7SUFMbEQsOEJBQTRGLFNBQUE7SUFDdEYsMEJBQVU7SUFBQSxpQkFBSztJQUNuQiw0RUFLTTtJQUNSLGlCQUFNOzs7SUFOcUQsZUFBYTtJQUFiLDJDQUFhOzs7SUFhcEUsK0JBQXFGO0lBRW5GLGtEQUErRTtJQUVqRixpQkFBTTs7O0lBRnlCLGVBQW1CO0lBQW5CLG9DQUFtQjs7O0lBSnBELCtCQUE0QztJQUUxQyw2RUFJTTtJQUNSLGlCQUFNOzs7SUFMcUIsZUFBVztJQUFYLHlDQUFXOzs7QURGNUMsTUFBTSxPQUFPLHFCQUFx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QjtRQUFyQiwwQ0FBcUI7UUFZekMsZUFBNkY7UUFBN0YsNkZBQTZGO1FBQ2hILGVBQWM7UUFBZCxtQ0FBYzs7dUZEQW5DLHFCQUFxQjtjQU5qQyxTQUFTOzJCQUNFLDhCQUE4QixVQUVoQyxFQUNQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2F0ZWdvcnknO1xyXG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhdGVnb3JpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcHJvZHVjdHMtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNDaGVja2VkID0gZmFsc2VcclxuICBwcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XHJcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSA9IFtdO1xyXG4gIGJpbmFyeVByb3AgPSB0cnVlO1xyXG4gIGlzQ2F0ZWdvcnlQYWdlOiBib29sZWFuO1xyXG4gIHVybDtcclxuICBfdXJsU2VnbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2F0U2VydmljZTogQ2F0ZWdvcmllc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICB0aGlzLl91cmxTZWdtZW50ID0gdGhpcy51cmwudmFsdWVbMF0ucGF0aFxyXG4gICAgY29uc29sZS5sb2codGhpcy5fdXJsU2VnbWVudCk7XHJcblxyXG4gICAgaWYodGhpcy5fdXJsU2VnbWVudCA9PT0gXCJwcm9kdWN0c1wiKXtcclxuICAgICAgXHJcbiAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+e1xyXG4gICAgICAgIHBhcmFtcy5jYXRlZ29yeWlkID8gdGhpcy5fZ2V0UHJvZHVjdHMoW3BhcmFtcy5jYXRlZ29yeWlkXSkgOiB0aGlzLl9nZXRQcm9kdWN0cygpO1xyXG4gICAgICAgIHBhcmFtcy5jYXRlZ29yeWlkID8gdGhpcy5pc0NhdGVnb3J5UGFnZSA9IHRydWUgOiB0aGlzLmlzQ2F0ZWdvcnlQYWdlID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuX2dldENhdGVnb3JpZXMoKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+e1xyXG4gICAgICAgIHBhcmFtcy5jYXRlZ29yeWlkID8gdGhpcy5fZ2V0V1Byb2R1Y3RzKFtwYXJhbXMuY2F0ZWdvcnlpZF0pIDogdGhpcy5fZ2V0V1Byb2R1Y3RzKCk7XHJcbiAgICAgICAgcGFyYW1zLmNhdGVnb3J5aWQgPyB0aGlzLmlzQ2F0ZWdvcnlQYWdlID0gdHJ1ZSA6IHRoaXMuaXNDYXRlZ29yeVBhZ2UgPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHRoaXMuX2dldENhdGVnb3JpZXMoKTtcclxuICAgIFxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFByb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRNUHJvZHVjdHMoY2F0ZWdvcmllc0ZpbHRlcikuc3Vic2NyaWJlKChyZXNQcm9kdWN0cykgPT4ge1xyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gcmVzUHJvZHVjdHM7XHJcblxyXG4gICAgICBcclxuICAgICAgY29uc3QgdW5pcXVlUHJvZHMgPSBbLi4udGhpcy5wcm9kdWN0cy5yZWR1Y2UoKG1hcCwgb2JqKSA9PiBtYXAuc2V0KG9iai5uYW1lLCBvYmopLCBuZXcgTWFwKCkpLnZhbHVlcygpXTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKHVuaXF1ZVByb2RzKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMucHJvZHVjdHMgPSB1bmlxdWVQcm9kcztcclxuIFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRXUHJvZHVjdHMoY2F0ZWdvcmllc0ZpbHRlcj86IHN0cmluZ1tdKXtcclxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0V1Byb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXIpLnN1YnNjcmliZSgocmVzcFByb2RzKT0+e1xyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcFByb2RzO1xyXG5cclxuICAgICAgY29uc3QgdW5pcXVlUHJvZHMgPSBbLi4udGhpcy5wcm9kdWN0cy5yZWR1Y2UoKG1hcCwgb2JqKSA9PiBtYXAuc2V0KG9iai5uYW1lLCBvYmopLCBuZXcgTWFwKCkpLnZhbHVlcygpXTtcclxuICAgIFxyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XHJcblxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldENhdGVnb3JpZXMoKXtcclxuICAgIHRoaXMuY2F0U2VydmljZS5nZXRDYXRlZ29yaWVzKCkuc3Vic2NyaWJlKHJlc0NhdHMgPT57XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc0NhdHM7XHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuXHJcblxyXG4gY2F0ZWdvcnlGaWx0ZXIoKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzXHJcbiAgLmZpbHRlcigoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LmNoZWNrZWQgKVxyXG4gIC5tYXAoKGNhdGVnb3J5KT0+IGNhdGVnb3J5LmlkKVxyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkQ2F0ZWdvcmllcyk7XHJcblxyXG4gIGlmICh0aGlzLl91cmxTZWdtZW50ID09PSBcInByb2R1Y3RzXCIpIHtcclxuICAgIHRoaXMuX2dldFByb2R1Y3RzKHNlbGVjdGVkQ2F0ZWdvcmllcyk7XHJcbiAgICBcclxuICB9ZWxzZXtcclxuICAgIHRoaXMuX2dldFdQcm9kdWN0cyhzZWxlY3RlZENhdGVnb3JpZXMpO1xyXG4gIH1cclxuXHJcbiAgfSBcclxuXHJcblxyXG59IiwiPGRpdiBjbGFzcz1cInByb2R1Y3RzLXBhZ2VcIj5cclxuICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIiBjYXRlZ29yaWVzLXNpZGUgbWQ6Y29sLTMgbGc6Y29sLTIgeGw6Y29sLTMgY2F0ZWdvcmllc1wiICpuZ0lmPVwiIWlzQ2F0ZWdvcnlQYWdlXCI+XHJcbiAgICAgIDxoND5DYXRlZ29yaWVzPC9oND5cclxuICAgICAgPGRpdiBjbGFzcz1cInAtZmllbGQtY2hlY2tib3ggYm94ZXNcIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgIDxwLWNoZWNrYm94IFsobmdNb2RlbCldPVwiY2F0ZWdvcnkuY2hlY2tlZFwiIFtiaW5hcnldPWJpbmFyeVByb3AgW2lucHV0SWRdPVwiY2F0ZWdvcnkuaWQhXCJcclxuICAgICAgICAgIChvbkNoYW5nZSk9XCJjYXRlZ29yeUZpbHRlcigpXCIgY2xhc3M9XCJjaGVja2JveFwiPjwvcC1jaGVja2JveD5cclxuICAgICAgICA8bGFiZWwgZm9yPVwie3tjYXRlZ29yeS5pZH19XCI+e3tjYXRlZ29yeS5uYW1lfX08L2xhYmVsPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICBcclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic206Y29sLTEyIG1kOmNvbC05IGxnOmNvbC0xMCBwLWxpc3RcIiBbbmdDbGFzc109XCJ7J3hsOmNvbC05JyA6ICFpc0NhdGVnb3J5UGFnZSwgJ21kOmNvbC0xMiBsZzpjb2wtMTIgeGw6Y29sLTEyJyA6IGlzQ2F0ZWdvcnlQYWdlIH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZy1jdXN0b21cIiAqbmdJZj1cInByb2R1Y3RzXCI+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHByb2R1Y3Qgb2YgcHJvZHVjdHNcIiBjbGFzcz1cIml0ZW0tY29udGFpbmVyIGNvbC02IGNvbC1tZC00IGNvbC1sZy0zXCI+XHJcblxyXG4gICAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSBbcHJvZHVjdF09XCJwcm9kdWN0XCI+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19