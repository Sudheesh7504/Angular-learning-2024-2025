import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsValidationsComponent } from './reactive-forms-validations.component';

describe('ReactiveFormsValidationsComponent', () => {
  let component: ReactiveFormsValidationsComponent;
  let fixture: ComponentFixture<ReactiveFormsValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormsValidationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormsValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
