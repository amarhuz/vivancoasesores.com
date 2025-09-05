import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = ({ scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', id: 'value-proposition' },
    { name: 'Testimonios', id: 'empathy' },
    { name: 'Nuestro Plan', id: 'plan' },
    { name: 'Guía Gratuita', id: 'lead-magnet' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || isMenuOpen ? "bg-white shadow-md" : "bg-white/80"
        )}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')}>
              <img
                alt="Logo de Vivanco Abogados y Consultores"
                className="h-12 w-auto"
                src="https://horizons-cdn.hostinger.com/470e0982-a52e-4b4c-871b-879eaaf75c76/029c0f0fa108ee9d2566d88a42e74a35.png"
              />
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-sm font-medium text-brand-navy hover:text-brand-gold transition-colors">
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contacto')} size="sm" className="bg-brand-navy text-white hover:bg-brand-navy/90 rounded-md px-6 shadow-md text-sm font-semibold">
              AGENDAR CONSULTA
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-navy">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[68px] left-0 right-0 bg-white shadow-lg z-40 p-6"
          >
            <nav className="flex flex-col space-y-4 items-center">
              {navLinks.map(link => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-lg font-medium text-brand-navy hover:text-brand-gold transition-colors py-2">
                  {link.name}
                </button>
              ))}
              <Button onClick={() => scrollToSection('contacto')} className="w-full mt-4 bg-brand-gold text-white hover:bg-brand-gold/90 rounded-md py-3 text-base font-semibold">
                AGENDAR CONSULTA
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;