import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgDoCheckComponent } from './child-ng-do-check.component';

describe('ChildNgDoCheckComponent', () => {
  let component: ChildNgDoCheckComponent;
  let fixture: ComponentFixture<ChildNgDoCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildNgDoCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildNgDoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
