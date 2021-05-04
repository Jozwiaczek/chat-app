import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

import API_EVENTS from '../constants/apiEvents';
import useLocalStorage from './useLocalStorage';

const useChat = () => {
  const [messages, setMessages] = useState<Array<ApiMessage>>([]);
  const [socket, setSocket] = useState<SocketIOClient.Socket>();
  const [nickname] = useLocalStorage('nickname');
  const [typingUsers, setTypingUsers] = useState<Array<string>>([]);
  const API_URL = process.env.REACT_APP_API_URL || 'localhost:3030';

  useEffect(() => {
    const internalSocket = socketIOClient(API_URL);

    internalSocket.on(API_EVENTS.newMessage, (newMessage: ApiMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    internalSocket.on(API_EVENTS.userTyping, (newTypingNickname: string) => {
      if (nickname === newTypingNickname) {
        return;
      }
      setTypingUsers((prevNicknames) => [...prevNicknames, newTypingNickname]);
    });

    internalSocket.on(API_EVENTS.userStopTyping, (stopTypingUser: string) => {
      if (nickname === stopTypingUser) {
        return;
      }
      setTypingUsers((prevNicknames) =>
        prevNicknames.filter((prevNickname) => prevNickname !== stopTypingUser),
      );
    });

    internalSocket.on(API_EVENTS.syncMessages, (syncMessages: Array<ApiMessage>) => {
      setMessages(syncMessages);
    });

    setSocket(internalSocket);

    return () => {
      internalSocket.disconnect();
      setSocket(undefined);
    };
  }, [API_URL, nickname]);

  const emitUserTyping = () => {
    socket?.emit(API_EVENTS.userTypingApi, nickname);
  };

  const emitUserStopTyping = () => {
    socket?.emit(API_EVENTS.userStopTypingApi, nickname);
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

    socket.emit(API_EVENTS.newMessageApi, emitPayload);
  };

  return { messages, sendMessage, emitUserTyping, emitUserStopTyping, typingUsers };
};

export default useChat;
