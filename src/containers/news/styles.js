import styled from 'styled-components';

export const NewsContainer = styled.ul`
  height: calc(100% - 120px);
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: auto;
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
