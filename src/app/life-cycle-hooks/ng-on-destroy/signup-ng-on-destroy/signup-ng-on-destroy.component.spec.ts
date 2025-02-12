import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupNgOnDestroyComponent } from './signup-ng-on-destroy.component';

describe('SignupNgOnDestroyComponent', () => {
  let component: SignupNgOnDestroyComponent;
  let fixture: ComponentFixture<SignupNgOnDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupNgOnDestroyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupNgOnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
