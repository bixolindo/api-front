import { Injectable } from '@angular/core';
import { Service } from 'src/app/service/service';


@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(
        private service: Service
    ) { }

    async buscar() {
        return await this.service.buscar('status-atual');
    }

    async buscarBydata(data1: String, data2: String) {
        return await this.service.buscar(`status-atual/${data1}/${data2}`);
    }

    async buscarPorEstado(uf: String) {
        return await this.service.buscar(`status-atual/${uf}`);
    }

    async buscarPiorServico() {
        return await this.service.buscar('pior-estado');
    }

}