import { UsersService } from '@eshop-frontend/users';
import { OnInit } from '@angular/core';
import { User23 } from '../../models/user23';
import * as i0 from "@angular/core";
export declare class MyProfileCheckOutComponent implements OnInit {
    userService: UsersService;
    displayError: boolean;
    user: User23;
    constructor(userService: UsersService);
    updateUser(): void;
    parseJwt(token: any): any;
    logout(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyProfileCheckOutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyProfileCheckOutComponent, "eshop-frontend-checkout-my-profile", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=my-profile-checkout.component.d.ts.map