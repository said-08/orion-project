"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { MainDialog } from "../MainDialog";

export const IntegranteDialog = ({ isOpen, onClose, className = "", integrante }) => {
  if (!isOpen) return null;

  const renderField = (label, value) => (
    <div className="grid grid-cols-3 border-b border-x-slate-700 py-2">
      <div className="col-span-1 text-blue-400 font-semibold">{label}:</div>
      <div className="col-span-2 text-white">{value}</div>
    </div>
  );

  return (
    <MainDialog isOpen={isOpen} className={className}>
      <div className="flex justify-between items-center p-4 border-b sticky top-0 z-10">
        <h2 className="text-2xl font-semibold text-white">{integrante.name}</h2>
        <button
          onClick={onClose}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      <div className="p-4 text-white flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-4 flex justify-center">
          <Image
            src={integrante.sec_img}
            alt={integrante.name}
            width={500}
            height={500}
            className="w-full max-w-[300px] md:max-w-none h-auto rounded-lg object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-4 md:overflow-y-auto">
          {renderField("Rol", integrante.role)}
          {renderField("Edad", integrante.edad)}
          {renderField("Clase", integrante.clase)}
          {renderField("Iglesia", integrante.iglesia)}
          {renderField("Club", integrante.club)}
          {renderField("Identificación", integrante.identificacion)}
          {renderField("Dirección", integrante.direccion)}
          {renderField("Teléfono", integrante.telefono)}
          {renderField("Tipo de Sangre", integrante.tipoSangre)}
          {renderField("EPS", integrante.eps)}
          {renderField("Alergias", integrante.alergias)}
          {renderField("Bautizado", integrante.bautizado)}
          {renderField("Versículo", integrante.versiculo)}

          {integrante.padres && integrante.padres !== "" && (
            <>
              <div className="mt-6 mb-2 border-b-2 border-blue-400 pb-2">
                <h3 className="text-xl font-bold text-blue-400">
                  Información de Padres
                </h3>
              </div>
              {renderField("Padres", integrante.padres)}
            </>
          )}
        </div>
      </div>
    </MainDialog>
  );
};
