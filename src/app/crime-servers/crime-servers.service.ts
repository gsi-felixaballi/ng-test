import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrimeServersService {
  constructor(private http: HttpClient) {}

  list() {
    const resource = '/assets/mock/crimeserver_list/crime_servers_list.json';
    return this.http.get(resource);
  }

  get() {
    const resource = '/assets/mock/crimeserver_details/crime_servers_details.json';
    return this.http.get(resource);
  }
}
