import {Component} from '@angular/core';
import {BoardGraphTypes} from './board-graph.types';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  type = BoardGraphTypes.crimeServers;
  label: string;
  boardGraphTypes = BoardGraphTypes;
  charts = {};

  constructor(private notification: NzNotificationService) {}

  public lineChartData: any[];
  public lineChartLabels: any[];
  public lineChartOptions: any = {
    responsive: false,
    scales: {
      xAxes: [{
        display: false
      }]
    },
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(32, 168, 216, 0.2)',
      borderColor: 'rgba(32, 168, 216, 1)',
      borderWidth: 1,
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: 'transparent',
      pointHoverBorderColor: 'rgba(32, 168, 216, 0.8)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  public onLoad($event) {
    // to cache all graph data
    const {type, data, labels, label} = $event;
    this.charts[type] = {data, labels, label};
    if (type === this.type) {
      // draw graph if data loaded is the activeType
      this.updateGraph(type);
    }
  }

  public updateGraph(activeType) {
    const {data, labels, label} = this.charts[activeType];
    // try to set new activeType
    if (data) {
      this.type = activeType;
      this.label = label;
      this.lineChartData = [{data}];
      this.lineChartLabels = labels;
    } else {
      this.notification.create('error', 'Graph Data Not Loaded',
        'Chart data is not loaded yet.');
    }
  }
}
