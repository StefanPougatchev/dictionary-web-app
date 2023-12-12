/* eslint-disable react/prop-types */
import styled from 'styled-components';

const TypeDivider = ({ wordMeaning }) => {
  const hasSynonyms = wordMeaning?.synonyms.length !== 0;
  return (
    <TypeAndMeaningContainer>
      <TypeDividerContainer>
        <TypeWordText>{wordMeaning.partOfSpeech}</TypeWordText>
        <DividerLine />
      </TypeDividerContainer>
      <MeaningTitle>Meaning</MeaningTitle>
      <DefintionsContainer>
        {wordMeaning.definitions.map((definition, idx) => {
          return (
            <li key={wordMeaning.partOfSpeech + `${idx}`}>
              {definition.definition}
            </li>
          );
        })}
      </DefintionsContainer>
      {hasSynonyms && (
        <SynonymsContainer>
          <SynonymsHeading>Synonyms</SynonymsHeading>
          {wordMeaning.synonyms.map((synonym, idx) => (
            <SynonymWord key={wordMeaning.partOfSpeech + synonym + `${idx}`}>
              {synonym}
            </SynonymWord>
          ))}
        </SynonymsContainer>
      )}
    </TypeAndMeaningContainer>
  );
};

const TypeAndMeaningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  width: 736px;
  @media (max-width: 736px) {
    width: 100%;
    margin: 0px;
    margin-bottom: 24px;
  }
`;
const TypeDividerContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 736px;
  @media (max-width: 736px) {
    width: 100%;
    margin: 0px;
    margin-bottom: 24px;
  }
`;

const DividerLine = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.dividerColor};
`;

const TypeWordText = styled.p`
  font-size: ${(props) => props.theme.headingMedium.fontSize};
  font-style: ${(props) => props.theme.headingMedium.fontStyle};
  font-weight: ${(props) => props.theme.headingLarge.fontWeight};
  line-height: ${(props) => props.theme.headingMedium.lineHeight};
  color: ${(props) => props.theme.dividerTextColor};
  margin: 0;
`;

const MeaningTitle = styled.h3`
  font-size: ${(props) => props.theme.headingSmall.fontSize};
  font-style: ${(props) => props.theme.headingSmall.fontStyle};
  font-weight: ${(props) => props.theme.headingSmall.fontWeight};
  line-height: ${(props) => props.theme.headingSmall.lineHeight};
  color: ${(props) => props.theme.secondaryColor};
  margin: 40px 0 25px 0;
  @media (max-width: 736px) {
    margin: 10px 0 10px 0;
  }
`;

const DefintionsContainer = styled.ul`
  padding-left: 22px;
  & li::marker {
    color: ${(props) => props.theme.highlightColor};
  }

  & li {
    color: ${(props) => props.theme.dividerTextColor};
    margin-bottom: 13px;
  }
`;

const SynonymsContainer = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
`;

const SynonymsHeading = styled.h3`
  font-size: ${(props) => props.theme.headingSmall.fontSize};
  font-style: ${(props) => props.theme.headingSmall.fontStyle};
  font-weight: ${(props) => props.theme.headingSmall.fontWeight};
  line-height: ${(props) => props.theme.headingSmall.lineHeight};
  color: ${(props) => props.theme.secondaryColor};
`;

const SynonymWord = styled.span`
  font-size: ${(props) => props.theme.headingSmall.fontSize};
  font-style: ${(props) => props.theme.headingSmall.fontStyle};
  font-weight: ${(props) => props.theme.headingLarge.fontWeight};
  line-height: ${(props) => props.theme.headingSmall.lineHeight};
  color: ${(props) => props.theme.highlightColor};
`;

export default TypeDivider;
