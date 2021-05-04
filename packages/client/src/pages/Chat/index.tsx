import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { TextInput } from '../../elements';
import { useLocalStorage, useMediaDevice } from '../../hooks';
import useChat from '../../hooks/useChat';
import { SendIcon, UserIcon } from '../../icons';
import routesConfig from '../../routes/routes.config';
import {
  Card,
  CardHeader,
  ChatContainer,
  Container,
  MessagesContainer,
  SendButton,
  SendMessageContainer,
} from './Chat.styled';
import { Message, NoMessagesInfo, UserTyping, UserTypingPlaceholder } from './elements';

const Chat = () => {
  const { sendMessage, messages, emitUserTyping, emitUserStopTyping, typingUsers } = useChat();
  const [nickname] = useLocalStorage('nickname');
  const messageContainerRef = useRef<HTMLOListElement>(null);
  const { isMobile } = useMediaDevice();
  const [isTyping, setIsTyping] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (!newMessage || !nickname) {
      return;
    }

    sendMessage(newMessage);
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

  useEffect(() => {
    if (!newMessage) {
      setIsTyping(false);
      emitUserStopTyping();
    }
  }, [emitUserStopTyping, newMessage]);

  const onInputKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!isMobile && event.key === 'Enter' && !event.shiftKey) {
      handleSendMessage();
      event.preventDefault();
    }
    if (!isTyping) {
      setIsTyping(true);
      emitUserTyping();
    }
  };

  return (
    <Container>
      <Card>
        <CardHeader to={routesConfig.HOME}>
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
          <div>
            {typingUsers.length ? (
              typingUsers.map((typingUser) => (
                <UserTyping key={`${typingUser}-typing`} username={typingUser} />
              ))
            ) : (
              <UserTypingPlaceholder />
            )}
          </div>
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
