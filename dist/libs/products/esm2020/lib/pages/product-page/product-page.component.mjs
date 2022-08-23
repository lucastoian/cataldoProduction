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
function ProductPageComponent_div_0_eeshop_frontend_messages_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eeshop-frontend-messages");
} }
function ProductPageComponent_div_0_div_20_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵlistener("click", function ProductPageComponent_div_0_div_20_div_1_div_3_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const product_r7 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(4); return ctx_r9.selectColor(product_r7.id); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    i0.ɵɵstyleProp("background-color", product_r7.color);
} }
function ProductPageComponent_div_0_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "h2");
    i0.ɵɵtext(2, "Colors");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProductPageComponent_div_0_div_20_div_1_div_3_Template, 1, 2, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r5.products);
} }
function ProductPageComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ProductPageComponent_div_0_div_20_div_1_Template, 4, 1, "div", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.multipleColors);
} }
function ProductPageComponent_div_0_div_21_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵlistener("click", function ProductPageComponent_div_0_div_21_div_1_div_3_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r16); const product_r13 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(4); return ctx_r15.selectWColor(product_r13.id); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r13 = ctx.$implicit;
    i0.ɵɵstyleProp("background-color", product_r13.color);
} }
function ProductPageComponent_div_0_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "h2");
    i0.ɵɵtext(2, "Colors");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProductPageComponent_div_0_div_21_div_1_div_3_Template, 1, 2, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r11.products);
} }
function ProductPageComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ProductPageComponent_div_0_div_21_div_1_Template, 4, 1, "div", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.multipleColors);
} }
const _c0 = function (a0) { return { gold: a0 }; };
function ProductPageComponent_div_0_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function ProductPageComponent_div_0_button_25_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.selectSize($event); })("click", function ProductPageComponent_div_0_button_25_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const i_r18 = restoredCtx.index; const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.updateSelectedSize(i_r18); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r4.clickedIndex === i_r18))("disabled", f_r17.available ? false : true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(f_r17.size);
} }
function ProductPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, ProductPageComponent_div_0_eeshop_frontend_messages_2_Template, 1, 0, "eeshop-frontend-messages", 3);
    i0.ɵɵelementStart(3, "div", 4)(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 5);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 6);
    i0.ɵɵelement(10, "ui-gallery", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 8)(12, "div", 9)(13, "h2");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 10);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 11)(19, "div", 2);
    i0.ɵɵtemplate(20, ProductPageComponent_div_0_div_20_Template, 2, 1, "div", 3);
    i0.ɵɵtemplate(21, ProductPageComponent_div_0_div_21_Template, 2, 1, "div", 3);
    i0.ɵɵelementStart(22, "div", 12)(23, "h2");
    i0.ɵɵtext(24, "Sizes");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(25, ProductPageComponent_div_0_button_25_Template, 2, 5, "button", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 14)(27, "div", 15)(28, "label", 16);
    i0.ɵɵtext(29, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "p-inputNumber", 17);
    i0.ɵɵlistener("ngModelChange", function ProductPageComponent_div_0_Template_p_inputNumber_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.quantity = $event; })("click", function ProductPageComponent_div_0_Template_p_inputNumber_click_30_listener() { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.checkQuantity(); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 18)(32, "button", 19);
    i0.ɵɵlistener("click", function ProductPageComponent_div_0_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r23); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.addProductToCart(); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 20);
    i0.ɵɵelement(34, "div", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 22);
    i0.ɵɵelement(36, "div", 21);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.displaySuccessBanner);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 18, ctx_r0.product.price), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("images", ctx_r0.product.images)("image", ctx_r0.product.image)("product", ctx_r0.product);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(17, 20, ctx_r0.product.price), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.menProd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.wProd);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.filteredVariants);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.quantity)("showButtons", true)("min", 0)("max", ctx_r0.maxInv);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.button);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r0.product.description, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
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
        this.endSubs$ = new Subject();
        this.quantity = 0;
        this.displaySuccessBanner = false;
        this.selected = false;
        this.button = true;
        this.selectedSize = [];
        this.availability = [];
        this.p = new ProductLuca();
    }
    ngOnInit() {
        this.available = true;
        //console.log("cart = " + this.cart.getJson());
        this.url = this.route.url;
        if (this.url.value[0].path === 'products') {
            this.route.params.subscribe((params) => {
                if (params.productId) {
                    this._getProduct(params.productId);
                    this.currentId = params.productId;
                    //console.log("product= " + this.product);
                    // //console.log(this.currentId);
                    // this.prodName = this.product.name
                    //// //console.log(this.prodName);
                }
            });
            this._getSizes();
        }
        else {
            this.wProd = true;
            this.menProd = false;
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
            this._getWSizes();
        }
        //
        this.p = new ProductLuca();
        this._getProduct2().then(data => {
            this.p = data;
        }).catch(error => {
            this.p = null;
        });
    }
    ngOnDestroy() {
        this.endSubs$.complete();
    }
    /**
     * Se il prodotto esiste già, aggiungo una variants, senno aggiungo un nuovo prodotto con la sua variants
     * @returns
     */
    addProductToCart() {
        if (this.quantity != 0) {
            let pVariant = new ProductVariant(this.selectedSize[0].id, this.selectedSize[0].size, this.selectedSize[0].inventory, 0, String(this.selectedSize[0].barcode));
            console.log("pVariant = " + pVariant.getJson());
            console.log("this p : " + this.p.getJson());
            if (this.cart.containsProduct(this.p)) {
                console.log("product already exist");
                let index = this.cart.getProductIndex(this.p);
                console.log("index : " + index);
                let product = this.cart.getProduct(index);
                console.log("product : " + product.getJson());
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
            }
            else {
                console.log("product dosn't exist");
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
            }
        }
    }
    _getProduct(id) {
        this.prodService
            .getProduct(id)
            .pipe(takeUntil(this.endSubs$))
            .subscribe((resProduct) => {
            this.product = resProduct;
            this.prodName = this.product.name;
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
            // //console.log(this.filteredVariants);
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
                this.colors.push(this.products[i].color);
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
    getWProdByname() {
        this.prodService.getProductByName(this.W_prodname).subscribe((products) => {
            this.products = products;
            // //console.log(this.products);
            this.len = this.products.length;
            for (let i = 0; i < this.len; i++) {
                this.colors.push(this.products[i].color);
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
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 1, vars: 1, consts: [["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "grid"], [4, "ngIf"], [1, "product-name-sm", "sm:col-12"], [1, "product-price-sm"], [1, "sm:col-6", "md:col-6", "lg:col-6", "xl:col-6", "gallery"], [3, "images", "image", "product"], [1, "sm:col-6", "md:col-6", "lg:col-6", "xl:col-6", "product"], [1, "product-name"], [1, "product-price"], [1, "sm:col-12", "md:col-12", "lg:col-12", "xl:col-12", "pt-2", "pb-4"], [1, "sizes", "col-12"], ["class", "size ", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "product-quantity"], [1, "field", "col-12", "md:col-3"], ["for", "quantity"], ["inputId", "quantity", "mode", "decimal", 3, "ngModel", "showButtons", "min", "max", "ngModelChange", "click"], [1, "product-action", "col-12"], ["pButton", "", "pRipple", "", "type", "button", "label", "Add to cart", 1, "p-button-rounded", 3, "disabled", "click"], [1, "col-9", "desc-box"], [1, "desc", 3, "innerHTML"], [1, "col-9", "desc-box-small"], ["class", "colors col-12", 4, "ngIf"], [1, "colors", "col-12"], ["class", "circle", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "circle", 3, "click"], [1, "size", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ProductPageComponent_div_0_Template, 37, 22, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i7.NgIf, i9.GalleryComponent, i7.NgForOf, i7.NgClass, i10.InputNumber, i11.NgControlStatus, i11.NgModel, i12.ButtonDirective], pipes: [i7.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', styles: [], template: "<div class=\"product-page\" *ngIf=\"product\">\r\n  <div class=\"grid\">\r\n    <eeshop-frontend-messages *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\r\n    <div class=\"product-name-sm sm:col-12\">\r\n      <h2>{{product.name}}</h2>\r\n\r\n      \r\n\r\n    </div>\r\n    <!-- \r\n        <div class=\"rating-sm\">\r\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\r\n        </div> -->\r\n    <div class=\"product-price-sm\">\r\n      {{product.price | currency}}\r\n    </div>\r\n\r\n    <div class=\"sm:col-6 md:col-6 lg:col-6 xl:col-6 gallery\">\r\n      <ui-gallery [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\"></ui-gallery>\r\n    </div>\r\n\r\n    <div class=\"sm:col-6 md:col-6 lg:col-6 xl:col-6 product\">\r\n      <div class=\"product-name\">\r\n        <h2>{{product.name}}</h2>\r\n\r\n      </div>\r\n      <!-- \r\n            <div class=\"rating\">\r\n                <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\r\n            </div> -->\r\n      <div class=\"product-price\">\r\n        {{product.price | currency}}\r\n      </div>\r\n\r\n      <div class=\"sm:col-12 md:col-12 lg:col-12 xl:col-12 pt-2 pb-4\">\r\n        <div class=\"grid\">\r\n\r\n<div *ngIf=\"menProd\">\r\n  <div class=\"colors col-12\" *ngIf=\"multipleColors\">\r\n    <h2>Colors</h2>\r\n    <div [style.background-color]=\"product.color\" class=\"circle\" *ngFor=\"let product of products, let i = index\"\r\n      (click)=\"selectColor(product.id)\"></div>\r\n  \r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"wProd\">\r\n\r\n  <div class=\"colors col-12\" *ngIf=\"multipleColors\">\r\n    <h2>Colors</h2>\r\n    <div [style.background-color]=\"product.color\" class=\"circle\"\r\n      *ngFor=\"let product of products, let i = index\" (click)=\"selectWColor(product.id)\"></div>\r\n\r\n  </div>\r\n</div>\r\n\r\n          <div class=\"sizes col-12\">\r\n            <h2>Sizes</h2>\r\n            <button [ngClass]=\"{gold: clickedIndex === i}\" class=\"size \" [disabled]=\"f.available? false : true\"\r\n              *ngFor=\"let f of filteredVariants, let i = index\" (click)=\"selectSize($event)\"\r\n              (click)=\"updateSelectedSize(i)\">{{f.size}}</button>\r\n          </div>\r\n\r\n          <div class=\"product-quantity\">\r\n            <div class=\"field col-12 md:col-3\">\r\n              <label for=\"quantity\">Quantity</label>\r\n              <p-inputNumber [(ngModel)]=\"quantity\" inputId=\"quantity\" mode=\"decimal\" [showButtons]=\"true\"\r\n                [min]=\"0\" [max]=\"maxInv\" (click)=\"checkQuantity()\">\r\n              </p-inputNumber>\r\n            </div>\r\n          </div>\r\n          <div class=\" product-action col-12\">\r\n            <button [disabled]=\"button\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"p-button-rounded\"\r\n              (click)=\"addProductToCart()\">\r\n            </button>\r\n          </div>\r\n<!-- \r\n                    <div *ngIf=\"wProd\" class=\" product-action col-12\">\r\n                      <button [disabled]=\"selected\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"p-button-rounded\"\r\n                        (click)=\"addWProductToCart()\">\r\n                      </button>\r\n                    </div> -->\r\n\r\n          <div class=\"col-9 desc-box\">\r\n            <div class=\"desc\" [innerHTML]=\"product.description\"></div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-9 desc-box-small\">\r\n          <div class=\"desc\" [innerHTML]=\"product.description\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.W_ProductsService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.CartService }, { type: i5.VariantsService }, { type: i6.MessageService }, { type: i4.CartIconComponent }, { type: i7.Location }, { type: i8.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVEsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNsQjlELDJDQUFrRjs7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RUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBSSxLQUFLLENBQUM7U0FDdEI7YUFBSTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7d0ZBelZVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDM0JqQyx1RUFnR007O1FBaEdxQixrQ0FBYTs7dUZEMkIzQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSw2QkFBNkIsVUFFL0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5cclxuXHJcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XHJcbmltcG9ydCB7IFByb2R1Y3RMdWNhIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXNcclxuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcclxuaW1wb3J0IHsgU3ViamVjdCwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBDYXJ0SWNvbkNvbXBvbmVudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC9vcmRlcnMnO1xyXG5pbXBvcnQgeyBWYXJpYW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ZhcmlhbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xyXG5pbXBvcnQgeyBXX1Byb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvdy1wcm9kdWN0JztcclxuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFdfUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdy1wcm9kdWN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFyaWFudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmFyaWFudHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNsaWNrZWRJbmRleDogbnVtYmVyO1xyXG4gIHZhcmlhbnQ6IFZhcmlhbnQ7XHJcbiAgdmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xyXG4gIGZpbHRlcmVkVmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xyXG4gIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XHJcbiAgV19wcm9kdWN0OiBXX1Byb2R1Y3Q7XHJcbiAgcHJvZE5hbWUgPSAnJztcclxuICBXX3Byb2RuYW1lID0gJyc7XHJcbiAgbWVuUHJvZCA9IHRydWU7XHJcbiAgd1Byb2QgPSBmYWxzZTtcclxuICBwcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XHJcbiAgbGVuOiBudW1iZXI7XHJcbiAgY29sb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIG11bHRpcGxlQ29sb3JzOiBib29sZWFuO1xyXG4gIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHF1YW50aXR5ID0gMDtcclxuICBjdXJyZW50SWQ7XHJcbiAgZGlzcGxheVN1Y2Nlc3NCYW5uZXIgPSBmYWxzZTtcclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGJ1dHRvbiA9IHRydWU7XHJcbiAgc2VsZWN0ZWRTaXplOiBWYXJpYW50W10gPSBbXTtcclxuICBhdmFpbGFiaWxpdHk6IGFueVtdID0gW107XHJcbiAgYXZhaWxhYmxlOiBib29sZWFuO1xyXG4gIG1pbkludjogbnVtYmVyO1xyXG4gIG1heEludjogbnVtYmVyO1xyXG4gIHVybDtcclxuICBwOiBQcm9kdWN0THVjYTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcHJvZFNlcnZpY2U6IFByb2R1Y3RzU2VydmljZSxcclxuICAgIHByaXZhdGUgV3Byb2RTZXJ2aWNlOiBXX1Byb2R1Y3RzU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2YXJpYW50U2VydmljZTogVmFyaWFudHNTZXJ2aWNlLFxyXG5cclxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpY29uOiBDYXJ0SWNvbkNvbXBvbmVudCxcclxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgcHJpdmF0ZSBjYXJ0IDogQ2FydFxyXG5cclxuXHJcbiAgKSB7ICAgICB0aGlzLnAgPSBuZXcgUHJvZHVjdEx1Y2EoKX1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmF2YWlsYWJsZSA9IHRydWU7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcImNhcnQgPSBcIiArIHRoaXMuY2FydC5nZXRKc29uKCkpO1xyXG5cclxuXHJcbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xyXG5cclxuICAgIGlmICh0aGlzLnVybC52YWx1ZVswXS5wYXRoID09PSAncHJvZHVjdHMnKSB7XHJcbiAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcmFtcy5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgIHRoaXMuX2dldFByb2R1Y3QocGFyYW1zLnByb2R1Y3RJZCk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5wcm9kdWN0SWQ7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicHJvZHVjdD0gXCIgKyB0aGlzLnByb2R1Y3QpO1xyXG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTtcclxuICAgICAgICAgIC8vIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZVxyXG4gICAgICAgICAgLy8vLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9nZXRTaXplcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53UHJvZCA9IHRydWU7XHJcbiAgICAgIHRoaXMubWVuUHJvZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGlmIChwYXJhbXMucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICB0aGlzLl9nZXRXcHJvZHVjdChwYXJhbXMucHJvZHVjdElkKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLnByb2R1Y3RJZDtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJwcm9kdWN0PSBcIiArIHRoaXMucHJvZHVjdCk7XHJcbiAgICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xyXG4gICAgICAgICAgLy8gdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lXHJcbiAgICAgICAgICAvLy8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX2dldFdTaXplcygpO1xyXG4gICAgfVxyXG5cclxuLy9cclxuICAgIHRoaXMucCA9IG5ldyBQcm9kdWN0THVjYSgpO1xyXG4gICAgdGhpcy5fZ2V0UHJvZHVjdDIoKS50aGVuKFxyXG4gICAgIGRhdGEgPT57XHJcbiAgICAgICB0aGlzLnAgPSBkYXRhO1xyXG4gICAgIH1cclxuICAgICApLmNhdGNoKCBlcnJvciA9PntcclxuICAgICAgIHRoaXMucCA9IG51bGw7XHJcbiAgICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbmRTdWJzJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2UgaWwgcHJvZG90dG8gZXNpc3RlIGdpw6AsIGFnZ2l1bmdvIHVuYSB2YXJpYW50cywgc2Vubm8gYWdnaXVuZ28gdW4gbnVvdm8gcHJvZG90dG8gY29uIGxhIHN1YSB2YXJpYW50c1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgYWRkUHJvZHVjdFRvQ2FydCgpIHtcclxuXHJcbiAgICBpZih0aGlzLnF1YW50aXR5ICE9IDApIHtcclxuXHJcbiAgIGxldCBwVmFyaWFudCA9IG5ldyBQcm9kdWN0VmFyaWFudCh0aGlzLnNlbGVjdGVkU2l6ZVswXS5pZCwgdGhpcy5zZWxlY3RlZFNpemVbMF0uc2l6ZSwgdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5LCAwLCBTdHJpbmcodGhpcy5zZWxlY3RlZFNpemVbMF0uYmFyY29kZSkpO1xyXG4gICBjb25zb2xlLmxvZyhcInBWYXJpYW50ID0gXCIgKyBwVmFyaWFudC5nZXRKc29uKCkpO1xyXG4gICBjb25zb2xlLmxvZyhcInRoaXMgcCA6IFwiICsgdGhpcy5wLmdldEpzb24oKSk7XHJcblxyXG4gICAgICBpZih0aGlzLmNhcnQuY29udGFpbnNQcm9kdWN0KHRoaXMucCkpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IGFscmVhZHkgZXhpc3RcIik7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNhcnQuZ2V0UHJvZHVjdEluZGV4KHRoaXMucCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XHJcbiAgICAgICAgICBsZXQgcHJvZHVjdCA9IHRoaXMuY2FydC5nZXRQcm9kdWN0KGluZGV4KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdCA6IFwiICsgIHByb2R1Y3QuZ2V0SnNvbigpKTtcclxuICAgICAgICAgIHByb2R1Y3QuYWRkVmFyaWFudChwVmFyaWFudCwgdGhpcy5xdWFudGl0eSk7XHJcblxyXG4gICAgIC8vICAgICB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnkgLT0gcHJvZHVjdC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgdGhpcy5wID0gcHJvZHVjdDtcclxuICAgICAgICAgIHRoaXMubWF4SW52ID0gIHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRJbnZlbnRvcnkoKTtcclxuXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcclxuICAgICAgICAgIGlmKHRoaXMubWF4SW52IDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLm1pbkludiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XHJcbiAgICAgICAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrUXVhbnRpdHkoKTtcclxuXHJcblxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3QgZG9zbid0IGV4aXN0XCIpO1xyXG4gICAgICAgIHRoaXMucC5hZGRWYXJpYW50KHBWYXJpYW50LCB0aGlzLnF1YW50aXR5KTtcclxuICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLm1heEludiA9ICB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0SW52ZW50b3J5KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImkgaGF2ZSBzZXQgdGhlIG1heEludiB0bzogXCIgKyB0aGlzLm1heEludik7XHJcbiAgICAgICAgaWYodGhpcy5tYXhJbnYgPD0gMCl7XHJcbiAgICAgICAgICB0aGlzLm1pbkludiA9IDA7XHJcbiAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5jYXJ0LmFkZFByb2R1Y3RMdWNhKHRoaXMucCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcml2YXRlIF9nZXRQcm9kdWN0KGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvZFNlcnZpY2VcclxuICAgICAgLmdldFByb2R1Y3QoaWQpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzUHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc1Byb2R1Y3Q7XHJcbiAgICAgICAgdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ2V0UHJvZEJ5bmFtZSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgcmVzdGl0dWlzY2UgaWwgcHJvZG90dG8gZGVsbGEgcGFnaW5hXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhc3luYyBfZ2V0UHJvZHVjdDIoKSB7XHJcblxyXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxQcm9kdWN0THVjYT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLnByb2RTZXJ2aWNlXHJcbiAgICAgIC5nZXRQcm9kdWN0KHRoaXMuY3VycmVudElkKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcclxuICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJyZXMgcHJvZHVjdDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXNQcm9kdWN0KSk7XHJcbiAgICAgICAgbGV0IHAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcclxuICAgICAgICBwLnNldElkKHJlc1Byb2R1Y3QuaWQpO1xyXG4gICAgICAgIHAuc2V0RGlzY291bnQocmVzUHJvZHVjdC5kaXNjb3VudCk7XHJcbiAgICAgICAgcC5zZXRQcmljZShyZXNQcm9kdWN0LnByaWNlKTtcclxuICAgICAgICBwLnNldFRoZU1haW5JbWFnZShyZXNQcm9kdWN0LmltYWdlKTtcclxuICAgICAgICBwLnNldE5hbWUocmVzUHJvZHVjdC5uYW1lKTtcclxuXHJcbiAgICAgICAgcmVzb2x2ZShwKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHByb21pc2U7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0V3Byb2R1Y3QoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0KGlkKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcclxuICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNQcm9kdWN0O1xyXG4gICAgICAgIHRoaXMuV19wcm9kbmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ2V0V1Byb2RCeW5hbWUoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZ2V0U2l6ZXMoKSB7XHJcbiAgICB0aGlzLnZhcmlhbnRTZXJ2aWNlXHJcbiAgICAgIC5nZXRWYXJpYW50cygpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZSgodmFyaWFudHMpID0+IHtcclxuICAgICAgICB0aGlzLnZhcmlhbnRzID0gdmFyaWFudHM7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzID0gdGhpcy52YXJpYW50cy5maWx0ZXIoXHJcbiAgICAgICAgICAoc2l6ZSkgPT4gc2l6ZS5wcm9kdWN0ID09PSB0aGlzLmN1cnJlbnRJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzLnNvcnQoKGEsIGIpID0+IChhLnNpemUgPCBiLnNpemUgPyAtMSA6IDEpKTtcclxuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5maWx0ZXJlZFZhcmlhbnRzKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZ2V0V1NpemVzKCkge1xyXG4gICAgdGhpcy52YXJpYW50U2VydmljZVxyXG4gICAgICAuZ2V0VmFyaWFudHMoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHZhcmlhbnRzKSA9PiB7XHJcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cyA9IHRoaXMudmFyaWFudHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHNpemUpID0+IHNpemUucHJvZHVjdCA9PT0gdGhpcy5jdXJyZW50SWRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5zb3J0KChhLCBiKSA9PiAoYS5zaXplIDwgYi5zaXplID8gLTEgOiAxKSk7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuZmlsdGVyZWRWYXJpYW50cyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqcXVlc3RhIGZ1bnppb25lIHNlbWJyYSBzb2xvIGdlc3RpcmUgaWwgbWF4IGlucHV0ICovXHJcbiAgc2VsZWN0U2l6ZShldmVudDogYW55LCBpbmRleCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImZpbHRlcmVkVmFyaWFudHM6IFwiICsgdGhpcy5maWx0ZXJlZFZhcmlhbnRzKTtcclxuICAgIHRoaXMuY2xpY2tlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiaW5kZXggOiBcIiArIGluZGV4KTtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5idXR0b24gPSBmYWxzZTtcclxuICAgIGNvbnN0IHRlbXAgPSBldmVudC50YXJnZXQuaW5uZXJIVE1MO1xyXG4gICAvLyAvL2NvbnNvbGUubG9nKHRlbXApO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRTaXplID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzLmZpbHRlcigoeCkgPT4geC5zaXplID09PSB0ZW1wKTtcclxuICAgLy8gLy9jb25zb2xlLmxvZyhcInNlbGVjdGVkIHNpemU9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZFNpemUpKTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5ID49IDEpIHtcclxuICAgICAgdGhpcy5taW5JbnYgPSAxO1xyXG4gICAgICB0aGlzLm1heEludiA9IHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeTtcclxuICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKFwiaW0gZG9pbmcgc29tZXRoaW5nIC0+IHNlbGVjdFNpemUoKVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFByb2RCeW5hbWUoKSB7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeU5hbWUodGhpcy5wcm9kTmFtZSkuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcclxuXHJcbiAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xyXG4gICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5sZW4gPiAxKSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0V1Byb2RCeW5hbWUoKSB7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeU5hbWUodGhpcy5XX3Byb2RuYW1lKS5zdWJzY3JpYmUoXHJcbiAgICAgIChwcm9kdWN0cykgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XHJcblxyXG4gICAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbjsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xyXG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sZW4gPiAxKSB7XHJcbiAgICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9yKHByb2RJZCkge1xyXG4gICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XHJcbiAgICB0aGlzLl9nZXRQcm9kdWN0KHByb2RJZCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncHJvZHVjdHMvJyArIHByb2RJZF0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RXQ29sb3IocHJvZElkKSB7XHJcbiAgIC8vIC8vY29uc29sZS5sb2cocHJvZElkKTtcclxuICAgIHRoaXMuX2dldFdwcm9kdWN0KHByb2RJZCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnd29tZW4tcHJvZHVjdHMvJyArIHByb2RJZF0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZFNpemUoaW5kZXgpe1xyXG5cclxuXHJcbiAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XHJcbiAgICB0aGlzLmNsaWNrZWRJbmRleCA9IGluZGV4O1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInNpemUgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF0pKTtcclxuICAgIGxldCBzZWxlY3RlZFZhcmlhbnQgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xyXG4gICAgbGV0IHNlbGVjdGVkVmFyaWFudElkID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XS5pZDtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWRWYXJpYW50SWQgXCIgKyBzZWxlY3RlZFZhcmlhbnRJZCApO1xyXG5cclxuICAgIGxldCBzZWxlY3RlZFByb2R1Y3RWYXJpYW50ID0gdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKHNlbGVjdGVkVmFyaWFudElkKTtcclxuICAgIGlmKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgIT0gbnVsbCl7XHJcbiAgICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQuZ2V0SnNvbigpKTtcclxuICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRQcm9kdWN0VmFyaWFudC5nZXRJbnZlbnRvcnkoKTtcclxuICAgIGlmKHRoaXMubWF4SW52PT09MCB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gdHJ1ZTtcclxuICAgIC8vY29uc29sZS5sb2coXCJ0aGlzIHByb2R1Y3QgaXMgYWxyZWFkeSBpbnNpZGUgdGhlIGNhcnQsIHRoZSBtYXhJbnYgaXM6IFwiICsgdGhpcy5tYXhJbnYpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRWYXJpYW50LmludmVudG9yeTtcclxuICAgICAgaWYodGhpcy5tYXhJbnY9PT0wICB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gIHRydWU7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0aGlzIHByb2R1Y3QgaXMgTk9UIGluc2lkZSB0aGUgY2FydCwgdGhlIG1heEludiBpczogXCIgKyB0aGlzLm1heEludik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tRdWFudGl0eSgpe1xyXG4gICAgaWYoIHRoaXMucXVhbnRpdHkgIT0gMCl7XHJcbiAgICAgIHRoaXMuYnV0dG9uID0gIGZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuYnV0dG9uID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInByb2R1Y3QtcGFnZVwiICpuZ0lmPVwicHJvZHVjdFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJncmlkXCI+XHJcbiAgICA8ZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzICpuZ0lmPVwiZGlzcGxheVN1Y2Nlc3NCYW5uZXJcIj48L2Vlc2hvcC1mcm9udGVuZC1tZXNzYWdlcz5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LW5hbWUtc20gc206Y29sLTEyXCI+XHJcbiAgICAgIDxoMj57e3Byb2R1Y3QubmFtZX19PC9oMj5cclxuXHJcbiAgICAgIFxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nLXNtXCI+XHJcbiAgICAgICAgICAgIDxwLXJhdGluZyBbKG5nTW9kZWwpXT1cInByb2R1Y3QucmF0aW5nXCIgW2Rpc2FibGVkXT1cInRydWVcIiBbY2FuY2VsXT1cImZhbHNlXCI+PC9wLXJhdGluZz5cclxuICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1wcmljZS1zbVwiPlxyXG4gICAgICB7e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeX19XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic206Y29sLTYgbWQ6Y29sLTYgbGc6Y29sLTYgeGw6Y29sLTYgZ2FsbGVyeVwiPlxyXG4gICAgICA8dWktZ2FsbGVyeSBbaW1hZ2VzXT1cInByb2R1Y3QuaW1hZ2VzXCIgW2ltYWdlXT1cInByb2R1Y3QuaW1hZ2VcIiBbcHJvZHVjdF09XCJwcm9kdWN0XCI+PC91aS1nYWxsZXJ5PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInNtOmNvbC02IG1kOmNvbC02IGxnOmNvbC02IHhsOmNvbC02IHByb2R1Y3RcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtbmFtZVwiPlxyXG4gICAgICAgIDxoMj57e3Byb2R1Y3QubmFtZX19PC9oMj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8IS0tIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8cC1yYXRpbmcgWyhuZ01vZGVsKV09XCJwcm9kdWN0LnJhdGluZ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCIgW2NhbmNlbF09XCJmYWxzZVwiPjwvcC1yYXRpbmc+XHJcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICB7e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeX19XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNtOmNvbC0xMiBtZDpjb2wtMTIgbGc6Y29sLTEyIHhsOmNvbC0xMiBwdC0yIHBiLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG5cclxuPGRpdiAqbmdJZj1cIm1lblByb2RcIj5cclxuICA8ZGl2IGNsYXNzPVwiY29sb3JzIGNvbC0xMlwiICpuZ0lmPVwibXVsdGlwbGVDb2xvcnNcIj5cclxuICAgIDxoMj5Db2xvcnM8L2gyPlxyXG4gICAgPGRpdiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJwcm9kdWN0LmNvbG9yXCIgY2xhc3M9XCJjaXJjbGVcIiAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0cywgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgIChjbGljayk9XCJzZWxlY3RDb2xvcihwcm9kdWN0LmlkKVwiPjwvZGl2PlxyXG4gIFxyXG4gIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48ZGl2ICpuZ0lmPVwid1Byb2RcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNvbG9ycyBjb2wtMTJcIiAqbmdJZj1cIm11bHRpcGxlQ29sb3JzXCI+XHJcbiAgICA8aDI+Q29sb3JzPC9oMj5cclxuICAgIDxkaXYgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwicHJvZHVjdC5jb2xvclwiIGNsYXNzPVwiY2lyY2xlXCJcclxuICAgICAgKm5nRm9yPVwibGV0IHByb2R1Y3Qgb2YgcHJvZHVjdHMsIGxldCBpID0gaW5kZXhcIiAoY2xpY2spPVwic2VsZWN0V0NvbG9yKHByb2R1Y3QuaWQpXCI+PC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l6ZXMgY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMj5TaXplczwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b24gW25nQ2xhc3NdPVwie2dvbGQ6IGNsaWNrZWRJbmRleCA9PT0gaX1cIiBjbGFzcz1cInNpemUgXCIgW2Rpc2FibGVkXT1cImYuYXZhaWxhYmxlPyBmYWxzZSA6IHRydWVcIlxyXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBmIG9mIGZpbHRlcmVkVmFyaWFudHMsIGxldCBpID0gaW5kZXhcIiAoY2xpY2spPVwic2VsZWN0U2l6ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwidXBkYXRlU2VsZWN0ZWRTaXplKGkpXCI+e3tmLnNpemV9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcXVhbnRpdHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGNvbC0xMiBtZDpjb2wtM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJxdWFudGl0eVwiPlF1YW50aXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8cC1pbnB1dE51bWJlciBbKG5nTW9kZWwpXT1cInF1YW50aXR5XCIgaW5wdXRJZD1cInF1YW50aXR5XCIgbW9kZT1cImRlY2ltYWxcIiBbc2hvd0J1dHRvbnNdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBbbWluXT1cIjBcIiBbbWF4XT1cIm1heEludlwiIChjbGljayk9XCJjaGVja1F1YW50aXR5KClcIj5cclxuICAgICAgICAgICAgICA8L3AtaW5wdXROdW1iZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiIHByb2R1Y3QtYWN0aW9uIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJidXR0b25cIiBwQnV0dG9uIHBSaXBwbGUgdHlwZT1cImJ1dHRvblwiIGxhYmVsPVwiQWRkIHRvIGNhcnRcIiBjbGFzcz1cInAtYnV0dG9uLXJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJhZGRQcm9kdWN0VG9DYXJ0KClcIj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuPCEtLSBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwid1Byb2RcIiBjbGFzcz1cIiBwcm9kdWN0LWFjdGlvbiBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cInNlbGVjdGVkXCIgcEJ1dHRvbiBwUmlwcGxlIHR5cGU9XCJidXR0b25cIiBsYWJlbD1cIkFkZCB0byBjYXJ0XCIgY2xhc3M9XCJwLWJ1dHRvbi1yb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFdQcm9kdWN0VG9DYXJ0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTkgZGVzYy1ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NcIiBbaW5uZXJIVE1MXT1cInByb2R1Y3QuZGVzY3JpcHRpb25cIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTkgZGVzYy1ib3gtc21hbGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjXCIgW2lubmVySFRNTF09XCJwcm9kdWN0LmRlc2NyaXB0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iXX0=