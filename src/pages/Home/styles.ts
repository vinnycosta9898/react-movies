import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

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

        @media (max-width: 330px){
            font-size: 24px;
        }
    }

    
`
export const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 1300px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 900px){
        grid-template-columns: 1fr;
    }
`

export const ArticleContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3{
        color: #da9f65;
        font-size: 20px;
        margin-top: 40px;
        text-align: center;

        @media (max-width: 900px){
            font-size: 16px;
        }

        @media (max-width: 330px){
            font-size: 14px;
        }
    }

`

export const ImageContainer = styled.div`
    margin: 0 20px;

    a{
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }
`
export const MovieImage = styled.img`
    width: 400px;
    height: 500px;
    border-radius: 10px;
    border:  2px solid #000;

    cursor: pointer;

    &:hover{
        border-color: #027fff;
        transform: scale(1.05);
        transition: .2;
    }

    @media (max-width: 430px){
        width: 300px;
        height: 400px;
    }

    @media (max-width: 330px){
        width: 200px;
        height: 300px;
    }
`

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
   
    a{
        color: #fff;
        cursor: pointer;
        font-size: 20px;
        margin: 0 20px;

        &:hover{
            color: #027fff;
        }
    }
`

