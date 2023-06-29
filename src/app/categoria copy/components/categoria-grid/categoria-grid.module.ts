import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaGridComponent } from './categoria-grid.component';
import { PoButtonModule, PoFieldModule, PoLoadingModule, PoPageModule, PoTableModule, PoWidgetModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [CategoriaGridComponent],
  imports: [
    CommonModule,
    PoTableModule,
    PoFieldModule,
    PoPageModule,
    PoWidgetModule,
    PoButtonModule,
    PoLoadingModule
  ],
  exports: [CategoriaGridComponent]
})
export class CategoriaGridModule { }
