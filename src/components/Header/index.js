import React from 'react'
import styled from 'styled-components'
import { SearchBar } from './SearchBar'
import { LevelFilter } from './LevelFilter'
import { LanguageFilter } from './LanguageFilter'
import { CategoryFilter } from './CategoryFilter'

const uuidv4 = require('uuid/v4');

export const Header = ({ fetchedFilters, onFilterChange, currentFilters }) =>  (
    <Wrapper>
        <Container>
            <SearchBar />
            <HorizontalLine />
            <FiltersContainer>
                <span>Фильтровать статьи по: </span>
                <FiltersWrapper>
                    <LevelFilter
                        fetchedFilters={fetchedFilters}
                        onFilterChange={onFilterChange}
                        keyGen={uuidv4}
                        categoryFilterValue={currentFilters.level}
                    />
                    <CategoryFilter
                        fetchedFilters={fetchedFilters}
                        onFilterChange={onFilterChange}
                        keyGen={uuidv4}
                        categoryFilterValue={currentFilters.category}
                    />
                    <LanguageFilter
                        fetchedFilters={fetchedFilters}
                        onFilterChange={onFilterChange}
                        keyGen={uuidv4}
                        categoryFilterValue={currentFilters.language}
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
