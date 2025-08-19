import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Map } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Cta from '@/components/Cta';
import { useState, useEffect } from 'react';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

// Composant pour le texte dynamique
const DynamicText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const terminaisons = [
    "une formation",
    "la réalisation d'un audit",
    "une démarche de certification",
    "une externalisation",
    "des informations sur nos produits"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % terminaisons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [terminaisons.length]);
  
  return terminaisons[currentIndex];
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Téléphone',
    details: ['+261 34 28 449 51', '+261 32 04 463 65'],
    description: 'Disponible 7j/7'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['contact@greentany.com'],
    description: 'Réponse sous 24h'
  },
  {
    icon: MapPin,
    title: 'Adresse',
    details: ['Lot II H 12 QA Bis', 'Ankerana Ankadindramamy', 'Antananarivo - 101 Madagascar'],
    description: 'Siège social'
  },
  {
    icon: Clock,
    title: 'Horaires',
    details: ['Lundi - Vendredi: 8h - 17h', 'Samedi: 8h - 12h'],
    description: 'Service client'
  }
];

const ContactPage = () => {
  const containerRef = useGSAPAnimations();
  return (
    <div ref={containerRef} className="min-h-screen pt-20 bg-gradient-to-b from-[#f8fafc] via-[#f4f7fb] to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden section-gsap">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: "url('/bgcontact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        {/* Logo en haut à gauche - toujours visible */}
      <div className="absolute top-8 mt-24 left-16 z-45">
        <img
          src="/logo1.png"
          alt="Greentany Logo"
          className="h-20 w-auto md:h-24 lg:h-28 drop-shadow-lg"
        />
      </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Contactez-nous</span>
            </div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Contactez-nous
            </motion.h1>
            
            <motion.p 
              className="text-xl text-[#FF6600] max-w-3xl mx-auto font-normal italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Vous êtes curieux, vous souhaitez avoir plus d’informations sur notre société? Nous vous invitons à nous contacter par email ou par téléphone. Nous ne manquerons pas de vous répondre dans les plus brefs délais.
            </motion.p>
          </motion.div>
        </div>
      </section>
             {/* Section avec image et texte dynamique */}
       <section className="container mx-auto px-4 py-16 section-gsap">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div className="flex justify-center lg:justify-end">
             <img
               src="/contact1.jpg"
               alt="Contact Greentany"
               className="w-full max-w-lg h-auto rounded-2xl shadow-xl"
             />
           </div>
           <div className="space-y-6">
             <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
               Vous pouvez demander un devis pour
             </h3>
             <div className="h-16 flex items-center">
               <span className="text-3xl md:text-3xl lg:text-4xl font-semibold text-[#33CC33]">
                 <DynamicText />
               </span>
             </div>
           </div>
           
         </div>
       </section>
      

      {/* Quick Contact Cards */}
      <section className="py-16 bg-transparent section-gsap">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: 'Appelez-nous',
                info: '+261 34 28 449 51',
                subinfo: 'Lun-Ven 8h-17h'
              },
              {
                icon: Mail,
                title: 'Écrivez-nous',
                info: 'contact@greentany.com',
                subinfo: 'Réponse sous 24h'
              },
              {
                icon: MapPin,
                title: 'Visitez-nous',
                info: 'Toamasina, Madagascar',
                subinfo: 'Sur rendez-vous'
              },
              {
                icon: Clock,
                title: 'Horaires',
                info: 'Lun-Ven: 8h-17h',
                subinfo: 'Sam: 8h-12h'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-8 bg-white/80 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 flex flex-col items-center min-h-[220px]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full flex items-center justify-center mb-5 shadow-md">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                {item.title === 'Appelez-nous' ? (
                  <a href="tel:+261342844951" className="text-primary font-medium text-base hover:underline">+261 34 28 449 51</a>
                ) : item.title === 'Écrivez-nous' ? (
                  <a href="mailto:contact@greentany.com" className="text-primary font-medium text-base hover:underline">contact@greentany.com</a>
                ) : (
                  <p className="text-primary font-medium text-base">{item.info}</p>
                )}
                <p className="text-sm text-gray-500 mt-1">{item.subinfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section (info + map) */}
      <section className="py-20 bg-gradient-to-b from-white via-[#f8fafc] to-[#f1f5f9] section-gsap">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prêt à améliorer votre conformité et qualité ? Notre équipe d'experts 
              est là pour vous accompagner dans tous vos projets.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Prenons contact
                </h3>
                <p className="text-muted-foreground mb-8">
                  GREENTANY Consulting a l'ambition de relever les défis et s'engage à offrir 
                  à ses clients dans un premier temps un diagnostic général de la performance 
                  et de la conformité, en fonction des résultats d'une action d'un spécialiste 
                  dans les domaines concernés et tout cela à un coût raisonnable et compétitif.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="h-full hover:shadow-brand transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-lg flex items-center justify-center mb-3">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg">{info.title}</CardTitle>
                        <CardDescription>{info.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            info.title === 'Téléphone' ? (
                              <a key={idx} href={`tel:${detail.replace(/\s+/g, '')}`} className="text-sm font-medium text-blue-600 hover:underline block">{detail}</a>
                            ) : info.title === 'Email' ? (
                              <a key={idx} href={`mailto:${detail}`} className="text-sm font-medium text-blue-600 hover:underline block">{detail}</a>
                            ) : (
                              <p key={idx} className="text-sm font-medium text-foreground">{detail}</p>
                            )
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg border border-gray-100 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Map className="w-6 h-6 text-primary" />
                    Notre Localisation
                  </CardTitle>
                  <CardDescription>
                    Retrouvez-nous à notre siège social à Antananarivo, Madagascar.
                  </CardDescription>
                </CardHeader>
                                 <CardContent className="space-y-6">
                   <div className="text-lg text-gray-700 font-medium mb-2">
                     Toamasina - 501 Madagascar
                   </div>
                   <div className="h-56 rounded-xl overflow-hidden border border-indigo-100">
                     <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12147.5!2d49.3954!3d-18.1499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f0b3b3b3b3b3b3%3A0x21f0b3b3b3b3b3b3!2sToamasina%2C%20Madagascar!5e0!3m2!1sfr!2sfr!4v1234567890"
                       width="100%"
                       height="100%"
                       style={{ border: 0 }}
                       allowFullScreen
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Carte de Toamasina, Madagascar"
                     ></iframe>
                   </div>
                 </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta 
        title="Besoin d'un accompagnement personnalisé ?"
        description="Notre équipe d'experts est prête à vous accompagner dans tous vos projets qualité et conformité"
        primaryButtonText="Demander un devis"
        primaryButtonLink="/contact"
        secondaryButtonText="Appeler maintenant"
        secondaryButtonLink="tel:+261342844951"
      />
    </div>
  );
};

export default ContactPage;