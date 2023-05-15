import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { ProdutoPageComponent } from './page/produto-page.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoGridModule } from './components/produto-grid/produto-grid.module';
@NgModule({
  declarations: [ProdutoPageComponent],
  imports: [
    PoPageModule,
    ProdutoGridModule,
    ProdutoRoutingModule
  ],
})
export class ProdutoModule { }
