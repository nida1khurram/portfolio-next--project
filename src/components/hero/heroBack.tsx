import { Vortex } from "../ui/vortex";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
//
export function VortexDemoSecond() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div className="container grid  md:grid-cols-2 items-center py-10 px-[10%] justify-center">
          <div className="sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] mx-auto">
            <Image
              width={200}
              height={200}
              alt="logo"
              src="/picture/hero.png"
              className=""
            />
          </div>

          <div className="  text-xl md:text-5xl text-[#000] hover:text-white text-shadow-1 font-bold   text-center mt-10">
            <h1 className="  text-xl md:text-5xl text-[#000] hover:text-white text-shadow-1 font-bold   text-center mt-10">
              Hello&sbquo; I&#39;m
            </h1>
            <br />
            <Typewriter
              options={{
                strings: [" Nida Khurram"],
                autoStart: true,
                loop: true,
              }}
            />
            <br />
            <Typewriter
              options={{
                strings: [
                  "Front-End Developer",
                  "creative beautiful",
                  "responsive",
                  "& user-friendly websites",
                ],
                autoStart: true,
                loop: true,
              }}
            />

            <Link href={"contact"}>
              <button
                className="max-w-[400px] px-5 py-3 rounded-full flex mx-auto text-white
                         bg-gradient-to-r from-[#195b56] to-[#216a32]   focus:outline-none hover:text-shadow-1 text-[16px] md:text-2xl font-bold mt-10 mb-4"
              >
                Boost Your UI: Hire Now!
              </button>
            </Link>

            {/* linkendin icon */}
            <span className="flex gap-3 sm:ml-auto sm:mt-0 justify-center sm:justify-center ">
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/nida-khurram/"}
                className="text-gray-500"
              >
                <FaLinkedinIn className="text-3xl text-[#2ab4aa] hover:text-[#97efe9]" />
              </Link>
              {/* <Link
                target="_blank"
                href={"https://myaccount.google.com/intro/signing-in-to-google"}
                className="text-[#2ab4aa]"
              >
                <SiGmail className="text-3xl text-[#2ab4aa] hover:text-[#97efe9] " />
              </Link> */}

              <Link
                target="_blank"
                href={"https://github.com/nida1khurram"}
                className="text-[#2ab4aa]"
              >
                <FaGithub className="text-3xl text-[#2ab4aa] hover:text-[#97efe9]" />
              </Link>
            </span>
            {/* linkendin icon */}
          </div>
        </div>
      </Vortex>
    </div>
  );
}
