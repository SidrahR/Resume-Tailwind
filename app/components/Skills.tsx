import HProgressBar from "./HProgressBar";
import CProgressBar from "./CProgressBar";
import { motion as m } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import {
  transition_0,
  transition_0_5,
  transition_1,
  transition_1_5,
} from "./transitions";

export default function Skills() {
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
    <section className="pt-5 pb-10 md:py-36 flex flex-col md:flex-row gap-x-16 px-5">
      <div className="w-full md:w-1/2 text-center">
        <m.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl font-semibold mb-10"
        >
          Technical Skills
        </m.h2>
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={viewportWidth < 768 ? transition_0 : transition_0_5}
          viewport={{ once: false, amount: 0.3 }}
        >
          <HProgressBar skill="Javascript" percent="70%" />
          <HProgressBar skill="Typescript" percent="62%" />
          <HProgressBar skill="React.js" percent="67%" />
          <HProgressBar skill="Next.js" percent="78%" />
          <HProgressBar skill="Tailwind CSS" percent="85%" />
        </m.div>
      </div>

      <div className="w-full md:w-1/2 text-center px-14 mt-5 md:mt-0">
        <m.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={viewportWidth < 768 ? transition_0 : transition_1}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl font-semibold mb-10"
        >
          Professional Skills
        </m.h2>
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={viewportWidth < 768 ? transition_0 : transition_1_5}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-between"
        >
          <div className="flex flex-col items-center gap-y-7">
            <CProgressBar skill="Communication" percent={90} />
            <CProgressBar skill="Team Work" percent={78} />
          </div>
          <div className="flex flex-col items-center gap-y-7">
            <CProgressBar skill="Creativity" percent={55} />
            <CProgressBar skill="Project Managment" percent={63} />
          </div>
        </m.div>
      </div>
    </section>
  );
}
