import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModuleComponentComponent } from './http-module-component.component';

describe('HttpModuleComponentComponent', () => {
  let component: HttpModuleComponentComponent;
  let fixture: ComponentFixture<HttpModuleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpModuleComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
