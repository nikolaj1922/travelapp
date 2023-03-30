import { StaticImageData } from "next/image";
import Image from "next/image";
import { FC } from "react";

interface Props {
  img: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard: FC<Props> = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} alt="" fill className="object-cover rounded-2xl" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 cursor-pointer hover:bg-gray-800 transition duration-200 ease-out shadow-sm hover:shadow-lg active:scale-90">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
