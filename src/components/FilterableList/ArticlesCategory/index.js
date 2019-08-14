import React from 'react'
import { Card } from '../../common/Card'
import styled from 'styled-components';

export const ArticlesCategory = () => {
    return (
        <Wrapper>
            <Header>Статьи</Header>
            <List>
                <Card />
            </List>
        </Wrapper>
    );
};

//#region StyledComponents
const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.h2`
  font-size: 20px;
  color: #244e77;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//#endregion
