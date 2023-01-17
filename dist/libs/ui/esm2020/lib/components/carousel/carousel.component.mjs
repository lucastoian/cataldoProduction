import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
function CarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "a", 3)(2, "div", 4);
    i0.ɵɵelement(3, "img", 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const imageUrl_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", "products/" + ctx_r0.images[i_r2].id, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", imageUrl_r1.blob, i0.ɵɵsanitizeUrl)("alt", ctx_r0.images[i_r2].name);
} }
export class CarouselComponent {
    constructor(router) {
        this.router = router;
        this.imageArray = [];
    }
    loadSomeThing(url, id) {
        this.imageArray.push({ id: id, blob: this.ajaxGetImageData(url) });
    }
    selectColor(prodIndex) {
        // //console.log(prodId);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['products/' + this.images[prodIndex].id]);
        });
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
    async ngOnInit() {
        console.log("CAROUSEL PRODUCTS = " + this.imageArray);
    }
    async ngOnChanges(changes) {
        console.log("carousel component images =  " + JSON.stringify(this.images));
        for (let i = 0; i < this.images.length; i++) {
            let blob = await this.ajaxGetImageData(this.images[i].image);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                this.imageArray.push({ id: i, blob: base64data });
            };
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
CarouselComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["eshop-frontend-carousel"]], inputs: { images: "images" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "images", "d-flex", "flex-row", "m-0", 2, "height", "auto", "overflow-x", "auto", "scrollbar-color", "#d5ac68 #f1db9d", "scrollbar-width", "thin", "padding-left", "0 !important"], ["style", "width: 70px; height:70px; display: flex; justify-content: center;   border-radius: 50%;   padding: 10px; position: relative;", 3, "id", 4, "ngFor", "ngForOf"], [2, "width", "70px", "height", "70px", "display", "flex", "justify-content", "center", "border-radius", "50%", "padding", "10px", "position", "relative", 3, "id"], [2, "overflow", "hidden", "border-radius", "50%", 3, "href"], [1, "roundedVariant"], ["onmouseout", "this.style.backgroundColor=''", "alt", "Responsive image", 1, "p-1", 2, "width", "auto", "height", "90px", "transform", "translate(-7px,-18px)", "border-radius", "40%", 3, "src", "alt"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CarouselComponent_div_1_Template, 4, 4, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.imageArray);
    } }, directives: [i2.NgForOf], styles: [".roundedVariant[_ngcontent-%COMP%]:after{position:absolute;top:5px;content:\"\";left:5px;width:60px;height:60px;border:1px solid #b9b9b9;border-radius:40px;background-color:transparent;display:inherit}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-carousel', template: "<div class=\"images d-flex flex-row m-0\" style=\" height: auto; overflow-x: auto; scrollbar-color: #d5ac68 #f1db9d;\nscrollbar-width: thin; padding-left: 0 !important;\">\n\n    \n\n    <div  style=\"width: 70px; height:70px; display: flex; justify-content: center;   border-radius: 50%;   padding: 10px; position: relative;\" *ngFor=\"let imageUrl of imageArray; let i = index;\"  [id]=\"i\">\n        <a href=\"{{'products/' + this.images[i].id}}\" style=\"overflow: hidden; border-radius: 50%;\">\n        <div  class=\"roundedVariant\" >\n         \n            <img   onmouseout=\"this.style.backgroundColor=''\"\n            [src]= \"imageUrl.blob\" [alt]=\"this.images[i].name\"   class=\"p-1\" alt=\"Responsive image\" style=\"width: auto; height:90px; transform: translate(-7px,-18px); border-radius: 40%;\">\n       \n        </div>\n    </a>\n\n    </div>\n\n\n\n</div>\n", styles: [".roundedVariant:after{position:absolute;top:5px;content:\"\";left:5px;width:60px;height:60px;border:1px solid #b9b9b9;border-radius:40px;background-color:transparent;display:inherit}\n"] }]
    }], function () { return [{ type: i1.Router }]; }, { images: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7SUNJckMsOEJBQXlNLFdBQUEsYUFBQTtJQUlqTSx5QkFDZ0w7SUFFcEwsaUJBQU0sRUFBQSxFQUFBOzs7OztJQVBzTCx5QkFBUTtJQUNqTSxlQUEwQztJQUExQyx3RkFBMEM7SUFJekMsZUFBc0I7SUFBdEIsd0RBQXNCLGlDQUFBOztBRERsQyxNQUFNLE9BQU8saUJBQWlCO0lBSzVCLFlBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIeEIsZUFBVSxHQUFHLEVBQUUsQ0FBQTtJQU1mLENBQUM7SUFDRCxhQUFhLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFBO0lBRW5FLENBQUM7SUFHRCxXQUFXLENBQUMsU0FBUztRQUNuQix5QkFBeUI7UUFFeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRztRQUV2QixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLFNBQVMsR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxPQUFPLFNBQVMsQ0FBQztRQUduQixpQ0FBaUM7SUFFbkMsQ0FBQztJQUdDLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFSCxLQUFLLENBQUMsUUFBUTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3pELENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQXNCO1FBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMxRSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDdkMsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3RCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7Z0JBQ3RCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUcsVUFBVSxFQUFDLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUE7U0FDRjtJQUVILENBQUM7O2tGQXpEVSxpQkFBaUI7b0VBQWpCLGlCQUFpQjtRQ1Q5Qiw4QkFDb0Q7UUFJaEQsa0VBVU07UUFJVixpQkFBTTs7UUFkOEosZUFBZTtRQUFmLHdDQUFlOzt1RkRJdEssaUJBQWlCO2NBTDdCLFNBQVM7MkJBQ0UseUJBQXlCO3lEQUsxQixNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9wcm9kdWN0MTIzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW1hZ2VzOiBQcm9kdWN0MTIzW107XG5cbiAgaW1hZ2VBcnJheSA9IFtdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHtcblxuICB9XG4gIGxvYWRTb21lVGhpbmcodXJsLCBpZCkge1xuICAgIHRoaXMuaW1hZ2VBcnJheS5wdXNoKHtpZDogaWQsIGJsb2I6ICB0aGlzLmFqYXhHZXRJbWFnZURhdGEodXJsKX0pXG4gICBcbiAgfVxuXG4gIFxuICBzZWxlY3RDb2xvcihwcm9kSW5kZXgpIHtcbiAgICAvLyAvL2NvbnNvbGUubG9nKHByb2RJZCk7XG4gIFxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwcm9kdWN0cy8nICsgdGhpcy5pbWFnZXNbcHJvZEluZGV4XS5pZF0pO1xuICAgICB9KTtcbiAgIH1cbiAgXG4gICBhc3luYyBhamF4R2V0SW1hZ2VEYXRhKHVybCkge1xuICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7Y2FjaGU6IFwibm8tc3RvcmVcIn0pO1xuICAgICAgY29uc3QgaW1hZ2VCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgcmV0dXJuIGltYWdlQmxvYjtcbiAgXG4gIFxuICAgIC8vQ29kZSB0byBnZXQgYmFzZTY0IGltYWdlIHN0cmluZ1xuICBcbiAgfVxuICBcbiAgXG4gICAgZ2V0IGhhc0ltYWdlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmltYWdlcz8ubGVuZ3RoID4gMDtcbiAgICB9XG4gIFxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ0FST1VTRUwgUFJPRFVDVFMgPSBcIiArIHRoaXMuaW1hZ2VBcnJheSlcbiAgfVxuXG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImNhcm91c2VsIGNvbXBvbmVudCBpbWFnZXMgPSAgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmltYWdlcykpXG4gICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLmltYWdlcy5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgYmxvYiA9IGF3YWl0IHRoaXMuYWpheEdldEltYWdlRGF0YSh0aGlzLmltYWdlc1tpXS5pbWFnZSk7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlNjRkYXRhID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgdGhpcy5pbWFnZUFycmF5LnB1c2goe2lkOiBpLCBibG9iOiAgYmFzZTY0ZGF0YX0pO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgXG59XG4iLCI8ZGl2IGNsYXNzPVwiaW1hZ2VzIGQtZmxleCBmbGV4LXJvdyBtLTBcIiBzdHlsZT1cIiBoZWlnaHQ6IGF1dG87IG92ZXJmbG93LXg6IGF1dG87IHNjcm9sbGJhci1jb2xvcjogI2Q1YWM2OCAjZjFkYjlkO1xuc2Nyb2xsYmFyLXdpZHRoOiB0aGluOyBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcIj5cblxuICAgIFxuXG4gICAgPGRpdiAgc3R5bGU9XCJ3aWR0aDogNzBweDsgaGVpZ2h0OjcwcHg7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICBwYWRkaW5nOiAxMHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7XCIgKm5nRm9yPVwibGV0IGltYWdlVXJsIG9mIGltYWdlQXJyYXk7IGxldCBpID0gaW5kZXg7XCIgIFtpZF09XCJpXCI+XG4gICAgICAgIDxhIGhyZWY9XCJ7eydwcm9kdWN0cy8nICsgdGhpcy5pbWFnZXNbaV0uaWR9fVwiIHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyLXJhZGl1czogNTAlO1wiPlxuICAgICAgICA8ZGl2ICBjbGFzcz1cInJvdW5kZWRWYXJpYW50XCIgPlxuICAgICAgICAgXG4gICAgICAgICAgICA8aW1nICAgb25tb3VzZW91dD1cInRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yPScnXCJcbiAgICAgICAgICAgIFtzcmNdPSBcImltYWdlVXJsLmJsb2JcIiBbYWx0XT1cInRoaXMuaW1hZ2VzW2ldLm5hbWVcIiAgIGNsYXNzPVwicC0xXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiIHN0eWxlPVwid2lkdGg6IGF1dG87IGhlaWdodDo5MHB4OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtN3B4LC0xOHB4KTsgYm9yZGVyLXJhZGl1czogNDAlO1wiPlxuICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2E+XG5cbiAgICA8L2Rpdj5cblxuXG5cbjwvZGl2PlxuIl19