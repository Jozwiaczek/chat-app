import styled, { css, keyframes } from 'styled-components';

export const Placeholder = styled.div`
  height: 40px;
  width: 100%;
`;

export const Container = styled.div(
  ({ theme: { breakpoints, up } }) => css`
    align-items: center;
    display: flex;
    margin: 10px 20px;
    padding-left: 30px;

    ${up(breakpoints.md)} {
      margin: 10px 40px;
    }
  `,
);

export const Label = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-left: 8px;
`;

const dotElastic = keyframes`
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 1.5);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const dotElasticBefore = keyframes`
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1.5);
  }
  50% {
    transform: scale(1, 0.67);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const dotElasticAfter = keyframes`
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 0.67);
  }
  75% {
    transform: scale(1, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
`;

export const LoadingDots = styled.div(
  ({ theme: { palette } }) => css`
    animation: ${dotElastic} 1s infinite linear;
    margin-right: 20px;
    position: relative;

    &,
    &::before,
    &::after {
      background: ${palette.colors.blue};
      border-radius: 4px;
      height: 8px;
      width: 8px;
    }

    &::before,
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
    }

    &::before {
      animation: ${dotElasticBefore} 1s infinite linear;
      left: -15px;
    }

    &::after {
      animation: ${dotElasticAfter} 1s infinite linear;
      left: 15px;
    }
  `,
);
