import { ProdutoCreateService } from './../../services/produto-create.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { ProdutoGetAllService } from '../../services/produto-get-all.service';
import { ProdutoGetInterface } from '../../interfaces/produto-get-interface';
import { ProdutoDeleteService } from '../../services/produto-delete.service';
import { CategoriaGetAllService } from 'src/app/categoria/services/categoria-get-all.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-grid',
  templateUrl: './produto-grid.component.html',
  styleUrls: ['./produto-grid.component.scss']
})
export class ProdutoGridComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  public produtos: any;
  public ModalProduto !: PoModalAction
  public categorias: any;
  public form!: FormGroup;

  constructor(
    private produtoGetAllService: ProdutoGetAllService,
    private categoriaGetAllService: CategoriaGetAllService,
    private produtoCreateService: ProdutoCreateService,
    private formBuilder: FormBuilder
    ) { }


  ngOnInit(): void {
    this.createForm();
    this.popularTable();
    this.buscarCategorias();
  }

  public createForm() {
    this.form = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      quantidade: new FormControl('', [Validators.required]),
      dataEntrada: new FormControl(''),
      categoriaId: new FormControl(''),
      quantidadeMin: new FormControl(''),
      quantidadeMax: new FormControl(''),
    })
  }

  public buscarCategorias() {
      this.categorias = [];
      this.categoriaGetAllService.get().subscribe((adicionais)=>{
        this.categorias = adicionais;
        adicionais.forEach((adicional)=>{
          this.categorias.push({ value: adicional.id, label: adicional.titulo });
        })
      });
   }

  private popularTable(){
    this.produtoGetAllService.get().subscribe((prod)=>{
      this.produtos = prod;
    });
  }

  public actions: Array<PoTableAction> = [
    { icon: 'po-icon po-icon-edit', label: 'Alterar' },
    { icon: 'po-icon po-icon-delete', label: 'Deletar', action: this.deletar.bind(this) }
  ];

  private deletar(item: ProdutoGetInterface){
    //this.produtoDeleteService.delete(item.id).subscribe();
  }

  columns: Array<PoTableColumn> = [
    { property: 'id', visible: false },
    { property: 'titulo', label: 'Nome' },
    { property: 'dataEntrada', label: 'Data Adição', type: 'date' },
    { property: 'valor', label: 'Valor', type: 'currency', format: 'BRL', width: '10%' },
    { property: 'quantidade', label: 'Quantidade' },
    { property: 'quantidadeMin', label: 'Quantidade Mínima' }
  ]


  confirm: PoModalAction = {
    action: () => {
      this.salvar();
    },
    label: 'Confirmar'
  };

  public salvar() {
    if (this.form.valid) {
      this.produtoCreateService.create(this.form.value).subscribe(() => {
        this.popularTable();
        this.poModal.close();
        this.form.reset();
      });
    }
  }

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Close',
    danger: true
  };

  closeModal() {
    this.poModal.close();
  }

}
