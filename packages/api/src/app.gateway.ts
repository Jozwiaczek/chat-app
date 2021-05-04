import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface Message {
  body: string;
  senderId: string;
}

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private readonly messages: Array<Message>;

  private logger: Logger = new Logger('AppGateway');

  constructor() {
    this.messages = [];
  }

  @SubscribeMessage('newMessageApi')
  handleMessage(client: Socket, newMessage: Message): void {
    this.messages.push(newMessage);
    this.server.emit('newMessage', newMessage);
  }

  afterInit() {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
    this.server.emit('syncMessages', this.messages);
  }
}
