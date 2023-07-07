import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';
import { ProdutoGetInterface } from 'src/app/produto/interfaces/produto-get-interface';
import { ProdutoGetAllService } from 'src/app/produto/services/produto-get-all.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Dashboard' }]
  };

  public optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7
    }
  };

  public produtoData: PoChartSerie[] = [];
  public categoriesColumn: string[] = [];

  constructor(
    private produtosGetAll: ProdutoGetAllService,
    private dec: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.populaTable();
  }

  public populaTable(): void {
    this.produtosGetAll.get().subscribe((produtos: ProdutoGetInterface[]) => {
      this.produtoData = produtos.map((produto) => ({
        label: produto.titulo,
        data: [produto.quantidade],
        type: PoChartType.Column
      }));
  
      this.categoriesColumn = [];
      produtos.forEach((produto) => {
        this.categoriesColumn.push(produto.quantidade.toString());
      });
  
      this.dec.detectChanges();
    });
  }
  
  
}
