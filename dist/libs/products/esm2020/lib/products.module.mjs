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
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { ProductJsonLdComponent } from './product-json-ld/product-json-ld.component';
import { MessagesModule } from 'primeng/messages';
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
            NgxJsonLdModule,
            ButtonModule,
            CheckboxModule,
            FormsModule,
            RatingModule,
            InputNumberModule,
            MessagesModule,
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
                    NgxJsonLdModule,
                    ButtonModule,
                    CheckboxModule,
                    FormsModule,
                    RatingModule,
                    InputNumberModule,
                    MessagesModule,
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
                    ProductJsonLdComponent,
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
        CarouselProductsBrandsComponent,
        ProductJsonLdComponent], imports: [CommonModule, i1.RouterModule, NgxJsonLdModule,
        ButtonModule,
        CheckboxModule,
        FormsModule,
        RatingModule,
        InputNumberModule,
        MessagesModule,
        UiModule,
        CarouselModule,
        MultiSelectModule,
        PaginatorModule,
        AccordionModule], exports: [ProductsSearchComponent,
        CategoriesBannerComponent,
        ProductItemComponent,
        FeaturedProductsComponent,
        ProductsListComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3Byb2R1Y3RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2Ryw4REFBOEQ7QUFDOUQsd0RBQXdEO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUV4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsOERBQThEO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFP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QixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBQztpQkFDNUQ7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6QixvQkFBb0I7b0JBQ3BCLHlCQUF5QjtvQkFDekIscUJBQXFCO2lCQUN0QjthQUNGOzt3RkFDWSxjQUFjLG1CQXZCdkIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QixvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFFcEIsdUJBQXVCO1FBQ3ZCLCtCQUErQjtRQUMvQixzQkFBc0IsYUE1QmQsWUFBWSxtQkFLWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsUUFBUTtRQUNSLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGVBQWUsYUFtQnZCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLHlCQUF5QjtRQUN6QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByb2R1Y3RzU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3RzLXNlYXJjaC9wcm9kdWN0cy1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IENhdGVnb3JpZXNCYW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1iYW5uZXIvY2F0ZWdvcmllcy1iYW5uZXIuY29tcG9uZW50Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG4vL2ltcG9ydCB7IE9yZGVyc01vZHVsZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC9vcmRlcnMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9kdWN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEZlYXR1cmVkUHJvZHVjdHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmVhdHVyZWQtcHJvZHVjdHMvZmVhdHVyZWQtcHJvZHVjdHMuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IFByb2R1Y3RzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoZWNrYm94TW9kdWxlfSBmcm9tICdwcmltZW5nL2NoZWNrYm94JztcblxuaW1wb3J0IHsgUHJvZHVjdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VpJztcbmltcG9ydCB7Q2Fyb3VzZWxNb2R1bGV9IGZyb20gJ3ByaW1lbmcvY2Fyb3VzZWwnO1xuaW1wb3J0IHtSYXRpbmdNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcmF0aW5nJztcbmltcG9ydCB7SW5wdXROdW1iZXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvaW5wdXRudW1iZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBucndsL254L2VuZm9yY2UtbW9kdWxlLWJvdW5kYXJpZXNcbmltcG9ydCB7IFVpTW9kdWxlIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VpJztcbmltcG9ydCB7IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9kdWN0cy1icmFuZHMvcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jYXJvdXNlbC1wcm9kdWN0cy1icmFuZHMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEhhc2hMb2NhdGlvblN0cmF0ZWd5LCBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TXVsdGlTZWxlY3RNb2R1bGV9IGZyb20gJ3ByaW1lbmcvbXVsdGlzZWxlY3QnO1xuaW1wb3J0IHtQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcGFnaW5hdG9yJztcbmltcG9ydCB7TWVzc2FnZSxNZXNzYWdlU2VydmljZX0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hY2NvcmRpb24nO1xuaW1wb3J0IHsgTmd4SnNvbkxkTW9kdWxlIH0gZnJvbSAnQG5neC1saXRlL2pzb24tbGQnO1xuaW1wb3J0IHsgUHJvZHVjdEpzb25MZENvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1qc29uLWxkL3Byb2R1Y3QtanNvbi1sZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVzc2FnZXNNb2R1bGUgfSBmcm9tICdwcmltZW5nL21lc3NhZ2VzJztcblxuXG4vLyBpbXBvcnQgeyBXb21lblByb2R1Y3RzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvd29tZW4tcHJvZHVjdHMtbGlzdC93b21lbi1wcm9kdWN0cy1saXN0LmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBXb21lblByb2R1Y3RzQnJhbmRzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy93b21lbi1wcm9kdWN0cy1icmFuZHMvd29tZW4tcHJvZHVjdHMtYnJhbmRzLmNvbXBvbmVudCc7XG5cblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdwcm9kdWN0cycsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnd29tZW4tcHJvZHVjdHMnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNMaXN0Q29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2R1Y3RzL2NhdGVnb3J5LzpjYXRlZ29yeWlkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzTGlzdENvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd3b21lbi1wcm9kdWN0cy9jYXRlZ29yeS86Y2F0ZWdvcnlpZCcsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncHJvZHVjdHMvOnByb2R1Y3RJZCcsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0UGFnZUNvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd3b21lbi1wcm9kdWN0cy86cHJvZHVjdElkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RQYWdlQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2R1Y3RzL2JyYW5kLzpicmFuZElkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3dvbWVuLXByb2R1Y3RzL2JyYW5kLzpicmFuZElkJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2R1Y3RzL2JyYW5kL25hbWUvOmJyYW5kTmFtZS86YnJhbmRJZCcsXG4gICAgY29tcG9uZW50OiBDYXJvdXNlbFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxcbiAgICAgICAgICAgLy8gT3JkZXJzTW9kdWxlLFxuICAgICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHtcbiAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb246ICd0b3AnLCAvLyBBZGQgb3B0aW9ucyByaWdodCBoZXJlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgICBOZ3hKc29uTGRNb2R1bGUsXG4gICAgICAgICAgICBCdXR0b25Nb2R1bGUsXG4gICAgICAgICAgICBDaGVja2JveE1vZHVsZSxcbiAgICAgICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICAgICAgUmF0aW5nTW9kdWxlLFxuICAgICAgICAgICAgSW5wdXROdW1iZXJNb2R1bGUsXG4gICAgICAgICAgICBNZXNzYWdlc01vZHVsZSxcbiAgICAgICAgICAgIFVpTW9kdWxlLFxuICAgICAgICAgICAgQ2Fyb3VzZWxNb2R1bGUsXG4gICAgICAgICAgICBNdWx0aVNlbGVjdE1vZHVsZSxcbiAgICAgICAgICAgIFBhZ2luYXRvck1vZHVsZSxcbiAgICAgICAgICAgIEFjY29yZGlvbk1vZHVsZVxuICAgICAgICAgIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFByb2R1Y3RzU2VhcmNoQ29tcG9uZW50LFxuICAgIENhdGVnb3JpZXNCYW5uZXJDb21wb25lbnQsXG4gICAgUHJvZHVjdEl0ZW1Db21wb25lbnQsXG4gICAgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCxcbiAgICBQcm9kdWN0c0xpc3RDb21wb25lbnQsXG4gICAgUHJvZHVjdFBhZ2VDb21wb25lbnQsXG5cbiAgICBQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCxcbiAgICBDYXJvdXNlbFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICAgIFByb2R1Y3RKc29uTGRDb21wb25lbnQsXG5cbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX1cbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFByb2R1Y3RzU2VhcmNoQ29tcG9uZW50LFxuICAgIENhdGVnb3JpZXNCYW5uZXJDb21wb25lbnQsXG4gICAgUHJvZHVjdEl0ZW1Db21wb25lbnQsXG4gICAgRmVhdHVyZWRQcm9kdWN0c0NvbXBvbmVudCxcbiAgICBQcm9kdWN0c0xpc3RDb21wb25lbnQsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNNb2R1bGUge31cbiJdfQ==