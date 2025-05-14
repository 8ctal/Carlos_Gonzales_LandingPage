"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    name: "María González",
    image: "/images/testimonial/userone.png",
    text: "El dr. Carlos es un excelente profesional. Su atención es muy detallada y siempre se toma el tiempo necesario para explicar todo claramente.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    image: "/images/testimonial/usertwo.png",
    text: "Muy satisfecho con la atención recibida. El diagnóstico fue preciso y el tratamiento efectivo. Recomiendo ampliamente sus servicios.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    image: "/images/testimonial/userthree.png",
    text: "Excelente doctor, muy profesional y empático. El consultorio es moderno y cómodo. La atención del personal es de primera.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-midnight_text dark:text-white mb-4">
            Lo que dicen mis pacientes
          </h2>
          <p className="text-black/70 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            La satisfacción de mis pacientes es mi mayor orgullo. Conoce sus experiencias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slateGray dark:bg-gray-800 rounded-2xl p-8 relative"
            >
              <div className="absolute -top-6 left-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4 mt-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    icon="solar:star-bold"
                    className="text-primary text-xl"
                  />
                ))}
              </div>

              <p className="text-black/70 dark:text-gray-300 mb-4 italic">
                "{testimonial.text}"
              </p>

              <p className="text-midnight_text dark:text-white font-semibold">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300 text-lg font-medium"
          >
            Agendar una consulta
            <Icon 
              icon="solar:calendar-add-bold"
              className="ml-2 text-xl"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
