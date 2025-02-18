import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectDecrementCounterComponent } from './behavior-subject-decrement-counter.component';

describe('BehaviorSubjectDecrementCounterComponent', () => {
  let component: BehaviorSubjectDecrementCounterComponent;
  let fixture: ComponentFixture<BehaviorSubjectDecrementCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BehaviorSubjectDecrementCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorSubjectDecrementCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
