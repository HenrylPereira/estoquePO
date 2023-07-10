import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from './login.interface';
import { catchError, of, tap, take, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }

  async login(login: string, password: string): Promise<boolean> {
    const loginEntity = { username: login, password: password };
    let response: HttpResponse<any> | undefined;

    try {
      response = await this.http.post<any>('http://localhost:8080/login', loginEntity, { observe: 'response' }).toPromise();
      const headers = response!.headers;
      const token = headers.get('Authorization') ?? '';
      window.localStorage.setItem('token', token);
      return true;
    } catch (error) {
      console.error('Erro na solicitação POST:', error);
      return false;
    }
  }
}
