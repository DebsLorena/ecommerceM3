import React from "react";
import { Container, Info, Name, Price, Parc, Shop, ViewPrice } from "./productStyled";

const Cards = ({ item, handleClick }) => {

  const { name, price, parcelamento, image, viewPrice } = item;

  return (
    <Container>
        <img src={image} width="191px" height="293px" alt="image product" />
        <Info>
            <Name>{name}</Name>
            <Price>{price}</Price>
            <ViewPrice>{viewPrice}</ViewPrice>
            <Parc> até {parcelamento[0]}x de {parcelamento[1]}</Parc>
        </Info>
        <Shop  >
        <button onClick={() => handleClick(item)}>Comprar</button>
        </Shop>
        </Container>
  );
};

export default Cards;


