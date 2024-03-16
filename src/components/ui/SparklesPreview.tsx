import React from "react";
import Image from "next/image";
import { SparklesCore } from "../ui/sparkles";
type SparklesPreviewProps = {
  name: string;
};
export function SparklesPreview(props: SparklesPreviewProps) {
  const gridItems = [
    { src: "/react.png", alt: "react" },
    { src: "/tailwind.png", alt: "tailwind" },
    { src: "/vite.png", alt: "vite" },
    { src: "/gitbash.png", alt: "gitbash" },
    { src: "/javascript.png", alt: "javascript" },
    { src: "/typescript.png", alt: "typescript" },
    { src: "/mongoDb.png", alt: "mongodb" },
    { src: "/nodejs.png", alt: "nodejs" },
  ];

  return (
    <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
       {props.name}
      </h1>
      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
  

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
