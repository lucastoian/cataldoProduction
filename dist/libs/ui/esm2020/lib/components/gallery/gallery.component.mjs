import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product123 } from '../../modules/product123';
import { ProductsService } from '../../modules/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../modules/products.service";
import * as i2 from "@angular/router";
import * as i3 from "primeng/galleria";
import * as i4 from "primeng/api";
import * as i5 from "@angular/common";
function GalleryComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 19);
    i0.ɵɵlistener("click", function GalleryComponent_ng_template_2_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const item_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.printitem(item_r3); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("src", item_r3, i0.ɵɵsanitizeUrl);
} }
function GalleryComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "img", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r6, i0.ɵɵsanitizeUrl);
} }
function GalleryComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 22);
    i0.ɵɵlistener("click", function GalleryComponent_img_8_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const imageUrl_r7 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.changeSelectedImage(imageUrl_r7.blob); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageUrl_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵproperty("id", i_r8)("src", imageUrl_r7.blob, i0.ɵɵsanitizeUrl);
} }
const _c0 = function () { return { "max-width": "640px" }; };
export class GalleryComponent {
    constructor(productsService, route) {
        this.productsService = productsService;
        this.route = route;
        this.currentImageIndex = 0;
        this.imageArray = [];
    }
    async ngOnInit() {
        this.productsService.getProduct(this.currentId);
        //this.loadImages();
        this._retrieveId();
        console.log("images = " + JSON.stringify(this.images));
    }
    async loadImages() {
        this.selectedImageUrl = this.product.image;
        this.images.push(this.image);
        for (let i = 0; i < this.images.length - 1; i++) {
            let blob = await this.ajaxGetImageData(this.images[i]);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                this.imageArray.push({ source: base64data });
            };
        }
        console.log("imageArray çççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççççòò= " + JSON.stringify(this.imageArray));
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
        for (let i = 0; i < this.imageArray.length; i++) {
            if (this.imageArray[i].blob == imageUrl) {
                this.currentImageIndex = i;
                return;
            }
        }
    }
    printitem(item) {
        console.log(item);
    }
    goToNextImage() {
        if (this.currentImageIndex == this.imageArray.length - 1) {
            this.currentImageIndex = 0;
        }
        else {
            this.currentImageIndex++;
        }
        this.selectedImageUrl = this.imageArray[this.currentImageIndex].blob;
    }
    goToPreviouseImage() {
        if (this.currentImageIndex == 0) {
            this.currentImageIndex = this.imageArray.length - 1;
        }
        else {
            this.currentImageIndex--;
        }
        this.selectedImageUrl = this.imageArray[this.currentImageIndex].blob;
    }
    zoomImage(i) {
        if (window.innerWidth > 1245) {
            const image = document.getElementById(i);
            const newNode = image.cloneNode(true);
            newNode['id'] = 'zoom';
            newNode['style'] = 'height:40%; top:20%; position:fixed;  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; z-index:1000; padding:0; margin:0';
            ;
            document.getElementById('mainImg').appendChild(newNode);
        }
    }
    removeZoomImage(url) {
        if (window.innerWidth > 1245) {
            document.getElementById('zoom').remove();
        }
    }
    loadSomeThing(url, id) {
        this.imageArray.push({ id: id, blob: this.ajaxGetImageData(url) });
    }
    async ajaxGetImageData(url) {
        const response = await fetch(url, { cache: "no-store" });
        const imageBlob = await response.blob();
        return imageBlob;
        //Code to get base64 image string
    }
    get hasImages() {
        return this.images?.length > 0;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(i0.ɵɵdirectiveInject(i1.ProductsService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
GalleryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { product: "product", image: "image", images: "images" }, decls: 22, vars: 9, consts: [[1, "gallery", 2, "transform", "translateX(13px)"], [3, "value", "containerStyle", "numVisible", "showThumbnails", "showItemNavigators", "showIndicators", "valueChange"], ["pTemplate", "item"], ["pTemplate", "thumbnail"], [1, "galleryDesktop"], [1, "grid", "w-100", "m-0", "p-0", "h-100", 2, "max-height", "850px"], [1, "row", "w-100", "m-0", "p-0", 2, "justify-content", "end"], [1, "col-3", "p-0", "d-flex", 2, "max-height", "850px", "overflow-y", "auto", "flex-direction", "column", "flex-basis", "content"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "class", "p-1", "alt", "Responsive image", "style", "max-height: 100px;", 3, "id", "src", "click", 4, "ngFor", "ngForOf"], [1, "col-auto", "p-0", "d-flex", 2, "justify-content", "start"], [2, "position", "relative", "height", "fit-content", "width", "fit-content"], ["alt", "", 2, "height", "850px", 3, "src"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "right", "0", "top", "50%", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-right"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "left", "0", "top", "50%", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left"], ["fill-rule", "evenodd", "d", "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"], [2, "width", "100%", "display", "block", 3, "src", "click"], [1, "grid", "grid-nogutter", "justify-content-center"], [2, "display", "block", 3, "src"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "alt", "Responsive image", 1, "p-1", 2, "max-height", "100px", 3, "id", "src", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "p-galleria", 1);
        i0.ɵɵlistener("valueChange", function GalleryComponent_Template_p_galleria_valueChange_1_listener($event) { return ctx.images = $event; });
        i0.ɵɵtemplate(2, GalleryComponent_ng_template_2_Template, 1, 1, "ng-template", 2);
        i0.ɵɵtemplate(3, GalleryComponent_ng_template_3_Template, 2, 1, "ng-template", 3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        i0.ɵɵtemplate(8, GalleryComponent_img_8_Template, 1, 2, "img", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 9)(10, "div", 10);
        i0.ɵɵelement(11, "img", 11);
        i0.ɵɵelementStart(12, "button", 12);
        i0.ɵɵlistener("click", function GalleryComponent_Template_button_click_12_listener() { return ctx.goToNextImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(13, "svg", 13);
        i0.ɵɵelement(14, "path", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(15, "span", 15);
        i0.ɵɵtext(16, "Button");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(17, "button", 16);
        i0.ɵɵlistener("click", function GalleryComponent_Template_button_click_17_listener() { return ctx.goToPreviouseImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(18, "svg", 17);
        i0.ɵɵelement(19, "path", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(20, "span", 15);
        i0.ɵɵtext(21, "Button");
        i0.ɵɵelementEnd()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.images)("containerStyle", i0.ɵɵpureFunction0(8, _c0))("numVisible", 1)("showThumbnails", false)("showItemNavigators", true)("showIndicators", true);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.imageArray);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("src", ctx.selectedImageUrl, i0.ɵɵsanitizeUrl);
    } }, directives: [i3.Galleria, i4.PrimeTemplate, i5.NgForOf], styles: [".galleryDesktop[_ngcontent-%COMP%]{display:none}@media screen and (min-width: 993px){.gallery[_ngcontent-%COMP%]{display:none}.galleryDesktop[_ngcontent-%COMP%]{display:inline}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GalleryComponent, [{
        type: Component,
        args: [{ selector: 'ui-gallery', template: "<div class=\"gallery\" style=\"transform: translateX(13px);\">\n    <p-galleria [(value)]=\"images\" [containerStyle]=\"{'max-width': '640px'}\" [numVisible]=\"1\"\n    [showThumbnails]=\"false\" [showItemNavigators]=\"true\"  [showIndicators]=\"true\"> \n    <ng-template pTemplate=\"item\" let-item>\n        <img [src]=\"item\" style=\"width: 100%; display: block;\" (click)=\"printitem(item)\" />\n    </ng-template>\n    <ng-template pTemplate=\"thumbnail\" let-item>\n        <div class=\"grid grid-nogutter justify-content-center\">\n            <img [src]=\"item\" style=\"display: block;\" />\n        </div>\n    </ng-template>\n</p-galleria>\n</div>\n\n\n\n<div class=\"galleryDesktop\">\n\n    <div class=\"grid w-100 m-0 p-0 h-100\" style=\"max-height: 850px;\">\n        <div class=\"row w-100 m-0 p-0\" style=\"justify-content: end;\">\n            <div class=\"col-3 p-0 d-flex\" style=\"max-height: 850px; overflow-y: auto; flex-direction: column; flex-basis: content;\">\n\n        <img  *ngFor=\"let imageUrl of imageArray; let i = index;\" [id]=\"i\"  onmouseover=\"this.style.backgroundColor='black'\" onmouseout=\"this.style.backgroundColor=''\"\n        (click)=\"changeSelectedImage(imageUrl.blob)\" [src]= \"imageUrl.blob\"   class=\"p-1\" alt=\"Responsive image\" style=\"max-height: 100px;\">\n\n            </div>\n            <div class=\"col-auto p-0 d-flex\" style=\"justify-content: start; \">\n                <div style=\"position: relative; height: fit-content; width: fit-content;\">\n                    <img  [src]=\"selectedImageUrl\" alt=\"\" style=\" height: 850px;\">\n                    <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; right: 0; top: 50%;\"  (click)=\"goToNextImage()\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\">\n                            <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/>\n                          </svg>\n                        <span class=\"visually-hidden\">Button</span>\n                    </button>\n\n                    <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; left: 0; top: 50%;\"  (click)=\"goToPreviouseImage()\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n                            <path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n                          </svg>\n                        <span class=\"visually-hidden\">Button</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n  \n</div>\n\n", styles: [".galleryDesktop{display:none}@media screen and (min-width: 993px){.gallery{display:none}.galleryDesktop{display:inline}}\n"] }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }]; }, { product: [{
            type: Input
        }], image: [{
            type: Input
        }], images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7O0lDQXpELCtCQUFtRjtJQUE1Qiw2TkFBUyx5QkFBZSxJQUFDO0lBQWhGLGlCQUFtRjs7O0lBQTlFLCtDQUFZOzs7SUFHakIsK0JBQXVEO0lBQ25ELDBCQUE0QztJQUNoRCxpQkFBTTs7O0lBREcsZUFBWTtJQUFaLCtDQUFZOzs7O0lBY3JCLCtCQUNvSTtJQUFwSSwwTkFBUyw0Q0FBa0MsSUFBQztJQUQ1QyxpQkFDb0k7Ozs7SUFEMUUseUJBQVEsMkNBQUE7OztBRFYxRSxNQUFNLE9BQU8sZ0JBQWdCO0lBVTNCLFlBQW9CLGVBQWdDLEVBQVUsS0FBcUI7UUFBL0Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFSbkYsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFTZixDQUFDO0lBRUYsS0FBSyxDQUFDLFFBQVE7UUFFWixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFD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RyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG5pbXBvcnQgeyBQcm9kdWN0MTIzfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1nYWxsZXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjdXJyZW50SWQ6IHN0cmluZztcbiAgY3VycmVudEltYWdlSW5kZXggPSAwO1xuICBpbWFnZUFycmF5ID0gW107XG4gIHNlbGVjdGVkSW1hZ2VVcmw6IHN0cmluZztcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcbiBcbiAgQElucHV0KCkgaW1hZ2VzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSApIHtcbiAgICBcbiAgIH1cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3QodGhpcy5jdXJyZW50SWQpO1xuICAgIC8vdGhpcy5sb2FkSW1hZ2VzKCk7XG5cbiAgICB0aGlzLl9yZXRyaWV2ZUlkKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImltYWdlcyA9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5pbWFnZXMpKVxuXG4gIH1cblxuXG4gIGFzeW5jIGxvYWRJbWFnZXMoKXtcbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSB0aGlzLnByb2R1Y3QuaW1hZ2U7XG4gICAgdGhpcy5pbWFnZXMucHVzaCh0aGlzLmltYWdlKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuaW1hZ2VzLmxlbmd0aCAtMTsgaSsrKXtcbiAgICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VzW2ldKTtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2U2NGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICB0aGlzLmltYWdlQXJyYXkucHVzaCh7c291cmNlOmJhc2U2NGRhdGF9KTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2VBcnJheSDDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDssOyPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1hZ2VBcnJheSkpO1xuXG4gIH1cblxuICBwcml2YXRlIF9yZXRyaWV2ZUlkKCl7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT57XG4gICAgICBpZihwYXJhbXMuaWQpe1xuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5pZDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInhcIik7XG5cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICBjaGFuZ2VTZWxlY3RlZEltYWdlKGltYWdlVXJsOiBzdHJpbmcpe1xuXG5cbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSBpbWFnZVVybDtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuaW1hZ2VBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICBpZih0aGlzLmltYWdlQXJyYXlbaV0uYmxvYiA9PSBpbWFnZVVybCl7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSBpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBwcmludGl0ZW0oaXRlbSl7XG4gICAgY29uc29sZS5sb2coaXRlbSlcbiAgfVxuXG4gICAgZ29Ub05leHRJbWFnZSgpe1xuICAgICAgaWYodGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9PSB0aGlzLmltYWdlQXJyYXkubGVuZ3RoIC0xKXtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDBcbiAgICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCArKztcbiAgICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSB0aGlzLmltYWdlQXJyYXlbdGhpcy5jdXJyZW50SW1hZ2VJbmRleF0uYmxvYjtcbiAgfVxuXG4gICAgICBnb1RvUHJldmlvdXNlSW1hZ2UoKXtcbiAgICAgICAgaWYodGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9PSAwKXtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gdGhpcy5pbWFnZUFycmF5Lmxlbmd0aCAtMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCAtLTtcbiAgICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gdGhpcy5pbWFnZUFycmF5W3RoaXMuY3VycmVudEltYWdlSW5kZXhdLmJsb2I7XG4gICAgfVxuXG5cbiAgem9vbUltYWdlKGk6c3RyaW5nKXtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDEyNDUpe1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSk7XG4gICAgY29uc3QgbmV3Tm9kZSA9IGltYWdlLmNsb25lTm9kZSh0cnVlKTtcbiAgICBuZXdOb2RlWydpZCddID0gJ3pvb20nO1xuICAgIG5ld05vZGVbJ3N0eWxlJ10gPSAnaGVpZ2h0OjQwJTsgdG9wOjIwJTsgcG9zaXRpb246Zml4ZWQ7ICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAtMjNweCAyNXB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggLTM2cHggMzBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggLTc5cHggNDBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDRweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDhweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDE2cHggOHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAzMnB4IDE2cHg7IHotaW5kZXg6MTAwMDsgcGFkZGluZzowOyBtYXJnaW46MCc7O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSW1nJykuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlWm9vbUltYWdlKHVybCl7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPiAxMjQ1KXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6b29tJykucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cblxuXG5sb2FkU29tZVRoaW5nKHVybCwgaWQpIHtcbiAgdGhpcy5pbWFnZUFycmF5LnB1c2goe2lkOiBpZCwgYmxvYjogIHRoaXMuYWpheEdldEltYWdlRGF0YSh1cmwpfSlcbn1cblxuIGFzeW5jIGFqYXhHZXRJbWFnZURhdGEodXJsKSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcbiAgICBjb25zdCBpbWFnZUJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgcmV0dXJuIGltYWdlQmxvYjtcblxuXG4gIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xuXG59XG5cblxuICBnZXQgaGFzSW1hZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlcz8ubGVuZ3RoID4gMDtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZ2FsbGVyeVwiIHN0eWxlPVwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzcHgpO1wiPlxuICAgIDxwLWdhbGxlcmlhIFsodmFsdWUpXT1cImltYWdlc1wiIFtjb250YWluZXJTdHlsZV09XCJ7J21heC13aWR0aCc6ICc2NDBweCd9XCIgW251bVZpc2libGVdPVwiMVwiXG4gICAgW3Nob3dUaHVtYm5haWxzXT1cImZhbHNlXCIgW3Nob3dJdGVtTmF2aWdhdG9yc109XCJ0cnVlXCIgIFtzaG93SW5kaWNhdG9yc109XCJ0cnVlXCI+IFxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJpdGVtXCIgbGV0LWl0ZW0+XG4gICAgICAgIDxpbWcgW3NyY109XCJpdGVtXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgZGlzcGxheTogYmxvY2s7XCIgKGNsaWNrKT1cInByaW50aXRlbShpdGVtKVwiIC8+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwidGh1bWJuYWlsXCIgbGV0LWl0ZW0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtbm9ndXR0ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGltZyBbc3JjXT1cIml0ZW1cIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG48L3AtZ2FsbGVyaWE+XG48L2Rpdj5cblxuXG5cbjxkaXYgY2xhc3M9XCJnYWxsZXJ5RGVza3RvcFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImdyaWQgdy0xMDAgbS0wIHAtMCBoLTEwMFwiIHN0eWxlPVwibWF4LWhlaWdodDogODUwcHg7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdy0xMDAgbS0wIHAtMFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBlbmQ7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgcC0wIGQtZmxleFwiIHN0eWxlPVwibWF4LWhlaWdodDogODUwcHg7IG92ZXJmbG93LXk6IGF1dG87IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGZsZXgtYmFzaXM6IGNvbnRlbnQ7XCI+XG5cbiAgICAgICAgPGltZyAgKm5nRm9yPVwibGV0IGltYWdlVXJsIG9mIGltYWdlQXJyYXk7IGxldCBpID0gaW5kZXg7XCIgW2lkXT1cImlcIiAgb25tb3VzZW92ZXI9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nYmxhY2snXCIgb25tb3VzZW91dD1cInRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yPScnXCJcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGVkSW1hZ2UoaW1hZ2VVcmwuYmxvYilcIiBbc3JjXT0gXCJpbWFnZVVybC5ibG9iXCIgICBjbGFzcz1cInAtMVwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDEwMHB4O1wiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0byBwLTAgZC1mbGV4XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0OyBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IGZpdC1jb250ZW50OyB3aWR0aDogZml0LWNvbnRlbnQ7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgIFtzcmNdPVwic2VsZWN0ZWRJbWFnZVVybFwiIGFsdD1cIlwiIHN0eWxlPVwiIGhlaWdodDogODUwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1saWdodCBidG4tc21cIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDA7IHRvcDogNTAlO1wiICAoY2xpY2spPVwiZ29Ub05leHRJbWFnZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1yaWdodFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xIDhhLjUuNSAwIDAgMSAuNS0uNWgxMS43OTNsLTMuMTQ3LTMuMTQ2YS41LjUgMCAwIDEgLjcwOC0uNzA4bDQgNGEuNS41IDAgMCAxIDAgLjcwOGwtNCA0YS41LjUgMCAwIDEtLjcwOC0uNzA4TDEzLjI5MyA4LjVIMS41QS41LjUgMCAwIDEgMSA4elwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkJ1dHRvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDUwJTtcIiAgKGNsaWNrKT1cImdvVG9QcmV2aW91c2VJbWFnZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1sZWZ0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE1IDhhLjUuNSAwIDAgMC0uNS0uNUgyLjcwN2wzLjE0Ny0zLjE0NmEuNS41IDAgMSAwLS43MDgtLjcwOGwtNCA0YS41LjUgMCAwIDAgMCAuNzA4bDQgNGEuNS41IDAgMCAwIC43MDgtLjcwOEwyLjcwNyA4LjVIMTQuNUEuNS41IDAgMCAwIDE1IDh6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+QnV0dG9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgXG48L2Rpdj5cblxuIl19