import React from "react";
import ItemLayout from "../ItemLayout";
import ActivitySection from "./activity-section";

const ActivitiesDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Formando Aventureros con Propósito y Alegría
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            En nuestro Club de Aventureros Orión, cada actividad es una
            oportunidad para aprender, crecer y conocer más de Dios. A través de
            juegos, manualidades, naturaleza, valores bíblicos y actividades en
            familia, fortalecemos el carácter de los niños mientras desarrollan
            habilidades para la vida. Cada reunión está llena de entusiasmo,
            amistad y descubrimiento. Participamos en clases progresivas,
            exploramos el mundo creado por Dios y practicamos el servicio a los
            demás de manera sencilla y significativa. ¡Acompáñanos en esta
            aventura donde la fe, la alegría y el crecimiento se viven desde la
            niñez!
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            20+{" "}
            <sub className="font-semibold text-base">Aventureros en Acción</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            14+{" "}
            <sub className="font-semibold text-base">Años sirviendo a Dios</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full row-span-2 flex-col items-start"}>
          <ActivitySection
            title={"Certificados de Logros y Participación 🌟"}
            description={`El Club de Aventureros <strong>ORION</strong> ha demostrado un notable compromiso y excelencia en el cumplimiento de sus objetivos para el año 2025. Los certificados e informes presentados confirman el éxito del club en tres áreas fundamentales: <strong>formación espiritual, servicio y preparación técnica</strong>. Esta base sólida asegura que el club está perfectamente encaminado para enfrentar los desafíos del Camporee.

En el pilar de <strong>crecimiento espiritual y misión</strong>, el club obtuvo un Certificado de Reconocimiento por su Destacada Participación, Preparación, Predicación y Realización de la Semana de Mayordomía Infantil <strong>"UN CORAZÓN AGRADECIDO"</strong>. Este logro subraya la efectividad del club para enseñar principios bíblicos y fomentar el talento evangelístico en sus jóvenes miembros. Adicionalmente, el club participó activamente en las actividades de la Semana del Aventurero bajo el lema <strong>"Viaja con Fe"</strong>, un programa clave que fortalece la fe y la dedicación a la misión, previo al Día Mundial del Aventurero.

En el ámbito de la <strong>preparación y la integración</strong>, el Club ORION se destacó en la <strong>AVENTU-FERIA</strong> de la Zona Sur de Urabá. Esta actividad fue esencial no solo para la integración con otros clubes (como VALDENSES, SOL DE URABA, MIGDAL-OZ, y otros), sino también para la práctica intensiva de las pruebas del boletín. El club demostró habilidad en el Área Bíblica y Espiritual (Devocional, Matutina, Cronología y Orden Bíblico) y en Habilidades Técnicas (Cuadro y Pruebas de Nudos), además de participar en pruebas físicas como Rally y Encostalados, asegurando que directiva y aventureros estén a la vanguardia.

El desempeño del Club ORION hasta la fecha es un testimonio de su dedicación. Con la mira puesta en la <strong>Investidura y el Campamento central del año</strong>, el club ha superado las expectativas en las fases de preparación. Con hitos próximos como la certificación de Grupos Pequeños y la finalización de los requisitos, la Directiva y los Aventureros están listos para demostrar su excelencia. El club no solo asistirá al Camporee, sino que irá con la mentalidad de campeón. <strong>¡El Club ORION es una Promesa que Brilla!</strong>`}
            images={[
              "/actividades/certificados/certificado-1-orion.jpg",
              "/actividades/certificados/certificado-2-orion.jpg",
              "/actividades/certificados/certificado-3-orion.jpg",
              "/actividades/certificados/certificado-4-orion.jpg",
              "/actividades/certificados/certificado-5-orion.jpg",
              "/actividades/certificados/certificado-6-orion.jpg",
              "/actividades/certificados/certificado-7-orion.jpg",
              "/actividades/certificados/certificado-8-orion.jpg",
            ]}
            mainImageStyles="aspect-[16/9] md:aspect-[4/3] "
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default ActivitiesDetails;

