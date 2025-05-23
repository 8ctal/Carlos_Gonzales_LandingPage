"use client";
import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    icon: "solar:calendar-mark-bold",
    text: "Horarios flexibles",
    delay: 0.4
  },
  {
    icon: "solar:shield-check-bold",
    text: "Atención profesional",
    delay: 0.5
  },
  {
    icon: "solar:heart-bold",
    text: "Cuidado integral",
    delay: 0.6
  }
];

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section 
            id="home-section" 
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white to-slateGray dark:from-gray-900 dark:to-gray-800"
        >
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Patrón de puntos */}
                <div className="absolute w-full h-full opacity-5 dark:opacity-10">
                    <div className="absolute inset-0" 
                         style={{
                             backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
                             backgroundSize: '40px 40px'
                         }}
                    />
                </div>
                
                {/* Formas onduladas */}
                <motion.div
                    className="absolute -top-48 -right-48 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div
                    className="absolute -bottom-48 -left-48 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            {/* Sombra unificada para toda la sección inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/5 to-transparent dark:from-black/20 pointer-events-none" />

            <div className="container relative mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
                    <motion.div 
                        className='lg:col-span-6 flex flex-col gap-4 sm:gap-6 order-2 lg:order-1'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='flex gap-2 justify-center lg:justify-start mt-4 lg:mt-0'>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="bg-success/10 px-4 py-2 rounded-full flex items-center z-10"
                            >
                                <Icon
                                    icon="solar:verified-check-bold"
                                    className="text-success text-xl inline-block me-2"
                                />
                                <p className='text-success text-sm font-semibold'>Medicina Interna</p>
                            </motion.div>
                        </div>
                        <div className="space-y-3 text-center lg:text-start">
                            <motion.h1 
                                className='text-midnight_text dark:text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Dr. Carlos González
                            </motion.h1>
                            <motion.h2 
                                className='text-primary dark:text-primary text-xl sm:text-2xl lg:text-3xl font-semibold'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Médico Internista
                            </motion.h2>
                            <motion.p 
                                className='text-black/70 dark:text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                Especialista en diagnóstico y tratamiento de enfermedades en adultos, con enfoque en medicina preventiva y cuidado integral del paciente.
                            </motion.p>
                        </div>

                        <motion.div 
                            className="relative pt-4 flex justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <a 
                                href="https://www.doctoralia.co/carlos-alfonso-gonzalez-gomez-2/internista/bucaramanga?doctor_id=112456#/opinion"
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 bg-primary text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-secondary transition-all duration-300 text-base sm:text-lg font-medium group hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <span>Agenda tu cita</span>
                                <Icon 
                                    icon="simple-icons:doctoralia" 
                                    className="text-white text-xl transition-transform group-hover:translate-x-1" 
                                />
                            </a>
                        </motion.div>
                        
                        {/* Features Section */}
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8'>
                            {features.map((feature, index) => (
                                <motion.div 
                                    key={index}
                                    className='flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 p-3 sm:p-4 rounded-xl backdrop-blur-sm shadow-lg hover:transform hover:scale-105 transition-all duration-300 justify-center sm:justify-start border border-gray-100 dark:border-gray-700'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: feature.delay, duration: 0.6 }}
                                >
                                    <div className="bg-primary/10 dark:bg-primary/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                                        <Icon
                                            icon={feature.icon}
                                            className="text-primary text-xl sm:text-2xl"
                                        />
                                    </div>
                                    <p className='text-sm sm:text-base font-medium text-midnight_text dark:text-white'>{feature.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div 
                        className='lg:col-span-6 order-1 lg:order-2 relative'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
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
                </div>
            </div>
        </section>
    )
}

export default Hero;
