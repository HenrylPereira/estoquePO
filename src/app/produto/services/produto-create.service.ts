import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, take, throwError } from 'rxjs';
import { ProdutoPostInterface } from '../interfaces/produto-post-interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoCreateService {

  constructor(private http: HttpClient) { }

  public create(produto: ProdutoPostInterface): Observable<ProdutoPostInterface> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post<ProdutoPostInterface>(`http://localhost:8080/produto`, produto, httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle error here if needed
          return throwError(error);
        })
      );
  }
}
