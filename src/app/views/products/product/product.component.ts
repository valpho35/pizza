import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductType } from '../../../../types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductType;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              this.router.navigate(['/'])
            }
          });
        // if (product) {
        //   this.product = product;
        // } else {
        //   this.router.navigate(['/']);
        // }
      }
    })

    // Получаем query-параметры из URL
    // this.activatedRoute.queryParams.subscribe(params => {
    //   if (params['product']) {
    //     const productFromUrl = params['product'];
    //     this.formValues.productTitle = productFromUrl;
    //     this.cartService.product = productFromUrl;
    //   } else if (this.cartService.product) {
    //       this.formValues.productTitle = this.cartService.product;
    //     }
    //   });
  }

}
