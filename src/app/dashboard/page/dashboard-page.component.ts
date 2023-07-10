import { CategoriaGetInterface } from 'src/app/categoria/interfaces/categoria-get-interface';
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
  public coffeConsumingChartType: PoChartType = PoChartType.Donut;
  public totalQuantidades = 0;
  public totalProdutos = 0;
  public maiorQuantidade = "";
  public menorQuantidade = "";
  public quantMaior = 0;
  public quantMenor = 0;

  constructor(
    private produtosGetAll: ProdutoGetAllService,
    private categoriasGetAll: CategoriaGetAllService,
    private dec: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.populaTable();
    this.popularChartCat();
  }

  public populaTable(): void {
    this.produtosGetAll.get().subscribe((produtos: ProdutoGetInterface[]) => {
      produtos.sort((a, b) => a.quantidade - b.quantidade);

      const produtoMaiorQuantidade = produtos[produtos.length - 1];
      const produtoMenorQuantidade = produtos[0];

      this.maiorQuantidade = produtoMaiorQuantidade.titulo;
      this.menorQuantidade = produtoMenorQuantidade.titulo;
      this.quantMaior = produtoMaiorQuantidade.quantidade;
      this.quantMenor = produtoMenorQuantidade.quantidade;

      this.produtoData = produtos.map((produto) => ({
        label: produto.titulo,
        data: [produto.quantidade],
        type: PoChartType.Column,
      }));

      this.categoriesColumn = [];
      produtos.forEach((produto) => {
        this.totalProdutos++;
        this.categoriesColumn.push(produto.quantidade.toString());
        produto.valor > this.valorMax ? (this.valorMax = produto.valor) : null;
      });

      this.dec.detectChanges();
    });
  }

  public popularChartCat(): void {
    this.categoriasGetAll.get().subscribe((categorias: CategoriaGetInterface[]) => {
      categorias.forEach((x)=>{
        this.totalQuantidades++;
      })
      this.categoriaData = categorias.map((categoria) => {
        return {
          label: categoria.titulo,
          data: categoria.quantidade
        };
      });
    });
  }

}
