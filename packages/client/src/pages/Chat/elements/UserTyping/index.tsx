import React from 'react';

import { Container, Label, LoadingDots, Placeholder } from './UserTyping.styled';

const UserTyping = ({ typingUsers }: UserTypingProps) => {
  const isPlural = typingUsers.length > 1;

  return (
    <Container>
      <LoadingDots />
      <Label>
        {typingUsers.join(', ')} {isPlural ? 'are' : 'is'} typing
      </Label>
    </Container>
  );
};

export const UserTypingPlaceholder = () => <Placeholder />;

export default UserTyping;
