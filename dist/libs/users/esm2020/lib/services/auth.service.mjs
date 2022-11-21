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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU83RCxNQUFNLE9BQU8sV0FBVztJQUl0QixZQUFvQixJQUFnQixFQUF5QixXQUFXLEVBQ2hFLE1BQWMsRUFDZCxLQUEwQjtRQUZkLFNBQUksR0FBSixJQUFJLENBQVk7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBRXZELENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBR0QsTUFBTTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFeEIsQ0FBQztJQUNELFFBQVEsQ0FBQyxJQUFTO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUE7UUFDckQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztRQUM3RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFLElBQUksRUFBQyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBRTlGLENBQUM7O3NFQTVCVSxXQUFXLDBDQUl3QixhQUFhO2lFQUpoRCxXQUFXLFdBQVgsV0FBVyxtQkFKVixNQUFNO3VGQUlQLFdBQVc7Y0FMdkIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFPd0MsTUFBTTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbi8vaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQucHJvZCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9jYWxzdG9yYWdlU2VydmljZSB9IGZyb20gJy4vbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDtcclxuICBwcml2YXRlIGFwaVVSTFVzZXJzO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnQsXHJcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICBwcml2YXRlIHRva2VuOiBMb2NhbHN0b3JhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB0aGlzLmFwaVVSTFVzZXJzID0gdGhpcy5lbnZpcm9ubWVudC5hcGlVUkwgKyAndXNlcnMnO1xyXG5cclxuICB9XHJcblxyXG4gIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPihgJHt0aGlzLmFwaVVSTFVzZXJzfS9sb2dpbmAsIHsgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIHRoaXMudG9rZW4ucmVtb3ZlVG9rZW4oKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG5cclxuICB9XHJcbiAgcmVnaXN0ZXIodXNlcjpVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe2VtYWlsOiB1c2VyLmVtYWlsLHBhc3N3b3JkSGFzaDogdXNlci5wYXNzd29yZH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW52aXJvbm1lbnQuYXBpVVJMICsgXCJ1c2Vycy9yZWdpc3RlclwiLCBib2R5LHsnaGVhZGVycyc6aGVhZGVyc30pO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==