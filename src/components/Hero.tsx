import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, BookOpen, ShieldCheck, BarChart2, Users, ClipboardCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "Depuis 2008 - Expertise confirmée",
      title: "Conformité et Qualité au service de votre entreprise",
      description: "Consultants experts en sécurité alimentaire et normes sociales. Plus de 200 missions réalisées avec succès depuis 2008.",
      image: "/images1.jpg",
      stats: [
        { icon: BarChart2, value: "200+", label: "Missions réalisées", color: "blue" },
        { icon: Users, value: "98%", label: "Clients satisfaits", color: "teal" },
        { icon: ClipboardCheck, value: "15+", label: "Secteurs d'activité", color: "emerald" }
      ],
      ctaPrimary: {
        text: "Découvrir Greentany Consulting",
        link: "/greentany-consulting"
      },
      ctaSecondary: {
        text: "Nous contacter",
        link: "/contact"
      }
    },
    {
      id: 2,
      badge: "Exportation mondiale",
      title: "PRODUCTEUR ET GROSSISTE D'EPICES D'ORIGINE MADAGASCAR",
      description: "Exportation dans le Monde entier depuis Madagascar",
      image: "/export-hero.jpg",
      stats: [
        { icon: BarChart2, value: "2016", label: "Année de création", color: "emerald" },
        { icon: Users, value: "1000+", label: "Paysans partenaires", color: "teal" },
        { icon: ClipboardCheck, value: "50+", label: "Pays d'exportation", color: "blue" }
      ],
      ctaPrimary: {
        text: "Découvrir Greentany Export",
        link: "/greentany-export"
      },
      ctaSecondary: {
        text: "Nous contacter",
        link: "/contact"
      }
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds

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
          src={currentSlideData.image} 
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-blue-900/40 to-slate-900/50"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>


      <div ref={containerRef} className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 flex flex-col items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-teal-100 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-400/30 shadow-lg"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-700">{currentSlideData.badge}</span>
              </motion.div>

              <motion.h1
                key={`title-${currentSlide}`}
                ref={titleRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800">
                  {currentSlideData.title}
                </span>
              </motion.h1>

              <motion.p
                key={`desc-${currentSlide}`}
                ref={descriptionRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white leading-relaxed max-w-2xl"
              >
                {currentSlideData.description}
              </motion.p>

              {/* Stats */}
              <motion.div 
                key={`stats-${currentSlide}`}
                ref={statsRef} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-6 pt-4 justify-center"
              >
                {currentSlideData.stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="flex items-center gap-3 stat-item bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30`}>
                      <stat.icon className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-slate-300 text-sm">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                key={`cta-${currentSlide}`}
                ref={ctaRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button asChild className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400/30">
                  <Link to={currentSlideData.ctaPrimary.link}>
                    {currentSlideData.ctaPrimary.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button variant="outline" asChild className="border-2 border-blue-400/40 text-blue-500 hover:bg-blue-500/20 hover:border-blue-400/60 px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm">
                  <Link to={currentSlideData.ctaSecondary.link}>
                    {currentSlideData.ctaSecondary.text}
                  </Link>
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>


        </div>
      </div>

    </section>
  );
};

export default Hero;