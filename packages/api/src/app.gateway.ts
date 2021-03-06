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

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private readonly messages: Array<Message>;

  private typingUsers: Array<User>;

  private logger: Logger = new Logger('AppGateway');

  constructor() {
    this.messages = [];
    this.typingUsers = [];
  }

  afterInit() {
    this.logger.log('Socket connection initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
    this.server.emit('syncMessages', this.messages);
  }

  @SubscribeMessage('userTypingApi')
  handleTyping(client: Socket, newTypingUsername: string): void {
    this.typingUsers.push({ id: client.id, nickname: newTypingUsername });
    this.server.emit('userTyping', newTypingUsername);
  }

  @SubscribeMessage('userStopTypingApi')
  handleStopTyping(client: Socket, newTypingUsername: string): void {
    this.typingUsers = this.typingUsers.filter(({ id }) => id !== client.id);
    this.server.emit('userStopTyping', newTypingUsername);
  }

  @SubscribeMessage('newMessageApi')
  handleMessage(client: Socket, newMessage: Message): void {
    this.messages.push(newMessage);
    this.server.emit('newMessage', newMessage);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
    const currentUser = this.typingUsers.find(({ id }) => id === client.id);
    if (currentUser) {
      this.server.emit('userStopTyping', currentUser.nickname);
    }
    this.typingUsers = this.typingUsers.filter(({ id }) => id !== client.id);
  }
}
