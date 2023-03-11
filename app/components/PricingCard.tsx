import { IconType } from "react-icons";

type PricingInfo = {
  title: string;
  description: string;
  price: string;
  icon: IconType;
};

export default function PricingCard({
  title,
  description,
  price,
  icon: IconComponent,
}: PricingInfo) {
  return (
    <div className="mx-5 lg:mx-0 mb-5 lg:mb-0 w-[290px] bg-white lg:w-[300px]">
      <div className="flex flex-col items-center text-center p-10 shadow-xl border border-gray-200">
        <IconComponent size="40" className="text-teal-400" />
        <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
        <p className="text-3xl font-bold text-teal-400 my-6">{price}</p>
        <p className="text-sm font-semibold">Web Development</p>
        <p className="text-sm font-semibold mt-2">Front-End Development</p>
        <button className="bg-teal-400 text-white mt-5 font-semibold py-2 px-4 rounded-3xl hover:bg-teal-500 transition-all duration-300">
          Hire Me
        </button>
      </div>
    </div>
  );
}
