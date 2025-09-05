import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Download } from 'lucide-react';
const LeadMagnet = () => {
  const {
    toast
  } = useToast();
  const [email, setEmail] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      toast({
        title: "¡Gracias por tu interés!",
        description: "Tu Ebook está en camino. Revisa tu bandeja de entrada.",
        className: "bg-brand-turquoise text-white"
      });
      setEmail('');
    } else {
      toast({
        title: "Error",
        description: "Por favor, ingresa un correo electrónico válido.",
        variant: "destructive"
      });
    }
  };
  return <section id="lead-magnet" className="py-20 md:py-28 bg-slate-100">
      <div className="container mx-auto px-6">
        <motion.div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto" initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.3
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}>
          <div className="grid md:grid-cols-2 items-center">
            <div className="flex flex-col items-center md:hidden pt-8">
              <motion.img src="https://horizons-cdn.hostinger.com/470e0982-a52e-4b4c-871b-879eaaf75c76/4728ba81bc2a199f593e5c5dbdf40094.png" alt="Portada del Ebook sobre manutención de hijos" className="max-w-[150px] rounded-lg shadow-xl" initial={{
              scale: 0.8,
              opacity: 0
            }} whileInView={{
              scale: 1,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2,
              type: 'spring',
              stiffness: 100
            }} />
            </div>
            <div className="p-8 md:p-12 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">Descarga el PDF gratuito</h2>
              <p className="text-slate-600 mb-6">Y asegura la pensión de tus hijos con nuestra guía práctica.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Tu mejor correo electrónico" className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-turquoise focus:border-transparent transition" required />
                <Button type="submit" size="lg" className="w-full bg-brand-gold text-white hover:bg-brand-gold/90 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 font-semibold">
                  <Download className="h-5 w-5 mr-2" />
                  Descargar Ahora
                </Button>
              </form>
            </div>
            
            <div className="hidden md:flex items-center justify-center bg-slate-50 h-full p-8">
              <motion.img src="https://horizons-cdn.hostinger.com/470e0982-a52e-4b4c-871b-879eaaf75c76/4728ba81bc2a199f593e5c5dbdf40094.png" alt="Portada del Ebook sobre manutención de hijos" className="max-w-[200px] rounded-lg shadow-2xl" initial={{
              scale: 0.8,
              opacity: 0,
              rotate: -5
            }} whileInView={{
              scale: 1,
              opacity: 1,
              rotate: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.4,
              type: 'spring',
              stiffness: 100
            }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default LeadMagnet;