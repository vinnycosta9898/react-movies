import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    position: absolute;
    top: 500px;

    @media (max-width: 1300px){
        top: 400px;
    }

    @media (max-width: 830px){
        top: 350px;
    }

    @media (max-width: 630px){
        top: 370px;
    }

    @media (max-width: 530px){
        top: 270px;
    }

    @media (max-width: 430px){
        top: 250px;
    }
`

export const ButtonContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    button{
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
        margin: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 430px){
            svg{
                width: 10px;
            }
        }
    }

    a, span{
        color: #fff;
        font-size: 24px;
        padding: 0 10px;

        @media (max-width: 1300px){
            font-size: 20px;
        }

        @media (max-width: 830px){
            font-size: 16px;
        }

        @media (max-width: 630px){
            font-size: 12px;
        }

        @media (max-width: 430px){
            font-size: 10px;
        }
    }

    @media (max-width: 1300px){
        top: 400px;
    }
`