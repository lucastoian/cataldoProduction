import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsers from './state/users.reducer';
import { UsersEffects } from './state/users.effects';
import { UsersFacade } from './state/users.facade';
import { RegisterComponentComponent } from './register-component/register-component.component';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "@ngrx/effects";
//const routes: Routes = [{ path: 'login', component: LoginComponent }];
export class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [UsersFacade], imports: [[
            CommonModule,
            //  RouterModule.forChild(routes),
            InputTextModule,
            ButtonModule,
            FormsModule,
            ReactiveFormsModule,
            StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
            EffectsModule.forFeature([UsersEffects]),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    //  RouterModule.forChild(routes),
                    InputTextModule,
                    ButtonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
                    EffectsModule.forFeature([UsersEffects]),
                ],
                declarations: [
                    LoginComponent,
                    RegisterComponentComponent
                ],
                //declarations: [LoginComponent],
                providers: [UsersFacade],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UsersModule, { declarations: [LoginComponent,
        RegisterComponentComponent], imports: [CommonModule,
        //  RouterModule.forChild(routes),
        InputTextModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule, i1.StoreFeatureModule, i2.EffectsFeatureModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3VzZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sS0FBSyxTQUFTLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7OztBQUUvRix3RUFBd0U7QUFtQnhFLE1BQU0sT0FBTyxXQUFXOztzRUFBWCxXQUFXOzZEQUFYLFdBQVc7a0VBRlgsQ0FBQyxXQUFXLENBQUMsWUFmZjtZQUNQLFlBQVk7WUFDZCxrQ0FBa0M7WUFDaEMsZUFBZTtZQUNmLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDdEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pDO3VGQVFVLFdBQVc7Y0FsQnZCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDZCxrQ0FBa0M7b0JBQ2hDLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQztvQkFDdEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN6QztnQkFDRCxZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCwwQkFBMEI7aUJBQzNCO2dCQUNELGlDQUFpQztnQkFDakMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzt3RkFDWSxXQUFXLG1CQU5wQixjQUFjO1FBQ2QsMEJBQTBCLGFBWDFCLFlBQVk7UUFDZCxrQ0FBa0M7UUFDaEMsZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0ICogYXMgZnJvbVVzZXJzIGZyb20gJy4vc3RhdGUvdXNlcnMucmVkdWNlcic7XHJcbmltcG9ydCB7IFVzZXJzRWZmZWN0cyB9IGZyb20gJy4vc3RhdGUvdXNlcnMuZWZmZWN0cyc7XHJcbmltcG9ydCB7IFVzZXJzRmFjYWRlIH0gZnJvbSAnLi9zdGF0ZS91c2Vycy5mYWNhZGUnO1xyXG5cclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdGVyLWNvbXBvbmVudC9yZWdpc3Rlci1jb21wb25lbnQuY29tcG9uZW50JztcclxuXHJcbi8vY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH1dO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAvLyAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXHJcbiAgICBJbnB1dFRleHRNb2R1bGUsXHJcbiAgICBCdXR0b25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKGZyb21Vc2Vycy5VU0VSU19GRUFUVVJFX0tFWSwgZnJvbVVzZXJzLnJlZHVjZXIpLFxyXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtVc2Vyc0VmZmVjdHNdKSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTG9naW5Db21wb25lbnQsXHJcbiAgICBSZWdpc3RlckNvbXBvbmVudENvbXBvbmVudFxyXG4gIF0sXHJcbiAgLy9kZWNsYXJhdGlvbnM6IFtMb2dpbkNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbVXNlcnNGYWNhZGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlcnNNb2R1bGUge31cclxuIl19