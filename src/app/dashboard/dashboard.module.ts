import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { DashboardPageComponent } from './page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardGridModule } from './components/dashboard-grid/dashboard.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    PoPageModule,
    DashboardRoutingModule,
    DashboardGridModule
  ],
})
export class DashboardModule { }
