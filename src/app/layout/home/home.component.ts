import { Component, OnInit } from '@angular/core';
import { PoMenuItem, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'neoview-cadastroPO';

  profile: PoToolbarProfile = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1P3VmjHUbrwPZPGDP7U4VJhpoBTZqEl_Lw&usqp=CAU.png',
    subtitle: 'henry.pereira@totvs.com.br',
    title: 'Henry Lopes Pereira'
  };


  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'User data' },
    { icon: 'po-icon-company', label: 'Company data' },
    { icon: 'po-icon-settings', label: 'Settings' },
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true }
  ];

  menus: Array<PoMenuItem> = [
    {
      label: 'Dashboard',
      icon: 'po-icon-home',
      shortLabel: 'Dashboard',
      link: '/'
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
