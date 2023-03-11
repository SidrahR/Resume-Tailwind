import { GoCalendar } from "react-icons/go";
import { MdOutlineGpsFixed } from "react-icons/md";
import { BsHourglassSplit } from "react-icons/bs";
import PricingCard from "./PricingCard";
import { motion as m } from "framer-motion";
import {
  transition_0,
  transition_0_5,
  transition_1,
  transition_1_5,
} from "./transitions";
import { useLayoutEffect, useState } from "react";

export default function Pricing() {
  // for animation
  const [viewportWidth, setViewportWidth] = useState(0);

  useLayoutEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

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
          transition={viewportWidth < 768 ? transition_0 : transition_0_5}
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
          transition={viewportWidth < 768 ? transition_0 : transition_1}
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
          transition={viewportWidth < 768 ? transition_0 : transition_1_5}
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
