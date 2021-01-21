/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import {
  HeartOutlined, Heart, Star, Trophy, ShareAlternative,
} from '@styled-icons/entypo';

const HeadContain = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 32px;
    padding-bottom: 24px;
  `;
const TitleRow = styled.div`
    display: flex;
    justify-content: flex-start;
  `;
const DescriptionRow = styled.div`
    margin-top: 4px;
    display: flex;
    justify-content: flex-start;
    align-items: start;
  `;
const HeaderDescrip = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex: 1;
  `;
const HeaderEnd = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0 5px;
  `;
const StarEmoji = styled(Star)`
    margin-right: 4px;
    color: red;
    vertical-align: text-top;
    height: 15px;
    width: 15px;
  `;
const Rating = styled.div`
    font-weight: 600;
  `;
const Separator = styled.span`
    margin-left: 8px;
    margin-right: 8px;
  `;
const Reviews = styled.div`
    color: rgb(113,113,113);
    padding-left: 4px;
  `;
const SuperEmoji = styled(Trophy)`
  margin-right: 4px;
  color: red;
  vertical-align: text-top;
  height: 15px;
  width: 15px;
`;
const Location = styled.a`
    font-weight: 600;
    color: rgb(113, 113, 113);
  `;
const ShareEmoji = styled(ShareAlternative)`
  margin-right: 4px;
  vertical-align: text-top;
  height: 15px;
  width: 15px;
`;
const SaveEmoji = styled(HeartOutlined)`
  margin-right: 4px;
  vertical-align: text-top;
  height: 15px;
  width: 15px;
`;
const Button = styled.button`
    appearance: none;
    outline: none;
    font-weight: 500;
    border-radius: 8px;
    border: none;
    background: transparent;
    color: rgb(34, 34, 34);
    text-decoration: underline;
    cursor: pointer;
    padding: 8px;
  `;
const Header = ({ galleria }) => {
  const {
    title, reviews, rating, isSuperhost, location,
  } = galleria;
  const { city, state, country } = location;
  return (
    <HeadContain>
      <TitleRow>
        <h1>{title}</h1>
      </TitleRow>
      <DescriptionRow>
        <HeaderDescrip>
          <Rating>
            <StarEmoji />
            {parseFloat(rating).toFixed(2)}
          </Rating>
          <Reviews>
            {`(${reviews})`}
          </Reviews>
          <Separator>
            ·
          </Separator>
          {isSuperhost ? <SuperEmoji /> : <></> }
          {isSuperhost ? 'Superhost' : <></>}
          {isSuperhost ? <Separator>·</Separator> : <></>}
          <Location href={`https://www.google.com/search?q=${city}+${state}+${country}`}>{`${city}, ${state}, ${country}`}</Location>
        </HeaderDescrip>
        <HeaderEnd>
          <Button>
            <SaveEmoji />
            Save
          </Button>
          <Button>
            <ShareEmoji />
            Share
          </Button>
        </HeaderEnd>
      </DescriptionRow>
    </HeadContain>
  );
};

export default Header;
