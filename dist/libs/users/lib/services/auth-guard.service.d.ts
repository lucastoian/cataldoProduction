import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';
import * as i0 from "@angular/core";
export declare class AuthGuard implements CanActivate {
    private router;
    private localStorageToken;
    constructor(router: Router, localStorageToken: LocalstorageService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    private _tokenExpired;
    parseJwt(token: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
//# sourceMappingURL=auth-guard.service.d.ts.map