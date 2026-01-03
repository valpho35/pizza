import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TitleComponent } from './components/title/title.component';
import { IsChickenDirective } from './directives/is-chicken.directive';
import { ChickenDescriptionPipe } from './pipes/chicken-description.pipe';
import { ChickenProductsPipe } from './pipes/chicken-products.pipe';
import { WordUpperPipe } from './pipes/word-upper.pipe';
import { RouterModule } from '@angular/router';
import { CoolInputDirective } from './directives/cool-input.directive';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { PopupComponent } from './components/popup/popup.component';
// import { LayoutComponent } from '../views/layout.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    FooterComponent,
    HeaderComponent,
    PopupComponent
    // LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    FooterComponent,
    HeaderComponent,
    PopupComponent,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
    // LayoutComponent,
  ]
})
export class SharedModule { }
