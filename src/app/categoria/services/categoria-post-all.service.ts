import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, take, throwError } from 'rxjs';
import { CategoriaPostInterface } from '../interfaces/categoria-post-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaCreateService {
  constructor(private http: HttpClient) { }

  public post(categoria: CategoriaPostInterface): Observable<CategoriaPostInterface> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post<CategoriaPostInterface>(`http://localhost:8080/categoria`, categoria, httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle error here if needed
          return throwError(error);
        })
      );
  }
}
