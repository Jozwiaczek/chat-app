import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://192.168.1.7:3030';

const useChat = () => {
  const [messages, setMessages] = useState<Array<ApiMessage>>([]);
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  useEffect(() => {
    const internalSocket = socketIOClient(SOCKET_SERVER_URL);

    internalSocket.on('newMessage', (newMessage: ApiMessage) => {
      console.log(newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    internalSocket.on('syncMessages', (syncMessages: Array<ApiMessage>) => {
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

    const emitPayload: ApiMessage = {
      body: messageBody,
      senderId: socket.id,
      nickname,
      createdAt,
    };

    socket.emit('newMessageApi', emitPayload);
  };

  return { messages, sendMessage };
};

export default useChat;
