import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(public httpClient: HttpClient) { }

  getAirPorts():Observable<any> {
    return this.httpClient.get("http://www.mocky.io/v2/5d0251993100002a00ab2ea0");
  }
}
