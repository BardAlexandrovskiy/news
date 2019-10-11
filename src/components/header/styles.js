import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: #4577d4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Logo = styled(NavLink)`
  font-size: 20px;
  background-color: whitesmoke;
  color: #000;
  padding: 3px;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;

  & span {
    color: #7277d8;
  }
`;

export const RightFixContainer = styled.div``;

export const NewsLink = styled(NavLink)`
  display: inline-block;
  margin-right: 20px;
  color: whitesmoke;
  cursor: pointer;
  transition: opacity 0.2s;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`;

export const ProfileLink = styled(NewsLink)`
  margin: 0;
`;
