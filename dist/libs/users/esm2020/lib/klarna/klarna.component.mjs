import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import * as i0 from "@angular/core";
export class KlarnaComponent {
    ngAfterViewInit() {
        this.initStripeElements();
    }
    async initStripeElements() {
        KlarnaComponent.stripe = await loadStripe('pk_live_51LYUCGDEyiX3e3PlZ6YXzMTMSvGkcCPrbxY7HU3N4PHkJgo00eXmUxV65d81LeSks3ZCkr4jY7liJdzIPMoH6RNZ00qmPvQJMW', null);
    }
    constructor() {
        this.apiURLOrders = 'https://www.cataldostore.it/api/v1/orders';
        this.httpClient = new HttpClient(new HttpXhrBackend({
            build: () => new XMLHttpRequest()
        }));
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
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KlarnaComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-klarna', template: "<p>klarna works!</p>\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xhcm5hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBYWxFLE1BQU0sT0FBTyxlQUFlO0lBYTFCLGVBQWU7UUFDZixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsS0FBSyxDQUFDLGtCQUFrQjtRQUN4QixlQUFlLENBQUMsTUFBTSxHQUFHLE1BQU0sVUFBVSxDQUFDLDZHQUE2RyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9KLENBQUM7SUFFRDtRQWxCQSxpQkFBWSxHQUFHLDJDQUEyQyxDQUFBO1FBbUJ4RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksY0FBYyxDQUFDO1lBQ2xELEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLGNBQWMsRUFBRTtTQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBVSxFQUFFLFNBQWdCLEVBQUUsYUFBb0IsRUFBRSxjQUFzQixFQUFFLFNBQWdCLEVB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QUFLO1FBQ2IsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdELElBQUksV0FBVyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFTLENBQUM7WUFDN0UsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUViLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQzs7OEVBaE1TLGVBQWU7a0VBQWYsZUFBZTtRQ2xCNUIseUJBQUc7UUFBQSw2QkFBYTtRQUFBLGlCQUFJOzt1RkRrQlAsZUFBZTtjQVIzQixTQUFTOzJCQUNFLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQuc2VydmljZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBYaHJCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1rbGFybmEnLFxuICB0ZW1wbGF0ZVVybDogJy4va2xhcm5hLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4va2xhcm5hLmNvbXBvbmVudC5zY3NzJ10sXG5cbiBcbn0pXG5cbmV4cG9ydCBjbGFzcyBLbGFybmFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgYXBpVVJMT3JkZXJzID0gJ2h0dHBzOi8vd3d3LmNhdGFsZG9zdG9yZS5pdC9hcGkvdjEvb3JkZXJzJ1xuXG4gIHN0YXRpYyBzdHJpcGU6IGFueTtcbiAgaHR0cENsaWVudDpIdHRwQ2xpZW50O1xuICAgY2hlY2tvdXRTZXJ2aWNlIDogQ2hlY2tvdXRTZXJ2aWNlO1xuXG5cbiAgXG5cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gIHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCk7XG4gIH1cbiAgXG4gIGFzeW5jIGluaXRTdHJpcGVFbGVtZW50cygpe1xuICBLbGFybmFDb21wb25lbnQuc3RyaXBlID0gYXdhaXQgbG9hZFN0cmlwZSgncGtfbGl2ZV81MUxZVUNHREV5aVgzZTNQbFo2WVh6TVRNU3ZHa2NDUHJieFk3SFUzTjRQSGtKZ28wMGVYbVV4VjY1ZDgxTGVTa3MzWkNrcjRqWTdsaUpkeklQTW9INlJOWjAwcW1QdlFKTVcnLCBudWxsKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5odHRwQ2xpZW50ID0gbmV3IEh0dHBDbGllbnQobmV3IEh0dHBYaHJCYWNrZW5kKHsgXG4gICAgICBidWlsZDogKCkgPT4gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgXG4gIH0pKTtcbiBcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCk7XG4gIH1cblxuICBwcmludEhlbGxvKCkgOiB2b2lke1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gIH1cblxuICBzdGF0aWMgcG9sbEZvclNvdXJjZVN0YXR1cyhzdHJpcGU6YW55LCBTT1VSQ0VfSUQ6c3RyaW5nLCBDTElFTlRfU0VDUkVUOnN0cmluZywgTUFYX1BPTExfQ09VTlQ6IG51bWJlciwgcG9sbENvdW50Om51bWJlciwgYW1vdW50Om51bWJlcikgOiB2b2lke1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiw6ggc3RhdGEgY2hpYW1hdGEgcG9sbCBmb3Igc291cmNlIHN0YXR1c1wiKTtcblxuICAgIHN0cmlwZS5yZXRyaWV2ZVNvdXJjZSh7aWQ6IFNPVVJDRV9JRCwgY2xpZW50X3NlY3JldDogQ0xJRU5UX1NFQ1JFVH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICB2YXIgc291cmNlID0gcmVzdWx0LnNvdXJjZTtcbiAgICAgIGlmIChzb3VyY2Uuc3RhdHVzID09PSAnY2hhcmdlYWJsZScpIHtcbiAgICAgICAgLy8gTWFrZSBhIHJlcXVlc3QgdG8geW91ciBzZXJ2ZXIgdG8gY2hhcmdlIHRoZSBTb3VyY2UuXG4gICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgQ2hhcmdlIHN0YXR1cywgc2hvdyB5b3VyIGN1c3RvbWVyIHRoZSByZWxldmFudCBtZXNzYWdlXG4gICAgICAgIC8vcXVpIHZhIGNyZWF0byBpbCBudW92byBvcmRpbmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIEtsYXJuYUNvbXBvbmVudC5rbGFybmFQYXltZW50KFNPVVJDRV9JRCwgYW1vdW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFyZ2FibGVcIik7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVOZXdPcmRlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJcIikpLCB0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wcmVmaXgpLnN1YnNjcmliZSgoZGF0YSkgPT57XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gY3JlYXRpbmcgdGhpcyBuZXcgb3JkZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YTogXCIgKyBkYXRhKTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVNb2RhbExhYmVsXCIpLmlubmVyVGV4dD1cIllvdXIgb3JkZXIgbnVtYmVyIGlzOiBcIiArIGRhdGEuX2lkO1xuXG4gICAgICAgIC8vICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKClcblxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNhcnRCeUx1Y2FcIik7XG4gICAgICAgIHRoaXMuY2FydFNlcnZpY2UuZ2V0Q2FydCgpO1xuICAgICAgICB0aGlzLmNhcnQuZW1wdHlDYXJ0KCk7XG5cbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9vcmRlcnMvJyArIGRhdGEuX2lkXSk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIHN1bW1hcnk6ICdTdWNjZXMnLFxuICAgICAgICAgICAgZGV0YWlsOiBgU3VjY2VzZnVsIHRyYW5zYWN0aW9uIWBcbiAgICAgICAgICB9KTtcblxuICAgICAgfSlcblxuXG5cblxuICAgICAgfSBlbHNlIGlmIChzb3VyY2Uuc3RhdHVzID09PSAncGVuZGluZycgJiYgcG9sbENvdW50IDwgTUFYX1BPTExfQ09VTlQpIHtcbiAgICAgICAgLy8gVHJ5IGFnYWluIGluIGEgc2Vjb25kLCBpZiB0aGUgU291cmNlIGlzIHN0aWxsIGBwZW5kaW5nYDpcbiAgICAgICAvLyBLbGFybmFDb21wb25lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGVuZGluZ1wiKTtcbiAgICAgICAgcG9sbENvdW50ICs9IDE7XG4gICAgICAgc2V0VGltZW91dCgoKT0+S2xhcm5hQ29tcG9uZW50LnBvbGxGb3JTb3VyY2VTdGF0dXMoc3RyaXBlLFNPVVJDRV9JRCxDTElFTlRfU0VDUkVULE1BWF9QT0xMX0NPVU5ULCBwb2xsQ291bnQsIGFtb3VudCksIDEwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBTb3VyY2Ugc3RhdHVzLCBzaG93IHlvdXIgY3VzdG9tZXIgdGhlIHJlbGV2YW50IG1lc3NhZ2UuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIGFzeW5jIHBheShhbW91bnQ6bnVtYmVyKXtcblxuXG4gICAgY29uc29sZS5sb2coXCJzdGFpIGNlcmNhbmRvIGRpIHBhZ2FyZSA6IFwiICsgYW1vdW50KTtcblxuICAgIGF3YWl0IHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCk7XG4gICAgS2xhcm5hQ29tcG9uZW50LnN0cmlwZS5jcmVhdGVTb3VyY2Uoe1xuICAgIHR5cGU6ICdrbGFybmEnLFxuICAgIGZsb3c6ICdyZWRpcmVjdCcsXG4gICAgcmVkaXJlY3Q6IHtcbiAgICByZXR1cm5fdXJsOiBcImh0dHBzOi8vd3d3LmNhdGFsZG9zdG9yZS5pdC8jL2tsYXJuYXBheW1lbnRcIlxuICAgIH0sXG4gICAgYW1vdW50OiBhbW91bnQgKiAxMDAsXG4gICAgY3VycmVuY3k6ICdFVVInLFxuICAgIGtsYXJuYTogeyBwcm9kdWN0OiAncGF5bWVudCcsIHB1cmNoYXNlX2NvdW50cnk6ICdJVCcgfSxcbiAgICBzb3VyY2Vfb3JkZXI6IHtcbiAgICBpdGVtczogW3tcbiAgICB0eXBlOiAnc2t1JyxcbiAgICBkZXNjcmlwdGlvbjogJ0FydGljb2xpIGNhdGFsZG8gc3RvcmUnLFxuICAgIHF1YW50aXR5OiAxLFxuICAgIGN1cnJlbmN5OiAnRVVSJyxcbiAgICBhbW91bnQ6IGFtb3VudCAqIDEwMFxuICAgIH0sXG4gICAge1xuICAgIHR5cGU6ICd0YXgnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGF4ZXMnLFxuICAgIGN1cnJlbmN5OiAnRVVSJyxcbiAgICBhbW91bnQ6IDBcbiAgICB9LFxuICAgIHtcbiAgICB0eXBlOiAnc2hpcHBpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnJlZSBTaGlwcGluZycsXG4gICAgY3VycmVuY3k6ICdFVVInLFxuICAgIGFtb3VudDogMCxcbiAgICB9XVxuICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNsaWVudElkXCIsIHJlc3VsdC5zb3VyY2UuaWQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJTT1VSQ0VfSURcIiwgcmVzdWx0LnNvdXJjZS5pZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNMSUVOVF9TRUNSRVRcIiwgcmVzdWx0LnNvdXJjZS5jbGllbnRfc2VjcmV0KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYW1vdW50XCIsIGFtb3VudC50b1N0cmluZygpKTtcbiAgICAgIFxuICAgICAgXG4gICAgXG5cblxuICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgIFxuICAgICB3aW5kb3cub3BlbihyZXN1bHQuc291cmNlLmtsYXJuYS5wYXlfbGF0ZXJfcmVkaXJlY3RfdXJsLCAnX2JsYW5rJyk7IFxuICAgIH0sIDE1MCk7XG4gICAgXG4gICAgfSwgZXJyID0+IHsgY29uc29sZS5sb2coZXJyKTsgfSk7XG4gICAgXG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyBhc3luYyBrbGFybmFQYXltZW50KHNvdXJjZUlkOiBhbnksIGFtb3VudDogbnVtYmVyKXtcblxuXG4gICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly93d3cuY2F0YWxkb3N0b3JlLml0L2FwaS92MS8nICsgXCJjaGFyZ2Utc291cmNlXCJcblxuICAgICAgY29uc29sZS5sb2coXCJzdG8gY2VyY2FuZG8gZGkgY2hpYW1hcmUgaWwgc2VydmVyIHN1IHF1ZXN0byB1cmwgOiBcIiArIHVybCk7XG4gIFxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyDwn5GH77iPIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNvdXJjZUlkOnNvdXJjZUlkLCBcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgIFxuICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGNyZWF0ZU5ld09yZGVyKG9yZGVyOiBhbnksIGVtYWlsOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwidXNvIHF1ZXN0byBwcmVmaXNzbzogXCIgKyBwcmVmaXgpO1xuXG5cbiAgXG4gICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8YW55PihgJHt0aGlzLmFwaVVSTE9yZGVyc30vY3JlYXRlTmV3T3JkZXJgLCB7b3JkZXIsIGVtYWlsLCBwcmVmaXh9KTtcbiAgICB9XG5cblxuICAgIHBhcnNlSnd0ICh0b2tlbikge1xuICAgICAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgICB2YXIganNvblBheWxvYWQgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmF0b2IoYmFzZTY0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgICB9KS5qb2luKCcnKSk7XG4gIFxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblBheWxvYWQpO1xuICB9O1xuXG59XG4iLCI8cD5rbGFybmEgd29ya3MhPC9wPlxuIl19