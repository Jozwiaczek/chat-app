import styled, { css } from 'styled-components';

export const Container = styled.li<MessageBaseProps>(
  ({ isOwner }) => css`
    align-items: ${isOwner ? 'flex-end' : 'flex-start'};
    display: flex;
    flex-direction: column;
    margin: 15px;
  `,
);

export const Body = styled.p<MessageBaseProps>(
  ({ theme: { palette }, isOwner }) => css`
    background: ${isOwner ? palette.colors.blue : palette.colors.white};
    border-radius: ${isOwner ? '12px 12px 0 12px' : '12px 12px 12px 0'};
    color: ${isOwner ? palette.colors.white : palette.colors.dark};
    padding: 10px;
    white-space: pre-line;
  `,
);

export const Details = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 5px;
`;
