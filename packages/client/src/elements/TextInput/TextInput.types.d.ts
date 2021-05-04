import { InputHTMLAttributes } from 'react';

type TextInputColorVariant = 'grey' | 'white';

interface TextInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  colorVariant?: TextInputColorVariant;
}
