import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractingUsersDataComponent } from './extracting-users-data.component';

describe('ExtractingUsersDataComponent', () => {
  let component: ExtractingUsersDataComponent;
  let fixture: ComponentFixture<ExtractingUsersDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtractingUsersDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtractingUsersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
