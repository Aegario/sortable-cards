import React from 'react'
import styled from 'styled-components'
import { SearchBar } from './SearchBar'
import { Filter } from './Filter'

const uuidv4 = require('uuid/v4');

export const Header = ({ fetchedFilters: { filters: { languages, levels, categories }, isLoaded }, onFilterChange, currentFiltersValues, onSearchBarChange, searchBarValue }) =>  (
    <Wrapper>
        <Container>
            <SearchBar
                onSearchBarChange={onSearchBarChange}
                searchBarValue={searchBarValue}
            />
            <HorizontalLine />
            <FiltersContainer>
                <span>Фильтровать статьи по: </span>
                <FiltersWrapper>
                   <Filter
                        id='levelFilter'
                        initialOption='Любой Уровень'
                        currentFilterValue={currentFiltersValues.level}
                        fetchedFiltersValues={levels}
                        isLoaded={isLoaded}
                        onFilterChange={onFilterChange}
                        keyGen={uuidv4}
                    />
                    <Filter
                        id='categoryFilter'
                        initialOption='Все Категории'
                        currentFilterValue={currentFiltersValues.category}
                        fetchedFiltersValues={categories}
                        isLoaded={isLoaded}
                        onFilterChange={onFilterChange}
                        keyGen={uuidv4}

                    />
                    <Filter
                        id='languageFilter'
                        initialOption='Все Языки'
                        currentFilterValue={currentFiltersValues.language}
                        fetchedFiltersValues={languages}
                        isLoaded={isLoaded}
                        onFilterChange={onFilterChange}
                        keyGen={uuidv4}
                    />
                </FiltersWrapper>
            </FiltersContainer>
        </Container>
    </Wrapper>
);



//#region StyledComponents
const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: #6e6e6b;
  display: flex;
  justify-content: center;
  color: #e9e9e3;
  margin-bottom: -40px;
`;

const Container = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FiltersWrapper = styled.div`
  display: flex;
  width: 850px;
  justify-content: space-between;
`;

const HorizontalLine = styled.div`
    width: 100%;
    height:1px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #b3b3ae;
`;
//#endregion
