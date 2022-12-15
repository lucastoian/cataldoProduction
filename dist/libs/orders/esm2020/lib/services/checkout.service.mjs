import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CheckoutService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.apiURLOrders = this.environment.apiURL + 'orders';
        this.apiURLProducts = +this.environment.apiURL + 'products';
        this.apiUrlW_Products = +this.environment.apiURL + 'women-products';
    }
    makePayment(stripeToken, amount) {
        const url = this.environment.apiURL + "checkout";
        let user = this.parseJwt(localStorage.getItem("authToken"));
        console.log("user = " + JSON.stringify(user));
        return this.http.post(url, { token: stripeToken, amount: amount, country: user.country, fName: user.fName, lName: user.lName, address: user.address1, phone: user.phone, state: user.state, postalCode: user.postalCode, city: user.city, email: user.email, prefix: user.prefix });
    }
    sendSms(orderId, clientNumber, clientPrefix) {
        return this.http.post("https://cataldoproduction.herokuapp.com" + "/api/v1/sms/send", { orderId: orderId, clientNumber: clientNumber, clientPrefix: clientPrefix });
    }
    payPal(cart, order2) {
        console.log("chiamo paypal");
        return this.http.post("https://cataldoproduction.herokuapp.com" + "/api/v1/paypal", { amount: cart.getTotalPrice(), order: order2 });
    }
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    ;
}
CheckoutService.ɵfac = function CheckoutService_Factory(t) { return new (t || CheckoutService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('environment')); };
CheckoutService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CheckoutService, factory: CheckoutService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckoutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['environment']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvc2VydmljZXMvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQVFsRCxNQUFNLE9BQU8sZUFBZTtJQUt4QixZQUFvQixJQUFnQixFQUF5QixXQUFXO1FBQXBELFNBQUksR0FBSixJQUFJLENBQVk7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBSSxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFFLFVBQVUsQ0FBQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUksQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRSxnQkFBZ0IsQ0FBQztJQUN2RSxDQUFDO0lBQ0gsV0FBVyxDQUFDLFdBQWdCLEVBQUUsTUFBYztRQUN4QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUE7UUFDaEQsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN0UixDQUFDO0lBQ0gsT0FBTyxDQUFDLE9BQWEsRUFBRSxZQUFrQixFQUFFLFlBQWtCO1FBQ3pELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0seUNBQXlDLEdBQUUsa0JBQWtCLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7SUFDdkssQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFTLEVBQUUsTUFBWTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0seUNBQXlDLEdBQUUsZ0JBQWdCLEVBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQ3RJLENBQUM7SUFDQyxRQUFRLENBQUUsS0FBSztRQUNiLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RCxJQUFJLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBUyxDQUFDO1lBQzdFLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUFBLENBQUM7OzhFQS9CUyxlQUFlLDBDQUtzQixhQUFhO3FFQUxsRCxlQUFlLFdBQWYsZUFBZSxtQkFGZCxNQUFNO3VGQUVQLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFNMEMsTUFBTTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC91c2Vycyc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uL21vZGVscy9vcmRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0U2VydmljZSB7XG4gIHByaXZhdGUgYXBpVVJMT3JkZXJzIDtcbiAgcHJpdmF0ZSBhcGlVUkxQcm9kdWN0cztcbiAgcHJpdmF0ZSBhcGlVcmxXX1Byb2R1Y3RzIDtcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnQpIHtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgdGhpcy5hcGlVUkxPcmRlcnMgPSAgdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgKyAnb3JkZXJzJztcbiAgICB0aGlzLmFwaVVSTFByb2R1Y3RzID0gICsgdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgKydwcm9kdWN0cyc7XG4gICAgdGhpcy5hcGlVcmxXX1Byb2R1Y3RzID0gICsgdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwrICd3b21lbi1wcm9kdWN0cyc7XG4gIH1cbm1ha2VQYXltZW50KHN0cmlwZVRva2VuOiBhbnksIGFtb3VudDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZW52aXJvbm1lbnQuYXBpVVJMICsgXCJjaGVja291dFwiXG4gICAgbGV0IHVzZXIgPSAgdGhpcy5wYXJzZUp3dChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XG4gICAgY29uc29sZS5sb2coXCJ1c2VyID0gXCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsLHt0b2tlbjpzdHJpcGVUb2tlbiwgYW1vdW50OiBhbW91bnQsIGNvdW50cnk6IHVzZXIuY291bnRyeSwgZk5hbWU6IHVzZXIuZk5hbWUsIGxOYW1lOiB1c2VyLmxOYW1lLCBhZGRyZXNzOiB1c2VyLmFkZHJlc3MxLCBwaG9uZTogdXNlci5waG9uZSxzdGF0ZTogdXNlci5zdGF0ZSwgcG9zdGFsQ29kZTogdXNlci5wb3N0YWxDb2RlLCBjaXR5OiB1c2VyLmNpdHksIGVtYWlsOiB1c2VyLmVtYWlsLCBwcmVmaXg6IHVzZXIucHJlZml4fSk7XG4gIH1cbnNlbmRTbXMob3JkZXJJZCA6IGFueSwgY2xpZW50TnVtYmVyIDogYW55LCBjbGllbnRQcmVmaXggOiBhbnkpIDogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFwiaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tXCIrIFwiL2FwaS92MS9zbXMvc2VuZFwiLHtvcmRlcklkOm9yZGVySWQsIGNsaWVudE51bWJlcjogY2xpZW50TnVtYmVyLCBjbGllbnRQcmVmaXg6Y2xpZW50UHJlZml4fSk7XG59XG5wYXlQYWwoY2FydDpDYXJ0LCBvcmRlcjI6T3JkZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2hpYW1vIHBheXBhbFwiKVxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFwiaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tXCIrIFwiL2FwaS92MS9wYXlwYWxcIix7YW1vdW50OmNhcnQuZ2V0VG90YWxQcmljZSgpLCBvcmRlcjpvcmRlcjJ9KTtcbiAgfVxuICAgIHBhcnNlSnd0ICh0b2tlbikge1xuICAgICAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgICB9KS5qb2luKCcnKSk7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XG4gIH07XG59XG4iXX0=