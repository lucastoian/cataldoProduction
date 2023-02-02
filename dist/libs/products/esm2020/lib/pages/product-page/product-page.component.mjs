import { MessageService } from 'primeng/api';
import { ProductVariant } from '@eshop-frontend/users';
import { ProductLuca } from '@eshop-frontend/users';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CartService } from '@eshop-frontend/orders';
import { Subject, takeUntil } from 'rxjs';
import { Title, Meta } from "@angular/platform-browser";
import { ProductsService } from '../../services/products.service';
import { VariantsService } from '../../services/variants.service';
import { BrandsService } from '../../services/brands.services';
import * as i0 from "@angular/core";
import * as i1 from "../../services/products.service";
import * as i2 from "@angular/router";
import * as i3 from "@eshop-frontend/orders";
import * as i4 from "../../services/variants.service";
import * as i5 from "@angular/platform-browser";
import * as i6 from "primeng/api";
import * as i7 from "../../services/brands.services";
import * as i8 from "@angular/common";
import * as i9 from "@eshop-frontend/ui";
import * as i10 from "primeng/accordion";
import * as i11 from "../../components/featured-products/featured-products.component";
import * as i12 from "../../product-json-ld/product-json-ld.component";
function ProductPageComponent_div_1_eshop_frontend_product_json_ld_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eshop-frontend-product-json-ld", 39);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("prodotto", ctx_r1.product)("brandName", ctx_r1.brandName)("sku", ctx_r1.filteredVariants[0].EAN);
} }
function ProductPageComponent_div_1_eeshop_frontend_messages_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eeshop-frontend-messages", 40);
} }
function ProductPageComponent_div_1_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("\u00A0 ", ctx_r3.product.price, " \u20AC ");
} }
const _c0 = function (a0) { return { selected: a0 }; };
function ProductPageComponent_div_1_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_button_36_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.selectSize($event)); })("click", function ProductPageComponent_div_1_button_36_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const i_r6 = restoredCtx.index; const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.updateSelectedSize(i_r6)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, f_r5.size === ctx_r4.clickedSize))("disabled", f_r5.available ? false : true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", f_r5.size, " ");
} }
function ProductPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, ProductPageComponent_div_1_eshop_frontend_product_json_ld_1_Template, 1, 3, "eshop-frontend-product-json-ld", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtemplate(3, ProductPageComponent_div_1_eeshop_frontend_messages_3_Template, 1, 0, "eeshop-frontend-messages", 5);
    i0.ɵɵelementStart(4, "div", 6)(5, "div", 7);
    i0.ɵɵelement(6, "ui-gallery", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 9)(8, "div", 10)(9, "div", 11)(10, "h1");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 10)(13, "div", 12)(14, "div", 13);
    i0.ɵɵtemplate(15, ProductPageComponent_div_1_span_15_Template, 2, 1, "span", 14);
    i0.ɵɵtext(16, " \u00A0 ");
    i0.ɵɵelementStart(17, "span", 15);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "div", 10)(20, "div", 16)(21, "p");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 10)(24, "div", 16)(25, "p");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 10)(28, "div", 17);
    i0.ɵɵtext(29, "Varianti");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(30, "eshop-frontend-carousel", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 10)(32, "div", 19);
    i0.ɵɵtext(33, "Taglia");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 20)(35, "div", 21);
    i0.ɵɵtemplate(36, ProductPageComponent_div_1_button_36_Template, 2, 5, "button", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 23)(38, "a", 24);
    i0.ɵɵtext(39, "Guida alle taglie");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 10)(41, "div", 25)(42, "button", 26);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.addProductToCart()); });
    i0.ɵɵtext(43, " AGGIUNGI AL CARRELLO ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 6)(45, "div", 27)(46, "span", 28);
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "span", 29);
    i0.ɵɵtext(49, "Klarna");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(50, " \u00A0");
    i0.ɵɵelementStart(51, "a", 30);
    i0.ɵɵtext(52, "Scopri di pi\u00F9");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "div", 10)(54, "p-accordion")(55, "p-accordionTab", 31);
    i0.ɵɵelement(56, "div", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "p-accordionTab", 33);
    i0.ɵɵelement(58, "div", 32);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(59, "div", 34)(60, "div", 35);
    i0.ɵɵtext(61, " Prodotti correlati ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "div", 36)(63, "div", 37);
    i0.ɵɵelement(64, "eshop-frontend-featured-products", 38);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.brandName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.displaySuccessBanner);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("images", ctx_r0.product.images)("image", ctx_r0.product.image)("product", ctx_r0.product);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.product.discount != 0);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.product.price - ctx_r0.product.discount, " \u20AC");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Codice: ", ctx_r0.product.productId, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Brand: ", ctx_r0.brandName, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("images", ctx_r0.products);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r0.nonEmptyVariants);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r0.button);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Paga in 3 rate da ", ctx_r0.klarnaPrice, " \u20AC senza interessi con \u00A0");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("selected", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r0.product.description, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r0.p.materiali, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("brandName", ctx_r0.product.brand)("maxComponentWidth", 1200)("featuredSex", ctx_r0.product.sex);
} }
export class ProductPageComponent {
    constructor(prodService, route, cartService, variantService, titleService, meta, messageService, brandService) {
        this.prodService = prodService;
        this.route = route;
        this.cartService = cartService;
        this.variantService = variantService;
        this.titleService = titleService;
        this.meta = meta;
        this.messageService = messageService;
        this.brandService = brandService;
        this.variants = [];
        this.filteredVariants = [];
        this.nonEmptyVariants = [];
        this.klarnaPrice = 0;
        this.prodName = '';
        this.prodId = '';
        this.W_prodname = '';
        this.menProd = true;
        this.wProd = false;
        this.products = [];
        this.colors = [];
        this.simalProducts = [];
        this.endSubs$ = new Subject();
        this.quantity = 0;
        this.displaySuccessBanner = false;
        this.selected = false;
        this.button = true;
        this.selectedSize = [];
        this.availability = [];
        this.discount = 0;
        this.brandMap = new Map();
        this.p = new ProductLuca();
        this.brandMap.set("6213c7889309de960180da4a", "https://cataldostore.s3.eu-west-3.amazonaws.com/blauer.png.png");
        this.brandMap.set("6213c89e9309de960180da4d", "https://cataldostore.s3.eu-west-3.amazonaws.com/oldriver.png.png");
        this.brandMap.set("62167bd1cba8a1e0d9c1af88", "https://cataldostore.s3.eu-west-3.amazonaws.com/colmar.png.png");
        this.brandMap.set("62189efe1d62386cc22525b6", "https://cataldostore.s3.eu-west-3.amazonaws.com/ea7.png.png");
        this.brandMap.set("62189f1e1d62386cc22525b9", "https://cataldostore.s3.eu-west-3.amazonaws.com/fredperry.png.png");
        this.brandMap.set("62189f371d62386cc22525bc", "https://cataldostore.s3.eu-west-3.amazonaws.com/kway.png.png");
        this.brandMap.set("62189f481d62386cc22525bf", "https://cataldostore.s3.eu-west-3.amazonaws.com/lacoste.png.png");
        this.brandMap.set("62189f7d1d62386cc22525c2", "https://cataldostore.s3.eu-west-3.amazonaws.com/murphy.png.png");
        this.brandMap.set("62189f981d62386cc22525c5", "https://cataldostore.s3.eu-west-3.amazonaws.com/peninsula.png.png");
        this.brandMap.set("62189fad1d62386cc22525c8", "https://cataldostore.s3.eu-west-3.amazonaws.com/saucony.png.png");
        this.brandMap.set("62189fbb1d62386cc22525cb", "https://cataldostore.s3.eu-west-3.amazonaws.com/sundek.png.png");
        this.brandMap.set("632e05f3b8c567de5ea83669", "https://cataldostore.s3.eu-west-3.amazonaws.com/barbour.png.png");
        this.brandMap.set("636b57e2506ba65e593baa81", "https://cataldostore.s3.eu-west-3.amazonaws.com/Screenshot.png");
        this.brandMap.set("636b57f3506ba65e593baa84", "https://cataldostore.s3.eu-west-3.amazonaws.com/Screenshot.png");
        this.brandMap.set("636b5806506ba65e593baa87", "https://cataldostore.s3.eu-west-3.amazonaws.com/Screenshot.png");
        this.cart = this.cartService.getCart();
        this.available = true;
        //console.log("cart = " + this.cart.getJson());
        this.url = this.route.url;
        this.route.params.subscribe((params) => {
            if (params.productId) {
                //   this._getProduct(params.productId);
                this.currentId = params.productId;
                // //console.log(this.currentId);
                // this.prodName = this.product.name
                //// //console.log(this.prodName);
            }
        });
        //      
        //
        this.p = new ProductLuca();
        this._getProduct2().then(data => {
            this.p = data;
        }).catch(error => {
            this.p = null;
        });
        this.route.params.subscribe((params) => {
            if (params.productId) {
                this._getWproduct(params.productId);
                this.currentId = params.productId;
                this._getSizes();
                //console.log("product= " + this.product);
                // //console.log(this.currentId);
                // this.prodName = this.product.name
                //// //console.log(this.prodName);
            }
        });
    }
    async ngOnInit() {
    }
    ngOnDestroy() {
        this.endSubs$.complete();
    }
    async ajaxGetImageData(url) {
        const response = await fetch(url, { cache: "no-store" });
        const imageBlob = await response.blob();
        return imageBlob;
        //Code to get base64 image string
    }
    /**
     * Se il prodotto esiste già, aggiungo una variants, senno aggiungo un nuovo prodotto con la sua variants
     * @returns
     */
    addProductToCart() {
        if (this.quantity != 0) {
            let pVariant = new ProductVariant(this.selectedSize[0].id, this.selectedSize[0].size, this.selectedSize[0].inventory, 0, String(this.selectedSize[0].barcode));
            if (this.cart.containsProduct(this.p)) {
                let index = this.cart.getProductIndex(this.p);
                let product = this.cart.getProduct(index);
                product.addVariant(pVariant, this.quantity);
                //     this.selectedSize[0].inventory -= product.getVariant(pVariant).getSelected();
                this.p = product;
                this.maxInv = this.p.getVariant(pVariant).getInventory();
                //console.log("i have set the maxInv to: " + this.maxInv);
                if (this.maxInv <= 0) {
                    this.minInv = 0;
                    this.quantity = 0;
                }
                this.quantity = 0;
                this.cart.updateLocalStorage();
                this.checkQuantity();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successo',
                    detail: `L'articolo è stato aggiunto al carrello!`
                });
            }
            else {
                this.p.addVariant(pVariant, this.quantity);
                // this.selectedSize[0].inventory -= this.p.getVariant(pVariant).getSelected();
                this.maxInv = this.p.getVariant(pVariant).getInventory();
                //console.log("i have set the maxInv to: " + this.maxInv);
                if (this.maxInv <= 0) {
                    this.minInv = 0;
                    this.quantity = 0;
                }
                this.quantity = 0;
                this.cart.addProductLuca(this.p);
                this.checkQuantity();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successo',
                    detail: `L'articolo è stato aggiunto al carrello!`
                });
            }
        }
    }
    _getProduct(id) {
        this.prodService
            .getProduct(id)
            .pipe(takeUntil(this.endSubs$))
            .subscribe((resProduct) => {
            this.product = resProduct;
            console.log("product color? " + JSON.stringify(this.product));
            this.prodName = this.product.name;
            this.prodId = this.product.productId;
            this.product.brandLogo = this.brandMap.get(this.product.brand);
            this.brandLogo = this.brandMap.get(this.product.brand);
            console.log("brand logo = " + this.brandMap.get(this.product.brand));
            this.getProdByProdId();
        });
    }
    /**
     *
     * @returns restituisce il prodotto della pagina
     */
    async _getProduct2() {
        let promise = new Promise((resolve, reject) => {
            this.prodService
                .getProduct(this.currentId)
                .pipe(takeUntil(this.endSubs$))
                .subscribe((resProduct) => {
                // //console.log("res product: " + JSON.stringify(resProduct));
                let p = new ProductLuca();
                p.setId(resProduct.id);
                p.setDiscount(resProduct.discount);
                p.setPrice(resProduct.price);
                p.setTheMainImage(resProduct.image);
                p.setName(resProduct.name);
                p.materiali = resProduct.materiali;
                resolve(p);
            });
        });
        let data = await promise;
        return data;
    }
    _getWproduct(id) {
        this.prodService.getProduct(id)
            .pipe(takeUntil(this.endSubs$))
            .subscribe(async (resProduct) => {
            this.product = resProduct;
            this.brandService.getBrand(this.product.brand).subscribe((data) => {
                this.brandName = data.name;
                console.log("brand name = " + this.brandName);
                this.product.brandName = this.brandName;
            });
            this.meta.updateTag({ name: 'description', content: this.product.name + ' | a soli : ' + this.product.discount + '€ ' + this.product.productId });
            this.meta.updateTag({ property: 'og:title', content: this.product.name.toLowerCase() + " | Cataldostore.it" });
            this.meta.updateTag({ property: 'og:description', content: this.product.name + ' | a soli : ' + this.product.discount + '€ ' + this.product.productId });
            this.meta.updateTag({ property: 'og:image', content: this.product.image });
            this.meta.updateTag({ property: 'og:site', content: "https://www.cataldostore.it" });
            this.meta.updateTag({ property: 'og:type', content: "Cataldostore:product" });
            this.meta.updateTag({ property: 'og:url', content: "/products/" + this.product.id });
            this.meta.updateTag({ property: 'og:site_name', content: "Cataldostore Shop" });
            if (this.product.sex == "M") {
                localStorage.setItem("categoria", "uomo");
            }
            else {
                localStorage.setItem("categoria", "donna");
            }
            this.W_prodname = this.product.name;
            this.prodId = this.product.productId;
            this.getProdByProdId();
            this.discount = Math.round((this.product.discount / this.product.price) * 100);
            this.klarnaPrice = Math.round((this.product.price - this.product.discount) / 3);
            this.product.brandLogo = this.brandMap.get(this.product.brand);
            this.brandLogo = this.brandMap.get(this.product.brand);
            let blob = await this.ajaxGetImageData(this.brandLogo);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                this.brandLogoBlob = base64data;
            };
        });
    }
    _getSizes() {
        this.variantService
            .getVariants()
            .pipe(takeUntil(this.endSubs$))
            .subscribe((variants) => {
            this.variants = variants;
            this.variants.sort((a, b) => a.inventory > b.inventory ? -1 : a.inventory < b.inventory ? 1 : 0);
            this.filteredVariants = this.variants.filter((size) => size.product === this.currentId);
            this.product.variants = this.filteredVariants;
            this.filteredVariants.sort((a, b) => (a.size < b.size ? -1 : 1));
            for (let i = 0; i < this.filteredVariants.length; i++) {
                if (this.filteredVariants[i].inventory <= 0) {
                    continue;
                }
                else {
                    this.nonEmptyVariants.push(this.filteredVariants[i]);
                }
            }
            let weights = {
                'xxs': 1,
                'xs': 2,
                's': 3,
                'm': 4,
                'l': 5,
                'xl': 6,
                'xxl': 7,
                'xxxl': 8,
                '3xl': 8
            };
            if (this.nonEmptyVariants[0] != null) {
                if (this.nonEmptyVariants[0].size.toLowerCase().includes("s") || this.nonEmptyVariants[0].size.toLowerCase().includes("l") || this.nonEmptyVariants[0].size.toLowerCase().includes("m")) {
                    this.nonEmptyVariants = this.nonEmptyVariants.sort((a, b) => weights[a.size.toLowerCase()] - weights[b.size.toLowerCase()]);
                }
            }
        });
    }
    /**questa funzione sembra solo gestire il max input */
    selectSize(event, index) {
        //console.log("filteredVariants: " + this.filteredVariants);
        this.selected = true;
        this.button = false;
        this.clickedSize = event.target.innerHTML.slice(0, -1);
        console.log("filteredVariants = " + JSON.stringify(this.filteredVariants));
        this.selectedSize = this.filteredVariants.filter((x) => x.size === this.clickedSize);
        console.log("selected size= " + JSON.stringify(this.selectedSize));
        if (this.selectedSize[0].inventory >= 1) {
            this.minInv = 1;
            this.maxInv = this.selectedSize[0].inventory;
            this.quantity = 1;
            // //console.log("im doing something -> selectSize()");
        }
    }
    getProdByname() {
        this.prodService.getProductById(this.prodName).subscribe((products) => {
            this.products = products;
            // //console.log(this.products);
            this.len = this.products.length;
            for (let i = 0; i < this.len; i++) {
                this.colors.push(this.products[i]);
                this.simalProducts.push(this.products[i].image);
                // //console.log(this.products[i].color);
            }
            // //console.log(this.colors);
            console.log("similar products = " + this.simalProducts);
            if (this.len >= 1) {
                this.multipleColors = true;
            }
            else {
                this.multipleColors = false;
            }
        });
    }
    getProdByProdId() {
        this.prodService.getProductById(this.prodId).subscribe((products) => {
            this.products = products;
            // //console.log(this.products);
            this.len = this.products.length;
            for (let i = 0; i < this.len; i++) {
                this.colors.push(this.products[i]);
                this.simalProducts.push(this.products[i].image);
                // //console.log(this.products[i].color);
            }
            // //console.log(this.colors);
            console.log("similar products = " + this.simalProducts);
            if (this.len >= 1) {
                this.multipleColors = true;
            }
            else {
                this.multipleColors = false;
            }
            this.titleService.setTitle(this.product.name.toLowerCase() + " | Cataldostore.it");
        });
    }
    getWProdByname() {
        this.prodService.getProductByName(this.W_prodname).subscribe((products) => {
            this.products = products;
            // //console.log(this.products);
            this.len = this.products.length;
            for (let i = 0; i < this.len; i++) {
                this.colors.push(this.products[i]);
                this.simalProducts.push(this.products[i].image);
                // //console.log(this.products[i].color);
            }
            // //console.log(this.colors);
            if (this.len > 1) {
                this.multipleColors = true;
            }
            else {
                this.multipleColors = false;
            }
        });
    }
    updateSelectedSize(index) {
        //console.log("size = " + JSON.stringify(this.filteredVariants[index]));
        let selectedVariant = this.nonEmptyVariants[index];
        let selectedVariantId = this.nonEmptyVariants[index].id;
        //console.log("selectedVariantId " + selectedVariantId );
        let selectedProductVariant = this.cart.getVariantById(selectedVariantId);
        if (selectedProductVariant != null) {
            //console.log(selectedProductVariant.getJson());
            this.maxInv = selectedProductVariant.getInventory();
            if (this.maxInv === 0 || this.quantity === 0)
                this.button = true;
            //console.log("this product is already inside the cart, the maxInv is: " + this.maxInv);
        }
        else {
            this.maxInv = selectedVariant.inventory;
            if (this.maxInv === 0 || this.quantity === 0)
                this.button = true;
            //console.log("this product is NOT inside the cart, the maxInv is: " + this.maxInv);
        }
    }
    checkQuantity() {
        if (this.quantity != 0) {
            this.button = false;
        }
        else {
            this.button = true;
        }
    }
}
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(i0.ɵɵdirectiveInject(i1.ProductsService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.CartService), i0.ɵɵdirectiveInject(i4.VariantsService), i0.ɵɵdirectiveInject(i5.Title), i0.ɵɵdirectiveInject(i5.Meta), i0.ɵɵdirectiveInject(i6.MessageService), i0.ɵɵdirectiveInject(i7.BrandsService)); };
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 2, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Nova Flat", "rel", "stylesheet"], ["class", "product-page", 4, "ngIf"], [1, "product-page"], [3, "prodotto", "brandName", "sku", 4, "ngIf"], [1, "grid", 2, "justify-content", "center"], ["style", "max-width:40vw", 4, "ngIf"], [1, "row", "w-100", 2, "justify-content", "center"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-auto", "gallery", "m-0", "p-0"], [3, "images", "image", "product"], [1, "col-12", "col-sm-12", "col-md-5", "col-lg-3", "col-xl-4", "product", 2, "display", "flex", "flex-direction", "column", "align-items", "end", "padding", "1em", "line-height", "1.5em"], [1, "row", "w-100"], [1, "col-auto", 2, "font-size", "24px", "font-weight", "600"], [1, "col-auto"], [1, "col-auto", 2, "font-weight", "700"], ["style", "text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);", 4, "ngIf"], [2, "color", "black"], [1, "col-auto", 2, "height", "20px", "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)"], [1, "col-auto", 2, "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)"], [2, "overflow-x", "auto", 3, "images"], [1, "col-12", 2, "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)", "padding-bottom", "0 !important"], [1, "col-12", "p-0"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", 2, "max-width", "100%", "overflow-x", "auto"], ["class", "btn btn-sm m-2 ", "style", "max-width:fit-content; font-weight: 700; margin-top: 0 !important; margin-left: 0 !important;", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "col-auto", 2, "font-weight", "lighter", "font-size", "10px", "color", "rgb(165, 165, 165)"], [2, "cursor", "pointer", "text-decoration", "underline"], [1, "col-12"], ["type", "button", "label", "Add to cart", 1, "btn", "btn-secondary", 2, "width", "100%", "border-radius", "0", 3, "disabled", "click"], [1, "col-auto", 2, "font-size", "10px"], [2, "font-weight", "600", "font-size", "10px", "padding-bottom", "0 !important"], [2, "font-weight", "700"], [2, "font-weight", "600", "font-size", "10px", "padding-bottom", "0 !important", "cursor", "pointer", "text-decoration", "underline"], ["header", "DESCRIZIONE", 2, "box-shadow", "none !important", 3, "selected"], [3, "innerHTML"], ["header", "MATERIALI E CURA"], [1, "row", 2, "justify-content", "center"], [1, "col-10", "prodottiCorrelatiText", 2, "border-bottom", "3px solid black", "font-weight", "600", "letter-spacing", "2px"], [1, "row", "w-100", "pr-0", "pl-0", 2, "justify-content", "center"], [1, "col-12", "col-l-9", "p-0", 2, "padding-top", "20px !important"], [3, "brandName", "maxComponentWidth", "featuredSex"], [3, "prodotto", "brandName", "sku"], [2, "max-width", "40vw"], [2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(255, 0, 0)"], [1, "btn", "btn-sm", "m-2", 2, "max-width", "fit-content", "font-weight", "700", "margin-top", "0 !important", "margin-left", "0 !important", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵtemplate(1, ProductPageComponent_div_1_Template, 65, 20, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, dependencies: [i8.NgClass, i8.NgForOf, i8.NgIf, i9.GalleryComponent, i9.CarouselComponent, i10.Accordion, i10.AccordionTab, i11.FeaturedProductsComponent, i12.ProductJsonLdComponent], styles: [".btn.btn-secondary[disabled][_ngcontent-%COMP%]{background-color:#cecece}.selected[_ngcontent-%COMP%]{border:1px solid black!important}.prodottiCorrelatiText[_ngcontent-%COMP%]{font-size:30px;padding-top:40px}  .p-element{padding:0!important}  .p-accordion .p-accordion-header .p-accordion-header-link:focus{box-shadow:none!important}  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{background:#ffffff!important;border-color:#434343!important;color:#495057;border:none!important;border-bottom-right-radius:0;border-bottom-left-radius:0}  .p-accordion-header{border-top:1px solid rgb(168,168,168)!important}  .p-accordion-content{border:none!important}  .p-accordion .p-accordion-header .p-accordion-header-link{padding:1rem;color:#495057;background:#ffffff!important;border-color:#fff!important;border:none!important;font-weight:600;transition:box-shadow .2s}@media screen and (max-width: 993px){.prodottiCorrelatiText[_ngcontent-%COMP%]{font-size:24px;padding-top:4px}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', template: "\n\n\n<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\n<div class=\"product-page\" *ngIf=\"product\">\n  <eshop-frontend-product-json-ld *ngIf=\"brandName\" [prodotto]=\"product\" [brandName]=\"brandName\" [sku]=\"this.filteredVariants[0].EAN\"></eshop-frontend-product-json-ld>\n  \n  <div class=\"grid\" style=\"justify-content: center;\">\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\n\n    <!--\n        <div class=\"rating-sm\">\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\n        </div> -->\n    \n\n    <div class=\"row w-100\" style=\"justify-content: center\">\n    <div class=\"col-12 col-sm-12 col-md-4 col-lg-auto gallery m-0 p-0\">\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\" ></ui-gallery>\n    </div>\n\n    <div class=\"col-12 col-sm-12 col-md-5 col-lg-3 col-xl-4 product\" style=\"display: flex;flex-direction: column;align-items: end;padding:1em; line-height:1.5em;\">\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\"font-size: 24px; font-weight:600\"><h1>{{product.name}}</h1></div>\n      </div>\n  \n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\">\n          <div  class=\"col-auto\" style=\"font-weight: 700;\">\n            <span *ngIf=\"product.discount != 0\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);\">&nbsp; {{product.price}} \u20AC </span>\n            &nbsp;\n            <span style=\"color: black;\"> {{product.price - product.discount}} \u20AC</span> \n          </div>\n        </div>\n      </div>\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\"     height: 20px;font-weight: lighter; font-size: small; color: rgb(143, 143, 143);\"><p>Codice:  {{this.product.productId}}</p></div>\n      </div>\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\"     height: 20px;font-weight: lighter; font-size: small; color: rgb(143, 143, 143);\"><p>Brand: {{this.brandName}}</p></div>\n      </div>\n\n\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\" font-weight: lighter; font-size: small; color: rgb(143, 143, 143);\">Varianti</div>\n        <eshop-frontend-carousel  [images]=\"products\" style=\" overflow-x: auto;\"></eshop-frontend-carousel>\n      </div>\n      \n\n      <div class=\"row w-100\">\n        <div class=\"col-12\" style=\" font-weight: lighter; font-size: small; color: rgb(143, 143, 143); padding-bottom: 0 !important;\">Taglia</div>\n        <div class=\"col-12 p-0\">\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\" style=\"max-width: 100%; overflow-x:auto\">\n            <button  [ngClass]=\"{selected: f.size === clickedSize}\" class=\"btn btn-sm m-2 \" style=\"max-width:fit-content; font-weight: 700; margin-top: 0 !important; margin-left: 0 !important;\" [disabled]=\"f.available? false : true\"\n            *ngFor=\"let f of nonEmptyVariants, let i = index\" (click)=\"selectSize($event)\"\n            (click)=\"updateSelectedSize(i)\" >{{f.size}}\n            </button>            \n          </div>\n  \n        </div>\n        \n        <div class=\"col-auto\" style=\" font-weight: lighter; font-size: 10px; color: rgb(165, 165, 165);\">\n\n            <a style=\"cursor: pointer;  text-decoration: underline;\">Guida alle taglie</a>\n      \n        </div>\n\n        <div class=\"row w-100\">\n          <div class=\"col-12\">\n     \n            <button [disabled]=\"button\" type=\"button\" label=\"Add to cart\" class=\"btn btn-secondary\" style=\"width: 100%; border-radius: 0;\"\n            (click)=\"addProductToCart()\">\n            AGGIUNGI AL CARRELLO\n           </button>\n          </div>\n        </div>\n\n        <div class=\"row w-100\" style=\"justify-content: center;\">\n          <div class=\"col-auto\" style=\"font-size: 10px;\">\n            <span style=\" font-weight: 600; font-size: 10px; padding-bottom: 0 !important;\">Paga in 3 rate da {{this.klarnaPrice}} \u20AC senza interessi con    &nbsp;</span> <span style=\"font-weight: 700;\">Klarna</span>   &nbsp;<a style=\" font-weight: 600; font-size: 10px; padding-bottom: 0 !important; cursor: pointer;  text-decoration: underline;\">Scopri di pi\u00F9</a>\n          </div>\n        </div>\n\n\n\n        <div class=\"row w-100\">\n             \n          <p-accordion >\n            <p-accordionTab header=\"DESCRIZIONE\" [selected]=\"true\" style=\" box-shadow: none !important;\">\n              <div [innerHTML]=\"product.description\"></div>\n            </p-accordionTab>\n            <p-accordionTab header=\"MATERIALI E CURA\">\n              <div [innerHTML]=\"p.materiali\"></div>\n            </p-accordionTab>\n    \n        </p-accordion>\n        </div>\n\n      </div>\n\n      \n\n    </div>\n            \n    <div class=\"row\" style=\"justify-content:center;\">\n     <div class=\"col-10 prodottiCorrelatiText\" style=\"border-bottom: 3px solid black; font-weight: 600; letter-spacing: 2px;\">\n      Prodotti correlati\n     </div>\n\n    </div>\n                \n    <div class=\"row w-100 pr-0 pl-0\" style=\"justify-content:center;\">\n      <div class=\"col-12 col-l-9 p-0\" style=\"padding-top: 20px !important;\">\n\n        <eshop-frontend-featured-products [brandName]=\"product.brand\"  [maxComponentWidth]=\"1200\" [featuredSex]=\"product.sex\"></eshop-frontend-featured-products>\n    \n    </div>\n      \n     </div>\n   \n  </div>\n\n  </div>\n</div>\n\n\n", styles: [".btn.btn-secondary[disabled]{background-color:#cecece}.selected{border:1px solid black!important}.prodottiCorrelatiText{font-size:30px;padding-top:40px}::ng-deep .p-element{padding:0!important}::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link:focus{box-shadow:none!important}::ng-deep .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{background:#ffffff!important;border-color:#434343!important;color:#495057;border:none!important;border-bottom-right-radius:0;border-bottom-left-radius:0}::ng-deep .p-accordion-header{border-top:1px solid rgb(168,168,168)!important}::ng-deep .p-accordion-content{border:none!important}::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link{padding:1rem;color:#495057;background:#ffffff!important;border-color:#fff!important;border:none!important;font-weight:600;transition:box-shadow .2s}@media screen and (max-width: 993px){.prodottiCorrelatiText{font-size:24px;padding-top:4px}}\n"] }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }, { type: i3.CartService }, { type: i4.VariantsService }, { type: i5.Title }, { type: i5.Meta }, { type: i6.MessageService }, { type: i7.BrandsService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekQsOERBQThEO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFRLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBT3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNoQjdELHFEQUFxSzs7O0lBQW5ILHlDQUFvQiwrQkFBQSx1Q0FBQTs7O0lBR3BFLCtDQUF5Rzs7O0lBdUJqRyxnQ0FBcUg7SUFBQSxZQUEyQjtJQUFBLGlCQUFPOzs7SUFBbEMsZUFB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QixlQUFhO1FBQWIsa0NBQWE7O3VGRHlCM0Isb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cblxuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBQcm9kdWN0THVjYSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC9vcmRlcnMnO1xuaW1wb3J0IHsgU3ViamVjdCwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1RpdGxlLCBNZXRhfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDYXJ0SWNvbkNvbXBvbmVudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC9vcmRlcnMnO1xuaW1wb3J0IHsgVmFyaWFudCB9IGZyb20gJy4uLy4uL21vZGVscy92YXJpYW50JztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBXX1Byb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvdy1wcm9kdWN0JztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgV19Qcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93LXByb2R1Y3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmFyaWFudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmFyaWFudHMuc2VydmljZSc7XG5pbXBvcnQgeyBCcmFuZHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYnJhbmRzLnNlcnZpY2VzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0LXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC1wYWdlLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNsaWNrZWRTaXplIDogU3RyaW5nO1xuICB2YXJpYW50OiBWYXJpYW50O1xuICB2YXJpYW50czogVmFyaWFudFtdID0gW107XG4gIGZpbHRlcmVkVmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xuICBub25FbXB0eVZhcmlhbnRzOiBWYXJpYW50W10gPSBbXTtcbiAgcHJvZHVjdDogUHJvZHVjdDEyMztcbiAga2xhcm5hUHJpY2UgPSAwO1xuICBXX3Byb2R1Y3Q6IFdfUHJvZHVjdDtcbiAgcHJvZE5hbWUgPSAnJztcbiAgcHJvZElkID0gJyc7XG4gIFdfcHJvZG5hbWUgPSAnJztcbiAgbWVuUHJvZCA9IHRydWU7XG4gIHdQcm9kID0gZmFsc2U7XG4gIHByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgbGVuOiBudW1iZXI7XG4gIGNvbG9yczogUHJvZHVjdDEyM1tdID0gW107XG4gIHNpbWFsUHJvZHVjdHM6IHN0cmluZ1tdID0gW107XG4gIG11bHRpcGxlQ29sb3JzOiBib29sZWFuO1xuICBlbmRTdWJzJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcXVhbnRpdHkgPSAwO1xuICBjdXJyZW50SWQ7XG4gIGRpc3BsYXlTdWNjZXNzQmFubmVyID0gZmFsc2U7XG4gIHNlbGVjdGVkID0gZmFsc2U7XG4gIGJ1dHRvbiA9IHRydWU7XG4gIHNlbGVjdGVkU2l6ZTogVmFyaWFudFtdID0gW107XG4gIGF2YWlsYWJpbGl0eTogYW55W10gPSBbXTtcbiAgYXZhaWxhYmxlOiBib29sZWFuO1xuICBtaW5JbnY6IG51bWJlcjtcbiAgbWF4SW52OiBudW1iZXI7XG4gIHVybDtcbiAgZGlzY291bnQgPSAwO1xuICBwOiBQcm9kdWN0THVjYTtcbiAgYnJhbmRMb2dvIDogc3RyaW5nO1xuICBicmFuZE1hcCA9IG5ldyBNYXA8c3RyaW5nLHN0cmluZz4oKTsgXG4gIGJyYW5kTG9nb0Jsb2I7XG4gIGJyYW5kTmFtZTpTdHJpbmc7XG4gIHByaXZhdGUgY2FydCA6IENhcnRcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9kU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmFyaWFudFNlcnZpY2U6IFZhcmlhbnRzU2VydmljZSxcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTpUaXRsZSxcbiAgICBwcml2YXRlIG1ldGE6IE1ldGEsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBicmFuZFNlcnZpY2U6IEJyYW5kc1NlcnZpY2UsXG5cblxuXG4gICkgeyAgICAgdGhpcy5wID0gbmV3IFByb2R1Y3RMdWNhKClcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjNzg4OTMwOWRlOTYwMTgwZGE0YVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vYmxhdWVyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjEzYzg5ZTkzMDlkZTk2MDE4MGRhNGRcIiwgXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9vbGRyaXZlci5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTY3YmQxY2JhOGExZTBkOWMxYWY4OFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vY29sbWFyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODllZmUxZDYyMzg2Y2MyMjUyNWI2XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9lYTcucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjFlMWQ2MjM4NmNjMjI1MjViOVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vZnJlZHBlcnJ5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmMzcxZDYyMzg2Y2MyMjUyNWJjXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9rd2F5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjE4OWY0ODFkNjIzODZjYzIyNTI1YmZcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2xhY29zdGUucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjdkMWQ2MjM4NmNjMjI1MjVjMlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vbXVycGh5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmOTgxZDYyMzg2Y2MyMjUyNWM1XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9wZW5pbnN1bGEucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZmFkMWQ2MjM4NmNjMjI1MjVjOFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vc2F1Y29ueS5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZmJiMWQ2MjM4NmNjMjI1MjVjYlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vc3VuZGVrLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjMyZTA1ZjNiOGM1NjdkZTVlYTgzNjY5XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9iYXJib3VyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU3ZTI1MDZiYTY1ZTU5M2JhYTgxXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYzNmI1N2YzNTA2YmE2NWU1OTNiYWE4NFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vU2NyZWVuc2hvdC5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU4MDY1MDZiYTY1ZTU5M2JhYTg3XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcblxuXG4gICAgdGhpcy5jYXJ0ID0gdGhpcy5jYXJ0U2VydmljZS5nZXRDYXJ0KCk7XG4gICAgdGhpcy5hdmFpbGFibGUgPSB0cnVlO1xuXG5cblxuXG4gICAgLy9jb25zb2xlLmxvZyhcImNhcnQgPSBcIiArIHRoaXMuY2FydC5nZXRKc29uKCkpO1xuXG5cbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xuXG5cbiAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMucHJvZHVjdElkKSB7XG4gICAgICAgLy8gICB0aGlzLl9nZXRQcm9kdWN0KHBhcmFtcy5wcm9kdWN0SWQpO1xuICAgICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLnByb2R1Y3RJZDtcbiAgICAgICBcbiAgICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xuICAgICAgICAgIC8vIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZVxuICAgICAgICAgIC8vLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2ROYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbi8vICAgICAgXG4gXG5cbi8vXG4gICAgdGhpcy5wID0gbmV3IFByb2R1Y3RMdWNhKCk7XG4gICAgdGhpcy5fZ2V0UHJvZHVjdDIoKS50aGVuKFxuICAgICBkYXRhID0+e1xuICAgICAgIHRoaXMucCA9IGRhdGE7XG4gICAgIH1cbiAgICAgKS5jYXRjaCggZXJyb3IgPT57XG4gICAgICAgdGhpcy5wID0gbnVsbDtcbiAgICAgfSk7XG4gICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICBpZiAocGFyYW1zLnByb2R1Y3RJZCkge1xuICAgICAgICB0aGlzLl9nZXRXcHJvZHVjdChwYXJhbXMucHJvZHVjdElkKTtcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMucHJvZHVjdElkO1xuICAgICAgICB0aGlzLl9nZXRTaXplcygpO1xuXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInByb2R1Y3Q9IFwiICsgdGhpcy5wcm9kdWN0KTtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTtcbiAgICAgICAgLy8gdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lXG4gICAgICAgIC8vLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2ROYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcbiAgfVxuXG5cbiAgXG5cbiAgYXN5bmMgYWpheEdldEltYWdlRGF0YSh1cmwpIHtcbiAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtjYWNoZTogXCJuby1zdG9yZVwifSk7XG4gICAgY29uc3QgaW1hZ2VCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgIHJldHVybiBpbWFnZUJsb2I7XG5cblxuICAvL0NvZGUgdG8gZ2V0IGJhc2U2NCBpbWFnZSBzdHJpbmdcblxufVxuICAvKipcbiAgICogU2UgaWwgcHJvZG90dG8gZXNpc3RlIGdpw6AsIGFnZ2l1bmdvIHVuYSB2YXJpYW50cywgc2Vubm8gYWdnaXVuZ28gdW4gbnVvdm8gcHJvZG90dG8gY29uIGxhIHN1YSB2YXJpYW50c1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYWRkUHJvZHVjdFRvQ2FydCgpIHtcblxuICAgIGlmKHRoaXMucXVhbnRpdHkgIT0gMCkge1xuXG4gICBsZXQgcFZhcmlhbnQgPSBuZXcgUHJvZHVjdFZhcmlhbnQodGhpcy5zZWxlY3RlZFNpemVbMF0uaWQsIHRoaXMuc2VsZWN0ZWRTaXplWzBdLnNpemUsIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSwgMCwgU3RyaW5nKHRoaXMuc2VsZWN0ZWRTaXplWzBdLmJhcmNvZGUpKTtcblxuXG4gICAgICBpZih0aGlzLmNhcnQuY29udGFpbnNQcm9kdWN0KHRoaXMucCkpe1xuICAgXG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jYXJ0LmdldFByb2R1Y3RJbmRleCh0aGlzLnApO1xuICAgICAgICBcbiAgICAgICAgICBsZXQgcHJvZHVjdCA9IHRoaXMuY2FydC5nZXRQcm9kdWN0KGluZGV4KTtcbiAgIFxuICAgICAgICAgIHByb2R1Y3QuYWRkVmFyaWFudChwVmFyaWFudCwgdGhpcy5xdWFudGl0eSk7XG5cbiAgICAgLy8gICAgIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSBwcm9kdWN0LmdldFZhcmlhbnQocFZhcmlhbnQpLmdldFNlbGVjdGVkKCk7XG4gICAgICAgICAgdGhpcy5wID0gcHJvZHVjdDtcbiAgICAgICAgICB0aGlzLm1heEludiA9ICB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0SW52ZW50b3J5KCk7XG5cbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICAgICAgICBpZih0aGlzLm1heEludiA8PSAwKXtcbiAgICAgICAgICAgIHRoaXMubWluSW52ID0gMDtcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXNzbycsXG4gICAgICAgICAgICBkZXRhaWw6IGBMJ2FydGljb2xvIMOoIHN0YXRvIGFnZ2l1bnRvIGFsIGNhcnJlbGxvIWBcbiAgICAgICAgICB9KTtcblxuXG4gICAgICB9ZWxzZXtcbiAgICAgIFxuICAgICAgICB0aGlzLnAuYWRkVmFyaWFudChwVmFyaWFudCwgdGhpcy5xdWFudGl0eSk7XG4gICAgICAgLy8gdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5IC09IHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRTZWxlY3RlZCgpO1xuICAgICAgICB0aGlzLm1heEludiA9ICB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0SW52ZW50b3J5KCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpIGhhdmUgc2V0IHRoZSBtYXhJbnYgdG86IFwiICsgdGhpcy5tYXhJbnYpO1xuICAgICAgICBpZih0aGlzLm1heEludiA8PSAwKXtcbiAgICAgICAgICB0aGlzLm1pbkludiA9IDA7XG4gICAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XG4gICAgICAgIHRoaXMuY2FydC5hZGRQcm9kdWN0THVjYSh0aGlzLnApO1xuICAgICAgICB0aGlzLmNoZWNrUXVhbnRpdHkoKTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXNzbycsXG4gICAgICAgICAgICBkZXRhaWw6IGBMJ2FydGljb2xvIMOoIHN0YXRvIGFnZ2l1bnRvIGFsIGNhcnJlbGxvIWBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG4gIHByaXZhdGUgX2dldFByb2R1Y3QoaWQ6IHN0cmluZykge1xuICAgIHRoaXMucHJvZFNlcnZpY2VcbiAgICAgIC5nZXRQcm9kdWN0KGlkKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZSgocmVzUHJvZHVjdCkgPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNQcm9kdWN0O1xuICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3QgY29sb3I/IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0KSk7XG4gICAgICAgIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZTtcbiAgICAgICAgdGhpcy5wcm9kSWQgPSB0aGlzLnByb2R1Y3QucHJvZHVjdElkO1xuICAgICAgICB0aGlzLnByb2R1Y3QuYnJhbmRMb2dvID0gdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKTtcbiAgICAgICAgdGhpcy5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImJyYW5kIGxvZ28gPSBcIiArIHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCkgKVxuICAgICAgICB0aGlzLmdldFByb2RCeVByb2RJZCgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMgcmVzdGl0dWlzY2UgaWwgcHJvZG90dG8gZGVsbGEgcGFnaW5hXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9nZXRQcm9kdWN0MigpIHtcblxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8UHJvZHVjdEx1Y2E+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucHJvZFNlcnZpY2VcbiAgICAgIC5nZXRQcm9kdWN0KHRoaXMuY3VycmVudElkKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZSgocmVzUHJvZHVjdCkgPT4ge1xuICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJyZXMgcHJvZHVjdDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXNQcm9kdWN0KSk7XG4gICAgICAgIGxldCBwID0gbmV3IFByb2R1Y3RMdWNhKCk7XG4gICAgICAgIHAuc2V0SWQocmVzUHJvZHVjdC5pZCk7XG4gICAgICAgIHAuc2V0RGlzY291bnQocmVzUHJvZHVjdC5kaXNjb3VudCk7XG4gICAgICAgIHAuc2V0UHJpY2UocmVzUHJvZHVjdC5wcmljZSk7XG4gICAgICAgIHAuc2V0VGhlTWFpbkltYWdlKHJlc1Byb2R1Y3QuaW1hZ2UpO1xuICAgICAgICBwLnNldE5hbWUocmVzUHJvZHVjdC5uYW1lKTtcbiAgICAgICAgcC5tYXRlcmlhbGkgPSByZXNQcm9kdWN0Lm1hdGVyaWFsaTtcblxuICAgICAgICByZXNvbHZlKHApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgZGF0YSA9IGF3YWl0IHByb21pc2U7XG4gICAgcmV0dXJuIGRhdGE7XG5cblxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0V3Byb2R1Y3QoaWQ6IHN0cmluZykge1xuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdChpZClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoYXN5bmMgKHJlc1Byb2R1Y3QpID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gcmVzUHJvZHVjdDtcblxuICAgICAgICB0aGlzLmJyYW5kU2VydmljZS5nZXRCcmFuZCh0aGlzLnByb2R1Y3QuYnJhbmQpLnN1YnNjcmliZSgoZGF0YSkgPT57XG4gICAgICAgICAgdGhpcy5icmFuZE5hbWU9ZGF0YS5uYW1lO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnJhbmQgbmFtZSA9IFwiICsgdGhpcy5icmFuZE5hbWUpXG4gICAgICAgICAgdGhpcy5wcm9kdWN0LmJyYW5kTmFtZSA9IHRoaXMuYnJhbmROYW1lO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubWV0YS51cGRhdGVUYWcoeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiB0aGlzLnByb2R1Y3QubmFtZSArJyB8IGEgc29saSA6ICcgKyB0aGlzLnByb2R1Y3QuZGlzY291bnQgKyAn4oKsICcgKyB0aGlzLnByb2R1Y3QucHJvZHVjdElkIH0pXG5cbiAgICAgIHRoaXMubWV0YS51cGRhdGVUYWcoXG4gICAgICAgIHsgcHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6ICB0aGlzLnByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpICsgXCIgfCBDYXRhbGRvc3RvcmUuaXRcIiB9LFxuICAgICAgKTtcbiAgICAgIHRoaXMubWV0YS51cGRhdGVUYWcoXG4gICAgICAgIHsgcHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IHRoaXMucHJvZHVjdC5uYW1lICsnIHwgYSBzb2xpIDogJyArIHRoaXMucHJvZHVjdC5kaXNjb3VudCArICfigqwgJyArIHRoaXMucHJvZHVjdC5wcm9kdWN0SWQgfSxcbiAgICAgICk7XG4gICAgICB0aGlzLm1ldGEudXBkYXRlVGFnKFxuICAgICAgICB7IHByb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiB0aGlzLnByb2R1Y3QuaW1hZ2V9LFxuICAgICAgKTtcbiAgICAgIHRoaXMubWV0YS51cGRhdGVUYWcoXG4gICAgICAgIHsgcHJvcGVydHk6ICdvZzpzaXRlJywgY29udGVudDogXCJodHRwczovL3d3dy5jYXRhbGRvc3RvcmUuaXRcIn0sXG4gICAgICApO1xuICAgICAgdGhpcy5tZXRhLnVwZGF0ZVRhZyhcbiAgICAgICAgeyBwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiBcIkNhdGFsZG9zdG9yZTpwcm9kdWN0XCJ9LFxuICAgICAgKTtcbiAgICAgIHRoaXMubWV0YS51cGRhdGVUYWcoXG4gICAgICAgIHsgcHJvcGVydHk6ICdvZzp1cmwnLCBjb250ZW50OiBcIi9wcm9kdWN0cy9cIiArIHRoaXMucHJvZHVjdC5pZH0sXG4gICAgICApO1xuICAgICAgdGhpcy5tZXRhLnVwZGF0ZVRhZyhcbiAgICAgICAgeyBwcm9wZXJ0eTogJ29nOnNpdGVfbmFtZScsIGNvbnRlbnQ6IFwiQ2F0YWxkb3N0b3JlIFNob3BcIn0sXG4gICAgICApO1xuICAgICAgIFxuICAgICAgICBpZih0aGlzLnByb2R1Y3Quc2V4ID09IFwiTVwiKXtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhdGVnb3JpYVwiLCBcInVvbW9cIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRlZ29yaWFcIiwgXCJkb25uYVwiKVxuICAgICAgICB9XG4gICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5XX3Byb2RuYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWU7XG4gICAgICAgIHRoaXMucHJvZElkID0gdGhpcy5wcm9kdWN0LnByb2R1Y3RJZDtcbiAgICAgICAgdGhpcy5nZXRQcm9kQnlQcm9kSWQoKTtcblxuICAgICAgICB0aGlzLmRpc2NvdW50ID0gTWF0aC5yb3VuZCggKHRoaXMucHJvZHVjdC5kaXNjb3VudC90aGlzLnByb2R1Y3QucHJpY2UpICAqIDEwMClcbiAgICAgICAgdGhpcy5rbGFybmFQcmljZSA9IE1hdGgucm91bmQoKHRoaXMucHJvZHVjdC5wcmljZSAtIHRoaXMucHJvZHVjdC5kaXNjb3VudCkvMylcblxuICAgICAgICB0aGlzLnByb2R1Y3QuYnJhbmRMb2dvID0gdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKTtcbiAgICAgICAgdGhpcy5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xuXG4gICAgICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMuYnJhbmRMb2dvKTtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgdGhpcy5icmFuZExvZ29CbG9iID0gYmFzZTY0ZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBfZ2V0U2l6ZXMoKSB7XG4gICAgdGhpcy52YXJpYW50U2VydmljZVxuICAgICAgLmdldFZhcmlhbnRzKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHZhcmlhbnRzKSA9PiB7XG4gICAgICAgIHRoaXMudmFyaWFudHMgPSB2YXJpYW50cztcblxuICAgICAgICB0aGlzLnZhcmlhbnRzLnNvcnQoKGEsIGIpID0+IGEuaW52ZW50b3J5ID4gYi5pbnZlbnRvcnkgPyAtMSA6IGEuaW52ZW50b3J5IDwgYi5pbnZlbnRvcnk/IDEgOiAwKVxuXG5cbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzID0gdGhpcy52YXJpYW50cy5maWx0ZXIoXG5cbiAgICAgICAgICAoc2l6ZSkgPT4gc2l6ZS5wcm9kdWN0ID09PSB0aGlzLmN1cnJlbnRJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb2R1Y3QudmFyaWFudHMgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHNcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzLnNvcnQoKGEsIGIpID0+IChhLnNpemUgPCBiLnNpemUgPyAtMSA6IDEpKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuZmlsdGVyZWRWYXJpYW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgaWYodGhpcy5maWx0ZXJlZFZhcmlhbnRzW2ldLmludmVudG9yeSA8PSAwKXtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5ub25FbXB0eVZhcmlhbnRzLnB1c2godGhpcy5maWx0ZXJlZFZhcmlhbnRzW2ldKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB3ZWlnaHRzID0ge1xuICAgICAgICAgICd4eHMnOjEsIFxuICAgICAgICAgICd4cyc6MiwgXG4gICAgICAgICAgJ3MnOjMsIFxuICAgICAgICAgICdtJzo0LFxuICAgICAgICAgICdsJzo1LCBcbiAgICAgICAgICAneGwnOjYsIFxuICAgICAgICAgICd4eGwnOjcsXG4gICAgICAgICAgJ3h4eGwnOjgsXG4gICAgICAgICAgJzN4bCc6OFxuICAgICAgICB9O1xuICAgICAgICBpZih0aGlzLm5vbkVtcHR5VmFyaWFudHNbMF0gIT0gbnVsbCl7XG4gICAgICAgIGlmKHRoaXMubm9uRW1wdHlWYXJpYW50c1swXS5zaXplLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJzXCIpIHx8IHRoaXMubm9uRW1wdHlWYXJpYW50c1swXS5zaXplLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJsXCIpIHx8IHRoaXMubm9uRW1wdHlWYXJpYW50c1swXS5zaXplLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJtXCIpKXtcbiAgICAgICAgICB0aGlzLm5vbkVtcHR5VmFyaWFudHMgPSB0aGlzLm5vbkVtcHR5VmFyaWFudHMuc29ydCgoYSxiKT0+d2VpZ2h0c1thLnNpemUudG9Mb3dlckNhc2UoKV0td2VpZ2h0c1tiLnNpemUudG9Mb3dlckNhc2UoKV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFxuICAgICBcblxuXG4gICAgICAgIFxuICAgICAgfSk7XG4gIH1cblxuXG5cbiAgLyoqcXVlc3RhIGZ1bnppb25lIHNlbWJyYSBzb2xvIGdlc3RpcmUgaWwgbWF4IGlucHV0ICovXG4gIHNlbGVjdFNpemUoZXZlbnQ6IGFueSwgaW5kZXgpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiZmlsdGVyZWRWYXJpYW50czogXCIgKyB0aGlzLmZpbHRlcmVkVmFyaWFudHMpO1xuXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5idXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmNsaWNrZWRTaXplID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTC5zbGljZSgwLCAtMSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImZpbHRlcmVkVmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyZWRWYXJpYW50cykpXG5cbiAgICB0aGlzLnNlbGVjdGVkU2l6ZSA9IHRoaXMuZmlsdGVyZWRWYXJpYW50cy5maWx0ZXIoKHgpID0+IHguc2l6ZSA9PT0gdGhpcy5jbGlja2VkU2l6ZSk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCBzaXplPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRTaXplKSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5ID49IDEpIHtcbiAgICAgIHRoaXMubWluSW52ID0gMTtcbiAgICAgIHRoaXMubWF4SW52ID0gdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5O1xuICAgICAgdGhpcy5xdWFudGl0eSA9IDE7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhcImltIGRvaW5nIHNvbWV0aGluZyAtPiBzZWxlY3RTaXplKClcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJvZEJ5bmFtZSgpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeUlkKHRoaXMucHJvZE5hbWUpLnN1YnNjcmliZSgocHJvZHVjdHMpID0+IHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcblxuICAgICAgdGhpcy5sZW4gPSB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMucHJvZHVjdHNbaV0pO1xuICAgICAgICB0aGlzLnNpbWFsUHJvZHVjdHMucHVzaCh0aGlzLnByb2R1Y3RzW2ldLmltYWdlKTtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgfVxuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY29sb3JzKTtcblxuICAgICBjb25zb2xlLmxvZyhcInNpbWlsYXIgcHJvZHVjdHMgPSBcIiArIHRoaXMuc2ltYWxQcm9kdWN0cylcbiAgICAgIGlmICh0aGlzLmxlbiA+PSAxKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UHJvZEJ5UHJvZElkKCkge1xuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQodGhpcy5wcm9kSWQpLnN1YnNjcmliZSgocHJvZHVjdHMpID0+IHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcblxuICAgICAgdGhpcy5sZW4gPSB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMucHJvZHVjdHNbaV0pO1xuICAgICAgICB0aGlzLnNpbWFsUHJvZHVjdHMucHVzaCh0aGlzLnByb2R1Y3RzW2ldLmltYWdlKTtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgfVxuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY29sb3JzKTtcblxuICAgICBjb25zb2xlLmxvZyhcInNpbWlsYXIgcHJvZHVjdHMgPSBcIiArIHRoaXMuc2ltYWxQcm9kdWN0cylcbiAgICAgIGlmICh0aGlzLmxlbiA+PSAxKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSggIHRoaXMucHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIiB8IENhdGFsZG9zdG9yZS5pdFwiKTtcbiAgICB9KTtcbiAgfVxuICBnZXRXUHJvZEJ5bmFtZSgpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeU5hbWUodGhpcy5XX3Byb2RuYW1lKS5zdWJzY3JpYmUoXG4gICAgICAocHJvZHVjdHMpID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XG5cbiAgICAgICAgdGhpcy5sZW4gPSB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbjsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh0aGlzLnByb2R1Y3RzW2ldKTtcbiAgICAgICAgICB0aGlzLnNpbWFsUHJvZHVjdHMucHVzaCh0aGlzLnByb2R1Y3RzW2ldLmltYWdlKTtcbiAgICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY29sb3JzKTtcblxuICAgICAgICBpZiAodGhpcy5sZW4gPiAxKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG5cblxuICB1cGRhdGVTZWxlY3RlZFNpemUoaW5kZXgpe1xuXG5cbiAgICAvL2NvbnNvbGUubG9nKFwic2l6ZSA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XSkpO1xuICAgIGxldCBzZWxlY3RlZFZhcmlhbnQgPSB0aGlzLm5vbkVtcHR5VmFyaWFudHNbaW5kZXhdO1xuICAgIGxldCBzZWxlY3RlZFZhcmlhbnRJZCA9IHRoaXMubm9uRW1wdHlWYXJpYW50c1tpbmRleF0uaWQ7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWRWYXJpYW50SWQgXCIgKyBzZWxlY3RlZFZhcmlhbnRJZCApO1xuXG4gICAgbGV0IHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgPSB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoc2VsZWN0ZWRWYXJpYW50SWQpO1xuICAgIGlmKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgIT0gbnVsbCl7XG4gICAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEpzb24oKSk7XG4gICAgdGhpcy5tYXhJbnYgPSBzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEludmVudG9yeSgpO1xuICAgIGlmKHRoaXMubWF4SW52PT09MCB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gdHJ1ZTtcbiAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIGFscmVhZHkgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRWYXJpYW50LmludmVudG9yeTtcbiAgICAgIGlmKHRoaXMubWF4SW52PT09MCAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9ICB0cnVlO1xuICAgICAgLy9jb25zb2xlLmxvZyhcInRoaXMgcHJvZHVjdCBpcyBOT1QgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICB9XG5cbiAgfVxuXG4gIGNoZWNrUXVhbnRpdHkoKXtcbiAgICBpZiggdGhpcy5xdWFudGl0eSAhPSAwKXtcbiAgICAgIHRoaXMuYnV0dG9uID0gIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5idXR0b24gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiXG5cblxuPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdmEgRmxhdCcgcmVsPSdzdHlsZXNoZWV0Jz5cbjxkaXYgY2xhc3M9XCJwcm9kdWN0LXBhZ2VcIiAqbmdJZj1cInByb2R1Y3RcIj5cbiAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtanNvbi1sZCAqbmdJZj1cImJyYW5kTmFtZVwiIFtwcm9kb3R0b109XCJwcm9kdWN0XCIgW2JyYW5kTmFtZV09XCJicmFuZE5hbWVcIiBbc2t1XT1cInRoaXMuZmlsdGVyZWRWYXJpYW50c1swXS5FQU5cIj48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtanNvbi1sZD5cbiAgXG4gIDxkaXYgY2xhc3M9XCJncmlkXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICA8ZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzIHN0eWxlPVwibWF4LXdpZHRoOjQwdndcIiAqbmdJZj1cImRpc3BsYXlTdWNjZXNzQmFubmVyXCI+PC9lZXNob3AtZnJvbnRlbmQtbWVzc2FnZXM+XG5cbiAgICA8IS0tXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmctc21cIj5cbiAgICAgICAgICAgIDxwLXJhdGluZyBbKG5nTW9kZWwpXT1cInByb2R1Y3QucmF0aW5nXCIgW2Rpc2FibGVkXT1cInRydWVcIiBbY2FuY2VsXT1cImZhbHNlXCI+PC9wLXJhdGluZz5cbiAgICAgICAgPC9kaXY+IC0tPlxuICAgIFxuXG4gICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNCBjb2wtbGctYXV0byBnYWxsZXJ5IG0tMCBwLTBcIj5cbiAgICAgIDx1aS1nYWxsZXJ5ICBbaW1hZ2VzXT1cInByb2R1Y3QuaW1hZ2VzXCIgW2ltYWdlXT1cInByb2R1Y3QuaW1hZ2VcIiBbcHJvZHVjdF09XCJwcm9kdWN0XCIgPjwvdWktZ2FsbGVyeT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC01IGNvbC1sZy0zIGNvbC14bC00IHByb2R1Y3RcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjthbGlnbi1pdGVtczogZW5kO3BhZGRpbmc6MWVtOyBsaW5lLWhlaWdodDoxLjVlbTtcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6NjAwXCI+PGgxPnt7cHJvZHVjdC5uYW1lfX08L2gxPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgIGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA3MDA7XCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInByb2R1Y3QuZGlzY291bnQgIT0gMFwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiAgbGluZS10aHJvdWdoOyBmb250LXdlaWdodDogMTAwOyBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XCI+Jm5ic3A7IHt7cHJvZHVjdC5wcmljZX19IOKCrCA8L3NwYW4+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGJsYWNrO1wiPiB7e3Byb2R1Y3QucHJpY2UgLSBwcm9kdWN0LmRpc2NvdW50fX0g4oKsPC9zcGFuPiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCIgc3R5bGU9XCIgICAgIGhlaWdodDogMjBweDtmb250LXdlaWdodDogbGlnaHRlcjsgZm9udC1zaXplOiBzbWFsbDsgY29sb3I6IHJnYigxNDMsIDE0MywgMTQzKTtcIj48cD5Db2RpY2U6ICB7e3RoaXMucHJvZHVjdC5wcm9kdWN0SWR9fTwvcD48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cIiAgICAgaGVpZ2h0OiAyMHB4O2ZvbnQtd2VpZ2h0OiBsaWdodGVyOyBmb250LXNpemU6IHNtYWxsOyBjb2xvcjogcmdiKDE0MywgMTQzLCAxNDMpO1wiPjxwPkJyYW5kOiB7e3RoaXMuYnJhbmROYW1lfX08L3A+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCIgc3R5bGU9XCIgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IGZvbnQtc2l6ZTogc21hbGw7IGNvbG9yOiByZ2IoMTQzLCAxNDMsIDE0Myk7XCI+VmFyaWFudGk8L2Rpdj5cbiAgICAgICAgPGVzaG9wLWZyb250ZW5kLWNhcm91c2VsICBbaW1hZ2VzXT1cInByb2R1Y3RzXCIgc3R5bGU9XCIgb3ZlcmZsb3cteDogYXV0bztcIj48L2VzaG9wLWZyb250ZW5kLWNhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgICBcblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgc3R5bGU9XCIgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IGZvbnQtc2l6ZTogc21hbGw7IGNvbG9yOiByZ2IoMTQzLCAxNDMsIDE0Myk7IHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XCI+VGFnbGlhPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IG92ZXJmbG93LXg6YXV0b1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiAgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiBmLnNpemUgPT09IGNsaWNrZWRTaXplfVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBtLTIgXCIgc3R5bGU9XCJtYXgtd2lkdGg6Zml0LWNvbnRlbnQ7IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcIiBbZGlzYWJsZWRdPVwiZi5hdmFpbGFibGU/IGZhbHNlIDogdHJ1ZVwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBub25FbXB0eVZhcmlhbnRzLCBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdFNpemUoJGV2ZW50KVwiXG4gICAgICAgICAgICAoY2xpY2spPVwidXBkYXRlU2VsZWN0ZWRTaXplKGkpXCIgPnt7Zi5zaXplfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cIiBmb250LXdlaWdodDogbGlnaHRlcjsgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogcmdiKDE2NSwgMTY1LCAxNjUpO1wiPlxuXG4gICAgICAgICAgICA8YSBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjsgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1wiPkd1aWRhIGFsbGUgdGFnbGllPC9hPlxuICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGxhYmVsPVwiQWRkIHRvIGNhcnRcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgYm9yZGVyLXJhZGl1czogMDtcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImFkZFByb2R1Y3RUb0NhcnQoKVwiPlxuICAgICAgICAgICAgQUdHSVVOR0kgQUwgQ0FSUkVMTE9cbiAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiIHN0eWxlPVwiZm9udC1zaXplOiAxMHB4O1wiPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCIgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxMHB4OyBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1wiPlBhZ2EgaW4gMyByYXRlIGRhIHt7dGhpcy5rbGFybmFQcmljZX19IOKCrCBzZW56YSBpbnRlcmVzc2kgY29uICAgICZuYnNwOzwvc3Bhbj4gPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogNzAwO1wiPktsYXJuYTwvc3Bhbj4gICAmbmJzcDs8YSBzdHlsZT1cIiBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDEwcHg7IHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7IGN1cnNvcjogcG9pbnRlcjsgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1wiPlNjb3ByaSBkaSBwacO5PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICAgICAgIFxuICAgICAgICAgIDxwLWFjY29yZGlvbiA+XG4gICAgICAgICAgICA8cC1hY2NvcmRpb25UYWIgaGVhZGVyPVwiREVTQ1JJWklPTkVcIiBbc2VsZWN0ZWRdPVwidHJ1ZVwiIHN0eWxlPVwiIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cInByb2R1Y3QuZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvcC1hY2NvcmRpb25UYWI+XG4gICAgICAgICAgICA8cC1hY2NvcmRpb25UYWIgaGVhZGVyPVwiTUFURVJJQUxJIEUgQ1VSQVwiPlxuICAgICAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwicC5tYXRlcmlhbGlcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvcC1hY2NvcmRpb25UYWI+XG4gICAgXG4gICAgICAgIDwvcC1hY2NvcmRpb24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgXG5cbiAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDpjZW50ZXI7XCI+XG4gICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgcHJvZG90dGlDb3JyZWxhdGlUZXh0XCIgc3R5bGU9XCJib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiAycHg7XCI+XG4gICAgICBQcm9kb3R0aSBjb3JyZWxhdGlcbiAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIHByLTAgcGwtMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OmNlbnRlcjtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLWwtOSBwLTBcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XCI+XG5cbiAgICAgICAgPGVzaG9wLWZyb250ZW5kLWZlYXR1cmVkLXByb2R1Y3RzIFticmFuZE5hbWVdPVwicHJvZHVjdC5icmFuZFwiICBbbWF4Q29tcG9uZW50V2lkdGhdPVwiMTIwMFwiIFtmZWF0dXJlZFNleF09XCJwcm9kdWN0LnNleFwiPjwvZXNob3AtZnJvbnRlbmQtZmVhdHVyZWQtcHJvZHVjdHM+XG4gICAgXG4gICAgPC9kaXY+XG4gICAgICBcbiAgICAgPC9kaXY+XG4gICBcbiAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG4iXX0=