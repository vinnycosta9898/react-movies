import { Container } from './styles';
import { Link } from 'react-router-dom';

export function Error(){
    return(
        <Container>
            <span>Erro 404</span>
            <Link to="/1">Voltar a Pagina Inicial</Link>
        </Container>
    )
}