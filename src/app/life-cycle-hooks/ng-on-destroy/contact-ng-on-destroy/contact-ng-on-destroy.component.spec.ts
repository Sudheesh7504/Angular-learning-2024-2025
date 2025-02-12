import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNgOnDestroyComponent } from './contact-ng-on-destroy.component';

describe('ContactNgOnDestroyComponent', () => {
  let component: ContactNgOnDestroyComponent;
  let fixture: ComponentFixture<ContactNgOnDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactNgOnDestroyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactNgOnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
