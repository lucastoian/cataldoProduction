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
                    LoginComponent
                ],
                //declarations: [LoginComponent],
                providers: [UsersFacade],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UsersModule, { declarations: [LoginComponent], imports: [CommonModule,
        //  RouterModule.forChild(routes),
        InputTextModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule, i1.StoreFeatureModule, i2.EffectsFeatureModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3VzZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sS0FBSyxTQUFTLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUVuRCx3RUFBd0U7QUFrQnhFLE1BQU0sT0FBTyxXQUFXOztzRUFBWCxXQUFXOzZEQUFYLFdBQVc7a0VBRlgsQ0FBQyxXQUFXLENBQUMsWUFkZjtZQUNQLFlBQVk7WUFDZCxrQ0FBa0M7WUFDaEMsZUFBZTtZQUNmLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDdEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pDO3VGQU9VLFdBQVc7Y0FqQnZCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDZCxrQ0FBa0M7b0JBQ2hDLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQztvQkFDdEUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN6QztnQkFDRCxZQUFZLEVBQUU7b0JBQ1osY0FBYztpQkFDZjtnQkFDRCxpQ0FBaUM7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUN6Qjs7d0ZBQ1ksV0FBVyxtQkFMcEIsY0FBYyxhQVZkLFlBQVk7UUFDZCxrQ0FBa0M7UUFDaEMsZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dHRleHQnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgKiBhcyBmcm9tVXNlcnMgZnJvbSAnLi9zdGF0ZS91c2Vycy5yZWR1Y2VyJztcclxuaW1wb3J0IHsgVXNlcnNFZmZlY3RzIH0gZnJvbSAnLi9zdGF0ZS91c2Vycy5lZmZlY3RzJztcclxuaW1wb3J0IHsgVXNlcnNGYWNhZGUgfSBmcm9tICcuL3N0YXRlL3VzZXJzLmZhY2FkZSc7XHJcblxyXG4vL2NvbnN0IHJvdXRlczogUm91dGVzID0gW3sgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9XTtcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgLy8gIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxyXG4gICAgSW5wdXRUZXh0TW9kdWxlLFxyXG4gICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShmcm9tVXNlcnMuVVNFUlNfRkVBVFVSRV9LRVksIGZyb21Vc2Vycy5yZWR1Y2VyKSxcclxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbVXNlcnNFZmZlY3RzXSksXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExvZ2luQ29tcG9uZW50XHJcbiAgXSxcclxuICAvL2RlY2xhcmF0aW9uczogW0xvZ2luQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtVc2Vyc0ZhY2FkZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc01vZHVsZSB7fVxyXG4iXX0=