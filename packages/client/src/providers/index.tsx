import React from 'react';

import { BaseProviderProps } from './Providers';
import StylesProvider from './StylesProvider';

const Providers = ({ children }: BaseProviderProps) => <StylesProvider>{children}</StylesProvider>;

export default Providers;
