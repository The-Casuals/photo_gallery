import React from 'react';
import styled from 'styled-components';

const Gallery = (props) => {
  const { galleria } = props;
  const { gallery } = galleria;
  console.log(gallery);
  const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
  `;
  const GalleryContainer = styled.div`
    border-radius: 12px;
    width: 100%;
    height: 50%;
    position: absolute;
    display: block;
`;
  const BigContainer = styled.div`
    display: block;
    height: 100%;
    width: 50%;
    left: 0;
    top: 0;
    position: absolute;
  `;
  const Row1 = styled.div`
    height: 50%;
    box-sizing: border-box;
  `;
  const Row2 = styled.div`
    height: 50%;
    display: block;
    padding-top: 8px;
    box-sizing: border-box;
  `;
  const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 25%;
    padding-left: 8px;
    left: 50%;
    top: 0px;
    position: absolute;
  `;
  const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 25%;
    padding-left: 8px;
    right: 0px;
    top: 0px;
    position: absolute;
  `;
  const SmallContainer = styled.div`
    display: block;
    height: 100%;
    width: 100%;
  `;
  const ShowContainer = styled.div`
    position: absolute;
    z-index: 3;
    bottom: 24px;
    right: 24px;
  `;
  const ShowAnchor = styled.a`
    cursor: pointer;
    display: inline-block;
    margin: 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    width: auto;
    font-size: 14px;
    line-height: 18px
    font-weight: 600;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    outline: none;
    padding: 7px 15px;
    border-color: rgb(34, 34, 34);
    background: rgb(255, 255, 255);
    color: rgb(34, 34, 34);
  `;
  const ShowTextContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  const ShowText = styled.div`
    margin-left: 8px;
  `;

  const BigImage = styled.img`
    object-fit: cover;
    vertical-align: bottom;
    height: 100%;
    width: 100%;
    position: absolute;
  `;
  const SmallImage = styled.img`
    position: relative;
    vertical-align: bottom;
    height: 100%;
    width: 100%;
    object-fit: cover;
  `;

  return (
    <Container>
      <GalleryContainer>
        <BigContainer>
          <BigImage
            src={gallery[0]['photoUrl']}
          />
        </BigContainer>
        <LeftColumn>
          <SmallContainer>
            <Row1>
              <SmallImage
                src={gallery[1]['photoUrl']}
              />
            </Row1>
            <Row2>
              <SmallImage
                src={gallery[2]['photoUrl']}
              />
            </Row2>
          </SmallContainer>
        </LeftColumn>
        <RightColumn>
          <SmallContainer>
            <Row1>
              <SmallImage
                src={gallery[3]['photoUrl']}
              />
            </Row1>
            <Row2>
              <SmallImage
                src={gallery[4]['photoUrl']}
              />
            </Row2>
          </SmallContainer>
        </RightColumn>
      </GalleryContainer>
    </Container>
  );
};

export default Gallery;
