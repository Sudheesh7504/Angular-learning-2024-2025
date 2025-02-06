import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModuleC1Component } from './test-module-c1.component';

describe('TestModuleC1Component', () => {
  let component: TestModuleC1Component;
  let fixture: ComponentFixture<TestModuleC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestModuleC1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestModuleC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
