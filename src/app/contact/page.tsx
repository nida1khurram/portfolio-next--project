// https://formspree.io/

"use client";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
export default function ContactPage() {
  return (
    <>
      <section>
        <div className="lg:w-1/2 md:w-2/3 mx-auto px-10 py-10 rounded-lg shadow-2xl shadow-white/50">
          <div className="flex flex-wrap -m-2">
            <h1 className="text-5xl text-shadow-1 font-bold my-8 sm:ml-0 md:ml-40">
              Contact Me
            </h1>
            <form  action="https://formspree.io/f/xzzbvela"
                   method="POST"
            >
              <div className=" p-2 w-1/2 flex-wrap">
                <div className="relative ">
                  <label
                    htmlFor="name"
                    className="leading-7 text-lg text-[#42d9ce] font-bold "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mb-2 sm:w-[100px] md:w-[500px] bg-[#f0f2f0] bg-opacity-50 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#0b2c2a] py-2 px-5 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-lg text-[#42d9ce] font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mb-2 sm:w-[100px] md:w-[500px] bg-[#f0f2f0] bg-opacity-50 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#0b2c2a] py-2 px-5 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative ">
                  <label
                    htmlFor="subject"
                    className="leading-7 text-lg text-[#42d9ce] font-bold"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mb-2 sm:w-[90px] md:w-[500px] bg-[#f0f2f0] bg-opacity-50 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#0b2c2a] py-2 px-5 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-lg text-[#42d9ce] font-bold"
                  >
                    Message
                  </label>
                  <br />
                  <textarea
                    id="message"
                    name="message"
                    className="mb-2 md:w-[500px] bg-[#f0f2f0] bg-opacity-50 rounded-2xl border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-[#0b2c2a] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <button
                  className="max-w-[450px] px-10 py-2 rounded-full flex mx-auto text-white
                         bg-gradient-to-r from-[#42d9ce] to-[#303531]   focus:outline-none hover:text-shadow-1  text-2xl font-bold mt-10"
                >
                  Send
                </button>

                {/*  */}

                <h2 className="text-2xl text-shadow-1 font-bold mt-8 mx-auto text-center">
                  Get in touch
                </h2>
                <div className="text-2xl mt-10 flex flex-row gap-8  ml-28 md:ml-60">
                  {/* <Link
                    target="_blank"
                    href={
                      "https://myaccount.google.com/intro/signing-in-to-google"
                    }
                  >
                    <SiGmail className="text-2xl hover:text-[#2ab4aa] " />
                  </Link> */}

                  <Link
                    target="_blank"
                    href={"https://github.com/nida1khurram"}
                  >
                    <FaGithub className="text-2xl hover:text-[#2ab4aa]" />
                  </Link>

                  <Link
                    target="_blank"
                    href={"https://www.linkedin.com/in/nida-khurram/"}
                  >
                    <FaLinkedinIn className="text-2xl hover:text-[#42d9ce]" />
                  </Link>
                </div>
                {/*  */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
