import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    position: absolute;
    top: 500px;
`

export const ButtonContainer = styled.div`
    button{
        background: none;
        border: none;
        color: #fff;
        margin: 0 50px;
    }

    a, span{
        color: #fff;
        font-size: 24px;
        padding: 0 20px;

        @media (max-width: 1300px){
            font-size: 20px;
        }
    }

    @media (max-width: 1300px){
        top: 400px;
    }
`