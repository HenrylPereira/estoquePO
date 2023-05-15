import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { ProdutoGetAllService } from '../../services/produto-get-all.service';

@Component({
  selector: 'app-produto-grid',
  templateUrl: './produto-grid.component.html',
  styleUrls: ['./produto-grid.component.scss']
})
export class ProdutoGridComponent implements OnInit {
  public produtos: any;
  constructor(private produtoGetAllService: ProdutoGetAllService) { }

  ngOnInit(): void {
    this.popularTable();
  }

  private popularTable(){
    this.produtoGetAllService.get().subscribe((prod)=>{
      this.produtos = prod;
    });
  }

  columns: Array<PoTableColumn> = [
    { property: 'id', visible: false },
    { property: 'titulo', label: 'Nome' },
    { property: 'dataEntrada', label: 'Data Adição', type: 'date' },
    { property: 'valor', label: 'Valor', type: 'currency', format: 'BRL', width: '10%' },
    { property: 'quantidade', label: 'Quantidade' },
    { property: 'quantidadeMin', label: 'Quantidade Mínima' }
  ]

}
