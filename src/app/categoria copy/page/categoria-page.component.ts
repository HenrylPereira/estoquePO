import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.component.html',
  styleUrls: ['./categoria-page.component.scss']
})
export class CategoriaPageComponent implements OnInit {

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Categoria' }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
