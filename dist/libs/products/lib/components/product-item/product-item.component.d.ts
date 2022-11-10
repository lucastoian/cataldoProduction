import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product123 } from '../../models/product123';
import * as i0 from "@angular/core";
export declare class ProductItemComponent implements OnInit {
    private route;
    w: boolean;
    url: any;
    imgBlob: any;
    discount: number;
    finalPrice: number;
    product: Product123;
    appBackImg: any;
    constructor(route: ActivatedRoute);
    ngOnInit(): Promise<void>;
    private _retrieveParam;
    ajaxGetImageData(url: any): Promise<Blob>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductItemComponent, "eshop-frontend-product-item", never, { "product": "product"; "appBackImg": "appBackImg"; }, {}, never, never>;
}
//# sourceMappingURL=product-item.component.d.ts.map