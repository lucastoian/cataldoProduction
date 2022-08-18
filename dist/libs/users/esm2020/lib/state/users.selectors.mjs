import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USERS_FEATURE_KEY } from './users.reducer';
// Lookup the 'Users' feature state managed by NgRx
export const getUsersState = createFeatureSelector(USERS_FEATURE_KEY);
export const getUser = createSelector(getUsersState, (state) => state.user);
export const getUserIsAuth = createSelector(getUsersState, (state) => state.isAuthenticated);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3N0YXRlL3VzZXJzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBaUMsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRixtREFBbUQ7QUFDbkQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLHFCQUFxQixDQUNoRCxpQkFBaUIsQ0FDbEIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFNUUsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFVTRVJTX0ZFQVRVUkVfS0VZLCBVc2Vyc1BhcnRpYWxTdGF0ZSwgVXNlcnNTdGF0ZSB9IGZyb20gJy4vdXNlcnMucmVkdWNlcic7XHJcblxyXG4vLyBMb29rdXAgdGhlICdVc2VycycgZmVhdHVyZSBzdGF0ZSBtYW5hZ2VkIGJ5IE5nUnhcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJzU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8VXNlcnNQYXJ0aWFsU3RhdGUsIFVzZXJzU3RhdGU+KFxyXG4gIFVTRVJTX0ZFQVRVUkVfS0VZXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGNyZWF0ZVNlbGVjdG9yKGdldFVzZXJzU3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlcklzQXV0aCA9IGNyZWF0ZVNlbGVjdG9yKGdldFVzZXJzU3RhdGUsIChzdGF0ZSkgPT4gc3RhdGUuaXNBdXRoZW50aWNhdGVkKTtcclxuXHJcbiJdfQ==