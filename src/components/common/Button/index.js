import React from 'react'
import styled from 'styled-components'

export const Button = ({ isEveryCardShown, onClick }) => {
    if (isEveryCardShown) return <CustomButton onClick={onClick}>Свернуть</CustomButton>
    return <CustomButton onClick={onClick}>Показать больше</CustomButton>
};

//#region StyledComponents
const CustomButton = styled.button`
  background-color: transparent;
  border-radius: 15px;
  border: 2px solid #244e77;
  color: #244e77;
  cursor: pointer;
  width: 250px;
  height: 30px;
  font-size: 14px;
  margin-top: 20px;
  :focus {
    outline: none;
  }
`;
//#endregion
