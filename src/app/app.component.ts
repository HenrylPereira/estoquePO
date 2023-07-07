import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'estoquePO';

  menus: Array<PoMenuItem> = [
    {
      label: 'Início',
      icon: 'po-icon-home',
      shortLabel: 'Início',
      link: ''
    },
    {
      label: 'Produtos',
      icon: 'po-icon-document-filled',
      shortLabel: 'Produtos',
      link: 'produtos'
    },
    {
      label: 'Categorias',
      icon: 'po-icon-list',
      shortLabel: 'Categorias',
      link: 'categorias'
    },
  ];
}
