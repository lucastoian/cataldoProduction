import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category';
import { Product123 } from '../../models/product123';
import { W_Product } from '../../models/w-product';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import { W_ProductsService } from '../../services/w-products.service';
import * as i0 from "@angular/core";
export declare class ProductsBrandsComponent implements OnInit {
    private route;
    private productsService;
    private catService;
    private wProdService;
    isChecked: boolean;
    binaryProp: boolean;
    currentId: string;
    brandName: string;
    product: Product123;
    products: Product123[];
    wProds: W_Product[];
    filteredProducts: Product123[];
    categories: Category[];
    url: any;
    _urlSegment: any;
    fromCarousel: boolean;
    constructor(route: ActivatedRoute, productsService: ProductsService, catService: CategoriesService, wProdService: W_ProductsService);
    ngOnInit(): void;
    private _retrieveId;
    private _getProdByBrand;
    private _getWProdByBrand;
    private _getProducts;
    private _getWProducts;
    private _getCategories;
    categoryFilter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductsBrandsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductsBrandsComponent, "eshop-frontend-products-brands", never, { "product": "product"; }, {}, never, never>;
}
//# sourceMappingURL=products-brands.component.d.ts.map