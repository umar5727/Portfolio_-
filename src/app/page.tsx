import Contact from "@/components/Contact";
import Header from "@/components/Header";
import LatestWork from "@/components/LatestWork";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-between px-24">
      <Header />
      <section className="relative w-full h-screen grid md:grid-cols-2 gap-10 justify-center items-center pt-12 mb-10">
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-6xl">Hy! I am Umar</h1>
          <h3 className="text-xl">A Full Stack Developer</h3>
          <p>I use  MERN Stack to Build Modern development</p>
          <div className="flex flex-col gap-2 items-start mt-2">
            <button className="px-4 py-1 bg-purple-800 rounded-md">About Me</button>
            <button className="px-4 py-1 bg-purple-800 rounded-md">Resume</button>
          </div>
        </div>
        {/* left ends  */}
        <div className="flex justify-center items-center aspect-square">
          <div className="w-full bg-purple-600 aspect-square flex justify-center items-center rounded-full overflow-hidden ">
            <img src="self-without-bg.png" alt="profile image" />
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <button className="px-4 py-1 bg-purple-800 rounded-md">Latest Work</button>
        </div>
      </section>
      <section>
        <LatestWork />
      </section>
      <section className="my-10">
        <Contact />
      </section>
    </main>
  );
}
