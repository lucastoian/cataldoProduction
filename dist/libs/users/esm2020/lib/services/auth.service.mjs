import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
import * as i3 from "./localstorage.service";
export class AuthService {
    constructor(http, environment, router, token) {
        this.http = http;
        this.router = router;
        this.token = token;
        this.environment = environment;
        this.apiURLUsers = this.environment.apiURL + 'users';
    }
    login(email, password) {
        return this.http.post(`${this.apiURLUsers}/login`, { email, password });
    }
    logout() {
        this.token.removeToken();
        this.router.navigate(['/login']);
        console.log('logout');
    }
    register(user) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify({ email: user.email, passwordHash: user.password });
        return this.http.post(this.environment.apiURL + "users/register", body, { 'headers': headers });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject('environment'), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.LocalstorageService)); };
AuthService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: ['environment']
            }] }, { type: i2.Router }, { type: i3.LocalstorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU83RCxNQUFNLE9BQU8sV0FBVztJQUl0QixZQUFvQixJQUFnQixFQUF5QixXQUFXLEVBQ2hFLE1BQWMsRUFDZCxLQUEwQjtRQUZkLFNBQUksR0FBSixJQUFJLENBQVk7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBRXZELENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBR0QsTUFBTTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFeEIsQ0FBQztJQUNELFFBQVEsQ0FBQyxJQUFTO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUE7UUFDckQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztRQUM3RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFLElBQUksRUFBQyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBRTlGLENBQUM7O3NFQTVCVSxXQUFXLDBDQUl3QixhQUFhO2lFQUpoRCxXQUFXLFdBQVgsV0FBVyxtQkFKVixNQUFNO3VGQUlQLFdBQVc7Y0FMdkIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFPd0MsTUFBTTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQucHJvZCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9jYWxzdG9yYWdlU2VydmljZSB9IGZyb20gJy4vbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBwcml2YXRlIGVudmlyb25tZW50O1xuICBwcml2YXRlIGFwaVVSTFVzZXJzO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgQEluamVjdCgnZW52aXJvbm1lbnQnKSBlbnZpcm9ubWVudCxcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgcHJpdmF0ZSB0b2tlbjogTG9jYWxzdG9yYWdlU2VydmljZSkge1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICB0aGlzLmFwaVVSTFVzZXJzID0gdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgKyAndXNlcnMnO1xuXG4gIH1cblxuICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KGAke3RoaXMuYXBpVVJMVXNlcnN9L2xvZ2luYCwgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gIH1cblxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnRva2VuLnJlbW92ZVRva2VuKCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xuXG4gIH1cbiAgcmVnaXN0ZXIodXNlcjpVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBoZWFkZXJzID0geyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7ZW1haWw6IHVzZXIuZW1haWwscGFzc3dvcmRIYXNoOiB1c2VyLnBhc3N3b3JkfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW52aXJvbm1lbnQuYXBpVVJMICsgXCJ1c2Vycy9yZWdpc3RlclwiLCBib2R5LHsnaGVhZGVycyc6aGVhZGVyc30pO1xuXG4gIH1cblxufVxuIl19