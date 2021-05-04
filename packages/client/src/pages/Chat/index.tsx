import React, { ChangeEvent, KeyboardEvent, useLayoutEffect, useRef, useState } from 'react';

import TextInput from '../../elements/TextInput';
import { useChat, useLocalStorage, useMediaDevice } from '../../hooks';
import { SendIcon, UserIcon } from '../../icons';
import {
  Card,
  CardHeader,
  ChatContainer,
  Container,
  MessagesContainer,
  SendButton,
  SendMessageContainer,
} from './Chat.styled';
import Message from './Message';
import NoMessagesInfo from './NoMessagesInfo';

const Chat = () => {
  const { sendMessage, messages } = useChat();
  const [nickname] = useLocalStorage('nickname');
  const messageContainerRef = useRef<HTMLOListElement>(null);
  const { isDesktop } = useMediaDevice();

  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (!newMessage || !nickname) {
      return;
    }

    sendMessage(newMessage, nickname);
    setNewMessage('');
  };

  useLayoutEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const onInputKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (isDesktop && event.key === 'Enter' && !event.shiftKey) {
      handleSendMessage();
      event.preventDefault();
    }
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <UserIcon />
          <h3>{nickname}</h3>
        </CardHeader>
        <ChatContainer>
          <MessagesContainer ref={messageContainerRef}>
            {messages.length ? (
              messages.map((mappedMessage) => (
                <Message key={mappedMessage.id} currentNickname={nickname} {...mappedMessage} />
              ))
            ) : (
              <NoMessagesInfo />
            )}
          </MessagesContainer>
          <SendMessageContainer>
            <TextInput
              autoFocus
              colorVariant="white"
              placeholder="Write message..."
              value={newMessage}
              onKeyPress={onInputKeyPress}
              onChange={handleNewMessageChange}
            />
            <SendButton onClick={handleSendMessage} disabled={!newMessage}>
              <SendIcon />
            </SendButton>
          </SendMessageContainer>
        </ChatContainer>
      </Card>
    </Container>
  );
};

export default Chat;
