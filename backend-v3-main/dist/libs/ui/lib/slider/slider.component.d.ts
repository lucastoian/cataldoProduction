import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../modules/brand';
import { BrandsService } from '../modules/brands.services';
import * as i0 from "@angular/core";
export declare class SliderComponent implements OnInit {
    private brandsService;
    private router;
    brands: Brand[];
    idS: any[];
    brandId: string;
    responsiveOptions: any;
    constructor(brandsService: BrandsService, router: Router);
    ngOnInit(): void;
    navigateToBrand(brandId: any, brandName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderComponent, "ui-slider", never, {}, {}, never, never>;
}
//# sourceMappingURL=slider.component.d.ts.map