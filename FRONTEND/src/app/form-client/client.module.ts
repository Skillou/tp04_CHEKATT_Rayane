import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailClientComponent} from "../detail-client/detail-client.component";
import {FormClientComponent} from "./form-client.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'register', component: FormClientComponent },
  { path: 'result', component: DetailClientComponent }
];

@NgModule({
  declarations: [
    FormClientComponent,
    DetailClientComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})


export class ClientModule { }
