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
            ¡Fuerza de Dios, soldados del rey, avanzando hacia la gloria!
          </p>
        </div>
      </div>
      <div className="sm:p-8 space-y-8 w-full flex flex-col items-center justify-center mt-16">
        <Card
          className="animate-slide-from-left"
          title="Misión"
          content="El Club de Guías Mayores G12, fomenta el desarrollo integral y espiritual de hombres y mujeres, altruistas y comprometidos con la proclamación del amor de Cristo por medio del servicio desinteresado a la comunidad. Generando hombres y mujeres activos en predicar el evangelio eterno."
          image="/ideales/img_mision.jpg"
        />
        <Card
          className="animate-slide-from-right"
          title="Visión"
          content="Ser instrumentos en las manos de Dios, que puedan ayudar a suplir las necesidades físicas, espirituales y mentales de las personas a su alrededor poniendo a Dios en primer lugar."
          image="/ideales/img_vision.jpg"
          firstText={false}
        />
        <Card
          className="animate-slide-from-left"
          title="Propósito"
          content="Con la bendición del cielo y un fuerte trabajo colectivo, promover el desarrollo integral de cada persona incentivando a tener y mejorar una relación individual con Dios."
          image="/ideales/img_proposito.jpg"
        />
      </div>
    </>
  );
}
