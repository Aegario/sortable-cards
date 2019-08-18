import React from 'react'
import styled from 'styled-components'

export const Filter = ({ fetchedFiltersValues, isLoaded, onFilterChange, keyGen, currentFilterValue, id, initialOption }) =>  (
    <>
        <Select
            id={id}
            onChange={onFilterChange}
            value={currentFilterValue}
        >
            <option>{initialOption}</option>
            {isLoaded
                ? fetchedFiltersValues.map(item => <option key={keyGen()}>{item}</option>)
                : null
            }
        </Select>
    </>
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
