import { ProductVariant } from "./productVariant";
export declare class ProductLuca {
    private name;
    /**id del prodotto */
    private id;
    private discount;
    private price;
    mainImage: string;
    private images;
    variants: ProductVariant[];
    constructor();
    setImg(img: any): void;
    setVariant(variant: ProductVariant): void;
    /**
     * Aggiunge una variante di un prodotto
     * @param variant la variante da aggiungere
     * @param quantity la quantita da aggiungere
     * Se la variante esiste già, ne incrementa la quantita, altrimenti aggiunge una nuova variante
     */
    addVariant(variant: ProductVariant, quantity: number): void;
    addVariantNoQuantity(variant: ProductVariant): void;
    removeVariant(variant: ProductVariant): void;
    getVariant(variant: ProductVariant): ProductVariant;
    getVariantBySize(size: any): ProductVariant;
    getVariants(): ProductVariant[];
    getId(): String;
    getName(): string;
    getDiscount(): number;
    getJson(): string;
    getPricec(): number;
    setId(id: string): void;
    setDiscount(discount: number): void;
    setPrice(price: number): void;
    setTheMainImage(mainImage: string): void;
    getMainImage(): string;
    addImage(image: string): void;
    setName(name: string): void;
    /**
     * metodo che controlla la presenza o meno di una variante
     * @param productVariant variante da controllare
     * @returns restituisce true se la variant è gia presente nel prodotto, false altrimenti
     */
    containsVariant(productVariant: ProductVariant): boolean;
}
//# sourceMappingURL=productLuca.d.ts.map