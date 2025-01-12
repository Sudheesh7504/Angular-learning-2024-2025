import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleParkingHomeComponent } from './vehicle-parking-home.component';

describe('VehicleParkingHomeComponent', () => {
  let component: VehicleParkingHomeComponent;
  let fixture: ComponentFixture<VehicleParkingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleParkingHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleParkingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
