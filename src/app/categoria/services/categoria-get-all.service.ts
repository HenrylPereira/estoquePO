import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { CategoriaGetInterface } from '../interfaces/categoria-get-interface';

@Injectable({ providedIn: 'root' })
export class CategoriaGetAllService {
  constructor(private http: HttpClient) { }

  get(): Observable<CategoriaGetInterface[]> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get<CategoriaGetInterface[]>(`http://localhost:8080/categoria`, httpOptions);
  }
}
