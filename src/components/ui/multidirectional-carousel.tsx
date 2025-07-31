import { motion, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Eye, Grid3X3 } from 'lucide-react';

interface Client {
  name: string;
  image: string;
  category: string;
}

interface MultidirectionalCarouselProps {
  clients: Client[];
  itemsPerPage?: number;
  showViewMore?: boolean;
}

export const MultidirectionalCarousel = ({ 
  clients, 
  itemsPerPage = 8, 
  showViewMore = true 
}: MultidirectionalCarouselProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal');
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(clients.length / itemsPerPage);
  const displayedClients = showAll ? clients : clients.slice(0, itemsPerPage);

  // Animation variants pour le carrousel
  const carouselVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -15,
      rotateX: 5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  // GSAP animations pour les effets de parallaxe
  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.client-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        {
          y: 100,
          opacity: 0,
          rotationX: -20,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      gsap.killTweensOf(cards);
    };
  }, [showAll]);

  const handleShowMore = () => {
    setShowAll(true);
    // Animation de transition
    gsap.to(carouselRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        gsap.to(carouselRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3
        });
      }
    });
  };

  const handleShowLess = () => {
    setShowAll(false);
    // Animation de transition
    gsap.to(carouselRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        gsap.to(carouselRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3
        });
      }
    });
  };

  const handleCardClick = (clientName: string) => {
    const card = document.querySelector(`[data-client="${clientName}"]`) as HTMLElement;
    if (card) {
      // Animation de clic avec effet de particules
      gsap.to(card, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });

      // Effet de particules
      for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full pointer-events-none';
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        card.appendChild(particle);
        
        gsap.to(particle, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          opacity: 0,
          scale: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => particle.remove()
        });
      }
    }
  };

  const toggleDirection = () => {
    setDirection(prev => prev === 'horizontal' ? 'vertical' : 'horizontal');
  };

  return (
    <motion.div
      ref={containerRef}
      variants={carouselVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {/* Contrôles de direction */}
      <div className="flex justify-center mb-6">
        <motion.div
          whileHover="hover"
          variants={buttonVariants}
          className="flex gap-2"
        >
          <Button
            onClick={toggleDirection}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Grid3X3 className="w-4 h-4" />
            {direction === 'horizontal' ? 'Mode Grille' : 'Mode Liste'}
          </Button>
        </motion.div>
      </div>

      {/* Carrousel */}
      <motion.div
        ref={carouselRef}
        className={`grid gap-6 mb-8 ${
          direction === 'horizontal' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2'
        }`}
      >
        {displayedClients.map((client, index) => (
          <motion.div
            key={client.name}
            className="client-card"
            data-client={client.name}
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleCardClick(client.name)}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
          >
            <Card className="h-full rounded-2xl overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              {/* Gradient background avec effet de profondeur */}
              <div className="relative h-48 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-100 flex items-center justify-center overflow-hidden">
                {/* Effet de particules animées */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                </div>
                
                {/* Logo container avec effet de profondeur */}
                <div className="relative z-10 w-28 h-28 rounded-2xl bg-white/90 backdrop-blur-sm p-6 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {client.image ? (
                    <img 
                      src={client.image} 
                      alt={client.name} 
                      className="w-full h-full object-contain filter drop-shadow-lg"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                      {client.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6 bg-gradient-to-b from-white to-slate-50">
                <div className="text-center">
                  <h3 className="font-bold text-xl text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {client.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 text-xs font-medium rounded-full">
                    {client.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Boutons de navigation */}
      {showViewMore && !showAll && clients.length > itemsPerPage && (
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center gap-4 mt-8"
        >
          <motion.div
            whileHover="hover"
            variants={buttonVariants}
          >
            <Button
              onClick={handleShowMore}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              Voir tous nos clients
            </Button>
          </motion.div>
        </motion.div>
      )}

      {showViewMore && showAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.div
            whileHover="hover"
            variants={buttonVariants}
          >
            <Button
              onClick={handleShowLess}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <ChevronUp className="w-5 h-5" />
              Voir moins
            </Button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}; 