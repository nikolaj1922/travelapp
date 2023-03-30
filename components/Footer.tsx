import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="fixed bottom-0 w-full border border-gray-300 px-32 py-4 bg-gray-100 text-gray-600 flex justify-between">
      {/* <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">LOREM</h5>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">LOREM</h5>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">LOREM</h5>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">LOREM</h5>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div> */}
      <div className="w-2/3 flex justify-between">
        <span className="inline hover:underline cursor-pointer">
          © 2023 Airbnb, Inc.
        </span>
        <span className="hover:underline cursor-pointer">Confidentiality</span>
        <span className="hover:underline cursor-pointer">Conditions</span>
        <span className="hover:underline cursor-pointer">Site Map</span>
        <span className="hover:underline cursor-pointer">Company details</span>
      </div>
      <div>
        <span className="font-bold">Created By Nikolay Bondarenko</span>
      </div>
    </div>
  );
};

export default Footer;
