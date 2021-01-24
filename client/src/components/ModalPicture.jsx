/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { Verified } from '@styled-icons/material/Verified';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled.div`
  contain: content !important;
  height: 100% !important;
  position: absolute !important;
  top: 0px !important;
  width: 50% !important;
  animation-fill-mode: both !important;
  animation-delay: 0.4s !important;
  animation-duration: 0.3s !important;
  animation-iteration-count: 1 !important;
  animation-timing-function: ease-in-out !important;
  animation-name: keyframe_18jn58a !important;
`;
const ModalContainer1 = styled.div`
  position: absolute !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  top: 0px !important;
  height: 95% !important;
  width: 100% !important;
`;
const ModalContainer2 = styled.div`
  height: calc(100% - 144px) !important;
  margin: 0px auto !important;
  position: relative !important;
  top: 72px !important;
`;
const HeightContainer = styled.div`
  height: 100% !important;
`;
const PictureContainer = styled.div`
  display: inline-block;
  vertical-align: bottom;
  height: 100%;
  width: 100%;
  min-height: 1px;
`;
const Picture = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
`;
const DescriptionContainer = styled.div`
  background: rgb(255, 255, 255) !important;
  bottom: -72px !important;
  left: 50% !important;
  max-height: 100% !important;
  position: absolute !important;
  transform: translateX(-50%) !important;
  transition: opacity 0.2s ease 0.2s !important;
  overflow-x: auto !important;
  width: 101% !important;
  padding: 24px !important;
`;
const Description = styled.div`
  max-width: 760px !important;
  margin: 0px auto !important;
  width: 100% !important;
`;
const VerifiedContainer = styled.div`
  -webkit-box-align: center !important;
  padding-bottom: 8px !important;
  display: flex !important;
`;
const VerifiedEmoji = styled(Verified)`
  font-weight: normal !important;
`;
const VerifiedText = styled.div`
  font-size: 12px !important;
  line-height: 16px !important;
  padding-left: 8px !important;
`;
const DescriptionText = styled.div`
  box-sizing: border-box;
`;
const ModalPicture = (props) => {
  const { featurePicture } = props;
  console.log(featurePicture);
  const {
    hasDescription, isVerified, photoDescription, photoName, photoUrl,
  } = featurePicture;
  const renderVerified = isVerified
    ? (
      <VerifiedContainer>
        <VerifiedEmoji />
        <VerifiedText>
          Photo Verified by Airbnb
        </VerifiedText>
      </VerifiedContainer>
    )
    : (<></>);
  const renderDescription = hasDescription
    ? (
      <DescriptionContainer>
        <Description>
          <DescriptionText>
            {photoDescription}
          </DescriptionText>
        </Description>
      </DescriptionContainer>
    )
    : (<></>);
  const renderBoth = hasDescription && isVerified
    ? (
      <DescriptionContainer>
        <Description>
          {renderVerified}
          <DescriptionText>
            {photoDescription}
          </DescriptionText>
        </Description>
      </DescriptionContainer>
    )
    : (<></>);
  return (
    <Container>
      <ModalContainer>
        <ModalContainer1>
          <ModalContainer2>
            <HeightContainer>
              <PictureContainer>
                <Picture src={photoUrl} alt={photoName} />
              </PictureContainer>
              {hasDescription && isVerified
                ? renderBoth
                : hasDescription && !isVerified
                  ? renderDescription
                  : !hasDescription && isVerified
                    ? renderVerified
                    : (<></>)}
            </HeightContainer>
          </ModalContainer2>
        </ModalContainer1>
      </ModalContainer>
    </Container>
  );
};

export default ModalPicture;
