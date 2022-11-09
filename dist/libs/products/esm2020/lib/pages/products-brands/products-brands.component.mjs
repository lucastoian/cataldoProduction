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
function ProductsBrandsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "p-checkbox", 7);
    i0.ɵɵlistener("ngModelChange", function ProductsBrandsComponent_div_4_Template_p_checkbox_ngModelChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const category_r2 = restoredCtx.$implicit; return category_r2.checked = $event; })("onChange", function ProductsBrandsComponent_div_4_Template_p_checkbox_onChange_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.categoryFilter(); });
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
function ProductsBrandsComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
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
function ProductsBrandsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, ProductsBrandsComponent_div_6_div_1_Template, 2, 6, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.products);
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
        this.sex = "";
    }
    ngOnInit() {
        this.url = this.route.url;
        this._urlSegment = this.url.value[0].path;
        console.log("url segment = " + this._urlSegment);
        if (this._urlSegment === "products") {
            this._retrieveId();
            this._getProdByBrand();
            this._getCategories();
            this.fromCarousel = false;
        }
    }
    _retrieveId() {
        this.route.params.subscribe((params) => {
            this.currentId = params.brandId;
            console.log("brand id = " + this.currentId);
            console.log("brand name = " + this.brandName);
        });
    }
    _getProdByBrand(categoriesFilter) {
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
        this.productsService.getFilteredProducts(this.currentId, null, this.sex).subscribe((products) => {
            this.products = products;
            this.filteredProducts = products;
        });
    }
    _getCategories() {
        this.catService.getCategories().subscribe(resCats => {
            this.categories = resCats;
        });
    }
    categoryFilter() {
        this.products = [];
        const selectedCategories = this.categories.filter((category) => category.checked).map((category) => category.id);
        console.log("categorie = " + selectedCategories);
        this.productsService.getFilteredProducts(this.currentId, selectedCategories, this.sex).subscribe((products) => {
            this.products = products;
        });
    }
}
ProductsBrandsComponent.ɵfac = function ProductsBrandsComponent_Factory(t) { return new (t || ProductsBrandsComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ProductsService), i0.ɵɵdirectiveInject(i3.CategoriesService), i0.ɵɵdirectiveInject(i4.W_ProductsService)); };
ProductsBrandsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductsBrandsComponent, selectors: [["eshop-frontend-products-brands"]], inputs: { product: "product" }, decls: 7, vars: 2, consts: [[1, "products-page"], [1, "grid"], [1, "categories-side", "md:col-3", "lg:col-2", "xl:col-3", "categories", 2, "padding-left", "20px"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "sm:col-12", "md:col-9", "lg:col-10", "xl:col-9", 2, "padding", "30px"], ["class", "grid", 4, "ngIf"], [1, "p-field-checkbox"], [3, "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [3, "for"], ["class", "item-container sm:col-6 md:col-6 lg:col-3 xl:col-3", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "item-container", "sm:col-6", "md:col-6", "lg:col-3", "xl:col-3", 3, "routerLink"], [3, "product"]], template: function ProductsBrandsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵelement(3, "h4");
        i0.ɵɵtemplate(4, ProductsBrandsComponent_div_4_Template, 4, 5, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtemplate(6, ProductsBrandsComponent_div_6_Template, 2, 1, "div", 5);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.categories);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.products);
    } }, directives: [i5.NgForOf, i6.Checkbox, i7.NgControlStatus, i7.NgModel, i5.NgIf, i1.RouterLink, i8.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsBrandsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-products-brands', styles: [], template: "<div class=\"products-page\">\n  <div class=\"grid\">\n    <div class=\"categories-side md:col-3 lg:col-2 xl:col-3 categories\" style=\"padding-left: 20px;\">\n     \n      <h4></h4>\n        <div class=\"p-field-checkbox\" *ngFor=\"let category of categories\">\n          <p-checkbox [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\n            (onChange)=\"categoryFilter()\"></p-checkbox>\n          <label for=\"{{category.id}}\">{{category.name}}</label>\n\n        </div>\n      \n    </div>\n    <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" style=\"padding: 30px;\">\n      <div class=\"grid\" *ngIf=\"products\" >\n        <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let product of products\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n\n          <eshop-frontend-product-item [product]=\"product\"></eshop-frontend-product-item>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i3.CategoriesService }, { type: i4.W_ProductsService }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7Ozs7SUNGOUQsOEJBQWtFLG9CQUFBO0lBQ3BELDBQQUE4QixpS0FDNUIsdUJBQWdCLElBRFk7SUFDVixpQkFBYTtJQUM3QyxnQ0FBNkI7SUFBQSxZQUFpQjtJQUFBLGlCQUFRLEVBQUE7Ozs7SUFGMUMsZUFBOEI7SUFBOUIsNkNBQThCLDZCQUFBLDJCQUFBO0lBRW5DLGVBQXFCO0lBQXJCLCtDQUFxQjtJQUFDLGVBQWlCO0lBQWpCLHNDQUFpQjs7OztJQU9oRCwrQkFBcUw7SUFFbkwsa0RBQStFO0lBQ2pGLGlCQUFNOzs7O0lBSDJGLGlLQUFtRjtJQUVySixlQUFtQjtJQUFuQixvQ0FBbUI7OztJQUhwRCw4QkFBb0M7SUFDbEMsOEVBR007SUFFUixpQkFBTTs7O0lBTGdGLGVBQVc7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LENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDOUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztRQUlqRCxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFO1lBQzNHLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRTNCLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQzs7OEZBN0ZVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDaEJwQyw4QkFBMkIsYUFBQSxhQUFBO1FBSXJCLHFCQUFTO1FBQ1Asd0VBS007UUFFVixpQkFBTTtRQUNOLDhCQUEwRTtRQUN4RSx3RUFNTTtRQUNSLGlCQUFNLEVBQUEsRUFBQTs7UUFoQmlELGVBQWE7UUFBYix3Q0FBYTtRQVMvQyxlQUFjO1FBQWQsbUNBQWM7O3VGREUxQix1QkFBdUI7Y0FObkMsU0FBUzsyQkFDRSxnQ0FBZ0MsVUFFbEMsRUFDUDsrSkFPUSxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5JztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBXX1Byb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvdy1wcm9kdWN0JztcbmltcG9ydCB7IENhdGVnb3JpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgV19Qcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93LXByb2R1Y3RzLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3RzLWJyYW5kcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0cy1icmFuZHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xuICBiaW5hcnlQcm9wID0gdHJ1ZTtcbiAgY3VycmVudElkOiBzdHJpbmc7XG4gIGJyYW5kTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuICBwcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIHdQcm9kczogV19Qcm9kdWN0W10gPSBbXTtcbiAgZmlsdGVyZWRQcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXTtcbiAgdXJsO1xuICBfdXJsU2VnbWVudDtcbiAgZnJvbUNhcm91c2VsOiBib29sZWFuO1xuICBzZXggPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNhdFNlcnZpY2UgOiBDYXRlZ29yaWVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3UHJvZFNlcnZpY2U6IFdfUHJvZHVjdHNTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XG4gICAgdGhpcy5fdXJsU2VnbWVudCA9IHRoaXMudXJsLnZhbHVlWzBdLnBhdGhcbiAgICBjb25zb2xlLmxvZyhcInVybCBzZWdtZW50ID0gXCIgKyB0aGlzLl91cmxTZWdtZW50KTtcbiBcblxuICAgICAgICBpZih0aGlzLl91cmxTZWdtZW50ID09PSBcInByb2R1Y3RzXCIpe1xuICAgICAgICAgIHRoaXMuX3JldHJpZXZlSWQoKTtcbiAgICAgICAgICB0aGlzLl9nZXRQcm9kQnlCcmFuZCgpO1xuXG4gICAgICAgICAgdGhpcy5fZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICAgIHRoaXMuZnJvbUNhcm91c2VsID0gZmFsc2U7XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgXG5cbiAgICBcblxuXG4gIH1cblxuICBwcml2YXRlIF9yZXRyaWV2ZUlkKCl7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT57XG4gICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMuYnJhbmRJZDtcbiAgICAgICBjb25zb2xlLmxvZyhcImJyYW5kIGlkID0gXCIgKyB0aGlzLmN1cnJlbnRJZCk7ICAgIFxuICAgICAgIGNvbnNvbGUubG9nKFwiYnJhbmQgbmFtZSA9IFwiICsgdGhpcy5icmFuZE5hbWUpOyAgIFxuICAgICAgIH0pXG4gIH1cblxuICBwcml2YXRlIF9nZXRQcm9kQnlCcmFuZChjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pe1xuXG4gICAgc3dpdGNoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmlhXCIpKSB7XG4gICAgICBjYXNlIFwidW9tb1wiOlxuICAgICAgICB0aGlzLnNleCA9IFwiTVwiXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRvbm5hXCI6XG4gICAgICAgIHRoaXMuc2V4ID0gXCJGXCJcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBjb2RlIGJsb2NrXG4gICAgfVxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldEZpbHRlcmVkUHJvZHVjdHModGhpcy5jdXJyZW50SWQsIG51bGwsIHRoaXMuc2V4KS5zdWJzY3JpYmUoKHByb2R1Y3RzKT0+e1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICBcbiAgXG4gICAgICBcbiAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgXG4gICAgICBcbiAgICB9KTsgICAgXG4gIH1cblxuXG4gIHByaXZhdGUgX2dldENhdGVnb3JpZXMoKXtcbiAgICB0aGlzLmNhdFNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpLnN1YnNjcmliZShyZXNDYXRzID0+e1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzQ2F0cztcbiAgICB9KVxuICB9XG5cbiAgY2F0ZWdvcnlGaWx0ZXIoKXtcbiAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpPT4gY2F0ZWdvcnkuY2hlY2tlZCkubWFwKChjYXRlZ29yeSk9PiBjYXRlZ29yeS5pZClcbiAgICBjb25zb2xlLmxvZyhcImNhdGVnb3JpZSA9IFwiICsgc2VsZWN0ZWRDYXRlZ29yaWVzKTtcbiAgICBcblxuXG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0RmlsdGVyZWRQcm9kdWN0cyh0aGlzLmN1cnJlbnRJZCwgc2VsZWN0ZWRDYXRlZ29yaWVzLCB0aGlzLnNleCkuc3Vic2NyaWJlKChwcm9kdWN0cyk9PntcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgIFxuICAgIH0pOyAgIFxuICAgIFxuICB9XG5cblxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicHJvZHVjdHMtcGFnZVwiPlxuICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yaWVzLXNpZGUgbWQ6Y29sLTMgbGc6Y29sLTIgeGw6Y29sLTMgY2F0ZWdvcmllc1wiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAyMHB4O1wiPlxuICAgICBcbiAgICAgIDxoND48L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1maWVsZC1jaGVja2JveFwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzXCI+XG4gICAgICAgICAgPHAtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJjYXRlZ29yeS5jaGVja2VkXCIgW2JpbmFyeV09YmluYXJ5UHJvcCBbaW5wdXRJZF09XCJjYXRlZ29yeS5pZCFcIlxuICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImNhdGVnb3J5RmlsdGVyKClcIj48L3AtY2hlY2tib3g+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInt7Y2F0ZWdvcnkuaWR9fVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9sYWJlbD5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzbTpjb2wtMTIgbWQ6Y29sLTkgbGc6Y29sLTEwIHhsOmNvbC05XCIgc3R5bGU9XCJwYWRkaW5nOiAzMHB4O1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIiAqbmdJZj1cInByb2R1Y3RzXCIgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250YWluZXIgc206Y29sLTYgbWQ6Y29sLTYgbGc6Y29sLTMgeGw6Y29sLTNcIiAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0c1wiIFtyb3V0ZXJMaW5rXT1cIiB3ID8gWycvd29tZW4tcHJvZHVjdHMvJyArIHByb2R1Y3QuaWRdIDogWycvcHJvZHVjdHMvJyArIHByb2R1Y3QuaWRdXCI+XG5cbiAgICAgICAgICA8ZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtIFtwcm9kdWN0XT1cInByb2R1Y3RcIj48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19