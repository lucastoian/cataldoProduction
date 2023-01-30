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
    i0.ɵɵproperty("prodotto", ctx_r1.product)("brandName", ctx_r1.brandName);
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
    i0.ɵɵtemplate(1, ProductPageComponent_div_1_eshop_frontend_product_json_ld_1_Template, 1, 2, "eshop-frontend-product-json-ld", 3);
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
            this.filteredVariants = this.variants.filter((size) => size.product === this.currentId);
            this.filteredVariants.sort((a, b) => (a.size < b.size ? -1 : 1));
            for (let i = 0; i < this.filteredVariants.length; i++) {
                if (this.filteredVariants[i].inventory == 0) {
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
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 2, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Nova Flat", "rel", "stylesheet"], ["class", "product-page", 4, "ngIf"], [1, "product-page"], [3, "prodotto", "brandName", 4, "ngIf"], [1, "grid", 2, "justify-content", "center"], ["style", "max-width:40vw", 4, "ngIf"], [1, "row", "w-100", 2, "justify-content", "center"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-auto", "gallery", "m-0", "p-0"], [3, "images", "image", "product"], [1, "col-12", "col-sm-12", "col-md-5", "col-lg-3", "col-xl-4", "product", 2, "display", "flex", "flex-direction", "column", "align-items", "end", "padding", "1em", "line-height", "1.5em"], [1, "row", "w-100"], [1, "col-auto", 2, "font-size", "24px", "font-weight", "600"], [1, "col-auto"], [1, "col-auto", 2, "font-weight", "700"], ["style", "text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);", 4, "ngIf"], [2, "color", "black"], [1, "col-auto", 2, "height", "20px", "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)"], [1, "col-auto", 2, "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)"], [2, "overflow-x", "auto", 3, "images"], [1, "col-12", 2, "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)", "padding-bottom", "0 !important"], [1, "col-12", "p-0"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", 2, "max-width", "100%", "overflow-x", "auto"], ["class", "btn btn-sm m-2 ", "style", "max-width:fit-content; font-weight: 700; margin-top: 0 !important; margin-left: 0 !important;", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "col-auto", 2, "font-weight", "lighter", "font-size", "10px", "color", "rgb(165, 165, 165)"], [2, "cursor", "pointer", "text-decoration", "underline"], [1, "col-12"], ["type", "button", "label", "Add to cart", 1, "btn", "btn-secondary", 2, "width", "100%", "border-radius", "0", 3, "disabled", "click"], [1, "col-auto", 2, "font-size", "10px"], [2, "font-weight", "600", "font-size", "10px", "padding-bottom", "0 !important"], [2, "font-weight", "700"], [2, "font-weight", "600", "font-size", "10px", "padding-bottom", "0 !important", "cursor", "pointer", "text-decoration", "underline"], ["header", "DESCRIZIONE", 2, "box-shadow", "none !important", 3, "selected"], [3, "innerHTML"], ["header", "MATERIALI E CURA"], [1, "row", 2, "justify-content", "center"], [1, "col-10", "prodottiCorrelatiText", 2, "border-bottom", "3px solid black", "font-weight", "600", "letter-spacing", "2px"], [1, "row", "w-100", "pr-0", "pl-0", 2, "justify-content", "center"], [1, "col-12", "col-l-9", "p-0", 2, "padding-top", "20px !important"], [3, "brandName", "maxComponentWidth", "featuredSex"], [3, "prodotto", "brandName"], [2, "max-width", "40vw"], [2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(255, 0, 0)"], [1, "btn", "btn-sm", "m-2", 2, "max-width", "fit-content", "font-weight", "700", "margin-top", "0 !important", "margin-left", "0 !important", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵtemplate(1, ProductPageComponent_div_1_Template, 65, 20, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, dependencies: [i8.NgClass, i8.NgForOf, i8.NgIf, i9.GalleryComponent, i9.CarouselComponent, i10.Accordion, i10.AccordionTab, i11.FeaturedProductsComponent, i12.ProductJsonLdComponent], styles: [".btn.btn-secondary[disabled][_ngcontent-%COMP%]{background-color:#cecece}.selected[_ngcontent-%COMP%]{border:1px solid black!important}.prodottiCorrelatiText[_ngcontent-%COMP%]{font-size:30px;padding-top:40px}  .p-element{padding:0!important}  .p-accordion .p-accordion-header .p-accordion-header-link:focus{box-shadow:none!important}  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{background:#ffffff!important;border-color:#434343!important;color:#495057;border:none!important;border-bottom-right-radius:0;border-bottom-left-radius:0}  .p-accordion-header{border-top:1px solid rgb(168,168,168)!important}  .p-accordion-content{border:none!important}  .p-accordion .p-accordion-header .p-accordion-header-link{padding:1rem;color:#495057;background:#ffffff!important;border-color:#fff!important;border:none!important;font-weight:600;transition:box-shadow .2s}@media screen and (max-width: 993px){.prodottiCorrelatiText[_ngcontent-%COMP%]{font-size:24px;padding-top:4px}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', template: "\n\n\n<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\n<div class=\"product-page\" *ngIf=\"product\">\n  <eshop-frontend-product-json-ld *ngIf=\"brandName\" [prodotto]=\"product\" [brandName]=\"brandName\"></eshop-frontend-product-json-ld>\n  \n  <div class=\"grid\" style=\"justify-content: center;\">\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\n\n    <!--\n        <div class=\"rating-sm\">\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\n        </div> -->\n    \n\n    <div class=\"row w-100\" style=\"justify-content: center\">\n    <div class=\"col-12 col-sm-12 col-md-4 col-lg-auto gallery m-0 p-0\">\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\" ></ui-gallery>\n    </div>\n\n    <div class=\"col-12 col-sm-12 col-md-5 col-lg-3 col-xl-4 product\" style=\"display: flex;flex-direction: column;align-items: end;padding:1em; line-height:1.5em;\">\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\"font-size: 24px; font-weight:600\"><h1>{{product.name}}</h1></div>\n      </div>\n  \n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\">\n          <div  class=\"col-auto\" style=\"font-weight: 700;\">\n            <span *ngIf=\"product.discount != 0\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);\">&nbsp; {{product.price}} \u20AC </span>\n            &nbsp;\n            <span style=\"color: black;\"> {{product.price - product.discount}} \u20AC</span> \n          </div>\n        </div>\n      </div>\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\"     height: 20px;font-weight: lighter; font-size: small; color: rgb(143, 143, 143);\"><p>Codice:  {{this.product.productId}}</p></div>\n      </div>\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\"     height: 20px;font-weight: lighter; font-size: small; color: rgb(143, 143, 143);\"><p>Brand: {{this.brandName}}</p></div>\n      </div>\n\n\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\" font-weight: lighter; font-size: small; color: rgb(143, 143, 143);\">Varianti</div>\n        <eshop-frontend-carousel  [images]=\"products\" style=\" overflow-x: auto;\"></eshop-frontend-carousel>\n      </div>\n      \n\n      <div class=\"row w-100\">\n        <div class=\"col-12\" style=\" font-weight: lighter; font-size: small; color: rgb(143, 143, 143); padding-bottom: 0 !important;\">Taglia</div>\n        <div class=\"col-12 p-0\">\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\" style=\"max-width: 100%; overflow-x:auto\">\n            <button  [ngClass]=\"{selected: f.size === clickedSize}\" class=\"btn btn-sm m-2 \" style=\"max-width:fit-content; font-weight: 700; margin-top: 0 !important; margin-left: 0 !important;\" [disabled]=\"f.available? false : true\"\n            *ngFor=\"let f of nonEmptyVariants, let i = index\" (click)=\"selectSize($event)\"\n            (click)=\"updateSelectedSize(i)\" >{{f.size}}\n            </button>            \n          </div>\n  \n        </div>\n        \n        <div class=\"col-auto\" style=\" font-weight: lighter; font-size: 10px; color: rgb(165, 165, 165);\">\n\n            <a style=\"cursor: pointer;  text-decoration: underline;\">Guida alle taglie</a>\n      \n        </div>\n\n        <div class=\"row w-100\">\n          <div class=\"col-12\">\n     \n            <button [disabled]=\"button\" type=\"button\" label=\"Add to cart\" class=\"btn btn-secondary\" style=\"width: 100%; border-radius: 0;\"\n            (click)=\"addProductToCart()\">\n            AGGIUNGI AL CARRELLO\n           </button>\n          </div>\n        </div>\n\n        <div class=\"row w-100\" style=\"justify-content: center;\">\n          <div class=\"col-auto\" style=\"font-size: 10px;\">\n            <span style=\" font-weight: 600; font-size: 10px; padding-bottom: 0 !important;\">Paga in 3 rate da {{this.klarnaPrice}} \u20AC senza interessi con    &nbsp;</span> <span style=\"font-weight: 700;\">Klarna</span>   &nbsp;<a style=\" font-weight: 600; font-size: 10px; padding-bottom: 0 !important; cursor: pointer;  text-decoration: underline;\">Scopri di pi\u00F9</a>\n          </div>\n        </div>\n\n\n\n        <div class=\"row w-100\">\n             \n          <p-accordion >\n            <p-accordionTab header=\"DESCRIZIONE\" [selected]=\"true\" style=\" box-shadow: none !important;\">\n              <div [innerHTML]=\"product.description\"></div>\n            </p-accordionTab>\n            <p-accordionTab header=\"MATERIALI E CURA\">\n              <div [innerHTML]=\"p.materiali\"></div>\n            </p-accordionTab>\n    \n        </p-accordion>\n        </div>\n\n      </div>\n\n      \n\n    </div>\n            \n    <div class=\"row\" style=\"justify-content:center;\">\n     <div class=\"col-10 prodottiCorrelatiText\" style=\"border-bottom: 3px solid black; font-weight: 600; letter-spacing: 2px;\">\n      Prodotti correlati\n     </div>\n\n    </div>\n                \n    <div class=\"row w-100 pr-0 pl-0\" style=\"justify-content:center;\">\n      <div class=\"col-12 col-l-9 p-0\" style=\"padding-top: 20px !important;\">\n\n        <eshop-frontend-featured-products [brandName]=\"product.brand\"  [maxComponentWidth]=\"1200\" [featuredSex]=\"product.sex\"></eshop-frontend-featured-products>\n    \n    </div>\n      \n     </div>\n   \n  </div>\n\n  </div>\n</div>\n\n\n", styles: [".btn.btn-secondary[disabled]{background-color:#cecece}.selected{border:1px solid black!important}.prodottiCorrelatiText{font-size:30px;padding-top:40px}::ng-deep .p-element{padding:0!important}::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link:focus{box-shadow:none!important}::ng-deep .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{background:#ffffff!important;border-color:#434343!important;color:#495057;border:none!important;border-bottom-right-radius:0;border-bottom-left-radius:0}::ng-deep .p-accordion-header{border-top:1px solid rgb(168,168,168)!important}::ng-deep .p-accordion-content{border:none!important}::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link{padding:1rem;color:#495057;background:#ffffff!important;border-color:#fff!important;border:none!important;font-weight:600;transition:box-shadow .2s}@media screen and (max-width: 993px){.prodottiCorrelatiText{font-size:24px;padding-top:4px}}\n"] }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }, { type: i3.CartService }, { type: i4.VariantsService }, { type: i5.Title }, { type: i5.Meta }, { type: i6.MessageService }, { type: i7.BrandsService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekQsOERBQThEO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFRLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBT3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNoQjdELHFEQUFnSTs7O0lBQTlFLHlDQUFvQiwrQkFBQTs7O0lBR3BFLCtDQUF5Rzs7O0lBdUJqRyxnQ0FBcUg7SUFBQSxZQUEyQjtJQUFBLGlCQUFPOzs7SUFBbEMsZUFBMkI7SUFB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SUFBRyxzQkFBc0IsSUFBSSxJQUFJLEVBQUM7WUFDbEMsZ0RBQWdEO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEQsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0Qsd0ZBQXdGO1NBQ3ZGO2FBQUk7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDeEMsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFHLENBQUMsSUFBSyxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUM7WUFDL0Qsb0ZBQW9GO1NBQ3JGO0lBRUgsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUksS0FBSyxDQUFDO1NBQ3RCO2FBQUk7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7O3dGQWhlVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQzFCakMsMEJBQWdGO1FBQ2hGLHVFQTBITTs7UUExSHFCLGVBQWE7UUFBYixrQ0FBYTs7dUZEeUIzQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuXG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IFByb2R1Y3RMdWNhIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXNcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7VGl0bGUsIE1ldGF9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENhcnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XG5pbXBvcnQgeyBWYXJpYW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ZhcmlhbnQnO1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IFdfUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy93LXByb2R1Y3QnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBXX1Byb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBWYXJpYW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92YXJpYW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEJyYW5kc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9icmFuZHMuc2VydmljZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LXBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY2xpY2tlZFNpemUgOiBTdHJpbmc7XG4gIHZhcmlhbnQ6IFZhcmlhbnQ7XG4gIHZhcmlhbnRzOiBWYXJpYW50W10gPSBbXTtcbiAgZmlsdGVyZWRWYXJpYW50czogVmFyaWFudFtdID0gW107XG4gIG5vbkVtcHR5VmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xuICBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuICBrbGFybmFQcmljZSA9IDA7XG4gIFdfcHJvZHVjdDogV19Qcm9kdWN0O1xuICBwcm9kTmFtZSA9ICcnO1xuICBwcm9kSWQgPSAnJztcbiAgV19wcm9kbmFtZSA9ICcnO1xuICBtZW5Qcm9kID0gdHJ1ZTtcbiAgd1Byb2QgPSBmYWxzZTtcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBsZW46IG51bWJlcjtcbiAgY29sb3JzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgc2ltYWxQcm9kdWN0czogc3RyaW5nW10gPSBbXTtcbiAgbXVsdGlwbGVDb2xvcnM6IGJvb2xlYW47XG4gIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBxdWFudGl0eSA9IDA7XG4gIGN1cnJlbnRJZDtcbiAgZGlzcGxheVN1Y2Nlc3NCYW5uZXIgPSBmYWxzZTtcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgYnV0dG9uID0gdHJ1ZTtcbiAgc2VsZWN0ZWRTaXplOiBWYXJpYW50W10gPSBbXTtcbiAgYXZhaWxhYmlsaXR5OiBhbnlbXSA9IFtdO1xuICBhdmFpbGFibGU6IGJvb2xlYW47XG4gIG1pbkludjogbnVtYmVyO1xuICBtYXhJbnY6IG51bWJlcjtcbiAgdXJsO1xuICBkaXNjb3VudCA9IDA7XG4gIHA6IFByb2R1Y3RMdWNhO1xuICBicmFuZExvZ28gOiBzdHJpbmc7XG4gIGJyYW5kTWFwID0gbmV3IE1hcDxzdHJpbmcsc3RyaW5nPigpOyBcbiAgYnJhbmRMb2dvQmxvYjtcbiAgYnJhbmROYW1lOlN0cmluZztcbiAgcHJpdmF0ZSBjYXJ0IDogQ2FydFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB2YXJpYW50U2VydmljZTogVmFyaWFudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOlRpdGxlLFxuICAgIHByaXZhdGUgbWV0YTogTWV0YSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGJyYW5kU2VydmljZTogQnJhbmRzU2VydmljZSxcblxuXG5cbiAgKSB7ICAgICB0aGlzLnAgPSBuZXcgUHJvZHVjdEx1Y2EoKVxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxM2M3ODg5MzA5ZGU5NjAxODBkYTRhXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9ibGF1ZXIucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjODllOTMwOWRlOTYwMTgwZGE0ZFwiLCBcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL29sZHJpdmVyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxNjdiZDFjYmE4YTFlMGQ5YzFhZjg4XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9jb2xtYXIucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWVmZTFkNjIzODZjYzIyNTI1YjZcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2VhNy5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmMWUxZDYyMzg2Y2MyMjUyNWI5XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9mcmVkcGVycnkucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWYzNzFkNjIzODZjYzIyNTI1YmNcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2t3YXkucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjQ4MWQ2MjM4NmNjMjI1MjViZlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vbGFjb3N0ZS5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmN2QxZDYyMzg2Y2MyMjUyNWMyXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9tdXJwaHkucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWY5ODFkNjIzODZjYzIyNTI1YzVcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL3Blbmluc3VsYS5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmYWQxZDYyMzg2Y2MyMjUyNWM4XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9zYXVjb255LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmYmIxZDYyMzg2Y2MyMjUyNWNiXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9zdW5kZWsucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzJlMDVmM2I4YzU2N2RlNWVhODM2NjlcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2JhcmJvdXIucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzZiNTdlMjUwNmJhNjVlNTkzYmFhODFcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL1NjcmVlbnNob3QucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjM2YjU3ZjM1MDZiYTY1ZTU5M2JhYTg0XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzZiNTgwNjUwNmJhNjVlNTkzYmFhODdcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL1NjcmVlbnNob3QucG5nXCIpO1xuXG5cbiAgICB0aGlzLmNhcnQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICB0aGlzLmF2YWlsYWJsZSA9IHRydWU7XG5cblxuXG5cbiAgICAvL2NvbnNvbGUubG9nKFwiY2FydCA9IFwiICsgdGhpcy5jYXJ0LmdldEpzb24oKSk7XG5cblxuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XG5cblxuICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5wcm9kdWN0SWQpIHtcbiAgICAgICAvLyAgIHRoaXMuX2dldFByb2R1Y3QocGFyYW1zLnByb2R1Y3RJZCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMucHJvZHVjdElkO1xuICAgICAgIFxuICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7XG4gICAgICAgICAgLy8gdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lXG4gICAgICAgICAgLy8vLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuLy8gICAgICBcbiBcblxuLy9cbiAgICB0aGlzLnAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcbiAgICB0aGlzLl9nZXRQcm9kdWN0MigpLnRoZW4oXG4gICAgIGRhdGEgPT57XG4gICAgICAgdGhpcy5wID0gZGF0YTtcbiAgICAgfVxuICAgICApLmNhdGNoKCBlcnJvciA9PntcbiAgICAgICB0aGlzLnAgPSBudWxsO1xuICAgICB9KTtcbiAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIGlmIChwYXJhbXMucHJvZHVjdElkKSB7XG4gICAgICAgIHRoaXMuX2dldFdwcm9kdWN0KHBhcmFtcy5wcm9kdWN0SWQpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5wcm9kdWN0SWQ7XG4gICAgICAgIHRoaXMuX2dldFNpemVzKCk7XG5cblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicHJvZHVjdD0gXCIgKyB0aGlzLnByb2R1Y3QpO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xuICAgICAgICAvLyB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWVcbiAgICAgICAgLy8vLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZE5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5lbmRTdWJzJC5jb21wbGV0ZSgpO1xuICB9XG5cblxuICBcblxuICBhc3luYyBhamF4R2V0SW1hZ2VEYXRhKHVybCkge1xuICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcbiAgICBjb25zdCBpbWFnZUJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgcmV0dXJuIGltYWdlQmxvYjtcblxuXG4gIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xuXG59XG4gIC8qKlxuICAgKiBTZSBpbCBwcm9kb3R0byBlc2lzdGUgZ2nDoCwgYWdnaXVuZ28gdW5hIHZhcmlhbnRzLCBzZW5ubyBhZ2dpdW5nbyB1biBudW92byBwcm9kb3R0byBjb24gbGEgc3VhIHZhcmlhbnRzXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhZGRQcm9kdWN0VG9DYXJ0KCkge1xuXG4gICAgaWYodGhpcy5xdWFudGl0eSAhPSAwKSB7XG5cbiAgIGxldCBwVmFyaWFudCA9IG5ldyBQcm9kdWN0VmFyaWFudCh0aGlzLnNlbGVjdGVkU2l6ZVswXS5pZCwgdGhpcy5zZWxlY3RlZFNpemVbMF0uc2l6ZSwgdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5LCAwLCBTdHJpbmcodGhpcy5zZWxlY3RlZFNpemVbMF0uYmFyY29kZSkpO1xuXG5cbiAgICAgIGlmKHRoaXMuY2FydC5jb250YWluc1Byb2R1Y3QodGhpcy5wKSl7XG4gICBcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNhcnQuZ2V0UHJvZHVjdEluZGV4KHRoaXMucCk7XG4gICAgICAgIFxuICAgICAgICAgIGxldCBwcm9kdWN0ID0gdGhpcy5jYXJ0LmdldFByb2R1Y3QoaW5kZXgpO1xuICAgXG4gICAgICAgICAgcHJvZHVjdC5hZGRWYXJpYW50KHBWYXJpYW50LCB0aGlzLnF1YW50aXR5KTtcblxuICAgICAvLyAgICAgdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5IC09IHByb2R1Y3QuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcbiAgICAgICAgICB0aGlzLnAgPSBwcm9kdWN0O1xuICAgICAgICAgIHRoaXMubWF4SW52ID0gIHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRJbnZlbnRvcnkoKTtcblxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpIGhhdmUgc2V0IHRoZSBtYXhJbnYgdG86IFwiICsgdGhpcy5tYXhJbnYpO1xuICAgICAgICAgIGlmKHRoaXMubWF4SW52IDw9IDApe1xuICAgICAgICAgICAgdGhpcy5taW5JbnYgPSAwO1xuICAgICAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICAgIHRoaXMuY2FydC51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICB0aGlzLmNoZWNrUXVhbnRpdHkoKTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2Nlc3NvJyxcbiAgICAgICAgICAgIGRldGFpbDogYEwnYXJ0aWNvbG8gw6ggc3RhdG8gYWdnaXVudG8gYWwgY2FycmVsbG8hYFxuICAgICAgICAgIH0pO1xuXG5cbiAgICAgIH1lbHNle1xuICAgICAgXG4gICAgICAgIHRoaXMucC5hZGRWYXJpYW50KHBWYXJpYW50LCB0aGlzLnF1YW50aXR5KTtcbiAgICAgICAvLyB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnkgLT0gdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldFNlbGVjdGVkKCk7XG4gICAgICAgIHRoaXMubWF4SW52ID0gIHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRJbnZlbnRvcnkoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImkgaGF2ZSBzZXQgdGhlIG1heEludiB0bzogXCIgKyB0aGlzLm1heEludik7XG4gICAgICAgIGlmKHRoaXMubWF4SW52IDw9IDApe1xuICAgICAgICAgIHRoaXMubWluSW52ID0gMDtcbiAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAgdGhpcy5jYXJ0LmFkZFByb2R1Y3RMdWNhKHRoaXMucCk7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFudGl0eSgpO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2Nlc3NvJyxcbiAgICAgICAgICAgIGRldGFpbDogYEwnYXJ0aWNvbG8gw6ggc3RhdG8gYWdnaXVudG8gYWwgY2FycmVsbG8hYFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBfZ2V0UHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZVxuICAgICAgLmdldFByb2R1Y3QoaWQpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXNQcm9kdWN0KSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc1Byb2R1Y3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdCBjb2xvcj8gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3QpKTtcbiAgICAgICAgdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lO1xuICAgICAgICB0aGlzLnByb2RJZCA9IHRoaXMucHJvZHVjdC5wcm9kdWN0SWQ7XG4gICAgICAgIHRoaXMucHJvZHVjdC5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xuICAgICAgICB0aGlzLmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnJhbmQgbG9nbyA9IFwiICsgdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKSApXG4gICAgICAgIHRoaXMuZ2V0UHJvZEJ5UHJvZElkKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyByZXN0aXR1aXNjZSBpbCBwcm9kb3R0byBkZWxsYSBwYWdpbmFcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX2dldFByb2R1Y3QyKCkge1xuXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxQcm9kdWN0THVjYT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5wcm9kU2VydmljZVxuICAgICAgLmdldFByb2R1Y3QodGhpcy5jdXJyZW50SWQpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXNQcm9kdWN0KSA9PiB7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhcInJlcyBwcm9kdWN0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc1Byb2R1Y3QpKTtcbiAgICAgICAgbGV0IHAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcbiAgICAgICAgcC5zZXRJZChyZXNQcm9kdWN0LmlkKTtcbiAgICAgICAgcC5zZXREaXNjb3VudChyZXNQcm9kdWN0LmRpc2NvdW50KTtcbiAgICAgICAgcC5zZXRQcmljZShyZXNQcm9kdWN0LnByaWNlKTtcbiAgICAgICAgcC5zZXRUaGVNYWluSW1hZ2UocmVzUHJvZHVjdC5pbWFnZSk7XG4gICAgICAgIHAuc2V0TmFtZShyZXNQcm9kdWN0Lm5hbWUpO1xuICAgICAgICBwLm1hdGVyaWFsaSA9IHJlc1Byb2R1Y3QubWF0ZXJpYWxpO1xuXG4gICAgICAgIHJlc29sdmUocCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCBkYXRhID0gYXdhaXQgcHJvbWlzZTtcbiAgICByZXR1cm4gZGF0YTtcblxuXG4gIH1cblxuICBwcml2YXRlIF9nZXRXcHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0KGlkKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZShhc3luYyAocmVzUHJvZHVjdCkgPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNQcm9kdWN0O1xuXG4gICAgICAgIHRoaXMuYnJhbmRTZXJ2aWNlLmdldEJyYW5kKHRoaXMucHJvZHVjdC5icmFuZCkuc3Vic2NyaWJlKChkYXRhKSA9PntcbiAgICAgICAgICB0aGlzLmJyYW5kTmFtZT1kYXRhLm5hbWU7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJicmFuZCBuYW1lID0gXCIgKyB0aGlzLmJyYW5kTmFtZSlcbiAgICAgICAgICB0aGlzLnByb2R1Y3QuYnJhbmROYW1lID0gdGhpcy5icmFuZE5hbWU7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5tZXRhLnVwZGF0ZVRhZyh7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IHRoaXMucHJvZHVjdC5uYW1lICsnIHwgYSBzb2xpIDogJyArIHRoaXMucHJvZHVjdC5kaXNjb3VudCArICfigqwgJyArIHRoaXMucHJvZHVjdC5wcm9kdWN0SWQgfSlcblxuICAgICAgdGhpcy5tZXRhLnVwZGF0ZVRhZyhcbiAgICAgICAgeyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogIHRoaXMucHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIiB8IENhdGFsZG9zdG9yZS5pdFwiIH0sXG4gICAgICApO1xuICAgICAgdGhpcy5tZXRhLnVwZGF0ZVRhZyhcbiAgICAgICAgeyBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogdGhpcy5wcm9kdWN0Lm5hbWUgKycgfCBhIHNvbGkgOiAnICsgdGhpcy5wcm9kdWN0LmRpc2NvdW50ICsgJ+KCrCAnICsgdGhpcy5wcm9kdWN0LnByb2R1Y3RJZCB9LFxuICAgICAgKTtcbiAgICAgIHRoaXMubWV0YS51cGRhdGVUYWcoXG4gICAgICAgIHsgcHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6IHRoaXMucHJvZHVjdC5pbWFnZX0sXG4gICAgICApO1xuICAgICAgdGhpcy5tZXRhLnVwZGF0ZVRhZyhcbiAgICAgICAgeyBwcm9wZXJ0eTogJ29nOnNpdGUnLCBjb250ZW50OiBcImh0dHBzOi8vd3d3LmNhdGFsZG9zdG9yZS5pdFwifSxcbiAgICAgICk7XG4gICAgICB0aGlzLm1ldGEudXBkYXRlVGFnKFxuICAgICAgICB7IHByb3BlcnR5OiAnb2c6dHlwZScsIGNvbnRlbnQ6IFwiQ2F0YWxkb3N0b3JlOnByb2R1Y3RcIn0sXG4gICAgICApO1xuICAgICAgdGhpcy5tZXRhLnVwZGF0ZVRhZyhcbiAgICAgICAgeyBwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6IFwiL3Byb2R1Y3RzL1wiICsgdGhpcy5wcm9kdWN0LmlkfSxcbiAgICAgICk7XG4gICAgICB0aGlzLm1ldGEudXBkYXRlVGFnKFxuICAgICAgICB7IHByb3BlcnR5OiAnb2c6c2l0ZV9uYW1lJywgY29udGVudDogXCJDYXRhbGRvc3RvcmUgU2hvcFwifSxcbiAgICAgICk7XG4gICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvZHVjdC5zZXggPT0gXCJNXCIpe1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcmlhXCIsIFwidW9tb1wiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhdGVnb3JpYVwiLCBcImRvbm5hXCIpXG4gICAgICAgIH1cbiAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLldfcHJvZG5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZTtcbiAgICAgICAgdGhpcy5wcm9kSWQgPSB0aGlzLnByb2R1Y3QucHJvZHVjdElkO1xuICAgICAgICB0aGlzLmdldFByb2RCeVByb2RJZCgpO1xuXG4gICAgICAgIHRoaXMuZGlzY291bnQgPSBNYXRoLnJvdW5kKCAodGhpcy5wcm9kdWN0LmRpc2NvdW50L3RoaXMucHJvZHVjdC5wcmljZSkgICogMTAwKVxuICAgICAgICB0aGlzLmtsYXJuYVByaWNlID0gTWF0aC5yb3VuZCgodGhpcy5wcm9kdWN0LnByaWNlIC0gdGhpcy5wcm9kdWN0LmRpc2NvdW50KS8zKVxuXG4gICAgICAgIHRoaXMucHJvZHVjdC5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xuICAgICAgICB0aGlzLmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XG5cbiAgICAgICAgbGV0IGJsb2IgPSBhd2FpdCB0aGlzLmFqYXhHZXRJbWFnZURhdGEodGhpcy5icmFuZExvZ28pO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICB0aGlzLmJyYW5kTG9nb0Jsb2IgPSBiYXNlNjRkYXRhO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIF9nZXRTaXplcygpIHtcbiAgICB0aGlzLnZhcmlhbnRTZXJ2aWNlXG4gICAgICAuZ2V0VmFyaWFudHMoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZSgodmFyaWFudHMpID0+IHtcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xuXG5cbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzID0gdGhpcy52YXJpYW50cy5maWx0ZXIoXG4gICAgICAgICAgKHNpemUpID0+IHNpemUucHJvZHVjdCA9PT0gdGhpcy5jdXJyZW50SWRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzLnNvcnQoKGEsIGIpID0+IChhLnNpemUgPCBiLnNpemUgPyAtMSA6IDEpKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuZmlsdGVyZWRWYXJpYW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgaWYodGhpcy5maWx0ZXJlZFZhcmlhbnRzW2ldLmludmVudG9yeSA9PSAwKXtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5ub25FbXB0eVZhcmlhbnRzLnB1c2godGhpcy5maWx0ZXJlZFZhcmlhbnRzW2ldKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB3ZWlnaHRzID0ge1xuICAgICAgICAgICd4eHMnOjEsIFxuICAgICAgICAgICd4cyc6MiwgXG4gICAgICAgICAgJ3MnOjMsIFxuICAgICAgICAgICdtJzo0LFxuICAgICAgICAgICdsJzo1LCBcbiAgICAgICAgICAneGwnOjYsIFxuICAgICAgICAgICd4eGwnOjcsXG4gICAgICAgICAgJ3h4eGwnOjgsXG4gICAgICAgICAgJzN4bCc6OFxuICAgICAgICB9O1xuICAgICAgICBpZih0aGlzLm5vbkVtcHR5VmFyaWFudHNbMF0gIT0gbnVsbCl7XG4gICAgICAgIGlmKHRoaXMubm9uRW1wdHlWYXJpYW50c1swXS5zaXplLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJzXCIpIHx8IHRoaXMubm9uRW1wdHlWYXJpYW50c1swXS5zaXplLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJsXCIpIHx8IHRoaXMubm9uRW1wdHlWYXJpYW50c1swXS5zaXplLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJtXCIpKXtcbiAgICAgICAgICB0aGlzLm5vbkVtcHR5VmFyaWFudHMgPSB0aGlzLm5vbkVtcHR5VmFyaWFudHMuc29ydCgoYSxiKT0+d2VpZ2h0c1thLnNpemUudG9Mb3dlckNhc2UoKV0td2VpZ2h0c1tiLnNpemUudG9Mb3dlckNhc2UoKV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFxuICAgICBcblxuXG4gICAgICAgIFxuICAgICAgfSk7XG4gIH1cblxuXG5cbiAgLyoqcXVlc3RhIGZ1bnppb25lIHNlbWJyYSBzb2xvIGdlc3RpcmUgaWwgbWF4IGlucHV0ICovXG4gIHNlbGVjdFNpemUoZXZlbnQ6IGFueSwgaW5kZXgpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiZmlsdGVyZWRWYXJpYW50czogXCIgKyB0aGlzLmZpbHRlcmVkVmFyaWFudHMpO1xuXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5idXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmNsaWNrZWRTaXplID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTC5zbGljZSgwLCAtMSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImZpbHRlcmVkVmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyZWRWYXJpYW50cykpXG5cbiAgICB0aGlzLnNlbGVjdGVkU2l6ZSA9IHRoaXMuZmlsdGVyZWRWYXJpYW50cy5maWx0ZXIoKHgpID0+IHguc2l6ZSA9PT0gdGhpcy5jbGlja2VkU2l6ZSk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCBzaXplPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRTaXplKSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5ID49IDEpIHtcbiAgICAgIHRoaXMubWluSW52ID0gMTtcbiAgICAgIHRoaXMubWF4SW52ID0gdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5O1xuICAgICAgdGhpcy5xdWFudGl0eSA9IDE7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhcImltIGRvaW5nIHNvbWV0aGluZyAtPiBzZWxlY3RTaXplKClcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJvZEJ5bmFtZSgpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeUlkKHRoaXMucHJvZE5hbWUpLnN1YnNjcmliZSgocHJvZHVjdHMpID0+IHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcblxuICAgICAgdGhpcy5sZW4gPSB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMucHJvZHVjdHNbaV0pO1xuICAgICAgICB0aGlzLnNpbWFsUHJvZHVjdHMucHVzaCh0aGlzLnByb2R1Y3RzW2ldLmltYWdlKTtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgfVxuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY29sb3JzKTtcblxuICAgICBjb25zb2xlLmxvZyhcInNpbWlsYXIgcHJvZHVjdHMgPSBcIiArIHRoaXMuc2ltYWxQcm9kdWN0cylcbiAgICAgIGlmICh0aGlzLmxlbiA+PSAxKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UHJvZEJ5UHJvZElkKCkge1xuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQodGhpcy5wcm9kSWQpLnN1YnNjcmliZSgocHJvZHVjdHMpID0+IHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcblxuICAgICAgdGhpcy5sZW4gPSB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMucHJvZHVjdHNbaV0pO1xuICAgICAgICB0aGlzLnNpbWFsUHJvZHVjdHMucHVzaCh0aGlzLnByb2R1Y3RzW2ldLmltYWdlKTtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgfVxuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY29sb3JzKTtcblxuICAgICBjb25zb2xlLmxvZyhcInNpbWlsYXIgcHJvZHVjdHMgPSBcIiArIHRoaXMuc2ltYWxQcm9kdWN0cylcbiAgICAgIGlmICh0aGlzLmxlbiA+PSAxKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSggIHRoaXMucHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIiB8IENhdGFsZG9zdG9yZS5pdFwiKTtcbiAgICB9KTtcbiAgfVxuICBnZXRXUHJvZEJ5bmFtZSgpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeU5hbWUodGhpcy5XX3Byb2RuYW1lKS5zdWJzY3JpYmUoXG4gICAgICAocHJvZHVjdHMpID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XG5cbiAgICAgICAgdGhpcy5sZW4gPSB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbjsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh0aGlzLnByb2R1Y3RzW2ldKTtcbiAgICAgICAgICB0aGlzLnNpbWFsUHJvZHVjdHMucHVzaCh0aGlzLnByb2R1Y3RzW2ldLmltYWdlKTtcbiAgICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY29sb3JzKTtcblxuICAgICAgICBpZiAodGhpcy5sZW4gPiAxKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG5cblxuICB1cGRhdGVTZWxlY3RlZFNpemUoaW5kZXgpe1xuXG5cbiAgICAvL2NvbnNvbGUubG9nKFwic2l6ZSA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XSkpO1xuICAgIGxldCBzZWxlY3RlZFZhcmlhbnQgPSB0aGlzLm5vbkVtcHR5VmFyaWFudHNbaW5kZXhdO1xuICAgIGxldCBzZWxlY3RlZFZhcmlhbnRJZCA9IHRoaXMubm9uRW1wdHlWYXJpYW50c1tpbmRleF0uaWQ7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWRWYXJpYW50SWQgXCIgKyBzZWxlY3RlZFZhcmlhbnRJZCApO1xuXG4gICAgbGV0IHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgPSB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoc2VsZWN0ZWRWYXJpYW50SWQpO1xuICAgIGlmKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgIT0gbnVsbCl7XG4gICAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEpzb24oKSk7XG4gICAgdGhpcy5tYXhJbnYgPSBzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEludmVudG9yeSgpO1xuICAgIGlmKHRoaXMubWF4SW52PT09MCB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gdHJ1ZTtcbiAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIGFscmVhZHkgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRWYXJpYW50LmludmVudG9yeTtcbiAgICAgIGlmKHRoaXMubWF4SW52PT09MCAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9ICB0cnVlO1xuICAgICAgLy9jb25zb2xlLmxvZyhcInRoaXMgcHJvZHVjdCBpcyBOT1QgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICB9XG5cbiAgfVxuXG4gIGNoZWNrUXVhbnRpdHkoKXtcbiAgICBpZiggdGhpcy5xdWFudGl0eSAhPSAwKXtcbiAgICAgIHRoaXMuYnV0dG9uID0gIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5idXR0b24gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiXG5cblxuPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdmEgRmxhdCcgcmVsPSdzdHlsZXNoZWV0Jz5cbjxkaXYgY2xhc3M9XCJwcm9kdWN0LXBhZ2VcIiAqbmdJZj1cInByb2R1Y3RcIj5cbiAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtanNvbi1sZCAqbmdJZj1cImJyYW5kTmFtZVwiIFtwcm9kb3R0b109XCJwcm9kdWN0XCIgW2JyYW5kTmFtZV09XCJicmFuZE5hbWVcIj48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtanNvbi1sZD5cbiAgXG4gIDxkaXYgY2xhc3M9XCJncmlkXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICA8ZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzIHN0eWxlPVwibWF4LXdpZHRoOjQwdndcIiAqbmdJZj1cImRpc3BsYXlTdWNjZXNzQmFubmVyXCI+PC9lZXNob3AtZnJvbnRlbmQtbWVzc2FnZXM+XG5cbiAgICA8IS0tXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmctc21cIj5cbiAgICAgICAgICAgIDxwLXJhdGluZyBbKG5nTW9kZWwpXT1cInByb2R1Y3QucmF0aW5nXCIgW2Rpc2FibGVkXT1cInRydWVcIiBbY2FuY2VsXT1cImZhbHNlXCI+PC9wLXJhdGluZz5cbiAgICAgICAgPC9kaXY+IC0tPlxuICAgIFxuXG4gICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNCBjb2wtbGctYXV0byBnYWxsZXJ5IG0tMCBwLTBcIj5cbiAgICAgIDx1aS1nYWxsZXJ5ICBbaW1hZ2VzXT1cInByb2R1Y3QuaW1hZ2VzXCIgW2ltYWdlXT1cInByb2R1Y3QuaW1hZ2VcIiBbcHJvZHVjdF09XCJwcm9kdWN0XCIgPjwvdWktZ2FsbGVyeT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC01IGNvbC1sZy0zIGNvbC14bC00IHByb2R1Y3RcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjthbGlnbi1pdGVtczogZW5kO3BhZGRpbmc6MWVtOyBsaW5lLWhlaWdodDoxLjVlbTtcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6NjAwXCI+PGgxPnt7cHJvZHVjdC5uYW1lfX08L2gxPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgIGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA3MDA7XCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInByb2R1Y3QuZGlzY291bnQgIT0gMFwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiAgbGluZS10aHJvdWdoOyBmb250LXdlaWdodDogMTAwOyBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XCI+Jm5ic3A7IHt7cHJvZHVjdC5wcmljZX19IOKCrCA8L3NwYW4+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGJsYWNrO1wiPiB7e3Byb2R1Y3QucHJpY2UgLSBwcm9kdWN0LmRpc2NvdW50fX0g4oKsPC9zcGFuPiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCIgc3R5bGU9XCIgICAgIGhlaWdodDogMjBweDtmb250LXdlaWdodDogbGlnaHRlcjsgZm9udC1zaXplOiBzbWFsbDsgY29sb3I6IHJnYigxNDMsIDE0MywgMTQzKTtcIj48cD5Db2RpY2U6ICB7e3RoaXMucHJvZHVjdC5wcm9kdWN0SWR9fTwvcD48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cIiAgICAgaGVpZ2h0OiAyMHB4O2ZvbnQtd2VpZ2h0OiBsaWdodGVyOyBmb250LXNpemU6IHNtYWxsOyBjb2xvcjogcmdiKDE0MywgMTQzLCAxNDMpO1wiPjxwPkJyYW5kOiB7e3RoaXMuYnJhbmROYW1lfX08L3A+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCIgc3R5bGU9XCIgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IGZvbnQtc2l6ZTogc21hbGw7IGNvbG9yOiByZ2IoMTQzLCAxNDMsIDE0Myk7XCI+VmFyaWFudGk8L2Rpdj5cbiAgICAgICAgPGVzaG9wLWZyb250ZW5kLWNhcm91c2VsICBbaW1hZ2VzXT1cInByb2R1Y3RzXCIgc3R5bGU9XCIgb3ZlcmZsb3cteDogYXV0bztcIj48L2VzaG9wLWZyb250ZW5kLWNhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgICBcblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgc3R5bGU9XCIgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IGZvbnQtc2l6ZTogc21hbGw7IGNvbG9yOiByZ2IoMTQzLCAxNDMsIDE0Myk7IHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XCI+VGFnbGlhPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IG92ZXJmbG93LXg6YXV0b1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiAgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiBmLnNpemUgPT09IGNsaWNrZWRTaXplfVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBtLTIgXCIgc3R5bGU9XCJtYXgtd2lkdGg6Zml0LWNvbnRlbnQ7IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcIiBbZGlzYWJsZWRdPVwiZi5hdmFpbGFibGU/IGZhbHNlIDogdHJ1ZVwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBub25FbXB0eVZhcmlhbnRzLCBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdFNpemUoJGV2ZW50KVwiXG4gICAgICAgICAgICAoY2xpY2spPVwidXBkYXRlU2VsZWN0ZWRTaXplKGkpXCIgPnt7Zi5zaXplfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cIiBmb250LXdlaWdodDogbGlnaHRlcjsgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogcmdiKDE2NSwgMTY1LCAxNjUpO1wiPlxuXG4gICAgICAgICAgICA8YSBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjsgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1wiPkd1aWRhIGFsbGUgdGFnbGllPC9hPlxuICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGxhYmVsPVwiQWRkIHRvIGNhcnRcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgYm9yZGVyLXJhZGl1czogMDtcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImFkZFByb2R1Y3RUb0NhcnQoKVwiPlxuICAgICAgICAgICAgQUdHSVVOR0kgQUwgQ0FSUkVMTE9cbiAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiIHN0eWxlPVwiZm9udC1zaXplOiAxMHB4O1wiPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCIgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxMHB4OyBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1wiPlBhZ2EgaW4gMyByYXRlIGRhIHt7dGhpcy5rbGFybmFQcmljZX19IOKCrCBzZW56YSBpbnRlcmVzc2kgY29uICAgICZuYnNwOzwvc3Bhbj4gPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogNzAwO1wiPktsYXJuYTwvc3Bhbj4gICAmbmJzcDs8YSBzdHlsZT1cIiBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDEwcHg7IHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7IGN1cnNvcjogcG9pbnRlcjsgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1wiPlNjb3ByaSBkaSBwacO5PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICAgICAgIFxuICAgICAgICAgIDxwLWFjY29yZGlvbiA+XG4gICAgICAgICAgICA8cC1hY2NvcmRpb25UYWIgaGVhZGVyPVwiREVTQ1JJWklPTkVcIiBbc2VsZWN0ZWRdPVwidHJ1ZVwiIHN0eWxlPVwiIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cInByb2R1Y3QuZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvcC1hY2NvcmRpb25UYWI+XG4gICAgICAgICAgICA8cC1hY2NvcmRpb25UYWIgaGVhZGVyPVwiTUFURVJJQUxJIEUgQ1VSQVwiPlxuICAgICAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwicC5tYXRlcmlhbGlcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvcC1hY2NvcmRpb25UYWI+XG4gICAgXG4gICAgICAgIDwvcC1hY2NvcmRpb24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgXG5cbiAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDpjZW50ZXI7XCI+XG4gICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgcHJvZG90dGlDb3JyZWxhdGlUZXh0XCIgc3R5bGU9XCJib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiAycHg7XCI+XG4gICAgICBQcm9kb3R0aSBjb3JyZWxhdGlcbiAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIHByLTAgcGwtMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OmNlbnRlcjtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLWwtOSBwLTBcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XCI+XG5cbiAgICAgICAgPGVzaG9wLWZyb250ZW5kLWZlYXR1cmVkLXByb2R1Y3RzIFticmFuZE5hbWVdPVwicHJvZHVjdC5icmFuZFwiICBbbWF4Q29tcG9uZW50V2lkdGhdPVwiMTIwMFwiIFtmZWF0dXJlZFNleF09XCJwcm9kdWN0LnNleFwiPjwvZXNob3AtZnJvbnRlbmQtZmVhdHVyZWQtcHJvZHVjdHM+XG4gICAgXG4gICAgPC9kaXY+XG4gICAgICBcbiAgICAgPC9kaXY+XG4gICBcbiAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG4iXX0=