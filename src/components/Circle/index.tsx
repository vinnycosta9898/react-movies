interface CircleProps{
  isActive: boolean
}

export function Circle({ isActive } : CircleProps){
  console.log(isActive)
  return(
    <div className={`w-[24px] h-[24px] ${isActive ? 'bg-blue' : 'bg-white'} rounded-[999px]`}>
      
    </div>
  )
}