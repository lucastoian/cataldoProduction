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
import { AccordionModule } from 'primeng/accordion';
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
            PaginatorModule,
            AccordionModule
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
                    PaginatorModule,
                    AccordionModule
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
                    ProductsListComponent,
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
        PaginatorModule,
        AccordionModule], exports: [ProductsSearchComponent,
        CategoriesBannerComponent,
        ProductItemComponent,
        FeaturedProductsComponent,
        ProductsListComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3Byb2R1Y3RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2Ryw4REFBOEQ7QUFDOUQsd0RBQXdEO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUV4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsOERBQThEO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFP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QUNwQix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUVwQix1QkFBdUI7UUFDdkIsK0JBQStCLGFBekJ2QixZQUFZLG1CQUtaLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsUUFBUTtRQUNSLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGVBQWUsYUFrQnZCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLHlCQUF5QjtRQUN6QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByb2R1Y3RzU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3RzLXNlYXJjaC9wcm9kdWN0cy1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IENhdGVnb3JpZXNCYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1iYW5uZXIvY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG4vL2ltcG9ydCB7IE9yZGVyc01vZHVsZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC9vcmRlcnMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9kdWN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEZlYXR1cmVkUHJvZHVjdHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IFByb2R1Y3RzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoZWNrYm94TW9kdWxlfSBmcm9tICdwcmltZW5nL2NoZWNrYm94JztcblxuaW1wb3J0IHsgUHJvZHVjdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VpJztcbmltcG9ydCB7Q2Fyb3VzZWxNb2R1bGV9IGZyb20gJ3ByaW1lbmcvY2Fyb3VzZWwnO1xuaW1wb3J0IHtSYXRpbmdNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcmF0aW5nJztcbmltcG9ydCB7SW5wdXROdW1iZXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvaW5wdXRudW1iZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXNcbmltcG9ydCB7IFVpTW9kdWxlIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VpJztcbmltcG9ydCB7IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEhhc2hMb2NhdGlvblN0cmF0ZWd5LCBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TXVsdGlTZWxlY3RNb2R1bGV9IGZyb20gJ3ByaW1lbmcvbXVsdGlzZWxlY3QnO1xuaW1wb3J0IHtQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcGFnaW5hdG9yJztcbmltcG9ydCB7IEFjY29yZGlvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYWNjb3JkaW9uJztcblxuXG4vLyBpbXBvcnQgeyBXb21lblByb2R1Y3RzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvd29tZW4tcHJvZHVjdHMtbGlzdC93b21lbi1wcm9kdWN0cy1saXN0LmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBXb21lblByb2R1Y3RzQnJhbmRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy93b21lbi1wcm9kdWN0cy1icmFuZHMvd29tZW4tcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudCc7XG5cblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdwcm9kdWN0cycsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnd29tZW4tcHJvZHVjdHMnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNMaXN0Q29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2R1Y3RzL2NhdGVnb3J5LzpjYXRlZ29yeWlkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzTGlzdENvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd3b21lbi1wcm9kdWN0cy9jYXRlZ29yeS86Y2F0ZWdvcnlpZCcsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncHJvZHVjdHMvOnByb2R1Y3RJZCcsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0UGFnZUNvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd3b21lbi1wcm9kdWN0cy86cHJvZHVjdElkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RQYWdlQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2R1Y3RzL2JyYW5kLzpicmFuZElkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3dvbWVuLXByb2R1Y3RzL2JyYW5kLzpicmFuZElkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2R1Y3RzL2JyYW5kL25hbWUvOmJyYW5kTmFtZS86YnJhbmRJZCcsXG4gICAgY29tcG9uZW50OiBDYXJvdXNlbFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxcbiAgICAgICAgICAgLy8gT3JkZXJzTW9kdWxlLFxuICAgICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHtcbiAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb246ICd0b3AnLCAvLyBBZGQgb3B0aW9ucyByaWdodCBoZXJlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgICBCdXR0b25Nb2R1bGUsXG4gICAgICAgICAgICBDaGVja2JveE1vZHVsZSxcbiAgICAgICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICAgICAgUmF0aW5nTW9kdWxlLFxuICAgICAgICAgICAgSW5wdXROdW1iZXJNb2R1bGUsXG4gICAgICAgICAgICBVaU1vZHVsZSxcbiAgICAgICAgICAgIENhcm91c2VsTW9kdWxlLFxuICAgICAgICAgICAgTXVsdGlTZWxlY3RNb2R1bGUsXG4gICAgICAgICAgICBQYWdpbmF0b3JNb2R1bGUsXG4gICAgICAgICAgICBBY2NvcmRpb25Nb2R1bGVcbiAgICAgICAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQcm9kdWN0c1NlYXJjaENvbXBvbmVudCxcbiAgICBDYXRlZ29yaWVzQmFubmVyQ29tcG9uZW50LFxuICAgIFByb2R1Y3RJdGVtQ29tcG9uZW50LFxuICAgIEZlYXR1cmVkUHJvZHVjdHNDb21wb25lbnQsXG4gICAgUHJvZHVjdHNMaXN0Q29tcG9uZW50LFxuICAgIFByb2R1Y3RQYWdlQ29tcG9uZW50LFxuXG4gICAgUHJvZHVjdHNCcmFuZHNDb21wb25lbnQsXG4gICAgQ2Fyb3VzZWxQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCxcblxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJvZHVjdHNTZWFyY2hDb21wb25lbnQsXG4gICAgQ2F0ZWdvcmllc0Jhbm5lckNvbXBvbmVudCxcbiAgICBQcm9kdWN0SXRlbUNvbXBvbmVudCxcbiAgICBGZWF0dXJlZFByb2R1Y3RzQ29tcG9uZW50LFxuICAgIFByb2R1Y3RzTGlzdENvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c01vZHVsZSB7fVxuIl19