import { OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';
import * as i0 from "@angular/core";
export declare class CategoriesBannerComponent implements OnInit, OnDestroy {
    private categoriesService;
    categories: Category[];
    endSubs$: Subject<any>;
    constructor(categoriesService: CategoriesService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CategoriesBannerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CategoriesBannerComponent, "eshop-frontend-products-categories-banner", never, {}, {}, never, never>;
}
//# sourceMappingURL=categories-banner.component.d.ts.map