import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(public httpClient: HttpClient) { }

  getAirPorts() {
    return this.httpClient.get("http://www.mocky.io/v2/5d0251993100002a00ab2ea0");
  }
}
