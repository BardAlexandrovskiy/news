import React from 'react';
import {
  HeaderContainer,
  Logo,
  RightFixContainer,
  NewsLink,
  ProfileLink
} from './styles';

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Logo to="/">
          Top <span>news</span>
        </Logo>
        <RightFixContainer>
          <NewsLink to="/news">Новости</NewsLink>
          <ProfileLink to="/profile">Профиль</ProfileLink>
        </RightFixContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
