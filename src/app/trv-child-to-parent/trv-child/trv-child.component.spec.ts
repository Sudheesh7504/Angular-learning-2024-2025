import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrvChildComponent } from './trv-child.component';

describe('TrvChildComponent', () => {
  let component: TrvChildComponent;
  let fixture: ComponentFixture<TrvChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrvChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrvChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
