import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingComponent } from './event-binding.component';

describe('EventBindingComponent', () => {
  let component: EventBindingComponent;
  let fixture: ComponentFixture<EventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter by 1', () => {
    component.counter = 1;
    component.onIncrement();
    expect(component.counter).toEqual(2);
  })

  it('should decrement counter by 1', () => {
    component.counter = 0;
    component.onDecrement();
    expect(component.counter).toEqual(0);
    component.counter = 1;
    component.onDecrement();
    expect(component.counter).toEqual(0);
  })

  it('should change color', () => {
    const mockEvent = {target : {value : 'red'}}
    component.onInputChange(mockEvent);
    expect(component.color).toBe('red');
  })
});
