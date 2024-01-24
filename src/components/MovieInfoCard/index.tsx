import React from "react"
import { ClockFill } from "../Icons/Clock"
import { DollarSign } from "../Icons/Dollar"
import { CalendarFill } from "../Icons/Calendar"

interface MovieInfoCardProps{
  logo: string
  title: string 
  value: string | string[] | number
}

export function MovieInfoCard({ logo, title, value } : MovieInfoCardProps){
  
  return(
    <div className="w-[8rem] h-[8rem] flex flex-col items-center justify-center rounded-lg inset-0 bg-[#ffffff10] backdrop-blur-md text-center">
      {logo === 'calendar' && <CalendarFill/>}
      {logo === 'clock' && <ClockFill/> }
      {logo === 'dollar' && <DollarSign/>}
      
      <h1 className="text-white text-md font-bold text-center">{title}</h1>
      <div className="flex flex-col">
        <p className="text-white text-sm">{value}<br/></p>
      </div>
    </div>
  )
}