import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/orders.service";
export class PaypalComponent {
    constructor(orderService) {
        this.orderService = orderService;
    }
    ngOnInit() {
        this.data = this.parseJwt(sessionStorage.getItem("authToken"));
        this.user.country = this.data.country;
        this.user.address1 = this.data['address1'];
        this.user.address2 = this.data.address2;
        this.user.date = this.data.dateOfBirth;
        this.user.email = this.data.email;
        this.user.phone = this.data.phone;
        this.user.postalCode = this.data.postalCode;
        this.user.sex = this.data.gender;
        this.user.fName = this.data.fName;
        this.user.lName = this.data.lName;
        this.user.region = this.data.region;
        this.user.city = this.data.city;
        this.user.state = this.data.state;
        this.user.prefix = this.data.prefix;
        this.createNewOrder(this.order, this.user.email, this.user.prefix).subscribe((data) => {
            console.log(data);
            // window.location.href = data.redirect
        });
    }
    createNewOrder(order, email, prefix) {
        console.log("uso questo prefisso: " + prefix);
        return this.http.post(`https://cataldoproduction.herokuapp.com/api/v1/orders/createNewOrder`, { order, email, prefix });
    }
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    ;
}
PaypalComponent.ɵfac = function PaypalComponent_Factory(t) { return new (t || PaypalComponent)(i0.ɵɵdirectiveInject(i1.OrdersService)); };
PaypalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaypalComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function PaypalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "La transazione \u00E8 andata a buon fine\nSto Generando l'ordine...");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaypalComponent, [{
        type: Component,
        args: [{ template: "La transazione \u00E8 andata a buon fine\nSto Generando l'ordine..." }]
    }], function () { return [{ type: i1.OrdersService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvb3JkZXJzL3NyYy9saWIvcGF5cGFsL3BheXBhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL29yZGVycy9zcmMvbGliL3BheXBhbC9wYXlwYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNMLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQVMzRCxNQUFNLE9BQU8sZUFBZTtJQU8xQixZQUFvQixZQUEyQjtRQUEzQixpQkFBWSxHQUFaLFlBQVksQ0FBZTtJQUFFLENBQUM7SUFFbEQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUdyQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtZQUNuRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLHVDQUF1QztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVULENBQUM7SUFJRCxjQUFjLENBQUMsS0FBWSxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBUSxzRUFBc0UsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUMvSCxDQUFDO0lBRUQsUUFBUSxDQUFFLEtBQUs7UUFDYixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0QsSUFBSSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVMsQ0FBQztZQUM3RSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFBQSxDQUFDOzs4RUFsRFcsZUFBZTtrRUFBZixlQUFlO1FDakI1QixtRkFDeUI7O3VGRGdCWixlQUFlO2NBSDNCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwWGhyQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgIFVzZXIgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvdXNlcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi9tb2RlbHMvb3JkZXInO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlJztcblxuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuL3BheXBhbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBheXBhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaHR0cDogSHR0cENsaWVudDtcbiAgdXNlcjogVXNlcjtcbiAgZGF0YTtcbiAgb3JkZXIgOiBPcmRlclxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3JkZXJTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlKXt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0gIHRoaXMucGFyc2VKd3Qoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKSk7XG4gICAgdGhpcy51c2VyLmNvdW50cnk9ICAgICAgdGhpcy5kYXRhLmNvdW50cnk7XG4gICAgdGhpcy51c2VyLmFkZHJlc3MxPSAgICAgdGhpcy5kYXRhWydhZGRyZXNzMSddO1xuICAgIHRoaXMudXNlci5hZGRyZXNzMj0gICAgIHRoaXMuZGF0YS5hZGRyZXNzMjtcbiAgICB0aGlzLnVzZXIuZGF0ZT0gICAgICAgICB0aGlzLmRhdGEuZGF0ZU9mQmlydGg7XG4gICAgdGhpcy51c2VyLmVtYWlsPSAgICAgICAgdGhpcy5kYXRhLmVtYWlsO1xuICAgIHRoaXMudXNlci5waG9uZT0gICAgICAgIHRoaXMuZGF0YS5waG9uZTtcbiAgICB0aGlzLnVzZXIucG9zdGFsQ29kZT0gICB0aGlzLmRhdGEucG9zdGFsQ29kZTtcbiAgICB0aGlzLnVzZXIuc2V4PSAgICAgICAgICB0aGlzLmRhdGEuZ2VuZGVyO1xuICAgIHRoaXMudXNlci5mTmFtZSA9ICAgICAgIHRoaXMuZGF0YS5mTmFtZTtcbiAgICB0aGlzLnVzZXIubE5hbWUgPSAgICAgICB0aGlzLmRhdGEubE5hbWU7XG4gICAgdGhpcy51c2VyLnJlZ2lvbiA9ICAgICAgdGhpcy5kYXRhLnJlZ2lvbjtcbiAgICB0aGlzLnVzZXIuY2l0eSA9ICAgICAgICB0aGlzLmRhdGEuY2l0eTtcbiAgICB0aGlzLnVzZXIuc3RhdGUgPSAgICAgICB0aGlzLmRhdGEuc3RhdGU7XG4gICAgdGhpcy51c2VyLnByZWZpeCA9ICAgICAgdGhpcy5kYXRhLnByZWZpeDtcblxuICAgXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3T3JkZXIodGhpcy5vcmRlciwgdGhpcy51c2VyLmVtYWlsLCB0aGlzLnVzZXIucHJlZml4KS5zdWJzY3JpYmUoKGRhdGEpPT57XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEucmVkaXJlY3RcbiAgICAgICAgfSk7XG4gICAgICBcbiAgfVxuXG5cblxuICBjcmVhdGVOZXdPcmRlcihvcmRlcjogT3JkZXIsIGVtYWlsOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZyhcInVzbyBxdWVzdG8gcHJlZmlzc286IFwiICsgcHJlZml4KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxPcmRlcj4oYGh0dHBzOi8vY2F0YWxkb3Byb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3JkZXJzL2NyZWF0ZU5ld09yZGVyYCwge29yZGVyLCBlbWFpbCwgcHJlZml4fSk7XG4gIH1cblxuICBwYXJzZUp3dCAodG9rZW4pIHtcbiAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5hdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9KS5qb2luKCcnKSk7XG5cbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XG59O1xuIFxufSIsIkxhIHRyYW5zYXppb25lIMOoIGFuZGF0YSBhIGJ1b24gZmluZVxuU3RvIEdlbmVyYW5kbyBsJ29yZGluZS4uLiJdfQ==