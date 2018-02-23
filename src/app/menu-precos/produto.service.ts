import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Produtos} from './model/produtos';

@Injectable()
export class ProdutoService {

  constructor( private http: HttpClient ) { }



}
