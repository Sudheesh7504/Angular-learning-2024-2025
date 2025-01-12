import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleParkingDetailsComponent } from './vehicle-parking-details.component';

describe('VehicleParkingDetailsComponent', () => {
  let component: VehicleParkingDetailsComponent;
  let fixture: ComponentFixture<VehicleParkingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleParkingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleParkingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
