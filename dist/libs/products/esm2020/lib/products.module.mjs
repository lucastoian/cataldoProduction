import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
//import { OrdersModule } from '@eshop-frontend/orders';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ButtonModule } from 'primeng/button';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UiModule } from '@eshop-frontend/ui';
import { ProductsBrandsComponent } from './pages/products-brands/products-brands.component';
import { CarouselProductsBrandsComponent } from './pages/carousel-products-brands/carousel-products-brands.component';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
// import { WomenProductsListComponent } from './pages/women-products-list/women-products-list.component';
// import { WomenProductsBrandsComponent } from './pages/women-products-brands/women-products-brands.component';
const routes = [
    {
        path: 'products',
        component: ProductsListComponent,
    },
    {
        path: 'women-products',
        component: ProductsListComponent,
    },
    {
        path: 'products/category/:categoryid',
        component: ProductsListComponent,
    },
    {
        path: 'women-products/category/:categoryid',
        component: ProductsListComponent,
    },
    {
        path: 'products/:productId',
        component: ProductPageComponent,
    },
    {
        path: 'women-products/:productId',
        component: ProductPageComponent,
    },
    {
        path: 'products/brand/:brandId',
        component: ProductsBrandsComponent,
    },
    {
        path: 'women-products/brand/:brandId',
        component: ProductsBrandsComponent,
    },
    {
        path: 'products/brand/name/:brandName/:brandId',
        component: CarouselProductsBrandsComponent,
    },
];
export class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ], imports: [[CommonModule,
            // OrdersModule,
            RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'top', // Add options right here
            }),
            ButtonModule,
            CheckboxModule,
            FormsModule,
            RatingModule,
            InputNumberModule,
            UiModule,
            CarouselModule,
            MultiSelectModule,
            PaginatorModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule,
                    // OrdersModule,
                    RouterModule.forRoot(routes, {
                        scrollPositionRestoration: 'top', // Add options right here
                    }),
                    ButtonModule,
                    CheckboxModule,
                    FormsModule,
                    RatingModule,
                    InputNumberModule,
                    UiModule,
                    CarouselModule,
                    MultiSelectModule,
                    PaginatorModule
                ],
                declarations: [
                    ProductsSearchComponent,
                    CategoriesBannerComponent,
                    ProductItemComponent,
                    FeaturedProductsComponent,
                    ProductsListComponent,
                    ProductPageComponent,
                    ProductsBrandsComponent,
                    CarouselProductsBrandsComponent,
                ],
                providers: [
                    { provide: LocationStrategy, useClass: HashLocationStrategy }
                ],
                exports: [
                    ProductsSearchComponent,
                    CategoriesBannerComponent,
                    ProductItemComponent,
                    FeaturedProductsComponent,
                    ProductsListComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProductsModule, { declarations: [ProductsSearchComponent,
        CategoriesBannerComponent,
        ProductItemComponent,
        FeaturedProductsComponent,
        ProductsListComponent,
        ProductPageComponent,
        ProductsBrandsComponent,
        CarouselProductsBrandsComponent], imports: [CommonModule, i1.RouterModule, ButtonModule,
        CheckboxModule,
        FormsModule,
        RatingModule,
        InputNumberModule,
        UiModule,
        CarouselModule,
        MultiSelectModule,
        PaginatorModule], exports: [ProductsSearchComponent,
        CategoriesBannerComponent,
        ProductItemComponent,
        FeaturedProductsComponent,
        ProductsListComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3Byb2R1Y3RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2Ryw4REFBOEQ7QUFDOUQsd0RBQXdEO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUV4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsOERBQThEO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFP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YUF4QnZCLFlBQVksbUJBS1osWUFBWTtRQUNaLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixlQUFlLGFBa0J2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUHJvZHVjdHNTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdHMtc2VhcmNoL3Byb2R1Y3RzLXNlYXJjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWVzQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3JpZXMtYmFubmVyL2NhdGVnb3JpZXMtYmFubmVyLmNvbXBvbmVudCc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXHJcbi8vaW1wb3J0IHsgT3JkZXJzTW9kdWxlIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFByb2R1Y3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVkUHJvZHVjdHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xyXG5pbXBvcnQgeyBQcm9kdWN0c0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2R1Y3RzLWxpc3QvcHJvZHVjdHMtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NoZWNrYm94TW9kdWxlfSBmcm9tICdwcmltZW5nL2NoZWNrYm94JztcclxuXHJcbmltcG9ydCB7IFByb2R1Y3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VpJztcclxuaW1wb3J0IHtDYXJvdXNlbE1vZHVsZX0gZnJvbSAncHJpbWVuZy9jYXJvdXNlbCc7XHJcbmltcG9ydCB7UmF0aW5nTW9kdWxlfSBmcm9tICdwcmltZW5nL3JhdGluZyc7XHJcbmltcG9ydCB7SW5wdXROdW1iZXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvaW5wdXRudW1iZXInO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xyXG5pbXBvcnQgeyBVaU1vZHVsZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91aSc7XHJcbmltcG9ydCB7IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcm91c2VsUHJvZHVjdHNCcmFuZHNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2Nhcm91c2VsLXByb2R1Y3RzLWJyYW5kcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEhhc2hMb2NhdGlvblN0cmF0ZWd5LCBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtNdWx0aVNlbGVjdE1vZHVsZX0gZnJvbSAncHJpbWVuZy9tdWx0aXNlbGVjdCc7XHJcbmltcG9ydCB7UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdwcmltZW5nL3BhZ2luYXRvcic7XHJcblxyXG4vLyBpbXBvcnQgeyBXb21lblByb2R1Y3RzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvd29tZW4tcHJvZHVjdHMtbGlzdC93b21lbi1wcm9kdWN0cy1saXN0LmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IFdvbWVuUHJvZHVjdHNCcmFuZHNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3dvbWVuLXByb2R1Y3RzLWJyYW5kcy93b21lbi1wcm9kdWN0cy1icmFuZHMuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJ3Byb2R1Y3RzJyxcclxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNMaXN0Q29tcG9uZW50LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3dvbWVuLXByb2R1Y3RzJyxcclxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNMaXN0Q29tcG9uZW50LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3Byb2R1Y3RzL2NhdGVnb3J5LzpjYXRlZ29yeWlkJyxcclxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNMaXN0Q29tcG9uZW50LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3dvbWVuLXByb2R1Y3RzL2NhdGVnb3J5LzpjYXRlZ29yeWlkJyxcclxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNMaXN0Q29tcG9uZW50LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3Byb2R1Y3RzLzpwcm9kdWN0SWQnLFxyXG4gICAgY29tcG9uZW50OiBQcm9kdWN0UGFnZUNvbXBvbmVudCxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd3b21lbi1wcm9kdWN0cy86cHJvZHVjdElkJyxcclxuICAgIGNvbXBvbmVudDogUHJvZHVjdFBhZ2VDb21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncHJvZHVjdHMvYnJhbmQvOmJyYW5kSWQnLFxyXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd3b21lbi1wcm9kdWN0cy9icmFuZC86YnJhbmRJZCcsXHJcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3Byb2R1Y3RzL2JyYW5kL25hbWUvOmJyYW5kTmFtZS86YnJhbmRJZCcsXHJcbiAgICBjb21wb25lbnQ6IENhcm91c2VsUHJvZHVjdHNCcmFuZHNDb21wb25lbnQsXHJcbiAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxcclxuICAgICAgICAgICAvLyBPcmRlcnNNb2R1bGUsXHJcbiAgICAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7XHJcbiAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb246ICd0b3AnLCAvLyBBZGQgb3B0aW9ucyByaWdodCBoZXJlXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgICAgICAgICBDaGVja2JveE1vZHVsZSxcclxuICAgICAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgICAgIFJhdGluZ01vZHVsZSxcclxuICAgICAgICAgICAgSW5wdXROdW1iZXJNb2R1bGUsXHJcbiAgICAgICAgICAgIFVpTW9kdWxlLFxyXG4gICAgICAgICAgICBDYXJvdXNlbE1vZHVsZSxcclxuICAgICAgICAgICAgTXVsdGlTZWxlY3RNb2R1bGUsXHJcbiAgICAgICAgICAgIFBhZ2luYXRvck1vZHVsZVxyXG4gICAgICAgICAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFByb2R1Y3RzU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgQ2F0ZWdvcmllc0Jhbm5lckNvbXBvbmVudCxcclxuICAgIFByb2R1Y3RJdGVtQ29tcG9uZW50LFxyXG4gICAgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCxcclxuICAgIFByb2R1Y3RzTGlzdENvbXBvbmVudCxcclxuICAgIFByb2R1Y3RQYWdlQ29tcG9uZW50LFxyXG5cclxuICAgIFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxyXG4gICAgQ2Fyb3VzZWxQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCxcclxuXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBQcm9kdWN0c1NlYXJjaENvbXBvbmVudCxcclxuICAgIENhdGVnb3JpZXNCYW5uZXJDb21wb25lbnQsXHJcbiAgICBQcm9kdWN0SXRlbUNvbXBvbmVudCxcclxuICAgIEZlYXR1cmVkUHJvZHVjdHNDb21wb25lbnQsXHJcbiAgICBQcm9kdWN0c0xpc3RDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c01vZHVsZSB7fVxyXG4iXX0=