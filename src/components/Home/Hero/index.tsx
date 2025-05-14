"use client";
import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

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
    return (
        <section id="home-section" className='bg-slateGray dark:bg-gray-900 pt-32 pb-20'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
                    <motion.div 
                        className='col-span-6 flex flex-col gap-6'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Icon
                                icon="solar:verified-check-bold"
                                className="text-success text-xl inline-block me-2"
                            />
                            <p className='text-success text-sm font-semibold text-center lg:text-start'>Medicina Interna</p>
                        </div>
                        <div className="space-y-3">
                            <h1 className='text-midnight_text dark:text-white text-5xl sm:text-6xl font-bold leading-tight'>
                                Dr. Carlos González
                            </h1>
                            <h2 className='text-primary dark:text-primary text-2xl sm:text-3xl font-semibold'>
                                Médico Internista
                            </h2>
                            <p className='text-black/70 dark:text-gray-300 text-lg max-w-xl'>
                                Especialista en diagnóstico y tratamiento de enfermedades en adultos, con enfoque en medicina preventiva y cuidado integral del paciente.
                            </p>
                        </div>

                        <motion.div 
                            className="relative pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <a 
                                href="https://www.doctoralia.co/carlos-alfonso-gonzalez-gomez-2/internista/bucaramanga?doctor_id=112456#/opinion"
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 bg-primary text-white py-4 px-8 rounded-full hover:bg-secondary transition-all duration-300 text-lg font-medium group hover:transform hover:scale-105"
                            >
                                <span>Agenda tu cita</span>
                                <Icon 
                                    icon="simple-icons:doctoralia" 
                                    className="text-white text-xl transition-transform group-hover:translate-x-1" 
                                />
                            </a>
                        </motion.div>
                        
                        {/* Features Section */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-8'>
                            {features.map((feature, index) => (
                                <motion.div 
                                    key={index}
                                    className='flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm shadow-lg hover:transform hover:scale-105 transition-all duration-300'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: feature.delay, duration: 0.6 }}
                                >
                                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full flex-shrink-0">
                                        <Icon
                                            icon={feature.icon}
                                            className="text-primary text-2xl"
                                        />
                                    </div>
                                    <p className='text-sm sm:text-base font-medium text-midnight_text dark:text-white'>{feature.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div 
                        className='col-span-6'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-full aspect-[3/4]">
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.1 }}
                                transition={{ 
                                    duration: 20,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "linear"
                                }}
                                className="absolute inset-0"
                                style={{
                                    filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.1))',
                                    mixBlendMode: 'multiply'
                                }}
                            >
                                <Image 
                                    src="/images/banner/newBanner-Photoroom.png" 
                                    alt="Dr. Carlos González - Médico Internista" 
                                    fill
                                    priority
                                    style={{
                                        objectFit: 'contain',
                                        objectPosition: 'center 20%'
                                    }}
                                    className="select-none"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
