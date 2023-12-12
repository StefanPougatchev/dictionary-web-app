/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Source = ({ url }) => {
  return (
    <SourceContainer>
      <DividerLine />
      <SourceTextContainer>
        <SourceText>Source</SourceText>
        <SourceLink href={url}>{url}</SourceLink>
        <img src='../assets/images/icon-new-window.svg' />
      </SourceTextContainer>
    </SourceContainer>
  );
};

const SourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  width: 736px;
  @media (max-width: 736px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const DividerLine = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.dividerColor};
`;

const SourceTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 736px) {
    width: 100%;
    margin-bottom: 24px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SourceText = styled.p`
  font-size: ${(props) => props.theme.bodySmall.fontSize};
  font-style: ${(props) => props.theme.bodySmall.fontStyle};
  font-weight: ${(props) => props.theme.bodySmall.fontWeight};
  line-height: ${(props) => props.theme.bodySmall.lineHeight};
  color: ${(props) => props.theme.secondaryColor};
  text-decoration: underline;
  margin-right: 20px;
`;

const SourceLink = styled.a`
  font-size: ${(props) => props.theme.bodySmall.fontSize};
  font-style: ${(props) => props.theme.bodySmall.fontStyle};
  font-weight: ${(props) => props.theme.bodySmall.fontWeight};
  line-height: ${(props) => props.theme.bodySmall.lineHeight};
  color: ${(props) => props.theme.dividerTextColor};
  margin-right: 10px;
`;

export default Source;
