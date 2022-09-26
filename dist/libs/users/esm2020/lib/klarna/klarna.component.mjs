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
                return_url: "http://localhost:4200/#/myOrders"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xhcm5hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBVWxFLE1BQU0sT0FBTyxlQUFlO0lBa0IxQjtJQUVBLENBQUM7SUFWRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0I7UUFDeEIsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyw2R0FBNkcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvSixDQUFDO0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQVUsRUFBRSxTQUFnQixFQUFFLGFBQW9CLEVBQUUsY0FBc0IsRUFBRSxTQUFnQixFQUFFLE1BQWE7UUFFcEksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQU07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J0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFhockJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQta2xhcm5hJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2tsYXJuYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2tsYXJuYS5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtIdHRwQ2xpZW50XVxuIFxufSlcbmV4cG9ydCBjbGFzcyBLbGFybmFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgc3RyaXBlOiBhbnk7XG4gICBjaGVja291dFNlcnZpY2UgOiBDaGVja291dFNlcnZpY2U7XG5cbiAgIHN0YXRpYyBodHRwID0gbmV3IEh0dHBDbGllbnQobmV3IEh0dHBYaHJCYWNrZW5kKHsgXG4gICAgYnVpbGQ6ICgpID0+IG5ldyBYTUxIdHRwUmVxdWVzdCgpIFxufSkpO1xuICBcblxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcbiAgfVxuICBcbiAgYXN5bmMgaW5pdFN0cmlwZUVsZW1lbnRzKCl7XG4gIEtsYXJuYUNvbXBvbmVudC5zdHJpcGUgPSBhd2FpdCBsb2FkU3RyaXBlKCdwa190ZXN0XzUxTFlVQ0dERXlpWDNlM1BsODlqcW1WZzFnVE4yUWhpZnl3dElsZzZBejFuaUdVVjNBTlJwQU5YSjhoZEVJandETmE4R1RCdm5yeHEzemdkUjhnRXp4Z1JUMDB1SGxmdFFuRicsIG51bGwpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCk7XG4gIH1cblxuICBwcmludEhlbGxvKCkgOiB2b2lke1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gIH1cblxuICBzdGF0aWMgcG9sbEZvclNvdXJjZVN0YXR1cyhzdHJpcGU6YW55LCBTT1VSQ0VfSUQ6c3RyaW5nLCBDTElFTlRfU0VDUkVUOnN0cmluZywgTUFYX1BPTExfQ09VTlQ6IG51bWJlciwgcG9sbENvdW50Om51bWJlciwgYW1vdW50Om51bWJlcikgOiB2b2lke1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiw6ggc3RhdGEgY2hpYW1hdGEgcG9sbCBmb3Igc291cmNlIHN0YXR1c1wiKTtcblxuICAgIHN0cmlwZS5yZXRyaWV2ZVNvdXJjZSh7aWQ6IFNPVVJDRV9JRCwgY2xpZW50X3NlY3JldDogQ0xJRU5UX1NFQ1JFVH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICB2YXIgc291cmNlID0gcmVzdWx0LnNvdXJjZTtcbiAgICAgIGlmIChzb3VyY2Uuc3RhdHVzID09PSAnY2hhcmdlYWJsZScpIHtcbiAgICAgICAgLy8gTWFrZSBhIHJlcXVlc3QgdG8geW91ciBzZXJ2ZXIgdG8gY2hhcmdlIHRoZSBTb3VyY2UuXG4gICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgQ2hhcmdlIHN0YXR1cywgc2hvdyB5b3VyIGN1c3RvbWVyIHRoZSByZWxldmFudCBtZXNzYWdlXG4gICAgICAgIEtsYXJuYUNvbXBvbmVudC5rbGFybmFQYXltZW50KFNPVVJDRV9JRCwgYW1vdW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFyZ2FibGVcIik7XG4gICAgICB9IGVsc2UgaWYgKHNvdXJjZS5zdGF0dXMgPT09ICdwZW5kaW5nJyAmJiBwb2xsQ291bnQgPCBNQVhfUE9MTF9DT1VOVCkge1xuICAgICAgICAvLyBUcnkgYWdhaW4gaW4gYSBzZWNvbmQsIGlmIHRoZSBTb3VyY2UgaXMgc3RpbGwgYHBlbmRpbmdgOlxuICAgICAgIC8vIEtsYXJuYUNvbXBvbmVudC5rbGFybmFQYXltZW50KFNPVVJDRV9JRCwgYW1vdW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwZW5kaW5nXCIpO1xuICAgICAgICBwb2xsQ291bnQgKz0gMTtcbiAgICAgICBzZXRUaW1lb3V0KCgpPT5LbGFybmFDb21wb25lbnQucG9sbEZvclNvdXJjZVN0YXR1cyhzdHJpcGUsU09VUkNFX0lELENMSUVOVF9TRUNSRVQsTUFYX1BPTExfQ09VTlQsIHBvbGxDb3VudCwgYW1vdW50KSwgMTAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIFNvdXJjZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZS5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgYXN5bmMgcGF5KGFtb3VudDpudW1iZXIpe1xuXG5cbiAgICBjb25zb2xlLmxvZyhcInN0YWkgY2VyY2FuZG8gZGkgcGFnYXJlIDogXCIgKyBhbW91bnQpO1xuXG4gICAgYXdhaXQgdGhpcy5pbml0U3RyaXBlRWxlbWVudHMoKTtcbiAgICBLbGFybmFDb21wb25lbnQuc3RyaXBlLmNyZWF0ZVNvdXJjZSh7XG4gICAgdHlwZTogJ2tsYXJuYScsXG4gICAgZmxvdzogJ3JlZGlyZWN0JyxcbiAgICByZWRpcmVjdDoge1xuICAgIHJldHVybl91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MjAwLyMvbXlPcmRlcnNcIlxuICAgIH0sXG4gICAgYW1vdW50OiBhbW91bnQgKiAxMDAsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGtsYXJuYTogeyBwcm9kdWN0OiAncGF5bWVudCcsIHB1cmNoYXNlX2NvdW50cnk6ICdJVCcgfSxcbiAgICBzb3VyY2Vfb3JkZXI6IHtcbiAgICBpdGVtczogW3tcbiAgICB0eXBlOiAnc2t1JyxcbiAgICBkZXNjcmlwdGlvbjogJ0FydGljb2xpIGNhdGFsZG8gc3RvcmUnLFxuICAgIHF1YW50aXR5OiAxLFxuICAgIGN1cnJlbmN5OiAnZXVyJyxcbiAgICBhbW91bnQ6IGFtb3VudCAqIDEwMFxuICAgIH0sXG4gICAge1xuICAgIHR5cGU6ICd0YXgnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGF4ZXMnLFxuICAgIGN1cnJlbmN5OiAnZXVyJyxcbiAgICBhbW91bnQ6IDBcbiAgICB9LFxuICAgIHtcbiAgICB0eXBlOiAnc2hpcHBpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnJlZSBTaGlwcGluZycsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGFtb3VudDogMCxcbiAgICB9XVxuICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgXG4gICAgICBcbiAgICAgIFxuICAgIFxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgXG5cblxuICAgXG4gICAgIEtsYXJuYUNvbXBvbmVudC5wb2xsRm9yU291cmNlU3RhdHVzKEtsYXJuYUNvbXBvbmVudC5zdHJpcGUsIHJlc3VsdC5zb3VyY2UuaWQsIHJlc3VsdC5zb3VyY2UuY2xpZW50X3NlY3JldCwgMTAwLCAwLCBhbW91bnQpO1xuICAgIH0sIDEwNTApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgIGxldCBwYXJhbXMgPSBgc2Nyb2xsYmFycz1ubyxyZXNpemFibGU9bm8sc3RhdHVzPW5vLGxvY2F0aW9uPW5vLHRvb2xiYXI9bm8sbWVudWJhcj1ubyxcbndpZHRoPTYwMCxoZWlnaHQ9MzAwLGxlZnQ9MTAwLHRvcD0xMDBgO1xuICAgICAgd2luZG93Lm9wZW4ocmVzdWx0LnNvdXJjZS5rbGFybmEucGF5X2xhdGVyX3JlZGlyZWN0X3VybCwgJ3Rlc3QnLCBwYXJhbXMpOyBcbiAgICB9LCAxNTApO1xuICAgIFxuICAgIH0sIGVyciA9PiB7IGNvbnNvbGUubG9nKGVycik7IH0pO1xuICAgIFxuICAgIH1cblxuXG5cbiAgICBzdGF0aWMgYXN5bmMga2xhcm5hUGF5bWVudChzb3VyY2VJZDogYW55LCBhbW91bnQ6IG51bWJlcil7XG5cblxuICAgICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9hcGkvdjEvJyArIFwiY2hhcmdlLXNvdXJjZVwiXG5cbiAgICAgIGNvbnNvbGUubG9nKFwic3RvIGNlcmNhbmRvIGRpIGNoaWFtYXJlIGlsIHNlcnZlciBzdSBxdWVzdG8gdXJsIDogXCIgKyB1cmwpO1xuICBcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g8J+Rh++4jyBjb25zdCByZXNwb25zZTogUmVzcG9uc2VcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBzb3VyY2VJZDpzb3VyY2VJZCwgXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICBcblxufVxuIiwiPHA+a2xhcm5hIHdvcmtzITwvcD5cbiJdfQ==