import { Actions } from '@ngrx/effects';
import { LocalstorageService } from '../services/localstorage.service';
import { UsersService } from '../services/users.service';
import * as i0 from "@angular/core";
export declare class UsersEffects {
    private actions$;
    private localstorageService;
    private usersService;
    buildUserSession$: import("rxjs").Observable<import("@ngrx/store/src/models").TypedAction<"[Users] Build User Session">> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, localstorageService: LocalstorageService, usersService: UsersService);
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersEffects>;
}
//# sourceMappingURL=users.effects.d.ts.map