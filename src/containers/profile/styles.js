import styled from 'styled-components';

export const ProfileContainer = styled.div`
  height: calc(100% - 120px);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
`;
export const ButtonExit = styled.button`
  cursor: pointer;
  background-color: #6a92d4;
  padding: 5px 10px;
  border-radius: 10px;
  transition: opacity 0.2s;
  margin-left: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgUser = styled.img`
  width: 200px;

  @media (max-width: 736px) {
    width: 100px;
  }
`;

export const InfoList = styled.ul`
  margin-left: 30px;
`;

export const InfoItem = styled.li`
  list-style-type: square;
  font-size: 20px;

  @media (max-width: 736px) {
    font-size: 15px;
  }
`;

export const InfoTitle = styled(InfoItem)`
  font-weight: bold;
  list-style-type: none;
`;
