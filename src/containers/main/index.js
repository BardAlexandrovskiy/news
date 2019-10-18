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
    const arrMems = [
      { description: 'Тестирование программного обеспечения', imgSrc: img1 },
      {
        description: 'Миграция в Облако (иногда бывают сложности)',
        imgSrc: img2
      },
      {
        description: 'Когда не все понимают, чем ты занимаешься',
        imgSrc: img3
      },
      { description: 'Как я встретил вашу маму', imgSrc: img4 },
      { description: 'Я обожаю Windows PowerShell', imgSrc: img5 },
      { description: 'Arduino-проект', imgSrc: img6 },
      {
        description: 'Как программист решает, что пора завести ребёнка',
        imgSrc: img7
      },
      { description: 'Реактивное программирование', imgSrc: img8 }
    ];
    return (
      <MainContainer>
        <Title>Не понравились новости? Посмотрите на это.</Title>
        {arrMems.map((item, index) => {
          return (
            <MemsItemContainer key={index}>
              <Description>{item.description}</Description>
              <MemImg src={item.imgSrc} />
            </MemsItemContainer>
          );
        })}
      </MainContainer>
    );
  }
}

export default Main;
