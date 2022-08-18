export declare class ProductVariant {
    /**id della variante del prodotto */
    private id;
    private size;
    private inventory;
    private selected;
    maxInventory: number;
    private barcode;
    constructor(id: string, size: number, inventory: number, selected: number, barcode: string);
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
    setSize(size: number): void;
    setInventory(inventory: number): void;
    setSelected(select: number): void;
    setSelectedAndUpdateInventory(select: number): void;
    addSelected(select: number): void;
    adminSetSelected(select: number): void;
    getSelected(): number;
    setBarcode(barcode: string): void;
}
//# sourceMappingURL=productVariant.d.ts.map