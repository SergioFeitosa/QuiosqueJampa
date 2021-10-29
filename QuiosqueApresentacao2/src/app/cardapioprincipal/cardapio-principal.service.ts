import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = environment.ApiURL;

@Injectable({
  providedIn: 'root',
})
export class CardapioPrincipalService{
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  enviarCodigo(telefone: string, message: string) {
    console.log('servico de enviar mensagem');
    console.log('telefone' + telefone);
    console.log('codigo' + message);
    return this.http
      .post(
        API_URL + '/send-message',
        { telefone, message },
        { observe: 'response'}
      );
    }
}
