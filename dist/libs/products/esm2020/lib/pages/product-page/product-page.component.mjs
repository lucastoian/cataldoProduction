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
    i0.ɵɵelement(0, "eeshop-frontend-messages", 30);
} }
function ProductPageComponent_div_1_div_21_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_div_21_div_1_div_3_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const product_r7 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(4); return ctx_r9.selectColor(product_r7.id); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    i0.ɵɵstyleProp("background-color", product_r7.color);
} }
function ProductPageComponent_div_1_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "h2");
    i0.ɵɵtext(2, "Colors");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProductPageComponent_div_1_div_21_div_1_div_3_Template, 1, 2, "div", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r5.products);
} }
function ProductPageComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ProductPageComponent_div_1_div_21_div_1_Template, 4, 1, "div", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.multipleColors);
} }
function ProductPageComponent_div_1_div_23_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_div_23_div_1_div_3_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r16); const product_r13 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(4); return ctx_r15.selectWColor(product_r13.id); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r13 = ctx.$implicit;
    i0.ɵɵstyleProp("background-color", product_r13.color);
} }
function ProductPageComponent_div_1_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "h2");
    i0.ɵɵtext(2, "Colors");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProductPageComponent_div_1_div_23_div_1_div_3_Template, 1, 2, "div", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r11.products);
} }
function ProductPageComponent_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, ProductPageComponent_div_1_div_23_div_1_Template, 4, 1, "div", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.multipleColors);
} }
const _c0 = function (a0) { return { gold: a0 }; };
function ProductPageComponent_div_1_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_button_27_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.selectSize($event); })("click", function ProductPageComponent_div_1_button_27_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const i_r18 = restoredCtx.index; const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.updateSelectedSize(i_r18); });
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
    i0.ɵɵelementStart(22, "div", 16);
    i0.ɵɵtemplate(23, ProductPageComponent_div_1_div_23_Template, 2, 1, "div", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 18)(25, "h2", 19);
    i0.ɵɵtext(26, "Sizes");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(27, ProductPageComponent_div_1_button_27_Template, 2, 5, "button", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 21)(29, "div", 22)(30, "label", 23);
    i0.ɵɵtext(31, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "p-inputNumber", 24);
    i0.ɵɵlistener("ngModelChange", function ProductPageComponent_div_1_Template_p_inputNumber_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.quantity = $event; })("click", function ProductPageComponent_div_1_Template_p_inputNumber_click_32_listener() { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.checkQuantity(); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "div", 25)(34, "button", 26);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r23); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.addProductToCart(); });
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(35, "div", 16)(36, "div", 27)(37, "h1", 28);
    i0.ɵɵtext(38, "Product description");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(39, "hr")(40, "div", 29);
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
    i0.ɵɵadvance(2);
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
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: `Product Added to cart!`
                });
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
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 2, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Nova Flat", "rel", "stylesheet"], ["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "grid"], ["style", "max-width:40vw", 4, "ngIf"], [1, "product-name-sm", "sm:col-12"], [2, "font-family", "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif"], [1, "product-price-sm"], [1, "row", 2, "justify-content", "space-around"], [1, "col-12", "col-md-7", "gallery", 2, "border-right", "10px solid white"], [3, "images", "image", "product"], [1, "col-10", "col-md-4", "product", 2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "border-radius", "255px 45px 225px 15px/15px 12px 15px 255px", "padding", "1em", "line-height", "1.5em", "border", "solid 5px rgb(0, 0, 0)"], [1, "product-name"], [1, "product-price"], [1, "sm:col-12", "md:col-12", "lg:col-12", "xl:col-12", "pt-2", "pb-4"], [4, "ngIf"], [1, "row", 2, "justify-content", "center"], ["style", "width: 100%;", 4, "ngIf"], [1, "sizes", "col-12", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [2, "padding-right", "10px"], ["class", "size ", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "product-quantity", 2, "display", "flex", "width", "100%", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [1, "", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["for", "quantity"], ["inputId", "quantity", "mode", "decimal", 3, "ngModel", "showButtons", "min", "max", "ngModelChange", "click"], [1, "product-action", "col-12", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Add to cart", 1, "", 3, "disabled", "click"], [1, "col-12", "desc-box", 2, "font-weight", "600", "font-family", "Nova Flat", "font-size", "22px", "border-top", "1px solid var(--surface-300)", "margin-top", "10px", "background", "linear-gradient(#682e429b, #682e4213)", "padding", "1em", "line-height", "1.5em", "border", "solid 5px rgb(0, 0, 0)"], [2, "text-align", "center", "color", "white"], [1, "desc", 2, "padding-left", "5vw", "padding-right", "5vw", "padding-top", "3vw", "display", "flex", "flex-direction", "column", "justify-content", "flex-end", "text-align", "center", 3, "innerHTML"], [2, "max-width", "40vw"], ["class", "colors col-12", 4, "ngIf"], [1, "colors", "col-12"], ["class", "circle", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "circle", 3, "click"], [2, "width", "100%"], ["class", "colors col-12", "style", "width: 100%;", 4, "ngIf"], [1, "colors", "col-12", 2, "width", "100%"], [1, "size", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵtemplate(1, ProductPageComponent_div_1_Template, 41, 21, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i7.NgIf, i9.GalleryComponent, i7.NgForOf, i7.NgClass, i10.InputNumber, i11.NgControlStatus, i11.NgModel, i12.ButtonDirective], pipes: [i7.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', styles: [], template: "<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\r\n<div class=\"product-page\" *ngIf=\"product\">\r\n  <div class=\"grid\">\r\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\r\n    <div class=\"product-name-sm sm:col-12\">\r\n\r\n      <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\r\n    </div>\r\n    <!--\r\n        <div class=\"rating-sm\">\r\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\r\n        </div> -->\r\n    <div class=\"product-price-sm\">\r\n      {{product.price | currency}}\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"justify-content: space-around\">\r\n    <div class=\"col-12 col-md-7 gallery  \"  style=\"  border-right: 10px solid white;\">\r\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\"></ui-gallery>\r\n    </div>\r\n\r\n    <div class=\"col-10 col-md-4 product\" style=\"display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    border-radius: 255px 45px 225px 15px/15px 12px 15px 255px;\r\n    padding:1em;\r\n  line-height:1.5em;\r\n    border:solid 5px rgb(0, 0, 0);\"\r\n\r\n    >\r\n      <div class=\"product-name\">\r\n        <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\r\n\r\n      </div>\r\n      <!--\r\n            <div class=\"rating\">\r\n                <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\r\n            </div> -->\r\n      <div class=\"product-price\">\r\n        {{product.price | currency}}\r\n      </div>\r\n\r\n      <div class=\"sm:col-12 md:col-12 lg:col-12 xl:col-12 pt-2 pb-4\">\r\n        <div class=\"grid\">\r\n\r\n<div *ngIf=\"menProd\">\r\n  <div class=\"colors col-12\" *ngIf=\"multipleColors\">\r\n    <h2>Colors</h2>\r\n    <div [style.background-color]=\"product.color\" class=\"circle\" *ngFor=\"let product of products, let i = index\"\r\n      (click)=\"selectColor(product.id)\"></div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"row\" style=\"justify-content: center;\">\r\n<div *ngIf=\"wProd\" style=\"width: 100%;\">\r\n\r\n  <div class=\"colors col-12\" *ngIf=\"multipleColors\" style=\"width: 100%;\">\r\n    <h2>Colors</h2>\r\n    <div [style.background-color]=\"product.color\" class=\"circle\"\r\n      *ngFor=\"let product of products, let i = index\" (click)=\"selectWColor(product.id)\"></div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n          <div class=\"sizes col-12\" style=\"display: flex;\r\n          flex-direction: row;\r\n          justify-content: center;\r\n          align-items: center;\">\r\n            <h2 style=\"padding-right: 10px;\">Sizes</h2>\r\n            <button [ngClass]=\"{gold: clickedIndex === i}\" class=\"size \" [disabled]=\"f.available? false : true\"\r\n              *ngFor=\"let f of filteredVariants, let i = index\" (click)=\"selectSize($event)\"\r\n              (click)=\"updateSelectedSize(i)\">{{f.size}}</button>\r\n          </div>\r\n\r\n          <div class=\"product-quantity\" style=\"display: flex; width: 100%;\r\n          flex-direction: row;\r\n          justify-content: center;\r\n          align-items: center;\">\r\n            <div class=\"\" style=\"display: flex;\r\n            flex-direction: row;\r\n            justify-content: center;\r\n            align-items: center;\">\r\n              <label for=\"quantity\">Quantity</label>\r\n              <p-inputNumber [(ngModel)]=\"quantity\" inputId=\"quantity\" mode=\"decimal\" [showButtons]=\"true\"\r\n                [min]=\"0\" [max]=\"maxInv\" (click)=\"checkQuantity()\">\r\n              </p-inputNumber>\r\n            </div>\r\n          </div>\r\n          <div class=\" product-action col-12\" style=\"display: flex;\r\n          flex-direction: row;\r\n          justify-content: center;\r\n          align-items: center;\">\r\n            <button [disabled]=\"button\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"\"\r\n              (click)=\"addProductToCart()\">\r\n            </button>\r\n          </div>\r\n<!--\r\n                    <div *ngIf=\"wProd\" class=\" product-action col-12\">\r\n                      <button [disabled]=\"selected\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"p-button-rounded\"\r\n                        (click)=\"addWProductToCart()\">\r\n                      </button>\r\n                    </div> -->\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"justify-content: center;\">\r\n    <div class=\"col-12 desc-box\" style=\"font-weight: 600; font-family: 'Nova Flat';font-size: 22px;    border-top: 1px solid var(--surface-300); margin-top: 10px; background: linear-gradient(#682e429b, #682e4213);\r\n    padding:1em;\r\n  line-height:1.5em;\r\n    border:solid 5px rgb(0, 0, 0);\">\r\n      <h1 style=\"text-align: center; color: white; \">Product description</h1>\r\n      <hr>\r\n      <div class=\"desc\" style=\" padding-left: 5vw; padding-right: 5vw; padding-top: 3vw;  display: flex;\r\n      flex-direction: column;\r\n      justify-content: flex-end;\r\n      text-align: center;\" [innerHTML]=\"product.description\"></div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.W_ProductsService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.CartService }, { type: i5.VariantsService }, { type: i6.MessageService }, { type: i4.CartIconComponent }, { type: i7.Location }, { type: i8.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVEsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNqQjlELCtDQUF5Rzs7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QUFDLFFBQVEsS0FBSyxDQUFDO2dCQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzdELHdGQUF3RjtTQUN2RjthQUFJO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDO1lBQ3hDLElBQUcsSUFBSSxDQUFDLE1BQU0sS0FBRyxDQUFDLElBQUssSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDO2dCQUFDLElBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDO1lBQy9ELG9GQUFvRjtTQUNyRjtJQUVILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBQztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFJLEtBQUssQ0FBQztTQUN0QjthQUFJO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDOzt3RkFsV1Usb0JBQW9CO3VFQUFwQixvQkFBb0I7UUMzQmpDLDBCQUFnRjtRQUNoRix1RUFpSU07O1FBaklxQixlQUFhO1FBQWIsa0NBQWE7O3VGRDBCM0Isb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0UsNkJBQTZCLFVBRS9CLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuXHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XHJcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5pbXBvcnQgeyBQcm9kdWN0THVjYSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXHJcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XHJcbmltcG9ydCB7IFN1YmplY3QsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ2FydEljb25Db21wb25lbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcclxuaW1wb3J0IHsgVmFyaWFudCB9IGZyb20gJy4uLy4uL21vZGVscy92YXJpYW50JztcclxuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcclxuaW1wb3J0IHsgV19Qcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ctcHJvZHVjdCc7XHJcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXX1Byb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ctcHJvZHVjdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFZhcmlhbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ZhcmlhbnRzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0LXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjbGlja2VkSW5kZXg6IG51bWJlcjtcclxuICB2YXJpYW50OiBWYXJpYW50O1xyXG4gIHZhcmlhbnRzOiBWYXJpYW50W10gPSBbXTtcclxuICBmaWx0ZXJlZFZhcmlhbnRzOiBWYXJpYW50W10gPSBbXTtcclxuICBwcm9kdWN0OiBQcm9kdWN0MTIzO1xyXG4gIFdfcHJvZHVjdDogV19Qcm9kdWN0O1xyXG4gIHByb2ROYW1lID0gJyc7XHJcbiAgV19wcm9kbmFtZSA9ICcnO1xyXG4gIG1lblByb2QgPSB0cnVlO1xyXG4gIHdQcm9kID0gZmFsc2U7XHJcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xyXG4gIGxlbjogbnVtYmVyO1xyXG4gIGNvbG9yczogc3RyaW5nW10gPSBbXTtcclxuICBtdWx0aXBsZUNvbG9yczogYm9vbGVhbjtcclxuICBlbmRTdWJzJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICBxdWFudGl0eSA9IDA7XHJcbiAgY3VycmVudElkO1xyXG4gIGRpc3BsYXlTdWNjZXNzQmFubmVyID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBidXR0b24gPSB0cnVlO1xyXG4gIHNlbGVjdGVkU2l6ZTogVmFyaWFudFtdID0gW107XHJcbiAgYXZhaWxhYmlsaXR5OiBhbnlbXSA9IFtdO1xyXG4gIGF2YWlsYWJsZTogYm9vbGVhbjtcclxuICBtaW5JbnY6IG51bWJlcjtcclxuICBtYXhJbnY6IG51bWJlcjtcclxuICB1cmw7XHJcbiAgcDogUHJvZHVjdEx1Y2E7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIFdwcm9kU2VydmljZTogV19Qcm9kdWN0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcclxuICAgIHByaXZhdGUgdmFyaWFudFNlcnZpY2U6IFZhcmlhbnRzU2VydmljZSxcclxuXHJcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgaWNvbjogQ2FydEljb25Db21wb25lbnQsXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgIHByaXZhdGUgY2FydCA6IENhcnRcclxuXHJcblxyXG4gICkgeyAgICAgdGhpcy5wID0gbmV3IFByb2R1Y3RMdWNhKCl9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hdmFpbGFibGUgPSB0cnVlO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vY29uc29sZS5sb2coXCJjYXJ0ID0gXCIgKyB0aGlzLmNhcnQuZ2V0SnNvbigpKTtcclxuXHJcblxyXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuXHJcbiAgICBpZiAodGhpcy51cmwudmFsdWVbMF0ucGF0aCA9PT0gJ3Byb2R1Y3RzJykge1xyXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGlmIChwYXJhbXMucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICB0aGlzLl9nZXRQcm9kdWN0KHBhcmFtcy5wcm9kdWN0SWQpO1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMucHJvZHVjdElkO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcInByb2R1Y3Q9IFwiICsgdGhpcy5wcm9kdWN0KTtcclxuICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7XHJcbiAgICAgICAgICAvLyB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWVcclxuICAgICAgICAgIC8vLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2ROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5fZ2V0U2l6ZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud1Byb2QgPSB0cnVlO1xyXG4gICAgICB0aGlzLm1lblByb2QgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICAgICAgICBpZiAocGFyYW1zLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgdGhpcy5fZ2V0V3Byb2R1Y3QocGFyYW1zLnByb2R1Y3RJZCk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5wcm9kdWN0SWQ7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicHJvZHVjdD0gXCIgKyB0aGlzLnByb2R1Y3QpO1xyXG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTtcclxuICAgICAgICAgIC8vIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZVxyXG4gICAgICAgICAgLy8vLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9nZXRXU2l6ZXMoKTtcclxuICAgIH1cclxuXHJcbi8vXHJcbiAgICB0aGlzLnAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcclxuICAgIHRoaXMuX2dldFByb2R1Y3QyKCkudGhlbihcclxuICAgICBkYXRhID0+e1xyXG4gICAgICAgdGhpcy5wID0gZGF0YTtcclxuICAgICB9XHJcbiAgICAgKS5jYXRjaCggZXJyb3IgPT57XHJcbiAgICAgICB0aGlzLnAgPSBudWxsO1xyXG4gICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZW5kU3VicyQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlIGlsIHByb2RvdHRvIGVzaXN0ZSBnacOgLCBhZ2dpdW5nbyB1bmEgdmFyaWFudHMsIHNlbm5vIGFnZ2l1bmdvIHVuIG51b3ZvIHByb2RvdHRvIGNvbiBsYSBzdWEgdmFyaWFudHNcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIGFkZFByb2R1Y3RUb0NhcnQoKSB7XHJcblxyXG4gICAgaWYodGhpcy5xdWFudGl0eSAhPSAwKSB7XHJcblxyXG4gICBsZXQgcFZhcmlhbnQgPSBuZXcgUHJvZHVjdFZhcmlhbnQodGhpcy5zZWxlY3RlZFNpemVbMF0uaWQsIHRoaXMuc2VsZWN0ZWRTaXplWzBdLnNpemUsIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSwgMCwgU3RyaW5nKHRoaXMuc2VsZWN0ZWRTaXplWzBdLmJhcmNvZGUpKTtcclxuICAgY29uc29sZS5sb2coXCJwVmFyaWFudCA9IFwiICsgcFZhcmlhbnQuZ2V0SnNvbigpKTtcclxuICAgY29uc29sZS5sb2coXCJ0aGlzIHAgOiBcIiArIHRoaXMucC5nZXRKc29uKCkpO1xyXG5cclxuICAgICAgaWYodGhpcy5jYXJ0LmNvbnRhaW5zUHJvZHVjdCh0aGlzLnApKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdCBhbHJlYWR5IGV4aXN0XCIpO1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jYXJ0LmdldFByb2R1Y3RJbmRleCh0aGlzLnApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleCA6IFwiICsgaW5kZXgpO1xyXG4gICAgICAgICAgbGV0IHByb2R1Y3QgPSB0aGlzLmNhcnQuZ2V0UHJvZHVjdChpbmRleCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3QgOiBcIiArICBwcm9kdWN0LmdldEpzb24oKSk7XHJcbiAgICAgICAgICBwcm9kdWN0LmFkZFZhcmlhbnQocFZhcmlhbnQsIHRoaXMucXVhbnRpdHkpO1xyXG5cclxuICAgICAvLyAgICAgdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5IC09IHByb2R1Y3QuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICAgIHRoaXMucCA9IHByb2R1Y3Q7XHJcbiAgICAgICAgICB0aGlzLm1heEludiA9ICB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0SW52ZW50b3J5KCk7XHJcblxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImkgaGF2ZSBzZXQgdGhlIG1heEludiB0bzogXCIgKyB0aGlzLm1heEludik7XHJcbiAgICAgICAgICBpZih0aGlzLm1heEludiA8PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5taW5JbnYgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0LnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XHJcbiAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXNzJyxcclxuICAgICAgICAgICAgZGV0YWlsOiBgUHJvZHVjdCBBZGRlZCB0byBjYXJ0IWBcclxuICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdCBkb3NuJ3QgZXhpc3RcIik7XHJcbiAgICAgICAgdGhpcy5wLmFkZFZhcmlhbnQocFZhcmlhbnQsIHRoaXMucXVhbnRpdHkpO1xyXG4gICAgICAgLy8gdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5IC09IHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMubWF4SW52ID0gIHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRJbnZlbnRvcnkoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcclxuICAgICAgICBpZih0aGlzLm1heEludiA8PSAwKXtcclxuICAgICAgICAgIHRoaXMubWluSW52ID0gMDtcclxuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gMDtcclxuICAgICAgICB0aGlzLmNhcnQuYWRkUHJvZHVjdEx1Y2EodGhpcy5wKTtcclxuICAgICAgICB0aGlzLmNoZWNrUXVhbnRpdHkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xyXG4gICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcclxuICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXNzJyxcclxuICAgICAgICAgIGRldGFpbDogYFByb2R1Y3QgQWRkZWQgdG8gY2FydCFgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0UHJvZHVjdChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb2RTZXJ2aWNlXHJcbiAgICAgIC5nZXRQcm9kdWN0KGlkKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcclxuICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNQcm9kdWN0O1xyXG4gICAgICAgIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZTtcclxuICAgICAgICB0aGlzLmdldFByb2RCeW5hbWUoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHJlc3RpdHVpc2NlIGlsIHByb2RvdHRvIGRlbGxhIHBhZ2luYVxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXN5bmMgX2dldFByb2R1Y3QyKCkge1xyXG5cclxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8UHJvZHVjdEx1Y2E+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5wcm9kU2VydmljZVxyXG4gICAgICAuZ2V0UHJvZHVjdCh0aGlzLmN1cnJlbnRJZClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXNQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKFwicmVzIHByb2R1Y3Q6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzUHJvZHVjdCkpO1xyXG4gICAgICAgIGxldCBwID0gbmV3IFByb2R1Y3RMdWNhKCk7XHJcbiAgICAgICAgcC5zZXRJZChyZXNQcm9kdWN0LmlkKTtcclxuICAgICAgICBwLnNldERpc2NvdW50KHJlc1Byb2R1Y3QuZGlzY291bnQpO1xyXG4gICAgICAgIHAuc2V0UHJpY2UocmVzUHJvZHVjdC5wcmljZSk7XHJcbiAgICAgICAgcC5zZXRUaGVNYWluSW1hZ2UocmVzUHJvZHVjdC5pbWFnZSk7XHJcbiAgICAgICAgcC5zZXROYW1lKHJlc1Byb2R1Y3QubmFtZSk7XHJcblxyXG4gICAgICAgIHJlc29sdmUocCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBwcm9taXNlO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFdwcm9kdWN0KGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdChpZClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXNQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gcmVzUHJvZHVjdDtcclxuICAgICAgICB0aGlzLldfcHJvZG5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZTtcclxuICAgICAgICB0aGlzLmdldFdQcm9kQnluYW1lKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2dldFNpemVzKCkge1xyXG4gICAgdGhpcy52YXJpYW50U2VydmljZVxyXG4gICAgICAuZ2V0VmFyaWFudHMoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHZhcmlhbnRzKSA9PiB7XHJcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cyA9IHRoaXMudmFyaWFudHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHNpemUpID0+IHNpemUucHJvZHVjdCA9PT0gdGhpcy5jdXJyZW50SWRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRWYXJpYW50cy5zb3J0KChhLCBiKSA9PiAoYS5zaXplIDwgYi5zaXplID8gLTEgOiAxKSk7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuZmlsdGVyZWRWYXJpYW50cyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2dldFdTaXplcygpIHtcclxuICAgIHRoaXMudmFyaWFudFNlcnZpY2VcclxuICAgICAgLmdldFZhcmlhbnRzKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCh2YXJpYW50cykgPT4ge1xyXG4gICAgICAgIHRoaXMudmFyaWFudHMgPSB2YXJpYW50cztcclxuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMgPSB0aGlzLnZhcmlhbnRzLmZpbHRlcihcclxuICAgICAgICAgIChzaXplKSA9PiBzaXplLnByb2R1Y3QgPT09IHRoaXMuY3VycmVudElkXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMuc29ydCgoYSwgYikgPT4gKGEuc2l6ZSA8IGIuc2l6ZSA/IC0xIDogMSkpO1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmZpbHRlcmVkVmFyaWFudHMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKnF1ZXN0YSBmdW56aW9uZSBzZW1icmEgc29sbyBnZXN0aXJlIGlsIG1heCBpbnB1dCAqL1xyXG4gIHNlbGVjdFNpemUoZXZlbnQ6IGFueSwgaW5kZXgpIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJmaWx0ZXJlZFZhcmlhbnRzOiBcIiArIHRoaXMuZmlsdGVyZWRWYXJpYW50cyk7XHJcbiAgICB0aGlzLmNsaWNrZWRJbmRleCA9IGluZGV4O1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuYnV0dG9uID0gZmFsc2U7XHJcbiAgICBjb25zdCB0ZW1wID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTDtcclxuICAgLy8gLy9jb25zb2xlLmxvZyh0ZW1wKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkU2l6ZSA9IHRoaXMuZmlsdGVyZWRWYXJpYW50cy5maWx0ZXIoKHgpID0+IHguc2l6ZSA9PT0gdGVtcCk7XHJcbiAgIC8vIC8vY29uc29sZS5sb2coXCJzZWxlY3RlZCBzaXplPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRTaXplKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSA+PSAxKSB7XHJcbiAgICAgIHRoaXMubWluSW52ID0gMTtcclxuICAgICAgdGhpcy5tYXhJbnYgPSB0aGlzLnNlbGVjdGVkU2l6ZVswXS5pbnZlbnRvcnk7XHJcbiAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyhcImltIGRvaW5nIHNvbWV0aGluZyAtPiBzZWxlY3RTaXplKClcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQcm9kQnluYW1lKCkge1xyXG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlOYW1lKHRoaXMucHJvZE5hbWUpLnN1YnNjcmliZSgocHJvZHVjdHMpID0+IHtcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xyXG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0cyk7XHJcblxyXG4gICAgICB0aGlzLmxlbiA9IHRoaXMucHJvZHVjdHMubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuOyBpKyspIHtcclxuICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xyXG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzW2ldLmNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xyXG5cclxuICAgICAgaWYgKHRoaXMubGVuID4gMSkge1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldFdQcm9kQnluYW1lKCkge1xyXG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlOYW1lKHRoaXMuV19wcm9kbmFtZSkuc3Vic2NyaWJlKFxyXG4gICAgICAocHJvZHVjdHMpID0+IHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpO1xyXG5cclxuICAgICAgICB0aGlzLmxlbiA9IHRoaXMucHJvZHVjdHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5jb2xvcnMucHVzaCh0aGlzLnByb2R1Y3RzW2ldLmNvbG9yKTtcclxuICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzW2ldLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY29sb3JzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGVuID4gMSkge1xyXG4gICAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDb2xvcihwcm9kSWQpIHtcclxuICAgLy8gLy9jb25zb2xlLmxvZyhwcm9kSWQpO1xyXG4gICAgdGhpcy5fZ2V0UHJvZHVjdChwcm9kSWQpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3Byb2R1Y3RzLycgKyBwcm9kSWRdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0V0NvbG9yKHByb2RJZCkge1xyXG4gICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XHJcbiAgICB0aGlzLl9nZXRXcHJvZHVjdChwcm9kSWQpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3dvbWVuLXByb2R1Y3RzLycgKyBwcm9kSWRdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VsZWN0ZWRTaXplKGluZGV4KXtcclxuXHJcblxyXG4gICAgdGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XTtcclxuICAgIC8vY29uc29sZS5sb2coXCJpbmRleCA6IFwiICsgaW5kZXgpO1xyXG4gICAgdGhpcy5jbGlja2VkSW5kZXggPSBpbmRleDtcclxuICAgIC8vY29uc29sZS5sb2coXCJzaXplID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdKSk7XHJcbiAgICBsZXQgc2VsZWN0ZWRWYXJpYW50ID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XTtcclxuICAgIGxldCBzZWxlY3RlZFZhcmlhbnRJZCA9IHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF0uaWQ7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhcInNlbGVjdGVkVmFyaWFudElkIFwiICsgc2VsZWN0ZWRWYXJpYW50SWQgKTtcclxuXHJcbiAgICBsZXQgc2VsZWN0ZWRQcm9kdWN0VmFyaWFudCA9IHRoaXMuY2FydC5nZXRWYXJpYW50QnlJZChzZWxlY3RlZFZhcmlhbnRJZCk7XHJcbiAgICBpZihzZWxlY3RlZFByb2R1Y3RWYXJpYW50ICE9IG51bGwpe1xyXG4gICAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZFByb2R1Y3RWYXJpYW50LmdldEpzb24oKSk7XHJcbiAgICB0aGlzLm1heEludiA9IHNlbGVjdGVkUHJvZHVjdFZhcmlhbnQuZ2V0SW52ZW50b3J5KCk7XHJcbiAgICBpZih0aGlzLm1heEludj09PTAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9IHRydWU7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIGFscmVhZHkgaW5zaWRlIHRoZSBjYXJ0LCB0aGUgbWF4SW52IGlzOiBcIiArIHRoaXMubWF4SW52KTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLm1heEludiA9IHNlbGVjdGVkVmFyaWFudC5pbnZlbnRvcnk7XHJcbiAgICAgIGlmKHRoaXMubWF4SW52PT09MCAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9ICB0cnVlO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwidGhpcyBwcm9kdWN0IGlzIE5PVCBpbnNpZGUgdGhlIGNhcnQsIHRoZSBtYXhJbnYgaXM6IFwiICsgdGhpcy5tYXhJbnYpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrUXVhbnRpdHkoKXtcclxuICAgIGlmKCB0aGlzLnF1YW50aXR5ICE9IDApe1xyXG4gICAgICB0aGlzLmJ1dHRvbiA9ICBmYWxzZTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLmJ1dHRvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3ZhIEZsYXQnIHJlbD0nc3R5bGVzaGVldCc+XHJcbjxkaXYgY2xhc3M9XCJwcm9kdWN0LXBhZ2VcIiAqbmdJZj1cInByb2R1Y3RcIj5cclxuICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG4gICAgPGVlc2hvcC1mcm9udGVuZC1tZXNzYWdlcyBzdHlsZT1cIm1heC13aWR0aDo0MHZ3XCIgKm5nSWY9XCJkaXNwbGF5U3VjY2Vzc0Jhbm5lclwiPjwvZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtbmFtZS1zbSBzbTpjb2wtMTJcIj5cclxuXHJcbiAgICAgIDxoMSBzdHlsZT1cImZvbnQtZmFtaWx5OiAnQ29taWMgU2FucyBNUycsICdDaGFsa2JvYXJkIFNFJywgJ0NvbWljIE5ldWUnLCBzYW5zLXNlcmlmO1wiPnt7cHJvZHVjdC5uYW1lfX08L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZy1zbVwiPlxyXG4gICAgICAgICAgICA8cC1yYXRpbmcgWyhuZ01vZGVsKV09XCJwcm9kdWN0LnJhdGluZ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCIgW2NhbmNlbF09XCJmYWxzZVwiPjwvcC1yYXRpbmc+XHJcbiAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcHJpY2Utc21cIj5cclxuICAgICAge3twcm9kdWN0LnByaWNlIHwgY3VycmVuY3l9fVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTcgZ2FsbGVyeSAgXCIgIHN0eWxlPVwiICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgd2hpdGU7XCI+XHJcbiAgICAgIDx1aS1nYWxsZXJ5ICBbaW1hZ2VzXT1cInByb2R1Y3QuaW1hZ2VzXCIgW2ltYWdlXT1cInByb2R1Y3QuaW1hZ2VcIiBbcHJvZHVjdF09XCJwcm9kdWN0XCI+PC91aS1nYWxsZXJ5PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMCBjb2wtbWQtNCBwcm9kdWN0XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAyNTVweCA0NXB4IDIyNXB4IDE1cHgvMTVweCAxMnB4IDE1cHggMjU1cHg7XHJcbiAgICBwYWRkaW5nOjFlbTtcclxuICBsaW5lLWhlaWdodDoxLjVlbTtcclxuICAgIGJvcmRlcjpzb2xpZCA1cHggcmdiKDAsIDAsIDApO1wiXHJcblxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1uYW1lXCI+XHJcbiAgICAgICAgPGgxIHN0eWxlPVwiZm9udC1mYW1pbHk6ICdDb21pYyBTYW5zIE1TJywgJ0NoYWxrYm9hcmQgU0UnLCAnQ29taWMgTmV1ZScsIHNhbnMtc2VyaWY7XCI+e3twcm9kdWN0Lm5hbWV9fTwvaDE+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8cC1yYXRpbmcgWyhuZ01vZGVsKV09XCJwcm9kdWN0LnJhdGluZ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCIgW2NhbmNlbF09XCJmYWxzZVwiPjwvcC1yYXRpbmc+XHJcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICB7e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeX19XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInNtOmNvbC0xMiBtZDpjb2wtMTIgbGc6Y29sLTEyIHhsOmNvbC0xMiBwdC0yIHBiLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxyXG5cclxuPGRpdiAqbmdJZj1cIm1lblByb2RcIj5cclxuICA8ZGl2IGNsYXNzPVwiY29sb3JzIGNvbC0xMlwiICpuZ0lmPVwibXVsdGlwbGVDb2xvcnNcIj5cclxuICAgIDxoMj5Db2xvcnM8L2gyPlxyXG4gICAgPGRpdiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJwcm9kdWN0LmNvbG9yXCIgY2xhc3M9XCJjaXJjbGVcIiAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0cywgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgIChjbGljayk9XCJzZWxlY3RDb2xvcihwcm9kdWN0LmlkKVwiPjwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcbjxkaXYgKm5nSWY9XCJ3UHJvZFwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb2xvcnMgY29sLTEyXCIgKm5nSWY9XCJtdWx0aXBsZUNvbG9yc1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+XHJcbiAgICA8aDI+Q29sb3JzPC9oMj5cclxuICAgIDxkaXYgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwicHJvZHVjdC5jb2xvclwiIGNsYXNzPVwiY2lyY2xlXCJcclxuICAgICAgKm5nRm9yPVwibGV0IHByb2R1Y3Qgb2YgcHJvZHVjdHMsIGxldCBpID0gaW5kZXhcIiAoY2xpY2spPVwic2VsZWN0V0NvbG9yKHByb2R1Y3QuaWQpXCI+PC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpemVzIGNvbC0xMlwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDEwcHg7XCI+U2l6ZXM8L2gyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFtuZ0NsYXNzXT1cIntnb2xkOiBjbGlja2VkSW5kZXggPT09IGl9XCIgY2xhc3M9XCJzaXplIFwiIFtkaXNhYmxlZF09XCJmLmF2YWlsYWJsZT8gZmFsc2UgOiB0cnVlXCJcclxuICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBmaWx0ZXJlZFZhcmlhbnRzLCBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdFNpemUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInVwZGF0ZVNlbGVjdGVkU2l6ZShpKVwiPnt7Zi5zaXplfX08L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXF1YW50aXR5XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJxdWFudGl0eVwiPlF1YW50aXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8cC1pbnB1dE51bWJlciBbKG5nTW9kZWwpXT1cInF1YW50aXR5XCIgaW5wdXRJZD1cInF1YW50aXR5XCIgbW9kZT1cImRlY2ltYWxcIiBbc2hvd0J1dHRvbnNdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBbbWluXT1cIjBcIiBbbWF4XT1cIm1heEludlwiIChjbGljayk9XCJjaGVja1F1YW50aXR5KClcIj5cclxuICAgICAgICAgICAgICA8L3AtaW5wdXROdW1iZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiIHByb2R1Y3QtYWN0aW9uIGNvbC0xMlwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImJ1dHRvblwiIHBCdXR0b24gcFJpcHBsZSB0eXBlPVwiYnV0dG9uXCIgbGFiZWw9XCJBZGQgdG8gY2FydFwiIGNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkUHJvZHVjdFRvQ2FydCgpXCI+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbjwhLS1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwid1Byb2RcIiBjbGFzcz1cIiBwcm9kdWN0LWFjdGlvbiBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cInNlbGVjdGVkXCIgcEJ1dHRvbiBwUmlwcGxlIHR5cGU9XCJidXR0b25cIiBsYWJlbD1cIkFkZCB0byBjYXJ0XCIgY2xhc3M9XCJwLWJ1dHRvbi1yb3VuZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZFdQcm9kdWN0VG9DYXJ0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBkZXNjLWJveFwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1mYW1pbHk6ICdOb3ZhIEZsYXQnO2ZvbnQtc2l6ZTogMjJweDsgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtMzAwKTsgbWFyZ2luLXRvcDogMTBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM2ODJlNDI5YiwgIzY4MmU0MjEzKTtcclxuICAgIHBhZGRpbmc6MWVtO1xyXG4gIGxpbmUtaGVpZ2h0OjEuNWVtO1xyXG4gICAgYm9yZGVyOnNvbGlkIDVweCByZ2IoMCwgMCwgMCk7XCI+XHJcbiAgICAgIDxoMSBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHdoaXRlOyBcIj5Qcm9kdWN0IGRlc2NyaXB0aW9uPC9oMT5cclxuICAgICAgPGhyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiIHN0eWxlPVwiIHBhZGRpbmctbGVmdDogNXZ3OyBwYWRkaW5nLXJpZ2h0OiA1dnc7IHBhZGRpbmctdG9wOiAzdnc7ICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XCIgW2lubmVySFRNTF09XCJwcm9kdWN0LmRlc2NyaXB0aW9uXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==