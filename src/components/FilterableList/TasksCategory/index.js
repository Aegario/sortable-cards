import React from 'react'
import styled from 'styled-components'
import { Card } from '../../common/Card'
import { Button } from '../../common/Button'

export const TasksCategory = ({ cards: { data, isEveryCardShown }, onButtonClick, onCardClick }) => {

    const onTasksButtonClick = () => {
        onButtonClick('Tasks');
    }

    return (
        <>
            { data.length > 0
                ? (
                    <Wrapper>
                        <Header>Задачи</Header>
                        <List>
                            {isEveryCardShown
                                ? (data.map(item => (
                                    <Card
                                        key={item.id}
                                        id={item.id}
                                        category={item.category}
                                        level={item.level}
                                        text={item.text}
                                        isVideo={item.isVideo}
                                        onCardClick={onCardClick}
                                    />
                                    )))
                                : (data.slice(0, 4).map(item => (
                                    <Card
                                        key={item.id}
                                        id={item.id}
                                        category={item.category}
                                        level={item.level}
                                        text={item.text}
                                        isVideo={item.isVideo}
                                        onCardClick={onCardClick}
                                    />
                                    )))
                            }
                        </List>
                        { data.length > 4
                            ? <Button isEveryCardShown={isEveryCardShown} onClick={onTasksButtonClick} />
                            : null
                        }
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
  margin-bottom: 20px;
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
