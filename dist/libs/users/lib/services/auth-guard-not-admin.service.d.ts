import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';
import * as i0 from "@angular/core";
export declare class AuthGuardNotAdmin implements CanActivate {
    private router;
    private localStorageToken;
    constructor(router: Router, localStorageToken: LocalstorageService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    private _tokenExpired;
    parseJwt(token: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuardNotAdmin, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuardNotAdmin>;
}
//# sourceMappingURL=auth-guard-not-admin.service.d.ts.map