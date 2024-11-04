
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function Skill2() {
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
  // nextjs
  const [next, setNext] = useState("???");
  const changeNext = () => {
    setNext("50%");
  };
  return (
    <>
      <section className=" md:my-20">
        <h1 className="text-5xl text-shadow-1 font-bold text-center mt-10">
          My Skills
        </h1>

        <div className="max-w-full max-h-screen relative grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto sm:mt-0 md:mt-40 
        
        sm:mb-80 md:mb-0">
          <div className="animate-pulse mx-auto">
            <Image
              src={"/picture/bubble.png"}
              alt="bubble"
              width={150}
              height={150}
              className="md:w-[150px] md-h-[150px]"
            />
            <p className="mt-[-110px] ml-10 absolute text-3xl text-shadow-1">
              Html <br /> {html}
            </p>
            <button onClick={changeHtml}>
              <span className="mx-auto mt-5 text-3xl flex text-shadow-1">
                Show Skill <FaArrowUp />
              </span>
            </button>
            <Image
              src={"/picture/bubble.png"}
              alt="bubble"
              width={50}
              height={50}
              className="bubble"
            />
          </div>

          <div className="animate-pulse mx-auto">
            <Image
              src={"/picture/bubble.png"}
              alt="bubble"
              width={150}
              height={150}
            />
            <p className="ml-10 mt-[-110px] absolute text-3xl text-shadow-1">
              Css <br /> {css}
            </p>
            <button onClick={changeCss}>
              <span className="mx-auto mt-5 text-3xl flex text-shadow-1">
                Show Skill <FaArrowUp />
              </span>
            </button>
            <Image
              src={"/picture/bubble.png"}
              alt="bubble"
              width={50}
              height={50}
              className="bubble"
            />
          </div>

          <div className="animate-pulse mx-auto">
            <Image
              src={"/picture/bubble.png"}
              alt="bubble"
              width={150}
              height={150}
            />
            <p className="ml-4 mt-[-100px] absolute text-2xl text-shadow-1">
              Javascript <br />
              <span className="ml-10"> {java}</span>
            </p>
            <button onClick={changeJava}>
              <span className="mx-auto mt-5 text-3xl flex text-shadow-1">
                Show Skill <FaArrowUp />
              </span>
            </button>
            <Image
              src={"/picture/bubble.png"}
              alt="bubble"
              width={50}
              height={50}
              className="bubble"
            />
          </div>

          <div className="animate-pulse mx-auto">
            <Image
              src={"/picture/bubble.png"}
              alt="bubble"
              width={150}
              height={150}
            />
            <p className="ml-4 mt-[-100px] absolute text-2xl text-shadow-1">
              Typescript <br />
              <span className="ml-10"> {type} </span>
            </p>
            <button onClick={changeType}>
              <span className="mx-auto mt-5 text-3xl flex text-shadow-1">
                Show Skill <FaArrowUp />
              </span>
            </button>
            <Image
              src={"/picture/bubble.png"}
              alt="bubble"
              width={50}
              height={50}
              className="bubble"
            />
          </div>

          <div className="animate-pulse mx-auto ">
            <Image
              src={"/picture/bubble.png"}
              alt="bubble"
              width={150}
              height={150}
              id="b4"
            />
            <p className="ml-8 mt-[-100px] absolute text-2xl text-shadow-1">
              Next.js <br />
              <span className="ml-5"> {next}</span>
            </p>
            <button onClick={changeNext}>
              <span className="mx-auto mt-5 text-3xl flex text-shadow-1">
                Show Skill <FaArrowUp />
              </span>
            </button>
            <Image
              src={"/picture/bubble.png"}
              alt="bubble"
              width={50}
              height={50}
              className="bubble"
            />
          </div>
        </div>
      </section>
    </>
  );
}
