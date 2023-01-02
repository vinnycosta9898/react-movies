import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        color: #fff;
        font-size: 48px;
        margin-top: 300px;
    }

    a{
        color: #fff;
        font-size: 14px;

        &:hover{
            color: #027fff;
        }
    }
`