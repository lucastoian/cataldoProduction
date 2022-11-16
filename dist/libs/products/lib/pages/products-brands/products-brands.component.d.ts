import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paginator } from 'primeng/paginator';
import { Category } from '../../models/category';
import { Product123 } from '../../models/product123';
import { W_Product } from '../../models/w-product';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import { W_ProductsService } from '../../services/w-products.service';
import * as i0 from "@angular/core";
interface Sesso {
    name: string;
    code: string;
}
interface Categoria {
    name: string;
    code: string;
}
interface Brand {
    name: string;
    code: string;
}
interface Taglia {
    name: string;
    code: string;
}
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
    paginator: Paginator;
    products: Product123[];
    productOnThisPage: Product123[];
    wProds: W_Product[];
    filteredProducts: Product123[];
    categories: Category[];
    url: any;
    currentPage: any;
    _urlSegment: any;
    fromCarousel: boolean;
    first: number;
    sex: string;
    sesso: Sesso[];
    selectedSex: Sesso[];
    categoria: Categoria[];
    selectedCategoria: Categoria[];
    brand: Brand[];
    selectedBrand: Brand[];
    taglia: Taglia[];
    selectedTaglia: Taglia[];
    constructor(route: ActivatedRoute, productsService: ProductsService, catService: CategoriesService, wProdService: W_ProductsService);
    ngOnInit(): void;
    changePage(event: any): void;
    search(event: any): void;
    private _retrieveId;
    private _getProdByBrand;
    categoryFilter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductsBrandsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductsBrandsComponent, "eshop-frontend-products-brands", never, { "product": "product"; }, {}, never, never>;
}
export {};
//# sourceMappingURL=products-brands.component.d.ts.map