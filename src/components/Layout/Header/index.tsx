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
  const [scrollY, setScrollY] = useState(0);
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
    setScrollY(currentScrollY);
    
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

  // Calcular opacidad basada en el scroll
  const getBackgroundOpacity = () => {
    if (scrollY <= 50) {
      return 0; // Transparente en la parte superior
    } else if (scrollY <= 150) {
      // Transición gradual de 0 a 0.95 entre 50px y 150px de scroll
      return Math.min((scrollY - 50) / 100, 1) * 0.95;
    } else {
      return 0.95; // Opacidad completa después de 150px
    }
  };

  const backgroundOpacity = getBackgroundOpacity();
  const isAtTop = scrollY <= 50;

  // Obtener el color de fondo basado en el tema
  const getBackgroundColor = () => {
    if (theme === 'dark') {
      return `rgba(17, 24, 39, ${backgroundOpacity})`; // gray-900
    } else {
      return `rgba(255, 255, 255, ${backgroundOpacity})`; // white
    }
  };

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
        className={`fixed top-0 z-40 w-full transition-all duration-300 backdrop-blur-sm md:block ${
          sticky ? "shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] py-1" : "py-2"
        } ${isMobile ? "hidden" : ""}`}
        style={{
          backgroundColor: getBackgroundColor(),
          backdropFilter: isAtTop ? 'none' : 'blur(8px)',
        }}
      >
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="relative flex items-center justify-between" ref={navbarRef}>
            <div className={`${sticky ? "w-44" : "w-52"} max-w-full transition-all duration-300`}> 
              {isAtTop ? <Logo /> : <Logo smallVersion = {true} />}
            </div>
            
            <div className="hidden lg:flex items-center gap-6">
              {headerData.map((item, index) => (
                <HeaderLink key={index} item={item} isAtTop={isAtTop} />
              ))}
              
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 hover:bg-primary/10 rounded-full transition-colors duration-200 ${
                  isAtTop ? 'text-white hover:bg-white/20' : 'text-dark dark:text-white'
                }`}
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
            className="fixed top-0 z-40 w-full transition-all duration-300 backdrop-blur-sm md:hidden shadow-[0_4px_20px_rgb(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]"
            style={{
              backgroundColor: getBackgroundColor(),
              backdropFilter: isAtTop ? 'none' : 'blur(8px)',
            }}
          >
            <div className="container mx-auto px-4 py-2">
              <div className="relative flex items-center justify-between">
                <div className="w-36 sm:w-44 max-w-full">
                  <Logo />
                </div>
                
                <div className="flex items-center gap-4 flex-shrink-0">
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className={`p-2 hover:bg-primary/10 rounded-full transition-colors duration-200 ${
                      isAtTop ? 'text-white hover:bg-white/20' : 'text-dark dark:text-white'
                    }`}
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
                    className={`p-2 hover:bg-primary/10 rounded-full transition-colors duration-200 ${
                      isAtTop ? 'text-white hover:bg-white/20' : 'text-dark dark:text-white'
                    }`}
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
                <Logo smallVersion={true} version={1}/>
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

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-10 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        <a
          href="https://wa.me/573208339347"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label="Contactar por WhatsApp"
        >
          <div className="relative group">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse" />
            
            {/* Main button */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110">
              <svg 
                className="w-7 h-7 md:w-8 md:h-8 text-white" 
                viewBox="0 0 175.216 175.552"
                fill="currentColor"
              >
                <defs>
                  <linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#57d163"/>
                    <stop offset="1" stopColor="#23b33a"/>
                  </linearGradient>
                  <filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" colorInterpolationFilters="sRGB">
                    <feGaussianBlur stdDeviation="3.531"/>
                  </filter>
                </defs>
                <path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"/>
                <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/>
                <path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/>
                <path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/>
                <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
              </svg>
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              ¡Escríbeme!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </a>
      </motion.div>
    </>
  );
};

export default Header;
