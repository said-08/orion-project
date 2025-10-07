import {
  BookOpenText,
  CalendarCheck2,
  Blocks,
  SquareUserRound,
  ClipboardCheck,
} from "lucide-react";

export const BtnList = [
  {
    label: "Nuestra historia",
    link: "/nuestra-historia",
    icon: <BookOpenText className="w-full h-auto" strokeWidth={1.5} />,
    newTab: false,
  },
  {
    label: "Nuestros ideales",
    link: "/nuestros-ideales",
    icon: <ClipboardCheck className="w-full h-auto" strokeWidth={1.5} />,
    newTab: false,
  },
  {
    label: "Hojas de vida",
    link: "/hojas-vida",
    icon: <SquareUserRound className="w-full h-auto" strokeWidth={1.5} />,
    newTab: false,
  },
  {
    label: "Cronograma de actividades",
    link: "/cronograma-actividades",
    icon: <CalendarCheck2 className="w-full h-auto" strokeWidth={1.5} />,
    newTab: false,
  },
  {
    label: "Actividades",
    link: "/actividades",
    icon: <Blocks className="w-full h-auto" strokeWidth={1.5} />,
    newTab: false,
  },
];
