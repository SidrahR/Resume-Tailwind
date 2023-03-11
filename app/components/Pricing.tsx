import { GoCalendar } from "react-icons/go";
import { MdOutlineGpsFixed } from "react-icons/md";
import { BsHourglassSplit } from "react-icons/bs";
import PricingCard from "./PricingCard";
import { motion as m } from "framer-motion";

export default function Pricing() {
  return (
    <div className="pt-5 pb-10 md:py-28 px-5 bg-gray-100">
      <m.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl font-semibold text-center"
      >
        Pricing Table
      </m.h2>
      <div className="flex flex-col lg:flex-row justify-between mt-5 md:mt-10">
        <m.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <PricingCard
            title="Full-Time Work"
            description="I am available for full time"
            price="$1500"
            icon={GoCalendar}
          />
        </m.div>

        <m.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <PricingCard
            title="Fixed Price Project"
            description="I am available for fixed roles"
            price="$500"
            icon={MdOutlineGpsFixed}
          />
        </m.div>

        <m.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <PricingCard
            title="Hourley Work"
            description="I am available for Hourley projets"
            price="$50"
            icon={BsHourglassSplit}
          />
        </m.div>
      </div>
    </div>
  );
}
