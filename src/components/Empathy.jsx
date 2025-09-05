import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const Empathy = ({ scrollToContact }) => {
  const testimonials = [{
    name: "Ana López",
    text: "Gracias a Vivanco Abogados, finalmente recibí la pensión que mis hijos merecen. Me sentía perdida, pero su gestión fue rápida y efectiva. Me acompañaron en cada paso."
  }, {
    name: "Carla Fuentes",
    text: "Después de meses de incertidumbre, el equipo de Vivanco logró asegurar el pago mensual. Su profesionalismo me dio la tranquilidad que necesitaba. ¡Totalmente recomendados!"
  }, {
    name: "Sofía Martínez",
    text: "No solo recuperaron los pagos atrasados, sino que establecieron un sistema para que no vuelva a ocurrir. Estoy muy agradecida por su dedicación y empatía."
  }];
  return <section id="empathy" className="py-20 md:py-28 bg-brand-background">
      <div className="container mx-auto px-6">
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
        duration: 0.7
      }} className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Entendemos lo que estás pasando</h2>
          <p className="text-brand-text text-lg mb-12">
            Sabemos que enfrentar la falta de pago de pensión puede ser desalentador, pero estamos aquí para ofrecerte soluciones claras y efectivas.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award className="h-10 w-10 text-brand-gold mx-auto mb-2" />
            <p className="font-bold text-3xl text-brand-navy">100+</p>
            <p className="text-brand-text">Casos atendidos</p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="bg-white p-6 rounded-lg shadow-md text-center">
            <Star className="h-10 w-10 text-brand-gold mx-auto mb-2" />
            <p className="font-bold text-3xl text-brand-navy">95%</p>
            <p className="text-brand-text">Éxito conseguido</p>
          </motion.div>
        </div>

        <motion.div initial={{
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
        delay: 0.5
      }}>
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full max-w-2xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1 h-full">
                  <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col h-full border-t-4 border-brand-gold relative">
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-navy/10" />
                    <div className="flex-grow">
                      <p className="text-brand-text italic mb-6 text-base">
                        “{testimonials[0].text}”
                      </p>
                    </div>
                    <div className="flex items-center mt-4">
                      <img alt={testimonials[0].name} className="w-12 h-12 rounded-full object-cover mr-4" src="https://horizons-cdn.hostinger.com/470e0982-a52e-4b4c-871b-879eaaf75c76/1-pS1MO.jpg" />
                      <div>
                        <p className="font-bold text-brand-navy">{testimonials[0].name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1 h-full">
                  <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col h-full border-t-4 border-brand-gold relative">
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-navy/10" />
                    <div className="flex-grow">
                      <p className="text-brand-text italic mb-6 text-base">
                        “{testimonials[1].text}”
                      </p>
                    </div>
                    <div className="flex items-center mt-4">
                      <img alt={testimonials[1].name} className="w-12 h-12 rounded-full object-cover mr-4" src="https://horizons-cdn.hostinger.com/470e0982-a52e-4b4c-871b-879eaaf75c76/https___s3.amazonaws.com_arc-authors_elcomercio_2276b083-1568-4136-b968-da1fd6ea5ae3-eOTGy.jpg" />
                      <div>
                        <p className="font-bold text-brand-navy">{testimonials[1].name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1 h-full">
                  <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col h-full border-t-4 border-brand-gold relative">
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-navy/10" />
                    <div className="flex-grow">
                      <p className="text-brand-text italic mb-6 text-base">
                        “{testimonials[2].text}”
                      </p>
                    </div>
                    <div className="flex items-center mt-4">
                      <img alt={testimonials[2].name} className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1598554563873-55ef9dd8428b" />
                      <div>
                        <p className="font-bold text-brand-navy">{testimonials[2].name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex bg-white/80 hover:bg-white border-brand-gold text-brand-gold" />
            <CarouselNext className="hidden sm:flex bg-white/80 hover:bg-white border-brand-gold text-brand-gold" />
          </Carousel>
        </motion.div>
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
        duration: 0.7,
        delay: 0.8
      }} className="text-center mt-16">
          <Button onClick={scrollToContact} size="lg" className="bg-brand-gold text-white hover:bg-brand-gold/90 rounded-md px-8 py-3 shadow-lg transform hover:scale-105 transition-transform duration-300 font-semibold">
            AGENDAR CONSULTA LEGAL
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default Empathy;