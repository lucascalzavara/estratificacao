import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estratificacao } from 'src/app/models/estratificacao';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent {
  estratificacao = new Estratificacao();
  agora = new Date();


  constructor(private router: Router){}

  ngOnInit(): void {
    let estratificacao = localStorage.getItem('estratificacao');
    if (estratificacao){
      this.estratificacao = JSON.parse(estratificacao);
      window.print();
    }
    else{
      this.router.navigate(['']);
    }
  }
}
