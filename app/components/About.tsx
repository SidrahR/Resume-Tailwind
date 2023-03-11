import Image from "next/image";
import { useState, useEffect, useLayoutEffect } from "react";
import { MdDownload } from "react-icons/md";
import { motion as m } from "framer-motion";
import { transition_0, transition_0_5 } from "./transitions";

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
    <section className="bg-gray-100 flex flex-col px-5 md:flex-row pt-5 pb-10 md:py-32 items-center justify-between">
      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full md:w-96 h-[25rem] md:h-96 object-contain relative "
      >
        <Image
          src={"/about.png"}
          alt="picture"
          fill
          style={{ borderRadius: "9999px" }}
        ></Image>
      </m.div>

      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5, delay: 0.5 }}
        transition={viewportWidth < 768 ? transition_0 : transition_0_5}
        viewport={{ once: false, amount: 0.3 }}
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
