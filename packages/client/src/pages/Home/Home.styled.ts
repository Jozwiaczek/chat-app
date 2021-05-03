import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  & > *:not(h1, svg) {
    margin-top: 50px;
  }
  text-align: center;
  h1 {
    margin-top: 40px;
  }
`;
