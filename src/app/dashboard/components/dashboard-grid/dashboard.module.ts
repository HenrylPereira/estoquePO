import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoFieldModule, PoLoadingModule, PoModalModule, PoPageModule, PoTableModule, PoWidgetModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
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
  exports: [DashboardComponent]
})
export class DashboardGridModule { }
