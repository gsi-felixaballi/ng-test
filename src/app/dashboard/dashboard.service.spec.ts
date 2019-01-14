import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {BoardGraphTypes} from './board/board-graph.types';

import {DashboardService} from './dashboard.service';

describe('DashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientTestingModule]}));

  it('Should Be Created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });

  it('Get Graph Type Display Name', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service.getGraphTypeDisplayName(BoardGraphTypes.crimeServers)).toEqual('Crime Servers');
    expect(service.getGraphTypeDisplayName(BoardGraphTypes.malware)).toEqual('Malware');
    expect(service.getGraphTypeDisplayName(BoardGraphTypes.bots)).toEqual('Bots');
  });
});
