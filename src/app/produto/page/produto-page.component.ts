import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-produto-page',
  templateUrl: './produto-page.component.html',
  styleUrls: ['./produto-page.component.scss']
})
export class ProdutoPageComponent implements OnInit {

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Produtos' }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
