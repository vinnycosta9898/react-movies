export const matchGenreMovieByGenreId = (genreId: number) => {
  let genre = ''
  switch(genreId){
    case 12:
      return genre = 'Aventura'
    case 16:
      return genre = 'Animação'
    case 28:
      return genre = 'Acão'
    case 35: 
      return genre = 'Comédia'
    case 80:
      return genre =  'Crime'
    case 99:
      return genre = 'Documentário'
    case 18:
      return genre = 'Drama'
    case 10751:
      return genre = 'Familia'
    case 14:
      return genre = 'Fantasia'
    case 37:
      return genre = "Faroeste"
    case 878:
      return genre = "Fiçção Cientifica"
    case 10752:
      return genre = "Guerra"
    case 36:
      return genre = 'História'
    case 10402:
      return genre = "Música" 
    case 10749:
      return genre = 'Romance'
    case 9648:
      return genre = "Suspense"
    case 27:
      return genre = 'Terror'
  }
}