import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { MainPageComponent } from './pages/main-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    TopBarComponent,
    ProductsComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class CatalogoModule { }
