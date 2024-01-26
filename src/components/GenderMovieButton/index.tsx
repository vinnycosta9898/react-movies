interface GenderMovieButtonProps{
  genderMovie: string
  onClick: () => void
}

export function GenderMovieButton({ genderMovie, onClick } : GenderMovieButtonProps){
  return (
    <button 
      className="w-36 h-8 rounded-lg bg-gray_300 text-blue flex items-center justify-center m-2" 
      onClick={onClick}
    >
      {genderMovie}
    </button>
  )
}