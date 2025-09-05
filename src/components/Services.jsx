import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Gavel, CreditCard, Phone, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Análisis de Caso",
      description: "Evaluamos tu situación legal y determinamos la mejor estrategia para recuperar la pensión alimenticia.",
      features: ["Consulta inicial gratuita", "Revisión de documentos", "Estrategia personalizada"]
    },
    {
      icon: Gavel,
      title: "Gestión Legal Completa",
      description: "Nos encargamos de todos los trámites legales necesarios para hacer efectivo el cobro de la pensión.",
      features: ["Demandas judiciales", "Seguimiento de procesos", "Representación legal"]
    },
    {
      icon: CreditCard,
      title: "Cobro Efectivo",
      description: "Utilizamos todos los mecanismos legales disponibles para garantizar el pago de la pensión alimenticia.",
      features: ["Embargo de cuentas", "Retención de salarios", "Liquidación de deudas"]
    },
    {
      icon: Phone,
      title: "Asesoría Continua",
      description: "Te acompañamos durante todo el proceso con asesoría legal permanente y actualizada.",
      features: ["Comunicación directa", "Actualizaciones del caso", "Soporte legal 24/7"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Servicios Especializados</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ofrecemos una gestión completa y profesional para que recuperes la pensión alimenticia 
            de tus hijos de manera efectiva y sin complicaciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold gradient-text">¿Por qué elegir Vivanco Abogados?</h3>
            </div>
            <p className="text-lg text-slate-600 mb-6">
              Entendemos la frustración de las madres solteras cuando no reciben la pensión alimenticia. 
              Nuestro equipo especializado se encarga de todo el proceso legal para que tú puedas 
              concentrarte en lo más importante: cuidar de tus hijos.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">+500</div>
                <p className="text-slate-600">Casos exitosos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <p className="text-slate-600">Tasa de éxito</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-slate-600">Años de experiencia</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;