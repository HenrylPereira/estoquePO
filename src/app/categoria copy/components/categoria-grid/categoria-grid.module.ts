import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaGridComponent } from './categoria-grid.component';
import { PoButtonModule, PoFieldModule, PoLoadingModule, PoModalModule, PoPageModule, PoTableModule, PoWidgetModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoriaGridComponent],
  imports: [
    CommonModule,
    PoTableModule,
    PoFieldModule,
    PoPageModule,
    PoWidgetModule,
    PoButtonModule,
    PoLoadingModule,
    PoModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CategoriaGridComponent]
})
export class CategoriaGridModule { }
