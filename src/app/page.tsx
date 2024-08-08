import LatestWork from "@/components/LatestWork";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24">
      <section className="w-full h-screen grid md:grid-cols-2 gap-10 justify-center items-center">
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-5xl">Hy! I am Umar</h1>
          <h3 className="text-xl">A Full Stack Developer</h3>
          <p>I use  MERN Stack to Build Modern development</p>
        </div>
        {/* left ends  */}
        <div className="flex justify-center items-center ">
          <div className="w-full bg-purple-600 aspect-video">

          </div>
        </div>
      </section>
      <section>
        <LatestWork />
      </section>
    </main>
  );
}
