import { useState } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { variant_slideup } from "./motion";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="py-5 md:py-24 px-5">
      <m.h2
        variants={variant_slideup(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl font-semibold text-center mb-10"
      >
        Contact Me
      </m.h2>

      <div className="flex flex-col lg:flex-row gap-x-8">
        <m.form
          variants={variant_slideup(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto w-full lg:w-1/2"
        >
          <div className="flex justify-between gap-x-4">
            <div className="mb-4">
              <label className="text-lg mb-2">First Name</label>
              <input
                className="border rounded w-full py-2 px-3 focus:outline-none"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="text-lg mb-2">Last Name</label>
              <input
                className="border rounded w-full py-2 px-3 focus:outline-none"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-lg mb-2">Email</label>
            <input
              className="border rounded w-full py-2 px-3 focus:outline-none"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-lg mb-2">Message</label>
            <textarea
              className="border rounded w-full py-2 px-3 focus:outline-none"
              rows={5}
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-teal-400 text-white w-full py-2 rounded-3xl hover:bg-teal-500 transition-all duration-300 font-semibold">
              Submit
            </button>
          </div>
        </m.form>

        <m.div
          variants={variant_slideup(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 lg:mt-0 w-full lg:w-1/2  h-96 md:h-[35rem] lg:h-[25rem] object-contain relative mb-5 shadow-xl"
        >
          <Image src={"/map.jpeg"} alt="picture" fill />
        </m.div>
      </div>
    </div>
  );
}
