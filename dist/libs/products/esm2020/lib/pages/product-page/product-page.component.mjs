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
    i0.ɵɵelement(0, "eeshop-frontend-messages", 33);
} }
function ProductPageComponent_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35);
    i0.ɵɵelement(2, "eshop-frontend-carousel", 36);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("images", ctx_r2.products);
} }
const _c0 = function (a0) { return { gold: a0 }; };
function ProductPageComponent_div_1_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_button_32_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.selectSize($event); })("click", function ProductPageComponent_div_1_button_32_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const i_r5 = restoredCtx.index; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.updateSelectedSize(i_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r3.clickedIndex === i_r5))("disabled", f_r4.available ? false : true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(f_r4.size);
} }
function ProductPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, ProductPageComponent_div_1_eeshop_frontend_messages_2_Template, 1, 0, "eeshop-frontend-messages", 4);
    i0.ɵɵelementStart(3, "div", 5)(4, "h1", 6);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 8)(10, "div", 9);
    i0.ɵɵelement(11, "ui-gallery", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 11)(13, "div", 12);
    i0.ɵɵelement(14, "img", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 14)(16, "h1", 6);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 15);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 16)(22, "div", 17)(23, "div", 18)(24, "h4");
    i0.ɵɵtext(25, "Varianti");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, ProductPageComponent_div_1_div_26_Template, 3, 1, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 17)(28, "div", 18)(29, "h4");
    i0.ɵɵtext(30, "Taglia");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 20);
    i0.ɵɵtemplate(32, ProductPageComponent_div_1_button_32_Template, 2, 5, "button", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 22)(34, "div", 23)(35, "label", 24);
    i0.ɵɵtext(36, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "p-inputNumber", 25);
    i0.ɵɵlistener("ngModelChange", function ProductPageComponent_div_1_Template_p_inputNumber_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.quantity = $event; })("click", function ProductPageComponent_div_1_Template_p_inputNumber_click_37_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.checkQuantity(); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 26)(39, "button", 27);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.addProductToCart(); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "div", 28)(41, "h1", 29);
    i0.ɵɵtext(42, "Product description");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(43, "hr")(44, "div", 30);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(45, "div", 31);
    i0.ɵɵelement(46, "div", 32);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.displaySuccessBanner);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 17, ctx_r0.product.price), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("images", ctx_r0.product.images)("image", ctx_r0.product.image)("product", ctx_r0.product);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("src", ctx_r0.brandLogoBlob, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 19, ctx_r0.product.price), " ");
    i0.ɵɵadvance(7);
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
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 2, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Nova Flat", "rel", "stylesheet"], ["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "grid"], ["style", "max-width:40vw", 4, "ngIf"], [1, "product-name-sm", "sm:col-12"], [2, "font-family", "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif"], [1, "product-price-sm"], [1, "row", 2, "justify-content", "space-around"], [1, "col-12", "col-md-7", "gallery", 2, "border-right", "10px solid white"], [3, "images", "image", "product"], [1, "col-10", "col-md-5", "product", 2, "display", "flex", "flex-direction", "column", "align-items", "center", "padding", "1em", "line-height", "1.5em"], [1, "brand-logo", "w-100"], [3, "src"], [1, "product-name", "w-100"], [1, "product-price"], [1, "grid", "p-4", "w-100", 2, "padding-right", "0 !important"], [1, "row", "w-100"], [1, "col-3", "my-auto"], ["class", "col-9", "style", "padding-left: 20px", 4, "ngIf"], [1, "sizes", "col-9", 2, "display", "flex", "flex-direction", "row", "align-items", "center", "flex-flow", "wrap", "padding-left", "20px"], ["class", "circle", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "product-quantity", 2, "display", "flex", "width", "100%", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [1, "", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["for", "quantity", 2, "padding-right", "10px"], ["inputId", "quantity", "mode", "decimal", 3, "ngModel", "showButtons", "min", "max", "ngModelChange", "click"], [1, "product-action", "col-12", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Add to cart", 1, "", 3, "disabled", "click"], [1, "col-12", "desc-box"], [2, "text-align", "center", "color", "black", "font-size", "18px"], [1, "desc", 3, "innerHTML"], [1, "row", 2, "justify-content", "center"], [1, "col-7"], [2, "max-width", "40vw"], [1, "col-9", 2, "padding-left", "20px"], [2, "display", "flex", "flex-flow", "wrap"], [3, "images"], [1, "circle", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵtemplate(1, ProductPageComponent_div_1_Template, 47, 21, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i7.NgIf, i9.GalleryComponent, i9.CarouselComponent, i7.NgForOf, i7.NgClass, i10.InputNumber, i11.NgControlStatus, i11.NgModel, i12.ButtonDirective], pipes: [i7.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', styles: [], template: "<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\r\n<div class=\"product-page\" *ngIf=\"product\">\r\n  <div class=\"grid\">\r\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\r\n    <div class=\"product-name-sm sm:col-12\">\r\n\r\n      <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\r\n    </div>\r\n    <!--\r\n        <div class=\"rating-sm\">\r\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\r\n        </div> -->\r\n    <div class=\"product-price-sm\">\r\n      {{product.price | currency}}\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"justify-content: space-around\">\r\n    <div class=\"col-12 col-md-7 gallery\"  style=\"  border-right: 10px solid white;\">\r\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\" ></ui-gallery>\r\n    </div>\r\n\r\n    <div class=\"col-10 col-md-5 product\" style=\"display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding:1em;\r\n  line-height:1.5em;\">\r\n\r\n      <div class=\"brand-logo w-100\">\r\n        <img src='{{brandLogoBlob}}'>\r\n      </div>\r\n\r\n      <div class=\"product-name w-100\">\r\n        <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\r\n      </div>\r\n \r\n      <div class=\"product-price\">\r\n        {{product.price | currency}}\r\n      </div>\r\n\r\n  \r\n        <div class=\"grid p-4 w-100\" style=\"padding-right: 0 !important;\">\r\n          \r\n\r\n          <div class=\"row w-100\">\r\n            <div class=\"col-3 my-auto\"><h4>Varianti</h4></div>\r\n\r\n            <div class=\"col-9\" *ngIf=\"menProd\" style=\"padding-left: 20px\">\r\n              <div  style=\"display: flex; flex-flow: wrap;\">\r\n                \r\n                <eshop-frontend-carousel  [images]=\"products\" ></eshop-frontend-carousel>\r\n                 <!-- <div [style.background-color]=\"'rgb(' + product.color + ')'\" class=\"circle \" style=\"min-width: 25px; min-height: 25px;\" *ngFor=\"let product of products, let i = index\"\r\n                    (click)=\"selectColor(product.id)\"></div>\r\n                    -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n         \r\n\r\n\r\n\r\n\r\n          <div class=\"row w-100\">\r\n            <div class=\"col-3 my-auto\"><h4>Taglia</h4></div>\r\n            <div class=\"sizes col-9\" style=\"display: flex;flex-direction: row; align-items: center; flex-flow: wrap;  padding-left: 20px;\">\r\n              <button [ngClass]=\"{gold: clickedIndex === i}\" class=\"circle\" [disabled]=\"f.available? false : true\"\r\n                *ngFor=\"let f of filteredVariants, let i = index\" (click)=\"selectSize($event)\"\r\n                (click)=\"updateSelectedSize(i)\">{{f.size}}</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"product-quantity\" style=\"display: flex; width: 100%;flex-direction: row;justify-content: center;align-items: center;\">\r\n            <div class=\"\" style=\"display: flex;flex-direction: row;justify-content: center;align-items: center;\">\r\n              <label for=\"quantity\" style=\"padding-right: 10px;\">Quantity</label>\r\n              <p-inputNumber [(ngModel)]=\"quantity\" inputId=\"quantity\" mode=\"decimal\" [showButtons]=\"true\"\r\n                [min]=\"0\" [max]=\"maxInv\" (click)=\"checkQuantity()\">\r\n              </p-inputNumber>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\" product-action col-12\" style=\"display: flex;flex-direction: row;justify-content: center;align-items: center;\">\r\n            <button [disabled]=\"button\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"\"\r\n              (click)=\"addProductToCart()\">\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n     \r\n\r\n      <div class=\"col-12 desc-box\">\r\n\r\n        <h1 style=\"text-align: center; color: black; font-size: 18px;\">Product description</h1>\r\n        <hr>\r\n        <div class=\"desc\" [innerHTML]=\"product.description\"></div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"justify-content: center;\">\r\n    <div class=\"col-7\"></div>\r\n    <!-- <div class=\"col-5 desc-box\" style=\"font-weight: 600; font-family: 'Nova Flat';font-size: 22px;    border-top: 1px solid var(--surface-300); margin-top: 10px; background: linear-gradient(#682e429b, #682e4213);\r\n    padding:1em;\r\n  line-height:1.5em;\r\n    border:solid 5px rgb(0, 0, 0);\">\r\n      <h1 style=\"text-align: center; color: white; \">Product description</h1>\r\n      <hr>\r\n      <div class=\"desc\" style=\" padding-left: 5vw; padding-right: 5vw; padding-top: 3vw;  display: flex;\r\n      flex-direction: column;\r\n      justify-content: flex-end;\r\n      text-align: center;\" [innerHTML]=\"product.description\"></div>\r\n    </div> -->\r\n  </div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.W_ProductsService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.CartService }, { type: i5.VariantsService }, { type: i6.MessageService }, { type: i4.CartIconComponent }, { type: i7.Location }, { type: i8.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVEsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNqQjlELCtDQUF5Rzs7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RUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBSSxLQUFLLENBQUM7U0FDdEI7YUFBSTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7d0ZBaFpVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDNUJqQywwQkFBZ0Y7UUFDaEYsdUVBK0dNOztRQS9HcUIsZUFBYTtRQUFiLGtDQUFhOzt1RkQyQjNCLG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLDZCQUE2QixVQUUvQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcblxyXG5cclxuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuaW1wb3J0IHsgUHJvZHVjdEx1Y2EgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xyXG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC9vcmRlcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IENhcnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XHJcbmltcG9ydCB7IFZhcmlhbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdmFyaWFudCc7XHJcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XHJcbmltcG9ydCB7IFdfUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy93LXByb2R1Y3QnO1xyXG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV19Qcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93LXByb2R1Y3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYXJpYW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92YXJpYW50cy5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNsaWNrZWRJbmRleDogbnVtYmVyO1xyXG4gIHZhcmlhbnQ6IFZhcmlhbnQ7XHJcbiAgdmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xyXG4gIGZpbHRlcmVkVmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xyXG4gIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XHJcbiAgV19wcm9kdWN0OiBXX1Byb2R1Y3Q7XHJcbiAgcHJvZE5hbWUgPSAnJztcclxuICBXX3Byb2RuYW1lID0gJyc7XHJcbiAgbWVuUHJvZCA9IHRydWU7XHJcbiAgd1Byb2QgPSBmYWxzZTtcclxuICBwcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XHJcbiAgbGVuOiBudW1iZXI7XHJcbiAgY29sb3JzOiBQcm9kdWN0MTIzW10gPSBbXTtcclxuICBzaW1hbFByb2R1Y3RzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIG11bHRpcGxlQ29sb3JzOiBib29sZWFuO1xyXG4gIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHF1YW50aXR5ID0gMDtcclxuICBjdXJyZW50SWQ7XHJcbiAgZGlzcGxheVN1Y2Nlc3NCYW5uZXIgPSBmYWxzZTtcclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGJ1dHRvbiA9IHRydWU7XHJcbiAgc2VsZWN0ZWRTaXplOiBWYXJpYW50W10gPSBbXTtcclxuICBhdmFpbGFiaWxpdHk6IGFueVtdID0gW107XHJcbiAgYXZhaWxhYmxlOiBib29sZWFuO1xyXG4gIG1pbkludjogbnVtYmVyO1xyXG4gIG1heEludjogbnVtYmVyO1xyXG4gIHVybDtcclxuICBwOiBQcm9kdWN0THVjYTtcclxuICBicmFuZExvZ28gOiBzdHJpbmc7XHJcbiAgYnJhbmRNYXAgPSBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KCk7IFxyXG4gIGJyYW5kTG9nb0Jsb2I7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIFdwcm9kU2VydmljZTogV19Qcm9kdWN0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcclxuICAgIHByaXZhdGUgdmFyaWFudFNlcnZpY2U6IFZhcmlhbnRzU2VydmljZSxcclxuXHJcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgaWNvbjogQ2FydEljb25Db21wb25lbnQsXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgIHByaXZhdGUgY2FydCA6IENhcnRcclxuXHJcblxyXG4gICkgeyAgICAgdGhpcy5wID0gbmV3IFByb2R1Y3RMdWNhKClcclxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxM2M3ODg5MzA5ZGU5NjAxODBkYTRhXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9ibGF1ZXIucG5nLnBuZ1wiKTtcclxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxM2M4OWU5MzA5ZGU5NjAxODBkYTRkXCIsIFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vb2xkcml2ZXIucG5nLnBuZ1wiKTtcclxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTY3YmQxY2JhOGExZTBkOWMxYWY4OFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vY29sbWFyLnBuZy5wbmdcIik7XHJcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWVmZTFkNjIzODZjYzIyNTI1YjZcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2VhNy5wbmcucG5nXCIpO1xyXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjE4OWYxZTFkNjIzODZjYzIyNTI1YjlcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2ZyZWRwZXJyeS5wbmcucG5nXCIpO1xyXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmMzcxZDYyMzg2Y2MyMjUyNWJjXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9rd2F5LnBuZy5wbmdcIik7XHJcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjQ4MWQ2MjM4NmNjMjI1MjViZlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vbGFjb3N0ZS5wbmcucG5nXCIpO1xyXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjE4OWY3ZDFkNjIzODZjYzIyNTI1YzJcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL211cnBoeS5wbmcucG5nXCIpO1xyXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmOTgxZDYyMzg2Y2MyMjUyNWM1XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9wZW5pbnN1bGEucG5nLnBuZ1wiKTtcclxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmYWQxZDYyMzg2Y2MyMjUyNWM4XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9zYXVjb255LnBuZy5wbmdcIik7XHJcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWZiYjFkNjIzODZjYzIyNTI1Y2JcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL3N1bmRlay5wbmcucG5nXCIpO1xyXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjMyZTA1ZjNiOGM1NjdkZTVlYTgzNjY5XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9iYXJib3VyLnBuZy5wbmdcIik7XHJcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzZiNTdlMjUwNmJhNjVlNTkzYmFhODFcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL1NjcmVlbnNob3QucG5nXCIpO1xyXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MzZiNTdmMzUwNmJhNjVlNTkzYmFhODRcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL1NjcmVlbnNob3QucG5nXCIpO1xyXG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU4MDY1MDZiYTY1ZTU5M2JhYTg3XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgIFxyXG4gICAgdGhpcy5hdmFpbGFibGUgPSB0cnVlO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJjYXJ0ID0gXCIgKyB0aGlzLmNhcnQuZ2V0SnNvbigpKTtcclxuXHJcblxyXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuXHJcblxyXG4vL1xyXG4gICAgdGhpcy5wID0gbmV3IFByb2R1Y3RMdWNhKCk7XHJcbiAgICB0aGlzLl9nZXRQcm9kdWN0MigpLnRoZW4oXHJcbiAgICAgZGF0YSA9PntcclxuICAgICAgIHRoaXMucCA9IGRhdGE7XHJcbiAgICAgfVxyXG4gICAgICkuY2F0Y2goIGVycm9yID0+e1xyXG4gICAgICAgdGhpcy5wID0gbnVsbDtcclxuICAgICB9KTtcclxuICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgICBpZiAocGFyYW1zLnByb2R1Y3RJZCkge1xyXG4gICAgICAgIHRoaXMuX2dldFdwcm9kdWN0KHBhcmFtcy5wcm9kdWN0SWQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLnByb2R1Y3RJZDtcclxuICAgICAgICB0aGlzLl9nZXRTaXplcygpO1xyXG4gICAgXHJcblxyXG4gIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJwcm9kdWN0PSBcIiArIHRoaXMucHJvZHVjdCk7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTtcclxuICAgICAgICAvLyB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWVcclxuICAgICAgICAvLy8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmVuZFN1YnMkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcblxyXG4gIGFzeW5jIGFqYXhHZXRJbWFnZURhdGEodXJsKSB7XHJcbiAgXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcclxuICAgIGNvbnN0IGltYWdlQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgIHJldHVybiBpbWFnZUJsb2I7XHJcblxyXG5cclxuICAvL0NvZGUgdG8gZ2V0IGJhc2U2NCBpbWFnZSBzdHJpbmdcclxuXHJcbn1cclxuICAvKipcclxuICAgKiBTZSBpbCBwcm9kb3R0byBlc2lzdGUgZ2nDoCwgYWdnaXVuZ28gdW5hIHZhcmlhbnRzLCBzZW5ubyBhZ2dpdW5nbyB1biBudW92byBwcm9kb3R0byBjb24gbGEgc3VhIHZhcmlhbnRzXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuICBhZGRQcm9kdWN0VG9DYXJ0KCkge1xyXG5cclxuICAgIGlmKHRoaXMucXVhbnRpdHkgIT0gMCkge1xyXG5cclxuICAgbGV0IHBWYXJpYW50ID0gbmV3IFByb2R1Y3RWYXJpYW50KHRoaXMuc2VsZWN0ZWRTaXplWzBdLmlkLCB0aGlzLnNlbGVjdGVkU2l6ZVswXS5zaXplLCB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnksIDAsIFN0cmluZyh0aGlzLnNlbGVjdGVkU2l6ZVswXS5iYXJjb2RlKSk7XHJcblxyXG5cclxuICAgICAgaWYodGhpcy5jYXJ0LmNvbnRhaW5zUHJvZHVjdCh0aGlzLnApKXtcclxuICAgXHJcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNhcnQuZ2V0UHJvZHVjdEluZGV4KHRoaXMucCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBsZXQgcHJvZHVjdCA9IHRoaXMuY2FydC5nZXRQcm9kdWN0KGluZGV4KTtcclxuICAgXHJcbiAgICAgICAgICBwcm9kdWN0LmFkZFZhcmlhbnQocFZhcmlhbnQsIHRoaXMucXVhbnRpdHkpO1xyXG5cclxuICAgICAvLyAgICAgdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5IC09IHByb2R1Y3QuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICAgIHRoaXMucCA9IHByb2R1Y3Q7XHJcbiAgICAgICAgICB0aGlzLm1heEludiA9ICB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0SW52ZW50b3J5KCk7XHJcblxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImkgaGF2ZSBzZXQgdGhlIG1heEludiB0bzogXCIgKyB0aGlzLm1heEludik7XHJcbiAgICAgICAgICBpZih0aGlzLm1heEludiA8PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5taW5JbnYgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0LnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XHJcbiAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXNzJyxcclxuICAgICAgICAgICAgZGV0YWlsOiBgUHJvZHVjdCBBZGRlZCB0byBjYXJ0IWBcclxuICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICBcclxuICAgICAgICB0aGlzLnAuYWRkVmFyaWFudChwVmFyaWFudCwgdGhpcy5xdWFudGl0eSk7XHJcbiAgICAgICAvLyB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnkgLT0gdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldFNlbGVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5tYXhJbnYgPSAgdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldEludmVudG9yeSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpIGhhdmUgc2V0IHRoZSBtYXhJbnYgdG86IFwiICsgdGhpcy5tYXhJbnYpO1xyXG4gICAgICAgIGlmKHRoaXMubWF4SW52IDw9IDApe1xyXG4gICAgICAgICAgdGhpcy5taW5JbnYgPSAwO1xyXG4gICAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuY2FydC5hZGRQcm9kdWN0THVjYSh0aGlzLnApO1xyXG4gICAgICAgIHRoaXMuY2hlY2tRdWFudGl0eSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XHJcbiAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgc3VtbWFyeTogJ1N1Y2Nlc3MnLFxyXG4gICAgICAgICAgZGV0YWlsOiBgUHJvZHVjdCBBZGRlZCB0byBjYXJ0IWBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcml2YXRlIF9nZXRQcm9kdWN0KGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvZFNlcnZpY2VcclxuICAgICAgLmdldFByb2R1Y3QoaWQpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzUHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc1Byb2R1Y3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IGNvbG9yPyBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdCkpO1xyXG4gICAgICAgIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZTtcclxuICAgICAgICB0aGlzLnByb2R1Y3QuYnJhbmRMb2dvID0gdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKTtcclxuICAgICAgICB0aGlzLmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJicmFuZCBsb2dvID0gXCIgKyB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpIClcclxuICAgICAgICB0aGlzLmdldFByb2RCeW5hbWUoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHJlc3RpdHVpc2NlIGlsIHByb2RvdHRvIGRlbGxhIHBhZ2luYVxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXN5bmMgX2dldFByb2R1Y3QyKCkge1xyXG5cclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8UHJvZHVjdEx1Y2E+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5wcm9kU2VydmljZVxyXG4gICAgICAuZ2V0UHJvZHVjdCh0aGlzLmN1cnJlbnRJZClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXNQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKFwicmVzIHByb2R1Y3Q6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzUHJvZHVjdCkpO1xyXG4gICAgICAgIGxldCBwID0gbmV3IFByb2R1Y3RMdWNhKCk7XHJcbiAgICAgICAgcC5zZXRJZChyZXNQcm9kdWN0LmlkKTtcclxuICAgICAgICBwLnNldERpc2NvdW50KHJlc1Byb2R1Y3QuZGlzY291bnQpO1xyXG4gICAgICAgIHAuc2V0UHJpY2UocmVzUHJvZHVjdC5wcmljZSk7XHJcbiAgICAgICAgcC5zZXRUaGVNYWluSW1hZ2UocmVzUHJvZHVjdC5pbWFnZSk7XHJcbiAgICAgICAgcC5zZXROYW1lKHJlc1Byb2R1Y3QubmFtZSk7XHJcblxyXG4gICAgICAgIHJlc29sdmUocCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBwcm9taXNlO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFdwcm9kdWN0KGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdChpZClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxyXG4gICAgICAuc3Vic2NyaWJlKGFzeW5jIChyZXNQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gcmVzUHJvZHVjdDtcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuV19wcm9kbmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ2V0V1Byb2RCeW5hbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0LmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XHJcbiAgICAgICAgdGhpcy5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xyXG5cclxuICAgICAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLmJyYW5kTG9nbyk7XHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICB0aGlzLmJyYW5kTG9nb0Jsb2IgPSBiYXNlNjRkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZ2V0U2l6ZXMoKSB7XHJcbiAgICB0aGlzLnZhcmlhbnRTZXJ2aWNlXHJcbiAgICAgIC5nZXRWYXJpYW50cygpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZSgodmFyaWFudHMpID0+IHtcclxuICAgICAgICB0aGlzLnZhcmlhbnRzID0gdmFyaWFudHM7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzID0gdGhpcy52YXJpYW50cy5maWx0ZXIoXHJcbiAgICAgICAgICAoc2l6ZSkgPT4gc2l6ZS5wcm9kdWN0ID09PSB0aGlzLmN1cnJlbnRJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzLnNvcnQoKGEsIGIpID0+IChhLnNpemUgPCBiLnNpemUgPyAtMSA6IDEpKTtcclxuICAgICBcclxuICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmKGVsZW1lbnQuaW52ZW50b3J5ID09IDApIGVsZW1lbnQuYXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZ2V0V1NpemVzKCkge1xyXG4gICAgdGhpcy52YXJpYW50U2VydmljZVxyXG4gICAgICAuZ2V0VmFyaWFudHMoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHZhcmlhbnRzKSA9PiB7XHJcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cyA9IHRoaXMudmFyaWFudHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHNpemUpID0+IHNpemUucHJvZHVjdCA9PT0gdGhpcy5jdXJyZW50SWRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5zb3J0KChhLCBiKSA9PiAoYS5zaXplIDwgYi5zaXplID8gLTEgOiAxKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZihlbGVtZW50LmludmVudG9yeSA9PSAwKSBlbGVtZW50LmF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmZpbHRlcmVkVmFyaWFudHMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKnF1ZXN0YSBmdW56aW9uZSBzZW1icmEgc29sbyBnZXN0aXJlIGlsIG1heCBpbnB1dCAqL1xyXG4gIHNlbGVjdFNpemUoZXZlbnQ6IGFueSwgaW5kZXgpIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJmaWx0ZXJlZFZhcmlhbnRzOiBcIiArIHRoaXMuZmlsdGVyZWRWYXJpYW50cyk7XHJcbiAgICB0aGlzLmNsaWNrZWRJbmRleCA9IGluZGV4O1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuYnV0dG9uID0gZmFsc2U7XHJcbiAgICBjb25zdCB0ZW1wID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTDtcclxuICAgLy8gLy9jb25zb2xlLmxvZyh0ZW1wKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkU2l6ZSA9IHRoaXMuZmlsdGVyZWRWYXJpYW50cy5maWx0ZXIoKHgpID0+IHguc2l6ZSA9PT0gdGVtcCk7XHJcbiAgIC8vIC8vY29uc29sZS5sb2coXCJzZWxlY3RlZCBzaXplPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRTaXplKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSA+PSAxKSB7XHJcbiAgICAgIHRoaXMubWluSW52ID0gMTtcclxuICAgICAgdGhpcy5tYXhJbnYgPSB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnk7XHJcbiAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhcImltIGRvaW5nIHNvbWV0aGluZyAtPiBzZWxlY3RTaXplKClcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQcm9kQnluYW1lKCkge1xyXG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlOYW1lKHRoaXMucHJvZE5hbWUpLnN1YnNjcmliZSgocHJvZHVjdHMpID0+IHtcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xyXG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XHJcblxyXG4gICAgICB0aGlzLmxlbiA9IHRoaXMucHJvZHVjdHMubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuOyBpKyspIHtcclxuICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMucHJvZHVjdHNbaV0pO1xyXG4gICAgICAgIHRoaXMuc2ltYWxQcm9kdWN0cy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uaW1hZ2UpO1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzW2ldLmNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xyXG5cclxuICAgICBjb25zb2xlLmxvZyhcInNpbWlsYXIgcHJvZHVjdHMgPSBcIiArIHRoaXMuc2ltYWxQcm9kdWN0cylcclxuICAgICAgaWYgKHRoaXMubGVuID49IDEpIHtcclxuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRXUHJvZEJ5bmFtZSgpIHtcclxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdEJ5TmFtZSh0aGlzLldfcHJvZG5hbWUpLnN1YnNjcmliZShcclxuICAgICAgKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZW4gPSB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuOyBpKyspIHtcclxuICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XHJcbiAgICAgICAgICB0aGlzLnNpbWFsUHJvZHVjdHMucHVzaCh0aGlzLnByb2R1Y3RzW2ldLmltYWdlKTtcclxuICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzW2ldLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY29sb3JzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGVuID4gMSkge1xyXG4gICAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDb2xvcihwcm9kSWQpIHtcclxuICAgLy8gLy9jb25zb2xlLmxvZyhwcm9kSWQpO1xyXG4gICAgdGhpcy5fZ2V0UHJvZHVjdChwcm9kSWQpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3Byb2R1Y3RzLycgKyBwcm9kSWRdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0V0NvbG9yKHByb2RJZCkge1xyXG4gICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XHJcbiAgICB0aGlzLl9nZXRXcHJvZHVjdChwcm9kSWQpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kSWRdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VsZWN0ZWRTaXplKGluZGV4KXtcclxuXHJcblxyXG4gICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XTtcclxuICAgIC8vY29uc29sZS5sb2coXCJpbmRleCA6IFwiICsgaW5kZXgpO1xyXG4gICAgdGhpcy5jbGlja2VkSW5kZXggPSBpbmRleDtcclxuICAgIC8vY29uc29sZS5sb2coXCJzaXplID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdKSk7XHJcbiAgICBsZXQgc2VsZWN0ZWRWYXJpYW50ID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XTtcclxuICAgIGxldCBzZWxlY3RlZFZhcmlhbnRJZCA9IHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF0uaWQ7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcInNlbGVjdGVkVmFyaWFudElkIFwiICsgc2VsZWN0ZWRWYXJpYW50SWQgKTtcclxuXHJcbiAgICBsZXQgc2VsZWN0ZWRQcm9kdWN0VmFyaWFudCA9IHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChzZWxlY3RlZFZhcmlhbnRJZCk7XHJcbiAgICBpZihzZWxlY3RlZFByb2R1Y3RWYXJpYW50ICE9IG51bGwpe1xyXG4gICAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEpzb24oKSk7XHJcbiAgICB0aGlzLm1heEludiA9IHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQuZ2V0SW52ZW50b3J5KCk7XHJcbiAgICBpZih0aGlzLm1heEludj09PTAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9IHRydWU7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIGFscmVhZHkgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLm1heEludiA9IHNlbGVjdGVkVmFyaWFudC5pbnZlbnRvcnk7XHJcbiAgICAgIGlmKHRoaXMubWF4SW52PT09MCAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9ICB0cnVlO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIE5PVCBpbnNpZGUgdGhlIGNhcnQsIHRoZSBtYXhJbnYgaXM6IFwiICsgdGhpcy5tYXhJbnYpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrUXVhbnRpdHkoKXtcclxuICAgIGlmKCB0aGlzLnF1YW50aXR5ICE9IDApe1xyXG4gICAgICB0aGlzLmJ1dHRvbiA9ICBmYWxzZTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLmJ1dHRvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3ZhIEZsYXQnIHJlbD0nc3R5bGVzaGVldCc+XHJcbjxkaXYgY2xhc3M9XCJwcm9kdWN0LXBhZ2VcIiAqbmdJZj1cInByb2R1Y3RcIj5cclxuICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG4gICAgPGVlc2hvcC1mcm9udGVuZC1tZXNzYWdlcyBzdHlsZT1cIm1heC13aWR0aDo0MHZ3XCIgKm5nSWY9XCJkaXNwbGF5U3VjY2Vzc0Jhbm5lclwiPjwvZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtbmFtZS1zbSBzbTpjb2wtMTJcIj5cclxuXHJcbiAgICAgIDxoMSBzdHlsZT1cImZvbnQtZmFtaWx5OiAnQ29taWMgU2FucyBNUycsICdDaGFsa2JvYXJkIFNFJywgJ0NvbWljIE5ldWUnLCBzYW5zLXNlcmlmO1wiPnt7cHJvZHVjdC5uYW1lfX08L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZy1zbVwiPlxyXG4gICAgICAgICAgICA8cC1yYXRpbmcgWyhuZ01vZGVsKV09XCJwcm9kdWN0LnJhdGluZ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCIgW2NhbmNlbF09XCJmYWxzZVwiPjwvcC1yYXRpbmc+XHJcbiAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcHJpY2Utc21cIj5cclxuICAgICAge3twcm9kdWN0LnByaWNlIHwgY3VycmVuY3l9fVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTcgZ2FsbGVyeVwiICBzdHlsZT1cIiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHdoaXRlO1wiPlxyXG4gICAgICA8dWktZ2FsbGVyeSAgW2ltYWdlc109XCJwcm9kdWN0LmltYWdlc1wiIFtpbWFnZV09XCJwcm9kdWN0LmltYWdlXCIgW3Byb2R1Y3RdPVwicHJvZHVjdFwiID48L3VpLWdhbGxlcnk+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIGNvbC1tZC01IHByb2R1Y3RcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gIGxpbmUtaGVpZ2h0OjEuNWVtO1wiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImJyYW5kLWxvZ28gdy0xMDBcIj5cclxuICAgICAgICA8aW1nIHNyYz0ne3ticmFuZExvZ29CbG9ifX0nPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LW5hbWUgdy0xMDBcIj5cclxuICAgICAgICA8aDEgc3R5bGU9XCJmb250LWZhbWlseTogJ0NvbWljIFNhbnMgTVMnLCAnQ2hhbGtib2FyZCBTRScsICdDb21pYyBOZXVlJywgc2Fucy1zZXJpZjtcIj57e3Byb2R1Y3QubmFtZX19PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiBcclxuICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICB7e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeX19XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBwLTQgdy0xMDBcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcIj5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIG15LWF1dG9cIj48aDQ+VmFyaWFudGk8L2g0PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCIgKm5nSWY9XCJtZW5Qcm9kXCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDIwcHhcIj5cclxuICAgICAgICAgICAgICA8ZGl2ICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogd3JhcDtcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGVzaG9wLWZyb250ZW5kLWNhcm91c2VsICBbaW1hZ2VzXT1cInByb2R1Y3RzXCIgPjwvZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2IFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cIidyZ2IoJyArIHByb2R1Y3QuY29sb3IgKyAnKSdcIiBjbGFzcz1cImNpcmNsZSBcIiBzdHlsZT1cIm1pbi13aWR0aDogMjVweDsgbWluLWhlaWdodDogMjVweDtcIiAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0cywgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdENvbG9yKHByb2R1Y3QuaWQpXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLS0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIG15LWF1dG9cIj48aDQ+VGFnbGlhPC9oND48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpemVzIGNvbC05XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGZsZXgtZmxvdzogd3JhcDsgIHBhZGRpbmctbGVmdDogMjBweDtcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFtuZ0NsYXNzXT1cIntnb2xkOiBjbGlja2VkSW5kZXggPT09IGl9XCIgY2xhc3M9XCJjaXJjbGVcIiBbZGlzYWJsZWRdPVwiZi5hdmFpbGFibGU/IGZhbHNlIDogdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBmaWx0ZXJlZFZhcmlhbnRzLCBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdFNpemUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwidXBkYXRlU2VsZWN0ZWRTaXplKGkpXCI+e3tmLnNpemV9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXF1YW50aXR5XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyB3aWR0aDogMTAwJTtmbGV4LWRpcmVjdGlvbjogcm93O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdztqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJxdWFudGl0eVwiIHN0eWxlPVwicGFkZGluZy1yaWdodDogMTBweDtcIj5RdWFudGl0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHAtaW5wdXROdW1iZXIgWyhuZ01vZGVsKV09XCJxdWFudGl0eVwiIGlucHV0SWQ9XCJxdWFudGl0eVwiIG1vZGU9XCJkZWNpbWFsXCIgW3Nob3dCdXR0b25zXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgW21pbl09XCIwXCIgW21heF09XCJtYXhJbnZcIiAoY2xpY2spPVwiY2hlY2tRdWFudGl0eSgpXCI+XHJcbiAgICAgICAgICAgICAgPC9wLWlucHV0TnVtYmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIgcHJvZHVjdC1hY3Rpb24gY29sLTEyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiYnV0dG9uXCIgcEJ1dHRvbiBwUmlwcGxlIHR5cGU9XCJidXR0b25cIiBsYWJlbD1cIkFkZCB0byBjYXJ0XCIgY2xhc3M9XCJcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJhZGRQcm9kdWN0VG9DYXJ0KClcIj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGRlc2MtYm94XCI+XHJcblxyXG4gICAgICAgIDxoMSBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IGJsYWNrOyBmb250LXNpemU6IDE4cHg7XCI+UHJvZHVjdCBkZXNjcmlwdGlvbjwvaDE+XHJcbiAgICAgICAgPGhyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjXCIgW2lubmVySFRNTF09XCJwcm9kdWN0LmRlc2NyaXB0aW9uXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC03XCI+PC9kaXY+XHJcbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtNSBkZXNjLWJveFwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1mYW1pbHk6ICdOb3ZhIEZsYXQnO2ZvbnQtc2l6ZTogMjJweDsgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtMzAwKTsgbWFyZ2luLXRvcDogMTBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM2ODJlNDI5YiwgIzY4MmU0MjEzKTtcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gIGxpbmUtaGVpZ2h0OjEuNWVtO1xyXG4gICAgYm9yZGVyOnNvbGlkIDVweCByZ2IoMCwgMCwgMCk7XCI+XHJcbiAgICAgIDxoMSBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHdoaXRlOyBcIj5Qcm9kdWN0IGRlc2NyaXB0aW9uPC9oMT5cclxuICAgICAgPGhyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiIHN0eWxlPVwiIHBhZGRpbmctbGVmdDogNXZ3OyBwYWRkaW5nLXJpZ2h0OiA1dnc7IHBhZGRpbmctdG9wOiAzdnc7ICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XCIgW2lubmVySFRNTF09XCJwcm9kdWN0LmRlc2NyaXB0aW9uXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj4gLS0+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=