"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

const contactInfo = [
  {
    icon: "solar:map-point-bold",
    title: "Dirección",
    info: "Calle 54 # 33 - 45 Cons 404, Centro médico Clinica Bucaramanga",
    link: "https://maps.google.com/?q=Calle+54+%23+33+-+45+Cons+404,+Centro+médico+Clinica+Bucaramanga"
  },
  {
    icon: "solar:phone-bold",
    title: "Teléfono",
    info: "320 8339347",
    link: "https://wa.me/573208339347"
  },
  {
    icon: "solar:letter-bold",
    title: "Email",
    info: "dr.gonzalez.mir@gmail.com",
    link: "mailto:dr.gonzalez.mir@gmail.com"
  }
];

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slateGray dark:bg-gray-800 py-20">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-midnight_text dark:text-white mb-4">
            Contáctame
          </h2>
          <p className="text-black/70 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Estoy aquí para atenderle. No dude en contactarme para agendar una cita o hacer una consulta
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg text-center group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 dark:bg-primary/20 rounded-full mb-3 sm:mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                <Icon icon={info.icon} className="text-primary text-xl sm:text-2xl" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-midnight_text dark:text-white mb-2">
                {info.title}
              </h3>
              <a 
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-black/70 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center justify-center gap-2 group"
              >
                <span>{info.info}</span>
                {info.title === "Dirección" && (
                  <Icon icon="solar:map-arrow-right-bold" className="text-base sm:text-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
                {info.title === "Teléfono" && (
                  <Icon icon="logos:whatsapp-icon" className="text-base sm:text-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
                {info.title === "Email" && (
                  <Icon icon="solar:arrow-right-up-linear" className="text-base sm:text-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <motion.a
            href="https://www.doctoralia.co/carlos-alfonso-gonzalez-gomez-2/internista/bucaramanga?doctor_id=112456#/opinion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group w-full sm:w-auto"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon icon="simple-icons:doctoralia" className="text-[#00B5DD] text-2xl sm:text-3xl mb-2 sm:mb-0" />
            <span className="text-lg sm:text-xl font-semibold text-midnight_text dark:text-white text-center sm:text-left">Agenda tu cita en Doctoralia</span>
            <Icon icon="solar:arrow-right-up-linear" className="text-primary text-xl sm:text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-8 shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-midnight_text dark:text-white mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "El nombre es requerido" })}
                    className={`w-full px-4 py-3 rounded-lg bg-slateGray dark:bg-gray-800 border-0 focus:ring-2 focus:ring-primary dark:text-white ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                    placeholder="Ingrese su nombre"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-midnight_text dark:text-white mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { 
                      required: "El email es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido"
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-lg bg-slateGray dark:bg-gray-800 border-0 focus:ring-2 focus:ring-primary dark:text-white ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                    placeholder="Ingrese su email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-midnight_text dark:text-white mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", { required: "El mensaje es requerido" })}
                    className={`w-full px-4 py-3 rounded-lg bg-slateGray dark:bg-gray-800 border-0 focus:ring-2 focus:ring-primary dark:text-white ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                    placeholder="¿En qué podemos ayudarte?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                    Mensaje enviado exitosamente. Nos pondremos en contacto pronto.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                    Hubo un error al enviar el mensaje. Por favor intente nuevamente.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary text-white py-3 px-6 rounded-lg transition-colors duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-secondary'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Icon icon="eos-icons:loading" className="animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-md">
              <h3 className="text-base sm:text-lg font-semibold text-midnight_text dark:text-white mb-4">
                Horario de atención
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm sm:text-base text-black/70 dark:text-gray-300">
                  <span>Lunes - Viernes</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base text-black/70 dark:text-gray-300">
                  <span>Sábado</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base text-black/70 dark:text-gray-300">
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 