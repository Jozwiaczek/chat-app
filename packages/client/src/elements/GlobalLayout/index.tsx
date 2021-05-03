import React, { ReactNode } from 'react';

import { Container } from './GlobalLayout.styled';

const GlobalLayout = ({ children }: { children: ReactNode }) => <Container>{children}</Container>;

export default GlobalLayout;
