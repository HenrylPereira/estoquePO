import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { CategoriaContent, CategoriaGetInterface } from '../interfaces/categoria-get-interface';
@Injectable({providedIn: 'root'})
export class CategoriaGetAllService {
  constructor(private http: HttpClient) { }
  get(): Observable<CategoriaGetInterface[]> {
    return this.http.get<CategoriaGetInterface[]>(`http://localhost:8080/categoria`)
  }
}
