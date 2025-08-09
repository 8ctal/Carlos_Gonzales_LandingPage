"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

type Testimonial = {
  name: string;
  text: string;
  rating: number;
  image?: string; // optional: if missing, show letter avatar
  verified?: boolean;
  date?: string;
  location?: string;
  source?: "doctoralia" | "site";
};

// Real testimonials (Doctoralia)
const testimonials: ReadonlyArray<Testimonial> = [
  {
    name: "María Alejandra Gómez",
    text: "Tuve una excelente experiencia durante mi consulta con el Dr Carlos. Se tomó el tiempo necesario para escucharme, responder todas mis preguntas y explicarme el diagnóstico y tratamiento. Lo recomiendo!",
    rating: 5,
    verified: true,
    date: "8 de junio de 2025",
    location: "Dr. Carlos González, médico internista - consulta virtual • Otro",
    source: "doctoralia",
  },
  {
    name: "Marta Olarte",
    text: "Gracias doctor por la forma tan clara de ayudarme a bajar de peso! Por fin logré entender mi relación con la alimentación y empecé a estar mejor.",
    rating: 5,
    verified: true,
    date: "8 de junio de 2025",
    location: "Centro médico Clínica Bucaramanga • Visita Medicina Interna",
    source: "doctoralia",
  },
  {
    name: "Camila Andre Ribero",
    text: "Lo que más destaco de su atención es su capacidad de escucha, su claridad al explicar cada diagnóstico y tratamiento, y su empatía en momentos en que uno más necesita comprensión. Nunca escatimó tiempo ni esfuerzo para asegurarse de que yo entendiera cada paso del proceso médico y siempre me hizo sentir acompañado en cada etapa.",
    rating: 5,
    verified: true,
    date: "14 de mayo de 2025",
    location: "Centro médico Clínica Bucaramanga • Visita Medicina Interna",
    source: "doctoralia",
  },
];

const getInitial = (fullName: string): string => {
  const trimmed = fullName?.trim() ?? "";
  if (trimmed.length === 0) return "?";
  return trimmed.charAt(0).toUpperCase();
};

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
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-slateGray dark:bg-gray-800 rounded-2xl p-8 relative"
            >
              <div className="absolute -top-6 left-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-700 flex items-center justify-center">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <span className="text-lg font-semibold text-midnight_text dark:text-white">
                      {getInitial(testimonial.name)}
                    </span>
                  )}
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

              {(testimonial.verified || testimonial.date || testimonial.location) && (
                <div className="mt-2 text-xs text-black/60 dark:text-gray-300/80 space-y-1">
                  {testimonial.verified && (
                    <div className="flex items-center gap-1">
                      <Icon icon="solar:shield-check-bold" className="text-success" />
                      <span>Número de teléfono verificado</span>
                    </div>
                  )}
                  {testimonial.date && <div>{testimonial.date}</div>}
                  {testimonial.location && (
                    <div className="opacity-80">{testimonial.location}</div>
                  )}
                </div>
              )}
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

