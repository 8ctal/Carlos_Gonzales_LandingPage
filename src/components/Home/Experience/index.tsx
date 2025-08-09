"use client";
import Image from "next/image";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TruestedCompanies } from "../../../../app/api/data";
import { motion } from "framer-motion";

interface ExperiencePhoto {
  imgSrc: string;
  title: string;
  subtitle: string;
}

const experiencePhotos: ReadonlyArray<ExperiencePhoto> = [
  {
    imgSrc: "/images/testimonial/doctorCarlos.jpg",
    title: "Consulta presencial",
    subtitle: "Atención directa al paciente",
  },
  {
    imgSrc: "/images/newsletter/slide3.jpg",
    title: "Evaluación clínica",
    subtitle: "Diagnóstico integral",
  },
  {
    imgSrc: "/images/newsletter/slide4.jpg",
    title: "Controles de seguimiento",
    subtitle: "Plan de manejo personalizado",
  },
  {
    imgSrc: "/images/newsletter/slide5.png",
    title: "Atención continua",
    subtitle: "Prevención y educación",
  },
  {
    imgSrc: "/images/newsletter/slide6.png",
    title: "Trabajo interdisciplinario",
    subtitle: "Coordinación con especialistas",
  },
];

const logoSettings: Settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 640, settings: { slidesToShow: 2 } },
  ],
};

const photoSettings: Settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const Experience = () => {
  return (
    <section id="experience" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight_text dark:text-white">
            Experiencia
          </h2>
          <p className="mt-3 text-black/70 dark:text-gray-300 text-lg">
            Instituciones y experiencias que respaldan mi práctica clínica
          </p>
        </motion.div>

        {/* Logos carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-slateGray/60 dark:bg-gray-800/60 p-6 backdrop-blur-sm"
        >
          <Slider {...logoSettings}>
            {TruestedCompanies.map((item, i) => (
              <div key={i} className="px-4">
                <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                  <Image src={item.imgSrc} alt={`logo-${i}`} width={140} height={40} />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Photos slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Slider {...photoSettings}>
            {experiencePhotos.map((exp) => (
              <div key={exp.imgSrc} className="px-3">
                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow hover:shadow-lg transition-shadow">
                  <div className="relative w-full h-64">
                    <Image
                      src={exp.imgSrc}
                      alt={exp.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-90" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold drop-shadow">{exp.title}</h3>
                    <p className="text-white/90 text-sm">{exp.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
