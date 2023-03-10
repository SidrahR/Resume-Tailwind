import { GoCalendar } from "react-icons/go";
import { MdOutlineGpsFixed } from "react-icons/md";
import { BsHourglassSplit } from "react-icons/bs";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <div className="pt-5 pb-10 md:py-28 px-5 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center">Pricing Table</h2>
      <div className="flex flex-col lg:flex-row justify-between mt-5 md:mt-10">
        <PricingCard
          title="Full-Time Work"
          description="I am available for full time"
          price="$1500"
          icon={GoCalendar}
        />

        <PricingCard
          title="Fixed Price Project"
          description="I am available for fixed roles"
          price="$500"
          icon={MdOutlineGpsFixed}
        />

        <PricingCard
          title="Hourley Work"
          description="I am available for Hourley projets"
          price="$50"
          icon={BsHourglassSplit}
        />
      </div>
    </div>
  );
}
