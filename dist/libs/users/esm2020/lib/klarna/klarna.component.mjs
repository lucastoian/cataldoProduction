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
                //    KlarnaComponent.klarnaPayment(SOURCE_ID, amount);
                console.log("chargable");
            }
            else if (source.status === 'pending' && pollCount < MAX_POLL_COUNT) {
                // Try again in a second, if the Source is still `pending`:
                // KlarnaComponent.klarnaPayment(SOURCE_ID, amount);
                console.log("pending");
                pollCount += 1;
                //   setTimeout(()=>KlarnaComponent.pollForSourceStatus(stripe,SOURCE_ID,CLIENT_SECRET,MAX_POLL_COUNT, pollCount, amount), 1000);
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
            localStorage.setItem("amount", result.source.id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xhcm5hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBVWxFLE1BQU0sT0FBTyxlQUFlO0lBa0IxQjtJQUVBLENBQUM7SUFWRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0I7UUFDeEIsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyw2R0FBNkcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvSixDQUFDO0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQVUsRUFBRSxTQUFnQixFQUFFLGFBQW9CLEVBQUUsY0FBc0IsRUFBRSxTQUFnQixFQUFFLE1BQWE7UUFFcEksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQU07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QUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakMsQ0FBQztJQUlELE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQWEsRUFBRSxNQUFjO1FBR3RELE1BQU0sR0FBRyxHQUFHLCtCQUErQixHQUFHLGVBQWUsQ0FBQTtRQUU3RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBR3pFLElBQUk7WUFDRiwrQkFBK0I7WUFDL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNoQyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDbkIsUUFBUSxFQUFDLFFBQVE7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQUM7Z0JBQ0YsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7b0JBQ2xDLE1BQU0sRUFBRSxrQkFBa0I7aUJBQzNCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFNLEtBQUssRUFBQztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO0lBRUgsQ0FBQzs7QUEzSUssb0JBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLGNBQWMsQ0FBQztJQUMvQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxjQUFjLEVBQUU7Q0FDcEMsQ0FBQyxDQUFDLENBQUM7OEVBTlMsZUFBZTtrRUFBZixlQUFlLDJFQUhmLENBQUMsVUFBVSxDQUFDO1FDVnpCLHlCQUFHO1FBQUEsNkJBQWE7UUFBQSxpQkFBSTs7dUZEYVAsZUFBZTtjQVAzQixTQUFTOzJCQUNFLHVCQUF1QixhQUd0QixDQUFDLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwWGhyQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1rbGFybmEnLFxuICB0ZW1wbGF0ZVVybDogJy4va2xhcm5hLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4va2xhcm5hLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW0h0dHBDbGllbnRdXG4gXG59KVxuZXhwb3J0IGNsYXNzIEtsYXJuYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyBzdHJpcGU6IGFueTtcbiAgIGNoZWNrb3V0U2VydmljZSA6IENoZWNrb3V0U2VydmljZTtcblxuICAgc3RhdGljIGh0dHAgPSBuZXcgSHR0cENsaWVudChuZXcgSHR0cFhockJhY2tlbmQoeyBcbiAgICBidWlsZDogKCkgPT4gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgXG59KSk7XG4gIFxuXG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB0aGlzLmluaXRTdHJpcGVFbGVtZW50cygpO1xuICB9XG4gIFxuICBhc3luYyBpbml0U3RyaXBlRWxlbWVudHMoKXtcbiAgS2xhcm5hQ29tcG9uZW50LnN0cmlwZSA9IGF3YWl0IGxvYWRTdHJpcGUoJ3BrX3Rlc3RfNTFMWVVDR0RFeWlYM2UzUGw4OWpxbVZnMWdUTjJRaGlmeXd0SWxnNkF6MW5pR1VWM0FOUnBBTlhKOGhkRUlqd0ROYThHVEJ2bnJ4cTN6Z2RSOGdFenhnUlQwMHVIbGZ0UW5GJywgbnVsbCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcbiAgfVxuXG4gIHByaW50SGVsbG8oKSA6IHZvaWR7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgfVxuXG4gIHN0YXRpYyBwb2xsRm9yU291cmNlU3RhdHVzKHN0cmlwZTphbnksIFNPVVJDRV9JRDpzdHJpbmcsIENMSUVOVF9TRUNSRVQ6c3RyaW5nLCBNQVhfUE9MTF9DT1VOVDogbnVtYmVyLCBwb2xsQ291bnQ6bnVtYmVyLCBhbW91bnQ6bnVtYmVyKSA6IHZvaWR7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCLDqCBzdGF0YSBjaGlhbWF0YSBwb2xsIGZvciBzb3VyY2Ugc3RhdHVzXCIpO1xuXG4gICAgc3RyaXBlLnJldHJpZXZlU291cmNlKHtpZDogU09VUkNFX0lELCBjbGllbnRfc2VjcmV0OiBDTElFTlRfU0VDUkVUfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIHZhciBzb3VyY2UgPSByZXN1bHQuc291cmNlO1xuICAgICAgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdjaGFyZ2VhYmxlJykge1xuICAgICAgICAvLyBNYWtlIGEgcmVxdWVzdCB0byB5b3VyIHNlcnZlciB0byBjaGFyZ2UgdGhlIFNvdXJjZS5cbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBDaGFyZ2Ugc3RhdHVzLCBzaG93IHlvdXIgY3VzdG9tZXIgdGhlIHJlbGV2YW50IG1lc3NhZ2VcbiAgICAvLyAgICBLbGFybmFDb21wb25lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmdhYmxlXCIpO1xuICAgICAgfSBlbHNlIGlmIChzb3VyY2Uuc3RhdHVzID09PSAncGVuZGluZycgJiYgcG9sbENvdW50IDwgTUFYX1BPTExfQ09VTlQpIHtcbiAgICAgICAgLy8gVHJ5IGFnYWluIGluIGEgc2Vjb25kLCBpZiB0aGUgU291cmNlIGlzIHN0aWxsIGBwZW5kaW5nYDpcbiAgICAgICAvLyBLbGFybmFDb21wb25lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGVuZGluZ1wiKTtcbiAgICAgICAgcG9sbENvdW50ICs9IDE7XG4gICAgLy8gICBzZXRUaW1lb3V0KCgpPT5LbGFybmFDb21wb25lbnQucG9sbEZvclNvdXJjZVN0YXR1cyhzdHJpcGUsU09VUkNFX0lELENMSUVOVF9TRUNSRVQsTUFYX1BPTExfQ09VTlQsIHBvbGxDb3VudCwgYW1vdW50KSwgMTAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIFNvdXJjZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZS5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgYXN5bmMgcGF5KGFtb3VudDpudW1iZXIpe1xuXG5cbiAgICBjb25zb2xlLmxvZyhcInN0YWkgY2VyY2FuZG8gZGkgcGFnYXJlIDogXCIgKyBhbW91bnQpO1xuXG4gICAgYXdhaXQgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcbiAgICBLbGFybmFDb21wb25lbnQuc3RyaXBlLmNyZWF0ZVNvdXJjZSh7XG4gICAgdHlwZTogJ2tsYXJuYScsXG4gICAgZmxvdzogJ3JlZGlyZWN0JyxcbiAgICByZWRpcmVjdDoge1xuICAgIHJldHVybl91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MjAwLyMva2xhcm5hcGF5bWVudFwiXG4gICAgfSxcbiAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcbiAgICBjdXJyZW5jeTogJ2V1cicsXG4gICAga2xhcm5hOiB7IHByb2R1Y3Q6ICdwYXltZW50JywgcHVyY2hhc2VfY291bnRyeTogJ0lUJyB9LFxuICAgIHNvdXJjZV9vcmRlcjoge1xuICAgIGl0ZW1zOiBbe1xuICAgIHR5cGU6ICdza3UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQXJ0aWNvbGkgY2F0YWxkbyBzdG9yZScsXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGFtb3VudDogYW1vdW50ICogMTAwXG4gICAgfSxcbiAgICB7XG4gICAgdHlwZTogJ3RheCcsXG4gICAgZGVzY3JpcHRpb246ICdUYXhlcycsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGFtb3VudDogMFxuICAgIH0sXG4gICAge1xuICAgIHR5cGU6ICdzaGlwcGluZycsXG4gICAgZGVzY3JpcHRpb246ICdGcmVlIFNoaXBwaW5nJyxcbiAgICBjdXJyZW5jeTogJ2V1cicsXG4gICAgYW1vdW50OiAwLFxuICAgIH1dXG4gICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgPSBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICBcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2xpZW50SWRcIiwgcmVzdWx0LnNvdXJjZS5pZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFtb3VudFwiLCByZXN1bHQuc291cmNlLmlkKTtcbiAgICAgIFxuICAgICAgXG4gICAgXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICBcblxuXG4gICBcbiAgICAgS2xhcm5hQ29tcG9uZW50LnBvbGxGb3JTb3VyY2VTdGF0dXMoS2xhcm5hQ29tcG9uZW50LnN0cmlwZSwgcmVzdWx0LnNvdXJjZS5pZCwgcmVzdWx0LnNvdXJjZS5jbGllbnRfc2VjcmV0LCAxMDAsIDAsIGFtb3VudCk7XG4gICAgfSwgMTA1MCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgbGV0IHBhcmFtcyA9IGBzY3JvbGxiYXJzPW5vLHJlc2l6YWJsZT1ubyxzdGF0dXM9bm8sbG9jYXRpb249bm8sdG9vbGJhcj1ubyxtZW51YmFyPW5vLFxud2lkdGg9NjAwLGhlaWdodD0zMDAsbGVmdD0xMDAsdG9wPTEwMGA7XG4gICAgICB3aW5kb3cub3BlbihyZXN1bHQuc291cmNlLmtsYXJuYS5wYXlfbGF0ZXJfcmVkaXJlY3RfdXJsLCAndGVzdCcsIHBhcmFtcyk7IFxuICAgIH0sIDE1MCk7XG4gICAgXG4gICAgfSwgZXJyID0+IHsgY29uc29sZS5sb2coZXJyKTsgfSk7XG4gICAgXG4gICAgfVxuXG5cblxuICAgIHN0YXRpYyBhc3luYyBrbGFybmFQYXltZW50KHNvdXJjZUlkOiBhbnksIGFtb3VudDogbnVtYmVyKXtcblxuXG4gICAgICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MjAwL2FwaS92MS8nICsgXCJjaGFyZ2Utc291cmNlXCJcblxuICAgICAgY29uc29sZS5sb2coXCJzdG8gY2VyY2FuZG8gZGkgY2hpYW1hcmUgaWwgc2VydmVyIHN1IHF1ZXN0byB1cmwgOiBcIiArIHVybCk7XG4gIFxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyDwn5GH77iPIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNvdXJjZUlkOnNvdXJjZUlkLCBcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgIFxuXG59XG4iLCI8cD5rbGFybmEgd29ya3MhPC9wPlxuIl19