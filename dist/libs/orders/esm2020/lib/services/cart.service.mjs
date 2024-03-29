import { Injectable } from '@angular/core';
import { Cart } from '@eshop-frontend/users';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export const CART_KEY = 'cart';
export class CartService {
    constructor() {
        this.cart$ = new BehaviorSubject(this.getCart());
        this.cart2$ = new BehaviorSubject(this.getCart());
        Cart.getInstance();
        let restoredCart = Cart.generateCartFromLocalStorage();
        if (restoredCart != null) {
            console.log("ho ripristinato il carerllo dal storage");
            this.cart = restoredCart;
        }
        else {
            console.log("ho creato un nuovo carrello");
            this.cart = Cart.getInstance();
        }
        this.productVariants = this.cart.getAllVariants();
        this.productVariants.forEach(p => {
            console.log(p.getJson());
        });
    }
    ngOnInit() {
        let restoredCart = Cart.generateCartFromLocalStorage();
        if (restoredCart != null) {
            console.log("ho ripristinato il carerllo dal storage");
            this.cart = restoredCart;
        }
        else {
            console.log("ho creato un nuovo carrello");
            this.cart = Cart.getInstance();
        }
        this.productVariants = this.cart.getAllVariants();
        this.productVariants.forEach(p => {
            console.log(p.getJson());
        });
    }
    initCartLocalStorage() {
    }
    emptyCart() {
        /**
        const initialCart = {
          items: []
        };
        const initialCartJson = JSON.stringify(initialCart);
        localStorage.setItem(CART_KEY, initialCartJson);
        this.cart$.next(initialCart);
        */
    }
    getCart() {
        return this.cart;
    }
    setNewCart(c) {
        this.cart = c;
    }
    /**
     * Triggerato da "Add to kart"
     * @param cartItem
     * @param updateCartItem
     * @returns
     */
    setCartItem(cartItem, updateCartItem) {
        /**
        const cart = this.getCart();
        console.log("cart = " + JSON.stringify(cart));
        const cartItemExist = cart.items.find((item) => item.productId === cartItem.productId);
        //se l'item esiste allora ne incremento la quantità, senno aggiungo un nuovo item al carrello..credo il problema è che non aggiunge le varie variants tipo prodotti con taglie diverse
        console.log("cartItemExist = " + JSON.stringify(cartItemExist));
        if (cartItemExist) {
          cart.items.map((item) => {
            if (item.productId === cartItem.productId) {
              console.log("item with same productId = " + JSON.stringify(item));
    
              //qua va aggiunta la variants
              if (updateCartItem) {
                item.quantity = cartItem.quantity;
              } else {
                item.quantity = item.quantity + cartItem.quantity;
              }
    
              localStorage.setItem("cart", JSON.stringify(cart));
              return item;
    
            }
          });
    
        } else {
          cart.items.push(cartItem);
        }
    
        const cartJson = JSON.stringify(cart);
        console.log("cartJson = " + cartJson);
        localStorage.setItem(CART_KEY, cartJson);
        this.cart$.next(cart);
        return cart;
      }
    
      deleteCartItem(productId: string) {
        const cart = this.getCart();
        const newCart = cart.items.filter((item) => item.productId !== productId);
    
        cart.items = newCart;
    
        const cartJsonString = JSON.stringify(cart);
        localStorage.setItem(CART_KEY, cartJsonString);
    
        this.cart$.next(cart);
    */
        return null;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFVLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJdkMsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUkvQixNQUFNLE9BQU8sV0FBVztJQVV0QjtRQUpBLFVBQUssR0FBMEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbkUsV0FBTSxHQUEwQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUlsRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFFdkQsSUFBRyxZQUFZLElBQUksSUFBSSxFQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQTtZQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztTQUM1QjthQUFJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1lBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUVOLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBRXZELElBQUcsWUFBWSxJQUFJLElBQUksRUFBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUE7WUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7U0FDNUI7YUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtZQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9CQUFvQjtJQUdwQixDQUFDO0lBRUQsU0FBUztRQUNQOzs7Ozs7O1VBT0U7SUFDSixDQUFDO0lBRUQsT0FBTztRQUVILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsVUFBVSxDQUFDLENBQU07UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxXQUFXLENBQUMsUUFBa0IsRUFBRSxjQUF3QjtRQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNkNGO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDVixDQUFDOztzRUE3SFUsV0FBVztpRUFBWCxXQUFXLFdBQVgsV0FBVyxtQkFGVixNQUFNO3VGQUVQLFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvY2FydCc7XG5cblxuZXhwb3J0IGNvbnN0IENBUlRfS0VZID0gJ2NhcnQnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2UgIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcm9kdWN0VmFyaWFudHM6UHJvZHVjdFZhcmlhbnRbXTtcbiAgY2FydDpDYXJ0O1xuICBwcml2YXRlIGVudmlyb25tZW50O1xuXG4gIGNhcnQkOiBCZWhhdmlvclN1YmplY3Q8Q2FydD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuZ2V0Q2FydCgpKTtcbiAgY2FydDIkOiBCZWhhdmlvclN1YmplY3Q8Q2FydD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuZ2V0Q2FydCgpKTtcblxuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgQ2FydC5nZXRJbnN0YW5jZSgpXG4gICAgbGV0IHJlc3RvcmVkQ2FydCA9IENhcnQuZ2VuZXJhdGVDYXJ0RnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgaWYocmVzdG9yZWRDYXJ0ICE9IG51bGwpe1xuICAgICAgY29uc29sZS5sb2coXCJobyByaXByaXN0aW5hdG8gaWwgY2FyZXJsbG8gZGFsIHN0b3JhZ2VcIilcbiAgICAgICAgdGhpcy5jYXJ0ID0gcmVzdG9yZWRDYXJ0O1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coXCJobyBjcmVhdG8gdW4gbnVvdm8gY2FycmVsbG9cIilcbiAgICAgIHRoaXMuY2FydCA9IENhcnQuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb2R1Y3RWYXJpYW50cyA9IHRoaXMuY2FydC5nZXRBbGxWYXJpYW50cygpO1xuICAgIHRoaXMucHJvZHVjdFZhcmlhbnRzLmZvckVhY2gocCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwLmdldEpzb24oKSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgICBsZXQgcmVzdG9yZWRDYXJ0ID0gQ2FydC5nZW5lcmF0ZUNhcnRGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbiAgICBpZihyZXN0b3JlZENhcnQgIT0gbnVsbCl7XG4gICAgICBjb25zb2xlLmxvZyhcImhvIHJpcHJpc3RpbmF0byBpbCBjYXJlcmxsbyBkYWwgc3RvcmFnZVwiKVxuICAgICAgICB0aGlzLmNhcnQgPSByZXN0b3JlZENhcnQ7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmxvZyhcImhvIGNyZWF0byB1biBudW92byBjYXJyZWxsb1wiKVxuICAgICAgdGhpcy5jYXJ0ID0gQ2FydC5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIHRoaXMucHJvZHVjdFZhcmlhbnRzID0gdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XG4gICAgdGhpcy5wcm9kdWN0VmFyaWFudHMuZm9yRWFjaChwID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHAuZ2V0SnNvbigpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRDYXJ0TG9jYWxTdG9yYWdlKCkge1xuXG4gICAgXG4gIH1cblxuICBlbXB0eUNhcnQoKSB7XG4gICAgLyoqXG4gICAgY29uc3QgaW5pdGlhbENhcnQgPSB7XG4gICAgICBpdGVtczogW11cbiAgICB9O1xuICAgIGNvbnN0IGluaXRpYWxDYXJ0SnNvbiA9IEpTT04uc3RyaW5naWZ5KGluaXRpYWxDYXJ0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJUX0tFWSwgaW5pdGlhbENhcnRKc29uKTtcbiAgICB0aGlzLmNhcnQkLm5leHQoaW5pdGlhbENhcnQpO1xuICAgICovXG4gIH1cblxuICBnZXRDYXJ0KCk6IENhcnQge1xuICAgIFxuICAgICAgcmV0dXJuIHRoaXMuY2FydDtcbiAgfVxuXG4gIHNldE5ld0NhcnQoYzpDYXJ0KTp2b2lke1xuICAgIHRoaXMuY2FydCA9IGM7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmF0byBkYSBcIkFkZCB0byBrYXJ0XCJcbiAgICogQHBhcmFtIGNhcnRJdGVtXG4gICAqIEBwYXJhbSB1cGRhdGVDYXJ0SXRlbVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgc2V0Q2FydEl0ZW0oY2FydEl0ZW06IENhcnRJdGVtLCB1cGRhdGVDYXJ0SXRlbT86IGJvb2xlYW4pOiBDYXJ0IHtcbiAgICAvKipcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KCk7XG4gICAgY29uc29sZS5sb2coXCJjYXJ0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gICAgY29uc3QgY2FydEl0ZW1FeGlzdCA9IGNhcnQuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5wcm9kdWN0SWQgPT09IGNhcnRJdGVtLnByb2R1Y3RJZCk7XG4gICAgLy9zZSBsJ2l0ZW0gZXNpc3RlIGFsbG9yYSBuZSBpbmNyZW1lbnRvIGxhIHF1YW50aXTDoCwgc2Vubm8gYWdnaXVuZ28gdW4gbnVvdm8gaXRlbSBhbCBjYXJyZWxsby4uY3JlZG8gaWwgcHJvYmxlbWEgw6ggY2hlIG5vbiBhZ2dpdW5nZSBsZSB2YXJpZSB2YXJpYW50cyB0aXBvIHByb2RvdHRpIGNvbiB0YWdsaWUgZGl2ZXJzZVxuICAgIGNvbnNvbGUubG9nKFwiY2FydEl0ZW1FeGlzdCA9IFwiICsgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1FeGlzdCkpO1xuICAgIGlmIChjYXJ0SXRlbUV4aXN0KSB7XG4gICAgICBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5wcm9kdWN0SWQgPT09IGNhcnRJdGVtLnByb2R1Y3RJZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbSB3aXRoIHNhbWUgcHJvZHVjdElkID0gXCIgKyBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG5cbiAgICAgICAgICAvL3F1YSB2YSBhZ2dpdW50YSBsYSB2YXJpYW50c1xuICAgICAgICAgIGlmICh1cGRhdGVDYXJ0SXRlbSkge1xuICAgICAgICAgICAgaXRlbS5xdWFudGl0eSA9IGNhcnRJdGVtLnF1YW50aXR5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5ID0gaXRlbS5xdWFudGl0eSArIGNhcnRJdGVtLnF1YW50aXR5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY2FydC5pdGVtcy5wdXNoKGNhcnRJdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJ0SnNvbiA9IEpTT04uc3RyaW5naWZ5KGNhcnQpO1xuICAgIGNvbnNvbGUubG9nKFwiY2FydEpzb24gPSBcIiArIGNhcnRKc29uKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJUX0tFWSwgY2FydEpzb24pO1xuICAgIHRoaXMuY2FydCQubmV4dChjYXJ0KTtcbiAgICByZXR1cm4gY2FydDtcbiAgfVxuXG4gIGRlbGV0ZUNhcnRJdGVtKHByb2R1Y3RJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FydCA9IHRoaXMuZ2V0Q2FydCgpO1xuICAgIGNvbnN0IG5ld0NhcnQgPSBjYXJ0Lml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wcm9kdWN0SWQgIT09IHByb2R1Y3RJZCk7XG5cbiAgICBjYXJ0Lml0ZW1zID0gbmV3Q2FydDtcblxuICAgIGNvbnN0IGNhcnRKc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY2FydCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSVF9LRVksIGNhcnRKc29uU3RyaW5nKTtcblxuICAgIHRoaXMuY2FydCQubmV4dChjYXJ0KTtcbiovXG5yZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19