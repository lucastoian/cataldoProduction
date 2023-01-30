import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product123 } from '../../models/product123';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/products.service";
import * as i3 from "../../services/categories.service";
import * as i4 from "@angular/common";
import * as i5 from "primeng/checkbox";
import * as i6 from "@angular/forms";
import * as i7 from "../../components/product-item/product-item.component";
function CarouselProductsBrandsComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "p-checkbox", 15);
    i0.ɵɵlistener("ngModelChange", function CarouselProductsBrandsComponent_div_12_div_3_Template_p_checkbox_ngModelChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r5); const category_r3 = restoredCtx.$implicit; return i0.ɵɵresetView(category_r3.checked = $event); })("onChange", function CarouselProductsBrandsComponent_div_12_div_3_Template_p_checkbox_onChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.categoryFilter($event)); });
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
    } }, dependencies: [i4.NgForOf, i4.NgIf, i1.RouterLink, i5.Checkbox, i6.NgControlStatus, i6.NgModel, i7.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselProductsBrandsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-carousel-products-brands', template: "<div class=\"products-page\">\n    <div class=\"grid\">\n        <div class=\"men-women-filter md:col-3 lg:col-12\" style=\"padding-left: 20px;\">\n           <div class=\"p-field-checkbox men\">\n\n               <p-checkbox style=\"padding-right: 5px;\" [disabled]=\"m\" id=\"men\" (onChange)=\"selectMenFromBrandAllProds($event)\" [binary]=binaryProp></p-checkbox>\n\n\n               <label for=\"men\">Moda uomo</label>\n\n           </div>\n           <div class=\"p-field-checkbox women\">\n\n              <p-checkbox style=\"padding-right: 5px;\" [disabled]=\"w\" id=\"women\" (onChange)=\"selectWomenFromBrandAllProds($event)\" [binary]=binaryProp></p-checkbox>\n              <label for=\"women\">Moda donna</label>\n\n        </div>\n\n      </div>\n       <div class=\"categories-filter md:col-3 lg:col-2 xl:col-3\">\n\n         <div *ngIf=\"selected_1 || selected_2\">\n                 <h4>Categorie</h4>\n\n                 <div class=\"p-field-checkbox\" *ngFor=\"let category of categories\">\n                   <p-checkbox id=\"{{category.name}}\" [(ngModel)]=\"category.checked\" [binary]=binaryProp [inputId]=\"category.id!\"\n                     (onChange)=\"categoryFilter($event)\"></p-checkbox>\n                   <label for=\"{{category.id}}\">{{category.name}}</label>\n\n                 </div>\n             </div>\n       </div>\n\n\n\n\n       <div class=\"sm:col-12 md:col-9 lg:col-10 xl:col-9\" style=\"padding: 30px;\">\n        <div class=\"grid\">\n          <div class=\"item-container sm:col-6 md:col-6 lg:col-3 xl:col-3\" *ngFor=\"let p of products\">\n\n            <eshop-frontend-product-item [routerLink]=\" w ? ['/women-products/' + p.id] : ['/products/' + p.id]\" [product]=\"p\"></eshop-frontend-product-item>\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i3.CategoriesService }]; }, { product: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7OztJQ21CakQsK0JBQWtFLHFCQUFBO0lBQzdCLHlPQUFhLDRDQUF3QixJQUFQLHVMQUNuRCxlQUFBLDZCQUFzQixDQUFBLElBRDZCO0lBQzNCLGlCQUFhO0lBQ25ELGlDQUE2QjtJQUFBLFlBQWlCO0lBQUEsaUJBQVEsRUFBQTs7OztJQUYxQyxlQUFzQjtJQUF0QixnREFBc0I7SUFBQyw2Q0FBOEIsNkJBQUEsMkJBQUE7SUFFMUQsZUFBcUI7SUFBckIsK0NBQXFCO0lBQUMsZUFBaUI7SUFBakIsc0NBQWlCOzs7SUFOeEQsMkJBQXNDLFNBQUE7SUFDMUIseUJBQVM7SUFBQSxpQkFBSztJQUVsQix3RkFLTTtJQUNWLGlCQUFNOzs7SUFOaUQsZUFBYTtJQUFiLDJDQUFhOzs7O0lBY3ZF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eUJBQ3ZELE1BQU0sRUFBRTtpQkFDWixDQUFDO2dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO2dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQTtTQUNIO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7SUFFTixDQUFDOzs4R0FoS1UsK0JBQStCO2tGQUEvQiwrQkFBK0I7UUNiNUMsOEJBQTJCLGFBQUEsYUFBQSxhQUFBLG9CQUFBO1FBS29ELDRIQUFZLHNDQUFrQyxJQUFDO1FBQXFCLGlCQUFhO1FBR2pKLGdDQUFpQjtRQUFBLHlCQUFTO1FBQUEsaUJBQVEsRUFBQTtRQUd0Qyw4QkFBb0Msb0JBQUE7UUFFaUMsNEhBQVksd0NBQW9DLElBQUM7UUFBcUIsaUJBQWE7UUFDckosZ0NBQW1CO1FBQUEsMkJBQVU7UUFBQSxpQkFBUSxFQUFBLEVBQUE7UUFLNUMsK0JBQTBEO1FBRXhELG1GQVNVO1FBQ1osaUJBQU07UUFLTixnQ0FBMEUsY0FBQTtRQUV2RSxtRkFHTTtRQUVSLGlCQUFNLEVBQUEsRUFBQSxFQUFBOztRQXRDeUMsZUFBYztRQUFkLGdDQUFjLDBCQUFBO1FBUWYsZUFBYztRQUFkLGdDQUFjLDBCQUFBO1FBUXJELGVBQThCO1FBQTlCLHVEQUE4QjtRQWlCMkMsZUFBVztRQUFYLHNDQUFXOzt1RkR6QnRGLCtCQUErQjtjQUwzQyxTQUFTOzJCQUNFLHlDQUF5QzsrSEFTMUMsT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy9jYXRlZ29yeSc7XG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXRlZ29yaWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLXByb2R1Y3RzLWJyYW5kcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsUHJvZHVjdHNCcmFuZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0NoZWNrZWQgPSBmYWxzZTtcbiAgYmluYXJ5UHJvcCA9IHRydWU7XG4gIGN1cnJlbnRJZDogc3RyaW5nO1xuICBicmFuZE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICB3UHJvZHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBicmFuZEFsbFByb2RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgbV9maWx0ZXJlZFByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgd19maWx0ZXJlZFByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgbmV3UHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBmaXJzdEZpbHRlcjogUHJvZHVjdDEyM1tdID0gW107XG4gIHNlY29uZEZpbHRlcjogUHJvZHVjdDEyM1tdID0gW107XG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXTtcbiAgc2VsZWN0ZWRBbnkgPSBmYWxzZTtcbiAgc2VsZWN0ZWRfMSA9IGZhbHNlO1xuICBzZWxlY3RlZF8yID0gZmFsc2U7XG4gIG0gPSBmYWxzZTtcbiAgdyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXRTZXJ2aWNlOiBDYXRlZ29yaWVzU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JldHJpZXZlSWQoKTtcbiAgICB0aGlzLl9nZXRDYXRlZ29yaWVzKCk7XG4gICAgdGhpcy5fZ2V0QWxsUHJvZHNCeUJyYW5kKCk7XG4gICAgLy8gdGhpcy5fZ2V0TVByb2RCeUJyYW5kKCk7XG4gICAgLy8gdGhpcy5fZ2V0V3Byb2RCeUJyYW5kKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZXRyaWV2ZUlkKCkge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5icmFuZElkO1xuICAgICAgdGhpcy5icmFuZE5hbWUgPSBwYXJhbXMuYnJhbmROYW1lO1xuICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5icmFuZE5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICB0aGlzLmNhdFNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpLnN1YnNjcmliZSgocmVzQ2F0cykgPT4ge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzQ2F0cztcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEFsbFByb2RzQnlCcmFuZCgpIHtcbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZVxuICAgICAgLmdldEFsbFByb2R1Y3RzQnlCcmFuZCh0aGlzLmN1cnJlbnRJZClcbiAgICAgIC5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVuaXF1ZVByb2RzID0gW1xuICAgICAgICAgIC4uLnRoaXMucHJvZHVjdHNcbiAgICAgICAgICAucmVkdWNlKChtYXAsIG9iaikgPT4gbWFwLnNldChvYmoubmFtZSwgb2JqKSwgbmV3IE1hcCgpKVxuICAgICAgICAgIC52YWx1ZXMoKSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHVuaXF1ZVByb2RzO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcbiAgICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIF9nZXRNZW5Qcm9kc0J5QnJhbmQoYnJhbmRGaWx0ZXI/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRBbGxNUHJvZHVjdHNCeUJyYW5kKGJyYW5kRmlsdGVyKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgICBjb25zdCB1bmlxdWVQcm9kcyA9IFtcbiAgICAgICAgLi4udGhpcy5wcm9kdWN0c1xuICAgICAgICAgIC5yZWR1Y2UoKG1hcCwgb2JqKSA9PiBtYXAuc2V0KG9iai5uYW1lLCBvYmopLCBuZXcgTWFwKCkpXG4gICAgICAgICAgLnZhbHVlcygpLFxuICAgICAgXTtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSB1bmlxdWVQcm9kcztcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0V29tZW5Qcm9kc0J5QnJhbmQoYnJhbmRGaWx0ZXI/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRBbGxXUHJvZHVjdHNCeUJyYW5kKGJyYW5kRmlsdGVyKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgICBjb25zdCB1bmlxdWVQcm9kcyA9IFtcbiAgICAgICAgLi4udGhpcy5wcm9kdWN0c1xuICAgICAgICAgIC5yZWR1Y2UoKG1hcCwgb2JqKSA9PiBtYXAuc2V0KG9iai5uYW1lLCBvYmopLCBuZXcgTWFwKCkpXG4gICAgICAgICAgLnZhbHVlcygpLFxuICAgICAgXTtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSB1bmlxdWVQcm9kcztcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIFNFWCBTRUxFQ1RJT04gRklMVEVSXG4gIHNlbGVjdE1lbkZyb21CcmFuZEFsbFByb2RzKGV2ZW50OiBhbnkpIHtcbnRoaXMudyA9ICF0aGlzLnc7XG4gICAgXG4gICAgdGhpcy5zZWxlY3RlZF8xID0gIXRoaXMuc2VsZWN0ZWRfMTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkXzEpO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRfMSkge1xuICAgICAgdGhpcy5fZ2V0TWVuUHJvZHNCeUJyYW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dldEFsbFByb2RzQnlCcmFuZCgpO1xuICAgIH1cbiAgfVxuICBzZWxlY3RXb21lbkZyb21CcmFuZEFsbFByb2RzKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLm0gPSAhdGhpcy5tO1xuICAgICAgY29uc3QgaW5mbyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudGFyZ2V0LmlubmVySFRNTDtcbiAgICAgIGNvbnNvbGUubG9nKGluZm8uaW5jbHVkZXMoJ3dvbWVuJykpO1xuXG4gICAgdGhpcy5zZWxlY3RlZF8yID0gIXRoaXMuc2VsZWN0ZWRfMjtcbiAgICBpZiAodGhpcy5zZWxlY3RlZF8yKSB7XG4gICAgICB0aGlzLl9nZXRXb21lblByb2RzQnlCcmFuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nZXRBbGxQcm9kc0J5QnJhbmQoKTtcblxuICAgIH1cbiAgfVxuXG4gIGNhdGVnb3J5RmlsdGVyKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBzZWxlY3RlZENhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXNcbiAgICAgIC5maWx0ZXIoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5jaGVja2VkKVxuICAgICAgLm1hcCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LmlkKTtcblxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRfMSAmJiBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0TXByb2R1Y3RzRmlsdGVyZWRCeUNhdGVnb3J5QW5kQnJhbmQoc2VsZWN0ZWRDYXRlZ29yaWVzLHRoaXMuY3VycmVudElkKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXF1ZVByb2RzID0gW1xuICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChtYXAsIG9iaikgPT4gbWFwLnNldChvYmoubmFtZSwgb2JqKSwgbmV3IE1hcCgpKVxuICAgICAgICAgICAgICAgICAgICAudmFsdWVzKCksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfMSAmJiBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuX2dldE1lblByb2RzQnlCcmFuZCgpO1xuICAgICAgfVxuICAgICAgXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRfMiAmJiBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0V3Byb2R1Y3RzRmlsdGVyZWRCeUNhdGVnb3J5QW5kQnJhbmQoc2VsZWN0ZWRDYXRlZ29yaWVzLCB0aGlzLmN1cnJlbnRJZCkuc3Vic2NyaWJlKChwcm9kdWN0cyk9PntcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgICAgICAgICBjb25zdCB1bmlxdWVQcm9kcyA9IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAucmVkdWNlKChtYXAsIG9iaikgPT4gbWFwLnNldChvYmoubmFtZSwgb2JqKSwgbmV3IE1hcCgpKVxuICAgICAgICAgICAgICAgICAgLnZhbHVlcygpLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gdW5pcXVlUHJvZHM7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuICAgICAgfSlcbiAgICB9XG4gICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfMiAmJiBzZWxlY3RlZENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICB0aGlzLl9nZXRXb21lblByb2RzQnlCcmFuZCgpO1xuICAgICAgIH1cbiAgICBcbiAgfVxuICBcbn1cbiIsIjxkaXYgY2xhc3M9XCJwcm9kdWN0cy1wYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbi13b21lbi1maWx0ZXIgbWQ6Y29sLTMgbGc6Y29sLTEyXCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDIwcHg7XCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWZpZWxkLWNoZWNrYm94IG1lblwiPlxuXG4gICAgICAgICAgICAgICA8cC1jaGVja2JveCBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIiBbZGlzYWJsZWRdPVwibVwiIGlkPVwibWVuXCIgKG9uQ2hhbmdlKT1cInNlbGVjdE1lbkZyb21CcmFuZEFsbFByb2RzKCRldmVudClcIiBbYmluYXJ5XT1iaW5hcnlQcm9wPjwvcC1jaGVja2JveD5cblxuXG4gICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVuXCI+TW9kYSB1b21vPC9sYWJlbD5cblxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZmllbGQtY2hlY2tib3ggd29tZW5cIj5cblxuICAgICAgICAgICAgICA8cC1jaGVja2JveCBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDVweDtcIiBbZGlzYWJsZWRdPVwid1wiIGlkPVwid29tZW5cIiAob25DaGFuZ2UpPVwic2VsZWN0V29tZW5Gcm9tQnJhbmRBbGxQcm9kcygkZXZlbnQpXCIgW2JpbmFyeV09YmluYXJ5UHJvcD48L3AtY2hlY2tib3g+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ3b21lblwiPk1vZGEgZG9ubmE8L2xhYmVsPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcmllcy1maWx0ZXIgbWQ6Y29sLTMgbGc6Y29sLTIgeGw6Y29sLTNcIj5cblxuICAgICAgICAgPGRpdiAqbmdJZj1cInNlbGVjdGVkXzEgfHwgc2VsZWN0ZWRfMlwiPlxuICAgICAgICAgICAgICAgICA8aDQ+Q2F0ZWdvcmllPC9oND5cblxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1maWVsZC1jaGVja2JveFwiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzXCI+XG4gICAgICAgICAgICAgICAgICAgPHAtY2hlY2tib3ggaWQ9XCJ7e2NhdGVnb3J5Lm5hbWV9fVwiIFsobmdNb2RlbCldPVwiY2F0ZWdvcnkuY2hlY2tlZFwiIFtiaW5hcnldPWJpbmFyeVByb3AgW2lucHV0SWRdPVwiY2F0ZWdvcnkuaWQhXCJcbiAgICAgICAgICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJjYXRlZ29yeUZpbHRlcigkZXZlbnQpXCI+PC9wLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2NhdGVnb3J5LmlkfX1cIj57e2NhdGVnb3J5Lm5hbWV9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG5cblxuXG5cbiAgICAgICA8ZGl2IGNsYXNzPVwic206Y29sLTEyIG1kOmNvbC05IGxnOmNvbC0xMCB4bDpjb2wtOVwiIHN0eWxlPVwicGFkZGluZzogMzBweDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250YWluZXIgc206Y29sLTYgbWQ6Y29sLTYgbGc6Y29sLTMgeGw6Y29sLTNcIiAqbmdGb3I9XCJsZXQgcCBvZiBwcm9kdWN0c1wiPlxuXG4gICAgICAgICAgICA8ZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtIFtyb3V0ZXJMaW5rXT1cIiB3ID8gWycvd29tZW4tcHJvZHVjdHMvJyArIHAuaWRdIDogWycvcHJvZHVjdHMvJyArIHAuaWRdXCIgW3Byb2R1Y3RdPVwicFwiPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiJdfQ==