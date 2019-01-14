import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BoardGraphTypes} from './board/board-graph.types';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getData(graphType: BoardGraphTypes) {
    const resource = `/assets/mock/dashboard/main_graph/${graphType}_graph.json`;
    return this.http.get(resource);
  }

  getGraphTypeDisplayName(type: BoardGraphTypes) {
    switch (type) {
      case BoardGraphTypes.crimeServers:
        return 'Crime Servers';
      case BoardGraphTypes.malware:
        return 'Malware';
      case BoardGraphTypes.bots:
        return 'Bots';
      case BoardGraphTypes.credentials:
        return 'Credentials';
      case BoardGraphTypes.creditCards:
        return 'Cards';
      default:
        return 'Crime Servers';
    }
  }
}
