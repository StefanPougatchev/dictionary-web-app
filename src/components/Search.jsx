/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

const Search = ({ handleSearchClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchClick(searchTerm);
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchInput
        type='input'
        placeholder='Search for a word...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton type='submit' />
    </SearchContainer>
  );
};

const SearchContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: ${(props) => props.theme.searchBar};
  border-radius: 16px;
  margin-top: 54px;
  flex-shrink: 0;
  width: 736px;
  &:hover {
    border: 1px solid ${(props) => props.theme.highlightColor};
    cursor: pointer;
  }
  @media (max-width: 736px) {
    width: 100%;
    margin: 0px;
    height: 48px;
    margin-bottom: 24px;
  }
`;

const SearchInput = styled.input`
  border: none;
  border-radius: 5px;
  padding-left: 24px;
  width: 100%;
  height: 26px;
  background-color: transparent;
  border: none;
  font-weight: 700;
  color: ${(props) => props.theme.primaryColor};
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SearchButton = styled.button`
  background: url('./src/assets/images/icon-search.svg') no-repeat;
  border: none;
  height: 20px;
  width: 20px;
  padding-right: 24px;
`;

export default Search;
