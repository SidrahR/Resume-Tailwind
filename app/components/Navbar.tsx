"use client";
import { RefObject, useEffect, useRef, useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import Wrapper from "./Wrapper";
import Main from "./Main";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Contact from "./Contact";
import { motion as m } from "framer-motion";

export default function Navbar() {
  const main = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const experiences = useRef(null);
  const portfolio = useRef(null);
  const pricing = useRef(null);
  const contact = useRef(null);

  const [activeButton, setActiveButton] = useState("main");
  const [isListRendered, setIsListRendered] = useState(false);

  const handleScrollToSection = (reference: RefObject<HTMLDivElement>) => {
    if (reference.current) {
      reference.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveButton(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    [main, about, skills, experiences, portfolio, pricing, contact].forEach(
      (ref) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      }
    );

    return () => {
      observer.disconnect();
    };
  }, [main, about, skills, experiences, portfolio, pricing, contact]);

  /////////////////////////////////////////////////
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = "/api/nav_data";
        const res = await fetch(url);
        const jsonRes = await res.json();
        setData(jsonRes);
        setIsListRendered(true);
      } catch (e) {
        console.log(e as Error);
      }
    };
    getData();
  }, []);

  ///////////////////////////////////////////////////
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Wrapper>
      {isListRendered && (
        <m.nav
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-row-reverse md:flex-row justify-between items-center p-2 md:p-5 bg-white sticky -top-1 md:top-0 z-50 border-4 border-transparent border-b-gray-50"
        >
          <div className="text-2xl text-teal-400 font-extrabold">SR</div>

          <div
            className="w-fit md:hidden h-fit transition-all duration-800"
            onClick={() => setMenuOpen((prev: boolean) => !prev)}
          >
            {menuOpen ? (
              <CgMenuLeftAlt
                size="30"
                className="cursor-pointer text-teal-400"
              />
            ) : (
              <AiOutlineClose
                size="30"
                className="cursor-pointer text-teal-400"
              />
            )}
          </div>

          <ul
            className={`flex flex-col md:flex-row absolute md:static text-lg font-bold gap-x-8
          bg-white w-fit md:w-auto top-10 -left-2 px-3 md:px-0 
          ${
            menuOpen
              ? `top-[-490] opacity-0 md:opacity-100`
              : `top-12 opacity-100`
          }`}
          >
            {data.map((item: { ref: string; name: string }) => (
              <li className="py-1 md:py-0" key={item.ref}>
                <a
                  onClick={() => {
                    const reference = eval(
                      item.ref
                    ) as RefObject<HTMLDivElement>;
                    handleScrollToSection(reference);
                  }}
                  className={`cursor-pointer underline-offset-8
              ${activeButton === item.ref ? "underline" : ""}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </m.nav>
      )}
      <main>
        <div ref={main} id="main">
          <Main />
        </div>

        <div ref={about} id="about">
          <About />
        </div>

        <div ref={skills} id="skills">
          <Skills />
        </div>

        <div ref={experiences} id="experiences">
          <Experiences />
        </div>

        <div ref={portfolio} id="portfolio">
          <Portfolio />
        </div>

        <div ref={pricing} id="pricing">
          <Pricing />
        </div>

        <div ref={contact} id="contact">
          <Contact />
        </div>
      </main>
    </Wrapper>
  );
}
