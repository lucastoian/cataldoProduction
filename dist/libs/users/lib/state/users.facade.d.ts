import { Store } from '@ngrx/store';
import * as i0 from "@angular/core";
export declare class UsersFacade {
    private store;
    currentUser$: import("rxjs").Observable<import("@eshop-frontend/users").User>;
    isAuthenticated$: import("rxjs").Observable<boolean>;
    constructor(store: Store);
    buildUserSession(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersFacade>;
}
//# sourceMappingURL=users.facade.d.ts.map