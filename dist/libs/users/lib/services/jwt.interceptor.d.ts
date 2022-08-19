import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import * as i0 from "@angular/core";
export declare class JwtInterceptor implements HttpInterceptor {
    private localStorageToken;
    private environment;
    constructor(localStorageToken: LocalstorageService, environment: any);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<JwtInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JwtInterceptor>;
}
//# sourceMappingURL=jwt.interceptor.d.ts.map