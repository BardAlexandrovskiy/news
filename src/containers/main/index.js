import React from 'react';
import {
  MainContainer,
  Title,
  MemsItemContainer,
  MemImg,
  Description
} from './styles';
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import img7 from './img/7.png';
import img8 from './img/8.png';

class Main extends React.Component {
  render() {
    return (
      <MainContainer>
        <Title>Не понравились новости? Посмотрите на это.</Title>
        <MemsItemContainer>
          <Description>Тестирование программного обеспечения</Description>
          <MemImg src={img1} />
        </MemsItemContainer>
        <MemsItemContainer>
          <Description>Миграция в Облако (иногда бывают сложности)</Description>
          <MemImg src={img2} />
        </MemsItemContainer>
        <MemsItemContainer>
          <Description>Когда не все понимают, чем ты занимаешься</Description>
          <MemImg src={img3} />
        </MemsItemContainer>
        <MemsItemContainer>
          <Description>Как я встретил вашу маму</Description>
          <MemImg src={img4} />
        </MemsItemContainer>
        <MemsItemContainer>
          <Description>Я обожаю Windows PowerShell</Description>
          <MemImg src={img5} />
        </MemsItemContainer>
        <MemsItemContainer>
          <Description>Arduino-проект</Description>
          <MemImg src={img6} />
        </MemsItemContainer>
        <MemsItemContainer>
          <Description>
            Как программист решает, что пора завести ребёнка
          </Description>
          <MemImg src={img7} />
        </MemsItemContainer>
        <MemsItemContainer>
          <Description>Реактивное программирование</Description>
          <MemImg src={img8} />
        </MemsItemContainer>
      </MainContainer>
    );
  }
}

export default Main;
