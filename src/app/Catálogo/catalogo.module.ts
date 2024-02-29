import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { MainPageComponent } from './pages/catalogo-page/main-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { ByProductsPageComponent } from './pages/by-products-page/by-products-page.component';
import { CatalogoRoutingModule } from './catalogo-routing.module';




@NgModule({
  declarations: [
    TopBarComponent,
    ProductsComponent,
    MainPageComponent,
    ByProductsPageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    CatalogoRoutingModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class CatalogoModule { }
