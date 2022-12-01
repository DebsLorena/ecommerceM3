import styled from "styled-components";


export const Container = styled.div`
    padding-left: 100px;
    @media (max-width: 480px) {
        padding: 0;
    }
`;

export const ProductsMap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    @media (max-width: 480px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    button {
    width: 175px;
    height: 35px;
    border: none;
    background: #00C0EE;
    font-weight: 700;
    line-height: 19px;
    text-transform: uppercase;
    color: #FFFFFF;
    }
`;
