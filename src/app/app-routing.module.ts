import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoPageComponent } from './produto/page/produto-page.component';
import { ProdutoModule } from './produto/produto.module';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutoPageComponent,
    loadChildren: () => import('./produto/produto.module').then((m) => m.ProdutoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
