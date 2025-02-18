import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrl: './user2.component.scss'
})
export class User2Component {
  @Input() senderMessage: any;
  @Output() replierMessageEmitter = new EventEmitter<any>();

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


  sendReplyMessage(reply: any) {
    this.replierMessageEmitter.emit(reply);
    this.chatService.storeMessageHistory('', reply);
  }
}
