/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';

const Error = () => {
  return (
    <ErrorContainer>
      <EmojiText>😕</EmojiText>
      <ErrorHeading>No Definitions Found</ErrorHeading>
      <ErrorMessage>
        sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </ErrorMessage>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 156px;
  @media (min-width: 390px) {
    width: 736px;
  }
`;

const EmojiText = styled.div`
  font-size: 64px;
`;

const ErrorHeading = styled.p`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.headingMedium.fontSize};
  text-align: center;
  font-weight: ${(props) => props.theme.headingLarge.fontWeight};
`;

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.secondaryColor};
  font-size: ${(props) => props.theme.bodyMedium.fontSize};
  text-align: center;
  font-weight: ${(props) => props.theme.bodyMedium.fontWeight};
  line-height: ${(props) => props.theme.bodyMedium.lineHeight};
`;

export default Error;
