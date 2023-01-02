import { Container } from "./styles";

export function Header(){
    return(
        <>
            <Container>
                <h1>React Movies</h1>
                <a href="/1">Inicio</a>
                <a href="/favorites">Meus Filmes</a>
            </Container>
            <hr color="#da9f65"/>
        </>
    )
}