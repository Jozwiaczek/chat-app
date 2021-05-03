import React from 'react';
import GlobalStyles from 'src/theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme/Theme';
import { BaseProviderProps } from './Providers';

const StylesProvider = ({ children }: BaseProviderProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default StylesProvider;
