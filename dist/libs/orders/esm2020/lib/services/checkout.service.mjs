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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvc2VydmljZXMvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQU1sRCxNQUFNLE9BQU8sZUFBZTtJQUcxQixZQUFvQixJQUFnQixFQUF5QixXQUFXO1FBQXBELFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVcsQ0FBQyxXQUFnQixFQUFFLE1BQWM7UUFDMUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFBO1FBRWhELElBQUksSUFBSSxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRS9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLEdBQUcsRUFBQyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDdFIsQ0FBQztJQUlELFFBQVEsQ0FBRSxLQUFLO1FBQ2IsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdELElBQUksV0FBVyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFTLENBQUM7WUFDN0UsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUViLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQzs7OEVBM0JXLGVBQWUsMENBR29CLGFBQWE7cUVBSGhELGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07dUZBRVAsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUl3QyxNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KCdlbnZpcm9ubWVudCcpIGVudmlyb25tZW50KSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICB9XG5cbiAgbWFrZVBheW1lbnQoc3RyaXBlVG9rZW46IGFueSwgYW1vdW50OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgY29uc3QgdXJsID0gdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgKyBcImNoZWNrb3V0XCJcblxuICAgIGxldCB1c2VyID0gIHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XG5cbiAgICBjb25zb2xlLmxvZyhcInVzZXIgPSBcIiArIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHVybCx7dG9rZW46c3RyaXBlVG9rZW4sIGFtb3VudDogYW1vdW50LCBjb3VudHJ5OiB1c2VyLmNvdW50cnksIGZOYW1lOiB1c2VyLmZOYW1lLCBsTmFtZTogdXNlci5sTmFtZSwgYWRkcmVzczogdXNlci5hZGRyZXNzMSwgcGhvbmU6IHVzZXIucGhvbmUsc3RhdGU6IHVzZXIuc3RhdGUsIHBvc3RhbENvZGU6IHVzZXIucG9zdGFsQ29kZSwgY2l0eTogdXNlci5jaXR5LCBlbWFpbDogdXNlci5lbWFpbCwgcHJlZml4OiB1c2VyLnByZWZpeH0pO1xuICB9XG5cblxuXG4gIHBhcnNlSnd0ICh0b2tlbikge1xuICAgIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xuICAgIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIH0pLmpvaW4oJycpKTtcblxuICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25QYXlsb2FkKTtcbn07XG59XG4iXX0=