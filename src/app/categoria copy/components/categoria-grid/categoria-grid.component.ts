import { CategoriaDeleteService } from './../../services/categoria-delete.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaGetAllService } from '../../services/categoria-get-all.service';
import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { ProdutoGetInterface } from 'src/app/produto/interfaces/produto-get-interface';
import { CategoriaGetInterface } from '../../interfaces/categoria-get-interface';

@Component({
  selector: 'app-categoria-grid',
  templateUrl: './categoria-grid.component.html',
  styleUrls: ['./categoria-grid.component.scss']
})
export class CategoriaGridComponent implements OnInit {
  public categorias: any;
  constructor(private categoriaGetAllService: CategoriaGetAllService, private categoriaDeleteService: CategoriaDeleteService) { }

  ngOnInit(): void {
    this.popularTable();
  }


  public actions: Array<PoTableAction> = [
    { icon: 'po-icon po-icon-edit', label: 'Alterar' },
    { icon: 'po-icon po-icon-delete', label: 'Deletar', action: this.deletar.bind(this) }
  ];

  private popularTable(){
    this.categoriaGetAllService.get().subscribe((cate)=>{
      this.categorias = cate;
    });
  }

  private deletar(item: CategoriaGetInterface){
    this.categoriaDeleteService.delete(item.id).subscribe();
  }

  columns: Array<PoTableColumn> = [
    { property: 'id', visible: false },
    { property: 'titulo', label: 'Nome' },
    { property: 'descricao', label: 'Descricao'}
  ]

}
