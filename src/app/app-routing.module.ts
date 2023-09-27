import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrintComponent } from './pages/print/print.component';

const routes: Routes = [
  {
    path: '',
    title: 'Estratificação',
    component: HomeComponent
  },
  {
    path: 'imprimir',
    title: 'Estratificação',
    component: PrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
