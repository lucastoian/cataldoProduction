import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalstorageService } from '../../services/localstorage.service';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit {
    private formBuilder;
    private auth;
    private localstorageService;
    private router;
    loginFormGroup: FormGroup;
    isSubmitted: boolean;
    authError: boolean;
    authMessage: string;
    constructor(formBuilder: FormBuilder, auth: AuthService, localstorageService: LocalstorageService, router: Router);
    ngOnInit(): void;
    private _initLoginForm;
    onSubmit(): void;
    get loginForm(): {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "users-login", never, {}, {}, never, never>;
}
//# sourceMappingURL=login.component.d.ts.map