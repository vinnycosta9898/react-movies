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
      return genre = 'Famiia'
    case 14:
      return genre = 'Fantasia'
    case 36:
      return genre = 'História'
    case 10749:
      return genre = 'Romance'
    case 27:
      return genre = 'Terror'
  }
}