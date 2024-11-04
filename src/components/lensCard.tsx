"use client";
import { useState } from "react";
import { Lens } from "./ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import Link from "next/link";
const projects = [
  {
    id: 1,
    title: "Portfolio Next.js Css",
    image: "/picture/project-pic/html-css-project.png",
    description: "Created Portfolio with next.js & css",
    url: "https://portfolio-css-knai.vercel.app/",
  },
  {
    id: 2,
    title:"Figma Food Project",
    image:"/picture/project-pic/food.png",
    description:"Created figma project with next.js",
    url:"https://food-knai.vercel.app/"
  },
  {
    id: 3,
    title: "Perfume Clone Website",
    image: "/picture/project-pic/perfume.png",
    description: "Created my first project with next.js",
   url:"https://perfume-knai.vercel.app/"
  },
 
  {
    id: 4,
    title: "Hackathon Resume-4",
    image: "/picture/project-pic/resume.jpg",
    description: "Created figma project with html & css",
    url:"https://milestone4-knai.vercel.app/"
  },
  {
    id: 5,
    title: "Countdown Timer",
    image: "/picture/project-pic/count-down-timer.png",
    description: "Created Counter project with next.js",
    url:"https://count-down-timer-knai.vercel.app/"
  },
  {
    id: 6,
    title: "Counter Project",
    image: "/picture/project-pic/counter.png",
    description: "Created Counter project with html & css",
    url:"https://counter-application-knai.vercel.app/"
  },
  {
    id: 7,
    title: "Palaindrome Project",
    image: "/picture/project-pic/palaindrome.png",
    description: "Created Palaindrome project with html & css",
    url:"https://palindrome-knai.vercel.app/"
  },
  {
    id: 8,
    title: "Assignment-12 Project",
    image: "/picture/project-pic/assignment-12.png",
    description: "Created project with html & css",
    url:"https://assignment-12-knai.vercel.app/"
  },
  {
    id: 9,
    title: "Facebook Login Page",
    image: "/picture/project-pic/fb.png",
    description: "Created my first project with next.js",
    url:"https://github.com/nida1khurram/fb_login_pg"
  },
  {
    id: 10,
    title: "Periodic Table Project",
    image: "/picture/project-pic/periodic.png",
    description: "Created Periodic project with html & css",
    url:"https://assignment6-periodic-table.vercel.app/"
  }, 
  {
    id: 11,
    title: "Currency Converter",
    image: "/picture/project-pic/currency-converter.jpg",
    description: "Created project TypeScript/Node.js project",
    url:"https://github.com/nida1khurram/currency_converter"
  },
  {
    id: 12,
    title: "Colorful Number Guessing Game",
    image: "/picture/project-pic/num-guess.jpg",
    description: "Created project TypeScript/Node.js project",
    url:"https://github.com/nida1khurram/num_guessing_game_color"
  },
  {
    id: 13,
    title: "Atm Project",
    image: "/picture/project-pic/atm.jpg",
    description: "Created project TypeScript/Node.js project",
    url:"https://github.com/nida1khurram/Project_atm"
  },
  {
    id: 14,
    title: "Todo List",
    image: "/picture/project-pic/todo.jpg",
    description: "Created project TypeScript/Node.js project",
    url:"https://github.com/nida1khurram/todo_list"
  },
  {
    id: 15,
    title: "Word Counter",
    image: "/picture/project-pic/word-count.jpg",
    description: "Created project TypeScript/Node.js project",
    url:"https://github.com/nida1khurram/word_counter"
  },
  {
    id: 16,
    title: "OOP Assignment",
    image: "/picture/project-pic/oop.jpg",
    description: "Created project TypeScript/Node.js project",
    url:"https://github.com/nida1khurram/Oop-assignment"
  },
  {
    id: 17,
    title: "Colorful Simple Calculator",
    image: "/picture/project-pic/calculator.jpg",
    description: "Created project TypeScript/Node.js project",
    url:"https://github.com/nida1khurram/color_simple_calculator"
  },
  {
    id: 18,
    title: "Typescript 45 Assignment",
    image: "/picture/project-pic/ts.png",
    description: "Created project TypeScript/Node.js project",
    url:"https://github.com/nida1khurram/typescript_ass001"
  },
];
export default function LensDemoThird() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className='max-w-full grid sm:gap-0 md:gap-4 sm:grid-cols-1 md:grid-cols-3 px-4 md:mt-14'>
      {projects.map((project) => (
      <Lens key={project.id}>
        <div className=" md:w-[350px]  md:h-[450px] 
        relative rounded-3xl overflow-hidden  mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318]
         px-6 my-2">
          <Rays />
          <Beams />
          <div className="relative z-10 ">
          <Image 
     className='object-cover object-center rounded mx-auto w-[300px] h-[270px] mt-11'
     alt="hero"
     width={500}
     height={500}
      src={project.image} />

            <motion.div className="py-4 relative z-20">
              <h2 className="text-white text-2xl text-left font-bold ">
              {project.title}
              </h2>
              <p className="text-neutral-200 text-left 
               mt-1">  
               {project.description} <br/>
                 <Link href={project.url || "#"}
                target="_blank">
                  {project.url ? "View Project" : "No URL Provided"}
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </Lens>
      ))}
    </div>
  );
}

// Sorry about this but it looks cool

const Beams = () => {
  return (
    <svg
      width="380"
      height="315"
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
    >
      <g filter="url(#filter0_f_120_7473)">
        <circle cx="34" cy="52" r="114" fill="#6925E7" />
      </g>
      <g filter="url(#filter1_f_120_7473)">
        <circle cx="332" cy="24" r="102" fill="#8A4BFF" />
      </g>
      <g filter="url(#filter2_f_120_7473)">
        <circle cx="191" cy="53" r="102" fill="#802FE3" />
      </g>
      <defs>
        <filter
          id="filter0_f_120_7473"
          x="-192"
          y="-174"
          width="452"
          height="452"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="56"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter1_f_120_7473"
          x="70"
          y="-238"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter2_f_120_7473"
          x="-71"
          y="-209"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
      </defs>
    </svg>
  );
};

const Rays = ({ className }: { className?: string }) => {
  return (
    <svg
      width="380"
      height="397"
      viewBox="0 0 380 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "absolute left-0 top-0  pointer-events-none z-[1]",
        className
      )}
    >
      <g filter="url(#filter0_f_120_7480)">
        <path
          d="M-37.4202 -76.0163L-18.6447 -90.7295L242.792 162.228L207.51 182.074L-37.4202 -76.0163Z"
          fill="url(#paint0_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        opacity="0.3"
        filter="url(#filter1_f_120_7480)"
      >
        <path
          d="M-109.54 -36.9027L-84.2903 -58.0902L178.786 193.228L132.846 223.731L-109.54 -36.9027Z"
          fill="url(#paint1_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        opacity="0.86"
        filter="url(#filter2_f_120_7480)"
      >
        <path
          d="M-100.647 -65.795L-69.7261 -92.654L194.786 157.229L139.51 197.068L-100.647 -65.795Z"
          fill="url(#paint2_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        opacity="0.31"
        filter="url(#filter3_f_120_7480)"
      >
        <path
          d="M163.917 -89.0982C173.189 -72.1354 80.9618 2.11525 34.7334 30.1553C-11.495 58.1954 -106.505 97.514 -115.777 80.5512C-125.048 63.5885 -45.0708 -3.23233 1.15763 -31.2724C47.386 -59.3124 154.645 -106.061 163.917 -89.0982Z"
          fill="#8A50FF"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter4_f_120_7480)"
      >
        <path
          d="M34.2031 13.2222L291.721 269.534"
          stroke="url(#paint3_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter5_f_120_7480)"
      >
        <path
          d="M41 -40.9331L298.518 215.378"
          stroke="url(#paint4_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter6_f_120_7480)"
      >
        <path
          d="M61.3691 3.8999L317.266 261.83"
          stroke="url(#paint5_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter7_f_120_7480)"
      >
        <path
          d="M-1.46191 9.06348L129.458 145.868"
          stroke="url(#paint6_linear_120_7480)"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_120_7480"
          x="-49.4199"
          y="-102.729"
          width="304.212"
          height="296.803"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter1_f_120_7480"
          x="-115.54"
          y="-64.0903"
          width="300.326"
          height="293.822"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter2_f_120_7480"
          x="-111.647"
          y="-103.654"
          width="317.434"
          height="311.722"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5.5"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter3_f_120_7480"
          x="-212.518"
          y="-188.71"
          width="473.085"
          height="369.366"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="48"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter4_f_120_7480"
          x="25.8447"
          y="4.84521"
          width="274.234"
          height="273.065"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter5_f_120_7480"
          x="32.6416"
          y="-49.3101"
          width="274.234"
          height="273.065"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter6_f_120_7480"
          x="54.0078"
          y="-3.47461"
          width="270.619"
          height="272.68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3.5"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter7_f_120_7480"
          x="-9.2002"
          y="1.32812"
          width="146.396"
          height="152.275"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3.5"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <linearGradient
          id="paint0_linear_120_7480"
          x1="-57.5042"
          y1="-134.741"
          x2="403.147"
          y2="351.523"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.214779" stopColor="#AF53FF" />
          <stop offset="0.781583" stopColor="#B253FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_120_7480"
          x1="-122.154"
          y1="-103.098"
          x2="342.232"
          y2="379.765"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.214779" stopColor="#AF53FF" />
          <stop offset="0.781583" stopColor="#9E53FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_120_7480"
          x1="-106.717"
          y1="-138.534"
          x2="359.545"
          y2="342.58"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.214779" stopColor="#9D53FF" />
          <stop offset="0.781583" stopColor="#A953FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_120_7480"
          x1="72.701"
          y1="54.347"
          x2="217.209"
          y2="187.221"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AF81FF" />
          <stop offset="1" stopColor="#C081FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_120_7480"
          x1="79.4978"
          y1="0.191681"
          x2="224.006"
          y2="133.065"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AF81FF" />
          <stop offset="1" stopColor="#C081FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_120_7480"
          x1="79.6568"
          y1="21.8377"
          x2="234.515"
          y2="174.189"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B981FF" />
          <stop offset="1" stopColor="#CF81FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_120_7480"
          x1="16.119"
          y1="27.6966"
          x2="165.979"
          y2="184.983"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A981FF" />
          <stop offset="1" stopColor="#CB81FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
