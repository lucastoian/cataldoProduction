export declare class ProductVariant {
    /**id della variante del prodotto */
    private id;
    private size;
    private inventory;
    private selected;
    maxInventory: number;
    private barcode;
    private mainProductName;
    private mainProductImage;
    private mainProductBrand;
    constructor(id: string, size: any, inventory: number, selected: number, barcode: string);
    setMainProductName(name: string): void;
    setMainProductImage(image: string): void;
    setMainProductBrand(brand: string): void;
    /**
     * Incrementa il numero di prodotti di questa variante selezionati
     */
    addProduct(): void;
    getId(): string;
    getMaxInventory(): number;
    getInventory(): number;
    getSize(): any;
    getJson(): string;
    setId(id: string): void;
    setSize(size: any): void;
    setInventory(inventory: number): void;
    setSelected(select: number): void;
    setSelectedAndUpdateInventory(select: number): void;
    addSelected(select: number): void;
    adminSetSelected(select: number): void;
    getSelected(): number;
    setBarcode(barcode: string): void;
}
//# sourceMappingURL=productVariant.d.ts.map