import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product123 } from '../../models/product123';
import * as i0 from "@angular/core";
export declare class ProductItemComponent implements OnInit {
    private route;
    w: boolean;
    url: any;
    product: Product123;
    constructor(route: ActivatedRoute);
    ngOnInit(): void;
    private _retrieveParam;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductItemComponent, "eshop-frontend-product-item", never, { "product": "product"; }, {}, never, never>;
}
//# sourceMappingURL=product-item.component.d.ts.map