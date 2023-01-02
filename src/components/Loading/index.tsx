import { Container, SpinnerContainer } from './styles';
import { ImSpinner2 } from 'react-icons/im';

export function Loading(){
    return(
        <Container>
            <SpinnerContainer>
                <ImSpinner2 size={100} className="spinner"/>
            </SpinnerContainer>
        </Container>
    )
}