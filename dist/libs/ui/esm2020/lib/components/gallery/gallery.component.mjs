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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7OztJQ016RCwrQkFDbUg7SUFBbkgseU5BQVMsNENBQWtDLElBQUM7SUFENUMsaUJBQ21IOzs7O0lBRHpELHlCQUFRLDJDQUFBOzs7O0lBY2xFLCtCQUNvSTtJQUFwSSx5TkFBUyw0Q0FBa0MsSUFBQztJQUQ1QyxpQkFDb0k7Ozs7SUFEMUUseUJBQVEsMkNBQUE7O0FEYjFFLE1BQU0sT0FBTyxnQkFBZ0I7SUFVM0IsWUFBb0IsZUFBZ0MsRUFBVSxLQUFxQjtRQUEvRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVJuRixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQU95RSxDQUFDO0lBRTFGLEtBQUssQ0FBQyxRQUFRO1FBRVosSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtB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O1FBQ3pILG1CQUFpSTtRQUFqSSxnQ0FBaUk7UUFDN0gsNEJBQTZLO1FBQy9LLGlCQUFNO1FBQ1Isb0JBQThCO1FBQTlCLGlDQUE4QjtRQUFBLHVCQUFNO1FBQUEsaUJBQU8sRUFBQTtRQUcvQyxtQ0FBa0k7UUFBL0IsOEZBQVMsd0JBQW9CLElBQUM7UUFDN0gsbUJBQWdJO1FBQWhJLGdDQUFnSTtRQUM1SCw0QkFBNks7UUFDL0ssaUJBQU07UUFDUixvQkFBOEI7UUFBOUIsaUNBQThCO1FBQUEsdUJBQU07UUFBQSxpQkFBTyxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTs7UUF4Q3JELGVBQXdCO1FBQXhCLDREQUF3QjtRQVFILGVBQWU7UUFBZix3Q0FBZTtRQWNmLGVBQWU7UUFBZix3Q0FBZTtRQU14QixlQUF3QjtRQUF4Qiw0REFBd0I7O3VGRG5CckMsZ0JBQWdCO2NBTDVCLFNBQVM7MkJBQ0UsWUFBWTsrRkFTYixPQUFPO2tCQUFmLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFFRyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG5pbXBvcnQgeyBQcm9kdWN0MTIzfSBmcm9tICcuLi8uLi9tb2R1bGVzL3Byb2R1Y3QxMjMnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWktZ2FsbGVyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY3VycmVudElkOiBzdHJpbmc7XG4gIGN1cnJlbnRJbWFnZUluZGV4ID0gMDtcbiAgaW1hZ2VBcnJheSA9IFtdO1xuICBzZWxlY3RlZEltYWdlVXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByb2R1Y3Q6IFByb2R1Y3QxMjM7XG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XG4gXG4gIEBJbnB1dCgpIGltYWdlczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0c1NlcnZpY2U6IFByb2R1Y3RzU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsICkgeyB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICB0aGlzLnByb2R1Y3RzU2VydmljZS5nZXRQcm9kdWN0KHRoaXMuY3VycmVudElkKTtcbiAgICB0aGlzLnNlbGVjdGVkSW1hZ2VVcmwgPSB0aGlzLnByb2R1Y3QuaW1hZ2U7XG4gICAgdGhpcy5pbWFnZXMucHVzaCh0aGlzLmltYWdlKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuaW1hZ2VzLmxlbmd0aCAtMTsgaSsrKXtcbiAgICAgIGxldCBibG9iID0gYXdhaXQgdGhpcy5hamF4R2V0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VzW2ldKTtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhc2U2NGRhdGEgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICB0aGlzLmltYWdlQXJyYXkucHVzaCh7aWQ6IGksIGJsb2I6ICBiYXNlNjRkYXRhfSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImltYWdlQXJyYXkgPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1hZ2VBcnJheSkpO1xuXG5cbiAgICB0aGlzLl9yZXRyaWV2ZUlkKCk7XG5cbiAgfVxuXG4gIHByaXZhdGUgX3JldHJpZXZlSWQoKXtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcyk9PntcbiAgICAgIGlmKHBhcmFtcy5pZCl7XG4gICAgICAgIHRoaXMuY3VycmVudElkID0gcGFyYW1zLmlkO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwieFwiKTtcblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIGNoYW5nZVNlbGVjdGVkSW1hZ2UoaW1hZ2VVcmw6IHN0cmluZyl7XG4gICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gaW1hZ2VVcmw7XG4gIH1cblxuICAgIGdvVG9OZXh0SW1hZ2UoKXtcbiAgICAgIGlmKHRoaXMuY3VycmVudEltYWdlSW5kZXggPT0gdGhpcy5pbWFnZUFycmF5Lmxlbmd0aCAtMSl7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAwXG4gICAgICB9ZWxzZXtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggKys7XG4gICAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEltYWdlVXJsID0gdGhpcy5pbWFnZUFycmF5W3RoaXMuY3VycmVudEltYWdlSW5kZXhdLmJsb2I7XG4gIH1cblxuICAgICAgZ29Ub1ByZXZpb3VzZUltYWdlKCl7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudEltYWdlSW5kZXggPT0gMCl7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IHRoaXMuaW1hZ2VBcnJheS5sZW5ndGggLTFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggLS07XG4gICAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbWFnZVVybCA9IHRoaXMuaW1hZ2VBcnJheVt0aGlzLmN1cnJlbnRJbWFnZUluZGV4XS5ibG9iO1xuICAgIH1cblxuXG4gIHpvb21JbWFnZShpOnN0cmluZyl7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPiAxMjQ1KXtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpO1xuICAgIGNvbnN0IG5ld05vZGUgPSBpbWFnZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgbmV3Tm9kZVsnaWQnXSA9ICd6b29tJztcbiAgICBuZXdOb2RlWydzdHlsZSddID0gJ2hlaWdodDo0MCU7IHRvcDoyMCU7IHBvc2l0aW9uOmZpeGVkOyAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggLTIzcHggMjVweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IC0zNnB4IDMwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IC03OXB4IDQwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4OyB6LWluZGV4OjEwMDA7IHBhZGRpbmc6MDsgbWFyZ2luOjAnOztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkltZycpLmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVpvb21JbWFnZSh1cmwpe1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gMTI0NSl7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnem9vbScpLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG5cblxubG9hZFNvbWVUaGluZyh1cmwsIGlkKSB7XG4gIHRoaXMuaW1hZ2VBcnJheS5wdXNoKHtpZDogaWQsIGJsb2I6ICB0aGlzLmFqYXhHZXRJbWFnZURhdGEodXJsKX0pXG59XG5cbiBhc3luYyBhamF4R2V0SW1hZ2VEYXRhKHVybCkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtjYWNoZTogXCJuby1zdG9yZVwifSk7XG4gICAgY29uc3QgaW1hZ2VCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgIHJldHVybiBpbWFnZUJsb2I7XG5cblxuICAvL0NvZGUgdG8gZ2V0IGJhc2U2NCBpbWFnZSBzdHJpbmdcblxufVxuXG5cbiAgZ2V0IGhhc0ltYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXM/Lmxlbmd0aCA+IDA7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImdhbGxlcnlcIj5cbiAgICA8ZGl2ICBpZD1cIm1haW5JbWdcIiBjbGFzcz1cIm1haW4taW1hZ2UgcGItMlwiPlxuICAgICAgICA8aW1nICBbc3JjXT1cInNlbGVjdGVkSW1hZ2VVcmxcIiBhbHQ9XCJcIj5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbWFnZXMgZC1mbGV4IGZsZXgtcm93XCIgc3R5bGU9XCIgcGFkZGluZy1sZWZ0OiA1MHB4OyBoZWlnaHQ6IDM1dmg7IG92ZXJmbG93LXg6IGF1dG87IHNjcm9sbGJhci1jb2xvcjogI2Q1YWM2OCAjZjFkYjlkO1xuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcIj5cblxuXG5cbiAgICAgICAgPGltZyAgKm5nRm9yPVwibGV0IGltYWdlVXJsIG9mIGltYWdlQXJyYXk7IGxldCBpID0gaW5kZXg7XCIgW2lkXT1cImlcIiAgb25tb3VzZW92ZXI9XCJ0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nYmxhY2snXCIgb25tb3VzZW91dD1cInRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yPScnXCJcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGVkSW1hZ2UoaW1hZ2VVcmwuYmxvYilcIiBbc3JjXT0gXCJpbWFnZVVybC5ibG9iXCIgICBjbGFzcz1cImltZy1mbHVpZCBwLTFcIiBhbHQ9XCJSZXNwb25zaXZlIGltYWdlXCI+XG5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG5cblxuPGRpdiBjbGFzcz1cImdhbGxlcnlEZXNrdG9wXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCB3LTEwMCBtLTAgcC0wIGgtMTAwXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiA3MDBweDtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3LTEwMCBtLTAgcC0wXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMyBwLTAgZC1mbGV4XCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiA3MDBweDsgb3ZlcmZsb3cteTogYXV0bzsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZmxleC1iYXNpczogY29udGVudDtcIj5cblxuICAgICAgICA8aW1nICAqbmdGb3I9XCJsZXQgaW1hZ2VVcmwgb2YgaW1hZ2VBcnJheTsgbGV0IGkgPSBpbmRleDtcIiBbaWRdPVwiaVwiICBvbm1vdXNlb3Zlcj1cInRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdibGFjaydcIiBvbm1vdXNlb3V0PVwidGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9JydcIlxuICAgICAgICAoY2xpY2spPVwiY2hhbmdlU2VsZWN0ZWRJbWFnZShpbWFnZVVybC5ibG9iKVwiIFtzcmNdPSBcImltYWdlVXJsLmJsb2JcIiAgIGNsYXNzPVwicC0xXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiIHN0eWxlPVwibWF4LWhlaWdodDogMTAwcHg7XCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04IHAtMCBkLWZsZXhcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogc3RhcnQ7IFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogZml0LWNvbnRlbnQ7IHdpZHRoOiBmaXQtY29udGVudDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyAgW3NyY109XCJzZWxlY3RlZEltYWdlVXJsXCIgYWx0PVwiXCIgc3R5bGU9XCIgaGVpZ2h0OiA2MDBweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpZ2h0IGJ0bi1zbVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOiA1MCU7XCIgIChjbGljayk9XCJnb1RvTmV4dEltYWdlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LXJpZ2h0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEgOGEuNS41IDAgMCAxIC41LS41aDExLjc5M2wtMy4xNDctMy4xNDZhLjUuNSAwIDAgMSAuNzA4LS43MDhsNCA0YS41LjUgMCAwIDEgMCAuNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTMuMjkzIDguNUgxLjVBLjUuNSAwIDAgMSAxIDh6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+QnV0dG9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogNTAlO1wiICAoY2xpY2spPVwiZ29Ub1ByZXZpb3VzZUltYWdlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWFycm93LWxlZnRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTUgOGEuNS41IDAgMCAwLS41LS41SDIuNzA3bDMuMTQ3LTMuMTQ2YS41LjUgMCAxIDAtLjcwOC0uNzA4bC00IDRhLjUuNSAwIDAgMCAwIC43MDhsNCA0YS41LjUgMCAwIDAgLjcwOC0uNzA4TDIuNzA3IDguNUgxNC41QS41LjUgMCAwIDAgMTUgOHpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5CdXR0b248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cblxuIl19