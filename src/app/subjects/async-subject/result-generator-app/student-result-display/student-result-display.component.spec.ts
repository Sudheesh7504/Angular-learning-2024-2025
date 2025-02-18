import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResultDisplayComponent } from './student-result-display.component';

describe('StudentResultDisplayComponent', () => {
  let component: StudentResultDisplayComponent;
  let fixture: ComponentFixture<StudentResultDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentResultDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentResultDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
