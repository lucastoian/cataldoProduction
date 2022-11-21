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
        if (this.url.value[0].path === 'products') {
            this.route.params.subscribe((params) => {
                if (params.productId) {
                    //   this._getProduct(params.productId);
                    this.currentId = params.productId;
                    // //console.log(this.currentId);
                    // this.prodName = this.product.name
                    //// //console.log(this.prodName);
                }
            });
            this._getSizes();
        }
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
                //console.log("product= " + this.product);
                // //console.log(this.currentId);
                // this.prodName = this.product.name
                //// //console.log(this.prodName);
            }
        });
        let blob = await this.ajaxGetImageData(this.brandLogo);
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const base64data = reader.result;
            this.brandLogoBlob = base64data;
        };
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
            .subscribe((resProduct) => {
            this.product = resProduct;
            this.W_prodname = this.product.name;
            this.getWProdByname();
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
        args: [{ selector: 'eshop-frontend-product-page', styles: [], template: "<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\n<div class=\"product-page\" *ngIf=\"product\">\n  <div class=\"grid\">\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\n    <div class=\"product-name-sm sm:col-12\">\n\n      <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\n    </div>\n    <!--\n        <div class=\"rating-sm\">\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\n        </div> -->\n    <div class=\"product-price-sm\">\n      {{product.price | currency}}\n    </div>\n\n    <div class=\"row\" style=\"justify-content: space-around\">\n    <div class=\"col-12 col-md-7 gallery\"  style=\"  border-right: 10px solid white;\">\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\" ></ui-gallery>\n    </div>\n\n    <div class=\"col-10 col-md-5 product\" style=\"display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding:1em;\n  line-height:1.5em;\">\n\n      <div class=\"brand-logo w-100\">\n        <img src='{{this.brandLogoBlob}}'>\n      </div>\n\n      <div class=\"product-name w-100\">\n        <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\n      </div>\n \n      <div class=\"product-price\">\n        {{product.price | currency}}\n      </div>\n\n  \n        <div class=\"grid p-4 w-100\" style=\"padding-right: 0 !important;\">\n          \n\n          <div class=\"row w-100\">\n            <div class=\"col-3 my-auto\"><h4>Varianti</h4></div>\n\n            <div class=\"col-9\" *ngIf=\"menProd\" style=\"padding-left: 20px\">\n              <div  style=\"display: flex; flex-flow: wrap;\">\n                \n                <eshop-frontend-carousel  [images]=\"products\" ></eshop-frontend-carousel>\n                 <!-- <div [style.background-color]=\"'rgb(' + product.color + ')'\" class=\"circle \" style=\"min-width: 25px; min-height: 25px;\" *ngFor=\"let product of products, let i = index\"\n                    (click)=\"selectColor(product.id)\"></div>\n                    -->\n              </div>\n            </div>\n          </div>\n         \n\n\n\n\n          <div class=\"row w-100\">\n            <div class=\"col-3 my-auto\"><h4>Taglia</h4></div>\n            <div class=\"sizes col-9\" style=\"display: flex;flex-direction: row; align-items: center; flex-flow: wrap;  padding-left: 20px;\">\n              <button [ngClass]=\"{gold: clickedIndex === i}\" class=\"circle\" [disabled]=\"f.available? false : true\"\n                *ngFor=\"let f of filteredVariants, let i = index\" (click)=\"selectSize($event)\"\n                (click)=\"updateSelectedSize(i)\">{{f.size}}</button>\n            </div>\n          </div>\n\n          <div class=\"product-quantity\" style=\"display: flex; width: 100%;flex-direction: row;justify-content: center;align-items: center;\">\n            <div class=\"\" style=\"display: flex;flex-direction: row;justify-content: center;align-items: center;\">\n              <label for=\"quantity\" style=\"padding-right: 10px;\">Quantity</label>\n              <p-inputNumber [(ngModel)]=\"quantity\" inputId=\"quantity\" mode=\"decimal\" [showButtons]=\"true\"\n                [min]=\"0\" [max]=\"maxInv\" (click)=\"checkQuantity()\">\n              </p-inputNumber>\n            </div>\n          </div>\n\n          <div class=\" product-action col-12\" style=\"display: flex;flex-direction: row;justify-content: center;align-items: center;\">\n            <button [disabled]=\"button\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"\"\n              (click)=\"addProductToCart()\">\n            </button>\n          </div>\n        </div>\n\n     \n\n      <div class=\"col-12 desc-box\">\n\n        <h1 style=\"text-align: center; color: black; font-size: 18px;\">Product description</h1>\n        <hr>\n        <div class=\"desc\" [innerHTML]=\"product.description\"></div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row\" style=\"justify-content: center;\">\n    <div class=\"col-7\"></div>\n    <!-- <div class=\"col-5 desc-box\" style=\"font-weight: 600; font-family: 'Nova Flat';font-size: 22px;    border-top: 1px solid var(--surface-300); margin-top: 10px; background: linear-gradient(#682e429b, #682e4213);\n    padding:1em;\n  line-height:1.5em;\n    border:solid 5px rgb(0, 0, 0);\">\n      <h1 style=\"text-align: center; color: white; \">Product description</h1>\n      <hr>\n      <div class=\"desc\" style=\" padding-left: 5vw; padding-right: 5vw; padding-top: 3vw;  display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n      text-align: center;\" [innerHTML]=\"product.description\"></div>\n    </div> -->\n  </div>\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.W_ProductsService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.CartService }, { type: i5.VariantsService }, { type: i6.MessageService }, { type: i4.CartIconComponent }, { type: i7.Location }, { type: i8.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVEsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNqQjlELCtDQUF5Rzs7O0lBMkNqRywrQkFBOEQsY0FBQTtJQUcxRCw4Q0FBeUU7SUFJM0UsaUJBQU0sRUFBQTs7O0lBSnNCLGVBQW1CO0lBQW5CLHdDQUFtQjs7Ozs7SUFlL0Msa0NBRWtDO0lBRGtCLGtMQUFTLHlCQUFrQixJQUFDLG1OQUNyRSwrQkFBcUIsSUFEZ0Q7SUFDOUMsWUFBVTtJQUFBLGlCQUFTOzs7OztJQUY3QyxrRkFBc0MsMkNBQUE7SUFFWixlQUFVO0lBQVYsK0JBQVU7Ozs7SUFqRTFELDhCQUEwQyxhQUFBO0lBRXRDLHFIQUF5RztJQUN6Ryw4QkFBdUMsWUFBQTtJQUVnRCxZQUFnQjtJQUFBLGlCQUFLLEVBQUE7SUFNNUcsOEJBQThCO0lBQzVCLFlBQ0Y7O0lBQUEsaUJBQU07SUFFTiw4QkFBdUQsY0FBQTtJQUVyRCxrQ0FBaUc7SUFDbkcsaUJBQU07SUFFTixnQ0FJa0IsZUFBQTtJQUdkLDJCQUFrQztJQUNwQyxpQkFBTTtJQUVOLGdDQUFnQyxhQUFBO0lBQ3VELGFBQWdCO0lBQUEsaUJBQUssRUFBQTtJQUc1RyxnQ0FBMkI7SUFDekIsYUFDRjs7SUFBQSxpQkFBTTtJQUdKLGdDQUFpRSxlQUFBLGVBQUEsVUFBQTtJQUk5Qix5QkFBUTtJQUFBLGlCQUFLLEVBQUE7SUFFNUMsOEVBUU07SUFDUixpQkFBTTtJQU1OLGdDQUF1QixlQUFBLFVBQUE7SUFDVSx1QkFBTTtJQUFBLGlCQUFLLEVBQUE7SUFDMUMsZ0NBQStIO0lBQzdILG9GQUVxRDtJQUN2RCxpQkFBTSxFQUFBO0lBR1IsZ0NBQWtJLGVBQUEsaUJBQUE7SUFFM0UseUJBQVE7SUFBQSxpQkFBUTtJQUNuRSwwQ0FDcUQ7SUFEdEMsNE5BQXNCLDhKQUNELHVCQUFlLElBRGQ7SUFFckMsaUJBQWdCLEVBQUEsRUFBQTtJQUlwQixnQ0FBMkgsa0JBQUE7SUFFdkgsb0tBQVMsMEJBQWtCLElBQUM7SUFDOUIsaUJBQVMsRUFBQSxFQUFBO0lBTWYsZ0NBQTZCLGNBQUE7SUFFb0Msb0NBQW1CO0lBQUEsaUJBQUs7SUFDdkYsc0JBQUksZUFBQTtJQUVOLGlCQUFNLEVBQUEsRUFBQTtJQUlWLGdDQUFrRDtJQUNoRCwyQkFBeUI7SUFZM0IsaUJBQU0sRUFBQSxFQUFBOzs7SUEzRzhDLGVBQTBCO0lBQTFCLGtEQUEwQjtJQUdXLGVBQWdCO0lBQWhCLHlDQUFnQjtJQU9yRyxlQUNGO0lBREUsNEVBQ0Y7SUFJZSxlQUF5QjtJQUF6Qiw4Q0FBeUIsK0JBQUEsMkJBQUE7SUFVL0IsZUFBNEI7SUFBNUIsdUVBQTRCO0lBSW9ELGVBQWdCO0lBQWhCLHlDQUFnQjtJQUlyRyxlQUNGO0lBREUsNkVBQ0Y7SUFTMEIsZUFBYTtJQUFiLHFDQUFhO0lBbUJmLGVBQXFCO0lBQXJCLGlEQUFxQjtJQVF0QixlQUFzQjtJQUF0Qix5Q0FBc0IscUJBQUEsVUFBQSxzQkFBQTtJQU8vQixlQUFtQjtJQUFuQix3Q0FBbUI7SUFZYixlQUFpQztJQUFqQyx5RUFBaUM7O0FEaEUzRCxNQUFNLE9BQU8sb0JBQW9CO0lBZ0MvQixZQUNVLFdBQTRCLEVBQzVCLFlBQStCLEVBQy9CLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxXQUF3QixFQUN4QixjQUErQixFQUUvQixjQUE4QixFQUM5QixJQUF1QixFQUN2QixRQUFrQixFQUNsQixJQUFXO1FBVlgsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBRS9CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQU87UUF4Q3JCLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIscUJBQWdCLEdBQWMsRUFBRSxDQUFDO1FBR2pDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsYUFBUSxHQUFpQixFQUFFLENBQUM7UUFFNUIsV0FBTSxHQUFpQixFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFFN0IsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFFYix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsaUJBQVksR0FBYyxFQUFFLENBQUM7UUFDN0IsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFPekIsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO1FBZ0I1QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUMvRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxrRUFBa0UsQ0FBQyxDQUFDO1FBQ2xILElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLGdFQUFnRSxDQUFDLENBQUM7UUFDaEgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsMEJBQTBCLEVBQUMsNkRBQTZELENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxtRUFBbUUsQ0FBQyxDQUFDO1FBQ2xILElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLDhEQUE4RCxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUMsaUVBQWlFLENBQUMsQ0FBQztRQUNoSCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxnRUFBZ0UsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLG1FQUFtRSxDQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUMsaUVBQWlFLENBQUMsQ0FBQztRQUNoSCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxnRUFBZ0UsQ0FBQyxDQUFDO1FBQ2hILElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLGlFQUFpRSxDQUFDLENBQUM7UUFDakgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsMEJBQTBCLEVBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUNoSCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxnRUFBZ0UsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLDBCQUEwQixFQUFDLGdFQUFnRSxDQUFDLENBQUM7SUFDbEgsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRO1FBR1osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFLdEIsK0NBQStDO1FBRy9DLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNyQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7b0JBQ3ZCLHdDQUF3QztvQkFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUVuQyxpQ0FBaUM7b0JBQ2hDLG9DQUFvQztvQkFDcEMsa0NBQWtDO2lCQUNuQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO1FBRUwsRUFBRTtRQUNFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUN2QixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FDQSxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUVsQywwQ0FBMEM7Z0JBQzNDLGlDQUFpQztnQkFDaEMsb0NBQW9DO2dCQUNwQyxrQ0FBa0M7YUFDbkM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztRQUNsQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUtELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHO1FBRXhCLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sU0FBUyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hDLE9BQU8sU0FBUyxDQUFDO1FBR25CLGlDQUFpQztJQUVuQyxDQUFDO0lBQ0M7OztPQUdHO0lBQ0gsZ0JBQWdCO1FBRWQsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUV4QixJQUFJLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUc1SixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQztnQkFFakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU5QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFMUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUVqRCxvRkFBb0Y7Z0JBQy9FLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUNqQixJQUFJLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUUxRCwwREFBMEQ7Z0JBQzFELElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7b0JBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztpQkFDbkI7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztvQkFDdEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLE9BQU8sRUFBRSxTQUFTO29CQUNsQixNQUFNLEVBQUUsd0JBQXdCO2lCQUNqQyxDQUFDLENBQUM7YUFHTjtpQkFBSTtnQkFFSCxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QywrRUFBK0U7Z0JBQzlFLElBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzFELDBEQUEwRDtnQkFDMUQsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztvQkFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2lCQUNuQjtnQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBRXJCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO29CQUN0QixRQUFRLEVBQUUsU0FBUztvQkFDbkIsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE1BQU0sRUFBRSx3QkFBd0I7aUJBQ2pDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBSU8sV0FBVyxDQUFDLEVBQVU7UUFDNUIsSUFBSSxDQUFDLFdBQVc7YUFDYixVQUFVLENBQUMsRUFBRSxDQUFDO2FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFBO1lBQ3JFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7O09BR0c7SUFDSyxLQUFLLENBQUMsWUFBWTtRQUV4QixJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBYyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsV0FBVztpQkFDZixVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUN6QiwrREFBK0Q7Z0JBQzlELElBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFM0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBR2QsQ0FBQztJQUVPLFlBQVksQ0FBQyxFQUFVO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUcxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGNBQWM7YUFDaEIsV0FBVyxFQUFFO2FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUMxQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUMxQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN2QyxJQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQztvQkFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYzthQUNoQixXQUFXLEVBQUU7YUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQzFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQzFDLENBQUM7WUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3BDLElBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDO29CQUFFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1lBQ0osd0NBQXdDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNEQUFzRDtJQUN0RCxVQUFVLENBQUMsS0FBVSxFQUFFLEtBQUs7UUFDMUIsNERBQTREO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQyx1QkFBdUI7UUFFdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQzFFLHdFQUF3RTtRQUV2RSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLHVEQUF1RDtTQUN6RDtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDMUIsZ0NBQWdDO1lBRS9CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakQseUNBQXlDO2FBQ3pDO1lBQ0YsOEJBQThCO1lBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3RELElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsY0FBYztRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FDMUQsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQzFCLGdDQUFnQztZQUUvQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pELHlDQUF5QzthQUN6QztZQUNGLDhCQUE4QjtZQUU3QixJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzthQUM3QjtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFNO1FBQ2pCLHlCQUF5QjtRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFNO1FBQ2xCLHlCQUF5QjtRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBSztRQUd0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0Isa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHdFQUF3RTtRQUN4RSxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXhELHlEQUF5RDtRQUV6RCxJQUFJLHNCQUFzQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDekUsSUFBRyxzQkFBc0IsSUFBSSxJQUFJLEVBQUM7WUFDbEMsZ0RBQWdEO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEQsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0Qsd0ZBQXdGO1NBQ3ZGO2FBQUk7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDeEMsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFHLENBQUMsSUFBSyxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUM7WUFDL0Qsb0ZBQW9GO1NBQ3JGO0lBRUgsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUksS0FBSyxDQUFDO1NBQ3RCO2FBQUk7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7O3dGQXRaVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQzVCakMsMEJBQWdGO1FBQ2hGLHVFQStHTTs7UUEvR3FCLGVBQWE7UUFBYixrQ0FBYTs7dUZEMkIzQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSw2QkFBNkIsVUFFL0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5cbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdEx1Y2EgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcbmltcG9ydCB7IFN1YmplY3QsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENhcnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XG5pbXBvcnQgeyBWYXJpYW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ZhcmlhbnQnO1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IFdfUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy93LXByb2R1Y3QnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBXX1Byb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBWYXJpYW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92YXJpYW50cy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0LXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNsaWNrZWRJbmRleDogbnVtYmVyO1xuICB2YXJpYW50OiBWYXJpYW50O1xuICB2YXJpYW50czogVmFyaWFudFtdID0gW107XG4gIGZpbHRlcmVkVmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xuICBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuICBXX3Byb2R1Y3Q6IFdfUHJvZHVjdDtcbiAgcHJvZE5hbWUgPSAnJztcbiAgV19wcm9kbmFtZSA9ICcnO1xuICBtZW5Qcm9kID0gdHJ1ZTtcbiAgd1Byb2QgPSBmYWxzZTtcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBsZW46IG51bWJlcjtcbiAgY29sb3JzOiBQcm9kdWN0MTIzW10gPSBbXTtcbiAgc2ltYWxQcm9kdWN0czogc3RyaW5nW10gPSBbXTtcbiAgbXVsdGlwbGVDb2xvcnM6IGJvb2xlYW47XG4gIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBxdWFudGl0eSA9IDA7XG4gIGN1cnJlbnRJZDtcbiAgZGlzcGxheVN1Y2Nlc3NCYW5uZXIgPSBmYWxzZTtcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgYnV0dG9uID0gdHJ1ZTtcbiAgc2VsZWN0ZWRTaXplOiBWYXJpYW50W10gPSBbXTtcbiAgYXZhaWxhYmlsaXR5OiBhbnlbXSA9IFtdO1xuICBhdmFpbGFibGU6IGJvb2xlYW47XG4gIG1pbkludjogbnVtYmVyO1xuICBtYXhJbnY6IG51bWJlcjtcbiAgdXJsO1xuICBwOiBQcm9kdWN0THVjYTtcbiAgYnJhbmRMb2dvIDogc3RyaW5nO1xuICBicmFuZE1hcCA9IG5ldyBNYXA8c3RyaW5nLHN0cmluZz4oKTsgXG4gIGJyYW5kTG9nb0Jsb2I7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvZFNlcnZpY2U6IFByb2R1Y3RzU2VydmljZSxcbiAgICBwcml2YXRlIFdwcm9kU2VydmljZTogV19Qcm9kdWN0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIHZhcmlhbnRTZXJ2aWNlOiBWYXJpYW50c1NlcnZpY2UsXG5cbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGljb246IENhcnRJY29uQ29tcG9uZW50LFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgY2FydCA6IENhcnRcblxuXG4gICkgeyAgICAgdGhpcy5wID0gbmV3IFByb2R1Y3RMdWNhKClcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjNzg4OTMwOWRlOTYwMTgwZGE0YVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vYmxhdWVyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjEzYzg5ZTkzMDlkZTk2MDE4MGRhNGRcIiwgXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9vbGRyaXZlci5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTY3YmQxY2JhOGExZTBkOWMxYWY4OFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vY29sbWFyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODllZmUxZDYyMzg2Y2MyMjUyNWI2XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9lYTcucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjFlMWQ2MjM4NmNjMjI1MjViOVwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vZnJlZHBlcnJ5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmMzcxZDYyMzg2Y2MyMjUyNWJjXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9rd2F5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjE4OWY0ODFkNjIzODZjYzIyNTI1YmZcIixcImh0dHBzOi8vY2F0YWxkb3N0b3JlLnMzLmV1LXdlc3QtMy5hbWF6b25hd3MuY29tL2xhY29zdGUucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjdkMWQ2MjM4NmNjMjI1MjVjMlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vbXVycGh5LnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmOTgxZDYyMzg2Y2MyMjUyNWM1XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9wZW5pbnN1bGEucG5nLnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZmFkMWQ2MjM4NmNjMjI1MjVjOFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vc2F1Y29ueS5wbmcucG5nXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZmJiMWQ2MjM4NmNjMjI1MjVjYlwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vc3VuZGVrLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjMyZTA1ZjNiOGM1NjdkZTVlYTgzNjY5XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9iYXJib3VyLnBuZy5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU3ZTI1MDZiYTY1ZTU5M2JhYTgxXCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYzNmI1N2YzNTA2YmE2NWU1OTNiYWE4NFwiLFwiaHR0cHM6Ly9jYXRhbGRvc3RvcmUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vU2NyZWVuc2hvdC5wbmdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU4MDY1MDZiYTY1ZTU5M2JhYTg3XCIsXCJodHRwczovL2NhdGFsZG9zdG9yZS5zMy5ldS13ZXN0LTMuYW1hem9uYXdzLmNvbS9TY3JlZW5zaG90LnBuZ1wiKTtcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgXG4gICAgdGhpcy5hdmFpbGFibGUgPSB0cnVlO1xuXG5cblxuXG4gICAgLy9jb25zb2xlLmxvZyhcImNhcnQgPSBcIiArIHRoaXMuY2FydC5nZXRKc29uKCkpO1xuXG5cbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xuXG4gICAgaWYgKHRoaXMudXJsLnZhbHVlWzBdLnBhdGggPT09ICdwcm9kdWN0cycpIHtcbiAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMucHJvZHVjdElkKSB7XG4gICAgICAgLy8gICB0aGlzLl9nZXRQcm9kdWN0KHBhcmFtcy5wcm9kdWN0SWQpO1xuICAgICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLnByb2R1Y3RJZDtcbiAgICAgICBcbiAgICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xuICAgICAgICAgIC8vIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZVxuICAgICAgICAgIC8vLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2ROYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2dldFNpemVzKCk7XG4gICAgfSBcblxuLy9cbiAgICB0aGlzLnAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcbiAgICB0aGlzLl9nZXRQcm9kdWN0MigpLnRoZW4oXG4gICAgIGRhdGEgPT57XG4gICAgICAgdGhpcy5wID0gZGF0YTtcbiAgICAgfVxuICAgICApLmNhdGNoKCBlcnJvciA9PntcbiAgICAgICB0aGlzLnAgPSBudWxsO1xuICAgICB9KTtcbiAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIGlmIChwYXJhbXMucHJvZHVjdElkKSB7XG4gICAgICAgIHRoaXMuX2dldFdwcm9kdWN0KHBhcmFtcy5wcm9kdWN0SWQpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5wcm9kdWN0SWQ7XG4gICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJwcm9kdWN0PSBcIiArIHRoaXMucHJvZHVjdCk7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7XG4gICAgICAgIC8vIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZVxuICAgICAgICAvLy8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLmJyYW5kTG9nbyk7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICB0aGlzLmJyYW5kTG9nb0Jsb2IgPSBiYXNlNjRkYXRhO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcbiAgfVxuXG5cbiAgXG5cbiAgYXN5bmMgYWpheEdldEltYWdlRGF0YSh1cmwpIHtcbiAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtjYWNoZTogXCJuby1zdG9yZVwifSk7XG4gICAgY29uc3QgaW1hZ2VCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgIHJldHVybiBpbWFnZUJsb2I7XG5cblxuICAvL0NvZGUgdG8gZ2V0IGJhc2U2NCBpbWFnZSBzdHJpbmdcblxufVxuICAvKipcbiAgICogU2UgaWwgcHJvZG90dG8gZXNpc3RlIGdpw6AsIGFnZ2l1bmdvIHVuYSB2YXJpYW50cywgc2Vubm8gYWdnaXVuZ28gdW4gbnVvdm8gcHJvZG90dG8gY29uIGxhIHN1YSB2YXJpYW50c1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYWRkUHJvZHVjdFRvQ2FydCgpIHtcblxuICAgIGlmKHRoaXMucXVhbnRpdHkgIT0gMCkge1xuXG4gICBsZXQgcFZhcmlhbnQgPSBuZXcgUHJvZHVjdFZhcmlhbnQodGhpcy5zZWxlY3RlZFNpemVbMF0uaWQsIHRoaXMuc2VsZWN0ZWRTaXplWzBdLnNpemUsIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSwgMCwgU3RyaW5nKHRoaXMuc2VsZWN0ZWRTaXplWzBdLmJhcmNvZGUpKTtcblxuXG4gICAgICBpZih0aGlzLmNhcnQuY29udGFpbnNQcm9kdWN0KHRoaXMucCkpe1xuICAgXG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jYXJ0LmdldFByb2R1Y3RJbmRleCh0aGlzLnApO1xuICAgICAgICBcbiAgICAgICAgICBsZXQgcHJvZHVjdCA9IHRoaXMuY2FydC5nZXRQcm9kdWN0KGluZGV4KTtcbiAgIFxuICAgICAgICAgIHByb2R1Y3QuYWRkVmFyaWFudChwVmFyaWFudCwgdGhpcy5xdWFudGl0eSk7XG5cbiAgICAgLy8gICAgIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSBwcm9kdWN0LmdldFZhcmlhbnQocFZhcmlhbnQpLmdldFNlbGVjdGVkKCk7XG4gICAgICAgICAgdGhpcy5wID0gcHJvZHVjdDtcbiAgICAgICAgICB0aGlzLm1heEludiA9ICB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0SW52ZW50b3J5KCk7XG5cbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICAgICAgICBpZih0aGlzLm1heEludiA8PSAwKXtcbiAgICAgICAgICAgIHRoaXMubWluSW52ID0gMDtcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcbiAgICAgICAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgIGRldGFpbDogYFByb2R1Y3QgQWRkZWQgdG8gY2FydCFgXG4gICAgICAgICAgfSk7XG5cblxuICAgICAgfWVsc2V7XG4gICAgICBcbiAgICAgICAgdGhpcy5wLmFkZFZhcmlhbnQocFZhcmlhbnQsIHRoaXMucXVhbnRpdHkpO1xuICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcbiAgICAgICAgdGhpcy5tYXhJbnYgPSAgdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldEludmVudG9yeSgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICAgICAgaWYodGhpcy5tYXhJbnYgPD0gMCl7XG4gICAgICAgICAgdGhpcy5taW5JbnYgPSAwO1xuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICB0aGlzLmNhcnQuYWRkUHJvZHVjdEx1Y2EodGhpcy5wKTtcbiAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgc3VtbWFyeTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgIGRldGFpbDogYFByb2R1Y3QgQWRkZWQgdG8gY2FydCFgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICBwcml2YXRlIF9nZXRQcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlXG4gICAgICAuZ2V0UHJvZHVjdChpZClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gcmVzUHJvZHVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IGNvbG9yPyBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdCkpO1xuICAgICAgICB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWU7XG4gICAgICAgIHRoaXMucHJvZHVjdC5icmFuZExvZ28gPSB0aGlzLmJyYW5kTWFwLmdldCh0aGlzLnByb2R1Y3QuYnJhbmQpO1xuICAgICAgICB0aGlzLmJyYW5kTG9nbyA9IHRoaXMuYnJhbmRNYXAuZ2V0KHRoaXMucHJvZHVjdC5icmFuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnJhbmQgbG9nbyA9IFwiICsgdGhpcy5icmFuZE1hcC5nZXQodGhpcy5wcm9kdWN0LmJyYW5kKSApXG4gICAgICAgIHRoaXMuZ2V0UHJvZEJ5bmFtZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMgcmVzdGl0dWlzY2UgaWwgcHJvZG90dG8gZGVsbGEgcGFnaW5hXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9nZXRQcm9kdWN0MigpIHtcblxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8UHJvZHVjdEx1Y2E+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucHJvZFNlcnZpY2VcbiAgICAgIC5nZXRQcm9kdWN0KHRoaXMuY3VycmVudElkKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZSgocmVzUHJvZHVjdCkgPT4ge1xuICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJyZXMgcHJvZHVjdDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXNQcm9kdWN0KSk7XG4gICAgICAgIGxldCBwID0gbmV3IFByb2R1Y3RMdWNhKCk7XG4gICAgICAgIHAuc2V0SWQocmVzUHJvZHVjdC5pZCk7XG4gICAgICAgIHAuc2V0RGlzY291bnQocmVzUHJvZHVjdC5kaXNjb3VudCk7XG4gICAgICAgIHAuc2V0UHJpY2UocmVzUHJvZHVjdC5wcmljZSk7XG4gICAgICAgIHAuc2V0VGhlTWFpbkltYWdlKHJlc1Byb2R1Y3QuaW1hZ2UpO1xuICAgICAgICBwLnNldE5hbWUocmVzUHJvZHVjdC5uYW1lKTtcblxuICAgICAgICByZXNvbHZlKHApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsZXQgZGF0YSA9IGF3YWl0IHByb21pc2U7XG4gICAgcmV0dXJuIGRhdGE7XG5cblxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0V3Byb2R1Y3QoaWQ6IHN0cmluZykge1xuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdChpZClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gcmVzUHJvZHVjdDtcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuV19wcm9kbmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lO1xuICAgICAgICB0aGlzLmdldFdQcm9kQnluYW1lKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIF9nZXRTaXplcygpIHtcbiAgICB0aGlzLnZhcmlhbnRTZXJ2aWNlXG4gICAgICAuZ2V0VmFyaWFudHMoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZSgodmFyaWFudHMpID0+IHtcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMgPSB0aGlzLnZhcmlhbnRzLmZpbHRlcihcbiAgICAgICAgICAoc2l6ZSkgPT4gc2l6ZS5wcm9kdWN0ID09PSB0aGlzLmN1cnJlbnRJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMuc29ydCgoYSwgYikgPT4gKGEuc2l6ZSA8IGIuc2l6ZSA/IC0xIDogMSkpO1xuICAgICBcbiAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC5pbnZlbnRvcnkgPT0gMCkgZWxlbWVudC5hdmFpbGFibGUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX2dldFdTaXplcygpIHtcbiAgICB0aGlzLnZhcmlhbnRTZXJ2aWNlXG4gICAgICAuZ2V0VmFyaWFudHMoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZSgodmFyaWFudHMpID0+IHtcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMgPSB0aGlzLnZhcmlhbnRzLmZpbHRlcihcbiAgICAgICAgICAoc2l6ZSkgPT4gc2l6ZS5wcm9kdWN0ID09PSB0aGlzLmN1cnJlbnRJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMuc29ydCgoYSwgYikgPT4gKGEuc2l6ZSA8IGIuc2l6ZSA/IC0xIDogMSkpO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudC5pbnZlbnRvcnkgPT0gMCkgZWxlbWVudC5hdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmZpbHRlcmVkVmFyaWFudHMpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipxdWVzdGEgZnVuemlvbmUgc2VtYnJhIHNvbG8gZ2VzdGlyZSBpbCBtYXggaW5wdXQgKi9cbiAgc2VsZWN0U2l6ZShldmVudDogYW55LCBpbmRleCkge1xuICAgIC8vY29uc29sZS5sb2coXCJmaWx0ZXJlZFZhcmlhbnRzOiBcIiArIHRoaXMuZmlsdGVyZWRWYXJpYW50cyk7XG4gICAgdGhpcy5jbGlja2VkSW5kZXggPSBpbmRleDtcbiAgICAvL2NvbnNvbGUubG9nKFwiaW5kZXggOiBcIiArIGluZGV4KTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmJ1dHRvbiA9IGZhbHNlO1xuICAgIGNvbnN0IHRlbXAgPSBldmVudC50YXJnZXQuaW5uZXJIVE1MO1xuICAgLy8gLy9jb25zb2xlLmxvZyh0ZW1wKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRTaXplID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzLmZpbHRlcigoeCkgPT4geC5zaXplID09PSB0ZW1wKTtcbiAgIC8vIC8vY29uc29sZS5sb2coXCJzZWxlY3RlZCBzaXplPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRTaXplKSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5ID49IDEpIHtcbiAgICAgIHRoaXMubWluSW52ID0gMTtcbiAgICAgIHRoaXMubWF4SW52ID0gdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5O1xuICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhcImltIGRvaW5nIHNvbWV0aGluZyAtPiBzZWxlY3RTaXplKClcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJvZEJ5bmFtZSgpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeU5hbWUodGhpcy5wcm9kTmFtZSkuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgICB0aGlzLmxlbiA9IHRoaXMucHJvZHVjdHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XG4gICAgICAgIHRoaXMuc2ltYWxQcm9kdWN0cy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uaW1hZ2UpO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XG4gICAgICB9XG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xuXG4gICAgIGNvbnNvbGUubG9nKFwic2ltaWxhciBwcm9kdWN0cyA9IFwiICsgdGhpcy5zaW1hbFByb2R1Y3RzKVxuICAgICAgaWYgKHRoaXMubGVuID49IDEpIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0V1Byb2RCeW5hbWUoKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlOYW1lKHRoaXMuV19wcm9kbmFtZSkuc3Vic2NyaWJlKFxuICAgICAgKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xuXG4gICAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXSk7XG4gICAgICAgICAgdGhpcy5zaW1hbFByb2R1Y3RzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5pbWFnZSk7XG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuID4gMSkge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBzZWxlY3RDb2xvcihwcm9kSWQpIHtcbiAgIC8vIC8vY29uc29sZS5sb2cocHJvZElkKTtcbiAgICB0aGlzLl9nZXRQcm9kdWN0KHByb2RJZCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwcm9kdWN0cy8nICsgcHJvZElkXSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RXQ29sb3IocHJvZElkKSB7XG4gICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XG4gICAgdGhpcy5fZ2V0V3Byb2R1Y3QocHJvZElkKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kSWRdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkU2l6ZShpbmRleCl7XG5cblxuICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF07XG4gICAgLy9jb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XG4gICAgdGhpcy5jbGlja2VkSW5kZXggPSBpbmRleDtcbiAgICAvL2NvbnNvbGUubG9nKFwic2l6ZSA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XSkpO1xuICAgIGxldCBzZWxlY3RlZFZhcmlhbnQgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xuICAgIGxldCBzZWxlY3RlZFZhcmlhbnRJZCA9IHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF0uaWQ7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWRWYXJpYW50SWQgXCIgKyBzZWxlY3RlZFZhcmlhbnRJZCApO1xuXG4gICAgbGV0IHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgPSB0aGlzLmNhcnQuZ2V0VmFyaWFudEJ5SWQoc2VsZWN0ZWRWYXJpYW50SWQpO1xuICAgIGlmKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgIT0gbnVsbCl7XG4gICAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEpzb24oKSk7XG4gICAgdGhpcy5tYXhJbnYgPSBzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEludmVudG9yeSgpO1xuICAgIGlmKHRoaXMubWF4SW52PT09MCB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gdHJ1ZTtcbiAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIGFscmVhZHkgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRWYXJpYW50LmludmVudG9yeTtcbiAgICAgIGlmKHRoaXMubWF4SW52PT09MCAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9ICB0cnVlO1xuICAgICAgLy9jb25zb2xlLmxvZyhcInRoaXMgcHJvZHVjdCBpcyBOT1QgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICB9XG5cbiAgfVxuXG4gIGNoZWNrUXVhbnRpdHkoKXtcbiAgICBpZiggdGhpcy5xdWFudGl0eSAhPSAwKXtcbiAgICAgIHRoaXMuYnV0dG9uID0gIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5idXR0b24gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdmEgRmxhdCcgcmVsPSdzdHlsZXNoZWV0Jz5cbjxkaXYgY2xhc3M9XCJwcm9kdWN0LXBhZ2VcIiAqbmdJZj1cInByb2R1Y3RcIj5cbiAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICA8ZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzIHN0eWxlPVwibWF4LXdpZHRoOjQwdndcIiAqbmdJZj1cImRpc3BsYXlTdWNjZXNzQmFubmVyXCI+PC9lZXNob3AtZnJvbnRlbmQtbWVzc2FnZXM+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtbmFtZS1zbSBzbTpjb2wtMTJcIj5cblxuICAgICAgPGgxIHN0eWxlPVwiZm9udC1mYW1pbHk6ICdDb21pYyBTYW5zIE1TJywgJ0NoYWxrYm9hcmQgU0UnLCAnQ29taWMgTmV1ZScsIHNhbnMtc2VyaWY7XCI+e3twcm9kdWN0Lm5hbWV9fTwvaDE+XG4gICAgPC9kaXY+XG4gICAgPCEtLVxuICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nLXNtXCI+XG4gICAgICAgICAgICA8cC1yYXRpbmcgWyhuZ01vZGVsKV09XCJwcm9kdWN0LnJhdGluZ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCIgW2NhbmNlbF09XCJmYWxzZVwiPjwvcC1yYXRpbmc+XG4gICAgICAgIDwvZGl2PiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1wcmljZS1zbVwiPlxuICAgICAge3twcm9kdWN0LnByaWNlIHwgY3VycmVuY3l9fVxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC03IGdhbGxlcnlcIiAgc3R5bGU9XCIgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB3aGl0ZTtcIj5cbiAgICAgIDx1aS1nYWxsZXJ5ICBbaW1hZ2VzXT1cInByb2R1Y3QuaW1hZ2VzXCIgW2ltYWdlXT1cInByb2R1Y3QuaW1hZ2VcIiBbcHJvZHVjdF09XCJwcm9kdWN0XCIgPjwvdWktZ2FsbGVyeT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgY29sLW1kLTUgcHJvZHVjdFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzoxZW07XG4gIGxpbmUtaGVpZ2h0OjEuNWVtO1wiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYnJhbmQtbG9nbyB3LTEwMFwiPlxuICAgICAgICA8aW1nIHNyYz0ne3t0aGlzLmJyYW5kTG9nb0Jsb2J9fSc+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtbmFtZSB3LTEwMFwiPlxuICAgICAgICA8aDEgc3R5bGU9XCJmb250LWZhbWlseTogJ0NvbWljIFNhbnMgTVMnLCAnQ2hhbGtib2FyZCBTRScsICdDb21pYyBOZXVlJywgc2Fucy1zZXJpZjtcIj57e3Byb2R1Y3QubmFtZX19PC9oMT5cbiAgICAgIDwvZGl2PlxuIFxuICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcHJpY2VcIj5cbiAgICAgICAge3twcm9kdWN0LnByaWNlIHwgY3VycmVuY3l9fVxuICAgICAgPC9kaXY+XG5cbiAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIHAtNCB3LTEwMFwiIHN0eWxlPVwicGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1wiPlxuICAgICAgICAgIFxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIG15LWF1dG9cIj48aDQ+VmFyaWFudGk8L2g0PjwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIiAqbmdJZj1cIm1lblByb2RcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogMjBweFwiPlxuICAgICAgICAgICAgICA8ZGl2ICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogd3JhcDtcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWwgIFtpbWFnZXNdPVwicHJvZHVjdHNcIiA+PC9lc2hvcC1mcm9udGVuZC1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2IFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cIidyZ2IoJyArIHByb2R1Y3QuY29sb3IgKyAnKSdcIiBjbGFzcz1cImNpcmNsZSBcIiBzdHlsZT1cIm1pbi13aWR0aDogMjVweDsgbWluLWhlaWdodDogMjVweDtcIiAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0cywgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RDb2xvcihwcm9kdWN0LmlkKVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuXG5cblxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIG15LWF1dG9cIj48aDQ+VGFnbGlhPC9oND48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXplcyBjb2wtOVwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyOyBmbGV4LWZsb3c6IHdyYXA7ICBwYWRkaW5nLWxlZnQ6IDIwcHg7XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gW25nQ2xhc3NdPVwie2dvbGQ6IGNsaWNrZWRJbmRleCA9PT0gaX1cIiBjbGFzcz1cImNpcmNsZVwiIFtkaXNhYmxlZF09XCJmLmF2YWlsYWJsZT8gZmFsc2UgOiB0cnVlXCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBmaWx0ZXJlZFZhcmlhbnRzLCBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdFNpemUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInVwZGF0ZVNlbGVjdGVkU2l6ZShpKVwiPnt7Zi5zaXplfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcXVhbnRpdHlcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlO2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdztqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicXVhbnRpdHlcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDEwcHg7XCI+UXVhbnRpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICA8cC1pbnB1dE51bWJlciBbKG5nTW9kZWwpXT1cInF1YW50aXR5XCIgaW5wdXRJZD1cInF1YW50aXR5XCIgbW9kZT1cImRlY2ltYWxcIiBbc2hvd0J1dHRvbnNdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW21pbl09XCIwXCIgW21heF09XCJtYXhJbnZcIiAoY2xpY2spPVwiY2hlY2tRdWFudGl0eSgpXCI+XG4gICAgICAgICAgICAgIDwvcC1pbnB1dE51bWJlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiBwcm9kdWN0LWFjdGlvbiBjb2wtMTJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdztqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiYnV0dG9uXCIgcEJ1dHRvbiBwUmlwcGxlIHR5cGU9XCJidXR0b25cIiBsYWJlbD1cIkFkZCB0byBjYXJ0XCIgY2xhc3M9XCJcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkUHJvZHVjdFRvQ2FydCgpXCI+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgZGVzYy1ib3hcIj5cblxuICAgICAgICA8aDEgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiBibGFjazsgZm9udC1zaXplOiAxOHB4O1wiPlByb2R1Y3QgZGVzY3JpcHRpb248L2gxPlxuICAgICAgICA8aHI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjXCIgW2lubmVySFRNTF09XCJwcm9kdWN0LmRlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC03XCI+PC9kaXY+XG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLTUgZGVzYy1ib3hcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtZmFtaWx5OiAnTm92YSBGbGF0Jztmb250LXNpemU6IDIycHg7ICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLTMwMCk7IG1hcmdpbi10b3A6IDEwcHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNjgyZTQyOWIsICM2ODJlNDIxMyk7XG4gICAgcGFkZGluZzoxZW07XG4gIGxpbmUtaGVpZ2h0OjEuNWVtO1xuICAgIGJvcmRlcjpzb2xpZCA1cHggcmdiKDAsIDAsIDApO1wiPlxuICAgICAgPGgxIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogd2hpdGU7IFwiPlByb2R1Y3QgZGVzY3JpcHRpb248L2gxPlxuICAgICAgPGhyPlxuICAgICAgPGRpdiBjbGFzcz1cImRlc2NcIiBzdHlsZT1cIiBwYWRkaW5nLWxlZnQ6IDV2dzsgcGFkZGluZy1yaWdodDogNXZ3OyBwYWRkaW5nLXRvcDogM3Z3OyAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1wiIFtpbm5lckhUTUxdPVwicHJvZHVjdC5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgIDwvZGl2PiAtLT5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=