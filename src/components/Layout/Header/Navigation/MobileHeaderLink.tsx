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

  const handleClick = () => {
    if (!item.submenu && onClick) {
      onClick();
    }
  };

  return (
    <div className="py-2">
      <div className="flex items-center justify-between">
        <Link
          href={item.submenu ? "#" : item.href}
          onClick={() => {
            item.submenu ? setIsOpen(!isOpen) : handleClick();
          }}
          className={`text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary ${
            pathUrl === item.href ? "text-primary" : ""
          }`}
        >
          {item.label}
        </Link>
        {item.submenu && (
          <button
            onClick={() => setIsOpen(!isOpen)}
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
            <div className="mt-2 ml-4 space-y-2">
              {item.submenu.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  onClick={onClick}
                  className={`block py-2 text-sm text-dark hover:text-primary dark:text-white dark:hover:text-primary ${
                    pathUrl === subItem.href ? "text-primary" : ""
                  }`}
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

export default MobileHeaderLink;
