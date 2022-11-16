import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paginator } from 'primeng/paginator';
import { Product123 } from '../../models/product123';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import { W_ProductsService } from '../../services/w-products.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/products.service";
import * as i3 from "../../services/categories.service";
import * as i4 from "../../services/w-products.service";
import * as i5 from "primeng/multiselect";
import * as i6 from "@angular/forms";
import * as i7 from "primeng/paginator";
import * as i8 from "@angular/common";
import * as i9 from "../../components/product-item/product-item.component";
const _c0 = ["paginator"];
const _c1 = function (a0) { return [a0]; };
function ProductsBrandsComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "eshop-frontend-product-item", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r1.w ? i0.ɵɵpureFunction1(2, _c1, "/women-products/" + product_r2.id) : i0.ɵɵpureFunction1(4, _c1, "/products/" + product_r2.id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("product", product_r2);
} }
function ProductsBrandsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtemplate(1, ProductsBrandsComponent_div_32_div_1_Template, 2, 6, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.productOnThisPage);
} }
const _c2 = function () { return { "width": "100%" }; };
const _c3 = function () { return { "width": "400px" }; };
export class ProductsBrandsComponent {
    constructor(route, productsService, catService, wProdService) {
        this.route = route;
        this.productsService = productsService;
        this.catService = catService;
        this.wProdService = wProdService;
        this.isChecked = false;
        this.binaryProp = true;
        this.products = [];
        this.productOnThisPage = [];
        this.wProds = [];
        this.filteredProducts = [];
        this.categories = [];
        this.first = 0;
        this.sex = "";
        this.sesso = [{ name: 'Uomo', code: 'M' }, { name: 'Donna', code: 'F' }];
        this.categoria = [{ name: 'Camicie', code: 'camicie' }, { name: 'Polo', code: 'polo' }, { name: 'Pantaloni', code: 'pantaloni' }, { name: 'Felpe', code: 'felpe' }, { name: 'Maglioni', code: 'maglioni' }, { name: 'Gilet', code: 'gilet' }, { name: 'Sneakers', code: 'sneakers' }, { name: 'T-shirt', code: 't-shirt' }, { name: 'Giubbotti', code: 'giubbotti' }, { name: 'Cinture', code: 'cinture' }, { name: 'Scarpe', code: 'scarpe' }, { name: 'Jeans', code: 'jeans' },];
        this.brand = [{ name: 'Blauer', code: 'blauer' }, { name: 'Old River', code: 'old river' }, { name: 'Colmar', code: 'colmar' }, { name: 'EA7', code: 'ea7' }, { name: 'Kway', code: 'kway' }, { name: 'Lacoste', code: 'Saucony' }, { name: 'Sun 68', code: 'sun68' }, { name: 'Barbour', code: 'barbour' }, { name: 'Ciesse', code: 'ciesse' }, { name: 'Husky', code: 'husky' }, { name: 'Candiens', code: 'candiends' }];
        this.taglia = [{ name: '37', code: '37' }, { name: '38', code: '38' }, { name: '39', code: '39' }, { name: '40', code: '40' }, { name: '41', code: '41' }, { name: '42', code: '42' }, { name: '43', code: '43' }, { name: '44', code: '44' }, { name: '45', code: '45' }, { name: '46', code: '46' }, { name: 'XXS', code: 'xxs' }, { name: 'XS', code: 'xs' }, { name: 'S', code: 's' }, { name: 'M', code: 'm' }, { name: 'L', code: 'l' }, { name: 'XL', code: 'xl' }, { name: 'XXL', code: 'xxl' }, { name: 'XXXL', code: 'xxxl' }];
    }
    ngOnInit() {
        this.url = this.route.url;
        this._urlSegment = this.url.value[0].path;
        console.log("url segment = " + this._urlSegment);
        if (this._urlSegment === "products") {
            this._retrieveId();
            this._getProdByBrand();
            // this._getCategories();
            this.fromCarousel = false;
        }
    }
    changePage(event) {
        console.log(" change page cerco tra questo indice : " + ((event.page * 10)) + " e questo " + ((event.page + 1) * 10) + " current page = " + this.currentPage);
        this.productOnThisPage = this.products.slice((event.page * 10), ((event.page + 1) * 10));
    }
    search(event) {
        let sesso23;
        sesso23 = [];
        if (this.selectedSex) {
            for (let i = 0; i < this.selectedSex.length; i++) {
                sesso23.push(this.selectedSex[i].code);
            }
        }
        console.log(sesso23);
        let categorie;
        categorie = [];
        if (this.selectedCategoria) {
            for (let i = 0; i < this.selectedCategoria.length; i++) {
                categorie.push(this.selectedCategoria[i].code);
            }
        }
        let brand;
        brand = [];
        if (this.selectedBrand) {
            for (let i = 0; i < this.selectedBrand.length; i++) {
                brand.push(this.selectedBrand[i].code);
            }
        }
        let taglie;
        taglie = [];
        if (this.selectedTaglia) {
            for (let i = 0; i < this.selectedTaglia.length; i++) {
                taglie.push(this.selectedTaglia[i].code);
            }
        }
        console.log("Sesso = " + sesso23 + " categorie = " + categorie);
        this.productsService.getFilteredProducts(brand, categorie, sesso23, taglie).subscribe((products) => {
            this.products = products;
            console.log("ho trovato questi products : " + products);
            this.productOnThisPage = this.products.slice(0, 10);
            this.filteredProducts = products;
            //  setTimeout(() => this.paginator.changePage(1));
            this.first = 0;
        });
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
        this.productsService.getFilteredProducts([this.currentId], null, [this.sex], null).subscribe((products) => {
            this.products = products;
            console.log("prooducts = " + this.products);
            this.productOnThisPage = this.products.slice(0, 10);
            console.log("product on this page = " + this.productOnThisPage);
            this.filteredProducts = products;
        });
    }
    categoryFilter() {
        this.products = [];
        const selectedCategories = this.categories.filter((category) => category.checked).map((category) => category.id);
        console.log("categorie = " + selectedCategories);
        this.productsService.getFilteredProducts([this.currentId], selectedCategories, [this.sex]).subscribe((products) => {
            this.products = products;
        });
    }
}
ProductsBrandsComponent.ɵfac = function ProductsBrandsComponent_Factory(t) { return new (t || ProductsBrandsComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.ProductsService), i0.ɵɵdirectiveInject(i3.CategoriesService), i0.ɵɵdirectiveInject(i4.W_ProductsService)); };
ProductsBrandsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductsBrandsComponent, selectors: [["eshop-frontend-products-brands"]], viewQuery: function ProductsBrandsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
    } }, inputs: { product: "product" }, decls: 33, vars: 32, consts: [[1, "grid", 2, "justify-content", "center"], [1, "row", "w-100"], [1, "col-12", "d-flex", 2, "justify-content", "center"], [1, "grid", "w-100"], [1, "col-12", 2, "height", "240px", "background-image", "url(https://sciuti.it/immagini/copertine/colmar-piumini-ai17-desktop.jpg)", "background-repeat", "no-repeat", "background-size", "cover"], [1, "col-12", 2, "font-size", "29px", "letter-spacing", "2px", "font-weight", "900"], [1, "col-12", 2, "max-height", "140px", "overflow-y", "auto"], ["id", "filtri", 1, "row", "w-100"], [1, "col-md-4", "col-6"], [1, "m-0", 2, "color", "rgb(52, 52, 52)", "letter-spacing", "2px", "font-weight", "700"], ["defaultLabel", "Genere", "optionLabel", "name", "display", "chip", 3, "options", "ngModel", "panelStyle", "onChange", "ngModelChange"], ["defaultLabel", "Categoria", "optionLabel", "name", "display", "chip", 3, "options", "ngModel", "panelStyle", "onChange", "ngModelChange"], ["defaultLabel", "Brand", "optionLabel", "name", "display", "chip", 3, "options", "ngModel", "panelStyle", "onChange", "ngModelChange"], [1, "col-md-3", "col-6", 2, "display", "none"], ["defaultLabel", "Taglia", "optionLabel", "name", "display", "chip", 3, "options", "ngModel", "panelStyle", "onChange", "ngModelChange"], [1, "row"], [1, "col-12"], [3, "rows", "totalRecords", "first", "onPageChange"], ["class", "grid", "style", "justify-content: center;", 4, "ngIf"], ["class", "col-auto p-3", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-auto", "p-3", 3, "routerLink"], [3, "product"]], template: function ProductsBrandsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 1);
        i0.ɵɵelement(5, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 1)(7, "div", 5);
        i0.ɵɵtext(8, " COLMAR ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵtext(10, " Nata a Monza nel 1923, il nome dell\u2019azienda Colmar prende spunto dalle iniziali del suo fondatore Mario Colombo. Specializzata nell\u2019abbigliamento sportivo, l\u2019azienda italiana inizialmente presta maggiore attenzione a quello da sci. Ma \u00E8 nel 2009 che nasce la linea Colmar Original dedicata ai giovani e caratterizzata dallo storico logo vintage, da capi di qualit\u00E0 alla moda urban-lifestyle ma pur sempre d\u2019ispirazione sportiva. ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "div", 7)(12, "div", 8)(13, "p", 9);
        i0.ɵɵtext(14, "Genere");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "p-multiSelect", 10);
        i0.ɵɵlistener("onChange", function ProductsBrandsComponent_Template_p_multiSelect_onChange_15_listener($event) { return ctx.search($event); })("ngModelChange", function ProductsBrandsComponent_Template_p_multiSelect_ngModelChange_15_listener($event) { return ctx.selectedSex = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(16, "div", 8)(17, "p", 9);
        i0.ɵɵtext(18, "Categorie");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "p-multiSelect", 11);
        i0.ɵɵlistener("onChange", function ProductsBrandsComponent_Template_p_multiSelect_onChange_19_listener($event) { return ctx.search($event); })("ngModelChange", function ProductsBrandsComponent_Template_p_multiSelect_ngModelChange_19_listener($event) { return ctx.selectedCategoria = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(20, "div", 8)(21, "p", 9);
        i0.ɵɵtext(22, "Brand");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "p-multiSelect", 12);
        i0.ɵɵlistener("onChange", function ProductsBrandsComponent_Template_p_multiSelect_onChange_23_listener($event) { return ctx.search($event); })("ngModelChange", function ProductsBrandsComponent_Template_p_multiSelect_ngModelChange_23_listener($event) { return ctx.selectedBrand = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(24, "div", 13)(25, "p", 9);
        i0.ɵɵtext(26, "Taglie");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "p-multiSelect", 14);
        i0.ɵɵlistener("onChange", function ProductsBrandsComponent_Template_p_multiSelect_onChange_27_listener($event) { return ctx.search($event); })("ngModelChange", function ProductsBrandsComponent_Template_p_multiSelect_ngModelChange_27_listener($event) { return ctx.selectedTaglia = $event; });
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵelementStart(28, "div", 15)(29, "div", 16)(30, "p-paginator", 17);
        i0.ɵɵlistener("onPageChange", function ProductsBrandsComponent_Template_p_paginator_onPageChange_30_listener($event) { return ctx.changePage($event); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(31, "div", 16);
        i0.ɵɵtemplate(32, ProductsBrandsComponent_div_32_Template, 2, 1, "div", 18);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(15);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(24, _c2));
        i0.ɵɵproperty("options", ctx.sesso)("ngModel", ctx.selectedSex)("panelStyle", i0.ɵɵpureFunction0(25, _c3));
        i0.ɵɵadvance(4);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(26, _c2));
        i0.ɵɵproperty("options", ctx.categoria)("ngModel", ctx.selectedCategoria)("panelStyle", i0.ɵɵpureFunction0(27, _c3));
        i0.ɵɵadvance(4);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(28, _c2));
        i0.ɵɵproperty("options", ctx.brand)("ngModel", ctx.selectedBrand)("panelStyle", i0.ɵɵpureFunction0(29, _c3));
        i0.ɵɵadvance(4);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(30, _c2));
        i0.ɵɵproperty("options", ctx.taglia)("ngModel", ctx.selectedTaglia)("panelStyle", i0.ɵɵpureFunction0(31, _c3));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("rows", 1)("totalRecords", ctx.products.length / 10)("first", ctx.first);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.productOnThisPage);
    } }, directives: [i5.MultiSelect, i6.NgControlStatus, i6.NgModel, i7.Paginator, i8.NgIf, i8.NgForOf, i1.RouterLink, i9.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsBrandsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-products-brands', styles: [], template: "<script src=\"//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js\"></script>\n\n\n  <div class=\"grid\" style=\"justify-content: center;\">\n    \n    <div class=\"row w-100\">\n      <div class=\"col-12 d-flex\" style=\"justify-content: center;\">\n        \n          <div class=\"grid w-100\">\n            <div class=\"row w-100\">\n              <div class=\"col-12\" style=\"height: 240px; background-image: url(https://sciuti.it/immagini/copertine/colmar-piumini-ai17-desktop.jpg); background-repeat: no-repeat; background-size: cover;\">\n               \n              </div>\n            </div>\n            <div class=\"row w-100\">\n              <div class=\"col-12\" style=\"font-size: 29px; letter-spacing:2px; font-weight: 900;\">\n               COLMAR\n              </div>\n              <div class=\"col-12\" style=\"max-height: 140px; overflow-y:auto\">\n                Nata a Monza nel 1923, il nome dell\u2019azienda Colmar prende spunto dalle iniziali del suo fondatore Mario Colombo. Specializzata nell\u2019abbigliamento sportivo, l\u2019azienda italiana inizialmente presta maggiore attenzione a quello da sci. Ma \u00E8 nel 2009 che nasce la linea Colmar Original dedicata ai giovani e caratterizzata dallo storico logo vintage, da capi di qualit\u00E0 alla moda urban-lifestyle ma pur sempre d\u2019ispirazione sportiva.\n               </div>\n            </div>\n\n            <div class=\"row w-100\" id=\"filtri\">\n              <div class=\"col-md-4 col-6\">\n                <p class=\"m-0\" style=\"color: rgb(52, 52, 52); letter-spacing: 2px; font-weight: 700;\">Genere</p>\n                <p-multiSelect (onChange)=\"search($event)\"  defaultLabel=\"Genere\" [options]=\"sesso\" [(ngModel)]=\"selectedSex\" optionLabel=\"name\" display=\"chip\"  [style]=\"{'width':'100%'}\"\n              [panelStyle]=\"{'width':'400px'}\"></p-multiSelect>\n              </div>\n\n              <div class=\"col-md-4 col-6\">\n                <p class=\"m-0\" style=\"color: rgb(52, 52, 52); letter-spacing: 2px; font-weight: 700;\">Categorie</p>\n                <p-multiSelect (onChange)=\"search($event)\"  defaultLabel=\"Categoria\" [options]=\"categoria\" [(ngModel)]=\"selectedCategoria\" optionLabel=\"name\" display=\"chip\"  [style]=\"{'width':'100%'}\"\n                [panelStyle]=\"{'width':'400px'}\"></p-multiSelect>\n              </div>\n\n              <div class=\"col-md-4 col-6\">\n                <p class=\"m-0\" style=\"color: rgb(52, 52, 52); letter-spacing: 2px; font-weight: 700;\">Brand</p>\n                <p-multiSelect (onChange)=\"search($event)\"  defaultLabel=\"Brand\" [options]=\"brand\" [(ngModel)]=\"selectedBrand\" optionLabel=\"name\" display=\"chip\"  [style]=\"{'width':'100%'}\"\n                [panelStyle]=\"{'width':'400px'}\"></p-multiSelect>\n              </div>\n              <div class=\"col-md-3 col-6\" style=\"display:none\">\n                <p class=\"m-0\" style=\"color: rgb(52, 52, 52); letter-spacing: 2px; font-weight: 700;\">Taglie</p>\n                <p-multiSelect (onChange)=\"search($event)\"  defaultLabel=\"Taglia\" [options]=\"taglia\" [(ngModel)]=\"selectedTaglia\" optionLabel=\"name\" display=\"chip\"  [style]=\"{'width':'100%'}\"\n                [panelStyle]=\"{'width':'400px'}\"></p-multiSelect>\n              </div>\n            </div>\n          </div>\n\n      </div>\n    </div>\n    \n\n    <div class=\"row\">\n      <div class=\"col-12\">    <p-paginator [rows]=\"1\" (onPageChange)=\"changePage($event)\"[totalRecords]=\"products.length/10\" [first] = 'first'></p-paginator></div>\n    <div class=\"col-12\" >\n      <div class=\"grid\" style=\"justify-content: center;\"  *ngIf=\"productOnThisPage\" >\n        <div class=\"col-auto p-3\" *ngFor=\"let product of productOnThisPage\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n\n          <eshop-frontend-product-item [product]=\"product\" ></eshop-frontend-product-item>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  </div>\n\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i3.CategoriesService }, { type: i4.W_ProductsService }]; }, { product: [{
            type: Input
        }], paginator: [{
            type: ViewChild,
            args: ['paginator', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDaUQ5RCwrQkFBd0o7SUFFdEosa0RBQWdGO0lBQ2xGLGlCQUFNOzs7O0lBSDhELGlLQUFtRjtJQUV4SCxlQUFtQjtJQUFuQixvQ0FBbUI7OztJQUhwRCw4QkFBK0U7SUFDN0UsZ0ZBR007SUFFUixpQkFBTTs7O0lBTDBDLGVBQW9CO0lBQXBCLGtEQUFvQjs7OztBRFoxRSxNQUFNLE9BQU8sdUJBQXVCO0lBaUNsQyxZQUFvQixLQUFxQixFQUNyQixlQUFnQyxFQUNoQyxVQUE4QixFQUM5QixZQUErQjtRQUgvQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBbkNuRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFLbEIsYUFBUSxHQUFpQixFQUFFLENBQUM7UUFDNUIsc0JBQWlCLEdBQWlCLEVBQUUsQ0FBQztRQUNyQyxXQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBQ3BDLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFLNUIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFzQkssSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUMsRUFBRSxDQUFDO1FBQ25hLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUNqWixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN6ZixDQUFDO0lBRWIsUUFBUTtRQUVOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcs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QTFCLDBDQUEwQjtRQUEzRyxtQ0FBaUIsOEJBQUEsMkNBQUE7UUFLbUUsZUFBMEI7UUFBMUIsMENBQTBCO1FBQTdHLG9DQUFrQiwrQkFBQSwyQ0FBQTtRQVd6RCxlQUFVO1FBQVYsd0JBQVUsMENBQUEsb0JBQUE7UUFFTSxlQUF1QjtRQUF2Qiw0Q0FBdUI7O3VGRFhyRSx1QkFBdUI7Y0FabkMsU0FBUzsyQkFDRSxnQ0FBZ0MsVUFFbEMsRUFDUDsrSkFhUSxPQUFPO2tCQUFmLEtBQUs7WUFDb0MsU0FBUztrQkFBbEQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2luYXRvciB9IGZyb20gJ3ByaW1lbmcvcGFnaW5hdG9yJztcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5JztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBXX1Byb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvdy1wcm9kdWN0JztcbmltcG9ydCB7IENhdGVnb3JpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgV19Qcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93LXByb2R1Y3RzLnNlcnZpY2UnO1xuXG5cblxuaW50ZXJmYWNlIFNlc3NvIHtcbiAgbmFtZTogc3RyaW5nLFxuICBjb2RlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIENhdGVnb3JpYSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgY29kZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBCcmFuZHtcbiAgbmFtZTogc3RyaW5nLFxuICBjb2RlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFRhZ2xpYXtcbiAgbmFtZTogc3RyaW5nLFxuICBjb2RlOiBzdHJpbmdcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0cy1icmFuZHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5cblxuXG5cblxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNCcmFuZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0NoZWNrZWQgPSBmYWxzZTtcbiAgYmluYXJ5UHJvcCA9IHRydWU7XG4gIGN1cnJlbnRJZDogc3RyaW5nO1xuICBicmFuZE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcbiAgQFZpZXdDaGlsZCgncGFnaW5hdG9yJywgeyBzdGF0aWM6IHRydWUgfSkgcGFnaW5hdG9yOiBQYWdpbmF0b3JcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBwcm9kdWN0T25UaGlzUGFnZTogUHJvZHVjdDEyM1tdID0gW107XG4gIHdQcm9kczogV19Qcm9kdWN0W10gPSBbXTtcbiAgZmlsdGVyZWRQcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXTtcbiAgdXJsO1xuICBjdXJyZW50UGFnZTtcbiAgX3VybFNlZ21lbnQ7XG4gIGZyb21DYXJvdXNlbDogYm9vbGVhbjtcbiAgZmlyc3QgPSAwO1xuICBzZXggPSBcIlwiO1xuXG4gIHNlc3NvIDogU2Vzc29bXTtcbiAgc2VsZWN0ZWRTZXggOiBTZXNzb1tdO1xuXG4gIGNhdGVnb3JpYSA6IENhdGVnb3JpYVtdO1xuICBzZWxlY3RlZENhdGVnb3JpYSA6IENhdGVnb3JpYVtdO1xuXG4gIGJyYW5kOiBCcmFuZFtdO1xuICBzZWxlY3RlZEJyYW5kIDogQnJhbmRbXTtcblxuICB0YWdsaWE6IFRhZ2xpYVtdO1xuICBzZWxlY3RlZFRhZ2xpYSA6IFRhZ2xpYVtdO1xuXG4gIFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNhdFNlcnZpY2UgOiBDYXRlZ29yaWVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3UHJvZFNlcnZpY2U6IFdfUHJvZHVjdHNTZXJ2aWNlKSB7IFxuXG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlc3NvID0gWyB7bmFtZTogJ1VvbW8nLCBjb2RlOiAnTSd9LCAge25hbWU6ICdEb25uYScsIGNvZGU6ICdGJ31dO1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmlhID0gW3tuYW1lOidDYW1pY2llJywgY29kZTonY2FtaWNpZSd9LCB7bmFtZTonUG9sbycsIGNvZGU6J3BvbG8nfSwge25hbWU6J1BhbnRhbG9uaScsIGNvZGU6J3BhbnRhbG9uaSd9LCB7bmFtZTonRmVscGUnLCBjb2RlOidmZWxwZSd9LCB7bmFtZTonTWFnbGlvbmknLCBjb2RlOidtYWdsaW9uaSd9LCB7bmFtZTonR2lsZXQnLCBjb2RlOidnaWxldCd9LCB7bmFtZTonU25lYWtlcnMnLCBjb2RlOidzbmVha2Vycyd9LCB7bmFtZTonVC1zaGlydCcsIGNvZGU6J3Qtc2hpcnQnfSwge25hbWU6J0dpdWJib3R0aScsIGNvZGU6J2dpdWJib3R0aSd9LCB7bmFtZTonQ2ludHVyZScsIGNvZGU6J2NpbnR1cmUnfSwge25hbWU6J1NjYXJwZScsIGNvZGU6J3NjYXJwZSd9LCB7bmFtZTonSmVhbnMnLCBjb2RlOidqZWFucyd9LF07XG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZCA9IFsge25hbWU6ICdCbGF1ZXInLCBjb2RlOiAnYmxhdWVyJ30sICB7bmFtZTogJ09sZCBSaXZlcicsIGNvZGU6ICdvbGQgcml2ZXInfSwgIHtuYW1lOiAnQ29sbWFyJywgY29kZTogJ2NvbG1hcid9LCAge25hbWU6ICdFQTcnLCBjb2RlOiAnZWE3J30sICB7bmFtZTogJ0t3YXknLCBjb2RlOiAna3dheSd9LCAge25hbWU6ICdMYWNvc3RlJywgY29kZTogJ1NhdWNvbnknfSwgIHtuYW1lOiAnU3VuIDY4JywgY29kZTogJ3N1bjY4J30sICB7bmFtZTogJ0JhcmJvdXInLCBjb2RlOiAnYmFyYm91cid9LCAge25hbWU6ICdDaWVzc2UnLCBjb2RlOiAnY2llc3NlJ30sICB7bmFtZTogJ0h1c2t5JywgY29kZTogJ2h1c2t5J30sICB7bmFtZTogJ0NhbmRpZW5zJywgY29kZTogJ2NhbmRpZW5kcyd9XTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ2xpYSA9IFsge25hbWU6ICczNycsIGNvZGU6ICczNyd9LCAge25hbWU6ICczOCcsIGNvZGU6ICczOCd9LCAge25hbWU6ICczOScsIGNvZGU6ICczOSd9LCAge25hbWU6ICc0MCcsIGNvZGU6ICc0MCd9LCAge25hbWU6ICc0MScsIGNvZGU6ICc0MSd9LCAge25hbWU6ICc0MicsIGNvZGU6ICc0Mid9LCAge25hbWU6ICc0MycsIGNvZGU6ICc0Myd9LCAge25hbWU6ICc0NCcsIGNvZGU6ICc0NCd9LCAge25hbWU6ICc0NScsIGNvZGU6ICc0NSd9LCAge25hbWU6ICc0NicsIGNvZGU6ICc0Nid9LCAge25hbWU6ICdYWFMnLCBjb2RlOiAneHhzJ30sICB7bmFtZTogJ1hTJywgY29kZTogJ3hzJ30sICB7bmFtZTogJ1MnLCBjb2RlOiAncyd9LCAge25hbWU6ICdNJywgY29kZTogJ20nfSwgIHtuYW1lOiAnTCcsIGNvZGU6ICdsJ30sICB7bmFtZTogJ1hMJywgY29kZTogJ3hsJ30sICB7bmFtZTogJ1hYTCcsIGNvZGU6ICd4eGwnfSwgIHtuYW1lOiAnWFhYTCcsIGNvZGU6ICd4eHhsJ31dO1xuICAgICAgICAgICAgICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xuICAgIHRoaXMuX3VybFNlZ21lbnQgPSB0aGlzLnVybC52YWx1ZVswXS5wYXRoXG4gICAgY29uc29sZS5sb2coXCJ1cmwgc2VnbWVudCA9IFwiICsgdGhpcy5fdXJsU2VnbWVudCk7XG4gXG5cbiAgICAgICAgaWYodGhpcy5fdXJsU2VnbWVudCA9PT0gXCJwcm9kdWN0c1wiKXtcbiAgICAgICAgICB0aGlzLl9yZXRyaWV2ZUlkKCk7XG4gICAgICAgICAgdGhpcy5fZ2V0UHJvZEJ5QnJhbmQoKTtcblxuICAgICAgICAgLy8gdGhpcy5fZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICAgIHRoaXMuZnJvbUNhcm91c2VsID0gZmFsc2U7XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgXG5cbiAgICBcblxuXG4gIH1cblxuICBjaGFuZ2VQYWdlKGV2ZW50OmFueSk6dm9pZHtcbiAgICBjb25zb2xlLmxvZyhcIiBjaGFuZ2UgcGFnZSBjZXJjbyB0cmEgcXVlc3RvIGluZGljZSA6IFwiICsgKChldmVudC5wYWdlICogMTApKSsgXCIgZSBxdWVzdG8gXCIgKyAoKGV2ZW50LnBhZ2UgKzEpICogMTApICsgXCIgY3VycmVudCBwYWdlID0gXCIgKyB0aGlzLmN1cnJlbnRQYWdlKTtcblxuICAgIHRoaXMucHJvZHVjdE9uVGhpc1BhZ2UgPSB0aGlzLnByb2R1Y3RzLnNsaWNlKChldmVudC5wYWdlICogMTApLCAoKGV2ZW50LnBhZ2UgKyAxKSAqIDEwKSApO1xuICB9XG5cblxuICBzZWFyY2goZXZlbnQ6YW55KTp2b2lke1xuXG4gIFxuXG4gICAgbGV0IHNlc3NvMjM6IHN0cmluZ1tdO1xuICAgIHNlc3NvMjMgPSBbXTtcblxuICAgIGlmKHRoaXMuc2VsZWN0ZWRTZXgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaTwgdGhpcy5zZWxlY3RlZFNleC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNlc3NvMjMucHVzaCh0aGlzLnNlbGVjdGVkU2V4W2ldLmNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc2Vzc28yMyk7XG5cblxuXG4gICAgbGV0IGNhdGVnb3JpZTogc3RyaW5nW107XG4gICAgY2F0ZWdvcmllID0gW107XG5cbiAgICBpZih0aGlzLnNlbGVjdGVkQ2F0ZWdvcmlhKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGk8IHRoaXMuc2VsZWN0ZWRDYXRlZ29yaWEubGVuZ3RoOyBpKyspe1xuICAgICAgICBjYXRlZ29yaWUucHVzaCh0aGlzLnNlbGVjdGVkQ2F0ZWdvcmlhW2ldLmNvZGUpXG4gICAgICB9XG4gICAgfVxuICAgXG5cblxuICAgIGxldCBicmFuZDogc3RyaW5nW107XG4gICAgYnJhbmQgPSBbXTtcblxuICAgIGlmKHRoaXMuc2VsZWN0ZWRCcmFuZCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpPCB0aGlzLnNlbGVjdGVkQnJhbmQubGVuZ3RoOyBpKyspe1xuICAgICAgICBicmFuZC5wdXNoKHRoaXMuc2VsZWN0ZWRCcmFuZFtpXS5jb2RlKVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgbGV0IHRhZ2xpZTogc3RyaW5nW107XG4gICAgdGFnbGllID0gW107XG5cblxuXG4gICAgaWYodGhpcy5zZWxlY3RlZFRhZ2xpYSl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpPCB0aGlzLnNlbGVjdGVkVGFnbGlhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGFnbGllLnB1c2godGhpcy5zZWxlY3RlZFRhZ2xpYVtpXS5jb2RlKVxuICAgICAgfVxuICAgIH1cbiBcblxuICAgIGNvbnNvbGUubG9nKFwiU2Vzc28gPSBcIiArIHNlc3NvMjMgKyBcIiBjYXRlZ29yaWUgPSBcIiArIGNhdGVnb3JpZSk7XG5cbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRGaWx0ZXJlZFByb2R1Y3RzKGJyYW5kLCBjYXRlZ29yaWUsIHNlc3NvMjMsIHRhZ2xpZSkuc3Vic2NyaWJlKChwcm9kdWN0cyk9PntcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcblxuICAgICAgY29uc29sZS5sb2coXCJobyB0cm92YXRvIHF1ZXN0aSBwcm9kdWN0cyA6IFwiICsgcHJvZHVjdHMpO1xuICBcbiAgICBcbiAgICAgIHRoaXMucHJvZHVjdE9uVGhpc1BhZ2UgPSB0aGlzLnByb2R1Y3RzLnNsaWNlKDAsICAxMCk7XG5cbiAgICAgIFxuICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gcHJvZHVjdHM7XG5cbiAgICAvLyAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnBhZ2luYXRvci5jaGFuZ2VQYWdlKDEpKTtcbiAgICAgIHRoaXMuZmlyc3QgPSAwO1xuICAgICAgXG4gICAgfSk7IFxuICB9XG5cbiAgcHJpdmF0ZSBfcmV0cmlldmVJZCgpe1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+e1xuICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLmJyYW5kSWQ7XG4gICAgICAgY29uc29sZS5sb2coXCJicmFuZCBpZCA9IFwiICsgdGhpcy5jdXJyZW50SWQpOyAgICBcbiAgICAgICBjb25zb2xlLmxvZyhcImJyYW5kIG5hbWUgPSBcIiArIHRoaXMuYnJhbmROYW1lKTsgICBcbiAgICAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJvZEJ5QnJhbmQoY2F0ZWdvcmllc0ZpbHRlcj86IHN0cmluZ1tdKXtcblxuICAgIHN3aXRjaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpYVwiKSkge1xuICAgICAgY2FzZSBcInVvbW9cIjpcbiAgICAgICAgdGhpcy5zZXggPSBcIk1cIlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkb25uYVwiOlxuICAgICAgICB0aGlzLnNleCA9IFwiRlwiXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gY29kZSBibG9ja1xuICAgIH1cbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRGaWx0ZXJlZFByb2R1Y3RzKFt0aGlzLmN1cnJlbnRJZF0sIG51bGwsIFt0aGlzLnNleF0sIG51bGwpLnN1YnNjcmliZSgocHJvZHVjdHMpPT57XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgICBjb25zb2xlLmxvZyhcInByb29kdWN0cyA9IFwiICsgdGhpcy5wcm9kdWN0cylcbiAgICAgIHRoaXMucHJvZHVjdE9uVGhpc1BhZ2UgPSB0aGlzLnByb2R1Y3RzLnNsaWNlKDAsMTApO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3Qgb24gdGhpcyBwYWdlID0gXCIgKyB0aGlzLnByb2R1Y3RPblRoaXNQYWdlKVxuXG4gIFxuICAgICAgXG4gICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgIFxuICAgICAgXG4gICAgfSk7ICAgIFxuICB9XG5cblxuXG4gIGNhdGVnb3J5RmlsdGVyKCl7XG4gICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KT0+IGNhdGVnb3J5LmNoZWNrZWQpLm1hcCgoY2F0ZWdvcnkpPT4gY2F0ZWdvcnkuaWQpXG4gICAgY29uc29sZS5sb2coXCJjYXRlZ29yaWUgPSBcIiArIHNlbGVjdGVkQ2F0ZWdvcmllcyk7XG4gICAgXG5cblxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldEZpbHRlcmVkUHJvZHVjdHMoW3RoaXMuY3VycmVudElkXSwgc2VsZWN0ZWRDYXRlZ29yaWVzLCBbdGhpcy5zZXhdKS5zdWJzY3JpYmUoKHByb2R1Y3RzKT0+e1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgXG4gICAgfSk7ICAgXG4gICAgXG4gIH1cblxuXG5cbn1cbiIsIjxzY3JpcHQgc3JjPVwiLy9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMi4wLjMvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuXG5cbiAgPGRpdiBjbGFzcz1cImdyaWRcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgZC1mbGV4XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgdy0xMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwiaGVpZ2h0OiAyNDBweDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc2NpdXRpLml0L2ltbWFnaW5pL2NvcGVydGluZS9jb2xtYXItcGl1bWluaS1haTE3LWRlc2t0b3AuanBnKTsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcIj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgc3R5bGU9XCJmb250LXNpemU6IDI5cHg7IGxldHRlci1zcGFjaW5nOjJweDsgZm9udC13ZWlnaHQ6IDkwMDtcIj5cbiAgICAgICAgICAgICAgIENPTE1BUlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwibWF4LWhlaWdodDogMTQwcHg7IG92ZXJmbG93LXk6YXV0b1wiPlxuICAgICAgICAgICAgICAgIE5hdGEgYSBNb256YSBuZWwgMTkyMywgaWwgbm9tZSBkZWxs4oCZYXppZW5kYSBDb2xtYXIgcHJlbmRlIHNwdW50byBkYWxsZSBpbml6aWFsaSBkZWwgc3VvIGZvbmRhdG9yZSBNYXJpbyBDb2xvbWJvLiBTcGVjaWFsaXp6YXRhIG5lbGzigJlhYmJpZ2xpYW1lbnRvIHNwb3J0aXZvLCBs4oCZYXppZW5kYSBpdGFsaWFuYSBpbml6aWFsbWVudGUgcHJlc3RhIG1hZ2dpb3JlIGF0dGVuemlvbmUgYSBxdWVsbG8gZGEgc2NpLiBNYSDDqCBuZWwgMjAwOSBjaGUgbmFzY2UgbGEgbGluZWEgQ29sbWFyIE9yaWdpbmFsIGRlZGljYXRhIGFpIGdpb3ZhbmkgZSBjYXJhdHRlcml6emF0YSBkYWxsbyBzdG9yaWNvIGxvZ28gdmludGFnZSwgZGEgY2FwaSBkaSBxdWFsaXTDoCBhbGxhIG1vZGEgdXJiYW4tbGlmZXN0eWxlIG1hIHB1ciBzZW1wcmUgZOKAmWlzcGlyYXppb25lIHNwb3J0aXZhLlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiIGlkPVwiZmlsdHJpXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtNlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibS0wXCIgc3R5bGU9XCJjb2xvcjogcmdiKDUyLCA1MiwgNTIpOyBsZXR0ZXItc3BhY2luZzogMnB4OyBmb250LXdlaWdodDogNzAwO1wiPkdlbmVyZTwvcD5cbiAgICAgICAgICAgICAgICA8cC1tdWx0aVNlbGVjdCAob25DaGFuZ2UpPVwic2VhcmNoKCRldmVudClcIiAgZGVmYXVsdExhYmVsPVwiR2VuZXJlXCIgW29wdGlvbnNdPVwic2Vzc29cIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkU2V4XCIgb3B0aW9uTGFiZWw9XCJuYW1lXCIgZGlzcGxheT1cImNoaXBcIiAgW3N0eWxlXT1cInsnd2lkdGgnOicxMDAlJ31cIlxuICAgICAgICAgICAgICBbcGFuZWxTdHlsZV09XCJ7J3dpZHRoJzonNDAwcHgnfVwiPjwvcC1tdWx0aVNlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC02XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTBcIiBzdHlsZT1cImNvbG9yOiByZ2IoNTIsIDUyLCA1Mik7IGxldHRlci1zcGFjaW5nOiAycHg7IGZvbnQtd2VpZ2h0OiA3MDA7XCI+Q2F0ZWdvcmllPC9wPlxuICAgICAgICAgICAgICAgIDxwLW11bHRpU2VsZWN0IChvbkNoYW5nZSk9XCJzZWFyY2goJGV2ZW50KVwiICBkZWZhdWx0TGFiZWw9XCJDYXRlZ29yaWFcIiBbb3B0aW9uc109XCJjYXRlZ29yaWFcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQ2F0ZWdvcmlhXCIgb3B0aW9uTGFiZWw9XCJuYW1lXCIgZGlzcGxheT1cImNoaXBcIiAgW3N0eWxlXT1cInsnd2lkdGgnOicxMDAlJ31cIlxuICAgICAgICAgICAgICAgIFtwYW5lbFN0eWxlXT1cInsnd2lkdGgnOic0MDBweCd9XCI+PC9wLW11bHRpU2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm0tMFwiIHN0eWxlPVwiY29sb3I6IHJnYig1MiwgNTIsIDUyKTsgbGV0dGVyLXNwYWNpbmc6IDJweDsgZm9udC13ZWlnaHQ6IDcwMDtcIj5CcmFuZDwvcD5cbiAgICAgICAgICAgICAgICA8cC1tdWx0aVNlbGVjdCAob25DaGFuZ2UpPVwic2VhcmNoKCRldmVudClcIiAgZGVmYXVsdExhYmVsPVwiQnJhbmRcIiBbb3B0aW9uc109XCJicmFuZFwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRCcmFuZFwiIG9wdGlvbkxhYmVsPVwibmFtZVwiIGRpc3BsYXk9XCJjaGlwXCIgIFtzdHlsZV09XCJ7J3dpZHRoJzonMTAwJSd9XCJcbiAgICAgICAgICAgICAgICBbcGFuZWxTdHlsZV09XCJ7J3dpZHRoJzonNDAwcHgnfVwiPjwvcC1tdWx0aVNlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtNlwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTBcIiBzdHlsZT1cImNvbG9yOiByZ2IoNTIsIDUyLCA1Mik7IGxldHRlci1zcGFjaW5nOiAycHg7IGZvbnQtd2VpZ2h0OiA3MDA7XCI+VGFnbGllPC9wPlxuICAgICAgICAgICAgICAgIDxwLW11bHRpU2VsZWN0IChvbkNoYW5nZSk9XCJzZWFyY2goJGV2ZW50KVwiICBkZWZhdWx0TGFiZWw9XCJUYWdsaWFcIiBbb3B0aW9uc109XCJ0YWdsaWFcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVGFnbGlhXCIgb3B0aW9uTGFiZWw9XCJuYW1lXCIgZGlzcGxheT1cImNoaXBcIiAgW3N0eWxlXT1cInsnd2lkdGgnOicxMDAlJ31cIlxuICAgICAgICAgICAgICAgIFtwYW5lbFN0eWxlXT1cInsnd2lkdGgnOic0MDBweCd9XCI+PC9wLW11bHRpU2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj4gICAgPHAtcGFnaW5hdG9yIFtyb3dzXT1cIjFcIiAob25QYWdlQ2hhbmdlKT1cImNoYW5nZVBhZ2UoJGV2ZW50KVwiW3RvdGFsUmVjb3Jkc109XCJwcm9kdWN0cy5sZW5ndGgvMTBcIiBbZmlyc3RdID0gJ2ZpcnN0Jz48L3AtcGFnaW5hdG9yPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCIgICpuZ0lmPVwicHJvZHVjdE9uVGhpc1BhZ2VcIiA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBwLTNcIiAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0T25UaGlzUGFnZVwiIFtyb3V0ZXJMaW5rXT1cIiB3ID8gWycvd29tZW4tcHJvZHVjdHMvJyArIHByb2R1Y3QuaWRdIDogWycvcHJvZHVjdHMvJyArIHByb2R1Y3QuaWRdXCI+XG5cbiAgICAgICAgICA8ZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtIFtwcm9kdWN0XT1cInByb2R1Y3RcIiA+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuXG4iXX0=