"use client";
import Head from "next/head";
import React from "react";
import Image from 'next/image';
import char from '/public/character.png';
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGoogleCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight.tsx";
import { LampContainer } from "../../components/ui/lamp";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { MacbookScroll } from "../../components/ui/macbook-scroll";
import { cn } from "../../components/utils/cn";
import { motion } from "framer-motion";
// import Link from next/link;
// Shadcn Imports
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../@/components/ui/hover-card"

import { CalendarDays } from "lucide-react"
import { Button } from "../../@/components/ui/button"




export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andy Jung Por</title>
        <meta name = "description" content = "Generated by creator"></meta>
        <link rel = "icon" href = "/favicon.ico"/>
      </Head>


      <main className="bg-white px-10 dark:bg-black md:px-20 lg:px-40">
        <section className= "min-h-screen">
          
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <Image src={char} alt="Andy Jung" width={120} height={120} className="rounded-full" />
            <ul className="flex items-center">

              <li>
  
                <button className="bg-gradient-to-r from-gray-600 to-slate-800 text-white px-4 py-2 dark:from-green-900 dark:to-green-500 rounded-md ml-8n transform hover:-translate-y-1 transition duration-400">
                Download CV
              </button>
              </li>
              <li>
                <BsFillMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl ml-8"/>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-8xl py-2 text-gray-800 font-medium"> Andy Jung </h2>
            <HeroHighlight>
            <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl -mt-4 px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                  <Highlight>Software Engineer and Data Nerd</Highlight>
            </motion.h1>
            
          </HeroHighlight>

          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 ">
            <HoverCard>
              <HoverCardTrigger><a href ="mailto:jungkj@bc.edu"><AiFillGoogleCircle/></a></HoverCardTrigger>
              <HoverCardContent className="w-80"><div className="text-sm">Click to send me an email!</div></HoverCardContent>
            </HoverCard>
            <a href ="https://github.com/jungkj"><AiFillGithub/></a>
            <a href ="https://www.linkedin.com/in/ki-hwan-andy-jung/"><AiFillLinkedin/></a>
          </div>
          {/* <div className="mx-auto bg-gradient-to-b from-gray-600 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={char} layout="flex" objectFit = "cover" alt = "hero img"/>
          </div> */}
        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-1">Here is some of what I can do</h3>
            <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
          }
          />
            <p className="text-mid py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
          </div>

        </section>
        </main>
    </div>

  );
}
