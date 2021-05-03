import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { v5 as uuid5 } from 'uuid';

const SOCKET_SERVER_URL = 'http://192.168.1.7:3030';

interface Message {
  id: string;
  body: string;
  senderId: string;
  nickname: string;
  createdAt: Date;
}

const useChat = () => {
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  useEffect(() => {
    const internalSocket = socketIOClient(SOCKET_SERVER_URL);

    internalSocket.on('msgToClient', (newMessage: Message) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    internalSocket.on('syncMessages', (syncMessages: Array<Message>) => {
      setMessages(syncMessages);
    });

    setSocket(internalSocket);

    return () => {
      internalSocket.disconnect();
      setSocket(undefined);
    };
  }, []);

  const sendMessage = (messageBody: string, nickname: string) => {
    if (!socket) {
      return;
    }

    const createdAt = new Date();
    const messagesUuidNamespace = '1b671a64-40d5-491e-99b0-da01ff1f3341';
    const messageId = uuid5(createdAt.toDateString(), messagesUuidNamespace);

    const emitPayload: Message = {
      id: messageId,
      body: messageBody,
      senderId: socket.id,
      nickname,
      createdAt,
    };

    socket.emit('msgToServer', emitPayload);
  };

  return { messages, sendMessage };
};

export default useChat;
