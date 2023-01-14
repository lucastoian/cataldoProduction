import { MessageService } from 'primeng/api';
import { ProductVariant } from '@eshop-frontend/users';
import { ProductLuca } from '@eshop-frontend/users';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CartService } from '@eshop-frontend/orders';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { VariantsService } from '../../services/variants.service';
import { Title, Meta } from "@angular/platform-browser";
import * as i0 from "@angular/core";
import * as i1 from "../../services/products.service";
import * as i2 from "@angular/router";
import * as i3 from "@eshop-frontend/orders";
import * as i4 from "../../services/variants.service";
import * as i5 from "primeng/api";
import * as i6 from "@angular/platform-browser";
import * as i7 from "@angular/common";
import * as i8 from "@eshop-frontend/ui";
import * as i9 from "primeng/accordion";
import * as i10 from "../../components/featured-products/featured-products.component";
function ProductPageComponent_div_1_eeshop_frontend_messages_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eeshop-frontend-messages", 36);
} }
function ProductPageComponent_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("\u00A0 ", ctx_r2.product.price, " \u20AC ");
} }
const _c0 = function (a0) { return { selected: a0 }; };
function ProductPageComponent_div_1_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_button_26_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.selectSize($event); })("click", function ProductPageComponent_div_1_button_26_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const i_r5 = restoredCtx.index; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.updateSelectedSize(i_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, f_r4.size === ctx_r3.clickedSize))("disabled", f_r4.available ? false : true);
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
    i0.ɵɵelementStart(43, "div", 9)(44, "p-accordion")(45, "p-accordionTab", 29)(46, "p");
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "p-accordionTab", 30);
    i0.ɵɵtext(49, " Il database non fornisce nessun'informazione ");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(50, "div", 31)(51, "div", 32);
    i0.ɵɵtext(52, " Prodotti correlati ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "div", 33)(54, "div", 34);
    i0.ɵɵelement(55, "eshop-frontend-featured-products", 35);
    i0.ɵɵelementEnd()()()()();
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
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r0.product.description);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("brandName", ctx_r0.product.brand)("maxComponentWidth", 1200)("featuredSex", ctx_r0.product.sex);
} }
export class ProductPageComponent {
    constructor(prodService, route, router, cartService, variantService, messageService, titleService, metaService) {
        this.prodService = prodService;
        this.route = route;
        this.router = router;
        this.cartService = cartService;
        this.variantService = variantService;
        this.messageService = messageService;
        this.titleService = titleService;
        this.metaService = metaService;
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
        //      
        //
        this.p = new ProductLuca();
        this.route.params.subscribe((params) => {
            console.log("PARAMS. PRODUCTID = " + params.productId);
            if (params.productId) {
                this.product = null;
                this.variants = [];
                this.products = [];
                this.filteredVariants = [];
                this.nonEmptyVariants = [];
                this._getProduct2().then(data => {
                    this.p = data;
                    this.titleService.setTitle(this.p.getName() + " - Cataldostore.it");
                    this.metaService.updateTag({ name: 'description', content: this.p.getName() + " a " + (this.p.getPricec() - this.p.getDiscount()) + "€" + ' | Spedizione gratuita su tutti gli ordini!' });
                }).catch(error => {
                    this.p = null;
                });
                this._getWproduct(this.route.snapshot.paramMap.get('productId'));
                this.currentId = this.route.snapshot.paramMap.get('productId');
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
                .getProduct(this.route.snapshot.paramMap.get('productId'))
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
        this.clickedSize = event.target.innerHTML.slice(0, -1);
        console.log("filteredVariants = " + JSON.stringify(this.filteredVariants));
        this.selectedSize = this.filteredVariants.filter((x) => x.size === this.clickedSize);
        console.log("selected size= " + JSON.stringify(this.selectedSize));
        if (this.selectedSize[0].inventory >= 1) {
            this.button = false;
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
            //console.log("similar products = " + this.simalProducts)
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
            //  console.log("similar products = " + this.simalProducts)
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
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(i0.ɵɵdirectiveInject(i1.ProductsService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.CartService), i0.ɵɵdirectiveInject(i4.VariantsService), i0.ɵɵdirectiveInject(i5.MessageService), i0.ɵɵdirectiveInject(i6.Title), i0.ɵɵdirectiveInject(i6.Meta)); };
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 2, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Nova Flat", "rel", "stylesheet"], ["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "grid", 2, "justify-content", "center"], ["style", "max-width:40vw", 4, "ngIf"], [1, "row", "w-100", 2, "justify-content", "center"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-auto", "gallery", "m-0", "p-0"], [3, "images", "image", "product"], [1, "col-12", "col-sm-12", "col-md-5", "col-lg-3", "col-xl-4", "product", 2, "display", "flex", "flex-direction", "column", "align-items", "end", "padding", "1em", "line-height", "1.5em"], [1, "row", "w-100"], [1, "col-auto", 2, "font-size", "24px", "font-weight", "600"], [1, "col-auto"], [1, "col-auto", 2, "font-weight", "700"], ["style", "text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);", 4, "ngIf"], [2, "color", "black"], [1, "col-auto", 2, "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)"], [2, "overflow-x", "auto", 3, "images"], [1, "col-12", 2, "font-weight", "lighter", "font-size", "small", "color", "rgb(143, 143, 143)", "padding-bottom", "0 !important"], [1, "col-12", "p-0"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", 2, "max-width", "100%", "overflow-x", "auto"], ["class", "btn btn-sm m-2 ", "style", "max-width:fit-content; font-weight: 700; margin-top: 0 !important; margin-left: 0 !important;", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "col-auto", 2, "font-weight", "lighter", "font-size", "10px", "color", "rgb(165, 165, 165)"], [2, "cursor", "pointer", "text-decoration", "underline"], [1, "col-12"], ["type", "button", "label", "Add to cart", 1, "btn", "btn-secondary", 2, "width", "100%", "border-radius", "0", 3, "disabled", "click"], [1, "col-auto", 2, "font-size", "10px"], [2, "font-weight", "600", "font-size", "10px", "padding-bottom", "0 !important"], [2, "font-weight", "700"], [2, "font-weight", "600", "font-size", "10px", "padding-bottom", "0 !important", "cursor", "pointer", "text-decoration", "underline"], ["header", "DESCRIZIONE", 2, "box-shadow", "none !important"], ["header", "MATERIALI E CURA"], [1, "row", 2, "justify-content", "center"], [1, "col-10", "prodottiCorrelatiText", 2, "border-bottom", "3px solid black", "font-weight", "600", "letter-spacing", "2px"], [1, "row", "w-100", "pr-0", "pl-0", 2, "justify-content", "center"], [1, "col-12", "col-l-9", "p-0", 2, "padding-top", "20px !important"], [3, "brandName", "maxComponentWidth", "featuredSex"], [2, "max-width", "40vw"], [2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(255, 0, 0)"], [1, "btn", "btn-sm", "m-2", 2, "max-width", "fit-content", "font-weight", "700", "margin-top", "0 !important", "margin-left", "0 !important", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵtemplate(1, ProductPageComponent_div_1_Template, 56, 15, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i7.NgIf, i8.GalleryComponent, i8.CarouselComponent, i7.NgForOf, i7.NgClass, i9.Accordion, i9.AccordionTab, i10.FeaturedProductsComponent], styles: [".btn.btn-secondary[disabled][_ngcontent-%COMP%]{background-color:#cecece}.selected[_ngcontent-%COMP%]{border:1px solid black!important}.prodottiCorrelatiText[_ngcontent-%COMP%]{font-size:30px;padding-top:40px}  .p-accordion .p-accordion-header .p-accordion-header-link:focus{box-shadow:none!important}  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{background:#ffffff!important;border-color:#434343!important;color:#495057;border:none!important;border-bottom-right-radius:0;border-bottom-left-radius:0}  .p-accordion-header{border-top:1px solid #a8a8a8!important}  .p-accordion-content{border:none!important}  .p-accordion .p-accordion-header .p-accordion-header-link{padding:1rem;color:#495057;background:#ffffff!important;border-color:#fff!important;border:none!important;font-weight:600;transition:box-shadow .2s}@media screen and (max-width: 993px){.prodottiCorrelatiText[_ngcontent-%COMP%]{font-size:24px;padding-top:4px}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', template: "<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\n<div class=\"product-page\" *ngIf=\"product\">\n  <div class=\"grid\" style=\"justify-content: center;\">\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\n\n    <!--\n        <div class=\"rating-sm\">\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\n        </div> -->\n    \n\n    <div class=\"row w-100\" style=\"justify-content: center\">\n    <div class=\"col-12 col-sm-12 col-md-4 col-lg-auto gallery m-0 p-0\">\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\" ></ui-gallery>\n    </div>\n\n    <div class=\"col-12 col-sm-12 col-md-5 col-lg-3 col-xl-4 product\" style=\"display: flex;flex-direction: column;align-items: end;padding:1em; line-height:1.5em;\">\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\"font-size: 24px; font-weight:600\">{{product.name}}</div>\n      </div>\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\">\n          <div  class=\"col-auto\" style=\"font-weight: 700;\">\n            <span *ngIf=\"product.discount != 0\" style=\"text-decoration:  line-through; font-weight: 100; color: rgb(255, 0, 0);\">&nbsp; {{product.price}} \u20AC </span>\n            &nbsp;\n            <span style=\"color: black;\"> {{product.price - product.discount}} \u20AC</span> \n          </div>\n        </div>\n      </div>\n\n      <div class=\"row w-100\">\n        <div class=\"col-auto\" style=\" font-weight: lighter; font-size: small; color: rgb(143, 143, 143);\">Varianti</div>\n        <eshop-frontend-carousel  [images]=\"products\" style=\" overflow-x: auto;\"></eshop-frontend-carousel>\n      </div>\n\n      <div class=\"row w-100\">\n        <div class=\"col-12\" style=\" font-weight: lighter; font-size: small; color: rgb(143, 143, 143); padding-bottom: 0 !important;\">Taglia</div>\n        <div class=\"col-12 p-0\">\n          <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\" style=\"max-width: 100%; overflow-x:auto\">\n            <button  [ngClass]=\"{selected: f.size === clickedSize}\" class=\"btn btn-sm m-2 \" style=\"max-width:fit-content; font-weight: 700; margin-top: 0 !important; margin-left: 0 !important;\" [disabled]=\"f.available? false : true\"\n            *ngFor=\"let f of nonEmptyVariants, let i = index\" (click)=\"selectSize($event)\"\n            (click)=\"updateSelectedSize(i)\" >{{f.size}}\n            </button>            \n          </div>\n  \n        </div>\n        <div class=\"col-auto\" style=\" font-weight: lighter; font-size: 10px; color: rgb(165, 165, 165);\">\n\n            <a style=\"cursor: pointer;  text-decoration: underline;\">Guida alle taglie</a>\n      \n        </div>\n\n        <div class=\"row w-100\">\n          <div class=\"col-12\">\n     \n            <button [disabled]=\"button\" type=\"button\" label=\"Add to cart\" class=\"btn btn-secondary\" style=\"width: 100%; border-radius: 0;\"\n            (click)=\"addProductToCart()\">\n            AGGIUNGI AL CARRELLO\n           </button>\n          </div>\n        </div>\n\n        <div class=\"row w-100\" style=\"justify-content: center;\">\n          <div class=\"col-auto\" style=\"font-size: 10px;\">\n            <span style=\" font-weight: 600; font-size: 10px; padding-bottom: 0 !important;\">Paga in 3 rate da {{this.klarnaPrice}} \u20AC senza interessi con    &nbsp;</span> <span style=\"font-weight: 700;\">Klarna</span>   &nbsp;<a style=\" font-weight: 600; font-size: 10px; padding-bottom: 0 !important; cursor: pointer;  text-decoration: underline;\">Scopri di pi\u00F9</a>\n          </div>\n        </div>\n\n\n\n        <div class=\"row w-100\">\n             \n          <p-accordion style=\"\">\n            <p-accordionTab header=\"DESCRIZIONE\" style=\" box-shadow: none !important;\">\n               <p>{{product.description}}</p>\n            </p-accordionTab>\n            <p-accordionTab header=\"MATERIALI E CURA\">\n                Il database non fornisce nessun'informazione\n            </p-accordionTab>\n    \n        </p-accordion>\n        </div>\n\n      </div>\n\n    </div>\n            \n    <div class=\"row\" style=\"justify-content:center;\">\n     <div class=\"col-10 prodottiCorrelatiText\" style=\"border-bottom: 3px solid black; font-weight: 600; letter-spacing: 2px;\">\n      Prodotti correlati\n     </div>\n\n    </div>\n                \n    <div class=\"row w-100 pr-0 pl-0\" style=\"justify-content:center;\">\n      <div class=\"col-12 col-l-9 p-0\" style=\"padding-top: 20px !important;\">\n\n        <eshop-frontend-featured-products [brandName]=\"product.brand\"  [maxComponentWidth]=\"1200\" [featuredSex]=\"product.sex\"></eshop-frontend-featured-products>\n    </div>\n      \n     </div>\n   \n  </div>\n\n  </div>\n</div>\n", styles: [".btn.btn-secondary[disabled]{background-color:#cecece}.selected{border:1px solid black!important}.prodottiCorrelatiText{font-size:30px;padding-top:40px}::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link:focus{box-shadow:none!important}::ng-deep .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{background:#ffffff!important;border-color:#434343!important;color:#495057;border:none!important;border-bottom-right-radius:0;border-bottom-left-radius:0}::ng-deep .p-accordion-header{border-top:1px solid #a8a8a8!important}::ng-deep .p-accordion-content{border:none!important}::ng-deep .p-accordion .p-accordion-header .p-accordion-header-link{padding:1rem;color:#495057;background:#ffffff!important;border-color:#fff!important;border:none!important;font-weight:600;transition:box-shadow .2s}@media screen and (max-width: 993px){.prodottiCorrelatiText{font-size:24px;padding-top:4px}}\n"] }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i3.CartService }, { type: i4.VariantsService }, { type: i5.MessageService }, { type: i6.Title }, { type: i6.Meta }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELDhEQUE4RDtBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBUSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFRaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7O0lDbEJsRCwrQ0FBeUc7OztJQXNCakcsZ0NBQXFIO0lBQUEsWUFBMkI7SUFBQSxpQkFBTzs7O0lBQWxDLGVBQTJCO0lBQTNCLGtFQUEyQjs7Ozs7SUFnQmhKLGtDQUVpQztJQURpQixrTEFBUyx5QkFBa0IsSUFBQyxtTkFDckUsK0JBQXFCLElBRGdE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Q0FBQztRQUN6RSxJQUFHLHNCQUFzQixJQUFJLElBQUksRUFBQztZQUNsQyxnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwRCxJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQztnQkFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM3RCx3RkFBd0Y7U0FDdkY7YUFBSTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUN4QyxJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUcsQ0FBQyxJQUFLLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQztnQkFBQyxJQUFJLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQztZQUMvRCxvRkFBb0Y7U0FDckY7SUFFSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBSSxLQUFLLENBQUM7U0FDdEI7YUFBSTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7d0ZBdGRVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDNUJqQywwQkFBZ0Y7UUFDaEYsdUVBMEdNOztRQTFHcUIsZUFBYTtRQUFiLGtDQUFhOzt1RkQyQjNCLG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5cbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdEx1Y2EgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcbmltcG9ydCB7IFN1YmplY3QsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENhcnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XG5pbXBvcnQgeyBWYXJpYW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ZhcmlhbnQnO1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IFdfUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy93LXByb2R1Y3QnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBXX1Byb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBWYXJpYW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92YXJpYW50cy5zZXJ2aWNlJztcbmltcG9ydCB7VGl0bGUsIE1ldGF9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LXBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY2xpY2tlZFNpemUgOiBTdHJpbmc7XG4gIHZhcmlhbnQ6IFZhcmlhbnQ7XG4gIHZhcmlhbnRzOiBWYXJpYW50W10gPSBbXTtcbiAgZmlsdGVyZWRWYXJpYW50czogVmFyaWFudFtdID0gW107XG4gIG5vbkVtcHR5VmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xuICBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuICBrbGFybmFQcmljZSA9IDA7XG4gIFdfcHJvZHVjdDogV19Qcm9kdWN0O1xuICBwcm9kTmFtZSA9ICcnO1xuICBwcm9kSWQgPSAnJztcbiAgV19wcm9kbmFtZSA9ICcnO1xuICBtZW5Qcm9kID0gdHJ1ZTtcbiAgd1Byb2QgPSBmYWxzZTtcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBsZW46IG51bWJlcjtcbiAgY29sb3JzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgc2ltYWxQcm9kdWN0czogc3RyaW5nW10gPSBbXTtcbiAgbXVsdGlwbGVDb2xvcnM6IGJvb2xlYW47XG4gIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBxdWFudGl0eSA9IDA7XG4gIGN1cnJlbnRJZDtcbiAgZGlzcGxheVN1Y2Nlc3NCYW5uZXIgPSBmYWxzZTtcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgYnV0dG9uID0gdHJ1ZTtcbiAgc2VsZWN0ZWRTaXplOiBWYXJpYW50W10gPSBbXTtcbiAgYXZhaWxhYmlsaXR5OiBhbnlbXSA9IFtdO1xuICBhdmFpbGFibGU6IGJvb2xlYW47XG4gIG1pbkludjogbnVtYmVyO1xuICBtYXhJbnY6IG51bWJlcjtcbiAgdXJsO1xuICBkaXNjb3VudCA9IDA7XG4gIHA6IFByb2R1Y3RMdWNhO1xuICBicmFuZExvZ28gOiBzdHJpbmc7XG4gIGJyYW5kTWFwID0gbmV3IE1hcDxzdHJpbmcsc3RyaW5nPigpOyBcbiAgYnJhbmRMb2dvQmxvYjtcbiAgcHJpdmF0ZSBjYXJ0IDogQ2FydFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIHZhcmlhbnRTZXJ2aWNlOiBWYXJpYW50c1NlcnZpY2UsXG5cbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG4gICAgcHJpdmF0ZSBtZXRhU2VydmljZTpNZXRhXG5cblxuXG5cbiAgKSB7XG4gXG4gICAgdGhpcy5wID0gbmV3IFByb2R1Y3RMdWNhKClcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjNzg4OTMwOWRlOTYwMTgwZGE0YVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vYmxhdWVyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjEzYzg5ZTkzMDlkZTk2MDE4MGRhNGRcIiwgXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9vbGRyaXZlci5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTY3YmQxY2JhOGExZTBkOWMxYWY4OFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vY29sbWFyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODllZmUxZDYyMzg2Y2MyMjUyNWI2XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9lYTcucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjFlMWQ2MjM4NmNjMjI1MjViOVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vZnJlZHBlcnJ5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmMzcxZDYyMzg2Y2MyMjUyNWJjXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9rd2F5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjE4OWY0ODFkNjIzODZjYzIyNTI1YmZcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2xhY29zdGUucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjdkMWQ2MjM4NmNjMjI1MjVjMlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vbXVycGh5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmOTgxZDYyMzg2Y2MyMjUyNWM1XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9wZW5pbnN1bGEucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZmFkMWQ2MjM4NmNjMjI1MjVjOFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vc2F1Y29ueS5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZmJiMWQ2MjM4NmNjMjI1MjVjYlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vc3VuZGVrLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjMyZTA1ZjNiOGM1NjdkZTVlYTgzNjY5XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9iYXJib3VyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU3ZTI1MDZiYTY1ZTU5M2JhYTgxXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYzNmI1N2YzNTA2YmE2NWU1OTNiYWE4NFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vU2NyZWVuc2hvdC5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU4MDY1MDZiYTY1ZTU5M2JhYTg3XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcblxuXG4gICAgdGhpcy5jYXJ0ID0gdGhpcy5jYXJ0U2VydmljZS5nZXRDYXJ0KCk7XG4gICAgdGhpcy5hdmFpbGFibGUgPSB0cnVlO1xuXG5cbiAgICAvL2NvbnNvbGUubG9nKFwiY2FydCA9IFwiICsgdGhpcy5jYXJ0LmdldEpzb24oKSk7XG5cblxuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XG5cblxuXG4vLyAgICAgIFxuIFxuXG4vL1xuICAgIHRoaXMucCA9IG5ldyBQcm9kdWN0THVjYSgpO1xuXG5cblxuICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJQQVJBTVMuIFBST0RVQ1RJRCA9IFwiICsgcGFyYW1zLnByb2R1Y3RJZCk7XG4gICAgICBpZiAocGFyYW1zLnByb2R1Y3RJZCkge1xuICAgICAgICB0aGlzLnByb2R1Y3QgPSBudWxsO1xuICAgICAgICB0aGlzLnZhcmlhbnRzID0gW107XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzID0gW107XG4gICAgICAgIHRoaXMubm9uRW1wdHlWYXJpYW50cyA9IFtdO1xuICAgICAgICB0aGlzLl9nZXRQcm9kdWN0MigpLnRoZW4oXG4gICAgICAgICAgZGF0YSA9PntcbiAgICAgICAgICAgIHRoaXMucCA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSh0aGlzLnAuZ2V0TmFtZSgpICsgXCIgLSBDYXRhbGRvc3RvcmUuaXRcIik7XG4gICAgICAgICAgICB0aGlzLm1ldGFTZXJ2aWNlLnVwZGF0ZVRhZyh7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IHRoaXMucC5nZXROYW1lKCkgKyBcIiBhIFwiICsgKHRoaXMucC5nZXRQcmljZWMoKSAtIHRoaXMucC5nZXREaXNjb3VudCgpKSArIFwi4oKsXCIgKycgfCBTcGVkaXppb25lIGdyYXR1aXRhIHN1IHR1dHRpIGdsaSBvcmRpbmkhJyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICApLmNhdGNoKCBlcnJvciA9PntcbiAgICAgICAgICAgIHRoaXMucCA9IG51bGw7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fZ2V0V3Byb2R1Y3QodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3Byb2R1Y3RJZCcpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgncHJvZHVjdElkJyk7XG4gICAgICAgIHRoaXMuX2dldFNpemVzKCk7XG4gICAgICAgIFxuXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInByb2R1Y3Q9IFwiICsgdGhpcy5wcm9kdWN0KTtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTtcbiAgICAgICAgLy8gdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lXG4gICAgICAgIC8vLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2ROYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cblxuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmVuZFN1YnMkLmNvbXBsZXRlKCk7XG4gIH1cblxuXG4gIFxuXG4gIGFzeW5jIGFqYXhHZXRJbWFnZURhdGEodXJsKSB7XG4gIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7Y2FjaGU6IFwibm8tc3RvcmVcIn0pO1xuICAgIGNvbnN0IGltYWdlQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICByZXR1cm4gaW1hZ2VCbG9iO1xuXG5cbiAgLy9Db2RlIHRvIGdldCBiYXNlNjQgaW1hZ2Ugc3RyaW5nXG5cbn1cbiAgLyoqXG4gICAqIFNlIGlsIHByb2RvdHRvIGVzaXN0ZSBnacOgLCBhZ2dpdW5nbyB1bmEgdmFyaWFudHMsIHNlbm5vIGFnZ2l1bmdvIHVuIG51b3ZvIHByb2RvdHRvIGNvbiBsYSBzdWEgdmFyaWFudHNcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFkZFByb2R1Y3RUb0NhcnQoKSB7XG5cbiAgICBpZih0aGlzLnF1YW50aXR5ICE9IDApIHtcblxuICAgbGV0IHBWYXJpYW50ID0gbmV3IFByb2R1Y3RWYXJpYW50KHRoaXMuc2VsZWN0ZWRTaXplWzBdLmlkLCB0aGlzLnNlbGVjdGVkU2l6ZVswXS5zaXplLCB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnksIDAsIFN0cmluZyh0aGlzLnNlbGVjdGVkU2l6ZVswXS5iYXJjb2RlKSk7XG5cblxuICAgICAgaWYodGhpcy5jYXJ0LmNvbnRhaW5zUHJvZHVjdCh0aGlzLnApKXtcbiAgIFxuICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuY2FydC5nZXRQcm9kdWN0SW5kZXgodGhpcy5wKTtcbiAgICAgICAgXG4gICAgICAgICAgbGV0IHByb2R1Y3QgPSB0aGlzLmNhcnQuZ2V0UHJvZHVjdChpbmRleCk7XG4gICBcbiAgICAgICAgICBwcm9kdWN0LmFkZFZhcmlhbnQocFZhcmlhbnQsIHRoaXMucXVhbnRpdHkpO1xuXG4gICAgIC8vICAgICB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnkgLT0gcHJvZHVjdC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRTZWxlY3RlZCgpO1xuICAgICAgICAgIHRoaXMucCA9IHByb2R1Y3Q7XG4gICAgICAgICAgdGhpcy5tYXhJbnYgPSAgdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldEludmVudG9yeSgpO1xuXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImkgaGF2ZSBzZXQgdGhlIG1heEludiB0bzogXCIgKyB0aGlzLm1heEludik7XG4gICAgICAgICAgaWYodGhpcy5tYXhJbnYgPD0gMCl7XG4gICAgICAgICAgICB0aGlzLm1pbkludiA9IDA7XG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XG4gICAgICAgICAgdGhpcy5jYXJ0LnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgIHRoaXMuY2hlY2tRdWFudGl0eSgpO1xuICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgICBzdW1tYXJ5OiAnU3VjY2Vzc28nLFxuICAgICAgICAgICAgZGV0YWlsOiBgTCdhcnRpY29sbyDDqCBzdGF0byBhZ2dpdW50byBhbCBjYXJyZWxsbyFgXG4gICAgICAgICAgfSk7XG5cblxuICAgICAgfWVsc2V7XG4gICAgICBcbiAgICAgICAgdGhpcy5wLmFkZFZhcmlhbnQocFZhcmlhbnQsIHRoaXMucXVhbnRpdHkpO1xuICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcbiAgICAgICAgdGhpcy5tYXhJbnYgPSAgdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldEludmVudG9yeSgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICAgICAgaWYodGhpcy5tYXhJbnYgPD0gMCl7XG4gICAgICAgICAgdGhpcy5taW5JbnYgPSAwO1xuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICB0aGlzLmNhcnQuYWRkUHJvZHVjdEx1Y2EodGhpcy5wKTtcbiAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgICBzdW1tYXJ5OiAnU3VjY2Vzc28nLFxuICAgICAgICAgICAgZGV0YWlsOiBgTCdhcnRpY29sbyDDqCBzdGF0byBhZ2dpdW50byBhbCBjYXJyZWxsbyFgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICBwcml2YXRlIF9nZXRQcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlXG4gICAgICAuZ2V0UHJvZHVjdChpZClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gcmVzUHJvZHVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IGNvbG9yPyBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdCkpO1xuICAgICAgICB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWU7XG4gICAgICAgIHRoaXMucHJvZElkID0gdGhpcy5wcm9kdWN0LnByb2R1Y3RJZDtcbiAgICAgICAgdGhpcy5wcm9kdWN0LmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XG4gICAgICAgIHRoaXMuYnJhbmRMb2dvID0gdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJicmFuZCBsb2dvID0gXCIgKyB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpIClcbiAgICAgICAgdGhpcy5nZXRQcm9kQnlQcm9kSWQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHJlc3RpdHVpc2NlIGlsIHByb2RvdHRvIGRlbGxhIHBhZ2luYVxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0UHJvZHVjdDIoKSB7XG5cbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFByb2R1Y3RMdWNhPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnByb2RTZXJ2aWNlXG4gICAgICAuZ2V0UHJvZHVjdCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgncHJvZHVjdElkJykpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXNQcm9kdWN0KSA9PiB7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhcInJlcyBwcm9kdWN0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc1Byb2R1Y3QpKTtcbiAgICAgICAgbGV0IHAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcbiAgICAgICAgcC5zZXRJZChyZXNQcm9kdWN0LmlkKTtcbiAgICAgICAgcC5zZXREaXNjb3VudChyZXNQcm9kdWN0LmRpc2NvdW50KTtcbiAgICAgICAgcC5zZXRQcmljZShyZXNQcm9kdWN0LnByaWNlKTtcbiAgICAgICAgcC5zZXRUaGVNYWluSW1hZ2UocmVzUHJvZHVjdC5pbWFnZSk7XG4gICAgICAgIHAuc2V0TmFtZShyZXNQcm9kdWN0Lm5hbWUpO1xuXG4gICAgICAgIHJlc29sdmUocCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxldCBkYXRhID0gYXdhaXQgcHJvbWlzZTtcbiAgICByZXR1cm4gZGF0YTtcblxuXG4gIH1cblxuICBwcml2YXRlIF9nZXRXcHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0KGlkKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZShhc3luYyAocmVzUHJvZHVjdCkgPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNQcm9kdWN0O1xuICAgICAgIFxuICAgICAgICBpZih0aGlzLnByb2R1Y3Quc2V4ID09IFwiTVwiKXtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhdGVnb3JpYVwiLCBcInVvbW9cIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRlZ29yaWFcIiwgXCJkb25uYVwiKVxuICAgICAgICB9XG4gICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5XX3Byb2RuYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWU7XG4gICAgICAgIHRoaXMucHJvZElkID0gdGhpcy5wcm9kdWN0LnByb2R1Y3RJZDtcbiAgICAgICAgdGhpcy5nZXRQcm9kQnlQcm9kSWQoKTtcblxuICAgICAgICB0aGlzLmRpc2NvdW50ID0gTWF0aC5yb3VuZCggKHRoaXMucHJvZHVjdC5kaXNjb3VudC90aGlzLnByb2R1Y3QucHJpY2UpICAqIDEwMClcbiAgICAgICAgdGhpcy5rbGFybmFQcmljZSA9IE1hdGgucm91bmQoKHRoaXMucHJvZHVjdC5wcmljZSAtIHRoaXMucHJvZHVjdC5kaXNjb3VudCkvMylcblxuICAgICAgICB0aGlzLnByb2R1Y3QuYnJhbmRMb2dvID0gdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKTtcbiAgICAgICAgdGhpcy5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xuXG4gICAgICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMuYnJhbmRMb2dvKTtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgdGhpcy5icmFuZExvZ29CbG9iID0gYmFzZTY0ZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBfZ2V0U2l6ZXMoKSB7XG4gICAgdGhpcy52YXJpYW50U2VydmljZVxuICAgICAgLmdldFZhcmlhbnRzKClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHZhcmlhbnRzKSA9PiB7XG4gICAgICAgIHRoaXMudmFyaWFudHMgPSB2YXJpYW50cztcblxuXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cyA9IHRoaXMudmFyaWFudHMuZmlsdGVyKFxuICAgICAgICAgIChzaXplKSA9PiBzaXplLnByb2R1Y3QgPT09IHRoaXMuY3VycmVudElkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5zb3J0KChhLCBiKSA9PiAoYS5zaXplIDwgYi5zaXplID8gLTEgOiAxKSk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLmZpbHRlcmVkVmFyaWFudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIGlmKHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpXS5pbnZlbnRvcnkgPD0gMCl7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubm9uRW1wdHlWYXJpYW50cy5wdXNoKHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgd2VpZ2h0cyA9IHtcbiAgICAgICAgICAneHhzJzoxLCBcbiAgICAgICAgICAneHMnOjIsIFxuICAgICAgICAgICdzJzozLCBcbiAgICAgICAgICAnbSc6NCxcbiAgICAgICAgICAnbCc6NSwgXG4gICAgICAgICAgJ3hsJzo2LCBcbiAgICAgICAgICAneHhsJzo3LFxuICAgICAgICAgICd4eHhsJzo4LFxuICAgICAgICAgICczeGwnOjhcbiAgICAgICAgfTtcbiAgICAgICAgaWYodGhpcy5ub25FbXB0eVZhcmlhbnRzWzBdICE9IG51bGwpe1xuICAgICAgICAgIGlmKHRoaXMubm9uRW1wdHlWYXJpYW50c1swXS5zaXplLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJzXCIpIHx8IHRoaXMubm9uRW1wdHlWYXJpYW50c1swXS5zaXplLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJsXCIpIHx8IHRoaXMubm9uRW1wdHlWYXJpYW50c1swXS5zaXplLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJtXCIpKXtcbiAgICAgICAgICAgIHRoaXMubm9uRW1wdHlWYXJpYW50cyA9IHRoaXMubm9uRW1wdHlWYXJpYW50cy5zb3J0KChhLGIpPT53ZWlnaHRzW2Euc2l6ZS50b0xvd2VyQ2FzZSgpXS13ZWlnaHRzW2Iuc2l6ZS50b0xvd2VyQ2FzZSgpXSk7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgfVxuICAgICBcblxuICAgICAgXG4gICAgIFxuXG5cbiAgICAgICAgXG4gICAgICB9KTtcbiAgfVxuXG5cblxuICAvKipxdWVzdGEgZnVuemlvbmUgc2VtYnJhIHNvbG8gZ2VzdGlyZSBpbCBtYXggaW5wdXQgKi9cbiAgc2VsZWN0U2l6ZShldmVudDogYW55LCBpbmRleCkge1xuICAgIC8vY29uc29sZS5sb2coXCJmaWx0ZXJlZFZhcmlhbnRzOiBcIiArIHRoaXMuZmlsdGVyZWRWYXJpYW50cyk7XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLmNsaWNrZWRTaXplID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTC5zbGljZSgwLCAtMSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImZpbHRlcmVkVmFyaWFudHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyZWRWYXJpYW50cykpXG5cbiAgICB0aGlzLnNlbGVjdGVkU2l6ZSA9IHRoaXMuZmlsdGVyZWRWYXJpYW50cy5maWx0ZXIoKHgpID0+IHguc2l6ZSA9PT0gdGhpcy5jbGlja2VkU2l6ZSk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCBzaXplPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRTaXplKSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5ID49IDEpIHtcbiAgICAgIHRoaXMuYnV0dG9uID0gZmFsc2U7XG4gICAgICB0aGlzLm1pbkludiA9IDE7XG4gICAgICB0aGlzLm1heEludiA9IHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeTtcbiAgICAgIHRoaXMucXVhbnRpdHkgPSAxO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJpbSBkb2luZyBzb21ldGhpbmcgLT4gc2VsZWN0U2l6ZSgpXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdldFByb2RCeW5hbWUoKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlJZCh0aGlzLnByb2ROYW1lKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XG5cbiAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh0aGlzLnByb2R1Y3RzW2ldKTtcbiAgICAgICAgdGhpcy5zaW1hbFByb2R1Y3RzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5pbWFnZSk7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzW2ldLmNvbG9yKTtcbiAgICAgIH1cbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XG5cbiAgICAgLy9jb25zb2xlLmxvZyhcInNpbWlsYXIgcHJvZHVjdHMgPSBcIiArIHRoaXMuc2ltYWxQcm9kdWN0cylcbiAgICAgIGlmICh0aGlzLmxlbiA+PSAxKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UHJvZEJ5UHJvZElkKCkge1xuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQodGhpcy5wcm9kSWQpLnN1YnNjcmliZSgocHJvZHVjdHMpID0+IHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcblxuICAgICAgdGhpcy5sZW4gPSB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMucHJvZHVjdHNbaV0pO1xuICAgICAgICB0aGlzLnNpbWFsUHJvZHVjdHMucHVzaCh0aGlzLnByb2R1Y3RzW2ldLmltYWdlKTtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgfVxuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY29sb3JzKTtcblxuICAgLy8gIGNvbnNvbGUubG9nKFwic2ltaWxhciBwcm9kdWN0cyA9IFwiICsgdGhpcy5zaW1hbFByb2R1Y3RzKVxuICAgICAgaWYgKHRoaXMubGVuID49IDEpIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0V1Byb2RCeW5hbWUoKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlOYW1lKHRoaXMuV19wcm9kbmFtZSkuc3Vic2NyaWJlKFxuICAgICAgKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XG4gICAgICAgICAgdGhpcy5zaW1hbFByb2R1Y3RzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5pbWFnZSk7XG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuID4gMSkge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RDb2xvcihwcm9kSWQpIHtcbiAgIC8vIC8vY29uc29sZS5sb2cocHJvZElkKTtcbiAgICB0aGlzLl9nZXRQcm9kdWN0KHByb2RJZCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwcm9kdWN0cy8nICsgcHJvZElkXSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RXQ29sb3IocHJvZElkKSB7XG4gICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XG4gICAgdGhpcy5fZ2V0V3Byb2R1Y3QocHJvZElkKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kSWRdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkU2l6ZShpbmRleCl7XG5cblxuICAgIC8vY29uc29sZS5sb2coXCJzaXplID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdKSk7XG4gICAgbGV0IHNlbGVjdGVkVmFyaWFudCA9IHRoaXMubm9uRW1wdHlWYXJpYW50c1tpbmRleF07XG4gICAgbGV0IHNlbGVjdGVkVmFyaWFudElkID0gdGhpcy5ub25FbXB0eVZhcmlhbnRzW2luZGV4XS5pZDtcblxuICAgIC8vY29uc29sZS5sb2coXCJzZWxlY3RlZFZhcmlhbnRJZCBcIiArIHNlbGVjdGVkVmFyaWFudElkICk7XG5cbiAgICBsZXQgc2VsZWN0ZWRQcm9kdWN0VmFyaWFudCA9IHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChzZWxlY3RlZFZhcmlhbnRJZCk7XG4gICAgaWYoc2VsZWN0ZWRQcm9kdWN0VmFyaWFudCAhPSBudWxsKXtcbiAgICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQuZ2V0SnNvbigpKTtcbiAgICB0aGlzLm1heEludiA9IHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQuZ2V0SW52ZW50b3J5KCk7XG4gICAgaWYodGhpcy5tYXhJbnY9PT0wIHx8IHRoaXMucXVhbnRpdHkgPT09IDApdGhpcy5idXR0b24gPSB0cnVlO1xuICAgIC8vY29uc29sZS5sb2coXCJ0aGlzIHByb2R1Y3QgaXMgYWxyZWFkeSBpbnNpZGUgdGhlIGNhcnQsIHRoZSBtYXhJbnYgaXM6IFwiICsgdGhpcy5tYXhJbnYpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5tYXhJbnYgPSBzZWxlY3RlZFZhcmlhbnQuaW52ZW50b3J5O1xuICAgICAgaWYodGhpcy5tYXhJbnY9PT0wICB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gIHRydWU7XG4gICAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIE5PVCBpbnNpZGUgdGhlIGNhcnQsIHRoZSBtYXhJbnYgaXM6IFwiICsgdGhpcy5tYXhJbnYpO1xuICAgIH1cblxuICB9XG5cbiAgY2hlY2tRdWFudGl0eSgpe1xuICAgIGlmKCB0aGlzLnF1YW50aXR5ICE9IDApe1xuICAgICAgdGhpcy5idXR0b24gPSAgZmFsc2U7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmJ1dHRvbiA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iLCI8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm92YSBGbGF0JyByZWw9J3N0eWxlc2hlZXQnPlxuPGRpdiBjbGFzcz1cInByb2R1Y3QtcGFnZVwiICpuZ0lmPVwicHJvZHVjdFwiPlxuICA8ZGl2IGNsYXNzPVwiZ3JpZFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgPGVlc2hvcC1mcm9udGVuZC1tZXNzYWdlcyBzdHlsZT1cIm1heC13aWR0aDo0MHZ3XCIgKm5nSWY9XCJkaXNwbGF5U3VjY2Vzc0Jhbm5lclwiPjwvZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzPlxuXG4gICAgPCEtLVxuICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nLXNtXCI+XG4gICAgICAgICAgICA8cC1yYXRpbmcgWyhuZ01vZGVsKV09XCJwcm9kdWN0LnJhdGluZ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCIgW2NhbmNlbF09XCJmYWxzZVwiPjwvcC1yYXRpbmc+XG4gICAgICAgIDwvZGl2PiAtLT5cbiAgICBcblxuICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTQgY29sLWxnLWF1dG8gZ2FsbGVyeSBtLTAgcC0wXCI+XG4gICAgICA8dWktZ2FsbGVyeSAgW2ltYWdlc109XCJwcm9kdWN0LmltYWdlc1wiIFtpbWFnZV09XCJwcm9kdWN0LmltYWdlXCIgW3Byb2R1Y3RdPVwicHJvZHVjdFwiID48L3VpLWdhbGxlcnk+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNSBjb2wtbGctMyBjb2wteGwtNCBwcm9kdWN0XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47YWxpZ24taXRlbXM6IGVuZDtwYWRkaW5nOjFlbTsgbGluZS1oZWlnaHQ6MS41ZW07XCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCIgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OjYwMFwiPnt7cHJvZHVjdC5uYW1lfX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgIGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA3MDA7XCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInByb2R1Y3QuZGlzY291bnQgIT0gMFwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiAgbGluZS10aHJvdWdoOyBmb250LXdlaWdodDogMTAwOyBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XCI+Jm5ic3A7IHt7cHJvZHVjdC5wcmljZX19IOKCrCA8L3NwYW4+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGJsYWNrO1wiPiB7e3Byb2R1Y3QucHJpY2UgLSBwcm9kdWN0LmRpc2NvdW50fX0g4oKsPC9zcGFuPiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG9cIiBzdHlsZT1cIiBmb250LXdlaWdodDogbGlnaHRlcjsgZm9udC1zaXplOiBzbWFsbDsgY29sb3I6IHJnYigxNDMsIDE0MywgMTQzKTtcIj5WYXJpYW50aTwvZGl2PlxuICAgICAgICA8ZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWwgIFtpbWFnZXNdPVwicHJvZHVjdHNcIiBzdHlsZT1cIiBvdmVyZmxvdy14OiBhdXRvO1wiPjwvZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgc3R5bGU9XCIgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IGZvbnQtc2l6ZTogc21hbGw7IGNvbG9yOiByZ2IoMTQzLCAxNDMsIDE0Myk7IHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XCI+VGFnbGlhPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IG92ZXJmbG93LXg6YXV0b1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiAgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiBmLnNpemUgPT09IGNsaWNrZWRTaXplfVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBtLTIgXCIgc3R5bGU9XCJtYXgtd2lkdGg6Zml0LWNvbnRlbnQ7IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcIiBbZGlzYWJsZWRdPVwiZi5hdmFpbGFibGU/IGZhbHNlIDogdHJ1ZVwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBub25FbXB0eVZhcmlhbnRzLCBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdFNpemUoJGV2ZW50KVwiXG4gICAgICAgICAgICAoY2xpY2spPVwidXBkYXRlU2VsZWN0ZWRTaXplKGkpXCIgPnt7Zi5zaXplfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiIHN0eWxlPVwiIGZvbnQtd2VpZ2h0OiBsaWdodGVyOyBmb250LXNpemU6IDEwcHg7IGNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2NSk7XCI+XG5cbiAgICAgICAgICAgIDxhIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyOyAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XCI+R3VpZGEgYWxsZSB0YWdsaWU8L2E+XG4gICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgbGFiZWw9XCJBZGQgdG8gY2FydFwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBib3JkZXItcmFkaXVzOiAwO1wiXG4gICAgICAgICAgICAoY2xpY2spPVwiYWRkUHJvZHVjdFRvQ2FydCgpXCI+XG4gICAgICAgICAgICBBR0dJVU5HSSBBTCBDQVJSRUxMT1xuICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCIgc3R5bGU9XCJmb250LXNpemU6IDEwcHg7XCI+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cIiBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDEwcHg7IHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XCI+UGFnYSBpbiAzIHJhdGUgZGEge3t0aGlzLmtsYXJuYVByaWNlfX0g4oKsIHNlbnphIGludGVyZXNzaSBjb24gICAgJm5ic3A7PC9zcGFuPiA8c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA3MDA7XCI+S2xhcm5hPC9zcGFuPiAgICZuYnNwOzxhIHN0eWxlPVwiIGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMTBweDsgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDsgY3Vyc29yOiBwb2ludGVyOyAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XCI+U2NvcHJpIGRpIHBpw7k8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgPHAtYWNjb3JkaW9uIHN0eWxlPVwiXCI+XG4gICAgICAgICAgICA8cC1hY2NvcmRpb25UYWIgaGVhZGVyPVwiREVTQ1JJWklPTkVcIiBzdHlsZT1cIiBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICAgICA8cD57e3Byb2R1Y3QuZGVzY3JpcHRpb259fTwvcD5cbiAgICAgICAgICAgIDwvcC1hY2NvcmRpb25UYWI+XG4gICAgICAgICAgICA8cC1hY2NvcmRpb25UYWIgaGVhZGVyPVwiTUFURVJJQUxJIEUgQ1VSQVwiPlxuICAgICAgICAgICAgICAgIElsIGRhdGFiYXNlIG5vbiBmb3JuaXNjZSBuZXNzdW4naW5mb3JtYXppb25lXG4gICAgICAgICAgICA8L3AtYWNjb3JkaW9uVGFiPlxuICAgIFxuICAgICAgICA8L3AtYWNjb3JkaW9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDpjZW50ZXI7XCI+XG4gICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgcHJvZG90dGlDb3JyZWxhdGlUZXh0XCIgc3R5bGU9XCJib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiAycHg7XCI+XG4gICAgICBQcm9kb3R0aSBjb3JyZWxhdGlcbiAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIHByLTAgcGwtMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OmNlbnRlcjtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLWwtOSBwLTBcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XCI+XG5cbiAgICAgICAgPGVzaG9wLWZyb250ZW5kLWZlYXR1cmVkLXByb2R1Y3RzIFticmFuZE5hbWVdPVwicHJvZHVjdC5icmFuZFwiICBbbWF4Q29tcG9uZW50V2lkdGhdPVwiMTIwMFwiIFtmZWF0dXJlZFNleF09XCJwcm9kdWN0LnNleFwiPjwvZXNob3AtZnJvbnRlbmQtZmVhdHVyZWQtcHJvZHVjdHM+XG4gICAgPC9kaXY+XG4gICAgICBcbiAgICAgPC9kaXY+XG4gICBcbiAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==