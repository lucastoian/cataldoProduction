import { Component, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/products.service";
import * as i2 from "@angular/common";
import * as i3 from "../product-item/product-item.component";
function FeaturedProductsComponent_eshop_frontend_product_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "eshop-frontend-product-item", 10);
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    i0.ɵɵproperty("product", card_r1);
} }
export class FeaturedProductsComponent {
    constructor(prodService) {
        this.prodService = prodService;
        this.brandMap = new Map();
        this.featuredProducts = [];
        this.endSubs$ = new Subject();
        this.innerWidth = 0;
        this.maxCards = 0;
        this.displayedProducts = [];
        this.currentIndex = 0;
        this.brandMap.set("6213c7889309de960180da4a", "Blauer");
        this.brandMap.set("6213c89e9309de960180da4d", "Old River");
        this.brandMap.set("62167bd1cba8a1e0d9c1af88", "Colmar");
        this.brandMap.set("62189efe1d62386cc22525b6", "EA7");
        this.brandMap.set("62189f1e1d62386cc22525b9", "Fred Perry");
        this.brandMap.set("62189f371d62386cc22525bc", "Kway");
        this.brandMap.set("62189f481d62386cc22525bf", "Lacoste");
        this.brandMap.set("62189f7d1d62386cc22525c2", "Murphy&nye");
        this.brandMap.set("62189f981d62386cc22525c5", "Peninsula");
        this.brandMap.set("62189fad1d62386cc22525c8", "Saucony");
        this.brandMap.set("62189fbb1d62386cc22525cb", "Sundek");
        this.brandMap.set("632e05f3b8c567de5ea83669", "Barbour");
        this.brandMap.set("636b57e2506ba65e593baa81", "Ciesse");
        this.brandMap.set("636b57f3506ba65e593baa84", "Husky");
        this.brandMap.set("husky fall", "636b57f3506ba65e593baa84");
        this.brandMap.set("636b5806506ba65e593baa87", "Canadiens");
        this.responsiveOptions = [
            {
                breakpoint: '2074px',
                numVisible: 4,
                numScroll: 2,
            },
            {
                breakpoint: '1374px',
                numVisible: 4,
                numScroll: 2,
            },
            {
                breakpoint: '916px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '568px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '460px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        console.log("width = " + this.innerWidth);
        if (this.maxComponentWidth < this.innerWidth && this.innerWidth < 1600) {
            this.maxCards = Math.floor(this.maxComponentWidth / 320);
        }
        else {
            this.maxCards = Math.floor(this.innerWidth / 320);
        }
        console.log("max cards = " + this.maxCards + " max width = " + this.maxComponentWidth + " innerWidth = " + this.innerWidth);
        if (this.maxCards > 5) {
            this.maxCards = 5;
        }
        this._getFeaturedProducts();
        console.log("fetured products for this brand: " + this.brandName);
        let brand = "";
        try {
            brand = this.brandMap.get(this.brandName).toLowerCase();
        }
        catch (e) {
            brand = this.brandName.toLowerCase();
        }
        this.prodService.getFeaturedProductsByBrand(brand).pipe(takeUntil(this.endSubs$)).subscribe(products => {
            this.featuredProducts = products.slice(0, 10);
            this.displayedProducts = this.featuredProducts.slice(0, this.maxCards);
        });
    }
    ngOnDestroy() {
        this.endSubs$.complete();
    }
    _getFeaturedProducts() {
    }
    goToPreviouseImage() {
        if (this.currentIndex - 1 >= 0) {
            this.currentIndex--;
            this.displayedProducts = this.featuredProducts.slice(this.currentIndex, this.currentIndex + this.maxCards);
        }
        else {
            this.currentIndex = this.featuredProducts.length - 1;
            this.displayedProducts = this.featuredProducts.slice(this.currentIndex, this.currentIndex + this.maxCards);
            if (this.displayedProducts.length <= this.maxCards) {
                this.displayedProducts = this.displayedProducts.concat(this.featuredProducts.slice(0, this.maxCards - this.displayedProducts.length));
            }
        }
        console.log("current index = " + this.currentIndex + " featured length = " + this.featuredProducts.length + " dispèlaeyd length = " + this.displayedProducts.length);
    }
    goToNextImage() {
        if (this.currentIndex + 1 < this.featuredProducts.length) {
            this.displayedProducts = this.featuredProducts.slice(this.currentIndex + 1, this.currentIndex + this.maxCards + 1);
            console.log(" displayed length = " + this.displayedProducts.length);
            if (this.displayedProducts.length <= this.maxCards) {
                this.displayedProducts = this.displayedProducts.concat(this.featuredProducts.slice(0, this.maxCards - this.displayedProducts.length));
            }
            this.currentIndex += 1;
        }
        else {
            this.displayedProducts = this.featuredProducts.slice(0, this.maxCards);
            this.currentIndex = 0;
        }
        console.log("current index = " + this.currentIndex + " featured length = " + this.featuredProducts.length);
    }
}
FeaturedProductsComponent.ɵfac = function FeaturedProductsComponent_Factory(t) { return new (t || FeaturedProductsComponent)(i0.ɵɵdirectiveInject(i1.ProductsService)); };
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeaturedProductsComponent, selectors: [["eshop-frontend-featured-products"]], inputs: { maxComponentWidth: "maxComponentWidth", brandName: "brandName" }, decls: 13, vars: 1, consts: [[1, "container-fluid", "p-0", "m-0"], [1, "d-flex", 2, "flex-direction", "row", "overflow", "hidden", "position", "relative", "justify-content", "space-around"], [3, "product", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "right", "0", "top", "50%", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-right"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "left", "0", "top", "50%", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left"], ["fill-rule", "evenodd", "d", "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, FeaturedProductsComponent_eshop_frontend_product_item_2_Template, 1, 1, "eshop-frontend-product-item", 2);
        i0.ɵɵelementStart(3, "button", 3);
        i0.ɵɵlistener("click", function FeaturedProductsComponent_Template_button_click_3_listener() { return ctx.goToNextImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(4, "svg", 4);
        i0.ɵɵelement(5, "path", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(6, "span", 6);
        i0.ɵɵtext(7, "Button");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "button", 7);
        i0.ɵɵlistener("click", function FeaturedProductsComponent_Template_button_click_8_listener() { return ctx.goToPreviouseImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(9, "svg", 8);
        i0.ɵɵelement(10, "path", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(11, "span", 6);
        i0.ɵɵtext(12, "Button");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.displayedProducts);
    } }, directives: [i2.NgForOf, i3.ProductItemComponent], styles: [".p-carousel-items-container[_ngcontent-%COMP%], .p-carousel-items-content[_ngcontent-%COMP%]{transform:translateZ(0%)!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeaturedProductsComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-featured-products', template: "\n<!--p-carousel [value]=\"featuredProducts\" [numVisible]=\"4\" [numScroll]=\"1\" [circular]=\"true\"\n[responsiveOptions]=\"responsiveOptions\">\n  <ng-template let-product pTemplate=\"item\"  [style]=\"{'height':'600px'}\" >\n    <eshop-frontend-product-item  [product]= 'product'></eshop-frontend-product-item>\n  </ng-template>\n</p-carousel> \n\n-->\n\n\n<div class=\"container-fluid p-0 m-0\">\n\n  <div class=\"d-flex\" style=\" flex-direction: row; overflow: hidden; position: relative; justify-content: space-around;\">\n\n        <eshop-frontend-product-item *ngFor=\"let card of displayedProducts; let i = index;\"  [product]= 'card'></eshop-frontend-product-item>\n\n        <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; right: 0; top: 50%;\"  (click)=\"goToNextImage()\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/>\n            </svg>\n          <span class=\"visually-hidden\">Button</span>\n      </button>\n\n      <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; left: 0; top: 50%;\"  (click)=\"goToPreviouseImage()\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n            </svg>\n          <span class=\"visually-hidden\">Button</span>\n      </button>\n\n  \n  </div>\n\n</div>", styles: [".p-carousel-items-container,.p-carousel-items-content{transform:translateZ(0%)!important}\n"] }]
    }], function () { return [{ type: i1.ProductsService }]; }, { maxComponentWidth: [{
            type: Input
        }], brandName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7O0lDWTFELGtEQUFxSTs7O0lBQWhELGlDQUFpQjs7QURMOUcsTUFBTSxPQUFPLHlCQUF5QjtJQW9CcEMsWUFBb0IsV0FBNEI7UUFBNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBYjdDLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztRQUV2QyxxQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBQ3BDLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUd2QyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLHNCQUFpQixHQUFpQixFQUFFLENBQUM7UUFDckMsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFPZixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUczRCxJQUFJLENBQUMsaUJB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QjtRQUFBLHNCQUFNO1FBQUEsaUJBQU8sRUFBQTtRQUcvQyxpQ0FBa0k7UUFBL0Isc0dBQVMsd0JBQW9CLElBQUM7UUFDN0gsbUJBQWdJO1FBQWhJLDhCQUFnSTtRQUM1SCwyQkFBNks7UUFDL0ssaUJBQU07UUFDUixvQkFBOEI7UUFBOUIsZ0NBQThCO1FBQUEsdUJBQU07UUFBQSxpQkFBTyxFQUFBLEVBQUEsRUFBQTs7UUFiQyxlQUFzQjtRQUF0QiwrQ0FBc0I7O3VGREwvRCx5QkFBeUI7Y0FMckMsU0FBUzsyQkFDRSxrQ0FBa0M7a0VBTzVDLGlCQUFpQjtrQkFEaEIsS0FBSztZQUlOLFNBQVM7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdDEyMyc7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtZmVhdHVyZWQtcHJvZHVjdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mZWF0dXJlZC1wcm9kdWN0cy5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKVxuICBtYXhDb21wb25lbnRXaWR0aDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGJyYW5kTmFtZTogc3RyaW5nO1xuICAgICBicmFuZE1hcCA9IG5ldyBNYXA8c3RyaW5nLHN0cmluZz4oKTsgXG5cbiAgZmVhdHVyZWRQcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIGVuZFN1YnMkIDogU3ViamVjdDxhbnk+PSBuZXcgU3ViamVjdCgpO1xuICByZXNwb25zaXZlT3B0aW9ucztcblxuICBpbm5lcldpZHRoID0gMDtcbiAgbWF4Q2FyZHMgPSAwO1xuICBkaXNwbGF5ZWRQcm9kdWN0czogUHJvZHVjdDEyM1tdID0gW107XG4gIGN1cnJlbnRJbmRleCA9IDA7XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZFNlcnZpY2U6IFByb2R1Y3RzU2VydmljZSApIHsgXG5cblxuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxM2M3ODg5MzA5ZGU5NjAxODBkYTRhXCIsXCJCbGF1ZXJcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjEzYzg5ZTkzMDlkZTk2MDE4MGRhNGRcIiwgXCJPbGQgUml2ZXJcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxNjdiZDFjYmE4YTFlMGQ5YzFhZjg4XCIsXCJDb2xtYXJcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODllZmUxZDYyMzg2Y2MyMjUyNWI2XCIsXCJFQTdcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MjE4OWYxZTFkNjIzODZjYzIyNTI1YjlcIixcIkZyZWQgUGVycnlcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjIxODlmMzcxZDYyMzg2Y2MyMjUyNWJjXCIsXCJLd2F5XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmNDgxZDYyMzg2Y2MyMjUyNWJmXCIsXCJMYWNvc3RlXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmN2QxZDYyMzg2Y2MyMjUyNWMyXCIsXCJNdXJwaHkmbnllXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5Zjk4MWQ2MjM4NmNjMjI1MjVjNVwiLFwiUGVuaW5zdWxhXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmYWQxZDYyMzg2Y2MyMjUyNWM4XCIsXCJTYXVjb255XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZmJiMWQ2MjM4NmNjMjI1MjVjYlwiLFwiU3VuZGVrXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYzMmUwNWYzYjhjNTY3ZGU1ZWE4MzY2OVwiLFwiQmFyYm91clwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzZiNTdlMjUwNmJhNjVlNTkzYmFhODFcIixcIkNpZXNzZVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYzNmI1N2YzNTA2YmE2NWU1OTNiYWE4NFwiLFwiSHVza3lcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCJodXNreSBmYWxsXCIsIFwiNjM2YjU3ZjM1MDZiYTY1ZTU5M2JhYTg0XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYzNmI1ODA2NTA2YmE2NWU1OTNiYWE4N1wiLFwiQ2FuYWRpZW5zXCIpO1xuXG5cbiAgICB0aGlzLnJlc3BvbnNpdmVPcHRpb25zID0gW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnMjA3NHB4JyxcbiAgICAgICAgbnVtVmlzaWJsZTogNCxcbiAgICAgICAgbnVtU2Nyb2xsOiAyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogJzEzNzRweCcsXG4gICAgICAgIG51bVZpc2libGU6IDQsXG4gICAgICAgIG51bVNjcm9sbDogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICc5MTZweCcsXG4gICAgICAgIG51bVZpc2libGU6IDIsXG4gICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICc3NjhweCcsXG4gICAgICAgIG51bVZpc2libGU6IDIsXG4gICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogJzU2OHB4JyxcbiAgICAgICAgbnVtVmlzaWJsZTogMixcbiAgICAgICAgbnVtU2Nyb2xsOiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogJzQ2MHB4JyxcbiAgICAgICAgbnVtVmlzaWJsZTogMSxcbiAgICAgICAgbnVtU2Nyb2xsOiAxLFxuICAgICAgfSxcbiAgICBdOyBcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5pbm5lcldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc29sZS5sb2coXCJ3aWR0aCA9IFwiICsgdGhpcy5pbm5lcldpZHRoKTtcblxuXG4gICAgaWYodGhpcy5tYXhDb21wb25lbnRXaWR0aCA8IHRoaXMuaW5uZXJXaWR0aCAmJiB0aGlzLmlubmVyV2lkdGggPCAxNjAwKXtcbiAgICAgIHRoaXMubWF4Q2FyZHMgPSBNYXRoLmZsb29yKCB0aGlzLm1heENvbXBvbmVudFdpZHRoIC8gMzIwKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubWF4Q2FyZHMgPSBNYXRoLmZsb29yKCB0aGlzLmlubmVyV2lkdGggLyAzMjApO1xuICAgIH1cblxuXG4gICAgY29uc29sZS5sb2coXCJtYXggY2FyZHMgPSBcIiArIHRoaXMubWF4Q2FyZHMgKyBcIiBtYXggd2lkdGggPSBcIiArIHRoaXMubWF4Q29tcG9uZW50V2lkdGggKyBcIiBpbm5lcldpZHRoID0gXCIgKyB0aGlzLmlubmVyV2lkdGgpO1xuXG4gICAgaWYodGhpcy5tYXhDYXJkcyA+NSl7XG4gICAgICB0aGlzLm1heENhcmRzID0gNTtcbiAgICB9XG5cbiAgICB0aGlzLl9nZXRGZWF0dXJlZFByb2R1Y3RzKCk7XG4gICAgY29uc29sZS5sb2coXCJmZXR1cmVkIHByb2R1Y3RzIGZvciB0aGlzIGJyYW5kOiBcIiArIHRoaXMuYnJhbmROYW1lKVxuICAgIGxldCBicmFuZCA9IFwiXCJcbiAgICB0cnl7XG4gICAgICBicmFuZCA9dGhpcy5icmFuZE1hcC5nZXQodGhpcy5icmFuZE5hbWUpLnRvTG93ZXJDYXNlKClcbiAgICBcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBicmFuZCA9dGhpcy5icmFuZE5hbWUudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0RmVhdHVyZWRQcm9kdWN0c0J5QnJhbmQoYnJhbmQpLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKS5zdWJzY3JpYmUocHJvZHVjdHMgPT57XG4gICAgICB0aGlzLmZlYXR1cmVkUHJvZHVjdHMgPSBwcm9kdWN0cy5zbGljZSgwLDEwKTtcblxuICAgICAgdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cyA9IHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5zbGljZSgwLCB0aGlzLm1heENhcmRzKTtcblxuICAgIH0pXG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5lbmRTdWJzJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RmVhdHVyZWRQcm9kdWN0cygpe1xuXG5cbiAgfVxuXG4gIGdvVG9QcmV2aW91c2VJbWFnZSgpe1xuXG5cblxuICAgIGlmKHRoaXMuY3VycmVudEluZGV4IC0xID49IDApe1xuXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4IC0tXG5cbiAgICAgICAgdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cyA9IHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5zbGljZSh0aGlzLmN1cnJlbnRJbmRleCwgdGhpcy5jdXJyZW50SW5kZXggKyB0aGlzLm1heENhcmRzKVxuXG5cbiAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLmZlYXR1cmVkUHJvZHVjdHMubGVuZ3RoIC0xO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheWVkUHJvZHVjdHMgPSB0aGlzLmZlYXR1cmVkUHJvZHVjdHMuc2xpY2UodGhpcy5jdXJyZW50SW5kZXgsIHRoaXMuY3VycmVudEluZGV4ICsgdGhpcy5tYXhDYXJkcyk7XG5cbiAgICAgICAgaWYodGhpcy5kaXNwbGF5ZWRQcm9kdWN0cy5sZW5ndGggPD0gdGhpcy5tYXhDYXJkcyl7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cyA9IHRoaXMuZGlzcGxheWVkUHJvZHVjdHMuY29uY2F0KHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5zbGljZSgwLCB0aGlzLm1heENhcmRzIC0gdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cy5sZW5ndGgpKVxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG5cbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgaW5kZXggPSBcIiArIHRoaXMuY3VycmVudEluZGV4ICsgXCIgZmVhdHVyZWQgbGVuZ3RoID0gXCIgKyB0aGlzLmZlYXR1cmVkUHJvZHVjdHMubGVuZ3RoICsgXCIgZGlzcMOobGFleWQgbGVuZ3RoID0gXCIgKyB0aGlzLmRpc3BsYXllZFByb2R1Y3RzLmxlbmd0aClcblxuXG5cbiAgfVxuXG4gIGdvVG9OZXh0SW1hZ2UoKXtcblxuXG5cbiAgICBpZih0aGlzLmN1cnJlbnRJbmRleCArMSA8IHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5sZW5ndGgpe1xuICAgICAgdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cyA9IHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5zbGljZSh0aGlzLmN1cnJlbnRJbmRleCArIDEsIHRoaXMuY3VycmVudEluZGV4ICsgdGhpcy5tYXhDYXJkcyArIDEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCBcIiBkaXNwbGF5ZWQgbGVuZ3RoID0gXCIgKyB0aGlzLmRpc3BsYXllZFByb2R1Y3RzLmxlbmd0aClcbiAgICAgICAgaWYodGhpcy5kaXNwbGF5ZWRQcm9kdWN0cy5sZW5ndGggPD0gdGhpcy5tYXhDYXJkcyl7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cyA9ICB0aGlzLmRpc3BsYXllZFByb2R1Y3RzLmNvbmNhdCh0aGlzLmZlYXR1cmVkUHJvZHVjdHMuc2xpY2UoMCx0aGlzLm1heENhcmRzIC0gdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cy5sZW5ndGgpKVxuICAgICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudEluZGV4ICs9IDFcbiAgXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmRpc3BsYXllZFByb2R1Y3RzID0gdGhpcy5mZWF0dXJlZFByb2R1Y3RzLnNsaWNlKDAsIHRoaXMubWF4Q2FyZHMgKTtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgaW5kZXggPSBcIiArIHRoaXMuY3VycmVudEluZGV4ICsgXCIgZmVhdHVyZWQgbGVuZ3RoID0gXCIgKyB0aGlzLmZlYXR1cmVkUHJvZHVjdHMubGVuZ3RoIClcblxuICB9XG59XG4iLCJcbjwhLS1wLWNhcm91c2VsIFt2YWx1ZV09XCJmZWF0dXJlZFByb2R1Y3RzXCIgW251bVZpc2libGVdPVwiNFwiIFtudW1TY3JvbGxdPVwiMVwiIFtjaXJjdWxhcl09XCJ0cnVlXCJcbltyZXNwb25zaXZlT3B0aW9uc109XCJyZXNwb25zaXZlT3B0aW9uc1wiPlxuICA8bmctdGVtcGxhdGUgbGV0LXByb2R1Y3QgcFRlbXBsYXRlPVwiaXRlbVwiICBbc3R5bGVdPVwieydoZWlnaHQnOic2MDBweCd9XCIgPlxuICAgIDxlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0gIFtwcm9kdWN0XT0gJ3Byb2R1Y3QnPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxuICA8L25nLXRlbXBsYXRlPlxuPC9wLWNhcm91c2VsPiBcblxuLS0+XG5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwLTAgbS0wXCI+XG5cbiAgPGRpdiBjbGFzcz1cImQtZmxleFwiIHN0eWxlPVwiIGZsZXgtZGlyZWN0aW9uOiByb3c7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XCI+XG5cbiAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSAqbmdGb3I9XCJsZXQgY2FyZCBvZiBkaXNwbGF5ZWRQcm9kdWN0czsgbGV0IGkgPSBpbmRleDtcIiAgW3Byb2R1Y3RdPSAnY2FyZCc+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOiA1MCU7XCIgIChjbGljayk9XCJnb1RvTmV4dEltYWdlKClcIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1yaWdodFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMSA4YS41LjUgMCAwIDEgLjUtLjVoMTEuNzkzbC0zLjE0Ny0zLjE0NmEuNS41IDAgMCAxIC43MDgtLjcwOGw0IDRhLjUuNSAwIDAgMSAwIC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDgtLjcwOEwxMy4yOTMgOC41SDEuNUEuNS41IDAgMCAxIDEgOHpcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkJ1dHRvbjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogNTAlO1wiICAoY2xpY2spPVwiZ29Ub1ByZXZpb3VzZUltYWdlKClcIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1sZWZ0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNSA4YS41LjUgMCAwIDAtLjUtLjVIMi43MDdsMy4xNDctMy4xNDZhLjUuNSAwIDEgMC0uNzA4LS43MDhsLTQgNGEuNS41IDAgMCAwIDAgLjcwOGw0IDRhLjUuNSAwIDAgMCAuNzA4LS43MDhMMi43MDcgOC41SDE0LjVBLjUuNSAwIDAgMCAxNSA4elwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+QnV0dG9uPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgXG4gIDwvZGl2PlxuXG48L2Rpdj4iXX0=