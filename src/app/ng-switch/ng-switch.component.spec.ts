import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchComponent } from './ng-switch.component';
import { NgSwitch } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NgSwitchComponent', () => {
  let component: NgSwitchComponent;
  let fixture: ComponentFixture<NgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSwitchComponent],
      imports: [FormsModule,NgSwitch],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select option', () => {
    const mockEvent = {target : {value : '+'}}
    component.optionSelector(mockEvent);
    expect(component.option).toBe('+');
  })
});
