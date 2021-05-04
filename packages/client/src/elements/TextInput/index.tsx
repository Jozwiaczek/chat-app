import React from 'react';

import { StyledInput } from './TextInput.styled';
import { TextInputProps } from './TextInput.types';

const TextInput = (props: TextInputProps) => <StyledInput type="text" {...props} />;

export default TextInput;
