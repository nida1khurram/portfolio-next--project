"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Introduction",
    description:
      " Hello! I'm Nida, a passionate Frontend Web Developer with a knack for crafting intuitive and visually appealing user interfaces. With a solid background in HTML, CSS, JavaScript, TypeScript and modern frontend frameworks like Next.js, I strive to create seamless and responsive web experiences.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-blue-950  text-shadow-1 ml-2">
        {/* " " double quote--> &ldquo;   &rdquo;*/}
        &ldquo;Dream it. Believe it. Receive it.&rdquo; <br /> &mdash;Peloton
        instructor Selena Samuela
      </div>
    ),
  },
  {
    title: "My Journey",
    description:
      "  My journey into web development began with a curiosity for how websites were built and evolved into a full-blown passion for bringing designs to life on the web. I believe that the best web applications are both aesthetically pleasing and highly functional, and I work meticulously to achieve that balance in every project.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white ml-[10px]">
        I&apos;m Begginers but <br /> &ldquo;Every expert was once a
        beginner.&rdquo;
        <br />
        &mdash; Rutherford B. Hayes
      </div>
    ),
  },
  {
    title:
      "Excellence in Frontend Development: Design, Efficiency, and User Experience",
    description:
      " I have honed my skills in various aspects of frontend devel opment, including Responsive Design: Ensuring that websites look great on all devices, from desktops to smartphones.Performance Optimization: Crafting efficient code to enhance load times and user experience.Cross-Browser Compatibility: Making sure that all users have a consistent experience, regardless of their browser.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white ml-2">
        Experience is the name everyone gives to
        <br /> their mistakes. &ndash; Oscar Wilde
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Collaborating with designers to create intuitive and user-friendly interfaces.I am always excited to learn new technologies and keep up with industry trends. When I&#39;m not coding, you can find me exploring new places, experimenting with new recipes, or catching up on the latest in tech and design.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        First, solve the problem. <br />
        Then, write the code.
      </div>
    ),
  },
  {
    title: "Looking Forward to Creating Something Amazing With You!",
    description:
      "Thank you for visiting my portfolio. I look forward to the possibility of working with you and bringing your ideas to life!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Programming isn&apos;t about <br />
        typing, it&apos;s about thinking.
      </div>
    ),
  },
];
export default function AboutScroll() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
