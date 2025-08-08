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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navbarOpen]);

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
        className={`fixed top-0 z-40 w-full transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm md:block ${
          sticky ? "shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] py-1" : "py-2"
        } ${isMobile ? "hidden" : ""}`}
      >
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="relative flex items-center justify-between" ref={navbarRef}>
            <div className={`${sticky ? "w-44" : "w-52"} max-w-full transition-all duration-300`}>
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
                  <Icon icon="solar:sun-2-bold" className={`${sticky ? "text-lg" : "text-xl"} transition-all duration-300`} />
                ) : (
                  <Icon icon="solar:moon-bold" className={`${sticky ? "text-lg" : "text-xl"} transition-all duration-300`} />
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
            className="fixed top-0 z-40 w-full transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm md:hidden shadow-[0_4px_20px_rgb(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]"
          >
            <div className="container mx-auto px-4 py-2">
              <div className="relative flex items-center justify-between">
                <div className="w-44 max-w-full">
                  <Logo />
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 hover:bg-primary/10 rounded-full transition-colors duration-200 text-dark dark:text-white"
                    aria-label="Toggle dark mode"
                  >
                    {theme === "dark" ? (
                      <Icon icon="solar:sun-2-bold" className="text-lg" />
                    ) : (
                      <Icon icon="solar:moon-bold" className="text-lg" />
                    )}
                  </button>
                  
                  <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="p-2 hover:bg-primary/10 rounded-full transition-colors duration-200 text-dark dark:text-white"
                  >
                    <Icon
                      icon={navbarOpen ? "solar:close-circle-bold" : "solar:menu-dots-bold"}
                      className="text-lg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Floating Logo - Appears on Scroll */}
          <motion.div 
            className="fixed top-3 left-3 z-50 md:hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: sticky ? 1 : 0,
              opacity: sticky ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="block">
              <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex items-center justify-center overflow-hidden border-2 border-primary transition-all duration-300">
                <Logo smallVersion={true} />
              </div>
            </Link>
          </motion.div>

          {/* Menu Button - Only visible when scrolled */}
          <motion.div 
            className="fixed top-3 right-3 z-50 md:hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: sticky ? 1 : 0,
              opacity: sticky ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="w-9 h-9 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
            >
              <Icon
                icon={navbarOpen ? "solar:close-circle-bold" : "solar:menu-dots-bold"}
                className="text-lg text-dark dark:text-white"
              />
            </button>
          </motion.div>

          {/* Dark Mode Toggle - Only visible when scrolled */}
          <motion.div 
            className="fixed top-3 right-16 z-50 md:hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: sticky ? 1 : 0,
              opacity: sticky ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Icon icon="solar:sun-2-bold" className="text-lg" />
              ) : (
                <Icon icon="solar:moon-bold" className="text-lg" />
              )}
            </button>
          </motion.div>

          {/* Full Screen Mobile Menu */}
          <AnimatePresence>
            {navbarOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                  onClick={() => setNavbarOpen(false)}
                />
                
                {/* Menu Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="fixed inset-0 z-50 flex items-center justify-center md:hidden"
                >
                  <div className="w-full max-w-sm mx-6 p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-dark dark:text-white mb-2">
                        Menú
                      </h2>
                      <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="space-y-4">
                      {headerData.map((item, index) => (
                        <MobileHeaderLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Tema:
                        </span>
                        <button
                          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                          className="p-3 hover:bg-primary/10 rounded-full transition-colors duration-200 text-dark dark:text-white"
                          aria-label="Toggle dark mode"
                        >
                          {theme === "dark" ? (
                            <Icon icon="solar:sun-2-bold" className="text-xl" />
                          ) : (
                            <Icon icon="solar:moon-bold" className="text-xl" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default Header;
