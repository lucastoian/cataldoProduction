import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { LocalstorageService } from '../services/localstorage.service';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import * as i0 from "@angular/core";
export declare class RegisterComponentComponent implements OnInit {
    private formBuilder;
    private authService;
    private localstorageService;
    private router;
    private messageService;
    private location;
    loginFormGroup: FormGroup;
    isSubmitted: boolean;
    authError: boolean;
    loading: boolean;
    authMessage: string;
    user: User;
    constructor(formBuilder: FormBuilder, authService: AuthService, localstorageService: LocalstorageService, router: Router, messageService: MessageService, location: Location);
    ngOnInit(): void;
    handleCredentialResponse(response: any): Promise<void>;
    private _initLoginForm;
    onSubmit(): void;
    goToLogin(): void;
    get loginForm(): {
        [key: string]: import("@angular/forms").AbstractControl<any, any>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<RegisterComponentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RegisterComponentComponent, "eshop-frontend-register-component", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=register-component.component.d.ts.map