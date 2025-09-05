import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Banknote, CheckCircle, Laptop, Smile } from 'lucide-react';
const ValueProposition = ({ scrollToContact }) => {
  const features = [{
    icon: Banknote,
    text: "Activamos la orden judicial para que el banco retenga."
  }, {
    icon: CheckCircle,
    text: "Liquidamos y cobramos los meses atrasados."
  }, {
    icon: Laptop,
    text: "Gestión 100% remota para tu comodidad."
  }, {
    icon: Smile,
    text: "Tranquilidad financiera para tus hijos y para ti."
  }];
  
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section id="value-proposition" className="py-20 md:py-28 bg-brand-navy text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pensión Asegurada, Tranquilidad Garantizada
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Tu tranquilidad financiera empieza con una consulta.
            </p>
            <motion.ul className="space-y-5 mb-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.5
          }}>
              {features.map((feature, index) => {
              const Icon = feature.icon;
              return <motion.li key={index} className="flex items-start" variants={itemVariants}>
                    <Icon className="h-6 w-6 text-brand-gold mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-base md:text-lg">{feature.text}</span>
                  </motion.li>;
            })}
            </motion.ul>
            <Button onClick={scrollToContact} size="lg" className="bg-brand-gold text-white hover:bg-brand-gold/90 rounded-md px-10 py-6 text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 font-semibold">
              AGENDAR CONSULTA LEGAL
            </Button>
          </motion.div>
          <motion.div className="relative h-80 lg:h-full w-full rounded-lg overflow-hidden shadow-2xl" initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }}>
            <img src="https://horizons-cdn.hostinger.com/470e0982-a52e-4b4c-871b-879eaaf75c76/happy-7361025_1280-J3ANg.jpg" alt="Madre soltera feliz con su hijo, representando la tranquilidad familiar." className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ValueProposition;