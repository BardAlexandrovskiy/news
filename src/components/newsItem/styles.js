import styled from 'styled-components';

export const NewsItemContainer = styled.li`
  width: 45%;
  margin-bottom: 10px;
  border-bottom: 1px solid lightgrey;

  @media (max-width: 736px) {
    width: 100%;
  }
`;

export const NewsImg = styled.img`
  width: 100%;
  margin-bottom: 3px;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 3px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-bottom: 3px;
`;

export const SourceLink = styled.a`
  cursor: pointer;
  color: #4577d4;
  transition: opacity 0.3s;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 3px;

  &:hover {
    opacity: 0.8;
  }
`;
