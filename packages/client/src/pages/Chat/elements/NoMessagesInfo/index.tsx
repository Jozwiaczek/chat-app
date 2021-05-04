import React from 'react';

import { NoMessagesIcon } from '../../../../icons';
import { Container } from './NoMessages.styled';

const NoMessagesInfo = () => (
  <Container>
    <NoMessagesIcon />
    <h4>It looks like you&apos;re first here</h4>
  </Container>
);

export default NoMessagesInfo;
