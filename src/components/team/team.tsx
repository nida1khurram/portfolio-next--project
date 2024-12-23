"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function OurTeam() {
  return (
    <>
      <div>
        <h1 className="text-5xl text-shadow-1 text-center font-bold my-8 sm:ml-0 md:ml-40 ">
          Our Team
        </h1>
        <div className="max-w-full grid sm:grid-cols-1 md:grid-cols-3 justify-center my-20 sm:ml-20 md:ml-28 ">
          <div className="max-w-xs w-full group/card shadow-2xl shadow-white/50">
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(/picture/team/adnan.png)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duratio n-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10 " >
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src="/picture/team/a.jpg"
                  className="h-10 w-10 rounded-full border-2 object-cover hover:scale-150"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    Muhammad Adnan
                  </p>
                </div>
              </div>
              <div className="text content ">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  Web Developer
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  Passionate frontend & backend developer.
                </p>
               
              </div>
            </div>

            <p className="text-[#027a6d] text-xl my-3 text-center">
                  <Link href={"https://madnan-portfolio.vercel.app/"} target="_blank">
                    view Profile
                  </Link>
                </p>
          </div>
          {/* 2 */}
          <div className="max-w-xs w-full group/card shadow-2xl shadow-white/50">
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(/picture/team/ar.png)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src="/picture/team/ar2.jpg"
                  className="h-10 w-10 rounded-full border-2 object-cover hover:scale-150"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    Abdul Rahman
                  </p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  Frontened Web Developer
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  Creating user-friendly web apps & focused on responsive
                  design.
                </p>
                {/* <p className="text-blue-300">
                  <Link
                    href={"https://abdul-rehman-portfolio-theta.vercel.app/"}
                  >
                    view Profile
                  </Link>
                </p> */}
              </div>
            </div>
            <p className="text-[#027a6d] text-xl my-3 text-center">
                  <Link
                    href={"https://abdul-rehman-portfolio-theta.vercel.app/"}
                  target="_blank">
                    view Profile
                  </Link>
                </p>
          </div>
          {/* 3 */}
          <div className="max-w-xs w-full group/card shadow-2xl shadow-white/50">
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(/picture/team/r1.png)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

              <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src="/picture/team/r.jpg"
                  className="h-10 w-10 rounded-full border-2 object-cover hover:scale-150"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    Muhammad Rameez
                  </p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  UI/UX Designer
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                Passionate Designer
                </p>
              
              </div>
            </div>
             <p className="text-[#027a6d] text-xl my-3 text-center">
                  <Link href={"https://rameez-portfolio-gold.vercel.app/"} target="_blank">
                    View Profile
                  </Link>
                </p>
          </div>

        </div>
      </div>
    </>
  );
}
