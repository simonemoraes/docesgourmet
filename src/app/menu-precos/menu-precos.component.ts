import { Component, OnInit } from '@angular/core';
import {Produtos} from './model/produtos';

@Component({
  selector: 'app-menu-precos',
  templateUrl: './menu-precos.component.html',
  styleUrls: ['./menu-precos.component.css']
})
export class MenuPrecosComponent implements OnInit {

  prod: Produtos;

  constructor() { }

  ngOnInit() {
    this.getProdutos();
  }

  public getProdutos(){
    this.prod.produto = 'Docinho convencial'
    this.prod.tipo = 'Cento'
    this.prod.preco = 45.00


  }

}
