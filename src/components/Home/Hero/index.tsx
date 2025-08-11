"use client";
import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Stat = {
  icon: string;
  label: string;
  sublabel: string;
  delay: number;
  countTo?: number;
  suffix?: string;
};

const stats: Stat[] = [
  {
    icon: "solar:calendar-mark-bold",
    label: "Años",
    sublabel: "de experiencia",
    delay: 0.4,
    countTo: 15,
    suffix: "+"
  },
  {
    icon: "solar:shield-check-bold",
    label: "Pacientes",
    sublabel: "atendidos",
    delay: 0.5,
    countTo: 2000,
    suffix: "+"
  },
  {
    icon: "solar:heart-bold",
    label: "Atención",
    sublabel: "Presencial y virtual",
    delay: 0.6
  }
];

function easeOutCubic(t: number): number { return 1 - Math.pow(1 - t, 3); }

function CountUp({ to, durationMs = 1200 }: { to: number; durationMs?: number }): JSX.Element {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(progress);
      setValue(Math.round(eased * to));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [to, durationMs]);

  return <span>{value}</span>;
}

const backgroundSlides = [
  "/images/newsletter/slide6.png",
  "/images/newsletter/slide5.png",
  "/images/banner/bannerAtent.jpg",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // No-op effect reserved for future responsive needs
    return () => undefined;
  }, []);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "ease-in-out",
    draggable: false,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <>
      <section
        id="home-section"
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white to-slateGray dark:from-gray-900 dark:to-gray-800"
      >
        {/* Background Slider */}
        <div className="absolute inset-0 z-0" >
          <div className="w-full h-full">
            <Slider {...sliderSettings}>
              {backgroundSlides.map((src, idx) => (
                <div key={idx} className="outline-none">
                  <div className="relative w-full h-screen">
                    <Image
                      src={src}
                      alt={`Fondo ${idx + 1}`}
                      fill
                      priority={idx === 0}
                      sizes="100vw"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      className="w-full h-full"
                    />
                    {/* Overlay para mejor legibilidad */}
                    <div className="absolute inset-0 bg-black/60 md:bg-black/50 dark:bg-black/60 md:dark:bg-black/50" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="container relative mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-20 z-20">
          <div className="grid gap-8 items-center grid-cols-1 lg:grid-cols-12 transition-all duration-1000 ease-in-out">
            <motion.div
              className="flex flex-col gap-10 order-1 lg:col-span-6 lg:order-1 text-center lg:text-start transition-all duration-1000 ease-in-out"
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex gap-2 mt-8 md:mt-6 flex-wrap justify-center lg:justify-start">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring" }}
                  className="bg-success/10 px-4 py-2 rounded-full flex items-center"
                >
                  <Icon icon="solar:verified-check-bold" className="text-success text-xl inline-block me-2" />
                  <p className='text-success text-sm lg:text-base font-semibold'>Consulta personalizada</p>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="bg-primary/10 px-4 py-2 rounded-full flex items-center"
                >
                  <Icon icon="solar:map-point-bold" className="text-red-500 text-xl inline-block me-2" />
                  <p className='text-white text-sm lg:text-base font-semibold'>Bucaramanga, Colombia</p>
                </motion.div>
              </div>

              <div className="space-y-3 text-center lg:text-start">
                <motion.h1
                  className='text-white whitespace-nowrap text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-tight tracking-tight'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <span className="block">Dr. Carlos Alfonso</span>
                  <span className="block">González Gómez</span>
                </motion.h1>
                <motion.h2
                  className='text-white text-lg sm:text-xl lg:text-2xl font-semibold uppercase'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Médico Internista
                </motion.h2>
                <motion.p
                  className="text-white/90 dark:text-gray-200 text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  Especialista en diagnóstico y tratamiento de enfermedades en adultos, con enfoque en medicina preventiva y cuidado integral del paciente.
                </motion.p>
              </div>

              <motion.div
                className="pt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://www.doctoralia.co/carlos-alfonso-gonzalez-gomez-2/internista/bucaramanga?doctor_id=112456#/opinion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white py-3 sm:py-3.5 px-6 sm:px-7 rounded-full hover:bg-secondary transition-all duration-300 text-base sm:text-lg font-medium group hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Agenda tu cita</span>
                  <Icon icon="simple-icons:doctoralia" className="text-white text-xl transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/573208339347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-midnight_text border border-green-500 py-3 sm:py-3.5 px-6 sm:px-7 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 text-base sm:text-lg font-medium group hover:transform hover:scale-105 shadow-lg hover:shadow-xl dark:bg-gray-800 dark:text-white"
                >
                  <span>WhatsApp</span>
                  <Icon icon="logos:whatsapp-icon" className="text-xl" />
                </a>
              </motion.div>
            </motion.div>

            {/* Imagen del doctor - solo se muestra en el primer slide con transición suave */}
            {currentSlide === 0 && (
              <motion.div
                className='order-2 lg:col-span-6 lg:order-2 relative'
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: 50
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div className="relative w-full max-w-[600px] mx-auto lg:max-w-[800px] xl:max-w-none aspect-[3/4] translate-y-4 lg:translate-y-0">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear"
                    }}
                    className="relative w-full h-full"
                  >
                    {/* Sutil resplandor detrás de la imagen */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10 rounded-full blur-2xl transform scale-110" />

                    {/* Imagen principal */}
                    <div className="relative w-full h-full lg:scale-125 lg:translate-y-8">
                      <Image
                        src="/images/banner/newBanner-Photoroom.png"
                        alt="Dr. Carlos González - Médico Internista"
                        fill
                        priority
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center 100%'
                        }}
                        className="select-none"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Mini sección de estadísticas */}
      <section className="relative z-30">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 -mt-10 md:-mt-16">
          <motion.div
            className="rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 shadow-xl px-4 py-5 sm:px-8 sm:py-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center sm:justify-start gap-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 p-4 sm:p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                >
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 sm:p-4 rounded-full flex-shrink-0">
                    <Icon icon={stat.icon} className="text-primary text-2xl sm:text-3xl" />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-2xl sm:text-3xl font-extrabold text-midnight_text dark:text-white leading-none'>
                      {stat.countTo !== undefined ? <CountUp to={stat.countTo} /> : stat.label}
                      {stat.suffix ? stat.suffix : ''}
                    </p>
                    <p className='text-xs sm:text-sm text-black/70 dark:text-gray-300 mt-1'>
                      {stat.label} {stat.sublabel}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero;