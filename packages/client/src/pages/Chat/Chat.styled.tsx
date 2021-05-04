import styled, { css } from 'styled-components';

import { Button } from '../../elements';

export const Container = styled.div(
  ({ theme: { breakpoints, up } }) => css`
    display: flex;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    width: 100%;

    ${up(breakpoints.md)} {
      padding: 40px;
    }
  `,
);

export const Card = styled.div(
  ({ theme: { palette, sizes } }) => css`
    background: ${palette.colors.grey};
    border-radius: ${sizes.borderRadius};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    max-width: 980px;
    width: 100%;
  `,
);

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MessagesContainer = styled.ol(
  ({ theme: { palette, breakpoints, up } }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-block-end: 0;
    margin-block-start: 0;
    max-height: calc(100% - 160px);
    overflow-y: auto;
    padding: 0;

    ${up(breakpoints.md)} {
      padding: 0 20px;
    }

    &::-webkit-scrollbar {
      width: 9px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${palette.divider};
      border-radius: 12px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${palette.focus};
    }
  `,
);

export const SendMessageContainer = styled.div(
  ({ theme: { breakpoints, up } }) => css`
    display: flex;
    height: 100px;
    margin: 10px 20px;
    position: relative;

    ${up(breakpoints.md)} {
      margin: 10px 40px;
    }
  `,
);

export const SendButton = styled(Button)`
  min-width: 0;
  padding: 5px;
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const CardHeader = styled.div(
  ({ theme: { palette, breakpoints, up } }) => css`
    align-items: center;
    border-bottom: 2px solid ${palette.divider};
    display: flex;
    padding: 20px;
    svg {
      margin-right: 10px;
    }

    ${up(breakpoints.md)} {
      padding: 20px 40px;
    }
  `,
);
