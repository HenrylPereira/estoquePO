import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { DashboardPageComponent } from './page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PoWidgetModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    PoPageModule,
    DashboardRoutingModule,
    PoWidgetModule
  ],
})
export class DashboardModule { }
