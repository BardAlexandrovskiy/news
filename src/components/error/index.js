import React from 'react';
import { LockContainer, ErrorContainer, Text, Button } from './styles';

export default function Error({ hideError, text }) {
  return (
    <LockContainer>
      <ErrorContainer>
        <Text>{text}</Text>
        <Button onClick={hideError}>Ок</Button>
      </ErrorContainer>
    </LockContainer>
  );
}
