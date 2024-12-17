import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationComponent } from './interpolation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('InterpolationComponent', () => {
  let component: InterpolationComponent;
  let fixture: ComponentFixture<InterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpolationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return number',() => {
    expect(component.num()).toBe(10);
  })
});
