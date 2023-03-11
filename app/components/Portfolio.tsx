import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";
import {
  transition_0,
  transition_0_5,
  transition_1,
  transition_1_5,
} from "./transitions";
import { useLayoutEffect, useState } from "react";

export default function Portfolio() {
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
    <div className="pt-5 pb-6 md:py-24 px-5">
      <m.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl font-semibold text-center"
      >
        Portfolio
      </m.h2>
      <m.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={viewportWidth < 768 ? transition_0 : transition_0_5}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-5 mb-10 text-sm text-center mx-auto w-full  md:w-2/3"
      >
        My web design portfolio showcases my ability to create beautiful and
        effective websites for businesses of all sizes, with a focus on user
        experience, accessibility, and mobile responsiveness.
      </m.h3>

      <div className="flex flex-col md:flex-row gap-x-10 justify-between">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={viewportWidth < 768 ? transition_0 : transition_1}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-1 flex-col items-center mb-10 md:mb-0"
        >
          <div className="w-full h-72 object-contain relative mb-5 shadow-xl">
            <Image src={"/panaverse.png"} alt="picture" fill />
          </div>
          <Link
            target="_blank"
            href="https://syllabus-black.vercel.app/"
            className="bg-teal-400 text-white w-full text-center py-2 rounded-3xl hover:bg-teal-500 transition-all duration-300 font-semibold"
          >
            Preview
          </Link>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={viewportWidth < 768 ? transition_0 : transition_1_5}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-1 flex-col items-center"
        >
          <div className="w-full h-72 object-contain relative mb-5 shadow-xl">
            <Image src={"/piaic.png"} alt="picture" fill />
          </div>
          <Link
            target="_blank"
            href="https://piaic-website-rho.vercel.app/"
            className="bg-teal-400 text-white w-full text-center py-2 rounded-3xl hover:bg-teal-500 transition-all duration-300 font-semibold"
          >
            Preview
          </Link>
        </m.div>
      </div>
    </div>
  );
}
