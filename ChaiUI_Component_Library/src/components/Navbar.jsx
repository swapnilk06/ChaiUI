import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/images/logos/white-mode-logo.png";
import { navItems } from "../constants";
import ThemeToggle from "./ThemeToggle";


const Navbar = ({ onSearchClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleNavbar = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="sticky z-50 top-0 pt-5 pb-5 backdrop-blur-md border-b border-neutral-700/80">
      {/*  Responsive Container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative text-sm">

        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center flex-shrink-0 cursor-pointer">
              <motion.div
                className="p-[2px] rounded-md mr-2"
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
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: "linear-gradient(90deg, #14b8a6, #facc15, #14b8a6)",
                    backgroundSize: "300% 300%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <img src={logo} alt="Logo" className="h-8 w-8 rounded-md" />
                </motion.div>
              </motion.div>

              <span className="text-2xl tracking-tight text-neutral-900 dark:text-slate-200">
                Chai UI
              </span>
            </a>
          </div>

{/* Desktop Menu */}

          <div className="hidden md:flex items-center space-x-12 ml-14">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-neutral-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
          
{/* Desktop Search */}
          
          <div className="hidden md:flex justify-center space-x-12 items-center" >
          <ThemeToggle />
            <motion.div
              className="p-[2px] rounded-md text-slate-300"
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
            >
              <motion.button
                type="button"
                onClick={onSearchClick}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center text-sm font-medium text-muted-foreground py-2 px-4 rounded-md bg-white dark:bg-[#121212] w-fit gap-2"
              >
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="text-neutral-500 font-light dark:text-inherit"
                >
                  <Search className="h-4 w-4" />
                </motion.span>
                <span className="text-foreground/60 hover:text-foreground font-light text-neutral-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-200">
                  Search <span className="hidden xl:inline-block">Components</span>
                </span>
                <kbd className="pointer-events-none hidden sm:flex items-center gap-1 rounded border bg-muted px-1.5 py-1 text-[10px] font-mono font-medium opacity-100 h-6 text-neutral-500 dark:text-inherit">
                  <span className="flex items-center justify-center text-[8px] pt-[1.8px]">⌘</span>
                  <span>+</span>
                  <span className="flex items-center justify-center text-[12px]">K</span>
                </kbd>
              </motion.button>
            </motion.div>
          </div>

{/* Mobile X close Button */}

<div className="flex md:hidden items-center gap-[25px]">
  <ThemeToggle />
  <div className="text-neutral-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-200">
    <button onClick={toggleNavbar}>
      {mobileOpen ? <X /> : <Menu />}
    </button>
  </div>
</div>


        </div>

{/* Mobile Menu */}

        {mobileOpen && (
          <div className="flex flex-col items-center mt-10 md:hidden">
            <ul className="flex flex-col space-y-6 items-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-neutral-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

{/* Mobile Search Button */}
            <div className="mt-8">
              <motion.div
                className="p-[2px] rounded-md text-slate-300"
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
              >
                <motion.button
                type="button"
                onClick={onSearchClick}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center text-sm font-medium text-muted-foreground py-2 px-4 rounded-md bg-white dark:bg-[#121212] w-fit gap-2"
              >
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className=" text-neutral-500 font-light dark:text-inherit"
                >
                  <Search className="h-4 w-4" />
                </motion.span>
                <span className=" text-foreground/60 hover:text-foreground font-light text-neutral-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-200">
                  Search <span className="hidden xl:inline-block">Components</span>
                </span>
                <kbd className="pointer-events-none hidden sm:flex items-center gap-1 rounded border bg-muted px-1.5 py-1 text-[10px] font-mono font-medium opacity-100 h-6 text-neutral-500 dark:text-inherit">
                  <span className="flex items-center justify-center text-[8px] pt-[1.8px]">⌘</span>
                  <span>+</span>
                  <span className="flex items-center justify-center text-[12px]">K</span>
                </kbd>
              </motion.button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;