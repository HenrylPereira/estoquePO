import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaPostInterface } from '../interfaces/categoria-post-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaUpdateService {

  constructor(private http: HttpClient) { }

  public post(produto: CategoriaPostInterface, id: string): Observable<CategoriaPostInterface> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.put<CategoriaPostInterface>(`http://localhost:8080/categoria/${id}`, produto, httpOptions);
  }
}
