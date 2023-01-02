import { Container, 
        TitleContainer, 
        MoviesContainer, 
        MovieContainer, 
        CardContainer, 
        ButtonsContainer 
       } from './styles';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MovieOptionsProps } from '../../components/MovieOptions';

export function Favorites({ movie } : MovieOptionsProps){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem("@movieflix") as string;
        setMovies(JSON.parse(myList) || []);
    }, [])

    function handleDelete(id: string){
        let filterMovie = movies.filter((movie) => {
            return(movie.id != id)
        })

        setMovies(filterMovie);

        localStorage.setItem("@movieflix", JSON.stringify(filterMovie));
    }
    
    return(
        <Container>
            <TitleContainer>
                <h1>Meus Filmes</h1>
            </TitleContainer>

            <MoviesContainer>
                {movies.length == 0 && <h1>Lista Vazia</h1>}
                <MovieContainer>
                    {
                        movies.map((movie) => {
                            return(
                                <CardContainer>
                                    <span>{movie.title}</span>
                                    <ButtonsContainer>
                                        <button>
                                            <Link to={`/movie/${movie.id}`}>
                                                <span>Ver Detalhes</span>
                                            </Link>
                                        </button>
                                        
                                        <button onClick={() => handleDelete(movie.id)}>
                                            <span>Excluir Filme</span>
                                        </button>
                                    </ButtonsContainer>
                                </CardContainer>
                            )
                        })
                    }
                </MovieContainer>
            </MoviesContainer>
        </Container>
    )
}