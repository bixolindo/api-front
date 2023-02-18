import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import StatusServico from 'src/app/classes/status-servico-class';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

  public date1: Date;
  public date2: Date;

  first = 0;

  rows = 10;

  public servicos: Array<StatusServico> = []

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    public datepipe: DatePipe

  ) { }

  ngOnInit(): void {
    this.date1 = new Date(this.route.snapshot.paramMap.get('dtInicio'));
    this.date2 = new Date(this.route.snapshot.paramMap.get('dtFim'));
    this.buscarServicosPorData();
  }

  buscarServicosPorData() {
    const inicio = this.datepipe.transform(this.date1, 'yyyy-MM-dd');
    const fim = this.datepipe.transform(this.date2, 'yyyy-MM-dd');
    console.log(inicio, fim);
    
    this.dashboardService.buscarBydata(inicio, fim).then((res: any) => {
      this.servicos = res;
    })
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.servicos ? this.first === (this.servicos.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.servicos ? this.first === 0 : true;
  }
}
