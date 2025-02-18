import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockUpdatesReplaySubjectComponent } from './stock-updates-replay-subject.component';

describe('StockUpdatesReplaySubjectComponent', () => {
  let component: StockUpdatesReplaySubjectComponent;
  let fixture: ComponentFixture<StockUpdatesReplaySubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockUpdatesReplaySubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockUpdatesReplaySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
