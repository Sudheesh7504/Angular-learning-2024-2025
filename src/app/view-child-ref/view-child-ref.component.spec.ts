import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildRefComponent } from './view-child-ref.component';

describe('ViewChildRefComponent', () => {
  let component: ViewChildRefComponent;
  let fixture: ComponentFixture<ViewChildRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChildRefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
