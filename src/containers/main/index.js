import React from "react";
import {
  MainContainer,
  Title,
  MemsItemContainer,
  MemImg,
  Description,
} from "./styles";

import arrMemes from "../../constants/arrMems";

class Main extends React.Component {
  render() {
    return (
      <MainContainer>
        <Title>Не понравились новости? Посмотрите на это.</Title>
        {arrMemes.map((item, index) => {
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
