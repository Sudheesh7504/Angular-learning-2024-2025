import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnChangesComponent } from './child-on-changes.component';

describe('ChildOnChangesComponent', () => {
  let component: ChildOnChangesComponent;
  let fixture: ComponentFixture<ChildOnChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildOnChangesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
