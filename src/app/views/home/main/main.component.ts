import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Subject, Subscription } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { CartService } from 'src/app/shared/services/cart.service';
import { environment } from 'src/environments/environment';
import { ProductType } from 'src/types/product.type';

// import * as bootstrap from "bootstrap";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  private subject: Subject<number>;

  products: ProductType[] = [];

  constructor(public cartService: CartService,
    private modalService: NgbModal

  ) {

    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);
  }
  private subscription: Subscription | null = null;

  // @ViewChild('popup')
  //   popup!: TemplateRef<ElementRef>;
  

  ngOnInit(): void {
  
    console.log(environment.production);

    this.subscription = this.subject
      .subscribe(
        {
          next: (param: number) => {
            console.log('subscriber 1: ', param);
          },
          error: (error: string) => {
            console.log('ERROR! ' + error);
          }
        }
      );
  }

  // ngAfterViewInit(): void {
  //   // ✅ Инициализация после рендеринга шаблона
  //   this.showBootstrapModal();
  // }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit(): void {
    this.popupComponent.open();

    // const modalRef = this.modalService.open(PopupComponent);
		// modalRef.componentInstance.data = 'Main component';

    // this.modalService.open(this.popup, {});
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  test() {
        // ✅ Открываем попап при клике на кнопку "Выбрать пиццу"
    // this.popupComponent.open();

    this.subject
      .pipe(
        map(number => {
          return 'Число: ' + number
        })
      )
      .subscribe((param: string) => {
        console.log('subscriber 2: ', param);
      });
  }
}


