import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { ButtonModule } from 'primeng/button';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarouselModule } from 'primeng/carousel';
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
                    GalleryComponent
                ],
                exports: [
                    BannerComponent,
                    SliderComponent,
                    GalleryComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UiModule, { declarations: [BannerComponent,
        SliderComponent,
        GalleryComponent], imports: [CommonModule, ButtonModule, CarouselModule], exports: [BannerComponent,
        SliderComponent,
        GalleryComponent] }); })();
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL3VpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7O0FBZ0JoRCxNQUFNLE9BQU8sUUFBUTs7Z0VBQVIsUUFBUTswREFBUixRQUFROzhEQVpSLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7dUZBWTVDLFFBQVE7Y0FicEIsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO2dCQUNyRCxZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZixlQUFlO29CQUNmLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixnQkFBZ0I7aUJBQ2pCO2FBQ0o7O3dGQUNZLFFBQVEsbUJBVmYsZUFBZTtRQUNmLGVBQWU7UUFDZixnQkFBZ0IsYUFKUixZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsYUFPbEQsZUFBZTtRQUNmLGVBQWU7UUFDZixnQkFBZ0I7QUFHRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYW5uZXIvYmFubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IEdhbGxlcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQge0Nhcm91c2VsTW9kdWxlfSBmcm9tICdwcmltZW5nL2Nhcm91c2VsJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEJ1dHRvbk1vZHVsZSwgQ2Fyb3VzZWxNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgQmFubmVyQ29tcG9uZW50LFxuICAgICAgU2xpZGVyQ29tcG9uZW50LFxuICAgICAgR2FsbGVyeUNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgQmFubmVyQ29tcG9uZW50LFxuICAgICAgU2xpZGVyQ29tcG9uZW50LFxuICAgICAgR2FsbGVyeUNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVWlNb2R1bGUge307Il19