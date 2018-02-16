import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContatoService {

  constructor(private httpClient: HttpClient) { }

  enviarFormulario (objeto: any): Observable<string> {
    let headers = new HttpHeaders();

    // headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<string>(
      "http://www.kitrufas.com.br/envio-form-kitrufas.php", objeto,{});
  }

}
