import { CategoriaDeleteService } from './../../services/categoria-delete.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaGetAllService } from '../../services/categoria-get-all.service';
import { PoModalAction, PoModalComponent, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { CategoriaGetInterface } from '../../interfaces/categoria-get-interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaCreateService } from '../../services/categoria-post-all.service';

@Component({
  selector: 'app-categoria-grid',
  templateUrl: './categoria-grid.component.html',
  styleUrls: ['./categoria-grid.component.scss']
})
export class CategoriaGridComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  public categorias: any;
  public form!: FormGroup;
  public editMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaGetAllService: CategoriaGetAllService,
    private categoriaDeleteService: CategoriaDeleteService,
    private categoriaCreateService: CategoriaCreateService
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.popularTable();
  }

  public createForm() {
    this.form = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required]),
      descricao: new FormControl('', []),
    })
  }


  public actions: Array<PoTableAction> = [
    { icon: 'po-icon po-icon-edit', label: 'Alterar' },
    { icon: 'po-icon po-icon-delete', label: 'Deletar', action: this.deletar.bind(this) }
  ];


  private popularTable() {
    this.categoriaGetAllService.get().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  private deletar(item: CategoriaGetInterface){
    this.categoriaDeleteService.delete(item.id).subscribe();
    this.atualizar();
  }

  columns: Array<PoTableColumn> = [
    { property: 'id', visible: false },
    { property: 'titulo', label: 'Nome' },
    { property: 'descricao', label: 'Descricao'}
  ]

  public async atualizar(){
    this.popularTable();
  }

  confirm: PoModalAction = {
    action: () => {
      this.salvar();
    },
    label: 'Confirmar'
  };

  public salvar() {
    if (this.form.valid) {
      this.categoriaCreateService.create(this.form.value).subscribe(() => {
        this.poModal.close();
        this.atualizar();
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
