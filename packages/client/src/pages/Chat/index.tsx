import React, { ChangeEvent, KeyboardEvent, useLayoutEffect, useRef, useState } from 'react';

import TextInput from '../../elements/TextInput';
import { useChat, useLocalStorage } from '../../hooks';
import { SendIcon } from '../../icons';
import {
  Card,
  CardHeader,
  ChatContainer,
  Container,
  Message,
  MessageBody,
  MessageDetails,
  MessagesContainer,
  SendButton,
  SendMessageContainer,
} from './Chat.styled';

const Chat = () => {
  const { sendMessage, messages } = useChat();
  const [nickname] = useLocalStorage('nickname');
  const messageContainerRef = useRef<HTMLOListElement>(null);

  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  const onInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSendMessage();
    }
  };

  const formatMessageDate = (msgDate: Date): string => {
    const formatter = new Intl.DateTimeFormat('en', {
      timeStyle: 'short',
    });
    return formatter.format(new Date(msgDate));
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <h3>{nickname}</h3>
        </CardHeader>
        <ChatContainer>
          <MessagesContainer ref={messageContainerRef}>
            {messages.map(({ body, nickname: msgNickname, createdAt }, index) => {
              const isOwner = nickname === msgNickname;
              return (
                // eslint-disable-next-line react/no-array-index-key
                <Message key={index} isOwner={isOwner}>
                  <MessageDetails>
                    <span>{msgNickname}</span>
                    ,&nbsp;
                    <span>{formatMessageDate(createdAt)}</span>
                  </MessageDetails>
                  <MessageBody isOwner={isOwner}>{body}</MessageBody>
                </Message>
              );
            })}
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
