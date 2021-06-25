import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ElementComponent } from './element/element.component';
import { ElementDetailComponent } from './element-detail/element-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'element/:atomicNumber', component: ElementDetailComponent },
  { path: '', component: TableComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ElementComponent,
    ElementDetailComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
