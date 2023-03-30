import { FC } from "react";
import Image from "next/image";
import BannerImg from "../public/banner.webp";

const Banner: FC = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
      <Image
        src={BannerImg}
        alt="Banner"
        fill
        className="object-cover object-bottom"
        priority
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I`m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
