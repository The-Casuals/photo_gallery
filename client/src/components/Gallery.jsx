import React from 'react';
import styled from 'styled-components';
import { Grid } from '@styled-icons/boxicons-solid';

const Container = styled.div`
  padding-left: 40px;
  padding-right: 40px;
`;
const GalleryContainer = styled.div`
  display: flex;
  height: 400px;
`;
const BigContainer = styled.div`
  width: 50%;
`;
const Row1 = styled.div`
  height: 50%;
`;
const Row2 = styled.div`
  height: 50%;
  padding-top: 8px;
  box-sizing: border-box;
  position: relative;
`;
const LeftColumn = styled.div`
  flex-direction: column;
  width: 25%;
  padding-left: 8px;
`;
const RightColumn = styled.div`
  flex-direction: column;
  height: 100%;
  width: 25%;
  padding-left: 8px;
`;
const SmallContainer = styled.div`
  height: 100%;
`;
const ShowContainer = styled.div`
  position: absolute;
  top: 70%;
  right: 15%;
`;
const ShowAnchor = styled.button`
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
const GridEmoji = styled(Grid)`
  height: 12px;
  width: 12px;
  display: block;
`;
const ShowText = styled.div`
  margin-left: 8px;
  box-sizing: border-box;
`;
const BigImage = styled.img`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const SmallImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const SmallTopRight = styled.img`
  border-top-right-radius: 20px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const SmallBottomRight = styled.img`
  border-bottom-right-radius: 20px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Gallery = (props) => {
  const { galleria, showModal } = props;
  const { gallery } = galleria;

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
              <SmallTopRight
                src={gallery[3]['photoUrl']}
              />
            </Row1>
            <Row2>
              <SmallBottomRight
                src={gallery[4]['photoUrl']}
              />
              <ShowContainer>
                <ShowAnchor onClick={showModal}>
                  <ShowTextContainer>
                    <GridEmoji />
                    <ShowText>
                      Show all photos
                    </ShowText>
                  </ShowTextContainer>
                </ShowAnchor>
              </ShowContainer>
            </Row2>
          </SmallContainer>
        </RightColumn>
      </GalleryContainer>
    </Container>
  );
};

export default Gallery;
