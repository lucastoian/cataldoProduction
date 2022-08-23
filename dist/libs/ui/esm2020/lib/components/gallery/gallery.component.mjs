import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product123 } from '../../modules/product123';
import { ProductsService } from '../../modules/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../modules/products.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
const _c0 = function (a0) { return { "background-image": a0 }; };
function GalleryComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function GalleryComponent_div_4_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const imageUrl_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.changeSelectedImage(imageUrl_r1); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageUrl_r1 = ctx.$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c0, "url(" + imageUrl_r1 + ")"));
} }
export class GalleryComponent {
    constructor(productsService, route) {
        this.productsService = productsService;
        this.route = route;
    }
    ngOnInit() {
        this.productsService.getProduct(this.currentId);
        this.selectedImageUrl = this.product.image;
        this.images.push(this.image);
        this._retrieveId();
    }
    _retrieveId() {
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.currentId = params.id;
                console.log(this.currentId);
                console.log("x");
            }
        });
    }
    changeSelectedImage(imageUrl) {
        this.selectedImageUrl = imageUrl;
    }
    get hasImages() {
        return this.images?.length > 0;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(i0.ɵɵdirectiveInject(i1.ProductsService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
GalleryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { product: "product", image: "image", images: "images" }, decls: 5, vars: 2, consts: [[1, "gallery"], [1, "main-image"], ["alt", "", 3, "src"], [1, "images", "d-flex", "flex-row", 2, "height", "280px", "overflow", "auto", "max-width", "720px"], ["style", "height: 100%; min-width: 180px; background-size: contain; background-repeat: no-repeat;", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [2, "height", "100%", "min-width", "180px", "background-size", "contain", "background-repeat", "no-repeat", 3, "ngStyle", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, GalleryComponent_div_4_Template, 1, 3, "div", 4);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.selectedImageUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.images);
    } }, directives: [i3.NgForOf, i3.NgStyle], styles: ["@media only screen and (max-width: 1500px){.images[_ngcontent-%COMP%]{width:92vw}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GalleryComponent, [{
        type: Component,
        args: [{ selector: 'ui-gallery', styles: [`

  @media only screen and (max-width: 1500px) {
    .images {
      width: 92vw;
    }
  }



  `
                ], template: "<div class=\"gallery\">\r\n    <div class=\"main-image\">\r\n        <img [src]=\"selectedImageUrl\" alt=\"\">\r\n    </div>\r\n    <div class=\"images d-flex flex-row\" style=\"height: 280px; overflow: auto; max-width: 720px\">\r\n\r\n        <div *ngFor=\"let imageUrl of images\"\r\n        (click)=\"changeSelectedImage(imageUrl)\"\r\n        [ngStyle]=\"{ 'background-image': 'url(' + imageUrl + ')' }\" style=\"height: 100%; min-width: 180px; background-size: contain; background-repeat: no-repeat;\"></div>\r\n\r\n    </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }]; }, { product: [{
            type: Input
        }], image: [{
            type: Input
        }], images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7SUNFekQsOEJBRTRKO0lBRDVKLHlOQUFTLHVDQUE2QixJQUFDO0lBQ3FILGlCQUFNOzs7SUFBbEssZ0ZBQTJEOztBRGNuRSxNQUFNLE9BQU8sZ0JBQWdCO0lBTzNCLFlBQW9CLGVBQWdDLEVBQVUsS0FBcUI7UUFBL0Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBSSxDQUFDO0lBRXhGLFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFckIsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFDLEVBQUU7WUFDcEMsSUFBRyxNQUFNLENBQUMsRUFBRSxFQUFDO2dCQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFbEI7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxtQkFBbUIsQ0FBQyxRQUFnQjtRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnRkFuQ1UsZ0JBQWdCO21FQUFoQixnQkFBZ0I7UUN0QjdCLDhCQUFxQixhQUFBO1FBRWIseUJBQXFDO1FBQ3pDLGlCQUFNO1FBQ04sOEJBQTRGO1FBRXhGLGlFQUVrSztRQUV0SyxpQkFBTSxFQUFBOztRQVJHLGVBQXdCO1FBQXhCLDREQUF3QjtRQUlILGVBQVM7UUFBVCxvQ0FBUzs7dUZEZ0I5QixnQkFBZ0I7Y0FoQjVCLFNBQVM7MkJBQ0UsWUFBWSxVQUVkLENBQUM7Ozs7Ozs7Ozs7R0FVUjtpQkFDQTsrRkFLUSxPQUFPO2tCQUFmLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xyXG5pbXBvcnQgeyBQcm9kdWN0MTIzfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2R1Y3QxMjMnO1xyXG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2R1Y3RzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1aS1nYWxsZXJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbYFxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgLmltYWdlcyB7XHJcbiAgICAgIHdpZHRoOiA5MnZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY3VycmVudElkOiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWRJbWFnZVVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XHJcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSBpbWFnZXM6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0UHJvZHVjdCh0aGlzLmN1cnJlbnRJZCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSB0aGlzLnByb2R1Y3QuaW1hZ2U7XHJcbiAgICB0aGlzLmltYWdlcy5wdXNoKHRoaXMuaW1hZ2UpO1xyXG4gICAgdGhpcy5fcmV0cmlldmVJZCgpO1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JldHJpZXZlSWQoKXtcclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+e1xyXG4gICAgICBpZihwYXJhbXMuaWQpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLmlkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudElkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInhcIik7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIGNoYW5nZVNlbGVjdGVkSW1hZ2UoaW1hZ2VVcmw6IHN0cmluZyl7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSBpbWFnZVVybDtcclxuICB9XHJcblxyXG4gIGdldCBoYXNJbWFnZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbWFnZXM/Lmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZ2FsbGVyeVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW4taW1hZ2VcIj5cclxuICAgICAgICA8aW1nIFtzcmNdPVwic2VsZWN0ZWRJbWFnZVVybFwiIGFsdD1cIlwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VzIGQtZmxleCBmbGV4LXJvd1wiIHN0eWxlPVwiaGVpZ2h0OiAyODBweDsgb3ZlcmZsb3c6IGF1dG87IG1heC13aWR0aDogNzIwcHhcIj5cclxuXHJcbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaW1hZ2VVcmwgb2YgaW1hZ2VzXCJcclxuICAgICAgICAoY2xpY2spPVwiY2hhbmdlU2VsZWN0ZWRJbWFnZShpbWFnZVVybClcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBpbWFnZVVybCArICcpJyB9XCIgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7IG1pbi13aWR0aDogMTgwcHg7IGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcIj48L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==