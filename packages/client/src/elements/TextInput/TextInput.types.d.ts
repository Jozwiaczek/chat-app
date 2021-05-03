import { InputHTMLAttributes } from 'react';

type TextInputColorVariant = 'grey' | 'white';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  colorVariant?: TextInputColorVariant;
}
