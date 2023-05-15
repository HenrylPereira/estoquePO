import { CategoriaGetInterface } from "src/app/categoria/interfaces/categoria-get-interface";

export interface ProdutoGetInterface {
  id: number,
  titulo: string;
  categoria: CategoriaGetInterface;
  valor: number,
  dataEntrada: Date;
  quantidade: number;
  quantidadeMax: number;
  quantidadeMin: number;
}

