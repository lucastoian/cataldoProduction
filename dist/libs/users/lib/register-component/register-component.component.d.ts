import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';
import { Title } from "@angular/platform-browser";
import * as i0 from "@angular/core";
export declare class RegisterComponentComponent implements OnInit {
    private formBuilder;
    private authService;
    private titleService;
    private router;
    private location;
    loginFormGroup: FormGroup;
    isSubmitted: boolean;
    authError: boolean;
    loading: boolean;
    authMessage: string;
    user: User;
    constructor(formBuilder: FormBuilder, authService: AuthService, titleService: Title, router: Router, location: Location);
    ngOnInit(): void;
    private _initLoginForm;
    onSubmit(): void;
    goToLogin(): void;
    get loginForm(): {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<RegisterComponentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RegisterComponentComponent, "eshop-frontend-register-component", never, {}, {}, never, never>;
}
//# sourceMappingURL=register-component.component.d.ts.map