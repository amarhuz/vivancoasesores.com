import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
const Hero = ({
  scrollToContact
}) => {
  const {
    toast
  } = useToast();
  const scrollToLeadMagnet = () => {
    const element = document.getElementById('lead-magnet');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
            <img alt="Madre e hija sonriendo, representando la tranquilidad familiar." className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/470e0982-a52e-4b4c-871b-879eaaf75c76/primer-plano-de-sonriente-madre-e-hija-de-pie-juntos-en-el-parque-1-sZYTf.jpg" />
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      ease: "easeOut"
    }} className="relative z-10 container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight">Te ayudamos a cobrar la pensión que tus hijos merecen</h1>
            <p className="text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-8 font-light">Asegura los pagos de manutención sin complicaciones</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                 <Button onClick={scrollToContact} size="lg" className="bg-brand-gold text-white hover:bg-brand-gold/90 rounded-md px-10 py-6 text-lg shadow-lg font-semibold w-full sm:w-auto min-w-[220px]">
                    AGENDAR CONSULTA LEGAL
                </Button>
                 <Button onClick={scrollToLeadMagnet} variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-navy rounded-md px-10 py-6 text-lg shadow-lg font-semibold w-full sm:w-auto min-w-[220px]">
                    VER GUÍA GRATUITA
                </Button>
            </div>
        </motion.div>
    </section>;
};
export default Hero;