import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Inicio", href: "/" },
  { 
    label: "Servicios", 
    href: "/#services",
    submenu: [
      { label: "Consulta General", href: "/#general" },
      { label: "Especialidades", href: "/#specialties" },
      { label: "Procedimientos", href: "/#procedures" }
    ]
  },
  { label: "Sobre mí", href: "/#about" },
  { label: "Experiencia", href: "/#experience" },
  { label: "Testimonios", href: "/#testimonials" },
  { label: "Contacto", href: "/#contact" },
];
