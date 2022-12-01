import React, { useState, useEffect } from "react";
import { Container, Box, Image, Button, Total, Remove } from "./cartstyled";


const Cart = ({ cart, setCart, handleChange, item }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <Container>
      {cart.map((item) => (
        <Box key={item.id}>
          <Image>
            <img src={item.image} alt="product" />
            <p>{item.name}</p>
          </Image>
          <Button>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </Button>
          <Remove>
            <span>R${item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </Remove>
        </Box>
      ))}
      <Total>
        <span>Total</span>
        <span>Rs - {price}</span>
      </Total>
    </Container>
  );
};

export default Cart;
