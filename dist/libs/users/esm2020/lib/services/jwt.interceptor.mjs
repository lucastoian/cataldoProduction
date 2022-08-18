import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import * as i0 from "@angular/core";
import * as i1 from "./localstorage.service";
//import { environment } from '@env/environment';
export class JwtInterceptor {
    constructor(localStorageToken) {
        this.localStorageToken = localStorageToken;
    }
    intercept(request, next) {
        const token = this.localStorageToken.getToken();
        const isAPIUrl = request.url.startsWith('https://cataldoproduction.herokuapp.com/api/v1/');
        if (token && isAPIUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(i0.ɵɵinject(i1.LocalstorageService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JwtInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.LocalstorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3NlcnZpY2VzL2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFDN0QsaURBQWlEO0FBR2pELE1BQU0sT0FBTyxjQUFjO0lBRXpCLFlBQW9CLGlCQUFzQztRQUF0QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFCO0lBQUcsQ0FBQztJQUU5RCxTQUFTLENBQUMsT0FBNkIsRUFBRSxJQUFpQjtRQUN4RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsaURBQWlELENBQUMsQ0FBQztRQUUzRixJQUFHLEtBQUssSUFBSSxRQUFRLEVBQUM7WUFDakIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLFVBQVUsRUFBRTtvQkFDVixhQUFhLEVBQUUsVUFBVSxLQUFLLEVBQUU7aUJBQ2pDO2FBQ0YsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7NEVBakJVLGNBQWM7b0VBQWQsY0FBYyxXQUFkLGNBQWM7dUZBQWQsY0FBYztjQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBFdmVudCxcclxuICBIdHRwSW50ZXJjZXB0b3JcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9jYWxzdG9yYWdlU2VydmljZSB9IGZyb20gJy4vbG9jYWxzdG9yYWdlLnNlcnZpY2UnO1xyXG4vL2ltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnQGVudi9lbnZpcm9ubWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKd3RJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYWxTdG9yYWdlVG9rZW46IExvY2Fsc3RvcmFnZVNlcnZpY2UpIHt9XHJcblxyXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDx1bmtub3duPiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDx1bmtub3duPj4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmxvY2FsU3RvcmFnZVRva2VuLmdldFRva2VuKCk7XHJcbiAgICBjb25zdCBpc0FQSVVybCA9IHJlcXVlc3QudXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vY2F0YWxkb3Byb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvJyk7XHJcblxyXG4gICAgaWYodG9rZW4gJiYgaXNBUElVcmwpe1xyXG4gICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcclxuICAgICAgICAgIHNldEhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG4gIH1cclxufVxyXG4iXX0=