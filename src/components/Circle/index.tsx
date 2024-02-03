interface CircleProps{
  handleActiveCircle: () => void
  isActive: boolean
}

export function Circle({ handleActiveCircle, isActive } : CircleProps){
  return(
    <button 
      className={`w-[24px] h-[24px] ${isActive ? 'bg-blue' : 'bg-white'} rounded-[999px]`}
      onClick={() => handleActiveCircle()}
    >
    </button>
  )
}