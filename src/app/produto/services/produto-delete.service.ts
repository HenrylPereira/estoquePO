import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ProdutoGetInterface } from '../interfaces/produto-get-interface';

@Injectable({ providedIn: 'root' })
export class ProdutoDeleteService {
  constructor(private http: HttpClient) { }

  delete(id: string): Observable<ProdutoGetInterface[]> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.delete<ProdutoGetInterface[]>(`http://localhost:8080/produto/${id}`, httpOptions);
  }
}
