import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  parkingData = [
    { id: '1', registration: 'KA01AB1234', vehicleType: '4-Wheeler', parkingTime: '3' },
    { id: '2', registration: 'TN05CD5678', vehicleType: '2-Wheeler', parkingTime: '1' },
    { id: '3', registration: 'AP16EF9012', vehicleType: '4-Wheeler', parkingTime: '5' },
    { id: '4', registration: 'KL11GH3456', vehicleType: '4-Wheeler', parkingTime: '2' },
    { id: '5', registration: 'KA03IJ7890', vehicleType: '2-Wheeler', parkingTime: '4' },
    { id: '6', registration: 'TN22KL4321', vehicleType: '4-Wheeler', parkingTime: '6' },
    { id: '7', registration: 'AP09MN8765', vehicleType: '2-Wheeler', parkingTime: '8' },
    { id: '8', registration: 'KL07OP5432', vehicleType: '4-Wheeler', parkingTime: '3' },
    { id: '9', registration: 'KA04QR9876', vehicleType: '2-Wheeler', parkingTime: '2' },
    { id: '10', registration: 'TN11ST6543', vehicleType: '4-Wheeler', parkingTime: '5' },
    { id: '11', registration: 'AP01UV1234', vehicleType: '4-Wheeler', parkingTime: '7' },
    // { id: '12', registration: 'KL13WX5678', vehicleType: '2-Wheeler', parkingTime: '4' },
  ];

  constructor() { }
}
