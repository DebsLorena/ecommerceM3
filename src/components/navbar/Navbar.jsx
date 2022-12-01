import React from "react";
import logo from "../../img/logo-m3.png";
import bag from "../../img/bag.png";
import { Container, Box, Left, Right, Circle } from "./navbarStyled";



const Navbar = ({setShow, size}) => {


    return (
        <Container>
            <Box>
            <Left>
                <img src={logo} width="119px" height="30px" alt="Logo" />
            </Left>
            <Right onClick={() => setShow(false)}>
                <img src={bag} width="17px" height="20px" alt="Bag" />
                <Circle>{size}</Circle>
            </Right>
            </Box>
        </Container>
    )
    
}

export default Navbar