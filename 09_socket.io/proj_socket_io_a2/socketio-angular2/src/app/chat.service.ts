import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Message } from "app/message";

@Injectable()
export class ChatService {
  private url: String = 'http://localhost:3000/chat';
  private socket;

  constructor() { }

  sendMessage(message: Message): void {
    console.log("Enviando un mensaje " + message);
    this.socket.emit("mando-un-mensaje", message);
  }

  getMessages() {
    return new Observable(
      (observer) => {
        // Conexion al servidor
          this.socket = io(this.url);
          // metodos de gesión de mensajes
          this.socket.on("connect", () => {
            console.log("Cliente conectado con id: " + this.socket.id);
          });   
          this.socket.on("mando-un-mensaje", (datos) => {
            observer.next(datos);
          });
          // Forma de unsubscribe
          return ()=> {
            this.socket.disconnect();
          };
      }
    );
  }
}
