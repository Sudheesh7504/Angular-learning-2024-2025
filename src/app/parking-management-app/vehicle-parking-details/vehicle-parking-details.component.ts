import { Component } from '@angular/core';
import { ParkingService } from '../parking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-parking-details',
  templateUrl: './vehicle-parking-details.component.html',
  styleUrl: './vehicle-parking-details.component.scss'
})
export class VehicleParkingDetailsComponent {

  constructor(private parkingService: ParkingService, private route: ActivatedRoute) { }
  vpData: any;
  parkingAmount: any;

  ngOnInit() {
    let vid = this.route.snapshot.paramMap.get('id');
    this.vpData = this.parkingService.parkingData.find((v) => v.id === vid);
    if (this.vpData.vehicleType === '2-wheeler') {
      this.parkingAmount = 25 * +this.vpData.parkingTime;
    } else {
      this.parkingAmount = 35 * +this.vpData.parkingTime;
    }
  }


}
