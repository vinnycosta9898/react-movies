import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 8vh;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    h1{
        color: #fff;
        font-size: 32px;

        @media (max-width: 550px){
            font-size: 24px;
        }
        
        @media (max-width: 420px){
            font-size: 18px;
        }
    }

    a{
        color: #fff;
        cursor: pointer;
        font-size: 24px;

        @media (max-width: 550px){
            font-size: 16px;
        }
        
        @media (max-width: 420px){
            font-size: 14px;
        }
    }
`   