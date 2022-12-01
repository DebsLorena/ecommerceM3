import styled from "styled-components";

export const Container = styled.div`
    width: 60%;
    margin: auto;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    border-bottom: 2px solid skyblue;
    padding-bottom: 5px;
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Image = styled.div`
    p {
        font-weight: bold;
        margin-left: 10px;
    }
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    button {
    border: 2px solid #00C0EE;
    width: 35px;
    height: 35px;
    border: none;
    color: #00C0EE;
    font-weight: 700;
    line-height: 19px;
    text-transform: uppercase;
    }
`;

export const Remove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button {
    width: 120px;
    height: 35px;
    border: none;
    background: #00C0EE;
    font-weight: 700;
    line-height: 19px;
    text-transform: uppercase;
    color: #FFFFFF;
    }
    span {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: bold;
`;
