import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModuleComp1Component } from './app-module-comp1.component';

describe('AppModuleComp1Component', () => {
  let component: AppModuleComp1Component;
  let fixture: ComponentFixture<AppModuleComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppModuleComp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppModuleComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
