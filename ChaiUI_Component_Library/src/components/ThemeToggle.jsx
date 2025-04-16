import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Toggle logic
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`size-8 rounded-full flex items-center justify-center transition-all 
        bg-[rgba(39,39,42,0.835)]
        ${theme === 'dark'
          ? 'hover:bg-[hsl(240,3.7%,15.9%)]'
          : 'hover:bg-accent'
        }`}
      aria-label="Toggle Theme"
    >
      <motion.span
        whileTap={{ rotate: 360, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {theme === "dark" ? (
          <Sun className="size-4 flex-shrink-0 text-accent-foreground opacity-70" />
        ) : (
          <Moon className="size-4 flex-shrink-0 text-accent-foreground opacity-70" />
        )}
      </motion.span>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
