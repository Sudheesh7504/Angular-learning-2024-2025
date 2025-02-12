import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgDoCheckComponent } from './parent-ng-do-check.component';

describe('ParentNgDoCheckComponent', () => {
  let component: ParentNgDoCheckComponent;
  let fixture: ComponentFixture<ParentNgDoCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentNgDoCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentNgDoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
