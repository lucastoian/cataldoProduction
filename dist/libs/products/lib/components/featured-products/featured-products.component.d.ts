import { OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product123 } from '../../models/product123';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
export declare class FeaturedProductsComponent implements OnInit, OnDestroy {
    private prodService;
    maxComponentWidth: number;
    featuredSex: string;
    brandName: string;
    brandMap: Map<string, string>;
    featuredProducts: Product123[];
    endSubs$: Subject<any>;
    responsiveOptions: any;
    innerWidth: number;
    maxCards: number;
    displayedProducts: Product123[];
    currentIndex: number;
    constructor(prodService: ProductsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _getFeaturedProducts;
    goToPreviouseImage(): void;
    goToNextImage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeaturedProductsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FeaturedProductsComponent, "eshop-frontend-featured-products", never, { "maxComponentWidth": "maxComponentWidth"; "featuredSex": "featuredSex"; "brandName": "brandName"; }, {}, never, never>;
}
//# sourceMappingURL=featured-products.component.d.ts.map