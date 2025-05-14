"use client";
import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Link from 'next/link';
import TextSlider from './TextSlider';

const About = () => {
  return (
    <section id="about" className="bg-slateGray dark:bg-gray-800 py-20">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="/images/banner/doctorCarlos-Photoroom.png"
                alt="Doctor profile"
                fill
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center 30%',
                  transform: 'scale(1.2)'
                }}
                className="rounded-2xl transition-transform duration-700 group-hover:scale-125"
                priority
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon
                  icon="solar:verified-check-bold"
                  className="text-success text-2xl"
                />
                <p className="text-midnight_text dark:text-white font-semibold">Certificada</p>
              </div>
              <p className="text-black/70 dark:text-gray-300 text-sm">
                Experiencia enmedicina especializada
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-midnight_text dark:text-white mb-6">
              Dr. Carlos González
            </h2>
            <h3 className="text-xl text-primary mb-6">
              Especialista en Medicina Interna
            </h3>
            <p className="text-black/70 dark:text-gray-300 text-lg mb-8">
              Soy médico egresado de la Universidad Autónoma de Bucaramanga, con especialización en Medicina Interna realizada en la Universidad Favaloro - Hospital Universitario Fundación Favaloro (Buenos Aires, Argentina) y subespecialización en Reumatología en la Universidad de Buenos Aires - Hospital Universitario CEMIC.
            </p>

            <TextSlider />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                  <Icon
                    icon="solar:diploma-verified-bold"
                    className="text-primary text-2xl"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-midnight_text dark:text-white mb-2">
                    Educación
                  </h4>
                  <p className="text-black/70 dark:text-gray-300">
                  Universidad Autónoma de Bucaramanga
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                  <Icon
                    icon="solar:hospital-bold"
                    className="text-primary text-2xl"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-midnight_text dark:text-white mb-2">
                    Hospital Afiliado
                  </h4>
                  <p className="text-black/70 dark:text-gray-300">
                    Centro Médico Clinica Bucaramanga
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300 text-lg font-medium"
              >
                Agendar Consulta
                <Icon 
                  icon="solar:calendar-add-bold"
                  className="ml-2 text-xl"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 