import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product123 } from '../../modules/product123';
import { ProductsService } from '../../modules/products.service';
import * as i0 from "@angular/core";
export declare class GalleryComponent implements OnInit {
    private productsService;
    private route;
    currentId: string;
    selectedImageUrl: string;
    product: Product123;
    image: string;
    images: string[];
    constructor(productsService: ProductsService, route: ActivatedRoute);
    ngOnInit(): void;
    private _retrieveId;
    changeSelectedImage(imageUrl: string): void;
    get hasImages(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<GalleryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GalleryComponent, "ui-gallery", never, { "product": "product"; "image": "image"; "images": "images"; }, {}, never, never>;
}
//# sourceMappingURL=gallery.component.d.ts.map