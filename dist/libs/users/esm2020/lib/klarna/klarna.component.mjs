import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class KlarnaComponent {
    constructor(http) {
        this.http = http;
        this.apiURLOrders = 'cataldoproduction.herokuapp.com/api/v1/orders';
    }
    ngAfterViewInit() {
        this.initStripeElements();
    }
    async initStripeElements() {
        KlarnaComponent.stripe = await loadStripe('pk_test_51LYUCGDEyiX3e3Pl89jqmVg1gTN2QhifywtIlg6Az1niGUV3ANRpANXJ8hdEIjwDNa8GTBvnrxq3zgdR8gEzxgRT00uHlftQnF', null);
    }
    ngOnInit() {
        this.initStripeElements();
    }
    printHello() {
        console.log("hello");
    }
    static pollForSourceStatus(stripe, SOURCE_ID, CLIENT_SECRET, MAX_POLL_COUNT, pollCount, amount) {
        console.log("è stata chiamata poll for source status");
        stripe.retrieveSource({ id: SOURCE_ID, client_secret: CLIENT_SECRET }).then(function (result) {
            var source = result.source;
            if (source.status === 'chargeable') {
                // Make a request to your server to charge the Source.
                // Depending on the Charge status, show your customer the relevant message
                //qui va creato il nuovo ordine                                                     
                KlarnaComponent.klarnaPayment(SOURCE_ID, amount);
                console.log("chargable");
                this.ordersService.createNewOrder(JSON.parse(localStorage.getItem("order")), this.user.email, this.user.prefix).subscribe((data) => {
                    console.log("I am creating this new order: " + JSON.stringify(data));
                    console.log("data: " + data);
                    document.getElementById("exampleModalLabel").innerText = "Your order number is: " + data._id;
                    //  sessionStorage.setItem()
                    localStorage.removeItem("cartByLuca");
                    this.cartService.getCart();
                    this.cart.emptyCart();
                    this.router.navigate(['/orders/' + data._id]);
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Succes',
                        detail: `Succesful transaction!`
                    });
                });
            }
            else if (source.status === 'pending' && pollCount < MAX_POLL_COUNT) {
                // Try again in a second, if the Source is still `pending`:
                // KlarnaComponent.klarnaPayment(SOURCE_ID, amount);
                console.log("pending");
                pollCount += 1;
                setTimeout(() => KlarnaComponent.pollForSourceStatus(stripe, SOURCE_ID, CLIENT_SECRET, MAX_POLL_COUNT, pollCount, amount), 1000);
            }
            else {
                // Depending on the Source status, show your customer the relevant message.
            }
        });
    }
    async pay(amount) {
        console.log("stai cercando di pagare : " + amount);
        await this.initStripeElements();
        KlarnaComponent.stripe.createSource({
            type: 'klarna',
            flow: 'redirect',
            redirect: {
                return_url: "https://cataldoproduction.herokuapp.com/#/klarnapayment"
            },
            amount: amount * 100,
            currency: 'eur',
            klarna: { product: 'payment', purchase_country: 'IT' },
            source_order: {
                items: [{
                        type: 'sku',
                        description: 'Articoli cataldo store',
                        quantity: 1,
                        currency: 'eur',
                        amount: amount * 100
                    },
                    {
                        type: 'tax',
                        description: 'Taxes',
                        currency: 'eur',
                        amount: 0
                    },
                    {
                        type: 'shipping',
                        description: 'Free Shipping',
                        currency: 'eur',
                        amount: 0,
                    }]
            }
        }).then(function (result) {
            console.log("result = " + JSON.stringify(result));
            localStorage.setItem("clientId", result.source.id);
            localStorage.setItem("SOURCE_ID", result.source.id);
            localStorage.setItem("CLIENT_SECRET", result.source.client_secret);
            localStorage.setItem("amount", amount.toString());
            setTimeout(() => {
                window.open(result.source.klarna.pay_later_redirect_url, '_blank');
            }, 150);
        }, err => { console.log(err); });
    }
    static async klarnaPayment(sourceId, amount) {
        const url = 'https://cataldoproduction.herokuapp.com/api/v1/' + "charge-source";
        console.log("sto cercando di chiamare il server su questo url : " + url);
        try {
            // 👇️ const response: Response
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    sourceId: sourceId,
                    amount: amount,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
        }
        catch (error) {
            console.log('error message: ', error.message);
        }
    }
    createNewOrder(order, email, prefix) {
        console.log("uso questo prefisso: " + prefix);
        return this.http.post(`${this.apiURLOrders}/createNewOrder`, { order, email, prefix });
    }
}
KlarnaComponent.http = new HttpClient(new HttpXhrBackend({
    build: () => new XMLHttpRequest()
}));
KlarnaComponent.ɵfac = function KlarnaComponent_Factory(t) { return new (t || KlarnaComponent)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
KlarnaComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: KlarnaComponent, selectors: [["eshop-frontend-klarna"]], features: [i0.ɵɵProvidersFeature([HttpClient])], decls: 2, vars: 0, template: function KlarnaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "klarna works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KlarnaComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-klarna', providers: [HttpClient], template: "<p>klarna works!</p>\n", styles: [""] }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xhcm5hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQTJCLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFjM0YsTUFBTSxPQUFPLGVBQWU7SUFzQjFCLFlBQXFCLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFuQnJDLGlCQUFZLEdBQUcsK0NBQStDLENBQUE7SUFzQjlELENBQUM7SUFYRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0I7UUFDeEIsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyw2R0FBNkcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvSixDQUFDO0lBT0QsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQVUsRUFBRSxTQUFnQixFQUFFLGFBQW9CLEVBQUUsY0FBc0IsRUFBRSxTQUFnQixFQUFFLE1BQWE7UUFFcEksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFB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QWMsRUFBRTtDQUNwQyxDQUFDLENBQUMsQ0FBQzs4RUFWUyxlQUFlO2tFQUFmLGVBQWUsMkVBSmYsQ0FBQyxVQUFVLENBQUM7UUNiekIseUJBQUc7UUFBQSw2QkFBYTtRQUFBLGlCQUFJOzt1RkRpQlAsZUFBZTtjQVIzQixTQUFTOzJCQUNFLHVCQUF1QixhQUd0QixDQUFDLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFhockJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLWtsYXJuYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9rbGFybmEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9rbGFybmEuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbSHR0cENsaWVudF1cbiBcbn0pXG5cbmV4cG9ydCBjbGFzcyBLbGFybmFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgYXBpVVJMT3JkZXJzID0gJ2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vYXBpL3YxL29yZGVycydcblxuICBzdGF0aWMgc3RyaXBlOiBhbnk7XG4gICBjaGVja291dFNlcnZpY2UgOiBDaGVja291dFNlcnZpY2U7XG5cbiAgIHN0YXRpYyBodHRwID0gbmV3IEh0dHBDbGllbnQobmV3IEh0dHBYaHJCYWNrZW5kKHsgXG4gICAgYnVpbGQ6ICgpID0+IG5ldyBYTUxIdHRwUmVxdWVzdCgpIFxufSkpO1xuICBcblxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcbiAgfVxuICBcbiAgYXN5bmMgaW5pdFN0cmlwZUVsZW1lbnRzKCl7XG4gIEtsYXJuYUNvbXBvbmVudC5zdHJpcGUgPSBhd2FpdCBsb2FkU3RyaXBlKCdwa190ZXN0XzUxTFlVQ0dERXlpWDNlM1BsODlqcW1WZzFnVE4yUWhpZnl3dElsZzZBejFuaUdVVjNBTlJwQU5YSjhoZEVJandETmE4R1RCdm5yeHEzemdkUjhnRXp4Z1JUMDB1SGxmdFFuRicsIG51bGwpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCl7XG5cbiBcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCk7XG4gIH1cblxuICBwcmludEhlbGxvKCkgOiB2b2lke1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gIH1cblxuICBzdGF0aWMgcG9sbEZvclNvdXJjZVN0YXR1cyhzdHJpcGU6YW55LCBTT1VSQ0VfSUQ6c3RyaW5nLCBDTElFTlRfU0VDUkVUOnN0cmluZywgTUFYX1BPTExfQ09VTlQ6IG51bWJlciwgcG9sbENvdW50Om51bWJlciwgYW1vdW50Om51bWJlcikgOiB2b2lke1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiw6ggc3RhdGEgY2hpYW1hdGEgcG9sbCBmb3Igc291cmNlIHN0YXR1c1wiKTtcblxuICAgIHN0cmlwZS5yZXRyaWV2ZVNvdXJjZSh7aWQ6IFNPVVJDRV9JRCwgY2xpZW50X3NlY3JldDogQ0xJRU5UX1NFQ1JFVH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICB2YXIgc291cmNlID0gcmVzdWx0LnNvdXJjZTtcbiAgICAgIGlmIChzb3VyY2Uuc3RhdHVzID09PSAnY2hhcmdlYWJsZScpIHtcbiAgICAgICAgLy8gTWFrZSBhIHJlcXVlc3QgdG8geW91ciBzZXJ2ZXIgdG8gY2hhcmdlIHRoZSBTb3VyY2UuXG4gICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgQ2hhcmdlIHN0YXR1cywgc2hvdyB5b3VyIGN1c3RvbWVyIHRoZSByZWxldmFudCBtZXNzYWdlXG4gICAgICAgIC8vcXVpIHZhIGNyZWF0byBpbCBudW92byBvcmRpbmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIEtsYXJuYUNvbXBvbmVudC5rbGFybmFQYXltZW50KFNPVVJDRV9JRCwgYW1vdW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFyZ2FibGVcIik7XG5cbiAgICAgICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmNyZWF0ZU5ld09yZGVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSksIHRoaXMudXNlci5lbWFpbCwgdGhpcy51c2VyLnByZWZpeCkuc3Vic2NyaWJlKChkYXRhKSA9PntcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBjcmVhdGluZyB0aGlzIG5ldyBvcmRlcjogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiArIGRhdGEpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZU1vZGFsTGFiZWxcIikuaW5uZXJUZXh0PVwiWW91ciBvcmRlciBudW1iZXIgaXM6IFwiICsgZGF0YS5faWQ7XG5cbiAgICAgICAgLy8gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oKVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FydEJ5THVjYVwiKTtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRDYXJ0KCk7XG4gICAgICAgIHRoaXMuY2FydC5lbXB0eUNhcnQoKTtcblxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL29yZGVycy8nICsgZGF0YS5faWRdKTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2NlcycsXG4gICAgICAgICAgICBkZXRhaWw6IGBTdWNjZXNmdWwgdHJhbnNhY3Rpb24hYFxuICAgICAgICAgIH0pO1xuXG4gICAgICB9KVxuXG5cblxuXG4gICAgICB9IGVsc2UgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdwZW5kaW5nJyAmJiBwb2xsQ291bnQgPCBNQVhfUE9MTF9DT1VOVCkge1xuICAgICAgICAvLyBUcnkgYWdhaW4gaW4gYSBzZWNvbmQsIGlmIHRoZSBTb3VyY2UgaXMgc3RpbGwgYHBlbmRpbmdgOlxuICAgICAgIC8vIEtsYXJuYUNvbXBvbmVudC5rbGFybmFQYXltZW50KFNPVVJDRV9JRCwgYW1vdW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwZW5kaW5nXCIpO1xuICAgICAgICBwb2xsQ291bnQgKz0gMTtcbiAgICAgICBzZXRUaW1lb3V0KCgpPT5LbGFybmFDb21wb25lbnQucG9sbEZvclNvdXJjZVN0YXR1cyhzdHJpcGUsU09VUkNFX0lELENMSUVOVF9TRUNSRVQsTUFYX1BPTExfQ09VTlQsIHBvbGxDb3VudCwgYW1vdW50KSwgMTAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIFNvdXJjZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZS5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgYXN5bmMgcGF5KGFtb3VudDpudW1iZXIpe1xuXG5cbiAgICBjb25zb2xlLmxvZyhcInN0YWkgY2VyY2FuZG8gZGkgcGFnYXJlIDogXCIgKyBhbW91bnQpO1xuXG4gICAgYXdhaXQgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcbiAgICBLbGFybmFDb21wb25lbnQuc3RyaXBlLmNyZWF0ZVNvdXJjZSh7XG4gICAgdHlwZTogJ2tsYXJuYScsXG4gICAgZmxvdzogJ3JlZGlyZWN0JyxcbiAgICByZWRpcmVjdDoge1xuICAgIHJldHVybl91cmw6IFwiaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tLyMva2xhcm5hcGF5bWVudFwiXG4gICAgfSxcbiAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcbiAgICBjdXJyZW5jeTogJ2V1cicsXG4gICAga2xhcm5hOiB7IHByb2R1Y3Q6ICdwYXltZW50JywgcHVyY2hhc2VfY291bnRyeTogJ0lUJyB9LFxuICAgIHNvdXJjZV9vcmRlcjoge1xuICAgIGl0ZW1zOiBbe1xuICAgIHR5cGU6ICdza3UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQXJ0aWNvbGkgY2F0YWxkbyBzdG9yZScsXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGFtb3VudDogYW1vdW50ICogMTAwXG4gICAgfSxcbiAgICB7XG4gICAgdHlwZTogJ3RheCcsXG4gICAgZGVzY3JpcHRpb246ICdUYXhlcycsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGFtb3VudDogMFxuICAgIH0sXG4gICAge1xuICAgIHR5cGU6ICdzaGlwcGluZycsXG4gICAgZGVzY3JpcHRpb246ICdGcmVlIFNoaXBwaW5nJyxcbiAgICBjdXJyZW5jeTogJ2V1cicsXG4gICAgYW1vdW50OiAwLFxuICAgIH1dXG4gICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgPSBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICBcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2xpZW50SWRcIiwgcmVzdWx0LnNvdXJjZS5pZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlNPVVJDRV9JRFwiLCByZXN1bHQuc291cmNlLmlkKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ0xJRU5UX1NFQ1JFVFwiLCByZXN1bHQuc291cmNlLmNsaWVudF9zZWNyZXQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbW91bnRcIiwgYW1vdW50LnRvU3RyaW5nKCkpO1xuICAgICAgXG4gICAgICBcbiAgICBcblxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgXG4gICAgIHdpbmRvdy5vcGVuKHJlc3VsdC5zb3VyY2Uua2xhcm5hLnBheV9sYXRlcl9yZWRpcmVjdF91cmwsICdfYmxhbmsnKTsgXG4gICAgfSwgMTUwKTtcbiAgICBcbiAgICB9LCBlcnIgPT4geyBjb25zb2xlLmxvZyhlcnIpOyB9KTtcbiAgICBcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIGFzeW5jIGtsYXJuYVBheW1lbnQoc291cmNlSWQ6IGFueSwgYW1vdW50OiBudW1iZXIpe1xuXG5cbiAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vYXBpL3YxLycgKyBcImNoYXJnZS1zb3VyY2VcIlxuXG4gICAgICBjb25zb2xlLmxvZyhcInN0byBjZXJjYW5kbyBkaSBjaGlhbWFyZSBpbCBzZXJ2ZXIgc3UgcXVlc3RvIHVybCA6IFwiICsgdXJsKTtcbiAgXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIPCfkYfvuI8gY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc291cmNlSWQ6c291cmNlSWQsIFxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgXG4gICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgY3JlYXRlTmV3T3JkZXIob3JkZXI6IGFueSwgZW1haWw6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ1c28gcXVlc3RvIHByZWZpc3NvOiBcIiArIHByZWZpeCk7XG4gIFxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oYCR7dGhpcy5hcGlVUkxPcmRlcnN9L2NyZWF0ZU5ld09yZGVyYCwge29yZGVyLCBlbWFpbCwgcHJlZml4fSk7XG4gICAgfVxuICAgXG5cbn1cbiIsIjxwPmtsYXJuYSB3b3JrcyE8L3A+XG4iXX0=