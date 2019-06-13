import { Component, OnInit } from '@angular/core';
import { AirportService } from '../airport.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  airPorts = ["No Airports available yet"];
  constructor(public airPortService: AirportService) { }

  ngOnInit() {
  }

  getAirports() {
   
    if(sessionStorage.getItem("airPorts") == null || this.airPorts.length == 0) {
      console.log("Getting Remote Airport");
      this.airPortService.getAirPorts().subscribe(result => {
        console.log(result);
        this.airPorts = result.airPorts;
        sessionStorage.setItem("airPorts", JSON.stringify(this.airPorts));
      });
    }
    else {
      console.log("Getting Local Airport");
      this.airPorts = JSON.parse(sessionStorage.getItem("airPorts"));
    }
  }

  deleteAirports() {
    console.log("Deleting Airport");
    this.airPorts = ["Deleted all the airports"];
    sessionStorage.removeItem("airPorts");
  }

}
