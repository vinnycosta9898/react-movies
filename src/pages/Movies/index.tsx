import { Container, 
         TitleContainer, 
         MovieContainer, 
         ImageContainer, 
         DescriptionContainer, 
         DataContainer,
        } from './styles';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import axios from 'axios';

import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';

import { v4 as uuidv4 } from 'uuid';

import { ModalCredits } from '../../components/ModalCredits';
import { MovieOptions } from '../../components/MovieOptions';
import { Loading } from '../../components/Loading';

interface MovieRequestProps{
    id: string;
    title: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    runtime: number;
    budget: number;
    revenue: number;
    tagline: string;

    genres:{
        name: string;
    }[],

    production_companies: {
        name: string;
    }[],
}

export interface CreditsRequestProps{
        cast:{
            name: string;  
        }[],
}

export function Movies({ genres } : MovieRequestProps, { cast }: CreditsRequestProps){

    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<MovieRequestProps>({});
    const [name, setName] = useState<CreditsRequestProps>({});
    const [modalVisible, setModalVisible] = useState(false); 
    const [showElement, setShowElement] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => { 
        async function loadMovie(){
            await axios.all([
                await api.get(`/movie/${id}`, {
                    params:{
                        api_key: "e5a63c1cddc0eae4cd74b26f299b78d6",
                        language: "pt-BR",
                    }
                }),
                await api.get(`/movie/${id}/credits`, {
                    params:{
                        api_key: "e5a63c1cddc0eae4cd74b26f299b78d6",
                        language: "pt-BR",
                    }
                })
            ]).then(axios.spread(function(movieRequest, creditsRequest){
                setMovie(movieRequest.data)
                setName(creditsRequest.data)
                setLoading(false);
            })).catch(() => {
                navigate("/", {replace: true})
                return;
            })
        }
        loadMovie();
        }, 2000)
    }, [id, navigate])

    function handleCloseModal(){
        setModalVisible(false);
    }

    function handleOpenModal(){
        setModalVisible(true);
    }

    if(loading){
        return(
            <Loading/>
        )
    }

    return(
        <Container>
            <TitleContainer>
                <h1>{movie.title}</h1>
                <span>{movie.tagline ? movie.tagline : "Sem Slogan"}</span>
            </TitleContainer>

            <ImageContainer
            >
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                     alt={movie.title} 
                     onMouseOver={() => setShowElement(true)}
                     onMouseLeave={() => setTimeout(() => {
                        setShowElement(false)
                     }, 3000)}
                />
                {showElement? <MovieOptions id={movie.id} movie={movie}/> : ""}
            </ImageContainer>
            
            <DescriptionContainer>
                <h3>Sinopse</h3>
                <span>{movie.overview ? movie.overview : "Sinopse indisponivel"}</span>
                <button 
                    onClick={handleOpenModal}
                >
                    Ver Elenco
                </button>
            </DescriptionContainer>
            
            <MovieContainer>
                <DataContainer>
                    <span>Duração:</span>
                    <p>{movie.runtime ? movie.runtime : "Duração Indisponivel"} min</p>
                </DataContainer>

                <DataContainer>
                    <span>Data de Lançamento:</span> 
                    <p>{formatDate(movie.release_date)}</p>
                </DataContainer> 

                <DataContainer>
                    <span>Gêneros:</span>
                    { 
                    movie.genres?.map(item => (
                        <article key={uuidv4()}>
                            <p>{item.name}</p>
                        </article>  
                    ))
                    }
                </DataContainer> 

                <DataContainer>
                    <span>Orcamento:</span>
                    <p>{movie.budget ? formatCurrency(Number(movie.budget)) : "Orçamento indisponivel"}</p>
                </DataContainer> 

                <DataContainer>
                    <span>Receita:</span>
                    <p>{movie.revenue ? formatCurrency(Number(movie.revenue)) : "Receita Indisponivel"}</p>
                </DataContainer>

                <DataContainer>
                    <span>Producão:</span>
                    {
                        movie.production_companies?.map(item => (
                            <article key={uuidv4()}>
                                <p>{item.name}</p>
                            </article>
                        ))
                    }  
                </DataContainer>
            </MovieContainer>

            <ModalCredits
                isOpen={modalVisible}
                onRequestClose={handleCloseModal}
                cast={name}
            />
        </Container>
    )
}