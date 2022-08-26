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
    i0.ɵɵelement(0, "eeshop-frontend-messages", 29);
} }
function ProductPageComponent_div_1_div_21_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_div_21_div_1_div_3_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const product_r7 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(4); return ctx_r9.selectColor(product_r7.id); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    i0.ɵɵstyleProp("background-color", product_r7.color);
} }
function ProductPageComponent_div_1_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "h2");
    i0.ɵɵtext(2, "Colors");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProductPageComponent_div_1_div_21_div_1_div_3_Template, 1, 2, "div", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r5.products);
} }
function ProductPageComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ProductPageComponent_div_1_div_21_div_1_Template, 4, 1, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.multipleColors);
} }
function ProductPageComponent_div_1_div_22_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_div_22_div_1_div_3_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r16); const product_r13 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(4); return ctx_r15.selectWColor(product_r13.id); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r13 = ctx.$implicit;
    i0.ɵɵstyleProp("background-color", product_r13.color);
} }
function ProductPageComponent_div_1_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "h2");
    i0.ɵɵtext(2, "Colors");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProductPageComponent_div_1_div_22_div_1_div_3_Template, 1, 2, "div", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r11.products);
} }
function ProductPageComponent_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ProductPageComponent_div_1_div_22_div_1_Template, 4, 1, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.multipleColors);
} }
const _c0 = function (a0) { return { gold: a0 }; };
function ProductPageComponent_div_1_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 34);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_button_26_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.selectSize($event); })("click", function ProductPageComponent_div_1_button_26_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const i_r18 = restoredCtx.index; const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.updateSelectedSize(i_r18); });
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
function ProductPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(12, "div", 11)(13, "div", 12)(14, "h1", 6);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 13);
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 14)(20, "div", 3);
    i0.ɵɵtemplate(21, ProductPageComponent_div_1_div_21_Template, 2, 1, "div", 15);
    i0.ɵɵtemplate(22, ProductPageComponent_div_1_div_22_Template, 2, 1, "div", 15);
    i0.ɵɵelementStart(23, "div", 16)(24, "h2", 17);
    i0.ɵɵtext(25, "Sizes");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, ProductPageComponent_div_1_button_26_Template, 2, 5, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 19)(28, "div", 20)(29, "label", 21);
    i0.ɵɵtext(30, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p-inputNumber", 22);
    i0.ɵɵlistener("ngModelChange", function ProductPageComponent_div_1_Template_p_inputNumber_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.quantity = $event; })("click", function ProductPageComponent_div_1_Template_p_inputNumber_click_31_listener() { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.checkQuantity(); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "div", 23)(33, "button", 24);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r23); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.addProductToCart(); });
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(34, "div", 25)(35, "div", 26)(36, "h1", 27);
    i0.ɵɵtext(37, "Product description");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(38, "hr")(39, "div", 28);
    i0.ɵɵelementEnd()()()();
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
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(18, 19, ctx_r0.product.price), " ");
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
    i0.ɵɵadvance(6);
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
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 2, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Nova Flat", "rel", "stylesheet"], ["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "grid"], ["style", "max-width:40vw", 4, "ngIf"], [1, "product-name-sm", "sm:col-12"], [2, "font-family", "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif"], [1, "product-price-sm"], [1, "row", 2, "justify-content", "space-around"], [1, "col-12", "col-md-7", "gallery", 2, "border-right", "10px solid white"], [3, "images", "image", "product"], [1, "col-10", "col-md-4", "product", 2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "border-radius", "255px 45px 225px 15px/15px 225px 15px 255px", "padding", "1em", "line-height", "1.5em", "border", "solid 5px rgb(0, 0, 0)"], [1, "product-name"], [1, "product-price"], [1, "sm:col-12", "md:col-12", "lg:col-12", "xl:col-12", "pt-2", "pb-4"], [4, "ngIf"], [1, "sizes", "col-12", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [2, "padding-right", "10px"], ["class", "size ", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "product-quantity", 2, "display", "flex", "width", "100%", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [1, "", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["for", "quantity"], ["inputId", "quantity", "mode", "decimal", 3, "ngModel", "showButtons", "min", "max", "ngModelChange", "click"], [1, "product-action", "col-12", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Add to cart", 1, "", 3, "disabled", "click"], [1, "row", 2, "justify-content", "center"], [1, "col-12", "desc-box", 2, "font-weight", "600", "font-family", "Nova Flat", "font-size", "22px", "border-top", "1px solid var(--surface-300)", "margin-top", "10px", "background", "linear-gradient(#682e429b, #682e4213)", "padding", "1em", "line-height", "1.5em", "border", "solid 5px rgb(0, 0, 0)"], [2, "text-align", "center", "color", "white", "font-size", "90px"], [1, "desc", 2, "padding-left", "5vw", "padding-right", "5vw", "padding-top", "3vw", "display", "flex", "flex-direction", "column", "justify-content", "flex-end", "text-align", "center", 3, "innerHTML"], [2, "max-width", "40vw"], ["class", "colors col-12", 4, "ngIf"], [1, "colors", "col-12"], ["class", "circle", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "circle", 3, "click"], [1, "size", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵtemplate(1, ProductPageComponent_div_1_Template, 40, 21, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i7.NgIf, i9.GalleryComponent, i7.NgForOf, i7.NgClass, i10.InputNumber, i11.NgControlStatus, i11.NgModel, i12.ButtonDirective], pipes: [i7.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', styles: [], template: "<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\r\n<div class=\"product-page\" *ngIf=\"product\">\r\n  <div class=\"grid\">\r\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\r\n    <div class=\"product-name-sm sm:col-12\">\r\n\r\n      <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\r\n    </div>\r\n    <!--\r\n        <div class=\"rating-sm\">\r\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\r\n        </div> -->\r\n    <div class=\"product-price-sm\">\r\n      {{product.price | currency}}\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"justify-content: space-around\">\r\n    <div class=\"col-12 col-md-7 gallery  \"  style=\"  border-right: 10px solid white;\">\r\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\"></ui-gallery>\r\n    </div>\r\n\r\n    <div class=\"col-10 col-md-4 product\" style=\"display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    border-radius: 255px 45px 225px 15px/15px 225px 15px 255px;\r\n    padding:1em;\r\n  line-height:1.5em;\r\n    border:solid 5px rgb(0, 0, 0);\"\r\n\r\n    >\r\n      <div class=\"product-name\">\r\n        <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\r\n\r\n      </div>\r\n      <!--\r\n            <div class=\"rating\">\r\n                <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\r\n            </div> -->\r\n      <div class=\"product-price\">\r\n        {{product.price | currency}}\r\n      </div>\r\n\r\n      <div class=\"sm:col-12 md:col-12 lg:col-12 xl:col-12 pt-2 pb-4\">\r\n        <div class=\"grid\">\r\n\r\n<div *ngIf=\"menProd\">\r\n  <div class=\"colors col-12\" *ngIf=\"multipleColors\">\r\n    <h2>Colors</h2>\r\n    <div [style.background-color]=\"product.color\" class=\"circle\" *ngFor=\"let product of products, let i = index\"\r\n      (click)=\"selectColor(product.id)\"></div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"wProd\">\r\n\r\n  <div class=\"colors col-12\" *ngIf=\"multipleColors\">\r\n    <h2>Colors</h2>\r\n    <div [style.background-color]=\"product.color\" class=\"circle\"\r\n      *ngFor=\"let product of products, let i = index\" (click)=\"selectWColor(product.id)\"></div>\r\n\r\n  </div>\r\n</div>\r\n\r\n          <div class=\"sizes col-12\" style=\"display: flex;\r\n          flex-direction: row;\r\n          justify-content: center;\r\n          align-items: center;\">\r\n            <h2 style=\"padding-right: 10px;\">Sizes</h2>\r\n            <button [ngClass]=\"{gold: clickedIndex === i}\" class=\"size \" [disabled]=\"f.available? false : true\"\r\n              *ngFor=\"let f of filteredVariants, let i = index\" (click)=\"selectSize($event)\"\r\n              (click)=\"updateSelectedSize(i)\">{{f.size}}</button>\r\n          </div>\r\n\r\n          <div class=\"product-quantity\" style=\"display: flex; width: 100%;\r\n          flex-direction: row;\r\n          justify-content: center;\r\n          align-items: center;\">\r\n            <div class=\"\" style=\"display: flex;\r\n            flex-direction: row;\r\n            justify-content: center;\r\n            align-items: center;\">\r\n              <label for=\"quantity\">Quantity</label>\r\n              <p-inputNumber [(ngModel)]=\"quantity\" inputId=\"quantity\" mode=\"decimal\" [showButtons]=\"true\"\r\n                [min]=\"0\" [max]=\"maxInv\" (click)=\"checkQuantity()\">\r\n              </p-inputNumber>\r\n            </div>\r\n          </div>\r\n          <div class=\" product-action col-12\" style=\"display: flex;\r\n          flex-direction: row;\r\n          justify-content: center;\r\n          align-items: center;\">\r\n            <button [disabled]=\"button\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"\"\r\n              (click)=\"addProductToCart()\">\r\n            </button>\r\n          </div>\r\n<!--\r\n                    <div *ngIf=\"wProd\" class=\" product-action col-12\">\r\n                      <button [disabled]=\"selected\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"p-button-rounded\"\r\n                        (click)=\"addWProductToCart()\">\r\n                      </button>\r\n                    </div> -->\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"justify-content: center;\">\r\n    <div class=\"col-12 desc-box\" style=\"font-weight: 600; font-family: 'Nova Flat';font-size: 22px;    border-top: 1px solid var(--surface-300); margin-top: 10px; background: linear-gradient(#682e429b, #682e4213);\r\n    padding:1em;\r\n  line-height:1.5em;\r\n    border:solid 5px rgb(0, 0, 0);\">\r\n      <h1 style=\"text-align: center; color: white; font-size: 90px;\">Product description</h1>\r\n      <hr>\r\n      <div class=\"desc\" style=\" padding-left: 5vw; padding-right: 5vw; padding-top: 3vw;  display: flex;\r\n      flex-direction: column;\r\n      justify-content: flex-end;\r\n      text-align: center;\" [innerHTML]=\"product.description\"></div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.W_ProductsService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.CartService }, { type: i5.VariantsService }, { type: i6.MessageService }, { type: i4.CartIconComponent }, { type: i7.Location }, { type: i8.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVEsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNqQjlELCtDQUF5Rzs7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UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUksS0FBSyxDQUFDO1NBQ3RCO2FBQUk7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7O3dGQXpWVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQzNCakMsMEJBQWdGO1FBQ2hGLHVFQStITTs7UUEvSHFCLGVBQWE7UUFBYixrQ0FBYTs7dUZEMEIzQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSw2QkFBNkIsVUFFL0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5cclxuXHJcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XHJcbmltcG9ydCB7IFByb2R1Y3RMdWNhIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXNcclxuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcclxuaW1wb3J0IHsgU3ViamVjdCwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBDYXJ0SWNvbkNvbXBvbmVudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC9vcmRlcnMnO1xyXG5pbXBvcnQgeyBWYXJpYW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ZhcmlhbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xyXG5pbXBvcnQgeyBXX1Byb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvdy1wcm9kdWN0JztcclxuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFdfUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdy1wcm9kdWN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFyaWFudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdmFyaWFudHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNsaWNrZWRJbmRleDogbnVtYmVyO1xyXG4gIHZhcmlhbnQ6IFZhcmlhbnQ7XHJcbiAgdmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xyXG4gIGZpbHRlcmVkVmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xyXG4gIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XHJcbiAgV19wcm9kdWN0OiBXX1Byb2R1Y3Q7XHJcbiAgcHJvZE5hbWUgPSAnJztcclxuICBXX3Byb2RuYW1lID0gJyc7XHJcbiAgbWVuUHJvZCA9IHRydWU7XHJcbiAgd1Byb2QgPSBmYWxzZTtcclxuICBwcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XHJcbiAgbGVuOiBudW1iZXI7XHJcbiAgY29sb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIG11bHRpcGxlQ29sb3JzOiBib29sZWFuO1xyXG4gIGVuZFN1YnMkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHF1YW50aXR5ID0gMDtcclxuICBjdXJyZW50SWQ7XHJcbiAgZGlzcGxheVN1Y2Nlc3NCYW5uZXIgPSBmYWxzZTtcclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGJ1dHRvbiA9IHRydWU7XHJcbiAgc2VsZWN0ZWRTaXplOiBWYXJpYW50W10gPSBbXTtcclxuICBhdmFpbGFiaWxpdHk6IGFueVtdID0gW107XHJcbiAgYXZhaWxhYmxlOiBib29sZWFuO1xyXG4gIG1pbkludjogbnVtYmVyO1xyXG4gIG1heEludjogbnVtYmVyO1xyXG4gIHVybDtcclxuICBwOiBQcm9kdWN0THVjYTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcHJvZFNlcnZpY2U6IFByb2R1Y3RzU2VydmljZSxcclxuICAgIHByaXZhdGUgV3Byb2RTZXJ2aWNlOiBXX1Byb2R1Y3RzU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2YXJpYW50U2VydmljZTogVmFyaWFudHNTZXJ2aWNlLFxyXG5cclxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpY29uOiBDYXJ0SWNvbkNvbXBvbmVudCxcclxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgcHJpdmF0ZSBjYXJ0IDogQ2FydFxyXG5cclxuXHJcbiAgKSB7ICAgICB0aGlzLnAgPSBuZXcgUHJvZHVjdEx1Y2EoKX1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmF2YWlsYWJsZSA9IHRydWU7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcImNhcnQgPSBcIiArIHRoaXMuY2FydC5nZXRKc29uKCkpO1xyXG5cclxuXHJcbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGUudXJsO1xyXG5cclxuICAgIGlmICh0aGlzLnVybC52YWx1ZVswXS5wYXRoID09PSAncHJvZHVjdHMnKSB7XHJcbiAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcmFtcy5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgIHRoaXMuX2dldFByb2R1Y3QocGFyYW1zLnByb2R1Y3RJZCk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5wcm9kdWN0SWQ7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicHJvZHVjdD0gXCIgKyB0aGlzLnByb2R1Y3QpO1xyXG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTtcclxuICAgICAgICAgIC8vIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZVxyXG4gICAgICAgICAgLy8vLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9nZXRTaXplcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53UHJvZCA9IHRydWU7XHJcbiAgICAgIHRoaXMubWVuUHJvZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGlmIChwYXJhbXMucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICB0aGlzLl9nZXRXcHJvZHVjdChwYXJhbXMucHJvZHVjdElkKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLnByb2R1Y3RJZDtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJwcm9kdWN0PSBcIiArIHRoaXMucHJvZHVjdCk7XHJcbiAgICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xyXG4gICAgICAgICAgLy8gdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lXHJcbiAgICAgICAgICAvLy8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX2dldFdTaXplcygpO1xyXG4gICAgfVxyXG5cclxuLy9cclxuICAgIHRoaXMucCA9IG5ldyBQcm9kdWN0THVjYSgpO1xyXG4gICAgdGhpcy5fZ2V0UHJvZHVjdDIoKS50aGVuKFxyXG4gICAgIGRhdGEgPT57XHJcbiAgICAgICB0aGlzLnAgPSBkYXRhO1xyXG4gICAgIH1cclxuICAgICApLmNhdGNoKCBlcnJvciA9PntcclxuICAgICAgIHRoaXMucCA9IG51bGw7XHJcbiAgICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbmRTdWJzJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2UgaWwgcHJvZG90dG8gZXNpc3RlIGdpw6AsIGFnZ2l1bmdvIHVuYSB2YXJpYW50cywgc2Vubm8gYWdnaXVuZ28gdW4gbnVvdm8gcHJvZG90dG8gY29uIGxhIHN1YSB2YXJpYW50c1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgYWRkUHJvZHVjdFRvQ2FydCgpIHtcclxuXHJcbiAgICBpZih0aGlzLnF1YW50aXR5ICE9IDApIHtcclxuXHJcbiAgIGxldCBwVmFyaWFudCA9IG5ldyBQcm9kdWN0VmFyaWFudCh0aGlzLnNlbGVjdGVkU2l6ZVswXS5pZCwgdGhpcy5zZWxlY3RlZFNpemVbMF0uc2l6ZSwgdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5LCAwLCBTdHJpbmcodGhpcy5zZWxlY3RlZFNpemVbMF0uYmFyY29kZSkpO1xyXG4gICBjb25zb2xlLmxvZyhcInBWYXJpYW50ID0gXCIgKyBwVmFyaWFudC5nZXRKc29uKCkpO1xyXG4gICBjb25zb2xlLmxvZyhcInRoaXMgcCA6IFwiICsgdGhpcy5wLmdldEpzb24oKSk7XHJcblxyXG4gICAgICBpZih0aGlzLmNhcnQuY29udGFpbnNQcm9kdWN0KHRoaXMucCkpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IGFscmVhZHkgZXhpc3RcIik7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNhcnQuZ2V0UHJvZHVjdEluZGV4KHRoaXMucCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XHJcbiAgICAgICAgICBsZXQgcHJvZHVjdCA9IHRoaXMuY2FydC5nZXRQcm9kdWN0KGluZGV4KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdCA6IFwiICsgIHByb2R1Y3QuZ2V0SnNvbigpKTtcclxuICAgICAgICAgIHByb2R1Y3QuYWRkVmFyaWFudChwVmFyaWFudCwgdGhpcy5xdWFudGl0eSk7XHJcblxyXG4gICAgIC8vICAgICB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnkgLT0gcHJvZHVjdC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgdGhpcy5wID0gcHJvZHVjdDtcclxuICAgICAgICAgIHRoaXMubWF4SW52ID0gIHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRJbnZlbnRvcnkoKTtcclxuXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcclxuICAgICAgICAgIGlmKHRoaXMubWF4SW52IDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLm1pbkludiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XHJcbiAgICAgICAgICB0aGlzLmNhcnQudXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrUXVhbnRpdHkoKTtcclxuXHJcblxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3QgZG9zbid0IGV4aXN0XCIpO1xyXG4gICAgICAgIHRoaXMucC5hZGRWYXJpYW50KHBWYXJpYW50LCB0aGlzLnF1YW50aXR5KTtcclxuICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLm1heEludiA9ICB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0SW52ZW50b3J5KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImkgaGF2ZSBzZXQgdGhlIG1heEludiB0bzogXCIgKyB0aGlzLm1heEludik7XHJcbiAgICAgICAgaWYodGhpcy5tYXhJbnYgPD0gMCl7XHJcbiAgICAgICAgICB0aGlzLm1pbkludiA9IDA7XHJcbiAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5jYXJ0LmFkZFByb2R1Y3RMdWNhKHRoaXMucCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcml2YXRlIF9nZXRQcm9kdWN0KGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvZFNlcnZpY2VcclxuICAgICAgLmdldFByb2R1Y3QoaWQpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzUHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc1Byb2R1Y3Q7XHJcbiAgICAgICAgdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ2V0UHJvZEJ5bmFtZSgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgcmVzdGl0dWlzY2UgaWwgcHJvZG90dG8gZGVsbGEgcGFnaW5hXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhc3luYyBfZ2V0UHJvZHVjdDIoKSB7XHJcblxyXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxQcm9kdWN0THVjYT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLnByb2RTZXJ2aWNlXHJcbiAgICAgIC5nZXRQcm9kdWN0KHRoaXMuY3VycmVudElkKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcclxuICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJyZXMgcHJvZHVjdDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXNQcm9kdWN0KSk7XHJcbiAgICAgICAgbGV0IHAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcclxuICAgICAgICBwLnNldElkKHJlc1Byb2R1Y3QuaWQpO1xyXG4gICAgICAgIHAuc2V0RGlzY291bnQocmVzUHJvZHVjdC5kaXNjb3VudCk7XHJcbiAgICAgICAgcC5zZXRQcmljZShyZXNQcm9kdWN0LnByaWNlKTtcclxuICAgICAgICBwLnNldFRoZU1haW5JbWFnZShyZXNQcm9kdWN0LmltYWdlKTtcclxuICAgICAgICBwLnNldE5hbWUocmVzUHJvZHVjdC5uYW1lKTtcclxuXHJcbiAgICAgICAgcmVzb2x2ZShwKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHByb21pc2U7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0V3Byb2R1Y3QoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0KGlkKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcclxuICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNQcm9kdWN0O1xyXG4gICAgICAgIHRoaXMuV19wcm9kbmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ2V0V1Byb2RCeW5hbWUoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZ2V0U2l6ZXMoKSB7XHJcbiAgICB0aGlzLnZhcmlhbnRTZXJ2aWNlXHJcbiAgICAgIC5nZXRWYXJpYW50cygpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcclxuICAgICAgLnN1YnNjcmliZSgodmFyaWFudHMpID0+IHtcclxuICAgICAgICB0aGlzLnZhcmlhbnRzID0gdmFyaWFudHM7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzID0gdGhpcy52YXJpYW50cy5maWx0ZXIoXHJcbiAgICAgICAgICAoc2l6ZSkgPT4gc2l6ZS5wcm9kdWN0ID09PSB0aGlzLmN1cnJlbnRJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzLnNvcnQoKGEsIGIpID0+IChhLnNpemUgPCBiLnNpemUgPyAtMSA6IDEpKTtcclxuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5maWx0ZXJlZFZhcmlhbnRzKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZ2V0V1NpemVzKCkge1xyXG4gICAgdGhpcy52YXJpYW50U2VydmljZVxyXG4gICAgICAuZ2V0VmFyaWFudHMoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHZhcmlhbnRzKSA9PiB7XHJcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cyA9IHRoaXMudmFyaWFudHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHNpemUpID0+IHNpemUucHJvZHVjdCA9PT0gdGhpcy5jdXJyZW50SWRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5zb3J0KChhLCBiKSA9PiAoYS5zaXplIDwgYi5zaXplID8gLTEgOiAxKSk7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuZmlsdGVyZWRWYXJpYW50cyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqcXVlc3RhIGZ1bnppb25lIHNlbWJyYSBzb2xvIGdlc3RpcmUgaWwgbWF4IGlucHV0ICovXHJcbiAgc2VsZWN0U2l6ZShldmVudDogYW55LCBpbmRleCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImZpbHRlcmVkVmFyaWFudHM6IFwiICsgdGhpcy5maWx0ZXJlZFZhcmlhbnRzKTtcclxuICAgIHRoaXMuY2xpY2tlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiaW5kZXggOiBcIiArIGluZGV4KTtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5idXR0b24gPSBmYWxzZTtcclxuICAgIGNvbnN0IHRlbXAgPSBldmVudC50YXJnZXQuaW5uZXJIVE1MO1xyXG4gICAvLyAvL2NvbnNvbGUubG9nKHRlbXApO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRTaXplID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzLmZpbHRlcigoeCkgPT4geC5zaXplID09PSB0ZW1wKTtcclxuICAgLy8gLy9jb25zb2xlLmxvZyhcInNlbGVjdGVkIHNpemU9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZFNpemUpKTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5ID49IDEpIHtcclxuICAgICAgdGhpcy5taW5JbnYgPSAxO1xyXG4gICAgICB0aGlzLm1heEludiA9IHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeTtcclxuICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKFwiaW0gZG9pbmcgc29tZXRoaW5nIC0+IHNlbGVjdFNpemUoKVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFByb2RCeW5hbWUoKSB7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeU5hbWUodGhpcy5wcm9kTmFtZSkuc3Vic2NyaWJlKChwcm9kdWN0cykgPT4ge1xyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcclxuXHJcbiAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xyXG4gICAgICAgIHRoaXMuY29sb3JzLnB1c2godGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9ycyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5sZW4gPiAxKSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0V1Byb2RCeW5hbWUoKSB7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3RCeU5hbWUodGhpcy5XX3Byb2RuYW1lKS5zdWJzY3JpYmUoXHJcbiAgICAgIChwcm9kdWN0cykgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XHJcblxyXG4gICAgICAgIHRoaXMubGVuID0gdGhpcy5wcm9kdWN0cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbjsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xyXG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sZW4gPiAxKSB7XHJcbiAgICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9yKHByb2RJZCkge1xyXG4gICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XHJcbiAgICB0aGlzLl9nZXRQcm9kdWN0KHByb2RJZCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncHJvZHVjdHMvJyArIHByb2RJZF0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RXQ29sb3IocHJvZElkKSB7XHJcbiAgIC8vIC8vY29uc29sZS5sb2cocHJvZElkKTtcclxuICAgIHRoaXMuX2dldFdwcm9kdWN0KHByb2RJZCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnd29tZW4tcHJvZHVjdHMvJyArIHByb2RJZF0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZFNpemUoaW5kZXgpe1xyXG5cclxuXHJcbiAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XHJcbiAgICB0aGlzLmNsaWNrZWRJbmRleCA9IGluZGV4O1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInNpemUgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF0pKTtcclxuICAgIGxldCBzZWxlY3RlZFZhcmlhbnQgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xyXG4gICAgbGV0IHNlbGVjdGVkVmFyaWFudElkID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XS5pZDtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWRWYXJpYW50SWQgXCIgKyBzZWxlY3RlZFZhcmlhbnRJZCApO1xyXG5cclxuICAgIGxldCBzZWxlY3RlZFByb2R1Y3RWYXJpYW50ID0gdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKHNlbGVjdGVkVmFyaWFudElkKTtcclxuICAgIGlmKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQgIT0gbnVsbCl7XHJcbiAgICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQuZ2V0SnNvbigpKTtcclxuICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRQcm9kdWN0VmFyaWFudC5nZXRJbnZlbnRvcnkoKTtcclxuICAgIGlmKHRoaXMubWF4SW52PT09MCB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gdHJ1ZTtcclxuICAgIC8vY29uc29sZS5sb2coXCJ0aGlzIHByb2R1Y3QgaXMgYWxyZWFkeSBpbnNpZGUgdGhlIGNhcnQsIHRoZSBtYXhJbnYgaXM6IFwiICsgdGhpcy5tYXhJbnYpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRWYXJpYW50LmludmVudG9yeTtcclxuICAgICAgaWYodGhpcy5tYXhJbnY9PT0wICB8fCB0aGlzLnF1YW50aXR5ID09PSAwKXRoaXMuYnV0dG9uID0gIHRydWU7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0aGlzIHByb2R1Y3QgaXMgTk9UIGluc2lkZSB0aGUgY2FydCwgdGhlIG1heEludiBpczogXCIgKyB0aGlzLm1heEludik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tRdWFudGl0eSgpe1xyXG4gICAgaWYoIHRoaXMucXVhbnRpdHkgIT0gMCl7XHJcbiAgICAgIHRoaXMuYnV0dG9uID0gIGZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuYnV0dG9uID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdmEgRmxhdCcgcmVsPSdzdHlsZXNoZWV0Jz5cclxuPGRpdiBjbGFzcz1cInByb2R1Y3QtcGFnZVwiICpuZ0lmPVwicHJvZHVjdFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJncmlkXCI+XHJcbiAgICA8ZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzIHN0eWxlPVwibWF4LXdpZHRoOjQwdndcIiAqbmdJZj1cImRpc3BsYXlTdWNjZXNzQmFubmVyXCI+PC9lZXNob3AtZnJvbnRlbmQtbWVzc2FnZXM+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1uYW1lLXNtIHNtOmNvbC0xMlwiPlxyXG5cclxuICAgICAgPGgxIHN0eWxlPVwiZm9udC1mYW1pbHk6ICdDb21pYyBTYW5zIE1TJywgJ0NoYWxrYm9hcmQgU0UnLCAnQ29taWMgTmV1ZScsIHNhbnMtc2VyaWY7XCI+e3twcm9kdWN0Lm5hbWV9fTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nLXNtXCI+XHJcbiAgICAgICAgICAgIDxwLXJhdGluZyBbKG5nTW9kZWwpXT1cInByb2R1Y3QucmF0aW5nXCIgW2Rpc2FibGVkXT1cInRydWVcIiBbY2FuY2VsXT1cImZhbHNlXCI+PC9wLXJhdGluZz5cclxuICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1wcmljZS1zbVwiPlxyXG4gICAgICB7e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeX19XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNyBnYWxsZXJ5ICBcIiAgc3R5bGU9XCIgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB3aGl0ZTtcIj5cclxuICAgICAgPHVpLWdhbGxlcnkgIFtpbWFnZXNdPVwicHJvZHVjdC5pbWFnZXNcIiBbaW1hZ2VdPVwicHJvZHVjdC5pbWFnZVwiIFtwcm9kdWN0XT1cInByb2R1Y3RcIj48L3VpLWdhbGxlcnk+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIGNvbC1tZC00IHByb2R1Y3RcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDI1NXB4IDQ1cHggMjI1cHggMTVweC8xNXB4IDIyNXB4IDE1cHggMjU1cHg7XHJcbiAgICBwYWRkaW5nOjFlbTtcclxuICBsaW5lLWhlaWdodDoxLjVlbTtcclxuICAgIGJvcmRlcjpzb2xpZCA1cHggcmdiKDAsIDAsIDApO1wiXHJcblxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1uYW1lXCI+XHJcbiAgICAgICAgPGgxIHN0eWxlPVwiZm9udC1mYW1pbHk6ICdDb21pYyBTYW5zIE1TJywgJ0NoYWxrYm9hcmQgU0UnLCAnQ29taWMgTmV1ZScsIHNhbnMtc2VyaWY7XCI+e3twcm9kdWN0Lm5hbWV9fTwvaDE+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8cC1yYXRpbmcgWyhuZ01vZGVsKV09XCJwcm9kdWN0LnJhdGluZ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCIgW2NhbmNlbF09XCJmYWxzZVwiPjwvcC1yYXRpbmc+XHJcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICB7e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeX19XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNtOmNvbC0xMiBtZDpjb2wtMTIgbGc6Y29sLTEyIHhsOmNvbC0xMiBwdC0yIHBiLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG5cclxuPGRpdiAqbmdJZj1cIm1lblByb2RcIj5cclxuICA8ZGl2IGNsYXNzPVwiY29sb3JzIGNvbC0xMlwiICpuZ0lmPVwibXVsdGlwbGVDb2xvcnNcIj5cclxuICAgIDxoMj5Db2xvcnM8L2gyPlxyXG4gICAgPGRpdiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJwcm9kdWN0LmNvbG9yXCIgY2xhc3M9XCJjaXJjbGVcIiAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0cywgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgIChjbGljayk9XCJzZWxlY3RDb2xvcihwcm9kdWN0LmlkKVwiPjwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGRpdiAqbmdJZj1cIndQcm9kXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb2xvcnMgY29sLTEyXCIgKm5nSWY9XCJtdWx0aXBsZUNvbG9yc1wiPlxyXG4gICAgPGgyPkNvbG9yczwvaDI+XHJcbiAgICA8ZGl2IFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cInByb2R1Y3QuY29sb3JcIiBjbGFzcz1cImNpcmNsZVwiXHJcbiAgICAgICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIHByb2R1Y3RzLCBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdFdDb2xvcihwcm9kdWN0LmlkKVwiPjwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpemVzIGNvbC0xMlwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDEwcHg7XCI+U2l6ZXM8L2gyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFtuZ0NsYXNzXT1cIntnb2xkOiBjbGlja2VkSW5kZXggPT09IGl9XCIgY2xhc3M9XCJzaXplIFwiIFtkaXNhYmxlZF09XCJmLmF2YWlsYWJsZT8gZmFsc2UgOiB0cnVlXCJcclxuICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBmaWx0ZXJlZFZhcmlhbnRzLCBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdFNpemUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInVwZGF0ZVNlbGVjdGVkU2l6ZShpKVwiPnt7Zi5zaXplfX08L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXF1YW50aXR5XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJxdWFudGl0eVwiPlF1YW50aXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8cC1pbnB1dE51bWJlciBbKG5nTW9kZWwpXT1cInF1YW50aXR5XCIgaW5wdXRJZD1cInF1YW50aXR5XCIgbW9kZT1cImRlY2ltYWxcIiBbc2hvd0J1dHRvbnNdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBbbWluXT1cIjBcIiBbbWF4XT1cIm1heEludlwiIChjbGljayk9XCJjaGVja1F1YW50aXR5KClcIj5cclxuICAgICAgICAgICAgICA8L3AtaW5wdXROdW1iZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiIHByb2R1Y3QtYWN0aW9uIGNvbC0xMlwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImJ1dHRvblwiIHBCdXR0b24gcFJpcHBsZSB0eXBlPVwiYnV0dG9uXCIgbGFiZWw9XCJBZGQgdG8gY2FydFwiIGNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkUHJvZHVjdFRvQ2FydCgpXCI+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbjwhLS1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwid1Byb2RcIiBjbGFzcz1cIiBwcm9kdWN0LWFjdGlvbiBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cInNlbGVjdGVkXCIgcEJ1dHRvbiBwUmlwcGxlIHR5cGU9XCJidXR0b25cIiBsYWJlbD1cIkFkZCB0byBjYXJ0XCIgY2xhc3M9XCJwLWJ1dHRvbi1yb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFdQcm9kdWN0VG9DYXJ0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBkZXNjLWJveFwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1mYW1pbHk6ICdOb3ZhIEZsYXQnO2ZvbnQtc2l6ZTogMjJweDsgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtMzAwKTsgbWFyZ2luLXRvcDogMTBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM2ODJlNDI5YiwgIzY4MmU0MjEzKTtcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gIGxpbmUtaGVpZ2h0OjEuNWVtO1xyXG4gICAgYm9yZGVyOnNvbGlkIDVweCByZ2IoMCwgMCwgMCk7XCI+XHJcbiAgICAgIDxoMSBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDkwcHg7XCI+UHJvZHVjdCBkZXNjcmlwdGlvbjwvaDE+XHJcbiAgICAgIDxocj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRlc2NcIiBzdHlsZT1cIiBwYWRkaW5nLWxlZnQ6IDV2dzsgcGFkZGluZy1yaWdodDogNXZ3OyBwYWRkaW5nLXRvcDogM3Z3OyAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1wiIFtpbm5lckhUTUxdPVwicHJvZHVjdC5kZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=