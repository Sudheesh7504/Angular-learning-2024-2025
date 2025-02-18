import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatHistorySubject = new ReplaySubject<any>(10);
  chatHistory: any = [];
  constructor() { }

  storeMessageHistory(senderMessage?: any, replierMessage?: any) {
    if (senderMessage) {
      const newMessage = { senderMessage, replierMessage: null };
      this.chatHistory.push(newMessage);
    } else if (replierMessage) {
      const lastMessage = this.chatHistory[this.chatHistory.length - 1];
      if (lastMessage) {
        lastMessage.replierMessage = replierMessage;
      }
    }
    this.chatHistorySubject.next([...this.chatHistory]);
  }

  getHistory() {
    return this.chatHistorySubject.asObservable();
  }
}
