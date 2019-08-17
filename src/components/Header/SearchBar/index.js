import React from 'react'
import styled from 'styled-components'

export const SearchBar = ({ onSearchBarChange, searchBarValue }) =>  (
    <Wrapper>
        <label htmlFor='search'>Поиск по ключевым словам: </label>
        <Input
            type='search'
            placeholder='Поиск'
            id='search'
            onChange={onSearchBarChange}
            value={searchBarValue}
        />
    </Wrapper>
);


//#region StyledComponents
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 800px;
  height: 40px;
  padding-left: 20px;
  &:focus {
    outline-color: #e9e9e3;
  }
`;
//#endregion
