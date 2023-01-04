import { Container, 
         TitleContainer, 
         MovieContainer, 
         ArticleContainer, 
         ImageContainer,
         MovieImage,
         FooterContainer
         } from './styles';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Loading } from '../../components/Loading';


interface MovieRequestProps{
    api_key: string;
    language: string;
    page: number;
    
    id: string;
    poster_path: string;
    title: string;
}

export function Home(){

    const [movies, setMovies] = useState<MovieRequestProps[]>([]);
    const { page } = useParams();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => { 
        async function loadMovies(){
            window.scrollTo(0, 0);
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "e5a63c1cddc0eae4cd74b26f299b78d6",
                    language: "pt-BR",
                    page: `${page}`,
                }
            })
            setMovies(response.data.results.slice(0, 12))
            setLoading(false);
        }
        loadMovies(); 
        }, 2000)
    }, [page])

    if(loading){
        return(
            <Loading/>
        )
    }

    return(
        <Container>
            <TitleContainer>
                <h1>Filmes</h1>
            </TitleContainer>
                <MovieContainer>
                    {movies.map((movie) => {
                        return(
                            <ArticleContainer key={movie.id}>
                                <h3>{movie.title}</h3>
                                    <ImageContainer>
                                        <Link to={`/movie/${movie.id}`}>
                                            <MovieImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
                                        </Link>
                                    </ImageContainer>
                            </ArticleContainer>
                        )
                    })
                    }
                </MovieContainer>

                <FooterContainer>
                    <Link to={"/1"}>
                        1
                    </Link>
                    
                    <Link to={"/2"}>
                        2
                    </Link>

                    <Link to={"/3"}>
                        3
                    </Link>

                    <Link to={"/4"}>
                        4
                    </Link>
                </FooterContainer>
        </Container>
    )
}