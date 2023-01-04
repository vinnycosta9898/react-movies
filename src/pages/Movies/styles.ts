import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: #fff;
        font-size: 36px;
        margin-top: 20px;

        @media (max-width: 530px){
            font-size: 24px;
        }

        @media (max-width: 430px){
            font-size: 20px;
        }
    }

    span{
        color: #da9f65;
        font-size: 20px;
        font-family: Poppins;
        margin-bottom: 20px;

        @media (max-width: 550px){
            font-size: 14px;
        }
    }
`

export const MovieContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const ImageContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    img{ 
        width: 1200px;
        height: 60%;
        border-radius: 10px;
        cursor: pointer;
        margin: 5px 20px;
        transition: all 1s;

        &:hover{
            -webkit-filter: blur(5px);
            filter: blur(5px);
        }

        @media (max-width: 1300px){
            width: 800px;
        }

        @media (max-width: 830px){
            width: 600px;
        }

        @media (max-width: 630px){
            width: 500px;
        }

        @media (max-width: 530px){
            width: 400px;
        }

        @media (max-width: 430px){
            width: 300px;
        }
}
`

export const DescriptionContainer = styled.div`
    width: 1200px;
    max-height: max-content;
    background-color: #313131;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 20px;
    
    h3{
        display: flex;
        justify-content: center;
        
        color: #da9f65;
        font-size: 24px;
        margin: 5px 0;
    }

    span{
        color: #fff;
        font-size: 18px;
        margin: 0 10px;
        text-align: center;
    }

    button{
        background: none;
        border: 1px solid #313131;
        cursor: pointer;
        color: #da9f65;
        font-size: 20px;
        padding-top: 10px;
    } 

    @media (max-width: 1300px){
        width: 800px;
        height: 600px;

        button, span{
            font-size: 16px;
        }
    }

    @media (max-width: 830px){
            width: 600px;
            height: 400px;

        button, span{
            font-size: 14px;
        }
    }

    @media (max-width: 630px){
            width: 500px;

            button, span{
            font-size: 12px;
        }
        }

    @media (max-width: 530px){
        width: 400px;
    }

    @media (max-width: 430px){
        width: 300px;
    }
 `

export const DataContainer = styled.div`
    width: 180px;
    max-height: max-content;
    background-color: #313131;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    margin: 10px 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;

    span{
        color: #da9f65;
        font-size: 16px;
        padding: 5px 0;
        text-align: center;
    }

    p{
        font-size: 14px;
    }

    button{
        background: none;
        border: 1px solid #313131;

        display: flex;
        justify-content: flex-start;
    }

    @media (max-width: 900px){
        width: 160px;
    }
    
    @media (max-width: 830px){
        width: 140px;
    }


`