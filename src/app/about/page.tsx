
import AboutScroll from "@/components/about/aboutData";
import React from "react";

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-5xl  text-shadow-1 text-center font-bold mt-20">
        About Us
      </h1>
      <AboutScroll />
    </section>
  );
}
