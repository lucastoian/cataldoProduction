import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product123 } from '../../models/product123';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
export declare class ProductItemComponent implements OnInit {
    private route;
    private prodService;
    w: boolean;
    url: any;
    imgBlob: any;
    discount: number;
    finalPrice: number;
    clickedIndex: number;
    varianti: any[];
    product: Product123;
    appBackImg: any;
    constructor(route: ActivatedRoute, prodService: ProductsService);
    ngOnInit(): Promise<void>;
    private _retrieveParam;
    ajaxGetImageData(url: any): Promise<Blob>;
    changeCardVariant(variant: any, index: any): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductItemComponent, "eshop-frontend-product-item", never, { "product": "product"; "appBackImg": "appBackImg"; }, {}, never, never>;
}
//# sourceMappingURL=product-item.component.d.ts.map