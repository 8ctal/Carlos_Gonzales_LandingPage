"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HeaderItem } from "@/types/menu";
import { motion, AnimatePresence } from "framer-motion";

interface MobileHeaderLinkProps {
  item: HeaderItem;
  onClick?: () => void;
}

const MobileHeaderLink = ({ item, onClick }: MobileHeaderLinkProps) => {
  const pathUrl = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; // Altura aproximada del header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (path === pathUrl || path === '/') {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          const headerHeight = 80; // Altura aproximada del header
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (item.submenu) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else {
      e.preventDefault();
      scrollToSection(href);
      if (onClick) {
        onClick();
      }
    }
  };

  const handleSubmenuClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="py-1">
      <div className="flex items-center justify-between">
        <div
          onClick={(e) => handleLinkClick(e, item.href)}
          className={`flex-1 text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary cursor-pointer transition-colors duration-200 uppercase tracking-wide ${
            pathUrl === item.href ? "text-primary" : ""
          }`}
        >
          {item.label}
        </div>
        {item.submenu && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="p-2 hover:bg-primary/10 rounded-full transition-colors duration-200"
          >
            <svg
              className={`h-5 w-5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
      
      <AnimatePresence>
        {item.submenu && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 ml-4 space-y-3">
              {item.submenu.map((subItem, index) => (
                <div
                  key={index}
                  onClick={(e) => handleSubmenuClick(e, subItem.href)}
                  className={`block py-2 text-lg text-dark hover:text-primary dark:text-white dark:hover:text-primary transition-colors duration-200 cursor-pointer uppercase tracking-wide ${
                    pathUrl === subItem.href ? "text-primary" : ""
                  }`}
                >
                  {subItem.label}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeaderLink;
