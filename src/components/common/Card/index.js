import React from 'react'
import styled from 'styled-components'
import randomImage from '../../../assets/randomImage.jpg'

export const Card = ({ category, level, text }) => (
    <Wrapper>
        <Image src={randomImage} alt='randomImage' />
        <ContentWrapper>
            <h3>{category}</h3>
            <h4>{level}</h4>
            <p>{text}</p>
        </ContentWrapper>
    </Wrapper>
);

//#region StyledComponents
const Wrapper = styled.li`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 4px rgba(0,0,0,.5);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  margin: 10px;
`;

const Image = styled.img`
  width: 250px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 160px;
`;

const ContentWrapper = styled.div`
  padding: 10px;
  h3 {
    color: #6aaed4;
    font-size: 18px;
    text-transform: uppercase;
  }
  h4 {
    font-size: 14px;
    color: black;
    padding: 5px 0;
  }
  p {
    font-size: 14px;
    color: #918f8f;
  }
`;
//#endregion
