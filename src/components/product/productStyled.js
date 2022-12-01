import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 195px;
    height: 424px;
    padding: 0 40px 40px 0;
    @media (max-width: 480px) {
        padding:0px;
        img {
            width: 159px;
            height: 241px;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 14px;
`;

export const Name = styled.div`
    line-height: 19px;
    padding: 10px 0;
    text-transform: uppercase;
`;

export const Price = styled.div`
    display: none;
`;

export const ViewPrice = styled.div`
    font-weight: 700;
    font-size: 16px;
`;

export const Parc = styled.div`
    line-height: 22px;
    color: #666666;
    font-size: 16px;
`;

export const Shop = styled.div`
    width: 195px;
    height: 33.55px;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    @media (max-width: 480px) {
        width: 162px;
        height: 33px;  
    }
    button {
        background: transparent;
        color: #FFFFFF;
        text-transform: uppercase;
        border: none;
    }
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px 49px;
    gap: 10px;
    position: absolute;
    width: 195px;
    height: 33px;
    background: #000000;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
`;
