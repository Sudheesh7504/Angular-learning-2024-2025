import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrl: './user1.component.scss'
})
export class User1Component {
  senderMessage: any;
  replierMessage: any;
  messagehistory: any = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getHistory().subscribe((history) => {
      this.messagehistory = history;
      if (this.messagehistory.length > 10) {
        this.messagehistory.shift();
      }
    });
  }

  sendMessage(msg: any) {
    this.senderMessage = msg;
    this.chatService.storeMessageHistory(msg);
  }

  getReply(reply: any) {
    this.replierMessage = reply;
  }
}
