"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: "tabler:brand-facebook",
    href: "#",
    color: "hover:text-[#1877F2]"
  },
  {
    icon: "tabler:brand-twitter",
    href: "#",
    color: "hover:text-[#1DA1F2]"
  },
  {
    icon: "tabler:brand-instagram",
    href: "#",
    color: "hover:text-[#E4405F]"
  },
  {
    icon: "tabler:brand-linkedin",
    href: "#",
    color: "hover:text-[#0A66C2]"
  }
];

const Footer = () => {
  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary dark:from-secondary dark:to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '30px 30px' }}></div>
      </div>

      <motion.div 
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-16 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerAnimation}
      >
        <motion.div 
          className="flex flex-col items-center mb-12"
          variants={itemAnimation}
        >
          <Logo />
          <p className="mt-4 text-white/80 text-center max-w-md">
            Comprometidos con su salud y bienestar, brindando atención médica especializada y personalizada.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={containerAnimation}
        >
          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Icon icon="solar:map-point-bold" className="text-2xl" />
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-white/80 hover:text-white transition-colors duration-300">
                <Icon icon="solar:phone-bold" className="text-lg mt-1" />
                <a href="tel:3208339347" className="hover:underline">320 8339347</a>
              </li>
              <li className="flex items-start gap-2 text-white/80 hover:text-white transition-colors duration-300">
                <Icon icon="solar:letter-bold" className="text-lg mt-1" />
                <a href="mailto:dr.gonzalez.mir@gmail.com" className="hover:underline">dr.gonzalez.mir@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-white/80 hover:text-white transition-colors duration-300">
                <Icon icon="solar:map-point-bold" className="text-lg mt-1" />
                <address className="not-italic">
                  Calle 54 # 33 - 45 Cons 404, Centro médico Clinica Bucaramanga
                </address>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Icon icon="solar:clock-circle-bold" className="text-2xl" />
              Horario
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-white/80">
                <span>Lunes - Viernes</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-white/80">
                <span>Sábado</span>
                <span>9:00 - 14:00</span>
              </li>
              <li className="flex justify-between text-white/80">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Icon icon="solar:link-circle-bold" className="text-2xl" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <Icon icon="solar:arrow-right-bold" className="text-lg transition-transform group-hover:translate-x-1" />
                  Servicios
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <Icon icon="solar:arrow-right-bold" className="text-lg transition-transform group-hover:translate-x-1" />
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <Icon icon="solar:arrow-right-bold" className="text-lg transition-transform group-hover:translate-x-1" />
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="https://www.doctoralia.co/carlos-alfonso-gonzalez-gomez-2/internista/bucaramanga?doctor_id=112456#/opinion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <Icon icon="solar:arrow-right-bold" className="text-lg transition-transform group-hover:translate-x-1" />
                  <span>Doctoralia</span>
                  <Icon icon="solar:arrow-right-up-linear" className="text-lg opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemAnimation}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Icon icon="solar:share-circle-bold" className="text-2xl" />
              Síguenos
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`text-white/80 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={social.icon} className="text-2xl" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-white/10 pt-8 text-center"
          variants={itemAnimation}
        >
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Dr. Carlos González. Todos los derechos reservados.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
