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
            localStorage.setItem("amount", amount.toString());
            setTimeout(() => {
                KlarnaComponent.pollForSourceStatus(KlarnaComponent.stripe, result.source.id, result.source.client_secret, 100, 0, amount);
            }, 1050);
            setTimeout(() => {
                let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;
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
        args: [{ selector: 'eshop-frontend-klarna', providers: [HttpClient], template: "<p>klarna works!</p>\n", styles: [""] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xhcm5hLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9rbGFybmEva2xhcm5hLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBVWxFLE1BQU0sT0FBTyxlQUFlO0lBa0IxQjtJQUVBLENBQUM7SUFWRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0I7UUFDeEIsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyw2R0FBNkcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvSixDQUFDO0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQVUsRUFBRSxTQUFnQixFQUFFLGFBQW9CLEVBQUUsY0FBc0IsRUFBRSxTQUFnQixFQUFFLE1BQWE7UUFFcEksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQU07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QkFBYTtRQUFBLGlCQUFJOzt1RkRhUCxlQUFlO2NBUDNCLFNBQVM7MkJBQ0UsdUJBQXVCLGFBR3RCLENBQUMsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBYaHJCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLWtsYXJuYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9rbGFybmEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9rbGFybmEuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbSHR0cENsaWVudF1cbiBcbn0pXG5leHBvcnQgY2xhc3MgS2xhcm5hQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIHN0cmlwZTogYW55O1xuICAgY2hlY2tvdXRTZXJ2aWNlIDogQ2hlY2tvdXRTZXJ2aWNlO1xuXG4gICBzdGF0aWMgaHR0cCA9IG5ldyBIdHRwQ2xpZW50KG5ldyBIdHRwWGhyQmFja2VuZCh7IFxuICAgIGJ1aWxkOiAoKSA9PiBuZXcgWE1MSHR0cFJlcXVlc3QoKSBcbn0pKTtcbiAgXG5cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gIHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCk7XG4gIH1cbiAgXG4gIGFzeW5jIGluaXRTdHJpcGVFbGVtZW50cygpe1xuICBLbGFybmFDb21wb25lbnQuc3RyaXBlID0gYXdhaXQgbG9hZFN0cmlwZSgncGtfdGVzdF81MUxZVUNHREV5aVgzZTNQbDg5anFtVmcxZ1ROMlFoaWZ5d3RJbGc2QXoxbmlHVVYzQU5ScEFOWEo4aGRFSWp3RE5hOEdUQnZucnhxM3pnZFI4Z0V6eGdSVDAwdUhsZnRRbkYnLCBudWxsKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRTdHJpcGVFbGVtZW50cygpO1xuICB9XG5cbiAgcHJpbnRIZWxsbygpIDogdm9pZHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICB9XG5cbiAgc3RhdGljIHBvbGxGb3JTb3VyY2VTdGF0dXMoc3RyaXBlOmFueSwgU09VUkNFX0lEOnN0cmluZywgQ0xJRU5UX1NFQ1JFVDpzdHJpbmcsIE1BWF9QT0xMX0NPVU5UOiBudW1iZXIsIHBvbGxDb3VudDpudW1iZXIsIGFtb3VudDpudW1iZXIpIDogdm9pZHtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIsOoIHN0YXRhIGNoaWFtYXRhIHBvbGwgZm9yIHNvdXJjZSBzdGF0dXNcIik7XG5cbiAgICBzdHJpcGUucmV0cmlldmVTb3VyY2Uoe2lkOiBTT1VSQ0VfSUQsIGNsaWVudF9zZWNyZXQ6IENMSUVOVF9TRUNSRVR9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHJlc3VsdC5zb3VyY2U7XG4gICAgICBpZiAoc291cmNlLnN0YXR1cyA9PT0gJ2NoYXJnZWFibGUnKSB7XG4gICAgICAgIC8vIE1ha2UgYSByZXF1ZXN0IHRvIHlvdXIgc2VydmVyIHRvIGNoYXJnZSB0aGUgU291cmNlLlxuICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIENoYXJnZSBzdGF0dXMsIHNob3cgeW91ciBjdXN0b21lciB0aGUgcmVsZXZhbnQgbWVzc2FnZVxuICAgICAgICBLbGFybmFDb21wb25lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmdhYmxlXCIpO1xuICAgICAgfSBlbHNlIGlmIChzb3VyY2Uuc3RhdHVzID09PSAncGVuZGluZycgJiYgcG9sbENvdW50IDwgTUFYX1BPTExfQ09VTlQpIHtcbiAgICAgICAgLy8gVHJ5IGFnYWluIGluIGEgc2Vjb25kLCBpZiB0aGUgU291cmNlIGlzIHN0aWxsIGBwZW5kaW5nYDpcbiAgICAgICAvLyBLbGFybmFDb21wb25lbnQua2xhcm5hUGF5bWVudChTT1VSQ0VfSUQsIGFtb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGVuZGluZ1wiKTtcbiAgICAgICAgcG9sbENvdW50ICs9IDE7XG4gICAgICAgc2V0VGltZW91dCgoKT0+S2xhcm5hQ29tcG9uZW50LnBvbGxGb3JTb3VyY2VTdGF0dXMoc3RyaXBlLFNPVVJDRV9JRCxDTElFTlRfU0VDUkVULE1BWF9QT0xMX0NPVU5ULCBwb2xsQ291bnQsIGFtb3VudCksIDEwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBTb3VyY2Ugc3RhdHVzLCBzaG93IHlvdXIgY3VzdG9tZXIgdGhlIHJlbGV2YW50IG1lc3NhZ2UuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIGFzeW5jIHBheShhbW91bnQ6bnVtYmVyKXtcblxuXG4gICAgY29uc29sZS5sb2coXCJzdGFpIGNlcmNhbmRvIGRpIHBhZ2FyZSA6IFwiICsgYW1vdW50KTtcblxuICAgIGF3YWl0IHRoaXMuaW5pdFN0cmlwZUVsZW1lbnRzKCk7XG4gICAgS2xhcm5hQ29tcG9uZW50LnN0cmlwZS5jcmVhdGVTb3VyY2Uoe1xuICAgIHR5cGU6ICdrbGFybmEnLFxuICAgIGZsb3c6ICdyZWRpcmVjdCcsXG4gICAgcmVkaXJlY3Q6IHtcbiAgICByZXR1cm5fdXJsOiBcImh0dHBzOi8vY2F0YWxkb3Byb2R1Y3Rpb24uaGVyb2t1YXBwLmNvbS8jL2tsYXJuYXBheW1lbnRcIlxuICAgIH0sXG4gICAgYW1vdW50OiBhbW91bnQgKiAxMDAsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGtsYXJuYTogeyBwcm9kdWN0OiAncGF5bWVudCcsIHB1cmNoYXNlX2NvdW50cnk6ICdJVCcgfSxcbiAgICBzb3VyY2Vfb3JkZXI6IHtcbiAgICBpdGVtczogW3tcbiAgICB0eXBlOiAnc2t1JyxcbiAgICBkZXNjcmlwdGlvbjogJ0FydGljb2xpIGNhdGFsZG8gc3RvcmUnLFxuICAgIHF1YW50aXR5OiAxLFxuICAgIGN1cnJlbmN5OiAnZXVyJyxcbiAgICBhbW91bnQ6IGFtb3VudCAqIDEwMFxuICAgIH0sXG4gICAge1xuICAgIHR5cGU6ICd0YXgnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGF4ZXMnLFxuICAgIGN1cnJlbmN5OiAnZXVyJyxcbiAgICBhbW91bnQ6IDBcbiAgICB9LFxuICAgIHtcbiAgICB0eXBlOiAnc2hpcHBpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnJlZSBTaGlwcGluZycsXG4gICAgY3VycmVuY3k6ICdldXInLFxuICAgIGFtb3VudDogMCxcbiAgICB9XVxuICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0ID0gXCIgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNsaWVudElkXCIsIHJlc3VsdC5zb3VyY2UuaWQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbW91bnRcIiwgYW1vdW50LnRvU3RyaW5nKCkpO1xuICAgICAgXG4gICAgICBcbiAgICBcblxuICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgIFxuXG5cbiAgIFxuICAgICBLbGFybmFDb21wb25lbnQucG9sbEZvclNvdXJjZVN0YXR1cyhLbGFybmFDb21wb25lbnQuc3RyaXBlLCByZXN1bHQuc291cmNlLmlkLCByZXN1bHQuc291cmNlLmNsaWVudF9zZWNyZXQsIDEwMCwgMCwgYW1vdW50KTtcbiAgICB9LCAxMDUwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICBsZXQgcGFyYW1zID0gYHNjcm9sbGJhcnM9bm8scmVzaXphYmxlPW5vLHN0YXR1cz1ubyxsb2NhdGlvbj1ubyx0b29sYmFyPW5vLG1lbnViYXI9bm8sXG53aWR0aD02MDAsaGVpZ2h0PTMwMCxsZWZ0PTEwMCx0b3A9MTAwYDtcbiAgICAgIHdpbmRvdy5vcGVuKHJlc3VsdC5zb3VyY2Uua2xhcm5hLnBheV9sYXRlcl9yZWRpcmVjdF91cmwsICdfYmxhbmsnKTsgXG4gICAgfSwgMTUwKTtcbiAgICBcbiAgICB9LCBlcnIgPT4geyBjb25zb2xlLmxvZyhlcnIpOyB9KTtcbiAgICBcbiAgICB9XG5cblxuXG4gICAgc3RhdGljIGFzeW5jIGtsYXJuYVBheW1lbnQoc291cmNlSWQ6IGFueSwgYW1vdW50OiBudW1iZXIpe1xuXG5cbiAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2NhdGFsZG9wcm9kdWN0aW9uLmhlcm9rdWFwcC5jb20vYXBpL3YxLycgKyBcImNoYXJnZS1zb3VyY2VcIlxuXG4gICAgICBjb25zb2xlLmxvZyhcInN0byBjZXJjYW5kbyBkaSBjaGlhbWFyZSBpbCBzZXJ2ZXIgc3UgcXVlc3RvIHVybCA6IFwiICsgdXJsKTtcbiAgXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIPCfkYfvuI8gY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc291cmNlSWQ6c291cmNlSWQsIFxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgXG5cbn1cbiIsIjxwPmtsYXJuYSB3b3JrcyE8L3A+XG4iXX0=