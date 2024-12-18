import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChatBoxComponent } from './parent-chat-box.component';

describe('ParentChatBoxComponent', () => {
  let component: ParentChatBoxComponent;
  let fixture: ComponentFixture<ParentChatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentChatBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
