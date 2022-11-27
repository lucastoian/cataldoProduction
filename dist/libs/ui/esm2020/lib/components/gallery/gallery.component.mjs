import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product123 } from '../../modules/product123';
import { ProductsService } from '../../modules/products.service';
import * as i0 from "@angular/core";
import * as i1 from "../../modules/products.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
function GalleryComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 20);
    i0.ɵɵlistener("click", function GalleryComponent_img_4_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const imageUrl_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.changeSelectedImage(imageUrl_r2.blob); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageUrl_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    i0.ɵɵproperty("id", i_r3)("src", imageUrl_r2.blob, i0.ɵɵsanitizeUrl);
} }
function GalleryComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 21);
    i0.ɵɵlistener("click", function GalleryComponent_img_9_Template_img_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const imageUrl_r6 = restoredCtx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.changeSelectedImage(imageUrl_r6.blob); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imageUrl_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    i0.ɵɵproperty("id", i_r7)("src", imageUrl_r6.blob, i0.ɵɵsanitizeUrl);
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
GalleryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { product: "product", image: "image", images: "images" }, decls: 23, vars: 4, consts: [[1, "gallery"], ["id", "mainImg", 1, "main-image", "pb-2"], ["alt", "", 3, "src"], [1, "images", "d-flex", "flex-row", 2, "padding-left", "50px", "height", "35vh", "overflow-x", "auto", "scrollbar-color", "#d5ac68 #f1db9d", "scrollbar-width", "thin"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "class", "img-fluid p-1", "alt", "Responsive image", 3, "id", "src", "click", 4, "ngFor", "ngForOf"], [1, "galleryDesktop"], [1, "grid", "w-100", "m-0", "p-0", "h-100", 2, "max-height", "700px"], [1, "row", "w-100", "m-0", "p-0", 2, "justify-content", "end"], [1, "col-3", "p-0", "d-flex", 2, "max-height", "700px", "overflow-y", "auto", "flex-direction", "column", "flex-basis", "content"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "class", "p-1", "alt", "Responsive image", "style", "max-height: 100px;", 3, "id", "src", "click", 4, "ngFor", "ngForOf"], [1, "col-8", "p-0", "d-flex", 2, "justify-content", "start"], [2, "position", "relative", "height", "fit-content", "width", "fit-content"], ["alt", "", 2, "height", "600px", 3, "src"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "right", "0", "top", "50%", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-right"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 2, "position", "absolute", "left", "0", "top", "50%", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-left"], ["fill-rule", "evenodd", "d", "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "alt", "Responsive image", 1, "img-fluid", "p-1", 3, "id", "src", "click"], ["onmouseover", "this.style.backgroundColor='black'", "onmouseout", "this.style.backgroundColor=''", "alt", "Responsive image", 1, "p-1", 2, "max-height", "100px", 3, "id", "src", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, GalleryComponent_img_4_Template, 1, 2, "img", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        i0.ɵɵtemplate(9, GalleryComponent_img_9_Template, 1, 2, "img", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 10)(11, "div", 11);
        i0.ɵɵelement(12, "img", 12);
        i0.ɵɵelementStart(13, "button", 13);
        i0.ɵɵlistener("click", function GalleryComponent_Template_button_click_13_listener() { return ctx.goToNextImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(14, "svg", 14);
        i0.ɵɵelement(15, "path", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(16, "span", 16);
        i0.ɵɵtext(17, "Button");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(18, "button", 17);
        i0.ɵɵlistener("click", function GalleryComponent_Template_button_click_18_listener() { return ctx.goToPreviouseImage(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(19, "svg", 18);
        i0.ɵɵelement(20, "path", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(21, "span", 16);
        i0.ɵɵtext(22, "Button");
        i0.ɵɵelementEnd()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.selectedImageUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.imageArray);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.imageArray);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("src", ctx.selectedImageUrl, i0.ɵɵsanitizeUrl);
    } }, directives: [i3.NgForOf], styles: [".galleryDesktop[_ngcontent-%COMP%]{display:none}@media screen and (min-width: 993px){.gallery[_ngcontent-%COMP%]{display:none}.galleryDesktop[_ngcontent-%COMP%]{display:inline}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GalleryComponent, [{
        type: Component,
        args: [{ selector: 'ui-gallery', template: "<div class=\"gallery\">\n    <div  id=\"mainImg\" class=\"main-image pb-2\">\n        <img  [src]=\"selectedImageUrl\" alt=\"\">\n\n    </div>\n    <div class=\"images d-flex flex-row\" style=\" padding-left: 50px; height: 35vh; overflow-x: auto; scrollbar-color: #d5ac68 #f1db9d;\n    scrollbar-width: thin;\">\n\n\n\n        <img  *ngFor=\"let imageUrl of imageArray; let i = index;\" [id]=\"i\"  onmouseover=\"this.style.backgroundColor='black'\" onmouseout=\"this.style.backgroundColor=''\"\n        (click)=\"changeSelectedImage(imageUrl.blob)\" [src]= \"imageUrl.blob\"   class=\"img-fluid p-1\" alt=\"Responsive image\">\n\n    </div>\n</div>\n\n\n\n<div class=\"galleryDesktop\">\n\n    <div class=\"grid w-100 m-0 p-0 h-100\" style=\"max-height: 700px;\">\n        <div class=\"row w-100 m-0 p-0\" style=\"justify-content: end;\">\n            <div class=\"col-3 p-0 d-flex\" style=\"max-height: 700px; overflow-y: auto; flex-direction: column; flex-basis: content;\">\n\n        <img  *ngFor=\"let imageUrl of imageArray; let i = index;\" [id]=\"i\"  onmouseover=\"this.style.backgroundColor='black'\" onmouseout=\"this.style.backgroundColor=''\"\n        (click)=\"changeSelectedImage(imageUrl.blob)\" [src]= \"imageUrl.blob\"   class=\"p-1\" alt=\"Responsive image\" style=\"max-height: 100px;\">\n\n            </div>\n            <div class=\"col-8 p-0 d-flex\" style=\"justify-content: start; \">\n                <div style=\"position: relative; height: fit-content; width: fit-content;\">\n                    <img  [src]=\"selectedImageUrl\" alt=\"\" style=\" height: 600px;\">\n                    <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; right: 0; top: 50%;\"  (click)=\"goToNextImage()\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\">\n                            <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/>\n                          </svg>\n                        <span class=\"visually-hidden\">Button</span>\n                    </button>\n\n                    <button type=\"button\" class=\"btn btn-light btn-sm\" style=\"position: absolute; left: 0; top: 50%;\"  (click)=\"goToPreviouseImage()\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n                            <path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n                          </svg>\n                        <span class=\"visually-hidden\">Button</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n", styles: [".galleryDesktop{display:none}@media screen and (min-width: 993px){.gallery{display:none}.galleryDesktop{display:inline}}\n"] }]
    }], function () { return [{ type: i1.ProductsService }, { type: i2.ActivatedRoute }]; }, { product: [{
            type: Input
        }], image: [{
            type: Input
        }], images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7OztJQ016RCwrQkFDbUg7SUFBbkgseU5BQVMsNENBQWtDLElBQUM7SUFENUMsaUJBQ21IOzs7O0lBRHpELHlCQUFRLDJDQUFBOzs7O0lBY2xFLCtCQUNvSTtJQUFwSSx5TkFBUyw0Q0FBa0MsSUFBQztJQUQ1QyxpQkFDb0k7Ozs7SUFEMUUseUJBQVEsMkNBQUE7O0FEYjFFLE1BQU0sT0FBTyxnQkFBZ0I7SUFVM0IsWUFBb0IsZUFBZ0MsRUFBVSxLQUFxQjtRQUEvRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVJuRixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQU95RSxDQUFDO0lBRTFGLEtBQUssQ0FBQyxRQUFRO1FBRVosSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtB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QjttRUFBaEIsZ0JBQWdCO1FDWDdCLDhCQUFxQixhQUFBO1FBRWIseUJBQXNDO1FBRTFDLGlCQUFNO1FBQ04sOEJBQ3dCO1FBSXBCLGlFQUNtSDtRQUV2SCxpQkFBTSxFQUFBO1FBS1YsOEJBQTRCLGFBQUEsYUFBQSxhQUFBO1FBTXBCLGlFQUNvSTtRQUVoSSxpQkFBTTtRQUNOLGdDQUErRCxlQUFBO1FBRXZELDJCQUE4RDtRQUM5RCxtQ0FBOEg7UUFBMUIsOEZBQVMsbUJBQWUsSUFBQztRQUN6SCxtQkFBaUk7UUFBakksZ0NBQWlJO1FBQzdILDRCQUE2SztRQUMvSyxpQkFBTTtRQUNSLG9CQUE4QjtRQUE5QixpQ0FBOEI7UUFBQSx1QkFBTTtRQUFBLGlCQUFPLEVBQUE7UUFHL0MsbUNBQWtJO1FBQS9CLDhGQUFTLHdCQUFvQixJQUFDO1FBQzdILG1CQUFnSTtRQUFoSSxnQ0FBZ0k7UUFDNUgsNEJBQTZLO1FBQy9LLGlCQUFNO1FBQ1Isb0JBQThCO1FBQTlCLGlDQUE4QjtRQUFBLHVCQUFNO1FBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7O1FBeENyRCxlQUF3QjtRQUF4Qiw0REFBd0I7UUFRSCxlQUFlO1FBQWYsd0NBQWU7UUFjZixlQUFlO1FBQWYsd0NBQWU7UUFNeEIsZUFBd0I7UUFBeEIsNERBQXdCOzt1RkRuQnJDLGdCQUFnQjtjQUw1QixTQUFTOzJCQUNFLFlBQVk7K0ZBU2IsT0FBTztrQkFBZixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBRUcsTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xuaW1wb3J0IHsgUHJvZHVjdDEyM30gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9kdWN0MTIzJztcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4uLy4uL21vZHVsZXMvcHJvZHVjdHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpLWdhbGxlcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnkuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGN1cnJlbnRJZDogc3RyaW5nO1xuICBjdXJyZW50SW1hZ2VJbmRleCA9IDA7XG4gIGltYWdlQXJyYXkgPSBbXTtcbiAgc2VsZWN0ZWRJbWFnZVVybDogc3RyaW5nO1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0MTIzO1xuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xuIFxuICBASW5wdXQoKSBpbWFnZXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCApIHsgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0UHJvZHVjdCh0aGlzLmN1cnJlbnRJZCk7XG4gICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gdGhpcy5wcm9kdWN0LmltYWdlO1xuICAgIHRoaXMuaW1hZ2VzLnB1c2godGhpcy5pbWFnZSk7XG4gICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLmltYWdlcy5sZW5ndGggLTE7IGkrKyl7XG4gICAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLmltYWdlc1tpXSk7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgdGhpcy5pbWFnZUFycmF5LnB1c2goe2lkOiBpLCBibG9iOiAgYmFzZTY0ZGF0YX0pO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJpbWFnZUFycmF5ID0gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmltYWdlQXJyYXkpKTtcblxuXG4gICAgdGhpcy5fcmV0cmlldmVJZCgpO1xuXG4gIH1cblxuICBwcml2YXRlIF9yZXRyaWV2ZUlkKCl7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT57XG4gICAgICBpZihwYXJhbXMuaWQpe1xuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IHBhcmFtcy5pZDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50SWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInhcIik7XG5cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICBjaGFuZ2VTZWxlY3RlZEltYWdlKGltYWdlVXJsOiBzdHJpbmcpe1xuXG5cbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSBpbWFnZVVybDtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuaW1hZ2VBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICBpZih0aGlzLmltYWdlQXJyYXlbaV0uYmxvYiA9PSBpbWFnZVVybCl7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSBpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAgIGdvVG9OZXh0SW1hZ2UoKXtcbiAgICAgIGlmKHRoaXMuY3VycmVudEltYWdlSW5kZXggPT0gdGhpcy5pbWFnZUFycmF5Lmxlbmd0aCAtMSl7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAwXG4gICAgICB9ZWxzZXtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggKys7XG4gICAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gdGhpcy5pbWFnZUFycmF5W3RoaXMuY3VycmVudEltYWdlSW5kZXhdLmJsb2I7XG4gIH1cblxuICAgICAgZ29Ub1ByZXZpb3VzZUltYWdlKCl7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudEltYWdlSW5kZXggPT0gMCl7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IHRoaXMuaW1hZ2VBcnJheS5sZW5ndGggLTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggLS07XG4gICAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IHRoaXMuaW1hZ2VBcnJheVt0aGlzLmN1cnJlbnRJbWFnZUluZGV4XS5ibG9iO1xuICAgIH1cblxuXG4gIHpvb21JbWFnZShpOnN0cmluZyl7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPiAxMjQ1KXtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpO1xuICAgIGNvbnN0IG5ld05vZGUgPSBpbWFnZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgbmV3Tm9kZVsnaWQnXSA9ICd6b29tJztcbiAgICBuZXdOb2RlWydzdHlsZSddID0gJ2hlaWdodDo0MCU7IHRvcDoyMCU7IHBvc2l0aW9uOmZpeGVkOyAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggLTIzcHggMjVweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IC0zNnB4IDMwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IC03OXB4IDQwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4OyB6LWluZGV4OjEwMDA7IHBhZGRpbmc6MDsgbWFyZ2luOjAnOztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkltZycpLmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVpvb21JbWFnZSh1cmwpe1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gMTI0NSl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnem9vbScpLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG5cblxubG9hZFNvbWVUaGluZyh1cmwsIGlkKSB7XG4gIHRoaXMuaW1hZ2VBcnJheS5wdXNoKHtpZDogaWQsIGJsb2I6ICB0aGlzLmFqYXhHZXRJbWFnZURhdGEodXJsKX0pXG59XG5cbiBhc3luYyBhamF4R2V0SW1hZ2VEYXRhKHVybCkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtjYWNoZTogXCJuby1zdG9yZVwifSk7XG4gICAgY29uc3QgaW1hZ2VCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgIHJldHVybiBpbWFnZUJsb2I7XG5cblxuICAvL0NvZGUgdG8gZ2V0IGJhc2U2NCBpbWFnZSBzdHJpbmdcblxufVxuXG5cbiAgZ2V0IGhhc0ltYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXM/Lmxlbmd0aCA+IDA7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImdhbGxlcnlcIj5cbiAgICA8ZGl2ICBpZD1cIm1haW5JbWdcIiBjbGFzcz1cIm1haW4taW1hZ2UgcGItMlwiPlxuICAgICAgICA8aW1nICBbc3JjXT1cInNlbGVjdGVkSW1hZ2VVcmxcIiBhbHQ9XCJcIj5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbWFnZXMgZC1mbGV4IGZsZXgtcm93XCIgc3R5bGU9XCIgcGFkZGluZy1sZWZ0OiA1MHB4OyBoZWlnaHQ6IDM1dmg7IG92ZXJmbG93LXg6IGF1dG87IHNjcm9sbGJhci1jb2xvcjogI2Q1YWM2OCAjZjFkYjlkO1xuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcIj5cblxuXG5cbiAgICAgICAgPGltZyAgKm5nRm9yPVwibGV0IGltYWdlVXJsIG9mIGltYWdlQXJyYXk7IGxldCBpID0gaW5kZXg7XCIgW2lkXT1cImlcIiAgb25tb3VzZW92ZXI9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nYmxhY2snXCIgb25tb3VzZW91dD1cInRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yPScnXCJcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGVkSW1hZ2UoaW1hZ2VVcmwuYmxvYilcIiBbc3JjXT0gXCJpbWFnZVVybC5ibG9iXCIgICBjbGFzcz1cImltZy1mbHVpZCBwLTFcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+XG5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG5cblxuPGRpdiBjbGFzcz1cImdhbGxlcnlEZXNrdG9wXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCB3LTEwMCBtLTAgcC0wIGgtMTAwXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiA3MDBweDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtLTAgcC0wXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBwLTAgZC1mbGV4XCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiA3MDBweDsgb3ZlcmZsb3cteTogYXV0bzsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZmxleC1iYXNpczogY29udGVudDtcIj5cblxuICAgICAgICA8aW1nICAqbmdGb3I9XCJsZXQgaW1hZ2VVcmwgb2YgaW1hZ2VBcnJheTsgbGV0IGkgPSBpbmRleDtcIiBbaWRdPVwiaVwiICBvbm1vdXNlb3Zlcj1cInRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdibGFjaydcIiBvbm1vdXNlb3V0PVwidGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9JydcIlxuICAgICAgICAoY2xpY2spPVwiY2hhbmdlU2VsZWN0ZWRJbWFnZShpbWFnZVVybC5ibG9iKVwiIFtzcmNdPSBcImltYWdlVXJsLmJsb2JcIiAgIGNsYXNzPVwicC0xXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiIHN0eWxlPVwibWF4LWhlaWdodDogMTAwcHg7XCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04IHAtMCBkLWZsZXhcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogc3RhcnQ7IFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogZml0LWNvbnRlbnQ7IHdpZHRoOiBmaXQtY29udGVudDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyAgW3NyY109XCJzZWxlY3RlZEltYWdlVXJsXCIgYWx0PVwiXCIgc3R5bGU9XCIgaGVpZ2h0OiA2MDBweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOiA1MCU7XCIgIChjbGljayk9XCJnb1RvTmV4dEltYWdlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LXJpZ2h0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEgOGEuNS41IDAgMCAxIC41LS41aDExLjc5M2wtMy4xNDctMy4xNDZhLjUuNSAwIDAgMSAuNzA4LS43MDhsNCA0YS41LjUgMCAwIDEgMCAuNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTMuMjkzIDguNUgxLjVBLjUuNSAwIDAgMSAxIDh6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+QnV0dG9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogNTAlO1wiICAoY2xpY2spPVwiZ29Ub1ByZXZpb3VzZUltYWdlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LWxlZnRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTUgOGEuNS41IDAgMCAwLS41LS41SDIuNzA3bDMuMTQ3LTMuMTQ2YS41LjUgMCAxIDAtLjcwOC0uNzA4bC00IDRhLjUuNSAwIDAgMCAwIC43MDhsNCA0YS41LjUgMCAwIDAgLjcwOC0uNzA4TDIuNzA3IDguNUgxNC41QS41LjUgMCAwIDAgMTUgOHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5CdXR0b248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cblxuIl19