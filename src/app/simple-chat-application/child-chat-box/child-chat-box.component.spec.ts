import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChatBoxComponent } from './child-chat-box.component';

describe('ChildChatBoxComponent', () => {
  let component: ChildChatBoxComponent;
  let fixture: ComponentFixture<ChildChatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildChatBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
