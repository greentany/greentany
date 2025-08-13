import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, ShieldCheck, BarChart2, Users, ClipboardCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  const imageRef = useRef<HTMLDivElement>(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      // Pas de badge demandé
      title: "CABINET DE CONSEIL",
      description: "Qualité - Santé et sécurité au travail - Environnement - RSE - Sécurité alimentaire",
      image: "/hero.png",
    },
    {
      id: 2,
      badge: "Exportation mondiale",
      title: "PRODUCTEUR ET GROSSISTE D'EPICES D'ORIGINE MADAGASCAR",
      description: "Exportation dans le Monde entier depuis Madagascar",
      image: "/hero2.png",
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={(currentSlideData as any).image}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-blue-900/40 to-slate-900/50"></div>
      </div>



      <div ref={containerRef} className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="flex flex-col items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-8 flex flex-col items-center text-center"
              >
                {currentSlideData.badge && (
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-teal-100 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-400/30 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 animate-pulse"></div>
                    <span className="text-sm font-semibold text-blue-700">{currentSlideData.badge}</span>
                  </div>
                )}

                {currentSlideData.id === 2 ? (
                  <img
                    src="/hero5.png"
                    alt="Slide illustration"
                    className="w-full max-w-3xl rounded-lg shadow-xl"
                  />
                ) : (
                  <>
                    <motion.h1
                      ref={titleRef}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    >
                      <span className="text-green-600">
                        {currentSlideData.title}
                      </span>
                    </motion.h1>

                    <motion.p
                      ref={descriptionRef}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-2xl text-white font-medium leading-relaxed max-w-2xl"
                    >
                      {currentSlideData.description}
                    </motion.p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;