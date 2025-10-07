"use client";
import Image from "next/image";
import { integrantes } from "@/data/integrantes";
import "./styles.css";
import { useState } from "react";
import { IntegranteDialog } from "./dialog";

export const Hexagon = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCV, setSelectedCV] = useState(null);

  const handleOpenDialog = (cv) => {
    setSelectedCV(cv);
    setIsDialogOpen(true);
  };
  
  return (
    <div class="main">
      <div class="container animate-slide-from-top">
        {integrantes.map((integrante) => (
          <div onClick={() => handleOpenDialog(integrante)}>
            <Image
              src={integrante.main_img}
              alt={integrante.name}
              width={500}
              height={500}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <IntegranteDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Welcome"
        width="max-w-sm"
        integrante={selectedCV}
      />
    </div>
  );
};
