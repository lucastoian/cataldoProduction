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
        args: [{ selector: 'eshop-frontend-carousel-products-brands', styles: [], template: "<div class=\"products-page\">\r\n    <div class=\"grid\">\r\n        <div class=\"men-women-filter md:col-3 lg:col-12\" style=\"padding-left: 20px;\">\r\n           <div class=\"p-field-checkbox men\">\r\n\r\n               <p-checkbox style=\"padding-right: 5px;\" [disabled]=\"m\" id=\"men\" (onChange)=\"selectMenFromBrandAllProds($event)\" [binary]=binaryProp></p-checkbox>\r\n\r\n\r\n               <label for=\"men\">Moda uomo</label>\r\n\r\n           </div>\r\n           <div class=\"p-field-checkbox women\">\r\n\r\n              <p-checkbox style=\"padding-right: 5px;\" [disabled]=\"w\" id=\"women\" (onChange)=\"selectWomenFromBrandAllProds($event)\" [binary]=binaryProp></p-checkbox>\r\n              <label for=\"women\">Moda donna</label>\r\n\r\n        </div>\r\n\r\n      </div>\r\n       <div class=\"categories-filter md:col-3 lg:col-2 xl:col-3\">\r\n\r\n         <div *ngIf=\"selected_1 || selected_2\">\r\n                 <h4>Categorie</h4>\r\n\r\n                 <div class=\"p-field-checkbox\" *ngFor=\"let category of categories\">\r\n                   <p-checkbox id=\"{{category.name}}\" [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\r\n                     (onChange)=\"categoryFilter($event)\"></p-checkbox>\r\n                   <label for=\"{{category.id}}\">{{category.name}}</label>\r\n\r\n                 </div>\r\n             </div>\r\n       </div>\r\n\r\n\r\n\r\n\r\n       <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" style=\"padding: 30px;\">\r\n        <div class=\"grid\">\r\n          <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let p of products\">\r\n\r\n            <eshop-frontend-product-item [routerLink]=\" w ? ['/women-products/' + p.id] : ['/products/' + p.id]\" [product]=\"p\"></eshop-frontend-product-item>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n<!--\r\n        <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" *ngIf=\"selected_1\">\r\n        <div class=\"grid\" *ngIf=\"products\">\r\n          <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let m of m_filteredProducts\">\r\n\r\n\r\n\r\n            <eshop-frontend-product-item [product]=\"m\"></eshop-frontend-product-item>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" *ngIf=\"selected_2\">\r\n        <div class=\"grid\" *ngIf=\"products\">\r\n          <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let w of w_filteredProducts\">\r\n\r\n            <eshop-frontend-product-item [product]=\"w\"></eshop-frontend-product-item>\r\n          </div>\r\n\r\n        </div>\r\n      </div>    -->\r\n\r\n    </div>\r\n  </div>\r\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i3.CategoriesService }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7OztJQ21CakQsK0JBQWtFLHFCQUFBO0lBQzdCLHlRQUE4Qix1TEFDbkQsNkJBQXNCLElBRDZCO0lBQzNCLGlCQUFhO0lBQ25ELGlDQUE2QjtJQUFBLFlBQWlCO0lBQUEsaUJBQVEsRUFBQTs7OztJQUYxQyxlQUFzQjtJQUF0QixnREFBc0I7SUFBQyw2Q0FBOEIsNkJBQUEsMkJBQUE7SUFFMUQsZUFBcUI7SUFBckIsK0NBQXFCO0lBQUMsZUFBaUI7SUFBakIsc0NBQWlCOzs7SUFOeEQsMkJBQXNDLFNBQUE7SUFDMUIseUJBQVM7SUFBQSxpQkFBSztJQUVsQix3RkFLTTtJQUNWLGlCQUFNOzs7SUFOaUQsZUFBYTtJQUFiLDJDQUFhOzs7O0lBY3ZFLCtCQUEyRjtJQUV6RixrREFBaUo7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WixDQUFDO2dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO2dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQTtTQUNIO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7SUFFTixDQUFDOzs4R0FoS1UsK0JBQStCO2tGQUEvQiwrQkFBK0I7UUNiNUMsOEJBQTJCLGFBQUEsYUFBQSxhQUFBLG9CQUFBO1FBS29ELDRIQUFZLHNDQUFrQyxJQUFDO1FBQXFCLGlCQUFhO1FBR2pKLGdDQUFpQjtRQUFBLHlCQUFTO1FBQUEsaUJBQVEsRUFBQTtRQUd0Qyw4QkFBb0Msb0JBQUE7UUFFaUMsNEhBQVksd0NBQW9DLElBQUM7UUFBcUIsaUJBQWE7UUFDckosZ0NBQW1CO1FBQUEsMkJBQVU7UUFBQSxpQkFBUSxFQUFBLEVBQUE7UUFLNUMsK0JBQTBEO1FBRXhELG1GQVNVO1FBQ1osaUJBQU07UUFLTixnQ0FBMEUsY0FBQTtRQUV2RSxtRkFHTTtRQUVSLGlCQUFNLEVBQUEsRUFBQSxFQUFBOztRQXRDeUMsZUFBYztRQUFkLGdDQUFjLDBCQUFBO1FBUWYsZUFBYztRQUFkLGdDQUFjLDBCQUFBO1FBUXJELGVBQThCO1FBQTlCLHVEQUE4QjtRQWlCMkMsZUFBVztRQUFYLHNDQUFXOzt1RkR6QnRGLCtCQUErQjtjQUwzQyxTQUFTOzJCQUNFLHlDQUF5QyxVQUUzQyxFQUFFOytIQU9ELE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5JztcclxuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcclxuaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXRlZ29yaWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLWNhcm91c2VsLXByb2R1Y3RzLWJyYW5kcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLXByb2R1Y3RzLWJyYW5kcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsUHJvZHVjdHNCcmFuZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIGJpbmFyeVByb3AgPSB0cnVlO1xyXG4gIGN1cnJlbnRJZDogc3RyaW5nO1xyXG4gIGJyYW5kTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XHJcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xyXG4gIHdQcm9kczogUHJvZHVjdDEyM1tdID0gW107XHJcbiAgYnJhbmRBbGxQcm9kczogUHJvZHVjdDEyM1tdID0gW107XHJcbiAgbV9maWx0ZXJlZFByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcclxuICB3X2ZpbHRlcmVkUHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xyXG4gIG5ld1Byb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcclxuICBmaXJzdEZpbHRlcjogUHJvZHVjdDEyM1tdID0gW107XHJcbiAgc2Vjb25kRmlsdGVyOiBQcm9kdWN0MTIzW10gPSBbXTtcclxuICBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW107XHJcbiAgc2VsZWN0ZWRBbnkgPSBmYWxzZTtcclxuICBzZWxlY3RlZF8xID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWRfMiA9IGZhbHNlO1xyXG4gIG0gPSBmYWxzZTtcclxuICB3ID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjYXRTZXJ2aWNlOiBDYXRlZ29yaWVzU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcmV0cmlldmVJZCgpO1xyXG4gICAgdGhpcy5fZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgdGhpcy5fZ2V0QWxsUHJvZHNCeUJyYW5kKCk7XHJcbiAgICAvLyB0aGlzLl9nZXRNUHJvZEJ5QnJhbmQoKTtcclxuICAgIC8vIHRoaXMuX2dldFdwcm9kQnlCcmFuZCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmV0cmlldmVJZCgpIHtcclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLmJyYW5kSWQ7XHJcbiAgICAgIHRoaXMuYnJhbmROYW1lID0gcGFyYW1zLmJyYW5kTmFtZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmJyYW5kTmFtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldENhdGVnb3JpZXMoKSB7XHJcbiAgICB0aGlzLmNhdFNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpLnN1YnNjcmliZSgocmVzQ2F0cykgPT4ge1xyXG4gICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXNDYXRzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRBbGxQcm9kc0J5QnJhbmQoKSB7XHJcbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZVxyXG4gICAgICAuZ2V0QWxsUHJvZHVjdHNCeUJyYW5kKHRoaXMuY3VycmVudElkKVxyXG4gICAgICAuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB1bmlxdWVQcm9kcyA9IFtcclxuICAgICAgICAgIC4uLnRoaXMucHJvZHVjdHNcclxuICAgICAgICAgIC5yZWR1Y2UoKG1hcCwgb2JqKSA9PiBtYXAuc2V0KG9iai5uYW1lLCBvYmopLCBuZXcgTWFwKCkpXHJcbiAgICAgICAgICAudmFsdWVzKCksXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgX2dldE1lblByb2RzQnlCcmFuZChicmFuZEZpbHRlcj86IHN0cmluZykge1xyXG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0QWxsTVByb2R1Y3RzQnlCcmFuZChicmFuZEZpbHRlcikuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcbiAgICAgIGNvbnN0IHVuaXF1ZVByb2RzID0gW1xyXG4gICAgICAgIC4uLnRoaXMucHJvZHVjdHNcclxuICAgICAgICAgIC5yZWR1Y2UoKG1hcCwgb2JqKSA9PiBtYXAuc2V0KG9iai5uYW1lLCBvYmopLCBuZXcgTWFwKCkpXHJcbiAgICAgICAgICAudmFsdWVzKCksXHJcbiAgICAgIF07XHJcbiAgICAgIHRoaXMucHJvZHVjdHMgPSB1bmlxdWVQcm9kcztcclxuICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFdvbWVuUHJvZHNCeUJyYW5kKGJyYW5kRmlsdGVyPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRBbGxXUHJvZHVjdHNCeUJyYW5kKGJyYW5kRmlsdGVyKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgICAgY29uc3QgdW5pcXVlUHJvZHMgPSBbXHJcbiAgICAgICAgLi4udGhpcy5wcm9kdWN0c1xyXG4gICAgICAgICAgLnJlZHVjZSgobWFwLCBvYmopID0+IG1hcC5zZXQob2JqLm5hbWUsIG9iaiksIG5ldyBNYXAoKSlcclxuICAgICAgICAgIC52YWx1ZXMoKSxcclxuICAgICAgXTtcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHVuaXF1ZVByb2RzO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvLyBTRVggU0VMRUNUSU9OIEZJTFRFUlxyXG4gIHNlbGVjdE1lbkZyb21CcmFuZEFsbFByb2RzKGV2ZW50OiBhbnkpIHtcclxudGhpcy53ID0gIXRoaXMudztcclxuICAgIFxyXG4gICAgdGhpcy5zZWxlY3RlZF8xID0gIXRoaXMuc2VsZWN0ZWRfMTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRfMSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRfMSkge1xyXG4gICAgICB0aGlzLl9nZXRNZW5Qcm9kc0J5QnJhbmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2dldEFsbFByb2RzQnlCcmFuZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZWxlY3RXb21lbkZyb21CcmFuZEFsbFByb2RzKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMubSA9ICF0aGlzLm07XHJcbiAgICAgIGNvbnN0IGluZm8gPSBldmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldC5pbm5lckhUTUw7XHJcbiAgICAgIGNvbnNvbGUubG9nKGluZm8uaW5jbHVkZXMoJ3dvbWVuJykpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRfMiA9ICF0aGlzLnNlbGVjdGVkXzI7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZF8yKSB7XHJcbiAgICAgIHRoaXMuX2dldFdvbWVuUHJvZHNCeUJyYW5kKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9nZXRBbGxQcm9kc0J5QnJhbmQoKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYXRlZ29yeUZpbHRlcihldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZENhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXNcclxuICAgICAgLmZpbHRlcigoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LmNoZWNrZWQpXHJcbiAgICAgIC5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5pZCk7XHJcblxyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkXzEgJiYgc2VsZWN0ZWRDYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0TXByb2R1Y3RzRmlsdGVyZWRCeUNhdGVnb3J5QW5kQnJhbmQoc2VsZWN0ZWRDYXRlZ29yaWVzLHRoaXMuY3VycmVudElkKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1bmlxdWVQcm9kcyA9IFtcclxuICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKG1hcCwgb2JqKSA9PiBtYXAuc2V0KG9iai5uYW1lLCBvYmopLCBuZXcgTWFwKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlcygpLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSB1bmlxdWVQcm9kcztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkXzEgJiYgc2VsZWN0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuX2dldE1lblByb2RzQnlCcmFuZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRfMiAmJiBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRXcHJvZHVjdHNGaWx0ZXJlZEJ5Q2F0ZWdvcnlBbmRCcmFuZChzZWxlY3RlZENhdGVnb3JpZXMsIHRoaXMuY3VycmVudElkKS5zdWJzY3JpYmUoKHByb2R1Y3RzKT0+e1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgICAgICAgICAgICBjb25zdCB1bmlxdWVQcm9kcyA9IFtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgLnJlZHVjZSgobWFwLCBvYmopID0+IG1hcC5zZXQob2JqLm5hbWUsIG9iaiksIG5ldyBNYXAoKSlcclxuICAgICAgICAgICAgICAgICAgLnZhbHVlcygpLFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHVuaXF1ZVByb2RzO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfMiAmJiBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgIHRoaXMuX2dldFdvbWVuUHJvZHNCeUJyYW5kKCk7XHJcbiAgICAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInByb2R1Y3RzLXBhZ2VcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbi13b21lbi1maWx0ZXIgbWQ6Y29sLTMgbGc6Y29sLTEyXCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDIwcHg7XCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZmllbGQtY2hlY2tib3ggbWVuXCI+XHJcblxyXG4gICAgICAgICAgICAgICA8cC1jaGVja2JveCBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIiBbZGlzYWJsZWRdPVwibVwiIGlkPVwibWVuXCIgKG9uQ2hhbmdlKT1cInNlbGVjdE1lbkZyb21CcmFuZEFsbFByb2RzKCRldmVudClcIiBbYmluYXJ5XT1iaW5hcnlQcm9wPjwvcC1jaGVja2JveD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVuXCI+TW9kYSB1b21vPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZmllbGQtY2hlY2tib3ggd29tZW5cIj5cclxuXHJcbiAgICAgICAgICAgICAgPHAtY2hlY2tib3ggc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA1cHg7XCIgW2Rpc2FibGVkXT1cIndcIiBpZD1cIndvbWVuXCIgKG9uQ2hhbmdlKT1cInNlbGVjdFdvbWVuRnJvbUJyYW5kQWxsUHJvZHMoJGV2ZW50KVwiIFtiaW5hcnldPWJpbmFyeVByb3A+PC9wLWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ3b21lblwiPk1vZGEgZG9ubmE8L2xhYmVsPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3JpZXMtZmlsdGVyIG1kOmNvbC0zIGxnOmNvbC0yIHhsOmNvbC0zXCI+XHJcblxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwic2VsZWN0ZWRfMSB8fCBzZWxlY3RlZF8yXCI+XHJcbiAgICAgICAgICAgICAgICAgPGg0PkNhdGVnb3JpZTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWZpZWxkLWNoZWNrYm94XCIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgIDxwLWNoZWNrYm94IGlkPVwie3tjYXRlZ29yeS5uYW1lfX1cIiBbKG5nTW9kZWwpXT1cImNhdGVnb3J5LmNoZWNrZWRcIiBbYmluYXJ5XT1iaW5hcnlQcm9wIFtpbnB1dElkXT1cImNhdGVnb3J5LmlkIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJjYXRlZ29yeUZpbHRlcigkZXZlbnQpXCI+PC9wLWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7Y2F0ZWdvcnkuaWR9fVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJzbTpjb2wtMTIgbWQ6Y29sLTkgbGc6Y29sLTEwIHhsOmNvbC05XCIgc3R5bGU9XCJwYWRkaW5nOiAzMHB4O1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250YWluZXIgc206Y29sLTYgbWQ6Y29sLTYgbGc6Y29sLTMgeGw6Y29sLTNcIiAqbmdGb3I9XCJsZXQgcCBvZiBwcm9kdWN0c1wiPlxyXG5cclxuICAgICAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwLmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwLmlkXVwiIFtwcm9kdWN0XT1cInBcIj48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbjwhLS1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic206Y29sLTEyIG1kOmNvbC05IGxnOmNvbC0xMCB4bDpjb2wtOVwiICpuZ0lmPVwic2VsZWN0ZWRfMVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCIgKm5nSWY9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGFpbmVyIHNtOmNvbC02IG1kOmNvbC02IGxnOmNvbC0zIHhsOmNvbC0zXCIgKm5nRm9yPVwibGV0IG0gb2YgbV9maWx0ZXJlZFByb2R1Y3RzXCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0gW3Byb2R1Y3RdPVwibVwiPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzbTpjb2wtMTIgbWQ6Y29sLTkgbGc6Y29sLTEwIHhsOmNvbC05XCIgKm5nSWY9XCJzZWxlY3RlZF8yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIiAqbmdJZj1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250YWluZXIgc206Y29sLTYgbWQ6Y29sLTYgbGc6Y29sLTMgeGw6Y29sLTNcIiAqbmdGb3I9XCJsZXQgdyBvZiB3X2ZpbHRlcmVkUHJvZHVjdHNcIj5cclxuXHJcbiAgICAgICAgICAgIDxlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0gW3Byb2R1Y3RdPVwid1wiPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gICAgLS0+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiJdfQ==