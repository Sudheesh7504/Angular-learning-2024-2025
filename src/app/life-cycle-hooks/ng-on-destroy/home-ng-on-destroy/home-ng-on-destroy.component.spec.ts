import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNgOnDestroyComponent } from './home-ng-on-destroy.component';

describe('HomeNgOnDestroyComponent', () => {
  let component: HomeNgOnDestroyComponent;
  let fixture: ComponentFixture<HomeNgOnDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeNgOnDestroyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeNgOnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
