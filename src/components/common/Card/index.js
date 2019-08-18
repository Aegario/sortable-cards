import React from 'react'
import styled from 'styled-components'
import randomImage from '../../../assets/randomImage.jpg'
import Icon from '../../../assets/playButton.svg'

export const Card = ({ category, level, text, isVideo, onCardClick, id }) => (
    <>
        {isVideo ? (
                <VideoWrapper id={id} onClick={onCardClick}>
                    <ImageWrapper>
                        <Image src={randomImage} alt='randomImage' />
                        <PlayButtonIcon src={Icon}/>
                    </ImageWrapper>
                    <ContentWrapper>
                        <h3>{category} <span>(ВИДЕО)</span></h3>
                        <h4>{level}</h4>
                        <p>{text}</p>
                    </ContentWrapper>
                </VideoWrapper>
            ) : (
                <Wrapper id={id} onClick={onCardClick}>
                    <ImageWrapper>
                        <Image src={randomImage} alt='randomImage' />
                    </ImageWrapper>
                    <ContentWrapper>
                        <h3>{category}</h3>
                        <h4>{level}</h4>
                        <p>{text}</p>
                    </ContentWrapper>
                </Wrapper>
            )}
    </>
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
  cursor: pointer;
  :hover {
    background-color: rgba(19,85,127,0.21);
  }
`;

const VideoWrapper = styled.li`
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
  cursor: pointer;
  :hover {
    background-color: rgba(19,85,127,0.21);
    div:first-of-type {
      img:last-of-type {
        transform: scale(1.3)
      }
    }
  }
`;

const Image = styled.img`
  //z-index: -1;
  width: 250px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 160px;
`;

const PlayButtonIcon = styled.img`
    display: inline-block;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 55px;
    left: 100px;
    transition: transform .1s;
`;
const ImageWrapper = styled.div`
  height: 160px;
  position: relative;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  width: 100%;  
  padding: 10px;
  z-index: -1;
  box-sizing: border-box;
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
