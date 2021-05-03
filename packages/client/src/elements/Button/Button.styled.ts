import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.types';

export const IconContainer = styled.div`
  margin-left: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledButton = styled.button<ButtonProps>(
  ({ theme: { palette, sizes }, fullWidth }) => css`
    align-items: center;
    background-color: ${palette.colors.blue};

    border: none;
    border-radius: ${sizes.borderRadius};
    box-shadow: ${palette.boxShadow.default};
    color: ${palette.colors.white};
    cursor: pointer;
    display: flex;
    font-size: 16px;
    justify-content: center;
    line-height: 16px;
    min-width: 100px;
    outline: none;
    overflow: hidden;
    padding: 21px 14px;
    position: relative;
    transition: box-shadow 150ms ease-in-out;

    ${fullWidth ? 'width: 100%' : ''};

    svg {
      transition: transform 150ms ease-in-out;
    }

    :hover {
      box-shadow: ${palette.boxShadow.big};
      transition: box-shadow 150ms ease-in-out;
      svg {
        transform: translateX(1px);
        transition: transform 150ms ease-in-out;
      }
    }

    :focus-visible {
      box-shadow: 0 0 0 2px ${palette.colors.dark};
      transition: box-shadow 150ms ease-in-out;
    }

    &:disabled {
      background-color: ${palette.disabled};
      box-shadow: none;
      color: ${palette.colors.dark};
      cursor: not-allowed;
      pointer-events: all !important;
      transition: none;

      &:hover,
      &:active {
        background-color: ${palette.disabled};
        svg {
          transform: none;
        }
      }

      :active::after {
        opacity: 1;
        transform: none;
      }
    }
  `,
);
