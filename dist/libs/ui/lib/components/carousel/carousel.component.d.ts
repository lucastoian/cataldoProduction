import { OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Product123 } from '../../modules/product123';
import * as i0 from "@angular/core";
export declare class CarouselComponent implements OnInit {
    private router;
    images: Product123[];
    imageArray: any[];
    constructor(router: Router);
    loadSomeThing(url: any, id: any): void;
    selectColor(prodIndex: any): void;
    ajaxGetImageData(url: any): Promise<Blob>;
    get hasImages(): boolean;
    ngOnInit(): Promise<void>;
    ngOnChanges(changes: SimpleChanges): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselComponent, "eshop-frontend-carousel", never, { "images": "images"; }, {}, never, never>;
}
//# sourceMappingURL=carousel.component.d.ts.map