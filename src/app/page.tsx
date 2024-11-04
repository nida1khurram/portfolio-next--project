"use client"

import Hero1 from "@/components/hero";
import SkillPage from "./skill/page";
import AboutPage from "./about/page";
import ProjectPage from "./project/page";
import ContactPage from "./contact/page";
import { InfiniteMovingCardsDemo } from "@/components/peopleAboutUs";





export default function Home() {
  return (
    <main >
      <Hero1 />
      <AboutPage />
      <SkillPage />
     <ProjectPage />
      <InfiniteMovingCardsDemo />
      <ContactPage />
      
    </main>
  );
}
