"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "As the Head of Department at Bidhan Chandra College, I had the pleasure of working with pritam kumar ram. Their expertise in MERN stack development was instrumental in enhancing our web development projects. Their dedication and commitment to their work were truly commendable, and I highly recommend them as a web developer.",
    name: "Rajdeep Chatterjee",
    title: "Head of Department, Bidhan Chandra College",
  },
  {
    quote:
      "I have had the opportunity to observe pritam dedication to their work as a MERN stack developer. Their commitment to learning and improving their skills is truly admirable. I believe they have a bright future ahead in the field of web development.",
    name: "Mentor Thapa",
    title: "Technical YouTuber and MERN Developer",
  },
  {
    quote:
      "Working with [Your Name] on our e-commerce project was a great experience. Their knowledge of MERN stack development and dedication to the project's success were evident throughout our collaboration. I would gladly work with them again on future projects.",
    name: "Shivraj Singh",
    title: "Project Manager, E-commerce Project",
  },
  {
    quote:
      "I had the pleasure of working with pritam kumar ram on a challenging web development project. Their ability to quickly grasp complex concepts and their dedication to delivering high-quality work were impressive. I highly recommend them for any web development project.",
    name: "Rahul Sharma",
    title: "Senior Software Engineer",
  }
];
