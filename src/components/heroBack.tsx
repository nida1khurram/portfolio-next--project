

import Link from "next/link";
import { Vortex } from "../components/ui/vortex";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
// 
export function VortexDemoSecond() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden"
    >
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
        <div className="  text-2xl md:text-5xl  text-shadow-1 font-bold   text-center mt-10">
         <Typewriter
              options={{
                          strings: ['Hello', "I'm Nida Khurram",'Welcome to my Portfolio'],
                          autoStart: true,
                          loop: true,
                        }}/>
                        <br />
                         <Typewriter
                        options={{
                          strings: ['Front-End Developer','creative beautiful','responsive','& user-friendly websites'],
                          autoStart: true,
                          loop: true,
                        }}/>
                          
                          <Link href={'/'}>
                        <button
                        className="max-w-[200px] px-5 py-3 rounded-full flex mx-auto text-white
                         bg-gradient-to-r from-[#42d9ce] to-[#23a842]   focus:outline-none hover:text-shadow-1  text-2xl font-bold mt-10">Hire Me</button>
                          </Link>
                          
                      </div>
      
        </div>
      </Vortex>
    </div>
  );
}
