import styled, { css } from 'styled-components';

import { TextInputProps } from './TextInput.types';

export const StyledInput = styled.textarea<TextInputProps>(
  ({ theme: { palette, sizes }, colorVariant }) => css`
    background: ${colorVariant ? palette.colors[colorVariant] : palette.colors.grey};
    border: none;
    border-radius: ${sizes.borderRadius};
    box-shadow: ${palette.boxShadow.default};
    box-sizing: border-box;
    color: ${palette.colors.dark};
    cursor: text;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    height: 55px;
    outline: none;
    overflow: hidden;
    padding: 18px 100px 18px 18px;
    resize: none;
    width: 100%;
  `,
);
