import styled from 'styled-components';

export const LockContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ErrorContainer = styled.div`
  width: 50%;
  min-height: 200px;
  background-color: #052c6e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

export const Text = styled.p`
  color: whitesmoke;
  text-align: center;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  border: 1px solid black;
  padding: 5px 10px;
  background-color: whitesmoke;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
