import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardHeaderComponent } from './route-guard-header.component';

describe('RouteGuardHeaderComponent', () => {
  let component: RouteGuardHeaderComponent;
  let fixture: ComponentFixture<RouteGuardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteGuardHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteGuardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
