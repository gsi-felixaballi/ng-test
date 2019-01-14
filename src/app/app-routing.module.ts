import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardComponent} from './dashboard/board/board.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '',
    component: BoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
