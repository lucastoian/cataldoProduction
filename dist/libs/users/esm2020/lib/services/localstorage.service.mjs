import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const TOKEN = 'jwtToken';
export class LocalstorageService {
    setToken(data) {
        localStorage.setItem(TOKEN, data);
    }
    getToken() {
        return localStorage.getItem(TOKEN);
    }
    removeToken() {
        localStorage.removeItem(TOKEN);
    }
    isValidToken() {
        const token = this.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            return !this._tokenExpired(tokenDecode.exp);
        }
        else {
            return false;
        }
    }
    getUserIdFromToken() {
        const token = this.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (tokenDecode) {
                return tokenDecode.userId;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
}
LocalstorageService.ɵfac = function LocalstorageService_Factory(t) { return new (t || LocalstorageService)(); };
LocalstorageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocalstorageService, factory: LocalstorageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalstorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VzZXJzL3NyYy9saWIvc2VydmljZXMvbG9jYWxzdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDO0FBTXpCLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsUUFBUSxDQUFDLElBQVk7UUFDbkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdELFFBQVE7UUFDTixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFdBQVc7UUFDVCxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxZQUFZO1FBQ1YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBRTdCLElBQUcsS0FBSyxFQUFDO1lBQ1AsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQzVDO2FBQUk7WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBRUgsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDOUIsSUFBRyxLQUFLLEVBQUM7WUFDUixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDM0I7aUJBQUk7Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO2FBQUs7WUFDSixPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0QsQ0FBQztJQUVPLGFBQWEsQ0FBQyxVQUFVO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQztJQUMvRCxDQUFDOztzRkEzQ1UsbUJBQW1CO3lFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNO3VGQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuY29uc3QgVE9LRU4gPSAnand0VG9rZW4nO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvY2Fsc3RvcmFnZVNlcnZpY2Uge1xuXG4gIHNldFRva2VuKGRhdGE6IHN0cmluZykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRPS0VOLCBkYXRhKTtcbiAgfVxuXG4gIFxuICBnZXRUb2tlbigpOiBzdHJpbmd7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRPS0VOKTtcbiAgfVxuXG4gIHJlbW92ZVRva2VuKCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFRPS0VOKTtcbiAgfVxuXG4gIGlzVmFsaWRUb2tlbigpe1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRUb2tlbigpXG5cbiAgICBpZih0b2tlbil7XG4gICAgICBjb25zdCB0b2tlbkRlY29kZSA9IEpTT04ucGFyc2UoYXRvYih0b2tlbi5zcGxpdCgnLicpWzFdKSk7XG4gICAgICByZXR1cm4gIXRoaXMuX3Rva2VuRXhwaXJlZCh0b2tlbkRlY29kZS5leHApXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBnZXRVc2VySWRGcm9tVG9rZW4oKXtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oKVxuICAgaWYodG9rZW4pe1xuICAgIGNvbnN0IHRva2VuRGVjb2RlID0gSlNPTi5wYXJzZShhdG9iKHRva2VuLnNwbGl0KCcuJylbMV0pKTtcbiAgICBpZiAodG9rZW5EZWNvZGUpIHtcbiAgICAgIHJldHVybiB0b2tlbkRlY29kZS51c2VySWQ7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gZWxzZXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB9XG4gIFxuICBwcml2YXRlIF90b2tlbkV4cGlyZWQoZXhwaXJhdGlvbik6IGJvb2xlYW57XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKSA+PSBleHBpcmF0aW9uO1xuICB9XG5cbn1cbiAiXX0=