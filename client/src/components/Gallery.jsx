import React from 'react';
import styled from 'styled-components';

const Gallery = (props) => {
  const Wrapper = styled.section`
    align-items: stretch;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0px;
    margin-right: 0px;
    line-height: 20px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: red;
    height: 45%;
    width: 100%;
    position: absolute;
  `;
  const BigImage = styled.div`
    display: flex;
    box-sizing: border-box;
    cursor: pointer;
    height: 100%;
    line-height: 20px;
    vertical-align: bottom;
    width: 50%;
    left: 1%;
    background-color: yellow;
  `;
  const SmallImage = styled.section`
    box-sizing: border-box;
    cursor: pointer;
    height: 48.5%;
    line-height: 20px;
    object-fit: cover;
    vertical-align: bottom;
    width: 100%;
    background-color: orange;
  `;
  const LeftColumn = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 23%;
    padding-left: 8px;
    left: 49%;
    background-color: green;
    position: absolute;
  `;
  const RightColumn = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 23%;
    padding-left: 8px;
    left: 72.5%;
    background-color: blue;
    position: absolute;
  `;
  return (
    <Wrapper>
      <BigImage />
      <LeftColumn>
        <SmallImage />
        <SmallImage />
      </LeftColumn>
      <RightColumn>
        <SmallImage />
        <SmallImage />
      </RightColumn>
    </Wrapper>
  );
};

export default Gallery;
