import React from 'react';
import styled from 'styled-components';
import {
  HeartOutlined, Heart, ShareAlternative, ChevronLeft, ChevronRight,
} from '@styled-icons/entypo';

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: rgb(34, 34, 34) !important;
  font-family: 'Nunito Sans', sans-serif !important;
  font-size: 16px !important;
  line-height: 24px !important;
  font-weight: 400 !important;
  background: rgba(0, 0, 0, 0.6);
`;
const SubContainer = styled.div`
  display: block;
  position: fixed;
  background: white;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
const HeaderContainer = styled
  .div`
  box-sizing: border-box;
`;
const Header = styled.div`
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
const HideContainer = styled
.div`
  box-sizing: border-box;
`;
const HideButton = styled.button`
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0px !important;
  position: relative !important;
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
  min-width: 50px !important;
  display: flex !important;
  flex: 0 0 auto !important;
  color: rgb(34, 34, 34) !important;
  font-family: 'Nunito Sans', sans-serif !important;BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
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
const ButtonContainer1 = styled.div`
  display: flex !important;
  justify-content: space-between !important;
  margin-left: calc(2% + 19px) !important;
  margin-right: calc(2% + 19px) !important;
`;
const ButtonContainer2 = styled.div`
  pointer-events: all !important;
  transition: opacity 0.2s ease 0s !important;
`;
const Button = styled.button`
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
const ButtonBackground = styled.div`
  content: "" !important;
  display: block !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
  background: rgb(255, 255, 255) !important;
  border: 1px solid rgb(176, 176, 176) !important;
`;
const ButtonContainer3 = styled.span`
  position: relative;
`;
const ButtonEmojiContainer = styled.span`
  border: 0px !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(100%) !important;
  clip-path: inset(100%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0px !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`;
const ModalContainer = styled.div`
  height: calc(100% - 144px) !important;
  margin: 0px auto !important;
  position: relative !important;
  top: 72px !important;
  width: 100% !important;
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
const VerifiedEmoji = styled.div`
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

const Modal = (props) => {
  const { galleria, hideModal } = props;
  return (
    <MainContainer>
      <SubContainer>
        <HeaderContainer>
          <Header>
            <HideContainer>
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
            </HideContainer>
            <HeaderLine>
              1/51
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
        <ButtonContainer1>
          <ButtonContainer2>
            <ButtonContainer3>
              <ButtonBackground>
                <Button>
                  Left
                  <ButtonEmojiContainer>
                    X
                  </ButtonEmojiContainer>
                </Button>
              </ButtonBackground>
            </ButtonContainer3>
            <ButtonContainer3>
              <ButtonBackground>
                <Button>
                  Right
                  <ButtonEmojiContainer>
                    X
                  </ButtonEmojiContainer>
                </Button>
              </ButtonBackground>
            </ButtonContainer3>
          </ButtonContainer2>
        </ButtonContainer1>
        <ModalContainer>
          <HeightContainer>
            <PictureContainer>
              Picture
            </PictureContainer>
            <DescriptionContainer>
              <Description>
                <VerifiedContainer>
                  <VerifiedEmoji>
                    Check!
                  </VerifiedEmoji>
                  <VerifiedText>
                    Photo Verified by Airbnb
                  </VerifiedText>
                </VerifiedContainer>
                <DescriptionText>
                  Text
                </DescriptionText>
              </Description>
            </DescriptionContainer>
          </HeightContainer>
        </ModalContainer>
      </SubContainer>
    </MainContainer>
  );
};

export default Modal;
