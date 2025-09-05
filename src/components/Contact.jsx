import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleSubmit = e => {
    e.preventDefault();
    toast({
      title: "¡Consulta agendada!",
      description: "Gracias por contactarnos. Revisaremos tu caso y te contactaremos pronto.",
      className: "bg-brand-turquoise text-white"
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contacto" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Agenda tu Consulta Legal con el 75% de Descuento</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Da el primer paso hoy. Completa el formulario y nuestro equipo se pondrá en contacto contigo para evaluar tu caso ¡por solo 50 SOLES!</p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="max-w-xl mx-auto bg-slate-50 p-6 sm:p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-blue mb-2">Nombre completo</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-turquoise focus:border-transparent transition" placeholder="Ana López" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-blue mb-2">Correo electrónico</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-turquoise focus:border-transparent transition" placeholder="ana.lopez@email.com" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-blue mb-2">Teléfono</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-turquoise focus:border-transparent transition" placeholder="+51 9 123 456 789" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-blue mb-2">Cuéntanos brevemente tu caso</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-turquoise focus:border-transparent transition resize-none" placeholder="Ej: Llevo 6 meses sin recibir la pensión de mis dos hijos..." />
                </div>
                <Button type="submit" className="w-full bg-brand-gold text-white hover:bg-brand-gold/90 text-lg py-3 shadow-lg transform hover:scale-105 transition-transform duration-300 font-semibold">
                    <Send className="h-5 w-5 mr-2" />
                    Agendar mi consulta ahora
                </Button>
            </form>
        </motion.div>
      </div>
    </section>;
};
export default Contact;