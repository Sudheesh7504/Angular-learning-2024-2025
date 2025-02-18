import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectCounterDisplayComponent } from './behavior-subject-counter-display.component';

describe('BehaviorSubjectCounterDisplayComponent', () => {
  let component: BehaviorSubjectCounterDisplayComponent;
  let fixture: ComponentFixture<BehaviorSubjectCounterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BehaviorSubjectCounterDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorSubjectCounterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
