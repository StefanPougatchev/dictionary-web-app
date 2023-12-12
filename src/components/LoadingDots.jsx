import styled, { keyframes } from 'styled-components';

const LoadingDots = () => {
  return (
    <BouncingLoader>
      <BouncingBubbler></BouncingBubbler>
      <BouncingBubbler></BouncingBubbler>
      <BouncingBubbler></BouncingBubbler>
    </BouncingLoader>
  );
};

const BouncingLoader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 1
  }
  50% {
    transform: translateY(-16px);
    opacity: 0.5;
  }
`;

const BouncingBubbler = styled.div`
  width: 16px;
  height: 16px;
  margin: 3px 6px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.highlightColor};
  opacity: 1;
  animation: ${bounce} 0.6s infinite;
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
export default LoadingDots;
