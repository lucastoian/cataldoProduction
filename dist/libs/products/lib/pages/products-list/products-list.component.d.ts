import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paginator } from 'primeng/paginator';
import { Category } from '../../models/category';
import { Product123 } from '../../models/product123';
import { W_Product } from '../../models/w-product';
import { ProductsService } from '../../services/products.service';
import { Title, Meta } from "@angular/platform-browser";
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
export declare class ProductsListComponent implements OnInit {
    private productsService;
    private titleService;
    private metaService;
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
    currentId: string;
    brandName: string;
    product: Product123;
    paginator: Paginator;
    productOnThisPage: Product123[];
    wProds: W_Product[];
    filteredProducts: Product123[];
    currentPage: any;
    fromCarousel: boolean;
    first: number;
    sesso: Sesso[];
    selectedSex: Sesso[];
    categoria: Categoria[];
    selectedCategoria: Categoria[];
    brand: Brand[];
    selectedBrand: Brand[];
    taglia: Taglia[];
    selectedTaglia: Taglia[];
    filtered: Product123[];
    categoryMap: Map<string, string>;
    currentCategory: Categoria;
    constructor(productsService: ProductsService, titleService: Title, metaService: Meta, route: ActivatedRoute);
    ngOnInit(): void;
    changePage(event: any): void;
    search(event: any): void;
    private _getProducts;
    findSameProducts(productsArray: any, productItem: any): number;
    shuffleArray(array: any): void;
    categoryFilter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductsListComponent, "eshop-frontend-products-list", never, { "product": "product"; }, {}, never, never>;
}
export {};
//# sourceMappingURL=products-list.component.d.ts.map