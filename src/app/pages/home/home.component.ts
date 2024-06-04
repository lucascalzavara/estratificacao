import { Component } from '@angular/core';
import { Grupo } from 'src/app/models/grupo';
import { HttpClient } from '@angular/common/http';
import { Estratificacao } from 'src/app/models/estratificacao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  estratificacao = new Estratificacao()

  urlToJson: string = 'assets/grupos.json';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.limpar();
  }

  obterResultado(): void {
    this.estratificacao.total = 0;
    this.estratificacao.grupos.forEach(g => {
      g.sintomas.forEach(s => {
        if (s.manifestacao) {
          this.estratificacao.total += s.peso;
        }
      })
    });
    if (this.estratificacao.total <= 40) {
      this.estratificacao.resultado = '0 - 40 | Baixo risco';
      this.estratificacao.direcionamento = 'Atenção primária';
      this.estratificacao.css = 'bg-success text-white';
    }
    else if (this.estratificacao.total <= 70) {
      this.estratificacao.resultado = '41 - 70 | Médio risco';
      this.estratificacao.direcionamento = 'Ambulatório ou CAPS';
      this.estratificacao.css = 'bg-warning text-dark';
    }
    else {
      this.estratificacao.resultado = '70 + | Alto risco';
      this.estratificacao.direcionamento = 'Ambulatório CAPS';
      this.estratificacao.css = 'bg-danger text-white';
    }
  }

  imprimir(): void {
    localStorage.setItem('estratificacao', JSON.stringify(this.estratificacao));
    window.open(window.location.origin + '/imprimir', '_blank');
  }

  limpar() {
    this.estratificacao = new Estratificacao();
    this.estratificacao.total = 0;
    this.estratificacao.resultado = '0 - 40 | Baixo risco';
    this.estratificacao.direcionamento = 'Atenção primária';
    this.estratificacao.css = 'bg-success text-white';
    this.http.get<any>(this.urlToJson).subscribe(res => {
      this.estratificacao.grupos = res;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }

  setResumida(resumida: boolean){
    this.estratificacao.resumida = resumida;
  }
}


