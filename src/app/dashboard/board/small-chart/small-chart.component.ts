import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DashboardService} from '../../dashboard.service';
import {BoardGraphTypes} from '../board-graph.types';

@Component({
  selector: 'app-small-chart',
  templateUrl: './small-chart.component.html',
  styleUrls: ['./small-chart.component.scss']
})
export class SmallChartComponent implements OnInit {
  @Input() type: BoardGraphTypes;
  @Output() loaded = new EventEmitter<any>();
  total = 0;
  label: string;
  graphInfo;

  public lineChartData: any[];
  public lineChartLabels: any[];
  public lineChartOptions: any = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        display: false
      }],
      xAxes: [{
        display: false
      }]
    },
    tooltips: {
      enabled: false
    }
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(10, 190, 255, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: 'transparent',
      pointHoverBorderColor: 'transparent'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.updateGraph();
  }

  updateGraph() {
    this.label = this.dashboardService.getGraphTypeDisplayName(this.type);
    this.dashboardService.getData(this.type).subscribe((response: any) => {
      const data = response.data.map(item => item.attributes.count);
      this.lineChartData = [{data}];
      this.total = data.reduce((acc, item) => acc + item, 0);
      const labels = response.data.map(item => item.attributes.date);
      this.lineChartLabels = labels;
      this.graphInfo = {data, labels, type: this.type, label: this.label};
      this.loaded.emit(this.graphInfo);
    });
  }
}
