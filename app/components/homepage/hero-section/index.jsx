// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />
      <div className="grid grid-cols-1 items-start ">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[4rem] lg:leading-[3.5rem]">
            Hello, This is {" "}
            <span className=" text-pink-500">{personalData.name}</span>
          </h1>
          <br />
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[4rem] lg:leading-[3.5rem]">{`I'm a Professional `}<br/><br/>
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
          </h1>

          <div className="my-12 text-center">
            <div className="my-12 flex items-center">
              <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
                <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                  <span>Contact me</span>
                  <RiContactsFill size={16} />
                </button>
              </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;