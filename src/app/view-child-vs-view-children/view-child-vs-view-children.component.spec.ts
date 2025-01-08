import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildVsViewChildrenComponent } from './view-child-vs-view-children.component';

describe('ViewChildVsViewChildrenComponent', () => {
  let component: ViewChildVsViewChildrenComponent;
  let fixture: ComponentFixture<ViewChildVsViewChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChildVsViewChildrenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildVsViewChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
