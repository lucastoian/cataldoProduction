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
        if (this.maxCards < 3) {
            this.maxCards = 3;
        }
        this.maxCards += 2;
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
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeaturedProductsComponent, selectors: [["eshop-frontend-featured-products"]], inputs: { maxComponentWidth: "maxComponentWidth", brandName: "brandName" }, decls: 13, vars: 1, consts: [[1, "container-fluid", "p-0", "m-0", "d-flex", 2, "justify-content", "center"], [1, "d-flex", 2, "flex-direction", "row", "overflow", "hidden", "position", "relative", "justify-content", "center", "width", "fit-content", "height", "545px", "max-width", "1600px"], [3, "product", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "right", "0", "top", "50%", "width", "40px", "background-color", "white", "height", "40px", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-right"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "left", "0", "top", "50%", "width", "40px", "background-color", "white", "height", "40px", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left"], ["fill-rule", "evenodd", "d", "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'eshop-frontend-featured-products', template: "\n<!--p-carousel [value]=\"featuredProducts\" [numVisible]=\"4\" [numScroll]=\"1\" [circular]=\"true\"\n[responsiveOptions]=\"responsiveOptions\">\n  <ng-template let-product pTemplate=\"item\"  [style]=\"{'height':'600px'}\" >\n    <eshop-frontend-product-item  [product]= 'product'></eshop-frontend-product-item>\n  </ng-template>\n</p-carousel> \n\n-->\n\n\n<div class=\"container-fluid p-0 m-0 d-flex\" style=\"justify-content: center;\">\n\n  <div class=\"d-flex\" style=\" flex-direction: row; overflow: hidden; position: relative; justify-content: center; width: fit-content; height: 545px; max-width: 1600px;\">\n\n        <eshop-frontend-product-item *ngFor=\"let card of displayedProducts; let i = index;\"  [product]= 'card'></eshop-frontend-product-item>\n\n        <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; right: 0; top: 50%;width: 40px;background-color: white;height: 40px;\"  (click)=\"goToNextImage()\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/>\n            </svg>\n          <span class=\"visually-hidden\">Button</span>\n      </button>\n\n      <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; left: 0; top: 50%;width: 40px;background-color: white; height: 40px;\"  (click)=\"goToPreviouseImage()\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n            </svg>\n          <span class=\"visually-hidden\">Button</span>\n      </button>\n\n  \n  </div>\n\n</div>", styles: [".p-carousel-items-container,.p-carousel-items-content{transform:translateZ(0%)!important}\n"] }]
    }], function () { return [{ type: i1.ProductsService }]; }, { maxComponentWidth: [{
            type: Input
        }], brandName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7O0lDWTFELGtEQUFxSTs7O0lBQWhELGlDQUFpQjs7QURMOUcsTUFBTSxPQUFPLHlCQUF5QjtJQW9CcEMsWUFBb0IsV0FBNEI7UUFBNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBYjdDLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztRQUV2QyxxQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBQ3BDLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUd2QyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLHNCQUFpQixHQUFpQixFQUFFLENBQUM7UUFDckMsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFPZixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUczRCxJQUFJLENBQUMsaUJB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LDBIQUFxSTtRQUVySSxpQ0FBK0s7UUFBMUIsc0dBQVMsbUJBQWUsSUFBQztRQUM1SyxtQkFBaUk7UUFBakksOEJBQWlJO1FBQzdILDBCQUE2SztRQUMvSyxpQkFBTTtRQUNSLG9CQUE4QjtRQUE5QiwrQkFBOEI7UUFBQSxzQkFBTTtRQUFBLGlCQUFPLEVBQUE7UUFHL0MsaUNBQW9MO1FBQS9CLHNHQUFTLHdCQUFvQixJQUFDO1FBQy9LLG1CQUFnSTtRQUFoSSw4QkFBZ0k7UUFDNUgsMkJBQTZLO1FBQy9LLGlCQUFNO1FBQ1Isb0JBQThCO1FBQTlCLGdDQUE4QjtRQUFBLHVCQUFNO1FBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUE7O1FBYkMsZUFBc0I7UUFBdEIsK0NBQXNCOzt1RkRML0QseUJBQXlCO2NBTHJDLFNBQVM7MkJBQ0Usa0NBQWtDO2tFQU81QyxpQkFBaUI7a0JBRGhCLEtBQUs7WUFJTixTQUFTO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLWZlYXR1cmVkLXByb2R1Y3RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVhdHVyZWQtcHJvZHVjdHMuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVkUHJvZHVjdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KClcbiAgbWF4Q29tcG9uZW50V2lkdGg6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBicmFuZE5hbWU6IHN0cmluZztcbiAgICAgYnJhbmRNYXAgPSBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KCk7IFxuXG4gIGZlYXR1cmVkUHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBlbmRTdWJzJCA6IFN1YmplY3Q8YW55Pj0gbmV3IFN1YmplY3QoKTtcbiAgcmVzcG9uc2l2ZU9wdGlvbnM7XG5cbiAgaW5uZXJXaWR0aCA9IDA7XG4gIG1heENhcmRzID0gMDtcbiAgZGlzcGxheWVkUHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBjdXJyZW50SW5kZXggPSAwO1xuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UgKSB7IFxuXG5cbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjNzg4OTMwOWRlOTYwMTgwZGE0YVwiLFwiQmxhdWVyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxM2M4OWU5MzA5ZGU5NjAxODBkYTRkXCIsIFwiT2xkIFJpdmVyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTY3YmQxY2JhOGExZTBkOWMxYWY4OFwiLFwiQ29sbWFyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZWZlMWQ2MjM4NmNjMjI1MjViNlwiLFwiRUE3XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmMWUxZDYyMzg2Y2MyMjUyNWI5XCIsXCJGcmVkIFBlcnJ5XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZjM3MWQ2MjM4NmNjMjI1MjViY1wiLFwiS3dheVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjQ4MWQ2MjM4NmNjMjI1MjViZlwiLFwiTGFjb3N0ZVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjdkMWQ2MjM4NmNjMjI1MjVjMlwiLFwiTXVycGh5Jm55ZVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWY5ODFkNjIzODZjYzIyNTI1YzVcIixcIlBlbmluc3VsYVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZmFkMWQ2MjM4NmNjMjI1MjVjOFwiLFwiU2F1Y29ueVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWZiYjFkNjIzODZjYzIyNTI1Y2JcIixcIlN1bmRla1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzJlMDVmM2I4YzU2N2RlNWVhODM2NjlcIixcIkJhcmJvdXJcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU3ZTI1MDZiYTY1ZTU5M2JhYTgxXCIsXCJDaWVzc2VcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MzZiNTdmMzUwNmJhNjVlNTkzYmFhODRcIixcIkh1c2t5XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiaHVza3kgZmFsbFwiLCBcIjYzNmI1N2YzNTA2YmE2NWU1OTNiYWE4NFwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzZiNTgwNjUwNmJhNjVlNTkzYmFhODdcIixcIkNhbmFkaWVuc1wiKTtcblxuXG4gICAgdGhpcy5yZXNwb25zaXZlT3B0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogJzIwNzRweCcsXG4gICAgICAgIG51bVZpc2libGU6IDQsXG4gICAgICAgIG51bVNjcm9sbDogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICcxMzc0cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiA0LFxuICAgICAgICBudW1TY3JvbGw6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnOTE2cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiAyLFxuICAgICAgICBudW1TY3JvbGw6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnNzY4cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiAyLFxuICAgICAgICBudW1TY3JvbGw6IDEsXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICc1NjhweCcsXG4gICAgICAgIG51bVZpc2libGU6IDIsXG4gICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICc0NjBweCcsXG4gICAgICAgIG51bVZpc2libGU6IDEsXG4gICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgIH0sXG4gICAgXTsgXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnNvbGUubG9nKFwid2lkdGggPSBcIiArIHRoaXMuaW5uZXJXaWR0aCk7XG5cblxuICAgIGlmKHRoaXMubWF4Q29tcG9uZW50V2lkdGggPCB0aGlzLmlubmVyV2lkdGggJiYgdGhpcy5pbm5lcldpZHRoIDwgMTYwMCl7XG4gICAgICB0aGlzLm1heENhcmRzID0gTWF0aC5mbG9vciggdGhpcy5tYXhDb21wb25lbnRXaWR0aCAvIDMyMCk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLm1heENhcmRzID0gTWF0aC5mbG9vciggdGhpcy5pbm5lcldpZHRoIC8gMzIwKTtcbiAgICB9XG5cblxuICAgIGNvbnNvbGUubG9nKFwibWF4IGNhcmRzID0gXCIgKyB0aGlzLm1heENhcmRzICsgXCIgbWF4IHdpZHRoID0gXCIgKyB0aGlzLm1heENvbXBvbmVudFdpZHRoICsgXCIgaW5uZXJXaWR0aCA9IFwiICsgdGhpcy5pbm5lcldpZHRoKTtcblxuICAgIGlmKHRoaXMubWF4Q2FyZHMgPjUpe1xuICAgICAgdGhpcy5tYXhDYXJkcyA9IDU7XG4gICAgfVxuXG4gICAgaWYodGhpcy5tYXhDYXJkcyA8Myl7XG4gICAgICB0aGlzLm1heENhcmRzID0gMztcbiAgICB9XG5cbiAgICB0aGlzLm1heENhcmRzICs9MjtcblxuICAgIHRoaXMuX2dldEZlYXR1cmVkUHJvZHVjdHMoKTtcbiAgICBjb25zb2xlLmxvZyhcImZldHVyZWQgcHJvZHVjdHMgZm9yIHRoaXMgYnJhbmQ6IFwiICsgdGhpcy5icmFuZE5hbWUpXG4gICAgbGV0IGJyYW5kID0gXCJcIlxuICAgIHRyeXtcbiAgICAgIGJyYW5kID10aGlzLmJyYW5kTWFwLmdldCh0aGlzLmJyYW5kTmFtZSkudG9Mb3dlckNhc2UoKVxuICAgIFxuICAgIH1jYXRjaChlKXtcbiAgICAgIGJyYW5kID10aGlzLmJyYW5kTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9kU2VydmljZS5nZXRGZWF0dXJlZFByb2R1Y3RzQnlCcmFuZChicmFuZCkucGlwZSh0YWtlVW50aWwodGhpcy5lbmRTdWJzJCkpLnN1YnNjcmliZShwcm9kdWN0cyA9PntcbiAgICAgIHRoaXMuZmVhdHVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLnNsaWNlKDAsMTApO1xuXG4gICAgICB0aGlzLmRpc3BsYXllZFByb2R1Y3RzID0gdGhpcy5mZWF0dXJlZFByb2R1Y3RzLnNsaWNlKDAsIHRoaXMubWF4Q2FyZHMpO1xuXG4gICAgfSlcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmVuZFN1YnMkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRGZWF0dXJlZFByb2R1Y3RzKCl7XG5cblxuICB9XG5cbiAgZ29Ub1ByZXZpb3VzZUltYWdlKCl7XG5cblxuXG4gICAgaWYodGhpcy5jdXJyZW50SW5kZXggLTEgPj0gMCl7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggLS1cblxuICAgICAgICB0aGlzLmRpc3BsYXllZFByb2R1Y3RzID0gdGhpcy5mZWF0dXJlZFByb2R1Y3RzLnNsaWNlKHRoaXMuY3VycmVudEluZGV4LCB0aGlzLmN1cnJlbnRJbmRleCArIHRoaXMubWF4Q2FyZHMpXG5cblxuICAgIH1lbHNle1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5sZW5ndGggLTE7XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cyA9IHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5zbGljZSh0aGlzLmN1cnJlbnRJbmRleCwgdGhpcy5jdXJyZW50SW5kZXggKyB0aGlzLm1heENhcmRzKTtcblxuICAgICAgICBpZih0aGlzLmRpc3BsYXllZFByb2R1Y3RzLmxlbmd0aCA8PSB0aGlzLm1heENhcmRzKXtcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZFByb2R1Y3RzID0gdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cy5jb25jYXQodGhpcy5mZWF0dXJlZFByb2R1Y3RzLnNsaWNlKDAsIHRoaXMubWF4Q2FyZHMgLSB0aGlzLmRpc3BsYXllZFByb2R1Y3RzLmxlbmd0aCkpXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG5cblxuICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBpbmRleCA9IFwiICsgdGhpcy5jdXJyZW50SW5kZXggKyBcIiBmZWF0dXJlZCBsZW5ndGggPSBcIiArIHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5sZW5ndGggKyBcIiBkaXNww6hsYWV5ZCBsZW5ndGggPSBcIiArIHRoaXMuZGlzcGxheWVkUHJvZHVjdHMubGVuZ3RoKVxuXG5cblxuICB9XG5cbiAgZ29Ub05leHRJbWFnZSgpe1xuXG5cblxuICAgIGlmKHRoaXMuY3VycmVudEluZGV4ICsxIDwgdGhpcy5mZWF0dXJlZFByb2R1Y3RzLmxlbmd0aCl7XG4gICAgICB0aGlzLmRpc3BsYXllZFByb2R1Y3RzID0gdGhpcy5mZWF0dXJlZFByb2R1Y3RzLnNsaWNlKHRoaXMuY3VycmVudEluZGV4ICsgMSwgdGhpcy5jdXJyZW50SW5kZXggKyB0aGlzLm1heENhcmRzICsgMSk7XG4gICAgICAgICAgY29uc29sZS5sb2coIFwiIGRpc3BsYXllZCBsZW5ndGggPSBcIiArIHRoaXMuZGlzcGxheWVkUHJvZHVjdHMubGVuZ3RoKVxuICAgICAgICBpZih0aGlzLmRpc3BsYXllZFByb2R1Y3RzLmxlbmd0aCA8PSB0aGlzLm1heENhcmRzKXtcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZFByb2R1Y3RzID0gIHRoaXMuZGlzcGxheWVkUHJvZHVjdHMuY29uY2F0KHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5zbGljZSgwLHRoaXMubWF4Q2FyZHMgLSB0aGlzLmRpc3BsYXllZFByb2R1Y3RzLmxlbmd0aCkpXG4gICAgICAgIH1cblxuICAgICAgdGhpcy5jdXJyZW50SW5kZXggKz0gMVxuICBcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuZGlzcGxheWVkUHJvZHVjdHMgPSB0aGlzLmZlYXR1cmVkUHJvZHVjdHMuc2xpY2UoMCwgdGhpcy5tYXhDYXJkcyApO1xuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBpbmRleCA9IFwiICsgdGhpcy5jdXJyZW50SW5kZXggKyBcIiBmZWF0dXJlZCBsZW5ndGggPSBcIiArIHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5sZW5ndGggKVxuXG4gIH1cbn1cbiIsIlxuPCEtLXAtY2Fyb3VzZWwgW3ZhbHVlXT1cImZlYXR1cmVkUHJvZHVjdHNcIiBbbnVtVmlzaWJsZV09XCI0XCIgW251bVNjcm9sbF09XCIxXCIgW2NpcmN1bGFyXT1cInRydWVcIlxuW3Jlc3BvbnNpdmVPcHRpb25zXT1cInJlc3BvbnNpdmVPcHRpb25zXCI+XG4gIDxuZy10ZW1wbGF0ZSBsZXQtcHJvZHVjdCBwVGVtcGxhdGU9XCJpdGVtXCIgIFtzdHlsZV09XCJ7J2hlaWdodCc6JzYwMHB4J31cIiA+XG4gICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSAgW3Byb2R1Y3RdPSAncHJvZHVjdCc+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XG4gIDwvbmctdGVtcGxhdGU+XG48L3AtY2Fyb3VzZWw+IFxuXG4tLT5cblxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHAtMCBtLTAgZC1mbGV4XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cblxuICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCIgc3R5bGU9XCIgZmxleC1kaXJlY3Rpb246IHJvdzsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9zaXRpb246IHJlbGF0aXZlOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgd2lkdGg6IGZpdC1jb250ZW50OyBoZWlnaHQ6IDU0NXB4OyBtYXgtd2lkdGg6IDE2MDBweDtcIj5cblxuICAgICAgICA8ZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtICpuZ0Zvcj1cImxldCBjYXJkIG9mIGRpc3BsYXllZFByb2R1Y3RzOyBsZXQgaSA9IGluZGV4O1wiICBbcHJvZHVjdF09ICdjYXJkJz48L2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbT5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwOyB0b3A6IDUwJTt3aWR0aDogNDBweDtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtoZWlnaHQ6IDQwcHg7XCIgIChjbGljayk9XCJnb1RvTmV4dEltYWdlKClcIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1yaWdodFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMSA4YS41LjUgMCAwIDEgLjUtLjVoMTEuNzkzbC0zLjE0Ny0zLjE0NmEuNS41IDAgMCAxIC43MDgtLjcwOGw0IDRhLjUuNSAwIDAgMSAwIC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDgtLjcwOEwxMy4yOTMgOC41SDEuNUEuNS41IDAgMCAxIDEgOHpcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkJ1dHRvbjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogNTAlO3dpZHRoOiA0MHB4O2JhY2tncm91bmQtY29sb3I6IHdoaXRlOyBoZWlnaHQ6IDQwcHg7XCIgIChjbGljayk9XCJnb1RvUHJldmlvdXNlSW1hZ2UoKVwiPlxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LWxlZnRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE1IDhhLjUuNSAwIDAgMC0uNS0uNUgyLjcwN2wzLjE0Ny0zLjE0NmEuNS41IDAgMSAwLS43MDgtLjcwOGwtNCA0YS41LjUgMCAwIDAgMCAuNzA4bDQgNGEuNS41IDAgMCAwIC43MDgtLjcwOEwyLjcwNyA4LjVIMTQuNUEuNS41IDAgMCAwIDE1IDh6XCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5CdXR0b248L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICBcbiAgPC9kaXY+XG5cbjwvZGl2PiJdfQ==