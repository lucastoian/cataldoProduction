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
function CarouselProductsBrandsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "eshop-frontend-product-item", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("product", p_r7);
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
CarouselProductsBrandsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarouselProductsBrandsComponent, selectors: [["eshop-frontend-carousel-products-brands"]], inputs: { product: "product" }, decls: 16, vars: 6, consts: [[1, "products-page"], [1, "grid"], [1, "men-women-filter", "md:col-3", "lg:col-12"], [1, "p-field-checkbox", "men"], ["id", "men", 3, "disabled", "binary", "onChange"], ["for", "men"], [1, "p-field-checkbox", "women"], ["id", "women", 3, "disabled", "binary", "onChange"], ["for", "women"], [1, "categories-filter", "md:col-3", "lg:col-2", "xl:col-3"], [4, "ngIf"], [1, "sm:col-12", "md:col-9", "lg:col-10", "xl:col-9"], ["class", "item-container sm:col-6 md:col-6 lg:col-3 xl:col-3", 4, "ngFor", "ngForOf"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "p-field-checkbox"], [3, "id", "ngModel", "binary", "inputId", "ngModelChange", "onChange"], [3, "for"], [1, "item-container", "sm:col-6", "md:col-6", "lg:col-3", "xl:col-3"], [3, "product"]], template: function CarouselProductsBrandsComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(15, CarouselProductsBrandsComponent_div_15_Template, 2, 1, "div", 12);
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
    } }, directives: [i4.Checkbox, i5.NgIf, i5.NgForOf, i6.NgControlStatus, i6.NgModel, i7.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselProductsBrandsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-carousel-products-brands', styles: [], template: "<div class=\"products-page\">\r\n    <div class=\"grid\">\r\n        <div class=\"men-women-filter md:col-3 lg:col-12\">\r\n           <div class=\"p-field-checkbox men\">\r\n\r\n               <p-checkbox [disabled]=\"m\" id=\"men\" (onChange)=\"selectMenFromBrandAllProds($event)\" [binary]=binaryProp></p-checkbox>\r\n              \r\n\r\n               <label for=\"men\">Moda uomo</label>\r\n\r\n           </div>\r\n           <div class=\"p-field-checkbox women\">\r\n               \r\n              <p-checkbox [disabled]=\"w\" id=\"women\" (onChange)=\"selectWomenFromBrandAllProds($event)\" [binary]=binaryProp></p-checkbox>\r\n              <label for=\"women\">Moda donna</label>\r\n\r\n        </div>\r\n\r\n      </div>\r\n       <div class=\"categories-filter md:col-3 lg:col-2 xl:col-3\">\r\n\r\n         <div *ngIf=\"selected_1 || selected_2\">\r\n                 <h4>Categorie</h4>\r\n \r\n                 <div class=\"p-field-checkbox\" *ngFor=\"let category of categories\">\r\n                   <p-checkbox id=\"{{category.name}}\" [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\r\n                     (onChange)=\"categoryFilter($event)\"></p-checkbox>\r\n                   <label for=\"{{category.id}}\">{{category.name}}</label>\r\n           \r\n                 </div>\r\n             </div>\r\n       </div>\r\n\r\n  \r\n  \r\n\r\n       <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\">\r\n        <div class=\"grid\">\r\n          <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let p of products\">\r\n  \r\n            <eshop-frontend-product-item [product]=\"p\"></eshop-frontend-product-item>\r\n          </div>\r\n  \r\n        </div>\r\n      </div> \r\n<!-- \r\n        <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" *ngIf=\"selected_1\">\r\n        <div class=\"grid\" *ngIf=\"products\">\r\n          <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let m of m_filteredProducts\">\r\n\r\n  \r\n\r\n            <eshop-frontend-product-item [product]=\"m\"></eshop-frontend-product-item>\r\n          </div>\r\n  \r\n        </div>\r\n      </div> \r\n\r\n      <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" *ngIf=\"selected_2\">\r\n        <div class=\"grid\" *ngIf=\"products\">\r\n          <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let w of w_filteredProducts\">\r\n  \r\n            <eshop-frontend-product-item [product]=\"w\"></eshop-frontend-product-item>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>    -->\r\n\r\n    </div>\r\n  </div> " }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i3.CategoriesService }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7OztJQ21CakQsK0JBQWtFLHFCQUFBO0lBQzdCLHlRQUE4Qix1TEFDbkQsNkJBQXNCLElBRDZCO0lBQzNCLGlCQUFhO0lBQ25ELGlDQUE2QjtJQUFBLFlBQWlCO0lBQUEsaUJBQVEsRUFBQTs7OztJQUYxQyxlQUFzQjtJQUF0QixnREFBc0I7SUFBQyw2Q0FBOEIsNkJBQUEsMkJBQUE7SUFFMUQsZUFBcUI7SUFBckIsK0NBQXFCO0lBQUMsZUFBaUI7SUFBakIsc0NBQWlCOzs7SUFOeEQsMkJBQXNDLFNBQUE7SUFDMUIseUJBQVM7SUFBQSxpQkFBSztJQUVsQix3RkFLTTtJQUNWLGlCQUFNOzs7SUFOaUQsZUFBYTtJQUFiLDJDQUFhOzs7SUFjdkUsK0JBQTJGO0lBRXpGLGtEQUF5RTtJ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RixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztnQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCO0lBRU4sQ0FBQzs7OEdBaEtVLCtCQUErQjtrRkFBL0IsK0JBQStCO1FDYjVDLDhCQUEyQixhQUFBLGFBQUEsYUFBQSxvQkFBQTtRQUt3Qiw0SEFBWSxzQ0FBa0MsSUFBQztRQUFxQixpQkFBYTtRQUdySCxnQ0FBaUI7UUFBQSx5QkFBUztRQUFBLGlCQUFRLEVBQUE7UUFHdEMsOEJBQW9DLG9CQUFBO1FBRUssNEhBQVksd0NBQW9DLElBQUM7UUFBcUIsaUJBQWE7UUFDekgsZ0NBQW1CO1FBQUEsMkJBQVU7UUFBQSxpQkFBUSxFQUFBLEVBQUE7UUFLNUMsK0JBQTBEO1FBRXhELG1GQVNVO1FBQ1osaUJBQU07UUFLTixnQ0FBbUQsY0FBQTtRQUVoRCxtRkFHTTtRQUVSLGlCQUFNLEVBQUEsRUFBQSxFQUFBOztRQXRDYSxlQUFjO1FBQWQsZ0NBQWMsMEJBQUE7UUFRZixlQUFjO1FBQWQsZ0NBQWMsMEJBQUE7UUFRekIsZUFBOEI7UUFBOUIsdURBQThCO1FBaUIyQyxlQUFXO1FBQVgsc0NBQVc7O3VGRHpCdEYsK0JBQStCO2NBTDNDLFNBQVM7MkJBQ0UseUNBQXlDLFVBRTNDLEVBQUU7K0hBT0QsT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2F0ZWdvcnknO1xyXG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhdGVnb3JpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgYmluYXJ5UHJvcCA9IHRydWU7XHJcbiAgY3VycmVudElkOiBzdHJpbmc7XHJcbiAgYnJhbmROYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcclxuICBwcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XHJcbiAgd1Byb2RzOiBQcm9kdWN0MTIzW10gPSBbXTtcclxuICBicmFuZEFsbFByb2RzOiBQcm9kdWN0MTIzW10gPSBbXTtcclxuICBtX2ZpbHRlcmVkUHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xyXG4gIHdfZmlsdGVyZWRQcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XHJcbiAgbmV3UHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xyXG4gIGZpcnN0RmlsdGVyOiBQcm9kdWN0MTIzW10gPSBbXTtcclxuICBzZWNvbmRGaWx0ZXI6IFByb2R1Y3QxMjNbXSA9IFtdO1xyXG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXTtcclxuICBzZWxlY3RlZEFueSA9IGZhbHNlO1xyXG4gIHNlbGVjdGVkXzEgPSBmYWxzZTtcclxuICBzZWxlY3RlZF8yID0gZmFsc2U7XHJcbiAgbSA9IGZhbHNlO1xyXG4gIHcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNhdFNlcnZpY2U6IENhdGVnb3JpZXNTZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZXRyaWV2ZUlkKCk7XHJcbiAgICB0aGlzLl9nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICB0aGlzLl9nZXRBbGxQcm9kc0J5QnJhbmQoKTtcclxuICAgIC8vIHRoaXMuX2dldE1Qcm9kQnlCcmFuZCgpO1xyXG4gICAgLy8gdGhpcy5fZ2V0V3Byb2RCeUJyYW5kKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZXRyaWV2ZUlkKCkge1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMuYnJhbmRJZDtcclxuICAgICAgdGhpcy5icmFuZE5hbWUgPSBwYXJhbXMuYnJhbmROYW1lO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYnJhbmROYW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0Q2F0ZWdvcmllcygpIHtcclxuICAgIHRoaXMuY2F0U2VydmljZS5nZXRDYXRlZ29yaWVzKCkuc3Vic2NyaWJlKChyZXNDYXRzKSA9PiB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc0NhdHM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldEFsbFByb2RzQnlCcmFuZCgpIHtcclxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlXHJcbiAgICAgIC5nZXRBbGxQcm9kdWN0c0J5QnJhbmQodGhpcy5jdXJyZW50SWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHVuaXF1ZVByb2RzID0gW1xyXG4gICAgICAgICAgLi4udGhpcy5wcm9kdWN0c1xyXG4gICAgICAgICAgLnJlZHVjZSgobWFwLCBvYmopID0+IG1hcC5zZXQob2JqLm5hbWUsIG9iaiksIG5ldyBNYXAoKSlcclxuICAgICAgICAgIC52YWx1ZXMoKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB1bmlxdWVQcm9kcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0TWVuUHJvZHNCeUJyYW5kKGJyYW5kRmlsdGVyPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRBbGxNUHJvZHVjdHNCeUJyYW5kKGJyYW5kRmlsdGVyKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgICAgY29uc3QgdW5pcXVlUHJvZHMgPSBbXHJcbiAgICAgICAgLi4udGhpcy5wcm9kdWN0c1xyXG4gICAgICAgICAgLnJlZHVjZSgobWFwLCBvYmopID0+IG1hcC5zZXQob2JqLm5hbWUsIG9iaiksIG5ldyBNYXAoKSlcclxuICAgICAgICAgIC52YWx1ZXMoKSxcclxuICAgICAgXTtcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHVuaXF1ZVByb2RzO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0V29tZW5Qcm9kc0J5QnJhbmQoYnJhbmRGaWx0ZXI/OiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldEFsbFdQcm9kdWN0c0J5QnJhbmQoYnJhbmRGaWx0ZXIpLnN1YnNjcmliZSgocHJvZHVjdHMpID0+IHtcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xyXG4gICAgICBjb25zdCB1bmlxdWVQcm9kcyA9IFtcclxuICAgICAgICAuLi50aGlzLnByb2R1Y3RzXHJcbiAgICAgICAgICAucmVkdWNlKChtYXAsIG9iaikgPT4gbWFwLnNldChvYmoubmFtZSwgb2JqKSwgbmV3IE1hcCgpKVxyXG4gICAgICAgICAgLnZhbHVlcygpLFxyXG4gICAgICBdO1xyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIFNFWCBTRUxFQ1RJT04gRklMVEVSXHJcbiAgc2VsZWN0TWVuRnJvbUJyYW5kQWxsUHJvZHMoZXZlbnQ6IGFueSkge1xyXG50aGlzLncgPSAhdGhpcy53O1xyXG4gICAgXHJcbiAgICB0aGlzLnNlbGVjdGVkXzEgPSAhdGhpcy5zZWxlY3RlZF8xO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZF8xKTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZF8xKSB7XHJcbiAgICAgIHRoaXMuX2dldE1lblByb2RzQnlCcmFuZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZ2V0QWxsUHJvZHNCeUJyYW5kKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlbGVjdFdvbWVuRnJvbUJyYW5kQWxsUHJvZHMoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5tID0gIXRoaXMubTtcclxuICAgICAgY29uc3QgaW5mbyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudGFyZ2V0LmlubmVySFRNTDtcclxuICAgICAgY29uc29sZS5sb2coaW5mby5pbmNsdWRlcygnd29tZW4nKSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZF8yID0gIXRoaXMuc2VsZWN0ZWRfMjtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkXzIpIHtcclxuICAgICAgdGhpcy5fZ2V0V29tZW5Qcm9kc0J5QnJhbmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2dldEFsbFByb2RzQnlCcmFuZCgpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhdGVnb3J5RmlsdGVyKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmllc1xyXG4gICAgICAuZmlsdGVyKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkuY2hlY2tlZClcclxuICAgICAgLm1hcCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LmlkKTtcclxuXHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRfMSAmJiBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRNcHJvZHVjdHNGaWx0ZXJlZEJ5Q2F0ZWdvcnlBbmRCcmFuZChzZWxlY3RlZENhdGVnb3JpZXMsdGhpcy5jdXJyZW50SWQpLnN1YnNjcmliZSgocHJvZHVjdHMpID0+IHtcclxuICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXF1ZVByb2RzID0gW1xyXG4gICAgICAgICAgICAgICAgICAuLi50aGlzLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgobWFwLCBvYmopID0+IG1hcC5zZXQob2JqLm5hbWUsIG9iaiksIG5ldyBNYXAoKSlcclxuICAgICAgICAgICAgICAgICAgICAudmFsdWVzKCksXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHVuaXF1ZVByb2RzO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfMSAmJiBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0TWVuUHJvZHNCeUJyYW5kKCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZF8yICYmIHNlbGVjdGVkQ2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFdwcm9kdWN0c0ZpbHRlcmVkQnlDYXRlZ29yeUFuZEJyYW5kKHNlbGVjdGVkQ2F0ZWdvcmllcywgdGhpcy5jdXJyZW50SWQpLnN1YnNjcmliZSgocHJvZHVjdHMpPT57XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHVuaXF1ZVByb2RzID0gW1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAucmVkdWNlKChtYXAsIG9iaikgPT4gbWFwLnNldChvYmoubmFtZSwgb2JqKSwgbmV3IE1hcCgpKVxyXG4gICAgICAgICAgICAgICAgICAudmFsdWVzKCksXHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgICBpZiAodGhpcy5zZWxlY3RlZF8yICYmIHNlbGVjdGVkQ2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgdGhpcy5fZ2V0V29tZW5Qcm9kc0J5QnJhbmQoKTtcclxuICAgICAgIH1cclxuICAgIFxyXG4gIH1cclxuICBcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicHJvZHVjdHMtcGFnZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVuLXdvbWVuLWZpbHRlciBtZDpjb2wtMyBsZzpjb2wtMTJcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1maWVsZC1jaGVja2JveCBtZW5cIj5cclxuXHJcbiAgICAgICAgICAgICAgIDxwLWNoZWNrYm94IFtkaXNhYmxlZF09XCJtXCIgaWQ9XCJtZW5cIiAob25DaGFuZ2UpPVwic2VsZWN0TWVuRnJvbUJyYW5kQWxsUHJvZHMoJGV2ZW50KVwiIFtiaW5hcnldPWJpbmFyeVByb3A+PC9wLWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lblwiPk1vZGEgdW9tbzwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWZpZWxkLWNoZWNrYm94IHdvbWVuXCI+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxwLWNoZWNrYm94IFtkaXNhYmxlZF09XCJ3XCIgaWQ9XCJ3b21lblwiIChvbkNoYW5nZSk9XCJzZWxlY3RXb21lbkZyb21CcmFuZEFsbFByb2RzKCRldmVudClcIiBbYmluYXJ5XT1iaW5hcnlQcm9wPjwvcC1jaGVja2JveD5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwid29tZW5cIj5Nb2RhIGRvbm5hPC9sYWJlbD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yaWVzLWZpbHRlciBtZDpjb2wtMyBsZzpjb2wtMiB4bDpjb2wtM1wiPlxyXG5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cInNlbGVjdGVkXzEgfHwgc2VsZWN0ZWRfMlwiPlxyXG4gICAgICAgICAgICAgICAgIDxoND5DYXRlZ29yaWU8L2g0PlxyXG4gXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZmllbGQtY2hlY2tib3hcIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgPHAtY2hlY2tib3ggaWQ9XCJ7e2NhdGVnb3J5Lm5hbWV9fVwiIFsobmdNb2RlbCldPVwiY2F0ZWdvcnkuY2hlY2tlZFwiIFtiaW5hcnldPWJpbmFyeVByb3AgW2lucHV0SWRdPVwiY2F0ZWdvcnkuaWQhXCJcclxuICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImNhdGVnb3J5RmlsdGVyKCRldmVudClcIj48L3AtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tjYXRlZ29yeS5pZH19XCI+e3tjYXRlZ29yeS5uYW1lfX08L2xhYmVsPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgXHJcbiAgXHJcblxyXG4gICAgICAgPGRpdiBjbGFzcz1cInNtOmNvbC0xMiBtZDpjb2wtOSBsZzpjb2wtMTAgeGw6Y29sLTlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGFpbmVyIHNtOmNvbC02IG1kOmNvbC02IGxnOmNvbC0zIHhsOmNvbC0zXCIgKm5nRm9yPVwibGV0IHAgb2YgcHJvZHVjdHNcIj5cclxuICBcclxuICAgICAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSBbcHJvZHVjdF09XCJwXCI+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+IFxyXG48IS0tIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbTpjb2wtMTIgbWQ6Y29sLTkgbGc6Y29sLTEwIHhsOmNvbC05XCIgKm5nSWY9XCJzZWxlY3RlZF8xXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIiAqbmdJZj1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250YWluZXIgc206Y29sLTYgbWQ6Y29sLTYgbGc6Y29sLTMgeGw6Y29sLTNcIiAqbmdGb3I9XCJsZXQgbSBvZiBtX2ZpbHRlcmVkUHJvZHVjdHNcIj5cclxuXHJcbiAgXHJcblxyXG4gICAgICAgICAgICA8ZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtIFtwcm9kdWN0XT1cIm1cIj48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic206Y29sLTEyIG1kOmNvbC05IGxnOmNvbC0xMCB4bDpjb2wtOVwiICpuZ0lmPVwic2VsZWN0ZWRfMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCIgKm5nSWY9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGFpbmVyIHNtOmNvbC02IG1kOmNvbC02IGxnOmNvbC0zIHhsOmNvbC0zXCIgKm5nRm9yPVwibGV0IHcgb2Ygd19maWx0ZXJlZFByb2R1Y3RzXCI+XHJcbiAgXHJcbiAgICAgICAgICAgIDxlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0gW3Byb2R1Y3RdPVwid1wiPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAgICAtLT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj4gIl19