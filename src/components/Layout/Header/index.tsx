"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 bg-white dark:bg-gray-900 ${
        sticky ? "shadow-lg py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="relative flex items-center justify-between">
          <div className="w-60 max-w-full">
            <Logo />
          </div>
          
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="lg:hidden p-2 hover:bg-primary/10 rounded-full transition-colors duration-200"
          >
            <Icon
              icon={navbarOpen ? "solar:close-circle-bold" : "solar:menu-dots-bold"}
              className="text-2xl text-dark dark:text-white"
            />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
            
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 hover:bg-primary/10 rounded-full transition-colors duration-200 text-dark dark:text-white"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Icon icon="solar:sun-2-bold" className="text-2xl" />
              ) : (
                <Icon icon="solar:moon-bold" className="text-2xl" />
              )}
            </button>
          </div>

          <AnimatePresence>
            {navbarOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-4 w-64 mt-4 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg lg:hidden"
              >
                <div className="space-y-2">
                  {headerData.map((item, index) => (
                    <MobileHeaderLink key={index} item={item} />
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex items-center gap-2 w-full p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200 text-dark dark:text-white"
                  >
                    <Icon
                      icon={theme === "dark" ? "solar:sun-2-bold" : "solar:moon-bold"}
                      className="text-xl"
                    />
                    <span className="text-sm font-medium">
                      {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
