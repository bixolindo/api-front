import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { StatusPipe } from './utils/status-servico.pipe';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaComponent } from './pages/lista/lista.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DatePipe } from '@angular/common'
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    ListaComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    CarouselModule,
    ButtonModule,
    TableModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
