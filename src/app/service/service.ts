import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class Service {

    headers = {
        'Content-Type': 'application/json',
        'authorization': '',
        'origem': "WEB",
        'metodo': 'NAVEGADOR',
    }

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) { }

    private enderecoBase(token?: string): string {
        return 'http://localhost:8080/api';
    }

    public buscar(enderecoConsumo: string, contentType?): Promise<any> {
        return new Promise((sucesso, error) => {
            this.httpClient.get<any>(`${this.enderecoBase()}/${enderecoConsumo}`, { headers: this.headers })
                .subscribe((response: any) => {
                    sucesso(response)
                })
        }).catch(error => console.log(error));
    }

    public salvar(enderecoConsumo: string, item: any): Promise<any> {

        return new Promise((sucesso, error) => {
            this.httpClient.post<any>(`${this.enderecoBase()}/${enderecoConsumo}`, item, { headers: this.headers })
                .subscribe((response: any) => {
                    sucesso(response)
                });
        }).catch(error => console.log(error));
    }

    public atualizar(enderecoConsumo: string, item: any): Promise<any> {
        return new Promise((sucesso, error) => {
            this.httpClient.put<any>(`${this.enderecoBase()}/${enderecoConsumo}/${item._id}`, item, { headers: this.headers })
                .subscribe((response: any) => {
                    sucesso(response)
                });
        }).catch(error => console.log(error));
    }

    public deletar(enderecoConsumo: string, item: any): Promise<any> {
        return new Promise((sucesso, error) => {
            this.httpClient.delete<any>(`${this.enderecoBase()}/${enderecoConsumo}/${item._id}`, { headers: this.headers })
                .subscribe((response: any) => {
                    sucesso(response)
                });
        }).catch(error => console.log(error));
    }
}