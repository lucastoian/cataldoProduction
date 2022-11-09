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
function ProductsListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "p-checkbox", 7);
    i0.ɵɵlistener("ngModelChange", function ProductsListComponent_div_5_Template_p_checkbox_ngModelChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const category_r2 = restoredCtx.$implicit; return category_r2.checked = $event; })("onChange", function ProductsListComponent_div_5_Template_p_checkbox_onChange_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.categoryFilter(); });
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
function ProductsListComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
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
function ProductsListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, ProductsListComponent_div_7_div_1_Template, 2, 6, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.products);
} }
export class ProductsListComponent {
    constructor(productsService, catService, route) {
        this.productsService = productsService;
        this.catService = catService;
        this.route = route;
        this.isChecked = false;
        this.products = [];
        this.categories = [];
        this.binaryProp = true;
        this.selectedCategories = [];
        this.sex = "";
    }
    ngOnInit() {
        this.url = this.route.url;
        this._urlSegment = this.url.value[0].path;
        console.log(this._urlSegment);
        this.route.params.subscribe((params) => {
            this.categoryId = params.categoryid;
            console.log("category id = " + this.categoryId);
            this._getProducts();
            this._getCategories();
        });
    }
    _getProducts() {
        this.selectedCategories.push(this.categoryId);
        console.log("faccio la richiesta get products");
        switch (localStorage.getItem("categoria")) {
            case "uomo":
                this.sex = "M";
                break;
            case "donna":
                this.sex = "F";
                break;
            default:
            // code block
        }
        this.productsService.getFilteredProducts(null, this.selectedCategories, this.sex).subscribe((products) => {
            this.products = products;
        });
    }
    _getCategories() {
        this.catService.getCategories().subscribe(resCats => {
            this.categories = resCats;
        });
    }
    categoryFilter() {
        this.products = [];
        this.selectedCategories = this.categories.filter((category) => category.checked).map((category) => category.id);
        console.log("categorie = " + this.selectedCategories);
        this.productsService.getFilteredProducts(null, this.selectedCategories, this.sex).subscribe((products) => {
            this.products = products;
        });
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(i0.ɵɵdirectiveInject(i1.ProductsService), i0.ɵɵdirectiveInject(i2.CategoriesService), i0.ɵɵdirectiveInject(i3.ActivatedRoute)); };
ProductsListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductsListComponent, selectors: [["eshop-frontend-products-list"]], decls: 8, vars: 2, consts: [[1, "products-page"], [1, "grid"], [1, "categories-side", "md:col-3", "lg:col-2", "xl:col-3", "categories", 2, "padding-left", "20px"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "sm:col-12", "md:col-9", "lg:col-10", "xl:col-9", 2, "padding", "30px"], ["class", "grid", 4, "ngIf"], [1, "p-field-checkbox"], [3, "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [3, "for"], ["class", "item-container sm:col-6 md:col-6 lg:col-3 xl:col-3", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "item-container", "sm:col-6", "md:col-6", "lg:col-3", "xl:col-3", 3, "routerLink"], [3, "product"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        i0.ɵɵtext(4, "Categorie23");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, ProductsListComponent_div_5_Template, 4, 5, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵtemplate(7, ProductsListComponent_div_7_Template, 2, 1, "div", 5);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.categories);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.products);
    } }, directives: [i4.NgForOf, i5.Checkbox, i6.NgControlStatus, i6.NgModel, i4.NgIf, i3.RouterLink, i7.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsListComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-products-list', styles: [], template: "<div class=\"products-page\">\n  <div class=\"grid\">\n    <div class=\"categories-side md:col-3 lg:col-2 xl:col-3 categories\" style=\"padding-left: 20px;\">\n\n      <h4>Categorie23</h4>\n      <div class=\"p-field-checkbox\" *ngFor=\"let category of categories\">\n        <p-checkbox [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\n          (onChange)=\"categoryFilter()\"></p-checkbox>\n        <label for=\"{{category.id}}\">{{category.name}}</label>\n\n      </div>\n    </div>\n    <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" style=\"padding: 30px;\">\n      <div class=\"grid\" *ngIf=\"products\" >\n        <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let product of products\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n\n          <eshop-frontend-product-item [product]=\"product\"></eshop-frontend-product-item>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.CategoriesService }, { type: i3.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3Byb2R1Y3RzL3NyYy9saWIvcGFnZXMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7OztJQ0Q1RCw4QkFBa0Usb0JBQUE7SUFDcEQsd1BBQThCLCtKQUM1Qix1QkFBZ0IsSUFEWTtJQUNWLGlCQUFhO0lBQzdDLGdDQUE2QjtJQUFBLFlBQWlCO0lBQUEsaUJBQVEsRUFBQTs7OztJQUYxQyxlQUE4QjtJQUE5Qiw2Q0FBOEIsNkJBQUEsMkJBQUE7SUFFbkMsZUFBcUI7SUFBckIsK0NBQXFCO0lBQUMsZUFBaUI7SUFBakIsc0NBQWlCOzs7O0lBTTlDLCtCQUFxTDtJQUVuTCxrREFBK0U7SUFDakYsaUJBQU07Ozs7SUFIMkYsaUtBQW1GO0lBRXJKLGVBQW1CO0lBQW5CLG9DQUFtQjs7O0lBSHBELDhCQUFvQztJQUNsQyw0RUFHTTtJQUVSLGlCQUFNOzs7SUFMZ0YsZUFBVztJQUFYLHlDQUFXOztBREN2RyxNQUFNLE9BQU8scUJBQXFCO0lBWWhDLFlBQW9CLGVBQWdDLEVBQ2hDLFVBQTZCLEVBQzdCLEtBQXFCO1FBRnJCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNo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OzswRkE3RVUscUJBQXFCO3dFQUFyQixxQkFBcUI7UUNmbEMsOEJBQTJCLGFBQUEsYUFBQSxTQUFBO1FBSWpCLDJCQUFXO1FBQUEsaUJBQUs7UUFDcEIsc0VBS007UUFDUixpQkFBTTtRQUNOLDhCQUEwRTtRQUN4RSxzRUFNTTtRQUNSLGlCQUFNLEVBQUEsRUFBQTs7UUFmK0MsZUFBYTtRQUFiLHdDQUFhO1FBUTdDLGVBQWM7UUFBZCxtQ0FBYzs7dUZERTFCLHFCQUFxQjtjQU5qQyxTQUFTOzJCQUNFLDhCQUE4QixVQUVoQyxFQUNQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2F0ZWdvcnknO1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IENhdGVnb3JpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3RzLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdHMtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzQ2hlY2tlZCA9IGZhbHNlXG4gIHByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSA9IFtdO1xuICBiaW5hcnlQcm9wID0gdHJ1ZTtcbiAgaXNDYXRlZ29yeVBhZ2U6IGJvb2xlYW47XG4gIHVybDtcbiAgX3VybFNlZ21lbnQ7XG4gIGNhdGVnb3J5SWQ7XG4gIHNlbGVjdGVkQ2F0ZWdvcmllcyA9IFtdO1xuICBzZXggPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2F0U2VydmljZTogQ2F0ZWdvcmllc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xuICAgIHRoaXMuX3VybFNlZ21lbnQgPSB0aGlzLnVybC52YWx1ZVswXS5wYXRoXG4gICAgY29uc29sZS5sb2codGhpcy5fdXJsU2VnbWVudCk7XG5cblxuICAgICAgXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcbiAgICAgXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlJZCA9IHBhcmFtcy5jYXRlZ29yeWlkXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2F0ZWdvcnkgaWQgPSBcIiArIHRoaXMuY2F0ZWdvcnlJZClcblxuICAgICAgICB0aGlzLl9nZXRQcm9kdWN0cygpO1xuICAgICAgICB0aGlzLl9nZXRDYXRlZ29yaWVzKCk7XG4gICAgICB9KVxuICAgICAgIFxuICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJvZHVjdHMoKSB7XG5cbiAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcmllcy5wdXNoKHRoaXMuY2F0ZWdvcnlJZClcblxuICAgIGNvbnNvbGUubG9nKFwiZmFjY2lvIGxhIHJpY2hpZXN0YSBnZXQgcHJvZHVjdHNcIilcblxuICAgIHN3aXRjaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpYVwiKSkge1xuICAgICAgY2FzZSBcInVvbW9cIjpcbiAgICAgICAgdGhpcy5zZXggPSBcIk1cIlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkb25uYVwiOlxuICAgICAgICB0aGlzLnNleCA9IFwiRlwiXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gY29kZSBibG9ja1xuICAgIH1cbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRGaWx0ZXJlZFByb2R1Y3RzKG51bGwsIHRoaXMuc2VsZWN0ZWRDYXRlZ29yaWVzLCB0aGlzLnNleCkuc3Vic2NyaWJlKChwcm9kdWN0cyk9PntcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgIFxuICAgIH0pOyAgICBcbiAgfVxuXG5cblxuICBwcml2YXRlIF9nZXRDYXRlZ29yaWVzKCl7XG4gICAgdGhpcy5jYXRTZXJ2aWNlLmdldENhdGVnb3JpZXMoKS5zdWJzY3JpYmUocmVzQ2F0cyA9PntcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc0NhdHM7XG4gICAgfSlcbiAgfVxuXG4gIGNhdGVnb3J5RmlsdGVyKCl7XG4gICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpPT4gY2F0ZWdvcnkuY2hlY2tlZCkubWFwKChjYXRlZ29yeSk9PiBjYXRlZ29yeS5pZClcbiAgICBjb25zb2xlLmxvZyhcImNhdGVnb3JpZSA9IFwiICsgdGhpcy5zZWxlY3RlZENhdGVnb3JpZXMpO1xuICAgIFxuXG5cbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRGaWx0ZXJlZFByb2R1Y3RzKG51bGwsIHRoaXMuc2VsZWN0ZWRDYXRlZ29yaWVzLCB0aGlzLnNleCkuc3Vic2NyaWJlKChwcm9kdWN0cyk9PntcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgIFxuICAgIH0pOyAgIFxuICAgIFxuICB9XG5cbn0iLCI8ZGl2IGNsYXNzPVwicHJvZHVjdHMtcGFnZVwiPlxuICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yaWVzLXNpZGUgbWQ6Y29sLTMgbGc6Y29sLTIgeGw6Y29sLTMgY2F0ZWdvcmllc1wiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAyMHB4O1wiPlxuXG4gICAgICA8aDQ+Q2F0ZWdvcmllMjM8L2g0PlxuICAgICAgPGRpdiBjbGFzcz1cInAtZmllbGQtY2hlY2tib3hcIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiPlxuICAgICAgICA8cC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNhdGVnb3J5LmNoZWNrZWRcIiBbYmluYXJ5XT1iaW5hcnlQcm9wIFtpbnB1dElkXT1cImNhdGVnb3J5LmlkIVwiXG4gICAgICAgICAgKG9uQ2hhbmdlKT1cImNhdGVnb3J5RmlsdGVyKClcIj48L3AtY2hlY2tib3g+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ7e2NhdGVnb3J5LmlkfX1cIj57e2NhdGVnb3J5Lm5hbWV9fTwvbGFiZWw+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzbTpjb2wtMTIgbWQ6Y29sLTkgbGc6Y29sLTEwIHhsOmNvbC05XCIgc3R5bGU9XCJwYWRkaW5nOiAzMHB4O1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIiAqbmdJZj1cInByb2R1Y3RzXCIgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250YWluZXIgc206Y29sLTYgbWQ6Y29sLTYgbGc6Y29sLTMgeGw6Y29sLTNcIiAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0c1wiIFtyb3V0ZXJMaW5rXT1cIiB3ID8gWycvd29tZW4tcHJvZHVjdHMvJyArIHByb2R1Y3QuaWRdIDogWycvcHJvZHVjdHMvJyArIHByb2R1Y3QuaWRdXCI+XG5cbiAgICAgICAgICA8ZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtIFtwcm9kdWN0XT1cInByb2R1Y3RcIj48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19