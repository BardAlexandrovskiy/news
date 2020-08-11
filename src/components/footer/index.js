import React from 'react';
import { FooterContainer, Text, TextLink } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <Text>© 2019 Top news</Text>
      <TextLink href="mailto:alexandr8558@gmail.com">Email: alexandr8558@gmail.com</TextLink>
      <TextLink
        href="https://developer.nytimes.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        API news: developer.nytimes.com
      </TextLink>
    </FooterContainer>
  );
}
