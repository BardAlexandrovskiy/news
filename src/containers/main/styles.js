import styled from 'styled-components';

export const MainContainer = styled.div`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  list-style-type: none;
  align-items: center;
  padding: 10px 10px 0;
`;

export const Title = styled.h1`
  padding-bottom: 10px;
  text-align: center;
  font-size: 24px;

  @media (max-width: 736px) {
    font-size: 20px;
  }
`;

export const MemsItemContainer = styled.li`
  width: 45%;
  margin-bottom: 10px;
  border-bottom: 1px solid lightgrey;

  @media (max-width: 736px) {
    width: 100%;
  }
`;

export const MemImg = styled.img`
  width: 100%;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 3px;
  text-align: center;
`;
