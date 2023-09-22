import { Component } from '@angular/core';
import { Grupo } from 'src/app/models/grupo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  grupos: Grupo[] = [];
  urlToJson: string = 'assets/grupos.json';

  total = 0;
  resultado = 'Baixo risco';
  direcionamento = 'Atenção primária';
  css = 'bg-success text-white';

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(res => {
      this.grupos = res;
    });
  }

  obterResultado(): void {
    this.total = 0;
    this.grupos.forEach(g => {
      g.sintomas.forEach(s => {
        if (s.manifestacao){
          this.total += s.peso;
        }
      })
    });
    if (this.total <= 40){
      this.resultado = 'Baixo risco';
      this.direcionamento = 'Atenção primária';
      this.css = 'bg-success text-white';
    }
    else if (this.total <= 70){
      this.resultado = 'Médio risco';
      this.direcionamento = 'Ambulatório ou CAPS';
      this.css = 'bg-warning text-dark';
    }
    else {
      this.resultado = 'Alto risco';
      this.direcionamento = 'Ambulatório CAPS';
      this.css = 'bg-danger text-white';
    }
  }

  imprimir(): void{
    window.print();
  }
}


