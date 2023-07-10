import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }

  async login(login: string, password: string): Promise<boolean> {
    const loginEntity = { login: login, password: password };

    try {
      const response = await this.http.post<any>('http://localhost:8080/auth/login', loginEntity, { observe: 'response' }).toPromise();
      const token = response?.body?.token;
      window.localStorage.setItem('token', token);
      return true;
    } catch (error) {
      console.error('Erro na solicitação POST:', error);
      return false;
    }
  }
}
