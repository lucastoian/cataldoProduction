import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category';
import { Product123 } from '../../models/product123';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import * as i0 from "@angular/core";
export declare class CarouselProductsBrandsComponent implements OnInit {
    private route;
    private productsService;
    private catService;
    isChecked: boolean;
    binaryProp: boolean;
    currentId: string;
    brandName: string;
    product: Product123;
    products: Product123[];
    wProds: Product123[];
    brandAllProds: Product123[];
    m_filteredProducts: Product123[];
    w_filteredProducts: Product123[];
    newProducts: Product123[];
    firstFilter: Product123[];
    secondFilter: Product123[];
    categories: Category[];
    selectedAny: boolean;
    selected_1: boolean;
    selected_2: boolean;
    m: boolean;
    w: boolean;
    constructor(route: ActivatedRoute, productsService: ProductsService, catService: CategoriesService);
    ngOnInit(): void;
    private _retrieveId;
    private _getCategories;
    private _getAllProdsByBrand;
    private _getMenProdsByBrand;
    private _getWomenProdsByBrand;
    selectMenFromBrandAllProds(event: any): void;
    selectWomenFromBrandAllProds(event: any): void;
    categoryFilter(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselProductsBrandsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselProductsBrandsComponent, "eshop-frontend-carousel-products-brands", never, { "product": "product"; }, {}, never, never, false, never>;
}
//# sourceMappingURL=carousel-products-brands.component.d.ts.map