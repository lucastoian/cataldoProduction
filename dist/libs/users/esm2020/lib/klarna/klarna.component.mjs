import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import * as i0 from "@angular/core";
export class KlarnaComponent {
    constructor() {
        this.apiURLOrders = 'cataldoproduction.herokuapp.com/api/v1/orders';
        this.httpClient = new HttpClient(new HttpXhrBackend({
            build: () => new XMLHttpRequest()
        }));
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
                this.createNewOrder(JSON.parse(localStorage.getItem("order")), this.user.email, this.user.prefix).subscribe((data) => {
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
                return_url: "https://www.cataldostore.it/#/klarnapayment"
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
        return this.httpClient.post(`${this.apiURLOrders}/createNewOrder`, { order, email, prefix });
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
KlarnaComponent.ɵfac = function KlarnaComponent_Factory(t) { return new (t || KlarnaComponent)(); };
KlarnaComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: KlarnaComponent, selectors: [["eshop-frontend-klarna"]], decls: 2, vars: 0, template: function KlarnaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "klarna works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KlarnaComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-klarna', template: "<p>klarna works!</p>\n", styles: [""] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xhcm5hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBYWxFLE1BQU0sT0FBTyxlQUFlO0lBcUIxQjtRQWxCQSxpQkFBWSxHQUFHLCtDQUErQyxDQUFBO1FBbUI1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksY0FBYyxDQUFDO1lBQ2xELEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLGNBQWMsRUFBRTtTQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFiRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0I7UUFDeEIsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyw2R0FBNkcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvSixDQUFDO0lBU0QsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQVUsRUFBRSxTQUFnQixFQUFFLGFBQW9CLEVBQUUsY0FBc0IsRUFBRSxTQUFnQixF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S0FBSztRQUNiLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RCxJQUFJLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBUyxDQUFDO1lBQzdFLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUFBLENBQUM7OzhFQWhNUyxlQUFlO2tFQUFmLGVBQWU7UUNsQjVCLHlCQUFHO1FBQUEsNkJBQWE7UUFBQSxpQkFBSTs7dUZEa0JQLGVBQWU7Y0FSM0IsU0FBUzsyQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwWGhyQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQta2xhcm5hJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2tsYXJuYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2tsYXJuYS5jb21wb25lbnQuc2NzcyddLFxuXG4gXG59KVxuXG5leHBvcnQgY2xhc3MgS2xhcm5hQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIGFwaVVSTE9yZGVycyA9ICdjYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tL2FwaS92MS9vcmRlcnMnXG5cbiAgc3RhdGljIHN0cmlwZTogYW55O1xuICBodHRwQ2xpZW50Okh0dHBDbGllbnQ7XG4gICBjaGVja291dFNlcnZpY2UgOiBDaGVja291dFNlcnZpY2U7XG5cblxuICBcblxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcbiAgfVxuICBcbiAgYXN5bmMgaW5pdFN0cmlwZUVsZW1lbnRzKCl7XG4gIEtsYXJuYUNvbXBvbmVudC5zdHJpcGUgPSBhd2FpdCBsb2FkU3RyaXBlKCdwa190ZXN0XzUxTFlVQ0dERXlpWDNlM1BsODlqcW1WZzFnVE4yUWhpZnl3dElsZzZBejFuaUdVVjNBTlJwQU5YSjhoZEVJandETmE4R1RCdm5yeHEzemdkUjhnRXp4Z1JUMDB1SGxmdFFuRicsIG51bGwpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudChuZXcgSHR0cFhockJhY2tlbmQoeyBcbiAgICAgIGJ1aWxkOiAoKSA9PiBuZXcgWE1MSHR0cFJlcXVlc3QoKSBcbiAgfSkpO1xuIFxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcbiAgfVxuXG4gIHByaW50SGVsbG8oKSA6IHZvaWR7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgfVxuXG4gIHN0YXRpYyBwb2xsRm9yU291cmNlU3RhdHVzKHN0cmlwZTphbnksIFNPVVJDRV9JRDpzdHJpbmcsIENMSUVOVF9TRUNSRVQ6c3RyaW5nLCBNQVhfUE9MTF9DT1VOVDogbnVtYmVyLCBwb2xsQ291bnQ6bnVtYmVyLCBhbW91bnQ6bnVtYmVyKSA6IHZvaWR7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCLDqCBzdGF0YSBjaGlhbWF0YSBwb2xsIGZvciBzb3VyY2Ugc3RhdHVzXCIpO1xuXG4gICAgc3RyaXBlLnJldHJpZXZlU291cmNlKHtpZDogU09VUkNFX0lELCBjbGllbnRfc2VjcmV0OiBDTElFTlRfU0VDUkVUfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIHZhciBzb3VyY2UgPSByZXN1bHQuc291cmNlO1xuICAgICAgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdjaGFyZ2VhYmxlJykge1xuICAgICAgICAvLyBNYWtlIGEgcmVxdWVzdCB0byB5b3VyIHNlcnZlciB0byBjaGFyZ2UgdGhlIFNvdXJjZS5cbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBDaGFyZ2Ugc3RhdHVzLCBzaG93IHlvdXIgY3VzdG9tZXIgdGhlIHJlbGV2YW50IG1lc3NhZ2VcbiAgICAgICAgLy9xdWkgdmEgY3JlYXRvIGlsIG51b3ZvIG9yZGluZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgS2xhcm5hQ29tcG9uZW50LmtsYXJuYVBheW1lbnQoU09VUkNFX0lELCBhbW91bnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJnYWJsZVwiKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZU5ld09yZGVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSksIHRoaXMudXNlci5lbWFpbCwgdGhpcy51c2VyLnByZWZpeCkuc3Vic2NyaWJlKChkYXRhKSA9PntcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBjcmVhdGluZyB0aGlzIG5ldyBvcmRlcjogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiArIGRhdGEpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZU1vZGFsTGFiZWxcIikuaW5uZXJUZXh0PVwiWW91ciBvcmRlciBudW1iZXIgaXM6IFwiICsgZGF0YS5faWQ7XG5cbiAgICAgICAgLy8gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oKVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FydEJ5THVjYVwiKTtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRDYXJ0KCk7XG4gICAgICAgIHRoaXMuY2FydC5lbXB0eUNhcnQoKTtcblxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL29yZGVycy8nICsgZGF0YS5faWRdKTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICAgICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgc3VtbWFyeTogJ1N1Y2NlcycsXG4gICAgICAgICAgICBkZXRhaWw6IGBTdWNjZXNmdWwgdHJhbnNhY3Rpb24hYFxuICAgICAgICAgIH0pO1xuXG4gICAgICB9KVxuXG5cblxuXG4gICAgICB9IGVsc2UgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdwZW5kaW5nJyAmJiBwb2xsQ291bnQgPCBNQVhfUE9MTF9DT1VOVCkge1xuICAgICAgICAvLyBUcnkgYWdhaW4gaW4gYSBzZWNvbmQsIGlmIHRoZSBTb3VyY2UgaXMgc3RpbGwgYHBlbmRpbmdgOlxuICAgICAgIC8vIEtsYXJuYUNvbXBvbmVudC5rbGFybmFQYXltZW50KFNPVVJDRV9JRCwgYW1vdW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwZW5kaW5nXCIpO1xuICAgICAgICBwb2xsQ291bnQgKz0gMTtcbiAgICAgICBzZXRUaW1lb3V0KCgpPT5LbGFybmFDb21wb25lbnQucG9sbEZvclNvdXJjZVN0YXR1cyhzdHJpcGUsU09VUkNFX0lELENMSUVOVF9TRUNSRVQsTUFYX1BPTExfQ09VTlQsIHBvbGxDb3VudCwgYW1vdW50KSwgMTAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIFNvdXJjZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZS5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgYXN5bmMgcGF5KGFtb3VudDpudW1iZXIpe1xuXG5cbiAgICBjb25zb2xlLmxvZyhcInN0YWkgY2VyY2FuZG8gZGkgcGFnYXJlIDogXCIgKyBhbW91bnQpO1xuXG4gICAgYXdhaXQgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcbiAgICBLbGFybmFDb21wb25lbnQuc3RyaXBlLmNyZWF0ZVNvdXJjZSh7XG4gICAgdHlwZTogJ2tsYXJuYScsXG4gICAgZmxvdzogJ3JlZGlyZWN0JyxcbiAgICByZWRpcmVjdDoge1xuICAgIHJldHVybl91cmw6IFwiaHR0cHM6Ly93d3cuY2F0YWxkb3N0b3JlLml0LyMva2xhcm5hcGF5bWVudFwiXG4gICAgfSxcbiAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcbiAgICBjdXJyZW5jeTogJ2V1cicsXG4gICAga2xhcm5hOiB7IHByb2R1Y3Q6ICdwYXltZW50JywgcHVyY2hhc2VfY291bnRyeTogJ0lUJyB9LFxuICAgIHNvdXJjZV9vcmRlcjoge1xuICAgIGl0ZW1zOiBbe1xuICAgIHR5cGU6ICdza3UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQXJ0aWNvbGkgY2F0YWxkbyBzdG9yZScsXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGFtb3VudDogYW1vdW50ICogMTAwXG4gICAgfSxcbiAgICB7XG4gICAgdHlwZTogJ3RheCcsXG4gICAgZGVzY3JpcHRpb246ICdUYXhlcycsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGFtb3VudDogMFxuICAgIH0sXG4gICAge1xuICAgIHR5cGU6ICdzaGlwcGluZycsXG4gICAgZGVzY3JpcHRpb246ICdGcmVlIFNoaXBwaW5nJyxcbiAgICBjdXJyZW5jeTogJ2V1cicsXG4gICAgYW1vdW50OiAwLFxuICAgIH1dXG4gICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgPSBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICBcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2xpZW50SWRcIiwgcmVzdWx0LnNvdXJjZS5pZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlNPVVJDRV9JRFwiLCByZXN1bHQuc291cmNlLmlkKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ0xJRU5UX1NFQ1JFVFwiLCByZXN1bHQuc291cmNlLmNsaWVudF9zZWNyZXQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbW91bnRcIiwgYW1vdW50LnRvU3RyaW5nKCkpO1xuICAgICAgXG4gICAgICBcbiAgICBcblxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgXG4gICAgIHdpbmRvdy5vcGVuKHJlc3VsdC5zb3VyY2Uua2xhcm5hLnBheV9sYXRlcl9yZWRpcmVjdF91cmwsICdfYmxhbmsnKTsgXG4gICAgfSwgMTUwKTtcbiAgICBcbiAgICB9LCBlcnIgPT4geyBjb25zb2xlLmxvZyhlcnIpOyB9KTtcbiAgICBcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIGFzeW5jIGtsYXJuYVBheW1lbnQoc291cmNlSWQ6IGFueSwgYW1vdW50OiBudW1iZXIpe1xuXG5cbiAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vYXBpL3YxLycgKyBcImNoYXJnZS1zb3VyY2VcIlxuXG4gICAgICBjb25zb2xlLmxvZyhcInN0byBjZXJjYW5kbyBkaSBjaGlhbWFyZSBpbCBzZXJ2ZXIgc3UgcXVlc3RvIHVybCA6IFwiICsgdXJsKTtcbiAgXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIPCfkYfvuI8gY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc291cmNlSWQ6c291cmNlSWQsIFxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgXG4gICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgY3JlYXRlTmV3T3JkZXIob3JkZXI6IGFueSwgZW1haWw6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ1c28gcXVlc3RvIHByZWZpc3NvOiBcIiArIHByZWZpeCk7XG5cblxuICBcbiAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxhbnk+KGAke3RoaXMuYXBpVVJMT3JkZXJzfS9jcmVhdGVOZXdPcmRlcmAsIHtvcmRlciwgZW1haWwsIHByZWZpeH0pO1xuICAgIH1cblxuXG4gICAgcGFyc2VKd3QgKHRva2VuKSB7XG4gICAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICAgIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICAgIHZhciBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuYXRvYihiYXNlNjQpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICAgIH0pLmpvaW4oJycpKTtcbiAgXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uUGF5bG9hZCk7XG4gIH07XG5cbn1cbiIsIjxwPmtsYXJuYSB3b3JrcyE8L3A+XG4iXX0=