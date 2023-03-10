import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-gray-100 flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-around items-center py-5">
      <div className="flex gap-x-8 items-center">
        <BsFacebook size="18" className="text-sky-600 cursor-pointer" />
        <BsYoutube size="21" className="text-red-600  cursor-pointer" />
        <BsTwitter size="18" className="text-sky-500  cursor-pointer" />
        <BsInstagram
          size="18"
          className="bg-gradient-to-b p-1 rounded-lg from-violet-700 via-fuchsia-500 to-amber-300 text-white  cursor-pointer"
        />
      </div>
      <div>&copy; 2023 PIAIC - All Rights Reserved</div>
    </div>
  );
}
