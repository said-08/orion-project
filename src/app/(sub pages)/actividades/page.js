"use client";

import Image from "next/image";
import bg from "../../../../public/background/actividades-orion.jpg";
import RenderModel from "@/components/RenderModel";
import ActivitiesDetails from "@/components/activities/activities-details";
import { Model as Tent } from "../../../components/models/Tent.jsx";
import ActivitySection from "@/components/activities/activity-section";
import { activities } from "@/data/activities";
import { ArrowDown } from "lucide-react";

export default function ActividadesPage() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-60"
      />

      <div className="w-full h-4/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <Tent />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent animate-slide-from-top">
            Actividades
          </h1>
          <div className="w-fit flex flex-row  items-center justify-center">
            <p className="font-light text-foreground text-lg animate-slide-from-bottom mt-4 mr-2">
              ¡Conoce un poco más de lo que hacemos y amamos!
            </p>
            <ArrowDown className="text-foreground group-hover:text-accent w-[40px] h-[30px] animate-bounce-slow" />
          </div>
        </div>
      </div>

      <ActivitiesDetails />
      <div className="custom-bg p-6 sm:p-8 rounded-xl space-y-8 w-full flex flex-col items-center justify-center">
        {activities.map((activity, index) => (
          <ActivitySection
            key={index}
            title={activity.title}
            description={activity.description}
            images={activity.images}
            videoUrl={activity.videoUrl}
          />
        ))}
      </div>
    </>
  );
}
