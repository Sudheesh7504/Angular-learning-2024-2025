import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgAfterContentInitAndCheckedComponent } from './child-ng-after-content-init-and-checked.component';

describe('ChildNgAfterContentInitAndCheckedComponent', () => {
  let component: ChildNgAfterContentInitAndCheckedComponent;
  let fixture: ComponentFixture<ChildNgAfterContentInitAndCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildNgAfterContentInitAndCheckedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildNgAfterContentInitAndCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
