import React from 'react';

import { ArrowIcon } from '../../icons';
import { IconContainer, StyledButton, StyledLink } from './Button.styled';
import { ButtonProps } from './Button.types';

const Button = ({ children, label, to, disabled, withArrow, ...rest }: ButtonProps) => {
  const baseButton = (
    <StyledButton data-testid="button" disabled={disabled} {...rest}>
      {label || children}
      {withArrow && (
        <IconContainer>
          <ArrowIcon />
        </IconContainer>
      )}
    </StyledButton>
  );

  if (to) {
    return <StyledLink to={to}>{baseButton}</StyledLink>;
  }

  return baseButton;
};

Button.displayName = 'Button';

export default Button;
