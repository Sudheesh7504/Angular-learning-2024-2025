import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectIncrementCounterComponent } from './behavior-subject-increment-counter.component';

describe('BehaviorSubjectIncrementCounterComponent', () => {
  let component: BehaviorSubjectIncrementCounterComponent;
  let fixture: ComponentFixture<BehaviorSubjectIncrementCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BehaviorSubjectIncrementCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorSubjectIncrementCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
