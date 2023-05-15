import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoPageComponent } from './produto/page/produto-page.component';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaPageComponent } from './categoria/page/categoria-page.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutoPageComponent,
    loadChildren: () => import('./produto/produto.module').then((m) => m.ProdutoModule)
  },
  {
    path: 'categorias',
    component: CategoriaPageComponent,
    loadChildren: () => import('./categoria/categoria.module').then((m) => m.CategoriaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
