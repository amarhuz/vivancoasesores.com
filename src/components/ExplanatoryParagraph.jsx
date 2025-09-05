import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
const ExplanatoryParagraph = ({ scrollToContact }) => {
  return <section id="explanatory" className="py-20 md:py-28 bg-brand-navy text-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.3
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">No tienes que afrontar esto sola</h2>
                    <p className="text-xl text-brand-gold mb-8">Estamos aquí para ayudarte en cada paso</p>
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        Como madre soltera, es frustrante lidiar con la incertidumbre cuando tu excónyuge no cumple con su responsabilidad de pago de pensión. En Vivanco Abogados y Consultores, te ofrecemos un servicio de gestión completa de cobro de pensión, no solo activamos la orden judicial para que el banco retenga la pensión de manera eficiente, sino que también te mantenemos informada en cada paso del proceso. Recibirás la tranquilidad de cuidar de tus hijos sin preocupaciones financieras, con la confianza de que estamos luchando por lo que es justo: <span className="font-bold text-brand-gold">La pensión es un derecho de los hijos, no una opción del papá</span>.
                    </p>

                    <Button onClick={scrollToContact} size="lg" className="bg-brand-gold text-white hover:bg-brand-gold/90 rounded-md px-8 py-3 shadow-lg transform hover:scale-105 transition-transform duration-300 font-semibold">
                        AGENDAR CONSULTA LEGAL
                    </Button>
                </motion.div>
            </div>
        </section>;
};
export default ExplanatoryParagraph;