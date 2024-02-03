import { useEffect, useState } from "react"
import { Circle } from "../Circle"

interface SlideTextProps{
  primary_text: string
  secondary_text: string
}

export function SlideText({ primary_text, secondary_text } : SlideTextProps){
  const [changeText, setChangeText] = useState(false)
  const [firstCircle, setFirstCircle] = useState(false)
  const [secondCircle, setSecondCircle] = useState( false)
  
  useEffect(() => {
    setTimeout(() => {
      setChangeText(!changeText)
      setFirstCircle(!changeText ? true : false)
      setSecondCircle(firstCircle ? false : true)
    }, 10000)
  }, [changeText])

  return(
    <div className="w-[36rem] h-72 ">
      <h1 className="text-5xl text-white text-center overflow-y-hidden">
        { !changeText ? primary_text : secondary_text  }
      </h1>
      <div className='w-[36rem] flex justify-center gap-4 mt-8'>
        <Circle 
          isActive={firstCircle}
        />
        <Circle
          isActive={!secondCircle}
        />
      </div>
    </div>
  )
}