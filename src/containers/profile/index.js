import React from "react";
import {
  ProfileContainer,
  ButtonExit,
  InfoContainer,
  ImgUser,
  InfoList,
  InfoItem,
  InfoTitle,
} from "./styles";
import adminImg from "./img/admin.png";

class Profile extends React.Component {
  handleClickButtonExit = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    return (
      <ProfileContainer>
        <InfoContainer>
          <ImgUser src={adminImg} />
          <InfoList>
            <InfoTitle>Александр</InfoTitle>
            <InfoItem>22 год</InfoItem>
            <InfoItem>Полтава</InfoItem>
            <InfoItem>Ищет работу</InfoItem>
            <InfoItem>Ибо нужно что-то есть</InfoItem>
            <InfoItem>Чтоб не умереть</InfoItem>
          </InfoList>
        </InfoContainer>
        <ButtonExit onClick={this.handleClickButtonExit}>Выйти</ButtonExit>
      </ProfileContainer>
    );
  }
}

export default Profile;
