import Image from "next/image";
import { useState, useEffect } from "react";
import { MdDownload } from "react-icons/md";
import { motion as m } from "framer-motion";

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

  return (
    <section className="bg-gray-100 flex flex-col px-5 md:flex-row pt-5 pb-10 md:py-32 items-center justify-between">
      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full md:w-96 h-80 md:h-96 object-contain relative "
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full pt-10 md:pt-0 md:w-1/2"
      >
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="pt-2 text-sm">
          Hi there, I'm a front-end developer with academic background in
          bioinformatics. I've been honing my skills in web development.
          Currently, I'm focusing on creating the front-end of websites, and I'm
          always eager to learn more and expand my abilities. Thank you for
          visiting my website, and feel free to reach out if you have any
          questions or opportunities to collaborate.
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
