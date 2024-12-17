import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NgForDirectiveComponent } from './ng-for-directive.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSwitch } from '@angular/common';

describe('NgForDirectiveComponent', () => {
  let component: NgForDirectiveComponent;
  let fixture: ComponentFixture<NgForDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgForDirectiveComponent],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgForDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide the loader after 5 seconds', fakeAsync(() => {
    component.ngOnInit();
    expect(component.showLoader).toBe(true);
    tick(5000);
    expect(component.showLoader).toBe(false);
  }));
});
