import { Container, ButtonContainer} from './styles';

import { BiMovie } from 'react-icons/bi';
import { BsFillHeartFill } from 'react-icons/bs';

import 'react-toastify/dist/ReactToastify.css';


export interface MovieOptionsProps{
    id: string;
    movie: {
        id: string;
        title: string;
    };
}

export function MovieOptions({ movie } : MovieOptionsProps){

    function saveMovie(){
        const listMovies = localStorage.getItem("@movieflix") as string;
        let moviesSave = JSON.parse(listMovies) || [];
        const hasMovie = moviesSave.some((movieSave: MovieOptionsProps) => movieSave.id == movie.id)

        if(hasMovie){
            alert("Filme ja Salvo");
            return;
        }

        moviesSave.push(movie)
        localStorage.setItem("@movieflix", JSON.stringify(moviesSave))
        alert("Filme salvo com sucesso");
    }
    return(
        <Container>
            <ButtonContainer>
                <button onClick={saveMovie}>
                    <BsFillHeartFill size={25}/>
                    <span>Adicionar aos favoritos</span>
                </button>
            </ButtonContainer>
            
            <ButtonContainer>
                <button>
                    <BiMovie size={25}/>
                    <a 
                        href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
                        target="black"
                        rel="external"
                    >
                        <span>Assistir Trailer</span>
                    </a>
                </button>
            </ButtonContainer>
        </Container>
    )
}