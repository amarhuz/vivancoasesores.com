import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      location: "Santiago",
      rating: 5,
      text: "Después de 2 años sin recibir pensión alimenticia, Vivanco Abogados logró recuperar todo lo adeudado en solo 4 meses. Ahora mis hijos tienen la seguridad financiera que merecen.",
      case: "Recuperación de $2.4M en pensiones atrasadas"
    },
    {
      name: "Carmen Rodríguez",
      location: "Valparaíso",
      rating: 5,
      text: "El equipo de Vivanco me acompañó durante todo el proceso. Su profesionalismo y dedicación fueron excepcionales. Recomiendo sus servicios al 100%.",
      case: "Embargo exitoso de cuentas bancarias"
    },
    {
      name: "Andrea Silva",
      location: "Concepción",
      rating: 5,
      text: "Pensé que nunca iba a recuperar la pensión de mis hijos. Gracias a Vivanco Abogados, ahora recibo puntualmente cada mes y tengo tranquilidad financiera.",
      case: "Retención de salario implementada"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Casos de Éxito</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conoce las experiencias de madres que han recuperado la pensión alimenticia 
            de sus hijos con nuestra ayuda profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="h-8 w-8 text-blue-200 absolute top-4 right-4" />
              
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-4">"{testimonial.text}"</p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-sm font-semibold text-blue-700">{testimonial.case}</p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-800">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Únete a Nuestros Casos de Éxito
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Cada caso es único, pero nuestro compromiso es el mismo: recuperar la pensión 
              alimenticia que tus hijos necesitan y merecen.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-slate-600">Madres ayudadas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$850M</div>
                <p className="text-slate-600">Recuperado en pensiones</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-slate-600">Casos exitosos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3.2</div>
                <p className="text-slate-600">Meses promedio</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;