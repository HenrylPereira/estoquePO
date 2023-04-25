import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { ProdutoPageComponent } from './page/produto-page.component';
import { ProdutoRoutingModule } from './produto-routing.module';
@NgModule({
  declarations: [ProdutoPageComponent],
  imports: [
    PoPageModule,
    ProdutoRoutingModule
  ],
})
export class ProdutoModule { }
