import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import StatusServico from 'src/app/classes/status-servico-class';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  responsiveOptions;

  public date1: Date;
  public date2: Date;

  public piorServico = {
    autorizador: "Nenhum",
    count: 0
  }

  public servicos: Array<StatusServico> = []

  constructor(
    private router: Router,
    private dashboardService: DashboardService,
    public datepipe: DatePipe
  ) {
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

  ngOnInit(): void {
    this.buscarServicos();
    this.buscarPiorServico();
  }

  buscarServicos() {
    this.dashboardService.buscar().then((res: any) => {
      this.servicos = res;
      console.log(res);
    })
  }

  buscarPiorServico() {
    this.dashboardService.buscarPiorServico().then((res: any) => {
      this.piorServico = res;
    })
  }


  pesquisarPorData() {
    if (this.date1 != null && this.date2 != null) {
      let inicio = this.datepipe.transform(this.date1, 'yyyy-MM-dd');
      let fim = this.datepipe.transform(this.date2, 'yyyy-MM-dd');
      this.router.navigate([`listagem-data/${inicio}/${fim}'`])
      
    }
  }
}
