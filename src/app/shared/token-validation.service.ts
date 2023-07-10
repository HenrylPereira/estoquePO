import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenValidationService {
  validateToken(): boolean {
    const token = localStorage.getItem('token');

    // Verificar se o token existe
    if (!token) {
      return false;
    }

    // Realizar a validação do token de acordo com a sua lógica específica
    // Por exemplo, verificar se o token está expirado ou se é válido

    // Verificar se o token está expirado
    const expirationDate = this.getTokenExpirationDate(token);
    if (expirationDate && expirationDate < new Date()) {
      return false;
    }

    // Aqui você pode adicionar outras validações, como verificar a autenticidade do token
    return true; // Token válido
  }

  private getTokenExpirationDate(token: string): Date | null {
    // Extrair a data de expiração do token (exemplo: se o token contiver um campo 'exp' com a data de expiração)
    // Aqui você precisa implementar a lógica para obter a data de expiração do seu token específico

    // Exemplo: Se o token for um JWT (JSON Web Token)
    const tokenPayload = this.decodeTokenPayload(token);
    if (tokenPayload && tokenPayload.exp) {
      const expirationTimestamp = parseInt(tokenPayload.exp, 10) * 1000; // Converter para milissegundos
      return new Date(expirationTimestamp);
    }

    return null; // Caso não seja possível obter a data de expiração
  }

  private decodeTokenPayload(token: string): any {
    // Decodificar o payload do token (exemplo: se o token for um JWT)
    // Aqui você precisa implementar a lógica para decodificar o payload do seu token específico

    // Exemplo: Decodificar um JWT
    const tokenPayloadBase64 = token.split('.')[1];
    try {
      const tokenPayloadJson = atob(tokenPayloadBase64);
      return JSON.parse(tokenPayloadJson);
    } catch (error) {
      console.error('Erro ao decodificar o payload do token:', error);
      return null;
    }
  }
}
