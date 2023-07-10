import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoPostInterface } from '../interfaces/produto-post-interface';

@Injectable({ providedIn: 'root' })
export class ProdutoUpdateService {
  constructor(private http: HttpClient) { }

  public update(produto: ProdutoPostInterface, id: string): Observable<ProdutoPostInterface> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.put<ProdutoPostInterface>(`http://localhost:8080/produto/${id}`, produto, httpOptions);
  }
}
