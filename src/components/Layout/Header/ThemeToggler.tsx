"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
        <span className="sr-only">Loading theme toggler</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Icon icon="solar:sun-bold" className="text-2xl text-yellow-500" />
      ) : (
        <Icon icon="solar:moon-bold" className="text-2xl text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggler;
