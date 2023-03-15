import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";
import { variant_slideup } from "./motion";

export default function Portfolio() {
  return (
    <div className="pt-5 pb-6 md:py-24 px-5">
      <m.div
        variants={variant_slideup(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-semibold text-center">Portfolio</h2>
        <h3 className="mt-5 mb-10 text-sm text-center mx-auto w-full  md:w-2/3">
          My web design portfolio showcases my ability to create beautiful and
          effective websites for businesses of all sizes, with a focus on user
          experience, accessibility, and mobile responsiveness.
        </h3>
      </m.div>

      <div className="flex flex-col md:flex-row gap-x-10 justify-between">
        <m.div
          variants={variant_slideup(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-1 flex-col items-center mb-10 md:mb-0"
        >
          <div className="w-full h-56 md:h-60 lg:h-72  object-cover relative mb-5 shadow-xl">
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
          variants={variant_slideup(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-1 flex-col items-center"
        >
          <div className="w-full h-56 md:h-60 lg:h-72 object-cover relative mb-5 shadow-xl">
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
