import styled from "styled-components";


export const Container = styled.div`
    height: 62px;
    width: 100vw;
    border-bottom: 2px solid #C7C7C7;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Box = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 0px 165px 0 162px;
    @media (max-width: 480px) {
        padding: 0px;
    }
`;

export const Left = styled.div``;

export const Right = styled.div`
    position: relative;
`;
    
export const Circle = styled.div`
    position: absolute;
    top: 10px;
    left: 8px;
    width: 12px;
    height: 12px;
    background: #00C0EE;
    border-radius: 16px;
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`;
