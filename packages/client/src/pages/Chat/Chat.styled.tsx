import styled, { css } from 'styled-components';

import { Button } from '../../elements';

interface MessageBaseProps {
  isOwner: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  padding: 40px;
  width: 100%;
`;

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
  ({ theme: { palette } }) => css`
    display: flex;
    flex-direction: column;
    margin-block-end: 0;
    margin-block-start: 0;
    max-height: calc(100% - 160px);
    overflow-y: auto;
    padding: 0 20px;

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

export const SendMessageContainer = styled.div`
  display: flex;
  height: 100px;
  margin: 10px 40px;
  position: relative;
`;

export const SendButton = styled(Button)`
  min-width: 0;
  padding: 5px;
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const CardHeader = styled.div(
  ({ theme: { palette } }) => css`
    border-bottom: 2px solid ${palette.divider};
    padding: 20px;
  `,
);

export const Message = styled.li<MessageBaseProps>(
  ({ isOwner }) => css`
    align-items: ${isOwner ? 'flex-end' : 'flex-start'};
    display: flex;
    flex-direction: column;
    margin: 15px;
  `,
);

export const MessageBody = styled.p<MessageBaseProps>(
  ({ theme: { palette }, isOwner }) => css`
    background: ${isOwner ? palette.colors.blue : palette.colors.white};
    border-radius: ${isOwner ? '12px 12px 0 12px' : '12px 12px 12px 0'};
    color: ${isOwner ? palette.colors.white : palette.colors.dark};
    padding: 10px;
  `,
);

export const MessageDetails = styled.div`
  padding: 0 0 5px 5px;
`;
