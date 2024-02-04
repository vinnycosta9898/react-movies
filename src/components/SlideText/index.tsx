import { useEffect, useState } from "react";
import { Circle } from "../Circle";

interface SlideTextProps {
  primary_text: string;
  secondary_text: string;
}

export function SlideText({ primary_text, secondary_text }: SlideTextProps) {
  const [changeText, setChangeText] = useState(false);
  const [firstCircle, setFirstCircle] = useState(true);
  const [secondCircle, setSecondCircle] = useState(false);

  function handleActiveCircle(buttonId: number) {
    if (buttonId === 1) {
      setFirstCircle(true);
      setSecondCircle(false);
      setChangeText(false);
    } else {
      setFirstCircle(false);
      setSecondCircle(true);
      setChangeText(true);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setChangeText(!changeText);
      setFirstCircle(!changeText ? false : true);
      setSecondCircle(!firstCircle ? false : true);
    }, 10000);
  }, [changeText]);

  return (
    <div className="w-[36rem] h-72 flex flex-col items-center justify-center rounded-lg">
      <h1 className="text-5xl text-white font-bold text-center overflow-y-hidden md:text-xl xsm:text-sm">
        {!changeText ? primary_text : secondary_text}
      </h1>
      <div className="w-[36rem] flex justify-center gap-4 mt-8">
        <Circle
          isActive={firstCircle}
          handleActiveCircle={() => handleActiveCircle(1)}
        />
        <Circle
          isActive={secondCircle}
          handleActiveCircle={() => handleActiveCircle(2)}
        />
      </div>
    </div>
  );
}
``;
