import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


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
    <section id="accueil" className="relative w-full min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={(currentSlideData as any).image}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-blue-900/40 to-slate-900/50"></div>
      </div>

      {/* Logo en haut à gauche - toujours visible */}
      <div className="absolute top-8 mt-24 left-16 z-45">
        <img
          src="/logo1.png"
          alt="Greentany Logo"
          className="h-20 w-auto md:h-24 lg:h-28 drop-shadow-lg"
        />
      </div>



      <div ref={containerRef} className="w-full px-4 pb-20 relative z-10">
        <div className="w-full mx-auto">
          {/* Content */}
          <div className="flex flex-col items-center text-center ">
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-8 flex flex-col items-center text-center"
              >

                {currentSlideData.id === 2 ? (
                  <img
                    src="/hero5.png"
                    alt="Slide illustration"
                    className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-lg shadow-xl h-auto object-contain"
                  />
                ) : (
                  <>
                    <motion.h1
                      ref={titleRef}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                    >
                      <span className="text-[#33CC33]">
                        {currentSlideData.title}
                      </span>
                    </motion.h1>

                    <motion.p
                      ref={descriptionRef}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-3xl md:text-4xl text-white font-medium leading-relaxed max-w-3xl"
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