interface CircleProps {
  handleActiveCircle: () => void
  isActive: boolean 
}

export function Circle({ handleActiveCircle, isActive }: CircleProps) {
  return (
    <button
      className={`w-[24px] h-[24px] ${isActive ? "bg-blue" : "bg-white"} rounded-[999px] md:w-[24px] md:h-[24px] xsm:w-[16px] xsm:h-[16px]`}
      onClick={() => handleActiveCircle()}
    ></button>
  );
}
