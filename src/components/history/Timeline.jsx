import ItemLayout from "@/components/ItemLayout";
import Image from "next/image";

export default function Timeline({ events }) {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-4 sm:left-1/2 w-1 bg-accent h-full transform sm:-translate-x-1/2"></div>
      {events.map((event, index) => (
        <div
          key={index}
          className={`mb-10 flex items-center ${
            index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
          } justify-end relative`}
        >
          <div className="absolute top-1/2 left-4 sm:left-1/2 w-6 h-6 rounded-full bg-gray-500 border-4 border-white transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
          <ItemLayout
            className={`relative bg-white/80 rounded-lg shadow-md p-6 w-[80%] sm:w-[45%] flex flex-col items-start transition-transform duration-300 ease-in-out hover:scale-105 ${
              index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 w-full">
              {/* Estrella */}
              <span className="text-yellow-400 text-3xl sm:text-4xl mb-2 sm:mb-0 sm:mr-4 flex-shrink-0">
                ⭐
              </span>
              {/* Año y título */}
              <div className="flex flex-col text-center sm:text-left">
                <p className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                  {event.year}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide break-words">
                  {event.subtitle}
                </h3>
              </div>
            </div>
            
            {/* Imagen del evento */}
            {event.image && (
              <div className="w-full mb-4 rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-48 sm:h-56">
                  <Image
                    src={event.image}
                    alt={`${event.year} - ${event.subtitle}`}
                    fill
                    className="object-fill transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 45vw"
                  />
                </div>
              </div>
            )}
            
            <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
              {event.description}
            </p>
          </ItemLayout>
        </div>
      ))}
    </div>
  );
}
