import React from 'react'
import styled from 'styled-components'
import { Card } from '../../common/Card'
import { Button } from '../../common/Button'

export const ArticlesCategory = ({ cards: { data, isEveryCardShown }, onClick }) => {

    const onArticlesButtonClick = () => {
        onClick('Articles');
    }

    return (
        <>
            { data.length > 0
                ? (
                    <Wrapper>
                        <Header>Статьи</Header>
                        <List>
                            {isEveryCardShown
                                ? (data.map(item => (
                                    <Card
                                        key={item.id}
                                        category={item.category}
                                        level={item.level}
                                        text={item.text}
                                        isVideo={item.isVideo}
                                    />
                                )))
                                : (data.slice(0, 4).map(item => (
                                    <Card
                                        key={item.id}
                                        category={item.category}
                                        level={item.level}
                                        text={item.text}
                                        isVideo={item.isVideo} />
                                )))
                            }
                        </List>
                        { data.length > 4
                            ? <Button isEveryCardShown={isEveryCardShown} onClick={onArticlesButtonClick} />
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
  font-size: 20px;
  margin-bottom: 20px;
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
