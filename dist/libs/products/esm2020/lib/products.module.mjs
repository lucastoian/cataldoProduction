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
        UiModule,
        CarouselModule,
        MultiSelectModule,
        PaginatorModule,
        AccordionModule], exports: [ProductsSearchComponent,
        CategoriesBannerComponent,
        ProductItemComponent,
        FeaturedProductsComponent,
        ProductsListComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9wcm9kdWN0cy9zcmMvbGliL3Byb2R1Y3RzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2Ryw4REFBOEQ7QUFDOUQsd0RBQXdEO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUV4RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsOERBQThEO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFP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O29CQUN2Qix5QkFBeUI7b0JBQ3pCLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6QixxQkFBcUI7aUJBQ3RCO2FBQ0Y7O3dGQUNZLGNBQWMsbUJBdkJ2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUVwQix1QkFBdUI7UUFDdkIsK0JBQStCO1FBQy9CLHNCQUFzQixhQTNCZCxZQUFZLG1CQUtaLGVBQWU7UUFDZixZQUFZO1FBQ1osY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixlQUFlLGFBbUJ2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcm9kdWN0c1NlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9kdWN0cy1zZWFyY2gvcHJvZHVjdHMtc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXRlZ29yaWVzQmFubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3JpZXMtYmFubmVyL2NhdGVnb3JpZXMtYmFubmVyLmNvbXBvbmVudCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQG5yd2wvbngvZW5mb3JjZS1tb2R1bGUtYm91bmRhcmllc1xuLy9pbXBvcnQgeyBPcmRlcnNNb2R1bGUgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvZHVjdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBGZWF0dXJlZFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZlYXR1cmVkLXByb2R1Y3RzL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQgeyBQcm9kdWN0c0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2R1Y3RzLWxpc3QvcHJvZHVjdHMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtDaGVja2JveE1vZHVsZX0gZnJvbSAncHJpbWVuZy9jaGVja2JveCc7XG5cbmltcG9ydCB7IFByb2R1Y3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91aSc7XG5pbXBvcnQge0Nhcm91c2VsTW9kdWxlfSBmcm9tICdwcmltZW5nL2Nhcm91c2VsJztcbmltcG9ydCB7UmF0aW5nTW9kdWxlfSBmcm9tICdwcmltZW5nL3JhdGluZyc7XG5pbXBvcnQge0lucHV0TnVtYmVyTW9kdWxlfSBmcm9tICdwcmltZW5nL2lucHV0bnVtYmVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbnJ3bC9ueC9lbmZvcmNlLW1vZHVsZS1ib3VuZGFyaWVzXG5pbXBvcnQgeyBVaU1vZHVsZSB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91aSc7XG5pbXBvcnQgeyBQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcHJvZHVjdHMtYnJhbmRzL3Byb2R1Y3RzLWJyYW5kcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvY2Fyb3VzZWwtcHJvZHVjdHMtYnJhbmRzL2Nhcm91c2VsLXByb2R1Y3RzLWJyYW5kcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIYXNoTG9jYXRpb25TdHJhdGVneSwgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge011bHRpU2VsZWN0TW9kdWxlfSBmcm9tICdwcmltZW5nL211bHRpc2VsZWN0JztcbmltcG9ydCB7UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdwcmltZW5nL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2FjY29yZGlvbic7XG5pbXBvcnQgeyBOZ3hKc29uTGRNb2R1bGUgfSBmcm9tICdAbmd4LWxpdGUvanNvbi1sZCc7XG5pbXBvcnQgeyBQcm9kdWN0SnNvbkxkQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LWpzb24tbGQvcHJvZHVjdC1qc29uLWxkLmNvbXBvbmVudCc7XG5cblxuLy8gaW1wb3J0IHsgV29tZW5Qcm9kdWN0c0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3dvbWVuLXByb2R1Y3RzLWxpc3Qvd29tZW4tcHJvZHVjdHMtbGlzdC5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgV29tZW5Qcm9kdWN0c0JyYW5kc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvd29tZW4tcHJvZHVjdHMtYnJhbmRzL3dvbWVuLXByb2R1Y3RzLWJyYW5kcy5jb21wb25lbnQnO1xuXG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAncHJvZHVjdHMnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNMaXN0Q29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3dvbWVuLXByb2R1Y3RzJyxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RzTGlzdENvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdwcm9kdWN0cy9jYXRlZ29yeS86Y2F0ZWdvcnlpZCcsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0xpc3RDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnd29tZW4tcHJvZHVjdHMvY2F0ZWdvcnkvOmNhdGVnb3J5aWQnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdHNMaXN0Q29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2R1Y3RzLzpwcm9kdWN0SWQnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdFBhZ2VDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnd29tZW4tcHJvZHVjdHMvOnByb2R1Y3RJZCcsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0UGFnZUNvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdwcm9kdWN0cy9icmFuZC86YnJhbmRJZCcsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd3b21lbi1wcm9kdWN0cy9icmFuZC86YnJhbmRJZCcsXG4gICAgY29tcG9uZW50OiBQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdwcm9kdWN0cy9icmFuZC9uYW1lLzpicmFuZE5hbWUvOmJyYW5kSWQnLFxuICAgIGNvbXBvbmVudDogQ2Fyb3VzZWxQcm9kdWN0c0JyYW5kc0NvbXBvbmVudCxcbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsXG4gICAgICAgICAgIC8vIE9yZGVyc01vZHVsZSxcbiAgICAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7XG4gICAgICAgICAgICBzY3JvbGxQb3NpdGlvblJlc3RvcmF0aW9uOiAndG9wJywgLy8gQWRkIG9wdGlvbnMgcmlnaHQgaGVyZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgICAgTmd4SnNvbkxkTW9kdWxlLFxuICAgICAgICAgICAgQnV0dG9uTW9kdWxlLFxuICAgICAgICAgICAgQ2hlY2tib3hNb2R1bGUsXG4gICAgICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgICAgIFJhdGluZ01vZHVsZSxcbiAgICAgICAgICAgIElucHV0TnVtYmVyTW9kdWxlLFxuICAgICAgICAgICAgVWlNb2R1bGUsXG4gICAgICAgICAgICBDYXJvdXNlbE1vZHVsZSxcbiAgICAgICAgICAgIE11bHRpU2VsZWN0TW9kdWxlLFxuICAgICAgICAgICAgUGFnaW5hdG9yTW9kdWxlLFxuICAgICAgICAgICAgQWNjb3JkaW9uTW9kdWxlXG4gICAgICAgICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUHJvZHVjdHNTZWFyY2hDb21wb25lbnQsXG4gICAgQ2F0ZWdvcmllc0Jhbm5lckNvbXBvbmVudCxcbiAgICBQcm9kdWN0SXRlbUNvbXBvbmVudCxcbiAgICBGZWF0dXJlZFByb2R1Y3RzQ29tcG9uZW50LFxuICAgIFByb2R1Y3RzTGlzdENvbXBvbmVudCxcbiAgICBQcm9kdWN0UGFnZUNvbXBvbmVudCxcblxuICAgIFByb2R1Y3RzQnJhbmRzQ29tcG9uZW50LFxuICAgIENhcm91c2VsUHJvZHVjdHNCcmFuZHNDb21wb25lbnQsXG4gICAgUHJvZHVjdEpzb25MZENvbXBvbmVudCxcblxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUHJvZHVjdHNTZWFyY2hDb21wb25lbnQsXG4gICAgQ2F0ZWdvcmllc0Jhbm5lckNvbXBvbmVudCxcbiAgICBQcm9kdWN0SXRlbUNvbXBvbmVudCxcbiAgICBGZWF0dXJlZFByb2R1Y3RzQ29tcG9uZW50LFxuICAgIFByb2R1Y3RzTGlzdENvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c01vZHVsZSB7fVxuIl19