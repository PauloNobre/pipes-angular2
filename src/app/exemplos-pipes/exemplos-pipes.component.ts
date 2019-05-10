import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any= {
    titulo: 'A Guerra dos Tronos. As Crônicas de Gelo e Fogo - Livro 1',
    rating: 4.6548,
    numeroPaginas: 592,
    preco: 63.12,
    dataLancamento: new Date(2015, 8, 15),
    url: 'https://www.amazon.com.br/Guerra-Tronos-Cr%C3%B4nicas-Gelo-Fogo/dp/8544102921'
  };

  livros = ['Java', 'Angular 2'];

  filtro: string;

  constructor() { }

  ngOnInit() {
  }

  addLivro(livro: string) {
    this.livros.push(livro);
  }

  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }
    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = Observable.interval(2000).
                          map(valor => 'Valor assíncrono 2');
}
