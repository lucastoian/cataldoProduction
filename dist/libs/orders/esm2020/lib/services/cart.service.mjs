import { Injectable } from '@angular/core';
import { Cart } from '@eshop-frontend/users';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export const CART_KEY = 'cart';
export class CartService {
    constructor() {
        this.cart$ = new BehaviorSubject(this.getCart());
        this.cart2$ = new BehaviorSubject(this.getCart());
    }
    ngOnInit() {
        this.cart = Cart.generateCartFromLocalStorage();
        this.productVariants = this.cart.getAllVariants();
        this.productVariants.forEach(p => {
            console.log(p.getJson());
        });
    }
    initCartLocalStorage() {
        console.log("qualcoas, qualcuno ha chjiamato initCartLocalStorage");
        //questa funzione la usa in homepage
        const cart = this.getCart();
        if (!cart) {
            console.log("creo un carrello vuoto");
            const intialCart = {
                items: []
            };
            const initialCartJson = JSON.stringify(intialCart);
            localStorage.setItem(CART_KEY, initialCartJson);
        }
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
        try {
            let cart = Cart.generateCartFromLocalStorage();
            return cart;
        }
        catch (e) {
            let cart = new Cart();
            cart.updateLocalStorage();
            return cart;
        }
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
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFVLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJdkMsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUkvQixNQUFNLE9BQU8sV0FBVztJQUh4QjtRQVNFLFVBQUssR0FBMEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbkUsV0FBTSxHQUEwQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQXdHckU7SUFwR0MsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztRQUNwRSxvQ0FBb0M7UUFDcEMsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEMsTUFBTSxVQUFVLEdBQUc7Z0JBQ2pCLEtBQUssRUFBRSxFQUFFO2FBQ1YsQ0FBQztZQUNGLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQOzs7Ozs7O1VBT0U7SUFDSixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUc7WUFDSCxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUNyRCxPQUFPLElBQUksQ0FBQztTQUNYO1FBQUEsT0FBTSxDQUFDLEVBQUM7WUFDUCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFFSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxXQUFXLENBQUMsUUFBa0IsRUFBRSxjQUF3QjtRQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNkNGO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDVixDQUFDOztzRUE5R1UsV0FBVztpRUFBWCxXQUFXLFdBQVgsV0FBVyxtQkFGVixNQUFNO3VGQUVQLFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBQcm9kdWN0VmFyaWFudCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvY2FydCc7XG5cblxuZXhwb3J0IGNvbnN0IENBUlRfS0VZID0gJ2NhcnQnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2UgIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcm9kdWN0VmFyaWFudHM6UHJvZHVjdFZhcmlhbnRbXTtcbiAgY2FydDpDYXJ0O1xuICBwcml2YXRlIGVudmlyb25tZW50O1xuXG4gIGNhcnQkOiBCZWhhdmlvclN1YmplY3Q8Q2FydD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuZ2V0Q2FydCgpKTtcbiAgY2FydDIkOiBCZWhhdmlvclN1YmplY3Q8Q2FydD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuZ2V0Q2FydCgpKTtcblxuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0ID0gQ2FydC5nZW5lcmF0ZUNhcnRGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgdGhpcy5wcm9kdWN0VmFyaWFudHMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcbiAgICB0aGlzLnByb2R1Y3RWYXJpYW50cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgY29uc29sZS5sb2cocC5nZXRKc29uKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdENhcnRMb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJxdWFsY29hcywgcXVhbGN1bm8gaGEgY2hqaWFtYXRvIGluaXRDYXJ0TG9jYWxTdG9yYWdlXCIpO1xuICAgIC8vcXVlc3RhIGZ1bnppb25lIGxhIHVzYSBpbiBob21lcGFnZVxuICAgIGNvbnN0IGNhcnQ6IENhcnQgPSB0aGlzLmdldENhcnQoKTtcbiAgICBpZiAoIWNhcnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY3JlbyB1biBjYXJyZWxsbyB2dW90b1wiKTtcbiAgICAgIGNvbnN0IGludGlhbENhcnQgPSB7XG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGluaXRpYWxDYXJ0SnNvbiA9IEpTT04uc3RyaW5naWZ5KGludGlhbENhcnQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSVF9LRVksIGluaXRpYWxDYXJ0SnNvbik7XG4gICAgfVxuICB9XG5cbiAgZW1wdHlDYXJ0KCkge1xuICAgIC8qKlxuICAgIGNvbnN0IGluaXRpYWxDYXJ0ID0ge1xuICAgICAgaXRlbXM6IFtdXG4gICAgfTtcbiAgICBjb25zdCBpbml0aWFsQ2FydEpzb24gPSBKU09OLnN0cmluZ2lmeShpbml0aWFsQ2FydCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSVF9LRVksIGluaXRpYWxDYXJ0SnNvbik7XG4gICAgdGhpcy5jYXJ0JC5uZXh0KGluaXRpYWxDYXJ0KTtcbiAgICAqL1xuICB9XG5cbiAgZ2V0Q2FydCgpOiBDYXJ0IHtcbiAgICB0cnl7XG4gICAgbGV0IGNhcnQ6IENhcnQgPSBDYXJ0LmdlbmVyYXRlQ2FydEZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gY2FydDtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBsZXQgY2FydCA9IG5ldyBDYXJ0KCk7XG4gICAgICBjYXJ0LnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgcmV0dXJuIGNhcnQ7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmF0byBkYSBcIkFkZCB0byBrYXJ0XCJcbiAgICogQHBhcmFtIGNhcnRJdGVtXG4gICAqIEBwYXJhbSB1cGRhdGVDYXJ0SXRlbVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgc2V0Q2FydEl0ZW0oY2FydEl0ZW06IENhcnRJdGVtLCB1cGRhdGVDYXJ0SXRlbT86IGJvb2xlYW4pOiBDYXJ0IHtcbiAgICAvKipcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KCk7XG4gICAgY29uc29sZS5sb2coXCJjYXJ0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gICAgY29uc3QgY2FydEl0ZW1FeGlzdCA9IGNhcnQuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5wcm9kdWN0SWQgPT09IGNhcnRJdGVtLnByb2R1Y3RJZCk7XG4gICAgLy9zZSBsJ2l0ZW0gZXNpc3RlIGFsbG9yYSBuZSBpbmNyZW1lbnRvIGxhIHF1YW50aXTDoCwgc2Vubm8gYWdnaXVuZ28gdW4gbnVvdm8gaXRlbSBhbCBjYXJyZWxsby4uY3JlZG8gaWwgcHJvYmxlbWEgw6ggY2hlIG5vbiBhZ2dpdW5nZSBsZSB2YXJpZSB2YXJpYW50cyB0aXBvIHByb2RvdHRpIGNvbiB0YWdsaWUgZGl2ZXJzZVxuICAgIGNvbnNvbGUubG9nKFwiY2FydEl0ZW1FeGlzdCA9IFwiICsgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1FeGlzdCkpO1xuICAgIGlmIChjYXJ0SXRlbUV4aXN0KSB7XG4gICAgICBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5wcm9kdWN0SWQgPT09IGNhcnRJdGVtLnByb2R1Y3RJZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbSB3aXRoIHNhbWUgcHJvZHVjdElkID0gXCIgKyBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG5cbiAgICAgICAgICAvL3F1YSB2YSBhZ2dpdW50YSBsYSB2YXJpYW50c1xuICAgICAgICAgIGlmICh1cGRhdGVDYXJ0SXRlbSkge1xuICAgICAgICAgICAgaXRlbS5xdWFudGl0eSA9IGNhcnRJdGVtLnF1YW50aXR5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5ID0gaXRlbS5xdWFudGl0eSArIGNhcnRJdGVtLnF1YW50aXR5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY2FydC5pdGVtcy5wdXNoKGNhcnRJdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJ0SnNvbiA9IEpTT04uc3RyaW5naWZ5KGNhcnQpO1xuICAgIGNvbnNvbGUubG9nKFwiY2FydEpzb24gPSBcIiArIGNhcnRKc29uKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJUX0tFWSwgY2FydEpzb24pO1xuICAgIHRoaXMuY2FydCQubmV4dChjYXJ0KTtcbiAgICByZXR1cm4gY2FydDtcbiAgfVxuXG4gIGRlbGV0ZUNhcnRJdGVtKHByb2R1Y3RJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FydCA9IHRoaXMuZ2V0Q2FydCgpO1xuICAgIGNvbnN0IG5ld0NhcnQgPSBjYXJ0Lml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wcm9kdWN0SWQgIT09IHByb2R1Y3RJZCk7XG5cbiAgICBjYXJ0Lml0ZW1zID0gbmV3Q2FydDtcblxuICAgIGNvbnN0IGNhcnRKc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY2FydCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSVF9LRVksIGNhcnRKc29uU3RyaW5nKTtcblxuICAgIHRoaXMuY2FydCQubmV4dChjYXJ0KTtcbiovXG5yZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19