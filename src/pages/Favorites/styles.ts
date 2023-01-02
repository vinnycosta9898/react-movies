import styled from "styled-components";

export const Container = styled.div``

export const TitleContainer = styled.div` 
    display: flex;
    justify-content: center;
    
    h1{
        color: #fff;
        margin-top: 20px;
    }
`

export const MoviesContainer = styled.div`
    display: flex;
    justify-content: center;

    h1{
        color: #fff;
        margin: 200px 0;
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
        width: 80%;
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