import styled from "styled-components";

export const Container = styled.div`
    width: 700px;
    height: 700px;

    border-radius: 20px;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;

    h2{
        color: #da9f65;
        font-size: 32px;
    }
`

export const ButtonContainer = styled.div`
    position: absolute;
    left: 695px;
    top: 10px;

    button{
        cursor: pointer;
    }
`

export const CastContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        color: #fff;
        font-size: 20px;
    }
`