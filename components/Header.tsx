import { FC } from "react";
import Image from "next/image";
import Logo from "../public/airbnb.png";
import {
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  UsersIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={Logo}
          alt="Logo"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassCircleIcon className="hidden md:inline-flex h-8 text-red-400 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
