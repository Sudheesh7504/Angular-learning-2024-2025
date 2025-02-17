import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBehaviorSubjectComponent } from './products-behavior-subject.component';

describe('ProductsBehaviorSubjectComponent', () => {
  let component: ProductsBehaviorSubjectComponent;
  let fixture: ComponentFixture<ProductsBehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsBehaviorSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
