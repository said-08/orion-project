import Card from "@/components/Card";
import Image from "next/image";
import bg from "../../../../public/background/ideales-orion.jpg";
export const metadata = {
  title: "Nuestros Ideales",
};

export default function NuestrosIdealesPage() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-60"
      />
      <div className="relative w-full flex flex-col items-center justify-start">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-accent animate-slide-from-top whitespace-nowrap">
            Ideales
          </h1>
          <p className="font-light text-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl animate-slide-from-bottom text-center mt-4">
            ¡Con Cristo, con Cristo siempre listos!
          </p>
        </div>
      </div>
      <div className="sm:p-8 space-y-8 w-full flex flex-col items-center justify-center mt-16">
        <Card
          className="animate-slide-from-left"
          title="Misión"
          content="El Club Orion tiene como mision desarrollar en forma armoniosa las facultades físicas , mentales, espirituales y sociales de nuestros niños, dentro de un programa integral en sus respectivas edades, patrocinado y dirigido por la Iglesia Adventista del Séptimo Día , pero creado en la mente de Dios."
          image="/ideales/img_mision.jpg"
        />
        <Card
          className="animate-slide-from-right"
          title="Visión"
          content="Ser un instrumento presto en la mano de Dios para Vivir los principios en el amor al padre celestial pero sobre todas las cosas y el Amor al prójimo.
Liderar en la iglesia con Jesus como guia en cada corazon para siempre hacer lo mejor por cada aventurero y su familia."
          image="/ideales/img_vision.jpg"
          firstText={false}
        />
        <Card
          className="animate-slide-from-left"
          title="Propósito"
          content={
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-800 mr-2 mt-1">•</span>
                <span>Conducir a los niños a la comprensión de su valor individual y a descubrir y desarrollar sus dones y habilidades espirituales.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-800 mr-2 mt-1">•</span>
                <span>Equiparlos y capacitarlos para una vida de servicio en la iglesia y la comunidad.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-800 mr-2 mt-1">•</span>
                <span>Descubrir sus habilidades dadas por Dios y sepan cómo usarlas para el beneficio propio y para ayudar a los demás.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-800 mr-2 mt-1">•</span>
                <span>Asegurar la integración de los jóvenes en todos los aspectos de la vida y liderazgo de la iglesia.</span>
              </li>
            </ul>
          }
          image="/ideales/img_proposito.jpg"
        />
      </div>
    </>
  );
}
