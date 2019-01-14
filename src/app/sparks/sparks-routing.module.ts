import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SparksListComponent} from './sparks-list/sparks-list.component';

const routes: Routes = [
  {
    path: 'sparks',
    component: SparksListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SparksRoutingModule { }
