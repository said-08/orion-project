import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";

import Navigation from "@/components/navigation";

import bg from "../../public/background/home-orion.jpg";
import logo from "../../public/logo.png";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Background Home"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-60"
      />
      <div className="fixed top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 animate-slide-from-top z-50">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 px-6 py-4 w-[95vw] md:w-auto mx-auto">
          <h1 className="font-bold sm:text-3xl md:text-4xl text-accent animate-slide-from-top">
            Carpeta Digital Club de Aventureros Orión
          </h1>
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <Navigation />
        <Image
          src={logo}
          alt="Logo Club G12"
          className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] animate-bounce-slow z-30"
          priority
        />
      </div>
    </>
  );
}
