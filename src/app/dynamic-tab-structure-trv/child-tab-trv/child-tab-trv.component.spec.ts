import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTabTrvComponent } from './child-tab-trv.component';

describe('ChildTabTrvComponent', () => {
  let component: ChildTabTrvComponent;
  let fixture: ComponentFixture<ChildTabTrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildTabTrvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildTabTrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
