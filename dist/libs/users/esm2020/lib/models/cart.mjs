import { Subject } from 'rxjs';
import { ProductLuca } from './ProductLuca';
import { Injectable } from '@angular/core';
import { ProductVariant } from './productVariant';
import * as i0 from "@angular/core";
export class Cart {
    constructor() {
        console.log("someone construcred me!");
        this.products = [];
        this.items = new Subject();
        setInterval(() => {
            // Make your auth call and export this from Service
            //console.log("updating total number = " + this.getTotalNumberOfItems());
            this.items.next(this.getTotalNumberOfItems());
        }, 7000);
    }
    addProductLuca(ProductLuca) {
        //qui check se il prodotto non c'è gia
        this.products.push(ProductLuca);
        localStorage.setItem("cartByLuca", JSON.stringify(this.products));
    }
    getproducts() {
        return this.products;
    }
    getproductsSize() {
        return this.products.length;
    }
    getProduct(index) {
        //console.log("get product = " + this.products[index].getJson());
        return this.products[index];
    }
    getJson() {
        return JSON.stringify(this.products);
    }
    getProductById(id) {
        let product = null;
        this.products.forEach(element => {
            if (element.getId() === id) {
                product = element;
            }
        });
        return product;
    }
    getVariantById(id) {
        let productVariant = null;
        this.products.forEach(element => {
            for (let i = 0; i < element.getVariants().length; i++) {
                let variant = element.getVariants()[i];
                if (variant.getId() === id) {
                    productVariant = variant;
                }
            }
        });
        return productVariant;
    }
    getProductByVariantId(id) {
        let product = null;
        this.products.forEach(element => {
            for (let i = 0; i < element.getVariants().length; i++) {
                let variant = element.getVariants()[i];
                if (variant.getId() === id) {
                    product = element;
                }
            }
        });
        return product;
    }
    updateLocalStorage() {
        localStorage.setItem("cartByLuca", JSON.stringify(this.products));
    }
    static generateCartFromLocalStorage() {
        let cart = new Cart();
        let cartJson = JSON.parse(localStorage.getItem("cartByLuca"));
        if (cartJson == null)
            return new Cart();
        for (let i = 0; i < cartJson.products.length; i++) {
            let productJson = cartJson.products[i];
            //console.log(productJson);
            let p = new ProductLuca();
            p.setId(productJson.id);
            p.setDiscount(productJson.discount);
            p.setPrice(productJson.price);
            //console.log("main img inside json = " + productJson.mainImage);
            p.mainImage = productJson.mainImage;
            p.setName(productJson.name);
            let imagesJson = productJson.images;
            for (let y = 0; y < imagesJson.length; y++) {
                p.addImage(imagesJson[y]);
            }
            let variantsJson = productJson.variants;
            for (let y = 0; y < variantsJson.length; y++) {
                let variantJson = variantsJson[y];
                let pVariant = new ProductVariant(variantJson.id, variantJson.size, variantJson.inventory, variantJson.selected, variantJson.barcode);
                //console.log("pVariant = " + pVariant.getJson());
                p.variants.push(pVariant);
            }
            cart.addProductLuca(p);
        }
        return cart;
    }
    containsProduct(product) {
        let contains = false;
        //console.log("product = " + this.getJson());
        this.products.forEach(element => {
            if (element.getId() === product.getId()) {
                contains = true;
                return;
            }
        });
        return contains;
    }
    getProductIndex(product) {
        if (this.containsProduct(product)) {
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].getId() == product.getId()) {
                    return i;
                }
            }
        }
        else {
            return null;
        }
    }
    getAllVariants() {
        let productsVariants = [];
        this.products.forEach(p => {
            p.getVariants().forEach(variant => {
                productsVariants.push(variant);
            });
        });
        return productsVariants;
    }
    getItems() {
        return this.items;
    }
    getTotalNumberOfItems() {
        let total = 0;
        this.products.forEach(p => {
            p.getVariants().forEach(variant => {
                total += variant.getSelected();
            });
        });
        return total;
    }
    getTotalPrice() {
        let total = 0;
        this.products.forEach(p => {
            p.getVariants().forEach(variant => {
                total += variant.getSelected() * p.getPricec();
            });
        });
        return total;
    }
    deleteProductVariant(product) {
        let p = this.getProductByVariantId(product.getId());
        p.removeVariant(product);
    }
    getTotalNumberOfVariantsOfASingleProductByIdOfAVariant(id) {
        let productSize = null;
        this.products.forEach(element => {
            for (let i = 0; i < element.getVariants().length; i++) {
                let variant = element.getVariants()[i];
                if (variant.getId() === id) {
                    productSize = element.getVariants().length;
                }
            }
        });
        return productSize;
    }
}
Cart.ɵfac = function Cart_Factory(t) { return new (t || Cart)(); };
Cart.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: Cart, factory: Cart.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Cart, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9tb2RlbHMvY2FydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBTWxELE1BQU0sT0FBTyxJQUFJO0lBS2I7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzNCLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDYixtREFBbUQ7WUFDbkQseUVBQXlFO1lBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUVNLGNBQWMsQ0FBQyxXQUF3QjtRQUMxQyxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUV0RSxDQUFDO0lBRU0sV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU0sZUFBZTtRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ2hD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LElBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBQztvQkFDdEIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQzlDO2FBQ0o7UUFFTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQVEsV0FBVyxDQUFDO0lBQ3hCLENBQUM7O3dEQXZOUSxJQUFJOzBEQUFKLElBQUksV0FBSixJQUFJLG1CQUZELE1BQU07dUZBRVQsSUFBSTtjQUhoQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFByb2R1Y3RMdWNhIH0gZnJvbSAnLi9Qcm9kdWN0THVjYSdcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudCB9IGZyb20gJy4vcHJvZHVjdFZhcmlhbnQnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxuICB9KVxyXG5leHBvcnQgY2xhc3MgQ2FydHtcclxuXHJcbiAgICBwcml2YXRlIHByb2R1Y3RzOiBQcm9kdWN0THVjYVtdO1xyXG4gICAgcHJpdmF0ZSBpdGVtczogU3ViamVjdDxudW1iZXI+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzb21lb25lIGNvbnN0cnVjcmVkIG1lIVwiKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBNYWtlIHlvdXIgYXV0aCBjYWxsIGFuZCBleHBvcnQgdGhpcyBmcm9tIFNlcnZpY2VcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInVwZGF0aW5nIHRvdGFsIG51bWJlciA9IFwiICsgdGhpcy5nZXRUb3RhbE51bWJlck9mSXRlbXMoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMubmV4dCh0aGlzLmdldFRvdGFsTnVtYmVyT2ZJdGVtcygpKTtcclxuICAgICAgICAgIH0sIDcwMDApXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFByb2R1Y3RMdWNhKFByb2R1Y3RMdWNhOiBQcm9kdWN0THVjYSkgOnZvaWQge1xyXG4gICAgICAgIC8vcXVpIGNoZWNrIHNlIGlsIHByb2RvdHRvIG5vbiBjJ8OoIGdpYVxyXG4gICAgICAgIHRoaXMucHJvZHVjdHMucHVzaChQcm9kdWN0THVjYSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0QnlMdWNhXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHMpKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRwcm9kdWN0cygpIDogUHJvZHVjdEx1Y2FbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldHByb2R1Y3RzU2l6ZSgpIDogbnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRQcm9kdWN0KGluZGV4Om51bWJlcikgOiBQcm9kdWN0THVjYSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXQgcHJvZHVjdCA9IFwiICsgdGhpcy5wcm9kdWN0c1tpbmRleF0uZ2V0SnNvbigpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEpzb24oKSA6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQcm9kdWN0QnlJZChpZDpzdHJpbmcpIDogUHJvZHVjdEx1Y2Ege1xyXG4gICAgICAgIGxldCBwcm9kdWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuZ2V0SWQoKSA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFyaWFudEJ5SWQoaWQ6c3RyaW5nKSA6IFByb2R1Y3RWYXJpYW50IHtcclxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8ZWxlbWVudC5nZXRWYXJpYW50cygpLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCB2YXJpYW50ID0gZWxlbWVudC5nZXRWYXJpYW50cygpW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYodmFyaWFudC5nZXRJZCgpID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSB2YXJpYW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldFByb2R1Y3RCeVZhcmlhbnRJZChpZDpzdHJpbmcpIDogUHJvZHVjdEx1Y2Ege1xyXG4gICAgICAgIGxldCBwcm9kdWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPGVsZW1lbnQuZ2V0VmFyaWFudHMoKS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFudCA9IGVsZW1lbnQuZ2V0VmFyaWFudHMoKVtpXTtcclxuICAgICAgICAgICAgICAgIGlmKHZhcmlhbnQuZ2V0SWQoKSA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVMb2NhbFN0b3JhZ2UoKTp2b2lke1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydEJ5THVjYVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3RzKSk7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICBzdGF0aWMgZ2VuZXJhdGVDYXJ0RnJvbUxvY2FsU3RvcmFnZSgpOkNhcnR7XHJcblxyXG4gICAgICAgIGxldCBjYXJ0ID0gbmV3IENhcnQoKTtcclxuICAgICAgICBsZXQgY2FydEpzb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydEJ5THVjYVwiKSk7XHJcbiAgICAgICAgaWYoY2FydEpzb24gPT0gbnVsbCkgcmV0dXJuIG5ldyBDYXJ0KCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxjYXJ0SnNvbi5wcm9kdWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0SnNvbiA9Y2FydEpzb24ucHJvZHVjdHNbaV07XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocHJvZHVjdEpzb24pO1xyXG4gICAgICAgICAgICBsZXQgcCA9IG5ldyBQcm9kdWN0THVjYSgpO1xyXG4gICAgICAgICAgICBwLnNldElkKHByb2R1Y3RKc29uLmlkKTtcclxuICAgICAgICAgICAgcC5zZXREaXNjb3VudChwcm9kdWN0SnNvbi5kaXNjb3VudCk7XHJcbiAgICAgICAgICAgIHAuc2V0UHJpY2UocHJvZHVjdEpzb24ucHJpY2UpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibWFpbiBpbWcgaW5zaWRlIGpzb24gPSBcIiArIHByb2R1Y3RKc29uLm1haW5JbWFnZSk7XHJcbiAgICAgICAgICAgIHAubWFpbkltYWdlID0gcHJvZHVjdEpzb24ubWFpbkltYWdlO1xyXG4gICAgICAgICAgICBwLnNldE5hbWUocHJvZHVjdEpzb24ubmFtZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1hZ2VzSnNvbiA9IHByb2R1Y3RKc29uLmltYWdlcztcclxuICAgICAgICAgICAgZm9yKGxldCB5ID0gMDsgeTxpbWFnZXNKc29uLmxlbmd0aDsgeSsrKXtcclxuICAgICAgICAgICAgICAgIHAuYWRkSW1hZ2UoaW1hZ2VzSnNvblt5XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB2YXJpYW50c0pzb24gPSBwcm9kdWN0SnNvbi52YXJpYW50cztcclxuICAgICAgICAgICAgZm9yKGxldCB5ID0gMDsgeTx2YXJpYW50c0pzb24ubGVuZ3RoOyB5Kyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhbnRKc29uID0gdmFyaWFudHNKc29uW3ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBWYXJpYW50ID0gbmV3IFByb2R1Y3RWYXJpYW50KHZhcmlhbnRKc29uLmlkLCB2YXJpYW50SnNvbi5zaXplLCB2YXJpYW50SnNvbi5pbnZlbnRvcnksIHZhcmlhbnRKc29uLnNlbGVjdGVkLCB2YXJpYW50SnNvbi5iYXJjb2RlKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJwVmFyaWFudCA9IFwiICsgcFZhcmlhbnQuZ2V0SnNvbigpKTtcclxuICAgICAgICAgICAgICAgIHAudmFyaWFudHMucHVzaChwVmFyaWFudCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FydC5hZGRQcm9kdWN0THVjYShwKTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY2FydDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnRhaW5zUHJvZHVjdChwcm9kdWN0OiBQcm9kdWN0THVjYSk6IGJvb2xlYW57XHJcbiAgICAgICAgbGV0IGNvbnRhaW5zID0gZmFsc2U7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInByb2R1Y3QgPSBcIiArIHRoaXMuZ2V0SnNvbigpKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuZ2V0SWQoKSA9PT0gcHJvZHVjdC5nZXRJZCgpKXtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9KTtcclxuIFxyXG4gICAgICAgIHJldHVybiBjb250YWlucztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UHJvZHVjdEluZGV4KHByb2R1Y3Q6IFByb2R1Y3RMdWNhKTogbnVtYmVye1xyXG4gICAgICAgaWYodGhpcy5jb250YWluc1Byb2R1Y3QocHJvZHVjdCkpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMucHJvZHVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9kdWN0c1tpXS5nZXRJZCgpID09IHByb2R1Y3QuZ2V0SWQoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGxWYXJpYW50cygpOiBQcm9kdWN0VmFyaWFudFtde1xyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdHNWYXJpYW50czpQcm9kdWN0VmFyaWFudFtdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaChwID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAuZ2V0VmFyaWFudHMoKS5mb3JFYWNoKHZhcmlhbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHNWYXJpYW50cy5wdXNoKHZhcmlhbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9kdWN0c1ZhcmlhbnRzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbXMoKTogT2JzZXJ2YWJsZTxudW1iZXI+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3RhbE51bWJlck9mSXRlbXMoKSA6IG51bWJlcntcclxuICAgICAgICBsZXQgdG90YWw6bnVtYmVyID0gMDtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwLmdldFZhcmlhbnRzKCkuZm9yRWFjaCh2YXJpYW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRvdGFsICs9IHZhcmlhbnQuZ2V0U2VsZWN0ZWQoKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldFRvdGFsUHJpY2UoKSA6IG51bWJlcntcclxuICAgICAgICBsZXQgdG90YWw6bnVtYmVyID0gMDtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwLmdldFZhcmlhbnRzKCkuZm9yRWFjaCh2YXJpYW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRvdGFsICs9IHZhcmlhbnQuZ2V0U2VsZWN0ZWQoKSAqIHAuZ2V0UHJpY2VjKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlUHJvZHVjdFZhcmlhbnQocHJvZHVjdDogUHJvZHVjdFZhcmlhbnQpIDogdm9pZHtcclxuICAgICAgICBsZXQgcCA6IFByb2R1Y3RMdWNhID0gdGhpcy5nZXRQcm9kdWN0QnlWYXJpYW50SWQocHJvZHVjdC5nZXRJZCgpKTtcclxuICAgICAgICBwLnJlbW92ZVZhcmlhbnQocHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRvdGFsTnVtYmVyT2ZWYXJpYW50c09mQVNpbmdsZVByb2R1Y3RCeUlkT2ZBVmFyaWFudChpZDpzdHJpbmcpIDogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcHJvZHVjdFNpemUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8ZWxlbWVudC5nZXRWYXJpYW50cygpLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCB2YXJpYW50ID0gZWxlbWVudC5nZXRWYXJpYW50cygpW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYodmFyaWFudC5nZXRJZCgpID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNpemUgPSBlbGVtZW50LmdldFZhcmlhbnRzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAgcHJvZHVjdFNpemU7XHJcbiAgICB9XHJcbn0iXX0=