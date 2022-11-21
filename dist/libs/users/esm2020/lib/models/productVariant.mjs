export class ProductVariant {
    constructor(id, size, inventory, selected, barcode) {
        this.id = id;
        this.size = size;
        this.inventory = inventory;
        this.maxInventory = inventory;
        this.selected = selected;
        this.barcode = barcode;
    }
    setMainProductName(name) {
        this.mainProductName = name;
    }
    setMainProductImage(image) {
        this.mainProductImage = image;
    }
    setMainProductBrand(brand) {
        this.mainProductBrand = brand;
    }
    /**
     * Incrementa il numero di prodotti di questa variante selezionati
     */
    addProduct() {
        if (this.inventory - (this.selected + 1) <= 0) {
            throw new Error("Not enough items in the inventory");
        }
        this.selected++;
        this.inventory = this.inventory - this.selected;
    }
    getId() {
        return this.id;
    }
    getMaxInventory() {
        return this.maxInventory;
    }
    getInventory() {
        return this.inventory;
    }
    getSize() {
        return this.size;
    }
    getJson() {
        return JSON.stringify(this);
    }
    setId(id) {
        this.id = id;
    }
    setSize(size) {
        this.size = size;
    }
    setInventory(inventory) {
        this.inventory = inventory;
    }
    setSelected(select) {
        if (this.inventory - (this.selected + select) < 0) {
            throw new Error("Not enough items in the inventory");
        }
        this.selected = select;
        this.inventory = this.inventory - this.selected;
    }
    setSelectedAndUpdateInventory(select) {
        console.log("actual inventory = " + this.inventory + " actual selected items = " + this.selected + " new selected items = " + select);
        if (select >= this.selected) {
            //aggiungo items nell inventario
            this.inventory = this.selected;
            this.selected = select;
        }
        else {
            //tolgo items dall'inventario
            this.inventory = this.selected;
            this.selected = select;
        }
    }
    addSelected(select) {
        if ((this.inventory - select) < 0) {
            throw new Error("Not enough items in the inventory");
        }
        this.selected += select;
        this.inventory = this.inventory - select;
    }
    adminSetSelected(select) {
        this.selected = select;
    }
    getSelected() {
        return this.selected;
    }
    setBarcode(barcode) {
        this.barcode = barcode;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFZhcmlhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VzZXJzL3NyYy9saWIvbW9kZWxzL3Byb2R1Y3RWYXJpYW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxjQUFjO0lBY3ZCLFlBQVksRUFBUyxFQUFFLElBQVMsRUFBRSxTQUFpQixFQUFFLFFBQWdCLEVBQUUsT0FBYztRQUNqRixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFHTSxrQkFBa0IsQ0FBQyxJQUFZO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFDTSxtQkFBbUIsQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNNLG1CQUFtQixDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBR0Q7O09BRUc7SUFDSSxVQUFVO1FBQ2IsSUFBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRSxDQUFDLENBQUMsSUFBRSxDQUFDLEVBQUM7WUFDdEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXBELENBQUM7SUFFTSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDTSxlQUFlO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ00sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sT0FBTztRQUVWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEVBQVM7UUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNNLE9BQU8sQ0FBQyxJQUFRO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDTSxZQUFZLENBQUMsU0FBZ0I7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBQyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNNLFdBQVcsQ0FBQyxNQUFhO1FBRTVCLElBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUMsQ0FBQyxFQUFDO1lBQzNDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXBELENBQUM7SUFFTSw2QkFBNkIsQ0FBQyxNQUFhO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRywyQkFBMkIsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRXRJLElBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDdkIsZ0NBQWdDO1lBRWhDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztTQUMxQjthQUFJO1lBQ0QsNkJBQTZCO1lBRTdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztTQUMxQjtJQUVMLENBQUM7SUFHTSxXQUFXLENBQUMsTUFBYTtRQUU1QixJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBSSxNQUFNLENBQUMsR0FBQyxDQUFDLEVBQUM7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUU3QyxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsTUFBYTtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztJQUczQixDQUFDO0lBQ00sV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUl6QixDQUFDO0lBQ00sVUFBVSxDQUFDLE9BQWM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztDQUdKIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2R1Y3RWYXJpYW50e1xuXG4gICAgIC8qKmlkIGRlbGxhIHZhcmlhbnRlIGRlbCBwcm9kb3R0byAqL1xuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHNpemU6IGFueTtcbiAgICBwcml2YXRlIGludmVudG9yeTogbnVtYmVyO1xuICAgIHByaXZhdGUgc2VsZWN0ZWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbWF4SW52ZW50b3J5OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBiYXJjb2RlOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIG1haW5Qcm9kdWN0TmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgbWFpblByb2R1Y3RJbWFnZTogc3RyaW5nO1xuICAgIHByaXZhdGUgbWFpblByb2R1Y3RCcmFuZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6c3RyaW5nLCBzaXplOiBhbnksIGludmVudG9yeTogbnVtYmVyLCBzZWxlY3RlZDogbnVtYmVyLCBiYXJjb2RlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XG4gICAgICAgIHRoaXMubWF4SW52ZW50b3J5ID0gaW52ZW50b3J5O1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuYmFyY29kZSA9IGJhcmNvZGU7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc2V0TWFpblByb2R1Y3ROYW1lKG5hbWU6IHN0cmluZykgOiB2b2lke1xuICAgICAgdGhpcy5tYWluUHJvZHVjdE5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0TWFpblByb2R1Y3RJbWFnZShpbWFnZTogc3RyaW5nKSA6IHZvaWR7XG4gICAgICB0aGlzLm1haW5Qcm9kdWN0SW1hZ2UgPSBpbWFnZTtcbiAgICB9XG4gICAgcHVibGljIHNldE1haW5Qcm9kdWN0QnJhbmQoYnJhbmQ6IHN0cmluZykgOiB2b2lke1xuICAgICAgdGhpcy5tYWluUHJvZHVjdEJyYW5kID0gYnJhbmQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnRhIGlsIG51bWVybyBkaSBwcm9kb3R0aSBkaSBxdWVzdGEgdmFyaWFudGUgc2VsZXppb25hdGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkUHJvZHVjdCgpIDp2b2lkIHtcbiAgICAgICAgaWYodGhpcy5pbnZlbnRvcnkgLSAodGhpcy5zZWxlY3RlZCArMSk8PTApe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGVub3VnaCBpdGVtcyBpbiB0aGUgaW52ZW50b3J5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQrKztcblxuICAgICAgICB0aGlzLmludmVudG9yeSA9IHRoaXMuaW52ZW50b3J5IC0gdGhpcy5zZWxlY3RlZDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJZCgpIDpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgcHVibGljIGdldE1heEludmVudG9yeSgpIDpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhJbnZlbnRvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEludmVudG9yeSgpIDpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRTaXplKCkgOmFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEpzb24oKTpzdHJpbmd7XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJZChpZDpzdHJpbmcpe1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRTaXplKHNpemU6YW55KXtcbiAgICAgICAgdGhpcy5zaXplPXNpemU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRJbnZlbnRvcnkoaW52ZW50b3J5Om51bWJlcil7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5PWludmVudG9yeTtcbiAgICB9XG4gICAgcHVibGljIHNldFNlbGVjdGVkKHNlbGVjdDpudW1iZXIpe1xuXG4gICAgICAgIGlmKHRoaXMuaW52ZW50b3J5IC0gKHRoaXMuc2VsZWN0ZWQgKyBzZWxlY3QpPDApe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGVub3VnaCBpdGVtcyBpbiB0aGUgaW52ZW50b3J5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3Q7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gdGhpcy5pbnZlbnRvcnkgLSB0aGlzLnNlbGVjdGVkO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldFNlbGVjdGVkQW5kVXBkYXRlSW52ZW50b3J5KHNlbGVjdDpudW1iZXIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImFjdHVhbCBpbnZlbnRvcnkgPSBcIiArIHRoaXMuaW52ZW50b3J5ICsgXCIgYWN0dWFsIHNlbGVjdGVkIGl0ZW1zID0gXCIgKyB0aGlzLnNlbGVjdGVkICsgXCIgbmV3IHNlbGVjdGVkIGl0ZW1zID0gXCIgKyBzZWxlY3QpO1xuXG4gICAgICAgIGlmKHNlbGVjdCA+PSB0aGlzLnNlbGVjdGVkKXtcbiAgICAgICAgICAgIC8vYWdnaXVuZ28gaXRlbXMgbmVsbCBpbnZlbnRhcmlvXG5cbiAgICAgICAgICAgIHRoaXMuaW52ZW50b3J5ID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3Q7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy90b2xnbyBpdGVtcyBkYWxsJ2ludmVudGFyaW9cblxuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYWRkU2VsZWN0ZWQoc2VsZWN0Om51bWJlcil7XG5cbiAgICAgICAgaWYoKHRoaXMuaW52ZW50b3J5IC0gIHNlbGVjdCk8MCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgZW5vdWdoIGl0ZW1zIGluIHRoZSBpbnZlbnRvcnlcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZCArPSBzZWxlY3Q7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gdGhpcy5pbnZlbnRvcnkgLSBzZWxlY3Q7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRtaW5TZXRTZWxlY3RlZChzZWxlY3Q6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdDtcblxuXG4gICAgfVxuICAgIHB1YmxpYyBnZXRTZWxlY3RlZCgpOm51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XG5cblxuXG4gICAgfVxuICAgIHB1YmxpYyBzZXRCYXJjb2RlKGJhcmNvZGU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5iYXJjb2RlID0gYmFyY29kZTtcbiAgICB9XG5cblxufVxuIl19