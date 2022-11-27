import { MessageService } from 'primeng/api';
import { Cart } from '@eshop-frontend/users';
import { ProductLuca } from '@eshop-frontend/users';
import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '@eshop-frontend/orders';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { CartIconComponent } from '@eshop-frontend/orders';
import { Variant } from '../../models/variant';
import { Product123 } from '../../models/product123';
import { W_Product } from '../../models/w-product';
import { ProductsService } from '../../services/products.service';
import { W_ProductsService } from '../../services/w-products.service';
import { VariantsService } from '../../services/variants.service';
import * as i0 from "@angular/core";
export declare class ProductPageComponent implements OnInit, OnDestroy {
    private prodService;
    private WprodService;
    private route;
    private router;
    private cartService;
    private variantService;
    private messageService;
    private icon;
    private location;
    private cart;
    clickedIndex: number;
    variant: Variant;
    variants: Variant[];
    filteredVariants: Variant[];
    nonEmptyVariants: Variant[];
    product: Product123;
    klarnaPrice: number;
    W_product: W_Product;
    prodName: string;
    prodId: string;
    W_prodname: string;
    menProd: boolean;
    wProd: boolean;
    products: Product123[];
    len: number;
    colors: Product123[];
    simalProducts: string[];
    multipleColors: boolean;
    endSubs$: Subject<any>;
    quantity: number;
    currentId: any;
    displaySuccessBanner: boolean;
    selected: boolean;
    button: boolean;
    selectedSize: Variant[];
    availability: any[];
    available: boolean;
    minInv: number;
    maxInv: number;
    url: any;
    discount: number;
    p: ProductLuca;
    brandLogo: string;
    brandMap: Map<string, string>;
    brandLogoBlob: any;
    constructor(prodService: ProductsService, WprodService: W_ProductsService, route: ActivatedRoute, router: Router, cartService: CartService, variantService: VariantsService, messageService: MessageService, icon: CartIconComponent, location: Location, cart: Cart);
    ngOnInit(): Promise<void>;
    ngOnDestroy(): void;
    ajaxGetImageData(url: any): Promise<Blob>;
    /**
     * Se il prodotto esiste già, aggiungo una variants, senno aggiungo un nuovo prodotto con la sua variants
     * @returns
     */
    addProductToCart(): void;
    private _getProduct;
    /**
     *
     * @returns restituisce il prodotto della pagina
     */
    private _getProduct2;
    private _getWproduct;
    _getSizes(): void;
    /**questa funzione sembra solo gestire il max input */
    selectSize(event: any, index: any): void;
    getProdByname(): void;
    getProdByProdId(): void;
    getWProdByname(): void;
    selectColor(prodId: any): void;
    selectWColor(prodId: any): void;
    updateSelectedSize(index: any): void;
    checkQuantity(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductPageComponent, "eshop-frontend-product-page", never, {}, {}, never, never>;
}
//# sourceMappingURL=product-page.component.d.ts.map