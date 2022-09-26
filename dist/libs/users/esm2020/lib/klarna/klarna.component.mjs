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
                return_url: "https://cataldoproduction.herokuapp.com/#"
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
            localStorage.setItem("amount", amount.toString());
            setTimeout(() => {
                KlarnaComponent.pollForSourceStatus(KlarnaComponent.stripe, result.source.id, result.source.client_secret, 100, 0, amount);
            }, 1050);
            setTimeout(() => {
                let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;
                window.open(result.source.klarna.pay_later_redirect_url, 'test', params);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xhcm5hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBVWxFLE1BQU0sT0FBTyxlQUFlO0lBa0IxQjtJQUVBLENBQUM7SUFWRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0I7UUFDeEIsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyw2R0FBNkcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvSixDQUFDO0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQVUsRUFBRSxTQUFnQixFQUFFLGFBQW9CLEVBQUUsY0FBc0IsRUFBRSxTQUFnQixFQUFFLE1BQWE7UUFFcEksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQU07WUFDdkYsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssWUFBWSxFQUFFO2dCQUNsQyxzREFBc0Q7Z0JBQ3RELDBFQUEwRTtnQkFDMUUsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDMUI7aUJBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxTQUFTLEdBQUcsY0FBYyxFQUFFO2dCQUNwRSwyREFBMkQ7Z0JBQzVELG9EQUFvRDtnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsU0FBUyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsVUFBVSxDQUFDLEdBQUUsRUFBRSxDQUFBLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzVIO2lCQUFNO2dCQUNMLDJFQUEyRTthQUM1RTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBYTtRQUdyQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRW5ELE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDaEMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsVUFBVTtZQUNoQixRQUFRLEVBQUU7Z0JBQ1YsVUFBVSxFQUFFLDJDQUEyQzthQUN0RDtZQUNELE1BQU0sRUFBRSxNQUFNLEdBQUcsR0FBRztZQUNwQixRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFO1lBQ3RELFlBQVksRUFBRTtnQkFDZCxLQUFLLEVBQUUsQ0FBQzt3QkFDUixJQUFJLEVBQUUsS0FBSzt3QkFDWCxXQUFXLEVBQUUsd0JBQXdCO3dCQUNyQyxRQUFRLEVBQUUsQ0FBQzt3QkFDWCxRQUFRLEVBQUUsS0FBSzt3QkFDZixNQUFNLEVBQUUsTUFBTSxHQUFHLEdBQUc7cUJBQ25CO29CQUNEO3dCQUNBLElBQUksRUFBRSxLQUFLO3dCQUNYLFdBQVcsRUFBRSxPQUFPO3dCQUNwQixRQUFRLEVBQUUsS0FBSzt3QkFDZixNQUFNLEVBQUUsQ0FBQztxQkFDUjtvQkFDRDt3QkFDQSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsV0FBVyxFQUFFLGVBQWU7d0JBQzVCLFFBQVEsRUFBRSxLQUFLO3dCQUNmLE1BQU0sRUFBRSxDQUFDO3FCQUNSLENBQUM7YUFDRDtTQUNBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUVsRCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBS3BELFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBS2YsZUFBZSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1SCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksTUFBTSxHQUFHO3NDQUNtQixDQUFDO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakMsQ0FBQztJQUlELE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQWEsRUFBRSxNQUFjO1FBR3RELE1BQU0sR0FBRyxHQUFHLGlEQUFpRCxHQUFHLGVBQWUsQ0FBQTtRQUUvRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBR3pFLElBQUk7WUFDRiwrQkFBK0I7WUFDL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNoQyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDbkIsUUFBUSxFQUFDLFFBQVE7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQUM7Z0JBQ0YsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7b0JBQ2xDLE1BQU0sRUFBRSxrQkFBa0I7aUJBQzNCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFNLEtBQUssRUFBQztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO0lBRUgsQ0FBQzs7QUEzSUssb0JBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLGNBQWMsQ0FBQztJQUMvQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxjQUFjLEVBQUU7Q0FDcEMsQ0FBQyxDQUFDLENBQUM7OEVBTlMsZUFBZTtrRUFBZixlQUFlLDJFQUhmLENBQUMsVUFBVSxDQUFDO1FDVnpCLHlCQUFHO1FBQUEsNkJBQWE7UUFBQSxpQkFBSTs7dUZEYVAsZUFBZTtjQVAzQixTQUFTOzJCQUNFLHVCQUF1QixhQUd0QixDQUFDLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwWGhyQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1rbGFybmEnLFxuICB0ZW1wbGF0ZVVybDogJy4va2xhcm5hLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4va2xhcm5hLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW0h0dHBDbGllbnRdXG4gXG59KVxuZXhwb3J0IGNsYXNzIEtsYXJuYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyBzdHJpcGU6IGFueTtcbiAgIGNoZWNrb3V0U2VydmljZSA6IENoZWNrb3V0U2VydmljZTtcblxuICAgc3RhdGljIGh0dHAgPSBuZXcgSHR0cENsaWVudChuZXcgSHR0cFhockJhY2tlbmQoeyBcbiAgICBidWlsZDogKCkgPT4gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgXG59KSk7XG4gIFxuXG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB0aGlzLmluaXRTdHJpcGVFbGVtZW50cygpO1xuICB9XG4gIFxuICBhc3luYyBpbml0U3RyaXBlRWxlbWVudHMoKXtcbiAgS2xhcm5hQ29tcG9uZW50LnN0cmlwZSA9IGF3YWl0IGxvYWRTdHJpcGUoJ3BrX3Rlc3RfNTFMWVVDR0RFeWlYM2UzUGw4OWpxbVZnMWdUTjJRaGlmeXd0SWxnNkF6MW5pR1VWM0FOUnBBTlhKOGhkRUlqd0ROYThHVEJ2bnJ4cTN6Z2RSOGdFenhnUlQwMHVIbGZ0UW5GJywgbnVsbCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcbiAgfVxuXG4gIHByaW50SGVsbG8oKSA6IHZvaWR7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgfVxuXG4gIHN0YXRpYyBwb2xsRm9yU291cmNlU3RhdHVzKHN0cmlwZTphbnksIFNPVVJDRV9JRDpzdHJpbmcsIENMSUVOVF9TRUNSRVQ6c3RyaW5nLCBNQVhfUE9MTF9DT1VOVDogbnVtYmVyLCBwb2xsQ291bnQ6bnVtYmVyLCBhbW91bnQ6bnVtYmVyKSA6IHZvaWR7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCLDqCBzdGF0YSBjaGlhbWF0YSBwb2xsIGZvciBzb3VyY2Ugc3RhdHVzXCIpO1xuXG4gICAgc3RyaXBlLnJldHJpZXZlU291cmNlKHtpZDogU09VUkNFX0lELCBjbGllbnRfc2VjcmV0OiBDTElFTlRfU0VDUkVUfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIHZhciBzb3VyY2UgPSByZXN1bHQuc291cmNlO1xuICAgICAgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdjaGFyZ2VhYmxlJykge1xuICAgICAgICAvLyBNYWtlIGEgcmVxdWVzdCB0byB5b3VyIHNlcnZlciB0byBjaGFyZ2UgdGhlIFNvdXJjZS5cbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBDaGFyZ2Ugc3RhdHVzLCBzaG93IHlvdXIgY3VzdG9tZXIgdGhlIHJlbGV2YW50IG1lc3NhZ2VcbiAgICAgICAgS2xhcm5hQ29tcG9uZW50LmtsYXJuYVBheW1lbnQoU09VUkNFX0lELCBhbW91bnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJnYWJsZVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoc291cmNlLnN0YXR1cyA9PT0gJ3BlbmRpbmcnICYmIHBvbGxDb3VudCA8IE1BWF9QT0xMX0NPVU5UKSB7XG4gICAgICAgIC8vIFRyeSBhZ2FpbiBpbiBhIHNlY29uZCwgaWYgdGhlIFNvdXJjZSBpcyBzdGlsbCBgcGVuZGluZ2A6XG4gICAgICAgLy8gS2xhcm5hQ29tcG9uZW50LmtsYXJuYVBheW1lbnQoU09VUkNFX0lELCBhbW91bnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInBlbmRpbmdcIik7XG4gICAgICAgIHBvbGxDb3VudCArPSAxO1xuICAgICAgIHNldFRpbWVvdXQoKCk9PktsYXJuYUNvbXBvbmVudC5wb2xsRm9yU291cmNlU3RhdHVzKHN0cmlwZSxTT1VSQ0VfSUQsQ0xJRU5UX1NFQ1JFVCxNQVhfUE9MTF9DT1VOVCwgcG9sbENvdW50LCBhbW91bnQpLCAxMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgU291cmNlIHN0YXR1cywgc2hvdyB5b3VyIGN1c3RvbWVyIHRoZSByZWxldmFudCBtZXNzYWdlLlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBhc3luYyBwYXkoYW1vdW50Om51bWJlcil7XG5cblxuICAgIGNvbnNvbGUubG9nKFwic3RhaSBjZXJjYW5kbyBkaSBwYWdhcmUgOiBcIiArIGFtb3VudCk7XG5cbiAgICBhd2FpdCB0aGlzLmluaXRTdHJpcGVFbGVtZW50cygpO1xuICAgIEtsYXJuYUNvbXBvbmVudC5zdHJpcGUuY3JlYXRlU291cmNlKHtcbiAgICB0eXBlOiAna2xhcm5hJyxcbiAgICBmbG93OiAncmVkaXJlY3QnLFxuICAgIHJlZGlyZWN0OiB7XG4gICAgcmV0dXJuX3VybDogXCJodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vI1wiXG4gICAgfSxcbiAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcbiAgICBjdXJyZW5jeTogJ2V1cicsXG4gICAga2xhcm5hOiB7IHByb2R1Y3Q6ICdwYXltZW50JywgcHVyY2hhc2VfY291bnRyeTogJ0lUJyB9LFxuICAgIHNvdXJjZV9vcmRlcjoge1xuICAgIGl0ZW1zOiBbe1xuICAgIHR5cGU6ICdza3UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQXJ0aWNvbGkgY2F0YWxkbyBzdG9yZScsXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGFtb3VudDogYW1vdW50ICogMTAwXG4gICAgfSxcbiAgICB7XG4gICAgdHlwZTogJ3RheCcsXG4gICAgZGVzY3JpcHRpb246ICdUYXhlcycsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGFtb3VudDogMFxuICAgIH0sXG4gICAge1xuICAgIHR5cGU6ICdzaGlwcGluZycsXG4gICAgZGVzY3JpcHRpb246ICdGcmVlIFNoaXBwaW5nJyxcbiAgICBjdXJyZW5jeTogJ2V1cicsXG4gICAgYW1vdW50OiAwLFxuICAgIH1dXG4gICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgPSBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICBcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2xpZW50SWRcIiwgcmVzdWx0LnNvdXJjZS5pZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFtb3VudFwiLCBhbW91bnQudG9TdHJpbmcoKSk7XG4gICAgICBcbiAgICAgIFxuICAgIFxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgXG5cblxuICAgXG4gICAgIEtsYXJuYUNvbXBvbmVudC5wb2xsRm9yU291cmNlU3RhdHVzKEtsYXJuYUNvbXBvbmVudC5zdHJpcGUsIHJlc3VsdC5zb3VyY2UuaWQsIHJlc3VsdC5zb3VyY2UuY2xpZW50X3NlY3JldCwgMTAwLCAwLCBhbW91bnQpO1xuICAgIH0sIDEwNTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgIGxldCBwYXJhbXMgPSBgc2Nyb2xsYmFycz1ubyxyZXNpemFibGU9bm8sc3RhdHVzPW5vLGxvY2F0aW9uPW5vLHRvb2xiYXI9bm8sbWVudWJhcj1ubyxcbndpZHRoPTYwMCxoZWlnaHQ9MzAwLGxlZnQ9MTAwLHRvcD0xMDBgO1xuICAgICAgd2luZG93Lm9wZW4ocmVzdWx0LnNvdXJjZS5rbGFybmEucGF5X2xhdGVyX3JlZGlyZWN0X3VybCwgJ3Rlc3QnLCBwYXJhbXMpOyBcbiAgICB9LCAxNTApO1xuICAgIFxuICAgIH0sIGVyciA9PiB7IGNvbnNvbGUubG9nKGVycik7IH0pO1xuICAgIFxuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgYXN5bmMga2xhcm5hUGF5bWVudChzb3VyY2VJZDogYW55LCBhbW91bnQ6IG51bWJlcil7XG5cblxuICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vY2F0YWxkb3Byb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS9hcGkvdjEvJyArIFwiY2hhcmdlLXNvdXJjZVwiXG5cbiAgICAgIGNvbnNvbGUubG9nKFwic3RvIGNlcmNhbmRvIGRpIGNoaWFtYXJlIGlsIHNlcnZlciBzdSBxdWVzdG8gdXJsIDogXCIgKyB1cmwpO1xuICBcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g8J+Rh++4jyBjb25zdCByZXNwb25zZTogUmVzcG9uc2VcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBzb3VyY2VJZDpzb3VyY2VJZCwgXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICBcblxufVxuIiwiPHA+a2xhcm5hIHdvcmtzITwvcD5cbiJdfQ==