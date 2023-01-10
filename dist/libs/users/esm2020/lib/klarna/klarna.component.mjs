import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import * as i0 from "@angular/core";
export class KlarnaComponent {
    constructor() {
        this.apiURLOrders = 'https://www.cataldostore.it/api/v1/orders';
        this.httpClient = new HttpClient(new HttpXhrBackend({
            build: () => new XMLHttpRequest()
        }));
    }
    ngAfterViewInit() {
        this.initStripeElements();
    }
    async initStripeElements() {
        KlarnaComponent.stripe = await loadStripe('pk_live_51LYUCGDEyiX3e3PlZ6YXzMTMSvGkcCPrbxY7HU3N4PHkJgo00eXmUxV65d81LeSks3ZCkr4jY7liJdzIPMoH6RNZ00qmPvQJMW', null);
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
            currency: 'EUR',
            klarna: { product: 'payment', purchase_country: 'IT' },
            source_order: {
                items: [{
                        type: 'sku',
                        description: 'Articoli cataldo store',
                        quantity: 1,
                        currency: 'EUR',
                        amount: amount * 100
                    },
                    {
                        type: 'tax',
                        description: 'Taxes',
                        currency: 'EUR',
                        amount: 0
                    },
                    {
                        type: 'shipping',
                        description: 'Free Shipping',
                        currency: 'EUR',
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
        const url = 'https://www.cataldostore.it/api/v1/' + "charge-source";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xhcm5hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBYWxFLE1BQU0sT0FBTyxlQUFlO0lBcUIxQjtRQWxCQSxpQkFBWSxHQUFHLDJDQUEyQyxDQUFBO1FBbUJ4RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksY0FBYyxDQUFDO1lBQ2xELEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLGNBQWMsRUFBRTtTQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFiRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0I7UUFDeEIsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyw2R0FBNkcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvSixDQUFDO0lBU0QsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQVUsRUFBRSxTQUFnQixFQUFFLGFBQW9CLEVBQUUsY0FBc0IsRUFBRSxTQUFnQixF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S0FBSztRQUNiLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RCxJQUFJLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBUyxDQUFDO1lBQzdFLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUFBLENBQUM7OzhFQWhNUyxlQUFlO2tFQUFmLGVBQWU7UUNsQjVCLHlCQUFHO1FBQUEsNkJBQWE7UUFBQSxpQkFBSTs7dUZEa0JQLGVBQWU7Y0FSM0IsU0FBUzsyQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwWGhyQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQta2xhcm5hJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2tsYXJuYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2tsYXJuYS5jb21wb25lbnQuc2NzcyddLFxuXG4gXG59KVxuXG5leHBvcnQgY2xhc3MgS2xhcm5hQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIGFwaVVSTE9yZGVycyA9ICdodHRwczovL3d3dy5jYXRhbGRvc3RvcmUuaXQvYXBpL3YxL29yZGVycydcblxuICBzdGF0aWMgc3RyaXBlOiBhbnk7XG4gIGh0dHBDbGllbnQ6SHR0cENsaWVudDtcbiAgIGNoZWNrb3V0U2VydmljZSA6IENoZWNrb3V0U2VydmljZTtcblxuXG4gIFxuXG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB0aGlzLmluaXRTdHJpcGVFbGVtZW50cygpO1xuICB9XG4gIFxuICBhc3luYyBpbml0U3RyaXBlRWxlbWVudHMoKXtcbiAgS2xhcm5hQ29tcG9uZW50LnN0cmlwZSA9IGF3YWl0IGxvYWRTdHJpcGUoJ3BrX2xpdmVfNTFMWVVDR0RFeWlYM2UzUGxaNllYek1UTVN2R2tjQ1ByYnhZN0hVM040UEhrSmdvMDBlWG1VeFY2NWQ4MUxlU2tzM1pDa3I0alk3bGlKZHpJUE1vSDZSTlowMHFtUHZRSk1XJywgbnVsbCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuaHR0cENsaWVudCA9IG5ldyBIdHRwQ2xpZW50KG5ldyBIdHRwWGhyQmFja2VuZCh7IFxuICAgICAgYnVpbGQ6ICgpID0+IG5ldyBYTUxIdHRwUmVxdWVzdCgpIFxuICB9KSk7XG4gXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRTdHJpcGVFbGVtZW50cygpO1xuICB9XG5cbiAgcHJpbnRIZWxsbygpIDogdm9pZHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICB9XG5cbiAgc3RhdGljIHBvbGxGb3JTb3VyY2VTdGF0dXMoc3RyaXBlOmFueSwgU09VUkNFX0lEOnN0cmluZywgQ0xJRU5UX1NFQ1JFVDpzdHJpbmcsIE1BWF9QT0xMX0NPVU5UOiBudW1iZXIsIHBvbGxDb3VudDpudW1iZXIsIGFtb3VudDpudW1iZXIpIDogdm9pZHtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIsOoIHN0YXRhIGNoaWFtYXRhIHBvbGwgZm9yIHNvdXJjZSBzdGF0dXNcIik7XG5cbiAgICBzdHJpcGUucmV0cmlldmVTb3VyY2Uoe2lkOiBTT1VSQ0VfSUQsIGNsaWVudF9zZWNyZXQ6IENMSUVOVF9TRUNSRVR9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHJlc3VsdC5zb3VyY2U7XG4gICAgICBpZiAoc291cmNlLnN0YXR1cyA9PT0gJ2NoYXJnZWFibGUnKSB7XG4gICAgICAgIC8vIE1ha2UgYSByZXF1ZXN0IHRvIHlvdXIgc2VydmVyIHRvIGNoYXJnZSB0aGUgU291cmNlLlxuICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIENoYXJnZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZVxuICAgICAgICAvL3F1aSB2YSBjcmVhdG8gaWwgbnVvdm8gb3JkaW5lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICBLbGFybmFDb21wb25lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmdhYmxlXCIpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3T3JkZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9yZGVyXCIpKSwgdGhpcy51c2VyLmVtYWlsLCB0aGlzLnVzZXIucHJlZml4KS5zdWJzY3JpYmUoKGRhdGEpID0+e1xuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGNyZWF0aW5nIHRoaXMgbmV3IG9yZGVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiICsgZGF0YSk7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlTW9kYWxMYWJlbFwiKS5pbm5lclRleHQ9XCJZb3VyIG9yZGVyIG51bWJlciBpczogXCIgKyBkYXRhLl9pZDtcblxuICAgICAgICAvLyAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgpXG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjYXJ0QnlMdWNhXCIpO1xuICAgICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICAgICAgdGhpcy5jYXJ0LmVtcHR5Q2FydCgpO1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvb3JkZXJzLycgKyBkYXRhLl9pZF0pO1xuICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgICAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICAgICAgICBzdW1tYXJ5OiAnU3VjY2VzJyxcbiAgICAgICAgICAgIGRldGFpbDogYFN1Y2Nlc2Z1bCB0cmFuc2FjdGlvbiFgXG4gICAgICAgICAgfSk7XG5cbiAgICAgIH0pXG5cblxuXG5cbiAgICAgIH0gZWxzZSBpZiAoc291cmNlLnN0YXR1cyA9PT0gJ3BlbmRpbmcnICYmIHBvbGxDb3VudCA8IE1BWF9QT0xMX0NPVU5UKSB7XG4gICAgICAgIC8vIFRyeSBhZ2FpbiBpbiBhIHNlY29uZCwgaWYgdGhlIFNvdXJjZSBpcyBzdGlsbCBgcGVuZGluZ2A6XG4gICAgICAgLy8gS2xhcm5hQ29tcG9uZW50LmtsYXJuYVBheW1lbnQoU09VUkNFX0lELCBhbW91bnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInBlbmRpbmdcIik7XG4gICAgICAgIHBvbGxDb3VudCArPSAxO1xuICAgICAgIHNldFRpbWVvdXQoKCk9PktsYXJuYUNvbXBvbmVudC5wb2xsRm9yU291cmNlU3RhdHVzKHN0cmlwZSxTT1VSQ0VfSUQsQ0xJRU5UX1NFQ1JFVCxNQVhfUE9MTF9DT1VOVCwgcG9sbENvdW50LCBhbW91bnQpLCAxMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgU291cmNlIHN0YXR1cywgc2hvdyB5b3VyIGN1c3RvbWVyIHRoZSByZWxldmFudCBtZXNzYWdlLlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBhc3luYyBwYXkoYW1vdW50Om51bWJlcil7XG5cblxuICAgIGNvbnNvbGUubG9nKFwic3RhaSBjZXJjYW5kbyBkaSBwYWdhcmUgOiBcIiArIGFtb3VudCk7XG5cbiAgICBhd2FpdCB0aGlzLmluaXRTdHJpcGVFbGVtZW50cygpO1xuICAgIEtsYXJuYUNvbXBvbmVudC5zdHJpcGUuY3JlYXRlU291cmNlKHtcbiAgICB0eXBlOiAna2xhcm5hJyxcbiAgICBmbG93OiAncmVkaXJlY3QnLFxuICAgIHJlZGlyZWN0OiB7XG4gICAgcmV0dXJuX3VybDogXCJodHRwczovL3d3dy5jYXRhbGRvc3RvcmUuaXQvIy9rbGFybmFwYXltZW50XCJcbiAgICB9LFxuICAgIGFtb3VudDogYW1vdW50ICogMTAwLFxuICAgIGN1cnJlbmN5OiAnRVVSJyxcbiAgICBrbGFybmE6IHsgcHJvZHVjdDogJ3BheW1lbnQnLCBwdXJjaGFzZV9jb3VudHJ5OiAnSVQnIH0sXG4gICAgc291cmNlX29yZGVyOiB7XG4gICAgaXRlbXM6IFt7XG4gICAgdHlwZTogJ3NrdScsXG4gICAgZGVzY3JpcHRpb246ICdBcnRpY29saSBjYXRhbGRvIHN0b3JlJyxcbiAgICBxdWFudGl0eTogMSxcbiAgICBjdXJyZW5jeTogJ0VVUicsXG4gICAgYW1vdW50OiBhbW91bnQgKiAxMDBcbiAgICB9LFxuICAgIHtcbiAgICB0eXBlOiAndGF4JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RheGVzJyxcbiAgICBjdXJyZW5jeTogJ0VVUicsXG4gICAgYW1vdW50OiAwXG4gICAgfSxcbiAgICB7XG4gICAgdHlwZTogJ3NoaXBwaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ0ZyZWUgU2hpcHBpbmcnLFxuICAgIGN1cnJlbmN5OiAnRVVSJyxcbiAgICBhbW91bnQ6IDAsXG4gICAgfV1cbiAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCA9IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgIFxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjbGllbnRJZFwiLCByZXN1bHQuc291cmNlLmlkKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiU09VUkNFX0lEXCIsIHJlc3VsdC5zb3VyY2UuaWQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDTElFTlRfU0VDUkVUXCIsIHJlc3VsdC5zb3VyY2UuY2xpZW50X3NlY3JldCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFtb3VudFwiLCBhbW91bnQudG9TdHJpbmcoKSk7XG4gICAgICBcbiAgICAgIFxuICAgIFxuXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICBcbiAgICAgd2luZG93Lm9wZW4ocmVzdWx0LnNvdXJjZS5rbGFybmEucGF5X2xhdGVyX3JlZGlyZWN0X3VybCwgJ19ibGFuaycpOyBcbiAgICB9LCAxNTApO1xuICAgIFxuICAgIH0sIGVyciA9PiB7IGNvbnNvbGUubG9nKGVycik7IH0pO1xuICAgIFxuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgYXN5bmMga2xhcm5hUGF5bWVudChzb3VyY2VJZDogYW55LCBhbW91bnQ6IG51bWJlcil7XG5cblxuICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vd3d3LmNhdGFsZG9zdG9yZS5pdC9hcGkvdjEvJyArIFwiY2hhcmdlLXNvdXJjZVwiXG5cbiAgICAgIGNvbnNvbGUubG9nKFwic3RvIGNlcmNhbmRvIGRpIGNoaWFtYXJlIGlsIHNlcnZlciBzdSBxdWVzdG8gdXJsIDogXCIgKyB1cmwpO1xuICBcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g8J+Rh++4jyBjb25zdCByZXNwb25zZTogUmVzcG9uc2VcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBzb3VyY2VJZDpzb3VyY2VJZCwgXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICBcbiAgICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBjcmVhdGVOZXdPcmRlcihvcmRlcjogYW55LCBlbWFpbDogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInVzbyBxdWVzdG8gcHJlZmlzc286IFwiICsgcHJlZml4KTtcblxuXG4gIFxuICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PGFueT4oYCR7dGhpcy5hcGlVUkxPcmRlcnN9L2NyZWF0ZU5ld09yZGVyYCwge29yZGVyLCBlbWFpbCwgcHJlZml4fSk7XG4gICAgfVxuXG5cbiAgICBwYXJzZUp3dCAodG9rZW4pIHtcbiAgICAgIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xuICAgICAgdmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuICAgICAgdmFyIGpzb25QYXlsb2FkID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5hdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgICAgfSkuam9pbignJykpO1xuICBcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25QYXlsb2FkKTtcbiAgfTtcblxufVxuIiwiPHA+a2xhcm5hIHdvcmtzITwvcD5cbiJdfQ==