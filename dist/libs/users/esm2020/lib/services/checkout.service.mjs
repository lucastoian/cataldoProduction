import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CheckoutService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    makePayment(stripeToken, amount) {
        const url = this.environment.apiURL + "checkout";
        let user = this.parseJwt(sessionStorage.getItem("authToken"));
        console.log("user = " + JSON.stringify(user));
        return this.http.post(url, { token: stripeToken, amount: amount, country: user.country, fName: user.fName, lName: user.lName, address: user.address1, phone: user.phone, state: user.state, postalCode: user.postalCode, city: user.city, email: user.email, prefix: user.prefix });
    }
    klarnaPayment(sourceId, amount) {
        const url = 'http://localhost:3000/api/v1/' + "charge-source";
        return this.http.post(url, { sourceId: sourceId, amount: amount });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTWxELE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQW9CLElBQWdCLEVBQXlCLFdBQVc7UUFBcEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBRUQsV0FBVyxDQUFDLFdBQWdCLEVBQUUsTUFBYztRQUMxQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUE7UUFFaEQsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUN0UixDQUFDO0lBRUQsYUFBYSxDQUFDLFFBQWEsRUFBRSxNQUFjO1FBQ3pDLE1BQU0sR0FBRyxHQUFHLCtCQUErQixHQUFHLGVBQWUsQ0FBQTtRQUc3RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLEdBQUcsRUFBQyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUlELFFBQVEsQ0FBRSxLQUFLO1FBQ2IsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdELElBQUksV0FBVyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFTLENBQUM7WUFDN0UsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUViLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQzs7OEVBbENXLGVBQWUsMENBR29CLGFBQWE7cUVBSGhELGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07dUZBRVAsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUl3QyxNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnQpIHtcclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICB9XHJcblxyXG4gIG1ha2VQYXltZW50KHN0cmlwZVRva2VuOiBhbnksIGFtb3VudDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgKyBcImNoZWNrb3V0XCJcclxuXHJcbiAgICBsZXQgdXNlciA9ICB0aGlzLnBhcnNlSnd0KHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwidXNlciA9IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybCx7dG9rZW46c3RyaXBlVG9rZW4sIGFtb3VudDogYW1vdW50LCBjb3VudHJ5OiB1c2VyLmNvdW50cnksIGZOYW1lOiB1c2VyLmZOYW1lLCBsTmFtZTogdXNlci5sTmFtZSwgYWRkcmVzczogdXNlci5hZGRyZXNzMSwgcGhvbmU6IHVzZXIucGhvbmUsc3RhdGU6IHVzZXIuc3RhdGUsIHBvc3RhbENvZGU6IHVzZXIucG9zdGFsQ29kZSwgY2l0eTogdXNlci5jaXR5LCBlbWFpbDogdXNlci5lbWFpbCwgcHJlZml4OiB1c2VyLnByZWZpeH0pO1xyXG4gIH1cclxuXHJcbiAga2xhcm5hUGF5bWVudChzb3VyY2VJZDogYW55LCBhbW91bnQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PntcclxuICAgIGNvbnN0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxLycgKyBcImNoYXJnZS1zb3VyY2VcIlxyXG5cclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih1cmwse3NvdXJjZUlkOnNvdXJjZUlkLCBhbW91bnQ6IGFtb3VudH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwYXJzZUp3dCAodG9rZW4pIHtcclxuICAgIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xyXG4gICAgdmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xyXG4gICAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5hdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbihjKSB7XHJcbiAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gICAgfSkuam9pbignJykpO1xyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25QYXlsb2FkKTtcclxufTtcclxufVxyXG4iXX0=