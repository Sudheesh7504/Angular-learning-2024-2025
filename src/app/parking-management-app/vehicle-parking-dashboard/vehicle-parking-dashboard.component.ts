import { Component } from '@angular/core';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-vehicle-parking-dashboard',
  templateUrl: './vehicle-parking-dashboard.component.html',
  styleUrl: './vehicle-parking-dashboard.component.scss'
})
export class VehicleParkingDashboardComponent {

  constructor(private parkingService: ParkingService) { }
  parkingDetails = this.parkingService.parkingData;
}
