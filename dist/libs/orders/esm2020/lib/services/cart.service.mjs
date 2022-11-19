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
            console.log("ho generato il carrello dal local storage");
            return cart;
        }
        catch (e) {
            console.log("ho creato un nuovo carrello");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFVLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJdkMsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUkvQixNQUFNLE9BQU8sV0FBVztJQUh4QjtRQVNFLFVBQUssR0FBMEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbkUsV0FBTSxHQUEwQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQTBHckU7SUF0R0MsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztRQUNwRSxvQ0FBb0M7UUFDcEMsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEMsTUFBTSxVQUFVLEdBQUc7Z0JBQ2pCLEtBQUssRUFBRSxFQUFFO2FBQ1YsQ0FBQztZQUNGLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQOzs7Ozs7O1VBT0U7SUFDSixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUc7WUFDSCxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7WUFDekQsT0FBTyxJQUFJLENBQUM7U0FDWDtRQUFBLE9BQU0sQ0FBQyxFQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzNDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUVILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFdBQVcsQ0FBQyxRQUFrQixFQUFFLGNBQXdCO1FBQ3REOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUE2Q0Y7UUFDRixPQUFPLElBQUksQ0FBQztJQUNWLENBQUM7O3NFQWhIVSxXQUFXO2lFQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZWLE1BQU07dUZBRVAsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgUHJvZHVjdFZhcmlhbnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJy4uL21vZGVscy9jYXJ0JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ0FSVF9LRVkgPSAnY2FydCc7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcnRTZXJ2aWNlICBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByb2R1Y3RWYXJpYW50czpQcm9kdWN0VmFyaWFudFtdO1xyXG4gIGNhcnQ6Q2FydDtcclxuICBwcml2YXRlIGVudmlyb25tZW50O1xyXG5cclxuICBjYXJ0JDogQmVoYXZpb3JTdWJqZWN0PENhcnQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmdldENhcnQoKSk7XHJcbiAgY2FydDIkOiBCZWhhdmlvclN1YmplY3Q8Q2FydD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuZ2V0Q2FydCgpKTtcclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FydCA9IENhcnQuZ2VuZXJhdGVDYXJ0RnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgdGhpcy5wcm9kdWN0VmFyaWFudHMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcclxuICAgIHRoaXMucHJvZHVjdFZhcmlhbnRzLmZvckVhY2gocCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHAuZ2V0SnNvbigpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdENhcnRMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInF1YWxjb2FzLCBxdWFsY3VubyBoYSBjaGppYW1hdG8gaW5pdENhcnRMb2NhbFN0b3JhZ2VcIik7XHJcbiAgICAvL3F1ZXN0YSBmdW56aW9uZSBsYSB1c2EgaW4gaG9tZXBhZ2VcclxuICAgIGNvbnN0IGNhcnQ6IENhcnQgPSB0aGlzLmdldENhcnQoKTtcclxuICAgIGlmICghY2FydCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNyZW8gdW4gY2FycmVsbG8gdnVvdG9cIik7XHJcbiAgICAgIGNvbnN0IGludGlhbENhcnQgPSB7XHJcbiAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGluaXRpYWxDYXJ0SnNvbiA9IEpTT04uc3RyaW5naWZ5KGludGlhbENhcnQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJUX0tFWSwgaW5pdGlhbENhcnRKc29uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtcHR5Q2FydCgpIHtcclxuICAgIC8qKlxyXG4gICAgY29uc3QgaW5pdGlhbENhcnQgPSB7XHJcbiAgICAgIGl0ZW1zOiBbXVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGluaXRpYWxDYXJ0SnNvbiA9IEpTT04uc3RyaW5naWZ5KGluaXRpYWxDYXJ0KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBUlRfS0VZLCBpbml0aWFsQ2FydEpzb24pO1xyXG4gICAgdGhpcy5jYXJ0JC5uZXh0KGluaXRpYWxDYXJ0KTtcclxuICAgICovXHJcbiAgfVxyXG5cclxuICBnZXRDYXJ0KCk6IENhcnQge1xyXG4gICAgdHJ5e1xyXG4gICAgbGV0IGNhcnQ6IENhcnQgPSBDYXJ0LmdlbmVyYXRlQ2FydEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiaG8gZ2VuZXJhdG8gaWwgY2FycmVsbG8gZGFsIGxvY2FsIHN0b3JhZ2VcIik7XHJcbiAgICByZXR1cm4gY2FydDtcclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgY29uc29sZS5sb2coXCJobyBjcmVhdG8gdW4gbnVvdm8gY2FycmVsbG9cIik7XHJcbiAgICAgIGxldCBjYXJ0ID0gbmV3IENhcnQoKTtcclxuICAgICAgY2FydC51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgcmV0dXJuIGNhcnQ7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlcmF0byBkYSBcIkFkZCB0byBrYXJ0XCJcclxuICAgKiBAcGFyYW0gY2FydEl0ZW1cclxuICAgKiBAcGFyYW0gdXBkYXRlQ2FydEl0ZW1cclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG4gIHNldENhcnRJdGVtKGNhcnRJdGVtOiBDYXJ0SXRlbSwgdXBkYXRlQ2FydEl0ZW0/OiBib29sZWFuKTogQ2FydCB7XHJcbiAgICAvKipcclxuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmdldENhcnQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FydCA9IFwiICsgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG4gICAgY29uc3QgY2FydEl0ZW1FeGlzdCA9IGNhcnQuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5wcm9kdWN0SWQgPT09IGNhcnRJdGVtLnByb2R1Y3RJZCk7XHJcbiAgICAvL3NlIGwnaXRlbSBlc2lzdGUgYWxsb3JhIG5lIGluY3JlbWVudG8gbGEgcXVhbnRpdMOgLCBzZW5ubyBhZ2dpdW5nbyB1biBudW92byBpdGVtIGFsIGNhcnJlbGxvLi5jcmVkbyBpbCBwcm9ibGVtYSDDqCBjaGUgbm9uIGFnZ2l1bmdlIGxlIHZhcmllIHZhcmlhbnRzIHRpcG8gcHJvZG90dGkgY29uIHRhZ2xpZSBkaXZlcnNlXHJcbiAgICBjb25zb2xlLmxvZyhcImNhcnRJdGVtRXhpc3QgPSBcIiArIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtRXhpc3QpKTtcclxuICAgIGlmIChjYXJ0SXRlbUV4aXN0KSB7XHJcbiAgICAgIGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucHJvZHVjdElkID09PSBjYXJ0SXRlbS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbSB3aXRoIHNhbWUgcHJvZHVjdElkID0gXCIgKyBKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcblxyXG4gICAgICAgICAgLy9xdWEgdmEgYWdnaXVudGEgbGEgdmFyaWFudHNcclxuICAgICAgICAgIGlmICh1cGRhdGVDYXJ0SXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5ID0gY2FydEl0ZW0ucXVhbnRpdHk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLnF1YW50aXR5ID0gaXRlbS5xdWFudGl0eSArIGNhcnRJdGVtLnF1YW50aXR5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYXJ0Lml0ZW1zLnB1c2goY2FydEl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhcnRKc29uID0gSlNPTi5zdHJpbmdpZnkoY2FydCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhcnRKc29uID0gXCIgKyBjYXJ0SnNvbik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJUX0tFWSwgY2FydEpzb24pO1xyXG4gICAgdGhpcy5jYXJ0JC5uZXh0KGNhcnQpO1xyXG4gICAgcmV0dXJuIGNhcnQ7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDYXJ0SXRlbShwcm9kdWN0SWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgY2FydCA9IHRoaXMuZ2V0Q2FydCgpO1xyXG4gICAgY29uc3QgbmV3Q2FydCA9IGNhcnQuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnByb2R1Y3RJZCAhPT0gcHJvZHVjdElkKTtcclxuXHJcbiAgICBjYXJ0Lml0ZW1zID0gbmV3Q2FydDtcclxuXHJcbiAgICBjb25zdCBjYXJ0SnNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNhcnQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSVF9LRVksIGNhcnRKc29uU3RyaW5nKTtcclxuXHJcbiAgICB0aGlzLmNhcnQkLm5leHQoY2FydCk7XHJcbiovXHJcbnJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=