import React from 'react';
import { LockContainer, ErrorContainer, Text, Button } from './styles';

export default function ErrorProfile({ hideError }) {
  return (
    <LockContainer>
      <ErrorContainer>
        <Text>Имя пользователя или пароль введены не верно.</Text>
        <Button onClick={hideError}>Ок</Button>
      </ErrorContainer>
    </LockContainer>
  );
}
