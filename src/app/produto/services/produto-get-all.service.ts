import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ProdutoGetInterface } from '../interfaces/produto-get-interface';

@Injectable({ providedIn: 'root' })
export class ProdutoGetAllService {
  constructor(private http: HttpClient) { }

  get(): Observable<ProdutoGetInterface[]> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get<ProdutoGetInterface[]>(`http://localhost:8080/produto`, httpOptions);
  }
}
