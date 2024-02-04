import colors from "tailwindcss/colors";

import {
  FaCalendar,
  FaClock,
  FaDollarSign,
  FaMoneyBillAlt,
  FaStar,
} from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";

interface MovieInfoCardProps {
  logo: string;
  title: string;
  value: string | string[] | number;
}

export function MovieInfoCard({ logo, title, value }: MovieInfoCardProps) {
  return (
    <div className="w-[8rem] h-[8rem] flex flex-col items-center justify-center rounded-lg inset-0 bg-[#ffffff10] backdrop-blur-md text-center">
      {logo === "calendar" && (
        <FaCalendar size={30} color={colors.blue["500"]} />
      )}
      {logo === "clock" && <FaClock size={30} color="#FFF" />}
      {logo === "dollar" && (
        <FaDollarSign size={30} color={colors.green["500"]} />
      )}
      {logo === "money" && (
        <FaMoneyBillAlt size={30} color={colors.green["500"]} />
      )}
      {logo === "star" && <FaStar size={30} color={colors.yellow["500"]} />}
      {logo === "movie" && <RiMovie2Fill size={30} color={colors.red["500"]} />}

      <h1 className="text-white text-md font-bold text-center">{title}</h1>
      <div className="flex flex-col">
        <p className="text-white text-sm">
          {value}
          <br />
        </p>
      </div>
    </div>
  );
}
