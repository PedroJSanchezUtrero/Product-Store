import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'shop',
    loadChildren: () => import('./Catálogo/catalogo.module').then(m => m.CatalogoModule)
  
  },
  {
    path: '**',
    redirectTo: '/shop/home',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
