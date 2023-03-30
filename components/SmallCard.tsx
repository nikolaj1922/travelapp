import { FC } from "react";
import Image from "next/image";

interface Props {
  img: string;
  location: string;
  distance: string;
}

const SmallCard: FC<Props> = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-103 transition duration-150 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} alt="" fill className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
