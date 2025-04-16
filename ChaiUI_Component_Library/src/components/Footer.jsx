import { motion } from "framer-motion";
import logo from "../assets/images/logos/white-mode-logo.png";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "About", href: "/about" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-neutral-100 bg-white/70 backdrop-blur-sm dark:border-neutral-800 dark:bg-black/70 pt-16 z-30 pb-6">
      {/* Responsive Container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-sm">
        {/* Flex container for content — mobile first */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 text-neutral-500 dark:text-neutral-400">

          {/* Logo & Tagline */}
          <div className="flex flex-col items-start flex-1">
            <div className="mb-4 flex items-center">
              <a
                href="/"
                className="relative z-20 flex items-center space-x-2 px-0 py-1 text-sm font-normal text-black dark:text-white"
              >
                <div className="flex items-center flex-shrink-0">
                  <motion.div
                    className="p-[2px] rounded-md"
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
                      backgroundImage: "linear-gradient(135deg, white, #ccc, white)",
                      backgroundSize: "400% 400%"
                    }}
                  >
                    <motion.div
                      className="h-8 w-8 rounded-md overflow-hidden"
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                      <img src={logo} alt="Logo" className="h-8 w-8 rounded-md" />
                    </motion.div>
                  </motion.div>
                  <span className=" pl-2 text-2xl tracking-tight text-neutral-900 dark:text-slate-200">
                    Chai UI
                  </span>
                </div>
              </a>
            </div>
            <div className="text-neutral-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-200">
              Build Something.. Someone make to easy.
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-auto flex flex-wrap gap-6 sm:gap-8 md:gap-10 justify-start md:justify-end">
          {footerLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-xs text-neutral-600 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white sm:text-sm"
            >
              {item.label}
            </a>
          ))}
          </div>
        </div>
      </div>

      {/* Footer ChaiUI Animation Section */}
      <motion.div
        className=" z-50 mt-8 flex h-[15rem] sm:h-[18rem] md:h-[20rem] items-center justify-center motion-safe:transform"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 300 100"
          xmlns="http://www.w3.org/2000/svg"
          className="select-none"
        >
          <defs>
            <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%" />
            <radialGradient id="revealMask" gradientUnits="userSpaceOnUse" r="20%" cx="56.58%" cy="20.87%">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </radialGradient>
            <mask id="textMask">
              <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
            </mask>
          </defs>

          {/* Border Animation Text */}
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            strokeWidth="0.3"
            className="fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800"
            initial={{ strokeDasharray: "1000", strokeDashoffset: "1000" }}
            animate={{ strokeDashoffset: "0" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            whileHover={{ stroke: "#facc15" }}
          >
            Chai UI
          </motion.text>

          {/* Masked Gradient Text */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="url(#textGradient)"
            strokeWidth="0.3"
            mask="url(#textMask)"
            className="fill-transparent font-[helvetica] text-6xl font-bold"
          >
            Chai UI
          </text>
        </svg>
      </motion.div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-neutral-600 hover:text-black dark:text-slate-200 dark:hover:text-white sm:text-sm">
        © 2025 Chai UI Components. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
