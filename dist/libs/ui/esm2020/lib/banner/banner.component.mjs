import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BannerComponent, selectors: [["ui-banner"]], decls: 11, vars: 0, consts: [[1, "banner"], [1, "grid"], [1, "col-5", "offset-1", "banner-text"], [1, "mb-5"], [1, "grey"], [1, "col-6", "banner-image", "animate__animated", "animate__slideInLeft"], ["src", "../assets/banner-image.svg", "alt", ""]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        i0.ɵɵtext(4, "The best products");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "h2", 3);
        i0.ɵɵtext(6, "in Every Category");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 4);
        i0.ɵɵtext(8, "SEE MORE");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "div", 5);
        i0.ɵɵelement(10, "img", 6);
        i0.ɵɵelementEnd()()();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BannerComponent, [{
        type: Component,
        args: [{ selector: 'ui-banner', template: "<div class=\"banner\">\n<div class=\"grid\">\n    <div class=\"col-5 offset-1 banner-text\">\n        <h1>The best products</h1>\n        <h2 class=\"mb-5\">in Every Category</h2>\n        <!-- <button class =\"warning\" pButton type=\"button\" label=\"See more\" icon=\"pi pi-chevron-right\" iconPos=\"right\"></button> -->\n        <button class=\"grey\">SEE MORE</button>\n\n\n    </div>\n    <div class=\"col-6 banner-image animate__animated animate__slideInLeft\">\n        <img src=\"../assets/banner-image.svg\" alt=\"\">\n    </div>\n</div>\n</div>\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBT2xELE1BQU0sT0FBTyxlQUFlO0lBRTFCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs4RUFMVSxlQUFlO2tFQUFmLGVBQWU7UUNQNUIsOEJBQW9CLGFBQUEsYUFBQSxTQUFBO1FBR1IsaUNBQWlCO1FBQUEsaUJBQUs7UUFDMUIsNkJBQWlCO1FBQUEsaUNBQWlCO1FBQUEsaUJBQUs7UUFFdkMsaUNBQXFCO1FBQUEsd0JBQVE7UUFBQSxpQkFBUyxFQUFBO1FBSTFDLDhCQUF1RTtRQUNuRSwwQkFBNkM7UUFDakQsaUJBQU0sRUFBQSxFQUFBOzt1RkRMRyxlQUFlO2NBTDNCLFNBQVM7MkJBQ0UsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpLWJhbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiYmFubmVyXCI+XG48ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtNSBvZmZzZXQtMSBiYW5uZXItdGV4dFwiPlxuICAgICAgICA8aDE+VGhlIGJlc3QgcHJvZHVjdHM8L2gxPlxuICAgICAgICA8aDIgY2xhc3M9XCJtYi01XCI+aW4gRXZlcnkgQ2F0ZWdvcnk8L2gyPlxuICAgICAgICA8IS0tIDxidXR0b24gY2xhc3MgPVwid2FybmluZ1wiIHBCdXR0b24gdHlwZT1cImJ1dHRvblwiIGxhYmVsPVwiU2VlIG1vcmVcIiBpY29uPVwicGkgcGktY2hldnJvbi1yaWdodFwiIGljb25Qb3M9XCJyaWdodFwiPjwvYnV0dG9uPiAtLT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImdyZXlcIj5TRUUgTU9SRTwvYnV0dG9uPlxuXG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTYgYmFubmVyLWltYWdlIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX3NsaWRlSW5MZWZ0XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2Jhbm5lci1pbWFnZS5zdmdcIiBhbHQ9XCJcIj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG4iXX0=