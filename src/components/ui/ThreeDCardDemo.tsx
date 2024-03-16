"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Ecommerce Project
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          An e-commerce website built using the MERN (MongoDB, Express.js,
          React, Node.js) stack combines a robust backend with a dynamic
          frontend to create a seamless shopping experience. MERN's key
          components enable features like user authentication, product
          management, order processing, and payment integration.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/websiteone.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <Link href={"https://bizzybazaar.vercel.app/"} >
            try now
            </Link>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          ><Link href={"https://bizzybazaar.vercel.app/"} >
            vist website
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
