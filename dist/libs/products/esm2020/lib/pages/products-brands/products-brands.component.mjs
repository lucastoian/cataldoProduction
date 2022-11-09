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
            console.log(this.brandName);
        });
    }
    _getProdByBrand(categoriesFilter) {
        let sex = "";
        switch (localStorage.getItem("categoria")) {
            case "uomo":
                sex = "M";
                break;
            case "donna":
                sex = "F";
                break;
            default:
            // code block
        }
        this.productsService.getFilteredProducts(this.currentId, sex).subscribe((products) => {
            this.products = products;
            this.filteredProducts = products;
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
ProductsBrandsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductsBrandsComponent, selectors: [["eshop-frontend-products-brands"]], inputs: { product: "product" }, decls: 8, vars: 2, consts: [[1, "products-page"], [1, "grid"], [1, "categories-side", "md:col-3", "lg:col-2", "xl:col-3", "categories", 2, "padding-left", "20px"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "sm:col-12", "md:col-9", "lg:col-10", "xl:col-9", 2, "padding", "30px"], ["class", "grid", 4, "ngIf"], [1, "p-field-checkbox"], [3, "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [3, "for"], ["class", "item-container sm:col-6 md:col-6 lg:col-3 xl:col-3", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "item-container", "sm:col-6", "md:col-6", "lg:col-3", "xl:col-3", 3, "routerLink"], [3, "product"]], template: function ProductsBrandsComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'eshop-frontend-products-brands', styles: [], template: "<div class=\"products-page\">\n  <div class=\"grid\">\n    <div class=\"categories-side md:col-3 lg:col-2 xl:col-3 categories\" style=\"padding-left: 20px;\">\n\n      <h4>Categorie</h4>\n      <div class=\"p-field-checkbox\" *ngFor=\"let category of categories\">\n        <p-checkbox [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\n          (onChange)=\"categoryFilter()\"></p-checkbox>\n        <label for=\"{{category.id}}\">{{category.name}}</label>\n\n      </div>\n    </div>\n    <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" style=\"padding: 30px;\">\n      <div class=\"grid\" *ngIf=\"products\" >\n        <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let product of filteredProducts\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n\n          <eshop-frontend-product-item [product]=\"product\"></eshop-frontend-product-item>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i3.CategoriesService }, { type: i4.W_ProductsService }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7Ozs7SUNGaEUsOEJBQWtFLG9CQUFBO0lBQ3BELDBQQUE4QixpS0FDNUIsdUJBQWdCLElBRFk7SUFDVixpQkFBYTtJQUM3QyxnQ0FBNkI7SUFBQSxZQUFpQjtJQUFBLGlCQUFRLEVBQUE7Ozs7SUFGMUMsZUFBOEI7SUFBOUIsNkNBQThCLDZCQUFBLDJCQUFBO0lBRW5DLGVBQXFCO0lBQXJCLCtDQUFxQjtJQUFDLGVBQWlCO0lBQWpCLHNDQUFpQjs7OztJQU05QywrQkFBNkw7SUFFM0wsa0RBQStFO0lBQ2pGLGlCQUFNOzs7O0lBSG1HLGlLQUFtRjtJQUU3SixlQUFtQjtJQUFuQixvQ0FBbUI7OztJQUhwRCw4QkFBb0M7SUFDbEMsOEVBR007SUFFUixpQkFBTTs7O0lBTGdGLGVBQW1C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LEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDOUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBRTFDO2FBQUk7WUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUMzQztJQUVILENBQUM7OzhGQXZIVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ2hCcEMsOEJBQTJCLGFBQUEsYUFBQSxTQUFBO1FBSWpCLHlCQUFTO1FBQUEsaUJBQUs7UUFDbEIsd0VBS007UUFDUixpQkFBTTtRQUNOLDhCQUEwRTtRQUN4RSx3RUFNTTtRQUNSLGlCQUFNLEVBQUEsRUFBQTs7UUFmK0MsZUFBYTtRQUFiLHdDQUFhO1FBUTdDLGVBQWM7UUFBZCxtQ0FBYzs7dUZERzFCLHVCQUF1QjtjQU5uQyxTQUFTOzJCQUNFLGdDQUFnQyxVQUVsQyxFQUNQOytKQU9RLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2F0ZWdvcnknO1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IFdfUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy93LXByb2R1Y3QnO1xuaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXRlZ29yaWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBXX1Byb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcHJvZHVjdHMtYnJhbmRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3RzLWJyYW5kcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNDaGVja2VkID0gZmFsc2U7XG4gIGJpbmFyeVByb3AgPSB0cnVlO1xuICBjdXJyZW50SWQ6IHN0cmluZztcbiAgYnJhbmROYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XG4gIHByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgd1Byb2RzOiBXX1Byb2R1Y3RbXSA9IFtdO1xuICBmaWx0ZXJlZFByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSA9IFtdO1xuICB1cmw7XG4gIF91cmxTZWdtZW50O1xuICBmcm9tQ2Fyb3VzZWw6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2F0U2VydmljZSA6IENhdGVnb3JpZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHdQcm9kU2VydmljZTogV19Qcm9kdWN0c1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcbiAgICB0aGlzLl91cmxTZWdtZW50ID0gdGhpcy51cmwudmFsdWVbMF0ucGF0aFxuICAgIGNvbnNvbGUubG9nKFwidXJsIHNlZ21lbnQgPSBcIiArIHRoaXMuX3VybFNlZ21lbnQpO1xuIFxuXG4gICAgICAgIGlmKHRoaXMuX3VybFNlZ21lbnQgPT09IFwicHJvZHVjdHNcIil7XG4gICAgICAgICAgdGhpcy5fcmV0cmlldmVJZCgpO1xuICAgICAgICAgIHRoaXMuX2dldFByb2RCeUJyYW5kKCk7XG5cbiAgICAgICAgICB0aGlzLl9nZXRDYXRlZ29yaWVzKCk7XG4gICAgICAgICAgdGhpcy5mcm9tQ2Fyb3VzZWwgPSBmYWxzZTtcbiAgICBcbiAgICAgICAgfVxuXG4gICAgICBcblxuICAgIFxuXG5cbiAgfVxuXG4gIHByaXZhdGUgX3JldHJpZXZlSWQoKXtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcbiAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5icmFuZElkO1xuICAgICAgIGNvbnNvbGUubG9nKFwiYnJhbmQgaWQgPSBcIiArIHRoaXMuY3VycmVudElkKTsgICAgXG4gICAgICAgY29uc29sZS5sb2codGhpcy5icmFuZE5hbWUpOyAgIFxuICAgICAgIH0pXG4gIH1cblxuICBwcml2YXRlIF9nZXRQcm9kQnlCcmFuZChjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pe1xuICAgIGxldCBzZXggPSBcIlwiO1xuICAgIHN3aXRjaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpYVwiKSkge1xuICAgICAgY2FzZSBcInVvbW9cIjpcbiAgICAgICAgc2V4ID0gXCJNXCJcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZG9ubmFcIjpcbiAgICAgICAgc2V4ID0gXCJGXCJcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBjb2RlIGJsb2NrXG4gICAgfVxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldEZpbHRlcmVkUHJvZHVjdHModGhpcy5jdXJyZW50SWQsIHNleCkuc3Vic2NyaWJlKChwcm9kdWN0cyk9PntcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgXG4gIFxuICAgICAgXG4gICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgIFxuICAgICAgXG4gICAgfSk7ICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0V1Byb2RCeUJyYW5kKGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSl7XG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0V1Byb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXIpLnN1YnNjcmliZSgocHJvZHVjdHMpPT57XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gIFxuICAgICAgXG4gICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihwcm9kID0+IHByb2QuYnJhbmQgPT09IHRoaXMuY3VycmVudElkKVxuICAgICAgY29uc29sZS5sb2coZmlsdGVyZWQpO1xuICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gZmlsdGVyZWQ7XG5cbiAgICAgIGNvbnN0IHVuaXF1ZVByb2RzID0gWy4uLnRoaXMuZmlsdGVyZWRQcm9kdWN0cy5yZWR1Y2UoKG1hcCwgb2JqKSA9PiBtYXAuc2V0KG9iai5uYW1lLCBvYmopLCBuZXcgTWFwKCkpLnZhbHVlcygpXTtcbiAgICAgIFxuICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XG4gICAgICBcbiAgICAgIFxuICAgIH0pOyAgICBcbiAgfVxuXG4gIHByaXZhdGUgX2dldFByb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSkge1xuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3RzKGNhdGVnb3JpZXNGaWx0ZXIpLnN1YnNjcmliZSgocmVzUHJvZHVjdHMpID0+IHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSByZXNQcm9kdWN0cztcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFdQcm9kdWN0cyhjYXRlZ29yaWVzRmlsdGVyPzogc3RyaW5nW10pIHtcbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRXUHJvZHVjdHMoY2F0ZWdvcmllc0ZpbHRlcikuc3Vic2NyaWJlKChyZXNQcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc1Byb2R1Y3RzO1xuICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIF9nZXRDYXRlZ29yaWVzKCl7XG4gICAgdGhpcy5jYXRTZXJ2aWNlLmdldENhdGVnb3JpZXMoKS5zdWJzY3JpYmUocmVzQ2F0cyA9PntcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc0NhdHM7XG4gICAgfSlcbiAgfVxuXG4gIGNhdGVnb3J5RmlsdGVyKCl7XG4gICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpPT4gY2F0ZWdvcnkuY2hlY2tlZCkubWFwKChjYXRlZ29yeSk9PiBjYXRlZ29yeS5pZClcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENhdGVnb3JpZXMpO1xuICAgIGlmICh0aGlzLl91cmxTZWdtZW50ID09PSBcInByb2R1Y3RzXCIpIHtcbiAgICAgIHRoaXMuX2dldFByb2RCeUJyYW5kKHNlbGVjdGVkQ2F0ZWdvcmllcyk7XG4gICAgICBcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuX2dldFdQcm9kQnlCcmFuZChzZWxlY3RlZENhdGVnb3JpZXMpO1xuICAgIH1cbiAgICBcbiAgfVxuXG5cblxufVxuIiwiPGRpdiBjbGFzcz1cInByb2R1Y3RzLXBhZ2VcIj5cbiAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcmllcy1zaWRlIG1kOmNvbC0zIGxnOmNvbC0yIHhsOmNvbC0zIGNhdGVnb3JpZXNcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogMjBweDtcIj5cblxuICAgICAgPGg0PkNhdGVnb3JpZTwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzPVwicC1maWVsZC1jaGVja2JveFwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzXCI+XG4gICAgICAgIDxwLWNoZWNrYm94IFsobmdNb2RlbCldPVwiY2F0ZWdvcnkuY2hlY2tlZFwiIFtiaW5hcnldPWJpbmFyeVByb3AgW2lucHV0SWRdPVwiY2F0ZWdvcnkuaWQhXCJcbiAgICAgICAgICAob25DaGFuZ2UpPVwiY2F0ZWdvcnlGaWx0ZXIoKVwiPjwvcC1jaGVja2JveD5cbiAgICAgICAgPGxhYmVsIGZvcj1cInt7Y2F0ZWdvcnkuaWR9fVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9sYWJlbD5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNtOmNvbC0xMiBtZDpjb2wtOSBsZzpjb2wtMTAgeGw6Y29sLTlcIiBzdHlsZT1cInBhZGRpbmc6IDMwcHg7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiICpuZ0lmPVwicHJvZHVjdHNcIiA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRhaW5lciBzbTpjb2wtNiBtZDpjb2wtNiBsZzpjb2wtMyB4bDpjb2wtM1wiICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIGZpbHRlcmVkUHJvZHVjdHNcIiBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiPlxuXG4gICAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSBbcHJvZHVjdF09XCJwcm9kdWN0XCI+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==