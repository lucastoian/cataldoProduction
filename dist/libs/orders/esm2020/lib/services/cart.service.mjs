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
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9vcmRlcnMvc3JjL2xpYi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJdkMsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUkvQixNQUFNLE9BQU8sV0FBVztJQVN0QjtRQUpBLFVBQUssR0FBMEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbkUsV0FBTSxHQUEwQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUdyRCxDQUFDO0lBQ2hCLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7UUFDcEUsb0NBQW9DO1FBQ3BDLE1BQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sVUFBVSxHQUFHO2dCQUNqQixLQUFLLEVBQUUsRUFBRTthQUNWLENBQUM7WUFDRixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25ELFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUDs7Ozs7OztVQU9FO0lBQ0osQ0FBQztJQUVELE9BQU87UUFDTCxJQUFHO1lBQ0gsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7WUFDckQsT0FBTyxJQUFJLENBQUM7U0FDWDtRQUFBLE9BQU0sQ0FBQyxFQUFDO1lBQ1AsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQztTQUNiO0lBRUgsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsV0FBVyxDQUFDLFFBQWtCLEVBQUUsY0FBd0I7UUFDdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTZDRjtRQUNGLE9BQU8sSUFBSSxDQUFDO0lBQ1YsQ0FBQzs7c0VBN0dVLFdBQVc7aUVBQVgsV0FBVyxXQUFYLFdBQVcsbUJBRlYsTUFBTTt1RkFFUCxXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RWYXJpYW50IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL3VzZXJzJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENhcnRJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2NhcnQnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDQVJUX0tFWSA9ICdjYXJ0JztcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2UgIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJvZHVjdFZhcmlhbnRzOlByb2R1Y3RWYXJpYW50W107XHJcbiAgY2FydDpDYXJ0O1xyXG5cclxuICBjYXJ0JDogQmVoYXZpb3JTdWJqZWN0PENhcnQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmdldENhcnQoKSk7XHJcbiAgY2FydDIkOiBCZWhhdmlvclN1YmplY3Q8Q2FydD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuZ2V0Q2FydCgpKTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FydCA9IENhcnQuZ2VuZXJhdGVDYXJ0RnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgdGhpcy5wcm9kdWN0VmFyaWFudHMgPSB0aGlzLmNhcnQuZ2V0QWxsVmFyaWFudHMoKTtcclxuICAgIHRoaXMucHJvZHVjdFZhcmlhbnRzLmZvckVhY2gocCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHAuZ2V0SnNvbigpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdENhcnRMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInF1YWxjb2FzLCBxdWFsY3VubyBoYSBjaGppYW1hdG8gaW5pdENhcnRMb2NhbFN0b3JhZ2VcIik7XHJcbiAgICAvL3F1ZXN0YSBmdW56aW9uZSBsYSB1c2EgaW4gaG9tZXBhZ2VcclxuICAgIGNvbnN0IGNhcnQ6IENhcnQgPSB0aGlzLmdldENhcnQoKTtcclxuICAgIGlmICghY2FydCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNyZW8gdW4gY2FycmVsbG8gdnVvdG9cIik7XHJcbiAgICAgIGNvbnN0IGludGlhbENhcnQgPSB7XHJcbiAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGluaXRpYWxDYXJ0SnNvbiA9IEpTT04uc3RyaW5naWZ5KGludGlhbENhcnQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJUX0tFWSwgaW5pdGlhbENhcnRKc29uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtcHR5Q2FydCgpIHtcclxuICAgIC8qKiBcclxuICAgIGNvbnN0IGluaXRpYWxDYXJ0ID0ge1xyXG4gICAgICBpdGVtczogW11cclxuICAgIH07XHJcbiAgICBjb25zdCBpbml0aWFsQ2FydEpzb24gPSBKU09OLnN0cmluZ2lmeShpbml0aWFsQ2FydCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJUX0tFWSwgaW5pdGlhbENhcnRKc29uKTtcclxuICAgIHRoaXMuY2FydCQubmV4dChpbml0aWFsQ2FydCk7XHJcbiAgICAqL1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FydCgpOiBDYXJ0IHtcclxuICAgIHRyeXtcclxuICAgIGxldCBjYXJ0OiBDYXJ0ID0gQ2FydC5nZW5lcmF0ZUNhcnRGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICByZXR1cm4gY2FydDtcclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgbGV0IGNhcnQgPSBuZXcgQ2FydCgpO1xyXG4gICAgICBjYXJ0LnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICByZXR1cm4gY2FydDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlcmF0byBkYSBcIkFkZCB0byBrYXJ0XCJcclxuICAgKiBAcGFyYW0gY2FydEl0ZW0gXHJcbiAgICogQHBhcmFtIHVwZGF0ZUNhcnRJdGVtIFxyXG4gICAqIEByZXR1cm5zIFxyXG4gICAqL1xyXG4gIHNldENhcnRJdGVtKGNhcnRJdGVtOiBDYXJ0SXRlbSwgdXBkYXRlQ2FydEl0ZW0/OiBib29sZWFuKTogQ2FydCB7XHJcbiAgICAvKiogXHJcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhcnQgPSBcIiArIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuICAgIGNvbnN0IGNhcnRJdGVtRXhpc3QgPSBjYXJ0Lml0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdElkID09PSBjYXJ0SXRlbS5wcm9kdWN0SWQpO1xyXG4gICAgLy9zZSBsJ2l0ZW0gZXNpc3RlIGFsbG9yYSBuZSBpbmNyZW1lbnRvIGxhIHF1YW50aXTDoCwgc2Vubm8gYWdnaXVuZ28gdW4gbnVvdm8gaXRlbSBhbCBjYXJyZWxsby4uY3JlZG8gaWwgcHJvYmxlbWEgw6ggY2hlIG5vbiBhZ2dpdW5nZSBsZSB2YXJpZSB2YXJpYW50cyB0aXBvIHByb2RvdHRpIGNvbiB0YWdsaWUgZGl2ZXJzZVxyXG4gICAgY29uc29sZS5sb2coXCJjYXJ0SXRlbUV4aXN0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbUV4aXN0KSk7XHJcbiAgICBpZiAoY2FydEl0ZW1FeGlzdCkge1xyXG4gICAgICBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnByb2R1Y3RJZCA9PT0gY2FydEl0ZW0ucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW0gd2l0aCBzYW1lIHByb2R1Y3RJZCA9IFwiICsgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvL3F1YSB2YSBhZ2dpdW50YSBsYSB2YXJpYW50c1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZUNhcnRJdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHkgPSBjYXJ0SXRlbS5xdWFudGl0eTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHkgPSBpdGVtLnF1YW50aXR5ICsgY2FydEl0ZW0ucXVhbnRpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYXJ0Lml0ZW1zLnB1c2goY2FydEl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhcnRKc29uID0gSlNPTi5zdHJpbmdpZnkoY2FydCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhcnRKc29uID0gXCIgKyBjYXJ0SnNvbik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJUX0tFWSwgY2FydEpzb24pO1xyXG4gICAgdGhpcy5jYXJ0JC5uZXh0KGNhcnQpO1xyXG4gICAgcmV0dXJuIGNhcnQ7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDYXJ0SXRlbShwcm9kdWN0SWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgY2FydCA9IHRoaXMuZ2V0Q2FydCgpO1xyXG4gICAgY29uc3QgbmV3Q2FydCA9IGNhcnQuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnByb2R1Y3RJZCAhPT0gcHJvZHVjdElkKTtcclxuXHJcbiAgICBjYXJ0Lml0ZW1zID0gbmV3Q2FydDtcclxuXHJcbiAgICBjb25zdCBjYXJ0SnNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGNhcnQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSVF9LRVksIGNhcnRKc29uU3RyaW5nKTtcclxuXHJcbiAgICB0aGlzLmNhcnQkLm5leHQoY2FydCk7XHJcbiovXHJcbnJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=