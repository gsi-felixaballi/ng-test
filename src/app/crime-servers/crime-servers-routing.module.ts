import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrimeServersDetailsComponent} from './crime-servers-details/crime-servers-details.component';
import {CrimeServersListComponent} from './crime-servers-list/crime-servers-list.component';

const routes: Routes = [
  {
    path: 'crime-servers',
    component: CrimeServersListComponent
  },
  {
    path: 'crime-servers/:id',
    component: CrimeServersDetailsComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrimeServersRoutingModule { }
