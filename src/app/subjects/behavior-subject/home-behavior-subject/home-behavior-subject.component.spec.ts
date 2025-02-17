import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBehaviorSubjectComponent } from './home-behavior-subject.component';

describe('HomeBehaviorSubjectComponent', () => {
  let component: HomeBehaviorSubjectComponent;
  let fixture: ComponentFixture<HomeBehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBehaviorSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
