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
        args: [{ selector: 'eshop-frontend-klarna', providers: [HttpClient], template: "<p>klarna works!</p>\r\n", styles: [""] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xhcm5hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBV2xFLE1BQU0sT0FBTyxlQUFlO0lBa0IxQjtJQUVBLENBQUM7SUFWRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0I7UUFDeEIsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyw2R0FBNkcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvSixDQUFDO0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQVUsRUFBRSxTQUFnQixFQUFFLGFBQW9CLEVBQUUsY0FBc0IsRUFBRSxTQUFnQixFQUFFLE1BQWE7UUFFcEksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQU07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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XHJcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwWGhyQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1rbGFybmEnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9rbGFybmEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2tsYXJuYS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW0h0dHBDbGllbnRdXHJcbiBcclxufSlcclxuZXhwb3J0IGNsYXNzIEtsYXJuYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc3RhdGljIHN0cmlwZTogYW55O1xyXG4gICBjaGVja291dFNlcnZpY2UgOiBDaGVja291dFNlcnZpY2U7XHJcblxyXG4gICBzdGF0aWMgaHR0cCA9IG5ldyBIdHRwQ2xpZW50KG5ldyBIdHRwWGhyQmFja2VuZCh7IFxyXG4gICAgYnVpbGQ6ICgpID0+IG5ldyBYTUxIdHRwUmVxdWVzdCgpIFxyXG59KSk7XHJcbiAgXHJcblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcclxuICB9XHJcbiAgXHJcbiAgYXN5bmMgaW5pdFN0cmlwZUVsZW1lbnRzKCl7XHJcbiAgS2xhcm5hQ29tcG9uZW50LnN0cmlwZSA9IGF3YWl0IGxvYWRTdHJpcGUoJ3BrX3Rlc3RfNTFMWVVDR0RFeWlYM2UzUGw4OWpxbVZnMWdUTjJRaGlmeXd0SWxnNkF6MW5pR1VWM0FOUnBBTlhKOGhkRUlqd0ROYThHVEJ2bnJ4cTN6Z2RSOGdFenhnUlQwMHVIbGZ0UW5GJywgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCk7XHJcbiAgfVxyXG5cclxuICBwcmludEhlbGxvKCkgOiB2b2lke1xyXG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwb2xsRm9yU291cmNlU3RhdHVzKHN0cmlwZTphbnksIFNPVVJDRV9JRDpzdHJpbmcsIENMSUVOVF9TRUNSRVQ6c3RyaW5nLCBNQVhfUE9MTF9DT1VOVDogbnVtYmVyLCBwb2xsQ291bnQ6bnVtYmVyLCBhbW91bnQ6bnVtYmVyKSA6IHZvaWR7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiw6ggc3RhdGEgY2hpYW1hdGEgcG9sbCBmb3Igc291cmNlIHN0YXR1c1wiKTtcclxuXHJcbiAgICBzdHJpcGUucmV0cmlldmVTb3VyY2Uoe2lkOiBTT1VSQ0VfSUQsIGNsaWVudF9zZWNyZXQ6IENMSUVOVF9TRUNSRVR9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICB2YXIgc291cmNlID0gcmVzdWx0LnNvdXJjZTtcclxuICAgICAgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdjaGFyZ2VhYmxlJykge1xyXG4gICAgICAgIC8vIE1ha2UgYSByZXF1ZXN0IHRvIHlvdXIgc2VydmVyIHRvIGNoYXJnZSB0aGUgU291cmNlLlxyXG4gICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgQ2hhcmdlIHN0YXR1cywgc2hvdyB5b3VyIGN1c3RvbWVyIHRoZSByZWxldmFudCBtZXNzYWdlXHJcbiAgICAgICAgLy9xdWkgdmEgY3JlYXRvIGlsIG51b3ZvIG9yZGluZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIEtsYXJuYUNvbXBvbmVudC5rbGFybmFQYXltZW50KFNPVVJDRV9JRCwgYW1vdW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJnYWJsZVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChzb3VyY2Uuc3RhdHVzID09PSAncGVuZGluZycgJiYgcG9sbENvdW50IDwgTUFYX1BPTExfQ09VTlQpIHtcclxuICAgICAgICAvLyBUcnkgYWdhaW4gaW4gYSBzZWNvbmQsIGlmIHRoZSBTb3VyY2UgaXMgc3RpbGwgYHBlbmRpbmdgOlxyXG4gICAgICAgLy8gS2xhcm5hQ29tcG9uZW50LmtsYXJuYVBheW1lbnQoU09VUkNFX0lELCBhbW91bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGVuZGluZ1wiKTtcclxuICAgICAgICBwb2xsQ291bnQgKz0gMTtcclxuICAgICAgIHNldFRpbWVvdXQoKCk9PktsYXJuYUNvbXBvbmVudC5wb2xsRm9yU291cmNlU3RhdHVzKHN0cmlwZSxTT1VSQ0VfSUQsQ0xJRU5UX1NFQ1JFVCxNQVhfUE9MTF9DT1VOVCwgcG9sbENvdW50LCBhbW91bnQpLCAxMDAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIFNvdXJjZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZS5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgYXN5bmMgcGF5KGFtb3VudDpudW1iZXIpe1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInN0YWkgY2VyY2FuZG8gZGkgcGFnYXJlIDogXCIgKyBhbW91bnQpO1xyXG5cclxuICAgIGF3YWl0IHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCk7XHJcbiAgICBLbGFybmFDb21wb25lbnQuc3RyaXBlLmNyZWF0ZVNvdXJjZSh7XHJcbiAgICB0eXBlOiAna2xhcm5hJyxcclxuICAgIGZsb3c6ICdyZWRpcmVjdCcsXHJcbiAgICByZWRpcmVjdDoge1xyXG4gICAgcmV0dXJuX3VybDogXCJodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vIy9rbGFybmFwYXltZW50XCJcclxuICAgIH0sXHJcbiAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcclxuICAgIGN1cnJlbmN5OiAnZXVyJyxcclxuICAgIGtsYXJuYTogeyBwcm9kdWN0OiAncGF5bWVudCcsIHB1cmNoYXNlX2NvdW50cnk6ICdJVCcgfSxcclxuICAgIHNvdXJjZV9vcmRlcjoge1xyXG4gICAgaXRlbXM6IFt7XHJcbiAgICB0eXBlOiAnc2t1JyxcclxuICAgIGRlc2NyaXB0aW9uOiAnQXJ0aWNvbGkgY2F0YWxkbyBzdG9yZScsXHJcbiAgICBxdWFudGl0eTogMSxcclxuICAgIGN1cnJlbmN5OiAnZXVyJyxcclxuICAgIGFtb3VudDogYW1vdW50ICogMTAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgdHlwZTogJ3RheCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RheGVzJyxcclxuICAgIGN1cnJlbmN5OiAnZXVyJyxcclxuICAgIGFtb3VudDogMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgIHR5cGU6ICdzaGlwcGluZycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0ZyZWUgU2hpcHBpbmcnLFxyXG4gICAgY3VycmVuY3k6ICdldXInLFxyXG4gICAgYW1vdW50OiAwLFxyXG4gICAgfV1cclxuICAgIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCA9IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2xpZW50SWRcIiwgcmVzdWx0LnNvdXJjZS5pZCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiU09VUkNFX0lEXCIsIHJlc3VsdC5zb3VyY2UuaWQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNMSUVOVF9TRUNSRVRcIiwgcmVzdWx0LnNvdXJjZS5jbGllbnRfc2VjcmV0KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbW91bnRcIiwgYW1vdW50LnRvU3RyaW5nKCkpO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICBcclxuXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICBcclxuICAgICB3aW5kb3cub3BlbihyZXN1bHQuc291cmNlLmtsYXJuYS5wYXlfbGF0ZXJfcmVkaXJlY3RfdXJsLCAnX2JsYW5rJyk7IFxyXG4gICAgfSwgMTUwKTtcclxuICAgIFxyXG4gICAgfSwgZXJyID0+IHsgY29uc29sZS5sb2coZXJyKTsgfSk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBrbGFybmFQYXltZW50KHNvdXJjZUlkOiBhbnksIGFtb3VudDogbnVtYmVyKXtcclxuXHJcblxyXG4gICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jYXRhbGRvcHJvZHVjdGlvbi5oZXJva3VhcHAuY29tL2FwaS92MS8nICsgXCJjaGFyZ2Utc291cmNlXCJcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3RvIGNlcmNhbmRvIGRpIGNoaWFtYXJlIGlsIHNlcnZlciBzdSBxdWVzdG8gdXJsIDogXCIgKyB1cmwpO1xyXG4gIFxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyDwn5GH77iPIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgc291cmNlSWQ6c291cmNlSWQsIFxyXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgXHJcbiAgICAgIH0gY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxufVxyXG4iLCI8cD5rbGFybmEgd29ya3MhPC9wPlxyXG4iXX0=