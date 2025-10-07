"use client";

import Timeline from "@/components/history/Timeline";
import { timelineEvents } from "@/data/time-line-events";
import Image from "next/image";
import bg from "../../../../public/background/historia-orion.png";
import ItemLayout from "@/components/ItemLayout";
import historiaImage from "../../../../public/nuestraHistoria.jpg";

export default function NuestraHistoriaPage() {
  return (
    <>
      <Image
        src={bg}
        alt="Background Historia"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-75"
      />

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-10 animate-slide-from-top drop-shadow-lg  text-accent">
        Nuestra Historia
      </h1>

      <ItemLayout className="bg-white/80 rounded-lg shadow-md p-6 w-[90%] sm:w-[80%] mx-auto mb-10">
        <div className="relative w-full h-0 pb-[56.25%]">
          <Image
            src={historiaImage}
            alt="Nuestra Historia"
            className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
            fill
            priority
          />
        </div>
      </ItemLayout>

      <Timeline events={timelineEvents} />
    </>
  );
}
