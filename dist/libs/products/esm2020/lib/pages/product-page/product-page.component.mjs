import { MessageService } from 'primeng/api';
import { ProductVariant } from '@eshop-frontend/users';
import { Cart } from '@eshop-frontend/users';
import { ProductLuca } from '@eshop-frontend/users';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CartService } from '@eshop-frontend/orders';
import { Subject, takeUntil } from 'rxjs';
import { Location } from '@angular/common';
import { CartIconComponent } from '@eshop-frontend/orders';
import { ProductsService } from '../../services/products.service';
import { W_ProductsService } from '../../services/w-products.service';
import { VariantsService } from '../../services/variants.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/products.service";
import * as i2 from "../../services/w-products.service";
import * as i3 from "@angular/router";
import * as i4 from "@eshop-frontend/orders";
import * as i5 from "../../services/variants.service";
import * as i6 from "primeng/api";
import * as i7 from "@angular/common";
import * as i8 from "@eshop-frontend/users";
import * as i9 from "@eshop-frontend/ui";
import * as i10 from "primeng/inputnumber";
import * as i11 from "@angular/forms";
import * as i12 from "primeng/button";
function ProductPageComponent_div_1_eeshop_frontend_messages_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eeshop-frontend-messages", 38);
} }
function ProductPageComponent_div_1_div_11_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 42);
    i0.ɵɵtext(3, "unread messages");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" -", ctx_r6.discount, "% ");
} }
function ProductPageComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵtemplate(3, ProductPageComponent_div_1_div_11_span_3_Template, 4, 1, "span", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 2, ctx_r2.product.price), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.product.discount / ctx_r2.product.price * 100 != 0);
} }
function ProductPageComponent_div_1_div_26_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 42);
    i0.ɵɵtext(3, "unread messages");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" -", ctx_r7.discount, "% ");
} }
function ProductPageComponent_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵtemplate(3, ProductPageComponent_div_1_div_26_span_3_Template, 4, 1, "span", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 2, ctx_r3.product.price), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.product.discount / ctx_r3.product.price * 100 != 0);
} }
function ProductPageComponent_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43)(1, "div", 44);
    i0.ɵɵelement(2, "eshop-frontend-carousel", 45);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("images", ctx_r4.products);
} }
const _c0 = function (a0) { return { gold: a0 }; };
function ProductPageComponent_div_1_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_button_38_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.selectSize($event); })("click", function ProductPageComponent_div_1_button_38_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r11); const i_r9 = restoredCtx.index; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.updateSelectedSize(i_r9); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r5.clickedIndex === i_r9))("disabled", f_r8.available ? false : true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(f_r8.size);
} }
function ProductPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, ProductPageComponent_div_1_eeshop_frontend_messages_2_Template, 1, 0, "eeshop-frontend-messages", 4);
    i0.ɵɵelementStart(3, "div", 5)(4, "h1", 6);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 7)(7, "div", 8)(8, "div", 9);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, ProductPageComponent_div_1_div_11_Template, 4, 4, "div", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 11)(13, "div", 12);
    i0.ɵɵelement(14, "ui-gallery", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 14)(16, "div", 15);
    i0.ɵɵelement(17, "img", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 17)(19, "h1", 18);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 19)(22, "div", 20)(23, "div", 21);
    i0.ɵɵtext(24);
    i0.ɵɵpipe(25, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, ProductPageComponent_div_1_div_26_Template, 4, 4, "div", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 22)(28, "div", 20)(29, "div", 23)(30, "h4");
    i0.ɵɵtext(31, "Varianti");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(32, ProductPageComponent_div_1_div_32_Template, 3, 1, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 20)(34, "div", 23)(35, "h4");
    i0.ɵɵtext(36, "Taglia");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 25);
    i0.ɵɵtemplate(38, ProductPageComponent_div_1_button_38_Template, 2, 5, "button", 26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div", 27)(40, "div", 28)(41, "label", 29);
    i0.ɵɵtext(42, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "p-inputNumber", 30);
    i0.ɵɵlistener("ngModelChange", function ProductPageComponent_div_1_Template_p_inputNumber_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.quantity = $event; })("click", function ProductPageComponent_div_1_Template_p_inputNumber_click_43_listener() { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.checkQuantity(); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 31)(45, "button", 32);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_Template_button_click_45_listener() { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.addProductToCart(); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 33)(47, "h1", 34);
    i0.ɵɵtext(48, "Product description");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(49, "hr")(50, "div", 35);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(51, "div", 36);
    i0.ɵɵelement(52, "div", 37);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.displaySuccessBanner);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 19, ctx_r0.product.price - ctx_r0.product.discount));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.product.discount != 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("images", ctx_r0.product.images)("image", ctx_r0.product.image)("product", ctx_r0.product);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("src", ctx_r0.brandLogoBlob, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(25, 21, ctx_r0.product.price - ctx_r0.product.discount));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.product.discount != 0);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r0.menProd);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r0.filteredVariants);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.quantity)("showButtons", true)("min", 0)("max", ctx_r0.maxInv);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.button);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r0.product.description, i0.ɵɵsanitizeHtml);
} }
export class ProductPageComponent {
    constructor(prodService, WprodService, route, router, cartService, variantService, messageService, icon, location, cart) {
        this.prodService = prodService;
        this.WprodService = WprodService;
        this.route = route;
        this.router = router;
        this.cartService = cartService;
        this.variantService = variantService;
        this.messageService = messageService;
        this.icon = icon;
        this.location = location;
        this.cart = cart;
        this.variants = [];
        this.filteredVariants = [];
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
    }
    async ngOnInit() {
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
                    summary: 'Success',
                    detail: `Product Added to cart!`
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
                    summary: 'Success',
                    detail: `Product Added to cart!`
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
            this.W_prodname = this.product.name;
            this.prodId = this.product.productId;
            this.getProdByProdId();
            this.discount = Math.round((this.product.discount / this.product.price) * 100);
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
            this.filteredVariants.forEach(element => {
                if (element.inventory == 0)
                    element.available = false;
            });
        });
    }
    _getWSizes() {
        this.variantService
            .getVariants()
            .pipe(takeUntil(this.endSubs$))
            .subscribe((variants) => {
            this.variants = variants;
            this.filteredVariants = this.variants.filter((size) => size.product === this.currentId);
            this.filteredVariants.sort((a, b) => (a.size < b.size ? -1 : 1));
            this.filteredVariants.forEach(element => {
                if (element.inventory == 0)
                    element.available = false;
            });
            // //console.log(this.filteredVariants);
        });
    }
    /**questa funzione sembra solo gestire il max input */
    selectSize(event, index) {
        //console.log("filteredVariants: " + this.filteredVariants);
        this.clickedIndex = index;
        //console.log("index : " + index);
        this.selected = true;
        this.button = false;
        const temp = event.target.innerHTML;
        // //console.log(temp);
        this.selectedSize = this.filteredVariants.filter((x) => x.size === temp);
        // //console.log("selected size= " + JSON.stringify(this.selectedSize));
        if (this.selectedSize[0].inventory >= 1) {
            this.minInv = 1;
            this.maxInv = this.selectedSize[0].inventory;
            this.quantity = 0;
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
    selectColor(prodId) {
        // //console.log(prodId);
        this._getProduct(prodId);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['products/' + prodId]);
        });
    }
    selectWColor(prodId) {
        // //console.log(prodId);
        this._getWproduct(prodId);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['women-products/' + prodId]);
        });
    }
    updateSelectedSize(index) {
        this.filteredVariants[index];
        //console.log("index : " + index);
        this.clickedIndex = index;
        //console.log("size = " + JSON.stringify(this.filteredVariants[index]));
        let selectedVariant = this.filteredVariants[index];
        let selectedVariantId = this.filteredVariants[index].id;
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
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(i0.ɵɵdirectiveInject(i1.ProductsService), i0.ɵɵdirectiveInject(i2.W_ProductsService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.CartService), i0.ɵɵdirectiveInject(i5.VariantsService), i0.ɵɵdirectiveInject(i6.MessageService), i0.ɵɵdirectiveInject(i4.CartIconComponent), i0.ɵɵdirectiveInject(i7.Location), i0.ɵɵdirectiveInject(i8.Cart)); };
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 2, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Nova Flat", "rel", "stylesheet"], ["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "grid", "w-100"], ["style", "max-width:40vw", 4, "ngIf"], [1, "product-name-sm", "sm:col-12"], [2, "font-family", "monospace !important", "padding-bottom", "0", "margin-bottom", "0"], [1, "product-price-sm"], [1, "row", "w-100", 2, "justify-content", "center"], [1, "col-12", 2, "font-size", "x-large"], ["class", "col-auto", "style", "text-decoration:  line-through; font-weight: 100; color: rgb(98, 98, 98);", 4, "ngIf"], [1, "row", "w-100", 2, "justify-content", "space-around"], [1, "col-12", "col-md-7", "gallery", 2, "border-right", "10px solid white"], [3, "images", "image", "product"], [1, "col-10", "col-md-5", "product", 2, "display", "flex", "flex-direction", "column", "align-items", "center", "padding", "1em", "line-height", "1.5em"], [1, "brand-logo", "w-100"], [3, "src"], [1, "product-name", "w-100"], [2, "font-family", "monospace !important"], [1, "product-price"], [1, "row", "w-100"], [1, "col-auto", 2, "font-size", "x-large"], [1, "grid", "p-4", "w-100", 2, "padding-right", "0 !important"], [1, "col-3", "my-auto"], ["class", "col-9", "style", "padding-left: 20px", 4, "ngIf"], [1, "sizes", "col-9", 2, "display", "flex", "flex-direction", "row", "align-items", "center", "flex-flow", "wrap", "padding-left", "20px"], ["class", "circle", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "product-quantity", 2, "display", "flex", "width", "100%", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [1, "", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["for", "quantity", 2, "padding-right", "10px"], ["inputId", "quantity", "mode", "decimal", 3, "ngModel", "showButtons", "min", "max", "ngModelChange", "click"], [1, "product-action", "col-12", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Add to cart", 1, "", 3, "disabled", "click"], [1, "col-12", "desc-box"], [2, "text-align", "center", "color", "black", "font-size", "18px"], [1, "desc", 3, "innerHTML"], [1, "row", 2, "justify-content", "center"], [1, "col-7"], [2, "max-width", "40vw"], [1, "col-auto", 2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(98, 98, 98)"], ["class", "badge rounded-pill bg-danger", "style", " border-radius: 5px!important;", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-danger", 2, "border-radius", "5px!important"], [1, "visually-hidden"], [1, "col-9", 2, "padding-left", "20px"], [2, "display", "flex", "flex-flow", "wrap"], [3, "images"], [1, "circle", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵtemplate(1, ProductPageComponent_div_1_Template, 53, 23, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i7.NgIf, i9.GalleryComponent, i9.CarouselComponent, i7.NgForOf, i7.NgClass, i10.InputNumber, i11.NgControlStatus, i11.NgModel, i12.ButtonDirective], pipes: [i7.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', styles: [], template: "<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\n<div class=\"product-page\" *ngIf=\"product\">\n  <div class=\"grid w-100\">\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\n    <div class=\"product-name-sm sm:col-12\">\n\n      <h1 style=\"font-family: monospace !important; padding-bottom: 0; margin-bottom: 0;\">{{product.name}}</h1>\n    </div>\n    <!--\n        <div class=\"rating-sm\">\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\n        </div> -->\n    <div class=\"product-price-sm\">\n      <div class=\" row w-100\" style=\"justify-content: center;\">\n        <div class=\"col-12\" style=\"font-size: x-large;\">{{product.price - product.discount | currency}}</div>\n        <div  *ngIf=\"product.discount != 0\" class=\"col-auto\"  style=\"text-decoration:  line-through; font-weight: 100; color: rgb(98, 98, 98);\">{{product.price | currency}} \n          <span *ngIf=\"(product.discount / product.price) * 100 != 0\"  class=\"badge rounded-pill bg-danger\" style=\" border-radius: 5px!important;\">\n              -{{discount}}%\n              <span class=\"visually-hidden\">unread messages</span>\n            </span></div>\n       \n        \n       \n      </div>\n    </div>\n\n    <div class=\"row w-100\" style=\"justify-content: space-around\">\n    <div class=\"col-12 col-md-7 gallery\"  style=\"  border-right: 10px solid white;\">\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\" ></ui-gallery>\n    </div>\n\n    <div class=\"col-10 col-md-5 product\" style=\"display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding:1em;\n  line-height:1.5em;\">\n\n      <div class=\"brand-logo w-100\">\n        <img src='{{brandLogoBlob}}'>\n      </div>\n\n      <div class=\"product-name w-100\">\n        <h1 style=\"font-family: monospace !important;\">{{product.name}}</h1>\n      </div>\n \n      <div class=\"product-price\">\n        <div class=\" row w-100\">\n          <div class=\"col-auto\" style=\"font-size: x-large;\">{{product.price - product.discount | currency}}</div>\n          <div *ngIf=\"product.discount != 0\" class=\"col-auto\"  style=\"text-decoration:  line-through; font-weight: 100; color: rgb(98, 98, 98);\">{{product.price | currency}}\n            <span *ngIf=\"(product.discount / product.price) * 100 != 0\"  class=\"badge rounded-pill bg-danger\" style=\" border-radius: 5px!important;\">\n                -{{discount}}%\n                <span class=\"visually-hidden\">unread messages</span>\n              </span></div>\n        </div>\n      </div>\n\n  \n        <div class=\"grid p-4 w-100\" style=\"padding-right: 0 !important;\">\n          \n\n          <div class=\"row w-100\">\n            <div class=\"col-3 my-auto\"><h4>Varianti</h4></div>\n\n            <div class=\"col-9\" *ngIf=\"menProd\" style=\"padding-left: 20px\">\n              <div  style=\"display: flex; flex-flow: wrap;\">\n                \n                <eshop-frontend-carousel  [images]=\"products\" ></eshop-frontend-carousel>\n                 <!-- <div [style.background-color]=\"'rgb(' + product.color + ')'\" class=\"circle \" style=\"min-width: 25px; min-height: 25px;\" *ngFor=\"let product of products, let i = index\"\n                    (click)=\"selectColor(product.id)\"></div>\n                    -->\n              </div>\n            </div>\n          </div>\n         \n\n\n\n\n          <div class=\"row w-100\">\n            <div class=\"col-3 my-auto\"><h4>Taglia</h4></div>\n            <div class=\"sizes col-9\" style=\"display: flex;flex-direction: row; align-items: center; flex-flow: wrap;  padding-left: 20px;\">\n              <button [ngClass]=\"{gold: clickedIndex === i}\" class=\"circle\" [disabled]=\"f.available? false : true\"\n                *ngFor=\"let f of filteredVariants, let i = index\" (click)=\"selectSize($event)\"\n                (click)=\"updateSelectedSize(i)\">{{f.size}}</button>\n            </div>\n          </div>\n\n          <div class=\"product-quantity\" style=\"display: flex; width: 100%;flex-direction: row;justify-content: center;align-items: center;\">\n            <div class=\"\" style=\"display: flex;flex-direction: row;justify-content: center;align-items: center;\">\n              <label for=\"quantity\" style=\"padding-right: 10px;\">Quantity</label>\n              <p-inputNumber [(ngModel)]=\"quantity\" inputId=\"quantity\" mode=\"decimal\" [showButtons]=\"true\"\n                [min]=\"0\" [max]=\"maxInv\" (click)=\"checkQuantity()\">\n              </p-inputNumber>\n            </div>\n          </div>\n\n          <div class=\" product-action col-12\" style=\"display: flex;flex-direction: row;justify-content: center;align-items: center;\">\n            <button [disabled]=\"button\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"\"\n              (click)=\"addProductToCart()\">\n            </button>\n          </div>\n        </div>\n\n     \n\n      <div class=\"col-12 desc-box\">\n\n        <h1 style=\"text-align: center; color: black; font-size: 18px;\">Product description</h1>\n        <hr>\n        <div class=\"desc\" [innerHTML]=\"product.description\"></div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row\" style=\"justify-content: center;\">\n    <div class=\"col-7\"></div>\n    <!-- <div class=\"col-5 desc-box\" style=\"font-weight: 600; font-family: 'Nova Flat';font-size: 22px;    border-top: 1px solid var(--surface-300); margin-top: 10px; background: linear-gradient(#682e429b, #682e4213);\n    padding:1em;\n  line-height:1.5em;\n    border:solid 5px rgb(0, 0, 0);\">\n      <h1 style=\"text-align: center; color: white; \">Product description</h1>\n      <hr>\n      <div class=\"desc\" style=\" padding-left: 5vw; padding-right: 5vw; padding-top: 3vw;  display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n      text-align: center;\" [innerHTML]=\"product.description\"></div>\n    </div> -->\n  </div>\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.W_ProductsService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.CartService }, { type: i5.VariantsService }, { type: i6.MessageService }, { type: i4.CartIconComponent }, { type: i7.Location }, { type: i8.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVEsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNqQjlELCtDQUF5Rzs7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Q0FBQyxNQUFNLEdBQUksS0FBSyxDQUFDO1NBQ3RCO2FBQUk7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7O3dGQTNiVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQzVCakMsMEJBQWdGO1FBQ2hGLHVFQWdJTTs7UUFoSXFCLGVBQWE7UUFBYixrQ0FBYTs7dUZEMkIzQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSw2QkFBNkIsVUFFL0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5cbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdEx1Y2EgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcbmltcG9ydCB7IFN1YmplY3QsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENhcnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XG5pbXBvcnQgeyBWYXJpYW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ZhcmlhbnQnO1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IFdfUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy93LXByb2R1Y3QnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBXX1Byb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBWYXJpYW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92YXJpYW50cy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0LXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNsaWNrZWRJbmRleDogbnVtYmVyO1xuICB2YXJpYW50OiBWYXJpYW50O1xuICB2YXJpYW50czogVmFyaWFudFtdID0gW107XG4gIGZpbHRlcmVkVmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xuICBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuICBXX3Byb2R1Y3Q6IFdfUHJvZHVjdDtcbiAgcHJvZE5hbWUgPSAnJztcbiAgcHJvZElkID0gJyc7XG4gIFdfcHJvZG5hbWUgPSAnJztcbiAgbWVuUHJvZCA9IHRydWU7XG4gIHdQcm9kID0gZmFsc2U7XG4gIHByb2R1Y3RzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgbGVuOiBudW1iZXI7XG4gIGNvbG9yczogUHJvZHVjdDEyM1tdID0gW107XG4gIHNpbWFsUHJvZHVjdHM6IHN0cmluZ1tdID0gW107XG4gIG11bHRpcGxlQ29sb3JzOiBib29sZWFuO1xuICBlbmRTdWJzJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcXVhbnRpdHkgPSAwO1xuICBjdXJyZW50SWQ7XG4gIGRpc3BsYXlTdWNjZXNzQmFubmVyID0gZmFsc2U7XG4gIHNlbGVjdGVkID0gZmFsc2U7XG4gIGJ1dHRvbiA9IHRydWU7XG4gIHNlbGVjdGVkU2l6ZTogVmFyaWFudFtdID0gW107XG4gIGF2YWlsYWJpbGl0eTogYW55W10gPSBbXTtcbiAgYXZhaWxhYmxlOiBib29sZWFuO1xuICBtaW5JbnY6IG51bWJlcjtcbiAgbWF4SW52OiBudW1iZXI7XG4gIHVybDtcbiAgZGlzY291bnQgPSAwO1xuICBwOiBQcm9kdWN0THVjYTtcbiAgYnJhbmRMb2dvIDogc3RyaW5nO1xuICBicmFuZE1hcCA9IG5ldyBNYXA8c3RyaW5nLHN0cmluZz4oKTsgXG4gIGJyYW5kTG9nb0Jsb2I7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvZFNlcnZpY2U6IFByb2R1Y3RzU2VydmljZSxcbiAgICBwcml2YXRlIFdwcm9kU2VydmljZTogV19Qcm9kdWN0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIHZhcmlhbnRTZXJ2aWNlOiBWYXJpYW50c1NlcnZpY2UsXG5cbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGljb246IENhcnRJY29uQ29tcG9uZW50LFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgY2FydCA6IENhcnRcblxuXG4gICkgeyAgICAgdGhpcy5wID0gbmV3IFByb2R1Y3RMdWNhKClcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjNzg4OTMwOWRlOTYwMTgwZGE0YVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vYmxhdWVyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjEzYzg5ZTkzMDlkZTk2MDE4MGRhNGRcIiwgXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9vbGRyaXZlci5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTY3YmQxY2JhOGExZTBkOWMxYWY4OFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vY29sbWFyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODllZmUxZDYyMzg2Y2MyMjUyNWI2XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9lYTcucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjFlMWQ2MjM4NmNjMjI1MjViOVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vZnJlZHBlcnJ5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmMzcxZDYyMzg2Y2MyMjUyNWJjXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9rd2F5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjE4OWY0ODFkNjIzODZjYzIyNTI1YmZcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2xhY29zdGUucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjdkMWQ2MjM4NmNjMjI1MjVjMlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vbXVycGh5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmOTgxZDYyMzg2Y2MyMjUyNWM1XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9wZW5pbnN1bGEucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZmFkMWQ2MjM4NmNjMjI1MjVjOFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vc2F1Y29ueS5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZmJiMWQ2MjM4NmNjMjI1MjVjYlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vc3VuZGVrLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjMyZTA1ZjNiOGM1NjdkZTVlYTgzNjY5XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9iYXJib3VyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU3ZTI1MDZiYTY1ZTU5M2JhYTgxXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYzNmI1N2YzNTA2YmE2NWU1OTNiYWE4NFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vU2NyZWVuc2hvdC5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU4MDY1MDZiYTY1ZTU5M2JhYTg3XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgXG4gICAgdGhpcy5hdmFpbGFibGUgPSB0cnVlO1xuXG5cblxuXG4gICAgLy9jb25zb2xlLmxvZyhcImNhcnQgPSBcIiArIHRoaXMuY2FydC5nZXRKc29uKCkpO1xuXG5cbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xuXG5cbiAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMucHJvZHVjdElkKSB7XG4gICAgICAgLy8gICB0aGlzLl9nZXRQcm9kdWN0KHBhcmFtcy5wcm9kdWN0SWQpO1xuICAgICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLnByb2R1Y3RJZDtcbiAgICAgICBcbiAgICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xuICAgICAgICAgIC8vIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZVxuICAgICAgICAgIC8vLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2ROYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbi8vICAgICAgXG4gXG5cbi8vXG4gICAgdGhpcy5wID0gbmV3IFByb2R1Y3RMdWNhKCk7XG4gICAgdGhpcy5fZ2V0UHJvZHVjdDIoKS50aGVuKFxuICAgICBkYXRhID0+e1xuICAgICAgIHRoaXMucCA9IGRhdGE7XG4gICAgIH1cbiAgICAgKS5jYXRjaCggZXJyb3IgPT57XG4gICAgICAgdGhpcy5wID0gbnVsbDtcbiAgICAgfSk7XG4gICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICBpZiAocGFyYW1zLnByb2R1Y3RJZCkge1xuICAgICAgICB0aGlzLl9nZXRXcHJvZHVjdChwYXJhbXMucHJvZHVjdElkKTtcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMucHJvZHVjdElkO1xuICAgICAgICB0aGlzLl9nZXRTaXplcygpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicHJvZHVjdD0gXCIgKyB0aGlzLnByb2R1Y3QpO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xuICAgICAgICAvLyB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWVcbiAgICAgICAgLy8vLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZE5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmVuZFN1YnMkLmNvbXBsZXRlKCk7XG4gIH1cblxuXG4gIFxuXG4gIGFzeW5jIGFqYXhHZXRJbWFnZURhdGEodXJsKSB7XG4gIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7Y2FjaGU6IFwibm8tc3RvcmVcIn0pO1xuICAgIGNvbnN0IGltYWdlQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICByZXR1cm4gaW1hZ2VCbG9iO1xuXG5cbiAgLy9Db2RlIHRvIGdldCBiYXNlNjQgaW1hZ2Ugc3RyaW5nXG5cbn1cbiAgLyoqXG4gICAqIFNlIGlsIHByb2RvdHRvIGVzaXN0ZSBnacOgLCBhZ2dpdW5nbyB1bmEgdmFyaWFudHMsIHNlbm5vIGFnZ2l1bmdvIHVuIG51b3ZvIHByb2RvdHRvIGNvbiBsYSBzdWEgdmFyaWFudHNcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFkZFByb2R1Y3RUb0NhcnQoKSB7XG5cbiAgICBpZih0aGlzLnF1YW50aXR5ICE9IDApIHtcblxuICAgbGV0IHBWYXJpYW50ID0gbmV3IFByb2R1Y3RWYXJpYW50KHRoaXMuc2VsZWN0ZWRTaXplWzBdLmlkLCB0aGlzLnNlbGVjdGVkU2l6ZVswXS5zaXplLCB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnksIDAsIFN0cmluZyh0aGlzLnNlbGVjdGVkU2l6ZVswXS5iYXJjb2RlKSk7XG5cblxuICAgICAgaWYodGhpcy5jYXJ0LmNvbnRhaW5zUHJvZHVjdCh0aGlzLnApKXtcbiAgIFxuICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuY2FydC5nZXRQcm9kdWN0SW5kZXgodGhpcy5wKTtcbiAgICAgICAgXG4gICAgICAgICAgbGV0IHByb2R1Y3QgPSB0aGlzLmNhcnQuZ2V0UHJvZHVjdChpbmRleCk7XG4gICBcbiAgICAgICAgICBwcm9kdWN0LmFkZFZhcmlhbnQocFZhcmlhbnQsIHRoaXMucXVhbnRpdHkpO1xuXG4gICAgIC8vICAgICB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnkgLT0gcHJvZHVjdC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRTZWxlY3RlZCgpO1xuICAgICAgICAgIHRoaXMucCA9IHByb2R1Y3Q7XG4gICAgICAgICAgdGhpcy5tYXhJbnYgPSAgdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldEludmVudG9yeSgpO1xuXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImkgaGF2ZSBzZXQgdGhlIG1heEludiB0bzogXCIgKyB0aGlzLm1heEludik7XG4gICAgICAgICAgaWYodGhpcy5tYXhJbnYgPD0gMCl7XG4gICAgICAgICAgICB0aGlzLm1pbkludiA9IDA7XG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XG4gICAgICAgICAgdGhpcy5jYXJ0LnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgIHRoaXMuY2hlY2tRdWFudGl0eSgpO1xuICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgICBzdW1tYXJ5OiAnU3VjY2VzcycsXG4gICAgICAgICAgICBkZXRhaWw6IGBQcm9kdWN0IEFkZGVkIHRvIGNhcnQhYFxuICAgICAgICAgIH0pO1xuXG5cbiAgICAgIH1lbHNle1xuICAgICAgXG4gICAgICAgIHRoaXMucC5hZGRWYXJpYW50KHBWYXJpYW50LCB0aGlzLnF1YW50aXR5KTtcbiAgICAgICAvLyB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnkgLT0gdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldFNlbGVjdGVkKCk7XG4gICAgICAgIHRoaXMubWF4SW52ID0gIHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRJbnZlbnRvcnkoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImkgaGF2ZSBzZXQgdGhlIG1heEludiB0bzogXCIgKyB0aGlzLm1heEludik7XG4gICAgICAgIGlmKHRoaXMubWF4SW52IDw9IDApe1xuICAgICAgICAgIHRoaXMubWluSW52ID0gMDtcbiAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAgdGhpcy5jYXJ0LmFkZFByb2R1Y3RMdWNhKHRoaXMucCk7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFudGl0eSgpO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXNzJyxcbiAgICAgICAgICBkZXRhaWw6IGBQcm9kdWN0IEFkZGVkIHRvIGNhcnQhYFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBfZ2V0UHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZVxuICAgICAgLmdldFByb2R1Y3QoaWQpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXNQcm9kdWN0KSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc1Byb2R1Y3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdCBjb2xvcj8gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3QpKTtcbiAgICAgICAgdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lO1xuICAgICAgICB0aGlzLnByb2RJZCA9IHRoaXMucHJvZHVjdC5wcm9kdWN0SWQ7XG4gICAgICAgIHRoaXMucHJvZHVjdC5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xuICAgICAgICB0aGlzLmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnJhbmQgbG9nbyA9IFwiICsgdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKSApXG4gICAgICAgIHRoaXMuZ2V0UHJvZEJ5UHJvZElkKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyByZXN0aXR1aXNjZSBpbCBwcm9kb3R0byBkZWxsYSBwYWdpbmFcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgX2dldFByb2R1Y3QyKCkge1xuXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxQcm9kdWN0THVjYT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5wcm9kU2VydmljZVxuICAgICAgLmdldFByb2R1Y3QodGhpcy5jdXJyZW50SWQpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXNQcm9kdWN0KSA9PiB7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhcInJlcyBwcm9kdWN0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc1Byb2R1Y3QpKTtcbiAgICAgICAgbGV0IHAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcbiAgICAgICAgcC5zZXRJZChyZXNQcm9kdWN0LmlkKTtcbiAgICAgICAgcC5zZXREaXNjb3VudChyZXNQcm9kdWN0LmRpc2NvdW50KTtcbiAgICAgICAgcC5zZXRQcmljZShyZXNQcm9kdWN0LnByaWNlKTtcbiAgICAgICAgcC5zZXRUaGVNYWluSW1hZ2UocmVzUHJvZHVjdC5pbWFnZSk7XG4gICAgICAgIHAuc2V0TmFtZShyZXNQcm9kdWN0Lm5hbWUpO1xuXG4gICAgICAgIHJlc29sdmUocCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCBkYXRhID0gYXdhaXQgcHJvbWlzZTtcbiAgICByZXR1cm4gZGF0YTtcblxuXG4gIH1cblxuICBwcml2YXRlIF9nZXRXcHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0KGlkKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZShhc3luYyAocmVzUHJvZHVjdCkgPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNQcm9kdWN0O1xuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5XX3Byb2RuYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWU7XG4gICAgICAgIHRoaXMucHJvZElkID0gdGhpcy5wcm9kdWN0LnByb2R1Y3RJZDtcbiAgICAgICAgdGhpcy5nZXRQcm9kQnlQcm9kSWQoKTtcblxuICAgICAgICB0aGlzLmRpc2NvdW50ID0gTWF0aC5yb3VuZCggKHRoaXMucHJvZHVjdC5kaXNjb3VudC90aGlzLnByb2R1Y3QucHJpY2UpICAqIDEwMClcblxuICAgICAgICB0aGlzLnByb2R1Y3QuYnJhbmRMb2dvID0gdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKTtcbiAgICAgICAgdGhpcy5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xuXG4gICAgICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMuYnJhbmRMb2dvKTtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgdGhpcy5icmFuZExvZ29CbG9iID0gYmFzZTY0ZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBfZ2V0U2l6ZXMoKSB7XG4gICAgdGhpcy52YXJpYW50U2VydmljZVxuICAgICAgLmdldFZhcmlhbnRzKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHZhcmlhbnRzKSA9PiB7XG4gICAgICAgIHRoaXMudmFyaWFudHMgPSB2YXJpYW50cztcblxuXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cyA9IHRoaXMudmFyaWFudHMuZmlsdGVyKFxuICAgICAgICAgIChzaXplKSA9PiBzaXplLnByb2R1Y3QgPT09IHRoaXMuY3VycmVudElkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5zb3J0KChhLCBiKSA9PiAoYS5zaXplIDwgYi5zaXplID8gLTEgOiAxKSk7XG4gICAgIFxuICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZihlbGVtZW50LmludmVudG9yeSA9PSAwKSBlbGVtZW50LmF2YWlsYWJsZSA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgICAgIFxuICAgICAgfSk7XG4gIH1cblxuICBfZ2V0V1NpemVzKCkge1xuICAgIHRoaXMudmFyaWFudFNlcnZpY2VcbiAgICAgIC5nZXRWYXJpYW50cygpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXG4gICAgICAuc3Vic2NyaWJlKCh2YXJpYW50cykgPT4ge1xuICAgICAgICB0aGlzLnZhcmlhbnRzID0gdmFyaWFudHM7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cyA9IHRoaXMudmFyaWFudHMuZmlsdGVyKFxuICAgICAgICAgIChzaXplKSA9PiBzaXplLnByb2R1Y3QgPT09IHRoaXMuY3VycmVudElkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5zb3J0KChhLCBiKSA9PiAoYS5zaXplIDwgYi5zaXplID8gLTEgOiAxKSk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50LmludmVudG9yeSA9PSAwKSBlbGVtZW50LmF2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuZmlsdGVyZWRWYXJpYW50cyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKnF1ZXN0YSBmdW56aW9uZSBzZW1icmEgc29sbyBnZXN0aXJlIGlsIG1heCBpbnB1dCAqL1xuICBzZWxlY3RTaXplKGV2ZW50OiBhbnksIGluZGV4KSB7XG4gICAgLy9jb25zb2xlLmxvZyhcImZpbHRlcmVkVmFyaWFudHM6IFwiICsgdGhpcy5maWx0ZXJlZFZhcmlhbnRzKTtcbiAgICB0aGlzLmNsaWNrZWRJbmRleCA9IGluZGV4O1xuICAgIC8vY29uc29sZS5sb2coXCJpbmRleCA6IFwiICsgaW5kZXgpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuYnV0dG9uID0gZmFsc2U7XG4gICAgY29uc3QgdGVtcCA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUw7XG4gICAvLyAvL2NvbnNvbGUubG9nKHRlbXApO1xuXG4gICAgdGhpcy5zZWxlY3RlZFNpemUgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHMuZmlsdGVyKCh4KSA9PiB4LnNpemUgPT09IHRlbXApO1xuICAgLy8gLy9jb25zb2xlLmxvZyhcInNlbGVjdGVkIHNpemU9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZFNpemUpKTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnkgPj0gMSkge1xuICAgICAgdGhpcy5taW5JbnYgPSAxO1xuICAgICAgdGhpcy5tYXhJbnYgPSB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnk7XG4gICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKFwiaW0gZG9pbmcgc29tZXRoaW5nIC0+IHNlbGVjdFNpemUoKVwiKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcm9kQnluYW1lKCkge1xuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQodGhpcy5wcm9kTmFtZSkuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgICB0aGlzLmxlbiA9IHRoaXMucHJvZHVjdHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XG4gICAgICAgIHRoaXMuc2ltYWxQcm9kdWN0cy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uaW1hZ2UpO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XG4gICAgICB9XG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xuXG4gICAgIGNvbnNvbGUubG9nKFwic2ltaWxhciBwcm9kdWN0cyA9IFwiICsgdGhpcy5zaW1hbFByb2R1Y3RzKVxuICAgICAgaWYgKHRoaXMubGVuID49IDEpIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kQnlQcm9kSWQoKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlJZCh0aGlzLnByb2RJZCkuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgICB0aGlzLmxlbiA9IHRoaXMucHJvZHVjdHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XG4gICAgICAgIHRoaXMuc2ltYWxQcm9kdWN0cy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uaW1hZ2UpO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XG4gICAgICB9XG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xuXG4gICAgIGNvbnNvbGUubG9nKFwic2ltaWxhciBwcm9kdWN0cyA9IFwiICsgdGhpcy5zaW1hbFByb2R1Y3RzKVxuICAgICAgaWYgKHRoaXMubGVuID49IDEpIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0V1Byb2RCeW5hbWUoKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlOYW1lKHRoaXMuV19wcm9kbmFtZSkuc3Vic2NyaWJlKFxuICAgICAgKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XG4gICAgICAgICAgdGhpcy5zaW1hbFByb2R1Y3RzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5pbWFnZSk7XG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuID4gMSkge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RDb2xvcihwcm9kSWQpIHtcbiAgIC8vIC8vY29uc29sZS5sb2cocHJvZElkKTtcbiAgICB0aGlzLl9nZXRQcm9kdWN0KHByb2RJZCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwcm9kdWN0cy8nICsgcHJvZElkXSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RXQ29sb3IocHJvZElkKSB7XG4gICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XG4gICAgdGhpcy5fZ2V0V3Byb2R1Y3QocHJvZElkKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kSWRdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkU2l6ZShpbmRleCl7XG5cblxuICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF07XG4gICAgLy9jb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XG4gICAgdGhpcy5jbGlja2VkSW5kZXggPSBpbmRleDtcbiAgICAvL2NvbnNvbGUubG9nKFwic2l6ZSA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XSkpO1xuICAgIGxldCBzZWxlY3RlZFZhcmlhbnQgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xuICAgIGxldCBzZWxlY3RlZFZhcmlhbnRJZCA9IHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF0uaWQ7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWRWYXJpYW50SWQgXCIgKyBzZWxlY3RlZFZhcmlhbnRJZCApO1xuXG4gICAgbGV0IHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgPSB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoc2VsZWN0ZWRWYXJpYW50SWQpO1xuICAgIGlmKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgIT0gbnVsbCl7XG4gICAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEpzb24oKSk7XG4gICAgdGhpcy5tYXhJbnYgPSBzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEludmVudG9yeSgpO1xuICAgIGlmKHRoaXMubWF4SW52PT09MCB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gdHJ1ZTtcbiAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIGFscmVhZHkgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRWYXJpYW50LmludmVudG9yeTtcbiAgICAgIGlmKHRoaXMubWF4SW52PT09MCAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9ICB0cnVlO1xuICAgICAgLy9jb25zb2xlLmxvZyhcInRoaXMgcHJvZHVjdCBpcyBOT1QgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICB9XG5cbiAgfVxuXG4gIGNoZWNrUXVhbnRpdHkoKXtcbiAgICBpZiggdGhpcy5xdWFudGl0eSAhPSAwKXtcbiAgICAgIHRoaXMuYnV0dG9uID0gIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5idXR0b24gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdmEgRmxhdCcgcmVsPSdzdHlsZXNoZWV0Jz5cbjxkaXYgY2xhc3M9XCJwcm9kdWN0LXBhZ2VcIiAqbmdJZj1cInByb2R1Y3RcIj5cbiAgPGRpdiBjbGFzcz1cImdyaWQgdy0xMDBcIj5cbiAgICA8ZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzIHN0eWxlPVwibWF4LXdpZHRoOjQwdndcIiAqbmdJZj1cImRpc3BsYXlTdWNjZXNzQmFubmVyXCI+PC9lZXNob3AtZnJvbnRlbmQtbWVzc2FnZXM+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtbmFtZS1zbSBzbTpjb2wtMTJcIj5cblxuICAgICAgPGgxIHN0eWxlPVwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50OyBwYWRkaW5nLWJvdHRvbTogMDsgbWFyZ2luLWJvdHRvbTogMDtcIj57e3Byb2R1Y3QubmFtZX19PC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8IS0tXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmctc21cIj5cbiAgICAgICAgICAgIDxwLXJhdGluZyBbKG5nTW9kZWwpXT1cInByb2R1Y3QucmF0aW5nXCIgW2Rpc2FibGVkXT1cInRydWVcIiBbY2FuY2VsXT1cImZhbHNlXCI+PC9wLXJhdGluZz5cbiAgICAgICAgPC9kaXY+IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXByaWNlLXNtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiIHJvdyB3LTEwMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiBzdHlsZT1cImZvbnQtc2l6ZTogeC1sYXJnZTtcIj57e3Byb2R1Y3QucHJpY2UgLSBwcm9kdWN0LmRpc2NvdW50IHwgY3VycmVuY3l9fTwvZGl2PlxuICAgICAgICA8ZGl2ICAqbmdJZj1cInByb2R1Y3QuZGlzY291bnQgIT0gMFwiIGNsYXNzPVwiY29sLWF1dG9cIiAgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246ICBsaW5lLXRocm91Z2g7IGZvbnQtd2VpZ2h0OiAxMDA7IGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XCI+e3twcm9kdWN0LnByaWNlIHwgY3VycmVuY3l9fSBcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIihwcm9kdWN0LmRpc2NvdW50IC8gcHJvZHVjdC5wcmljZSkgKiAxMDAgIT0gMFwiICBjbGFzcz1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYW5nZXJcIiBzdHlsZT1cIiBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgICAte3tkaXNjb3VudH19JVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnVucmVhZCBtZXNzYWdlczwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj48L2Rpdj5cbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNyBnYWxsZXJ5XCIgIHN0eWxlPVwiICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgd2hpdGU7XCI+XG4gICAgICA8dWktZ2FsbGVyeSAgW2ltYWdlc109XCJwcm9kdWN0LmltYWdlc1wiIFtpbWFnZV09XCJwcm9kdWN0LmltYWdlXCIgW3Byb2R1Y3RdPVwicHJvZHVjdFwiID48L3VpLWdhbGxlcnk+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIGNvbC1tZC01IHByb2R1Y3RcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6MWVtO1xuICBsaW5lLWhlaWdodDoxLjVlbTtcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImJyYW5kLWxvZ28gdy0xMDBcIj5cbiAgICAgICAgPGltZyBzcmM9J3t7YnJhbmRMb2dvQmxvYn19Jz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1uYW1lIHctMTAwXCI+XG4gICAgICAgIDxoMSBzdHlsZT1cImZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcIj57e3Byb2R1Y3QubmFtZX19PC9oMT5cbiAgICAgIDwvZGl2PlxuIFxuICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcHJpY2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIiByb3cgdy0xMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cImZvbnQtc2l6ZTogeC1sYXJnZTtcIj57e3Byb2R1Y3QucHJpY2UgLSBwcm9kdWN0LmRpc2NvdW50IHwgY3VycmVuY3l9fTwvZGl2PlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJwcm9kdWN0LmRpc2NvdW50ICE9IDBcIiBjbGFzcz1cImNvbC1hdXRvXCIgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiAgbGluZS10aHJvdWdoOyBmb250LXdlaWdodDogMTAwOyBjb2xvcjogcmdiKDk4LCA5OCwgOTgpO1wiPnt7cHJvZHVjdC5wcmljZSB8IGN1cnJlbmN5fX1cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiKHByb2R1Y3QuZGlzY291bnQgLyBwcm9kdWN0LnByaWNlKSAqIDEwMCAhPSAwXCIgIGNsYXNzPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhbmdlclwiIHN0eWxlPVwiIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICAgICAgLXt7ZGlzY291bnR9fSVcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnVucmVhZCBtZXNzYWdlczwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBwLTQgdy0xMDBcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcIj5cbiAgICAgICAgICBcblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBteS1hdXRvXCI+PGg0PlZhcmlhbnRpPC9oND48L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCIgKm5nSWY9XCJtZW5Qcm9kXCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDIwcHhcIj5cbiAgICAgICAgICAgICAgPGRpdiAgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWZsb3c6IHdyYXA7XCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGVzaG9wLWZyb250ZW5kLWNhcm91c2VsICBbaW1hZ2VzXT1cInByb2R1Y3RzXCIgPjwvZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCIncmdiKCcgKyBwcm9kdWN0LmNvbG9yICsgJyknXCIgY2xhc3M9XCJjaXJjbGUgXCIgc3R5bGU9XCJtaW4td2lkdGg6IDI1cHg7IG1pbi1oZWlnaHQ6IDI1cHg7XCIgKm5nRm9yPVwibGV0IHByb2R1Y3Qgb2YgcHJvZHVjdHMsIGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0Q29sb3IocHJvZHVjdC5pZClcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICBcblxuXG5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBteS1hdXRvXCI+PGg0PlRhZ2xpYTwvaDQ+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l6ZXMgY29sLTlcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC1mbG93OiB3cmFwOyAgcGFkZGluZy1sZWZ0OiAyMHB4O1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIFtuZ0NsYXNzXT1cIntnb2xkOiBjbGlja2VkSW5kZXggPT09IGl9XCIgY2xhc3M9XCJjaXJjbGVcIiBbZGlzYWJsZWRdPVwiZi5hdmFpbGFibGU/IGZhbHNlIDogdHJ1ZVwiXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyZWRWYXJpYW50cywgbGV0IGkgPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RTaXplKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJ1cGRhdGVTZWxlY3RlZFNpemUoaSlcIj57e2Yuc2l6ZX19PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXF1YW50aXR5XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyB3aWR0aDogMTAwJTtmbGV4LWRpcmVjdGlvbjogcm93O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInF1YW50aXR5XCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxMHB4O1wiPlF1YW50aXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHAtaW5wdXROdW1iZXIgWyhuZ01vZGVsKV09XCJxdWFudGl0eVwiIGlucHV0SWQ9XCJxdWFudGl0eVwiIG1vZGU9XCJkZWNpbWFsXCIgW3Nob3dCdXR0b25zXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIFttaW5dPVwiMFwiIFttYXhdPVwibWF4SW52XCIgKGNsaWNrKT1cImNoZWNrUXVhbnRpdHkoKVwiPlxuICAgICAgICAgICAgICA8L3AtaW5wdXROdW1iZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIgcHJvZHVjdC1hY3Rpb24gY29sLTEyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImJ1dHRvblwiIHBCdXR0b24gcFJpcHBsZSB0eXBlPVwiYnV0dG9uXCIgbGFiZWw9XCJBZGQgdG8gY2FydFwiIGNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFByb2R1Y3RUb0NhcnQoKVwiPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGRlc2MtYm94XCI+XG5cbiAgICAgICAgPGgxIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogYmxhY2s7IGZvbnQtc2l6ZTogMThweDtcIj5Qcm9kdWN0IGRlc2NyaXB0aW9uPC9oMT5cbiAgICAgICAgPGhyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiIFtpbm5lckhUTUxdPVwicHJvZHVjdC5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtN1wiPjwvZGl2PlxuICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC01IGRlc2MtYm94XCIgc3R5bGU9XCJmb250LXdlaWdodDogNjAwOyBmb250LWZhbWlseTogJ05vdmEgRmxhdCc7Zm9udC1zaXplOiAyMnB4OyAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS0zMDApOyBtYXJnaW4tdG9wOiAxMHB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzY4MmU0MjliLCAjNjgyZTQyMTMpO1xuICAgIHBhZGRpbmc6MWVtO1xuICBsaW5lLWhlaWdodDoxLjVlbTtcbiAgICBib3JkZXI6c29saWQgNXB4IHJnYigwLCAwLCAwKTtcIj5cbiAgICAgIDxoMSBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHdoaXRlOyBcIj5Qcm9kdWN0IGRlc2NyaXB0aW9uPC9oMT5cbiAgICAgIDxocj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkZXNjXCIgc3R5bGU9XCIgcGFkZGluZy1sZWZ0OiA1dnc7IHBhZGRpbmctcmlnaHQ6IDV2dzsgcGFkZGluZy10b3A6IDN2dzsgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcIiBbaW5uZXJIVE1MXT1cInByb2R1Y3QuZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICA8L2Rpdj4gLS0+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19