import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { ProdutoGetInterface } from '../interfaces/produto-get-interface';
@Injectable({providedIn: 'root'})
export class ProdutoGetAllService {
  constructor(private http: HttpClient) { }
  get(): Observable<ProdutoGetInterface[]> {
    return this.http.get<ProdutoGetInterface[]>(`http://localhost:8080/produto`)
  }
}
