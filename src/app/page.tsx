"use client";
import HeroSection from "@/components/ui/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/ui/InfiniteMovingCardsDemo";
import { Navbars } from "@/components/ui/Navbars";
import { SparklesPreview } from "@/components/ui/SparklesPreview";
import TechStack from "@/components/ui/TechStack";
import { TextRevealCardPreview } from "@/components/ui/TextRevealCardPreview";
import { ThreeDCardDemo } from "@/components/ui/ThreeDCardDemo";
import { ThreeDCardDemo2 } from "@/components/ui/ThreeDCardDemo2";
import { GlobeD } from "@/components/ui/GlobeD";

import Image from "next/image";
import ContactMeForm from "@/components/ui/ContactMe";
import { Parti } from "@/components/ui/Parti";
import Timeline from "@/components/ui/Timeline";
import About from "@/components/ui/About";

export default function Home() {
  return (
    <main className="  bg-black/[0.96] antialiased bg-grid-white/[0.06]">
      <TextRevealCardPreview />

      <About />
      <SparklesPreview name="Tech stack" />
      <TechStack />

      <div id="project-section" className="grid grid-cols-2 gap-4">
        <ThreeDCardDemo
          title="Ecommerce Project"
          para="An e-commerce website built using the MERN MongoDB, Express.js, React,
  Node.js stack combines a robust backend with a dynamic frontend to
  create a seamless shopping experience. MERN's key components enable
  features like user authentication, product management, order
  processing, and payment integration."
          link="https://bizzybazaar.vercel.app/"
          img="/websitesecond.png"
        />

        <ThreeDCardDemo
          title="Webservice project"
          para=" Webservice Provider Company site is a web application built using the
          MERN (MongoDB, Express.js, React, Node.js) stack. This technology
          stack enables the site to offer a dynamic and responsive user
          experience. MongoDB is used as the database to store data, Express.js
          as the web framework for Node.js, React for the frontend user
          interface."
          link=""
          img="/websiteone.png"
        />
      </div>

      <div>
        <InfiniteMovingCardsDemo />
      </div>

      <div
        id="contact-section"
        className="grid grid-cols-2 w-full gap-2 justify-items-center items-center"
      >
        <ContactMeForm />
        <GlobeD />
      </div>
    </main>
  );
}
