import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-chat-box',
  templateUrl: './child-chat-box.component.html',
  styleUrl: './child-chat-box.component.scss'
})
export class ChildChatBoxComponent {
  msgToParent: string = "";
  @Output() sendMsgtoParentEmitter = new EventEmitter<any>();
  @Input() replyFromParent: string = '';

  sendMsgToParent(cmsg: any) {
    this.msgToParent = cmsg;
    this.sendMsgtoParentEmitter.emit(this.msgToParent);
  }

}
