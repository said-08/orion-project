"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => {
  const modalElement = document.getElementById("my-modal");
  
  // Si no existe el elemento, crear el modal directamente en el body
  if (!modalElement) {
    return createPortal(
      <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div
          className="bg-background/90 border border-white/30 border-solid backdrop-blur-[6px]
              py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8
              max-w-sm mx-auto"
        >
          <p className="font-light text-white text-lg">¿Te gustaría reproducir música de fondo?</p>
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={toggle}
              className="px-6 py-3 border border-white/30 border-solid hover:shadow-glass-sm rounded mr-2 bg-blue-600/50 text-white font-medium"
            >
              Sí
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-white/30 border-solid hover:shadow-glass-sm rounded bg-gray-600/50 text-white font-medium"
            >
              No
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  }

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="bg-background/90 border border-white/30 border-solid backdrop-blur-[6px]
            py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8
            max-w-sm mx-auto"
      >
        <p className="font-light text-white text-lg">¿Te gustaría reproducir música de fondo?</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-6 py-3 border border-white/30 border-solid hover:shadow-glass-sm rounded mr-2 bg-blue-600/50 text-white font-medium"
          >
            Sí
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 border border-white/30 border-solid hover:shadow-glass-sm rounded bg-gray-600/50 text-white font-medium"
          >
            No
          </button>
        </div>
      </div>
    </div>,
    modalElement
  );
};

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFirstUserInteraction = async () => {
    const musicConsent = localStorage.getItem("musicConsent");
    if (musicConsent === "true" && !isPlaying && audioRef.current) {
      try {
        // Configurar el audio para dispositivos móviles
        audioRef.current.volume = 0.3; // Volumen más bajo para móviles
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Error al reproducir audio:", error);
        // Si falla el autoplay, no hacer nada - el usuario puede activarlo manualmente
      }
    }

    ["click", "keydown", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  };

  useEffect(() => {
    // Función para verificar y mostrar el modal
    const checkAndShowModal = () => {
      try {
        const consent = localStorage.getItem("musicConsent");
        const consentTime = localStorage.getItem("consentTime");

        // Si no hay consentimiento o ha expirado, mostrar modal
        if (
          !consent ||
          !consentTime ||
          new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 <= new Date()
        ) {
          console.log("Mostrando modal de música - no hay consentimiento válido");
          setShowModal(true);
          return;
        }

        // Si hay consentimiento válido
        setIsPlaying(consent === "true");

        if (consent === "true") {
          ["click", "keydown", "touchstart"].forEach((event) =>
            document.addEventListener(event, handleFirstUserInteraction)
          );
        }
      } catch (error) {
        console.log("Error accediendo a localStorage:", error);
        // Si hay error con localStorage, mostrar modal por defecto
        setShowModal(true);
      }
    };

    // Verificar inmediatamente
    checkAndShowModal();

    // También verificar después de un pequeño delay para asegurar que el DOM esté listo
    const timeoutId = setTimeout(checkAndShowModal, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const toggle = async () => {
    const newState = !isPlaying;
    setIsPlaying(!isPlaying);
    
    if (newState && audioRef.current) {
      try {
        // Configurar el audio para dispositivos móviles
        audioRef.current.volume = 0.3;
        audioRef.current.muted = false;
        
        // Intentar reproducir
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          console.log("Audio iniciado correctamente");
        }
      } catch (error) {
        console.log("Error al reproducir audio:", error);
        setIsPlaying(false); // Revertir el estado si falla
        
        // Mostrar mensaje de error en consola para debugging
        if (error.name === 'NotAllowedError') {
          console.log("Autoplay bloqueado por el navegador");
        } else if (error.name === 'NotSupportedError') {
          console.log("Formato de audio no soportado");
        }
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
      console.log("Audio pausado");
    }
    
    try {
      localStorage.setItem("musicConsent", String(newState));
      localStorage.setItem("consentTime", new Date().toISOString());
    } catch (error) {
      console.log("Error guardando en localStorage:", error);
    }
    
    setShowModal(false);
  };
  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )}

      <audio 
        ref={audioRef} 
        loop 
        preload="metadata"
        playsInline
        muted={false}
      >
        <source src={"/audio/background-audio.mp3"} type="audio/mpeg" />
        Tu navegador no soporta este elemento de audio.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label={"Sound control button"}
        name={"Sound control button"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
