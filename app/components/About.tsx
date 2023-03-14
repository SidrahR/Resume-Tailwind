import Image from "next/image";
import { useState, useEffect } from "react";
import { MdDownload } from "react-icons/md";
import { motion as m } from "framer-motion";
// import { useMediaQuery } from "./useMediaQuery";
import { variant_slideup } from "./motion";

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = "/api/about_data";
        const res = await fetch(url);
        const jsonRes = await res.json();

        setData(jsonRes);
      } catch (e) {
        console.log(e as Error);
      }
    };
    getData();
  }, []);

  // for responsive animation
  // const isSmall = useMediaQuery("(max-width: 480px)");
  // console.log(isSmall);

  // let variants: Variants = {};
  // if (isSmall) {
  //   variants = {
  //     hidden: {},
  //     visible: {},
  //   };
  // } else {
  //   variants = {
  //     hidden: {
  //       opacity: 0,
  //       y: 50,
  //     },
  //     visible: {
  //       opacity: 1,
  //       y: 0,
  //       transition: { duration: 0.5 },
  //     },
  //   };
  // }
  // console.log("variants", variants);

  return (
    <section className="bg-gray-100 flex flex-col px-5 md:flex-row pt-5 pb-10 md:py-32 items-center justify-between">
      <m.div
        variants={variant_slideup(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        // transition={viewportWidth < 768 ? transition_0 : transition_1}
        className="w-full md:w-96 h-96 object-contain relative "
      >
        <Image
          src={"/about.png"}
          alt="picture"
          sizes=""
          fill
          style={{ borderRadius: "9999px" }}
        />
      </m.div>

      <m.div
        variants={variant_slideup(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        // transition={viewportWidth < 768 ? transition_0 : transition_1}
        className="w-full pt-10 md:pt-0 md:w-1/2"
      >
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="pt-2 text-sm">
          Hi there, I&apos;m a front-end developer with academic background in
          bioinformatics. I&apos;ve been honing my skills in web development.
          Currently, I&apos;m focusing on creating the front-end of websites,
          and I&apos;m always eager to learn more and expand my abilities. Thank
          you for visiting my website, and feel free to reach out if you have
          any questions or opportunities to collaborate.
        </p>
        <div>
          <ul className="flex flex-wrap gap-x-5 mt-5">
            {data.map((item: { lang: string }) => (
              <li
                key={item.lang}
                className="border-2 border-teal-400 py-1 px-2 text-xs rounded-md my-2"
              >
                {item.lang}
              </li>
            ))}
          </ul>

          <button className="bg-teal-400 text-white mt-5 font-semibold py-2 px-4 rounded-3xl hover:bg-teal-500 flex items-center gap-x-2 transition-all duration-300">
            Download CV
            <MdDownload size="20" color="white" />
          </button>
        </div>
      </m.div>
    </section>
  );
}
