import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LocalstorageService } from '../../services/localstorage.service';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit {
    private formBuilder;
    private auth;
    private localstorageService;
    private location;
    private messageService;
    loginFormGroup: FormGroup;
    isSubmitted: boolean;
    authError: boolean;
    loading: boolean;
    authMessage: string;
    constructor(formBuilder: FormBuilder, auth: AuthService, localstorageService: LocalstorageService, location: Location, messageService: MessageService);
    ngOnInit(): void;
    handleCredentialResponse(response: any): Promise<void>;
    private _initLoginForm;
    onSubmit(): void;
    registerWithGoogle(): void;
    get loginForm(): {
        [key: string]: import("@angular/forms").AbstractControl<any, any>;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "users-login", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=login.component.d.ts.map