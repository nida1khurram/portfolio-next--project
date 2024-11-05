
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3Alt } from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
export default function SkillBubble() {
  // html
  const [html, setHtml] = useState("???");
  const changeHtml = () => {
    setHtml("90%");
  };
  // css
  const [css, setCss] = useState("???");
  const changeCss = () => {
    setCss("80%");
  };
  // javascript
  const [java, setJava] = useState("???");
  const changeJava = () => {
    setJava("70%");
  };
  // typescript
  const [type, setType] = useState("???");
  const changeType = () => {
    setType("70%");
  };
  // tailwind
  const [tailwind, setTailwind] = useState("???");
  const changeTailwind = () => {
    setTailwind("60%");
  };
  // nextjs
  const [next, setNext] = useState("???");
  const changeNext = () => {
    setNext("50%");
  };
  return (    
        <section className=" body-font">
  <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-col text-center w-full mb-4">
              
                <h1 className="text-5xl text-shadow-1 font-bold text-center mt-10">
          My Skills
        </h1>
              </div>
    <div className="flex flex-wrap -m-4 mt-10">
    {/* skills html */}
      <div className="p-4 w-[100%] md:w-1/3">
      {/* html */}
        <div className="flex rounded-lg h-full p-8 flex-col items-center  bg-[#000] shadow-2xl shadow-white/50">
                       <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                        <TfiHtml5 className='text-xl font-bold'/>
                        </div>
                        <h2 className=" text-shadow-1 text-lg title-font font-medium">
                        HTML
                        </h2>
                      </div>
                                <div className="flex-grow ">
                                  <Image
                              src={"/picture/bubble.png"}
                              alt="bubble"
                              width={120}
                              height={120}
                              className="md:w-[120px] md-h-[120px] "
                            />
                            <p className="mt-[-90px] ml-7 absolute text-2xl text-shadow-1">
                              Html <br /> {html}
                            </p>
                            <button onClick={changeHtml}>
                              <span className="mx-auto mt-5 text-2xl flex text-shadow-1">
                                Show Skill <FaArrowUp />
                              </span>
                            </button> 
                
                          </div>
            {/* bubble move*/}
            <Image src={"/picture/bubble.png"} alt="bubble"
              width={50}  height={50}  className="bubble" />
              {/* bubble move*/}
        </div>
        
      </div>
       {/* skills css */}
       <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col items-center bg-[#000] shadow-2xl shadow-white/50">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-800 text-white flex-shrink-0">
            <FaCss3Alt className='text-xl font-bold'/>
            </div>
            <h2 className=" text-lg title-font font-medium">
             CSS
            </h2>
          </div>
          <div className="flex-grow">
          <Image
              src={"/picture/bubble.png"}
              alt="bubble"
              width={120}
              height={120}
            />
            <p className="mt-[-90px] ml-8 absolute text-2xl text-shadow-1">
              Css <br /> {css}
            </p>
            <button onClick={changeCss}>
            <span className="mx-auto mt-5 text-2xl flex text-shadow-1">
                Show Skill <FaArrowUp />
              </span>
            </button>
          </div>
           {/* bubble move*/}
           <Image src={"/picture/bubble.png"} alt="bubble"
              width={50}  height={50}  className="bubble" />
              {/* bubble move*/}
        </div>
      </div>
{/* skills javascript*/}
<div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col items-center bg-[#000] shadow-2xl shadow-white/50">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
            <AiOutlineJavaScript className='text-2xl font-bold' />
            </div>
            <h2 className=" text-lg title-font font-medium">
             Javascript
            </h2>
          </div>
          <div className="flex-grow">
          <Image
               src={"/picture/bubble.png"}
              alt="bubble"
              width={120}
              height={120}
            />
            <p className="mt-[-80px] ml-4 absolute text-xl text-shadow-1">
              Javascript <br /> {java}
            </p>
           <button onClick={changeJava}>
            <span className="mx-auto mt-5 text-2xl flex text-shadow-1">
                Show Skill <FaArrowUp />
              </span>
            </button>
          </div>
           {/* bubble move*/}
           <Image src={"/picture/bubble.png"} alt="bubble"
              width={50}  height={50}  className="bubble" />
              {/* bubble move*/}
        </div>
      </div>
{/* skills typescript*/}
<div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col items-center bg-[#000] shadow-2xl shadow-white/50">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <TbBrandTypescript className='text-2xl font-bold' />
            </div>
            <h2 className=" text-lg title-font font-medium">
             Typescript
            </h2>
          </div>
          <div className="flex-grow">
          <Image
               src={"/picture/bubble.png"}
              alt="bubble"
              width={120}
              height={120}
            />
            <p className="mt-[-80px] ml-4 absolute text-xl text-shadow-1">
              Typescript <br /> {type}
            </p>
            <button onClick={changeType}>
            <span className="mx-auto mt-5 text-2xl flex text-shadow-1">
                Show Skill <FaArrowUp />
              </span>
            </button>
          </div>
           {/* bubble move*/}
           <Image src={"/picture/bubble.png"} alt="bubble"
              width={50}  height={50}  className="bubble" />
              {/* bubble move*/}
        </div>
      </div>
      {/* tailwind */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col items-center bg-[#000] shadow-2xl shadow-white/50">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <SiTailwindcss />
            </div>
            <h2 className=" text-lg title-font font-medium">
            Tailwind Css
            </h2>
          </div>
          <div className="flex-grow">
          <Image
               src={"/picture/bubble.png"}
              alt="bubble"
              width={120}
              height={120}
            />
            <p className="mt-[-80px] ml-2 absolute text-xl text-shadow-1">
            Tailwind Css <br />{tailwind}
            </p>
            <button onClick={changeTailwind}>
            <span className="mx-auto mt-5 text-2xl flex text-shadow-1">
                Show Skill <FaArrowUp />
              </span>
            </button>
          </div>
           {/* bubble move*/}
           <Image src={"/picture/bubble.png"} alt="bubble"
              width={50}  height={50}  className="bubble" />
              {/* bubble move*/}
        </div>
      </div>
       {/*next skill  */}
       <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col items-center bg-[#000] shadow-2xl shadow-white/50">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <Image
               src={"/picture/next.png"}
              alt="next"
              width={50}
              height={50}
            />
            </div>
            <h2 className=" text-lg title-font font-medium">
            Next.js
            </h2>
          </div>
          <div className="flex-grow">
          <Image
               src={"/picture/bubble.png"}
              alt="bubble"
              width={120}
              height={120}
            />
            <p className="mt-[-90px] ml-7 absolute text-2xl text-shadow-1">
              Next.js <br />{next}
            </p>
            <button onClick={changeNext}>
            <span className="mx-auto mt-5 text-2xl flex text-shadow-1">
                Show Skill <FaArrowUp />
              </span>
            </button>
          </div>
           {/* bubble move*/}
           <Image src={"/picture/bubble.png"} alt="bubble"
              width={50}  height={50}  className="bubble" />
              {/* bubble move*/}
        </div>
      </div>
{/* skills */}





    </div>
  </div>
</section>

   
  )
}
