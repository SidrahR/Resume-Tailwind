import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion as m } from "framer-motion";

export default function Experiences() {
  return (
    <div className="pt-5 pb-10 md:py-28 bg-gray-100 px-5">
      <m.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl font-semibold text-center"
      >
        Work Experience
      </m.h2>
      <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-5">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ExperienceCard
            designation="Internship at Web Development Agency"
            year="2015 - 2016"
            work="Worked on various web development projects for clients, including creating responsive designs, optimizing websites for search engines, and implementing various web technologies. Assisted senior developers in coding and testing"
          />
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ExperienceCard
            designation="Junior Web Developer"
            year="2017 - 2018"
            work="Developed and maintained web applications using HTML, CSS, JavaScript,
          and various front-end frameworks. Assisted senior developers in
          testing, debugging, and troubleshooting code."
          />
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ExperienceCard
            designation="Freelance Web Developer"
            year="2017- 2021"
            work=" Developed and maintained web applications using HTML, CSS, JavaScript,
          and various front-end frameworks. Assisted senior developers in
          testing, debugging, and troubleshooting code"
          />
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ExperienceCard
            designation="Web Development Bootcamp"
            year="2022"
            work="Completed a 12-week intensive coding program to learn full-stack web development, including HTML, CSS, JavaScript, Node.js, and various front-end and back-end frameworks. Collaborated with other students on group projects and participated in code reviews and critiques"
          />
        </m.div>
      </div>
    </div>
  );
}
