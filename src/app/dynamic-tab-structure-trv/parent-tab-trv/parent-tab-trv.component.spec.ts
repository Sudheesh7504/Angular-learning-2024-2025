import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTabTrvComponent } from './parent-tab-trv.component';

describe('ParentTabTrvComponent', () => {
  let component: ParentTabTrvComponent;
  let fixture: ComponentFixture<ParentTabTrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentTabTrvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentTabTrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
