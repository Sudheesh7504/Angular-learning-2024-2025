import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackButtonClicksComponent } from './track-button-clicks.component';

describe('TrackButtonClicksComponent', () => {
  let component: TrackButtonClicksComponent;
  let fixture: ComponentFixture<TrackButtonClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackButtonClicksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackButtonClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
