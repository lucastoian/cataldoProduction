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
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "eshop-frontend-product-item", 22);
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
    i0.ɵɵtemplate(1, ProductsBrandsComponent_div_32_div_1_Template, 2, 6, "div", 20);
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
        this.currentBrand = { name: "luca", code: "ok" };
        this.first = 0;
        this.sex = "";
        this.brandMap = new Map();
        this.brandMap.set("6213c7889309de960180da4a", "Blauer");
        this.brandMap.set("6213c89e9309de960180da4d", "Old River");
        this.brandMap.set("62167bd1cba8a1e0d9c1af88", "Colmar");
        this.brandMap.set("62189efe1d62386cc22525b6", "EA7");
        this.brandMap.set("62189f1e1d62386cc22525b9", "Fred Perry");
        this.brandMap.set("62189f371d62386cc22525bc", "Kway");
        this.brandMap.set("62189f481d62386cc22525bf", "Lacoste");
        this.brandMap.set("62189f7d1d62386cc22525c2", "Murphy&nye");
        this.brandMap.set("62189f981d62386cc22525c5", "Peninsula");
        this.brandMap.set("62189fad1d62386cc22525c8", "Saucony");
        this.brandMap.set("62189fbb1d62386cc22525cb", "Sundek");
        this.brandMap.set("632e05f3b8c567de5ea83669", "Barbour");
        this.brandMap.set("636b57e2506ba65e593baa81", "Ciesse");
        this.brandMap.set("636b57f3506ba65e593baa84", "Husky");
        this.brandMap.set("husky fall", "636b57f3506ba65e593baa84");
        this.brandMap.set("636b5806506ba65e593baa87", "Canadiens");
        this.sesso = [{ name: 'Uomo', code: 'M' }, { name: 'Donna', code: 'F' }];
        this.categoria = [{ name: 'Camicie', code: 'camicie' }, { name: 'Polo', code: 'polo' }, { name: 'Pantaloni', code: 'pantaloni' }, { name: 'Felpe', code: 'felpe' }, { name: 'Maglioni', code: 'maglioni' }, { name: 'Gilet', code: 'gilet' }, { name: 'Sneakers', code: 'sneakers' }, { name: 'T-shirt', code: 't-shirt' }, { name: 'Giubbotti', code: 'giubbotti' }, { name: 'Cinture', code: 'cinture' }, { name: 'Scarpe', code: 'scarpe' }, { name: 'Jeans', code: 'jeans' },];
        this.brand = [{ name: 'Blauer', code: 'blauer' }, { name: 'Old River', code: 'old river' }, { name: 'Colmar', code: 'colmar' }, { name: 'EA7', code: 'ea7' }, { name: 'Kway', code: 'kway' }, { name: 'Lacoste', code: 'lacoste' }, { name: 'Barbour', code: 'barbour' }, { name: 'Ciesse', code: 'ciesse' }, { name: 'Husky', code: 'husky' }, { name: 'Canadiens', code: 'canadiens' }, { name: 'Saucony', code: 'saucony' }];
        this.taglia = [{ name: '37', code: '37' }, { name: '38', code: '38' }, { name: '39', code: '39' }, { name: '40', code: '40' }, { name: '41', code: '41' }, { name: '42', code: '42' }, { name: '43', code: '43' }, { name: '44', code: '44' }, { name: '45', code: '45' }, { name: '46', code: '46' }, { name: 'XXS', code: 'xxs' }, { name: 'XS', code: 'xs' }, { name: 'S', code: 's' }, { name: 'M', code: 'm' }, { name: 'L', code: 'l' }, { name: 'XL', code: 'xl' }, { name: 'XXL', code: 'xxl' }, { name: 'XXXL', code: 'xxxl' }];
    }
    ngOnInit() {
        this.selectedSex = [];
        this.selectedBrand = [];
        this.url = this.route.url;
        this._urlSegment = this.url.value[0].path;
        console.log("url segment = " + this._urlSegment);
        this._retrieveId();
        this._getProdByBrand();
        this.currentBrand = { name: "luca", code: "ciao" };
        this.currentBrand.name = this.brandMap.get(this.currentId);
        let nmm = this.currentBrand.name;
        let cdd = "";
        this.brand.forEach(function (element) {
            if (element.name == nmm) {
                cdd = element.code;
            }
        });
        this.currentBrand.code = cdd;
        // this._getCategories();
        this.fromCarousel = false;
        let storedSex = localStorage.getItem("categoria");
        if (storedSex == "uomo")
            this.selectedSex.push({ name: 'Uomo', code: 'M' });
        if (storedSex == "donna")
            this.selectedSex.push({ name: 'Donna', code: 'F' });
        this.selectedBrand.push({ name: this.currentBrand.name, code: this.currentBrand.code });
    }
    getKeyByValue(obj, value) {
        let data = Object.keys(obj).find(key => obj[key] === value);
        return data;
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
    } }, inputs: { product: "product" }, decls: 33, vars: 33, consts: [[1, "grid", 2, "justify-content", "center"], [1, "row", "w-100"], [1, "col-12", "d-flex", 2, "justify-content", "center"], [1, "grid", "w-100"], [1, "col-12", 2, "height", "240px", "background-image", "url(https://sciuti.it/immagini/copertine/colmar-piumini-ai17-desktop.jpg)", "background-repeat", "no-repeat", "background-size", "cover"], [1, "col-12", 2, "font-size", "29px", "letter-spacing", "2px", "font-weight", "900"], [1, "col-12", 2, "max-height", "140px", "overflow-y", "auto"], ["id", "filtri", 1, "row", "w-100"], [1, "col-md-4", "col-6"], [1, "m-0", 2, "color", "rgb(52, 52, 52)", "letter-spacing", "2px", "font-weight", "700"], ["defaultLabel", "Genere", "optionLabel", "name", "display", "chip", 3, "options", "ngModel", "panelStyle", "onChange", "ngModelChange"], ["defaultLabel", "Categoria", "optionLabel", "name", "display", "chip", 3, "options", "ngModel", "panelStyle", "onChange", "ngModelChange"], ["defaultLabel", "Brand", "optionLabel", "name", "display", "chip", 3, "options", "ngModel", "panelStyle", "onChange", "ngModelChange"], [1, "col-md-3", "col-6", 2, "display", "none"], ["defaultLabel", "Taglia", "optionLabel", "name", "display", "chip", 3, "options", "ngModel", "panelStyle", "onChange", "ngModelChange"], [1, "row", 2, "justify-content", "center"], [1, "col-12"], [3, "rows", "totalRecords", "first", "onPageChange"], [1, "col-12", 2, "max-width", "1300px"], ["class", "grid", "style", "justify-content: center;", 4, "ngIf"], ["class", "col-auto p-3", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-auto", "p-3", 3, "routerLink"], [3, "product"]], template: function ProductsBrandsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 1);
        i0.ɵɵelement(5, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 1)(7, "div", 5);
        i0.ɵɵtext(8);
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
        i0.ɵɵelementStart(31, "div", 18);
        i0.ɵɵtemplate(32, ProductsBrandsComponent_div_32_Template, 2, 1, "div", 19);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1(" ", ctx.currentBrand.name, " ");
        i0.ɵɵadvance(7);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(25, _c2));
        i0.ɵɵproperty("options", ctx.sesso)("ngModel", ctx.selectedSex)("panelStyle", i0.ɵɵpureFunction0(26, _c3));
        i0.ɵɵadvance(4);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(27, _c2));
        i0.ɵɵproperty("options", ctx.categoria)("ngModel", ctx.selectedCategoria)("panelStyle", i0.ɵɵpureFunction0(28, _c3));
        i0.ɵɵadvance(4);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(29, _c2));
        i0.ɵɵproperty("options", ctx.brand)("ngModel", ctx.selectedBrand)("panelStyle", i0.ɵɵpureFunction0(30, _c3));
        i0.ɵɵadvance(4);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(31, _c2));
        i0.ɵɵproperty("options", ctx.taglia)("ngModel", ctx.selectedTaglia)("panelStyle", i0.ɵɵpureFunction0(32, _c3));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("rows", 1)("totalRecords", ctx.products.length / 10)("first", ctx.first);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.productOnThisPage);
    } }, directives: [i5.MultiSelect, i6.NgControlStatus, i6.NgModel, i7.Paginator, i8.NgIf, i8.NgForOf, i1.RouterLink, i9.ProductItemComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsBrandsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-products-brands', styles: [], template: "<script src=\"//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js\"></script>\n\n\n  <div class=\"grid\" style=\"justify-content: center;\">\n    \n    <div class=\"row w-100\">\n      <div class=\"col-12 d-flex\" style=\"justify-content: center;\">\n        \n          <div class=\"grid w-100\">\n            <div class=\"row w-100\">\n              <div class=\"col-12\" style=\"height: 240px; background-image: url(https://sciuti.it/immagini/copertine/colmar-piumini-ai17-desktop.jpg); background-repeat: no-repeat; background-size: cover;\">\n               \n              </div>\n            </div>\n            <div class=\"row w-100\">\n              <div class=\"col-12\" style=\"font-size: 29px; letter-spacing:2px; font-weight: 900;\">\n               {{this.currentBrand.name}}\n              </div>\n              <div class=\"col-12\" style=\"max-height: 140px; overflow-y:auto\">\n                Nata a Monza nel 1923, il nome dell\u2019azienda Colmar prende spunto dalle iniziali del suo fondatore Mario Colombo. Specializzata nell\u2019abbigliamento sportivo, l\u2019azienda italiana inizialmente presta maggiore attenzione a quello da sci. Ma \u00E8 nel 2009 che nasce la linea Colmar Original dedicata ai giovani e caratterizzata dallo storico logo vintage, da capi di qualit\u00E0 alla moda urban-lifestyle ma pur sempre d\u2019ispirazione sportiva.\n               </div>\n            </div>\n\n            <div class=\"row w-100\" id=\"filtri\">\n              <div class=\"col-md-4 col-6\">\n                <p class=\"m-0\" style=\"color: rgb(52, 52, 52); letter-spacing: 2px; font-weight: 700;\">Genere</p>\n                <p-multiSelect (onChange)=\"search($event)\"  defaultLabel=\"Genere\" [options]=\"sesso\" [(ngModel)]=\"selectedSex\" optionLabel=\"name\" display=\"chip\"  [style]=\"{'width':'100%'}\"\n              [panelStyle]=\"{'width':'400px'}\"></p-multiSelect>\n              </div>\n\n              <div class=\"col-md-4 col-6\">\n                <p class=\"m-0\" style=\"color: rgb(52, 52, 52); letter-spacing: 2px; font-weight: 700;\">Categorie</p>\n                <p-multiSelect (onChange)=\"search($event)\"  defaultLabel=\"Categoria\" [options]=\"categoria\" [(ngModel)]=\"selectedCategoria\" optionLabel=\"name\" display=\"chip\"  [style]=\"{'width':'100%'}\"\n                [panelStyle]=\"{'width':'400px'}\"></p-multiSelect>\n              </div>\n\n              <div class=\"col-md-4 col-6\">\n                <p class=\"m-0\" style=\"color: rgb(52, 52, 52); letter-spacing: 2px; font-weight: 700;\">Brand</p>\n                <p-multiSelect (onChange)=\"search($event)\"  defaultLabel=\"Brand\" [options]=\"brand\" [(ngModel)]=\"selectedBrand\" optionLabel=\"name\" display=\"chip\"  [style]=\"{'width':'100%'}\"\n                [panelStyle]=\"{'width':'400px'}\"></p-multiSelect>\n              </div>\n              <div class=\"col-md-3 col-6\" style=\"display:none\">\n                <p class=\"m-0\" style=\"color: rgb(52, 52, 52); letter-spacing: 2px; font-weight: 700;\">Taglie</p>\n                <p-multiSelect (onChange)=\"search($event)\"  defaultLabel=\"Taglia\" [options]=\"taglia\" [(ngModel)]=\"selectedTaglia\" optionLabel=\"name\" display=\"chip\"  [style]=\"{'width':'100%'}\"\n                [panelStyle]=\"{'width':'400px'}\"></p-multiSelect>\n              </div>\n            </div>\n          </div>\n\n      </div>\n    </div>\n    \n\n    <div class=\"row\" style=\"justify-content: center;\">\n      <div class=\"col-12\">    <p-paginator [rows]=\"1\" (onPageChange)=\"changePage($event)\"[totalRecords]=\"products.length/10\" [first] = 'first'></p-paginator></div>\n    <div class=\"col-12\"  style=\"max-width: 1300px;\">\n      <div class=\"grid\" style=\"justify-content: center;\"  *ngIf=\"productOnThisPage\" >\n        <div class=\"col-auto p-3\" *ngFor=\"let product of productOnThisPage\" [routerLink]=\" w ? ['/women-products/' + product.id] : ['/products/' + product.id]\">\n\n          <eshop-frontend-product-item [product]=\"product\" ></eshop-frontend-product-item>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  </div>\n\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.ProductsService }, { type: i3.CategoriesService }, { type: i4.W_ProductsService }]; }, { product: [{
            type: Input
        }], paginator: [{
            type: ViewChild,
            args: ['paginator', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDaUQ5RCwrQkFBd0o7SUFFdEosa0RBQWdGO0lBQ2xGLGlCQUFNOzs7O0lBSDhELGlLQUFtRjtJQUV4SCxlQUFtQjtJQUFuQixvQ0FBbUI7OztJQUhwRCw4QkFBK0U7SUFDN0UsZ0ZBR007SUFFUixpQkFBTTs7O0lBTDBDLGVBQW9CO0lBQXBCLGtEQUFvQjs7OztBRFoxRSxNQUFNLE9BQU8sdUJBQXVCO0lBb0NsQyxZQUFvQixLQUFxQixFQUNyQixlQUFnQyxFQUNoQyxVQUE4QixFQUM5QixZQUErQjtRQUgvQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBdENuRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFLbEIsYUFBUSxHQUFpQixFQUFFLENBQUM7UUFDNUIsc0JBQWlCLEdBQWlCLEVBQUUsQ0FBQztRQUNyQyxXQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBQ3BDLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFFNUIsaUJBQVksR0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDO1FBS2hELFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBY1IsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO1FBWW5DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxTQUFTLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxTQUFTLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQztRQUNuYSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDclosSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLEVBQUcsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsRUFBRyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxFQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxF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WSxrQkFBYyxJQUFDLG1KQUFBO1FBQ1QsaUJBQWdCLEVBQUE7UUFFbkQsZ0NBQWlELFlBQUE7UUFDdUMsdUJBQU07UUFBQSxpQkFBSTtRQUNoRywwQ0FDaUM7UUFEbEIsd0hBQVksa0JBQWMsSUFBQyxvSkFBQTtRQUNULGlCQUFnQixFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7UUFTN0QsZ0NBQWtELGVBQUEsdUJBQUE7UUFDQSw4SEFBZ0Isc0JBQWtCLElBQUM7UUFBc0QsaUJBQWMsRUFBQTtRQUN6SixnQ0FBZ0Q7UUFDOUMsMkVBTU07UUFDUixpQkFBTSxFQUFBLEVBQUE7O1FBL0NLLGVBQ0Q7UUFEQyxzREFDRDtRQVNtSixlQUEwQjtRQUExQiwwQ0FBMEI7UUFBekcsbUNBQWlCLDRCQUFBLDJDQUFBO1FBTTJFLGVBQTBCO1FBQTFCLDBDQUEwQjtRQUFuSCx1Q0FBcUIsa0NBQUEsMkNBQUE7UUFNd0QsZUFBMEI7UUFBMUIsMENBQTBCO1FBQTNHLG1DQUFpQiw4QkFBQSwyQ0FBQTtRQUttRSxlQUEwQjtRQUExQiwwQ0FBMEI7UUFBN0csb0NBQWtCLCtCQUFBLDJDQUFBO1FBV3pELGVBQVU7UUFBVix3QkFBVSwwQ0FBQSxvQkFBQTtRQUVNLGVBQXVCO1FBQXZCLDRDQUF1Qjs7dUZEWHJFLHVCQUF1QjtjQVpuQyxTQUFTOzJCQUNFLGdDQUFnQyxVQUVsQyxFQUNQOytKQWFRLE9BQU87a0JBQWYsS0FBSztZQUNvQyxTQUFTO2tCQUFsRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnaW5hdG9yIH0gZnJvbSAncHJpbWVuZy9wYWdpbmF0b3InO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2F0ZWdvcnknO1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IFdfUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy93LXByb2R1Y3QnO1xuaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXRlZ29yaWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBXX1Byb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZSc7XG5cblxuXG5pbnRlcmZhY2UgU2Vzc28ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGNvZGU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgQ2F0ZWdvcmlhIHtcbiAgbmFtZTogc3RyaW5nLFxuICBjb2RlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIEJyYW5ke1xuICBuYW1lOiBzdHJpbmcsXG4gIGNvZGU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgVGFnbGlhe1xuICBuYW1lOiBzdHJpbmcsXG4gIGNvZGU6IHN0cmluZ1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3RzLWJyYW5kcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0cy1icmFuZHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcblxuXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xuICBiaW5hcnlQcm9wID0gdHJ1ZTtcbiAgY3VycmVudElkOiBzdHJpbmc7XG4gIGJyYW5kTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuICBAVmlld0NoaWxkKCdwYWdpbmF0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSBwYWdpbmF0b3I6IFBhZ2luYXRvclxuICBwcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIHByb2R1Y3RPblRoaXNQYWdlOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgd1Byb2RzOiBXX1Byb2R1Y3RbXSA9IFtdO1xuICBmaWx0ZXJlZFByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSA9IFtdO1xuXG4gIGN1cnJlbnRCcmFuZCA6IEJyYW5kID0ge25hbWU6XCJsdWNhXCIsIGNvZGU6XCJva1wifTtcbiAgdXJsO1xuICBjdXJyZW50UGFnZTtcbiAgX3VybFNlZ21lbnQ7XG4gIGZyb21DYXJvdXNlbDogYm9vbGVhbjtcbiAgZmlyc3QgPSAwO1xuICBzZXggPSBcIlwiO1xuXG4gIHNlc3NvIDogU2Vzc29bXTtcbiAgc2VsZWN0ZWRTZXggOiBTZXNzb1tdO1xuXG4gIGNhdGVnb3JpYSA6IENhdGVnb3JpYVtdO1xuICBzZWxlY3RlZENhdGVnb3JpYSA6IENhdGVnb3JpYVtdO1xuXG4gIGJyYW5kOiBCcmFuZFtdO1xuICBzZWxlY3RlZEJyYW5kIDogQnJhbmRbXTtcblxuICB0YWdsaWE6IFRhZ2xpYVtdO1xuICBzZWxlY3RlZFRhZ2xpYSA6IFRhZ2xpYVtdO1xuXG4gICBicmFuZE1hcCA9IG5ldyBNYXA8c3RyaW5nLHN0cmluZz4oKTsgXG4gIFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNhdFNlcnZpY2UgOiBDYXRlZ29yaWVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3UHJvZFNlcnZpY2U6IFdfUHJvZHVjdHNTZXJ2aWNlKSB7IFxuXG5cblxuXG5cbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjNzg4OTMwOWRlOTYwMTgwZGE0YVwiLFwiQmxhdWVyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxM2M4OWU5MzA5ZGU5NjAxODBkYTRkXCIsIFwiT2xkIFJpdmVyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTY3YmQxY2JhOGExZTBkOWMxYWY4OFwiLFwiQ29sbWFyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZWZlMWQ2MjM4NmNjMjI1MjViNlwiLFwiRUE3XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmMWUxZDYyMzg2Y2MyMjUyNWI5XCIsXCJGcmVkIFBlcnJ5XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZjM3MWQ2MjM4NmNjMjI1MjViY1wiLFwiS3dheVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjQ4MWQ2MjM4NmNjMjI1MjViZlwiLFwiTGFjb3N0ZVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjdkMWQ2MjM4NmNjMjI1MjVjMlwiLFwiTXVycGh5Jm55ZVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWY5ODFkNjIzODZjYzIyNTI1YzVcIixcIlBlbmluc3VsYVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZmFkMWQ2MjM4NmNjMjI1MjVjOFwiLFwiU2F1Y29ueVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWZiYjFkNjIzODZjYzIyNTI1Y2JcIixcIlN1bmRla1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzJlMDVmM2I4YzU2N2RlNWVhODM2NjlcIixcIkJhcmJvdXJcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU3ZTI1MDZiYTY1ZTU5M2JhYTgxXCIsXCJDaWVzc2VcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MzZiNTdmMzUwNmJhNjVlNTkzYmFhODRcIixcIkh1c2t5XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiaHVza3kgZmFsbFwiLCBcIjYzNmI1N2YzNTA2YmE2NWU1OTNiYWE4NFwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzZiNTgwNjUwNmJhNjVlNTkzYmFhODdcIixcIkNhbmFkaWVuc1wiKTtcblxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzbyA9IFsge25hbWU6ICdVb21vJywgY29kZTogJ00nfSwgIHtuYW1lOiAnRG9ubmEnLCBjb2RlOiAnRid9XTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpYSA9IFt7bmFtZTonQ2FtaWNpZScsIGNvZGU6J2NhbWljaWUnfSwge25hbWU6J1BvbG8nLCBjb2RlOidwb2xvJ30sIHtuYW1lOidQYW50YWxvbmknLCBjb2RlOidwYW50YWxvbmknfSwge25hbWU6J0ZlbHBlJywgY29kZTonZmVscGUnfSwge25hbWU6J01hZ2xpb25pJywgY29kZTonbWFnbGlvbmknfSwge25hbWU6J0dpbGV0JywgY29kZTonZ2lsZXQnfSwge25hbWU6J1NuZWFrZXJzJywgY29kZTonc25lYWtlcnMnfSwge25hbWU6J1Qtc2hpcnQnLCBjb2RlOid0LXNoaXJ0J30sIHtuYW1lOidHaXViYm90dGknLCBjb2RlOidnaXViYm90dGknfSwge25hbWU6J0NpbnR1cmUnLCBjb2RlOidjaW50dXJlJ30sIHtuYW1lOidTY2FycGUnLCBjb2RlOidzY2FycGUnfSwge25hbWU6J0plYW5zJywgY29kZTonamVhbnMnfSxdO1xuICAgICAgICAgICAgICAgIHRoaXMuYnJhbmQgPSBbIHtuYW1lOiAnQmxhdWVyJywgY29kZTogJ2JsYXVlcid9LCAge25hbWU6ICdPbGQgUml2ZXInLCBjb2RlOiAnb2xkIHJpdmVyJ30sICB7bmFtZTogJ0NvbG1hcicsIGNvZGU6ICdjb2xtYXInfSwgIHtuYW1lOiAnRUE3JywgY29kZTogJ2VhNyd9LCAge25hbWU6ICdLd2F5JywgY29kZTogJ2t3YXknfSwgIHtuYW1lOiAnTGFjb3N0ZScsIGNvZGU6ICdsYWNvc3RlJ30sICB7bmFtZTogJ0JhcmJvdXInLCBjb2RlOiAnYmFyYm91cid9LCAge25hbWU6ICdDaWVzc2UnLCBjb2RlOiAnY2llc3NlJ30sICB7bmFtZTogJ0h1c2t5JywgY29kZTogJ2h1c2t5J30sICB7bmFtZTogJ0NhbmFkaWVucycsIGNvZGU6ICdjYW5hZGllbnMnfSwgIHtuYW1lOiAnU2F1Y29ueScsIGNvZGU6ICdzYXVjb255J31dO1xuICAgICAgICAgICAgICAgIHRoaXMudGFnbGlhID0gWyB7bmFtZTogJzM3JywgY29kZTogJzM3J30sICB7bmFtZTogJzM4JywgY29kZTogJzM4J30sICB7bmFtZTogJzM5JywgY29kZTogJzM5J30sICB7bmFtZTogJzQwJywgY29kZTogJzQwJ30sICB7bmFtZTogJzQxJywgY29kZTogJzQxJ30sICB7bmFtZTogJzQyJywgY29kZTogJzQyJ30sICB7bmFtZTogJzQzJywgY29kZTogJzQzJ30sICB7bmFtZTogJzQ0JywgY29kZTogJzQ0J30sICB7bmFtZTogJzQ1JywgY29kZTogJzQ1J30sICB7bmFtZTogJzQ2JywgY29kZTogJzQ2J30sICB7bmFtZTogJ1hYUycsIGNvZGU6ICd4eHMnfSwgIHtuYW1lOiAnWFMnLCBjb2RlOiAneHMnfSwgIHtuYW1lOiAnUycsIGNvZGU6ICdzJ30sICB7bmFtZTogJ00nLCBjb2RlOiAnbSd9LCAge25hbWU6ICdMJywgY29kZTogJ2wnfSwgIHtuYW1lOiAnWEwnLCBjb2RlOiAneGwnfSwgIHtuYW1lOiAnWFhMJywgY29kZTogJ3h4bCd9LCAge25hbWU6ICdYWFhMJywgY29kZTogJ3h4eGwnfV07XG4gICAgICAgICAgICAgIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuc2VsZWN0ZWRTZXg9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRCcmFuZD0gW107XG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcbiAgICB0aGlzLl91cmxTZWdtZW50ID0gdGhpcy51cmwudmFsdWVbMF0ucGF0aFxuICAgIGNvbnNvbGUubG9nKFwidXJsIHNlZ21lbnQgPSBcIiArIHRoaXMuX3VybFNlZ21lbnQpO1xuIFxuXG4gICAgIFxuICAgICAgICAgIHRoaXMuX3JldHJpZXZlSWQoKTtcbiAgICAgICAgICB0aGlzLl9nZXRQcm9kQnlCcmFuZCgpO1xuXG4gICAgICAgICAgdGhpcy5jdXJyZW50QnJhbmQgPSB7bmFtZTogXCJsdWNhXCIsIGNvZGU6XCJjaWFvXCJ9O1xuXG5cblxuXG4gICAgICAgICAgdGhpcy5jdXJyZW50QnJhbmQubmFtZSA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMuY3VycmVudElkKTtcbiAgICAgICAgICBsZXQgbm1tID0gdGhpcy5jdXJyZW50QnJhbmQubmFtZVxuICAgICAgICAgIGxldCBjZGQgPSBcIlwiO1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuYnJhbmQuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQubmFtZSA9PSBubW0pe1xuICAgICAgICAgICAgICBjZGQgPSBlbGVtZW50LmNvZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5jdXJyZW50QnJhbmQuY29kZSA9IGNkZDtcblxuXG4gXG5cbiAgICAgICAgIC8vIHRoaXMuX2dldENhdGVnb3JpZXMoKTtcbiAgICAgICAgICB0aGlzLmZyb21DYXJvdXNlbCA9IGZhbHNlO1xuXG5cbiAgICAgICAgXG4gICAgICAgIGxldCBzdG9yZWRTZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpYVwiKTtcbiAgICAgICAgaWYoc3RvcmVkU2V4ID09IFwidW9tb1wiKSB0aGlzLnNlbGVjdGVkU2V4LnB1c2goe25hbWU6ICdVb21vJywgY29kZTogJ00nfSlcbiAgICAgICAgaWYoc3RvcmVkU2V4ID09IFwiZG9ubmFcIikgdGhpcy5zZWxlY3RlZFNleC5wdXNoKHtuYW1lOiAnRG9ubmEnLCBjb2RlOiAnRid9KVxuICAgICAgICB0aGlzLnNlbGVjdGVkQnJhbmQucHVzaCh7bmFtZSA6IHRoaXMuY3VycmVudEJyYW5kLm5hbWUsIGNvZGU6IHRoaXMuY3VycmVudEJyYW5kLmNvZGV9KVxuICAgICAgXG5cbiAgICBcblxuXG4gIH1cblxuICBnZXRLZXlCeVZhbHVlKG9iaiwgdmFsdWUpe1xuICAgIGxldCBkYXRhID0gT2JqZWN0LmtleXMob2JqKS5maW5kKGtleSA9PiBvYmpba2V5XSA9PT0gdmFsdWUpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cblxuXG5cbiAgY2hhbmdlUGFnZShldmVudDphbnkpOnZvaWR7XG4gICAgY29uc29sZS5sb2coXCIgY2hhbmdlIHBhZ2UgY2VyY28gdHJhIHF1ZXN0byBpbmRpY2UgOiBcIiArICgoZXZlbnQucGFnZSAqIDEwKSkrIFwiIGUgcXVlc3RvIFwiICsgKChldmVudC5wYWdlICsxKSAqIDEwKSArIFwiIGN1cnJlbnQgcGFnZSA9IFwiICsgdGhpcy5jdXJyZW50UGFnZSk7XG5cbiAgICB0aGlzLnByb2R1Y3RPblRoaXNQYWdlID0gdGhpcy5wcm9kdWN0cy5zbGljZSgoZXZlbnQucGFnZSAqIDEwKSwgKChldmVudC5wYWdlICsgMSkgKiAxMCkgKTtcbiAgfVxuXG5cbiAgc2VhcmNoKGV2ZW50OmFueSk6dm9pZHtcblxuICBcblxuICAgIGxldCBzZXNzbzIzOiBzdHJpbmdbXTtcbiAgICBzZXNzbzIzID0gW107XG5cbiAgICBpZih0aGlzLnNlbGVjdGVkU2V4KXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGk8IHRoaXMuc2VsZWN0ZWRTZXgubGVuZ3RoOyBpKyspe1xuICAgICAgICBzZXNzbzIzLnB1c2godGhpcy5zZWxlY3RlZFNleFtpXS5jb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHNlc3NvMjMpO1xuXG5cblxuICAgIGxldCBjYXRlZ29yaWU6IHN0cmluZ1tdO1xuICAgIGNhdGVnb3JpZSA9IFtdO1xuXG4gICAgaWYodGhpcy5zZWxlY3RlZENhdGVnb3JpYSl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpPCB0aGlzLnNlbGVjdGVkQ2F0ZWdvcmlhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY2F0ZWdvcmllLnB1c2godGhpcy5zZWxlY3RlZENhdGVnb3JpYVtpXS5jb2RlKVxuICAgICAgfVxuICAgIH1cbiAgIFxuXG5cbiAgICBsZXQgYnJhbmQ6IHN0cmluZ1tdO1xuICAgIGJyYW5kID0gW107XG5cbiAgICBpZih0aGlzLnNlbGVjdGVkQnJhbmQpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaTwgdGhpcy5zZWxlY3RlZEJyYW5kLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgYnJhbmQucHVzaCh0aGlzLnNlbGVjdGVkQnJhbmRbaV0uY29kZSlcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGxldCB0YWdsaWU6IHN0cmluZ1tdO1xuICAgIHRhZ2xpZSA9IFtdO1xuXG5cblxuICAgIGlmKHRoaXMuc2VsZWN0ZWRUYWdsaWEpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaTwgdGhpcy5zZWxlY3RlZFRhZ2xpYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRhZ2xpZS5wdXNoKHRoaXMuc2VsZWN0ZWRUYWdsaWFbaV0uY29kZSlcbiAgICAgIH1cbiAgICB9XG4gXG5cbiAgICBjb25zb2xlLmxvZyhcIlNlc3NvID0gXCIgKyBzZXNzbzIzICsgXCIgY2F0ZWdvcmllID0gXCIgKyBjYXRlZ29yaWUpO1xuXG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0RmlsdGVyZWRQcm9kdWN0cyhicmFuZCwgY2F0ZWdvcmllLCBzZXNzbzIzLCB0YWdsaWUpLnN1YnNjcmliZSgocHJvZHVjdHMpPT57XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiaG8gdHJvdmF0byBxdWVzdGkgcHJvZHVjdHMgOiBcIiArIHByb2R1Y3RzKTtcbiAgXG4gICAgXG4gICAgICB0aGlzLnByb2R1Y3RPblRoaXNQYWdlID0gdGhpcy5wcm9kdWN0cy5zbGljZSgwLCAgMTApO1xuXG4gICAgICBcbiAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzO1xuXG4gICAgLy8gIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wYWdpbmF0b3IuY2hhbmdlUGFnZSgxKSk7XG4gICAgICB0aGlzLmZpcnN0ID0gMDtcbiAgICAgIFxuICAgIH0pOyBcbiAgfVxuXG4gIHByaXZhdGUgX3JldHJpZXZlSWQoKXtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcbiAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5icmFuZElkO1xuICAgICAgIGNvbnNvbGUubG9nKFwiYnJhbmQgaWQgPSBcIiArIHRoaXMuY3VycmVudElkKTsgICAgXG4gICAgICAgY29uc29sZS5sb2coXCJicmFuZCBuYW1lID0gXCIgKyB0aGlzLmJyYW5kTmFtZSk7ICAgXG4gICAgICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgX2dldFByb2RCeUJyYW5kKGNhdGVnb3JpZXNGaWx0ZXI/OiBzdHJpbmdbXSl7XG5cbiAgICBzd2l0Y2gobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWFcIikpIHtcbiAgICAgIGNhc2UgXCJ1b21vXCI6XG4gICAgICAgIHRoaXMuc2V4ID0gXCJNXCJcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZG9ubmFcIjpcbiAgICAgICAgdGhpcy5zZXggPSBcIkZcIlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGNvZGUgYmxvY2tcbiAgICB9XG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0RmlsdGVyZWRQcm9kdWN0cyhbdGhpcy5jdXJyZW50SWRdLCBudWxsLCBbdGhpcy5zZXhdLCBudWxsKS5zdWJzY3JpYmUoKHByb2R1Y3RzKT0+e1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgY29uc29sZS5sb2coXCJwcm9vZHVjdHMgPSBcIiArIHRoaXMucHJvZHVjdHMpXG4gICAgICB0aGlzLnByb2R1Y3RPblRoaXNQYWdlID0gdGhpcy5wcm9kdWN0cy5zbGljZSgwLDEwKTtcblxuICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IG9uIHRoaXMgcGFnZSA9IFwiICsgdGhpcy5wcm9kdWN0T25UaGlzUGFnZSlcblxuICBcbiAgICAgIFxuICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgICBcbiAgICAgIFxuICAgIH0pOyAgICBcbiAgfVxuXG5cblxuICBjYXRlZ29yeUZpbHRlcigpe1xuICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICBjb25zdCBzZWxlY3RlZENhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSk9PiBjYXRlZ29yeS5jaGVja2VkKS5tYXAoKGNhdGVnb3J5KT0+IGNhdGVnb3J5LmlkKVxuICAgIGNvbnNvbGUubG9nKFwiY2F0ZWdvcmllID0gXCIgKyBzZWxlY3RlZENhdGVnb3JpZXMpO1xuICAgIFxuXG5cbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRGaWx0ZXJlZFByb2R1Y3RzKFt0aGlzLmN1cnJlbnRJZF0sIHNlbGVjdGVkQ2F0ZWdvcmllcywgW3RoaXMuc2V4XSkuc3Vic2NyaWJlKChwcm9kdWN0cyk9PntcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgIFxuICAgIH0pOyAgIFxuICAgIFxuICB9XG5cblxuXG59XG4iLCI8c2NyaXB0IHNyYz1cIi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzIuMC4zL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cblxuXG4gIDxkaXYgY2xhc3M9XCJncmlkXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGQtZmxleFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIHctMTAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiBzdHlsZT1cImhlaWdodDogMjQwcHg7IGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3NjaXV0aS5pdC9pbW1hZ2luaS9jb3BlcnRpbmUvY29sbWFyLXBpdW1pbmktYWkxNy1kZXNrdG9wLmpwZyk7IGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7XCI+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwiZm9udC1zaXplOiAyOXB4OyBsZXR0ZXItc3BhY2luZzoycHg7IGZvbnQtd2VpZ2h0OiA5MDA7XCI+XG4gICAgICAgICAgICAgICB7e3RoaXMuY3VycmVudEJyYW5kLm5hbWV9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwibWF4LWhlaWdodDogMTQwcHg7IG92ZXJmbG93LXk6YXV0b1wiPlxuICAgICAgICAgICAgICAgIE5hdGEgYSBNb256YSBuZWwgMTkyMywgaWwgbm9tZSBkZWxs4oCZYXppZW5kYSBDb2xtYXIgcHJlbmRlIHNwdW50byBkYWxsZSBpbml6aWFsaSBkZWwgc3VvIGZvbmRhdG9yZSBNYXJpbyBDb2xvbWJvLiBTcGVjaWFsaXp6YXRhIG5lbGzigJlhYmJpZ2xpYW1lbnRvIHNwb3J0aXZvLCBs4oCZYXppZW5kYSBpdGFsaWFuYSBpbml6aWFsbWVudGUgcHJlc3RhIG1hZ2dpb3JlIGF0dGVuemlvbmUgYSBxdWVsbG8gZGEgc2NpLiBNYSDDqCBuZWwgMjAwOSBjaGUgbmFzY2UgbGEgbGluZWEgQ29sbWFyIE9yaWdpbmFsIGRlZGljYXRhIGFpIGdpb3ZhbmkgZSBjYXJhdHRlcml6emF0YSBkYWxsbyBzdG9yaWNvIGxvZ28gdmludGFnZSwgZGEgY2FwaSBkaSBxdWFsaXTDoCBhbGxhIG1vZGEgdXJiYW4tbGlmZXN0eWxlIG1hIHB1ciBzZW1wcmUgZOKAmWlzcGlyYXppb25lIHNwb3J0aXZhLlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiIGlkPVwiZmlsdHJpXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtNlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibS0wXCIgc3R5bGU9XCJjb2xvcjogcmdiKDUyLCA1MiwgNTIpOyBsZXR0ZXItc3BhY2luZzogMnB4OyBmb250LXdlaWdodDogNzAwO1wiPkdlbmVyZTwvcD5cbiAgICAgICAgICAgICAgICA8cC1tdWx0aVNlbGVjdCAob25DaGFuZ2UpPVwic2VhcmNoKCRldmVudClcIiAgZGVmYXVsdExhYmVsPVwiR2VuZXJlXCIgW29wdGlvbnNdPVwic2Vzc29cIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkU2V4XCIgb3B0aW9uTGFiZWw9XCJuYW1lXCIgZGlzcGxheT1cImNoaXBcIiAgW3N0eWxlXT1cInsnd2lkdGgnOicxMDAlJ31cIlxuICAgICAgICAgICAgICBbcGFuZWxTdHlsZV09XCJ7J3dpZHRoJzonNDAwcHgnfVwiPjwvcC1tdWx0aVNlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC02XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTBcIiBzdHlsZT1cImNvbG9yOiByZ2IoNTIsIDUyLCA1Mik7IGxldHRlci1zcGFjaW5nOiAycHg7IGZvbnQtd2VpZ2h0OiA3MDA7XCI+Q2F0ZWdvcmllPC9wPlxuICAgICAgICAgICAgICAgIDxwLW11bHRpU2VsZWN0IChvbkNoYW5nZSk9XCJzZWFyY2goJGV2ZW50KVwiICBkZWZhdWx0TGFiZWw9XCJDYXRlZ29yaWFcIiBbb3B0aW9uc109XCJjYXRlZ29yaWFcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQ2F0ZWdvcmlhXCIgb3B0aW9uTGFiZWw9XCJuYW1lXCIgZGlzcGxheT1cImNoaXBcIiAgW3N0eWxlXT1cInsnd2lkdGgnOicxMDAlJ31cIlxuICAgICAgICAgICAgICAgIFtwYW5lbFN0eWxlXT1cInsnd2lkdGgnOic0MDBweCd9XCI+PC9wLW11bHRpU2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm0tMFwiIHN0eWxlPVwiY29sb3I6IHJnYig1MiwgNTIsIDUyKTsgbGV0dGVyLXNwYWNpbmc6IDJweDsgZm9udC13ZWlnaHQ6IDcwMDtcIj5CcmFuZDwvcD5cbiAgICAgICAgICAgICAgICA8cC1tdWx0aVNlbGVjdCAob25DaGFuZ2UpPVwic2VhcmNoKCRldmVudClcIiAgZGVmYXVsdExhYmVsPVwiQnJhbmRcIiBbb3B0aW9uc109XCJicmFuZFwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRCcmFuZFwiIG9wdGlvbkxhYmVsPVwibmFtZVwiIGRpc3BsYXk9XCJjaGlwXCIgIFtzdHlsZV09XCJ7J3dpZHRoJzonMTAwJSd9XCJcbiAgICAgICAgICAgICAgICBbcGFuZWxTdHlsZV09XCJ7J3dpZHRoJzonNDAwcHgnfVwiPjwvcC1tdWx0aVNlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtNlwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTBcIiBzdHlsZT1cImNvbG9yOiByZ2IoNTIsIDUyLCA1Mik7IGxldHRlci1zcGFjaW5nOiAycHg7IGZvbnQtd2VpZ2h0OiA3MDA7XCI+VGFnbGllPC9wPlxuICAgICAgICAgICAgICAgIDxwLW11bHRpU2VsZWN0IChvbkNoYW5nZSk9XCJzZWFyY2goJGV2ZW50KVwiICBkZWZhdWx0TGFiZWw9XCJUYWdsaWFcIiBbb3B0aW9uc109XCJ0YWdsaWFcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVGFnbGlhXCIgb3B0aW9uTGFiZWw9XCJuYW1lXCIgZGlzcGxheT1cImNoaXBcIiAgW3N0eWxlXT1cInsnd2lkdGgnOicxMDAlJ31cIlxuICAgICAgICAgICAgICAgIFtwYW5lbFN0eWxlXT1cInsnd2lkdGgnOic0MDBweCd9XCI+PC9wLW11bHRpU2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPiAgICA8cC1wYWdpbmF0b3IgW3Jvd3NdPVwiMVwiIChvblBhZ2VDaGFuZ2UpPVwiY2hhbmdlUGFnZSgkZXZlbnQpXCJbdG90YWxSZWNvcmRzXT1cInByb2R1Y3RzLmxlbmd0aC8xMFwiIFtmaXJzdF0gPSAnZmlyc3QnPjwvcC1wYWdpbmF0b3I+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiICBzdHlsZT1cIm1heC13aWR0aDogMTMwMHB4O1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiICAqbmdJZj1cInByb2R1Y3RPblRoaXNQYWdlXCIgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcC0zXCIgKm5nRm9yPVwibGV0IHByb2R1Y3Qgb2YgcHJvZHVjdE9uVGhpc1BhZ2VcIiBbcm91dGVyTGlua109XCIgdyA/IFsnL3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kdWN0LmlkXSA6IFsnL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmlkXVwiPlxuXG4gICAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSBbcHJvZHVjdF09XCJwcm9kdWN0XCIgPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5cblxuIl19