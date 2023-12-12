/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Heading = ({ theme, toggleTheme }) => {
  return (
    <HeadingConatiner>
      <img src='src/assets/images/logo.svg' />
      <HeadingTitle>Online Dictionary</HeadingTitle>
      <ToggleIcon
        onClick={() => toggleTheme()}
        src={
          theme === 'light'
            ? './src/assets/images/icon-moon.svg'
            : './src/assets/images/sun.svg'
        }
      />
    </HeadingConatiner>
  );
};

const HeadingConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 24px;
  width: 736px;

  @media (max-width: 736px) {
    margin-bottom: 24px;
    width: 100%;
  }
`;

const HeadingTitle = styled.h1`
  font-size: ${(props) => props.theme.headingMedium.fontSize};
  font-style: ${(props) => props.theme.headingMedium.fontStyle};
  font-weight: ${(props) => props.theme.headingLarge.fontWeight};
  line-height: ${(props) => props.theme.headingMedium.lineHeight};
  color: ${(props) => props.theme.primaryColor};
  margin: 0;
`;

const ToggleIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export default Heading;
