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
        let user = this.parseJwt(sessionStorage.getItem("authToken"));
        console.log("user = " + JSON.stringify(user));
        return this.http.post(url, { token: stripeToken, amount: amount, country: user.country, fName: user.fName, lName: user.lName, address: user.address1, phone: user.phone, state: user.state, postalCode: user.postalCode, city: user.city, email: user.email, prefix: user.prefix });
    }
    sendSms(orderId, clientNumber, clientPrefix) {
        return this.http.post("https://cataldoproduction.herokuapp.com" + "/api/v1/sms/send", { orderId: orderId, clientNumber: clientNumber, clientPrefix: clientPrefix });
    }
    payPal(cart, order) {
        console.log("chiamo paypal");
        return this.http.post("http://localhost:3000" + "/api/v1/paypal", { amount: cart.getTotalPrice() });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvc2VydmljZXMvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQVFsRCxNQUFNLE9BQU8sZUFBZTtJQU8xQixZQUFvQixJQUFnQixFQUF5QixXQUFXO1FBQXBELFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBSSxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFFLFVBQVUsQ0FBQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUksQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRSxnQkFBZ0IsQ0FBQztJQUN2RSxDQUFDO0lBRUQsV0FBVyxDQUFDLFdBQWdCLEVBQUUsTUFBYztRQUMxQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUE7UUFFaEQsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN0UixDQUFDO0lBS0QsT0FBTyxDQUFDLE9BQWEsRUFBRSxZQUFrQixFQUFFLFlBQWtCO1FBQzNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0seUNBQXlDLEdBQUUsa0JBQWtCLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7SUFDckssQ0FBQztJQUlELE1BQU0sQ0FBQyxJQUFTLEVBQUUsS0FBVztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sdUJBQXVCLEdBQUUsZ0JBQWdCLEVBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQsUUFBUSxDQUFFLEtBQUs7UUFDYixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0QsSUFBSSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVMsQ0FBQztZQUM3RSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFBQSxDQUFDOzs4RUE5Q1csZUFBZSwwQ0FPb0IsYUFBYTtxRUFQaEQsZUFBZSxXQUFmLGVBQWUsbUJBRmQsTUFBTTt1RkFFUCxlQUFlO2NBSDNCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBUXdDLE1BQU07dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi9tb2RlbHMvb3JkZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgYXBpVVJMT3JkZXJzIDtcbiAgcHJpdmF0ZSBhcGlVUkxQcm9kdWN0cztcbiAgcHJpdmF0ZSBhcGlVcmxXX1Byb2R1Y3RzIDtcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgQEluamVjdCgnZW52aXJvbm1lbnQnKSBlbnZpcm9ubWVudCkge1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICB0aGlzLmFwaVVSTE9yZGVycyA9ICB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArICdvcmRlcnMnO1xuICAgIHRoaXMuYXBpVVJMUHJvZHVjdHMgPSAgKyB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArJ3Byb2R1Y3RzJztcbiAgICB0aGlzLmFwaVVybFdfUHJvZHVjdHMgPSAgKyB0aGlzLmVudmlyb25tZW50LmFwaVVSTCsgJ3dvbWVuLXByb2R1Y3RzJztcbiAgfVxuXG4gIG1ha2VQYXltZW50KHN0cmlwZVRva2VuOiBhbnksIGFtb3VudDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZW52aXJvbm1lbnQuYXBpVVJMICsgXCJjaGVja291dFwiXG5cbiAgICBsZXQgdXNlciA9ICB0aGlzLnBhcnNlSnd0KHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpO1xuXG4gICAgY29uc29sZS5sb2coXCJ1c2VyID0gXCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih1cmwse3Rva2VuOnN0cmlwZVRva2VuLCBhbW91bnQ6IGFtb3VudCwgY291bnRyeTogdXNlci5jb3VudHJ5LCBmTmFtZTogdXNlci5mTmFtZSwgbE5hbWU6IHVzZXIubE5hbWUsIGFkZHJlc3M6IHVzZXIuYWRkcmVzczEsIHBob25lOiB1c2VyLnBob25lLHN0YXRlOiB1c2VyLnN0YXRlLCBwb3N0YWxDb2RlOiB1c2VyLnBvc3RhbENvZGUsIGNpdHk6IHVzZXIuY2l0eSwgZW1haWw6IHVzZXIuZW1haWwsIHByZWZpeDogdXNlci5wcmVmaXh9KTtcbiAgfVxuXG5cblxuXG4gIHNlbmRTbXMob3JkZXJJZCA6IGFueSwgY2xpZW50TnVtYmVyIDogYW55LCBjbGllbnRQcmVmaXggOiBhbnkpIDogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFwiaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tXCIrIFwiL2FwaS92MS9zbXMvc2VuZFwiLHtvcmRlcklkOm9yZGVySWQsIGNsaWVudE51bWJlcjogY2xpZW50TnVtYmVyLCBjbGllbnRQcmVmaXg6Y2xpZW50UHJlZml4fSk7XG4gIH1cblxuXG5cbiAgcGF5UGFsKGNhcnQ6Q2FydCwgb3JkZXI6T3JkZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2hpYW1vIHBheXBhbFwiKVxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIrIFwiL2FwaS92MS9wYXlwYWxcIix7YW1vdW50OmNhcnQuZ2V0VG90YWxQcmljZSgpfSk7XG4gIH1cblxuICBwYXJzZUp3dCAodG9rZW4pIHtcbiAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5hdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9KS5qb2luKCcnKSk7XG5cbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XG59O1xufVxuIl19