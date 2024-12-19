import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrvParentComponent } from './trv-parent.component';

describe('TrvParentComponent', () => {
  let component: TrvParentComponent;
  let fixture: ComponentFixture<TrvParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrvParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrvParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
