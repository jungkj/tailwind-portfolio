"use client";
import Head from "next/head";
import React from "react";
import Image from 'next/image';
import char from '/public/character.png';
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGoogleCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";
import { LampContainer } from "../../components/ui/lamp";
import { BackgroundBeams } from "../../components/ui/background-beams";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andy Jung Portfaolio</title>
        <meta name = "description" content = "Generated by creator"></meta>
        <link rel = "icon" href = "/favicon.ico"/>
      </Head>

    
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className= "min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <Image src={char} alt="Andy Jung" width={120} height={120} className="rounded-full" />
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className=" bg-gradient-to-r from-gray-600 to-slate-800 text-white px-4 py-2 rounded-md ml-8n"href = "#">Resume</a>
                <a className=" bg-gradient-to-r from-gray-600 to-slate-800 text-white px-4 py-2 rounded-md ml-8"href = "#">LinkedIn</a>
                <a className=" bg-gradient-to-r from-gray-600 to-slate-800 text-white px-4 py-2 rounded-md ml-8" href = "#">GitHub</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-gray-800 font-medium"> Andy Jung </h2>
            <p className="text-2xl py-2 text-gray-800 dark:text-gray-200">Software Engineer and Data Nerd.</p>
            <BackgroundBeams />
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 ">
            <AiFillGithub/>
            <AiFillGoogleCircle/>
            <AiFillLinkedin/>
          </div>
          {/* <div className="mx-auto bg-gradient-to-b from-gray-600 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={char} layout="flex" objectFit = "cover" alt = "hero img"/>
          </div> */}
        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-1">Here is some of what I can do</h3>

            <p className="text-mid py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
          </div>

        </section>
        </main>
    </div>

  );
}
