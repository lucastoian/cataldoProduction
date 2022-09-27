import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import * as i0 from "@angular/core";
export class KlarnaComponent {
    constructor() {
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
                return_url: "http://localhost:4200/#/klarnapayment"
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
        const url = 'http://localhost:4200/api/v1/' + "charge-source";
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
}
KlarnaComponent.http = new HttpClient(new HttpXhrBackend({
    build: () => new XMLHttpRequest()
}));
KlarnaComponent.ɵfac = function KlarnaComponent_Factory(t) { return new (t || KlarnaComponent)(); };
KlarnaComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: KlarnaComponent, selectors: [["eshop-frontend-klarna"]], features: [i0.ɵɵProvidersFeature([HttpClient])], decls: 2, vars: 0, template: function KlarnaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "klarna works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KlarnaComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-klarna', providers: [HttpClient], template: "<p>klarna works!</p>\n", styles: [""] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xhcm5hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBV2xFLE1BQU0sT0FBTyxlQUFlO0lBa0IxQjtJQUVBLENBQUM7SUFWRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0I7UUFDeEIsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyw2R0FBNkcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvSixDQUFDO0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQVUsRUFBRSxTQUFnQixFQUFFLGFBQW9CLEVBQUUsY0FBc0IsRUFBRSxTQUFnQixFQUFFLE1BQWE7UUFFcEksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQU07WUFDdkYsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssWUFBWSxFQUFFO2dCQUNsQyxzREFBc0Q7Z0JBQ3RELDBFQUEwRTtnQkFDMUUsb0ZBQW9GO2dCQUVwRixlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMxQjtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLFNBQVMsR0FBRyxjQUFjLEVBQUU7Z0JBQ3BFLDJEQUEyRDtnQkFDNUQsb0RBQW9EO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixTQUFTLElBQUksQ0FBQyxDQUFDO2dCQUNoQixVQUFVLENBQUMsR0FBRSxFQUFFLENBQUEsZUFBZSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDNUg7aUJBQU07Z0JBQ0wsMkVBQTJFO2FBQzVFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFhO1FBR3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFbkQsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNoQyxlQUFlLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUNwQyxJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxVQUFVO1lBQ2hCLFFBQVEsRUFBRTtnQkFDVixVQUFVLEVBQUUsdUNBQXVDO2FBQ2xEO1lBQ0QsTUFBTSxFQUFFLE1BQU0sR0FBRyxHQUFHO1lBQ3BCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUU7WUFDdEQsWUFBWSxFQUFFO2dCQUNkLEtBQUssRUFBRSxDQUFDO3dCQUNSLElBQUksRUFBRSxLQUFLO3dCQUNYLFdBQVcsRUFBRSx3QkFBd0I7d0JBQ3JDLFFBQVEsRUFBRSxDQUFDO3dCQUNYLFFBQVEsRUFBRSxLQUFLO3dCQUNmLE1BQU0sRUFBRSxNQUFNLEdBQUcsR0FBRztxQkFDbkI7b0JBQ0Q7d0JBQ0EsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsV0FBVyxFQUFFLE9BQU87d0JBQ3BCLFFBQVEsRUFBRSxLQUFLO3dCQUNmLE1BQU0sRUFBRSxDQUFDO3FCQUNSO29CQUNEO3dCQUNBLElBQUksRUFBRSxVQUFVO3dCQUNoQixXQUFXLEVBQUUsZUFBZTt3QkFDNUIsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsTUFBTSxFQUFFLENBQUM7cUJBQ1IsQ0FBQzthQUNEO1NBQ0EsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU07WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRWxELFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ25FLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBTXBELFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBRWYsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakMsQ0FBQztJQUlELE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQWEsRUFBRSxNQUFjO1FBR3RELE1BQU0sR0FBRyxHQUFHLCtCQUErQixHQUFHLGVBQWUsQ0FBQTtRQUU3RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBR3pFLElBQUk7WUFDRiwrQkFBK0I7WUFDL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNoQyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDbkIsUUFBUSxFQUFDLFFBQVE7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQUM7Z0JBQ0YsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7b0JBQ2xDLE1BQU0sRUFBRSxrQkFBa0I7aUJBQzNCO2FBQ0YsQ0FBQyxDQUFDO1NBR0o7UUFBQyxPQUFNLEtBQUssRUFBQztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO0lBRUgsQ0FBQzs7QUExSUssb0JBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLGNBQWMsQ0FBQztJQUMvQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxjQUFjLEVBQUU7Q0FDcEMsQ0FBQyxDQUFDLENBQUM7OEVBTlMsZUFBZTtrRUFBZixlQUFlLDJFQUhmLENBQUMsVUFBVSxDQUFDO1FDWHpCLHlCQUFHO1FBQUEsNkJBQWE7UUFBQSxpQkFBSTs7dUZEY1AsZUFBZTtjQVAzQixTQUFTOzJCQUNFLHVCQUF1QixhQUd0QixDQUFDLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwWGhyQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLWtsYXJuYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9rbGFybmEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9rbGFybmEuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbSHR0cENsaWVudF1cbiBcbn0pXG5leHBvcnQgY2xhc3MgS2xhcm5hQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIHN0cmlwZTogYW55O1xuICAgY2hlY2tvdXRTZXJ2aWNlIDogQ2hlY2tvdXRTZXJ2aWNlO1xuXG4gICBzdGF0aWMgaHR0cCA9IG5ldyBIdHRwQ2xpZW50KG5ldyBIdHRwWGhyQmFja2VuZCh7IFxuICAgIGJ1aWxkOiAoKSA9PiBuZXcgWE1MSHR0cFJlcXVlc3QoKSBcbn0pKTtcbiAgXG5cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gIHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCk7XG4gIH1cbiAgXG4gIGFzeW5jIGluaXRTdHJpcGVFbGVtZW50cygpe1xuICBLbGFybmFDb21wb25lbnQuc3RyaXBlID0gYXdhaXQgbG9hZFN0cmlwZSgncGtfdGVzdF81MUxZVUNHREV5aVgzZTNQbDg5anFtVmcxZ1ROMlFoaWZ5d3RJbGc2QXoxbmlHVVYzQU5ScEFOWEo4aGRFSWp3RE5hOEdUQnZucnhxM3pnZFI4Z0V6eGdSVDAwdUhsZnRRbkYnLCBudWxsKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRTdHJpcGVFbGVtZW50cygpO1xuICB9XG5cbiAgcHJpbnRIZWxsbygpIDogdm9pZHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICB9XG5cbiAgc3RhdGljIHBvbGxGb3JTb3VyY2VTdGF0dXMoc3RyaXBlOmFueSwgU09VUkNFX0lEOnN0cmluZywgQ0xJRU5UX1NFQ1JFVDpzdHJpbmcsIE1BWF9QT0xMX0NPVU5UOiBudW1iZXIsIHBvbGxDb3VudDpudW1iZXIsIGFtb3VudDpudW1iZXIpIDogdm9pZHtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIsOoIHN0YXRhIGNoaWFtYXRhIHBvbGwgZm9yIHNvdXJjZSBzdGF0dXNcIik7XG5cbiAgICBzdHJpcGUucmV0cmlldmVTb3VyY2Uoe2lkOiBTT1VSQ0VfSUQsIGNsaWVudF9zZWNyZXQ6IENMSUVOVF9TRUNSRVR9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHJlc3VsdC5zb3VyY2U7XG4gICAgICBpZiAoc291cmNlLnN0YXR1cyA9PT0gJ2NoYXJnZWFibGUnKSB7XG4gICAgICAgIC8vIE1ha2UgYSByZXF1ZXN0IHRvIHlvdXIgc2VydmVyIHRvIGNoYXJnZSB0aGUgU291cmNlLlxuICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIENoYXJnZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZVxuICAgICAgICAvL3F1aSB2YSBjcmVhdG8gaWwgbnVvdm8gb3JkaW5lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICBLbGFybmFDb21wb25lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmdhYmxlXCIpO1xuICAgICAgfSBlbHNlIGlmIChzb3VyY2Uuc3RhdHVzID09PSAncGVuZGluZycgJiYgcG9sbENvdW50IDwgTUFYX1BPTExfQ09VTlQpIHtcbiAgICAgICAgLy8gVHJ5IGFnYWluIGluIGEgc2Vjb25kLCBpZiB0aGUgU291cmNlIGlzIHN0aWxsIGBwZW5kaW5nYDpcbiAgICAgICAvLyBLbGFybmFDb21wb25lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGVuZGluZ1wiKTtcbiAgICAgICAgcG9sbENvdW50ICs9IDE7XG4gICAgICAgc2V0VGltZW91dCgoKT0+S2xhcm5hQ29tcG9uZW50LnBvbGxGb3JTb3VyY2VTdGF0dXMoc3RyaXBlLFNPVVJDRV9JRCxDTElFTlRfU0VDUkVULE1BWF9QT0xMX0NPVU5ULCBwb2xsQ291bnQsIGFtb3VudCksIDEwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBTb3VyY2Ugc3RhdHVzLCBzaG93IHlvdXIgY3VzdG9tZXIgdGhlIHJlbGV2YW50IG1lc3NhZ2UuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIGFzeW5jIHBheShhbW91bnQ6bnVtYmVyKXtcblxuXG4gICAgY29uc29sZS5sb2coXCJzdGFpIGNlcmNhbmRvIGRpIHBhZ2FyZSA6IFwiICsgYW1vdW50KTtcblxuICAgIGF3YWl0IHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCk7XG4gICAgS2xhcm5hQ29tcG9uZW50LnN0cmlwZS5jcmVhdGVTb3VyY2Uoe1xuICAgIHR5cGU6ICdrbGFybmEnLFxuICAgIGZsb3c6ICdyZWRpcmVjdCcsXG4gICAgcmVkaXJlY3Q6IHtcbiAgICByZXR1cm5fdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC8jL2tsYXJuYXBheW1lbnRcIlxuICAgIH0sXG4gICAgYW1vdW50OiBhbW91bnQgKiAxMDAsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGtsYXJuYTogeyBwcm9kdWN0OiAncGF5bWVudCcsIHB1cmNoYXNlX2NvdW50cnk6ICdJVCcgfSxcbiAgICBzb3VyY2Vfb3JkZXI6IHtcbiAgICBpdGVtczogW3tcbiAgICB0eXBlOiAnc2t1JyxcbiAgICBkZXNjcmlwdGlvbjogJ0FydGljb2xpIGNhdGFsZG8gc3RvcmUnLFxuICAgIHF1YW50aXR5OiAxLFxuICAgIGN1cnJlbmN5OiAnZXVyJyxcbiAgICBhbW91bnQ6IGFtb3VudCAqIDEwMFxuICAgIH0sXG4gICAge1xuICAgIHR5cGU6ICd0YXgnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGF4ZXMnLFxuICAgIGN1cnJlbmN5OiAnZXVyJyxcbiAgICBhbW91bnQ6IDBcbiAgICB9LFxuICAgIHtcbiAgICB0eXBlOiAnc2hpcHBpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnJlZSBTaGlwcGluZycsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGFtb3VudDogMCxcbiAgICB9XVxuICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNsaWVudElkXCIsIHJlc3VsdC5zb3VyY2UuaWQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJTT1VSQ0VfSURcIiwgcmVzdWx0LnNvdXJjZS5pZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNMSUVOVF9TRUNSRVRcIiwgcmVzdWx0LnNvdXJjZS5jbGllbnRfc2VjcmV0KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYW1vdW50XCIsIGFtb3VudC50b1N0cmluZygpKTtcbiAgICAgIFxuICAgICAgXG4gICAgXG5cblxuICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgIFxuICAgICB3aW5kb3cub3BlbihyZXN1bHQuc291cmNlLmtsYXJuYS5wYXlfbGF0ZXJfcmVkaXJlY3RfdXJsLCAnX2JsYW5rJyk7IFxuICAgIH0sIDE1MCk7XG4gICAgXG4gICAgfSwgZXJyID0+IHsgY29uc29sZS5sb2coZXJyKTsgfSk7XG4gICAgXG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyBhc3luYyBrbGFybmFQYXltZW50KHNvdXJjZUlkOiBhbnksIGFtb3VudDogbnVtYmVyKXtcblxuXG4gICAgICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MjAwL2FwaS92MS8nICsgXCJjaGFyZ2Utc291cmNlXCJcblxuICAgICAgY29uc29sZS5sb2coXCJzdG8gY2VyY2FuZG8gZGkgY2hpYW1hcmUgaWwgc2VydmVyIHN1IHF1ZXN0byB1cmwgOiBcIiArIHVybCk7XG4gIFxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyDwn5GH77iPIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNvdXJjZUlkOnNvdXJjZUlkLCBcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgIFxuICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgXG5cbn1cbiIsIjxwPmtsYXJuYSB3b3JrcyE8L3A+XG4iXX0=