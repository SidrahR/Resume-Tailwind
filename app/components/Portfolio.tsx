import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="pt-5 pb-6 md:py-24 px-5">
      <h2 className="text-3xl font-semibold text-center">Portfolio</h2>
      <h3 className="mt-5 mb-10 text-sm text-center mx-auto w-full  md:w-2/3">
        My web design portfolio showcases my ability to create beautiful and
        effective websites for businesses of all sizes, with a focus on user
        experience, accessibility, and mobile responsiveness.
      </h3>

      <div className="flex flex-col md:flex-row gap-x-10 justify-between">
        <div className="flex flex-1 flex-col items-center mb-10 md:mb-0">
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
        </div>

        <div className="flex flex-1 flex-col items-center">
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
        </div>
      </div>
    </div>
  );
}
