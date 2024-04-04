"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";

function Nav() {
  const [show, setShow] = useState();
  return (
    <div className="max-w-5xl mx-auto p-5">
      {/* main */}
      <div
        className="flex justify-between items-center
    "
      >
        {/* logo */}
        <div>
          <h1
            className="text-md 
            font-bold capitalize"
          >
            Top star Tech
          </h1>
        </div>

        <div className="cursor-pointer
        z-50  md:hidden"
        onClick={() => setShow(!show)}>{show ? <HiMenuAlt3 
        className="text-2xl"/> : <HiMenuAlt2 
        className="text-2xl"/>}</div>
        {/*  desktp */}
        <div
          className="font-semibold text-[12px]
        uppercase space-x-4 hidden md:flex "
        >
          <Link href="/">Home</Link>
          <Link href="/Services">services</Link>
          <Link href="/Projec">Project</Link>
          <Link href="/About">About</Link>
          <Link href="/contect">Contect</Link>
        </div>
        {/* mobile */}
        <div
          className={`absolute flex flex-col 
          justify-center  items-center top-0 right-0
         w-32 min-h-screen space-y-10 bg-gray-300 
          bg-opacity-45 shadow-md shadow-gray-500
          md:hidden rounded-tl-[100px] ${show ? "flex"
        : "hidden"}`}
        >
          <Link href="/">Home</Link>
          <Link href="/Services">services</Link>
          <Link href="/Projec">Project</Link>
          <Link href="/About">About</Link>
          <Link href="/contect">Contect</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
