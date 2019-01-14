import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BoardComponent } from './board/board.component';
import { SmallChartComponent } from './board/small-chart/small-chart.component';

@NgModule({
  declarations: [BoardComponent, SmallChartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule
  ]
})
export class DashboardModule { }
