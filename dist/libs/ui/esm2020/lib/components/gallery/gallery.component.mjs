import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product123 } from '../../modules/product123';
import { ProductsService } from '../../modules/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../modules/products.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "primeng/api";
import * as i5 from "primeng/galleria";
function GalleryComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 17);
    i0.ɵɵlistener("click", function GalleryComponent_ng_template_2_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const item_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.printitem(item_r3)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("src", item_r3, i0.ɵɵsanitizeUrl);
} }
function GalleryComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "img", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r6, i0.ɵɵsanitizeUrl);
} }
function GalleryComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 20);
    i0.ɵɵlistener("click", function GalleryComponent_img_7_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const imageUrl_r7 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.changeSelectedImage(imageUrl_r7.blob)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageUrl_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵproperty("id", i_r8)("src", imageUrl_r7.blob, i0.ɵɵsanitizeUrl);
} }
const _c0 = function () { return { "max-width": "640px" }; };
const _c1 = function () { return { "margin": "auto" }; };
export class GalleryComponent {
    constructor(productsService, route) {
        this.productsService = productsService;
        this.route = route;
        this.currentImageIndex = 0;
        this.imageArray = [];
    }
    async ngOnInit() {
        this.productsService.getProduct(this.currentId);
        this.loadImages();
        this._retrieveId();
        console.log("images = " + JSON.stringify(this.images));
    }
    async loadImages() {
        this.images.push(this.image);
        for (let i = 0; i < this.images.length - 1; i++) {
            let blob = await this.ajaxGetImageData(this.images[i]);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                this.imageArray.push({ blob: base64data });
                this.selectedImageUrl = this.imageArray[0].blob;
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
GalleryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { product: "product", image: "image", images: "images" }, decls: 20, vars: 11, consts: [[1, "gallery"], [3, "value", "containerStyle", "numVisible", "showThumbnails", "showItemNavigators", "showIndicators", "valueChange"], ["pTemplate", "item"], ["pTemplate", "thumbnail"], [1, "galleryDesktop", 2, "background-color", "rgb(89, 89, 89)"], [1, "d-flex", 2, "flex-direction", "row"], [1, "p-0", "d-flex", 2, "max-height", "850px", "overflow-y", "auto", "flex-direction", "column", "flex-basis", "content", "max-width", "100%"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "class", "p-1", "alt", "Responsive image", "style", "max-height: 100px; max-width: 70px;", 3, "id", "src", "click", 4, "ngFor", "ngForOf"], [2, "position", "relative", "height", "100%", "width", "100%", "display", "flex", "justify-content", "center"], ["alt", "", 2, "height", "850px", 3, "src"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "right", "0", "top", "50%", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-right"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "left", "0", "top", "50%", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left"], ["fill-rule", "evenodd", "d", "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"], [2, "width", "100%", "display", "block", 3, "src", "click"], [1, "grid", "grid-nogutter", "justify-content-center"], [2, "display", "block", 3, "src"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "alt", "Responsive image", 1, "p-1", 2, "max-height", "100px", "max-width", "70px", 3, "id", "src", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "p-galleria", 1);
        i0.ɵɵlistener("valueChange", function GalleryComponent_Template_p_galleria_valueChange_1_listener($event) { return ctx.images = $event; });
        i0.ɵɵtemplate(2, GalleryComponent_ng_template_2_Template, 1, 1, "ng-template", 2);
        i0.ɵɵtemplate(3, GalleryComponent_ng_template_3_Template, 2, 1, "ng-template", 3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
        i0.ɵɵtemplate(7, GalleryComponent_img_7_Template, 1, 2, "img", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 8);
        i0.ɵɵelement(9, "img", 9);
        i0.ɵɵelementStart(10, "button", 10);
        i0.ɵɵlistener("click", function GalleryComponent_Template_button_click_10_listener() { return ctx.goToNextImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(11, "svg", 11);
        i0.ɵɵelement(12, "path", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(13, "span", 13);
        i0.ɵɵtext(14, "Button");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "button", 14);
        i0.ɵɵlistener("click", function GalleryComponent_Template_button_click_15_listener() { return ctx.goToPreviouseImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(16, "svg", 15);
        i0.ɵɵelement(17, "path", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(18, "span", 13);
        i0.ɵɵtext(19, "Button");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.images)("containerStyle", i0.ɵɵpureFunction0(9, _c0))("containerStyle", i0.ɵɵpureFunction0(10, _c1))("numVisible", 1)("showThumbnails", false)("showItemNavigators", true)("showIndicators", true);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.imageArray);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.selectedImageUrl, i0.ɵɵsanitizeUrl);
    } }, dependencies: [i3.NgForOf, i4.PrimeTemplate, i5.Galleria], styles: [".galleryDesktop[_ngcontent-%COMP%]{display:none}@media screen and (min-width: 993px){.gallery[_ngcontent-%COMP%]{display:none}.galleryDesktop[_ngcontent-%COMP%]{display:inline}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GalleryComponent, [{
        type: Component,
        args: [{ selector: 'ui-gallery', template: "<div class=\"gallery\">\n    <p-galleria [(value)]=\"images\" [containerStyle]=\"{'max-width': '640px'}\" [containerStyle]=\"{'margin': 'auto'}\" [numVisible]=\"1\"\n    [showThumbnails]=\"false\" [showItemNavigators]=\"true\"  [showIndicators]=\"true\"> \n    <ng-template pTemplate=\"item\" let-item>\n        <img [src]=\"item\" style=\"width: 100%; display: block;\" (click)=\"printitem(item)\" />\n    </ng-template>\n    <ng-template pTemplate=\"thumbnail\" let-item>\n        <div class=\"grid grid-nogutter justify-content-center\">\n            <img [src]=\"item\" style=\"display: block;\" />\n        </div>\n    </ng-template>\n</p-galleria>\n</div>\n\n\n\n<div class=\"galleryDesktop\" style=\" background-color: rgb(89, 89, 89);\">\n    <div class=\"d-flex\" style=\"flex-direction: row;\">\n        <div class=\"p-0 d-flex\" style=\"max-height: 850px; overflow-y: auto; flex-direction: column; flex-basis: content; max-width: 100%;\">\n\n            <img  *ngFor=\"let imageUrl of imageArray; let i = index;\" [id]=\"i\"  onmouseover=\"this.style.backgroundColor='black'\" onmouseout=\"this.style.backgroundColor=''\"\n            (click)=\"changeSelectedImage(imageUrl.blob)\" [src]= \"imageUrl.blob\"   class=\"p-1\" alt=\"Responsive image\" style=\"max-height: 100px; max-width: 70px;\">\n\n        </div>\n        <div style=\"position: relative; height: 100%; width: 100%; display: flex; justify-content: center;\">\n            <img  [src]=\"selectedImageUrl\" alt=\"\" style=\" height: 850px;\">\n            <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; right: 0; top: 50%;\"  (click)=\"goToNextImage()\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\">\n                    <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/>\n                  </svg>\n                <span class=\"visually-hidden\">Button</span>\n            </button>\n\n            <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; left: 0; top: 50%;\"  (click)=\"goToPreviouseImage()\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n                    <path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n                  </svg>\n                <span class=\"visually-hidden\">Button</span>\n            </button>\n        </div>\n    </div>\n</div>\n\n\n<!--div class=\"galleryDesktop\">\n\n    <div class=\"grid w-100 m-0 p-0 h-100\" style=\"max-height: 850px;\">\n        <div class=\"row w-100 m-0 p-0 d-flex\" style=\"justify-content: end; flex-direction: row;\">\n            <div class=\"col-3 p-0 d-flex\" style=\"max-height: 850px; overflow-y: auto; flex-direction: column; flex-basis: content; max-width: 100%;\">\n\n                <img  *ngFor=\"let imageUrl of imageArray; let i = index;\" [id]=\"i\"  onmouseover=\"this.style.backgroundColor='black'\" onmouseout=\"this.style.backgroundColor=''\"\n                (click)=\"changeSelectedImage(imageUrl.blob)\" [src]= \"imageUrl.blob\"   class=\"p-1\" alt=\"Responsive image\" style=\"max-height: 100px; max-width: 70px;\">\n\n            </div>\n            <div class=\"p-0\" style=\"width: auto;\">\n                <div style=\"position: relative; height: 100%; width: 100%;\">\n                    <img  [src]=\"selectedImageUrl\" alt=\"\" style=\" height: 850px;\">\n                    <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; right: 0; top: 50%;\"  (click)=\"goToNextImage()\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\">\n                            <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/>\n                          </svg>\n                        <span class=\"visually-hidden\">Button</span>\n                    </button>\n\n                    <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; left: 0; top: 50%;\"  (click)=\"goToPreviouseImage()\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n                            <path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n                          </svg>\n                        <span class=\"visually-hidden\">Button</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n  \n</div>\n-->\n\n", styles: [".galleryDesktop{display:none}@media screen and (min-width: 993px){.gallery{display:none}.galleryDesktop{display:inline}}\n"] }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }]; }, { product: [{
            type: Input
        }], image: [{
            type: Input
        }], images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7O0lDQXpELCtCQUFtRjtJQUE1Qiw2TkFBUyxlQUFBLHlCQUFlLENBQUEsSUFBQztJQUFoRixpQkFBbUY7OztJQUE5RSwrQ0FBWTs7O0lBR2pCLCtCQUF1RDtJQUNuRCwwQkFBNEM7SUFDaEQsaUJBQU07OztJQURHLGVBQVk7SUFBWiwrQ0FBWTs7OztJQVlqQiwrQkFDcUo7SUFBckosME5BQVMsZUFBQSw0Q0FBa0MsQ0FBQSxJQUFDO0lBRDVDLGlCQUNxSjs7OztJQUQzRix5QkFBUSwyQ0FBQTs7OztBRFI5RSxNQUFNLE9BQU8sZ0JBQWdCO0lBVTNCLFlBQW9CLGVBQWdDLEVBQVUsS0FBcUI7UUFBL0Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFSbkYsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFTZixDQUFDO0lBRUYsS0FBSyxDQUFDLFFBQVE7UUFFWixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FB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QUFPO2tCQUFmLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFFRyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG5pbXBvcnQgeyBQcm9kdWN0MTIzfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1nYWxsZXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjdXJyZW50SWQ6IHN0cmluZztcbiAgY3VycmVudEltYWdlSW5kZXggPSAwO1xuICBpbWFnZUFycmF5ID0gW107XG4gIHNlbGVjdGVkSW1hZ2VVcmw6IHN0cmluZztcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcbiBcbiAgQElucHV0KCkgaW1hZ2VzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSApIHtcbiAgICBcbiAgIH1cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3QodGhpcy5jdXJyZW50SWQpO1xuICAgIHRoaXMubG9hZEltYWdlcygpO1xuXG4gICAgdGhpcy5fcmV0cmlldmVJZCgpO1xuXG4gICAgY29uc29sZS5sb2coXCJpbWFnZXMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1hZ2VzKSlcblxuICB9XG5cblxuICBhc3luYyBsb2FkSW1hZ2VzKCl7XG5cbiAgICB0aGlzLmltYWdlcy5wdXNoKHRoaXMuaW1hZ2UpO1xuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5pbWFnZXMubGVuZ3RoIC0xOyBpKyspe1xuICAgICAgbGV0IGJsb2IgPSBhd2FpdCB0aGlzLmFqYXhHZXRJbWFnZURhdGEodGhpcy5pbWFnZXNbaV0pO1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZTY0ZGF0YSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgIHRoaXMuaW1hZ2VBcnJheS5wdXNoKHtibG9iOmJhc2U2NGRhdGF9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gdGhpcy5pbWFnZUFycmF5WzBdLmJsb2JcbiAgICAgIH1cblxuICAgIH0gICAgXG5cblxuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2VBcnJheSDDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDssOyPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1hZ2VBcnJheSkpO1xuXG4gIH1cblxuICBwcml2YXRlIF9yZXRyaWV2ZUlkKCl7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT57XG4gICAgICBpZihwYXJhbXMuaWQpe1xuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5pZDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInhcIik7XG5cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICBjaGFuZ2VTZWxlY3RlZEltYWdlKGltYWdlVXJsOiBzdHJpbmcpe1xuXG5cbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSBpbWFnZVVybDtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuaW1hZ2VBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICBpZih0aGlzLmltYWdlQXJyYXlbaV0uYmxvYiA9PSBpbWFnZVVybCl7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSBpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBwcmludGl0ZW0oaXRlbSl7XG4gICAgY29uc29sZS5sb2coaXRlbSlcbiAgfVxuXG4gICAgZ29Ub05leHRJbWFnZSgpe1xuICAgICAgaWYodGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9PSB0aGlzLmltYWdlQXJyYXkubGVuZ3RoIC0xKXtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDBcbiAgICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCArKztcbiAgICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSB0aGlzLmltYWdlQXJyYXlbdGhpcy5jdXJyZW50SW1hZ2VJbmRleF0uYmxvYjtcbiAgfVxuXG4gICAgICBnb1RvUHJldmlvdXNlSW1hZ2UoKXtcbiAgICAgICAgaWYodGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9PSAwKXtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gdGhpcy5pbWFnZUFycmF5Lmxlbmd0aCAtMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCAtLTtcbiAgICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gdGhpcy5pbWFnZUFycmF5W3RoaXMuY3VycmVudEltYWdlSW5kZXhdLmJsb2I7XG4gICAgfVxuXG5cbiAgem9vbUltYWdlKGk6c3RyaW5nKXtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDEyNDUpe1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSk7XG4gICAgY29uc3QgbmV3Tm9kZSA9IGltYWdlLmNsb25lTm9kZSh0cnVlKTtcbiAgICBuZXdOb2RlWydpZCddID0gJ3pvb20nO1xuICAgIG5ld05vZGVbJ3N0eWxlJ10gPSAnaGVpZ2h0OjQwJTsgdG9wOjIwJTsgcG9zaXRpb246Zml4ZWQ7ICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAtMjNweCAyNXB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggLTM2cHggMzBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggLTc5cHggNDBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDRweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDhweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDE2cHggOHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAzMnB4IDE2cHg7IHotaW5kZXg6MTAwMDsgcGFkZGluZzowOyBtYXJnaW46MCc7O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSW1nJykuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlWm9vbUltYWdlKHVybCl7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPiAxMjQ1KXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6b29tJykucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cblxuXG5sb2FkU29tZVRoaW5nKHVybCwgaWQpIHtcbiAgdGhpcy5pbWFnZUFycmF5LnB1c2goe2lkOiBpZCwgYmxvYjogIHRoaXMuYWpheEdldEltYWdlRGF0YSh1cmwpfSlcbn1cblxuIGFzeW5jIGFqYXhHZXRJbWFnZURhdGEodXJsKSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcbiAgICBjb25zdCBpbWFnZUJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgcmV0dXJuIGltYWdlQmxvYjtcblxuXG4gIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xuXG59XG5cblxuICBnZXQgaGFzSW1hZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlcz8ubGVuZ3RoID4gMDtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZ2FsbGVyeVwiPlxuICAgIDxwLWdhbGxlcmlhIFsodmFsdWUpXT1cImltYWdlc1wiIFtjb250YWluZXJTdHlsZV09XCJ7J21heC13aWR0aCc6ICc2NDBweCd9XCIgW2NvbnRhaW5lclN0eWxlXT1cInsnbWFyZ2luJzogJ2F1dG8nfVwiIFtudW1WaXNpYmxlXT1cIjFcIlxuICAgIFtzaG93VGh1bWJuYWlsc109XCJmYWxzZVwiIFtzaG93SXRlbU5hdmlnYXRvcnNdPVwidHJ1ZVwiICBbc2hvd0luZGljYXRvcnNdPVwidHJ1ZVwiPiBcbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiaXRlbVwiIGxldC1pdGVtPlxuICAgICAgICA8aW1nIFtzcmNdPVwiaXRlbVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGRpc3BsYXk6IGJsb2NrO1wiIChjbGljayk9XCJwcmludGl0ZW0oaXRlbSlcIiAvPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cInRodW1ibmFpbFwiIGxldC1pdGVtPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLW5vZ3V0dGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWcgW3NyY109XCJpdGVtXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuPC9wLWdhbGxlcmlhPlxuPC9kaXY+XG5cblxuXG48ZGl2IGNsYXNzPVwiZ2FsbGVyeURlc2t0b3BcIiBzdHlsZT1cIiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODksIDg5LCA4OSk7XCI+XG4gICAgPGRpdiBjbGFzcz1cImQtZmxleFwiIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInAtMCBkLWZsZXhcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDg1MHB4OyBvdmVyZmxvdy15OiBhdXRvOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBmbGV4LWJhc2lzOiBjb250ZW50OyBtYXgtd2lkdGg6IDEwMCU7XCI+XG5cbiAgICAgICAgICAgIDxpbWcgICpuZ0Zvcj1cImxldCBpbWFnZVVybCBvZiBpbWFnZUFycmF5OyBsZXQgaSA9IGluZGV4O1wiIFtpZF09XCJpXCIgIG9ubW91c2VvdmVyPVwidGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J2JsYWNrJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nJ1wiXG4gICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlU2VsZWN0ZWRJbWFnZShpbWFnZVVybC5ibG9iKVwiIFtzcmNdPSBcImltYWdlVXJsLmJsb2JcIiAgIGNsYXNzPVwicC0xXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiIHN0eWxlPVwibWF4LWhlaWdodDogMTAwcHg7IG1heC13aWR0aDogNzBweDtcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgICAgICA8aW1nICBbc3JjXT1cInNlbGVjdGVkSW1hZ2VVcmxcIiBhbHQ9XCJcIiBzdHlsZT1cIiBoZWlnaHQ6IDg1MHB4O1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOiA1MCU7XCIgIChjbGljayk9XCJnb1RvTmV4dEltYWdlKClcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1yaWdodFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMSA4YS41LjUgMCAwIDEgLjUtLjVoMTEuNzkzbC0zLjE0Ny0zLjE0NmEuNS41IDAgMCAxIC43MDgtLjcwOGw0IDRhLjUuNSAwIDAgMSAwIC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDgtLjcwOEwxMy4yOTMgOC41SDEuNUEuNS41IDAgMCAxIDEgOHpcIi8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkJ1dHRvbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogNTAlO1wiICAoY2xpY2spPVwiZ29Ub1ByZXZpb3VzZUltYWdlKClcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1sZWZ0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNSA4YS41LjUgMCAwIDAtLjUtLjVIMi43MDdsMy4xNDctMy4xNDZhLjUuNSAwIDEgMC0uNzA4LS43MDhsLTQgNGEuNS41IDAgMCAwIDAgLjcwOGw0IDRhLjUuNSAwIDAgMCAuNzA4LS43MDhMMi43MDcgOC41SDE0LjVBLjUuNSAwIDAgMCAxNSA4elwiLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+QnV0dG9uPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cblxuPCEtLWRpdiBjbGFzcz1cImdhbGxlcnlEZXNrdG9wXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCB3LTEwMCBtLTAgcC0wIGgtMTAwXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiA4NTBweDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtLTAgcC0wIGQtZmxleFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBlbmQ7IGZsZXgtZGlyZWN0aW9uOiByb3c7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgcC0wIGQtZmxleFwiIHN0eWxlPVwibWF4LWhlaWdodDogODUwcHg7IG92ZXJmbG93LXk6IGF1dG87IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGZsZXgtYmFzaXM6IGNvbnRlbnQ7IG1heC13aWR0aDogMTAwJTtcIj5cblxuICAgICAgICAgICAgICAgIDxpbWcgICpuZ0Zvcj1cImxldCBpbWFnZVVybCBvZiBpbWFnZUFycmF5OyBsZXQgaSA9IGluZGV4O1wiIFtpZF09XCJpXCIgIG9ubW91c2VvdmVyPVwidGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J2JsYWNrJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nJ1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGVkSW1hZ2UoaW1hZ2VVcmwuYmxvYilcIiBbc3JjXT0gXCJpbWFnZVVybC5ibG9iXCIgICBjbGFzcz1cInAtMVwiIGFsdD1cIlJlc3BvbnNpdmUgaW1hZ2VcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDEwMHB4OyBtYXgtd2lkdGg6IDcwcHg7XCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtMFwiIHN0eWxlPVwid2lkdGg6IGF1dG87XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyAgW3NyY109XCJzZWxlY3RlZEltYWdlVXJsXCIgYWx0PVwiXCIgc3R5bGU9XCIgaGVpZ2h0OiA4NTBweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOiA1MCU7XCIgIChjbGljayk9XCJnb1RvTmV4dEltYWdlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LXJpZ2h0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEgOGEuNS41IDAgMCAxIC41LS41aDExLjc5M2wtMy4xNDctMy4xNDZhLjUuNSAwIDAgMSAuNzA4LS43MDhsNCA0YS41LjUgMCAwIDEgMCAuNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTMuMjkzIDguNUgxLjVBLjUuNSAwIDAgMSAxIDh6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+QnV0dG9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogNTAlO1wiICAoY2xpY2spPVwiZ29Ub1ByZXZpb3VzZUltYWdlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LWxlZnRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTUgOGEuNS41IDAgMCAwLS41LS41SDIuNzA3bDMuMTQ3LTMuMTQ2YS41LjUgMCAxIDAtLjcwOC0uNzA4bC00IDRhLjUuNSAwIDAgMCAwIC43MDhsNCA0YS41LjUgMCAwIDAgLjcwOC0uNzA4TDIuNzA3IDguNUgxNC41QS41LjUgMCAwIDAgMTUgOHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5CdXR0b248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBcbjwvZGl2PlxuLS0+XG5cbiJdfQ==