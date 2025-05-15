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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Only hide header when scrolling down on desktop
    if (!isMobile && currentScrollY > lastScrollY && currentScrollY > 80) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    
    setSticky(currentScrollY >= 50);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobile]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setNavbarOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ 
          y: showHeader ? 0 : -100,
          height: sticky ? 'auto' : 'auto'
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 z-40 w-full transition-all duration-300 bg-white dark:bg-gray-900 md:block ${
          sticky ? "shadow-lg py-2" : "py-3"
        } ${isMobile ? "hidden" : ""}`}
      >
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="relative flex items-center justify-between" ref={navbarRef}>
            <div className={`${sticky ? "w-48" : "w-56"} max-w-full transition-all duration-300`}>
              <Logo />
            </div>
            
            <div className="hidden lg:flex items-center gap-6">
              {headerData.map((item, index) => (
                <HeaderLink key={index} item={item} />
              ))}
              
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 hover:bg-primary/10 rounded-full transition-colors duration-200 text-dark dark:text-white"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Icon icon="solar:sun-2-bold" className={`${sticky ? "text-xl" : "text-2xl"} transition-all duration-300`} />
                ) : (
                  <Icon icon="solar:moon-bold" className={`${sticky ? "text-xl" : "text-2xl"} transition-all duration-300`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Header */}
      {isMobile && (
        <>
          {/* Mobile Header - Initial State (Same as Desktop) */}
          <motion.header
            initial={{ y: 0, opacity: 1 }}
            animate={{ 
              y: 0,
              opacity: sticky ? 0 : 1
            }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 z-40 w-full transition-all duration-300 bg-white dark:bg-gray-900 md:hidden"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="relative flex items-center justify-between">
                <div className="w-48 max-w-full">
                  <Logo />
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 hover:bg-primary/10 rounded-full transition-colors duration-200 text-dark dark:text-white"
                    aria-label="Toggle dark mode"
                  >
                    {theme === "dark" ? (
                      <Icon icon="solar:sun-2-bold" className="text-xl" />
                    ) : (
                      <Icon icon="solar:moon-bold" className="text-xl" />
                    )}
                  </button>
                  
                  <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="p-2 hover:bg-primary/10 rounded-full transition-colors duration-200 text-dark dark:text-white"
                  >
                    <Icon
                      icon={navbarOpen ? "solar:close-circle-bold" : "solar:menu-dots-bold"}
                      className="text-xl"
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Floating Logo - Appears on Scroll */}
          <motion.div 
            className="fixed top-4 left-4 z-50 md:hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: sticky ? 1 : 0,
              opacity: sticky ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="block">
              <div className="w-14 h-14 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex items-center justify-center overflow-hidden border-2 border-primary transition-all duration-300">
                <Logo smallVersion={true} />
              </div>
            </Link>
          </motion.div>

          {/* Menu Button - Only visible when scrolled */}
          <motion.div 
            className="fixed top-4 right-4 z-50 md:hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: sticky ? 1 : 0,
              opacity: sticky ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="w-10 h-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
            >
              <Icon
                icon={navbarOpen ? "solar:close-circle-bold" : "solar:menu-dots-bold"}
                className="text-xl text-dark dark:text-white"
              />
            </button>
          </motion.div>

          {/* Dark Mode Toggle - Only visible when scrolled */}
          <motion.div 
            className="fixed top-4 right-20 z-50 md:hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: sticky ? 1 : 0,
              opacity: sticky ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Icon icon="solar:sun-2-bold" className="text-xl" />
              ) : (
                <Icon icon="solar:moon-bold" className="text-xl" />
              )}
            </button>
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {navbarOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed top-16 right-4 w-64 max-w-[calc(100vw-2rem)] p-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg md:hidden z-50"
              >
                <div className="space-y-2">
                  {headerData.map((item, index) => (
                    <MobileHeaderLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default Header;
