import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
// import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductType } from 'src/types/product.type';
// import { ProductType } from 'src/app/types/product.type';

@Component({
   selector: 'app-products',
   templateUrl: './products.component.html',
   styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

   constructor(
      private productService: ProductService,
      private cartService: CartService,
      private router: Router,
      // private http: HttpClient
   ) { }

   products: ProductType[] = [];
   loading: boolean = true;

   // private subscription: Subscription | null = null;
   private subscriptionService: Subscription | null = null;

   ngOnInit(): void {
      // this.products = this.productService.getProducts();
      //  console.log('✅ ProductsComponent загружен, продуктов:', this.products.length);

      this.loading = true;
      this.subscriptionService = this.productService.getProducts()
      .pipe(
         tap(() => {
            this.loading = false;
         })
      )
         .subscribe({
            next: (data) => {
               this.products = data;
                console.log('Товары загружены:', data);
               // console.log('next');
            },

            error: (error) => {
               console.log(error);
               this.router.navigate(['/'])
            }
         }
         )
   }



   addToCart(title: string): void {
      this.cartService.product = title;
      this.router.navigate(['/order'], { queryParams: { product: title } });
      //     console.log('🎯 addToCart вызван с title:', title);


   }

   ngOnDestroy(): void {
   //  this.subscription?.unsubscribe();
    this.subscriptionService?.unsubscribe();
  }

}
