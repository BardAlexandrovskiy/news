import React from 'react';
import { FooterContainer, Text, TextLink } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <Text>© 2019 Top news</Text>
      <Text>Email: alexandr8558@gmail.com</Text>
      <TextLink
        href="https://newsapi.org"
        target="_blank"
        rel="noreferrer noopener"
      >
        API news: newsapi.org
      </TextLink>
    </FooterContainer>
  );
}
