/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Header = ({ galleria }) => {
  const HeaderDescrip = styled.h3`
    display:flex;
    justify-content: space-around;
    align-items: start;
  `;
  const {
    title, reviews, rating, isSuperhost, location,
  } = galleria;
  const { city, state, country } = location;
  return (
    <div className="header">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <HeaderDescrip>
        <div className="rating">
          {parseFloat(rating).toFixed(2)}
          &nbsp;
          {`(${reviews})`}
        </div>
        <span>·</span>
        <div className="superhost">
          {isSuperhost
            ? (
              <div>
                <div>Superhost</div>
              </div>
            )
            : <></>}
        </div>
        {isSuperhost ? <span> · </span> : <></>}
        <div className="location">
          {`${city}, ${state}, ${country}`}
        </div>
        <div className="share">Share</div>
        <div className="save">Save</div>
      </HeaderDescrip>
    </div>
  );
};

export default Header;
