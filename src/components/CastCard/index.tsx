import Image from "next/image";

import { FaUser } from "react-icons/fa";
import colors from "tailwindcss/colors";

interface CastCardProps {
  name: string;
  character: string;
  profile_path: string;
}

export function CastCard({ name, character, profile_path }: CastCardProps) {
  return (
    <div className="m-2 flex max-h-[30rem] max-w-[15rem] cursor-pointer flex-col items-center rounded-lg transition-transform hover:scale-x-105">
      {profile_path === "user-without-photo" ? (
        <div className="bg-gray m-2 flex h-[22rem] min-w-[15rem] cursor-pointer flex-col items-center justify-center rounded-lg">
          <FaUser
            size={180}
            color={colors.white}
            className="max-h-[22rem] max-w-[15rem]"
          />
        </div>
      ) : (
        <Image
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={`Imagem do ator ${name}`}
          width={240}
          height={400}
          priority
          className="rounded-lg"
        />
      )}

      <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-center font-bold text-white">
        {name} ({character})
      </h1>
    </div>
  );
}
