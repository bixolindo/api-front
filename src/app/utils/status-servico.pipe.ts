import { Pipe, PipeTransform } from '@angular/core';
import StatusServico from '../classes/status-servico-class';


@Pipe({ name: 'statuspipe' })
export class StatusPipe implements PipeTransform {
    transform(value : StatusServico["status"]) {
        if (value == 1) return 'Bom';
        if (value == 2) return 'Médio';
        if (value == 3) return 'Ruim';
    }
}