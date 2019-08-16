import React, { useState } from 'react'
import styled from 'styled-components'
import { Card } from '../../common/Card'
import { Button } from '../../common/Button'

export const TasksCategory = ({ cards }) => {
    const [isEveryCardShown, setIsEveryCardShown] = useState(false);

    const onClick = () => {
        setIsEveryCardShown(!isEveryCardShown);
    }

    return (
        <>
            { cards.length > 0
                ? (
                    <Wrapper>
                        <Header>Задачи</Header>
                        <List>
                            {isEveryCardShown
                                ? cards.map(item => <Card category={item.category} level={item.level} text={item.text}/>)
                                : cards.slice(0, 4).map(item => <Card category={item.category} level={item.level} text={item.text}/>)
                            }
                        </List>
                        <Button isEveryCardShown={isEveryCardShown} onClick={onClick}/>
                    </Wrapper>
                ) : null
            }
        </>
    );
};

//#region StyledComponents
const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Header = styled.h2`
  font-size: 20px;
  color: #244e77;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  margin-top: 35px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//#endregion
