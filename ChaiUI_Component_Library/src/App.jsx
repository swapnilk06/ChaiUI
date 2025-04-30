import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StarsCanvas from './components/StarBg';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';


import './App.css';

const App = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setSearchOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    
		<main className="relative w-full min-h-screen bg-white dark:bg-black">
      <StarsCanvas />
      <Navbar onSearchClick={() => setSearchOpen(true)} />
      <Hero />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

			<Footer />
    </main>
  );
};

export default App;
