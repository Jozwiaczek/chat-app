import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  to?: string;
  withArrow?: boolean;
  fullWidth?: boolean;
}
