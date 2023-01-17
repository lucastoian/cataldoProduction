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
        if (this.featuredSex == null) {
            let categoria = localStorage.getItem("categoria");
            if (categoria === "uomo") {
                this.featuredSex = "M";
            }
            else {
                this.featuredSex = "F";
            }
        }
        this.prodService.getFeaturedProductsByBrand(brand, this.featuredSex).pipe(takeUntil(this.endSubs$)).subscribe(products => {
            console.log("PRODOTTI ; \N " + JSON.stringify(products));
            let currentId = "";
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
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeaturedProductsComponent, selectors: [["eshop-frontend-featured-products"]], inputs: { maxComponentWidth: "maxComponentWidth", featuredSex: "featuredSex", brandName: "brandName" }, decls: 13, vars: 1, consts: [[1, "container-fluid", "p-0", "m-0", "d-flex", 2, "justify-content", "center"], [1, "d-flex", 2, "flex-direction", "row", "overflow", "hidden", "position", "relative", "justify-content", "center", "width", "fit-content", "height", "585px", "max-width", "1600px"], [3, "product", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "right", "0", "top", "50%", "width", "40px", "background-color", "white", "height", "40px", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-right"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "left", "0", "top", "50%", "width", "40px", "background-color", "white", "height", "40px", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left"], ["fill-rule", "evenodd", "d", "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'eshop-frontend-featured-products', template: "\n<!--p-carousel [value]=\"featuredProducts\" [numVisible]=\"4\" [numScroll]=\"1\" [circular]=\"true\"\n[responsiveOptions]=\"responsiveOptions\">\n  <ng-template let-product pTemplate=\"item\"  [style]=\"{'height':'600px'}\" >\n    <eshop-frontend-product-item  [product]= 'product'></eshop-frontend-product-item>\n  </ng-template>\n</p-carousel> \n\n-->\n\n\n<div class=\"container-fluid p-0 m-0 d-flex\" style=\"justify-content: center;\">\n\n  <div class=\"d-flex\" style=\" flex-direction: row; overflow: hidden; position: relative; justify-content: center; width: fit-content; height: 585px; max-width: 1600px;\">\n\n        <eshop-frontend-product-item *ngFor=\"let card of displayedProducts; let i = index;\"  [product]= 'card'></eshop-frontend-product-item>\n\n        <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; right: 0; top: 50%;width: 40px;background-color: white;height: 40px;\"  (click)=\"goToNextImage()\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/>\n            </svg>\n          <span class=\"visually-hidden\">Button</span>\n      </button>\n\n      <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; left: 0; top: 50%;width: 40px;background-color: white; height: 40px;\"  (click)=\"goToPreviouseImage()\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n            </svg>\n          <span class=\"visually-hidden\">Button</span>\n      </button>\n\n  \n  </div>\n\n</div>", styles: [".p-carousel-items-container,.p-carousel-items-content{transform:translateZ(0%)!important}\n"] }]
    }], function () { return [{ type: i1.ProductsService }]; }, { maxComponentWidth: [{
            type: Input
        }], featuredSex: [{
            type: Input
        }], brandName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7O0lDWTFELGtEQUFxSTs7O0lBQWhELGlDQUFpQjs7QURMOUcsTUFBTSxPQUFPLHlCQUF5QjtJQXVCcEMsWUFBb0IsV0FBNEI7UUFBNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBYjdDLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztRQUV2QyxxQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBQ3BDLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUd2QyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLHNCQUFpQixHQUFpQixFQUFFLENBQUM7UUFDckMsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFPZixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSwwQkFBMEIsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUczRCxJQUFJLENBQUMsaUJB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O1lBRUgsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUE7U0FFdkI7YUFBSTtZQUNILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFFLENBQUM7WUFDeEUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7U0FDdEI7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBRSxDQUFBO0lBRTdHLENBQUM7O2tHQW5NVSx5QkFBeUI7NEVBQXpCLHlCQUF5QjtRQ0N0Qyw4QkFBNkUsYUFBQTtRQUlyRSwwSEFBcUk7UUFFckksaUNBQStLO1FBQTFCLHNHQUFTLG1CQUFlLElBQUM7UUFDNUssbUJBQWlJO1FBQWpJLDhCQUFpSTtRQUM3SCwwQkFBNks7UUFDL0ssaUJBQU07UUFDUixvQkFBOEI7UUFBOUIsK0JBQThCO1FBQUEsc0JBQU07UUFBQSxpQkFBTyxFQUFBO1FBRy9DLGlDQUFvTDtRQUEvQixzR0FBUyx3QkFBb0IsSUFBQztRQUMvSyxtQkFBZ0k7UUFBaEksOEJBQWdJO1FBQzVILDJCQUE2SztRQUMvSyxpQkFBTTtRQUNSLG9CQUE4QjtRQUE5QixnQ0FBOEI7UUFBQSx1QkFBTTtRQUFBLGlCQUFPLEVBQUEsRUFBQSxFQUFBOztRQWJDLGVBQXNCO1FBQXRCLCtDQUFzQjs7dUZETC9ELHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNFLGtDQUFrQztrRUFPNUMsaUJBQWlCO2tCQURoQixLQUFLO1lBSU4sV0FBVztrQkFEVixLQUFLO1lBSU4sU0FBUztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1mZWF0dXJlZC1wcm9kdWN0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZlYXR1cmVkLXByb2R1Y3RzLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlZFByb2R1Y3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpXG4gIG1heENvbXBvbmVudFdpZHRoOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZmVhdHVyZWRTZXg6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBicmFuZE5hbWU6IHN0cmluZztcbiAgICAgYnJhbmRNYXAgPSBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KCk7IFxuXG4gIGZlYXR1cmVkUHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBlbmRTdWJzJCA6IFN1YmplY3Q8YW55Pj0gbmV3IFN1YmplY3QoKTtcbiAgcmVzcG9uc2l2ZU9wdGlvbnM7XG5cbiAgaW5uZXJXaWR0aCA9IDA7XG4gIG1heENhcmRzID0gMDtcbiAgZGlzcGxheWVkUHJvZHVjdHM6IFByb2R1Y3QxMjNbXSA9IFtdO1xuICBjdXJyZW50SW5kZXggPSAwO1xuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UgKSB7IFxuXG5cbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTNjNzg4OTMwOWRlOTYwMTgwZGE0YVwiLFwiQmxhdWVyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxM2M4OWU5MzA5ZGU5NjAxODBkYTRkXCIsIFwiT2xkIFJpdmVyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTY3YmQxY2JhOGExZTBkOWMxYWY4OFwiLFwiQ29sbWFyXCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZWZlMWQ2MjM4NmNjMjI1MjViNlwiLFwiRUE3XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiNjIxODlmMWUxZDYyMzg2Y2MyMjUyNWI5XCIsXCJGcmVkIFBlcnJ5XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KCBcIjYyMTg5ZjM3MWQ2MjM4NmNjMjI1MjViY1wiLFwiS3dheVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjQ4MWQ2MjM4NmNjMjI1MjViZlwiLFwiTGFjb3N0ZVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZjdkMWQ2MjM4NmNjMjI1MjVjMlwiLFwiTXVycGh5Jm55ZVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWY5ODFkNjIzODZjYzIyNTI1YzVcIixcIlBlbmluc3VsYVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldChcIjYyMTg5ZmFkMWQ2MjM4NmNjMjI1MjVjOFwiLFwiU2F1Y29ueVwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MjE4OWZiYjFkNjIzODZjYzIyNTI1Y2JcIixcIlN1bmRla1wiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzJlMDVmM2I4YzU2N2RlNWVhODM2NjlcIixcIkJhcmJvdXJcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoIFwiNjM2YjU3ZTI1MDZiYTY1ZTU5M2JhYTgxXCIsXCJDaWVzc2VcIik7XG4gICAgdGhpcy5icmFuZE1hcC5zZXQoXCI2MzZiNTdmMzUwNmJhNjVlNTkzYmFhODRcIixcIkh1c2t5XCIpO1xuICAgIHRoaXMuYnJhbmRNYXAuc2V0KFwiaHVza3kgZmFsbFwiLCBcIjYzNmI1N2YzNTA2YmE2NWU1OTNiYWE4NFwiKTtcbiAgICB0aGlzLmJyYW5kTWFwLnNldCggXCI2MzZiNTgwNjUwNmJhNjVlNTkzYmFhODdcIixcIkNhbmFkaWVuc1wiKTtcblxuXG4gICAgdGhpcy5yZXNwb25zaXZlT3B0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogJzIwNzRweCcsXG4gICAgICAgIG51bVZpc2libGU6IDQsXG4gICAgICAgIG51bVNjcm9sbDogMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICcxMzc0cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiA0LFxuICAgICAgICBudW1TY3JvbGw6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnOTE2cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiAyLFxuICAgICAgICBudW1TY3JvbGw6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAnNzY4cHgnLFxuICAgICAgICBudW1WaXNpYmxlOiAyLFxuICAgICAgICBudW1TY3JvbGw6IDEsXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICc1NjhweCcsXG4gICAgICAgIG51bVZpc2libGU6IDIsXG4gICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6ICc0NjBweCcsXG4gICAgICAgIG51bVZpc2libGU6IDEsXG4gICAgICAgIG51bVNjcm9sbDogMSxcbiAgICAgIH0sXG4gICAgXTsgXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnNvbGUubG9nKFwid2lkdGggPSBcIiArIHRoaXMuaW5uZXJXaWR0aCk7XG5cblxuICAgIGlmKHRoaXMubWF4Q29tcG9uZW50V2lkdGggPCB0aGlzLmlubmVyV2lkdGggJiYgdGhpcy5pbm5lcldpZHRoIDwgMTYwMCl7XG4gICAgICB0aGlzLm1heENhcmRzID0gTWF0aC5mbG9vciggdGhpcy5tYXhDb21wb25lbnRXaWR0aCAvIDMyMCk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLm1heENhcmRzID0gTWF0aC5mbG9vciggdGhpcy5pbm5lcldpZHRoIC8gMzIwKTtcbiAgICB9XG5cblxuICAgIGNvbnNvbGUubG9nKFwibWF4IGNhcmRzID0gXCIgKyB0aGlzLm1heENhcmRzICsgXCIgbWF4IHdpZHRoID0gXCIgKyB0aGlzLm1heENvbXBvbmVudFdpZHRoICsgXCIgaW5uZXJXaWR0aCA9IFwiICsgdGhpcy5pbm5lcldpZHRoKTtcblxuICAgIGlmKHRoaXMubWF4Q2FyZHMgPjUpe1xuICAgICAgdGhpcy5tYXhDYXJkcyA9IDU7XG4gICAgfVxuXG4gICAgaWYodGhpcy5tYXhDYXJkcyA8Myl7XG4gICAgICB0aGlzLm1heENhcmRzID0gMztcbiAgICB9XG5cbiAgICB0aGlzLm1heENhcmRzICs9MjtcblxuICAgIHRoaXMuX2dldEZlYXR1cmVkUHJvZHVjdHMoKTtcbiAgICBjb25zb2xlLmxvZyhcImZldHVyZWQgcHJvZHVjdHMgZm9yIHRoaXMgYnJhbmQ6IFwiICsgdGhpcy5icmFuZE5hbWUpXG4gICAgbGV0IGJyYW5kID0gXCJcIlxuICAgIHRyeXtcbiAgICAgIGJyYW5kID10aGlzLmJyYW5kTWFwLmdldCh0aGlzLmJyYW5kTmFtZSkudG9Mb3dlckNhc2UoKVxuICAgIFxuICAgIH1jYXRjaChlKXtcbiAgICAgIGJyYW5kID10aGlzLmJyYW5kTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgaWYodGhpcy5mZWF0dXJlZFNleCA9PSBudWxsKXtcbiAgICAgIGxldCBjYXRlZ29yaWEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpYVwiKTtcbiAgICAgIGlmKGNhdGVnb3JpYSA9PT0gXCJ1b21vXCIpe1xuICAgICAgICB0aGlzLmZlYXR1cmVkU2V4ID0gXCJNXCJcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLmZlYXR1cmVkU2V4ID0gXCJGXCJcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIHRoaXMucHJvZFNlcnZpY2UuZ2V0RmVhdHVyZWRQcm9kdWN0c0J5QnJhbmQoYnJhbmQsIHRoaXMuZmVhdHVyZWRTZXgpLnBpcGUodGFrZVVudGlsKHRoaXMuZW5kU3VicyQpKS5zdWJzY3JpYmUocHJvZHVjdHMgPT57XG4gICAgICBjb25zb2xlLmxvZyhcIlBST0RPVFRJIDsgXFxOIFwiICsgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpKTtcbiAgICAgIGxldCBjdXJyZW50SWQgPSBcIlwiO1xuICAgICAgXG4gICAgICB0aGlzLmZlYXR1cmVkUHJvZHVjdHMgPSBwcm9kdWN0cy5zbGljZSgwLDEwKTtcblxuICAgICAgdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cyA9IHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5zbGljZSgwLCB0aGlzLm1heENhcmRzKTtcblxuICAgIH0pXG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5lbmRTdWJzJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RmVhdHVyZWRQcm9kdWN0cygpe1xuXG5cbiAgfVxuXG4gIGdvVG9QcmV2aW91c2VJbWFnZSgpe1xuXG5cblxuICAgIGlmKHRoaXMuY3VycmVudEluZGV4IC0xID49IDApe1xuXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4IC0tXG5cbiAgICAgICAgdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cyA9IHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5zbGljZSh0aGlzLmN1cnJlbnRJbmRleCwgdGhpcy5jdXJyZW50SW5kZXggKyB0aGlzLm1heENhcmRzKVxuXG5cbiAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLmZlYXR1cmVkUHJvZHVjdHMubGVuZ3RoIC0xO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheWVkUHJvZHVjdHMgPSB0aGlzLmZlYXR1cmVkUHJvZHVjdHMuc2xpY2UodGhpcy5jdXJyZW50SW5kZXgsIHRoaXMuY3VycmVudEluZGV4ICsgdGhpcy5tYXhDYXJkcyk7XG5cbiAgICAgICAgaWYodGhpcy5kaXNwbGF5ZWRQcm9kdWN0cy5sZW5ndGggPD0gdGhpcy5tYXhDYXJkcyl7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cyA9IHRoaXMuZGlzcGxheWVkUHJvZHVjdHMuY29uY2F0KHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5zbGljZSgwLCB0aGlzLm1heENhcmRzIC0gdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cy5sZW5ndGgpKVxuICAgICAgICB9XG5cblxuICAgIH1cblxuXG5cbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgaW5kZXggPSBcIiArIHRoaXMuY3VycmVudEluZGV4ICsgXCIgZmVhdHVyZWQgbGVuZ3RoID0gXCIgKyB0aGlzLmZlYXR1cmVkUHJvZHVjdHMubGVuZ3RoICsgXCIgZGlzcMOobGFleWQgbGVuZ3RoID0gXCIgKyB0aGlzLmRpc3BsYXllZFByb2R1Y3RzLmxlbmd0aClcblxuXG5cbiAgfVxuXG4gIGdvVG9OZXh0SW1hZ2UoKXtcblxuXG5cbiAgICBpZih0aGlzLmN1cnJlbnRJbmRleCArMSA8IHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5sZW5ndGgpe1xuICAgICAgdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cyA9IHRoaXMuZmVhdHVyZWRQcm9kdWN0cy5zbGljZSh0aGlzLmN1cnJlbnRJbmRleCArIDEsIHRoaXMuY3VycmVudEluZGV4ICsgdGhpcy5tYXhDYXJkcyArIDEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCBcIiBkaXNwbGF5ZWQgbGVuZ3RoID0gXCIgKyB0aGlzLmRpc3BsYXllZFByb2R1Y3RzLmxlbmd0aClcbiAgICAgICAgaWYodGhpcy5kaXNwbGF5ZWRQcm9kdWN0cy5sZW5ndGggPD0gdGhpcy5tYXhDYXJkcyl7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cyA9ICB0aGlzLmRpc3BsYXllZFByb2R1Y3RzLmNvbmNhdCh0aGlzLmZlYXR1cmVkUHJvZHVjdHMuc2xpY2UoMCx0aGlzLm1heENhcmRzIC0gdGhpcy5kaXNwbGF5ZWRQcm9kdWN0cy5sZW5ndGgpKVxuICAgICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudEluZGV4ICs9IDFcbiAgXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmRpc3BsYXllZFByb2R1Y3RzID0gdGhpcy5mZWF0dXJlZFByb2R1Y3RzLnNsaWNlKDAsIHRoaXMubWF4Q2FyZHMgKTtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgaW5kZXggPSBcIiArIHRoaXMuY3VycmVudEluZGV4ICsgXCIgZmVhdHVyZWQgbGVuZ3RoID0gXCIgKyB0aGlzLmZlYXR1cmVkUHJvZHVjdHMubGVuZ3RoIClcblxuICB9XG59XG4iLCJcbjwhLS1wLWNhcm91c2VsIFt2YWx1ZV09XCJmZWF0dXJlZFByb2R1Y3RzXCIgW251bVZpc2libGVdPVwiNFwiIFtudW1TY3JvbGxdPVwiMVwiIFtjaXJjdWxhcl09XCJ0cnVlXCJcbltyZXNwb25zaXZlT3B0aW9uc109XCJyZXNwb25zaXZlT3B0aW9uc1wiPlxuICA8bmctdGVtcGxhdGUgbGV0LXByb2R1Y3QgcFRlbXBsYXRlPVwiaXRlbVwiICBbc3R5bGVdPVwieydoZWlnaHQnOic2MDBweCd9XCIgPlxuICAgIDxlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0gIFtwcm9kdWN0XT0gJ3Byb2R1Y3QnPjwvZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1pdGVtPlxuICA8L25nLXRlbXBsYXRlPlxuPC9wLWNhcm91c2VsPiBcblxuLS0+XG5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwLTAgbS0wIGQtZmxleFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG5cbiAgPGRpdiBjbGFzcz1cImQtZmxleFwiIHN0eWxlPVwiIGZsZXgtZGlyZWN0aW9uOiByb3c7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHdpZHRoOiBmaXQtY29udGVudDsgaGVpZ2h0OiA1ODVweDsgbWF4LXdpZHRoOiAxNjAwcHg7XCI+XG5cbiAgICAgICAgPGVzaG9wLWZyb250ZW5kLXByb2R1Y3QtaXRlbSAqbmdGb3I9XCJsZXQgY2FyZCBvZiBkaXNwbGF5ZWRQcm9kdWN0czsgbGV0IGkgPSBpbmRleDtcIiAgW3Byb2R1Y3RdPSAnY2FyZCc+PC9lc2hvcC1mcm9udGVuZC1wcm9kdWN0LWl0ZW0+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOiA1MCU7d2lkdGg6IDQwcHg7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7aGVpZ2h0OiA0MHB4O1wiICAoY2xpY2spPVwiZ29Ub05leHRJbWFnZSgpXCI+XG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktYXJyb3ctcmlnaHRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEgOGEuNS41IDAgMCAxIC41LS41aDExLjc5M2wtMy4xNDctMy4xNDZhLjUuNSAwIDAgMSAuNzA4LS43MDhsNCA0YS41LjUgMCAwIDEgMCAuNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTMuMjkzIDguNUgxLjVBLjUuNSAwIDAgMSAxIDh6XCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5CdXR0b248L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDUwJTt3aWR0aDogNDBweDtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgaGVpZ2h0OiA0MHB4O1wiICAoY2xpY2spPVwiZ29Ub1ByZXZpb3VzZUltYWdlKClcIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1sZWZ0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNSA4YS41LjUgMCAwIDAtLjUtLjVIMi43MDdsMy4xNDctMy4xNDZhLjUuNSAwIDEgMC0uNzA4LS43MDhsLTQgNGEuNS41IDAgMCAwIDAgLjcwOGw0IDRhLjUuNSAwIDAgMCAuNzA4LS43MDhMMi43MDcgOC41SDE0LjVBLjUuNSAwIDAgMCAxNSA4elwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+QnV0dG9uPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgXG4gIDwvZGl2PlxuXG48L2Rpdj4iXX0=