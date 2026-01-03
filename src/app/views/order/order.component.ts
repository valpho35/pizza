import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
// import { TuiButtonModule } from '@taiga-ui/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  // imports: [TuiButtonModule],
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {

  }

  formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  ngOnInit(): void {
    // Получаем query-параметры из URL
    this.subscription = this.activatedRoute.queryParams.subscribe(params => {
      if (params['product']) {
        const productFromUrl = params['product'];
        this.formValues.productTitle = productFromUrl;
        this.cartService.product = productFromUrl;
      } else if (this.cartService.product) {
        this.formValues.productTitle = this.cartService.product;
      }
    });

    // this.activatedRoute.queryParams.subscribe(params => {
    //   if (params['product']) {
    //     this.formValues.productTitle = params['product'];
    //   }
    // }     выдает ошибку!

    // const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    // if (productParam) {
    //   this.formValues.productTitle = productParam;
    // }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  test() {
    this.subscription?.unsubscribe();
  }

  createOrder() {
    if (!this.formValues.productTitle) {
      alert('Выберите пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    //ajax
    this.subscriptionOrder = this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone,
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          alert('Спасибо за заказ');

          this.formValues = {
            productTitle: '',
            address: '',
            phone: '',
          }
        } else {
          alert('Ошибка!');
          console.log('error');
        }
      })



  }
}
