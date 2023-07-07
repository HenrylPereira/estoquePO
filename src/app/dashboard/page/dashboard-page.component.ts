import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Dashboard' }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
