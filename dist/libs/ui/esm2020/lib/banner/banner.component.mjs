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
        args: [{ selector: 'ui-banner', template: "<div class=\"banner\">\r\n<div class=\"grid\">\r\n    <div class=\"col-5 offset-1 banner-text\">\r\n        <h1>The best products</h1>\r\n        <h2 class=\"mb-5\">in Every Category</h2>\r\n        <!-- <button class =\"warning\" pButton type=\"button\" label=\"See more\" icon=\"pi pi-chevron-right\" iconPos=\"right\"></button> -->\r\n        <button class=\"grey\">SEE MORE</button>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-6 banner-image animate__animated animate__slideInLeft\">\r\n        <img src=\"../assets/banner-image.svg\" alt=\"\">\r\n    </div>\r\n</div>\r\n</div>\r\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBT2xELE1BQU0sT0FBTyxlQUFlO0lBRTFCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs4RUFMVSxlQUFlO2tFQUFmLGVBQWU7UUNQNUIsOEJBQW9CLGFBQUEsYUFBQSxTQUFBO1FBR1IsaUNBQWlCO1FBQUEsaUJBQUs7UUFDMUIsNkJBQWlCO1FBQUEsaUNBQWlCO1FBQUEsaUJBQUs7UUFFdkMsaUNBQXFCO1FBQUEsd0JBQVE7UUFBQSxpQkFBUyxFQUFBO1FBSTFDLDhCQUF1RTtRQUNuRSwwQkFBNkM7UUFDakQsaUJBQU0sRUFBQSxFQUFBOzt1RkRMRyxlQUFlO2NBTDNCLFNBQVM7MkJBQ0UsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3VpLWJhbm5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhbm5lci5jb21wb25lbnQuaHRtbCcsXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYmFubmVyXCI+XHJcbjxkaXYgY2xhc3M9XCJncmlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTUgb2Zmc2V0LTEgYmFubmVyLXRleHRcIj5cclxuICAgICAgICA8aDE+VGhlIGJlc3QgcHJvZHVjdHM8L2gxPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cIm1iLTVcIj5pbiBFdmVyeSBDYXRlZ29yeTwvaDI+XHJcbiAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzID1cIndhcm5pbmdcIiBwQnV0dG9uIHR5cGU9XCJidXR0b25cIiBsYWJlbD1cIlNlZSBtb3JlXCIgaWNvbj1cInBpIHBpLWNoZXZyb24tcmlnaHRcIiBpY29uUG9zPVwicmlnaHRcIj48L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImdyZXlcIj5TRUUgTU9SRTwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBiYW5uZXItaW1hZ2UgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fc2xpZGVJbkxlZnRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9iYW5uZXItaW1hZ2Uuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=