import { Component, Input } from '@angular/core';
import { Product123 } from '@eshop-frontend/orders';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-lite/json-ld";
export class ProductJsonLdComponent {
    constructor() {
    }
    ngOnInit() {
        console.log("nome per schgema json jd :" + this.prodotto.name);
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
            "sku": this.prodotto.id,
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
    } }, directives: [i1.NgxJsonLdComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductJsonLdComponent, [{
        type: Component,
        args: [{ selector: 'eshop-frontend-product-json-ld', template: `
  <ngx-json-ld [json]="schema"></ngx-json-ld>
`, styles: [""] }]
    }], function () { return []; }, { prodotto: [{
            type: Input
        }], brandName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1qc29uLWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcHJvZHVjdHMvc3JjL2xpYi9wcm9kdWN0LWpzb24tbGQvcHJvZHVjdC1qc29uLWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVFwRCxNQUFNLE9BQU8sc0JBQXNCO0lBYWpDO0lBRUEsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFOUQsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNkLFVBQVUsRUFBRSxxQkFBcUI7WUFDakMsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUMxQixPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUN2QjtZQUNGLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUzthQUN2QjtZQUNELFFBQVEsRUFBRTtnQkFDUixPQUFPLEVBQUUsUUFBUTtnQkFDakIsY0FBYyxFQUFFO29CQUNkLE9BQU8sRUFBRSxRQUFRO29CQUNqQixhQUFhLEVBQUUsR0FBRztvQkFDbEIsWUFBWSxFQUFFLEdBQUc7aUJBQ2xCO2dCQUNELFFBQVEsRUFBRTtvQkFDUixPQUFPLEVBQUUsUUFBUTtvQkFDakIsTUFBTSxFQUFFLGFBQWE7aUJBQ3RCO2FBQ0Y7WUFDRCxpQkFBaUIsRUFBRTtnQkFDakIsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLGFBQWEsRUFBRSxJQUFJO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixjQUFjLEVBQUUsNEJBQTRCO2dCQUM1QyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRO2dCQUNyRCxlQUFlLEVBQUUsS0FBSzthQUN2QjtTQUNGLENBQUM7SUFDRixDQUFDOzs0RkEzRFUsc0JBQXNCO3lFQUF0QixzQkFBc0I7UUFKakMsaUNBQTJDOztRQUE5QixpQ0FBZTs7dUZBSWpCLHNCQUFzQjtjQVBsQyxTQUFTOzJCQUNFLGdDQUFnQyxZQUNoQzs7Q0FFWDtzQ0FPQyxRQUFRO2tCQURQLEtBQUs7WUFJTixTQUFTO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBQcm9kdWN0MTIzIH0gZnJvbSAnQGVzaG9wLWZyb250ZW5kL29yZGVycyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlc2hvcC1mcm9udGVuZC1wcm9kdWN0LWpzb24tbGQnLFxuICB0ZW1wbGF0ZTogYFxuICA8bmd4LWpzb24tbGQgW2pzb25dPVwic2NoZW1hXCI+PC9uZ3gtanNvbi1sZD5cbmAsXG4gIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtanNvbi1sZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RKc29uTGRDb21wb25lbnR7XG5cblxuICBASW5wdXQoKVxuICBwcm9kb3R0bzogUHJvZHVjdDEyMztcblxuICBASW5wdXQoKVxuICBicmFuZE5hbWU6IFN0cmluZztcblxuXG4gIHNjaGVtYTp7fTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwibm9tZSBwZXIgc2NoZ2VtYSBqc29uIGpkIDpcIiArIHRoaXMucHJvZG90dG8ubmFtZSlcbiAgICBcbiAgICB0aGlzLnNjaGVtYSA9IHtcbiAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnL1wiLFxuICAgIFwiQHR5cGVcIjogXCJQcm9kdWN0XCIsXG4gICAgXCJuYW1lXCI6IHRoaXMucHJvZG90dG8ubmFtZSxcbiAgICBcImltYWdlXCI6IFtcbiAgICAgIHRoaXMucHJvZG90dG8uaW1hZ2VzWzBdLFxuICAgICAgdGhpcy5wcm9kb3R0by5pbWFnZXNbMV0sXG4gICAgICB0aGlzLnByb2RvdHRvLmltYWdlc1syXVxuICAgICBdLFxuICAgIFwiZGVzY3JpcHRpb25cIjogdGhpcy5wcm9kb3R0by5kZXNjcmlwdGlvbixcbiAgICBcInNrdVwiOiB0aGlzLnByb2RvdHRvLmlkLFxuICAgIFwiYnJhbmRcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIkJyYW5kXCIsXG4gICAgICBcIm5hbWVcIjogdGhpcy5icmFuZE5hbWVcbiAgICB9LFxuICAgIFwicmV2aWV3XCI6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJSZXZpZXdcIixcbiAgICAgIFwicmV2aWV3UmF0aW5nXCI6IHtcbiAgICAgICAgXCJAdHlwZVwiOiBcIlJhdGluZ1wiLFxuICAgICAgICBcInJhdGluZ1ZhbHVlXCI6IFwiNVwiLFxuICAgICAgICBcImJlc3RSYXRpbmdcIjogXCI1XCJcbiAgICAgIH0sXG4gICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwiTHVjYSBTdG9pYW5cIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJhZ2dyZWdhdGVSYXRpbmdcIjoge1xuICAgICAgXCJAdHlwZVwiOiBcIkFnZ3JlZ2F0ZVJhdGluZ1wiLFxuICAgICAgXCJyYXRpbmdWYWx1ZVwiOiBcIjQuOVwiLFxuICAgICAgXCJyZXZpZXdDb3VudFwiOiBcIjg5XCJcbiAgICB9LFxuICAgIFwib2ZmZXJzXCI6IHtcbiAgICAgIFwiQHR5cGVcIjogXCJPZmZlclwiLFxuICAgICAgXCJhdmFpbGFiaWxpdHlcIjogXCJodHRwczovL3NjaGVtYS5vcmcvSW5TdG9ja1wiLFxuICAgICAgXCJwcmljZVwiOiB0aGlzLnByb2RvdHRvLnByaWNlIC0gdGhpcy5wcm9kb3R0by5kaXNjb3VudCxcbiAgICAgIFwicHJpY2VDdXJyZW5jeVwiOiBcIkVVUlwiXG4gICAgfVxuICB9O1xuICB9XG5cbiAgXG4gIFxuXG5cbn1cblxuXG5cblxuXG5cbiJdfQ==