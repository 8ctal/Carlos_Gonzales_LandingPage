"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: "solar:stethoscope-bold",
    title: "Consulta General",
    description: "Evaluación integral de su salud con atención personalizada y enfoque preventivo.",
    id: "general",
    details: "Nuestro servicio de consulta general ofrece una evaluación completa de su salud, incluyendo exámenes físicos, diagnóstico y tratamiento de condiciones comunes."
  },
  {
    icon: "solar:heart-pulse-bold",
    title: "Especialidades",
    description: "Atención especializada en diferentes áreas de la medicina para un cuidado completo.",
    id: "specialties",
    details: "Contamos con especialistas en cardiología, neurología, endocrinología y otras áreas para brindarle la atención específica que necesita."
  },
  {
    icon: "solar:hospital-bold",
    title: "Procedimientos",
    description: "Procedimientos médicos realizados con la más alta tecnología y estándares de calidad.",
    id: "procedures",
    details: "Realizamos diversos procedimientos médicos con equipos de última generación y siguiendo los más altos estándares de seguridad y calidad."
  },
  {
    icon: "solar:calendar-mark-bold",
    title: "Citas Online",
    description: "Reserve su cita de manera fácil y rápida a través de nuestro sistema en línea.",
    id: "appointments",
    details: "Nuestro sistema de citas en línea le permite programar su consulta de manera conveniente, eligiendo el horario que mejor se adapte a su agenda."
  }
];

const Services = () => {
  return (
    <>
      <section id="services" className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-midnight_text dark:text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-black/70 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios médicos especializados para cuidar de su salud y bienestar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slateGray dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon 
                    icon={service.icon}
                    className="text-primary text-3xl"
                  />
                </div>
                <h3 className="text-xl font-semibold text-midnight_text dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-black/70 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <Link 
                  href={`#${service.id}`}
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300"
                >
                  Saber más
                  <Icon 
                    icon="solar:arrow-right-bold"
                    className="ml-2"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300 text-lg font-medium"
            >
              Agendar una cita
              <Icon 
                icon="solar:calendar-add-bold"
                className="ml-2 text-xl"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`py-16 ${index % 2 === 0 ? 'bg-slateGray dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}
        >
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="bg-primary/10 dark:bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon 
                  icon={service.icon}
                  className="text-primary text-4xl"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-midnight_text dark:text-white mb-6">
                {service.title}
              </h2>
              <p className="text-black/70 dark:text-gray-300 text-lg mb-8">
                {service.details}
              </p>
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300 text-lg font-medium"
              >
                Agendar una cita
                <Icon 
                  icon="solar:calendar-add-bold"
                  className="ml-2 text-xl"
                />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Services; 