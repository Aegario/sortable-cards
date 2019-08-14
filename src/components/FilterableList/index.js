import React from 'react'
import styled from 'styled-components'
import { ArticlesCategory } from './ArticlesCategory'
import { BooksCategory } from './BooksCategory'
import { InterviewCategory } from './InterviewCategory'
import { TasksCategory } from './TasksCategory'

export const FilterableList = () => {
    return (
        <Wrapper>
            <Container>
                <ArticlesCategory />
                <BooksCategory />
                <InterviewCategory />
                <TasksCategory />
            </Container>
        </Wrapper>
    );
};

//#region StyledComponents
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

const Container = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//#endregion
