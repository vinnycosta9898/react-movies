import { Container, 
        TitleContainer,
        ButtonContainer,
        CastContainer 
       } from './styles';

import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';

import { CreditsRequestProps} from '../../pages/Movies';

import { v4 as uuidv4 } from 'uuid';

interface ModalCreditsProps{
    isOpen: boolean;
    onRequestClose: () => void;
    cast: CreditsRequestProps;
}

export function ModalCredits({ isOpen, onRequestClose, cast } : ModalCreditsProps){
    
    const customStyles = {
        content:{
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: `#313131`,
        },
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
        <Container>
            <TitleContainer>
                <h2>Elenco</h2>
            </TitleContainer>
            
            <ButtonContainer>
                <button
                    type="button"
                    onClick={onRequestClose}
                    style={{background: "transparent", border: 0}}
                >
                    <FiX size={45} color="#f34748"/>
                </button>
            </ButtonContainer>

            <CastContainer>
                {
                    cast?.cast?.map(item => (
                        <article key={uuidv4()}>
                            <p>{item?.name}</p>
                        </article>
                    ))
                }
            </CastContainer>
        </Container>
        </Modal>

    )
}

