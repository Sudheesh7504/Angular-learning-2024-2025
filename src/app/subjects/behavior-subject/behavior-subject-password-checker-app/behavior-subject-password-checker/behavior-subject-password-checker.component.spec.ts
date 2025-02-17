import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectPasswordCheckerComponent } from './behavior-subject-password-checker.component';

describe('BehaviorSubjectPasswordCheckerComponent', () => {
  let component: BehaviorSubjectPasswordCheckerComponent;
  let fixture: ComponentFixture<BehaviorSubjectPasswordCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BehaviorSubjectPasswordCheckerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorSubjectPasswordCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
