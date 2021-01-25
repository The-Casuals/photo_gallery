import React from 'react';
import styled from 'styled-components';
import {
  HeartOutlined, Heart, ShareAlternative,
} from '@styled-icons/entypo';

const HeaderContainer = styled
  .div`
  box-sizing: border-box;
`;
const Header = styled.div`
  -webkit-box-pack: justify !important;
  -webkit-box-align: center !important;
  align-items: center !important;
  display: flex !important;
  flex: 0 0 auto !important;
  justify-content: space-between !important;
  margin: 24px 24px 12px !important;
  position: relative !important;
  z-index: 1 !important;
  transition: border 0.2s ease 0s, opacity 0.2s ease 0.2s !important;
`;
const HeaderLine = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: 'Nunito Sans', sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  align-items: center !important;
  inset: 0px !important;
  display: flex !important;
  justify-content: center !important;
  position: absolute !important;
`;
const HideContainer = styled.div`
  box-sizing: border-box;
`;
const HideButton = styled.button`
  cursor: pointer !important;
  display: flex;
  margin: 0px !important;
  position: absolute !important;
  text-align: center !important;
  text-decoration: none !important;
  width: auto !important;
  touch-action: manipulation !important;
  font-family: 'Nunito Sans', sans-serif !important;
  font-size: 14px !important;
  line-height: 18px !important;
  font-weight: 600 !important;border-radius: 8px !important;outline: none !important;
  padding: 8px 16px !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  background: rgba(34, 34, 34, 0.1) !important;
  color: rgb(34, 34, 34) !important;
  border: none !important;
`;
const HideWrapper = styled.div`
  &:hover ${HideButton} {
    background-color: rgb(24, 24, 24);
  }
`;
const HideTextContainer = styled.span`
  font-size: 14px !important;
  line-height: 18px !important;
  font-weight: 600 !important;
`;
const HideEmojiContainer = styled.span`
  margin-left: 0px !important;
  margin-right: 8px !important;
`;
const HideEmoji = styled.span`
  height: 12px;
  width: 12px;
  display: block;
  fill: currentcolor;
`;
const HideText = styled.span`
  box-sizing: border-box;
`;
const HeaderEnd = styled.div`
  -webkit-box-pack: end !important;
  min-width: 50px !important;
  display: flex !important;
  flex: 0 0 auto !important;
  color: rgb(34, 34, 34) !important;
  font-family: 'Nunito Sans', sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  justify-content: flex-end !important;
`;
const ShareSaveContainer = styled.div`
  display: flex !important;
  justify-content: flex-end !important;
  padding-top: 6px !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
`;
const ShareEmojiContainer = styled.div`
  margin-right: 20px;
`;
const ShareEmoji = styled(ShareAlternative)`
  appearance: none !important;
  display: inline-block !important;
  border-radius: 50% !important;
  border: none !important;
  outline: none !important;
  margin: 0px !important;
  padding: 0px !important;
  color: rgb(34, 34, 34) !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
  position: relative !important;
  background: transparent !important;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
`;
const SaveEmoji = styled(HeartOutlined)`
  appearance: none !important;
  display: inline-block !important;
  border-radius: 50% !important;
  border: none !important;
  outline: none !important;
  margin: 0px !important;
  padding: 0px !important;
  color: rgb(34, 34, 34) !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
  position: relative !important;
  background: transparent !important;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
`;
const ModalHeader = (props) => {
  const {
    hideModal, allImages, modalImage,
  } = props;
  const { _id } = modalImage;
  return (
    <HeaderContainer>
      <Header>
        <HideContainer>
          <HideWrapper>
            <HideButton onClick={hideModal}>
              <HideEmojiContainer>
                <HideEmoji>
                  X
                </HideEmoji>
              </HideEmojiContainer>
              <HideTextContainer>
                <HideText>
                  Close
                </HideText>
              </HideTextContainer>
            </HideButton>
          </HideWrapper>
        </HideContainer>
        <HeaderLine>
          {`${_id}/${allImages.length}`}
        </HeaderLine>
        <HeaderEnd>
          <ShareSaveContainer>
            <ShareEmojiContainer>
              <ShareEmoji>
                Share
              </ShareEmoji>
              <SaveEmoji>
                Save
              </SaveEmoji>
            </ShareEmojiContainer>
          </ShareSaveContainer>
        </HeaderEnd>
      </Header>
    </HeaderContainer>
  );
};

export default ModalHeader;
