"use client";
import React from "react";
import { Spotlight } from "./Spotlight";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";
import Image from "next/image";
import { Parti } from "./Parti";

export function TextRevealCardPreview() {
  const words = [
    {
      text: "Build",
    },

    {
      text: " web apps",
    },
    {
      text: "with",
    },
    {
      text: "devloper",
    },
    {
      text: "pritam",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex items-center flex-wrap lg:space-x-24 justify-center w-full h-[50rem] ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div>
        <TypewriterEffectSmooth words={words} />

        <TextRevealCard
          text="You have the problem."
          revealText="I have the code."
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
        </TextRevealCard>
        <div className="flex items-center justify-center">
          <button className="relative  inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Explore me
            </span>
          </button>
        </div>
      </div>
      <div className="w-1/3 ">
        <Image
          src="/pritam.png"
          alt="my image"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
    </div>
  );
}
