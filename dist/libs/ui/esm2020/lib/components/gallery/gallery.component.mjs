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
    i0.ɵɵelementStart(0, "img", 17);
    i0.ɵɵlistener("click", function GalleryComponent_ng_template_2_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const item_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.printitem(item_r3); });
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
    i0.ɵɵlistener("click", function GalleryComponent_img_7_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const imageUrl_r7 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.changeSelectedImage(imageUrl_r7.blob); });
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
        this.selectedImageUrl = this.product.image;
        this.images.push(this.image);
        for (let i = 0; i < this.images.length - 1; i++) {
            let blob = await this.ajaxGetImageData(this.images[i]);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                this.imageArray.push({ blob: base64data });
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
    } }, directives: [i3.Galleria, i4.PrimeTemplate, i5.NgForOf], styles: [".galleryDesktop[_ngcontent-%COMP%]{display:none}@media screen and (min-width: 993px){.gallery[_ngcontent-%COMP%]{display:none}.galleryDesktop[_ngcontent-%COMP%]{display:inline}}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7O0lDQXpELCtCQUFtRjtJQUE1Qiw2TkFBUyx5QkFBZSxJQUFDO0lBQWhGLGlCQUFtRjs7O0lBQTlFLCtDQUFZOzs7SUFHakIsK0JBQXVEO0lBQ25ELDBCQUE0QztJQUNoRCxpQkFBTTs7O0lBREcsZUFBWTtJQUFaLCtDQUFZOzs7O0lBWWpCLCtCQUNxSjtJQUFySiwwTkFBUyw0Q0FBa0MsSUFBQztJQUQ1QyxpQkFDcUo7Ozs7SUFEM0YseUJBQVEsMkNBQUE7Ozs7QURSOUUsTUFBTSxPQUFPLGdCQUFnQjtJQVUzQixZQUFvQixlQUFnQyxFQUFVLEtBQXFCO1FBQS9ELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBUm5GLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixlQUFVLEdBQUcsRUFBRSxDQUFDO0lBU2YsQ0FBQztJQUVGLEtBQUssQ0FBQyxRQUFRO1FBRVosSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FB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WUFFRyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG5pbXBvcnQgeyBQcm9kdWN0MTIzfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1nYWxsZXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjdXJyZW50SWQ6IHN0cmluZztcbiAgY3VycmVudEltYWdlSW5kZXggPSAwO1xuICBpbWFnZUFycmF5ID0gW107XG4gIHNlbGVjdGVkSW1hZ2VVcmw6IHN0cmluZztcbiAgQElucHV0KCkgcHJvZHVjdDogUHJvZHVjdDEyMztcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcbiBcbiAgQElucHV0KCkgaW1hZ2VzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSApIHtcbiAgICBcbiAgIH1cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3QodGhpcy5jdXJyZW50SWQpO1xuICAgIHRoaXMubG9hZEltYWdlcygpO1xuXG4gICAgdGhpcy5fcmV0cmlldmVJZCgpO1xuXG4gICAgY29uc29sZS5sb2coXCJpbWFnZXMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1hZ2VzKSlcblxuICB9XG5cblxuICBhc3luYyBsb2FkSW1hZ2VzKCl7XG4gICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gdGhpcy5wcm9kdWN0LmltYWdlO1xuICAgIHRoaXMuaW1hZ2VzLnB1c2godGhpcy5pbWFnZSk7XG4gICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLmltYWdlcy5sZW5ndGggLTE7IGkrKyl7XG4gICAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLmltYWdlc1tpXSk7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgdGhpcy5pbWFnZUFycmF5LnB1c2goe2Jsb2I6YmFzZTY0ZGF0YX0pO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJpbWFnZUFycmF5IMOnw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Onw6fDp8Oyw7I9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5pbWFnZUFycmF5KSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX3JldHJpZXZlSWQoKXtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcbiAgICAgIGlmKHBhcmFtcy5pZCl7XG4gICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLmlkO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwieFwiKTtcblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIGNoYW5nZVNlbGVjdGVkSW1hZ2UoaW1hZ2VVcmw6IHN0cmluZyl7XG5cblxuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IGltYWdlVXJsO1xuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5pbWFnZUFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKHRoaXMuaW1hZ2VBcnJheVtpXS5ibG9iID09IGltYWdlVXJsKXtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IGk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHByaW50aXRlbShpdGVtKXtcbiAgICBjb25zb2xlLmxvZyhpdGVtKVxuICB9XG5cbiAgICBnb1RvTmV4dEltYWdlKCl7XG4gICAgICBpZih0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID09IHRoaXMuaW1hZ2VBcnJheS5sZW5ndGggLTEpe1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gMFxuICAgICAgfWVsc2V7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ICsrO1xuICAgICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IHRoaXMuaW1hZ2VBcnJheVt0aGlzLmN1cnJlbnRJbWFnZUluZGV4XS5ibG9iO1xuICB9XG5cbiAgICAgIGdvVG9QcmV2aW91c2VJbWFnZSgpe1xuICAgICAgICBpZih0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID09IDApe1xuICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSB0aGlzLmltYWdlQXJyYXkubGVuZ3RoIC0xXG4gICAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4IC0tO1xuICAgICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSB0aGlzLmltYWdlQXJyYXlbdGhpcy5jdXJyZW50SW1hZ2VJbmRleF0uYmxvYjtcbiAgICB9XG5cblxuICB6b29tSW1hZ2UoaTpzdHJpbmcpe1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gMTI0NSl7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcbiAgICBjb25zdCBuZXdOb2RlID0gaW1hZ2UuY2xvbmVOb2RlKHRydWUpO1xuICAgIG5ld05vZGVbJ2lkJ10gPSAnem9vbSc7XG4gICAgbmV3Tm9kZVsnc3R5bGUnXSA9ICdoZWlnaHQ6NDAlOyB0b3A6MjAlOyBwb3NpdGlvbjpmaXhlZDsgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IC0yM3B4IDI1cHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCAtMzZweCAzMHB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAtNzlweCA0MHB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggNHB4IDJweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggOHB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMTZweCA4cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDMycHggMTZweDsgei1pbmRleDoxMDAwOyBwYWRkaW5nOjA7IG1hcmdpbjowJzs7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5JbWcnKS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVab29tSW1hZ2UodXJsKXtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDEyNDUpe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3pvb20nKS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuXG5cbmxvYWRTb21lVGhpbmcodXJsLCBpZCkge1xuICB0aGlzLmltYWdlQXJyYXkucHVzaCh7aWQ6IGlkLCBibG9iOiAgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHVybCl9KVxufVxuXG4gYXN5bmMgYWpheEdldEltYWdlRGF0YSh1cmwpIHtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7Y2FjaGU6IFwibm8tc3RvcmVcIn0pO1xuICAgIGNvbnN0IGltYWdlQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICByZXR1cm4gaW1hZ2VCbG9iO1xuXG5cbiAgLy9Db2RlIHRvIGdldCBiYXNlNjQgaW1hZ2Ugc3RyaW5nXG5cbn1cblxuXG4gIGdldCBoYXNJbWFnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VzPy5sZW5ndGggPiAwO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJnYWxsZXJ5XCI+XG4gICAgPHAtZ2FsbGVyaWEgWyh2YWx1ZSldPVwiaW1hZ2VzXCIgW2NvbnRhaW5lclN0eWxlXT1cInsnbWF4LXdpZHRoJzogJzY0MHB4J31cIiBbY29udGFpbmVyU3R5bGVdPVwieydtYXJnaW4nOiAnYXV0byd9XCIgW251bVZpc2libGVdPVwiMVwiXG4gICAgW3Nob3dUaHVtYm5haWxzXT1cImZhbHNlXCIgW3Nob3dJdGVtTmF2aWdhdG9yc109XCJ0cnVlXCIgIFtzaG93SW5kaWNhdG9yc109XCJ0cnVlXCI+IFxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJpdGVtXCIgbGV0LWl0ZW0+XG4gICAgICAgIDxpbWcgW3NyY109XCJpdGVtXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgZGlzcGxheTogYmxvY2s7XCIgKGNsaWNrKT1cInByaW50aXRlbShpdGVtKVwiIC8+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwidGh1bWJuYWlsXCIgbGV0LWl0ZW0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtbm9ndXR0ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGltZyBbc3JjXT1cIml0ZW1cIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG48L3AtZ2FsbGVyaWE+XG48L2Rpdj5cblxuXG5cbjxkaXYgY2xhc3M9XCJnYWxsZXJ5RGVza3RvcFwiIHN0eWxlPVwiIGJhY2tncm91bmQtY29sb3I6IHJnYig4OSwgODksIDg5KTtcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCIgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicC0wIGQtZmxleFwiIHN0eWxlPVwibWF4LWhlaWdodDogODUwcHg7IG92ZXJmbG93LXk6IGF1dG87IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGZsZXgtYmFzaXM6IGNvbnRlbnQ7IG1heC13aWR0aDogMTAwJTtcIj5cblxuICAgICAgICAgICAgPGltZyAgKm5nRm9yPVwibGV0IGltYWdlVXJsIG9mIGltYWdlQXJyYXk7IGxldCBpID0gaW5kZXg7XCIgW2lkXT1cImlcIiAgb25tb3VzZW92ZXI9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nYmxhY2snXCIgb25tb3VzZW91dD1cInRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yPScnXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjaGFuZ2VTZWxlY3RlZEltYWdlKGltYWdlVXJsLmJsb2IpXCIgW3NyY109IFwiaW1hZ2VVcmwuYmxvYlwiICAgY2xhc3M9XCJwLTFcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAxMDBweDsgbWF4LXdpZHRoOiA3MHB4O1wiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDxpbWcgIFtzcmNdPVwic2VsZWN0ZWRJbWFnZVVybFwiIGFsdD1cIlwiIHN0eWxlPVwiIGhlaWdodDogODUwcHg7XCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwOyB0b3A6IDUwJTtcIiAgKGNsaWNrKT1cImdvVG9OZXh0SW1hZ2UoKVwiPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LXJpZ2h0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xIDhhLjUuNSAwIDAgMSAuNS0uNWgxMS43OTNsLTMuMTQ3LTMuMTQ2YS41LjUgMCAwIDEgLjcwOC0uNzA4bDQgNGEuNS41IDAgMCAxIDAgLjcwOGwtNCA0YS41LjUgMCAwIDEtLjcwOC0uNzA4TDEzLjI5MyA4LjVIMS41QS41LjUgMCAwIDEgMSA4elwiLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+QnV0dG9uPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1saWdodCBidG4tc21cIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiA1MCU7XCIgIChjbGljayk9XCJnb1RvUHJldmlvdXNlSW1hZ2UoKVwiPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LWxlZnRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE1IDhhLjUuNSAwIDAgMC0uNS0uNUgyLjcwN2wzLjE0Ny0zLjE0NmEuNS41IDAgMSAwLS43MDgtLjcwOGwtNCA0YS41LjUgMCAwIDAgMCAuNzA4bDQgNGEuNS41IDAgMCAwIC43MDgtLjcwOEwyLjcwNyA4LjVIMTQuNUEuNS41IDAgMCAwIDE1IDh6XCIvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5CdXR0b248L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuXG48IS0tZGl2IGNsYXNzPVwiZ2FsbGVyeURlc2t0b3BcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJncmlkIHctMTAwIG0tMCBwLTAgaC0xMDBcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDg1MHB4O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIG0tMCBwLTAgZC1mbGV4XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGVuZDsgZmxleC1kaXJlY3Rpb246IHJvdztcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBwLTAgZC1mbGV4XCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiA4NTBweDsgb3ZlcmZsb3cteTogYXV0bzsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZmxleC1iYXNpczogY29udGVudDsgbWF4LXdpZHRoOiAxMDAlO1wiPlxuXG4gICAgICAgICAgICAgICAgPGltZyAgKm5nRm9yPVwibGV0IGltYWdlVXJsIG9mIGltYWdlQXJyYXk7IGxldCBpID0gaW5kZXg7XCIgW2lkXT1cImlcIiAgb25tb3VzZW92ZXI9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nYmxhY2snXCIgb25tb3VzZW91dD1cInRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yPScnXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlU2VsZWN0ZWRJbWFnZShpbWFnZVVybC5ibG9iKVwiIFtzcmNdPSBcImltYWdlVXJsLmJsb2JcIiAgIGNsYXNzPVwicC0xXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiIHN0eWxlPVwibWF4LWhlaWdodDogMTAwcHg7IG1heC13aWR0aDogNzBweDtcIj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0wXCIgc3R5bGU9XCJ3aWR0aDogYXV0bztcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nICBbc3JjXT1cInNlbGVjdGVkSW1hZ2VVcmxcIiBhbHQ9XCJcIiBzdHlsZT1cIiBoZWlnaHQ6IDg1MHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwOyB0b3A6IDUwJTtcIiAgKGNsaWNrKT1cImdvVG9OZXh0SW1hZ2UoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktYXJyb3ctcmlnaHRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMSA4YS41LjUgMCAwIDEgLjUtLjVoMTEuNzkzbC0zLjE0Ny0zLjE0NmEuNS41IDAgMCAxIC43MDgtLjcwOGw0IDRhLjUuNSAwIDAgMSAwIC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDgtLjcwOEwxMy4yOTMgOC41SDEuNUEuNS41IDAgMCAxIDEgOHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5CdXR0b248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1saWdodCBidG4tc21cIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiA1MCU7XCIgIChjbGljayk9XCJnb1RvUHJldmlvdXNlSW1hZ2UoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktYXJyb3ctbGVmdFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNSA4YS41LjUgMCAwIDAtLjUtLjVIMi43MDdsMy4xNDctMy4xNDZhLjUuNSAwIDEgMC0uNzA4LS43MDhsLTQgNGEuNS41IDAgMCAwIDAgLjcwOGw0IDRhLjUuNSAwIDAgMCAuNzA4LS43MDhMMi43MDcgOC41SDE0LjVBLjUuNSAwIDAgMCAxNSA4elwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkJ1dHRvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIFxuPC9kaXY+XG4tLT5cblxuIl19