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
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "eshop-frontend-product-item", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r6.w ? i0.ɵɵpureFunction1(2, _c0, "/women-products/" + product_r7.id) : i0.ɵɵpureFunction1(4, _c0, "/products/" + product_r7.id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("product", product_r7);
} }
function ProductsListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, ProductsListComponent_div_7_div_1_Template, 2, 6, "div", 10);
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
ProductsListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductsListComponent, selectors: [["eshop-frontend-products-list"]], decls: 8, vars: 2, consts: [[1, "products-page"], [1, "grid"], [1, "categories-side", "md:col-3", "lg:col-2", "xl:col-2", "categories"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "col-md-9", "col-lg-10", "col-xl-9"], ["class", "grid", "style", "justify-content: center;", 4, "ngIf"], [1, "p-field-checkbox"], [3, "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [3, "for"], [1, "grid", 2, "justify-content", "center"], ["class", "col-auto p-3", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-auto", "p-3", 3, "routerLink"], [3, "product"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        i0.ɵɵtext(4, "Categorie");
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
        args: [{ selector: 'eshop-frontend-products-list', styles: [], template: "<div class=\"products-page\">\n  <div class=\"grid\">\n    <div class=\"categories-side md:col-3 lg:col-2 xl:col-2 categories\">\n\n      <h4>Categorie</h4>\n      <div class=\"p-field-checkbox\" *ngFor=\"let category of categories\">\n        <p-checkbox [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\n          (onChange)=\"categoryFilter()\"></p-checkbox>\n        <label for=\"{{category.id}}\">{{category.name}}</label>\n\n      </div>\n    </div>\n    <div class=\"col-md-9 col-lg-10 col-xl-9\" style=\"\">\n      <div class=\"grid\" style=\"justify-content: center;\"  *ngIf=\"products\" >\n        <div class=\"col-auto p-3\" *ngFor=\"let product of products\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n\n          <eshop-frontend-product-item [product]=\"product\" ></eshop-frontend-product-item>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.CategoriesService }, { type: i3.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3Byb2R1Y3RzL3NyYy9saWIvcGFnZXMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7OztJQ0Q1RCw4QkFBa0Usb0JBQUE7SUFDcEQsd1BBQThCLCtKQUM1Qix1QkFBZ0IsSUFEWTtJQUNWLGlCQUFhO0lBQzdDLGdDQUE2QjtJQUFBLFlBQWlCO0lBQUEsaUJBQVEsRUFBQTs7OztJQUYxQyxlQUE4QjtJQUE5Qiw2Q0FBOEIsNkJBQUEsMkJBQUE7SUFFbkMsZUFBcUI7SUFBckIsK0NBQXFCO0lBQUMsZUFBaUI7SUFBakIsc0NBQWlCOzs7O0lBTTlDLCtCQUErSTtJQUU3SSxrREFBZ0Y7SUFDbEYsaUJBQU07Ozs7SUFIcUQsaUtBQW1GO0lBRS9HLGVBQW1CO0lBQW5CLG9DQUFtQjs7O0lBSHBELDhCQUFzRTtJQUNwRSw2RUFHTTtJQUVSLGlCQUFNOzs7SUFMMEMsZUFBVztJQUFYLHlDQUFXOztBRENqRSxNQUFNLE9BQU8scUJBQXFCO0lBWWhDLFlBQW9CLGVBQWdDLEVBQ2hDLFVBQTZCLEVBQzdCLEtBQXFCO1FBRnJCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNo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OzswRkE3RVUscUJBQXFCO3dFQUFyQixxQkFBcUI7UUNmbEMsOEJBQTJCLGFBQUEsYUFBQSxTQUFBO1FBSWpCLHlCQUFTO1FBQUEsaUJBQUs7UUFDbEIsc0VBS007UUFDUixpQkFBTTtRQUNOLDhCQUFrRDtRQUNoRCxzRUFNTTtRQUNSLGlCQUFNLEVBQUEsRUFBQTs7UUFmK0MsZUFBYTtRQUFiLHdDQUFhO1FBUVgsZUFBYztRQUFkLG1DQUFjOzt1RkRFNUQscUJBQXFCO2NBTmpDLFNBQVM7MkJBQ0UsOEJBQThCLFVBRWhDLEVBQ1AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy9jYXRlZ29yeSc7XG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXRlZ29yaWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcHJvZHVjdHMtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNDaGVja2VkID0gZmFsc2VcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW107XG4gIGJpbmFyeVByb3AgPSB0cnVlO1xuICBpc0NhdGVnb3J5UGFnZTogYm9vbGVhbjtcbiAgdXJsO1xuICBfdXJsU2VnbWVudDtcbiAgY2F0ZWdvcnlJZDtcbiAgc2VsZWN0ZWRDYXRlZ29yaWVzID0gW107XG4gIHNleCA9IFwiXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0c1NlcnZpY2U6IFByb2R1Y3RzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjYXRTZXJ2aWNlOiBDYXRlZ29yaWVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XG4gICAgdGhpcy5fdXJsU2VnbWVudCA9IHRoaXMudXJsLnZhbHVlWzBdLnBhdGhcbiAgICBjb25zb2xlLmxvZyh0aGlzLl91cmxTZWdtZW50KTtcblxuXG4gICAgICBcbiAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+e1xuICAgICBcbiAgICAgICAgdGhpcy5jYXRlZ29yeUlkID0gcGFyYW1zLmNhdGVnb3J5aWRcbiAgICAgICAgY29uc29sZS5sb2coXCJjYXRlZ29yeSBpZCA9IFwiICsgdGhpcy5jYXRlZ29yeUlkKVxuXG4gICAgICAgIHRoaXMuX2dldFByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMuX2dldENhdGVnb3JpZXMoKTtcbiAgICAgIH0pXG4gICAgICAgXG4gICAgXG4gIH1cblxuICBwcml2YXRlIF9nZXRQcm9kdWN0cygpIHtcblxuICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yaWVzLnB1c2godGhpcy5jYXRlZ29yeUlkKVxuXG4gICAgY29uc29sZS5sb2coXCJmYWNjaW8gbGEgcmljaGllc3RhIGdldCBwcm9kdWN0c1wiKVxuXG4gICAgc3dpdGNoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmlhXCIpKSB7XG4gICAgICBjYXNlIFwidW9tb1wiOlxuICAgICAgICB0aGlzLnNleCA9IFwiTVwiXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRvbm5hXCI6XG4gICAgICAgIHRoaXMuc2V4ID0gXCJGXCJcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBjb2RlIGJsb2NrXG4gICAgfVxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldEZpbHRlcmVkUHJvZHVjdHMobnVsbCwgdGhpcy5zZWxlY3RlZENhdGVnb3JpZXMsIHRoaXMuc2V4KS5zdWJzY3JpYmUoKHByb2R1Y3RzKT0+e1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgXG4gICAgfSk7ICAgIFxuICB9XG5cblxuXG4gIHByaXZhdGUgX2dldENhdGVnb3JpZXMoKXtcbiAgICB0aGlzLmNhdFNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpLnN1YnNjcmliZShyZXNDYXRzID0+e1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzQ2F0cztcbiAgICB9KVxuICB9XG5cbiAgY2F0ZWdvcnlGaWx0ZXIoKXtcbiAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSk9PiBjYXRlZ29yeS5jaGVja2VkKS5tYXAoKGNhdGVnb3J5KT0+IGNhdGVnb3J5LmlkKVxuICAgIGNvbnNvbGUubG9nKFwiY2F0ZWdvcmllID0gXCIgKyB0aGlzLnNlbGVjdGVkQ2F0ZWdvcmllcyk7XG4gICAgXG5cblxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldEZpbHRlcmVkUHJvZHVjdHMobnVsbCwgdGhpcy5zZWxlY3RlZENhdGVnb3JpZXMsIHRoaXMuc2V4KS5zdWJzY3JpYmUoKHByb2R1Y3RzKT0+e1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgXG4gICAgfSk7ICAgXG4gICAgXG4gIH1cblxufSIsIjxkaXYgY2xhc3M9XCJwcm9kdWN0cy1wYWdlXCI+XG4gIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhdGVnb3JpZXMtc2lkZSBtZDpjb2wtMyBsZzpjb2wtMiB4bDpjb2wtMiBjYXRlZ29yaWVzXCI+XG5cbiAgICAgIDxoND5DYXRlZ29yaWU8L2g0PlxuICAgICAgPGRpdiBjbGFzcz1cInAtZmllbGQtY2hlY2tib3hcIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiPlxuICAgICAgICA8cC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNhdGVnb3J5LmNoZWNrZWRcIiBbYmluYXJ5XT1iaW5hcnlQcm9wIFtpbnB1dElkXT1cImNhdGVnb3J5LmlkIVwiXG4gICAgICAgICAgKG9uQ2hhbmdlKT1cImNhdGVnb3J5RmlsdGVyKClcIj48L3AtY2hlY2tib3g+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ7e2NhdGVnb3J5LmlkfX1cIj57e2NhdGVnb3J5Lm5hbWV9fTwvbGFiZWw+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOSBjb2wtbGctMTAgY29sLXhsLTlcIiBzdHlsZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiICAqbmdJZj1cInByb2R1Y3RzXCIgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcC0zXCIgKm5nRm9yPVwibGV0IHByb2R1Y3Qgb2YgcHJvZHVjdHNcIiBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiPlxuXG4gICAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSBbcHJvZHVjdF09XCJwcm9kdWN0XCIgPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=