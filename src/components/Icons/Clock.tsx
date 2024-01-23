import { SVGProps } from "react";

export function ClockFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={props.width} viewBox="0 0 256 256" {...props}>
      <path fill="#888888" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56 112h-36.69l26.35 26.34a8 8 0 0 1-11.32 11.32l-40-40A8 8 0 0 1 128 120h56a8 8 0 0 1 0 16">
      </path>
    </svg>
  )
}