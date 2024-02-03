import { useEffect, useState } from "react"

interface SlideTextProps{
  primary_text: string
  secondary_text: string
}

export function SlideText({ primary_text, secondary_text } : SlideTextProps){
  const [ changeText, setChangeText] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setChangeText(!changeText)
    }, 10000)
  }, [changeText])

  return(
    <div className="w-[30rem] h-72 ">
      <h1 className="text-5xl text-white text-center overflow-y-hidden">
        { !changeText ? primary_text : secondary_text  }
      </h1>
      <div className='w-[30rem] flex justify-center gap-4 mt-8'>
        
      </div>
    </div>
  )
}