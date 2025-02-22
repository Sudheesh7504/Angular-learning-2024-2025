import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMapOperatorComponent } from './contact-map-operator.component';

describe('ContactMapOperatorComponent', () => {
  let component: ContactMapOperatorComponent;
  let fixture: ComponentFixture<ContactMapOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactMapOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactMapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
