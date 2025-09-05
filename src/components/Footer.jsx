import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = ({ scrollToContact }) => {
  const { toast } = useToast();
  
  const showToast = () => {
    toast({
      title: "🚧 ¡Función en construcción!",
      description: "Esta función aún no está implementada. ¡Puedes solicitarla en tu próximo mensaje! 🚀"
    });
  };

  const socialLinks = [
    { icon: <Facebook size={24} />, name: 'Facebook' },
    { icon: <Instagram size={24} />, name: 'Instagram' },
    { icon: <Youtube size={24} />, name: 'TikTok' },
    { icon: <MessageCircle size={24} />, name: 'Whatsapp' },
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 items-center text-center lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="flex flex-col items-center lg:items-start"
          >
             <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mb-4">
                <img  
                    alt="Logo de Vivanco Abogados y Consultores en color blanco"
                    className="h-14 w-auto"
                    src="https://horizons-cdn.hostinger.com/470e0982-a52e-4b4c-871b-879eaaf75c76/dce92f655923e767eda18ba1ec768e1d.jpg" />
            </button>
            <p className="text-slate-400">Seguridad para tus hijos, tranquilidad para ti.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-slate-300"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Mail size={18} className="text-brand-gold" />
              <span>vivancoabogadosyconsultores@gmail.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Phone size={18} className="text-brand-gold" />
              <span>+51 991 848 162</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <MapPin size={18} className="text-brand-gold" />
              <span>Trujillo, Perú</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center lg:items-end gap-5"
          >
            <div className="flex space-x-6">
                {socialLinks.map((social) => (
                    <button key={social.name} onClick={showToast} className="text-slate-400 hover:text-white transition-colors duration-300">
                        {social.icon}
                        <span className="sr-only">{social.name}</span>
                    </button>
                ))}
            </div>
             <Button
                onClick={scrollToContact}
                className="bg-brand-gold text-white hover:bg-brand-gold/90 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 font-semibold px-6 py-4 text-base w-full sm:w-auto hidden lg:flex"
            >
                AGENDAR CONSULTA LEGAL
            </Button>
          </motion.div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Vivanco Abogados y Consultores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;