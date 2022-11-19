import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { ButtonModule } from 'primeng/button';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import * as i0 from "@angular/core";
export class UiModule {
}
UiModule.ɵfac = function UiModule_Factory(t) { return new (t || UiModule)(); };
UiModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: UiModule });
UiModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, ButtonModule, CarouselModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UiModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ButtonModule, CarouselModule],
                declarations: [
                    BannerComponent,
                    SliderComponent,
                    GalleryComponent,
                    CarouselComponent
                ],
                exports: [
                    BannerComponent,
                    SliderComponent,
                    GalleryComponent,
                    CarouselComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UiModule, { declarations: [BannerComponent,
        SliderComponent,
        GalleryComponent,
        CarouselComponent], imports: [CommonModule, ButtonModule, CarouselModule], exports: [BannerComponent,
        SliderComponent,
        GalleryComponent,
        CarouselComponent] }); })();
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL3VpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBa0I3RSxNQUFNLE9BQU8sUUFBUTs7Z0VBQVIsUUFBUTswREFBUixRQUFROzhEQWRSLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7dUZBYzVDLFFBQVE7Y0FmcEIsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO2dCQUNyRCxZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO2lCQUNsQjthQUNKOzt3RkFDWSxRQUFRLG1CQVpmLGVBQWU7UUFDZixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQixhQUxULFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxhQVFsRCxlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7QUFHQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJhbm5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFubmVyL2Jhbm5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Nhcm91c2VsTW9kdWxlfSBmcm9tICdwcmltZW5nL2Nhcm91c2VsJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQnV0dG9uTW9kdWxlLCBDYXJvdXNlbE1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgQmFubmVyQ29tcG9uZW50LFxyXG4gICAgICBTbGlkZXJDb21wb25lbnQsXHJcbiAgICAgIEdhbGxlcnlDb21wb25lbnQsXHJcbiAgICAgIENhcm91c2VsQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICBCYW5uZXJDb21wb25lbnQsXHJcbiAgICAgIFNsaWRlckNvbXBvbmVudCxcclxuICAgICAgR2FsbGVyeUNvbXBvbmVudCxcclxuICAgICAgQ2Fyb3VzZWxDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFVpTW9kdWxlIHt9OyJdfQ==