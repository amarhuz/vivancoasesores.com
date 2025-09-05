import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, Gavel } from 'lucide-react';
const Plan = ({
  scrollToContact
}) => {
  const steps = [{
    icon: Calendar,
    number: 1,
    title: "Agenda tu consulta legal",
    description: "Evaluaremos tu caso sin costo para entender tu situación y trazar un plan."
  }, {
    icon: FileText,
    number: 2,
    title: "Reúne la documentación",
    description: "Te guiaremos para que nos proporciones los documentos necesarios para iniciar."
  }, {
    icon: Gavel,
    number: 3,
    title: "Nosotros nos encargamos",
    description: "Gestionaremos todo el proceso legal para que recibas tu pensión puntualmente."
  }];
  return <section id="plan" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 text-center">
                <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.5
      }} transition={{
        duration: 0.6
      }} className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Tres pasos sencillos para asegurar la pensión de tus hijos</motion.h2>
                <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.5
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-brand-text text-lg mb-12 max-w-2xl mx-auto">
                    Sigue estos simples pasos para garantizar que la pensión de tus hijos llegue a tiempo y sin complicaciones.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-16 relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200" style={{
          zIndex: 0
        }}></div>
                    
                    {steps.map((step, index) => <motion.div key={step.number} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} className="relative z-10 text-center">
                            <div className="flex justify-center items-center mb-6">
                                <div className="w-24 h-24 rounded-full bg-brand-gold text-white flex items-center justify-center ring-8 ring-white">
                                    <span className="text-4xl font-bold">{step.number}</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                            <p className="text-brand-text px-4">{step.description}</p>
                        </motion.div>)}
                </div>

                <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.5
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }}>
                    <Button onClick={scrollToContact} size="lg" className="bg-brand-gold text-white hover:bg-brand-gold/90 rounded-md px-8 py-3 shadow-lg transform hover:scale-105 transition-transform duration-300 font-semibold">
                        AGENDAR CONSULTA LEGAL
                    </Button>
                </motion.div>
            </div>
        </section>;
};
export default Plan;