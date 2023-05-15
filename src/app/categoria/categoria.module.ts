import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { CategoriaPageComponent } from './page/categoria-page.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaGridModule } from './components/categoria-grid/categoria-grid.module';
@NgModule({
  declarations: [CategoriaPageComponent],
  imports: [
    PoPageModule,
    CategoriaGridModule,
    CategoriaRoutingModule
  ],
})
export class CategoriaModule { }
