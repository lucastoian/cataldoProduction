import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category';
import { Product123 } from '../../models/product123';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
export declare class ProductsListComponent implements OnInit {
    private productsService;
    private catService;
    private route;
    isChecked: boolean;
    products: Product123[];
    categories: Category[];
    binaryProp: boolean;
    isCategoryPage: boolean;
    url: any;
    _urlSegment: any;
    categoryId: any;
    selectedCategories: any[];
    sex: string;
    constructor(productsService: ProductsService, catService: CategoriesService, route: ActivatedRoute);
    ngOnInit(): void;
    private _getProducts;
    private _getCategories;
    categoryFilter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductsListComponent, "eshop-frontend-products-list", never, {}, {}, never, never>;
}
//# sourceMappingURL=products-list.component.d.ts.map