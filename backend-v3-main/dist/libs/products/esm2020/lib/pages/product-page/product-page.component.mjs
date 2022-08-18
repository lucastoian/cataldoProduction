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
            let pVariant = new ProductVariant(this.selectedSize[0].id, Number(this.selectedSize[0].size), this.selectedSize[0].inventory, 0, String(this.selectedSize[0].barcode));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCwrREFBK0Q7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVEsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNsQjlELDJDQUFrRjs7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ckY7SUFFSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBSSxLQUFLLENBQUM7U0FDdEI7YUFBSTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7d0ZBelZVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDM0JqQyx1RUFnR007O1FBaEdxQixrQ0FBYTs7dUZEMkIzQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSw2QkFBNkIsVUFFL0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5cclxuXHJcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XHJcbmltcG9ydCB7IFByb2R1Y3RMdWNhIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXMgXHJcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XHJcbmltcG9ydCB7IFN1YmplY3QsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ2FydEljb25Db21wb25lbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcclxuaW1wb3J0IHsgVmFyaWFudCB9IGZyb20gJy4uLy4uL21vZGVscy92YXJpYW50JztcclxuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcclxuaW1wb3J0IHsgV19Qcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ctcHJvZHVjdCc7XHJcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXX1Byb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFZhcmlhbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ZhcmlhbnRzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0LXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjbGlja2VkSW5kZXg6IG51bWJlcjtcclxuICB2YXJpYW50OiBWYXJpYW50O1xyXG4gIHZhcmlhbnRzOiBWYXJpYW50W10gPSBbXTtcclxuICBmaWx0ZXJlZFZhcmlhbnRzOiBWYXJpYW50W10gPSBbXTtcclxuICBwcm9kdWN0OiBQcm9kdWN0MTIzO1xyXG4gIFdfcHJvZHVjdDogV19Qcm9kdWN0O1xyXG4gIHByb2ROYW1lID0gJyc7XHJcbiAgV19wcm9kbmFtZSA9ICcnO1xyXG4gIG1lblByb2QgPSB0cnVlO1xyXG4gIHdQcm9kID0gZmFsc2U7XHJcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xyXG4gIGxlbjogbnVtYmVyO1xyXG4gIGNvbG9yczogc3RyaW5nW10gPSBbXTtcclxuICBtdWx0aXBsZUNvbG9yczogYm9vbGVhbjtcclxuICBlbmRTdWJzJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICBxdWFudGl0eSA9IDA7XHJcbiAgY3VycmVudElkO1xyXG4gIGRpc3BsYXlTdWNjZXNzQmFubmVyID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBidXR0b24gPSB0cnVlO1xyXG4gIHNlbGVjdGVkU2l6ZTogVmFyaWFudFtdID0gW107XHJcbiAgYXZhaWxhYmlsaXR5OiBhbnlbXSA9IFtdO1xyXG4gIGF2YWlsYWJsZTogYm9vbGVhbjtcclxuICBtaW5JbnY6IG51bWJlcjtcclxuICBtYXhJbnY6IG51bWJlcjtcclxuICB1cmw7XHJcbiAgcDogUHJvZHVjdEx1Y2E7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIFdwcm9kU2VydmljZTogV19Qcm9kdWN0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcclxuICAgIHByaXZhdGUgdmFyaWFudFNlcnZpY2U6IFZhcmlhbnRzU2VydmljZSxcclxuXHJcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgaWNvbjogQ2FydEljb25Db21wb25lbnQsXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgIHByaXZhdGUgY2FydCA6IENhcnRcclxuICAgIFxyXG4gICAgXHJcbiAgKSB7ICAgICB0aGlzLnAgPSBuZXcgUHJvZHVjdEx1Y2EoKX1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmF2YWlsYWJsZSA9IHRydWU7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJjYXJ0ID0gXCIgKyB0aGlzLmNhcnQuZ2V0SnNvbigpKTtcclxuXHJcblxyXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuXHJcbiAgICBpZiAodGhpcy51cmwudmFsdWVbMF0ucGF0aCA9PT0gJ3Byb2R1Y3RzJykge1xyXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGlmIChwYXJhbXMucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICB0aGlzLl9nZXRQcm9kdWN0KHBhcmFtcy5wcm9kdWN0SWQpO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMucHJvZHVjdElkO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcInByb2R1Y3Q9IFwiICsgdGhpcy5wcm9kdWN0KTtcclxuICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7XHJcbiAgICAgICAgICAvLyB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWVcclxuICAgICAgICAgIC8vLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2ROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5fZ2V0U2l6ZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud1Byb2QgPSB0cnVlO1xyXG4gICAgICB0aGlzLm1lblByb2QgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICBpZiAocGFyYW1zLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgdGhpcy5fZ2V0V3Byb2R1Y3QocGFyYW1zLnByb2R1Y3RJZCk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5wcm9kdWN0SWQ7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicHJvZHVjdD0gXCIgKyB0aGlzLnByb2R1Y3QpO1xyXG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTtcclxuICAgICAgICAgIC8vIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZVxyXG4gICAgICAgICAgLy8vLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9nZXRXU2l6ZXMoKTtcclxuICAgIH1cclxuXHJcbi8vXHJcbiAgICB0aGlzLnAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcclxuICAgIHRoaXMuX2dldFByb2R1Y3QyKCkudGhlbihcclxuICAgICBkYXRhID0+e1xyXG4gICAgICAgdGhpcy5wID0gZGF0YTtcclxuICAgICB9IFxyXG4gICAgICkuY2F0Y2goIGVycm9yID0+e1xyXG4gICAgICAgdGhpcy5wID0gbnVsbDtcclxuICAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmVuZFN1YnMkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZSBpbCBwcm9kb3R0byBlc2lzdGUgZ2nDoCwgYWdnaXVuZ28gdW5hIHZhcmlhbnRzLCBzZW5ubyBhZ2dpdW5nbyB1biBudW92byBwcm9kb3R0byBjb24gbGEgc3VhIHZhcmlhbnRzXHJcbiAgICogQHJldHVybnMgXHJcbiAgICovXHJcbiAgYWRkUHJvZHVjdFRvQ2FydCgpIHtcclxuXHJcbiAgICBpZih0aGlzLnF1YW50aXR5ICE9IDApIHtcclxuXHJcbiAgIGxldCBwVmFyaWFudCA9IG5ldyBQcm9kdWN0VmFyaWFudCh0aGlzLnNlbGVjdGVkU2l6ZVswXS5pZCwgTnVtYmVyKHRoaXMuc2VsZWN0ZWRTaXplWzBdLnNpemUpLCB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnksIDAsIFN0cmluZyh0aGlzLnNlbGVjdGVkU2l6ZVswXS5iYXJjb2RlKSk7XHJcbiAgIGNvbnNvbGUubG9nKFwicFZhcmlhbnQgPSBcIiArIHBWYXJpYW50LmdldEpzb24oKSk7XHJcbiAgIGNvbnNvbGUubG9nKFwidGhpcyBwIDogXCIgKyB0aGlzLnAuZ2V0SnNvbigpKTtcclxuXHJcbiAgICAgIGlmKHRoaXMuY2FydC5jb250YWluc1Byb2R1Y3QodGhpcy5wKSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3QgYWxyZWFkeSBleGlzdFwiKTtcclxuICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuY2FydC5nZXRQcm9kdWN0SW5kZXgodGhpcy5wKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXggOiBcIiArIGluZGV4KTtcclxuICAgICAgICAgIGxldCBwcm9kdWN0ID0gdGhpcy5jYXJ0LmdldFByb2R1Y3QoaW5kZXgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IDogXCIgKyAgcHJvZHVjdC5nZXRKc29uKCkpO1xyXG4gICAgICAgICAgcHJvZHVjdC5hZGRWYXJpYW50KHBWYXJpYW50LCB0aGlzLnF1YW50aXR5KTtcclxuICAgICAgICAgXHJcbiAgICAgLy8gICAgIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSBwcm9kdWN0LmdldFZhcmlhbnQocFZhcmlhbnQpLmdldFNlbGVjdGVkKCk7XHJcbiAgICAgICAgICB0aGlzLnAgPSBwcm9kdWN0O1xyXG4gICAgICAgICAgdGhpcy5tYXhJbnYgPSAgdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldEludmVudG9yeSgpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcclxuICAgICAgICAgIGlmKHRoaXMubWF4SW52IDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLm1pbkludiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0LnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3QgZG9zbid0IGV4aXN0XCIpO1xyXG4gICAgICAgIHRoaXMucC5hZGRWYXJpYW50KHBWYXJpYW50LCB0aGlzLnF1YW50aXR5KTtcclxuICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLm1heEludiA9ICB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0SW52ZW50b3J5KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImkgaGF2ZSBzZXQgdGhlIG1heEludiB0bzogXCIgKyB0aGlzLm1heEludik7XHJcbiAgICAgICAgaWYodGhpcy5tYXhJbnYgPD0gMCl7XHJcbiAgICAgICAgICB0aGlzLm1pbkludiA9IDA7XHJcbiAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuY2FydC5hZGRQcm9kdWN0THVjYSh0aGlzLnApO1xyXG4gICAgICAgIHRoaXMuY2hlY2tRdWFudGl0eSgpO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UHJvZHVjdChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlXHJcbiAgICAgIC5nZXRQcm9kdWN0KGlkKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcclxuICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNQcm9kdWN0O1xyXG4gICAgICAgIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZTtcclxuICAgICAgICB0aGlzLmdldFByb2RCeW5hbWUoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKiBAcmV0dXJucyByZXN0aXR1aXNjZSBpbCBwcm9kb3R0byBkZWxsYSBwYWdpbmFcclxuICAgKi9cclxuICBwcml2YXRlIGFzeW5jIF9nZXRQcm9kdWN0MigpIHtcclxuXHJcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFByb2R1Y3RMdWNhPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZFNlcnZpY2VcclxuICAgICAgLmdldFByb2R1Y3QodGhpcy5jdXJyZW50SWQpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzUHJvZHVjdCkgPT4ge1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhcInJlcyBwcm9kdWN0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc1Byb2R1Y3QpKTtcclxuICAgICAgICBsZXQgcCA9IG5ldyBQcm9kdWN0THVjYSgpO1xyXG4gICAgICAgIHAuc2V0SWQocmVzUHJvZHVjdC5pZCk7XHJcbiAgICAgICAgcC5zZXREaXNjb3VudChyZXNQcm9kdWN0LmRpc2NvdW50KTtcclxuICAgICAgICBwLnNldFByaWNlKHJlc1Byb2R1Y3QucHJpY2UpO1xyXG4gICAgICAgIHAuc2V0VGhlTWFpbkltYWdlKHJlc1Byb2R1Y3QuaW1hZ2UpO1xyXG4gICAgICAgIHAuc2V0TmFtZShyZXNQcm9kdWN0Lm5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc29sdmUocCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBwcm9taXNlO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRXcHJvZHVjdChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3QoaWQpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzUHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc1Byb2R1Y3Q7XHJcbiAgICAgICAgdGhpcy5XX3Byb2RuYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5nZXRXUHJvZEJ5bmFtZSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIF9nZXRTaXplcygpIHtcclxuICAgIHRoaXMudmFyaWFudFNlcnZpY2VcclxuICAgICAgLmdldFZhcmlhbnRzKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCh2YXJpYW50cykgPT4ge1xyXG4gICAgICAgIHRoaXMudmFyaWFudHMgPSB2YXJpYW50cztcclxuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMgPSB0aGlzLnZhcmlhbnRzLmZpbHRlcihcclxuICAgICAgICAgIChzaXplKSA9PiBzaXplLnByb2R1Y3QgPT09IHRoaXMuY3VycmVudElkXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMuc29ydCgoYSwgYikgPT4gKGEuc2l6ZSA8IGIuc2l6ZSA/IC0xIDogMSkpO1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmZpbHRlcmVkVmFyaWFudHMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIF9nZXRXU2l6ZXMoKSB7XHJcbiAgICB0aGlzLnZhcmlhbnRTZXJ2aWNlXHJcbiAgICAgIC5nZXRWYXJpYW50cygpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZSgodmFyaWFudHMpID0+IHtcclxuICAgICAgICB0aGlzLnZhcmlhbnRzID0gdmFyaWFudHM7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzID0gdGhpcy52YXJpYW50cy5maWx0ZXIoXHJcbiAgICAgICAgICAoc2l6ZSkgPT4gc2l6ZS5wcm9kdWN0ID09PSB0aGlzLmN1cnJlbnRJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzLnNvcnQoKGEsIGIpID0+IChhLnNpemUgPCBiLnNpemUgPyAtMSA6IDEpKTtcclxuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5maWx0ZXJlZFZhcmlhbnRzKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipxdWVzdGEgZnVuemlvbmUgc2VtYnJhIHNvbG8gZ2VzdGlyZSBpbCBtYXggaW5wdXQgKi9cclxuICBzZWxlY3RTaXplKGV2ZW50OiBhbnksIGluZGV4KSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZmlsdGVyZWRWYXJpYW50czogXCIgKyB0aGlzLmZpbHRlcmVkVmFyaWFudHMpO1xyXG4gICAgdGhpcy5jbGlja2VkSW5kZXggPSBpbmRleDtcclxuICAgIC8vY29uc29sZS5sb2coXCJpbmRleCA6IFwiICsgaW5kZXgpO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLmJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgY29uc3QgdGVtcCA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUw7XHJcbiAgIC8vIC8vY29uc29sZS5sb2codGVtcCk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZFNpemUgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHMuZmlsdGVyKCh4KSA9PiB4LnNpemUgPT09IHRlbXApO1xyXG4gICAvLyAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWQgc2l6ZT0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkU2l6ZSkpO1xyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnkgPj0gMSkge1xyXG4gICAgICB0aGlzLm1pbkludiA9IDE7XHJcbiAgICAgIHRoaXMubWF4SW52ID0gdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5O1xyXG4gICAgICB0aGlzLnF1YW50aXR5ID0gMDtcclxuICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJpbSBkb2luZyBzb21ldGhpbmcgLT4gc2VsZWN0U2l6ZSgpXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJvZEJ5bmFtZSgpIHtcclxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdEJ5TmFtZSh0aGlzLnByb2ROYW1lKS5zdWJzY3JpYmUoKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xyXG5cclxuICAgICAgdGhpcy5sZW4gPSB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbjsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh0aGlzLnByb2R1Y3RzW2ldLmNvbG9yKTtcclxuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XHJcbiAgICAgIH1cclxuICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY29sb3JzKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmxlbiA+IDEpIHtcclxuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRXUHJvZEJ5bmFtZSgpIHtcclxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdEJ5TmFtZSh0aGlzLldfcHJvZG5hbWUpLnN1YnNjcmliZShcclxuICAgICAgKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZW4gPSB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuOyBpKyspIHtcclxuICAgICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XHJcbiAgICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxlbiA+IDEpIHtcclxuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q29sb3IocHJvZElkKSB7XHJcbiAgIC8vIC8vY29uc29sZS5sb2cocHJvZElkKTtcclxuICAgIHRoaXMuX2dldFByb2R1Y3QocHJvZElkKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwcm9kdWN0cy8nICsgcHJvZElkXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFdDb2xvcihwcm9kSWQpIHtcclxuICAgLy8gLy9jb25zb2xlLmxvZyhwcm9kSWQpO1xyXG4gICAgdGhpcy5fZ2V0V3Byb2R1Y3QocHJvZElkKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd3b21lbi1wcm9kdWN0cy8nICsgcHJvZElkXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkU2l6ZShpbmRleCl7XHJcblxyXG4gICAgXHJcbiAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XHJcbiAgICB0aGlzLmNsaWNrZWRJbmRleCA9IGluZGV4O1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInNpemUgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF0pKTtcclxuICAgIGxldCBzZWxlY3RlZFZhcmlhbnQgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xyXG4gICAgbGV0IHNlbGVjdGVkVmFyaWFudElkID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XS5pZDtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWRWYXJpYW50SWQgXCIgKyBzZWxlY3RlZFZhcmlhbnRJZCApO1xyXG4gICAgXHJcbiAgICBsZXQgc2VsZWN0ZWRQcm9kdWN0VmFyaWFudCA9IHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChzZWxlY3RlZFZhcmlhbnRJZCk7XHJcbiAgICBpZihzZWxlY3RlZFByb2R1Y3RWYXJpYW50ICE9IG51bGwpe1xyXG4gICAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEpzb24oKSk7XHJcbiAgICB0aGlzLm1heEludiA9IHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQuZ2V0SW52ZW50b3J5KCk7XHJcbiAgICBpZih0aGlzLm1heEludj09PTAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9IHRydWU7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIGFscmVhZHkgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLm1heEludiA9IHNlbGVjdGVkVmFyaWFudC5pbnZlbnRvcnk7XHJcbiAgICAgIGlmKHRoaXMubWF4SW52PT09MCAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9ICB0cnVlO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIE5PVCBpbnNpZGUgdGhlIGNhcnQsIHRoZSBtYXhJbnYgaXM6IFwiICsgdGhpcy5tYXhJbnYpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjaGVja1F1YW50aXR5KCl7XHJcbiAgICBpZiggdGhpcy5xdWFudGl0eSAhPSAwKXtcclxuICAgICAgdGhpcy5idXR0b24gPSAgZmFsc2U7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5idXR0b24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicHJvZHVjdC1wYWdlXCIgKm5nSWY9XCJwcm9kdWN0XCI+XHJcbiAgPGRpdiBjbGFzcz1cImdyaWRcIj5cclxuICAgIDxlZXNob3AtZnJvbnRlbmQtbWVzc2FnZXMgKm5nSWY9XCJkaXNwbGF5U3VjY2Vzc0Jhbm5lclwiPjwvZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtbmFtZS1zbSBzbTpjb2wtMTJcIj5cclxuICAgICAgPGgyPnt7cHJvZHVjdC5uYW1lfX08L2gyPlxyXG5cclxuICAgICAgXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmctc21cIj5cclxuICAgICAgICAgICAgPHAtcmF0aW5nIFsobmdNb2RlbCldPVwicHJvZHVjdC5yYXRpbmdcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiIFtjYW5jZWxdPVwiZmFsc2VcIj48L3AtcmF0aW5nPlxyXG4gICAgICAgIDwvZGl2PiAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXByaWNlLXNtXCI+XHJcbiAgICAgIHt7cHJvZHVjdC5wcmljZSB8IGN1cnJlbmN5fX1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzbTpjb2wtNiBtZDpjb2wtNiBsZzpjb2wtNiB4bDpjb2wtNiBnYWxsZXJ5XCI+XHJcbiAgICAgIDx1aS1nYWxsZXJ5IFtpbWFnZXNdPVwicHJvZHVjdC5pbWFnZXNcIiBbaW1hZ2VdPVwicHJvZHVjdC5pbWFnZVwiIFtwcm9kdWN0XT1cInByb2R1Y3RcIj48L3VpLWdhbGxlcnk+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic206Y29sLTYgbWQ6Y29sLTYgbGc6Y29sLTYgeGw6Y29sLTYgcHJvZHVjdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1uYW1lXCI+XHJcbiAgICAgICAgPGgyPnt7cHJvZHVjdC5uYW1lfX08L2gyPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwhLS0gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxwLXJhdGluZyBbKG5nTW9kZWwpXT1cInByb2R1Y3QucmF0aW5nXCIgW2Rpc2FibGVkXT1cInRydWVcIiBbY2FuY2VsXT1cImZhbHNlXCI+PC9wLXJhdGluZz5cclxuICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgIHt7cHJvZHVjdC5wcmljZSB8IGN1cnJlbmN5fX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic206Y29sLTEyIG1kOmNvbC0xMiBsZzpjb2wtMTIgeGw6Y29sLTEyIHB0LTIgcGItNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XHJcblxyXG48ZGl2ICpuZ0lmPVwibWVuUHJvZFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjb2xvcnMgY29sLTEyXCIgKm5nSWY9XCJtdWx0aXBsZUNvbG9yc1wiPlxyXG4gICAgPGgyPkNvbG9yczwvaDI+XHJcbiAgICA8ZGl2IFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cInByb2R1Y3QuY29sb3JcIiBjbGFzcz1cImNpcmNsZVwiICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIHByb2R1Y3RzLCBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgKGNsaWNrKT1cInNlbGVjdENvbG9yKHByb2R1Y3QuaWQpXCI+PC9kaXY+XHJcbiAgXHJcbiAgPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxkaXYgKm5nSWY9XCJ3UHJvZFwiPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29sb3JzIGNvbC0xMlwiICpuZ0lmPVwibXVsdGlwbGVDb2xvcnNcIj5cclxuICAgIDxoMj5Db2xvcnM8L2gyPlxyXG4gICAgPGRpdiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJwcm9kdWN0LmNvbG9yXCIgY2xhc3M9XCJjaXJjbGVcIlxyXG4gICAgICAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0cywgbGV0IGkgPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RXQ29sb3IocHJvZHVjdC5pZClcIj48L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXplcyBjb2wtMTJcIj5cclxuICAgICAgICAgICAgPGgyPlNpemVzPC9oMj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBbbmdDbGFzc109XCJ7Z29sZDogY2xpY2tlZEluZGV4ID09PSBpfVwiIGNsYXNzPVwic2l6ZSBcIiBbZGlzYWJsZWRdPVwiZi5hdmFpbGFibGU/IGZhbHNlIDogdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyZWRWYXJpYW50cywgbGV0IGkgPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RTaXplKCRldmVudClcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJ1cGRhdGVTZWxlY3RlZFNpemUoaSlcIj57e2Yuc2l6ZX19PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1xdWFudGl0eVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgY29sLTEyIG1kOmNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInF1YW50aXR5XCI+UXVhbnRpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxwLWlucHV0TnVtYmVyIFsobmdNb2RlbCldPVwicXVhbnRpdHlcIiBpbnB1dElkPVwicXVhbnRpdHlcIiBtb2RlPVwiZGVjaW1hbFwiIFtzaG93QnV0dG9uc109XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIFttaW5dPVwiMFwiIFttYXhdPVwibWF4SW52XCIgKGNsaWNrKT1cImNoZWNrUXVhbnRpdHkoKVwiPlxyXG4gICAgICAgICAgICAgIDwvcC1pbnB1dE51bWJlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIgcHJvZHVjdC1hY3Rpb24gY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImJ1dHRvblwiIHBCdXR0b24gcFJpcHBsZSB0eXBlPVwiYnV0dG9uXCIgbGFiZWw9XCJBZGQgdG8gY2FydFwiIGNsYXNzPVwicC1idXR0b24tcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFByb2R1Y3RUb0NhcnQoKVwiPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG48IS0tIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ3UHJvZFwiIGNsYXNzPVwiIHByb2R1Y3QtYWN0aW9uIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwic2VsZWN0ZWRcIiBwQnV0dG9uIHBSaXBwbGUgdHlwZT1cImJ1dHRvblwiIGxhYmVsPVwiQWRkIHRvIGNhcnRcIiBjbGFzcz1cInAtYnV0dG9uLXJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkV1Byb2R1Y3RUb0NhcnQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOSBkZXNjLWJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiIFtpbm5lckhUTUxdPVwicHJvZHVjdC5kZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOSBkZXNjLWJveC1zbWFsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NcIiBbaW5uZXJIVE1MXT1cInByb2R1Y3QuZGVzY3JpcHRpb25cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PiJdfQ==