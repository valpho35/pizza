import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './views/layout.component';
// import { MainComponent } from './views/home/main/main.component';
// import { ProductsComponent } from './views/products/products/products.component';
// import { OrderComponent } from './views/order/order.component';
// import { AboutComponent } from './views/home/about/about.component';
// import { ProductComponent } from './views/products/product/product.component';


const routes: Routes = [
  // { path: '', component: MainComponent }, // Главная страница
  // { path: 'products', component: ProductsComponent }, // Все продукты
  // { path: 'products/:id', component: ProductComponent }, // Детали продукта
  // { path: 'order', component: OrderComponent }, // Страница заказа
  // { path: 'about', component: AboutComponent }, // О нас
  // { path: '**', redirectTo: '' }, // Все остальные пути -> главная
  // { path: '', component: ProductsComponent },
  {path: 'pizzas', redirectTo: 'products'},

  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)},
      {path: 'order', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)},
      {path: 'products', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)}
    ]
  }
  // { 
  //   path: '', 
  //   loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) 
  // },
  // { 
  //   path: 'products', 
  //   loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule) 
  // },
  // { 
  //   path: 'order', 
  //   loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule) 
  // },
  // { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
