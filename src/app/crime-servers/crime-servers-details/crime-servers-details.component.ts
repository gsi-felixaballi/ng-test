import {Component, OnInit} from '@angular/core';
import {CrimeServersService} from '../crime-servers.service';

@Component({
  selector: 'app-crime-servers-details',
  templateUrl: './crime-servers-details.component.html',
  styleUrls: ['./crime-servers-details.component.scss']
})
export class CrimeServersDetailsComponent implements OnInit {
  public data;
  public doughnutChartLabels: string[] = ['Percent Complete', 'Rest'];
  public doughnutChartData1;
  public doughnutChartColors1;
  public doughnutChartData2;
  public doughnutChartColors2;
  public doughnutChartType = 'doughnut';
  public doughnutChartOptions = {
    responsive: true,
    cutoutPercentage: 88,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  };
  public node_data = [];
  public link_data = [];

  constructor(private crimeServersService: CrimeServersService) {}

  ngOnInit() {
    this.crimeServersService.get().subscribe(({data}: any) => {
      this.data = data.attributes;
      const chart1 = this.extractChartData(this.data.confidence);
      this.doughnutChartData1 = chart1.data;
      this.doughnutChartColors1 = [{
        backgroundColor: chart1.colors,
        borderWidth: [0, 0]
      }];
      const chart2 = this.extractChartData(this.data.threat_score);
      this.doughnutChartData2 = chart2.data;
      this.doughnutChartColors2 = [{
        backgroundColor: chart2.colors,
        borderWidth: [0, 0]
      }];
      this.createGraph(this.data);
    });
  }

  createGraph(data) {
    this.node_data = [];
    this.link_data = [];
    // to draw graph
    // node 1 will be indicator
    // create a node for each tag and connect with indicator node
    // create a node for ip and connect in two ways with indicator
    let key = 1;
    this.node_data
      .push({key, text: data.indicator, color: 'pink', ip: '192.168.1.1', status: 'green', icon: '/assets/images/nnode.png'});
    key++;
    for (const tag of data.tags) {
      this.node_data
        .push({key, text: tag, color: 'purple', ip: '192.168.1.1', status: 'green', icon: '/assets/images/nnode.png'});
      this.link_data.push({from: 1, to: key});
      key++;
    }
    this.node_data
      .push({key, text: data.ip, color: 'green', ip: '192.168.1.1', status: 'green', icon: '/assets/images/nnode.png'});
    this.link_data.push({from: 1, to: key});
    this.link_data.push({from: key, to: 1});
  }

  extractChartData(value) {
    return {data: [value, 100 - value], colors: value >= 85 ? ['#31a354', '#e0e0e0'] : ['#dd0000', '#e0e0e0']};
  }
}
