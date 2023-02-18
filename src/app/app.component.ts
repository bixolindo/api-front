import { Component } from '@angular/core';
import StatusServico from './classes/status-servico-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  responsiveOptions;

  public date1: Date;
  public date2: Date;

  public piorServico = {
    autorizador: "AM",
    count: 14
  }

  public servicos: Array<StatusServico> = [
    { autorizador: "AM", status: 1, data: Date.now() },
    { autorizador: "BA", status: 1, data: Date.now() },
    { autorizador: "GO", status: 1, data: Date.now() },
    { autorizador: "MG", status: 1, data: Date.now() },
    { autorizador: "MS", status: 1, data: Date.now() },
    { autorizador: "MT", status: 1, data: Date.now() },
    { autorizador: "PE", status: 1, data: Date.now() },
    { autorizador: "PR", status: 1, data: Date.now() },
    { autorizador: "RS", status: 1, data: Date.now() },
    { autorizador: "SP", status: 1, data: Date.now() },
    { autorizador: "SVAN", status: 1, data: Date.now() },
    { autorizador: "SVRS", status: 1, data: Date.now() },
    { autorizador: "SVC-AN", status: 1, data: Date.now() },
    { autorizador: "SVC-RS", status: 1, data: Date.now() },
  ]

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
