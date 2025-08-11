"use client";
import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Link from 'next/link';
import TextSlider from './TextSlider';

const About = () => {
  return (
    <section id="about" className="bg-slate-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative background blob */}
            <motion.div
              aria-hidden
              className="absolute -top-8 -left-8 h-44 w-44 rounded-3xl bg-primary/10 dark:bg-primary/20 blur-2xl"
              animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-secondary/10 dark:bg-secondary/20 blur-2xl"
              animate={{ y: [0, 10, 0], scale: [1.04, 1, 1.04] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

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
            {/* University badge with hover glow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-2 left-1 rounded-xl lg:-left-1 lg:-bottom-16 "
            >
              <div className="relative group/unab">
                <div
                  className="absolute -inset-2 rounded-xl blur-md opacity-0 group-hover/unab:opacity-100 transition-opacity duration-300"
                  aria-hidden
                  style={{ background: "radial-gradient(60% 80% at 30% 50%, rgba(251, 154, 35, 0.9) 0%, rgba(245, 159, 11, 0.95) 60%, transparent 100%)" }}
                />
                <div className="relative bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-md border border-white/40 dark:border-white/10 px-3 py-2 flex items-center gap-3">
                  <Image
                    src="/images/logo/logo-u-vig.png"
                    alt="Universidad Autónoma de Bucaramanga"
                    width={100}
                    height={30}
                    className="object-contain"
                  />
                  <div className="hidden sm:block">
                    <p className="text-md font-semibold text-midnight_text dark:text-white leading-tight">
                      <span className="block">Universidad Autónoma</span>
                      <span className="block">De Bucaramanga</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Specialization institution badge (bottom-right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 rounded-2xl lg:-bottom-20 lg:-right-10 max-w-[260px]"
            >
              <div className="relative group/favaloro">
                <div
                  className="absolute -inset-2 rounded-2xl blur-lg opacity-0 group-hover/favaloro:opacity-100 transition-opacity duration-300"
                  aria-hidden
                  style={{ background: "linear-gradient(90deg, rgba(30,58,138,0.45) 0%, rgba(239,68,68,0.45) 100%)" }}
                />
                <div className="relative bg-white/90 dark:bg-gray-900/85 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/40 dark:border-white/10 flex items-center gap-3">
                  <Image
                    src="/images/logo/LogoUF-horizontal-web.png"
                    alt="Universidad Favaloro"
                    width={180}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
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