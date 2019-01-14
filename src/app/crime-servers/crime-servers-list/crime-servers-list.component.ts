import { Component, OnInit } from '@angular/core';
import {finalize} from 'rxjs/operators';
import {CrimeServersService} from '../crime-servers.service';

interface ILinks {
  first: string;
  last: string;
  previous: string|null;
  next: string|null;
}

@Component({
  selector: 'app-crime-servers-list',
  templateUrl: './crime-servers-list.component.html',
  styleUrls: ['./crime-servers-list.component.scss']
})
export class CrimeServersListComponent implements OnInit {
  dataSet = [];
  count: number;
  pages: number;
  links: ILinks;
  loading = false;
  extraTemplate;

  constructor(private crimeServersService: CrimeServersService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.loading = true;
    this.crimeServersService.list().pipe(finalize(() => this.loading = false)).subscribe(({data, meta, links}: any) => {
      const {count, limit} = meta.pagination;
      this.count = count;
      this.links = links;
      this.pages = Math.ceil(count / limit);
      const records = data.map(({id, attributes}) => {
        return {
          key: id,
          seen: attributes.first_seen || '-',
          url: attributes.crime_server_url || '-',
          type: attributes.main_type || '-',
          subType: attributes.subtype_name || '-',
          status: attributes.status,
          tmSeen: attributes.last_seen || '-',
          tmStatus: '-',
          evidences: attributes.credentials_count,
          api: '-',
          freeApi: '-',
        };
      });
      this.dataSet = records;
    });
  }
}
