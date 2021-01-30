import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalHeader from './ModalHeader';
import ModalButtons from './ModalButtons';
import ModalPicture from './ModalPicture';

const MainContainer = styled.div`
  box-sizing: border-box;
  top: -50%;
  transition: all .5s ease-in-out;
`;
const SubContainer = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  line-height: 24px !important;
  font-weight: 400 !important;
`;
const SubContainer1 = styled.div`
  z-index: 2000 !important;
  position: fixed !important;
  inset: 0px !important;
`;
const SubContainer2 = styled.div`
  -webkit-box-direction: normal !important;
  -webkit-box-orient: vertical !important;
  background: rgb(255, 255, 255) !important;
  display: flex !important;
  flex-direction: column !important;
  height: 100% !important;
  width: 100% !important;
`;
const Modal = (props) => {
  const {
    hideModal, onLeftClick, onRightClick,
    allImages, pictureIndex, modalImage, isSaved, onSaveClick,
  } = props;
  return (
    <MainContainer>
      <SubContainer>
        <SubContainer1>
          <SubContainer2>
            <ModalHeader
              hideModal={hideModal}
              modalImage={modalImage}
              allImages={allImages}
              isSaved={isSaved}
              onSaveClick={onSaveClick}
            />
            <ModalButtons onLeftClick={onLeftClick} onRightClick={onRightClick} />
            <ModalPicture
              featurePicture={allImages[0]}
              modalImage={modalImage}
              index={pictureIndex}
            />
          </SubContainer2>
        </SubContainer1>
      </SubContainer>
    </MainContainer>
  );
};

Modal.propTypes = {
  isSaved: PropTypes.bool.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
  allImages: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    hasDescription: PropTypes.bool.isRequired,
    isVerified: PropTypes.bool.isRequired,
    photoDescription: PropTypes.string.isRequired,
    photoName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  })).isRequired,
  pictureIndex: PropTypes.number.isRequired,
  modalImage: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    hasDescription: PropTypes.bool.isRequired,
    isVerified: PropTypes.bool.isRequired,
    photoDescription: PropTypes.string.isRequired,
    photoName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  }).isRequired,
};
export default Modal;
