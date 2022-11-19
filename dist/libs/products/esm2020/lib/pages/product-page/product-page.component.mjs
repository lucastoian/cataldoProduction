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
function ProductPageComponent_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 40);
    i0.ɵɵtext(3, "unread messages");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" -", ctx_r2.discount, "% ");
} }
function ProductPageComponent_div_1_span_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 40);
    i0.ɵɵtext(3, "unread messages");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" -", ctx_r3.discount, "% ");
} }
function ProductPageComponent_div_1_div_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 42);
    i0.ɵɵelement(2, "eshop-frontend-carousel", 43);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("images", ctx_r4.products);
} }
const _c0 = function (a0) { return { gold: a0 }; };
function ProductPageComponent_div_1_button_44_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_button_44_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.selectSize($event); })("click", function ProductPageComponent_div_1_button_44_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const i_r7 = restoredCtx.index; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.updateSelectedSize(i_r7); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r5.clickedIndex === i_r7))("disabled", f_r6.available ? false : true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(f_r6.size);
} }
function ProductPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, ProductPageComponent_div_1_eeshop_frontend_messages_2_Template, 1, 0, "eeshop-frontend-messages", 4);
    i0.ɵɵelementStart(3, "div", 5)(4, "h1", 6);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 7)(7, "div", 8)(8, "div", 9);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 10);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "currency");
    i0.ɵɵtemplate(14, ProductPageComponent_div_1_span_14_Template, 4, 1, "span", 11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 12)(16, "div", 13);
    i0.ɵɵelement(17, "ui-gallery", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 15)(19, "div", 16);
    i0.ɵɵelement(20, "img", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 18)(22, "h1", 6);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 19)(25, "div", 20)(26, "div", 21);
    i0.ɵɵtext(27);
    i0.ɵɵpipe(28, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 10);
    i0.ɵɵtext(30);
    i0.ɵɵpipe(31, "currency");
    i0.ɵɵtemplate(32, ProductPageComponent_div_1_span_32_Template, 4, 1, "span", 11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "div", 22)(34, "div", 20)(35, "div", 23)(36, "h4");
    i0.ɵɵtext(37, "Varianti");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(38, ProductPageComponent_div_1_div_38_Template, 3, 1, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "div", 20)(40, "div", 23)(41, "h4");
    i0.ɵɵtext(42, "Taglia");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 25);
    i0.ɵɵtemplate(44, ProductPageComponent_div_1_button_44_Template, 2, 5, "button", 26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 27)(46, "div", 28)(47, "label", 29);
    i0.ɵɵtext(48, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "p-inputNumber", 30);
    i0.ɵɵlistener("ngModelChange", function ProductPageComponent_div_1_Template_p_inputNumber_ngModelChange_49_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.quantity = $event; })("click", function ProductPageComponent_div_1_Template_p_inputNumber_click_49_listener() { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.checkQuantity(); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(50, "div", 31)(51, "button", 32);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r12); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.addProductToCart(); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(52, "div", 33)(53, "h1", 34);
    i0.ɵɵtext(54, "Product description");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(55, "hr")(56, "div", 35);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "div", 36);
    i0.ɵɵelement(58, "div", 37);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.displaySuccessBanner);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 21, ctx_r0.product.price - ctx_r0.product.discount));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(13, 23, ctx_r0.product.price), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.product.discount / ctx_r0.product.price * 100 != 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("images", ctx_r0.product.images)("image", ctx_r0.product.image)("product", ctx_r0.product);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("src", ctx_r0.brandLogoBlob, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(28, 25, ctx_r0.product.price - ctx_r0.product.discount));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(31, 27, ctx_r0.product.price), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.product.discount / ctx_r0.product.price * 100 != 0);
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
        //
        this.p = new ProductLuca();
        this._getProduct2().then(data => {
            this.p = data;
        }).catch(error => {
            this.p = null;
        });
        this.route.params.subscribe(async (params) => {
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
            this.product.brandLogo = this.brandMap.get(this.product.brand);
            this.brandLogo = this.brandMap.get(this.product.brand);
            console.log("brand logo = " + this.brandMap.get(this.product.brand));
            this.getProdByname();
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
            this.getWProdByname();
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
        this.prodService.getProductByName(this.prodName).subscribe((products) => {
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
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 2, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Nova Flat", "rel", "stylesheet"], ["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "grid"], ["style", "max-width:40vw", 4, "ngIf"], [1, "product-name-sm", "sm:col-12"], [2, "font-family", "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif"], [1, "product-price-sm"], [1, "row", "w-100", 2, "justify-content", "center"], [1, "col-12", 2, "font-size", "x-large"], [1, "col-auto", 2, "text-decoration", "line-through", "font-weight", "100", "color", "rgb(98, 98, 98)"], ["class", "badge rounded-pill bg-danger", "style", " border-radius: 5px!important;", 4, "ngIf"], [1, "row", 2, "justify-content", "space-around"], [1, "col-12", "col-md-7", "gallery", 2, "border-right", "10px solid white"], [3, "images", "image", "product"], [1, "col-10", "col-md-5", "product", 2, "display", "flex", "flex-direction", "column", "align-items", "center", "padding", "1em", "line-height", "1.5em"], [1, "brand-logo", "w-100"], [3, "src"], [1, "product-name", "w-100"], [1, "product-price"], [1, "row", "w-100"], [1, "col-auto", 2, "font-size", "x-large"], [1, "grid", "p-4", "w-100", 2, "padding-right", "0 !important"], [1, "col-3", "my-auto"], ["class", "col-9", "style", "padding-left: 20px", 4, "ngIf"], [1, "sizes", "col-9", 2, "display", "flex", "flex-direction", "row", "align-items", "center", "flex-flow", "wrap", "padding-left", "20px"], ["class", "circle", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "product-quantity", 2, "display", "flex", "width", "100%", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [1, "", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["for", "quantity", 2, "padding-right", "10px"], ["inputId", "quantity", "mode", "decimal", 3, "ngModel", "showButtons", "min", "max", "ngModelChange", "click"], [1, "product-action", "col-12", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Add to cart", 1, "", 3, "disabled", "click"], [1, "col-12", "desc-box"], [2, "text-align", "center", "color", "black", "font-size", "18px"], [1, "desc", 3, "innerHTML"], [1, "row", 2, "justify-content", "center"], [1, "col-7"], [2, "max-width", "40vw"], [1, "badge", "rounded-pill", "bg-danger", 2, "border-radius", "5px!important"], [1, "visually-hidden"], [1, "col-9", 2, "padding-left", "20px"], [2, "display", "flex", "flex-flow", "wrap"], [3, "images"], [1, "circle", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵtemplate(1, ProductPageComponent_div_1_Template, 59, 29, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i7.NgIf, i9.GalleryComponent, i9.CarouselComponent, i7.NgForOf, i7.NgClass, i10.InputNumber, i11.NgControlStatus, i11.NgModel, i12.ButtonDirective], pipes: [i7.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', styles: [], template: "<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\r\n<div class=\"product-page\" *ngIf=\"product\">\r\n  <div class=\"grid\">\r\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\r\n    <div class=\"product-name-sm sm:col-12\">\r\n\r\n      <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\r\n    </div>\r\n    <!--\r\n        <div class=\"rating-sm\">\r\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\r\n        </div> -->\r\n    <div class=\"product-price-sm\">\r\n      <div class=\" row w-100\" style=\"justify-content: center;\">\r\n        <div class=\"col-12\" style=\"font-size: x-large;\">{{product.price - product.discount | currency}}</div>\r\n        <div class=\"col-auto\"  style=\"text-decoration:  line-through; font-weight: 100; color: rgb(98, 98, 98);\">{{product.price | currency}} \r\n          <span *ngIf=\"(product.discount / product.price) * 100 != 0\"  class=\"badge rounded-pill bg-danger\" style=\" border-radius: 5px!important;\">\r\n              -{{discount}}%\r\n              <span class=\"visually-hidden\">unread messages</span>\r\n            </span></div>\r\n       \r\n        \r\n       \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"justify-content: space-around\">\r\n    <div class=\"col-12 col-md-7 gallery\"  style=\"  border-right: 10px solid white;\">\r\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\" ></ui-gallery>\r\n    </div>\r\n\r\n    <div class=\"col-10 col-md-5 product\" style=\"display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding:1em;\r\n  line-height:1.5em;\">\r\n\r\n      <div class=\"brand-logo w-100\">\r\n        <img src='{{brandLogoBlob}}'>\r\n      </div>\r\n\r\n      <div class=\"product-name w-100\">\r\n        <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\r\n      </div>\r\n \r\n      <div class=\"product-price\">\r\n        <div class=\" row w-100\">\r\n          <div class=\"col-auto\" style=\"font-size: x-large;\">{{product.price - product.discount | currency}}</div>\r\n          <div class=\"col-auto\"  style=\"text-decoration:  line-through; font-weight: 100; color: rgb(98, 98, 98);\">{{product.price | currency}}\r\n            <span *ngIf=\"(product.discount / product.price) * 100 != 0\"  class=\"badge rounded-pill bg-danger\" style=\" border-radius: 5px!important;\">\r\n                -{{discount}}%\r\n                <span class=\"visually-hidden\">unread messages</span>\r\n              </span></div>\r\n        </div>\r\n      </div>\r\n\r\n  \r\n        <div class=\"grid p-4 w-100\" style=\"padding-right: 0 !important;\">\r\n          \r\n\r\n          <div class=\"row w-100\">\r\n            <div class=\"col-3 my-auto\"><h4>Varianti</h4></div>\r\n\r\n            <div class=\"col-9\" *ngIf=\"menProd\" style=\"padding-left: 20px\">\r\n              <div  style=\"display: flex; flex-flow: wrap;\">\r\n                \r\n                <eshop-frontend-carousel  [images]=\"products\" ></eshop-frontend-carousel>\r\n                 <!-- <div [style.background-color]=\"'rgb(' + product.color + ')'\" class=\"circle \" style=\"min-width: 25px; min-height: 25px;\" *ngFor=\"let product of products, let i = index\"\r\n                    (click)=\"selectColor(product.id)\"></div>\r\n                    -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n         \r\n\r\n\r\n\r\n\r\n          <div class=\"row w-100\">\r\n            <div class=\"col-3 my-auto\"><h4>Taglia</h4></div>\r\n            <div class=\"sizes col-9\" style=\"display: flex;flex-direction: row; align-items: center; flex-flow: wrap;  padding-left: 20px;\">\r\n              <button [ngClass]=\"{gold: clickedIndex === i}\" class=\"circle\" [disabled]=\"f.available? false : true\"\r\n                *ngFor=\"let f of filteredVariants, let i = index\" (click)=\"selectSize($event)\"\r\n                (click)=\"updateSelectedSize(i)\">{{f.size}}</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"product-quantity\" style=\"display: flex; width: 100%;flex-direction: row;justify-content: center;align-items: center;\">\r\n            <div class=\"\" style=\"display: flex;flex-direction: row;justify-content: center;align-items: center;\">\r\n              <label for=\"quantity\" style=\"padding-right: 10px;\">Quantity</label>\r\n              <p-inputNumber [(ngModel)]=\"quantity\" inputId=\"quantity\" mode=\"decimal\" [showButtons]=\"true\"\r\n                [min]=\"0\" [max]=\"maxInv\" (click)=\"checkQuantity()\">\r\n              </p-inputNumber>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\" product-action col-12\" style=\"display: flex;flex-direction: row;justify-content: center;align-items: center;\">\r\n            <button [disabled]=\"button\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"\"\r\n              (click)=\"addProductToCart()\">\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n     \r\n\r\n      <div class=\"col-12 desc-box\">\r\n\r\n        <h1 style=\"text-align: center; color: black; font-size: 18px;\">Product description</h1>\r\n        <hr>\r\n        <div class=\"desc\" [innerHTML]=\"product.description\"></div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"justify-content: center;\">\r\n    <div class=\"col-7\"></div>\r\n    <!-- <div class=\"col-5 desc-box\" style=\"font-weight: 600; font-family: 'Nova Flat';font-size: 22px;    border-top: 1px solid var(--surface-300); margin-top: 10px; background: linear-gradient(#682e429b, #682e4213);\r\n    padding:1em;\r\n  line-height:1.5em;\r\n    border:solid 5px rgb(0, 0, 0);\">\r\n      <h1 style=\"text-align: center; color: white; \">Product description</h1>\r\n      <hr>\r\n      <div class=\"desc\" style=\" padding-left: 5vw; padding-right: 5vw; padding-top: 3vw;  display: flex;\r\n      flex-direction: column;\r\n      justify-content: flex-end;\r\n      text-align: center;\" [innerHTML]=\"product.description\"></div>\r\n    </div> -->\r\n  </div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.W_ProductsService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.CartService }, { type: i5.VariantsService }, { type: i6.MessageService }, { type: i4.CartIconComponent }, { type: i7.Location }, { type: i8.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVEsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNqQjlELCtDQUF5Rzs7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ICdwcmltZW5nL2FwaSc7XHJcblxyXG5cclxuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuaW1wb3J0IHsgUHJvZHVjdEx1Y2EgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xyXG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC9vcmRlcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IENhcnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XHJcbmltcG9ydCB7IFZhcmlhbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdmFyaWFudCc7XHJcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XHJcbmltcG9ydCB7IFdfUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy93LXByb2R1Y3QnO1xyXG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV19Qcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93LXByb2R1Y3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYXJpYW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92YXJpYW50cy5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNsaWNrZWRJbmRleDogbnVtYmVyO1xyXG4gIHZhcmlhbnQ6IFZhcmlhbnQ7XHJcbiAgdmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xyXG4gIGZpbHRlcmVkVmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xyXG4gIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XHJcbiAgV19wcm9kdWN0OiBXX1Byb2R1Y3Q7XHJcbiAgcHJvZE5hbWUgPSAnJztcclxuICBXX3Byb2RuYW1lID0gJyc7XHJcbiAgbWVuUHJvZCA9IHRydWU7XHJcbiAgd1Byb2QgPSBmYWxzZTtcclxuICBwcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XHJcbiAgbGVuOiBudW1iZXI7XHJcbiAgY29sb3JzOiBQcm9kdWN0MTIzW10gPSBbXTtcclxuICBzaW1hbFByb2R1Y3RzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIG11bHRpcGxlQ29sb3JzOiBib29sZWFuO1xyXG4gIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHF1YW50aXR5ID0gMDtcclxuICBjdXJyZW50SWQ7XHJcbiAgZGlzcGxheVN1Y2Nlc3NCYW5uZXIgPSBmYWxzZTtcclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGJ1dHRvbiA9IHRydWU7XHJcbiAgc2VsZWN0ZWRTaXplOiBWYXJpYW50W10gPSBbXTtcclxuICBhdmFpbGFiaWxpdHk6IGFueVtdID0gW107XHJcbiAgYXZhaWxhYmxlOiBib29sZWFuO1xyXG4gIG1pbkludjogbnVtYmVyO1xyXG4gIG1heEludjogbnVtYmVyO1xyXG4gIHVybDtcclxuICBkaXNjb3VudCA9IDA7XHJcbiAgcDogUHJvZHVjdEx1Y2E7XHJcbiAgYnJhbmRMb2dvIDogc3RyaW5nO1xyXG4gIGJyYW5kTWFwID0gbmV3IE1hcDxzdHJpbmcsc3RyaW5nPigpOyBcclxuICBicmFuZExvZ29CbG9iO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwcm9kU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBXcHJvZFNlcnZpY2U6IFdfUHJvZHVjdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZhcmlhbnRTZXJ2aWNlOiBWYXJpYW50c1NlcnZpY2UsXHJcblxyXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGljb246IENhcnRJY29uQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIGNhcnQgOiBDYXJ0XHJcblxyXG5cclxuICApIHsgICAgIHRoaXMucCA9IG5ldyBQcm9kdWN0THVjYSgpXHJcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjNzg4OTMwOWRlOTYwMTgwZGE0YVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vYmxhdWVyLnBuZy5wbmdcIik7XHJcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjODllOTMwOWRlOTYwMTgwZGE0ZFwiLCBcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL29sZHJpdmVyLnBuZy5wbmdcIik7XHJcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE2N2JkMWNiYThhMWUwZDljMWFmODhcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2NvbG1hci5wbmcucG5nXCIpO1xyXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODllZmUxZDYyMzg2Y2MyMjUyNWI2XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9lYTcucG5nLnBuZ1wiKTtcclxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmMWUxZDYyMzg2Y2MyMjUyNWI5XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9mcmVkcGVycnkucG5nLnBuZ1wiKTtcclxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZjM3MWQ2MjM4NmNjMjI1MjViY1wiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20va3dheS5wbmcucG5nXCIpO1xyXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjE4OWY0ODFkNjIzODZjYzIyNTI1YmZcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2xhY29zdGUucG5nLnBuZ1wiKTtcclxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmN2QxZDYyMzg2Y2MyMjUyNWMyXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9tdXJwaHkucG5nLnBuZ1wiKTtcclxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5Zjk4MWQ2MjM4NmNjMjI1MjVjNVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vcGVuaW5zdWxhLnBuZy5wbmdcIik7XHJcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZmFkMWQ2MjM4NmNjMjI1MjVjOFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vc2F1Y29ueS5wbmcucG5nXCIpO1xyXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmYmIxZDYyMzg2Y2MyMjUyNWNiXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9zdW5kZWsucG5nLnBuZ1wiKTtcclxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYzMmUwNWYzYjhjNTY3ZGU1ZWE4MzY2OVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vYmFyYm91ci5wbmcucG5nXCIpO1xyXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU3ZTI1MDZiYTY1ZTU5M2JhYTgxXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcclxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjM2YjU3ZjM1MDZiYTY1ZTU5M2JhYTg0XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcclxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYzNmI1ODA2NTA2YmE2NWU1OTNiYWE4N1wiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vU2NyZWVuc2hvdC5wbmdcIik7XHJcbiAgfVxyXG5cclxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHJcbiAgICBcclxuICAgIHRoaXMuYXZhaWxhYmxlID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiY2FydCA9IFwiICsgdGhpcy5jYXJ0LmdldEpzb24oKSk7XHJcblxyXG5cclxuICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS51cmw7XHJcblxyXG5cclxuLy9cclxuICAgIHRoaXMucCA9IG5ldyBQcm9kdWN0THVjYSgpO1xyXG4gICAgdGhpcy5fZ2V0UHJvZHVjdDIoKS50aGVuKFxyXG4gICAgIGRhdGEgPT57XHJcbiAgICAgICB0aGlzLnAgPSBkYXRhO1xyXG4gICAgIH1cclxuICAgICApLmNhdGNoKCBlcnJvciA9PntcclxuICAgICAgIHRoaXMucCA9IG51bGw7XHJcbiAgICAgfSk7XHJcbiAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgICAgaWYgKHBhcmFtcy5wcm9kdWN0SWQpIHtcclxuICAgICAgICB0aGlzLl9nZXRXcHJvZHVjdChwYXJhbXMucHJvZHVjdElkKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5wcm9kdWN0SWQ7XHJcbiAgICAgICAgdGhpcy5fZ2V0U2l6ZXMoKTtcclxuICAgIFxyXG5cclxuICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwicHJvZHVjdD0gXCIgKyB0aGlzLnByb2R1Y3QpO1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lXHJcbiAgICAgICAgLy8vLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZE5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbmRTdWJzJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIFxyXG5cclxuICBhc3luYyBhamF4R2V0SW1hZ2VEYXRhKHVybCkge1xyXG4gIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtjYWNoZTogXCJuby1zdG9yZVwifSk7XHJcbiAgICBjb25zdCBpbWFnZUJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XHJcbiAgICByZXR1cm4gaW1hZ2VCbG9iO1xyXG5cclxuXHJcbiAgLy9Db2RlIHRvIGdldCBiYXNlNjQgaW1hZ2Ugc3RyaW5nXHJcblxyXG59XHJcbiAgLyoqXHJcbiAgICogU2UgaWwgcHJvZG90dG8gZXNpc3RlIGdpw6AsIGFnZ2l1bmdvIHVuYSB2YXJpYW50cywgc2Vubm8gYWdnaXVuZ28gdW4gbnVvdm8gcHJvZG90dG8gY29uIGxhIHN1YSB2YXJpYW50c1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgYWRkUHJvZHVjdFRvQ2FydCgpIHtcclxuXHJcbiAgICBpZih0aGlzLnF1YW50aXR5ICE9IDApIHtcclxuXHJcbiAgIGxldCBwVmFyaWFudCA9IG5ldyBQcm9kdWN0VmFyaWFudCh0aGlzLnNlbGVjdGVkU2l6ZVswXS5pZCwgdGhpcy5zZWxlY3RlZFNpemVbMF0uc2l6ZSwgdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5LCAwLCBTdHJpbmcodGhpcy5zZWxlY3RlZFNpemVbMF0uYmFyY29kZSkpO1xyXG5cclxuXHJcbiAgICAgIGlmKHRoaXMuY2FydC5jb250YWluc1Byb2R1Y3QodGhpcy5wKSl7XHJcbiAgIFxyXG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jYXJ0LmdldFByb2R1Y3RJbmRleCh0aGlzLnApO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgbGV0IHByb2R1Y3QgPSB0aGlzLmNhcnQuZ2V0UHJvZHVjdChpbmRleCk7XHJcbiAgIFxyXG4gICAgICAgICAgcHJvZHVjdC5hZGRWYXJpYW50KHBWYXJpYW50LCB0aGlzLnF1YW50aXR5KTtcclxuXHJcbiAgICAgLy8gICAgIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSBwcm9kdWN0LmdldFZhcmlhbnQocFZhcmlhbnQpLmdldFNlbGVjdGVkKCk7XHJcbiAgICAgICAgICB0aGlzLnAgPSBwcm9kdWN0O1xyXG4gICAgICAgICAgdGhpcy5tYXhJbnYgPSAgdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldEludmVudG9yeSgpO1xyXG5cclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpIGhhdmUgc2V0IHRoZSBtYXhJbnYgdG86IFwiICsgdGhpcy5tYXhJbnYpO1xyXG4gICAgICAgICAgaWYodGhpcy5tYXhJbnYgPD0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubWluSW52ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcclxuICAgICAgICAgIHRoaXMuY2FydC51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICAgIHRoaXMuY2hlY2tRdWFudGl0eSgpO1xyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xyXG4gICAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBzdW1tYXJ5OiAnU3VjY2VzcycsXHJcbiAgICAgICAgICAgIGRldGFpbDogYFByb2R1Y3QgQWRkZWQgdG8gY2FydCFgXHJcbiAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5wLmFkZFZhcmlhbnQocFZhcmlhbnQsIHRoaXMucXVhbnRpdHkpO1xyXG4gICAgICAgLy8gdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5IC09IHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMubWF4SW52ID0gIHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRJbnZlbnRvcnkoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcclxuICAgICAgICBpZih0aGlzLm1heEludiA8PSAwKXtcclxuICAgICAgICAgIHRoaXMubWluSW52ID0gMDtcclxuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcclxuICAgICAgICB0aGlzLmNhcnQuYWRkUHJvZHVjdEx1Y2EodGhpcy5wKTtcclxuICAgICAgICB0aGlzLmNoZWNrUXVhbnRpdHkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xyXG4gICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcclxuICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXNzJyxcclxuICAgICAgICAgIGRldGFpbDogYFByb2R1Y3QgQWRkZWQgdG8gY2FydCFgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UHJvZHVjdChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlXHJcbiAgICAgIC5nZXRQcm9kdWN0KGlkKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcclxuICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNQcm9kdWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdCBjb2xvcj8gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3QpKTtcclxuICAgICAgICB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0LmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XHJcbiAgICAgICAgdGhpcy5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnJhbmQgbG9nbyA9IFwiICsgdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKSApXHJcbiAgICAgICAgdGhpcy5nZXRQcm9kQnluYW1lKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyByZXN0aXR1aXNjZSBpbCBwcm9kb3R0byBkZWxsYSBwYWdpbmFcclxuICAgKi9cclxuICBwcml2YXRlIGFzeW5jIF9nZXRQcm9kdWN0MigpIHtcclxuXHJcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFByb2R1Y3RMdWNhPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZFNlcnZpY2VcclxuICAgICAgLmdldFByb2R1Y3QodGhpcy5jdXJyZW50SWQpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzUHJvZHVjdCkgPT4ge1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhcInJlcyBwcm9kdWN0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc1Byb2R1Y3QpKTtcclxuICAgICAgICBsZXQgcCA9IG5ldyBQcm9kdWN0THVjYSgpO1xyXG4gICAgICAgIHAuc2V0SWQocmVzUHJvZHVjdC5pZCk7XHJcbiAgICAgICAgcC5zZXREaXNjb3VudChyZXNQcm9kdWN0LmRpc2NvdW50KTtcclxuICAgICAgICBwLnNldFByaWNlKHJlc1Byb2R1Y3QucHJpY2UpO1xyXG4gICAgICAgIHAuc2V0VGhlTWFpbkltYWdlKHJlc1Byb2R1Y3QuaW1hZ2UpO1xyXG4gICAgICAgIHAuc2V0TmFtZShyZXNQcm9kdWN0Lm5hbWUpO1xyXG5cclxuICAgICAgICByZXNvbHZlKHApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBkYXRhID0gYXdhaXQgcHJvbWlzZTtcclxuICAgIHJldHVybiBkYXRhO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRXcHJvZHVjdChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3QoaWQpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZShhc3luYyAocmVzUHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc1Byb2R1Y3Q7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLldfcHJvZG5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZTtcclxuICAgICAgICB0aGlzLmdldFdQcm9kQnluYW1lKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzY291bnQgPSBNYXRoLnJvdW5kKCAodGhpcy5wcm9kdWN0LmRpc2NvdW50L3RoaXMucHJvZHVjdC5wcmljZSkgICogMTAwKVxyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3QuYnJhbmRMb2dvID0gdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKTtcclxuICAgICAgICB0aGlzLmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XHJcblxyXG4gICAgICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMuYnJhbmRMb2dvKTtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgIHRoaXMuYnJhbmRMb2dvQmxvYiA9IGJhc2U2NGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIF9nZXRTaXplcygpIHtcclxuICAgIHRoaXMudmFyaWFudFNlcnZpY2VcclxuICAgICAgLmdldFZhcmlhbnRzKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCh2YXJpYW50cykgPT4ge1xyXG4gICAgICAgIHRoaXMudmFyaWFudHMgPSB2YXJpYW50cztcclxuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMgPSB0aGlzLnZhcmlhbnRzLmZpbHRlcihcclxuICAgICAgICAgIChzaXplKSA9PiBzaXplLnByb2R1Y3QgPT09IHRoaXMuY3VycmVudElkXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMuc29ydCgoYSwgYikgPT4gKGEuc2l6ZSA8IGIuc2l6ZSA/IC0xIDogMSkpO1xyXG4gICAgIFxyXG4gICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYoZWxlbWVudC5pbnZlbnRvcnkgPT0gMCkgZWxlbWVudC5hdmFpbGFibGUgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIF9nZXRXU2l6ZXMoKSB7XHJcbiAgICB0aGlzLnZhcmlhbnRTZXJ2aWNlXHJcbiAgICAgIC5nZXRWYXJpYW50cygpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZSgodmFyaWFudHMpID0+IHtcclxuICAgICAgICB0aGlzLnZhcmlhbnRzID0gdmFyaWFudHM7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzID0gdGhpcy52YXJpYW50cy5maWx0ZXIoXHJcbiAgICAgICAgICAoc2l6ZSkgPT4gc2l6ZS5wcm9kdWN0ID09PSB0aGlzLmN1cnJlbnRJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzLnNvcnQoKGEsIGIpID0+IChhLnNpemUgPCBiLnNpemUgPyAtMSA6IDEpKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaW52ZW50b3J5ID09IDApIGVsZW1lbnQuYXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuZmlsdGVyZWRWYXJpYW50cyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqcXVlc3RhIGZ1bnppb25lIHNlbWJyYSBzb2xvIGdlc3RpcmUgaWwgbWF4IGlucHV0ICovXHJcbiAgc2VsZWN0U2l6ZShldmVudDogYW55LCBpbmRleCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImZpbHRlcmVkVmFyaWFudHM6IFwiICsgdGhpcy5maWx0ZXJlZFZhcmlhbnRzKTtcclxuICAgIHRoaXMuY2xpY2tlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiaW5kZXggOiBcIiArIGluZGV4KTtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5idXR0b24gPSBmYWxzZTtcclxuICAgIGNvbnN0IHRlbXAgPSBldmVudC50YXJnZXQuaW5uZXJIVE1MO1xyXG4gICAvLyAvL2NvbnNvbGUubG9nKHRlbXApO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRTaXplID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzLmZpbHRlcigoeCkgPT4geC5zaXplID09PSB0ZW1wKTtcclxuICAgLy8gLy9jb25zb2xlLmxvZyhcInNlbGVjdGVkIHNpemU9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZFNpemUpKTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5ID49IDEpIHtcclxuICAgICAgdGhpcy5taW5JbnYgPSAxO1xyXG4gICAgICB0aGlzLm1heEludiA9IHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeTtcclxuICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKFwiaW0gZG9pbmcgc29tZXRoaW5nIC0+IHNlbGVjdFNpemUoKVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFByb2RCeW5hbWUoKSB7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeU5hbWUodGhpcy5wcm9kTmFtZSkuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcclxuXHJcbiAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xyXG4gICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XHJcbiAgICAgICAgdGhpcy5zaW1hbFByb2R1Y3RzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5pbWFnZSk7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XHJcblxyXG4gICAgIGNvbnNvbGUubG9nKFwic2ltaWxhciBwcm9kdWN0cyA9IFwiICsgdGhpcy5zaW1hbFByb2R1Y3RzKVxyXG4gICAgICBpZiAodGhpcy5sZW4gPj0gMSkge1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldFdQcm9kQnluYW1lKCkge1xyXG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlOYW1lKHRoaXMuV19wcm9kbmFtZSkuc3Vic2NyaWJlKFxyXG4gICAgICAocHJvZHVjdHMpID0+IHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xyXG5cclxuICAgICAgICB0aGlzLmxlbiA9IHRoaXMucHJvZHVjdHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh0aGlzLnByb2R1Y3RzW2ldKTtcclxuICAgICAgICAgIHRoaXMuc2ltYWxQcm9kdWN0cy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uaW1hZ2UpO1xyXG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sZW4gPiAxKSB7XHJcbiAgICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9yKHByb2RJZCkge1xyXG4gICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XHJcbiAgICB0aGlzLl9nZXRQcm9kdWN0KHByb2RJZCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncHJvZHVjdHMvJyArIHByb2RJZF0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RXQ29sb3IocHJvZElkKSB7XHJcbiAgIC8vIC8vY29uc29sZS5sb2cocHJvZElkKTtcclxuICAgIHRoaXMuX2dldFdwcm9kdWN0KHByb2RJZCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnd29tZW4tcHJvZHVjdHMvJyArIHByb2RJZF0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZFNpemUoaW5kZXgpe1xyXG5cclxuXHJcbiAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XHJcbiAgICB0aGlzLmNsaWNrZWRJbmRleCA9IGluZGV4O1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInNpemUgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF0pKTtcclxuICAgIGxldCBzZWxlY3RlZFZhcmlhbnQgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xyXG4gICAgbGV0IHNlbGVjdGVkVmFyaWFudElkID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XS5pZDtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWRWYXJpYW50SWQgXCIgKyBzZWxlY3RlZFZhcmlhbnRJZCApO1xyXG5cclxuICAgIGxldCBzZWxlY3RlZFByb2R1Y3RWYXJpYW50ID0gdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKHNlbGVjdGVkVmFyaWFudElkKTtcclxuICAgIGlmKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgIT0gbnVsbCl7XHJcbiAgICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQuZ2V0SnNvbigpKTtcclxuICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRQcm9kdWN0VmFyaWFudC5nZXRJbnZlbnRvcnkoKTtcclxuICAgIGlmKHRoaXMubWF4SW52PT09MCB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gdHJ1ZTtcclxuICAgIC8vY29uc29sZS5sb2coXCJ0aGlzIHByb2R1Y3QgaXMgYWxyZWFkeSBpbnNpZGUgdGhlIGNhcnQsIHRoZSBtYXhJbnYgaXM6IFwiICsgdGhpcy5tYXhJbnYpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRWYXJpYW50LmludmVudG9yeTtcclxuICAgICAgaWYodGhpcy5tYXhJbnY9PT0wICB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gIHRydWU7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0aGlzIHByb2R1Y3QgaXMgTk9UIGluc2lkZSB0aGUgY2FydCwgdGhlIG1heEludiBpczogXCIgKyB0aGlzLm1heEludik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tRdWFudGl0eSgpe1xyXG4gICAgaWYoIHRoaXMucXVhbnRpdHkgIT0gMCl7XHJcbiAgICAgIHRoaXMuYnV0dG9uID0gIGZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuYnV0dG9uID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdmEgRmxhdCcgcmVsPSdzdHlsZXNoZWV0Jz5cclxuPGRpdiBjbGFzcz1cInByb2R1Y3QtcGFnZVwiICpuZ0lmPVwicHJvZHVjdFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJncmlkXCI+XHJcbiAgICA8ZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzIHN0eWxlPVwibWF4LXdpZHRoOjQwdndcIiAqbmdJZj1cImRpc3BsYXlTdWNjZXNzQmFubmVyXCI+PC9lZXNob3AtZnJvbnRlbmQtbWVzc2FnZXM+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1uYW1lLXNtIHNtOmNvbC0xMlwiPlxyXG5cclxuICAgICAgPGgxIHN0eWxlPVwiZm9udC1mYW1pbHk6ICdDb21pYyBTYW5zIE1TJywgJ0NoYWxrYm9hcmQgU0UnLCAnQ29taWMgTmV1ZScsIHNhbnMtc2VyaWY7XCI+e3twcm9kdWN0Lm5hbWV9fTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nLXNtXCI+XHJcbiAgICAgICAgICAgIDxwLXJhdGluZyBbKG5nTW9kZWwpXT1cInByb2R1Y3QucmF0aW5nXCIgW2Rpc2FibGVkXT1cInRydWVcIiBbY2FuY2VsXT1cImZhbHNlXCI+PC9wLXJhdGluZz5cclxuICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1wcmljZS1zbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiIHJvdyB3LTEwMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwiZm9udC1zaXplOiB4LWxhcmdlO1wiPnt7cHJvZHVjdC5wcmljZSAtIHByb2R1Y3QuZGlzY291bnQgfCBjdXJyZW5jeX19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCIgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiAgbGluZS10aHJvdWdoOyBmb250LXdlaWdodDogMTAwOyBjb2xvcjogcmdiKDk4LCA5OCwgOTgpO1wiPnt7cHJvZHVjdC5wcmljZSB8IGN1cnJlbmN5fX0gXHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIihwcm9kdWN0LmRpc2NvdW50IC8gcHJvZHVjdC5wcmljZSkgKiAxMDAgIT0gMFwiICBjbGFzcz1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYW5nZXJcIiBzdHlsZT1cIiBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1wiPlxyXG4gICAgICAgICAgICAgIC17e2Rpc2NvdW50fX0lXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj51bnJlYWQgbWVzc2FnZXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj48L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTcgZ2FsbGVyeVwiICBzdHlsZT1cIiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHdoaXRlO1wiPlxyXG4gICAgICA8dWktZ2FsbGVyeSAgW2ltYWdlc109XCJwcm9kdWN0LmltYWdlc1wiIFtpbWFnZV09XCJwcm9kdWN0LmltYWdlXCIgW3Byb2R1Y3RdPVwicHJvZHVjdFwiID48L3VpLWdhbGxlcnk+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIGNvbC1tZC01IHByb2R1Y3RcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gIGxpbmUtaGVpZ2h0OjEuNWVtO1wiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImJyYW5kLWxvZ28gdy0xMDBcIj5cclxuICAgICAgICA8aW1nIHNyYz0ne3ticmFuZExvZ29CbG9ifX0nPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LW5hbWUgdy0xMDBcIj5cclxuICAgICAgICA8aDEgc3R5bGU9XCJmb250LWZhbWlseTogJ0NvbWljIFNhbnMgTVMnLCAnQ2hhbGtib2FyZCBTRScsICdDb21pYyBOZXVlJywgc2Fucy1zZXJpZjtcIj57e3Byb2R1Y3QubmFtZX19PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiBcclxuICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiIHJvdyB3LTEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCIgc3R5bGU9XCJmb250LXNpemU6IHgtbGFyZ2U7XCI+e3twcm9kdWN0LnByaWNlIC0gcHJvZHVjdC5kaXNjb3VudCB8IGN1cnJlbmN5fX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiICBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogIGxpbmUtdGhyb3VnaDsgZm9udC13ZWlnaHQ6IDEwMDsgY29sb3I6IHJnYig5OCwgOTgsIDk4KTtcIj57e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeX19XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiKHByb2R1Y3QuZGlzY291bnQgLyBwcm9kdWN0LnByaWNlKSAqIDEwMCAhPSAwXCIgIGNsYXNzPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhbmdlclwiIHN0eWxlPVwiIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XCI+XHJcbiAgICAgICAgICAgICAgICAte3tkaXNjb3VudH19JVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj51bnJlYWQgbWVzc2FnZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgcC00IHctMTAwXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XCI+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBteS1hdXRvXCI+PGg0PlZhcmlhbnRpPC9oND48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiICpuZ0lmPVwibWVuUHJvZFwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAyMHB4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiAgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWZsb3c6IHdyYXA7XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxlc2hvcC1mcm9udGVuZC1jYXJvdXNlbCAgW2ltYWdlc109XCJwcm9kdWN0c1wiID48L2VzaG9wLWZyb250ZW5kLWNhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCIncmdiKCcgKyBwcm9kdWN0LmNvbG9yICsgJyknXCIgY2xhc3M9XCJjaXJjbGUgXCIgc3R5bGU9XCJtaW4td2lkdGg6IDI1cHg7IG1pbi1oZWlnaHQ6IDI1cHg7XCIgKm5nRm9yPVwibGV0IHByb2R1Y3Qgb2YgcHJvZHVjdHMsIGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RDb2xvcihwcm9kdWN0LmlkKVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC0tPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBteS1hdXRvXCI+PGg0PlRhZ2xpYTwvaDQ+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXplcyBjb2wtOVwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyOyBmbGV4LWZsb3c6IHdyYXA7ICBwYWRkaW5nLWxlZnQ6IDIwcHg7XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBbbmdDbGFzc109XCJ7Z29sZDogY2xpY2tlZEluZGV4ID09PSBpfVwiIGNsYXNzPVwiY2lyY2xlXCIgW2Rpc2FibGVkXT1cImYuYXZhaWxhYmxlPyBmYWxzZSA6IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyZWRWYXJpYW50cywgbGV0IGkgPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RTaXplKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInVwZGF0ZVNlbGVjdGVkU2l6ZShpKVwiPnt7Zi5zaXplfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1xdWFudGl0eVwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgd2lkdGg6IDEwMCU7ZmxleC1kaXJlY3Rpb246IHJvdztqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicXVhbnRpdHlcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDEwcHg7XCI+UXVhbnRpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxwLWlucHV0TnVtYmVyIFsobmdNb2RlbCldPVwicXVhbnRpdHlcIiBpbnB1dElkPVwicXVhbnRpdHlcIiBtb2RlPVwiZGVjaW1hbFwiIFtzaG93QnV0dG9uc109XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIFttaW5dPVwiMFwiIFttYXhdPVwibWF4SW52XCIgKGNsaWNrKT1cImNoZWNrUXVhbnRpdHkoKVwiPlxyXG4gICAgICAgICAgICAgIDwvcC1pbnB1dE51bWJlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiIHByb2R1Y3QtYWN0aW9uIGNvbC0xMlwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogcm93O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImJ1dHRvblwiIHBCdXR0b24gcFJpcHBsZSB0eXBlPVwiYnV0dG9uXCIgbGFiZWw9XCJBZGQgdG8gY2FydFwiIGNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkUHJvZHVjdFRvQ2FydCgpXCI+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgIFxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBkZXNjLWJveFwiPlxyXG5cclxuICAgICAgICA8aDEgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiBibGFjazsgZm9udC1zaXplOiAxOHB4O1wiPlByb2R1Y3QgZGVzY3JpcHRpb248L2gxPlxyXG4gICAgICAgIDxocj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiIFtpbm5lckhUTUxdPVwicHJvZHVjdC5kZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtN1wiPjwvZGl2PlxyXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLTUgZGVzYy1ib3hcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtZmFtaWx5OiAnTm92YSBGbGF0Jztmb250LXNpemU6IDIycHg7ICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLTMwMCk7IG1hcmdpbi10b3A6IDEwcHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNjgyZTQyOWIsICM2ODJlNDIxMyk7XHJcbiAgICBwYWRkaW5nOjFlbTtcclxuICBsaW5lLWhlaWdodDoxLjVlbTtcclxuICAgIGJvcmRlcjpzb2xpZCA1cHggcmdiKDAsIDAsIDApO1wiPlxyXG4gICAgICA8aDEgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiB3aGl0ZTsgXCI+UHJvZHVjdCBkZXNjcmlwdGlvbjwvaDE+XHJcbiAgICAgIDxocj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRlc2NcIiBzdHlsZT1cIiBwYWRkaW5nLWxlZnQ6IDV2dzsgcGFkZGluZy1yaWdodDogNXZ3OyBwYWRkaW5nLXRvcDogM3Z3OyAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1wiIFtpbm5lckhUTUxdPVwicHJvZHVjdC5kZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgPC9kaXY+IC0tPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19