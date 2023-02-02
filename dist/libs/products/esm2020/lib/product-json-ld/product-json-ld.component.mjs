import { Component, Input } from '@angular/core';
import { Product123 } from '@eshop-frontend/orders';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-lite/json-ld";
export class ProductJsonLdComponent {
    constructor() {
    }
    ngOnInit() {
        console.log("nome per schgema json jd :" + this.prodotto.name);
        console.log("thi.prod= " + JSON.stringify(this.prodotto));
        this.schema = {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": this.prodotto.name,
            "image": [
                this.prodotto.images[0],
                this.prodotto.images[1],
                this.prodotto.images[2]
            ],
            "description": this.prodotto.description,
            "sku": this.sku,
            "gtin": this.sku,
            "mpn": this.prodotto.productId,
            "brand": {
                "@type": "Brand",
                "name": this.brandName
            },
            "review": {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Luca Stoian"
                }
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "89"
            },
            "offers": {
                "@type": "Offer",
                "priceValidUntil": "2023-05-01",
                "availability": "https://schema.org/InStock",
                "price": this.prodotto.price - this.prodotto.discount,
                "priceCurrency": "EUR"
            }
        };
    }
}
ProductJsonLdComponent.ɵfac = function ProductJsonLdComponent_Factory(t) { return new (t || ProductJsonLdComponent)(); };
ProductJsonLdComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductJsonLdComponent, selectors: [["eshop-frontend-product-json-ld"]], inputs: { prodotto: "prodotto", brandName: "brandName", sku: "sku" }, decls: 1, vars: 1, consts: [[3, "json"]], template: function ProductJsonLdComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "ngx-json-ld", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("json", ctx.schema);
    } }, dependencies: [i1.NgxJsonLdComponent] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductJsonLdComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-json-ld', template: `
  <ngx-json-ld [json]="schema"></ngx-json-ld>
` }]
    }], function () { return []; }, { prodotto: [{
            type: Input
        }], brandName: [{
            type: Input
        }], sku: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1qc29uLWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wcm9kdWN0LWpzb24tbGQvcHJvZHVjdC1qc29uLWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVFwRCxNQUFNLE9BQU8sc0JBQXNCO0lBaUJqQztJQUVBLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFJekQsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNkLFVBQVUsRUFBRSxxQkFBcUI7WUFDakMsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUMxQixPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUN2QjtZQUNGLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2hCLEtBQUssRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDN0IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDdkI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGNBQWMsRUFBRTtvQkFDZCxPQUFPLEVBQUUsUUFBUTtvQkFDakIsYUFBYSxFQUFFLEdBQUc7b0JBQ2xCLFlBQVksRUFBRSxHQUFHO2lCQUNsQjtnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLE1BQU0sRUFBRSxhQUFhO2lCQUN0QjthQUNGO1lBQ0QsaUJBQWlCLEVBQUU7Z0JBQ2pCLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixhQUFhLEVBQUUsSUFBSTthQUNwQjtZQUNELFFBQVEsRUFBRTtnQkFDUixPQUFPLEVBQUUsT0FBTztnQkFDaEIsaUJBQWlCLEVBQUMsWUFBWTtnQkFDOUIsY0FBYyxFQUFFLDRCQUE0QjtnQkFDNUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtnQkFDckQsZUFBZSxFQUFFLEtBQUs7YUFDdkI7U0FDRixDQUFDO0lBQ0YsQ0FBQzs7NEZBckVVLHNCQUFzQjt5RUFBdEIsc0JBQXNCO1FBSmpDLGlDQUEyQzs7UUFBOUIsaUNBQWU7O3VGQUlqQixzQkFBc0I7Y0FQbEMsU0FBUzsyQkFDRSxnQ0FBZ0MsWUFDaEM7O0NBRVg7c0NBT0MsUUFBUTtrQkFEUCxLQUFLO1lBSU4sU0FBUztrQkFEUixLQUFLO1lBSU4sR0FBRztrQkFERixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUHJvZHVjdDEyMyB9IGZyb20gJ0Blc2hvcC1mcm9udGVuZC9vcmRlcnMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXNob3AtZnJvbnRlbmQtcHJvZHVjdC1qc29uLWxkJyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5neC1qc29uLWxkIFtqc29uXT1cInNjaGVtYVwiPjwvbmd4LWpzb24tbGQ+XG5gLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWpzb24tbGQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SnNvbkxkQ29tcG9uZW50e1xuXG5cbiAgQElucHV0KClcbiAgcHJvZG90dG86IFByb2R1Y3QxMjM7XG5cbiAgQElucHV0KClcbiAgYnJhbmROYW1lOiBTdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2t1OiBTdHJpbmc7XG5cblxuXG4gIHNjaGVtYTp7fTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwibm9tZSBwZXIgc2NoZ2VtYSBqc29uIGpkIDpcIiArIHRoaXMucHJvZG90dG8ubmFtZSlcbiAgICBjb25zb2xlLmxvZyhcInRoaS5wcm9kPSBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZG90dG8pKVxuXG5cbiAgICBcbiAgICB0aGlzLnNjaGVtYSA9IHtcbiAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnL1wiLFxuICAgIFwiQHR5cGVcIjogXCJQcm9kdWN0XCIsXG4gICAgXCJuYW1lXCI6IHRoaXMucHJvZG90dG8ubmFtZSxcbiAgICBcImltYWdlXCI6IFtcbiAgICAgIHRoaXMucHJvZG90dG8uaW1hZ2VzWzBdLFxuICAgICAgdGhpcy5wcm9kb3R0by5pbWFnZXNbMV0sXG4gICAgICB0aGlzLnByb2RvdHRvLmltYWdlc1syXVxuICAgICBdLFxuICAgIFwiZGVzY3JpcHRpb25cIjogdGhpcy5wcm9kb3R0by5kZXNjcmlwdGlvbixcbiAgICBcInNrdVwiOiB0aGlzLnNrdSxcbiAgICBcImd0aW5cIiA6dGhpcy5za3UsXG4gICAgXCJtcG5cIjp0aGlzLnByb2RvdHRvLnByb2R1Y3RJZCxcbiAgICBcImJyYW5kXCI6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJCcmFuZFwiLFxuICAgICAgXCJuYW1lXCI6IHRoaXMuYnJhbmROYW1lXG4gICAgfSxcbiAgICBcInJldmlld1wiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiUmV2aWV3XCIsXG4gICAgICBcInJldmlld1JhdGluZ1wiOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJSYXRpbmdcIixcbiAgICAgICAgXCJyYXRpbmdWYWx1ZVwiOiBcIjVcIixcbiAgICAgICAgXCJiZXN0UmF0aW5nXCI6IFwiNVwiXG4gICAgICB9LFxuICAgICAgXCJhdXRob3JcIjoge1xuICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkx1Y2EgU3RvaWFuXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYWdncmVnYXRlUmF0aW5nXCI6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJBZ2dyZWdhdGVSYXRpbmdcIixcbiAgICAgIFwicmF0aW5nVmFsdWVcIjogXCI0LjlcIixcbiAgICAgIFwicmV2aWV3Q291bnRcIjogXCI4OVwiXG4gICAgfSxcbiAgICBcIm9mZmVyc1wiOiB7XG4gICAgICBcIkB0eXBlXCI6IFwiT2ZmZXJcIixcbiAgICAgIFwicHJpY2VWYWxpZFVudGlsXCI6XCIyMDIzLTA1LTAxXCIsXG4gICAgICBcImF2YWlsYWJpbGl0eVwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZy9JblN0b2NrXCIsXG4gICAgICBcInByaWNlXCI6IHRoaXMucHJvZG90dG8ucHJpY2UgLSB0aGlzLnByb2RvdHRvLmRpc2NvdW50LFxuICAgICAgXCJwcmljZUN1cnJlbmN5XCI6IFwiRVVSXCJcbiAgICB9XG4gIH07XG4gIH1cblxuICBcbiAgXG5cblxufVxuXG5cblxuXG5cblxuIl19