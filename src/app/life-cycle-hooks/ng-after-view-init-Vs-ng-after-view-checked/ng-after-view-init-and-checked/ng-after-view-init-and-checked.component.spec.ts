import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterViewInitAndCheckedComponent } from './ng-after-view-init-and-checked.component';

describe('NgAfterViewInitAndCheckedComponent', () => {
  let component: NgAfterViewInitAndCheckedComponent;
  let fixture: ComponentFixture<NgAfterViewInitAndCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgAfterViewInitAndCheckedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgAfterViewInitAndCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
