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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFVLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJdkMsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUkvQixNQUFNLE9BQU8sV0FBVztJQUh4QjtRQVNFLFVBQUssR0FBMEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbkUsV0FBTSxHQUEwQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQXdHckU7SUFwR0MsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztRQUNwRSxvQ0FBb0M7UUFDcEMsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEMsTUFBTSxVQUFVLEdBQUc7Z0JBQ2pCLEtBQUssRUFBRSxFQUFFO2FBQ1YsQ0FBQztZQUNGLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQOzs7Ozs7O1VBT0U7SUFDSixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUc7WUFDSCxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUNyRCxPQUFPLElBQUksQ0FBQztTQUNYO1FBQUEsT0FBTSxDQUFDLEVBQUM7WUFDUCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFFSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxXQUFXLENBQUMsUUFBa0IsRUFBRSxjQUF3QjtRQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNkNGO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDVixDQUFDOztzRUE5R1UsV0FBVztpRUFBWCxXQUFXLFdBQVgsV0FBVyxtQkFGVixNQUFNO3VGQUVQLFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFByb2R1Y3RWYXJpYW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvY2FydCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENBUlRfS0VZID0gJ2NhcnQnO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSAgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcm9kdWN0VmFyaWFudHM6UHJvZHVjdFZhcmlhbnRbXTtcclxuICBjYXJ0OkNhcnQ7XHJcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcclxuXHJcbiAgY2FydCQ6IEJlaGF2aW9yU3ViamVjdDxDYXJ0PiA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5nZXRDYXJ0KCkpO1xyXG4gIGNhcnQyJDogQmVoYXZpb3JTdWJqZWN0PENhcnQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmdldENhcnQoKSk7XHJcblxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhcnQgPSBDYXJ0LmdlbmVyYXRlQ2FydEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIHRoaXMucHJvZHVjdFZhcmlhbnRzID0gdGhpcy5jYXJ0LmdldEFsbFZhcmlhbnRzKCk7XHJcbiAgICB0aGlzLnByb2R1Y3RWYXJpYW50cy5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhwLmdldEpzb24oKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRDYXJ0TG9jYWxTdG9yYWdlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJxdWFsY29hcywgcXVhbGN1bm8gaGEgY2hqaWFtYXRvIGluaXRDYXJ0TG9jYWxTdG9yYWdlXCIpO1xyXG4gICAgLy9xdWVzdGEgZnVuemlvbmUgbGEgdXNhIGluIGhvbWVwYWdlXHJcbiAgICBjb25zdCBjYXJ0OiBDYXJ0ID0gdGhpcy5nZXRDYXJ0KCk7XHJcbiAgICBpZiAoIWNhcnQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJjcmVvIHVuIGNhcnJlbGxvIHZ1b3RvXCIpO1xyXG4gICAgICBjb25zdCBpbnRpYWxDYXJ0ID0ge1xyXG4gICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBpbml0aWFsQ2FydEpzb24gPSBKU09OLnN0cmluZ2lmeShpbnRpYWxDYXJ0KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSVF9LRVksIGluaXRpYWxDYXJ0SnNvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbXB0eUNhcnQoKSB7XHJcbiAgICAvKipcclxuICAgIGNvbnN0IGluaXRpYWxDYXJ0ID0ge1xyXG4gICAgICBpdGVtczogW11cclxuICAgIH07XHJcbiAgICBjb25zdCBpbml0aWFsQ2FydEpzb24gPSBKU09OLnN0cmluZ2lmeShpbml0aWFsQ2FydCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJUX0tFWSwgaW5pdGlhbENhcnRKc29uKTtcclxuICAgIHRoaXMuY2FydCQubmV4dChpbml0aWFsQ2FydCk7XHJcbiAgICAqL1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FydCgpOiBDYXJ0IHtcclxuICAgIHRyeXtcclxuICAgIGxldCBjYXJ0OiBDYXJ0ID0gQ2FydC5nZW5lcmF0ZUNhcnRGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICByZXR1cm4gY2FydDtcclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgbGV0IGNhcnQgPSBuZXcgQ2FydCgpO1xyXG4gICAgICBjYXJ0LnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICByZXR1cm4gY2FydDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyYXRvIGRhIFwiQWRkIHRvIGthcnRcIlxyXG4gICAqIEBwYXJhbSBjYXJ0SXRlbVxyXG4gICAqIEBwYXJhbSB1cGRhdGVDYXJ0SXRlbVxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcbiAgc2V0Q2FydEl0ZW0oY2FydEl0ZW06IENhcnRJdGVtLCB1cGRhdGVDYXJ0SXRlbT86IGJvb2xlYW4pOiBDYXJ0IHtcclxuICAgIC8qKlxyXG4gICAgY29uc3QgY2FydCA9IHRoaXMuZ2V0Q2FydCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJjYXJ0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbiAgICBjb25zdCBjYXJ0SXRlbUV4aXN0ID0gY2FydC5pdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLnByb2R1Y3RJZCA9PT0gY2FydEl0ZW0ucHJvZHVjdElkKTtcclxuICAgIC8vc2UgbCdpdGVtIGVzaXN0ZSBhbGxvcmEgbmUgaW5jcmVtZW50byBsYSBxdWFudGl0w6AsIHNlbm5vIGFnZ2l1bmdvIHVuIG51b3ZvIGl0ZW0gYWwgY2FycmVsbG8uLmNyZWRvIGlsIHByb2JsZW1hIMOoIGNoZSBub24gYWdnaXVuZ2UgbGUgdmFyaWUgdmFyaWFudHMgdGlwbyBwcm9kb3R0aSBjb24gdGFnbGllIGRpdmVyc2VcclxuICAgIGNvbnNvbGUubG9nKFwiY2FydEl0ZW1FeGlzdCA9IFwiICsgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1FeGlzdCkpO1xyXG4gICAgaWYgKGNhcnRJdGVtRXhpc3QpIHtcclxuICAgICAgY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5wcm9kdWN0SWQgPT09IGNhcnRJdGVtLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtIHdpdGggc2FtZSBwcm9kdWN0SWQgPSBcIiArIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuXHJcbiAgICAgICAgICAvL3F1YSB2YSBhZ2dpdW50YSBsYSB2YXJpYW50c1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZUNhcnRJdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHkgPSBjYXJ0SXRlbS5xdWFudGl0eTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHkgPSBpdGVtLnF1YW50aXR5ICsgY2FydEl0ZW0ucXVhbnRpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhcnQuaXRlbXMucHVzaChjYXJ0SXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FydEpzb24gPSBKU09OLnN0cmluZ2lmeShjYXJ0KTtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FydEpzb24gPSBcIiArIGNhcnRKc29uKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBUlRfS0VZLCBjYXJ0SnNvbik7XHJcbiAgICB0aGlzLmNhcnQkLm5leHQoY2FydCk7XHJcbiAgICByZXR1cm4gY2FydDtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNhcnRJdGVtKHByb2R1Y3RJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KCk7XHJcbiAgICBjb25zdCBuZXdDYXJ0ID0gY2FydC5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdElkICE9PSBwcm9kdWN0SWQpO1xyXG5cclxuICAgIGNhcnQuaXRlbXMgPSBuZXdDYXJ0O1xyXG5cclxuICAgIGNvbnN0IGNhcnRKc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY2FydCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJUX0tFWSwgY2FydEpzb25TdHJpbmcpO1xyXG5cclxuICAgIHRoaXMuY2FydCQubmV4dChjYXJ0KTtcclxuKi9cclxucmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==