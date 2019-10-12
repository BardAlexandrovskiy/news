import React from 'react';
import { NewsItemContainer, NewsImg, Title, Text, SourceLink } from './styles';

export default class NewsItem extends React.Component {
  render() {
    const { description, title, url, img } = this.props;
    return (
      <NewsItemContainer>
        <NewsImg src={img} />
        <Title>{title}</Title>
        <Text>{description}</Text>
        <SourceLink href={url} target="_blank" rel="noreferrer noopener">
          Почитать подробнее
        </SourceLink>
      </NewsItemContainer>
    );
  }
}
