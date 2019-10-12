import React from 'react';
import { PreloaderContainer, PreloaderItem } from './styles';

export default function Preloader() {
  return (
    <PreloaderContainer>
      <PreloaderItem />
      <PreloaderItem />
      <PreloaderItem />
      <PreloaderItem />
    </PreloaderContainer>
  );
}
