import React from 'react';
import { ProfileContainer, ButtonExit } from './styles';

class Profile extends React.Component {
  handleClickButtonExit = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    return (
      <ProfileContainer>
        PROFILE
        <ButtonExit onClick={this.handleClickButtonExit}>Выйти</ButtonExit>
      </ProfileContainer>
    );
  }
}

export default Profile;
