import React from 'react'
import styled from 'styled-components'
import { Category } from './Category'
import { Spinner } from '../common/Spinner'

const uuidv4 = require('uuid/v4');

export const FilterableList = ({ cards, onButtonClick, onCardClick, NumberOfSortedCards, isDataReady }) => (
    <Wrapper>
        <Container>
            {isDataReady ? (
                NumberOfSortedCards > 0 ?
                    (
                        <>
                            {
                                cards.map(item => (
                                    <Category
                                        header={item.categoryName}
                                        cards={item}
                                        onButtonClick={onButtonClick}
                                        onCardClick={onCardClick}
                                        key={uuidv4()}
                                    />
                                ))
                            }
                        </>
                    ) : <Paragraph>Нет результатов по данному запросу.</Paragraph>
            ) : <Spinner />
            }
        </Container>
    </Wrapper>
);


//#region StyledComponents
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 35px 0;
`;

const Container = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled.p`
  margin-top: 30px;
  font-size: 18px;
`;
//#endregion
