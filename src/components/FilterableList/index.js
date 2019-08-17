import React from 'react'
import styled from 'styled-components'
import { ArticlesCategory } from './ArticlesCategory'
import { BooksCategory } from './BooksCategory'
import { InterviewsCategory } from './InterviewCategory'
import { TasksCategory } from './TasksCategory'

export const FilterableList = ({ cards: { articles, books, interviews, tasks }, onClick, NumberOfSortedCards }) => (
    <Wrapper>
        <Container>
            {NumberOfSortedCards > 0
            ? (
                <>
                    <ArticlesCategory cards={articles} onClick={onClick} />
                    <BooksCategory cards={books} onClick={onClick} />
                    <InterviewsCategory cards={interviews} onClick={onClick} />
                    <TasksCategory cards={tasks} onClick={onClick} />
                </>
                )
            : <Paragraph>Нет результатов по данному запросу.</Paragraph>
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
