import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputName = styled.input`
  border: 1px solid #6a92d4;
  border-radius: 5px;
  padding: 3px 10px;
  text-align: center;
  margin-bottom: 5px;
  &:focus {
    border-color: #052c6e;
  }
`;

export const InputPassword = styled(InputName)``;

export const ButtonSend = styled.button`
  border: 1px solid black;
  padding: 4px 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
