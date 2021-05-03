import styled, { css } from 'styled-components';

import { TextInputProps } from './TextInput.types';

export const StyledInput = styled.input<TextInputProps>(
  ({ theme: { palette, sizes }, colorVariant }) => css`
    background: ${colorVariant ? palette.colors[colorVariant] : palette.colors.grey};
    border: none;
    border-radius: ${sizes.borderRadius};
    box-shadow: ${palette.boxShadow.default};
    color: ${palette.colors.dark};
    cursor: text;
    font-size: 18px;
    height: 55px;
    min-width: 250px;
    outline: none;
    padding: 0 18px;
    width: 100%;
  `,
);

export const Error = styled.div`
  color: ${({ theme: { palette } }) => palette.colors.red};
  font-size: 13px;
  height: 13px;
  left: 10px;
  margin-left: 5px;
  margin-top: 5px;
  position: absolute;
  top: 85px;
`;
