import { InputHTMLAttributes } from 'react';

type TextInputColorVariant = 'grey' | 'white';

interface TextInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  colorVariant?: TextInputColorVariant;
}
