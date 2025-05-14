"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const texts = [
  "Mi enfoque se centra en proporcionar una atención médica integral y personalizada, considerando cada paciente como único.",
  "Creo en la importancia de establecer una relación médico-paciente basada en la confianza y la comunicación efectiva.",
  "Me mantengo actualizado con los últimos avances médicos para ofrecer los mejores tratamientos disponibles.",
  "Trabajo en colaboración con otros especialistas para garantizar un cuidado completo y coordinado de la salud.",
];

const TextSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-24 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-black/70 dark:text-gray-300 text-lg absolute w-full"
        >
          {texts[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default TextSlider; 