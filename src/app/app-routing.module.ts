import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoPageComponent } from './produto/page/produto-page.component';
import { CategoriaPageComponent } from './categoria/page/categoria-page.component';
import { DashboardPageComponent } from './dashboard/page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
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
