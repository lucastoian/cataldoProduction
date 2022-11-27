import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product123 } from '../../modules/product123';
import { ProductsService } from '../../modules/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../modules/products.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
function GalleryComponent_img_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 18);
    i0.ɵɵlistener("click", function GalleryComponent_img_17_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const imageUrl_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.changeSelectedImage(imageUrl_r1.blob); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageUrl_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("id", i_r2)("src", imageUrl_r1.blob, i0.ɵɵsanitizeUrl);
} }
export class GalleryComponent {
    constructor(productsService, route) {
        this.productsService = productsService;
        this.route = route;
        this.currentImageIndex = 0;
        this.imageArray = [];
    }
    async ngOnInit() {
        this.productsService.getProduct(this.currentId);
        this.selectedImageUrl = this.product.image;
        this.images.push(this.image);
        for (let i = 0; i < this.images.length - 1; i++) {
            let blob = await this.ajaxGetImageData(this.images[i]);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                this.imageArray.push({ id: i, blob: base64data });
            };
        }
        console.log("imageArray = " + JSON.stringify(this.imageArray));
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
        for (let i = 0; i < this.imageArray.length; i++) {
            if (this.imageArray[i].blob == imageUrl) {
                this.currentImageIndex = i;
                return;
            }
        }
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
GalleryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { product: "product", image: "image", images: "images" }, decls: 31, vars: 3, consts: [[1, "gallery", 2, "transform", "translateX(13px)"], [2, "position", "relative", "height", "fit-content"], ["alt", "", 2, "width", "100%", "max-height", "500px", 3, "src"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "right", "0", "top", "50%", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-right"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "left", "0", "top", "50%", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left"], ["fill-rule", "evenodd", "d", "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"], [1, "galleryDesktop"], [1, "grid", "w-100", "m-0", "p-0", "h-100", 2, "max-height", "700px"], [1, "row", "w-100", "m-0", "p-0", 2, "justify-content", "end"], [1, "col-3", "p-0", "d-flex", 2, "max-height", "700px", "overflow-y", "auto", "flex-direction", "column", "flex-basis", "content"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "class", "p-1", "alt", "Responsive image", "style", "max-height: 100px;", 3, "id", "src", "click", 4, "ngFor", "ngForOf"], [1, "col-auto", "p-0", "d-flex", 2, "justify-content", "start"], [2, "position", "relative", "height", "fit-content", "width", "fit-content"], ["alt", "", 2, "height", "600px", 3, "src"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "alt", "Responsive image", 1, "p-1", 2, "max-height", "100px", 3, "id", "src", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementStart(3, "button", 3);
        i0.ɵɵlistener("click", function GalleryComponent_Template_button_click_3_listener() { return ctx.goToNextImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(4, "svg", 4);
        i0.ɵɵelement(5, "path", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(6, "span", 6);
        i0.ɵɵtext(7, "Button");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "button", 7);
        i0.ɵɵlistener("click", function GalleryComponent_Template_button_click_8_listener() { return ctx.goToPreviouseImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(9, "svg", 8);
        i0.ɵɵelement(10, "path", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(11, "span", 6);
        i0.ɵɵtext(12, "Button");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
        i0.ɵɵtemplate(17, GalleryComponent_img_17_Template, 1, 2, "img", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "div", 15)(19, "div", 16);
        i0.ɵɵelement(20, "img", 17);
        i0.ɵɵelementStart(21, "button", 3);
        i0.ɵɵlistener("click", function GalleryComponent_Template_button_click_21_listener() { return ctx.goToNextImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(22, "svg", 4);
        i0.ɵɵelement(23, "path", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(24, "span", 6);
        i0.ɵɵtext(25, "Button");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(26, "button", 7);
        i0.ɵɵlistener("click", function GalleryComponent_Template_button_click_26_listener() { return ctx.goToPreviouseImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(27, "svg", 8);
        i0.ɵɵelement(28, "path", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(29, "span", 6);
        i0.ɵɵtext(30, "Button");
        i0.ɵɵelementEnd()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.selectedImageUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("ngForOf", ctx.imageArray);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("src", ctx.selectedImageUrl, i0.ɵɵsanitizeUrl);
    } }, directives: [i3.NgForOf], styles: [".galleryDesktop[_ngcontent-%COMP%]{display:none}@media screen and (min-width: 993px){.gallery[_ngcontent-%COMP%]{display:none}.galleryDesktop[_ngcontent-%COMP%]{display:inline}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GalleryComponent, [{
        type: Component,
        args: [{ selector: 'ui-gallery', template: "<div class=\"gallery\" style=\"transform: translateX(13px);\">\n    <div style=\"position: relative; height: fit-content; \">\n        <img  [src]=\"selectedImageUrl\" alt=\"\" style=\"width: 100%; max-height: 500px;\">\n        <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; right: 0; top: 50%;\"  (click)=\"goToNextImage()\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\">\n                <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/>\n              </svg>\n            <span class=\"visually-hidden\">Button</span>\n        </button>\n\n        <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; left: 0; top: 50%;\"  (click)=\"goToPreviouseImage()\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n                <path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n              </svg>\n            <span class=\"visually-hidden\">Button</span>\n        </button>\n    </div>\n</div>\n\n\n\n<div class=\"galleryDesktop\">\n\n    <div class=\"grid w-100 m-0 p-0 h-100\" style=\"max-height: 700px;\">\n        <div class=\"row w-100 m-0 p-0\" style=\"justify-content: end;\">\n            <div class=\"col-3 p-0 d-flex\" style=\"max-height: 700px; overflow-y: auto; flex-direction: column; flex-basis: content;\">\n\n        <img  *ngFor=\"let imageUrl of imageArray; let i = index;\" [id]=\"i\"  onmouseover=\"this.style.backgroundColor='black'\" onmouseout=\"this.style.backgroundColor=''\"\n        (click)=\"changeSelectedImage(imageUrl.blob)\" [src]= \"imageUrl.blob\"   class=\"p-1\" alt=\"Responsive image\" style=\"max-height: 100px;\">\n\n            </div>\n            <div class=\"col-auto p-0 d-flex\" style=\"justify-content: start; \">\n                <div style=\"position: relative; height: fit-content; width: fit-content;\">\n                    <img  [src]=\"selectedImageUrl\" alt=\"\" style=\" height: 600px;\">\n                    <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; right: 0; top: 50%;\"  (click)=\"goToNextImage()\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\">\n                            <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/>\n                          </svg>\n                        <span class=\"visually-hidden\">Button</span>\n                    </button>\n\n                    <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; left: 0; top: 50%;\"  (click)=\"goToPreviouseImage()\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n                            <path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n                          </svg>\n                        <span class=\"visually-hidden\">Button</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n", styles: [".galleryDesktop{display:none}@media screen and (min-width: 993px){.gallery{display:none}.galleryDesktop{display:inline}}\n"] }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }]; }, { product: [{
            type: Input
        }], image: [{
            type: Input
        }], images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7OztJQ3VCekQsK0JBQ29JO0lBQXBJLDBOQUFTLDRDQUFrQyxJQUFDO0lBRDVDLGlCQUNvSTs7OztJQUQxRSx5QkFBUSwyQ0FBQTs7QURoQjFFLE1BQU0sT0FBTyxnQkFBZ0I7SUFVM0IsWUFBb0IsZUFBZ0MsRUFBVSxLQUFxQjtRQUEvRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVJuRixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQU95RSxDQUFDO0lBRTFGLEtBQUssQ0FBQyxRQUFRO1FBRVosSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFD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b3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG5pbXBvcnQgeyBQcm9kdWN0MTIzfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWktZ2FsbGVyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY3VycmVudElkOiBzdHJpbmc7XG4gIGN1cnJlbnRJbWFnZUluZGV4ID0gMDtcbiAgaW1hZ2VBcnJheSA9IFtdO1xuICBzZWxlY3RlZEltYWdlVXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XG4gXG4gIEBJbnB1dCgpIGltYWdlczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0c1NlcnZpY2U6IFByb2R1Y3RzU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsICkgeyB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRQcm9kdWN0KHRoaXMuY3VycmVudElkKTtcbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSB0aGlzLnByb2R1Y3QuaW1hZ2U7XG4gICAgdGhpcy5pbWFnZXMucHVzaCh0aGlzLmltYWdlKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuaW1hZ2VzLmxlbmd0aCAtMTsgaSsrKXtcbiAgICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VzW2ldKTtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2U2NGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICB0aGlzLmltYWdlQXJyYXkucHVzaCh7aWQ6IGksIGJsb2I6ICBiYXNlNjRkYXRhfSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImltYWdlQXJyYXkgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1hZ2VBcnJheSkpO1xuXG5cbiAgICB0aGlzLl9yZXRyaWV2ZUlkKCk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX3JldHJpZXZlSWQoKXtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcbiAgICAgIGlmKHBhcmFtcy5pZCl7XG4gICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLmlkO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwieFwiKTtcblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIGNoYW5nZVNlbGVjdGVkSW1hZ2UoaW1hZ2VVcmw6IHN0cmluZyl7XG5cblxuICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IGltYWdlVXJsO1xuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5pbWFnZUFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKHRoaXMuaW1hZ2VBcnJheVtpXS5ibG9iID09IGltYWdlVXJsKXtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IGk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gICAgZ29Ub05leHRJbWFnZSgpe1xuICAgICAgaWYodGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9PSB0aGlzLmltYWdlQXJyYXkubGVuZ3RoIC0xKXtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDBcbiAgICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCArKztcbiAgICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSB0aGlzLmltYWdlQXJyYXlbdGhpcy5jdXJyZW50SW1hZ2VJbmRleF0uYmxvYjtcbiAgfVxuXG4gICAgICBnb1RvUHJldmlvdXNlSW1hZ2UoKXtcbiAgICAgICAgaWYodGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9PSAwKXtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gdGhpcy5pbWFnZUFycmF5Lmxlbmd0aCAtMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCAtLTtcbiAgICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gdGhpcy5pbWFnZUFycmF5W3RoaXMuY3VycmVudEltYWdlSW5kZXhdLmJsb2I7XG4gICAgfVxuXG5cbiAgem9vbUltYWdlKGk6c3RyaW5nKXtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDEyNDUpe1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSk7XG4gICAgY29uc3QgbmV3Tm9kZSA9IGltYWdlLmNsb25lTm9kZSh0cnVlKTtcbiAgICBuZXdOb2RlWydpZCddID0gJ3pvb20nO1xuICAgIG5ld05vZGVbJ3N0eWxlJ10gPSAnaGVpZ2h0OjQwJTsgdG9wOjIwJTsgcG9zaXRpb246Zml4ZWQ7ICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAtMjNweCAyNXB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggLTM2cHggMzBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggLTc5cHggNDBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDRweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDhweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDE2cHggOHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAzMnB4IDE2cHg7IHotaW5kZXg6MTAwMDsgcGFkZGluZzowOyBtYXJnaW46MCc7O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSW1nJykuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlWm9vbUltYWdlKHVybCl7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPiAxMjQ1KXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6b29tJykucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cblxuXG5sb2FkU29tZVRoaW5nKHVybCwgaWQpIHtcbiAgdGhpcy5pbWFnZUFycmF5LnB1c2goe2lkOiBpZCwgYmxvYjogIHRoaXMuYWpheEdldEltYWdlRGF0YSh1cmwpfSlcbn1cblxuIGFzeW5jIGFqYXhHZXRJbWFnZURhdGEodXJsKSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge2NhY2hlOiBcIm5vLXN0b3JlXCJ9KTtcbiAgICBjb25zdCBpbWFnZUJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgcmV0dXJuIGltYWdlQmxvYjtcblxuXG4gIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xuXG59XG5cblxuICBnZXQgaGFzSW1hZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlcz8ubGVuZ3RoID4gMDtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZ2FsbGVyeVwiIHN0eWxlPVwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzcHgpO1wiPlxuICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogZml0LWNvbnRlbnQ7IFwiPlxuICAgICAgICA8aW1nICBbc3JjXT1cInNlbGVjdGVkSW1hZ2VVcmxcIiBhbHQ9XCJcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiA1MDBweDtcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOiA1MCU7XCIgIChjbGljayk9XCJnb1RvTmV4dEltYWdlKClcIj5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LXJpZ2h0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEgOGEuNS41IDAgMCAxIC41LS41aDExLjc5M2wtMy4xNDctMy4xNDZhLjUuNSAwIDAgMSAuNzA4LS43MDhsNCA0YS41LjUgMCAwIDEgMCAuNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTMuMjkzIDguNUgxLjVBLjUuNSAwIDAgMSAxIDh6XCIvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+QnV0dG9uPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogNTAlO1wiICAoY2xpY2spPVwiZ29Ub1ByZXZpb3VzZUltYWdlKClcIj5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LWxlZnRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTUgOGEuNS41IDAgMCAwLS41LS41SDIuNzA3bDMuMTQ3LTMuMTQ2YS41LjUgMCAxIDAtLjcwOC0uNzA4bC00IDRhLjUuNSAwIDAgMCAwIC43MDhsNCA0YS41LjUgMCAwIDAgLjcwOC0uNzA4TDIuNzA3IDguNUgxNC41QS41LjUgMCAwIDAgMTUgOHpcIi8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5CdXR0b248L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cblxuXG48ZGl2IGNsYXNzPVwiZ2FsbGVyeURlc2t0b3BcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJncmlkIHctMTAwIG0tMCBwLTAgaC0xMDBcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDcwMHB4O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwIG0tMCBwLTBcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogZW5kO1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zIHAtMCBkLWZsZXhcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDcwMHB4OyBvdmVyZmxvdy15OiBhdXRvOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBmbGV4LWJhc2lzOiBjb250ZW50O1wiPlxuXG4gICAgICAgIDxpbWcgICpuZ0Zvcj1cImxldCBpbWFnZVVybCBvZiBpbWFnZUFycmF5OyBsZXQgaSA9IGluZGV4O1wiIFtpZF09XCJpXCIgIG9ubW91c2VvdmVyPVwidGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J2JsYWNrJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nJ1wiXG4gICAgICAgIChjbGljayk9XCJjaGFuZ2VTZWxlY3RlZEltYWdlKGltYWdlVXJsLmJsb2IpXCIgW3NyY109IFwiaW1hZ2VVcmwuYmxvYlwiICAgY2xhc3M9XCJwLTFcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAxMDBweDtcIj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWF1dG8gcC0wIGQtZmxleFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBzdGFydDsgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiBmaXQtY29udGVudDsgd2lkdGg6IGZpdC1jb250ZW50O1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nICBbc3JjXT1cInNlbGVjdGVkSW1hZ2VVcmxcIiBhbHQ9XCJcIiBzdHlsZT1cIiBoZWlnaHQ6IDYwMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwOyB0b3A6IDUwJTtcIiAgKGNsaWNrKT1cImdvVG9OZXh0SW1hZ2UoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktYXJyb3ctcmlnaHRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMSA4YS41LjUgMCAwIDEgLjUtLjVoMTEuNzkzbC0zLjE0Ny0zLjE0NmEuNS41IDAgMCAxIC43MDgtLjcwOGw0IDRhLjUuNSAwIDAgMSAwIC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDgtLjcwOEwxMy4yOTMgOC41SDEuNUEuNS41IDAgMCAxIDEgOHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5CdXR0b248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1saWdodCBidG4tc21cIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiA1MCU7XCIgIChjbGljayk9XCJnb1RvUHJldmlvdXNlSW1hZ2UoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktYXJyb3ctbGVmdFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNSA4YS41LjUgMCAwIDAtLjUtLjVIMi43MDdsMy4xNDctMy4xNDZhLjUuNSAwIDEgMC0uNzA4LS43MDhsLTQgNGEuNS41IDAgMCAwIDAgLjcwOGw0IDRhLjUuNSAwIDAgMCAuNzA4LS43MDhMMi43MDcgOC41SDE0LjVBLjUuNSAwIDAgMCAxNSA4elwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkJ1dHRvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuXG4iXX0=