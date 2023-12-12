/* eslint-disable react/prop-types */
import styled from 'styled-components';
import useSound from 'use-sound';

const WordComponent = ({ wordData }) => {
  const audioFile = wordData?.phonetics.find(
    (phonetic) => phonetic.audio !== ''
  )?.audio;
  const wordText = wordData.word;
  const pronounce = wordData?.phonetics.find(
    (phonetic) => phonetic.text && phonetic.text !== ''
  )?.text;
  const [playSound] = useSound(audioFile);
  console.log(wordData);
  return (
    <WordComponentContainer>
      <WordTitleContainer>
        <WordHeading>{wordText}</WordHeading>
        <PronounceText>{pronounce}</PronounceText>
      </WordTitleContainer>
      <Icon
        onClick={playSound}
        src='src/assets/images/icon-play.svg'
      />
    </WordComponentContainer>
  );
};

const WordComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  width: 736px;

  @media (max-width: 736px) {
    width: 100%;
    margin: 0px;
    height: 48px;
    margin-top: 0px;
    margin-bottom: 24px;
  }
`;

const WordTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WordHeading = styled.h1`
  font-size: ${(props) => props.theme.headingLarge.fontSize};
  font-style: ${(props) => props.theme.headingLarge.fontStyle};
  font-weight: ${(props) => props.theme.headingLarge.fontWeight};
  line-height: ${(props) => props.theme.headingLarge.lineHeight};
  color: ${(props) => props.theme.primaryColor};
  margin: 0;
  @media (max-width: 736px) {
    font-size: 32px;
  }
`;

const PronounceText = styled.h2`
  font-size: ${(props) => props.theme.headingMedium.fontSize};
  font-style: ${(props) => props.theme.headingMedium.fontStyle};
  font-weight: ${(props) => props.theme.headingMedium.fontWeight};
  line-height: ${(props) => props.theme.headingMedium.lineHeight};
  color: ${(props) => props.theme.highlightColor};
  margin: 0;
  @media (max-width: 736px) {
    font-size: 18px;
    margin-top: 8px;
  }
`;

const Icon = styled.img`
  @media (max-width: 736px) {
    height: 48px;
    width: 48px;
  }
`;

export default WordComponent;
