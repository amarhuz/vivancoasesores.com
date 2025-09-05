import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { XCircle, CalendarOff, PiggyBank, Wallet, Frown, Scale } from 'lucide-react';

const Stakes = ({ scrollToContact }) => {
  const stakes = [
    { text: "Tu ex no cumple con la pensión", icon: XCircle },
    { text: "Meses de atrasos acumulados", icon: CalendarOff },
    { text: "Falta de recursos para tus hijos", icon: PiggyBank },
    { text: "Incertidumbre financiera cada mes", icon: Wallet },
    { text: "Sentimientos de frustración", icon: Frown },
    { text: "Injusticia por el incumplimiento", icon: Scale }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="stakes" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.6 }} 
          className="text-3xl md:text-4xl font-bold text-brand-navy mb-4"
        >
          Que tus hijos reciban lo que les corresponde
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="text-lg md:text-xl text-brand-text max-w-3xl mx-auto mb-16"
        >
          No dejes que la falta de pago afecte la estabilidad de tus hijos, permítenos gestionar el proceso y evita el estrés que esto trae:
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {stakes.map((stake, index) => {
            const Icon = stake.icon;
            return (
              <motion.div 
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="bg-brand-background rounded-xl p-8 flex flex-col items-center justify-start text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="bg-brand-gold/10 rounded-full p-4 mb-6 inline-flex">
                  <Icon className="h-12 w-12 text-brand-gold" />
                </div>
                <p className="text-brand-navy text-lg font-semibold">{stake.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button onClick={scrollToContact} size="lg" className="bg-brand-navy text-white hover:bg-brand-navy/90 rounded-md px-10 py-6 text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 font-semibold">
            AGENDAR CONSULTA LEGAL
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stakes;