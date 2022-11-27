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
function ProductPageComponent_div_1_eeshop_frontend_messages_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eeshop-frontend-messages", 43);
} }
function ProductPageComponent_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 44);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("\u00A0 ", ctx_r2.product.price, " \u20AC ");
} }
const _c0 = function (a0) { return { gold: a0 }; };
function ProductPageComponent_div_1_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_button_26_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.selectSize($event); })("click", function ProductPageComponent_div_1_button_26_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const i_r5 = restoredCtx.index; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.updateSelectedSize(i_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r3.clickedIndex === i_r5))("disabled", f_r4.available ? false : true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", f_r4.size, " ");
} }
function ProductPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, ProductPageComponent_div_1_eeshop_frontend_messages_2_Template, 1, 0, "eeshop-frontend-messages", 4);
    i0.ɵɵelementStart(3, "div", 5)(4, "div", 6);
    i0.ɵɵelement(5, "ui-gallery", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 8)(7, "div", 9)(8, "div", 10);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 9)(11, "div", 11)(12, "div", 12);
    i0.ɵɵtemplate(13, ProductPageComponent_div_1_span_13_Template, 2, 1, "span", 13);
    i0.ɵɵtext(14, " \u00A0 ");
    i0.ɵɵelementStart(15, "span", 14);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(17, "div", 9)(18, "div", 15);
    i0.ɵɵtext(19, "Varianti");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "eshop-frontend-carousel", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 9)(22, "div", 17);
    i0.ɵɵtext(23, "Taglia");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 18)(25, "div", 19);
    i0.ɵɵtemplate(26, ProductPageComponent_div_1_button_26_Template, 2, 5, "button", 20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 21)(28, "a", 22);
    i0.ɵɵtext(29, "Guida alle taglie");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 9)(31, "div", 23)(32, "button", 24);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.addProductToCart(); });
    i0.ɵɵtext(33, " AGGIUNGI AL CARRELLO ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "div", 5)(35, "div", 25)(36, "span", 26);
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "span", 27);
    i0.ɵɵtext(39, "Klarna");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(40, " \u00A0");
    i0.ɵɵelementStart(41, "a", 28);
    i0.ɵɵtext(42, "Scopri di pi\u00F9");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "div", 9)(44, "div", 29)(45, "p", 30)(46, "button", 31)(47, "div", 32)(48, "span");
    i0.ɵɵtext(49, "DESCRIZIONE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "div", 33);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(51, "svg", 34);
    i0.ɵɵelement(52, "path", 35);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(53, "div", 36)(54, "div", 37);
    i0.ɵɵelement(55, "p", 38);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(56, "div", 9)(57, "div", 39)(58, "p")(59, "button", 40)(60, "div", 32)(61, "span");
    i0.ɵɵtext(62, "MATERIALI E CURA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "div", 33);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(64, "svg", 34);
    i0.ɵɵelement(65, "path", 35);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(66, "div", 36)(67, "div", 41)(68, "p", 42);
    i0.ɵɵtext(69, " 100% poliestere riciclato");
    i0.ɵɵelementEnd()()()()()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.displaySuccessBanner);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("images", ctx_r0.product.images)("image", ctx_r0.product.image)("product", ctx_r0.product);
    i0.ɵɵadvance(4);
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
    i0.ɵɵadvance(18);
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
            for (let i = 0; i <= this.filteredVariants.length; i++) {
                if (this.filteredVariants[i].inventory == 0) {
                    continue;
                }
                else {
                    this.nonEmptyVariants.push(this.filteredVariants[i]);
                }
            }
        });
    }
    /**questa funzione sembra solo gestire il max input */
    selectSize(event, index) {
        //console.log("filteredVariants: " + this.filteredVariants);
        this.clickedIndex = index;
        //console.log("index : " + index);
        this.selected = true;
        this.button = false;
        const temp = event.target.innerHTML.slice(0, -1);
        console.log("temp  =" + temp + "-");
        console.log("filteredVariants = " + JSON.stringify(this.filteredVariants));
        this.selectedSize = this.filteredVariants.filter((x) => x.size === temp);
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
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 2, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Nova Flat", "rel", "stylesheet"], ["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "grid", "w-100", 2, "justify-content", "center"], ["style", "max-width:40vw", 4, "ngIf"], [1, "row", "w-100", 2, "justify-content", "center"], [1, "col-12", "col-md-auto", "gallery", "m-0", "p-0", 2, "border-right", "10px solid white"], [3, "images", "image", "product"], [1, "col-12", "col-md-5", "col-xl-4", "product", 2, "display", "flex", "flex-direction", "column", "align-items", "center", "padding", "1em", "line-height", "1.5em"], [1, "row", "w-100"], [1, "col-auto", 2, "font-size", "24px", "font-weight", "bold"], [1, "col-auto"], [1, "col-auto", 2, "font-weight", "700"], ["style", "text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);", 4, "ngIf"], [2, "color", "black"], [1, "col-auto", 2, "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)"], [2, "padding-left", "0 !important", 3, "images"], [1, "col-12", 2, "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)", "padding-bottom", "0 !important"], [1, "col-12", "p-0"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", 2, "max-width", "100%", "overflow-x", "auto"], ["class", "btn btn-sm m-2 ", "style", "max-width:fit-content; font-weight: 700; margin-top: 0 !important; margin-left: 0 !important;", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "col-auto", 2, "font-weight", "lighter", "font-size", "10px", "color", "rgb(165, 165, 165)"], [2, "cursor", "pointer", "text-decoration", "underline"], [1, "col-12"], ["type", "button", "label", "Add to cart", 1, "btn", "btn-secondary", 2, "width", "100%", 3, "disabled", "click"], [1, "col-auto", 2, "font-size", "10px"], [2, "font-weight", "600", "font-size", "10px", "padding-bottom", "0 !important"], [2, "font-weight", "700"], [2, "font-weight", "600", "font-size", "10px", "padding-bottom", "0 !important", "cursor", "pointer", "text-decoration", "underline"], [1, "col-12", "pb-0"], [1, "mb-0"], ["data-bs-toggle", "collapse", "data-bs-target", "#multiCollapseExample1", "aria-expanded", "false", "aria-controls", "multiCollapseExample2", 2, "min-width", "100%", "text-align", "start", "background-color", "white", "border", "none", "border-top", "1px solid rgb(212, 212, 212)", "border-bottom", "1px solid rgb(212, 212, 212)"], [2, "display", "flex", "justify-content", "space-between", "flex-direction", "row", "width", "100%"], [1, "m-0", 2, "width", "fit-content"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrows-expand"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2ZM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10Z"], [1, "row"], ["id", "multiCollapseExample1", 1, "collapse", "multi-collapse"], [1, "p-1", "border-bottom", "mb-0", 3, "innerHTML"], [1, "col-12", "pt-0"], ["data-bs-toggle", "collapse", "data-bs-target", "#multiCollapseExample2", "aria-expanded", "false", "aria-controls", "multiCollapseExample2", 2, "min-width", "100%", "text-align", "start", "background-color", "white", "border", "none", "border-bottom", "1px solid rgb(212, 212, 212)"], ["id", "multiCollapseExample2", 1, "collapse", "multi-collapse"], [1, "p-1"], [2, "max-width", "40vw"], [2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(255, 0, 0)"], [1, "btn", "btn-sm", "m-2", 2, "max-width", "fit-content", "font-weight", "700", "margin-top", "0 !important", "margin-left", "0 !important", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵtemplate(1, ProductPageComponent_div_1_Template, 70, 12, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i7.NgIf, i9.GalleryComponent, i9.CarouselComponent, i7.NgForOf, i7.NgClass], styles: [".btn.btn-secondary[disabled][_ngcontent-%COMP%]{background-color:#cecece}.gold[_ngcontent-%COMP%]{border:1px solid black!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', template: "<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\n<div class=\"product-page\" *ngIf=\"product\">\n  <div class=\"grid w-100\" style=\"justify-content: center;\">\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\n\n    <!--\n        <div class=\"rating-sm\">\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\n        </div> -->\n    \n\n    <div class=\"row w-100\" style=\"justify-content: center\">\n    <div class=\"col-12 col-md-auto gallery m-0 p-0\"  style=\"  border-right: 10px solid white;\">\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\" ></ui-gallery>\n    </div>\n\n    <div class=\"col-12 col-md-5 col-xl-4 product\" style=\"display: flex;flex-direction: column;align-items: center;padding:1em; line-height:1.5em;\">\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\"font-size: 24px; font-weight:bold\">{{product.name}}</div>\n      </div>\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\">\n          <div  class=\"col-auto\" style=\"font-weight: 700;\">\n            <span *ngIf=\"product.discount != 0\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);\">&nbsp; {{product.price}} \u20AC </span>\n            &nbsp;\n            <span style=\"color: black;\"> {{product.price - product.discount}} \u20AC</span> \n          </div>\n        </div>\n      </div>\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\" font-weight: lighter; font-size: small; color: rgb(143, 143, 143);\">Varianti</div>\n        <eshop-frontend-carousel  [images]=\"products\" style=\"padding-left: 0 !important;\"></eshop-frontend-carousel>\n      </div>\n\n      <div class=\"row w-100\">\n        <div class=\"col-12\" style=\" font-weight: lighter; font-size: small; color: rgb(143, 143, 143); padding-bottom: 0 !important;\">Taglia</div>\n        <div class=\"col-12 p-0\">\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\" style=\"max-width: 100%; overflow-x:auto\">\n            <button [ngClass]=\"{gold: clickedIndex === i}\" class=\"btn btn-sm m-2 \" style=\"max-width:fit-content; font-weight: 700; margin-top: 0 !important; margin-left: 0 !important;\" [disabled]=\"f.available? false : true\"\n            *ngFor=\"let f of nonEmptyVariants, let i = index\" (click)=\"selectSize($event)\"\n            (click)=\"updateSelectedSize(i)\">{{f.size}}\n            </button>            \n          </div>\n  \n        </div>\n        <div class=\"col-auto\" style=\" font-weight: lighter; font-size: 10px; color: rgb(165, 165, 165);\">\n\n            <a style=\"cursor: pointer;  text-decoration: underline;\">Guida alle taglie</a>\n      \n        </div>\n\n        <div class=\"row w-100\">\n          <div class=\"col-12\">\n     \n            <button [disabled]=\"button\" type=\"button\" label=\"Add to cart\" class=\"btn btn-secondary\" style=\"width: 100%;\"\n            (click)=\"addProductToCart()\">\n            AGGIUNGI AL CARRELLO\n           </button>\n          </div>\n        </div>\n\n        <div class=\"row w-100\" style=\"justify-content: center;\">\n          <div class=\"col-auto\" style=\"font-size: 10px;\">\n            <span style=\" font-weight: 600; font-size: 10px; padding-bottom: 0 !important;\">Paga in 3 rate da {{this.klarnaPrice}} \u20AC senza interessi con    &nbsp;</span> <span style=\"font-weight: 700;\">Klarna</span>   &nbsp;<a style=\" font-weight: 600; font-size: 10px; padding-bottom: 0 !important; cursor: pointer;  text-decoration: underline;\">Scopri di pi\u00F9</a>\n          </div>\n        </div>\n\n\n\n        <div class=\"row w-100\">\n          <div class=\"col-12 pb-0\">\n            <p class=\"mb-0\">\n              <button style=\"min-width: 100%; text-align: start; background-color: white; border: none; border-top: 1px solid rgb(212, 212, 212); border-bottom: 1px solid rgb(212, 212, 212);\"  data-bs-toggle=\"collapse\" data-bs-target=\"#multiCollapseExample1\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample2\">\n                <div style=\"display: flex;\n                justify-content: space-between;\n                flex-direction: row;\n                width: 100%;\">\n                  <span>DESCRIZIONE</span>\n                  <div class=\"m-0\" style=\"width: fit-content;\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrows-expand\" viewBox=\"0 0 16 16\">\n                      <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2ZM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10Z\"/>\n                    </svg>\n                  </div>\n                </div>\n              </button>\n          \n            </p>\n            <div class=\"row\">\n             \n                <div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">\n                  <p class=\"p-1 border-bottom mb-0\" [innerHTML]=\"product.description\"> </p>          \n                </div>\n         \n            </div>\n          \n          </div>\n        </div>\n\n        <div class=\"row w-100\">\n          <div class=\"col-12 pt-0\">\n            <p>\n              <button style=\"min-width: 100%; text-align: start; background-color: white; border: none;  border-bottom: 1px solid rgb(212, 212, 212);\"  data-bs-toggle=\"collapse\" data-bs-target=\"#multiCollapseExample2\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample2\">\n                <div style=\"display: flex;\n                justify-content: space-between;\n                flex-direction: row;\n                width: 100%;\">\n                  <span>MATERIALI E CURA</span>\n                  <div class=\"m-0\" style=\"width: fit-content;\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrows-expand\" viewBox=\"0 0 16 16\">\n                      <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2ZM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10Z\"/>\n                    </svg>\n                  </div>\n                </div>\n              </button>\n          \n            </p>\n            <div class=\"row\">\n              \n                <div class=\"collapse multi-collapse\" id=\"multiCollapseExample2\">\n                  <p class=\"p-1\"> 100% poliestere riciclato</p>          \n                </div>\n            \n            </div>\n          \n          </div>\n        </div>\n\n      </div>\n      <!--\n\n      <div class=\"brand-logo w-100\">\n        <img src='{{brandLogoBlob}}'>\n      </div>\n\n      <div class=\"product-name w-100\">\n        <h1 style=\"font-family: monospace !important;\">{{product.name}}</h1>\n      </div>\n \n      <div class=\"product-price\">\n        <div class=\" row w-100\">\n          <div class=\"col-auto\" style=\"font-size: x-large;\">{{product.price - product.discount | currency}}</div>\n          <div *ngIf=\"product.discount != 0\" class=\"col-auto\"  style=\"text-decoration:  line-through; font-weight: 100; color: rgb(98, 98, 98);\">{{product.price | currency}}\n            <span *ngIf=\"(product.discount / product.price) * 100 != 0\"  class=\"badge rounded-pill bg-danger\" style=\" border-radius: 5px!important;\">\n                -{{discount}}%\n                <span class=\"visually-hidden\">unread messages</span>\n              </span></div>\n        </div>\n      </div>\n\n  \n        <div class=\"grid p-4 w-100\" style=\"padding-right: 0 !important;\">\n          \n\n          <div class=\"row w-100\">\n            <div class=\"col-3 my-auto\"><h4>Varianti</h4></div>\n\n            <div class=\"col-9\" *ngIf=\"menProd\" style=\"padding-left: 20px\">\n              <div  style=\"display: flex; flex-flow: wrap;\">\n                \n                <eshop-frontend-carousel  [images]=\"products\" ></eshop-frontend-carousel>\n        \n              </div>\n            </div>\n          </div>\n         \n\n\n\n\n          <div class=\"row w-100\">\n            <div class=\"col-3 my-auto\"><h4>Taglia</h4></div>\n            <div class=\"sizes col-9\" style=\"display: flex;flex-direction: row; align-items: center; flex-flow: wrap;  padding-left: 20px;\">\n              <button [ngClass]=\"{gold: clickedIndex === i}\" class=\"circle\" [disabled]=\"f.available? false : true\"\n                *ngFor=\"let f of filteredVariants, let i = index\" (click)=\"selectSize($event)\"\n                (click)=\"updateSelectedSize(i)\">{{f.size}}</button>\n            </div>\n          </div>\n\n          <div class=\"product-quantity\" style=\"display: flex; width: 100%;flex-direction: row;justify-content: center;align-items: center;\">\n            <div class=\"\" style=\"display: flex;flex-direction: row;justify-content: center;align-items: center;\">\n              <label for=\"quantity\" style=\"padding-right: 10px;\">Quantity</label>\n              <p-inputNumber [(ngModel)]=\"quantity\" inputId=\"quantity\" mode=\"decimal\" [showButtons]=\"true\"\n                [min]=\"0\" [max]=\"maxInv\" (click)=\"checkQuantity()\">\n              </p-inputNumber>\n            </div>\n          </div>\n\n          <div class=\" product-action col-12\" style=\"display: flex;flex-direction: row;justify-content: center;align-items: center;\">\n            <button [disabled]=\"button\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"\"\n              (click)=\"addProductToCart()\">\n            </button>\n          </div>\n        </div>\n\n     \n\n      <div class=\"col-12 desc-box\">\n\n        <h1 style=\"text-align: center; color: black; font-size: 18px;\">Product description</h1>\n        <hr>\n        <div class=\"desc\" [innerHTML]=\"product.description\"></div>\n      </div>\n-->\n    </div>\n  </div>\n\n  </div>\n</div>\n", styles: [".btn.btn-secondary[disabled]{background-color:#cecece}.gold{border:1px solid black!important}\n"] }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.W_ProductsService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.CartService }, { type: i5.VariantsService }, { type: i6.MessageService }, { type: i4.CartIconComponent }, { type: i7.Location }, { type: i8.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVEsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7SUNqQjlELCtDQUF5Rzs7O0lB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LENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXhELHlEQUF5RDtRQUV6RCxJQUFJLHNCQUFzQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDekUsSUFBRyxzQkFBc0IsSUFBSSxJQUFJLEVBQUM7WUFDbEMsZ0RBQWdEO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEQsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0Qsd0ZBQXdGO1NBQ3ZGO2FBQUk7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDeEMsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFHLENBQUMsSUFBSyxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUM7WUFDL0Qsb0ZBQW9GO1NBQ3JGO0lBRUgsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUksS0FBSyxDQUFDO1NBQ3RCO2FBQUk7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7O3dGQXpiVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQzVCakMsMEJBQWdGO1FBQ2hGLHVFQWlOTTs7UUFqTnFCLGVBQWE7UUFBYixrQ0FBYTs7dUZEMkIzQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuXG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IFByb2R1Y3RMdWNhIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXNcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDYXJ0SWNvbkNvbXBvbmVudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC9vcmRlcnMnO1xuaW1wb3J0IHsgVmFyaWFudCB9IGZyb20gJy4uLy4uL21vZGVscy92YXJpYW50JztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBXX1Byb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvdy1wcm9kdWN0JztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgV19Qcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93LXByb2R1Y3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmFyaWFudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmFyaWFudHMuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtcGFnZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjbGlja2VkSW5kZXg6IG51bWJlcjtcbiAgdmFyaWFudDogVmFyaWFudDtcbiAgdmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xuICBmaWx0ZXJlZFZhcmlhbnRzOiBWYXJpYW50W10gPSBbXTtcbiAgbm9uRW1wdHlWYXJpYW50czogVmFyaWFudFtdID0gW107XG4gIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XG4gIGtsYXJuYVByaWNlID0gMDtcbiAgV19wcm9kdWN0OiBXX1Byb2R1Y3Q7XG4gIHByb2ROYW1lID0gJyc7XG4gIHByb2RJZCA9ICcnO1xuICBXX3Byb2RuYW1lID0gJyc7XG4gIG1lblByb2QgPSB0cnVlO1xuICB3UHJvZCA9IGZhbHNlO1xuICBwcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIGxlbjogbnVtYmVyO1xuICBjb2xvcnM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBzaW1hbFByb2R1Y3RzOiBzdHJpbmdbXSA9IFtdO1xuICBtdWx0aXBsZUNvbG9yczogYm9vbGVhbjtcbiAgZW5kU3VicyQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHF1YW50aXR5ID0gMDtcbiAgY3VycmVudElkO1xuICBkaXNwbGF5U3VjY2Vzc0Jhbm5lciA9IGZhbHNlO1xuICBzZWxlY3RlZCA9IGZhbHNlO1xuICBidXR0b24gPSB0cnVlO1xuICBzZWxlY3RlZFNpemU6IFZhcmlhbnRbXSA9IFtdO1xuICBhdmFpbGFiaWxpdHk6IGFueVtdID0gW107XG4gIGF2YWlsYWJsZTogYm9vbGVhbjtcbiAgbWluSW52OiBudW1iZXI7XG4gIG1heEludjogbnVtYmVyO1xuICB1cmw7XG4gIGRpc2NvdW50ID0gMDtcbiAgcDogUHJvZHVjdEx1Y2E7XG4gIGJyYW5kTG9nbyA6IHN0cmluZztcbiAgYnJhbmRNYXAgPSBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KCk7IFxuICBicmFuZExvZ29CbG9iO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBXcHJvZFNlcnZpY2U6IFdfUHJvZHVjdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB2YXJpYW50U2VydmljZTogVmFyaWFudHNTZXJ2aWNlLFxuXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpY29uOiBDYXJ0SWNvbkNvbXBvbmVudCxcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIGNhcnQgOiBDYXJ0XG5cblxuICApIHsgICAgIHRoaXMucCA9IG5ldyBQcm9kdWN0THVjYSgpXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjEzYzc4ODkzMDlkZTk2MDE4MGRhNGFcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2JsYXVlci5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxM2M4OWU5MzA5ZGU5NjAxODBkYTRkXCIsIFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vb2xkcml2ZXIucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE2N2JkMWNiYThhMWUwZDljMWFmODhcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2NvbG1hci5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZWZlMWQ2MjM4NmNjMjI1MjViNlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vZWE3LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjE4OWYxZTFkNjIzODZjYzIyNTI1YjlcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2ZyZWRwZXJyeS5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZjM3MWQ2MjM4NmNjMjI1MjViY1wiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20va3dheS5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmNDgxZDYyMzg2Y2MyMjUyNWJmXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9sYWNvc3RlLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjE4OWY3ZDFkNjIzODZjYzIyNTI1YzJcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL211cnBoeS5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5Zjk4MWQ2MjM4NmNjMjI1MjVjNVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vcGVuaW5zdWxhLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjE4OWZhZDFkNjIzODZjYzIyNTI1YzhcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL3NhdWNvbnkucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWZiYjFkNjIzODZjYzIyNTI1Y2JcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL3N1bmRlay5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYzMmUwNWYzYjhjNTY3ZGU1ZWE4MzY2OVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vYmFyYm91ci5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYzNmI1N2UyNTA2YmE2NWU1OTNiYWE4MVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vU2NyZWVuc2hvdC5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MzZiNTdmMzUwNmJhNjVlNTkzYmFhODRcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL1NjcmVlbnNob3QucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYzNmI1ODA2NTA2YmE2NWU1OTNiYWE4N1wiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vU2NyZWVuc2hvdC5wbmdcIik7XG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgIFxuICAgIHRoaXMuYXZhaWxhYmxlID0gdHJ1ZTtcblxuXG5cblxuICAgIC8vY29uc29sZS5sb2coXCJjYXJ0ID0gXCIgKyB0aGlzLmNhcnQuZ2V0SnNvbigpKTtcblxuXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcblxuXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLnByb2R1Y3RJZCkge1xuICAgICAgIC8vICAgdGhpcy5fZ2V0UHJvZHVjdChwYXJhbXMucHJvZHVjdElkKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5wcm9kdWN0SWQ7XG4gICAgICAgXG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTtcbiAgICAgICAgICAvLyB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWVcbiAgICAgICAgICAvLy8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4vLyAgICAgIFxuIFxuXG4vL1xuICAgIHRoaXMucCA9IG5ldyBQcm9kdWN0THVjYSgpO1xuICAgIHRoaXMuX2dldFByb2R1Y3QyKCkudGhlbihcbiAgICAgZGF0YSA9PntcbiAgICAgICB0aGlzLnAgPSBkYXRhO1xuICAgICB9XG4gICAgICkuY2F0Y2goIGVycm9yID0+e1xuICAgICAgIHRoaXMucCA9IG51bGw7XG4gICAgIH0pO1xuICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgaWYgKHBhcmFtcy5wcm9kdWN0SWQpIHtcbiAgICAgICAgdGhpcy5fZ2V0V3Byb2R1Y3QocGFyYW1zLnByb2R1Y3RJZCk7XG4gICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLnByb2R1Y3RJZDtcbiAgICAgICAgdGhpcy5fZ2V0U2l6ZXMoKTtcblxuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJwcm9kdWN0PSBcIiArIHRoaXMucHJvZHVjdCk7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7XG4gICAgICAgIC8vIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZVxuICAgICAgICAvLy8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcbiAgfVxuXG5cbiAgXG5cbiAgYXN5bmMgYWpheEdldEltYWdlRGF0YSh1cmwpIHtcbiAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtjYWNoZTogXCJuby1zdG9yZVwifSk7XG4gICAgY29uc3QgaW1hZ2VCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgIHJldHVybiBpbWFnZUJsb2I7XG5cblxuICAvL0NvZGUgdG8gZ2V0IGJhc2U2NCBpbWFnZSBzdHJpbmdcblxufVxuICAvKipcbiAgICogU2UgaWwgcHJvZG90dG8gZXNpc3RlIGdpw6AsIGFnZ2l1bmdvIHVuYSB2YXJpYW50cywgc2Vubm8gYWdnaXVuZ28gdW4gbnVvdm8gcHJvZG90dG8gY29uIGxhIHN1YSB2YXJpYW50c1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYWRkUHJvZHVjdFRvQ2FydCgpIHtcblxuICAgIGlmKHRoaXMucXVhbnRpdHkgIT0gMCkge1xuXG4gICBsZXQgcFZhcmlhbnQgPSBuZXcgUHJvZHVjdFZhcmlhbnQodGhpcy5zZWxlY3RlZFNpemVbMF0uaWQsIHRoaXMuc2VsZWN0ZWRTaXplWzBdLnNpemUsIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSwgMCwgU3RyaW5nKHRoaXMuc2VsZWN0ZWRTaXplWzBdLmJhcmNvZGUpKTtcblxuXG4gICAgICBpZih0aGlzLmNhcnQuY29udGFpbnNQcm9kdWN0KHRoaXMucCkpe1xuICAgXG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jYXJ0LmdldFByb2R1Y3RJbmRleCh0aGlzLnApO1xuICAgICAgICBcbiAgICAgICAgICBsZXQgcHJvZHVjdCA9IHRoaXMuY2FydC5nZXRQcm9kdWN0KGluZGV4KTtcbiAgIFxuICAgICAgICAgIHByb2R1Y3QuYWRkVmFyaWFudChwVmFyaWFudCwgdGhpcy5xdWFudGl0eSk7XG5cbiAgICAgLy8gICAgIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSBwcm9kdWN0LmdldFZhcmlhbnQocFZhcmlhbnQpLmdldFNlbGVjdGVkKCk7XG4gICAgICAgICAgdGhpcy5wID0gcHJvZHVjdDtcbiAgICAgICAgICB0aGlzLm1heEludiA9ICB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0SW52ZW50b3J5KCk7XG5cbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICAgICAgICBpZih0aGlzLm1heEludiA8PSAwKXtcbiAgICAgICAgICAgIHRoaXMubWluSW52ID0gMDtcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgIGRldGFpbDogYFByb2R1Y3QgQWRkZWQgdG8gY2FydCFgXG4gICAgICAgICAgfSk7XG5cblxuICAgICAgfWVsc2V7XG4gICAgICBcbiAgICAgICAgdGhpcy5wLmFkZFZhcmlhbnQocFZhcmlhbnQsIHRoaXMucXVhbnRpdHkpO1xuICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcbiAgICAgICAgdGhpcy5tYXhJbnYgPSAgdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldEludmVudG9yeSgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICAgICAgaWYodGhpcy5tYXhJbnYgPD0gMCl7XG4gICAgICAgICAgdGhpcy5taW5JbnYgPSAwO1xuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICB0aGlzLmNhcnQuYWRkUHJvZHVjdEx1Y2EodGhpcy5wKTtcbiAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgc3VtbWFyeTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgIGRldGFpbDogYFByb2R1Y3QgQWRkZWQgdG8gY2FydCFgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICBwcml2YXRlIF9nZXRQcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlXG4gICAgICAuZ2V0UHJvZHVjdChpZClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gcmVzUHJvZHVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IGNvbG9yPyBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdCkpO1xuICAgICAgICB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWU7XG4gICAgICAgIHRoaXMucHJvZElkID0gdGhpcy5wcm9kdWN0LnByb2R1Y3RJZDtcbiAgICAgICAgdGhpcy5wcm9kdWN0LmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XG4gICAgICAgIHRoaXMuYnJhbmRMb2dvID0gdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJicmFuZCBsb2dvID0gXCIgKyB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpIClcbiAgICAgICAgdGhpcy5nZXRQcm9kQnlQcm9kSWQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHJlc3RpdHVpc2NlIGlsIHByb2RvdHRvIGRlbGxhIHBhZ2luYVxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0UHJvZHVjdDIoKSB7XG5cbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFByb2R1Y3RMdWNhPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnByb2RTZXJ2aWNlXG4gICAgICAuZ2V0UHJvZHVjdCh0aGlzLmN1cnJlbnRJZClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKFwicmVzIHByb2R1Y3Q6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzUHJvZHVjdCkpO1xuICAgICAgICBsZXQgcCA9IG5ldyBQcm9kdWN0THVjYSgpO1xuICAgICAgICBwLnNldElkKHJlc1Byb2R1Y3QuaWQpO1xuICAgICAgICBwLnNldERpc2NvdW50KHJlc1Byb2R1Y3QuZGlzY291bnQpO1xuICAgICAgICBwLnNldFByaWNlKHJlc1Byb2R1Y3QucHJpY2UpO1xuICAgICAgICBwLnNldFRoZU1haW5JbWFnZShyZXNQcm9kdWN0LmltYWdlKTtcbiAgICAgICAgcC5zZXROYW1lKHJlc1Byb2R1Y3QubmFtZSk7XG5cbiAgICAgICAgcmVzb2x2ZShwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBwcm9taXNlO1xuICAgIHJldHVybiBkYXRhO1xuXG5cbiAgfVxuXG4gIHByaXZhdGUgX2dldFdwcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3QoaWQpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXG4gICAgICAuc3Vic2NyaWJlKGFzeW5jIChyZXNQcm9kdWN0KSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc1Byb2R1Y3Q7XG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLldfcHJvZG5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZTtcbiAgICAgICAgdGhpcy5wcm9kSWQgPSB0aGlzLnByb2R1Y3QucHJvZHVjdElkO1xuICAgICAgICB0aGlzLmdldFByb2RCeVByb2RJZCgpO1xuXG4gICAgICAgIHRoaXMuZGlzY291bnQgPSBNYXRoLnJvdW5kKCAodGhpcy5wcm9kdWN0LmRpc2NvdW50L3RoaXMucHJvZHVjdC5wcmljZSkgICogMTAwKVxuICAgICAgICB0aGlzLmtsYXJuYVByaWNlID0gTWF0aC5yb3VuZCgodGhpcy5wcm9kdWN0LnByaWNlIC0gdGhpcy5wcm9kdWN0LmRpc2NvdW50KS8zKVxuXG4gICAgICAgIHRoaXMucHJvZHVjdC5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xuICAgICAgICB0aGlzLmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XG5cbiAgICAgICAgbGV0IGJsb2IgPSBhd2FpdCB0aGlzLmFqYXhHZXRJbWFnZURhdGEodGhpcy5icmFuZExvZ28pO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICB0aGlzLmJyYW5kTG9nb0Jsb2IgPSBiYXNlNjRkYXRhO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIF9nZXRTaXplcygpIHtcbiAgICB0aGlzLnZhcmlhbnRTZXJ2aWNlXG4gICAgICAuZ2V0VmFyaWFudHMoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZSgodmFyaWFudHMpID0+IHtcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xuXG5cbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzID0gdGhpcy52YXJpYW50cy5maWx0ZXIoXG4gICAgICAgICAgKHNpemUpID0+IHNpemUucHJvZHVjdCA9PT0gdGhpcy5jdXJyZW50SWRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzLnNvcnQoKGEsIGIpID0+IChhLnNpemUgPCBiLnNpemUgPyAtMSA6IDEpKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPD10aGlzLmZpbHRlcmVkVmFyaWFudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIGlmKHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpXS5pbnZlbnRvcnkgPT0gMCl7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubm9uRW1wdHlWYXJpYW50cy5wdXNoKHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgXG5cblxuICAgICAgICBcbiAgICAgIH0pO1xuICB9XG5cblxuXG4gIC8qKnF1ZXN0YSBmdW56aW9uZSBzZW1icmEgc29sbyBnZXN0aXJlIGlsIG1heCBpbnB1dCAqL1xuICBzZWxlY3RTaXplKGV2ZW50OiBhbnksIGluZGV4KSB7XG4gICAgLy9jb25zb2xlLmxvZyhcImZpbHRlcmVkVmFyaWFudHM6IFwiICsgdGhpcy5maWx0ZXJlZFZhcmlhbnRzKTtcbiAgICB0aGlzLmNsaWNrZWRJbmRleCA9IGluZGV4O1xuICAgIC8vY29uc29sZS5sb2coXCJpbmRleCA6IFwiICsgaW5kZXgpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuYnV0dG9uID0gZmFsc2U7XG4gICAgY29uc3QgdGVtcCA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUwuc2xpY2UoMCwgLTEpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwidGVtcCAgPVwiICsgdGVtcCArIFwiLVwiKTtcblxuICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyZWRWYXJpYW50cyA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5maWx0ZXJlZFZhcmlhbnRzKSlcblxuICAgIHRoaXMuc2VsZWN0ZWRTaXplID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzLmZpbHRlcigoeCkgPT4geC5zaXplID09PSB0ZW1wKTtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIHNpemU9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZFNpemUpKTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnkgPj0gMSkge1xuICAgICAgdGhpcy5taW5JbnYgPSAxO1xuICAgICAgdGhpcy5tYXhJbnYgPSB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnk7XG4gICAgICB0aGlzLnF1YW50aXR5ID0gMTtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKFwiaW0gZG9pbmcgc29tZXRoaW5nIC0+IHNlbGVjdFNpemUoKVwiKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcm9kQnluYW1lKCkge1xuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQodGhpcy5wcm9kTmFtZSkuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgICB0aGlzLmxlbiA9IHRoaXMucHJvZHVjdHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XG4gICAgICAgIHRoaXMuc2ltYWxQcm9kdWN0cy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uaW1hZ2UpO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XG4gICAgICB9XG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xuXG4gICAgIGNvbnNvbGUubG9nKFwic2ltaWxhciBwcm9kdWN0cyA9IFwiICsgdGhpcy5zaW1hbFByb2R1Y3RzKVxuICAgICAgaWYgKHRoaXMubGVuID49IDEpIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kQnlQcm9kSWQoKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlJZCh0aGlzLnByb2RJZCkuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgICB0aGlzLmxlbiA9IHRoaXMucHJvZHVjdHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XG4gICAgICAgIHRoaXMuc2ltYWxQcm9kdWN0cy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uaW1hZ2UpO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XG4gICAgICB9XG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xuXG4gICAgIGNvbnNvbGUubG9nKFwic2ltaWxhciBwcm9kdWN0cyA9IFwiICsgdGhpcy5zaW1hbFByb2R1Y3RzKVxuICAgICAgaWYgKHRoaXMubGVuID49IDEpIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0V1Byb2RCeW5hbWUoKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlOYW1lKHRoaXMuV19wcm9kbmFtZSkuc3Vic2NyaWJlKFxuICAgICAgKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XG4gICAgICAgICAgdGhpcy5zaW1hbFByb2R1Y3RzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5pbWFnZSk7XG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuID4gMSkge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RDb2xvcihwcm9kSWQpIHtcbiAgIC8vIC8vY29uc29sZS5sb2cocHJvZElkKTtcbiAgICB0aGlzLl9nZXRQcm9kdWN0KHByb2RJZCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwcm9kdWN0cy8nICsgcHJvZElkXSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RXQ29sb3IocHJvZElkKSB7XG4gICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XG4gICAgdGhpcy5fZ2V0V3Byb2R1Y3QocHJvZElkKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kSWRdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkU2l6ZShpbmRleCl7XG5cblxuICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF07XG4gICAgLy9jb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XG4gICAgdGhpcy5jbGlja2VkSW5kZXggPSBpbmRleDtcbiAgICAvL2NvbnNvbGUubG9nKFwic2l6ZSA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XSkpO1xuICAgIGxldCBzZWxlY3RlZFZhcmlhbnQgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xuICAgIGxldCBzZWxlY3RlZFZhcmlhbnRJZCA9IHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF0uaWQ7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWRWYXJpYW50SWQgXCIgKyBzZWxlY3RlZFZhcmlhbnRJZCApO1xuXG4gICAgbGV0IHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgPSB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoc2VsZWN0ZWRWYXJpYW50SWQpO1xuICAgIGlmKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgIT0gbnVsbCl7XG4gICAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEpzb24oKSk7XG4gICAgdGhpcy5tYXhJbnYgPSBzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEludmVudG9yeSgpO1xuICAgIGlmKHRoaXMubWF4SW52PT09MCB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gdHJ1ZTtcbiAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIGFscmVhZHkgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRWYXJpYW50LmludmVudG9yeTtcbiAgICAgIGlmKHRoaXMubWF4SW52PT09MCAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9ICB0cnVlO1xuICAgICAgLy9jb25zb2xlLmxvZyhcInRoaXMgcHJvZHVjdCBpcyBOT1QgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICB9XG5cbiAgfVxuXG4gIGNoZWNrUXVhbnRpdHkoKXtcbiAgICBpZiggdGhpcy5xdWFudGl0eSAhPSAwKXtcbiAgICAgIHRoaXMuYnV0dG9uID0gIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5idXR0b24gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdmEgRmxhdCcgcmVsPSdzdHlsZXNoZWV0Jz5cbjxkaXYgY2xhc3M9XCJwcm9kdWN0LXBhZ2VcIiAqbmdJZj1cInByb2R1Y3RcIj5cbiAgPGRpdiBjbGFzcz1cImdyaWQgdy0xMDBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgIDxlZXNob3AtZnJvbnRlbmQtbWVzc2FnZXMgc3R5bGU9XCJtYXgtd2lkdGg6NDB2d1wiICpuZ0lmPVwiZGlzcGxheVN1Y2Nlc3NCYW5uZXJcIj48L2Vlc2hvcC1mcm9udGVuZC1tZXNzYWdlcz5cblxuICAgIDwhLS1cbiAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZy1zbVwiPlxuICAgICAgICAgICAgPHAtcmF0aW5nIFsobmdNb2RlbCldPVwicHJvZHVjdC5yYXRpbmdcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiIFtjYW5jZWxdPVwiZmFsc2VcIj48L3AtcmF0aW5nPlxuICAgICAgICA8L2Rpdj4gLS0+XG4gICAgXG5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLWF1dG8gZ2FsbGVyeSBtLTAgcC0wXCIgIHN0eWxlPVwiICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgd2hpdGU7XCI+XG4gICAgICA8dWktZ2FsbGVyeSAgW2ltYWdlc109XCJwcm9kdWN0LmltYWdlc1wiIFtpbWFnZV09XCJwcm9kdWN0LmltYWdlXCIgW3Byb2R1Y3RdPVwicHJvZHVjdFwiID48L3VpLWdhbGxlcnk+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC01IGNvbC14bC00IHByb2R1Y3RcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjthbGlnbi1pdGVtczogY2VudGVyO3BhZGRpbmc6MWVtOyBsaW5lLWhlaWdodDoxLjVlbTtcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6Ym9sZFwiPnt7cHJvZHVjdC5uYW1lfX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgIGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA3MDA7XCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInByb2R1Y3QuZGlzY291bnQgIT0gMFwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiAgbGluZS10aHJvdWdoOyBmb250LXdlaWdodDogMTAwOyBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XCI+Jm5ic3A7IHt7cHJvZHVjdC5wcmljZX19IOKCrCA8L3NwYW4+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGJsYWNrO1wiPiB7e3Byb2R1Y3QucHJpY2UgLSBwcm9kdWN0LmRpc2NvdW50fX0g4oKsPC9zcGFuPiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cIiBmb250LXdlaWdodDogbGlnaHRlcjsgZm9udC1zaXplOiBzbWFsbDsgY29sb3I6IHJnYigxNDMsIDE0MywgMTQzKTtcIj5WYXJpYW50aTwvZGl2PlxuICAgICAgICA8ZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWwgIFtpbWFnZXNdPVwicHJvZHVjdHNcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1wiPjwvZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgc3R5bGU9XCIgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IGZvbnQtc2l6ZTogc21hbGw7IGNvbG9yOiByZ2IoMTQzLCAxNDMsIDE0Myk7IHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XCI+VGFnbGlhPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IG92ZXJmbG93LXg6YXV0b1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBbbmdDbGFzc109XCJ7Z29sZDogY2xpY2tlZEluZGV4ID09PSBpfVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBtLTIgXCIgc3R5bGU9XCJtYXgtd2lkdGg6Zml0LWNvbnRlbnQ7IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcIiBbZGlzYWJsZWRdPVwiZi5hdmFpbGFibGU/IGZhbHNlIDogdHJ1ZVwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBub25FbXB0eVZhcmlhbnRzLCBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdFNpemUoJGV2ZW50KVwiXG4gICAgICAgICAgICAoY2xpY2spPVwidXBkYXRlU2VsZWN0ZWRTaXplKGkpXCI+e3tmLnNpemV9fVxuICAgICAgICAgICAgPC9idXR0b24+ICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCIgc3R5bGU9XCIgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IGZvbnQtc2l6ZTogMTBweDsgY29sb3I6IHJnYigxNjUsIDE2NSwgMTY1KTtcIj5cblxuICAgICAgICAgICAgPGEgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7ICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcIj5HdWlkYSBhbGxlIHRhZ2xpZTwvYT5cbiAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICBcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBsYWJlbD1cIkFkZCB0byBjYXJ0XCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCJcbiAgICAgICAgICAgIChjbGljayk9XCJhZGRQcm9kdWN0VG9DYXJ0KClcIj5cbiAgICAgICAgICAgIEFHR0lVTkdJIEFMIENBUlJFTExPXG4gICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cImZvbnQtc2l6ZTogMTBweDtcIj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiIGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMTBweDsgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcIj5QYWdhIGluIDMgcmF0ZSBkYSB7e3RoaXMua2xhcm5hUHJpY2V9fSDigqwgc2VuemEgaW50ZXJlc3NpIGNvbiAgICAmbmJzcDs8L3NwYW4+IDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDcwMDtcIj5LbGFybmE8L3NwYW4+ICAgJm5ic3A7PGEgc3R5bGU9XCIgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAxMHB4OyBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50OyBjdXJzb3I6IHBvaW50ZXI7ICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcIj5TY29wcmkgZGkgcGnDuTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHBiLTBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwibWluLXdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBzdGFydDsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcIiAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI211bHRpQ29sbGFwc2VFeGFtcGxlMVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJtdWx0aUNvbGxhcHNlRXhhbXBsZTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkRFU0NSSVpJT05FPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tMFwiIHN0eWxlPVwid2lkdGg6IGZpdC1jb250ZW50O1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1hcnJvd3MtZXhwYW5kXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEgOGEuNS41IDAgMCAxIC41LS41aDEzYS41LjUgMCAwIDEgMCAxaC0xM0EuNS41IDAgMCAxIDEgOFpNNy42NDYuMTQ2YS41LjUgMCAwIDEgLjcwOCAwbDIgMmEuNS41IDAgMCAxLS43MDguNzA4TDguNSAxLjcwN1Y1LjVhLjUuNSAwIDAgMS0xIDBWMS43MDdMNi4zNTQgMi44NTRhLjUuNSAwIDEgMS0uNzA4LS43MDhsMi0yWk04IDEwYS41LjUgMCAwIDEgLjUuNXYzLjc5M2wxLjE0Ni0xLjE0N2EuNS41IDAgMCAxIC43MDguNzA4bC0yIDJhLjUuNSAwIDAgMS0uNzA4IDBsLTItMmEuNS41IDAgMCAxIC43MDgtLjcwOEw3LjUgMTQuMjkzVjEwLjVBLjUuNSAwIDAgMSA4IDEwWlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG11bHRpLWNvbGxhcHNlXCIgaWQ9XCJtdWx0aUNvbGxhcHNlRXhhbXBsZTFcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicC0xIGJvcmRlci1ib3R0b20gbWItMFwiIFtpbm5lckhUTUxdPVwicHJvZHVjdC5kZXNjcmlwdGlvblwiPiA8L3A+ICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcHQtMFwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJtaW4td2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IHN0YXJ0OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgYm9yZGVyOiBub25lOyAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcIiAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI211bHRpQ29sbGFwc2VFeGFtcGxlMlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJtdWx0aUNvbGxhcHNlRXhhbXBsZTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPk1BVEVSSUFMSSBFIENVUkE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS0wXCIgc3R5bGU9XCJ3aWR0aDogZml0LWNvbnRlbnQ7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93cy1leHBhbmRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMSA4YS41LjUgMCAwIDEgLjUtLjVoMTNhLjUuNSAwIDAgMSAwIDFoLTEzQS41LjUgMCAwIDEgMSA4Wk03LjY0Ni4xNDZhLjUuNSAwIDAgMSAuNzA4IDBsMiAyYS41LjUgMCAwIDEtLjcwOC43MDhMOC41IDEuNzA3VjUuNWEuNS41IDAgMCAxLTEgMFYxLjcwN0w2LjM1NCAyLjg1NGEuNS41IDAgMSAxLS43MDgtLjcwOGwyLTJaTTggMTBhLjUuNSAwIDAgMSAuNS41djMuNzkzbDEuMTQ2LTEuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTIgMmEuNS41IDAgMCAxLS43MDggMGwtMi0yYS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxNC4yOTNWMTAuNUEuNS41IDAgMCAxIDggMTBaXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG11bHRpLWNvbGxhcHNlXCIgaWQ9XCJtdWx0aUNvbGxhcHNlRXhhbXBsZTJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicC0xXCI+IDEwMCUgcG9saWVzdGVyZSByaWNpY2xhdG88L3A+ICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLVxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYnJhbmQtbG9nbyB3LTEwMFwiPlxuICAgICAgICA8aW1nIHNyYz0ne3ticmFuZExvZ29CbG9ifX0nPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LW5hbWUgdy0xMDBcIj5cbiAgICAgICAgPGgxIHN0eWxlPVwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1wiPnt7cHJvZHVjdC5uYW1lfX08L2gxPlxuICAgICAgPC9kaXY+XG4gXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1wcmljZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiIHJvdyB3LTEwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiIHN0eWxlPVwiZm9udC1zaXplOiB4LWxhcmdlO1wiPnt7cHJvZHVjdC5wcmljZSAtIHByb2R1Y3QuZGlzY291bnQgfCBjdXJyZW5jeX19PC9kaXY+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cInByb2R1Y3QuZGlzY291bnQgIT0gMFwiIGNsYXNzPVwiY29sLWF1dG9cIiAgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246ICBsaW5lLXRocm91Z2g7IGZvbnQtd2VpZ2h0OiAxMDA7IGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XCI+e3twcm9kdWN0LnByaWNlIHwgY3VycmVuY3l9fVxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIocHJvZHVjdC5kaXNjb3VudCAvIHByb2R1Y3QucHJpY2UpICogMTAwICE9IDBcIiAgY2xhc3M9XCJiYWRnZSByb3VuZGVkLXBpbGwgYmctZGFuZ2VyXCIgc3R5bGU9XCIgYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgICAgICAte3tkaXNjb3VudH19JVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+dW5yZWFkIG1lc3NhZ2VzPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIHAtNCB3LTEwMFwiIHN0eWxlPVwicGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1wiPlxuICAgICAgICAgIFxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIG15LWF1dG9cIj48aDQ+VmFyaWFudGk8L2g0PjwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIiAqbmdJZj1cIm1lblByb2RcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogMjBweFwiPlxuICAgICAgICAgICAgICA8ZGl2ICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogd3JhcDtcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWwgIFtpbWFnZXNdPVwicHJvZHVjdHNcIiA+PC9lc2hvcC1mcm9udGVuZC1jYXJvdXNlbD5cbiAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICBcblxuXG5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBteS1hdXRvXCI+PGg0PlRhZ2xpYTwvaDQ+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l6ZXMgY29sLTlcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC1mbG93OiB3cmFwOyAgcGFkZGluZy1sZWZ0OiAyMHB4O1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIFtuZ0NsYXNzXT1cIntnb2xkOiBjbGlja2VkSW5kZXggPT09IGl9XCIgY2xhc3M9XCJjaXJjbGVcIiBbZGlzYWJsZWRdPVwiZi5hdmFpbGFibGU/IGZhbHNlIDogdHJ1ZVwiXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyZWRWYXJpYW50cywgbGV0IGkgPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RTaXplKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJ1cGRhdGVTZWxlY3RlZFNpemUoaSlcIj57e2Yuc2l6ZX19PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXF1YW50aXR5XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyB3aWR0aDogMTAwJTtmbGV4LWRpcmVjdGlvbjogcm93O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInF1YW50aXR5XCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxMHB4O1wiPlF1YW50aXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHAtaW5wdXROdW1iZXIgWyhuZ01vZGVsKV09XCJxdWFudGl0eVwiIGlucHV0SWQ9XCJxdWFudGl0eVwiIG1vZGU9XCJkZWNpbWFsXCIgW3Nob3dCdXR0b25zXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIFttaW5dPVwiMFwiIFttYXhdPVwibWF4SW52XCIgKGNsaWNrKT1cImNoZWNrUXVhbnRpdHkoKVwiPlxuICAgICAgICAgICAgICA8L3AtaW5wdXROdW1iZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIgcHJvZHVjdC1hY3Rpb24gY29sLTEyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImJ1dHRvblwiIHBCdXR0b24gcFJpcHBsZSB0eXBlPVwiYnV0dG9uXCIgbGFiZWw9XCJBZGQgdG8gY2FydFwiIGNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFByb2R1Y3RUb0NhcnQoKVwiPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGRlc2MtYm94XCI+XG5cbiAgICAgICAgPGgxIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogYmxhY2s7IGZvbnQtc2l6ZTogMThweDtcIj5Qcm9kdWN0IGRlc2NyaXB0aW9uPC9oMT5cbiAgICAgICAgPGhyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiIFtpbm5lckhUTUxdPVwicHJvZHVjdC5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4tLT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==