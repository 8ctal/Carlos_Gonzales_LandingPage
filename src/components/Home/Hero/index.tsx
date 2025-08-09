"use client";
import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stats = [
  {
    icon: "solar:calendar-mark-bold",
    label: "3+ años",
    sublabel: "de experiencia",
    delay: 0.4
  },
  {
    icon: "solar:shield-check-bold",
    label: "100+",
    sublabel: "pacientes atendidos",
    delay: 0.5
  },
  {
    icon: "solar:heart-bold",
    label: "Atención",
    sublabel: "Presencial",
    delay: 0.6
  }
];

const backgroundSlides = [
  "/images/newsletter/slide6.png",
  "/images/newsletter/slide5.png",
  "/images/newsletter/slide3.jpg",
];

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
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
        <section 
            id="home-section" 
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white to-slateGray dark:from-gray-900 dark:to-gray-800"
        >
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
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
                                    {/* Overlay más fuerte para mejor legibilidad */}
                                    <div className="absolute inset-0 bg-black/60 md:bg-black/40 dark:bg-black/60 md:dark:bg-black/50" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
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
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/5 to-transparent dark:from-black/20 pointer-events-none z-20" />

            <div className="container relative mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-20 z-20">
                <div className={`grid gap-8 items-center transition-all duration-1000 ease-in-out ${
                    currentSlide === 0 
                        ? 'grid-cols-1 lg:grid-cols-12' 
                        : 'grid-cols-1 justify-center max-w-4xl mx-auto'
                }`}>
                    <motion.div 
                        className={`flex flex-col gap-4 sm:gap-6 transition-all duration-1000 ease-in-out ${
                            currentSlide === 0 
                                ? 'order-1 lg:col-span-6 lg:order-1 text-center lg:text-start' 
                                : 'text-center max-w-3xl mx-auto'
                        }`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ 
                            opacity: 1, 
                            x: 0,
                        }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={`flex gap-2 mt-11 lg:mt-10 md:mt-7 flex-wrap transition-all duration-1000 ease-in-out ${
                            currentSlide === 0 
                                ? 'justify-center lg:justify-start' 
                                : 'justify-center'
                        }`}>
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
                                <p className='text-success text-sm lg:text-xl font-semibold'>Consulta personalizada</p>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.25, type: "spring" }}
                                className="bg-primary/10 px-4 py-2 rounded-full flex items-center z-10"
                            >
                                <Icon
                                    icon="solar:map-point-bold"
                                    className="text-primary text-xl inline-block me-2"
                                />
                                <p className='text-primary text-sm lg:text-xl font-semibold'>Bucaramanga, Colombia</p>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className="bg-white/70 dark:bg-gray-800/70 px-4 py-2 rounded-full flex items-center z-10 border border-gray-100 dark:border-gray-700"
                            >
                                <Icon
                                    icon="solar:calendar-mark-bold"
                                    className="text-midnight_text dark:text-white text-xl inline-block me-2"
                                />
                                <p className='text-midnight_text dark:text-white text-sm font-medium'>Citas disponibles esta semana</p>
                            </motion.div>
                        </div>
                        <div className={`space-y-3 transition-all duration-1000 ease-in-out ${
                            currentSlide === 0 ? 'text-center lg:text-start' : 'text-center'
                        }`}>
                            <motion.h1 
                                className='text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Dr. Carlos González
                            </motion.h1>
                            <motion.h2 
                                className='text-primary dark:text-primary text-xl sm:text-2xl lg:text-3xl font-semibold drop-shadow-lg'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Médico Internista
                            </motion.h2>
                            <motion.p 
                                className={`text-white/90 dark:text-gray-200 text-base sm:text-lg drop-shadow-lg transition-all duration-1000 ease-in-out ${
                                    currentSlide === 0 
                                        ? 'max-w-xl mx-auto lg:mx-0' 
                                        : 'max-w-2xl mx-auto'
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                Especialista en diagnóstico y tratamiento de enfermedades en adultos, con enfoque en medicina preventiva y cuidado integral del paciente.
                            </motion.p>
                        </div>

                        <motion.div 
                            className={`relative pt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 transition-all duration-1000 ease-in-out ${
                                currentSlide === 0 ? 'justify-center lg:justify-start' : 'justify-center'
                            }`}
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
                            <a
                                href="https://wa.me/573208339347"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-midnight_text border border-green-500 py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 text-base sm:text-lg font-medium group hover:transform hover:scale-105 shadow-lg hover:shadow-xl dark:bg-gray-800 dark:text-white"
                            >
                                <span>WhatsApp</span>
                                <Icon 
                                    icon="logos:whatsapp-icon" 
                                    className="text-xl" 
                                />
                            </a>
                        </motion.div>

                        {/* Doctoralia Rating Strip */}
                        <motion.div
                            className={`flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 p-3 sm:p-4 rounded-xl backdrop-blur-sm shadow-lg border border-gray-100 dark:border-gray-700 mt-2 transition-all duration-1000 ease-in-out ${
                                currentSlide === 0 ? 'justify-center lg:justify-start' : 'justify-center'
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <Icon icon="simple-icons:doctoralia" className="text-[#00B5DD] text-2xl" />
                            <div className="flex items-center gap-1">
                                <Icon icon="solar:star-bold" className="text-yellow-400 text-xl" />
                                <Icon icon="solar:star-bold" className="text-yellow-400 text-xl" />
                                <Icon icon="solar:star-bold" className="text-yellow-400 text-xl" />
                                <Icon icon="solar:star-bold" className="text-yellow-400 text-xl" />
                                <Icon icon="solar:star-bold" className="text-yellow-400 text-xl" />
                            </div>
                            <p className="text-sm sm:text-base text-midnight_text dark:text-white">
                                5 en Doctoralia · 100+ opiniones
                            </p>
                        </motion.div>
                        
                        {/* Stats Section */}
                        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 transition-all duration-1000 ease-in-out ${
                            currentSlide === 0 ? '' : 'max-w-4xl mx-auto'
                        }`}>
                            {stats.map((stat, index) => (
                                <motion.div 
                                    key={index}
                                    className='flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 p-3 sm:p-4 rounded-xl backdrop-blur-sm shadow-lg hover:transform hover:scale-105 transition-all duration-300 justify-center sm:justify-start border border-gray-100 dark:border-gray-700'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: stat.delay, duration: 0.6 }}
                                >
                                    <div className="bg-primary/10 dark:bg-primary/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                                        <Icon
                                            icon={stat.icon}
                                            className="text-primary text-xl sm:text-2xl"
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-sm sm:text-base font-semibold text-midnight_text dark:text-white'>{stat.label}</p>
                                        <p className='text-xs sm:text-sm text-black/70 dark:text-gray-300'>{stat.sublabel}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
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
    )
}

export default Hero;