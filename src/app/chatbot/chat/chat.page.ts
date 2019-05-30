import { Component } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  public message: Message;
  public messages: Message[];

  constructor() {
    this.message = new Message('', 'person');
    this.messages = [
      new Message('Hola', 'pulse', new Date())
    ];
  }

}
