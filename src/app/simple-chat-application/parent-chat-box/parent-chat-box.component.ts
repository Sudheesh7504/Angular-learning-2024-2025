import { Component } from '@angular/core'
import { ChildChatBoxComponent } from "../child-chat-box/child-chat-box.component";

@Component({
  selector: 'app-parent-chat-box',
  templateUrl: './parent-chat-box.component.html',
  styleUrl: './parent-chat-box.component.scss',
})
export class ParentChatBoxComponent {
  receivedMsgFromChild: string = '';
  sendReplyToChild: string = '';

  receiveMessagefromChild(messageFromChild: any) {
    this.receivedMsgFromChild = messageFromChild;
  }

  replyToChild(reply: any) {
    this.sendReplyToChild = reply;
  }

}
