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
import * as i9 from "../../product-json-ld/product-json-ld.component";
import * as i10 from "@eshop-frontend/ui";
import * as i11 from "primeng/accordion";
import * as i12 from "../../components/featured-products/featured-products.component";
function ProductPageComponent_div_1_eshop_frontend_product_json_ld_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eshop-frontend-product-json-ld", 38);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("prodotto", ctx_r1.product)("brandName", ctx_r1.brandName);
} }
function ProductPageComponent_div_1_eeshop_frontend_messages_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eeshop-frontend-messages", 39);
} }
function ProductPageComponent_div_1_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("\u00A0 ", ctx_r3.product.price, " \u20AC ");
} }
const _c0 = function (a0) { return { selected: a0 }; };
function ProductPageComponent_div_1_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_button_28_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.selectSize($event); })("click", function ProductPageComponent_div_1_button_28_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const i_r6 = restoredCtx.index; const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.updateSelectedSize(i_r6); });
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
    i0.ɵɵelementStart(19, "div", 10)(20, "div", 16);
    i0.ɵɵtext(21, "Varianti");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(22, "eshop-frontend-carousel", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 10)(24, "div", 18);
    i0.ɵɵtext(25, "Taglia");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 19)(27, "div", 20);
    i0.ɵɵtemplate(28, ProductPageComponent_div_1_button_28_Template, 2, 5, "button", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 22)(30, "a", 23);
    i0.ɵɵtext(31, "Guida alle taglie");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 10)(33, "div", 24)(34, "button", 25);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.addProductToCart(); });
    i0.ɵɵtext(35, " AGGIUNGI AL CARRELLO ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "div", 6)(37, "div", 26)(38, "span", 27);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "span", 28);
    i0.ɵɵtext(41, "Klarna");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(42, " \u00A0");
    i0.ɵɵelementStart(43, "a", 29);
    i0.ɵɵtext(44, "Scopri di pi\u00F9");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(45, "div", 10)(46, "p-accordion")(47, "p-accordionTab", 30);
    i0.ɵɵelement(48, "div", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "p-accordionTab", 32);
    i0.ɵɵelement(50, "div", 31);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(51, "div", 33)(52, "div", 34);
    i0.ɵɵtext(53, " Prodotti correlati ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "div", 35)(55, "div", 36);
    i0.ɵɵelement(56, "eshop-frontend-featured-products", 37);
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
            });
            this.meta.updateTag({ name: 'description', content: this.product.name + ' | a soli : ' + this.product.discount + ' ' + this.product.productId.toLowerCase() });
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
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 2, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Nova Flat", "rel", "stylesheet"], ["class", "product-page", 4, "ngIf"], [1, "product-page"], [3, "prodotto", "brandName", 4, "ngIf"], [1, "grid", 2, "justify-content", "center"], ["style", "max-width:40vw", 4, "ngIf"], [1, "row", "w-100", 2, "justify-content", "center"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-auto", "gallery", "m-0", "p-0"], [3, "images", "image", "product"], [1, "col-12", "col-sm-12", "col-md-5", "col-lg-3", "col-xl-4", "product", 2, "display", "flex", "flex-direction", "column", "align-items", "end", "padding", "1em", "line-height", "1.5em"], [1, "row", "w-100"], [1, "col-auto", 2, "font-size", "24px", "font-weight", "600"], [1, "col-auto"], [1, "col-auto", 2, "font-weight", "700"], ["style", "text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);", 4, "ngIf"], [2, "color", "black"], [1, "col-auto", 2, "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)"], [2, "overflow-x", "auto", 3, "images"], [1, "col-12", 2, "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)", "padding-bottom", "0 !important"], [1, "col-12", "p-0"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", 2, "max-width", "100%", "overflow-x", "auto"], ["class", "btn btn-sm m-2 ", "style", "max-width:fit-content; font-weight: 700; margin-top: 0 !important; margin-left: 0 !important;", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "col-auto", 2, "font-weight", "lighter", "font-size", "10px", "color", "rgb(165, 165, 165)"], [2, "cursor", "pointer", "text-decoration", "underline"], [1, "col-12"], ["type", "button", "label", "Add to cart", 1, "btn", "btn-secondary", 2, "width", "100%", "border-radius", "0", 3, "disabled", "click"], [1, "col-auto", 2, "font-size", "10px"], [2, "font-weight", "600", "font-size", "10px", "padding-bottom", "0 !important"], [2, "font-weight", "700"], [2, "font-weight", "600", "font-size", "10px", "padding-bottom", "0 !important", "cursor", "pointer", "text-decoration", "underline"], ["header", "DESCRIZIONE", 2, "box-shadow", "none !important", 3, "selected"], [3, "innerHTML"], ["header", "MATERIALI E CURA"], [1, "row", 2, "justify-content", "center"], [1, "col-10", "prodottiCorrelatiText", 2, "border-bottom", "3px solid black", "font-weight", "600", "letter-spacing", "2px"], [1, "row", "w-100", "pr-0", "pl-0", 2, "justify-content", "center"], [1, "col-12", "col-l-9", "p-0", 2, "padding-top", "20px !important"], [3, "brandName", "maxComponentWidth", "featuredSex"], [3, "prodotto", "brandName"], [2, "max-width", "40vw"], [2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(255, 0, 0)"], [1, "btn", "btn-sm", "m-2", 2, "max-width", "fit-content", "font-weight", "700", "margin-top", "0 !important", "margin-left", "0 !important", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵtemplate(1, ProductPageComponent_div_1_Template, 57, 18, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i8.NgIf, i9.ProductJsonLdComponent, i10.GalleryComponent, i10.CarouselComponent, i8.NgForOf, i8.NgClass, i11.Accordion, i11.AccordionTab, i12.FeaturedProductsComponent], styles: [".btn.btn-secondary[disabled][_ngcontent-%COMP%]{background-color:#cecece}.selected[_ngcontent-%COMP%]{border:1px solid black!important}.prodottiCorrelatiText[_ngcontent-%COMP%]{font-size:30px;padding-top:40px}  .p-element{padding:0!important}  .p-accordion .p-accordion-header .p-accordion-header-link:focus{box-shadow:none!important}  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{background:#ffffff!important;border-color:#434343!important;color:#495057;border:none!important;border-bottom-right-radius:0;border-bottom-left-radius:0}  .p-accordion-header{border-top:1px solid #a8a8a8!important}  .p-accordion-content{border:none!important}  .p-accordion .p-accordion-header .p-accordion-header-link{padding:1rem;color:#495057;background:#ffffff!important;border-color:#fff!important;border:none!important;font-weight:600;transition:box-shadow .2s}@media screen and (max-width: 993px){.prodottiCorrelatiText[_ngcontent-%COMP%]{font-size:24px;padding-top:4px}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', template: "\n\n\n<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\n<div class=\"product-page\" *ngIf=\"product\">\n  <eshop-frontend-product-json-ld *ngIf=\"brandName\" [prodotto]=\"product\" [brandName]=\"brandName\"></eshop-frontend-product-json-ld>\n  \n  <div class=\"grid\" style=\"justify-content: center;\">\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\n\n    <!--\n        <div class=\"rating-sm\">\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\n        </div> -->\n    \n\n    <div class=\"row w-100\" style=\"justify-content: center\">\n    <div class=\"col-12 col-sm-12 col-md-4 col-lg-auto gallery m-0 p-0\">\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\" ></ui-gallery>\n    </div>\n\n    <div class=\"col-12 col-sm-12 col-md-5 col-lg-3 col-xl-4 product\" style=\"display: flex;flex-direction: column;align-items: end;padding:1em; line-height:1.5em;\">\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\"font-size: 24px; font-weight:600\"><h1>{{product.name}}</h1></div>\n      </div>\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\">\n          <div  class=\"col-auto\" style=\"font-weight: 700;\">\n            <span *ngIf=\"product.discount != 0\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);\">&nbsp; {{product.price}} \u20AC </span>\n            &nbsp;\n            <span style=\"color: black;\"> {{product.price - product.discount}} \u20AC</span> \n          </div>\n        </div>\n      </div>\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\" font-weight: lighter; font-size: small; color: rgb(143, 143, 143);\">Varianti</div>\n        <eshop-frontend-carousel  [images]=\"products\" style=\" overflow-x: auto;\"></eshop-frontend-carousel>\n      </div>\n\n      <div class=\"row w-100\">\n        <div class=\"col-12\" style=\" font-weight: lighter; font-size: small; color: rgb(143, 143, 143); padding-bottom: 0 !important;\">Taglia</div>\n        <div class=\"col-12 p-0\">\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\" style=\"max-width: 100%; overflow-x:auto\">\n            <button  [ngClass]=\"{selected: f.size === clickedSize}\" class=\"btn btn-sm m-2 \" style=\"max-width:fit-content; font-weight: 700; margin-top: 0 !important; margin-left: 0 !important;\" [disabled]=\"f.available? false : true\"\n            *ngFor=\"let f of nonEmptyVariants, let i = index\" (click)=\"selectSize($event)\"\n            (click)=\"updateSelectedSize(i)\" >{{f.size}}\n            </button>            \n          </div>\n  \n        </div>\n        <div class=\"col-auto\" style=\" font-weight: lighter; font-size: 10px; color: rgb(165, 165, 165);\">\n\n            <a style=\"cursor: pointer;  text-decoration: underline;\">Guida alle taglie</a>\n      \n        </div>\n\n        <div class=\"row w-100\">\n          <div class=\"col-12\">\n     \n            <button [disabled]=\"button\" type=\"button\" label=\"Add to cart\" class=\"btn btn-secondary\" style=\"width: 100%; border-radius: 0;\"\n            (click)=\"addProductToCart()\">\n            AGGIUNGI AL CARRELLO\n           </button>\n          </div>\n        </div>\n\n        <div class=\"row w-100\" style=\"justify-content: center;\">\n          <div class=\"col-auto\" style=\"font-size: 10px;\">\n            <span style=\" font-weight: 600; font-size: 10px; padding-bottom: 0 !important;\">Paga in 3 rate da {{this.klarnaPrice}} \u20AC senza interessi con    &nbsp;</span> <span style=\"font-weight: 700;\">Klarna</span>   &nbsp;<a style=\" font-weight: 600; font-size: 10px; padding-bottom: 0 !important; cursor: pointer;  text-decoration: underline;\">Scopri di pi\u00F9</a>\n          </div>\n        </div>\n\n\n\n        <div class=\"row w-100\">\n             \n          <p-accordion >\n            <p-accordionTab header=\"DESCRIZIONE\" [selected]=\"true\" style=\" box-shadow: none !important;\">\n              <div [innerHTML]=\"product.description\"></div>\n            </p-accordionTab>\n            <p-accordionTab header=\"MATERIALI E CURA\">\n              <div [innerHTML]=\"p.materiali\"></div>\n            </p-accordionTab>\n    \n        </p-accordion>\n        </div>\n\n      </div>\n\n      \n\n    </div>\n            \n    <div class=\"row\" style=\"justify-content:center;\">\n     <div class=\"col-10 prodottiCorrelatiText\" style=\"border-bottom: 3px solid black; font-weight: 600; letter-spacing: 2px;\">\n      Prodotti correlati\n     </div>\n\n    </div>\n                \n    <div class=\"row w-100 pr-0 pl-0\" style=\"justify-content:center;\">\n      <div class=\"col-12 col-l-9 p-0\" style=\"padding-top: 20px !important;\">\n\n        <eshop-frontend-featured-products [brandName]=\"product.brand\"  [maxComponentWidth]=\"1200\" [featuredSex]=\"product.sex\"></eshop-frontend-featured-products>\n    \n    </div>\n      \n     </div>\n   \n  </div>\n\n  </div>\n</div>\n\n\n", styles: [".btn.btn-secondary[disabled]{background-color:#cecece}.selected{border:1px solid black!important}.prodottiCorrelatiText{font-size:30px;padding-top:40px}::ng-deep .p-element{padding:0!important}::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link:focus{box-shadow:none!important}::ng-deep .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{background:#ffffff!important;border-color:#434343!important;color:#495057;border:none!important;border-bottom-right-radius:0;border-bottom-left-radius:0}::ng-deep .p-accordion-header{border-top:1px solid #a8a8a8!important}::ng-deep .p-accordion-content{border:none!important}::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link{padding:1rem;color:#495057;background:#ffffff!important;border-color:#fff!important;border:none!important;font-weight:600;transition:box-shadow .2s}@media screen and (max-width: 993px){.prodottiCorrelatiText{font-size:24px;padding-top:4px}}\n"] }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }, { type: i3.CartService }, { type: i4.VariantsService }, { type: i5.Title }, { type: i5.Meta }, { type: i6.MessageService }, { type: i7.BrandsService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDekQsOERBQThEO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFRLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBT3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNoQjdELHFEQUFnSTs7O0lBQTlFLHlDQUFvQiwrQkFBQTs7O0lBR3BFLCtDQUF5Rzs7O0lBc0JqRyxnQ0FBcUg7SUFBQSxZQUEyQjtJQUFBLGlCQUFPOzs7SUFBbEMsZUFBMkI7SUFB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QWUsQ0FBQyxTQUFTLENBQUM7WUFDeEMsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFHLENBQUMsSUFBSyxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUM7WUFDL0Qsb0ZBQW9GO1NBQ3JGO0lBRUgsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUksS0FBSyxDQUFDO1NBQ3RCO2FBQUk7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7O3dGQXhjVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQzFCakMsMEJBQWdGO1FBQ2hGLHVFQStHTTs7UUEvR3FCLGVBQWE7UUFBYixrQ0FBYTs7dUZEeUIzQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuXG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IFByb2R1Y3RMdWNhIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXNcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7VGl0bGUsIE1ldGF9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENhcnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XG5pbXBvcnQgeyBWYXJpYW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ZhcmlhbnQnO1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IFdfUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy93LXByb2R1Y3QnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBXX1Byb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBWYXJpYW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92YXJpYW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEJyYW5kc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9icmFuZHMuc2VydmljZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LXBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY2xpY2tlZFNpemUgOiBTdHJpbmc7XG4gIHZhcmlhbnQ6IFZhcmlhbnQ7XG4gIHZhcmlhbnRzOiBWYXJpYW50W10gPSBbXTtcbiAgZmlsdGVyZWRWYXJpYW50czogVmFyaWFudFtdID0gW107XG4gIG5vbkVtcHR5VmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xuICBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuICBrbGFybmFQcmljZSA9IDA7XG4gIFdfcHJvZHVjdDogV19Qcm9kdWN0O1xuICBwcm9kTmFtZSA9ICcnO1xuICBwcm9kSWQgPSAnJztcbiAgV19wcm9kbmFtZSA9ICcnO1xuICBtZW5Qcm9kID0gdHJ1ZTtcbiAgd1Byb2QgPSBmYWxzZTtcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBsZW46IG51bWJlcjtcbiAgY29sb3JzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgc2ltYWxQcm9kdWN0czogc3RyaW5nW10gPSBbXTtcbiAgbXVsdGlwbGVDb2xvcnM6IGJvb2xlYW47XG4gIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBxdWFudGl0eSA9IDA7XG4gIGN1cnJlbnRJZDtcbiAgZGlzcGxheVN1Y2Nlc3NCYW5uZXIgPSBmYWxzZTtcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgYnV0dG9uID0gdHJ1ZTtcbiAgc2VsZWN0ZWRTaXplOiBWYXJpYW50W10gPSBbXTtcbiAgYXZhaWxhYmlsaXR5OiBhbnlbXSA9IFtdO1xuICBhdmFpbGFibGU6IGJvb2xlYW47XG4gIG1pbkludjogbnVtYmVyO1xuICBtYXhJbnY6IG51bWJlcjtcbiAgdXJsO1xuICBkaXNjb3VudCA9IDA7XG4gIHA6IFByb2R1Y3RMdWNhO1xuICBicmFuZExvZ28gOiBzdHJpbmc7XG4gIGJyYW5kTWFwID0gbmV3IE1hcDxzdHJpbmcsc3RyaW5nPigpOyBcbiAgYnJhbmRMb2dvQmxvYjtcbiAgYnJhbmROYW1lOlN0cmluZztcbiAgcHJpdmF0ZSBjYXJ0IDogQ2FydFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB2YXJpYW50U2VydmljZTogVmFyaWFudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGl0bGVTZXJ2aWNlOlRpdGxlLFxuICAgIHByaXZhdGUgbWV0YTogTWV0YSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGJyYW5kU2VydmljZTogQnJhbmRzU2VydmljZSxcblxuXG5cbiAgKSB7ICAgICB0aGlzLnAgPSBuZXcgUHJvZHVjdEx1Y2EoKVxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxM2M3ODg5MzA5ZGU5NjAxODBkYTRhXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9ibGF1ZXIucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjODllOTMwOWRlOTYwMTgwZGE0ZFwiLCBcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL29sZHJpdmVyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxNjdiZDFjYmE4YTFlMGQ5YzFhZjg4XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9jb2xtYXIucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWVmZTFkNjIzODZjYzIyNTI1YjZcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2VhNy5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmMWUxZDYyMzg2Y2MyMjUyNWI5XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9mcmVkcGVycnkucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWYzNzFkNjIzODZjYzIyNTI1YmNcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2t3YXkucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjQ4MWQ2MjM4NmNjMjI1MjViZlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vbGFjb3N0ZS5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmN2QxZDYyMzg2Y2MyMjUyNWMyXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9tdXJwaHkucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWY5ODFkNjIzODZjYzIyNTI1YzVcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL3Blbmluc3VsYS5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmYWQxZDYyMzg2Y2MyMjUyNWM4XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9zYXVjb255LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmYmIxZDYyMzg2Y2MyMjUyNWNiXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9zdW5kZWsucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzJlMDVmM2I4YzU2N2RlNWVhODM2NjlcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2JhcmJvdXIucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzZiNTdlMjUwNmJhNjVlNTkzYmFhODFcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL1NjcmVlbnNob3QucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjM2YjU3ZjM1MDZiYTY1ZTU5M2JhYTg0XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzZiNTgwNjUwNmJhNjVlNTkzYmFhODdcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL1NjcmVlbnNob3QucG5nXCIpO1xuXG5cbiAgICB0aGlzLmNhcnQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICB0aGlzLmF2YWlsYWJsZSA9IHRydWU7XG5cblxuXG5cbiAgICAvL2NvbnNvbGUubG9nKFwiY2FydCA9IFwiICsgdGhpcy5jYXJ0LmdldEpzb24oKSk7XG5cblxuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XG5cblxuICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5wcm9kdWN0SWQpIHtcbiAgICAgICAvLyAgIHRoaXMuX2dldFByb2R1Y3QocGFyYW1zLnByb2R1Y3RJZCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMucHJvZHVjdElkO1xuICAgICAgIFxuICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7XG4gICAgICAgICAgLy8gdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lXG4gICAgICAgICAgLy8vLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuLy8gICAgICBcbiBcblxuLy9cbiAgICB0aGlzLnAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcbiAgICB0aGlzLl9nZXRQcm9kdWN0MigpLnRoZW4oXG4gICAgIGRhdGEgPT57XG4gICAgICAgdGhpcy5wID0gZGF0YTtcbiAgICAgfVxuICAgICApLmNhdGNoKCBlcnJvciA9PntcbiAgICAgICB0aGlzLnAgPSBudWxsO1xuICAgICB9KTtcbiAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIGlmIChwYXJhbXMucHJvZHVjdElkKSB7XG4gICAgICAgIHRoaXMuX2dldFdwcm9kdWN0KHBhcmFtcy5wcm9kdWN0SWQpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5wcm9kdWN0SWQ7XG4gICAgICAgIHRoaXMuX2dldFNpemVzKCk7XG5cblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicHJvZHVjdD0gXCIgKyB0aGlzLnByb2R1Y3QpO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xuICAgICAgICAvLyB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWVcbiAgICAgICAgLy8vLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZE5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5lbmRTdWJzJC5jb21wbGV0ZSgpO1xuICB9XG5cblxuICBcblxuICBhc3luYyBhamF4R2V0SW1hZ2VEYXRhKHVybCkge1xuICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcbiAgICBjb25zdCBpbWFnZUJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgcmV0dXJuIGltYWdlQmxvYjtcblxuXG4gIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xuXG59XG4gIC8qKlxuICAgKiBTZSBpbCBwcm9kb3R0byBlc2lzdGUgZ2nDoCwgYWdnaXVuZ28gdW5hIHZhcmlhbnRzLCBzZW5ubyBhZ2dpdW5nbyB1biBudW92byBwcm9kb3R0byBjb24gbGEgc3VhIHZhcmlhbnRzXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhZGRQcm9kdWN0VG9DYXJ0KCkge1xuXG4gICAgaWYodGhpcy5xdWFudGl0eSAhPSAwKSB7XG5cbiAgIGxldCBwVmFyaWFudCA9IG5ldyBQcm9kdWN0VmFyaWFudCh0aGlzLnNlbGVjdGVkU2l6ZVswXS5pZCwgdGhpcy5zZWxlY3RlZFNpemVbMF0uc2l6ZSwgdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5LCAwLCBTdHJpbmcodGhpcy5zZWxlY3RlZFNpemVbMF0uYmFyY29kZSkpO1xuXG5cbiAgICAgIGlmKHRoaXMuY2FydC5jb250YWluc1Byb2R1Y3QodGhpcy5wKSl7XG4gICBcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNhcnQuZ2V0UHJvZHVjdEluZGV4KHRoaXMucCk7XG4gICAgICAgIFxuICAgICAgICAgIGxldCBwcm9kdWN0ID0gdGhpcy5jYXJ0LmdldFByb2R1Y3QoaW5kZXgpO1xuICAgXG4gICAgICAgICAgcHJvZHVjdC5hZGRWYXJpYW50KHBWYXJpYW50LCB0aGlzLnF1YW50aXR5KTtcblxuICAgICAvLyAgICAgdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5IC09IHByb2R1Y3QuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcbiAgICAgICAgICB0aGlzLnAgPSBwcm9kdWN0O1xuICAgICAgICAgIHRoaXMubWF4SW52ID0gIHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRJbnZlbnRvcnkoKTtcblxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpIGhhdmUgc2V0IHRoZSBtYXhJbnYgdG86IFwiICsgdGhpcy5tYXhJbnYpO1xuICAgICAgICAgIGlmKHRoaXMubWF4SW52IDw9IDApe1xuICAgICAgICAgICAgdGhpcy5taW5JbnYgPSAwO1xuICAgICAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICAgIHRoaXMuY2FydC51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICB0aGlzLmNoZWNrUXVhbnRpdHkoKTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2Nlc3NvJyxcbiAgICAgICAgICAgIGRldGFpbDogYEwnYXJ0aWNvbG8gw6ggc3RhdG8gYWdnaXVudG8gYWwgY2FycmVsbG8hYFxuICAgICAgICAgIH0pO1xuXG5cbiAgICAgIH1lbHNle1xuICAgICAgXG4gICAgICAgIHRoaXMucC5hZGRWYXJpYW50KHBWYXJpYW50LCB0aGlzLnF1YW50aXR5KTtcbiAgICAgICAvLyB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnkgLT0gdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldFNlbGVjdGVkKCk7XG4gICAgICAgIHRoaXMubWF4SW52ID0gIHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRJbnZlbnRvcnkoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImkgaGF2ZSBzZXQgdGhlIG1heEludiB0bzogXCIgKyB0aGlzLm1heEludik7XG4gICAgICAgIGlmKHRoaXMubWF4SW52IDw9IDApe1xuICAgICAgICAgIHRoaXMubWluSW52ID0gMDtcbiAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAgdGhpcy5jYXJ0LmFkZFByb2R1Y3RMdWNhKHRoaXMucCk7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFudGl0eSgpO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2Nlc3NvJyxcbiAgICAgICAgICAgIGRldGFpbDogYEwnYXJ0aWNvbG8gw6ggc3RhdG8gYWdnaXVudG8gYWwgY2FycmVsbG8hYFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBfZ2V0UHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZVxuICAgICAgLmdldFByb2R1Y3QoaWQpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXNQcm9kdWN0KSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc1Byb2R1Y3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdCBjb2xvcj8gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3QpKTtcbiAgICAgICAgdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lO1xuICAgICAgICB0aGlzLnByb2RJZCA9IHRoaXMucHJvZHVjdC5wcm9kdWN0SWQ7XG4gICAgICAgIHRoaXMucHJvZHVjdC5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xuICAgICAgICB0aGlzLmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnJhbmQgbG9nbyA9IFwiICsgdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKSApXG4gICAgICAgIHRoaXMuZ2V0UHJvZEJ5UHJvZElkKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyByZXN0aXR1aXNjZSBpbCBwcm9kb3R0byBkZWxsYSBwYWdpbmFcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX2dldFByb2R1Y3QyKCkge1xuXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxQcm9kdWN0THVjYT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5wcm9kU2VydmljZVxuICAgICAgLmdldFByb2R1Y3QodGhpcy5jdXJyZW50SWQpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXNQcm9kdWN0KSA9PiB7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhcInJlcyBwcm9kdWN0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc1Byb2R1Y3QpKTtcbiAgICAgICAgbGV0IHAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcbiAgICAgICAgcC5zZXRJZChyZXNQcm9kdWN0LmlkKTtcbiAgICAgICAgcC5zZXREaXNjb3VudChyZXNQcm9kdWN0LmRpc2NvdW50KTtcbiAgICAgICAgcC5zZXRQcmljZShyZXNQcm9kdWN0LnByaWNlKTtcbiAgICAgICAgcC5zZXRUaGVNYWluSW1hZ2UocmVzUHJvZHVjdC5pbWFnZSk7XG4gICAgICAgIHAuc2V0TmFtZShyZXNQcm9kdWN0Lm5hbWUpO1xuICAgICAgICBwLm1hdGVyaWFsaSA9IHJlc1Byb2R1Y3QubWF0ZXJpYWxpO1xuXG4gICAgICAgIHJlc29sdmUocCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCBkYXRhID0gYXdhaXQgcHJvbWlzZTtcbiAgICByZXR1cm4gZGF0YTtcblxuXG4gIH1cblxuICBwcml2YXRlIF9nZXRXcHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0KGlkKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZShhc3luYyAocmVzUHJvZHVjdCkgPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNQcm9kdWN0O1xuXG4gICAgICAgIHRoaXMuYnJhbmRTZXJ2aWNlLmdldEJyYW5kKHRoaXMucHJvZHVjdC5icmFuZCkuc3Vic2NyaWJlKChkYXRhKSA9PntcbiAgICAgICAgICB0aGlzLmJyYW5kTmFtZT1kYXRhLm5hbWU7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5tZXRhLnVwZGF0ZVRhZyh7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IHRoaXMucHJvZHVjdC5uYW1lICsnIHwgYSBzb2xpIDogJyArIHRoaXMucHJvZHVjdC5kaXNjb3VudCArICcgJyArIHRoaXMucHJvZHVjdC5wcm9kdWN0SWQudG9Mb3dlckNhc2UoKSB9KVxuICAgICAgIFxuICAgICAgICBpZih0aGlzLnByb2R1Y3Quc2V4ID09IFwiTVwiKXtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhdGVnb3JpYVwiLCBcInVvbW9cIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRlZ29yaWFcIiwgXCJkb25uYVwiKVxuICAgICAgICB9XG4gICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5XX3Byb2RuYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWU7XG4gICAgICAgIHRoaXMucHJvZElkID0gdGhpcy5wcm9kdWN0LnByb2R1Y3RJZDtcbiAgICAgICAgdGhpcy5nZXRQcm9kQnlQcm9kSWQoKTtcblxuICAgICAgICB0aGlzLmRpc2NvdW50ID0gTWF0aC5yb3VuZCggKHRoaXMucHJvZHVjdC5kaXNjb3VudC90aGlzLnByb2R1Y3QucHJpY2UpICAqIDEwMClcbiAgICAgICAgdGhpcy5rbGFybmFQcmljZSA9IE1hdGgucm91bmQoKHRoaXMucHJvZHVjdC5wcmljZSAtIHRoaXMucHJvZHVjdC5kaXNjb3VudCkvMylcblxuICAgICAgICB0aGlzLnByb2R1Y3QuYnJhbmRMb2dvID0gdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKTtcbiAgICAgICAgdGhpcy5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xuXG4gICAgICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMuYnJhbmRMb2dvKTtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgdGhpcy5icmFuZExvZ29CbG9iID0gYmFzZTY0ZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBfZ2V0U2l6ZXMoKSB7XG4gICAgdGhpcy52YXJpYW50U2VydmljZVxuICAgICAgLmdldFZhcmlhbnRzKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHZhcmlhbnRzKSA9PiB7XG4gICAgICAgIHRoaXMudmFyaWFudHMgPSB2YXJpYW50cztcblxuXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cyA9IHRoaXMudmFyaWFudHMuZmlsdGVyKFxuICAgICAgICAgIChzaXplKSA9PiBzaXplLnByb2R1Y3QgPT09IHRoaXMuY3VycmVudElkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5zb3J0KChhLCBiKSA9PiAoYS5zaXplIDwgYi5zaXplID8gLTEgOiAxKSk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLmZpbHRlcmVkVmFyaWFudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIGlmKHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpXS5pbnZlbnRvcnkgPT0gMCl7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubm9uRW1wdHlWYXJpYW50cy5wdXNoKHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgd2VpZ2h0cyA9IHtcbiAgICAgICAgICAneHhzJzoxLCBcbiAgICAgICAgICAneHMnOjIsIFxuICAgICAgICAgICdzJzozLCBcbiAgICAgICAgICAnbSc6NCxcbiAgICAgICAgICAnbCc6NSwgXG4gICAgICAgICAgJ3hsJzo2LCBcbiAgICAgICAgICAneHhsJzo3LFxuICAgICAgICAgICd4eHhsJzo4LFxuICAgICAgICAgICczeGwnOjhcbiAgICAgICAgfTtcbiAgICAgICAgaWYodGhpcy5ub25FbXB0eVZhcmlhbnRzWzBdICE9IG51bGwpe1xuICAgICAgICBpZih0aGlzLm5vbkVtcHR5VmFyaWFudHNbMF0uc2l6ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic1wiKSB8fCB0aGlzLm5vbkVtcHR5VmFyaWFudHNbMF0uc2l6ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibFwiKSB8fCB0aGlzLm5vbkVtcHR5VmFyaWFudHNbMF0uc2l6ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibVwiKSl7XG4gICAgICAgICAgdGhpcy5ub25FbXB0eVZhcmlhbnRzID0gdGhpcy5ub25FbXB0eVZhcmlhbnRzLnNvcnQoKGEsYik9PndlaWdodHNbYS5zaXplLnRvTG93ZXJDYXNlKCldLXdlaWdodHNbYi5zaXplLnRvTG93ZXJDYXNlKCldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBcbiAgICAgXG5cblxuICAgICAgICBcbiAgICAgIH0pO1xuICB9XG5cblxuXG4gIC8qKnF1ZXN0YSBmdW56aW9uZSBzZW1icmEgc29sbyBnZXN0aXJlIGlsIG1heCBpbnB1dCAqL1xuICBzZWxlY3RTaXplKGV2ZW50OiBhbnksIGluZGV4KSB7XG4gICAgLy9jb25zb2xlLmxvZyhcImZpbHRlcmVkVmFyaWFudHM6IFwiICsgdGhpcy5maWx0ZXJlZFZhcmlhbnRzKTtcblxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuYnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja2VkU2l6ZSA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUwuc2xpY2UoMCwgLTEpO1xuXG4gICAgY29uc29sZS5sb2coXCJmaWx0ZXJlZFZhcmlhbnRzID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmZpbHRlcmVkVmFyaWFudHMpKVxuXG4gICAgdGhpcy5zZWxlY3RlZFNpemUgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHMuZmlsdGVyKCh4KSA9PiB4LnNpemUgPT09IHRoaXMuY2xpY2tlZFNpemUpO1xuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgc2l6ZT0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkU2l6ZSkpO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSA+PSAxKSB7XG4gICAgICB0aGlzLm1pbkludiA9IDE7XG4gICAgICB0aGlzLm1heEludiA9IHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeTtcbiAgICAgIHRoaXMucXVhbnRpdHkgPSAxO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJpbSBkb2luZyBzb21ldGhpbmcgLT4gc2VsZWN0U2l6ZSgpXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdldFByb2RCeW5hbWUoKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlJZCh0aGlzLnByb2ROYW1lKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XG5cbiAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh0aGlzLnByb2R1Y3RzW2ldKTtcbiAgICAgICAgdGhpcy5zaW1hbFByb2R1Y3RzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5pbWFnZSk7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzW2ldLmNvbG9yKTtcbiAgICAgIH1cbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XG5cbiAgICAgY29uc29sZS5sb2coXCJzaW1pbGFyIHByb2R1Y3RzID0gXCIgKyB0aGlzLnNpbWFsUHJvZHVjdHMpXG4gICAgICBpZiAodGhpcy5sZW4gPj0gMSkge1xuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFByb2RCeVByb2RJZCgpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeUlkKHRoaXMucHJvZElkKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XG5cbiAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh0aGlzLnByb2R1Y3RzW2ldKTtcbiAgICAgICAgdGhpcy5zaW1hbFByb2R1Y3RzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5pbWFnZSk7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzW2ldLmNvbG9yKTtcbiAgICAgIH1cbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XG5cbiAgICAgY29uc29sZS5sb2coXCJzaW1pbGFyIHByb2R1Y3RzID0gXCIgKyB0aGlzLnNpbWFsUHJvZHVjdHMpXG4gICAgICBpZiAodGhpcy5sZW4gPj0gMSkge1xuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUoICB0aGlzLnByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpICsgXCIgfCBDYXRhbGRvc3RvcmUuaXRcIik7XG4gICAgfSk7XG4gIH1cbiAgZ2V0V1Byb2RCeW5hbWUoKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlOYW1lKHRoaXMuV19wcm9kbmFtZSkuc3Vic2NyaWJlKFxuICAgICAgKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XG4gICAgICAgICAgdGhpcy5zaW1hbFByb2R1Y3RzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5pbWFnZSk7XG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuID4gMSkge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuXG5cbiAgdXBkYXRlU2VsZWN0ZWRTaXplKGluZGV4KXtcblxuXG4gICAgLy9jb25zb2xlLmxvZyhcInNpemUgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF0pKTtcbiAgICBsZXQgc2VsZWN0ZWRWYXJpYW50ID0gdGhpcy5ub25FbXB0eVZhcmlhbnRzW2luZGV4XTtcbiAgICBsZXQgc2VsZWN0ZWRWYXJpYW50SWQgPSB0aGlzLm5vbkVtcHR5VmFyaWFudHNbaW5kZXhdLmlkO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcInNlbGVjdGVkVmFyaWFudElkIFwiICsgc2VsZWN0ZWRWYXJpYW50SWQgKTtcblxuICAgIGxldCBzZWxlY3RlZFByb2R1Y3RWYXJpYW50ID0gdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKHNlbGVjdGVkVmFyaWFudElkKTtcbiAgICBpZihzZWxlY3RlZFByb2R1Y3RWYXJpYW50ICE9IG51bGwpe1xuICAgIC8vY29uc29sZS5sb2coc2VsZWN0ZWRQcm9kdWN0VmFyaWFudC5nZXRKc29uKCkpO1xuICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRQcm9kdWN0VmFyaWFudC5nZXRJbnZlbnRvcnkoKTtcbiAgICBpZih0aGlzLm1heEludj09PTAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9IHRydWU7XG4gICAgLy9jb25zb2xlLmxvZyhcInRoaXMgcHJvZHVjdCBpcyBhbHJlYWR5IGluc2lkZSB0aGUgY2FydCwgdGhlIG1heEludiBpczogXCIgKyB0aGlzLm1heEludik7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLm1heEludiA9IHNlbGVjdGVkVmFyaWFudC5pbnZlbnRvcnk7XG4gICAgICBpZih0aGlzLm1heEludj09PTAgIHx8IHRoaXMucXVhbnRpdHkgPT09IDApdGhpcy5idXR0b24gPSAgdHJ1ZTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0aGlzIHByb2R1Y3QgaXMgTk9UIGluc2lkZSB0aGUgY2FydCwgdGhlIG1heEludiBpczogXCIgKyB0aGlzLm1heEludik7XG4gICAgfVxuXG4gIH1cblxuICBjaGVja1F1YW50aXR5KCl7XG4gICAgaWYoIHRoaXMucXVhbnRpdHkgIT0gMCl7XG4gICAgICB0aGlzLmJ1dHRvbiA9ICBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuYnV0dG9uID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuXG5cbjxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3ZhIEZsYXQnIHJlbD0nc3R5bGVzaGVldCc+XG48ZGl2IGNsYXNzPVwicHJvZHVjdC1wYWdlXCIgKm5nSWY9XCJwcm9kdWN0XCI+XG4gIDxlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWpzb24tbGQgKm5nSWY9XCJicmFuZE5hbWVcIiBbcHJvZG90dG9dPVwicHJvZHVjdFwiIFticmFuZE5hbWVdPVwiYnJhbmROYW1lXCI+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWpzb24tbGQ+XG4gIFxuICA8ZGl2IGNsYXNzPVwiZ3JpZFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgPGVlc2hvcC1mcm9udGVuZC1tZXNzYWdlcyBzdHlsZT1cIm1heC13aWR0aDo0MHZ3XCIgKm5nSWY9XCJkaXNwbGF5U3VjY2Vzc0Jhbm5lclwiPjwvZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzPlxuXG4gICAgPCEtLVxuICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nLXNtXCI+XG4gICAgICAgICAgICA8cC1yYXRpbmcgWyhuZ01vZGVsKV09XCJwcm9kdWN0LnJhdGluZ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCIgW2NhbmNlbF09XCJmYWxzZVwiPjwvcC1yYXRpbmc+XG4gICAgICAgIDwvZGl2PiAtLT5cbiAgICBcblxuICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTQgY29sLWxnLWF1dG8gZ2FsbGVyeSBtLTAgcC0wXCI+XG4gICAgICA8dWktZ2FsbGVyeSAgW2ltYWdlc109XCJwcm9kdWN0LmltYWdlc1wiIFtpbWFnZV09XCJwcm9kdWN0LmltYWdlXCIgW3Byb2R1Y3RdPVwicHJvZHVjdFwiID48L3VpLWdhbGxlcnk+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNSBjb2wtbGctMyBjb2wteGwtNCBwcm9kdWN0XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47YWxpZ24taXRlbXM6IGVuZDtwYWRkaW5nOjFlbTsgbGluZS1oZWlnaHQ6MS41ZW07XCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCIgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OjYwMFwiPjxoMT57e3Byb2R1Y3QubmFtZX19PC9oMT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgIGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA3MDA7XCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInByb2R1Y3QuZGlzY291bnQgIT0gMFwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiAgbGluZS10aHJvdWdoOyBmb250LXdlaWdodDogMTAwOyBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XCI+Jm5ic3A7IHt7cHJvZHVjdC5wcmljZX19IOKCrCA8L3NwYW4+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGJsYWNrO1wiPiB7e3Byb2R1Y3QucHJpY2UgLSBwcm9kdWN0LmRpc2NvdW50fX0g4oKsPC9zcGFuPiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cIiBmb250LXdlaWdodDogbGlnaHRlcjsgZm9udC1zaXplOiBzbWFsbDsgY29sb3I6IHJnYigxNDMsIDE0MywgMTQzKTtcIj5WYXJpYW50aTwvZGl2PlxuICAgICAgICA8ZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWwgIFtpbWFnZXNdPVwicHJvZHVjdHNcIiBzdHlsZT1cIiBvdmVyZmxvdy14OiBhdXRvO1wiPjwvZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgc3R5bGU9XCIgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IGZvbnQtc2l6ZTogc21hbGw7IGNvbG9yOiByZ2IoMTQzLCAxNDMsIDE0Myk7IHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XCI+VGFnbGlhPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IG92ZXJmbG93LXg6YXV0b1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiAgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiBmLnNpemUgPT09IGNsaWNrZWRTaXplfVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBtLTIgXCIgc3R5bGU9XCJtYXgtd2lkdGg6Zml0LWNvbnRlbnQ7IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcIiBbZGlzYWJsZWRdPVwiZi5hdmFpbGFibGU/IGZhbHNlIDogdHJ1ZVwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBub25FbXB0eVZhcmlhbnRzLCBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdFNpemUoJGV2ZW50KVwiXG4gICAgICAgICAgICAoY2xpY2spPVwidXBkYXRlU2VsZWN0ZWRTaXplKGkpXCIgPnt7Zi5zaXplfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiIHN0eWxlPVwiIGZvbnQtd2VpZ2h0OiBsaWdodGVyOyBmb250LXNpemU6IDEwcHg7IGNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2NSk7XCI+XG5cbiAgICAgICAgICAgIDxhIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyOyAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XCI+R3VpZGEgYWxsZSB0YWdsaWU8L2E+XG4gICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgbGFiZWw9XCJBZGQgdG8gY2FydFwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBib3JkZXItcmFkaXVzOiAwO1wiXG4gICAgICAgICAgICAoY2xpY2spPVwiYWRkUHJvZHVjdFRvQ2FydCgpXCI+XG4gICAgICAgICAgICBBR0dJVU5HSSBBTCBDQVJSRUxMT1xuICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCIgc3R5bGU9XCJmb250LXNpemU6IDEwcHg7XCI+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cIiBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDEwcHg7IHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XCI+UGFnYSBpbiAzIHJhdGUgZGEge3t0aGlzLmtsYXJuYVByaWNlfX0g4oKsIHNlbnphIGludGVyZXNzaSBjb24gICAgJm5ic3A7PC9zcGFuPiA8c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA3MDA7XCI+S2xhcm5hPC9zcGFuPiAgICZuYnNwOzxhIHN0eWxlPVwiIGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMTBweDsgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDsgY3Vyc29yOiBwb2ludGVyOyAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XCI+U2NvcHJpIGRpIHBpw7k8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgPHAtYWNjb3JkaW9uID5cbiAgICAgICAgICAgIDxwLWFjY29yZGlvblRhYiBoZWFkZXI9XCJERVNDUklaSU9ORVwiIFtzZWxlY3RlZF09XCJ0cnVlXCIgc3R5bGU9XCIgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwicHJvZHVjdC5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICAgICAgPC9wLWFjY29yZGlvblRhYj5cbiAgICAgICAgICAgIDxwLWFjY29yZGlvblRhYiBoZWFkZXI9XCJNQVRFUklBTEkgRSBDVVJBXCI+XG4gICAgICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJwLm1hdGVyaWFsaVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9wLWFjY29yZGlvblRhYj5cbiAgICBcbiAgICAgICAgPC9wLWFjY29yZGlvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICBcblxuICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OmNlbnRlcjtcIj5cbiAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBwcm9kb3R0aUNvcnJlbGF0aVRleHRcIiBzdHlsZT1cImJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjazsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IDJweDtcIj5cbiAgICAgIFByb2RvdHRpIGNvcnJlbGF0aVxuICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDAgcHItMCBwbC0wXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbC05IHAtMFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcIj5cblxuICAgICAgICA8ZXNob3AtZnJvbnRlbmQtZmVhdHVyZWQtcHJvZHVjdHMgW2JyYW5kTmFtZV09XCJwcm9kdWN0LmJyYW5kXCIgIFttYXhDb21wb25lbnRXaWR0aF09XCIxMjAwXCIgW2ZlYXR1cmVkU2V4XT1cInByb2R1Y3Quc2V4XCI+PC9lc2hvcC1mcm9udGVuZC1mZWF0dXJlZC1wcm9kdWN0cz5cbiAgICBcbiAgICA8L2Rpdj5cbiAgICAgIFxuICAgICA8L2Rpdj5cbiAgIFxuICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cbiJdfQ==