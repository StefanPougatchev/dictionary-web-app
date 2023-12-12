import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import Heading from './components/Heading';
import Search from './components/Search';
import LoadingDots from './components/LoadingDots';
import Error from './components/Error';
import WordComponent from './components/WordComponent';
import TypeDivider from './components/TypeDivider';
import Source from './components/Source';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    font-family: monospace;
  }
`;

function App() {
  const [theme, setTheme] = useState('light');
  const [wordData, setWordData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const hasSource = wordData && wordData?.sourceUrls.length !== 0;
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  const handleSearch = async (searchValue) => {
    setWordData(null);
    setError(null); // Clear the error state at the start of a new search

    if (!searchValue) {
      setError(new Error('Search value cannot be empty'));
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
      );
      setWordData(response.data[0]);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledApp>
        <Heading
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Search handleSearchClick={handleSearch} />
        {isLoading && <LoadingDots />}
        {error && <Error />}
        {wordData && (
          <>
            <WordComponent wordData={wordData} />
            {wordData.meanings.map((meaning, idx) => {
              return (
                <TypeDivider
                  key={meaning.partOfSpeech + `${idx}`}
                  wordMeaning={meaning}
                />
              );
            })}
            {hasSource && <Source url={wordData.sourceUrls[0]} />}
          </>
        )}
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  @media (max-width: 736px) {
    margin: 24px;
  }
`;

const shardStyles = {
  fontFamily: 'sans-serif',
  headingLarge: {
    fontSize: '64px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  headingMedium: {
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  headingSmall: {
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  bodyMedium: {
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
  },
  bodySmall: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
  },
};

const lightTheme = {
  ...shardStyles,
  dividerColor: '#E9E9E9',
  dividerTextColor: '#2D2D2D',
  background: '#fff',
  primaryColor: '#2D2D2D',
  secondaryColor: '#757575',
  highlightColor: '#A445ED',
  toggleColor: '#757575',
  searchBar: '#F4F4F4',
};

const darkTheme = {
  ...shardStyles,
  dividerColor: '#3A3A3A',
  dividerTextColor: '#FFFFFF',
  background: '#050505',
  primaryColor: '#fff',
  secondaryColor: '#757575',
  highlightColor: '#A445ED',
  toggleColor: '#A445ED',
  searchBar: '#1F1F1F',
};

export default App;
