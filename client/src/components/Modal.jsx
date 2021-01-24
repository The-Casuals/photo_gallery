import React from 'react';
import styled from 'styled-components';
import ModalHeader from './ModalHeader';
import ModalButtons from './ModalButtons';
import ModalPicture from './ModalPicture';

const MainContainer = styled.div`
  box-sizing: border-box;
`;
const SubContainer = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: 'Nunito Sans', sans-serif !important;
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
    featurePicture, hideModal, onModalClick, onLeftClick, onRightClick
  } = props;
  return (
    <MainContainer>
      <SubContainer>
        <SubContainer1>
          <SubContainer2>
            <ModalHeader hideModal={hideModal} />
            <ModalButtons onLeftClic={onLeftClick} onRightClick={onRightClick} />
            <ModalPicture featurePicture={featurePicture} onModalClick={onModalClick} />
          </SubContainer2>
        </SubContainer1>
      </SubContainer>
    </MainContainer>
  );
};

export default Modal;
