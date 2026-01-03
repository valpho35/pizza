import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CartProductService } from '../../services/cart-product.service';
import { ProductType } from 'src/types/product.type';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService]
})
export class ProductCardComponent {

  @Input() product: ProductType;

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor(public cartProductService: CartProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }

  addProductToCart() {
    this.cartProductService.count++;
  //   // this.addToCartEvent.emit(this.titleComponent.toUpper()); 
    
  //   // this.addToCartEvent.emit(this.titleComponent.title); 

  //   // Добавляем проверку
  // if (this.titleComponent) {
  //   console.log('TitleComponent доступен, title:', this.titleComponent.title);
  //   console.log('Метод toUpper():', this.titleComponent.toUpper());
    
  //   // Можно использовать toUpper() если нужно
  //   const titleToSend = this.titleComponent.toUpper(); // ИЛИ this.titleComponent.title
    
  //   this.addToCartEvent.emit(titleToSend);
  // } else {
  //   console.error('❌ TitleComponent не доступен! Используем product.title');
    this.addToCartEvent.emit(this.product.title);
  // }

  }

}
