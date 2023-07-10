import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';
import { CategoriaGetAllService } from 'src/app/categoria/services/categoria-get-all.service';
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

  public valorMax = 0;

  public optionsColumn: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: this.valorMax,
      gridLines: 7
    }
  };

  public produtoData: PoChartSerie[] = [];
  public categoriaData: PoChartSerie[] = [];
  public categoriesColumn: string[] = [];


  constructor(
    private produtosGetAll: ProdutoGetAllService,
    private categoriasGetAll: CategoriaGetAllService,
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
        produto.valor > this.valorMax ? this.valorMax = produto.valor : null;
      });

      this.dec.detectChanges();
    });
  }

  public popularChartCat(){

  }


}
