import React from 'react';

import { Container, Label, LoadingDots, Placeholder } from './UserTyping.styled';

const UserTyping = ({ username }: UserTypingProps) => (
  <Container>
    <LoadingDots />
    <Label>{username} is typing</Label>
  </Container>
);

export const UserTypingPlaceholder = () => <Placeholder />;

export default UserTyping;
