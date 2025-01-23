import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormControlComponent } from './simple-form-control.component';

describe('SimpleFormControlComponent', () => {
  let component: SimpleFormControlComponent;
  let fixture: ComponentFixture<SimpleFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleFormControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
