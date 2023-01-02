import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    
    .spinner{
        color: #fff;
        margin: 300px 0;
        animation: animation 0.5s infinite linear;
    }

    @keyframes animation{
        from{
            transform: rotate(0deg);
        }

        to{
            transform: rotate(360deg);
        }
    }
`