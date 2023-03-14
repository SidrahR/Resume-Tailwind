import { GoCalendar } from "react-icons/go";
import { MdOutlineGpsFixed } from "react-icons/md";
import { BsHourglassSplit } from "react-icons/bs";
import PricingCard from "./PricingCard";
import { motion as m } from "framer-motion";
import {
  variant_slideup,
  variant_slide_right,
  variant_stagger,
} from "./motion";

export default function Pricing() {
  return (
    <div className="pt-5 pb-10 md:py-28 px-5 bg-gray-100">
      <m.h2
        variants={variant_slideup(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl font-semibold text-center"
      >
        Pricing Table
      </m.h2>

      <m.div
        variants={variant_slide_right}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row justify-around mt-5 md:mt-10"
      >
        <m.div variants={variant_stagger}>
          <PricingCard
            title="Full-Time Work"
            description="I am available for full time"
            price="$1500"
            icon={GoCalendar}
          />
        </m.div>

        <m.div variants={variant_stagger}>
          <PricingCard
            title="Fixed Price Project"
            description="I am available for fixed roles"
            price="$500"
            icon={MdOutlineGpsFixed}
          />
        </m.div>

        <m.div variants={variant_stagger}>
          <PricingCard
            title="Hourley Work"
            description="I am available for Hourley projets"
            price="$50"
            icon={BsHourglassSplit}
          />
        </m.div>
      </m.div>
    </div>
  );
}
