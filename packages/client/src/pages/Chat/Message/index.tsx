import React from 'react';

import { Body, Container, Details } from './Message.styled';

const Message = ({ currentNickname, nickname, body, createdAt }: MessageProps) => {
  if (!currentNickname) {
    return null;
  }

  const isOwner = nickname === currentNickname;
  const formatMessageDate = (msgDate: Date): string => {
    const formatter = new Intl.DateTimeFormat('en', {
      timeStyle: 'short',
    });
    return formatter.format(new Date(msgDate));
  };

  return (
    <Container isOwner={isOwner}>
      <Details>
        {!isOwner && (
          <>
            <span>{nickname}</span>
            ,&nbsp;
          </>
        )}
        <span>{formatMessageDate(createdAt)}</span>
      </Details>
      <Body isOwner={isOwner}>{body}</Body>
    </Container>
  );
};

export default Message;
