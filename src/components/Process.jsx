import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileSearch, Gavel, DollarSign } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Consulta Inicial",
      description: "Conversamos sobre tu situación y evaluamos tu caso de manera gratuita.",
      details: "Te escuchamos y analizamos todos los detalles de tu situación para determinar la mejor estrategia legal."
    },
    {
      icon: FileSearch,
      title: "Análisis Legal",
      description: "Revisamos toda la documentación y preparamos la estrategia legal más efectiva.",
      details: "Nuestro equipo examina contratos, sentencias y documentos para construir un caso sólido."
    },
    {
      icon: Gavel,
      title: "Acción Legal",
      description: "Iniciamos los procesos judiciales necesarios para hacer efectivo el cobro.",
      details: "Presentamos demandas, solicitamos embargos y utilizamos todos los recursos legales disponibles."
    },
    {
      icon: DollarSign,
      title: "Cobro Efectivo",
      description: "Recuperamos la pensión alimenticia y aseguramos pagos futuros puntuales.",
      details: "Garantizamos que recibas tanto las pensiones atrasadas como los pagos futuros de manera regular."
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Nuestro Proceso</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un proceso simple y efectivo diseñado para recuperar la pensión alimenticia 
            de tus hijos de manera rápida y segura.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200 rounded-full"></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 lg:max-w-md">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-lg text-slate-600 mb-4">{step.description}</p>
                    <p className="text-slate-500">{step.details}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="flex-1 lg:max-w-md">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <img  
                      alt={`Paso ${index + 1}: ${step.title} - Proceso legal de cobro de pensión alimenticia`}
                      className="rounded-2xl shadow-xl w-full h-64 object-cover"
                     src="https://images.unsplash.com/photo-1528563784587-3d5fc51e8082" />
                    <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl -z-10"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              ¿Listo para recuperar la pensión de tus hijos?
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              No esperes más. Cada día que pasa sin recibir la pensión alimenticia 
              es dinero que tus hijos necesitan y merecen.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
            >
              Iniciar Mi Caso Ahora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;