import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product123 } from '../../models/product123';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/products.service";
import * as i3 from "../../services/categories.service";
import * as i4 from "primeng/checkbox";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "../../components/product-item/product-item.component";
function CarouselProductsBrandsComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "p-checkbox", 15);
    i0.ɵɵlistener("ngModelChange", function CarouselProductsBrandsComponent_div_12_div_3_Template_p_checkbox_ngModelChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r5); const category_r3 = restoredCtx.$implicit; return category_r3.checked = $event; })("onChange", function CarouselProductsBrandsComponent_div_12_div_3_Template_p_checkbox_onChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.categoryFilter($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("id", category_r3.name);
    i0.ɵɵproperty("ngModel", category_r3.checked)("binary", ctx_r2.binaryProp)("inputId", category_r3.id);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", category_r3.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(category_r3.name);
} }
function CarouselProductsBrandsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h4");
    i0.ɵɵtext(2, "Categorie");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CarouselProductsBrandsComponent_div_12_div_3_Template, 4, 6, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.categories);
} }
const _c0 = function (a0) { return [a0]; };
function CarouselProductsBrandsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "eshop-frontend-product-item", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", ctx_r1.w ? i0.ɵɵpureFunction1(2, _c0, "/women-products/" + p_r7.id) : i0.ɵɵpureFunction1(4, _c0, "/products/" + p_r7.id))("product", p_r7);
} }
export class CarouselProductsBrandsComponent {
    constructor(route, productsService, catService) {
        this.route = route;
        this.productsService = productsService;
        this.catService = catService;
        this.isChecked = false;
        this.binaryProp = true;
        this.products = [];
        this.wProds = [];
        this.brandAllProds = [];
        this.m_filteredProducts = [];
        this.w_filteredProducts = [];
        this.newProducts = [];
        this.firstFilter = [];
        this.secondFilter = [];
        this.categories = [];
        this.selectedAny = false;
        this.selected_1 = false;
        this.selected_2 = false;
        this.m = false;
        this.w = false;
    }
    ngOnInit() {
        this._retrieveId();
        this._getCategories();
        this._getAllProdsByBrand();
        // this._getMProdByBrand();
        // this._getWprodByBrand();
    }
    _retrieveId() {
        this.route.params.subscribe((params) => {
            this.currentId = params.brandId;
            this.brandName = params.brandName;
            console.log(this.currentId);
            console.log(this.brandName);
        });
    }
    _getCategories() {
        this.catService.getCategories().subscribe((resCats) => {
            this.categories = resCats;
        });
    }
    _getAllProdsByBrand() {
        this.productsService
            .getAllProductsByBrand(this.currentId)
            .subscribe((products) => {
            this.products = products;
            const uniqueProds = [
                ...this.products
                    .reduce((map, obj) => map.set(obj.name, obj), new Map())
                    .values(),
            ];
            this.products = uniqueProds;
            console.log(this.products);
        });
    }
    _getMenProdsByBrand(brandFilter) {
        this.productsService.getAllMProductsByBrand(brandFilter).subscribe((products) => {
            this.products = products;
            const uniqueProds = [
                ...this.products
                    .reduce((map, obj) => map.set(obj.name, obj), new Map())
                    .values(),
            ];
            this.products = uniqueProds;
            console.log(this.products);
        });
    }
    _getWomenProdsByBrand(brandFilter) {
        this.productsService.getAllWProductsByBrand(brandFilter).subscribe((products) => {
            this.products = products;
            const uniqueProds = [
                ...this.products
                    .reduce((map, obj) => map.set(obj.name, obj), new Map())
                    .values(),
            ];
            this.products = uniqueProds;
            console.log(this.products);
        });
    }
    // SEX SELECTION FILTER
    selectMenFromBrandAllProds(event) {
        this.w = !this.w;
        this.selected_1 = !this.selected_1;
        console.log(this.selected_1);
        if (this.selected_1) {
            this._getMenProdsByBrand();
        }
        else {
            this._getAllProdsByBrand();
        }
    }
    selectWomenFromBrandAllProds(event) {
        this.m = !this.m;
        const info = event.originalEvent.target.innerHTML;
        console.log(info.includes('women'));
        this.selected_2 = !this.selected_2;
        if (this.selected_2) {
            this._getWomenProdsByBrand();
        }
        else {
            this._getAllProdsByBrand();
        }
    }
    categoryFilter(event) {
        const selectedCategories = this.categories
            .filter((category) => category.checked)
            .map((category) => category.id);
        if (this.selected_1 && selectedCategories.length > 0) {
            this.productsService.getMproductsFilteredByCategoryAndBrand(selectedCategories, this.currentId).subscribe((products) => {
                this.products = products;
                const uniqueProds = [
                    ...this.products
                        .reduce((map, obj) => map.set(obj.name, obj), new Map())
                        .values(),
                ];
                this.products = uniqueProds;
                console.log(this.products);
            });
        }
        if (this.selected_1 && selectedCategories.length === 0) {
            this._getMenProdsByBrand();
        }
        if (this.selected_2 && selectedCategories.length > 0) {
            this.productsService.getWproductsFilteredByCategoryAndBrand(selectedCategories, this.currentId).subscribe((products) => {
                this.products = products;
                const uniqueProds = [
                    ...this.products
                        .reduce((map, obj) => map.set(obj.name, obj), new Map())
                        .values(),
                ];
                this.products = uniqueProds;
                console.log(this.products);
            });
        }
        if (this.selected_2 && selectedCategories.length === 0) {
            this._getWomenProdsByBrand();
        }
    }
}
CarouselProductsBrandsComponent.ɵfac = function CarouselProductsBrandsComponent_Factory(t) { return new (t || CarouselProductsBrandsComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ProductsService), i0.ɵɵdirectiveInject(i3.CategoriesService)); };
CarouselProductsBrandsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarouselProductsBrandsComponent, selectors: [["eshop-frontend-carousel-products-brands"]], inputs: { product: "product" }, decls: 16, vars: 6, consts: [[1, "products-page"], [1, "grid"], [1, "men-women-filter", "md:col-3", "lg:col-12", 2, "padding-left", "20px"], [1, "p-field-checkbox", "men"], ["id", "men", 2, "padding-right", "5px", 3, "disabled", "binary", "onChange"], ["for", "men"], [1, "p-field-checkbox", "women"], ["id", "women", 2, "padding-right", "5px", 3, "disabled", "binary", "onChange"], ["for", "women"], [1, "categories-filter", "md:col-3", "lg:col-2", "xl:col-3"], [4, "ngIf"], [1, "sm:col-12", "md:col-9", "lg:col-10", "xl:col-9", 2, "padding", "30px"], ["class", "item-container sm:col-6 md:col-6 lg:col-3 xl:col-3", 4, "ngFor", "ngForOf"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "p-field-checkbox"], [3, "id", "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [3, "for"], [1, "item-container", "sm:col-6", "md:col-6", "lg:col-3", "xl:col-3"], [3, "routerLink", "product"]], template: function CarouselProductsBrandsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p-checkbox", 4);
        i0.ɵɵlistener("onChange", function CarouselProductsBrandsComponent_Template_p_checkbox_onChange_4_listener($event) { return ctx.selectMenFromBrandAllProds($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "label", 5);
        i0.ɵɵtext(6, "Moda uomo");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 6)(8, "p-checkbox", 7);
        i0.ɵɵlistener("onChange", function CarouselProductsBrandsComponent_Template_p_checkbox_onChange_8_listener($event) { return ctx.selectWomenFromBrandAllProds($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "label", 8);
        i0.ɵɵtext(10, "Moda donna");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(11, "div", 9);
        i0.ɵɵtemplate(12, CarouselProductsBrandsComponent_div_12_Template, 4, 1, "div", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 11)(14, "div", 1);
        i0.ɵɵtemplate(15, CarouselProductsBrandsComponent_div_15_Template, 2, 6, "div", 12);
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.m)("binary", ctx.binaryProp);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.w)("binary", ctx.binaryProp);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.selected_1 || ctx.selected_2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.products);
    } }, directives: [i4.Checkbox, i5.NgIf, i5.NgForOf, i6.NgControlStatus, i6.NgModel, i7.ProductItemComponent, i1.RouterLink], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselProductsBrandsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-carousel-products-brands', styles: [], template: "<div class=\"products-page\">\n    <div class=\"grid\">\n        <div class=\"men-women-filter md:col-3 lg:col-12\" style=\"padding-left: 20px;\">\n           <div class=\"p-field-checkbox men\">\n\n               <p-checkbox style=\"padding-right: 5px;\" [disabled]=\"m\" id=\"men\" (onChange)=\"selectMenFromBrandAllProds($event)\" [binary]=binaryProp></p-checkbox>\n\n\n               <label for=\"men\">Moda uomo</label>\n\n           </div>\n           <div class=\"p-field-checkbox women\">\n\n              <p-checkbox style=\"padding-right: 5px;\" [disabled]=\"w\" id=\"women\" (onChange)=\"selectWomenFromBrandAllProds($event)\" [binary]=binaryProp></p-checkbox>\n              <label for=\"women\">Moda donna</label>\n\n        </div>\n\n      </div>\n       <div class=\"categories-filter md:col-3 lg:col-2 xl:col-3\">\n\n         <div *ngIf=\"selected_1 || selected_2\">\n                 <h4>Categorie</h4>\n\n                 <div class=\"p-field-checkbox\" *ngFor=\"let category of categories\">\n                   <p-checkbox id=\"{{category.name}}\" [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\n                     (onChange)=\"categoryFilter($event)\"></p-checkbox>\n                   <label for=\"{{category.id}}\">{{category.name}}</label>\n\n                 </div>\n             </div>\n       </div>\n\n\n\n\n       <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" style=\"padding: 30px;\">\n        <div class=\"grid\">\n          <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let p of products\">\n\n            <eshop-frontend-product-item [routerLink]=\" w ? ['/women-products/' + p.id] : ['/products/' + p.id]\" [product]=\"p\"></eshop-frontend-product-item>\n          </div>\n\n        </div>\n      </div>\n<!--\n        <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" *ngIf=\"selected_1\">\n        <div class=\"grid\" *ngIf=\"products\">\n          <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let m of m_filteredProducts\">\n\n\n\n            <eshop-frontend-product-item [product]=\"m\"></eshop-frontend-product-item>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" *ngIf=\"selected_2\">\n        <div class=\"grid\" *ngIf=\"products\">\n          <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let w of w_filteredProducts\">\n\n            <eshop-frontend-product-item [product]=\"w\"></eshop-frontend-product-item>\n          </div>\n\n        </div>\n      </div>    -->\n\n    </div>\n  </div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i3.CategoriesService }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7OztJQ21CakQsK0JBQWtFLHFCQUFBO0lBQzdCLHlRQUE4Qix1TEFDbkQsNkJBQXNCLElBRDZCO0lBQzNCLGlCQUFhO0lBQ25ELGlDQUE2QjtJQUFBLFlBQWlCO0lBQUEsaUJBQVEsRUFBQTs7OztJQUYxQyxlQUFzQjtJQUF0QixnREFBc0I7SUFBQyw2Q0FBOEIsNkJBQUEsMkJBQUE7SUFFMUQsZUFBcUI7SUFBckIsK0NBQXFCO0lBQUMsZUFBaUI7SUFBakIsc0NBQWlCOzs7SUFOeEQsMkJBQXNDLFNBQUE7SUFDMUIseUJBQVM7SUFBQSxpQkFBSztJQUVsQix3RkFLTTtJQUNWLGlCQUFNOzs7SUFOaUQsZUFBYTtJQUFiLDJDQUFhOzs7O0lBY3ZFLCtCQUEyRjtJQUV6RixrREFBaUo7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WixDQUFDO2dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO2dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQTtTQUNIO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7SUFFTixDQUFDOzs4R0FoS1UsK0JBQStCO2tGQUEvQiwrQkFBK0I7UUNiNUMsOEJBQTJCLGFBQUEsYUFBQSxhQUFBLG9CQUFBO1FBS29ELDRIQUFZLHNDQUFrQyxJQUFDO1FBQXFCLGlCQUFhO1FBR2pKLGdDQUFpQjtRQUFBLHlCQUFTO1FBQUEsaUJBQVEsRUFBQTtRQUd0Qyw4QkFBb0Msb0JBQUE7UUFFaUMsNEhBQVksd0NBQW9DLElBQUM7UUFBcUIsaUJBQWE7UUFDckosZ0NBQW1CO1FBQUEsMkJBQVU7UUFBQSxpQkFBUSxFQUFBLEVBQUE7UUFLNUMsK0JBQTBEO1FBRXhELG1GQVNVO1FBQ1osaUJBQU07UUFLTixnQ0FBMEUsY0FBQTtRQUV2RSxtRkFHTTtRQUVSLGlCQUFNLEVBQUEsRUFBQSxFQUFBOztRQXRDeUMsZUFBYztRQUFkLGdDQUFjLDBCQUFBO1FBUWYsZUFBYztRQUFkLGdDQUFjLDBCQUFBO1FBUXJELGVBQThCO1FBQTlCLHVEQUE4QjtRQWlCMkMsZUFBVztRQUFYLHNDQUFXOzt1RkR6QnRGLCtCQUErQjtjQUwzQyxTQUFTOzJCQUNFLHlDQUF5QyxVQUUzQyxFQUFFOytIQU9ELE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2F0ZWdvcnknO1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IENhdGVnb3JpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLWNhcm91c2VsLXByb2R1Y3RzLWJyYW5kcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNDaGVja2VkID0gZmFsc2U7XG4gIGJpbmFyeVByb3AgPSB0cnVlO1xuICBjdXJyZW50SWQ6IHN0cmluZztcbiAgYnJhbmROYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XG4gIHByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgd1Byb2RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgYnJhbmRBbGxQcm9kczogUHJvZHVjdDEyM1tdID0gW107XG4gIG1fZmlsdGVyZWRQcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIHdfZmlsdGVyZWRQcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIG5ld1Byb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgZmlyc3RGaWx0ZXI6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBzZWNvbmRGaWx0ZXI6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW107XG4gIHNlbGVjdGVkQW55ID0gZmFsc2U7XG4gIHNlbGVjdGVkXzEgPSBmYWxzZTtcbiAgc2VsZWN0ZWRfMiA9IGZhbHNlO1xuICBtID0gZmFsc2U7XG4gIHcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2F0U2VydmljZTogQ2F0ZWdvcmllc1NlcnZpY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXRyaWV2ZUlkKCk7XG4gICAgdGhpcy5fZ2V0Q2F0ZWdvcmllcygpO1xuICAgIHRoaXMuX2dldEFsbFByb2RzQnlCcmFuZCgpO1xuICAgIC8vIHRoaXMuX2dldE1Qcm9kQnlCcmFuZCgpO1xuICAgIC8vIHRoaXMuX2dldFdwcm9kQnlCcmFuZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmV0cmlldmVJZCgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMuYnJhbmRJZDtcbiAgICAgIHRoaXMuYnJhbmROYW1lID0gcGFyYW1zLmJyYW5kTmFtZTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYnJhbmROYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENhdGVnb3JpZXMoKSB7XG4gICAgdGhpcy5jYXRTZXJ2aWNlLmdldENhdGVnb3JpZXMoKS5zdWJzY3JpYmUoKHJlc0NhdHMpID0+IHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc0NhdHM7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRBbGxQcm9kc0J5QnJhbmQoKSB7XG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2VcbiAgICAgIC5nZXRBbGxQcm9kdWN0c0J5QnJhbmQodGhpcy5jdXJyZW50SWQpXG4gICAgICAuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB1bmlxdWVQcm9kcyA9IFtcbiAgICAgICAgICAuLi50aGlzLnByb2R1Y3RzXG4gICAgICAgICAgLnJlZHVjZSgobWFwLCBvYmopID0+IG1hcC5zZXQob2JqLm5hbWUsIG9iaiksIG5ldyBNYXAoKSlcbiAgICAgICAgICAudmFsdWVzKCksXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB1bmlxdWVQcm9kcztcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfZ2V0TWVuUHJvZHNCeUJyYW5kKGJyYW5kRmlsdGVyPzogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0QWxsTVByb2R1Y3RzQnlCcmFuZChicmFuZEZpbHRlcikuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgY29uc3QgdW5pcXVlUHJvZHMgPSBbXG4gICAgICAgIC4uLnRoaXMucHJvZHVjdHNcbiAgICAgICAgICAucmVkdWNlKChtYXAsIG9iaikgPT4gbWFwLnNldChvYmoubmFtZSwgb2JqKSwgbmV3IE1hcCgpKVxuICAgICAgICAgIC52YWx1ZXMoKSxcbiAgICAgIF07XG4gICAgICB0aGlzLnByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFdvbWVuUHJvZHNCeUJyYW5kKGJyYW5kRmlsdGVyPzogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0QWxsV1Byb2R1Y3RzQnlCcmFuZChicmFuZEZpbHRlcikuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgY29uc3QgdW5pcXVlUHJvZHMgPSBbXG4gICAgICAgIC4uLnRoaXMucHJvZHVjdHNcbiAgICAgICAgICAucmVkdWNlKChtYXAsIG9iaikgPT4gbWFwLnNldChvYmoubmFtZSwgb2JqKSwgbmV3IE1hcCgpKVxuICAgICAgICAgIC52YWx1ZXMoKSxcbiAgICAgIF07XG4gICAgICB0aGlzLnByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcblxuICAgIH0pO1xuICB9XG5cblxuICAvLyBTRVggU0VMRUNUSU9OIEZJTFRFUlxuICBzZWxlY3RNZW5Gcm9tQnJhbmRBbGxQcm9kcyhldmVudDogYW55KSB7XG50aGlzLncgPSAhdGhpcy53O1xuICAgIFxuICAgIHRoaXMuc2VsZWN0ZWRfMSA9ICF0aGlzLnNlbGVjdGVkXzE7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZF8xKTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkXzEpIHtcbiAgICAgIHRoaXMuX2dldE1lblByb2RzQnlCcmFuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nZXRBbGxQcm9kc0J5QnJhbmQoKTtcbiAgICB9XG4gIH1cbiAgc2VsZWN0V29tZW5Gcm9tQnJhbmRBbGxQcm9kcyhldmVudDogYW55KSB7XG4gICAgdGhpcy5tID0gIXRoaXMubTtcbiAgICAgIGNvbnN0IGluZm8gPSBldmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldC5pbm5lckhUTUw7XG4gICAgICBjb25zb2xlLmxvZyhpbmZvLmluY2x1ZGVzKCd3b21lbicpKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRfMiA9ICF0aGlzLnNlbGVjdGVkXzI7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRfMikge1xuICAgICAgdGhpcy5fZ2V0V29tZW5Qcm9kc0J5QnJhbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ2V0QWxsUHJvZHNCeUJyYW5kKCk7XG5cbiAgICB9XG4gIH1cblxuICBjYXRlZ29yeUZpbHRlcihldmVudDogYW55KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzXG4gICAgICAuZmlsdGVyKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkuY2hlY2tlZClcbiAgICAgIC5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5pZCk7XG5cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkXzEgJiYgc2VsZWN0ZWRDYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldE1wcm9kdWN0c0ZpbHRlcmVkQnlDYXRlZ29yeUFuZEJyYW5kKHNlbGVjdGVkQ2F0ZWdvcmllcyx0aGlzLmN1cnJlbnRJZCkuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgICAgICAgICAgICBjb25zdCB1bmlxdWVQcm9kcyA9IFtcbiAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgobWFwLCBvYmopID0+IG1hcC5zZXQob2JqLm5hbWUsIG9iaiksIG5ldyBNYXAoKSlcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlcygpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHVuaXF1ZVByb2RzO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkXzEgJiYgc2VsZWN0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9nZXRNZW5Qcm9kc0J5QnJhbmQoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIGlmICh0aGlzLnNlbGVjdGVkXzIgJiYgc2VsZWN0ZWRDYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFdwcm9kdWN0c0ZpbHRlcmVkQnlDYXRlZ29yeUFuZEJyYW5kKHNlbGVjdGVkQ2F0ZWdvcmllcywgdGhpcy5jdXJyZW50SWQpLnN1YnNjcmliZSgocHJvZHVjdHMpPT57XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgICAgICAgICAgY29uc3QgdW5pcXVlUHJvZHMgPSBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgLnJlZHVjZSgobWFwLCBvYmopID0+IG1hcC5zZXQob2JqLm5hbWUsIG9iaiksIG5ldyBNYXAoKSlcbiAgICAgICAgICAgICAgICAgIC52YWx1ZXMoKSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHVuaXF1ZVByb2RzO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcbiAgICAgIH0pXG4gICAgfVxuICAgICAgIGlmICh0aGlzLnNlbGVjdGVkXzIgJiYgc2VsZWN0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgdGhpcy5fZ2V0V29tZW5Qcm9kc0J5QnJhbmQoKTtcbiAgICAgICB9XG4gICAgXG4gIH1cbiAgXG59XG4iLCI8ZGl2IGNsYXNzPVwicHJvZHVjdHMtcGFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW4td29tZW4tZmlsdGVyIG1kOmNvbC0zIGxnOmNvbC0xMlwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAyMHB4O1wiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1maWVsZC1jaGVja2JveCBtZW5cIj5cblxuICAgICAgICAgICAgICAgPHAtY2hlY2tib3ggc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCIgW2Rpc2FibGVkXT1cIm1cIiBpZD1cIm1lblwiIChvbkNoYW5nZSk9XCJzZWxlY3RNZW5Gcm9tQnJhbmRBbGxQcm9kcygkZXZlbnQpXCIgW2JpbmFyeV09YmluYXJ5UHJvcD48L3AtY2hlY2tib3g+XG5cblxuICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lblwiPk1vZGEgdW9tbzwvbGFiZWw+XG5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWZpZWxkLWNoZWNrYm94IHdvbWVuXCI+XG5cbiAgICAgICAgICAgICAgPHAtY2hlY2tib3ggc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCIgW2Rpc2FibGVkXT1cIndcIiBpZD1cIndvbWVuXCIgKG9uQ2hhbmdlKT1cInNlbGVjdFdvbWVuRnJvbUJyYW5kQWxsUHJvZHMoJGV2ZW50KVwiIFtiaW5hcnldPWJpbmFyeVByb3A+PC9wLWNoZWNrYm94PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwid29tZW5cIj5Nb2RhIGRvbm5hPC9sYWJlbD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3JpZXMtZmlsdGVyIG1kOmNvbC0zIGxnOmNvbC0yIHhsOmNvbC0zXCI+XG5cbiAgICAgICAgIDxkaXYgKm5nSWY9XCJzZWxlY3RlZF8xIHx8IHNlbGVjdGVkXzJcIj5cbiAgICAgICAgICAgICAgICAgPGg0PkNhdGVnb3JpZTwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZmllbGQtY2hlY2tib3hcIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiPlxuICAgICAgICAgICAgICAgICAgIDxwLWNoZWNrYm94IGlkPVwie3tjYXRlZ29yeS5uYW1lfX1cIiBbKG5nTW9kZWwpXT1cImNhdGVnb3J5LmNoZWNrZWRcIiBbYmluYXJ5XT1iaW5hcnlQcm9wIFtpbnB1dElkXT1cImNhdGVnb3J5LmlkIVwiXG4gICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiY2F0ZWdvcnlGaWx0ZXIoJGV2ZW50KVwiPjwvcC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tjYXRlZ29yeS5pZH19XCI+e3tjYXRlZ29yeS5uYW1lfX08L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICAgPGRpdiBjbGFzcz1cInNtOmNvbC0xMiBtZDpjb2wtOSBsZzpjb2wtMTAgeGw6Y29sLTlcIiBzdHlsZT1cInBhZGRpbmc6IDMwcHg7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGFpbmVyIHNtOmNvbC02IG1kOmNvbC02IGxnOmNvbC0zIHhsOmNvbC0zXCIgKm5nRm9yPVwibGV0IHAgb2YgcHJvZHVjdHNcIj5cblxuICAgICAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwLmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwLmlkXVwiIFtwcm9kdWN0XT1cInBcIj48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuPCEtLVxuICAgICAgICA8ZGl2IGNsYXNzPVwic206Y29sLTEyIG1kOmNvbC05IGxnOmNvbC0xMCB4bDpjb2wtOVwiICpuZ0lmPVwic2VsZWN0ZWRfMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiICpuZ0lmPVwicHJvZHVjdHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250YWluZXIgc206Y29sLTYgbWQ6Y29sLTYgbGc6Y29sLTMgeGw6Y29sLTNcIiAqbmdGb3I9XCJsZXQgbSBvZiBtX2ZpbHRlcmVkUHJvZHVjdHNcIj5cblxuXG5cbiAgICAgICAgICAgIDxlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0gW3Byb2R1Y3RdPVwibVwiPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbTpjb2wtMTIgbWQ6Y29sLTkgbGc6Y29sLTEwIHhsOmNvbC05XCIgKm5nSWY9XCJzZWxlY3RlZF8yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCIgKm5nSWY9XCJwcm9kdWN0c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRhaW5lciBzbTpjb2wtNiBtZDpjb2wtNiBsZzpjb2wtMyB4bDpjb2wtM1wiICpuZ0Zvcj1cImxldCB3IG9mIHdfZmlsdGVyZWRQcm9kdWN0c1wiPlxuXG4gICAgICAgICAgICA8ZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtIFtwcm9kdWN0XT1cIndcIj48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAgICAtLT5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiJdfQ==