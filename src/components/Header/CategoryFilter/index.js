import React from 'react'
import styled from 'styled-components'

export const CategoryFilter = ({ fetchedFilters: { filters: { categories }, isLoaded }, onFilterChange, keyGen }) =>  (
    <div>
        <Select id='categoryFilter' onChange={onFilterChange}>
            <option>Все Категории</option>
            {isLoaded
                ? categories.map(item => <option key={keyGen()}>{item}</option>)
                : null
            }
        </Select>
    </div>
);


//#region StyledComponents
const Select = styled.select`
  width: 260px;
  height: 40px;
  padding-left: 15px;
  &:focus {
    outline-color: #e9e9e3;
  }
`;
//#endregion
