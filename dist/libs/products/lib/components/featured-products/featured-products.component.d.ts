import { OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product123 } from '../../models/product123';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
export declare class FeaturedProductsComponent implements OnInit, OnDestroy {
    private prodService;
    brandName: string;
    featuredProducts: Product123[];
    endSubs$: Subject<any>;
    responsiveOptions: any;
    constructor(prodService: ProductsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _getFeaturedProducts;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeaturedProductsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FeaturedProductsComponent, "eshop-frontend-featured-products", never, { "brandName": "brandName"; }, {}, never, never>;
}
//# sourceMappingURL=featured-products.component.d.ts.map