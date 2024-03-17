"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function Navbars() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Portfolio">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://divinevisionaries.netlify.app/#about-section">About</HoveredLink>
            <HoveredLink href="/individual">Resume</HoveredLink>
            <HoveredLink href="/Blog">Blogs</HoveredLink>
            <HoveredLink href="/Blog">Updates</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Project">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="E-commerce"
              href="https://bizzybazaar.vercel.app/"
              src="/websiteone.png"
              description="E-commerce product selling platform"
            />
            <ProductItem
              title="Web service"
              href=""
              src="/websitesecond.png"
              description="Web serivice provider Company"
            />
          </div>
        </MenuItem>

        <Link href="https://drive.google.com/file/d/1027HgfIT_Ry6B8SvmOroFwfgo8OXHiqI/view?usp=sharing">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Resume"
          ></MenuItem>
        </Link>

        <Link href="https://divinevisionaries.netlify.app/#contact-section">
          <MenuItem
            setActive={setActive}
            active={active}
            item="contact"
          ></MenuItem>
        </Link>

        <Link href="/Blog">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Blog"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
