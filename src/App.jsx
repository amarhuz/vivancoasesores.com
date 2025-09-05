import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stakes from '@/components/Stakes';
import ValueProposition from '@/components/ValueProposition';
import Empathy from '@/components/Empathy';
import Plan from '@/components/Plan';
import ExplanatoryParagraph from '@/components/ExplanatoryParagraph';
import Contact from '@/components/Contact';
import LeadMagnet from '@/components/LeadMagnet';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

function App() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      toast({
        title: "🚧 Esta función aún no está implementada",
        description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt. 🚀",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Vivanco Abogados | Asegura la Pensión de tus Hijos</title>
        <meta name="description" content="Te ayudamos a cobrar la manutención que tus hijos merecen. En Vivanco Abogados y Consultores, aseguramos los pagos de pensión sin complicaciones." />
        <meta property="og:title" content="Vivanco Abogados | Asegura la Pensión de tus Hijos" />
        <meta property="og:description" content="Te ayudamos a cobrar la manutención que tus hijos merecen. En Vivanco Abogados y Consultores, aseguramos los pagos de pensión sin complicaciones." />
      </Helmet>
      
      <div className="min-h-screen bg-brand-background">
        <Header scrollToSection={scrollToSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Hero scrollToContact={() => scrollToSection('contacto')} />
          <Stakes scrollToContact={() => scrollToSection('contacto')} />
          <ValueProposition scrollToContact={() => scrollToSection('contacto')} />
          <Empathy scrollToContact={() => scrollToSection('contacto')} />
          <Plan scrollToContact={() => scrollToSection('contacto')} />
          <ExplanatoryParagraph scrollToContact={() => scrollToSection('contacto')} />
          <LeadMagnet />
          <Contact />
        </main>
        <Footer scrollToContact={() => scrollToSection('contacto')} />
        <Toaster />
      </div>
    </>
  );
}

export default App;