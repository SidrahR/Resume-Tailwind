import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from "next/image";
import { motion as m } from "framer-motion";

export default function Main() {
  return (
    <m.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col-reverse md:flex-row pt-3 md:py-36 px-5 items-center md:justify-between"
    >
      <div className="py-5 mb-5 md:mb-0 md:py-0">
        <p className="bg-teal-400 text-white font-semibold text-center w-fit py-1 px-6 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl ">
          Hello I&apos;m
        </p>
        <h1 className="text-6xl font-semibold mt-5">Sidrah Rashid</h1>
        <h2 className="text-2xl font-semibold mt-2">Front-End Develepor</h2>

        <div className=" mt-7 space-y-2">
          <div className="flex items-center gap-x-2">
            <MdEmail size="18" /> abc@gmail.com
          </div>
          <div className="flex items-center gap-x-2">
            <MdPhone size="18" /> +92 333 555 6666
          </div>
          <div className="flex items-center gap-x-2">
            <MdLocationOn size="18" /> Blue Area, Islamabad, Pakistan
          </div>
        </div>

        <div className="flex mt-10 ml-5 gap-x-8 items-center">
          <BsFacebook size="18" className="text-sky-600 cursor-pointer" />
          <BsYoutube size="21" className="text-red-600  cursor-pointer" />
          <BsTwitter size="18" className="text-sky-500  cursor-pointer" />
          <BsInstagram
            size="18"
            className="bg-gradient-to-b p-1 rounded-lg from-violet-700 via-fuchsia-500 to-amber-300 text-white  cursor-pointer"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="border-[16px] border-neutral-100 rounded-full">
          <div className="border-[16px] border-neutral-200 rounded-full ">
            <div className="w-64 h-64 md:w-72 md:h-72 object-contain relative rounded-full">
              <Image
                src={"/sidrah.jpg"}
                alt="picture"
                fill
                style={{ borderRadius: "9999px" }}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </m.section>
  );
}
