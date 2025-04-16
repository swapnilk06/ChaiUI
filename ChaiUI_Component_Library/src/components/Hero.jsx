import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["< button />", "< card />", "< bento />", "<__more__ />"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // switch word every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-500">
      <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 gap-12 min-h-screen">

        {/* Heading Block */}
        <div className="flex-1 min-w-0 text-center flex flex-col justify-center items-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-6 max-w-4xl text-4xl md:text-7xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 leading-tight md:leading-[1.1]"
          >
            The perfect component <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, filter: "blur(1px)" }}
                className="relative inline-block px-6 py-3 text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent
                           bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-gradient-move
                           border-4 border-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-purple-500"
              >
                {words[index]} <br />
              </motion.span>
            </AnimatePresence>

            <br />your website needs!
          </motion.h1>

          <div className="z-20 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group"
            >
              <div className="relative rounded-md p-[2px]">
                {/* Static Border (default state) */}
                <div className="absolute inset-0 rounded-md border border-[#27272A] dark:border-white pointer-events-none"></div>

                {/* Animated Gradient Border (on hover) */}
                <motion.div
                  className="absolute inset-0 rounded-md p-[2px] opacity-0 group-hover:opacity-100"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    boxShadow: [
                      "0 0 6px rgba(255,255,255,0.3)",
                      "0 0 12px rgba(255,255,255,0.7)",
                      "0 0 6px rgba(255,255,255,0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: "linear-gradient(135deg, white, #facc15, #22d3ee, white)",
                    backgroundSize: "400% 400%"
                  }}
                />

                {/* The Button */}
                <a
                  href="/components"
                  className="relative flex items-center gap-2 w-fit rounded-md bg-white dark:bg-[#000000]/99

                            text-neutral-700 dark:text-white hover:text- [#27272A] dark:hover:text-white 
                            transition-colors duration-200 sm:px-4 px-2 py-2"
                >
                  Browse Component
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16"></path>
                    <path d="M2 12H22"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center px-4 space-y-5 max-w-4xl mx-auto">
          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 text-center max-w-2xl text-base sm:text-xl tracking-wide text-neutral-700 dark:text-slate-300 antialiased hover:text-[#27272A] dark:hover:text-white transition-colors duration-200"
          >
            Seamless Functionality simple Copy-Paste Solutions with
          </motion.h2>

          {/* Tech Stack Block */}
          <div className="flex justify-center w-full px-4 md:px-6 lg:px-8">
            <div
              className="relative z-20 flex items-center justify-start space-x-4 md:space-x-6 overflow-x-auto no-scrollbar p-3 md:p-4 rounded-2xl bg-white/60 shadow-xl backdrop-blur-lg dark:bg-black/30"
              style={{ scrollbarWidth: "none" }}
            >
              {[
                {
                  label: "ReactJS",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 md:h-8 md:w-8 shrink-0 stroke-1 text-neutral-600 dark:text-neutral-300"
                    >
                      <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                      <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                      <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                      <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                      <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                      <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                      <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                    </svg>
                  )
                },
                {
                  label: "TailwindCSS",
                  icon: (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 md:h-8 md:w-8 shrink-0 stroke-[0.5px] text-neutral-600 dark:text-neutral-300"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                    </svg>
                  )
                },
                {
                  label: "Framer Motion",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 md:h-8 md:w-8 shrink-0 stroke-1 text-neutral-600 dark:text-neutral-300"
                    >
                      <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                      <path d="M20 12l-8 8l-4 -4"></path>
                    </svg>
                  )
                }
              ].map((tech, index) => (
                <div key={index} className="flex items-center space-x-2 md:space-x-3 shrink-0">
                  <span>{tech.icon}</span>
                  <span className="shrink-0 text-xs md:text-sm text-neutral-500 dark:text-neutral-200">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Hero;
