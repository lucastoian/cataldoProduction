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
        let variantEan = "";
        try {
            variantEan = this.prodotto.variants[0].EAN;
        }
        catch {
        }
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
            "sku": variantEan,
            "gtin": variantEan,
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
ProductJsonLdComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductJsonLdComponent, selectors: [["eshop-frontend-product-json-ld"]], inputs: { prodotto: "prodotto", brandName: "brandName" }, decls: 1, vars: 1, consts: [[3, "json"]], template: function ProductJsonLdComponent_Template(rf, ctx) { if (rf & 1) {
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1qc29uLWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wcm9kdWN0LWpzb24tbGQvcHJvZHVjdC1qc29uLWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVFwRCxNQUFNLE9BQU8sc0JBQXNCO0lBYWpDO0lBRUEsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUN6RCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDbkIsSUFBRztZQUNELFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7U0FDM0M7UUFBQSxNQUFLO1NBRUw7UUFHRCxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ2QsVUFBVSxFQUFFLHFCQUFxQjtZQUNqQyxPQUFPLEVBQUUsU0FBUztZQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQzFCLE9BQU8sRUFBRTtnQkFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0YsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVztZQUN4QyxLQUFLLEVBQUUsVUFBVTtZQUNqQixNQUFNLEVBQUUsVUFBVTtZQUNsQixLQUFLLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTO1lBQzdCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQ3ZCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixjQUFjLEVBQUU7b0JBQ2QsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGFBQWEsRUFBRSxHQUFHO29CQUNsQixZQUFZLEVBQUUsR0FBRztpQkFDbEI7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLE9BQU8sRUFBRSxRQUFRO29CQUNqQixNQUFNLEVBQUUsYUFBYTtpQkFDdEI7YUFDRjtZQUNELGlCQUFpQixFQUFFO2dCQUNqQixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixhQUFhLEVBQUUsS0FBSztnQkFDcEIsYUFBYSxFQUFFLElBQUk7YUFDcEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLGlCQUFpQixFQUFDLFlBQVk7Z0JBQzlCLGNBQWMsRUFBRSw0QkFBNEI7Z0JBQzVDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVE7Z0JBQ3JELGVBQWUsRUFBRSxLQUFLO2FBQ3ZCO1NBQ0YsQ0FBQztJQUNGLENBQUM7OzRGQXRFVSxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQUpqQyxpQ0FBMkM7O1FBQTlCLGlDQUFlOzt1RkFJakIsc0JBQXNCO2NBUGxDLFNBQVM7MkJBQ0UsZ0NBQWdDLFlBQ2hDOztDQUVYO3NDQU9DLFFBQVE7a0JBRFAsS0FBSztZQUlOLFNBQVM7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFByb2R1Y3QxMjMgfSBmcm9tICdAZXNob3AtZnJvbnRlbmQvb3JkZXJzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VzaG9wLWZyb250ZW5kLXByb2R1Y3QtanNvbi1sZCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZ3gtanNvbi1sZCBbanNvbl09XCJzY2hlbWFcIj48L25neC1qc29uLWxkPlxuYCxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC1qc29uLWxkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEpzb25MZENvbXBvbmVudHtcblxuXG4gIEBJbnB1dCgpXG4gIHByb2RvdHRvOiBQcm9kdWN0MTIzO1xuXG4gIEBJbnB1dCgpXG4gIGJyYW5kTmFtZTogU3RyaW5nO1xuXG5cbiAgc2NoZW1hOnt9O1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IFxuICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJub21lIHBlciBzY2hnZW1hIGpzb24gamQgOlwiICsgdGhpcy5wcm9kb3R0by5uYW1lKVxuICAgIGNvbnNvbGUubG9nKFwidGhpLnByb2Q9IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kb3R0bykpXG4gICAgbGV0IHZhcmlhbnRFYW4gPSBcIlwiXG4gICAgdHJ5e1xuICAgICAgdmFyaWFudEVhbiA9IHRoaXMucHJvZG90dG8udmFyaWFudHNbMF0uRUFOXG4gICAgfWNhdGNoe1xuXG4gICAgfVxuXG4gICAgXG4gICAgdGhpcy5zY2hlbWEgPSB7XG4gICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZy9cIixcbiAgICBcIkB0eXBlXCI6IFwiUHJvZHVjdFwiLFxuICAgIFwibmFtZVwiOiB0aGlzLnByb2RvdHRvLm5hbWUsXG4gICAgXCJpbWFnZVwiOiBbXG4gICAgICB0aGlzLnByb2RvdHRvLmltYWdlc1swXSxcbiAgICAgIHRoaXMucHJvZG90dG8uaW1hZ2VzWzFdLFxuICAgICAgdGhpcy5wcm9kb3R0by5pbWFnZXNbMl1cbiAgICAgXSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IHRoaXMucHJvZG90dG8uZGVzY3JpcHRpb24sXG4gICAgXCJza3VcIjogdmFyaWFudEVhbixcbiAgICBcImd0aW5cIiA6dmFyaWFudEVhbixcbiAgICBcIm1wblwiOnRoaXMucHJvZG90dG8ucHJvZHVjdElkLFxuICAgIFwiYnJhbmRcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIkJyYW5kXCIsXG4gICAgICBcIm5hbWVcIjogdGhpcy5icmFuZE5hbWVcbiAgICB9LFxuICAgIFwicmV2aWV3XCI6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJSZXZpZXdcIixcbiAgICAgIFwicmV2aWV3UmF0aW5nXCI6IHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlJhdGluZ1wiLFxuICAgICAgICBcInJhdGluZ1ZhbHVlXCI6IFwiNVwiLFxuICAgICAgICBcImJlc3RSYXRpbmdcIjogXCI1XCJcbiAgICAgIH0sXG4gICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiTHVjYSBTdG9pYW5cIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJhZ2dyZWdhdGVSYXRpbmdcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIkFnZ3JlZ2F0ZVJhdGluZ1wiLFxuICAgICAgXCJyYXRpbmdWYWx1ZVwiOiBcIjQuOVwiLFxuICAgICAgXCJyZXZpZXdDb3VudFwiOiBcIjg5XCJcbiAgICB9LFxuICAgIFwib2ZmZXJzXCI6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgXCJwcmljZVZhbGlkVW50aWxcIjpcIjIwMjMtMDUtMDFcIixcbiAgICAgIFwiYXZhaWxhYmlsaXR5XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnL0luU3RvY2tcIixcbiAgICAgIFwicHJpY2VcIjogdGhpcy5wcm9kb3R0by5wcmljZSAtIHRoaXMucHJvZG90dG8uZGlzY291bnQsXG4gICAgICBcInByaWNlQ3VycmVuY3lcIjogXCJFVVJcIlxuICAgIH1cbiAgfTtcbiAgfVxuXG4gIFxuICBcblxuXG59XG5cblxuXG5cblxuXG4iXX0=