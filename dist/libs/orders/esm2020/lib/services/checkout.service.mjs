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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvc2VydmljZXMvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQU1sRCxNQUFNLE9BQU8sZUFBZTtJQU8xQixZQUFvQixJQUFnQixFQUF5QixXQUFXO1FBQXBELFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBSSxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFFLFVBQVUsQ0FBQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUksQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRSxnQkFBZ0IsQ0FBQztJQUN2RSxDQUFDO0lBRUQsV0FBVyxDQUFDLFdBQWdCLEVBQUUsTUFBYztRQUMxQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUE7UUFFaEQsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN0UixDQUFDO0lBS0QsT0FBTyxDQUFDLE9BQWEsRUFBRSxZQUFrQixFQUFFLFlBQWtCO1FBQzNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0seUNBQXlDLEdBQUUsa0JBQWtCLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7SUFDckssQ0FBQztJQUlELFFBQVEsQ0FBRSxLQUFLO1FBQ2IsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdELElBQUksV0FBVyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFTLENBQUM7WUFDN0UsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUViLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQzs7OEVBekNXLGVBQWUsMENBT29CLGFBQWE7cUVBUGhELGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07dUZBRVAsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQVF3QyxNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBhcGlVUkxPcmRlcnMgO1xyXG4gIHByaXZhdGUgYXBpVVJMUHJvZHVjdHM7XHJcbiAgcHJpdmF0ZSBhcGlVcmxXX1Byb2R1Y3RzIDtcclxuICBwcml2YXRlIGVudmlyb25tZW50O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgQEluamVjdCgnZW52aXJvbm1lbnQnKSBlbnZpcm9ubWVudCkge1xyXG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgdGhpcy5hcGlVUkxPcmRlcnMgPSAgdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgKyAnb3JkZXJzJztcclxuICAgIHRoaXMuYXBpVVJMUHJvZHVjdHMgPSAgKyB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArJ3Byb2R1Y3RzJztcclxuICAgIHRoaXMuYXBpVXJsV19Qcm9kdWN0cyA9ICArIHRoaXMuZW52aXJvbm1lbnQuYXBpVVJMKyAnd29tZW4tcHJvZHVjdHMnO1xyXG4gIH1cclxuXHJcbiAgbWFrZVBheW1lbnQoc3RyaXBlVG9rZW46IGFueSwgYW1vdW50OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmVudmlyb25tZW50LmFwaVVSTCArIFwiY2hlY2tvdXRcIlxyXG5cclxuICAgIGxldCB1c2VyID0gIHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ1c2VyID0gXCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odXJsLHt0b2tlbjpzdHJpcGVUb2tlbiwgYW1vdW50OiBhbW91bnQsIGNvdW50cnk6IHVzZXIuY291bnRyeSwgZk5hbWU6IHVzZXIuZk5hbWUsIGxOYW1lOiB1c2VyLmxOYW1lLCBhZGRyZXNzOiB1c2VyLmFkZHJlc3MxLCBwaG9uZTogdXNlci5waG9uZSxzdGF0ZTogdXNlci5zdGF0ZSwgcG9zdGFsQ29kZTogdXNlci5wb3N0YWxDb2RlLCBjaXR5OiB1c2VyLmNpdHksIGVtYWlsOiB1c2VyLmVtYWlsLCBwcmVmaXg6IHVzZXIucHJlZml4fSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBzZW5kU21zKG9yZGVySWQgOiBhbnksIGNsaWVudE51bWJlciA6IGFueSwgY2xpZW50UHJlZml4IDogYW55KSA6IE9ic2VydmFibGU8YW55PntcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFwiaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tXCIrIFwiL2FwaS92MS9zbXMvc2VuZFwiLHtvcmRlcklkOm9yZGVySWQsIGNsaWVudE51bWJlcjogY2xpZW50TnVtYmVyLCBjbGllbnRQcmVmaXg6Y2xpZW50UHJlZml4fSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHBhcnNlSnd0ICh0b2tlbikge1xyXG4gICAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XHJcbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgICB9KS5qb2luKCcnKSk7XHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblBheWxvYWQpO1xyXG59O1xyXG59XHJcbiJdfQ==