import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoFieldModule, PoLoadingModule, PoPageModule, PoTableModule, PoWidgetModule } from '@po-ui/ng-components';
import { ProdutoGridComponent } from './produto-grid.component';


@NgModule({
  declarations: [ProdutoGridComponent],
  imports: [
    CommonModule,
    PoTableModule,
    PoFieldModule,
    PoPageModule,
    PoWidgetModule,
    PoButtonModule,
    PoLoadingModule
  ],
  exports: [ProdutoGridComponent]
})
export class ProdutoGridModule { }
