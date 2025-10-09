import { motion } from "framer-motion";
import { sampleTasks } from "@/data/cronograma-actividades";
import { MapPin, User } from "lucide-react";
import React from "react";

export default function CalendarActivities() {
  function isOdd(number) {
    return number % 2 !== 0;
  }

  return (
    <>
      {sampleTasks.map((task, index) => {
        const isOddIndex = isOdd(index);
        const showMonth =
          index === 0 || task.month !== sampleTasks[index - 1].month;

        // determinar si el día es un rango (ej. "8-12") o una cadena larga
        const isDayRangeOrLong = typeof task.day === 'string' && (task.day.includes('-') || task.day.length > 2);

        return (
          <React.Fragment key={`task-${index}-${task.day}`}>
            {showMonth && (
              <h1 className="text-5xl font-bold text-center mb-10 text-accent animate-slide-from-top">
                {task.month}
              </h1>
            )}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="custom-bg flex flex-col md:flex-row rounded-xl mb-10"
            >
              <div className={`w-full ${isDayRangeOrLong ? 'md:w-3/5' : 'md:w-1/4'} relative flex items-center justify-center py-12 overflow-visible`}>
                <div
                  className={`absolute top-[-20px] left-[-20px] ${
                    isOddIndex ? "bg-emerald-800" : "bg-blue-700"
                  } px-4 py-2 font-bold text-sm shadow-lg rounded-lg flex items-center gap-2`}
                >
                  <MapPin className="w-4 h-4" />
                  {task.location}
                </div>
                <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-[8rem] text-accent animate-slide-from-top whitespace-nowrap">
                  {task.day}
                </h1>
              </div>
              <div className={`w-full ${isDayRangeOrLong ? 'md:w-2/5' : 'md:w-3/4'} bg-background/80 backdrop-blur-sm p-8`}>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                  {task.title}
                </h2>
                <p className="text-lg mb-4">{task.desc}</p>
                
                {/* Responsable */}
                <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/10 rounded-lg px-3 py-2 w-fit">
                  <User className="w-4 h-4" />
                  <span className="font-medium">Responsable:</span>
                  <span className="text-white underline font-semibold">{task.responsable}</span>
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        );
      })}
    </>
  );
}
