import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className=" w-full border border-gray-300 py-4 bg-gray-100 text-gray-600 flex flex-col items-start sm:flex-row sm:items-center space-y-3 px-8 md:px-12 lg:px-24 xl:px-32  flex-wrap md:fixed md:bottom-0 sm:justify-between">
      <span className="hover:underline cursor-pointer">2023 Airbnb, Inc.</span>
      <span className="hover:underline cursor-pointer !m-0">
        Confidentiality
      </span>
      <span className="hover:underline cursor-pointer !m-0">Conditions</span>
      <span className="hover:underline cursor-pointer !m-0">Site Map</span>
      <span className="hover:underline cursor-pointer !m-0">
        Company details
      </span>
    </div>
  );
};

export default Footer;
