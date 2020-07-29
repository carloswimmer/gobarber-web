import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;

  animation: ${appear} 1s;
`;
