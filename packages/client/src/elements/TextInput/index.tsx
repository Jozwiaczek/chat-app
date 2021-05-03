import React from 'react';

import { StyledInput } from './TextInput.styled';
import { TextInputProps } from './TextInput.types';

const TextInput = ({ error, ...rest }: TextInputProps) => {
  return <StyledInput type="text" {...rest} />;
};

export default TextInput;
