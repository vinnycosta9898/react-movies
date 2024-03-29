import { useRouter } from "next/router";
import { useState } from "react";
import { GenderMovieButton } from "../GenreMovieButton";

export function GenreButtons() {
  const [buttonSelected, setButtonSelected] = useState(0);
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const router = useRouter();

  function handleSelectedGenre(genreId: number) {
    setButtonSelected(genreId);
    setButtonIsActive(!buttonIsActive);
    router.push(`/genre/${genreId}`);
  }

  return (
    <div className="grid grid-cols-8 my-8 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 xsm:grid-cols-2">
      <GenderMovieButton
        genderMovie="Aventura"
        onClick={() => handleSelectedGenre(12)}
      />
      <GenderMovieButton
        genderMovie="Animação"
        onClick={() => handleSelectedGenre(16)}
      />
      <GenderMovieButton
        genderMovie="Ação"
        onClick={() => handleSelectedGenre(28)}
      />
      <GenderMovieButton
        genderMovie="Comédia"
        onClick={() => handleSelectedGenre(35)}
      />
      <GenderMovieButton
        genderMovie="Crime"
        onClick={() => handleSelectedGenre(80)}
      />
      <GenderMovieButton
        genderMovie="Documentário"
        onClick={() => handleSelectedGenre(99)}
      />
      <GenderMovieButton
        genderMovie="Drama"
        onClick={() => handleSelectedGenre(18)}
      />
      <GenderMovieButton
        genderMovie="Família"
        onClick={() => handleSelectedGenre(10751)}
      />
      <GenderMovieButton
        genderMovie="Fantasia"
        onClick={() => handleSelectedGenre(14)}
      />
      <GenderMovieButton
        genderMovie="Faroeste"
        onClick={() => handleSelectedGenre(37)}
      />
      <GenderMovieButton
        genderMovie="Fiçção Cientifica"
        onClick={() => handleSelectedGenre(878)}
      />
      <GenderMovieButton
        genderMovie="Guerra"
        onClick={() => handleSelectedGenre(10752)}
      />
      <GenderMovieButton
        genderMovie="História"
        onClick={() => handleSelectedGenre(36)}
      />
      <GenderMovieButton
        genderMovie="Musical"
        onClick={() => handleSelectedGenre(10402)}
      />
      <GenderMovieButton
        genderMovie="Romance"
        onClick={() => handleSelectedGenre(10749)}
      />
      <GenderMovieButton
        genderMovie="Suspense"
        onClick={() => handleSelectedGenre(9648)}
      />
      <GenderMovieButton
        genderMovie="Terror"
        onClick={() => handleSelectedGenre(27)}
      />
    </div>
  );
}
