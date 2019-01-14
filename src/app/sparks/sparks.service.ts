import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SparksService {

  constructor(private http: HttpClient) { }

  getSparksByTag(tag, limit?, sinceId?) {
    const {API, token} = environment;
    const uri = `/tags/${tag}/sparks`;
    const headers: any = new HttpHeaders({ 'Content-Type': 'application/json',  'Authorization': `Token ${token}`});
    return this.http.get(`${API}${uri}`, {headers, params: {limit}});
  }
}
