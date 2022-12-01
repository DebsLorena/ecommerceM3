import styled from 'styled-components';

export const Main = styled.div`
@media (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
`;

export const Title = styled.div`
    font-size: 32px;
    line-height: 44px;
    display: flex;
    padding: 40px 0 65px 162px;
    @media (max-width: 480px) {
        padding: 24px 0 12px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Container = styled.div`
    display: flex;
    padding: 0 293px 0 162px;
    position: relative;
    @media (max-width: 480px) {
        width: 100vw;
        padding: 0;
        flex-direction: column;
        padding-left:5px;
    }
`;

export const OpenMobile = styled.div`
    @media (max-width: 480px){
        width: 90%;
        display: flex; 
        height: 49px;
        color: #666666;
        margin: 0 16px; 
    }
`;

export const ButtonOrder = styled.div`
    width: 50%;
    border: 1px solid #666666;
    display: flex; 
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    @media (min-width: 481px){
        display: none;
    } 
`;

export const ContainerOrder = styled.div`
    position: absolute;
    top: -64px;
    right: 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 162px;
    @media (max-width: 480px) {
        width: 100vw;
        height: 120vh;
        padding: 0;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: -130px;
        left: 0;
        background: white;
        z-index: 1;
        transition: transform 0.3s ease-in-out;
        align-items: flex-start;
        justify-content: flex-start;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    }
    select {
        font-size: 16px;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        color: #666666;
        @media (max-width: 480px) {
        top: 0;
        width: 100vw;
        border: none;
        border-bottom: 1px solid #666666;
        font-size: 28px;
        line-height: 38px;
        text-transform: uppercase;
    } 
    }
    option {
        @media (max-width: 480px) {
            font-size: 14px;
            line-height: 38px;
            text-transform: capitalize;
            padding: 100px;
            gap: 100px;
        }
    } 
`;

export const ButtonOrderClose = styled.div`
    @media (min-width: 481px){
        display: none;
    }
    width: 95vw;
    display: flex;
    justify-content: space-between;
    padding:  0 16px 16px 16px;
    border-bottom: 1px solid #666666;
    font-size: 28px;
    line-height: 38px;
    img {
        padding-right: 16px;
    }
`;

export const ButtonFilter = styled.div`
    width: 50%;
    border: 1px solid #666666;
    display: flex; 
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    @media (min-width: 481px){
        display: none;
    }
`;

export const ContainerFilter = styled.div`
    width: 157px;
        @media (max-width: 480px) {
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        position: absolute;
        background: white;
        width: 100vw;
        height: 120vh;
        top: -130px;
        left: -10px;
        padding: 16px;
        z-index: 1;
        transition: transform 0.3s ease-in-out;
        padding-left: 18px;
    } 
`;

export const ButtonFilterClose = styled.div`
    border-bottom: 1px solid #666666;
    font-size: 28px;
    line-height: 38px;
    text-transform: uppercase;
    color: #666666;
    padding:  0 16px 16px 0;
    display: flex;
    justify-content: space-between;
    @media (min-width: 481px){
        display: none;
    }
`;

export const TitleFilter = styled.div`
    img {
        display: none;
    @media (max-width: 480px) {
        display: flex;
        padding: 30px 16px 0 0;
    }
    }
    h2 {
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding-bottom: 14px;
        margin: 0;
    @media (max-width: 480px) {
        font-size: 24px;
        line-height: 33px;
        padding: 30px 0 21px 0;
    }
    }
    @media (max-width: 480px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const ViewMore = styled.div``;

export const ViewMoreMobile = styled.div`
    @media (min-width: 481px){
        display: none;
    } 
`;

export const FilterColor = styled.div`
    ul {
        display: grid;
        grid-template-columns: 0.2fr 2fr;
        gap: 10px 10px;
        margin: 0;
        padding: 0 0 10px 0;
    }
    input {
        opacity: 0;
        z-index: 1;
        cursor: pointer;
    }
    input[type="checkbox"] + label::before {
    content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        border: solid 1px gray;
        left: 162px;
    @media (max-width: 480px) {
        left: 18px;
    }
    }
    input[type="checkbox"]:checked + label::after {
    content: "";
        background: #00C0EE;
        position: absolute;
        left: 162px;
        width: 13px;
        height: 13px;
        margin: 2px;
    @media (max-width: 480px) {
        left: 18px;
    }
    }
    span {
        font-size: 12px;
        text-decoration-line: underline;
        color: #666666;
        cursor: pointer;
    @media (max-width: 480px) {
        display: none;
    }
    } 
`;

export const FilterSize = styled.div`
    width: 168px;
    padding: 24px 0;
    @media (max-width: 480px) {
        padding: 0;
        width: 390px;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        width: 200px;
    }
    input {
        opacity: 0;
        z-index: 1;
        cursor: pointer;
        margin: 0;
    }
    input[type="checkbox"] + label {
    content: "";
        width: 32px;
        height: 32px;
        margin-top: 8px;
    }
    input[type="checkbox"]:checked + label {
        border: 2px solid #00C0EE;
        color: #000000;
    }
    label {
        width: 32px;
        height: 32px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }
`;

export const FilterPrice = styled.div`
        width: 157px;
        height: 156px;
    @media (max-width: 480px) {
        width: 390px;
    }
    ul {
        display: grid;
        gap: 10px 10px;
        grid-template-columns: 0.2fr 4fr;
        padding: 0%;
    }
    input {
        opacity: 0;
        z-index: 1;
        cursor: pointer;
        margin: 0;
        padding: 0;
    }
    input[type="checkbox"] + label::before {
    content: "";
        width: 15px;
        height: 15px;
        border: solid 1px gray;
        position: absolute;
        left: 162px;
    @media (max-width: 480px) {
        left: 18px;
    }
    }
    input[type="checkbox"]:checked + label::after {
    content: "";
        background: #00C0EE;
        position: absolute;
        left: 162px;
        width: 13px;
        height: 13px;
        margin: 2px;
    @media (max-width: 480px) {
        left: 18px;
    }
    }
`;
    



