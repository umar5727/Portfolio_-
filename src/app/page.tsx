'use client'
import {motion} from "framer-motion"
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import LatestWork from "@/components/LatestWork";
import Image from "next/image";
import { PopUp } from "@/motion/PopUp";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-between px-24 text-primarywhite">
      
      <section className="relative w-full h-[calc(100vh-48px)] grid md:grid-cols-2 gap-10 justify-center items-center mb-10">
        <div 
          className="flex flex-col gap-2 justify-center"
          
        >
            <PopUp>
              <h1 className="text-6xl pb-2">Hy! I'm <span className="text-primary">Umar</span></h1>
            </PopUp>
              <PopUp>
                <h3 className="text-xl">A Full Stack Developer</h3>
              </PopUp>
              <PopUp>
                <p>I use  MERN Stack to Build Modern Web Development</p>
              </PopUp>
          
          <div className="flex flex-col gap-2 items-start mt-2">
            <button className="px-4 py-1 bg-purple-800 rounded-md">About Me</button>
            <button className="px-4 py-1 bg-purple-800 rounded-md">Resume</button>
          </div>
        </div>
        {/* left ends  */}
        <div className="flex justify-center items-center aspect-square">
          <div className="relative w-full bg-purple-600 aspect-square flex justify-center items-center rounded-full overflow-hidden ">
            <Image src="/self-without-bg.png"  alt="profile image" fill className="!w-auto !left-1/2 -translate-x-1/2 "/>
            {/* <img src="/self-without-bg.png"  alt="profile image" /> */}
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <PopUp>
            <motion.div
            whileTap={{scale:'1.2'}}
            >
              <button
                className="px-4 py-1 bg-purple-800 rounded-md"
              
                >Latest Work
              </button>
            </motion.div>
          </PopUp>
        </div>
      </section>
      <section>
        <LatestWork />
      </section>
      <section className="my-20 w-full">
        <Contact />
      </section>
    </main>
  );
}
