"use client";

import Image from "next/image";
import bg from "../../../../public/background/cronograma-orion.jpg";
import CalendarActivities from "@/components/calendar/acitivity";
import { ArrowDown } from "lucide-react";

export default function CronogramaDeActividades() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-80"
      />

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[40%] sm:top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent animate-slide-from-top">
            Cronograma
          </h1>
          <div className="w-fit flex flex-row  items-center justify-center">
            <p className="font-light text-foreground text-lg animate-slide-from-bottom mt-4 mr-2">
              ¡Conoce nuestras actividades!
            </p>
            <ArrowDown className="text-foreground group-hover:text-accent w-[40px] h-[30px] animate-bounce-slow" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <CalendarActivities />
      </div>
    </>
  );
}
