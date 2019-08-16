import React from 'react'
import styled from 'styled-components'

export const LevelFilter = ({ fetchedFilters: { filters: { levels }, isLoaded }, onFilterChange, keyGen, categoryFilterValue }) =>  (
    <div>
        <Select id='levelFilter' onChange={onFilterChange} value={categoryFilterValue}>
            <option>Любой Уровень</option>
            {isLoaded
                ? levels.map(item => <option key={keyGen()}>{item}</option>)
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
