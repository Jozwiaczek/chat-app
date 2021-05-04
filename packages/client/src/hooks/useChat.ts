import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

import useLocalStorage from './useLocalStorage';

const SOCKET_SERVER_URL = 'http://192.168.1.7:3030';

const useChat = () => {
  const [messages, setMessages] = useState<Array<ApiMessage>>([]);
  const [socket, setSocket] = useState<SocketIOClient.Socket>();
  const [nickname] = useLocalStorage('nickname');
  const [typingUsers, setTypingUsers] = useState<Array<string>>([]);

  useEffect(() => {
    const internalSocket = socketIOClient(SOCKET_SERVER_URL);

    internalSocket.on('newMessage', (newMessage: ApiMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    internalSocket.on('userTyping', (newTypingNickname: string) => {
      if (nickname === newTypingNickname) {
        return;
      }
      setTypingUsers((prevNicknames) => [...prevNicknames, newTypingNickname]);
    });

    internalSocket.on('userStopTyping', (stopTypingUser: string) => {
      if (nickname === stopTypingUser) {
        return;
      }
      setTypingUsers((prevNicknames) =>
        prevNicknames.filter((prevNickname) => prevNickname !== stopTypingUser),
      );
    });

    internalSocket.on('syncMessages', (syncMessages: Array<ApiMessage>) => {
      setMessages(syncMessages);
    });

    setSocket(internalSocket);

    return () => {
      internalSocket.disconnect();
      setSocket(undefined);
    };
  }, [nickname]);

  const emitUserTyping = () => {
    socket?.emit('userTypingApi', nickname);
  };

  const emitUserStopTyping = () => {
    socket?.emit('userStopTypingApi', nickname);
  };

  const sendMessage = (messageBody: string) => {
    if (!socket || !nickname) {
      return;
    }

    const createdAt = new Date();

    const emitPayload: ApiMessage = {
      id: `${socket.id}-${createdAt.valueOf()}`,
      body: messageBody,
      senderId: socket.id,
      nickname,
      createdAt,
    };

    socket.emit('newMessageApi', emitPayload);
  };

  return { messages, sendMessage, emitUserTyping, emitUserStopTyping, typingUsers };
};

export default useChat;
