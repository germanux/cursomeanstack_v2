import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from "app/chat.service";
import { Message } from '../message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
  private connection;
  private messages: Message[] = [];
  private message: Message;

  constructor(private service: ChatService) { }

  sendMessage() {
    console.log("Mensaje a enviar por component: " + this.message);
    this.service.sendMessage(this.message);
  }

  ngOnInit() {
    this.message = new Message("", "");
    this.connection = this.service.getMessages().subscribe(
      (newMessage: Message) => {
        console.log("Nuevo mensaje recibido!", newMessage);
        this.messages.push(newMessage);
      }
    )
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
