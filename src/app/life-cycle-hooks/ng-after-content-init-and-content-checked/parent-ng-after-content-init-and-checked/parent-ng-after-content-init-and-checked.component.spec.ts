import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgAfterContentInitAndCheckedComponent } from './parent-ng-after-content-init-and-checked.component';

describe('ParentNgAfterContentInitAndCheckedComponent', () => {
  let component: ParentNgAfterContentInitAndCheckedComponent;
  let fixture: ComponentFixture<ParentNgAfterContentInitAndCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentNgAfterContentInitAndCheckedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentNgAfterContentInitAndCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
