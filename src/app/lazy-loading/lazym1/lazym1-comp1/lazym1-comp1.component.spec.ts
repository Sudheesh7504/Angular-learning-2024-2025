import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazym1Comp1Component } from './lazym1-comp1.component';

describe('Lazym1Comp1Component', () => {
  let component: Lazym1Comp1Component;
  let fixture: ComponentFixture<Lazym1Comp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lazym1Comp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lazym1Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
