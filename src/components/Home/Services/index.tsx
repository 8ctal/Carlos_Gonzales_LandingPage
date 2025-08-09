"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Link from "next/link";
import FixedBgSection from "@/components/Section/FixedBgSection";

const conditions: ReadonlyArray<string> = [
  "Evaluación prequirúrgica",
  "Hipertensión arterial",
  "Diabetes mellitus",
  "Obesidad",
  "Dislipidemia",
  "Hipotiroidismo",
  "Hipertiroidismo",
  "Dolor abdominal",
  "Enfermedad hepática",
  "Insuficiencia renal aguda y crónica",
  "Pérdida no deseada de peso",
  "Gastritis aguda y crónica",
  "Dolor articular",
  "Fibromialgia",
  "Lupus eritematoso",
  "Arritmias",
  "Anticoagulación",
  "Embolia pulmonar / Trombosis venosa profunda",
];

const Services = () => {
  return (
    <FixedBgSection id="services" className="pt-24 pb-16" innerClassName="py-12" topWave>
      {/* Light mode grid */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl dark:hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.3px 1.3Spx, rgba(30, 68, 240, 0.96) 1.0px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "22px 22px", "0px 0px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      {/* Dark mode grid */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.22) 1.5px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "22px 22px", "0px 0px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-1/3 h-64 w-2/3 -z-10 rotate-12 bg-gradient-to-r from-transparent via-primary/15 to-transparent dark:via-primary/25 blur-2xl"
        animate={{ x: ["-20%", "120%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-4 py-1.5 mb-4"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm font-semibold">Consulta presencial</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-semibold text-midnight_text dark:text-white">
            Atención especializada para tus necesidades
          </h2>
          <p className="mt-3 text-black/80 dark:text-gray-200 text-lg">
            Evalúo, diagnostico y trato principalmente estas condiciones en adultos, con enfoque integral.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300 text-base font-medium shadow-lg hover:shadow-xl"
            >
              Agendar una cita
              <Icon icon="solar:calendar-add-bold" className="ml-2 text-lg" />
            </Link>
            <a
              href="https://wa.me/573208339347"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-colors duration-300 text-base font-medium shadow-lg hover:shadow-xl dark:text-green-400"
            >
              WhatsApp
              <Icon icon="logos:whatsapp-icon" className="ml-2 text-lg" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative">
            {/* Sweep highlight over grid */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10 blur-2xl"
              animate={{ x: ["-10%", "130%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
              {conditions.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.02 * idx }}
                  className="group relative overflow-hidden rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/40 dark:border-white/10 p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                      <Icon icon="solar:check-circle-bold" className="text-primary text-lg" />
                    </div>
                    <p className="text-midnight_text dark:text-white text-base font-medium leading-snug">
                      {item}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 mx-auto max-w-3xl rounded-2xl bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm p-6 text-center border border-white/40 dark:border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-black/80 dark:text-gray-100">
            Si tienes dudas sobre tus síntomas o no ves tu diagnóstico listado, con gusto te orientaré durante la consulta.
          </p>
        </motion.div>
      </div>
    </FixedBgSection>
  );
};

export default Services; 