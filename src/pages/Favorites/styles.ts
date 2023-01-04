import styled from "styled-components";

export const Container = styled.div``

export const TitleContainer = styled.div` 
    display: flex;
    justify-content: center;
    
    h1{
        color: #fff;
        font-size: 36px;
        margin-top: 20px;

        @media (max-width: 900px){
            font-size: 30px;
        }

    }
`

export const MoviesContainer = styled.div`
    display: flex;
    justify-content: center;

    h1{
        color: #fff;
        font-size: 32px;
        margin: 200px 0;

        @media (max-width: 900px){
            font-size: 24px;
        }
    }
`

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const CardContainer = styled.div`
    width: 800px;
    height: 70px;
    margin: 30px 0;
    border: 1px solid #da9f65;
    border-radius: 5px;

    display: flex;
    align-items: center;

    span{
        color: #fff;
        font-size: 20px;
        margin: 0 10px;
        text-align: center;
        width: 80%;

        @media (max-width: 730px){
            font-size: 16px;
        }

        @media (max-width: 630px){
            font-size: 14px;
        }

        @media (max-width: 530px){
            font-size: 12px;
        }
    }

    @media (max-width: 830px){
        width: 700px;
    }

    @media (max-width: 730px){
        width: 600px;
    }

    @media (max-width: 630px){
        width: 500px;
    }

    @media (max-width: 530px){
        width: 400px;
    }
` 

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    button{
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        margin: 10px;
    }
`