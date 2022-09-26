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
    i0.ɵɵelement(0, "eeshop-frontend-messages", 31);
} }
function ProductPageComponent_div_1_div_21_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_div_21_div_1_div_3_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const product_r7 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(4); return ctx_r9.selectColor(product_r7.id); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    i0.ɵɵstyleProp("background-color", product_r7.color);
} }
function ProductPageComponent_div_1_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "h2");
    i0.ɵɵtext(2, "Colors");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProductPageComponent_div_1_div_21_div_1_div_3_Template, 1, 2, "div", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r5.products);
} }
function ProductPageComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ProductPageComponent_div_1_div_21_div_1_Template, 4, 1, "div", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.multipleColors);
} }
function ProductPageComponent_div_1_div_23_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵlistener("click", function ProductPageComponent_div_1_div_23_div_1_div_3_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r16); const product_r13 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(4); return ctx_r15.selectWColor(product_r13.id); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r13 = ctx.$implicit;
    i0.ɵɵstyleProp("background-color", product_r13.color);
} }
function ProductPageComponent_div_1_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "h2");
    i0.ɵɵtext(2, "Colors");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ProductPageComponent_div_1_div_23_div_1_div_3_Template, 1, 2, "div", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r11.products);
} }
function ProductPageComponent_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵtemplate(1, ProductPageComponent_div_1_div_23_div_1_Template, 4, 1, "div", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.multipleColors);
} }
const _c0 = function (a0) { return { gold: a0 }; };
function ProductPageComponent_div_1_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
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
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(35, "div", 27)(36, "h1", 28);
    i0.ɵɵtext(37, "Product description");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(38, "hr")(39, "div", 29);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "div", 16);
    i0.ɵɵelement(41, "div", 30);
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
ProductPageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["eshop-frontend-product-page"]], decls: 2, vars: 1, consts: [["href", "https://fonts.googleapis.com/css?family=Nova Flat", "rel", "stylesheet"], ["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "grid"], ["style", "max-width:40vw", 4, "ngIf"], [1, "product-name-sm", "sm:col-12"], [2, "font-family", "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif"], [1, "product-price-sm"], [1, "row", 2, "justify-content", "space-around"], [1, "col-12", "col-md-7", "gallery", 2, "border-right", "10px solid white"], [3, "images", "image", "product"], [1, "col-10", "col-md-5", "product", 2, "display", "flex", "flex-direction", "column", "align-items", "center", "padding", "1em", "line-height", "1.5em"], [1, "product-name"], [1, "product-price"], [1, "sm:col-12", "md:col-12", "lg:col-12", "xl:col-12", "pt-2", "pb-4"], [4, "ngIf"], [1, "row", 2, "justify-content", "center"], ["style", "width: 100%;", 4, "ngIf"], [1, "sizes", "col-12", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [2, "padding-right", "10px"], ["class", "size ", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "product-quantity", 2, "display", "flex", "width", "100%", "flex-direction", "row", "justify-content", "center", "align-items", "center"], [1, "", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["for", "quantity"], ["inputId", "quantity", "mode", "decimal", 3, "ngModel", "showButtons", "min", "max", "ngModelChange", "click"], [1, "product-action", "col-12", 2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Add to cart", 1, "", 3, "disabled", "click"], [1, "col-12", "desc-box"], [2, "text-align", "center", "color", "black", "font-size", "18px"], [1, "desc", 3, "innerHTML"], [1, "col-7"], [2, "max-width", "40vw"], ["class", "colors col-12", 4, "ngIf"], [1, "colors", "col-12"], ["class", "circle", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "circle", 3, "click"], [2, "width", "100%"], ["class", "colors col-12", "style", "width: 100%;", 4, "ngIf"], [1, "colors", "col-12", 2, "width", "100%"], [1, "size", 3, "ngClass", "disabled", "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵtemplate(1, ProductPageComponent_div_1_Template, 42, 21, "div", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.product);
    } }, directives: [i7.NgIf, i9.GalleryComponent, i7.NgForOf, i7.NgClass, i10.InputNumber, i11.NgControlStatus, i11.NgModel, i12.ButtonDirective], pipes: [i7.CurrencyPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-page', styles: [], template: "<link href='https://fonts.googleapis.com/css?family=Nova Flat' rel='stylesheet'>\n<div class=\"product-page\" *ngIf=\"product\">\n  <div class=\"grid\">\n    <eeshop-frontend-messages style=\"max-width:40vw\" *ngIf=\"displaySuccessBanner\"></eeshop-frontend-messages>\n    <div class=\"product-name-sm sm:col-12\">\n\n      <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\n    </div>\n    <!--\n        <div class=\"rating-sm\">\n            <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\n        </div> -->\n    <div class=\"product-price-sm\">\n      {{product.price | currency}}\n    </div>\n\n    <div class=\"row\" style=\"justify-content: space-around\">\n    <div class=\"col-12 col-md-7 gallery\"  style=\"  border-right: 10px solid white;\">\n      <ui-gallery  [images]=\"product.images\" [image]=\"product.image\" [product]=\"product\"></ui-gallery>\n    </div>\n\n    <div class=\"col-10 col-md-5 product\" style=\"display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding:1em;\n  line-height:1.5em;\"\n>\n      <div class=\"product-name\">\n        <h1 style=\"font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;\">{{product.name}}</h1>\n\n      </div>\n      <!--\n            <div class=\"rating\">\n                <p-rating [(ngModel)]=\"product.rating\" [disabled]=\"true\" [cancel]=\"false\"></p-rating>\n            </div> -->\n      <div class=\"product-price\">\n        {{product.price | currency}}\n      </div>\n\n      <div class=\"sm:col-12 md:col-12 lg:col-12 xl:col-12 pt-2 pb-4\">\n        <div class=\"grid\">\n\n<div *ngIf=\"menProd\">\n  <div class=\"colors col-12\" *ngIf=\"multipleColors\">\n    <h2>Colors</h2>\n    <div [style.background-color]=\"product.color\" class=\"circle\" *ngFor=\"let product of products, let i = index\"\n      (click)=\"selectColor(product.id)\"></div>\n\n  </div>\n\n</div>\n\n<div class=\"row\" style=\"justify-content: center;\">\n<div *ngIf=\"wProd\" style=\"width: 100%;\">\n\n  <div class=\"colors col-12\" *ngIf=\"multipleColors\" style=\"width: 100%;\">\n    <h2>Colors</h2>\n    <div [style.background-color]=\"product.color\" class=\"circle\"\n      *ngFor=\"let product of products, let i = index\" (click)=\"selectWColor(product.id)\"></div>\n\n  </div>\n</div>\n</div>\n\n          <div class=\"sizes col-12\" style=\"display: flex;\n          flex-direction: row;\n          justify-content: center;\n          align-items: center;\">\n            <h2 style=\"padding-right: 10px;\">Sizes</h2>\n            <button [ngClass]=\"{gold: clickedIndex === i}\" class=\"size \" [disabled]=\"f.available? false : true\"\n              *ngFor=\"let f of filteredVariants, let i = index\" (click)=\"selectSize($event)\"\n              (click)=\"updateSelectedSize(i)\">{{f.size}}</button>\n          </div>\n\n          <div class=\"product-quantity\" style=\"display: flex; width: 100%;\n          flex-direction: row;\n          justify-content: center;\n          align-items: center;\">\n            <div class=\"\" style=\"display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\">\n              <label for=\"quantity\">Quantity</label>\n              <p-inputNumber [(ngModel)]=\"quantity\" inputId=\"quantity\" mode=\"decimal\" [showButtons]=\"true\"\n                [min]=\"0\" [max]=\"maxInv\" (click)=\"checkQuantity()\">\n              </p-inputNumber>\n            </div>\n          </div>\n          <div class=\" product-action col-12\" style=\"display: flex;\n          flex-direction: row;\n          justify-content: center;\n          align-items: center;\">\n            <button [disabled]=\"button\" pButton pRipple type=\"button\" label=\"Add to cart\" class=\"\"\n              (click)=\"addProductToCart()\">\n            </button>\n          </div>\n        </div>\n\n      </div> \n\n      <div class=\"col-12 desc-box\">\n\n        <h1 style=\"text-align: center; color: black; font-size: 18px;\">Product description</h1>\n        <hr>\n        <div class=\"desc\" [innerHTML]=\"product.description\"></div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row\" style=\"justify-content: center;\">\n    <div class=\"col-7\"></div>\n    <!-- <div class=\"col-5 desc-box\" style=\"font-weight: 600; font-family: 'Nova Flat';font-size: 22px;    border-top: 1px solid var(--surface-300); margin-top: 10px; background: linear-gradient(#682e429b, #682e4213);\n    padding:1em;\n  line-height:1.5em;\n    border:solid 5px rgb(0, 0, 0);\">\n      <h1 style=\"text-align: center; color: white; \">Product description</h1>\n      <hr>\n      <div class=\"desc\" style=\" padding-left: 5vw; padding-right: 5vw; padding-top: 3vw;  display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n      text-align: center;\" [innerHTML]=\"product.description\"></div>\n    </div> -->\n  </div>\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.W_ProductsService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.CartService }, { type: i5.VariantsService }, { type: i6.MessageService }, { type: i4.CartIconComponent }, { type: i7.Location }, { type: i8.Cart }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQVEsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNqQjlELCtDQUF5Rzs7OztJQTBDekcsK0JBQ29DO0lBQWxDLGlQQUFTLGlDQUF1QixJQUFDO0lBQUMsaUJBQU07OztJQURyQyxvREFBd0M7OztJQUYvQywrQkFBa0QsU0FBQTtJQUM1QyxzQkFBTTtJQUFBLGlCQUFLO0lBQ2YseUZBQzBDO0lBRTVDLGlCQUFNOzs7SUFINkUsZUFBYTtJQUFiLHlDQUFhOzs7SUFIbEcsMkJBQXFCO0lBQ25CLG1GQUtNO0lBRVIsaUJBQU07OztJQVB3QixlQUFvQjtJQUFwQiw0Q0FBb0I7Ozs7SUFjOUMsK0JBQ3FGO0lBQW5DLG1QQUFTLG9DQUF3QixJQUFDO0lBQUMsaUJBQU07OztJQUR0RixxREFBd0M7OztJQUYvQywrQkFBdUUsU0FBQTtJQUNqRSxzQkFBTTtJQUFBLGlCQUFLO0lBQ2YseUZBQzJGO0lBRTdGLGlCQUFNOzs7SUFGa0IsZUFBYTtJQUFiLDBDQUFhOzs7SUFMdkMsK0JBQXdDO0lBRXRDLG1GQUtNO0lBQ1IsaUJBQU07OztJQU53QixlQUFvQjtJQUFwQiw0Q0FBb0I7Ozs7O0lBY3RDLGtDQUVrQztJQURrQixvTEFBUywwQkFBa0IsSUFBQyxzTkFDckUsaUNBQXFCLElBRGdEO0lBQzlDLFlBQVU7SUFBQSxpQkFBUzs7Ozs7SUFGN0MsbUZBQXNDLDRDQUFBO0lBRVosZUFBVTtJQUFWLGdDQUFVOzs7O0lBdEV4RCw4QkFBMEMsYUFBQTtJQUV0QyxxSEFBeUc7SUFDekcsOEJBQXVDLFlBQUE7SUFFZ0QsWUFBZ0I7SUFBQSxpQkFBSyxFQUFBO0lBTTVHLDhCQUE4QjtJQUM1QixZQUNGOztJQUFBLGlCQUFNO0lBRU4sOEJBQXVELGNBQUE7SUFFckQsa0NBQWdHO0lBQ2xHLGlCQUFNO0lBRU4sZ0NBS0gsZUFBQSxhQUFBO0lBRTRGLGFBQWdCO0lBQUEsaUJBQUssRUFBQTtJQU81RyxnQ0FBMkI7SUFDekIsYUFDRjs7SUFBQSxpQkFBTTtJQUVOLGdDQUErRCxjQUFBO0lBR3JFLDhFQVFNO0lBRU4sZ0NBQWtEO0lBQ2xELDhFQVFNO0lBQ04saUJBQU07SUFFSSxnQ0FHc0IsY0FBQTtJQUNhLHNCQUFLO0lBQUEsaUJBQUs7SUFDM0Msb0ZBRXFEO0lBQ3ZELGlCQUFNO0lBRU4sZ0NBR3NCLGVBQUEsaUJBQUE7SUFLSSx5QkFBUTtJQUFBLGlCQUFRO0lBQ3RDLDBDQUNxRDtJQUR0Qyw4TkFBc0IsOEpBQ0QsdUJBQWUsSUFEZDtJQUVyQyxpQkFBZ0IsRUFBQSxFQUFBO0lBR3BCLGdDQUdzQixrQkFBQTtJQUVsQixvS0FBUywwQkFBa0IsSUFBQztJQUM5QixpQkFBUyxFQUFBLEVBQUEsRUFBQTtJQU1mLGdDQUE2QixjQUFBO0lBRW9DLG9DQUFtQjtJQUFBLGlCQUFLO0lBQ3ZGLHNCQUFJLGVBQUE7SUFFTixpQkFBTSxFQUFBLEVBQUE7SUFJVixnQ0FBa0Q7SUFDaEQsMkJBQXlCO0lBWTNCLGlCQUFNLEVBQUEsRUFBQTs7O0lBdkg4QyxlQUEwQjtJQUExQixrREFBMEI7SUFHVyxlQUFnQjtJQUFoQix5Q0FBZ0I7SUFPckcsZUFDRjtJQURFLDRFQUNGO0lBSWUsZUFBeUI7SUFBekIsOENBQXlCLCtCQUFBLDJCQUFBO0lBVWlELGVBQWdCO0lBQWhCLHlDQUFnQjtJQVFyRyxlQUNGO0lBREUsNkVBQ0Y7SUFLQSxlQUFhO0lBQWIscUNBQWE7SUFXYixlQUFXO0lBQVgsbUNBQVc7SUFpQlcsZUFBcUI7SUFBckIsaURBQXFCO0lBYXBCLGVBQXNCO0lBQXRCLHlDQUFzQixxQkFBQSxVQUFBLHNCQUFBO0lBUy9CLGVBQW1CO0lBQW5CLHdDQUFtQjtJQVliLGVBQWlDO0lBQWpDLHlFQUFpQzs7QUQ3RTNELE1BQU0sT0FBTyxvQkFBb0I7SUE0Qi9CLFlBQ1UsV0FBNEIsRUFDNUIsWUFBK0IsRUFDL0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLGNBQStCLEVBRS9CLGNBQThCLEVBQzlCLElBQXVCLEVBQ3ZCLFFBQWtCLEVBQ2xCLElBQVc7UUFWWCxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFFL0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsU0FBSSxHQUFKLElBQUksQ0FBTztRQXBDckIsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBYyxFQUFFLENBQUM7UUFHakMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxhQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUU1QixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBRXRCLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN2QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGlCQUFZLEdBQWMsRUFBRSxDQUFDO1FBQzdCLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBb0JqQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7SUFBQSxDQUFDO0lBRW5DLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUt0QiwrQ0FBK0M7UUFHL0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtvQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDbEMsMENBQTBDO29CQUMzQyxpQ0FBaUM7b0JBQ2hDLG9DQUFvQztvQkFDcEMsa0NBQWtDO2lCQUNuQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO29CQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNsQywwQ0FBMEM7b0JBQzNDLGlDQUFpQztvQkFDaEMsb0NBQW9DO29CQUNwQyxrQ0FBa0M7aUJBQ25DO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFFTCxFQUFFO1FBQ0UsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3ZCLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUNBLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFHTixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQjtRQUVkLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFFeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDL0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBRXpDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQ3JDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBSSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUVqRCxvRkFBb0Y7Z0JBQy9FLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUNqQixJQUFJLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUUxRCwwREFBMEQ7Z0JBQzFELElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7b0JBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztpQkFDbkI7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztvQkFDdEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLE9BQU8sRUFBRSxTQUFTO29CQUNsQixNQUFNLEVBQUUsd0JBQXdCO2lCQUNqQyxDQUFDLENBQUM7YUFHTjtpQkFBSTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLCtFQUErRTtnQkFDOUUsSUFBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDMUQsMERBQTBEO2dCQUMxRCxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO29CQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7aUJBQ25CO2dCQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7b0JBQ3RCLFFBQVEsRUFBRSxTQUFTO29CQUNuQixPQUFPLEVBQUUsU0FBUztvQkFDbEIsTUFBTSxFQUFFLHdCQUF3QjtpQkFDakMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7SUFJTyxXQUFXLENBQUMsRUFBVTtRQUM1QixJQUFJLENBQUMsV0FBVzthQUNiLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7O09BR0c7SUFDSyxLQUFLLENBQUMsWUFBWTtRQUV4QixJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBYyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsV0FBVztpQkFDZixVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUN6QiwrREFBK0Q7Z0JBQzlELElBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFM0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBR2QsQ0FBQztJQUVPLFlBQVksQ0FBQyxFQUFVO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGNBQWM7YUFDaEIsV0FBVyxFQUFFO2FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUMxQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUMxQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSx3Q0FBd0M7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxjQUFjO2FBQ2hCLFdBQVcsRUFBRTthQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDMUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FDMUMsQ0FBQztZQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsd0NBQXdDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNEQUFzRDtJQUN0RCxVQUFVLENBQUMsS0FBVSxFQUFFLEtBQUs7UUFDMUIsNERBQTREO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQyx1QkFBdUI7UUFFdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQzFFLHdFQUF3RTtRQUV2RSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLHVEQUF1RDtTQUN6RDtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDMUIsZ0NBQWdDO1lBRS9CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLHlDQUF5QzthQUN6QztZQUNGLDhCQUE4QjtZQUU3QixJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzthQUM3QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGNBQWM7UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQzFELENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUMxQixnQ0FBZ0M7WUFFL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUMseUNBQXlDO2FBQ3pDO1lBQ0YsOEJBQThCO1lBRTdCLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQU07UUFDakIseUJBQXlCO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQU07UUFDbEIseUJBQXlCO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFLO1FBR3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsd0VBQXdFO1FBQ3hFLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFeEQseURBQXlEO1FBRXpELElBQUksc0JBQXNCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN6RSxJQUFHLHNCQUFzQixJQUFJLElBQUksRUFBQztZQUNsQyxnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwRCxJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQztnQkFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM3RCx3RkFBd0Y7U0FDdkY7YUFBSTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUN4QyxJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUcsQ0FBQyxJQUFLLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQztnQkFBQyxJQUFJLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQztZQUMvRCxvRkFBb0Y7U0FDckY7SUFFSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBSSxLQUFLLENBQUM7U0FDdEI7YUFBSTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7d0ZBbFdVLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDM0JqQywwQkFBZ0Y7UUFDaEYsdUVBMkhNOztRQTNIcUIsZUFBYTtRQUFiLGtDQUFhOzt1RkQwQjNCLG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLDZCQUE2QixVQUUvQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cblxuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBQcm9kdWN0THVjYSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG5pbXBvcnQgeyBDYXJ0U2VydmljZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC9vcmRlcnMnO1xuaW1wb3J0IHsgU3ViamVjdCwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ2FydEljb25Db21wb25lbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcbmltcG9ydCB7IFZhcmlhbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdmFyaWFudCc7XG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgV19Qcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3ctcHJvZHVjdCc7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IFdfUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdy1wcm9kdWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IFZhcmlhbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ZhcmlhbnRzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0LXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNsaWNrZWRJbmRleDogbnVtYmVyO1xuICB2YXJpYW50OiBWYXJpYW50O1xuICB2YXJpYW50czogVmFyaWFudFtdID0gW107XG4gIGZpbHRlcmVkVmFyaWFudHM6IFZhcmlhbnRbXSA9IFtdO1xuICBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuICBXX3Byb2R1Y3Q6IFdfUHJvZHVjdDtcbiAgcHJvZE5hbWUgPSAnJztcbiAgV19wcm9kbmFtZSA9ICcnO1xuICBtZW5Qcm9kID0gdHJ1ZTtcbiAgd1Byb2QgPSBmYWxzZTtcbiAgcHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBsZW46IG51bWJlcjtcbiAgY29sb3JzOiBzdHJpbmdbXSA9IFtdO1xuICBtdWx0aXBsZUNvbG9yczogYm9vbGVhbjtcbiAgZW5kU3VicyQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHF1YW50aXR5ID0gMDtcbiAgY3VycmVudElkO1xuICBkaXNwbGF5U3VjY2Vzc0Jhbm5lciA9IGZhbHNlO1xuICBzZWxlY3RlZCA9IGZhbHNlO1xuICBidXR0b24gPSB0cnVlO1xuICBzZWxlY3RlZFNpemU6IFZhcmlhbnRbXSA9IFtdO1xuICBhdmFpbGFiaWxpdHk6IGFueVtdID0gW107XG4gIGF2YWlsYWJsZTogYm9vbGVhbjtcbiAgbWluSW52OiBudW1iZXI7XG4gIG1heEludjogbnVtYmVyO1xuICB1cmw7XG4gIHA6IFByb2R1Y3RMdWNhO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBXcHJvZFNlcnZpY2U6IFdfUHJvZHVjdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB2YXJpYW50U2VydmljZTogVmFyaWFudHNTZXJ2aWNlLFxuXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpY29uOiBDYXJ0SWNvbkNvbXBvbmVudCxcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIGNhcnQgOiBDYXJ0XG5cblxuICApIHsgICAgIHRoaXMucCA9IG5ldyBQcm9kdWN0THVjYSgpfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXZhaWxhYmxlID0gdHJ1ZTtcblxuXG5cblxuICAgIC8vY29uc29sZS5sb2coXCJjYXJ0ID0gXCIgKyB0aGlzLmNhcnQuZ2V0SnNvbigpKTtcblxuXG4gICAgdGhpcy51cmwgPSB0aGlzLnJvdXRlLnVybDtcblxuICAgIGlmICh0aGlzLnVybC52YWx1ZVswXS5wYXRoID09PSAncHJvZHVjdHMnKSB7XG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLnByb2R1Y3RJZCkge1xuICAgICAgICAgIHRoaXMuX2dldFByb2R1Y3QocGFyYW1zLnByb2R1Y3RJZCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBwYXJhbXMucHJvZHVjdElkO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJwcm9kdWN0PSBcIiArIHRoaXMucHJvZHVjdCk7XG4gICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTtcbiAgICAgICAgICAvLyB0aGlzLnByb2ROYW1lID0gdGhpcy5wcm9kdWN0Lm5hbWVcbiAgICAgICAgICAvLy8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9nZXRTaXplcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndQcm9kID0gdHJ1ZTtcbiAgICAgIHRoaXMubWVuUHJvZCA9IGZhbHNlO1xuICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5wcm9kdWN0SWQpIHtcbiAgICAgICAgICB0aGlzLl9nZXRXcHJvZHVjdChwYXJhbXMucHJvZHVjdElkKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5wcm9kdWN0SWQ7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcInByb2R1Y3Q9IFwiICsgdGhpcy5wcm9kdWN0KTtcbiAgICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xuICAgICAgICAgIC8vIHRoaXMucHJvZE5hbWUgPSB0aGlzLnByb2R1Y3QubmFtZVxuICAgICAgICAgIC8vLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2ROYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2dldFdTaXplcygpO1xuICAgIH1cblxuLy9cbiAgICB0aGlzLnAgPSBuZXcgUHJvZHVjdEx1Y2EoKTtcbiAgICB0aGlzLl9nZXRQcm9kdWN0MigpLnRoZW4oXG4gICAgIGRhdGEgPT57XG4gICAgICAgdGhpcy5wID0gZGF0YTtcbiAgICAgfVxuICAgICApLmNhdGNoKCBlcnJvciA9PntcbiAgICAgICB0aGlzLnAgPSBudWxsO1xuICAgICB9KTtcblxuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmVuZFN1YnMkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2UgaWwgcHJvZG90dG8gZXNpc3RlIGdpw6AsIGFnZ2l1bmdvIHVuYSB2YXJpYW50cywgc2Vubm8gYWdnaXVuZ28gdW4gbnVvdm8gcHJvZG90dG8gY29uIGxhIHN1YSB2YXJpYW50c1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYWRkUHJvZHVjdFRvQ2FydCgpIHtcblxuICAgIGlmKHRoaXMucXVhbnRpdHkgIT0gMCkge1xuXG4gICBsZXQgcFZhcmlhbnQgPSBuZXcgUHJvZHVjdFZhcmlhbnQodGhpcy5zZWxlY3RlZFNpemVbMF0uaWQsIHRoaXMuc2VsZWN0ZWRTaXplWzBdLnNpemUsIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSwgMCwgU3RyaW5nKHRoaXMuc2VsZWN0ZWRTaXplWzBdLmJhcmNvZGUpKTtcbiAgIGNvbnNvbGUubG9nKFwicFZhcmlhbnQgPSBcIiArIHBWYXJpYW50LmdldEpzb24oKSk7XG4gICBjb25zb2xlLmxvZyhcInRoaXMgcCA6IFwiICsgdGhpcy5wLmdldEpzb24oKSk7XG5cbiAgICAgIGlmKHRoaXMuY2FydC5jb250YWluc1Byb2R1Y3QodGhpcy5wKSl7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IGFscmVhZHkgZXhpc3RcIik7XG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jYXJ0LmdldFByb2R1Y3RJbmRleCh0aGlzLnApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXggOiBcIiArIGluZGV4KTtcbiAgICAgICAgICBsZXQgcHJvZHVjdCA9IHRoaXMuY2FydC5nZXRQcm9kdWN0KGluZGV4KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3QgOiBcIiArICBwcm9kdWN0LmdldEpzb24oKSk7XG4gICAgICAgICAgcHJvZHVjdC5hZGRWYXJpYW50KHBWYXJpYW50LCB0aGlzLnF1YW50aXR5KTtcblxuICAgICAvLyAgICAgdGhpcy5zZWxlY3RlZFNpemVbMF0uaW52ZW50b3J5IC09IHByb2R1Y3QuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcbiAgICAgICAgICB0aGlzLnAgPSBwcm9kdWN0O1xuICAgICAgICAgIHRoaXMubWF4SW52ID0gIHRoaXMucC5nZXRWYXJpYW50KHBWYXJpYW50KS5nZXRJbnZlbnRvcnkoKTtcblxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpIGhhdmUgc2V0IHRoZSBtYXhJbnYgdG86IFwiICsgdGhpcy5tYXhJbnYpO1xuICAgICAgICAgIGlmKHRoaXMubWF4SW52IDw9IDApe1xuICAgICAgICAgICAgdGhpcy5taW5JbnYgPSAwO1xuICAgICAgICAgICAgdGhpcy5xdWFudGl0eSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICAgIHRoaXMuY2FydC51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICB0aGlzLmNoZWNrUXVhbnRpdHkoKTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgZGV0YWlsOiBgUHJvZHVjdCBBZGRlZCB0byBjYXJ0IWBcbiAgICAgICAgICB9KTtcblxuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IGRvc24ndCBleGlzdFwiKTtcbiAgICAgICAgdGhpcy5wLmFkZFZhcmlhbnQocFZhcmlhbnQsIHRoaXMucXVhbnRpdHkpO1xuICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSAtPSB0aGlzLnAuZ2V0VmFyaWFudChwVmFyaWFudCkuZ2V0U2VsZWN0ZWQoKTtcbiAgICAgICAgdGhpcy5tYXhJbnYgPSAgdGhpcy5wLmdldFZhcmlhbnQocFZhcmlhbnQpLmdldEludmVudG9yeSgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaSBoYXZlIHNldCB0aGUgbWF4SW52IHRvOiBcIiArIHRoaXMubWF4SW52KTtcbiAgICAgICAgaWYodGhpcy5tYXhJbnYgPD0gMCl7XG4gICAgICAgICAgdGhpcy5taW5JbnYgPSAwO1xuICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgICB0aGlzLmNhcnQuYWRkUHJvZHVjdEx1Y2EodGhpcy5wKTtcbiAgICAgICAgdGhpcy5jaGVja1F1YW50aXR5KCk7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgc3VtbWFyeTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgIGRldGFpbDogYFByb2R1Y3QgQWRkZWQgdG8gY2FydCFgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICBwcml2YXRlIF9nZXRQcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlXG4gICAgICAuZ2V0UHJvZHVjdChpZClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcbiAgICAgICAgdGhpcy5wcm9kdWN0ID0gcmVzUHJvZHVjdDtcbiAgICAgICAgdGhpcy5wcm9kTmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lO1xuICAgICAgICB0aGlzLmdldFByb2RCeW5hbWUoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHJlc3RpdHVpc2NlIGlsIHByb2RvdHRvIGRlbGxhIHBhZ2luYVxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0UHJvZHVjdDIoKSB7XG5cbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFByb2R1Y3RMdWNhPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnByb2RTZXJ2aWNlXG4gICAgICAuZ2V0UHJvZHVjdCh0aGlzLmN1cnJlbnRJZClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmVuZFN1YnMkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc1Byb2R1Y3QpID0+IHtcbiAgICAgICAvLyAvL2NvbnNvbGUubG9nKFwicmVzIHByb2R1Y3Q6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzUHJvZHVjdCkpO1xuICAgICAgICBsZXQgcCA9IG5ldyBQcm9kdWN0THVjYSgpO1xuICAgICAgICBwLnNldElkKHJlc1Byb2R1Y3QuaWQpO1xuICAgICAgICBwLnNldERpc2NvdW50KHJlc1Byb2R1Y3QuZGlzY291bnQpO1xuICAgICAgICBwLnNldFByaWNlKHJlc1Byb2R1Y3QucHJpY2UpO1xuICAgICAgICBwLnNldFRoZU1haW5JbWFnZShyZXNQcm9kdWN0LmltYWdlKTtcbiAgICAgICAgcC5zZXROYW1lKHJlc1Byb2R1Y3QubmFtZSk7XG5cbiAgICAgICAgcmVzb2x2ZShwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBwcm9taXNlO1xuICAgIHJldHVybiBkYXRhO1xuXG5cbiAgfVxuXG4gIHByaXZhdGUgX2dldFdwcm9kdWN0KGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2RTZXJ2aWNlLmdldFByb2R1Y3QoaWQpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXNQcm9kdWN0KSA9PiB7XG4gICAgICAgIHRoaXMucHJvZHVjdCA9IHJlc1Byb2R1Y3Q7XG4gICAgICAgIHRoaXMuV19wcm9kbmFtZSA9IHRoaXMucHJvZHVjdC5uYW1lO1xuICAgICAgICB0aGlzLmdldFdQcm9kQnluYW1lKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIF9nZXRTaXplcygpIHtcbiAgICB0aGlzLnZhcmlhbnRTZXJ2aWNlXG4gICAgICAuZ2V0VmFyaWFudHMoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZSgodmFyaWFudHMpID0+IHtcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMgPSB0aGlzLnZhcmlhbnRzLmZpbHRlcihcbiAgICAgICAgICAoc2l6ZSkgPT4gc2l6ZS5wcm9kdWN0ID09PSB0aGlzLmN1cnJlbnRJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMuc29ydCgoYSwgYikgPT4gKGEuc2l6ZSA8IGIuc2l6ZSA/IC0xIDogMSkpO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5maWx0ZXJlZFZhcmlhbnRzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX2dldFdTaXplcygpIHtcbiAgICB0aGlzLnZhcmlhbnRTZXJ2aWNlXG4gICAgICAuZ2V0VmFyaWFudHMoKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKVxuICAgICAgLnN1YnNjcmliZSgodmFyaWFudHMpID0+IHtcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IHZhcmlhbnRzO1xuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMgPSB0aGlzLnZhcmlhbnRzLmZpbHRlcihcbiAgICAgICAgICAoc2l6ZSkgPT4gc2l6ZS5wcm9kdWN0ID09PSB0aGlzLmN1cnJlbnRJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHMuc29ydCgoYSwgYikgPT4gKGEuc2l6ZSA8IGIuc2l6ZSA/IC0xIDogMSkpO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5maWx0ZXJlZFZhcmlhbnRzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqcXVlc3RhIGZ1bnppb25lIHNlbWJyYSBzb2xvIGdlc3RpcmUgaWwgbWF4IGlucHV0ICovXG4gIHNlbGVjdFNpemUoZXZlbnQ6IGFueSwgaW5kZXgpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiZmlsdGVyZWRWYXJpYW50czogXCIgKyB0aGlzLmZpbHRlcmVkVmFyaWFudHMpO1xuICAgIHRoaXMuY2xpY2tlZEluZGV4ID0gaW5kZXg7XG4gICAgLy9jb25zb2xlLmxvZyhcImluZGV4IDogXCIgKyBpbmRleCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5idXR0b24gPSBmYWxzZTtcbiAgICBjb25zdCB0ZW1wID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTDtcbiAgIC8vIC8vY29uc29sZS5sb2codGVtcCk7XG5cbiAgICB0aGlzLnNlbGVjdGVkU2l6ZSA9IHRoaXMuZmlsdGVyZWRWYXJpYW50cy5maWx0ZXIoKHgpID0+IHguc2l6ZSA9PT0gdGVtcCk7XG4gICAvLyAvL2NvbnNvbGUubG9nKFwic2VsZWN0ZWQgc2l6ZT0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkU2l6ZSkpO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeSA+PSAxKSB7XG4gICAgICB0aGlzLm1pbkludiA9IDE7XG4gICAgICB0aGlzLm1heEludiA9IHRoaXMuc2VsZWN0ZWRTaXplWzBdLmludmVudG9yeTtcbiAgICAgIHRoaXMucXVhbnRpdHkgPSAwO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2coXCJpbSBkb2luZyBzb21ldGhpbmcgLT4gc2VsZWN0U2l6ZSgpXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdldFByb2RCeW5hbWUoKSB7XG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRQcm9kdWN0QnlOYW1lKHRoaXMucHJvZE5hbWUpLnN1YnNjcmliZSgocHJvZHVjdHMpID0+IHtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcblxuICAgICAgdGhpcy5sZW4gPSB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW47IGkrKykge1xuICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5wcm9kdWN0c1tpXS5jb2xvcik7XG4gICAgICB9XG4gICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xuXG4gICAgICBpZiAodGhpcy5sZW4gPiAxKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVDb2xvcnMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUNvbG9ycyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldFdQcm9kQnluYW1lKCkge1xuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0UHJvZHVjdEJ5TmFtZSh0aGlzLldfcHJvZG5hbWUpLnN1YnNjcmliZShcbiAgICAgIChwcm9kdWN0cykgPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKTtcblxuICAgICAgICB0aGlzLmxlbiA9IHRoaXMucHJvZHVjdHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmNvbG9ycy5wdXNoKHRoaXMucHJvZHVjdHNbaV0uY29sb3IpO1xuICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzW2ldLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jb2xvcnMpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbiA+IDEpIHtcbiAgICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm11bHRpcGxlQ29sb3JzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc2VsZWN0Q29sb3IocHJvZElkKSB7XG4gICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XG4gICAgdGhpcy5fZ2V0UHJvZHVjdChwcm9kSWQpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncHJvZHVjdHMvJyArIHByb2RJZF0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0V0NvbG9yKHByb2RJZCkge1xuICAgLy8gLy9jb25zb2xlLmxvZyhwcm9kSWQpO1xuICAgIHRoaXMuX2dldFdwcm9kdWN0KHByb2RJZCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd3b21lbi1wcm9kdWN0cy8nICsgcHJvZElkXSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZFNpemUoaW5kZXgpe1xuXG5cbiAgICB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdO1xuICAgIC8vY29uc29sZS5sb2coXCJpbmRleCA6IFwiICsgaW5kZXgpO1xuICAgIHRoaXMuY2xpY2tlZEluZGV4ID0gaW5kZXg7XG4gICAgLy9jb25zb2xlLmxvZyhcInNpemUgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsdGVyZWRWYXJpYW50c1tpbmRleF0pKTtcbiAgICBsZXQgc2VsZWN0ZWRWYXJpYW50ID0gdGhpcy5maWx0ZXJlZFZhcmlhbnRzW2luZGV4XTtcbiAgICBsZXQgc2VsZWN0ZWRWYXJpYW50SWQgPSB0aGlzLmZpbHRlcmVkVmFyaWFudHNbaW5kZXhdLmlkO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcInNlbGVjdGVkVmFyaWFudElkIFwiICsgc2VsZWN0ZWRWYXJpYW50SWQgKTtcblxuICAgIGxldCBzZWxlY3RlZFByb2R1Y3RWYXJpYW50ID0gdGhpcy5jYXJ0LmdldFZhcmlhbnRCeUlkKHNlbGVjdGVkVmFyaWFudElkKTtcbiAgICBpZihzZWxlY3RlZFByb2R1Y3RWYXJpYW50ICE9IG51bGwpe1xuICAgIC8vY29uc29sZS5sb2coc2VsZWN0ZWRQcm9kdWN0VmFyaWFudC5nZXRKc29uKCkpO1xuICAgIHRoaXMubWF4SW52ID0gc2VsZWN0ZWRQcm9kdWN0VmFyaWFudC5nZXRJbnZlbnRvcnkoKTtcbiAgICBpZih0aGlzLm1heEludj09PTAgfHwgdGhpcy5xdWFudGl0eSA9PT0gMCl0aGlzLmJ1dHRvbiA9IHRydWU7XG4gICAgLy9jb25zb2xlLmxvZyhcInRoaXMgcHJvZHVjdCBpcyBhbHJlYWR5IGluc2lkZSB0aGUgY2FydCwgdGhlIG1heEludiBpczogXCIgKyB0aGlzLm1heEludik7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLm1heEludiA9IHNlbGVjdGVkVmFyaWFudC5pbnZlbnRvcnk7XG4gICAgICBpZih0aGlzLm1heEludj09PTAgIHx8IHRoaXMucXVhbnRpdHkgPT09IDApdGhpcy5idXR0b24gPSAgdHJ1ZTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0aGlzIHByb2R1Y3QgaXMgTk9UIGluc2lkZSB0aGUgY2FydCwgdGhlIG1heEludiBpczogXCIgKyB0aGlzLm1heEludik7XG4gICAgfVxuXG4gIH1cblxuICBjaGVja1F1YW50aXR5KCl7XG4gICAgaWYoIHRoaXMucXVhbnRpdHkgIT0gMCl7XG4gICAgICB0aGlzLmJ1dHRvbiA9ICBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuYnV0dG9uID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiIsIjxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3ZhIEZsYXQnIHJlbD0nc3R5bGVzaGVldCc+XG48ZGl2IGNsYXNzPVwicHJvZHVjdC1wYWdlXCIgKm5nSWY9XCJwcm9kdWN0XCI+XG4gIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgPGVlc2hvcC1mcm9udGVuZC1tZXNzYWdlcyBzdHlsZT1cIm1heC13aWR0aDo0MHZ3XCIgKm5nSWY9XCJkaXNwbGF5U3VjY2Vzc0Jhbm5lclwiPjwvZWVzaG9wLWZyb250ZW5kLW1lc3NhZ2VzPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LW5hbWUtc20gc206Y29sLTEyXCI+XG5cbiAgICAgIDxoMSBzdHlsZT1cImZvbnQtZmFtaWx5OiAnQ29taWMgU2FucyBNUycsICdDaGFsa2JvYXJkIFNFJywgJ0NvbWljIE5ldWUnLCBzYW5zLXNlcmlmO1wiPnt7cHJvZHVjdC5uYW1lfX08L2gxPlxuICAgIDwvZGl2PlxuICAgIDwhLS1cbiAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZy1zbVwiPlxuICAgICAgICAgICAgPHAtcmF0aW5nIFsobmdNb2RlbCldPVwicHJvZHVjdC5yYXRpbmdcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiIFtjYW5jZWxdPVwiZmFsc2VcIj48L3AtcmF0aW5nPlxuICAgICAgICA8L2Rpdj4gLS0+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcHJpY2Utc21cIj5cbiAgICAgIHt7cHJvZHVjdC5wcmljZSB8IGN1cnJlbmN5fX1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNyBnYWxsZXJ5XCIgIHN0eWxlPVwiICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgd2hpdGU7XCI+XG4gICAgICA8dWktZ2FsbGVyeSAgW2ltYWdlc109XCJwcm9kdWN0LmltYWdlc1wiIFtpbWFnZV09XCJwcm9kdWN0LmltYWdlXCIgW3Byb2R1Y3RdPVwicHJvZHVjdFwiPjwvdWktZ2FsbGVyeT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgY29sLW1kLTUgcHJvZHVjdFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzoxZW07XG4gIGxpbmUtaGVpZ2h0OjEuNWVtO1wiXG4+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1uYW1lXCI+XG4gICAgICAgIDxoMSBzdHlsZT1cImZvbnQtZmFtaWx5OiAnQ29taWMgU2FucyBNUycsICdDaGFsa2JvYXJkIFNFJywgJ0NvbWljIE5ldWUnLCBzYW5zLXNlcmlmO1wiPnt7cHJvZHVjdC5uYW1lfX08L2gxPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmdcIj5cbiAgICAgICAgICAgICAgICA8cC1yYXRpbmcgWyhuZ01vZGVsKV09XCJwcm9kdWN0LnJhdGluZ1wiIFtkaXNhYmxlZF09XCJ0cnVlXCIgW2NhbmNlbF09XCJmYWxzZVwiPjwvcC1yYXRpbmc+XG4gICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1wcmljZVwiPlxuICAgICAgICB7e3Byb2R1Y3QucHJpY2UgfCBjdXJyZW5jeX19XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNtOmNvbC0xMiBtZDpjb2wtMTIgbGc6Y29sLTEyIHhsOmNvbC0xMiBwdC0yIHBiLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cblxuPGRpdiAqbmdJZj1cIm1lblByb2RcIj5cbiAgPGRpdiBjbGFzcz1cImNvbG9ycyBjb2wtMTJcIiAqbmdJZj1cIm11bHRpcGxlQ29sb3JzXCI+XG4gICAgPGgyPkNvbG9yczwvaDI+XG4gICAgPGRpdiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJwcm9kdWN0LmNvbG9yXCIgY2xhc3M9XCJjaXJjbGVcIiAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0cywgbGV0IGkgPSBpbmRleFwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0Q29sb3IocHJvZHVjdC5pZClcIj48L2Rpdj5cblxuICA8L2Rpdj5cblxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuPGRpdiAqbmdJZj1cIndQcm9kXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj5cblxuICA8ZGl2IGNsYXNzPVwiY29sb3JzIGNvbC0xMlwiICpuZ0lmPVwibXVsdGlwbGVDb2xvcnNcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPlxuICAgIDxoMj5Db2xvcnM8L2gyPlxuICAgIDxkaXYgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwicHJvZHVjdC5jb2xvclwiIGNsYXNzPVwiY2lyY2xlXCJcbiAgICAgICpuZ0Zvcj1cImxldCBwcm9kdWN0IG9mIHByb2R1Y3RzLCBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdFdDb2xvcihwcm9kdWN0LmlkKVwiPjwvZGl2PlxuXG4gIDwvZGl2PlxuPC9kaXY+XG48L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXplcyBjb2wtMTJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgPGgyIHN0eWxlPVwicGFkZGluZy1yaWdodDogMTBweDtcIj5TaXplczwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uIFtuZ0NsYXNzXT1cIntnb2xkOiBjbGlja2VkSW5kZXggPT09IGl9XCIgY2xhc3M9XCJzaXplIFwiIFtkaXNhYmxlZF09XCJmLmF2YWlsYWJsZT8gZmFsc2UgOiB0cnVlXCJcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGYgb2YgZmlsdGVyZWRWYXJpYW50cywgbGV0IGkgPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RTaXplKCRldmVudClcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidXBkYXRlU2VsZWN0ZWRTaXplKGkpXCI+e3tmLnNpemV9fTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcXVhbnRpdHlcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicXVhbnRpdHlcIj5RdWFudGl0eTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxwLWlucHV0TnVtYmVyIFsobmdNb2RlbCldPVwicXVhbnRpdHlcIiBpbnB1dElkPVwicXVhbnRpdHlcIiBtb2RlPVwiZGVjaW1hbFwiIFtzaG93QnV0dG9uc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBbbWluXT1cIjBcIiBbbWF4XT1cIm1heEludlwiIChjbGljayk9XCJjaGVja1F1YW50aXR5KClcIj5cbiAgICAgICAgICAgICAgPC9wLWlucHV0TnVtYmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiBwcm9kdWN0LWFjdGlvbiBjb2wtMTJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiYnV0dG9uXCIgcEJ1dHRvbiBwUmlwcGxlIHR5cGU9XCJidXR0b25cIiBsYWJlbD1cIkFkZCB0byBjYXJ0XCIgY2xhc3M9XCJcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkUHJvZHVjdFRvQ2FydCgpXCI+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PiBcblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBkZXNjLWJveFwiPlxuXG4gICAgICAgIDxoMSBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IGJsYWNrOyBmb250LXNpemU6IDE4cHg7XCI+UHJvZHVjdCBkZXNjcmlwdGlvbjwvaDE+XG4gICAgICAgIDxocj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NcIiBbaW5uZXJIVE1MXT1cInByb2R1Y3QuZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTdcIj48L2Rpdj5cbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtNSBkZXNjLWJveFwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1mYW1pbHk6ICdOb3ZhIEZsYXQnO2ZvbnQtc2l6ZTogMjJweDsgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtMzAwKTsgbWFyZ2luLXRvcDogMTBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM2ODJlNDI5YiwgIzY4MmU0MjEzKTtcbiAgICBwYWRkaW5nOjFlbTtcbiAgbGluZS1oZWlnaHQ6MS41ZW07XG4gICAgYm9yZGVyOnNvbGlkIDVweCByZ2IoMCwgMCwgMCk7XCI+XG4gICAgICA8aDEgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiB3aGl0ZTsgXCI+UHJvZHVjdCBkZXNjcmlwdGlvbjwvaDE+XG4gICAgICA8aHI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiIHN0eWxlPVwiIHBhZGRpbmctbGVmdDogNXZ3OyBwYWRkaW5nLXJpZ2h0OiA1dnc7IHBhZGRpbmctdG9wOiAzdnc7ICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XCIgW2lubmVySFRNTF09XCJwcm9kdWN0LmRlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgPC9kaXY+IC0tPlxuICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==