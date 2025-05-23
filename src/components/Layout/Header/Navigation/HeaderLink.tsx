"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HeaderItem } from "@/types/menu";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderLinkProps {
  item: HeaderItem;
}

const HeaderLink = ({ item }: HeaderLinkProps) => {
  const pathUrl = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={item.href}
        className={`flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary ${
          pathUrl === item.href ? "text-primary" : ""
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            className={`ml-2 h-5 w-5 transition-transform duration-200 ${
              isHovered ? "rotate-180" : ""
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
        )}
      </Link>
      
      <AnimatePresence>
        {item.submenu && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-dark-2"
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              {item.submenu.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  className={`block px-4 py-2 text-sm text-dark hover:bg-primary/10 hover:text-primary dark:text-white dark:hover:text-primary ${
                    pathUrl === subItem.href ? "bg-primary/10 text-primary" : ""
                  }`}
                  role="menuitem"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderLink;
